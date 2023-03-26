// count settings 
let count = document.getElementById('count')
function adding() {
    if(count.innerHTML!=9999) {
        count.innerHTML = Number(count.innerHTML)+1
    }else count.innerHTML = 0
}
function reset(){
    count.innerHTML = 0
}
// edit the color
let color = document.getElementById('color')
color.onmouseout = () =>{
    console.log(document.getElementById('color').value)
}
