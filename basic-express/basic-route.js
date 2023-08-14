/* Belajar Basic Routing-Express JS */


const express = require('express');
const app = express();

//menambahkan axios untuk melakukan post data
const axios = require('axios');

const port = 3000;

//basic middleware untuk parsing body pada request dengan json
app.use(express.json());

//route pada http request get
app.get('/',(req,res) => {
    res.send("Contoh route pada halaman index");
});


//data dummy yang akan digunakan untuk contoh cara kerja route dengan http request post dan put serta delete menggunakan express-JS
let users = [
    {id:1,name:'John'},
    {id:2,name:'Smith'}
];


//route pada http request post
app.post('/users',(req, res) => {
    const {id,name} = req.body;
    const newUser = {id,name};
    users.push(newUser);
    res.status(201).json(newUser);
});

//melakukan post data menggunakan axios
axios.post('http://localhost:3000/users',{id:1,name:'udin'})
.then(response => {
    console.log(response.data);
})
.catch(err => {
    console.log(err);
})

//route menggunakan http request put atau edit data
app.put('/users/:id',(req, res) => {

    const id = parseInt(req.params.id);
    const {name} = req.body;
    const user =users.find(user => user.id === id);
    if(!user){
        return res.status(404).json({error:'user tidak ditemukan'});
    }
    user.name = name;
    res.json(user);
})

//contoh cara melakukan aksi update data menggunakan axios
axios.put('http://localhost:3000/users/1',{name:'coba edit data'})
.then(response => {
    console.log(response.data);
})
.catch(err => {
    console.log(err);
})


//route untuk melakukan hapus data
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  });

//contoh cara melakukan aksi hapus data menggunakan axios
axios.delete('http://localhost:3000/users/1',{name:'coba edit data'})
.then(response => {
    console.log(response.data);
})
.catch(err => {
    console.log(err);
})
// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
  });