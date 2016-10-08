/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react';
import Relay from 'react-relay';


class Offer_Item extends React.Component
{
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };



  render( )
  {

    return (
      <div>
        
      </div>
    );
  }
}

export default Relay.createContainer( Offer_Item, {
  fragments: {
    Offer: () => Relay.QL`
      fragment on Offer {
        id,
        Offer_name,
      }
    `,
  },
} );
