/* @flow weak */
/* eslint react/prop-types: 0 */

import Helmet from "react-helmet"
import React from 'react'


export default class ChromeHelmet extends React.Component
{
  render( )
  {
    return (
      <Helmet
        title="Hificard"
        meta={ [
          { name : "description", content: "Hificard systéme de fidilité " },
        ]}
        link={[
          {rel:'stylesheet', type:'text/css','href':'css/main.css'},
          {rel:'stylesheet', type:'text/css','href':'css/header_p.css'},
          {rel:'stylesheet', type:'text/css','href':'css/footer_p.css'},
        ]}
      />
    )
  }
}
