//membuat event listener ketika submit data
$("#add_user").submit(function(event) {
    alert("Data berhasil ditambahkan");
})

//membuat event listener ketika update data
$("#update_user").submit(function(event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data= {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    })

    var request ={

        "url":`http://localhost:3000/api/users/${data.id}`,
        'method': 'PUT',
        "data" : data
    }
    $.ajax(request).done(function(reponse){
        alert("data berhasil diupdate");
    })
})

//membuat pengkondisian ketika menghapus data
if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondeelete.click(function(){
        var id =$(this).attr("data-id")

        var request = {
            "url":`http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("apakah data ini akan dihapus")){
            $.ajax(request).done(function(response){
                alert("data berhasil di hapus");
                location.reload();
            })
        }
    })
}