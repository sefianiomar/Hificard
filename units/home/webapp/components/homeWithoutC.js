import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import Helmet from 'react-helmet';

class HomeWithoutC extends Component {
 static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };

  render() {
     return (
      <div>
           <Helmet
          title="Bienvenue sur Hificard "
          meta={ [
            { name: "description", content:"hificard systéme de la haute fidélité  " },
          ]}
          link={[
          {rel:'stylesheet', type:'text/css','href':'css/homeWihC.css'},
        ]}
     />

      <section className="main-gallery" id="home">
    <div className="overlay">
      <div className="container">
          <div className="row">
              <div className="col-md-12 text-center top30">
                 <h1 className="text-capitalize bigFont" data-scroll-reveal="wait 0.45s, then enter top and move 80px over 1s">La carte de la haute fidélité</h1>

                <p className="intro" data-scroll-reveal="wait 0.45s, then enter left and move 80px over 1s">Profitez des meilleurs offres de fidélité avec une seule carte.</p>
              </div>
              
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <div className="text-center top40">
                            <a href="#" className="btn btn-white-alt header-signin-link hs-signin-link">S'inscrire gratuitement</a>
                           
                        </div>
                    </div>
              
          </div>
      </div>
    </div>     
  </section>
     </div>   
      );
}

}
HomeWithoutC.contextTypes = {
  router: PropTypes.object.isRequired,
};
HomeWithoutC.propTypes = {
  Viewer: React.PropTypes.object.isRequired,
};

export default Relay.createContainer( HomeWithoutC, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
});

