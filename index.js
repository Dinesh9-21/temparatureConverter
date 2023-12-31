
document.getElementById("convert").onclick = function(){
    var d = document.getElementById("temp").value;
    var co  = document.getElementById("c").value;
    if(co==0){
        document.getElementById("res").textContent= (d*(9/5))+32+"F";
        console.log("Farenheat");
    }else{
        var f = (d*(9/5))+32;
        document.getElementById("res").textContent= (f-32)*5/9+"C";
        console.log("Celsius");
    }
    
}
