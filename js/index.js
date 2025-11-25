const btt = document.querySelector('#btt');
const ts = document.querySelector('.testimonial');
const slideContainer = ts.querySelector('.slide-container');
const slides = slideContainer.querySelectorAll('.slide')
let currentIdx = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideCount = slides.length;


//백투탑
window.addEventListener('scroll',()=>{
  let scrAmt = window.scrollY;
  if(scrAmt >= 300){
    btt.classList.add('active');
  }else{
    btt.classList.remove('active');
  }
});
btt.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  });
});

// 슬라이드쇼

slides.forEach((item,i)=>{
  item.style.left = i*100+'%';
});

moveSlide(0);

function moveSlide(idx){
  slideContainer.style.left = -idx*100+'%';
  currentIdx = idx;
  for(let slide of slides){
    slide.classList.remove('active');
  }
  slides[idx].classList.add('active');
}

nextBtn.addEventListener('click',()=>{
  let nextIdx = (currentIdx + 1)%slideCount;
  moveSlide(nextIdx);
})
prevBtn.addEventListener('click',()=>{
  let nextIdx = (currentIdx - 1 + slideCount)%slideCount;
  moveSlide(nextIdx);
})