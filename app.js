const likeMammalElement = document.querySelector('#mammal-like');
const likeBirdElement = document.querySelector('#bird-like');
const likeReptileElement = document.querySelector('#reptile-like');
const mammalCommentElement = document.querySelector('.fav-mammal');
const birdCommentElement = document.querySelector('.fav-bird')
const reptileCommentElement = document.querySelector('.fav-reptile')
const mammalListElement = document.querySelector('.mammal-comment');
const birdListElement = document.querySelector('.bird-comment');
const reptileListElement = document.querySelector('.reptile-comment');


let mammalLikesCount = 0;
let birdLikesCount = 0;
let reptileLikesCount = 0;

const mammalLikes = () => {
    mammalLikesCount = mammalLikesCount + 1;
    console.log(mammalLikesCount);
    likeMammalElement.textContent = `${mammalLikesCount} I Love Mammals!`;
}

const birdLikes = () => {
    birdLikesCount = birdLikesCount + 1;
    console.log(birdLikesCount);
    likeBirdElement.textContent = `${birdLikesCount} I Love Birds!`;
}

const reptileLikes = () => {
    reptileLikesCount = reptileLikesCount + 1;
    console.log(birdLikesCount);
    likeReptileElement.textContent = `${reptileLikesCount} I Love Reptiles!`;
}

// Event Listeners

likeMammalElement.addEventListener('click', mammalLikes)

const mammalInputElement = document.querySelector('.mammal-input');
mammalCommentElement.addEventListener('click', () => {
    const mammalElement = document.createElement('li');
    if(mammalInputElement.value != ''){
        mammalElement.textContent = mammalInputElement.value;
        mammalListElement.appendChild(mammalElement);
        mammalInputElement.value = '';
    }
})

mammalCommentElement.addEventListener('mouseover', (event) => {
   event.target.style.color = '#549131';
})
mammalCommentElement.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

likeBirdElement.addEventListener('click', birdLikes)

const birdInputElement = document.querySelector('.bird-input')
birdCommentElement.addEventListener('click', () => {
    const birdElement = document.createElement('li');
    if(birdInputElement.value != ''){
        birdElement.textContent = birdInputElement.value;
        birdListElement.appendChild(birdElement);
        birdInputElement.value = '';
    }
})

birdCommentElement.addEventListener('mouseover', (event) => {
    event.target.style.color = '#549131';
 })
 birdCommentElement.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
 })

likeReptileElement.addEventListener('click', reptileLikes)

const reptileInputElement = document.querySelector('.reptile-input')
reptileCommentElement.addEventListener('click', () => {
    const reptileElement = document.createElement('li');
    if(reptileInputElement.value != ''){
        reptileElement.textContent = reptileInputElement.value;
        reptileListElement.appendChild(reptileElement);
        reptileInputElement.value = '';
    }
})

reptileCommentElement.addEventListener('mouseover', (event) => {
    event.target.style.color = '#549131';
})
reptileCommentElement.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

const toggleElement = document.querySelector('#toggle')
const body = document.body
body.classList.add('lightmode')
body.classList.add('darkmode')
toggleElement.addEventListener('click', () => {
    if(body.classList.contains('lightmode')) {
        body.classList.replace('lightmode', 'darkmode');
    }
    else if (
        body.classList.replace('darkmode', 'lightmode')
    );
})

const imgElement = document.querySelector('img')
imgElement.addEventListener('click', (event) => {
        if (imgElement.src.includes('dog.jpg')){
        imgElement.src = 'parrot.jpg';
    }   else {
        imgElement.src = 'dog.jpg'
    }
})