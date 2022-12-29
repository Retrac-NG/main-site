import { getXataClient } from '../../../../utils/xata';
import { responder } from '../../../../utils/responder';

export default async (req, res) => {
  const xata = getXataClient();
  const { id, data } = req.body;
  let newData;
  delete data.id;

  console.log(id, data);

  // -- remove the items added by jwt and db by default  -->
  for (const key in data) {
    if (key !== 'iat' && key !== 'exp' && key !== 'id')
      newData = { ...newData, [key]: data[key] };
  }

  const response = xata.db.Users.update(id, { ...data });

  responder(res, 200, 'ok', 'user updated', response);
};
