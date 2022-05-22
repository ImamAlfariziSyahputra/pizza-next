import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      requruired: true,
      maxlength: 60,
    },
    address: {
      type: String,
      requruired: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      requruired: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
