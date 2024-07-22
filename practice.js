burger = document.querySelector(".burger")
nav_list = document.querySelector(".nav_list")
nav_list_content = document.querySelector(".nav_list_content")
right_nav = document.querySelector(".right_nav")




burger.addEventListener('click', ()=>{
    nav_list.classList.toggle("h_nav")
    nav_list_content.classList.toggle("v_class")
    right_nav.classList.toggle("v_class")

})