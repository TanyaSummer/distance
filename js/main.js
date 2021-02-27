const menuBtn = document.querySelector(".m-menu"); /*переменная берется с классом .m-menu из документа */
const menu = document.querySelector(".menu-sidebar");/*переменная берется с классом .menu-sidebar из документа */

menuBtn.addEventListener('click', function(){
  menu.classList.toggle("activ"); /*menu меняет свой клас на activ*/
  
});
