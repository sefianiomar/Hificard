/* @flow weak */

import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLInt, GraphQLNonNull } from "graphql";

import GraphQLDateTime from "../../../../graphql/type/GraphQLDateTime";

import TranslaticiarumsConnection from '../type/TranslaticiarumsConnection';
import ViewerType from '../../../../graphql/type/ViewerType';

export default mutationWithClientMutationId( {
  name: 'Translaticiarum_add',
  inputFields: {
    Translaticiarum_Type: { type: new GraphQLNonNull( GraphQLInt ) },
    Translaticiarum_Date: { type: new GraphQLNonNull( GraphQLDateTime ) },
    Translaticiarum_Time: { type: new GraphQLNonNull( GraphQLDateTime ) },
  },
  outputFields: {
    TranslaticiarumsEdge: {
      type: TranslaticiarumsConnection.edgeType,
      resolve: ( {local_id}, { ...args }, context, { rootValue: objectManager } ) =>
      {
        let an_Object;
        return objectManager.getOneObject( 'Translaticiarum', { id: local_id } )
        .then( ( retrieved_Object ) => {
          an_Object = retrieved_Object;
        } )
        .then( ( ) => objectManager.getObjectList( 'Translaticiarum', { Translaticiarum_User_id: objectManager.getViewerUserId( ) } ) )
        .then( ( arr ) => ( {
          cursor: objectManager.cursorForObjectInConnection( 'Translaticiarum', arr, an_Object ),
          node: an_Object,
        } ) )
        ;
      }
    },
    Viewer: {
      type: ViewerType,
      resolve: ( parent, args, context, { rootValue: objectManager } ) => objectManager.getOneObject( 'User', { id: objectManager.getViewerUserId( ) } )
    },
  },
  mutateAndGetPayload: ( { Translaticiarum_Type, Translaticiarum_Date, Translaticiarum_Time }, context, { rootValue: objectManager } ) =>
    objectManager.add( 'Translaticiarum', {
      Translaticiarum_User_id: objectManager.getViewerUserId( ),
      Translaticiarum_Type,
      Translaticiarum_Date,
      Translaticiarum_Time,
    } )
    .then( ( local_id ) => ( {local_id} ) )
} );
