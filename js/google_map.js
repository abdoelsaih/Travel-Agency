function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.905969, lng: -8.5161637 },
        { lat: 52.3545828, lng: 4.7638777 },
        { lat: 50.1184096, lng: 8.6524655 },
        { lat: 50.843819, lng: 4.3598353 },
        { lat: 51.8668801, lng: -8.8910066 },
        { lat: 51.5285582, lng: -0.2416815 },
        { lat: 48.8588377, lng: 2.2770201 },
        { lat: 41.8504439, lng: 11.9544698 },
        { lat: 37.990832, lng: 23.7033199 },
        { lat: 39.9032923, lng: 32.6226801}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}