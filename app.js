const likeMammalElement = document.querySelector('#mammal-like');
const likeBirdElement = document.querySelector('#bird-like');
const likeReptileElement = document.querySelector('#reptile-like');
const mammalCommentElement = document.querySelector('.fav-mammal');
const birdCommentElement = document.querySelector('.fav-bird')
const reptileCommentElement = document.querySelector('.fav-reptile')
const mammalListElement = document.querySelector('.mammal-comment');
const birdListElement = document.querySelector('.bird-comment');
const reptileListElement = document.querySelector('.reptile-comment');


let mammalLikeCount = 0;
let birdLikeCount = 0;
let reptileLikeCount = 0;

// likeMammalElement.addEventListener('click', () => {
    // })

const mammalInputElement = document.querySelector('.mammal-input');
mammalCommentElement.addEventListener('click', () => {
    const mammalElement = document.createElement('li');
    if(mammalInputElement.value != ''){
        mammalElement.textContent = mammalInputElement.value;
        mammalListElement.appendChild(mammalElement);
        mammalInputElement.value = '';
    }
})

const birdInputElement = document.querySelector('.bird-input')
birdCommentElement.addEventListener('click', () => {
    const birdElement = document.createElement('li');
    if(birdInputElement.value != ''){
        birdElement.textContent = birdInputElement.value;
        birdListElement.appendChild(birdElement);
        birdInputElement.value = '';
    }
})

const reptileInputElement = document.querySelector('.reptile-input')
reptileCommentElement.addEventListener('click', () => {
    const reptileElement = document.createElement('li');
    if(reptileInputElement.value != ''){
        reptileElement.textContent = reptileInputElement.value;
        reptileListElement.appendChild(reptileElement);
        reptileInputElement.value = '';
    }
})
