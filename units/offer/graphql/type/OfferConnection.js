/* @flow weak */

import { connectionDefinitions } from 'graphql-relay';

import OfferType from "./OfferType";

export default connectionDefinitions( {
  name: 'Offers',
  nodeType: OfferType,
} );
