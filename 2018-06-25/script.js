 function turnOnOff(){
    var a = document.getElementById('js-demo');
    console.log(a.src);
 if(a.src === 'https://www.w3schools.com/js/pic_bulboff.gif'){
    a.src = "https://www.w3schools.com/js/pic_bulbon.gif"
 }
else if(a.src === "https://www.w3schools.com/js/pic_bulbon.gif"){
     a.src = "https://www.w3schools.com/js/pic_bulboff.gif"
}
 }