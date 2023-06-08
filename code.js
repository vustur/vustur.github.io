// var thingsBox = document.getElementById("thingsBox")
// thingsBox.addEventListener('click', thingsEnable);

function toggleThings(isEnable){
    if (isEnable){
        var thingsBox = document.getElementById("thingsBox")
        var mainBox = document.getElementById("mainBox")
        var PText = document.getElementById("PText")
    
        console.log("thingsEnabled")
        thingsBox.style.visibility = "visible";
        thingsBox.style.opacity = "100%";
        thingsBox.style.marginRight = "30%";
        mainBox.style.marginLeft = "50vh";
        PText.style.color = "rgb(40, 40, 40)";
    }
    if (!isEnable){
        var thingsBox = document.getElementById("thingsBox")
        var mainBox = document.getElementById("mainBox")
        var PText = document.getElementById("PText")
    
        console.log("thingsDisabled")
        thingsBox.style.visibility = "hidden";
        thingsBox.style.opacity = "0%";
        mainBox.style.marginLeft = "80vh";
        PText.textContent = "Click to see more";
        PText.style.color = "rgba(157, 118, 228, 0.76)";
    }
}