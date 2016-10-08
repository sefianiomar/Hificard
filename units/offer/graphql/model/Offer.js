import ObjectManager from '../../../../graphql/ObjectManager'

// Class used by GraphQL Server
export default class Offer
{
  constructor( fields )
  {
    this.id = fields.id;
    this.Offer_id = fields.Offer_id;
    this.offer_name = fields.Offer_name;
	  this.Offer_description = fields.Offer_description;
    this.Offer_numberProduct = fields. Offer_numberProduct;
    this.Offer_expireDate = fields.Offer_expireDate;
    this.Offer_expireDateBuy = fields.Offer_expireDateBuy;
  }
}

ObjectManager.registerEntity( 'Offer', Offer )
