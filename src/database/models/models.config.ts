import { Sequelize } from "sequelize";
import { accountAssociation, accountModel } from "./account/account.db.model";
import { paymentAssociation, paymentModel } from "./payments/payments.db.model";
import { productAssociation, productModel } from "./product/product.db.model";
import { investorAssociation, investorModel } from "./user/investor.db";

import { userAssociation,  userCreation } from "./user/user.db";

//associations runner
function setupAssociations(db: Sequelize) {
  //creating models
  userCreation(db);
  investorModel(db);
  accountModel(db);
  productModel(db); 
  paymentModel(db);

  //associating data
  userAssociation(db);
  investorAssociation(db);
  accountAssociation(db);
  productAssociation(db);
  paymentAssociation(db);
}

export default setupAssociations;
