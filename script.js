window.onscroll = function() {
    fixHeader();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function fixHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("fixed");
        header.style.top = "0px";
        banner.style.marginBottom = "10px";
    } else {
        header.classList.remove("fixed");
        header.style.top = "100px";
        banner.style.marginBottom = "-72px";
    }
}

document.getElementById('openSidebar').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.sidebar-container').style.right = '0';
});

document.addEventListener('click', function(event) {
    var sidebarContainer = document.querySelector('.sidebar-container');
    if (event.target !== sidebarContainer && !sidebarContainer.contains(event.target)) {
        sidebarContainer.style.right = '-450px';
    }
});

document.getElementById('openSidebars').addEventListener('click', function() {
    var sidebarsContainer = document.getElementById('sidebarsContainer');
    
    if (sidebarsContainer.style.height === '0px' || sidebarsContainer.style.height === '') {
        sidebarsContainer.style.height = '80px';
        sidebarsContainer.style.opacity = '1';
    } else {
        sidebarsContainer.style.height = '0px';
        sidebarsContainer.style.opacity = '0';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    positionSidebar();
    window.addEventListener('resize', function() {
        positionSidebar();
    });
});