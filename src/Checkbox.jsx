import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import chainedFunction from 'chained-function';
import styles from './index.styl';

class Checkbox extends PureComponent {
    static propTypes = {
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        defaultIndeterminate: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        defaultIndeterminate: false
    };

    fields = {
        checkbox: null
    };

    get checked() {
        return this.fields.checkbox.checked;
    }

    get indeterminate() {
        return this.fields.checkbox.indeterminate;
    }

    actions = {
        onChange: () => {
            if (typeof (this.props.indeterminate) !== 'undefined') {
                this.fields.checkbox.indeterminate = this.props.indeterminate;
            }
        }
    }

    render() {
        const {
            className,
            children,
            disabled,
            defaultIndeterminate,
            ...props
        } = this.props;

        const onChange = props.onChange || function() {};
        delete props.onChange;
        delete props.indeterminate;

        return (
            <label
                className={classNames(
                    className,
                    styles['control-checkbox'],
                    { [styles.disabled]: disabled }
                )}
            >
                <input
                    {...props}
                    type="checkbox"
                    disabled={disabled}
                    className={styles['input-checkbox']}
                    ref={node => {
                        this.fields.checkbox = node;
                        const indeterminate = (typeof (this.props.indeterminate) !== 'undefined') ? this.props.indeterminate : defaultIndeterminate;
                        node && (this.fields.checkbox.indeterminate = indeterminate);
                    }}
                    onChange={chainedFunction(
                        this.actions.onChange,
                        onChange
                    )}
                />
                <i className={styles['control-indicator']} />
                <span className={styles.controlText}>{ children }</span>
            </label>
        );
    }
}

export default Checkbox;
