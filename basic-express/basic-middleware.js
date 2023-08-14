//file ini digunakan untuk mencoba menerapkan middleware pada express-JS
const express = require('express');

const app = express();

//contoh penerapan middleware pada express-JS
const loggerMiddleware = (req, res, next) =>{
    console.log(`Request URL:${req.url}`);  
    next();
}

app.use(loggerMiddleware);

//contoh penerapan middleware pada express-Js pada bagian routing
app.get('/home',(req,res) => {
    res.send('uji coba middleware');
});


//menjalankan script contoh middleware diatas
const port = 3000;
app.listen(port,()=>{
    console.log(`server berjalan di port ${port}`);
});