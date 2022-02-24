let catImg = document.getElementById('cat')
console.log(catImg);

let cat
let catPos = 0;
var speed = 300;

function turn() {
    if (catImg.style.transform == 'scaleX(1)') {
        catImg.style.transform = 'scaleX(-1)'


    } else if (catImg.style.transform == 'scaleX(-1)') {
        catImg.style.transform = 'scaleX(1)'
    }
}

function catWalk() {
    clearInterval(cat);
    cat = setInterval(function walk() {
        if (catImg.style.transform == 'scaleX(1)') {
            catPos += 20
            console.log('cat walks to the left')
            catImg.style.left = `${catPos}px`
        } else if (catImg.style.transform == 'scaleX(-1)') {
            catPos -= 20
            console.log('cat walks to the right')
            catImg.style.left = `${catPos}px`
        }
    }, 300);
}

function catSpeed() {
    clearInterval(cat);
    cat = setInterval(function walk() {
        if (catImg.style.transform == 'scaleX(1)') {
            catPos += 20
            console.log('cat walks to the left')
            catImg.style.left = `${catPos}px`
        } else if (catImg.style.transform == 'scaleX(-1)') {
            catPos -= 20
            console.log('cat walks to the right')
            catImg.style.left = `${catPos}px`
        }
    }, 50)
}

function pause() {
    clearInterval(cat);
}

// document.body.addEventListener(keypress)