/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react'
import Relay from 'react-relay'


class Footer extends React.Component
{
  constructor(props)
   {
    super( props );
  
   }

  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };

 
  topFooter = () =>
  {
    if(global.location.pathname.indexOf('/signup') == -1){
        return(
             <section className="fluid-container">
        <div className="site-footer-top context">
          <div className="gr">
            <ul className="gu gu-1of6">
              <li>
                <a href="/">À propos</a>
              </li>
              <li>
                <a href="/signin">Connexion</a>
              </li>
              <li>
                <a href="/signup">Inscription</a>
              </li>
            </ul>
            <ul className="gu gu-1of6">
              <li>
                <a target="_blank" href="/guide">Guide</a>
              </li>
              <li>
                <a href="/search">Entreprises</a>
              </li>
              <li>
                <a href="/search">Offres</a>
              </li>
            </ul>
            <ul className="gu gu-1of6">
              <li>
                <a href="/contact">Contactez-nous!</a>
              </li>
              <li>
                <a href="/privacy">Confidentialité</a>
              </li>
              <li>
                <a href="/policies/cookies">Cookies</a>
              </li>
            </ul>
            <ul className="gu gu-1of6">
              <li>
                <a href="">Créer une page</a>
              </li>
              <li>
                <a href="">Créer une offres</a>
              </li>
              <li>
                <a href="/price">Prix carte</a>
              </li>
            </ul>
            <ul className="gu gu-1of6">
              <li>
                <span>Suivez-nous !</span>        
              </li>
              <li>
                <a href="http://twitter.com/card.hifi" target="_blank">Twitter</a>
              </li>
              <li>
                <a href="http://www.facebook.com/card.hifi" target="_blank">Facebook</a>
              </li>
            </ul>
            <ul className="gu gu-1of6">
              <li>
                <a href="/mobile" >HifiCard sur mobile</a>
              </li>
              <li>
                <a target="_blank" href="" >Android</a>
              </li>
              <li>
                <a target="_blank" href="">iPhone</a>
              </li>
            </ul>
          </div>
        </div>
      </section>



          );
    }
  }
  render( )
  {

    let sigup = this.props.sigup ? 'footer_c' : 'footer_p';

    if(this.props.Viewer.User_IsAnonymous)
    {  
    return (
       <footer  className={`${sigup}`} >
       {this.topFooter()}
      <section className="site-footer-bottom pvs">
        <ul className="fluid-containerp tac tal-m">
          <li className="dispi fl-s gu-2of3-s">
            <ul className="dispi">
              <li className="dispi dispb-s mrs">
                HifiCard © 2016 
              </li>
              <li className="dispi dispb-s mrs">
                <a href="/policies/legal">Mentions légales</a>
              </li>
              <li className="dispi dispb-s mrs">
                <a href="/policies">Conditions d'utilisation</a>
              </li>
               <li className="dispi dispb-s mrs">
                <a href="/policies/cookie">Utilisation des cookies</a>
              </li> 
              <li className="dispi dispb-s mrs">
                <a href="/contact">Contactez-nous</a>
              </li>
              <li className="dispi dispb-s mrs">
                <a href="/price">Achat du carte</a>
              </li>
              <li className="dispi dispb-s mrs">
                <a href="/business/ads">Publicité</a>
              </li>       
              <li className="dispi dispb-s mrs">
                Langue
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </footer>
    )
    }
    return(
      <div>
      </div>
    )
  }
}

export default Relay.createContainer( Footer, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
});
