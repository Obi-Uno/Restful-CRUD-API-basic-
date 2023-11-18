import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router();
// all routes here are translated to '/users/'
// so no need to add /users again

// router.get('/users',(req,res)=>{
//     res.send ("Hello There !!");
// });

let users= [
    {
        firstName: "tobias",
        lastName: "jusu",
        age: 23,
        id: "ee2143e3-8d68-48d8-ac00-6c602bca6b80"
    },
    {
        firstName: "tobiaadass",
        lastName: "jussdasd",
        age: 43,
        id  : "8e8f2757-4973-4c99-8a53-0dd8c0823e73"
    }
    
];

router.get('/',(req,res)=>{
    console.log(users);
    res.send (users);
});

router.post('/',(req,res)=>{
    console.log(req.body);
    const user= req.body;
    const userId= uuidv4();
    const userWithId = { ...user, id : userId };
    users.push(userWithId);
    res.send ( users );
});


router.get('/:id',(req,res)=>{

      const { id }=req.params;
      const userFound= users.find((user)=>  user.id===id);

    res.send(userFound);
});


router.delete('/:id',(req,res)=>{
    const { id }= req.params;

    users= users.filter( (x) =>
        x.id != id
    );
    
    res.send(`user deleted \n` + users);
})



router.patch('/:id',(req,res)=>{

    const { id } =req.params;

    const {firstName, lastName, age} = req.body; 

    const user = users.find((user )=> user.id ===  id );

      if(firstName) user.firstName=firstName;
      if(lastName)  user.lastName=lastName;
      if(age)       user.age=age;

      res.send(' data has been updated');

});



export default router;
