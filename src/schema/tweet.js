import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  body : {
    type : String,
    required : true,
    trim : true,
    maxLength : 280
  }
});

const Tweet = mongoose.model("Tweet" , tweetSchema);

export default Tweet;