document.addEventListener("DOMContentLoaded", function() {
    // Load initial data from site_data.json when the page loads
    fetch('site_data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('site').value = data.site;
            document.getElementById('upperLeft').value = data.upperLeft;
            document.getElementById('lowerLeft').value = data.lowerLeft;
            document.getElementById('upperRight').value = data.upperRight;
            document.getElementById('lowerRight').value = data.lowerRight;
        })
        .catch(error => console.error('Error loading data:', error));
});

function saveData() {
    // Gather data from input fields
    const siteValue = document.getElementById('site').value;
    const upperLeftValue = document.getElementById('upperLeft').value;
    const lowerLeftValue = document.getElementById('lowerLeft').value;
    const upperRightValue = document.getElementById('upperRight').value;
    const lowerRightValue = document.getElementById('lowerRight').value;

    // Create a JSON object with the gathered data
    const dataObject = {
        site: siteValue,
        upperLeft: upperLeftValue,
        lowerLeft: lowerLeftValue,
        upperRight: upperRightValue,
        lowerRight: lowerRightValue,
    };

    // Send the data to be saved to site_data.json
    fetch('site_data.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved successfully:', data);
    })
    .catch(error => console.error('Error saving data:', error));
}
