let text = document.getElementById('text')
let bg = document.getElementById('bg')
let bg2 = document.getElementById('bg2')
let cloud = document.getElementById('cloud')
let cloud2 = document.getElementById('cloud2')
let cloud3 = document.getElementById('cloud3')
let cloud4 = document.getElementById('cloud4')

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 50 + value * -0.1 + '%';
    //ändrar på cloud 1
    cloud.style.top = value * -2.2 + 'px';
    cloud.style.left = value * -0.9 + 'px';
    //ändrar på cloud 2 
    cloud2.style.top = value * -2.2 + 'px';
    cloud2.style.left = value * 0.9 + 'px';
    //ändrar på cloud 3
    cloud3.style.top = value * -1.5 + 'px';
    cloud3.style.left = value * -0.9 + 'px';
    //ändrar på cloud 4
    cloud4.style.top = value * -1.2 + 'px';
    cloud4.style.left = value * 0.4 + 'px';
})




const openSidebar = document.getElementById('button')

openSidebar.addEventListener('click', () => {

    if (document.getElementById('sidebar').style.width == '200px') {
        document.getElementById('sidebar').style.width = '0px';

    }

    else {
        document.getElementById('sidebar').style.width = '200px'

    }

})