let buttons = document.querySelectorAll(".sound");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let soundFile = button.getAttribute("data-sound");
        let audio = new Audio(`${soundFile}`); 
        audio.play();
    });
});
