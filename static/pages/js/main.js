

function showMenu(){
    
        var menu = document.getElementById("dynamic-menu");
        menu.classList.toggle('open');
        document.getElementById("dynamic-menu").classList.toggle('x');
      
}

document.getElementById("toggle").onclick = showMenu;
