function toggleThings(isEnable){
    if (isEnable){
        var thingsBox = document.getElementById("thingsBox");
        var mainBox = document.getElementById("mainBox");
        var PText = document.getElementById("PText");
    
        console.log("thingsEnabled");
        thingsBox.style.visibility = "visible";
        thingsBox.style.opacity = "100%";
        thingsBox.style.marginRight = "30vw";
        mainBox.style.marginLeft = "18vw";
        PText.style.color = "rgb(40, 40, 40)";
    }
    if (!isEnable){
        var thingsBox = document.getElementById("thingsBox");
        var mainBox = document.getElementById("mainBox");
        var PText = document.getElementById("PText");
    
        console.log("thingsDisabled");
        thingsBox.style.visibility = "hidden";
        thingsBox.style.opacity = "0%";
        thingsBox.style.marginRight = "15vw";
        mainBox.style.marginLeft = "34vw";
        PText.style.color = "var(--orred)";
    }
}
function toggleProjects(isEnable){
    if (isEnable){
        var container = document.getElementById("container");
        console.log("showProjects1");

        container.style.marginTop = "-70vh";
        // stupid but working good 🔥
    }
    if(!isEnable){
        var container = document.getElementById("container");
        console.log("hideProjects1");

        container.style.marginTop = "40vh";
    }
}

var clicks = 0;

function thisSiteTextClick(){ // Easter egg. Not usefull
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
    console.log(clicks)
}
if (screen.width < 850){
    window.alert("Слишком маленькое окно")
}