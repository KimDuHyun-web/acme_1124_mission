const btt = document.querySelector('#btt');
const qs = document.querySelectorAll('.question');

window.scrollTo(0, 300);

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

// 아코디언
for(let q of qs){
  q.addEventListener('click',()=>{
    for(let q of qs){
      q.classList.remove('active');
    }
    q.classList.add('active');
  });
}

// 슬라이드쇼
