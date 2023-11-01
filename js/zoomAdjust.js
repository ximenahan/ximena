window.addEventListener('resize', adjustSidebarZoom);

function getCurrentZoom() {
    return window.outerWidth / window.innerWidth;
}

function adjustSidebarZoom() {
    let zoomLevel = getCurrentZoom();
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = `scale(${1/zoomLevel})`;
    sidebar.style.transformOrigin = 'top left';
}

adjustSidebarZoom();

