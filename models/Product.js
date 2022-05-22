import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requruired: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      requruired: true,
      maxlength: 200,
    },
    img: {
      type: String,
      requruired: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
