import { createTweet as createTweetService } from "../service/tweetService.js";

export const getTweets = (req , res)=>{
  return res.json({
    message : 'welcome to tweet router'
  });
};

export const getTweetById = (req , res)=>{
  return res.json({
    message : 'welcome to tweet router',
    id : req.params.id
  });
};

export const createTweet = async (req , res)=>{
  try {
    const response = await createTweetService({
      body : req.body.body
    });
    return res.status(201).json({
      success : true,
      data : response,
      message : "Tweet creates successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : "Internal server error",
      success : false
    })
  }
};