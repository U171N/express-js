var Userdb = require('../model/model');

// endpoint menambahkan user baru
exports.create = (req, res) => {
    // validasi permintaan
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // tambah user baru
    const user = new Userdb({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status
    });

    // menyimpan dat baru ke database
    user
      .save()
      .then(data => {
        res.redirect('/add-user');
      })
      .catch(err => {
        if (err.name === "MongoTimeoutError") {
          res.status(500).send({
            message: "Request Time Out"
          });
        } else {
          res.status(500).send({
            message: err.message || "Ada suatu kesalahan"
          });
        }
      });
  }



// endpoint untuk mencari data semua users/atau data single user berdasarkan id
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Tidak dapat menemukan data user dengan id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Tidak dapat menemukan data user dengan id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Informasi salah" })
            })
    }


}

// endpoint untuk update data user
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Tidak dapat mengubah data dengan id ${id}. Mungkin data tidak ditemukan!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// endpoint untuk menghapus data user yang akan dihapus
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Tidak dapat menghapus dengan id ${id}. Mungkin data salah`})
            }else{
                res.send({
                    message : "Data berhasi dihapus!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Tidak dapat menghapus dengan id=" + id
            });
        });
}