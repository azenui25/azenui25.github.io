let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/my-icon.jpg') {
        myImage.setAttribute('src', 'images/me.jpg');
    } else {
        myImage.setAttribute('src', 'images/my-icon.jpg');
    }
}


document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}