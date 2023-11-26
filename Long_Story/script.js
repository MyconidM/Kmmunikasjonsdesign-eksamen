 //INITIATE MAP
 const centerLat = 59.1294
 const centerLong = 11.3537
 //let map = L.map('map').setView([centerLat, centerLong], 13);
 let map = L.map('mapContainer', {
     center: [centerLat, centerLong],
     zoom: 13,
     scrollWheelZoom: false
 })
 //SET MAP CONSTRUCTOR
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);

 //PLACES
 const places = [
     {name: "Rema 1000 Risum", lat: 59.1186, long: 11.4092},
     {name: "Rema 1000 Busterudgata", lat: 59.1261, long: 11.3858},
     {name: "Rema 1000 Tistedal", lat: 59.1258, long: 11.4450},
     {name: "Rema 1000 Brødløs", lat: 59.1291, long: 11.3796},
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
     iconUrl: 'rema1000symbol.png',
     iconSize: [40,40],
     iconAnchor: [20,20],
     popupAnchor: [0, -20]
 })
 places.map((place) => {
     L.marker([place.lat, place.long], {icon: remaIcon}).addTo(map).bindPopup(place.name)
 })
 //SCRIPT FOR CHANGING MAP LOCATION
 document.addEventListener('scroll', function () {
     if(isInViewport(document.getElementById("segment1"))) {
         map.flyTo([centerLat, centerLong], 13)
     }
     if(isInViewport(document.getElementById("segement2"))) {
         map.flyTo([59.1261,11.3858], 17)
     }
    //  if(isInViewport(document.getElementById("r1000s"))) {
    //      map.flyTo([59.1282, 11.2745], 17)
    //  }
    //  if(isInViewport(document.getElementById("r1000t"))) {
    //      map.flyTo([59.1258, 11.4450], 17)
    //  }
    //  if(isInViewport(document.getElementById("r1000br"))) {
    //      map.flyTo([59.1291, 11.3796], 17)
    //  }
    //  if(isInViewport(document.getElementById("r1000r"))) {
    //      map.flyTo([59.1186, 11.4092], 17)
    //  }
    //  if(isInViewport(document.getElementById("start"))) {
    //      map.flyTo([centerLat, centerLong], 13)
    //  }
 }, {
     passive: true
 });