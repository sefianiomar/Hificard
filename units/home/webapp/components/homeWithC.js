import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class HomeWithC extends Component {
 static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };
  render() {
     return (
      <div className='con_t'>
        <h1>tefefefeifjei</h1>
      </div>      
      );
}

}
HomeWithC.contextTypes = {
  router: PropTypes.object.isRequired,
};
HomeWithC.propTypes = {
  Viewer: React.PropTypes.object.isRequired,
};

export default Relay.createContainer( HomeWithC, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
});

