var counter = 1;

function switchSlide() {
    document.getElementById('radio' + counter).checked = true;

    // Standardowe opóźnienie między slajdami
    setTimeout(function() {
        counter++;

        // Po osiągnięciu ostatniego slajdu, zaczekaj 10 sekund i wróć do pierwszego slajdu
        if (counter > 4) {
            counter = 1;
            setTimeout(switchSlide, 8000);
        } else {
            switchSlide(); // Rekurencyjne wywołanie switchSlide
        }
    }, 10000);
}

switchSlide(); // Rozpocznij pierwsze przełączenie slajdu
