/* @flow weak */

import { GraphQLID } from "graphql";
import { fromGlobalId, connectionArgs, connectionFromArray } from 'graphql-relay';

import OfferConnection from "./OfferConnection";
import OfferType from "./OfferType";
console.log("efheufhuehfuehfue");
export default {
  Offers: {
    type: OfferConnection.connectionType,
    args: { ...connectionArgs },
    resolve: ( obj, { ...args }, context, { rootValue: objectManager } ) => objectManager.getObjectList('Offer').then( ( arr ) => connectionFromArray( arr, args ) )
  },
  Offer: {
    type: OfferType,
    args: { ...{ id: { type: GraphQLID } } },
    resolve: ( parent, { id }, context, { rootValue: objectManager } ) => objectManager.getOneObject( 'Offer', { id: fromGlobalId( id ).id } ),
  },
}
