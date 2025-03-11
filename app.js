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
