document.addEventListener('DOMContentLoaded', function() {
    // Funktion zum Hinzufügen eines neuen Device-Eingabebereichs
    function addDeviceInput() {
        let deviceContainer = document.createElement('div');
        deviceContainer.className = 'device-input';
        deviceContainer.innerHTML = `
            <input type="text" placeholder="x1">
            <input type="text" placeholder="y1">
            <input type="text" placeholder="x2">
            <input type="text" placeholder="y2">
            <select>
                <option value="gray">Grau</option>
                <option value="red">Rot</option>
                <option value="green">Grün</option>
            </select>
            <button class="delete-device">Löschen</button>
        `;
        document.querySelector('.devices-container').appendChild(deviceContainer);

        // Event Listener für das Löschen-Button
        deviceContainer.querySelector('.delete-device').addEventListener('click', function() {
            deviceContainer.remove();
        });
    }

    // Event Listener für das "Device hinzufügen"-Button
    document.querySelector('#add-device').addEventListener('click', function() {
        addDeviceInput();
    });

    // Funktion zum Speichern der Daten im JSON-Format
    function saveDataToJson() {
        let siteCoordinates = {
            x1: document.getElementById('site-x1').value,
            y1: document.getElementById('site-y1').value,
            x2: document.getElementById('site-x2').value,
            y2: document.getElementById('site-y2').value,
        };

        let devices = Array.from(document.querySelectorAll('.device-input')).map(deviceDiv => {
            return {
                x1: deviceDiv.querySelector('input[placeholder="x1"]').value,
                y1: deviceDiv.querySelector('input[placeholder="y1"]').value,
                x2: deviceDiv.querySelector('input[placeholder="x2"]').value,
                y2: deviceDiv.querySelector('input[placeholder="y2"]').value,
                color: deviceDiv.querySelector('select').value,
            };
        });

        let data = {
            site: siteCoordinates,
            devices: devices
        };

        // Code zum Speichern der Daten in einer JSON-Datei
        console.log(JSON.stringify(data)); // Beispiel, wie die Daten angezeigt werden
        // Hier müsste der Code zum tatsächlichen Speichern der Daten ergänzt werden
    }

    // Event Listener für den "Generate"-Button
    document.querySelector('#generate').addEventListener('click', function() {
        saveDataToJson();
    });
});
