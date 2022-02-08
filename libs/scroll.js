$(document).ready(function () {
    $(".header__nav a, .header__arrow a, .top__arrow a, .header__dots a").mPageScroll2id({
        scrollSpeed : 700,
    })
});

const dotTwo = document.querySelector('.dots__aboutus');
const navAboutus = document.querySelector('.header__nav__dot');
window.addEventListener("scroll", function(){
    if (scrollY > 0) {
        dotTwo.classList.add('active');
        navAboutus.classList.add('active');
    }else{
        dotTwo.classList.remove('active');
        navAboutus.classList.remove('active');
    }
});
function scroll3() {
    let dotThree = document.getElementById("news");
    dotThree.scrollIntoView();
}