const liList = document.querySelectorAll('#menu ul li');

liList.forEach((li)=>{
    li.addEventListener('click', ()=>{
        liList.forEach((items) => items.classList.remove('active'));
        li.classList.add('active');        
    })
})