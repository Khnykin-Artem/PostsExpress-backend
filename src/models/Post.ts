import mongoose, { Schema } from 'mongoose';

const Post: Schema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 2,
    trim: true,
  },

  title: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 4,
    trim: true,
  },

  content: {
    type: String,
    required: true,
    maxlength: 955,
    minlength: 2,
    trim: true,
  },

  picture: {
    type: String,
    required: false,
    trim: true,
  },
});

export default mongoose.model('Post', Post);
