
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
        var siteContainer = document.getElementById('siteContainer');

        // Assuming jsonData is an array with one element representing the site
        var siteData = jsonData[0];
        if (!siteData || !siteData.site || !siteData.devices || !Array.isArray(siteData.devices[0])) {
            console.error('Fehlerhafte Site-Daten:', siteData);
            return;
        }

        // Set the dimensions of the siteContainer based on siteData.site.coordinates
        siteContainer.style.position = 'relative';
        siteContainer.style.width = (siteData.site.coordinates[2] - siteData.site.coordinates[0]) + 'px';
        siteContainer.style.height = (siteData.site.coordinates[3] - siteData.site.coordinates[1]) + 'px';

        // Accessing the inner array of devices
        var devices = siteData.devices[0];
        devices.forEach(function(device) {
            // Überprüfen Sie, ob das Parkplatz-Objekt und die Koordinaten existieren
            if (!device || !device.coordinates || device.coordinates.length !== 4) {
                console.error('Fehlerhafte Parkplatz-Daten:', device);
                return; // Überspringen Sie dieses Parkplatz-Objekt, da die Daten fehlerhaft sind
            }

            var el = document.createElement('div');
            el.className = 'device';
            el.style.backgroundColor = device.color;
            el.style.position = 'absolute';
            el.style.left = device.coordinates[0] + 'px';
            el.style.top = device.coordinates[1] + 'px';
            el.style.width = (device.coordinates[2] - device.coordinates[0]) + 'px';
            el.style.height = (device.coordinates[3] - device.coordinates[1]) + 'px';
            siteContainer.appendChild(el);
        });
    });
});
