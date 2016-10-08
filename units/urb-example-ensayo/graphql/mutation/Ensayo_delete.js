/* @flow weak */

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLID, GraphQLNonNull } from "graphql";

import ViewerType from '../../../../graphql/type/ViewerType';


export default mutationWithClientMutationId( {
  name: 'Ensayo_delete',
  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
  },
  outputFields: {
    deletedEnsayoId: {
      type: GraphQLID,
      resolve: ( {id} ) => id,
    },
    Viewer: {
      type: ViewerType,
      resolve: ( parent, args, context, { rootValue: objectManager } ) => objectManager.getOneObject( 'User', { id: objectManager.getViewerUserId( ) } )
    },
  },
  mutateAndGetPayload: ( {id}, context, { rootValue: objectManager } ) =>
  {
    var local_id = fromGlobalId(id).id;
    return objectManager.remove( 'Ensayo', { id: local_id} )
    .then( ( ) => ( {id} ) )
    ;
  }
} );
