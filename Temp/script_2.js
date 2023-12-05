document.addEventListener('DOMContentLoaded', (event) => {
    let deviceCount = 0; // Keep track of how many devices have been added

    document.getElementById('addDeviceButton').addEventListener('click', function() {
        deviceCount++; // Increment the device count

        // Get the device inputs container
        const deviceInputs = document.getElementById('device-inputs');

        // Create a new div to hold the new device inputs
        const newDeviceGroup = document.createElement('div');
        newDeviceGroup.classList.add('input-group');

        // Create the <h2> heading for the new device
        const heading = document.createElement('h2');
        heading.textContent = 'Device:';
        newDeviceGroup.appendChild(heading); // Append the heading to the new device group

        // Define the fields for a new device (latitude and longitude for each corner)
        const fields = [
            { label: 'Upper Left Latitude', id: 'upperLeftLat' },
            { label: 'Upper Left Longitude', id: 'upperLeftLong' },
            { label: 'Lower Left Latitude', id: 'lowerLeftLat' },
            { label: 'Lower Left Longitude', id: 'lowerLeftLong' },
            { label: 'Upper Right Latitude', id: 'upperRightLat' },
            { label: 'Upper Right Longitude', id: 'upperRightLong' },
            { label: 'Lower Right Latitude', id: 'lowerRightLat' },
            { label: 'Lower Right Longitude', id: 'lowerRightLong' },
        ];

        // Create and append the new input fields to the newDeviceGroup
        fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label + ':';
            const uniqueId = field.id + 'Device' + deviceCount; // Ensure unique ID
            label.setAttribute('for', uniqueId);

            const input = document.createElement('input');
            input.type = 'text';
            input.id = uniqueId;
            input.name = uniqueId;

            newDeviceGroup.appendChild(label);
            newDeviceGroup.appendChild(input);
        });

        // Append the new group of inputs to the deviceInputs container
        deviceInputs.appendChild(newDeviceGroup);
    });
});
