import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import HomeWithoutC from './homeWithoutC';
import HomeWithC from './homeWithC';
class Home extends Component {
 static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };
  render() {
     if(!this.props.Viewer.User_IsAnonymous) {
         return (
        <HomeWithC Viewer={this.props.Viewer} />   
      );
     }
      return (
        <HomeWithoutC Viewer={this.props.Viewer} />      
      );
 }

}
Home.contextTypes = {
  router: PropTypes.object.isRequired,
};
Home.propTypes = {
  Viewer: React.PropTypes.object.isRequired,
};

export default Relay.createContainer( Home, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
        ${ HomeWithoutC.getFragment( 'Viewer' ) },
        ${ HomeWithC.getFragment( 'Viewer' ) },
      }
    `,
  },
});

