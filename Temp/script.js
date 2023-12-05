// Funktion zum Erstellen einer Karte
function createMap() {
    // Hier sollte der Code stehen, um Ihre Karte zu initialisieren.
    // Beispiel: new google.maps.Map(document.getElementById('map'), {...});
}

// Funktion zum Setzen einer Markierung auf der Karte
function setMarker(map, latitude, longitude) {
    // Hier sollte der Code stehen, um eine Markierung auf Ihrer Karte zu setzen.
    // Beispiel: new google.maps.Marker({position: {lat: latitude, lng: longitude}, map: map});
}

// Hauptfunktion zum Erstellen der Parkplatzkarte
function createParkingMap() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Karte erstellen
            const map = createMap();

            // Durchlaufen jedes Parkplatzes in der JSON-Datei
            data.forEach(item => {
                const parkLot = item.site.parkLot;

                // Hier setzen wir Markierungen für jede Ecke des Parkplatzes
                setMarker(map, parkLot.upperLeft.lat, parkLot.upperLeft.long);
                setMarker(map, parkLot.lowerLeft.lat, parkLot.lowerLeft.long);
                setMarker(map, parkLot.upperRight.lat, parkLot.upperRight.long);
                setMarker(map, parkLot.lowerRight.lat, parkLot.lowerRight.long);
            });
        })
        .catch(error => {
            console.error('Fehler beim Laden der JSON-Daten: ', error);
        });
}

// Aufrufen der createParkingMap Funktion, wenn die Webseite geladen wird
window.onload = createParkingMap;
