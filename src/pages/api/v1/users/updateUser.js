import { getXataClient } from '../../../../utils/xata';
import { responder } from '../../../../utils/responder';
import { tokenizer } from '../../../../utils/validator';

export default async (req, res) => {
  const xata = getXataClient();
  const updateData = req.body;

  const response = xata.db.Users.update();
};
