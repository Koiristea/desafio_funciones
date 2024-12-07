let color;

function cambiarColorNegro(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('square1').addEventListener('click', cambiarColorNegro);
document.getElementById('square2').addEventListener('click', cambiarColorNegro);
document.getElementById('square3').addEventListener('click', cambiarColorNegro);
document.getElementById('square4').addEventListener('click', cambiarColorNegro);


/*Sección guardar variable*/
document.addEventListener('keydown', function(event) {

    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'skyblue';
    }

    if (['a', 's', 'd'].includes(event.key)) {
        document.getElementById('key').style.backgroundColor = color;
    }

    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.border = '1px solid black';
        if (event.key === 'q') {
            newDiv.style.backgroundColor = 'purple';
        } else if (event.key === 'w') {
            newDiv.style.backgroundColor = 'grey';
        } else if (event.key === 'e') {
            newDiv.style.backgroundColor = '#804000';
        }
        document.body.appendChild(newDiv);
    }
});
