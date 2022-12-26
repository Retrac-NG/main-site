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

  userData = { ...userData, password: hash };
  const newUser = await xata.db.Users.create(userData);
  console.log(newUser);
  responder(res, 200, 'ok', 'New user created', newUser);
};
