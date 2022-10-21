// let click =document.getElementById('click')
let great = true
function show() {
    if (great == true) {
    document.getElementById('click').hidden = false;
        great = false
    }
    else{
    document.getElementById('click').hidden = true;
    great = true

    }
   
}