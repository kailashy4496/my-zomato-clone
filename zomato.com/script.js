// hamburger
function myFunction(){
    var x = document.getElementById("mynav");
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}

let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
    acco.onclick = () => {
        accordions.forEach((subcontent) => {
            subcontent.classList.remove("active");
        });
        acco.classList.add("active");
    };
});