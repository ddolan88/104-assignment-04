function displayTable(){
    let table = $("#petsTable");
    table.html("");
    //travel the array
    let tr="";
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tr=`
        <tr class="table table-dark table-striped">
            <td>${pet.name}</td>;
            <td>${pet.age}</td>;
            <td>${pet.gender}</td>;
            <td>${pet.breed}</td>;
            <td>${pet.service}</td>;
            <td>${pet.ownerName}</td>;
            <td>${pet.contactPhone}</td>;
        </tr>`
        table.append(tr);
    }
    
}

// function displayTable(){
//     let table = $("#petsTable");
//     let tr="";
//     for(let i=0;i<salon.pets.length;i++)
// }