function searchGames() {
    // Declarações de variáveis
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let gallery = document.getElementById('posterGallery');
    let items = gallery.getElementsByClassName('poster-item');

    // Loop através de todos os pôsteres, e esconde os que não correspondem à busca
    for (let i = 0; i < items.length; i++) {
        let title = items[i].getElementsByTagName('h2')[0];
        if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
