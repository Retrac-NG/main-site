import { responder } from 'utils/responder';
import userModel from 'models/userModel';
import { mongoConnect } from 'utils/mongo';

export default async (req, res) => {
  await mongoConnect();
  const { id, data } = req.body;

  delete data.id;
  delete data.iat;
  delete data.exp;

  console.log(id, data);

  const response = await userModel.findOneAndUpdate(
    id,
    { $set: data },
    { new: true }
  );

  responder(res, 200, 'ok', 'user updated', response);
};
