material-ui-credit-card-icons
=========================

Library with credit card icons for [Material-UI](http://www.material-ui.com/#/). Initially created for use in [Universal Relay Boilerplate](https://github.com/codefoundries/UniversalRelayBoilerplate) by [Code Foundries](http://codefoundries.com/).

## Installation

```shell
  npm install material-ui-credit-card-icons --save
```

## Versions

For React 0.14 and Material-UI 0.14 please use version 2.
For React 15 and Material-UI 0.15 please use version 3 and above.

## Usage

```javascript
import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

import {
  Icon_Visa,
  Icon_MasterCard
} from 'material-ui-credit-card-icons';

class MyComponent extends React.Component
{
  render( )
  {
    return(
      <div>
        <IconButton><Icon_Visa /></IconButton>
        <IconButton><Icon_MasterCard /></IconButton>
      </div>
    );
  }
}

```

For more information:

* For list of icons refer to [the src folder](src/).

* [Live demo](http://universal-relay-boilerplate.herokuapp.com/mui/icons_credit_cards).

* [Source Code](https://github.com/codefoundries/UniversalRelayBoilerplate/blob/master/units/starter-kit-example-mui/webapp/components/MUI_Icons_CountryFlags.jsx) of live demo.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Check out [existing issues and help wanted](https://github.com/codefoundries/material-ui-credit-card-icons/issues).


## Release History

[Releases on Github project](https://github.com/codefoundries/material-ui-credit-card-icons/releases/).
