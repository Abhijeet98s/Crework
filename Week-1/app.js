const array = [0,1,2,3,4,5,6,7,8,'A','B','C','D','E','F'];
const btn = document.querySelector('.btn');
const bgColor = document.querySelectorAll('.bg-color');
const hexCode = document.querySelectorAll('.hex-code');

btn.addEventListener('click', getHex);
function getHex(){
    let newHexCode = ['#'];
    for (let i = 0; i<6; i++){
        let randomHex = Math.floor(Math.random()*array.length);
        newHexCode = newHexCode + array[randomHex];
        console.log(newHexCode);       
    }
    bgColor.forEach(e => e.style.backgroundColor = newHexCode);
    hexCode.forEach(e => e.innerHTML = newHexCode);
}