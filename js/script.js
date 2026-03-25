document.addEventListener('DOMContentLoaded', function(){
   
const shareButtons = document.querySelectorAll('.article__share-button');

shareButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        document.querySelector('.article__share')
            .classList.toggle('hidden');

            if(window.screen.availWidth < 1200){
                 document.querySelector('.article__user')
                    .classList.toggle('hidden');
            }       
    });
});

});
