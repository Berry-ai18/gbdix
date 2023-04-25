const menu_btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation ul li');
const menu_span = document.querySelectorAll('.menu > span');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('open');
    nav.classList.toggle('open');
    menu_span.forEach( (e) => {
        e.classList.toggle('open');
    })
});

links.forEach(l => {
    l.addEventListener('click', e => {
        links.forEach( target => {
            let link = target.firstChild;
            if(link.classList.contains('active')){
                link.classList.remove('active');
            }
        });
        l.firstChild.classList.add('active');
    }); 
});