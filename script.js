 //Script JavaScript per gestire il carrello 
    // Funzione per aggiungere un prodotto al carrello
    function addToCart(product) {
        // Aggiungi il prodotto al carrello (puoi salvare i prodotti in un array o un oggetto)
        // Aggiorna la visualizzazione del carrello
        updateCart();
    }

    // Funzione per aggiornare la visualizzazione del carrello
    function updateCart() {
        // Ottieni l'elemento HTML del carrello
        var cartItemsElement = document.getElementById("cart-items");
        // Ottieni il totale del carrello
        var cartTotalElement = document.getElementById("cart-total");

        // Svuota il contenuto precedente del carrello
        cartItemsElement.innerHTML = "";

        // Calcola il totale del carrello
        var cartTotal = 0;

        // Cicla attraverso i prodotti nel carrello e crea gli elementi HTML per ciascun prodotto
        // Aggiungi il prodotto al carrello

        // Aggiorna il totale del carrello nell'elemento HTML
        cartTotalElement.textContent = "Totale: €" + cartTotal.toFixed(2);
    }

    // Funzione per gestire il click sul pulsante "Aggiungi al carrello"
    function handleAddToCartClick(event) {
        // Ottieni il prodotto associato al pulsante
        var product = event.target.parentNode;

        // Aggiungi il prodotto al carrello
        addToCart(product);
    }

    // Aggiungi l'evento di click a tutti i pulsanti "Aggiungi al carrello"
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", handleAddToCartClick);
    }