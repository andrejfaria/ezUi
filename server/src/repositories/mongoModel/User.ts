import { model, Schema } from 'mongoose';
import { IUserPersistance } from '../dataSchema/IUserPersistance';

const user = new Schema<IUserPersistance>({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true

  }
},
  { timestamps: true }
);

export const UserModel = model('User', user);