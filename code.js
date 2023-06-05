// var thingsBox = document.getElementById("thingsBox")
// thingsBox.addEventListener('click', thingsEnable);

function thingsEnable(){
    console.log("thingsEnabled")
    var thingsBox = document.getElementById("thingsBox")
    var mainBox = document.getElementById("mainBox")
    thingsBox.style.visibility = "visible";
    thingsBox.style.opacity = "100%";
    thingsBox.style.marginRight = "30%";
    mainBox.style.marginLeft = "50vh"
}