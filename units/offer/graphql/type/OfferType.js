/* @flow weak */

import { globalIdField } from 'graphql-relay';
import { GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLObjectType } from "graphql";
import GraphQLDateTime from "../../../../graphql/type/GraphQLDateTime";

import NodeInterface from "../../../../graphql/NodeInterface";

import Offer from '../model/Offer';


export default new GraphQLObjectType( {
  name: 'Offer',
  interfaces: [NodeInterface],
  isTypeOf: object => object instanceof Offer,
  fields: {
    id: globalIdField('Offer'),
    Offer_name: { type: GraphQLString, resolve: (obj) => obj.Offer_name },
    Offer_description: { type: GraphQLString, resolve: (obj) => obj.Offer_description },
    Offer_numberProduct: { type: GraphQLInt, resolve: (obj) => obj.Offer_numberProduct },
    Offer_expireDate: { type: GraphQLDateTime, resolve: (obj) => obj.Offer_expireDate }, 
    Offer_expireDateBuy: { type: GraphQLDateTime, resolve: (obj) => obj.Offer_expireDateBuy },
  },
} );
