function handleClick(e) {
    e.style.color = "white";
    addAnimation(e.textContent);
    setTimeout(function () {
        e.style.color = "#da0463";
    }, 100);
    makeSound(e.textContent);
}

document.addEventListener("keypress", function (e) {
    addAnimation(e.key);
    makeSound(e.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var w = new Audio('sounds/tom-1.mp3');
            w.play();
            break;
        case "a":
            var a = new Audio('sounds/tom-2.mp3');
            a.play();
            break;
        case "s":
            var s = new Audio('sounds/tom-3.mp3');
            s.play();
            break;
        case "d":
            var d = new Audio('sounds/tom-4.mp3');
            d.play();
            break;
        case "j":
            var j = new Audio('sounds/snare.mp3');
            j.play();
            break;
        case "k":
            var k = new Audio('sounds/crash.mp3');
            k.play();
            break;
        case "l":
            var l = new Audio('sounds/kick-bass.mp3');
            l.play();
            break;

        default:
            break;
    }
}

function addAnimation(key) {
    var element = document.querySelector("." + key);
    element.classList.add("pressed");
    setTimeout(function () {
        element.classList.remove("pressed");
    }, 100);
}