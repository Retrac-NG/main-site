import bcrypt from 'bcrypt';
import { responder } from '../../../../utils/responder';
import { getXataClient } from '../../../../utils/xata';

export default async (req, res) => {
  const xata = getXataClient();
  let userData = req.body;

  // -- hash the user password -->
  const salt = bcrypt.genSaltSync(
    Number(process.env.NEXT_PUBLIC_BCRYPT_HASH_SALT)
  );
  const hash = bcrypt.hashSync(userData.password, salt);

  userData = { ...userData, password: hash, phone: Number(userData.phone) };

  try {
    const newUser = await xata.db.Users.create(userData);
    responder(res, 200, 'ok', 'New user created', newUser);
  } catch (error) {
    responder(res, 400, 'error', error.message, error);
  }
};
