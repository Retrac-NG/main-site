import bcrypt from 'bcrypt';
import UserModel from 'models/userModel';
import { tokenizer } from 'utils/validator';
import { responder } from 'utils/responder';
import { mongoConnect } from 'utils/mongo';

export default async (req, res) => {
  let userData = req.body;
  delete userData.re_password;

  await mongoConnect();

  // -- hash the user password -->
  const salt = bcrypt.genSaltSync(
    Number(process.env.NEXT_PUBLIC_BCRYPT_HASH_SALT)
  );
  const hash = bcrypt.hashSync(userData.password, salt);

  userData = { ...userData, password: hash, phone: Number(userData.phone) };

  try {
    const newUser = await UserModel.create(userData);
    console.log(newUser);
    const token = tokenizer({ id: newUser._id });
    responder(res, 200, 'ok', 'New user created', token);
  } catch (error) {
    responder(res, 400, 'error', error.message, error);
  }
};
