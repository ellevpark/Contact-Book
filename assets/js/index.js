$("#add-user").submit(function(event) {
    alert("Data inserted succesfully")
})

$("#update-user").submit(function(event) {
    event.preventDefault(); 
    
    var unindexedArray= $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function(n,i){
        data[n['name']]= n['value']
    })
    console.log(unindexedArray)

    var request = {
        "url": `https://localhost:3000/api/users/${data.id}`, 
        "method": "PUT", 
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })
})