import Tweet from "../schema/tweet.js"

export const createTweet = async ({body})=>{
     try {
      const tweet = await createTweet({body});
      return tweet;
     } catch (error) {
       throw error;
     }
}