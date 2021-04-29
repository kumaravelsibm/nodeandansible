//Import

const express= require('express')

//config
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let USERS=[];
let books=[];
//logic
app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/users',(req,res)=>{
    res.send(USERS);
})

app.post('/users',(req,res)=>{
    let user={}
    user.name = req.body.name;
    user.id = req.body.id
    USERS.push(user);
    res.send("User Added Successfilly");
    /* or let newuser={
        name:req.body.name,
        id:req.body.id,
    };
    */

app.patch('/users',(req,res)=>{
    let user={}
    user.name = req.body.name;
    user.id = req.body.id
    USERS.push(user);
    res.send(`User Updated Successfully, no of user is: ${USERS.length}`)
})

//patch or put
app.put('/users',(req,res)=>{
    let usertobeupdated = USERS.find(user => user.name===req.body.name);
    usertobeupdated = rreq.body;
    res.send("user updated")
})

app.delete('/users',(req,res)=>{
    USERS.splice(0,1)
    res.send(`User deleted successfully, no of users: ${USERS.length}`)
})

// or
// app.delete('/users',(req,res)=>{
//     USERS.pop(user =>user.name ===req.body.name);
//     res.send("user deleted");
// })
});

//listen
app.listen(port, ()=>{
    console.log('App is listening at http://localhost:${port}')
