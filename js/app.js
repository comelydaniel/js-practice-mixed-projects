const button = document.getElementById('button')
const searchBox = document.querySelector('.input')

button.addEventListener('click', () => {
   searchBox.classList.toggle('show')
})


//feedback
const ratings = document.querySelectorAll('.rating')
const reviewButton = document.getElementById('review-button')
const reviewBox = document.getElementById('review-sent')
const reviewX = document.getElementById('review-close')

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        removeActiveClass();
        rating.classList.add('active')
    })
})

function removeActiveClass() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}

reviewButton.addEventListener('click', () => {
    reviewBox.classList.add('show')
})

reviewX.addEventListener('click', () => {
    reviewBox.classList.remove('show')
})

//dark and light mode
const modeButton = document.getElementById('light-mode')

modeButton.addEventListener('click', (e) => {
    const body = document.querySelector('body')
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        e.target.innerHTML = `Dark Mode`
    } else {
        body.classList.add('dark')
        e.target.innerHTML = `Light Mode`
    }
})

const circleBar = document.querySelector('.circle')
const toggleBar = document.querySelector('.toggle-bar')
const body = document.querySelector('body')

circleBar.addEventListener('click', () => {
   toggleBar.classList.toggle('active')
   body.classList.toggle('active')
})

//review stars
const stars = document.querySelectorAll('.bi-star-fill')
const starRemark = document.getElementById('star-remark')

stars.forEach((star, idx) => {
    star.addEventListener('click', () => fillStar(idx))
})

function fillStar(idx) {
    if(idx === 4 && stars[idx].classList.contains("filled")) {
        idx--
    } else if(stars[idx].classList.contains("filled") && !stars[idx].nextElementSibling.classList.contains("filled")) {
        idx--
    }

    stars.forEach((star, idx2) => {
        if(idx2 <= idx) {
            star.classList.add('filled')
        } else {
            star.classList.remove('filled')
        }
    })
}
