// function generateColor(){
//     let hexColor = ['0' , '1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

//    let color = '#';

//     for(let i = 0; i < 6; i++){
//         const num = Math.floor(Math.random()*16);
//         const num2 = hexColor[num];

//         color += num2 ;
//     }
//     document.getElementById('container').style.backgroundColor = color;
//     document.getElementById('output').innerHTML = color;           
// }
function superColor(){
    let hexcodes = ['0' , '1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    let color = '#';

    for(let i = 0; i < 6; i++){
       let num = Math.round(Math.random()*15);
        let num2 = hexcodes[num];

        color = color + num2 ;
    }
    document.getElementById('container').style.backgroundColor = color;
    document.getElementById('output').innerText = color;
}

