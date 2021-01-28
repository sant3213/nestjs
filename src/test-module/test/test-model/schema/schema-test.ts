import * as mongoose from 'mongoose';


export const TestSchema = new mongoose.Schema({
name: {
    type: String
  },
  age: {
      type: String
  }
})