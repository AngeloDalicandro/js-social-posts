// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// Creo l'array con i post
const socialPosts = [
    {
        id: 1,
        name: 'Phil Mangione',
        profilePic: 'https://unsplash.it/300/300?image=1',
        date: '06/20/2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=171',
        likes: 80,
    },
    {
        id: 2,
        name: 'Sofia Perlari',
        profilePic: 'https://unsplash.it/300/300?image=5',
        date: '06/11/2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=124',
        likes: 120,
    },
    {
        id: 3,
        name: 'Angelo Dalicandro',
        profilePic: 'https://unsplash.it/300/300?image=3',
        date: '05/27/2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: null,
        likes: 27,
    }
]

// Seleziono nel DOM il container dove stampare i post
const postContainer = document.getElementById('container');

// Con un ciclo for stampo i post nel DOM
for(let i = 0; i < socialPosts.length; i++){
    const thisPost = socialPosts[i];

    postContainer.innerHTML += `<div class="post">
                                    <div class="post__header">
                                        <div class="post-meta">                    
                                            <div class="post-meta__icon">
                                                <img class="profile-pic" src="${thisPost.profilePic}" alt="Phil Mangione">                    
                                            </div>
                                            <div class="post-meta__data">
                                                <div class="post-meta__author">${thisPost.name}</div>
                                                <div class="post-meta__time">${thisPost.date}</div>
                                            </div>                    
                                        </div>
                                    </div>
                                    <div class="post__text">${thisPost.text}</div>
                                    <div class="post__image">
                                        <img src="${thisPost.img}" alt="">
                                    </div>
                                    <div class="post__footer">
                                        <div class="likes js-likes">
                                            <div class="likes__cta">
                                                <a class="like-button  js-like-button" href="#" data-postid="${thisPost.id}">
                                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                    <span class="like-button__label">Mi Piace</span>
                                                </a>
                                            </div>
                                            <div class="likes__counter">
                                                Piace a <b id="like-counter-${thisPost.id}" class="js-likes-counter">${thisPost.likes}</b> persone
                                            </div>
                                        </div> 
                                    </div>            
                                </div>`;

}

// Seleziono i bottoni del like
const likeBtn = document.querySelectorAll('.js-like-button');

// Con un secondo ciclo for imposto cosa accade ad ogni click
for(let i = 0; i < socialPosts.length; i++){
    likeBtn[i].addEventListener('click',
    function(event) {
        const thisPost = socialPosts[i];
        event.preventDefault();
        
        // Seleziono il counter dei like
        let likeCounter = document.getElementById(`like-counter-${thisPost.id}`)
        
        // Aggiungo la classe per modificarne il colore al click
        likeBtn[i].classList.add('like-button--liked');

        // Incremento il counter
        likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;
    }
    )
}