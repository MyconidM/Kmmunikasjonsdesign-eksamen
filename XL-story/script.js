 //INITIATE MAP
 const centerLat = 59.911491
 const centerLong = 10.757933
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
     {name: "Napier Port", lat: -39.48333, long: 176.91667},
     {name: "Norsewood", lat: -40.0360, long: 176.1260},
     {name: "Seventy Mile Bush", lat: -40.484802, long: 176.012157},
     {name: "Kristiania", lat: 59.911491, long: 10.757933},
     {name: "Eidskog", lat: 59.98559, long: 12.05233},
     
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
     iconUrl: 'bilder/location-1093169_1280.png',
     iconSize: [28,40],
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
   


     if(scrollCount <= 100) {
         map.flyTo([centerLat, centerLong], 13)
     }else if(scrollCount <= 300 && scrollCount >= 100) {
         map.flyTo([-39.48333, 176.91667], 6)
     }
     if(scrollCount <= 300) {
        map.flyTo([centerLat, centerLong], 13)
    }else if(scrollCount <= 500 && scrollCount >= 300) {
        map.flyTo([59.98559, 12.05233], 14)
    }
    
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