import mongoose, { Schema } from 'mongoose';

const gadgetSchema = new Schema(
  {
    brnad: String,
    Model: String,

    status: {
      type: String,
      default: 'safe',
      enum: ['safe', 'stolen', 'lost'],
    },

    category: {
      type: String,
      enum: ['phone', 'laptop'],
    },

    description: String,
    images: [String],

    serial_no: {
      type: String,
      unique: [true, 'Serial number must be unique'],
    },

    location: {
      state: String,
      lga: String,
      town: String,
    },

    imei_1: String,
    imei_2: String,
    colour: String,
  },
  { timestamps: true, collection: 'gadgets' }
);

const GadgetModel = mongoose.model('gadgets', gadgetSchema);

export default GadgetModel;
