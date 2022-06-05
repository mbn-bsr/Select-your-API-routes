import express from 'express';
const router = express.Router();
import users from '../libs/users.js'

router.get('/', (req, res)=>{
    const obj = {
        success: true,
        payload: users
    };
    res.send(obj);
});

router.get('/:id', (req, res)=>{
    const userId = Number(req.params.id);
    for (let i=0; i<users.length; i++){
        if(users[i].id === userId){
           res.send({
                success: true,
                payload: users[i]
            });
        }
    } 
});

router.post('/', (req, res)=>{
    const body = req.body;
    users.push(body);
    const responseObj = {
        success: true,
        payload: users
    };
    res.send(responseObj);
});

router.put('/:id', function(req, res) {
    const body = req.body;
    const userId = Number(req.params.id);
    for(let i=0; i<users.length; i++) {
      if(userId === users[i].id){
        users[i] = body;
      }  
    }
    res.json({success: true, payload: body});
});

router.delete('/:id', function(req, res) {
    const body = req.body;
    const userId = Number(req.params.id);
    for(let i=0; i<users.length; i++) {
      if(userId === users[i].id){
        users.splice(i,1);
      }  
    }    
    res.json({success: true, payload: body});
});

export {router};
