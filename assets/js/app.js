// Navigation functionality
let navItems=document.getElementsByClassName('nav-items');
const services=document.getElementsByClassName('services-cont');
const portofolio=document.getElementsByClassName('portofolio-cont');
const about=document.getElementsByClassName('about');
const news=document.getElementsByClassName('news');
const contact=document.getElementsByClassName('contact');


for (let nav of navItems){
    nav.addEventListener('click',(nav)=>{
        let section=document.getElementsByClassName(nav);
        nav.scrollIntoView();
        console.log(section)
    })
}
console.log('hii')