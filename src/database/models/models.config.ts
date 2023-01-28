import { Sequelize } from "sequelize";
import { accountAssociation, accountModel } from "./account/account.model";
import { paymentAssociation, paymentModel } from "./payments/payments.model";
import { productAssociation, productModel } from "./product/product.model";
import { investorAssociation, investorModel } from "./user/investor.model";

import { userAssociation, userModel } from "./user/user.model";

//associations runner
function setupAssociations(db: Sequelize) {
  //creating models
  userModel(db);
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
