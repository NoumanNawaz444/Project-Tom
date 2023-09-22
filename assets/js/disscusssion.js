let right_side_aya = document.getElementById('right_side_aya')
let cross_right_sidebar = document.getElementById('cross_right_sidebar')
let pora_rightsideBAr = document.getElementById('pora_rightsideBAr')




right_side_aya.addEventListener('click' , rightsidebar_aya)

function rightsidebar_aya(){
    pora_rightsideBAr.style.left = 0 ;
}

cross_right_sidebar.addEventListener('click' , rightSidevarGya)

function rightSidevarGya(){
    pora_rightsideBAr.style.left = '-100%'
}