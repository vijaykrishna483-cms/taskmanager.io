function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".humburger-icon");
    menu.classlist.toggle("open");
    icon.classlist.toggle("open");
}