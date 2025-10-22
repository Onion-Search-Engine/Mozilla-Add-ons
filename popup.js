const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

function performSearch() {
    const query = searchInput.value;
    if (query.trim() === "") {
        return; // Non fare nulla se la ricerca è vuota
    }

    // Costruisce l'URL della ricerca
    const searchUrl = `https://onionsearchengine.com/search.php?q=${encodeURIComponent(query)}`;

    // Usa l'API delle estensioni per creare una nuova scheda con l'URL della ricerca
    browser.tabs.create({
        url: searchUrl
    });
}

// Esegui la ricerca quando il pulsante viene cliccato
searchButton.addEventListener('click', performSearch);

// Esegui la ricerca anche quando viene premuto "Invio" nel campo di testo
searchInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});
