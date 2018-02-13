import chainedFunction from 'chained-function';
import ensureArray from 'ensure-array';
import PropTypes from 'prop-types';
import React, { cloneElement, PureComponent } from 'react';
import Checkbox from './Checkbox';

class CheckboxGroup extends PureComponent {
    static propTypes = {
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        value: PropTypes.arrayOf(PropTypes.any),
        defaultValue: PropTypes.arrayOf(PropTypes.any)
    };

    static defaultProps = {
        disabled: false
    };

    state = {
        value: ensureArray(this.props.value || this.props.defaultValue)
    };

    get value() {
        return this.state.value;
    }

    handleChange = (value, event) => {
        let newValue;
        if (event.target.checked) {
            newValue = this.state.value.concat(value);
        } else {
            newValue = this.state.value.filter(v => (v !== value));
        }

        if (this.props.value !== undefined) {
            // Controlled component
            this.setState({ value: ensureArray(this.props.value) });
        } else {
            // Uncontrolled component
            this.setState({ value: newValue });
        }

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(newValue, event);
        }
    };

    renderChildren = (children) => {
        const mapChild = (child) => {
            if (!React.isValidElement(child) || !child.props) {
                return child;
            }

            if (child.type === CheckboxGroup) {
                // No nested checkbox groups
                return child;
            }

            if (child.type === Checkbox) {
                return cloneElement(child, {
                    checked: this.state.value.indexOf(child.props.value) >= 0,
                    disabled: this.props.disabled || child.props.disabled,
                    onChange: chainedFunction(
                        child.props.onChange,
                        (event) => {
                            this.handleChange(child.props.value, event);
                        }
                    )
                });
            }

            if (child.props.children && typeof child.props.children === 'object') {
                return cloneElement(child, {
                    children: this.renderChildren(child.props.children)
                });
            }

            return child;
        };

        if (Array.isArray(children)) {
            return React.Children.map(children, mapChild);
        } else {
            return mapChild(children);
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined) {
            this.setState({
                value: ensureArray(nextProps.value)
            });
        }
    }

    render() {
        return this.renderChildren(this.props.children);
    }
}

export default CheckboxGroup;
