import { getXataClient } from '../../../../utils/xata';
import { responder } from '../../../../utils/responder';
import { tokenizer } from '../../../../utils/validator';

export default async (req, res) => {
  const xata = getXataClient();
  const { id, data } = req.body;
  let newData;

  // -- remove the items added by jwt and db by default  -->
  for (const key in data) {
    if (key !== 'iat' && key !== 'exp' && key !== 'id')
      newData = { ...newData, [key]: data[key] };
  }

  const response = xata.db.Users.update(id, { ...newData });

  responder(res, 200, 'ok', 'user updated', response);
};
