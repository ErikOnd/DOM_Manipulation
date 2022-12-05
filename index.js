function changeHeadline() {
    let headline = document.getElementsByTagName('h1')
    headline[0].innerHTML = "New Title"

    //document.getElementsByTagName('h1').innerHTML = 'A New Title'
}

function changeBgColor() {
    let htmlPage = document.getElementsByTagName('html')
    htmlPage[0].classList.add('newBackground')
}

function changeFooterAddress() {
    let footer = document.querySelector("footer p span")
    footer.innerHTML = "This is a fake Address"
}


function orangeLink() {
    let amazonLinks = document.getElementsByTagName('a')
    for (let i = 0; i < amazonLinks.length; i++) {

        amazonLinks[i].classList.add('orangeLink')
    }
}

function hidePictures() {
    let allPictures = document.getElementsByTagName('img');
    for (let i = 0; i < allPictures.length; i++) {

        allPictures[i].classList.toggle('hidePictures')
    }
}


function randomLinkColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = '#' + randomColor;
    }
}
