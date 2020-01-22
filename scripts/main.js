let m_image = document.querySelector('img');
let images = document.getElementsByClassName('album');

console.log(images);

for (let img of images){
    img.onclick = function(){
        let src = img.getAttribute('src');
        m_image.setAttribute('src', src);
        //console.log("lol", src);
    }
}

/*
m_image.onclick = function(){
    let src = m_image.getAttribute('src');
    if(src === 'images/277172289113072019012526.png'){
        m_image.setAttribute('src', 'images/277179398123052019060105.png');
    } else{
        m_image.setAttribute('src', 'images/277172289113072019012526.png');
    }
}*/