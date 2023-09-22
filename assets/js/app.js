let Hamburger = document.getElementById('Hamburger');
let pora_ul = document.getElementById('pora_ul');
let cross_white = document.getElementById('cross_white');
let pora_nav = document.getElementById('pora_nav');
let side_nav = document.getElementById('side_nav');



Hamburger.addEventListener('click' , navaya)

function navaya(){

    side_nav.style.top = 0 ;

    pora_ul.style.top = '0%';
    pora_ul.style.pointerEvents = 'all';
    pora_ul.style.opacity = 1;


    side_nav.style.left = 0;
}


cross_white.addEventListener('click' , navgya)

function navgya(){
    pora_nav.style.display = 'flex';
    pora_ul.style.top = '-100%';

    side_nav.style.top = '-110%' ;

}

let search  = document.getElementById('search');
let search_input = document.getElementById('search_input');
let image_section = document.getElementById('image_section');
let ptom = document.getElementById('ptom');
let search_close = document.getElementById('search_close');

search.addEventListener('click' , saya)

function saya(){
    search.style.display = 'none';
    search_input.style.display = 'flex';
    image_section.style.width = 'calc(100% - 200px)';
    ptom.style.display = "none";
    search_close.style.display = 'flex'
}

search_close.addEventListener('click' , sgya)

function sgya(){
    search.style.display = 'block';
    search_input.style.display = 'none';
    image_section.style.width = '100px';
    ptom.style.display = "flex";
    search_close.style.display = 'none';
}



let get_involved = document.getElementById('get_involved')
let cross_GI = document.getElementById('cross_GI')
let get_incliSe = document.getElementById('get_incliSe')
let get_involved_mobile = document.getElementById('get_involved_mobile')

get_involved_mobile.addEventListener('click' , ge_aya)

get_involved.addEventListener('click' , ge_aya)

function ge_aya(){
    get_incliSe.style.left = 0;
}

cross_GI.addEventListener('click' , ge_gya)

function ge_gya(){
    get_incliSe.style.left = "-100%";
}




let box = document.getElementById('box')

box.addEventListener('click' , bbg_aya)

function bbg_aya(){
    box.classList.toggle('bgaya');
}


let boxOne = document.getElementById('boxOne')

boxOne.addEventListener('click' , bbg_aya_two)

function bbg_aya_two(){
    boxOne.classList.toggle('bgaya');
}


let boxTwo = document.getElementById('boxTwo')

boxTwo.addEventListener('click' , bbg_aya_three)

function bbg_aya_three(){
    boxTwo.classList.toggle('bgaya');
}




// 


























// the disscussion page

