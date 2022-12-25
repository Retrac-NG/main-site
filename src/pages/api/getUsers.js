import { getXataClient } from '../../utils/xata';

export default async (req, res) => {
  const xata = getXataClient();

  const results = await xata.db.Users.select(['email'])
    .filter('other_name', 'hard index')
    .getPaginated();

  res.status(200).send(results);
};
