//alert("Hello");

function myFunction() {
    //var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //document.getElementById("demo").style.color = "red";
    alert("Hej!");
}
console.log("Hello");


 /* FAQ´s funktions */
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}