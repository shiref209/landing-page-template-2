// Navigation functionality
let navBar=document.getElementsByClassName('nav-items');
navItems=[...navBar[0].children];

for (let nav of navItems) {
    nav.addEventListener('click',()=>{
        let className=nav.innerText.toLowerCase();
        let section=document.getElementsByClassName(className);
        section[0].scrollIntoView({behavior:"smooth"});
        console.log(section);
    })
    
};
