let input = document.getElementById("input");


function add(e){
    input.value += e;
}


function result(){
    try{
        input.value = eval(input.value);
    }catch{
        input.value = "Error";
        setTimeout(function(){
            input.value = '';
        },1000);
    }

    
}

function remove(){
    input.value = '';
}
