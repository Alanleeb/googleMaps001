function createMap () {
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var mapOptions = {
      zoom: 4,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Hello World!",
        draggable:true,
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

}