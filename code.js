function toggleThings(isEnable){
    var thingsBox = document.getElementById("thingsBox");
    var mainBox = document.getElementById("mainBox");

    if (isEnable){
        console.log("thingsEnabled");
        thingsBox.style.visibility = "visible";
        thingsBox.style.opacity = "100%";
        thingsBox.style.marginRight = "30vw";
        mainBox.style.marginLeft = "18vw";
    }
    if (!isEnable){
        console.log("thingsDisabled");
        thingsBox.style.visibility = "hidden";
        thingsBox.style.opacity = "0%";
        thingsBox.style.marginRight = "15vw";
        mainBox.style.marginLeft = "34vw";
    }
}
function toggleProjects(isEnable){
    var container = document.getElementById("container");
    var projects = document.getElementById("projects");

    if (isEnable){
        container.style.marginTop = "-70vh";
        projects.style.visibility = "visible"
        container.style.visibility = "hidden"
        // stupid but working good 🔥
    }
    if(!isEnable){
        container.style.marginTop = "40vh";
        projects.style.visibility = "hidden"
        container.style.visibility = "visible"
    }
}

var clicks = 0;

/* function thisSiteTextClick(){ // Easter egg. Not usefull. UPD: Появился баг с этой штукой, пока решил убрать
    console.log(clicks)
    var tstext = document.getElementById("thisSiteText");

    if (clicks == 0){
        tstext.textContent = "??";
    }
    if (clicks == 1){
        tstext.textContent = "Still this site";
    }
    if (clicks == 2){
        tstext.textContent = "This button has no link";
    }
    if (clicks == 3){
        tstext.textContent = "'Insert your text with devtools'";
    }
    if (clicks == 4){
        tstext.textContent = "why do you click";
    }
    if (clicks == 5){
        tstext.textContent = ">:(";
        toggleProjects(false);
    }
    if (clicks == 6){
        tstext.textContent = "aaaaaaaaaaaaaaa";
        tstext.style.color = "red";
        tstext.style.fontSize = "0px";
    }
    
    clicks = clicks + 1;
    console.log(clicks);
} */

var locs = window.location.pathname.split("/")
var myLoc = locs[locs.length - 1] // Последняя часть пути (будет либо index.html, либо toosmall.html)
if (screen.width < 850 && myLoc == "index.html"){
    window.alert("Слишком маленькое окно");
    window.location.href = "toosmall";
    console.log("too small wind")
}
if (screen.width >= 850 && myLoc == "toosmall.html"){
    window.location.href = "index";
    console.log("normal wind")
}

document.addEventListener("wheel", (event) => {
    wheel = event.deltaY;
    //  console.log(wheel)
    if (wheel < 0){
        toggleProjects(false)
    }
    if (wheel > 0){
        toggleProjects(true)
    }
})