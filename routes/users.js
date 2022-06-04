import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{
    //console.log('I am runnig');
    res.send(req.params);
    //currently its an empty object. pass the users data from libs

});

export {router};
