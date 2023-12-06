
document.addEventListener('DOMContentLoaded', function() {
    fetch('data_2.json')
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
            if (!device || !device.coordinates || device.coordinates.length !== 4) {
                console.error('Fehlerhafte Parkplatz-Daten:', device);
                return;
            }

            var el = document.createElement('div');
            el.className = 'device';
            el.style.backgroundColor = device.color;
            el.style.position = 'absolute';
            el.style.left = device.coordinates[0] + 'px';
            el.style.top = device.coordinates[1] + 'px';
            var width = device.coordinates[2] - device.coordinates[0];
            var height = device.coordinates[3] - device.coordinates[1];
            el.style.width = width + 'px';
            el.style.height = height + 'px';

            // Add the ID of the device
            var idText = document.createElement('span');
            idText.textContent = device.id;
            idText.style.position = 'absolute';
            idText.style.left = '5px';
            idText.style.top = '5px';
            el.appendChild(idText);

            // Add disabled and electricity icons if applicable, with size as 10% of the rectangle
            var iconSize = { width: width * 0.2, height: height * 0.3 };
            if (device.disabled) {
                var disabledIcon = document.createElement('img');
                disabledIcon.src = 'disabled.png';
                disabledIcon.style.position = 'absolute';
                disabledIcon.style.right = '5px';
                disabledIcon.style.top = '5px';
                disabledIcon.style.width = iconSize.width + 'px';
                disabledIcon.style.height = iconSize.height + 'px';
                el.appendChild(disabledIcon);
            }
            if (device.electricity) {
                var electricityIcon = document.createElement('img');
                electricityIcon.src = 'electricity.png';
                electricityIcon.style.position = 'absolute';
                electricityIcon.style.right = '5px';
                electricityIcon.style.bottom = '5px';
                electricityIcon.style.width = iconSize.width + 'px';
                electricityIcon.style.height = iconSize.height + 'px';
                el.appendChild(electricityIcon);
            }

            siteContainer.appendChild(el);
        });
    });
});
