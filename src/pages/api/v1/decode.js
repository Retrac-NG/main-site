import { tokenDecoder } from '../../../utils/validator';
import { responder } from '../../../utils/responder';

export default (req, res) => {
  const { token } = req.body;
  try {
    const data = tokenDecoder(token);
    responder(res, 200, 'ok', 'Decode result', data);
  } catch (error) {
    responder(res, 500, 'error', 'Decode failed', null);
  }
};
