/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react';
import Relay from 'react-relay';
import Offer_Item from './Offer_item';

class Offer_List extends React.Component
{
  renderOffer( )
  {
    return this.props.Viewer.Offers.edges.map(edge =>
      <Offer_Item
        key={edge.node.id}
        offer={edge.node}
        Viewer={this.props.Viewer}
      />
    );
  }

  render( )
  {
    return (
      <div>
          { this.renderOffer( ) }
      </div>
    );
  }
}

export default Relay.createContainer( Offer_List, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        Offers(first: 2147483647) {
          edges {
            node {
              id,
              ${Offer_Item.getFragment('Offer')},
            },
          },
        },
        ${Offer_Item.getFragment('Viewer')},
      }
    `,
  },
});
