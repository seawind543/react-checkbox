# react-checkbox [![build status](https://travis-ci.org/trendmicro-frontend/react-checkbox.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-checkbox) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-checkbox/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-checkbox?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-checkbox.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-checkbox/)

React Checkbox

Demo: https://trendmicro-frontend.github.io/react-checkbox

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-checkbox](https://github.com/trendmicro-frontend/react-checkbox):

  ```
  npm install --save react @trendmicro/react-checkbox
  ```

2. At this point you can import `@trendmicro/react-checkbox` and its styles in your application as follows:

  ```js
  import Checkbox from '@trendmicro/react-checkbox';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-checkbox/dist/react-checkbox.css';
  ```

## Usage

```js
// Basic
<Checkbox />

// Checked
<Checkbox defaultChecked />

// Partial checked
<Checkbox defaultIndeterminate />

// Partial checked. Fixed indeterminate status (Do not change by click)
<Checkbox indeterminate />

// Disabled
<Checkbox disabled />

// With Label
<label className="checkbox">
    <Checkbox />
    Normal
</label>

// Get checkbox checked status
<Checkbox 
    ref={node => {
        this.checkbox = node;
    }}
/>
// Get checked status by this.checkbox.checked
```


## API

### Properties

Name | Type | Default | Description
:--- | :--- | :------ | :----------

<table>
    <thead>
        <tr>
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Default</th>
            <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>defaultChecked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Specify default checked status for checkbox</td>
        </tr>
        <tr>
            <td>defaultIndeterminate</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Specify default indeterminate status for checkbox</td>
        </tr>
        <tr>
            <td>indeterminate</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Force indeterminate status for checkbox</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Specify disabled status for checkbox</td>
        </tr>
  </tbody>
</table>


## License

MIT
