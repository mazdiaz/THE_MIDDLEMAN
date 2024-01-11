function getDirectionsToStore(storeLocation) {
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: userLocation
    });
    directionsRenderer.setMap(map);
    directionsService.route({
        origin: userLocation,
        destination: storeLocation,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}