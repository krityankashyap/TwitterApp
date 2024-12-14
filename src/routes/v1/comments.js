import express from 'express'

const router = express.Router();

  router.get('/' , (req , res)=>{
    return res.json({
      message : "welcome to comment router v1"
    });
  });

  router.get('/:id' , (req , res)=>{
    return res.json({
      message : "welcome to comment router v1",
      id : req.params.id
    });
  });

export default router;