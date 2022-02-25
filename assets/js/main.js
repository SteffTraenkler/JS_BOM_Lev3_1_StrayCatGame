let catImg = document.getElementById('cat')
console.log(catImg);

catImg.style.transform = 'scaleX(-1)'
catImg.style.transform = 'scaleX(1)'


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
            console.log('cat walks to the right')
            catImg.style.left = `${catPos}px`
        } else if (catImg.style.transform == 'scaleX(-1)') {
            catPos -= 20
            console.log('cat walks to the left')
            catImg.style.left = `${catPos}px`
        }
    }, 150);
}

function catSpeed() {
    clearInterval(cat);
    cat = setInterval(function walk() {
        if (catImg.style.transform == 'scaleX(1)') {
            catPos += 20
            console.log('cat walks to the right')
            catImg.style.left = `${catPos}px`
        } else if (catImg.style.transform == 'scaleX(-1)') {
            catPos -= 20
            console.log('cat walks to the left')
            catImg.style.left = `${catPos}px`
        }
    }, 30)
}

function pause() {
    clearInterval(cat);
}



// try -> move the cat wit keys 
// <- / -> / s / <- hold / -> hold

s = 20;

document.body.addEventListener('keydown', speed => {
    if (speed.keyCode === 16) {
        s = 80;
    }
})
document.body.addEventListener('keyup', speed => {
    if (speed.keyCode === 16) {
        s = 20;
    }
})

document.body.addEventListener('keydown', up => {
    let catPosUp = 0;
    if (up.keyCode === 38) {
        catPosUp += 20
        catImg.style.bottom = `${catPosUp}px`;
        catPosUp += 20
        catImg.style.bottom = `${catPosUp}px`;
        // catPosUp -= 20
        // catImg.style.bottom = `${catPosUp}px`;
        // catPosUp -= 20
        // catImg.style.bottom = `${catPosUp}px`;
    }
})

document.body.addEventListener('keydown', e => {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 39:
            console.log('right');
            catImg.style.transform = 'scaleX(1)'
            catPos += s;
            console.log('cat walks to the right')
            catImg.style.left = `${catPos}px`
            break;
        case 37:
            console.log('left');
            catImg.style.transform = 'scaleX(-1)'
            catPos -= s;
            console.log('cat walks to the left')
            catImg.style.left = `${catPos}px`
            break;
        case 16:
            console.log('speed');
            break;
    }
})

// document.body.addEventListener('keyup', () => {
//     clearInterval(cat);
// })



// document.body.addEventListener('keydown', (e) => {
//     console.log(e.keyCode);
//     if ((e.keyCode === 16) && (e.keyCode === 39)) {
//         catPos += 100;
//         catImg.style.left = `${catPos}px`;
//     }
//     if (e.keyCode === 16 && e.keyCode === 37) {
//         catPos -= 100;
//         catImg.style.left = `${catPos}px`;
//     }
//     if (e.keyCode === 39) {
//         catPos += 20;
//         catImg.style.left = `${catPos}px`;
//         catImg.style.transform = 'scaleX(1)'
//     }
//     if (e.keyCode === 37) {
//         catPos -= 20;
//         catImg.style.left = `${catPos}px`;
//         catImg.style.transform = 'scaleX(-1)'
//     }


// });