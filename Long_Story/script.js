//INITIATE MAP
const centerLat = -39.48333
const centerLong = 174.8860
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
    {name: "Seventy Mile Bush", lat: -40.484802, long: 176.012157},
    {name: "Norsewood", lat: -40.0360, long: 176.1260},
    {name: "Rema 1000 Tistedal", lat: 59.1258, long: 11.4450},
    {name: "Napier Port", lat: -39.48333, long: 176.91667},
    {name: "Rema 1000 Svinesundsparken", lat: 59.1282, long: 11.2745}
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
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/The_Mangatainoko_River%2C_Seventy_Mile_Bush%2C_N.Z.jpg/2560px-The_Mangatainoko_River%2C_Seventy_Mile_Bush%2C_N.Z.jpg',
    iconSize: [40,40],
    iconAnchor: [20,20],
    popupAnchor: [0, -20]
})
places.map((place) => {
    L.marker([place.lat, place.long], {icon: remaIcon}).addTo(map).bindPopup(place.name)
})
//SCRIPT FOR CHANGING MAP LOCATION
document.addEventListener('scroll', function () {
    if(isInViewport(document.getElementById("start"))) {
        map.flyTo([centerLat, centerLong], 6)
    }
    if(isInViewport(document.getElementById("Napier"))) {
        map.flyTo([-39.48333,176.91667], 12)
    }
    if(isInViewport(document.getElementById("SMB"))) {
        map.flyTo([-40.484802,176.012157], 8)
    }
    if(isInViewport(document.getElementById("r1000t"))) {
        map.flyTo([59.1258, 11.4450], 17)
    }
    if(isInViewport(document.getElementById("r1000br"))) {
        map.flyTo([59.1291, 11.3796], 17)
    }
    if(isInViewport(document.getElementById("r1000r"))) {
        map.flyTo([59.1186, 11.4092], 17)
    }
    if(isInViewport(document.getElementById("start"))) {
        map.flyTo([centerLat, centerLong], 5)
    }
}, {
    passive: true
});