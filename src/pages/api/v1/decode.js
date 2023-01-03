import { tokenDecoder } from 'utils/validator';
import { responder } from 'utils/responder';
import { getXataClient } from 'utils/xata';
import { mongoConnect } from 'utils/mongo';
import userModel from 'models/userModel';

export default async (req, res) => {
  const xata = getXataClient();
  const { token } = req.body;

  try {
    const data = tokenDecoder(token);
    // const user = await xata.db.Users.read(data.id);
    const user = await userModel.findById(data.id);

    responder(res, 200, 'ok', 'Decode result', user);
  } catch (error) {
    responder(res, 500, 'error', 'Decode failed', null);
  }
};
