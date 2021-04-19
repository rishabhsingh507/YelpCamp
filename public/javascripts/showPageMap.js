mapboxgl.accessToken = mapToken;

const bounds = [
    [-140.633295, 11.007847,], // Southwest coordinates
    [-48.755852, 51.520754,] // Northeast coordinates
];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: campground.geometry.coordinates,
    zoom: 9,
    maxBounds: bounds
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3>`
            )
    )
    .addTo(map)