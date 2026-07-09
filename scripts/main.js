const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "image/Logo_Chelsea.png") {
    monImage.setAttribute("src", "image/chelseawinner.png");
  } else {
    monImage.setAttribute("src", "image/Logo_Chelsea.png");
  }
});
let monBouton = document.querySelector("button");
let monTitre = document.querySelector("h1");
function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  if (!monNom) {
    definirNomUtilisateur();
  } else {
    localStorage.setItem("nom", monNom);
    monTitre.textContent = `Apprends l'histoire de chelsea en 1min top chrono, ${monNom}`;
  }
}
monBouton.addEventListener("click", () => {
  definirNomUtilisateur();
});
