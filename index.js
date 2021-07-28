function updateMap(){
    fetch(" https://www.trackcorona.live/api/countries")
    .then(response=>response.json())
    .then(cordata=>{
        console.log(cordata.data)
        cordata.data.forEach(element => {
            let latitude=element.latitude;
            let longitude=element.longitude;
            let dead=element.dead;
            let  rdead=dead/255;
            if(rdead/2000<255){
                color=`rgb(${rdead},0,0)`
            }
            else{
                color="rgb(255,0,0)"
            }
            //mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color:color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}
let interval=2000

setInterval(updateMap, interval);