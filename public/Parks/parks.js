const event = new Date();
let year = event.getFullYear();
console.log('month  :' + event.getMonth());
let month = event.getMonth();
console.log('day  :'+ event.getDate() );
let day = event.getDate();

fetch(`https://api.sunrise-sunset.org/json?lat=27.3304986&lng=-82.4611353,&date=${year}-${month}-${day}&formatted=0`)
    .then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);

    let sunrise1 = data.results.sunrise;
    let lrise = new Date(sunrise1);
    lrise = lrise.toLocaleTimeString('en-US');
    
    let sunset1 = data.results.sunset;
    let lset = new Date(sunset1);
    lset = lset.toLocaleTimeString('en-US');
    
    let dawn1 = data.results.civil_twilight_begin;
    let ldawn = new Date(dawn1);
    ldawn = ldawn.toLocaleTimeString('en-US');
    
    let dusk1 = data.results.civil_twilight_end;
    let ldusk = new Date(dusk1);
    ldusk = ldusk.toLocaleTimeString('en-US');
    
    document.getElementById('todayDawn').innerHTML = "Dawn:   "+ ldawn;
    document.getElementById('todayRise').innerHTML ="Sunrise:  "+ lrise;
    document.getElementById('todaySet').innerHTML = "Sunset:   "+ lset;
    document.getElementById('todayDusk').innerHTML = "Dusk:  "+ ldusk;
    
}).catch((err) => {
    console.warn(err);
});

const mymap = L.map('mapid').setView([27.27, -82.409], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    icon: '<i class="fas fa-paw fa-2x"></i>',
    accessToken: 'pk.eyJ1IjoicGF1bHhsIiwiYSI6ImNrY2t2ZmR0eTAyc24yeG81MXZ6Zjk2NnIifQ.5tOSDKgLVywaZFcpIBlH_w'
}).addTo(mymap);


const myIcon = L.divIcon({
    html: '<i class="fas fa-paw fa-2x"></i>',
    className: 'myDivIcon'
});

const homeMarker = L.marker([27.34365, -82.4515]).addTo(mymap);
homeMarker.bindPopup('<b>Home Base</b><br>Starting Point');

const nbPark = L.marker([27.3709813, -82.4495922], { icon: myIcon }).addTo(mymap);
nbPark.bindPopup('<b>Nathan Benderson Park</b><br>Large multi-purpose park<br>Dog Friendly');

const conservPark = L.marker([27.3955006, -82.4918836], { icon: myIcon }).addTo(mymap);
conservPark.bindPopup('<b>Conservatory Park</b><br>Small but nice<br>Dog Friendly');

const myakkaState = L.marker([27.188282, -82.3323195], { icon: myIcon }).addTo(mymap);
myakkaState.bindPopup('<b>Myakka River State Park</b><br>Big well rated<br>Dog Friendly');

const jelksPark = L.marker([27.0915177, -82.3405482], { icon: myIcon }).addTo(mymap);
jelksPark.bindPopup('<b>Jelks Preserve</b><br>Large park, dog friendly');

const sleepTurS = L.marker([27.0998113, -82.3455196], { icon: myIcon }).addTo(mymap);
sleepTurS.bindPopup('<b>Sleeping Turtle Preserve South</b><br>Pond access but not to river<br>Dogs Yes');

const sleepTurN = L.marker([27.1224473, -82.3535812], { icon: myIcon }).addTo(mymap);
sleepTurN.bindPopup('<b>Sleeping Turtle Preserve North</b><br>Great Canopy, walks along Myakka River<br>Dogs Yes');

const pawParkBeach = L.marker([27.069862, -82.4495317], { icon: myIcon }).addTo(mymap);
pawParkBeach.bindPopup('<b>Paw Park Beach</b><br>Access to gulf, real beach<br>Dogs YES');


const rothPark = L.marker([27.295744, -82.3995261], { icon: myIcon }).addTo(mymap);
rothPark.bindPopup('<b>Rothenback Park</b><br>Formerly a dump site<br>No Dogs allowed &#x1F61F;');

const celF = L.marker([27.3277886, -82.4359505], { icon: myIcon }).addTo(mymap);
celF.bindPopup('<b>Celery Fields</b><br>Formerly a dump size<br>Hilltop with great views of area.<br>Dogs Yes');

const ackerP = L.marker([27.3342321, -82.4436301], { icon: myIcon }).addTo(mymap);
ackerP.bindPopup('<b>Ackerman Park</b><br>Good for kids<br>No Dogs allowed &#x1F61F;');

const fruitV = L.marker([27.3442943, -82.4672798], { icon: myIcon }).addTo(mymap);
fruitV.bindPopup('<b>Fruitville Park</b><br>Ball Fields, good for kids<br>Dogs Yes');

const seventeen = L.marker([27.3494254, -82.4824443], { icon: myIcon }).addTo(mymap);
seventeen.bindPopup('<b>17th Street Paw Park</b><br>Dog Park');

const northWater = L.marker([27.3743764, -82.5514137], { icon: myIcon }).addTo(mymap);
northWater.bindPopup('<b>North Water Tower Park</b><br>Golfing<br>Dogs Yes');

const bayfront = L.marker([27.3323056, -82.5434409], { icon: myIcon }).addTo(mymap);
bayfront.bindPopup('<b>Bayfront Park</b><br>Resteraunts nearby, great views<br>Dogs Yes');

const phillipi = L.marker([27.270421, -82.53604], { icon: myIcon }).addTo(mymap);
phillipi.bindPopup('<b>Phillippi Estate Park</b><br>Nicely kept park<br>Dogs Yes');

const culver = L.marker([27.2490901, -82.4774859], { icon: myIcon }).addTo(mymap);
culver.bindPopup('<b>Culverhouse Nature Park</b><br>Scenic<br>Dogs yes');

const potterP = L.marker([27.2280679, -82.4886377], { icon: myIcon }).addTo(mymap);
potterP.bindPopup('<b>Potter Park</b><br>Kid friendly, clean<br>Dogs Yes');

// const = L.marker([], { icon: myIcon }).addTo(mymap);
// bindPopup('<b></b><br>');