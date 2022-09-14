


function changeName(){
    var nameChange = document.querySelector("#perfilName");
    console.log(nameChange);
    nameChange.textContent = "Jane Doe";
}   




var count = 3;
var counts = 500;

function removeItem(a,b){
    var removeItems = document.querySelector(a,b);
    removeItems.remove();
    if (b === "equis"){
        var numberAdd = document.querySelector(".round");
        numberAdd.value = --count;
        numberAdd.textContent = count;
        console.log(count);
    }else{
        var numberAdd2 = document.querySelector(".round2");
        var numberAdd = document.querySelector(".round");
        numberAdd.value = --count;
        numberAdd.textContent = count;
        console.log(count);        
        numberAdd2.value = ++counts;
        numberAdd2.textContent = counts;
        console.log(count);
    }
}



