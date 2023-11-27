//INITIATE MAP
const centerLat = 59.911491
const centerLong = 10.757933
//let map = L.map('map').setView([centerLat, centerLong], 13);
let map = L.map('mapContainer', {
    center: [centerLat, centerLong],
    zoom: 10,
    scrollWheelZoom: false
})
//SET MAP CONSTRUCTOR
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//PLACES
const places = [
    {name: "Oslo tegne- og male skole", lat: 59.91450951142213, long: 10.757941626990723},
    {name: "Kunst Akademiet i Praha", lat: 50.10287141172272, long: 14.424546410679467},
    {name: "Metafora,Moderne kunst skole Barcelona", lat: 41.378277586150354, long: 2.1329286134953622},
    {name: "Fredrikstad", lat: 59.2181, long: 10.9298},
    // {name: "Rema 1000 Svinesundsparken", lat: 59.1282, long: 11.2745}
]

//Function to check if element is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) || 
        (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth))
    );
}
//SET MARKERS
//create custom icon:
const remaIcon = L.icon({
    //Bilde: https://pixabay.com/vectors/location-locator-map-position-1093169/
    iconUrl: 'bilder/location-1093169_1280.png',
    iconSize: [27,40],
    iconAnchor: [20,20],
    popupAnchor: [0, -20]
})
places.map((place) => {
    L.marker([place.lat, place.long], {icon: remaIcon}).addTo(map).bindPopup(place.name)
})
//SCRIPT FOR CHANGING MAP LOCATION
document.addEventListener('scroll', function () {
    const element = document.documentElement;
    const percentOfScreenHeightScroll = element.scrollTop / element.clientHeight;
    const scrollCount = Math.min(percentOfScreenHeightScroll * 100);
    console.log('Y: ' + scrollCount);
    element.style.setProperty("--scroll", scrollCount);

    
    if(isInViewport(document.getElementById("segment1"))) {
        map.flyTo([centerLat, centerLong], 6)
    }
    if(isInViewport(document.getElementById("segment2"))) {
        map.flyTo([59.91452026797165, 10.757941626990723], 17)
    }
    if(isInViewport(document.getElementById("segment3"))) {
        map.flyTo([50.10287141172272, 14.424546410679467], 17)
    }
    if(isInViewport(document.getElementById("segment4"))) {
        map.flyTo([41.378277586150354, 2.1329286134953622], 17)
    }
    if(scrollCount <= 800 && scrollCount >= 600) {
        map.flyTo([59.2181, 10.9298], 10)
    }
    
}, {
    passive: true
});