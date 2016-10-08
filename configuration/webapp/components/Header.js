import React, {Component} from 'react';
import { Link } from 'react-router';
import Relay from 'react-relay'
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import offer_list from './header_options/Offer_list';

class Header extends Component {
  constructor(props)
   {
    super( props );
    this.state = {
      valueS: "",
    };
   }

  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };

  searchQuery= (event) =>
  {
     this.setState( { valueS: event.target.value } );
  };

  //link render
  renderLinks= () =>
  {
    if(global.location.pathname.indexOf('/signup') !== -1){
      return(
    <div className='navbar-icon'>
          <li className='v2te_l'  role="presentation">      
            <a  role="presentation" className='v2te_i9' href="signin">
            Connexion
            </a>
          </li>
          
       </div>
       );
  }
  else if(global.location.pathname.indexOf('/signin') !== -1){
    return(
     <div className='navbar-icon'>
          <li className='v2te_l' role="presentation">      
            <a role="presentation" className='v2te_m' href="signup">
            Inscription
            </a>
          </li>
       </div>
       );
  }
  else if(global.location.pathname==='/'){
      if(!this.props.Viewer.User_IsAnonymous) {
      return (
        <div className='navbar-nav navbar-icon'>
            <a className='invit' onClick={this.invitClick} role="button">
            </a>
            <a className='gift' onClick={this.giftClick} role="button">
            </a>
            <a className='notif' onClick={this.notifClick} role="button">
            </a>  

            <li className='params'>
             <Dropdown
                trigger={['click']}
                onVisibleChange={this.onVisibleChange}
                visible={this.state.visible}
                closeOnSelect={false}
                overlay={menu}
                animation="slide-up"
              >
                <a role="button">
                  <img src='picture'/>
                  <i className='caret'></i>
                </a>
            </Dropdown>
            </li>
  
         </div>

      );
    }
    return (
        <div className='navbar-icon'>
          <li className='v2te_l' role="presentation">      
            <a  role="presentation" className='v2te_i9' href="signin">
            Connexion
            </a>
          </li>
          <li className='v2te_c' role="presentation">      
            <a role="presentation" className='v2te_m' href="signup">
            Inscription
            </a>
          </li>
       </div>
   );
   }
  }

  searchPattern = () =>{
    const valueS = this.state.valueS;
    if(valueS!=""){
        return(
        <div>
        <offer_list />
        <div className="Txgssea" ref="seachdiv">
           <Link className="Txgssea_o" role="button" to={"search?search="+valueS}>
              <span className="img"></span>
              <span className="lien">Afficher plus de résultats</span>
           </Link> 
        </div>
        </div>
        ); 
      }
  }

  //search nav
  renderSearch= () =>
  {
   if(!this.props.Viewer.User_IsAnonymous)
    {
    return(
    <div>
    <div className='navbar-center'>
      <input type='text' ref='inputsearch' name='sreac' id='sreach' placeholder='Cherchez des offres,des entreprises '  className='in_sea' autoComplete='off'
      maxLength='100' onChange={this.searchQuery} />
      <button type='submit' className='bt_sea'  onClick={this.searchQuery} ></button>   
    </div>
    {this.searchPattern()}
    </div>
    );

    }
  }

  render() {
      return (
      <div className='hea_to'>
        <div className='con_t'>
          <a href='/' className='navbar-logo'>
            <span className='logo'></span>
          </a>
          {this.renderSearch()}
          {this.renderLinks()}
        </div>
    </div>      
      );
  }
}
Header.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
Header.propTypes = {
  Viewer: React.PropTypes.object.isRequired,
};

// It is important to retrieve UserToken2, since it is used in client.js
export default Relay.createContainer(Header, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
});
