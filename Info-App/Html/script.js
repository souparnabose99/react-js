
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form")

btn.addEventListener("click", function (){
    if (form.classList.contains("hidden")){
        form.classList.remove("hidden")
        btn.textContent("12")
    } else {
        form.classList.add("hidden");
    }
})