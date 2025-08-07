const togglebtn = document.getElementById("togglebtn");
const body = document.body;

togglebtn.addEventListener("click",() => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains ("dark-mode")) {
        togglebtn.textContent="🌞 light mode";
    } else {
        togglebtn.textContent="🌛 dark mode"
    }
})
