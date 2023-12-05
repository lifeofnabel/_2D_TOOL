document.getElementById('updateJsonButton').addEventListener('click', function() {
    const formData = collectFormData();
    console.log('Updating JSON with:', formData);

    // Hier müsstest du einen HTTP-Request an deinen Server senden,
    // der die Daten entgegennimmt und die JSON-Datei aktualisiert.
    // Beispiel: fetch('/update-json', { method: 'POST', body: JSON.stringify(formData) });

    // Diese Beispiel-Implementierung zeigt nur die gesammelten Daten in der Konsole.
});

function collectFormData() {
    const form = document.getElementById('jsonEditorForm');
    const formData = {
        tenants: [
            {
                name: "TU Darmstadt",
                zones: [
                    {
                        name: "Campus Stadtmitte",
                        sites: [
                            {
                                name: "Gebäude S1",
                                parkLots: []
                            }
                        ]
                    }
                ]
            }
        ]
    };

    // Sammle alle Gerätedaten
    const deviceInputs = form.querySelectorAll('#device-inputs .input-group');
    deviceInputs.forEach((group, index) => {
        const deviceData = {
            id: index + 1,
            coordinates: {
                upperLeft: {
                    latitude: parseFloat(group.querySelector('[name^="upperLeftLat"]').value),
                    longitude: parseFloat(group.querySelector('[name^="upperLeftLong"]').value)
                },
                lowerLeft: {
                    latitude: parseFloat(group.querySelector('[name^="lowerLeftLat"]').value),
                    longitude: parseFloat(group.querySelector('[name^="lowerLeftLong"]').value)
                },
                upperRight: {
                    latitude: parseFloat(group.querySelector('[name^="upperRightLat"]').value),
                    longitude: parseFloat(group.querySelector('[name^="upperRightLong"]').value)
                },
                lowerRight: {
                    latitude: parseFloat(group.querySelector('[name^="lowerRightLat"]').value),
                    longitude: parseFloat(group.querySelector('[name^="lowerRightLong"]').value)
                }
            }
        };
        formData.tenants[0].zones[0].sites[0].parkLots.push(deviceData);
    });

    return formData;
}
