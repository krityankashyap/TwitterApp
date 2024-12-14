import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../Repositories/tweetRepository.js";
export const createTweet = async ({body})=>{

/**
 * try to find blocked words in the tweet body and if any exits don't create the tweet and return an error message
 */

 const filter = new Filter();
 if(filter.isProfane(body)){
  throw new Error('Tweet contains blocked words');
 }

 const tweet = await createTweetRepository({body})

 return tweet;
}