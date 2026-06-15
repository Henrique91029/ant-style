
function abrirScripts() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("scriptsPage").style.display = "block";
    window.scrollTo(0, 0);
}

function voltarHome() {
    document.getElementById("scriptsPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    window.scrollTo(0, 0);
}

function copiar(id) {

    let texto =
        document.getElementById(id).innerText;

    navigator.clipboard.writeText(texto);

    const btn = event.target;

btn.innerText = "✅ Copiado!";

setTimeout(() => {
    btn.innerText = "Copiar";
}, 2000);
}


fetch("https://api.countapi.xyz/hit/antstyle/site")
.then(response => response.json())
.then(data => {
    document.getElementById("visitas").innerText =
        `👥 ${data.value} visitas no site`;
})
.catch(() => {
    document.getElementById("visitas").innerText =
        "👥 Contador indisponível";
});