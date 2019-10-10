let button = document.querySelector('button');
let image = document.querySelector('img');

image.onclick = function(){
    let src = image.getAttribute('src');
    if(src === 'images/277172289113072019012526.png'){
        image.setAttribute('src', 'images/277179398123052019060105.png');
    } else{
        image.setAttribute('src', 'images/277172289113072019012526.png');
    }

}

/*
Kommentare sind toll.
*/