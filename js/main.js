const btt = document.querySelector('#btt');
const qs = document.querySelectorAll('.question');

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
