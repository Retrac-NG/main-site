import bcrypt from 'bcrypt';
import { responder } from '../../../../utils/responder';
import { getXataClient } from '../../../../utils/xata';
import { tokenizer } from '../../../../utils/validator';

export default async (req, res) => {
  const xata = getXataClient();
  let userData = req.body;
  delete userData.re_password;

  // -- hash the user password -->
  const salt = bcrypt.genSaltSync(
    Number(process.env.NEXT_PUBLIC_BCRYPT_HASH_SALT)
  );
  const hash = bcrypt.hashSync(userData.password, salt);

  userData = { ...userData, password: hash, phone: Number(userData.phone) };

  try {
    const newUser = await xata.db.Users.create(userData);
    const token = tokenizer({ id: newUser.id });
    responder(res, 200, 'ok', 'New user created', token);
  } catch (error) {
    responder(res, 400, 'error', error.message, error);
  }
};
