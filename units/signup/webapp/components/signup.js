import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Relay from 'react-relay';

class signup extends Component {
  static contextTypes = {
    router: PropTypes.object
  };


  render() {
    
    return (
      <div className="cont_sigup">
      <Helmet
          title="Hificard - Inscription"
          meta={ [
            { name: "description", content:"inscription hificard systéme de fidélité " },
          ]}
          link={[
          {rel:'stylesheet', type:'text/css','href':'css/signup.css'},
        ]}
      />
      <div className="pan_sigup">
     
      <form>
        <div className='in_sigup'>
          <input  placeholder="Nom d'utilisateur" type="text" className="inp_sigup" />
        </div>
         <div className='in_sigup'>
          <input  placeholder="Adresse email" type="email" className="inp_sigup" />
        </div>
        <div className='in_sigup'>
          <input type="password" placeholder="Mot de passe" className="inp_sigup" />
        </div>
         <div className='in_sigup'>
          <input type="password" placeholder="Réecrire le mot de passe" className="inp_sigup" />
        </div>
        <button type="submit" className="btn_signin">Inscription</button>
      </form>
      </div>

      </div>

    );
  }
}
signup.propTypes = {
  Viewer: React.PropTypes.object.isRequired,
};

export default Relay.createContainer( signup, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
});