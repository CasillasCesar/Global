let geo = navigator.geolocation;

if(geo){
    geo.getCurrentPosition(
        function(data){
            var cr = data.coords;
        console.log(cr.latitude);
        console.log(cr.longitude);
        const tilesProvider =  	'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ; 
        let mymap = L.map('mapid').setView([cr.latitude,cr.longitude],13) /* var mymap = L.map('ID del div').setView([x,y],zoom) */
L.tileLayer(tilesProvider, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    minZoom: 3,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
        /* let marker = L.marker([51.505,-0.09]).addTo(mymap) */  /*  Marcador  */
        let marker = L.marker([51.51,-0.09]).addTo(mymap)  /*  Marcador  */
        let iconm  = L.icon({
            iconUrl : "https://www.flaticon.es/svg/static/icons/svg/1677/1677788.svg",
            iconSize: [40,40],
            iconAnchor: [20,40]
        })
        let marker2 = L.marker([51.51,-0.09],{icon:iconm}).addTo(mymap);

        mymap.on('dblclick',e => {
            let latLng = mymap.mouseEventToLatLng(e.originalEvent)
            L.marker([latLng.lat, latLng.lng]).addTo(mymap);
            console.log(latLng)
        })

        L.marker([cr.latitude,cr.longitude]).addTo(mymap);

    })
}