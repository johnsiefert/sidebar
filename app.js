const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.sidebar-toggle')
const close = document.querySelector('.close-btn')


function toggleBtn(){
    sidebar.classList.toggle('show-sidebar');
}

function closeBtn(){
    sidebar.classList.remove('show-sidebar');

}

close.addEventListener('click',closeBtn)


toggle.addEventListener('click',toggleBtn)

