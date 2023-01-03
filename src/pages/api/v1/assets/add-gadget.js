import { responder } from '../../../../utils/responder';
import { mongoConnect } from 'utils/mongo';
import GadgetModel from 'models/gadgetModel';
import userModel from 'models/userModel';

export default async (req, res) => {
  await mongoConnect();
  const { assetData, userId } = req.body;

  try {
    console.log(assetData);

    // -- add asset -->
    const newAsset = await GadgetModel.create(assetData);

    // -- getv current user details -->
    const updatedUser = await userModel.findOneAndUpdate(
      userId,
      {
        $push: { gadgets: newAsset._id },
      },
      { new: true }
    );

    responder(res, 201, 'ok', 'New Asset added', updatedUser);
  } catch (error) {
    console.error(error);
    responder(res, 400, 'error', 'Failed to add new Asset');
  }
};
