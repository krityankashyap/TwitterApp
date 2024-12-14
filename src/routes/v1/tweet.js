import express from 'express'
import { getTweetById, getTweets, createTweet } from '../../controllers/tweetController.js';
import { tweetManualValidator } from '../../validator/tweetManualValidator.js';

const router = express.Router();
   
   router.get('/' , getTweets);

   router.get('/:id' ,getTweetById);

   router.post('/' , tweetManualValidator , createTweet);

export default router; 