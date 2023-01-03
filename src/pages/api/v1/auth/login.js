import bcrypt from 'bcrypt';
import { getXataClient } from '../../../../utils/xata';
import { responder } from '../../../../utils/responder';
import { tokenizer } from '../../../../utils/validator';
import userModel from 'models/userModel';
import { mongoConnect } from 'utils/mongo';

export default async (req, res) => {
  await mongoConnect();
  const userDetails = req.body;
  console.log(userDetails);

  // -- get user with email -->
  const user = await userModel.findOne({ email: userDetails.email });

  // -- if email not found -->
  if (!user) return responder(res, 404, 'error', 'email not found', null);

  // -- check password -->
  const result = bcrypt.compareSync(userDetails.password, user.password);

  result
    ? responder(
        res,
        200,
        'ok',
        'user found',
        tokenizer({ id: user.id }) // id;password
      )
    : responder(res, 403, 'error', 'password mis-match', null);
};
