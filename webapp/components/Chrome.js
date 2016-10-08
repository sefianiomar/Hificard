/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react';
import Relay from 'react-relay';

import ChromeHelmet from '../../configuration/webapp/components/ChromeHelmet';
import Footer from '../../configuration/webapp/components/Footer';
import Header from '../../configuration/webapp/components/Header';



class Chrome extends React.Component
{
  constructor( props )
  {
    super( props );
   this.state = {
     sigup: false,
    };
  }
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };

 componentWillMount(){
    if(global.location.pathname.indexOf('/signup') != -1){
        this.setState({sigup:true});
        console.log("sigup : " + this.state.sigup);
    }
 } 
  componentWillUnmount(){

    if(global.location.pathname.indexOf('/signup') != -1){
        this.setState({sigup:false});
        console.log("sigup : " + this.state.sigup);
    }
  }

  render( )
  {
    console.log(this.props.Viewer.User_IsAnonymous);
    return (
      <div>
        <ChromeHelmet />
        <Header
          Viewer={this.props.Viewer}
        />
        {this.props.children}
        <Footer
          Viewer={this.props.Viewer} sigup={this.state.sigup}
        />
      </div>
    )
  }
}

//

Chrome.contextTypes = {
  router: React.PropTypes.object.isRequired,
};


// It is important to retrieve UserToken2, since it is used in client.js
export default Relay.createContainer(Chrome, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
        UserToken2,
        ${ Header.getFragment( 'Viewer' ) },
        ${ Footer.getFragment( 'Viewer' ) },
      }
    `,
  },
});
