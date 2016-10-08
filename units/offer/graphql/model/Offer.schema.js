/* @flow */

import defaultPersister from '../../../../configuration/graphql/defaultPersister'

defaultPersister.addTableSchema( 'Offer', {
  fields: {
      id: 'uuid',
      Offer_id: 'uuid',
      Offer_name: 'text',
      Offer_description: 'text',
      Offer_numberProduct:'int',
      Offer_expireDate: 'timestamp',
      Offer_expireDateBuy: 'timestamp',
  },
  key: [ 'id' ],
  indexes: [ 'Offer_id' ]
} )

export default true
