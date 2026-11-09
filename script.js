
// NUMÉRO WHATSAPP DE LA VENDEUSE
// Remplace ce numéro par le sien.
// Format international sans + ni espaces.

const vendeurWhatsApp = "2250576319365";

let selectedProduct = "";
let selectedPrice = 0;

// Sélection du vêtement
function selectProduct(name, price) {
    selectedProduct = name;
    selectedPrice = price;

    document.getElementById("product").value = name;
    document.getElementById("price").value =
        price.toLocaleString("fr-FR") + " FCFA";

    document.getElementById("commande").scrollIntoView({
        behavior: "smooth"
    });
}

// Envoi de la commande
document.getElementById("orderForm").addEventListener("submit", function(e) {

    e.preventDefault();

    if (!selectedProduct) {
        alert("Veuillez d'abord choisir un vêtement.");
        return;
    }

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const size = document.getElementById("size").value;
    const quantity = Number(document.getElementById("quantity").value);

    if (!name || !phone || !address || !size || quantity < 1) {
        alert("Veuillez remplir correctement tous les champs.");
        return;
    }

    const total = selectedPrice * quantity;

    const message =
`Bonjour, je souhaite passer une commande.

Produit : ${selectedProduct}
Prix unitaire : ${selectedPrice.toLocaleString("fr-FR")} FCFA
Taille : ${size}
Quantité : ${quantity}
Total : ${total.toLocaleString("fr-FR")} FCFA

MES COORDONNÉES :
Nom : ${name}
Téléphone : ${phone}
Adresse : ${address}

Merci de confirmer ma commande.`;

    const whatsappURL =
        "https://wa.me/" + vendeurWhatsApp +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});
