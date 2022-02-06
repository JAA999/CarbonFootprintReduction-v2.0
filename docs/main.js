function openSidebar(){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebarCollapser").style.visibility = "visible";
    document.getElementById("sidebarCollapser").style.marginLeft = "180px";
    document.getElementById("sidebarCollapser").style.transitionDelay = "1s";
    document.getElementById("logo").style.top = "8%";
    document.getElementById("logo").style.width = "120px";
    document.getElementById("logo").style.height = "120px";
    document.getElementById("logo").style.marginLeft = "75px";
    document.getElementById("sidebarExpander").style.visibility = "hidden";
    document.getElementById("sidebarExpander").style.marginLeft = "180px";
    document.getElementById("homeLink").style.visibility = "visible";
    document.getElementById("overviewLink").style.visibility = "visible";
    document.getElementById("statisticsLink").style.visibility = "visible";
    document.getElementById("tipsLink").style.visibility = "visible";
    document.getElementById("main").style.marginLeft = "255px";
    document.getElementById("content").style.marginLeft = "255px";
}
function closeSidebar(){
    document.getElementById("sidebar").style.width = "80px";
    document.getElementById("sidebarCollapser").style.visibility = "hidden";
    document.getElementById("sidebarCollapser").style.marginLeft = "10px";
    document.getElementById("sidebarCollapser").style.transition = "0s";
    document.getElementById("logo").style.width = "50px";
    document.getElementById("logo").style.height = "50px";
    document.getElementById("logo").style.marginLeft = "15px";
    document.getElementById("sidebarExpander").style.visibility = "visible";
    document.getElementById("sidebarExpander").style.marginLeft = "10px";
    document.getElementById("homeLink").style.visibility = "hidden";
    document.getElementById("overviewLink").style.visibility = "hidden";
    document.getElementById("statisticsLink").style.visibility = "hidden";
    document.getElementById("tipsLink").style.visibility = "hidden";
    document.getElementById("main").style.marginLeft = "80px";
    document.getElementById("content").style.marginLeft = "80px";
}