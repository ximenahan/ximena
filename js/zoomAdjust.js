window.addEventListener('resize', adjustSidebarZoom);

function getCurrentZoom() {
    return window.outerWidth / window.innerWidth;
}

function adjustSidebarZoom() {
    let zoomLevel = getCurrentZoom();
    document.querySelector('.sidebar').style.transform = `scale(${1/zoomLevel})`;
}

// Initial adjustment when the page loads
adjustSidebarZoom();
