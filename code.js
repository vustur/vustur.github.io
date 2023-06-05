// var thingsBox = document.getElementById("thingsBox")
// thingsBox.addEventListener('click', thingsEnable);

function thingsEnable(){
    console.log("lol")
    var thingsBox = document.getElementById("thingsBox")
    var mainBox = document.getElementById("mainBox")

    thingsBox.style.visibility = "visible";
    thingsBox.style.color = "rgb(145, 87, 242)";
    thingsBox.style.marginRight = "30%";
    mainBox.style.marginLeft = "50vh"
}