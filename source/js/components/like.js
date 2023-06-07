const buttons = [...document.querySelectorAll(".project-card__like")];

buttons.map(function(btn){
    btn.addEventListener('click', function(){
        btn.classList.toggle('active');
    })
})