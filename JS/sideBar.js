// Variables
let btn=document.querySelector('#btn');
let sidebar=document.querySelector('.sidebar');

// Function
btn.addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('hidden-sidebar');
    document.querySelector('.content-wrapper').classList.toggle('expand-wrapper');
    document.querySelector('.navbar').classList.toggle('expand-navbar');
    document.querySelector('.main-footer').classList.toggle('expand-footer');
    document.querySelector('.instructor-info').classList.toggle('instructor-information');
    document.querySelector('.table-head').classList.toggle('thead');
    document.querySelector('.table-data').classList.toggle('tdata');
})