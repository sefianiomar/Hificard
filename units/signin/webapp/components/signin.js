import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Relay from 'react-relay';
import Helmet from 'react-helmet';

class signin extends Component {

  render() {
    return (
    <div className="body_sign">
    <div className="cont_sigin">
      <Helmet
          title="Hificard - Connexion"
          meta={ [
            { name: "description", content:"connexion hificard systéme de fidélité " },
          ]}
          link={[
          {rel:'stylesheet', type:'text/css','href':'css/signin.css'},
        ]}
      />
      <div className="pan_sigin">
        <div className='top_sigin'>
            <span className='ic_sigin'></span>
            <span className="tx_sigin">Se connecter sur HifiCard</span>
        </div>
      <form method="post">
        <div className='in_sigin'>
          <input  placeholder="Nom d'utilisateur ou l'email" name="email" type="text" className="inp_sigin" />
        </div>
        <div className='in_sigin'>
          <input type="password" placeholder="Mot de passe" name="pass" className="inp_sigin" />
        </div>
        <button type="submit" className="btn_signin">Connexion</button>
      </form>
      <div className="bot_sigin">
        <Link to="/signup" className="up_sigin">Créer un compte sur HifiCard</Link>
        <Link to="/forgotPwd" className="for_sigin">Informations oubliées?</Link>
      </div>
      </div>
      </div>
      </div>

    );
  }
}
signin.contextTypes = {
  router: PropTypes.object.isRequired
};
signin.propTypes = {
  Viewer: React.PropTypes.object.isRequired,
};


export default Relay.createContainer( signin, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
});