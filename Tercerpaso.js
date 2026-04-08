const btinicio= document.getElementById ("inicio")
const btinicio= document.getElementById ("educacion")
const btinicio= document.getElementById ("experiencia")

btninicio.addEventListener("click", function() {
document.getElementById("INICIO").scrollIntoView({ behavior:"smooth" });
});

btnacerca.addEventListener("click", function() {
document.getElementById("EDUCACION").scrollIntoView({ behavior:"smooth" });
});

btnayuda.addEventListener("click", function() {
document.getElementById("EXPERIENCIA").scrollIntoView({ behavior:"smooth" });
});
