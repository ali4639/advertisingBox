window.onload = function(){
    
    let start_time = 10;
    let ad_content = document.getElementById('ad');
    let close_btn = document.querySelector('.close');
    let timer = document.querySelector('.timer');
    let start_timer = window.setInterval(show_close_btn, 1000);

    close_btn.addEventListener('click', function(){
        ad_content.style.display = 'none';
    });

    function show_close_btn(){

        timer.innerText = start_time + ' sec';
        start_time--;

        if(start_time === 0){
            close_btn.style.display = 'block';
            timer.style.display = 'none';
            window.clearInterval(start_timer);
        }
    }
}


    