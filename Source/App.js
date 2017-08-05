var cesiumWidget = new Cesium.Viewer('cesiumContainer');

function maker() {
    var lat = document.getElementById("lat").value
    var lng = document.getElementById("lng").value

    if (lat == "" || lng == "") {
        alert("input boxes cannot be empty")
    } else {
        var pinBuilder = new Cesium.PinBuilder();
 
        var bluePin = viewer.entities.add({
            name : 'Blank blue pin',
            position : Cesium.Cartesian3.fromDegrees(lng, lat),
            billboard : {
                image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM
            }
        });
    }
}