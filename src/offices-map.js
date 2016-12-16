import Immutable from 'immutable';

class OfficesMap {
  constructor(percentage) {
    this.type = 'Widget';
    this.percentage = percentage;
  }

  init() {
    let oldOfficeCoords = [60.164993, 24.938225]
    let newOfficeCoords = [60.165767, 24.928123]
    let middleCoords = [
      (oldOfficeCoords[0] + newOfficeCoords[0]) * 0.5,
      (oldOfficeCoords[1] + newOfficeCoords[1]) * 0.5
    ];
    let oldOfficePosition = new google.maps.LatLng(oldOfficeCoords[0], oldOfficeCoords[1]);
    let newOfficePosition = new google.maps.LatLng(newOfficeCoords[0], newOfficeCoords[1]);
    let mapCenterPointPosition = new google.maps.LatLng(
      middleCoords[0] + 0.006,
      middleCoords[1]
    );
    let pathCoordinates = [
      [oldOfficeCoords[0], oldOfficeCoords[1]],
      [60.164945, 24.938385],
      [60.164881, 24.938461],
      [60.164812, 24.938246],
      [60.164748, 24.938031],
      [60.164684, 24.937849],
      [60.164652, 24.937742],
      [60.164550, 24.937474],
      [60.164486, 24.937302],
      [60.164428, 24.937141],
      [60.164422, 24.937023],
      [60.164492, 24.936905],
      [60.164577, 24.936787],
      [60.164689, 24.936626],
      [60.164775, 24.936497],
      [60.164860, 24.936379],
      [60.164929, 24.936175],
      [60.165036, 24.936143],
      [60.165127, 24.935982],
      [60.165260, 24.935821],
      [60.165324, 24.935725],
      [60.165404, 24.935575],
      [60.165463, 24.935489],
      [60.165661, 24.935242],
      [60.165789, 24.935102],
      [60.165890, 24.934942],
      [60.166029, 24.934727],
      [60.166109, 24.934630],
      [60.166216, 24.934512],
      [60.166333, 24.934298],
      [60.166456, 24.934148],
      [60.166528, 24.934030],
      [60.166611, 24.933928],
      [60.166656, 24.933847],
      [60.166725, 24.933761],
      [60.166677, 24.933643],
      [60.166627, 24.933488],
      [60.166581, 24.933370],
      [60.166528, 24.933209],
      [60.166483, 24.933075],
      [60.166435, 24.932935],
      [60.166370, 24.932758],
      [60.166312, 24.932597],
      [60.166288, 24.932485],
      [60.166301, 24.932345],
      [60.166325, 24.932227],
      [60.166338, 24.932077],
      [60.166362, 24.931954],
      [60.166384, 24.931777],
      [60.166400, 24.931669],
      [60.166419, 24.931530],
      [60.166432, 24.931401],
      [60.166451, 24.931299],
      [60.166472, 24.931154],
      [60.166499, 24.930988],
      [60.166512, 24.930881],
      [60.166528, 24.930768],
      [60.166563, 24.930704],
      [60.166579, 24.930548],
      [60.166571, 24.930430],
      [60.166547, 24.930312],
      [60.166488, 24.930162],
      [60.166488, 24.930033],
      [60.166451, 24.929835],
      [60.166405, 24.929652],
      [60.166360, 24.929507],
      [60.166309, 24.929336],
      [60.166253, 24.929180],
      [60.166200, 24.929003],
      [60.166152, 24.928853],
      [60.166093, 24.928692],
      [60.166056, 24.928585],
      [60.166018, 24.928434],
      [60.165943, 24.928263],
      [60.165887, 24.928086],
      [60.165842, 24.927979],
      [newOfficeCoords[0], newOfficeCoords[1]]
    ]
    .map(([lat, lng]) => new google.maps.LatLng(lat, lng))

    let element = document.createElement('div');
    element.style.height = '100%';
    element.style.width = '100%';
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '0';
    element.style.zIndex = '0';

    let mapColor = "#a4d0dd";

    let commonStylers = [
      { "color": mapColor }
    ];

    let mapStyles = [
      {
        "stylers": [
          { "gamma": 0.75 },
          { "lightness": -4 }
        ]
      },{
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "saturation": -40 },
          { "hue": mapColor }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "color": "#eeeeee" }
        ]
      },{
        "featureType": "landscape",
        "stylers": commonStylers
      },{
        "featureType": "poi",
        "stylers": commonStylers
      },{
        "featureType": "transit",
        "stylers": commonStylers
      },{
        "featureType": "administrative",
        "stylers": commonStylers
      }
    ];

    let mapOptions = {
      zoom: 15,
      streetViewControl: false,
      scaleControl: false,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scrollwheel: true,
      center: mapCenterPointPosition,
      draggable: true,
      styles: mapStyles
    };

    let map = new google.maps.Map(element, mapOptions);

    element.officesMap = {
      map,
      pathCoordinates
    };

    let marker1 = new google.maps.Marker({
      position: oldOfficePosition,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      title: 'The Old Codaone Office',
      icon: 'images/start-marker.png'
    });
    let marker2 = new google.maps.Marker({
      position: newOfficePosition,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      title: 'The New Codaone Office',
      icon: 'images/end-marker.png'
    });

    google.maps.event.addListener(marker2, 'click', () =>
      window.location.href = 'https://www.codaone.fi'
    );

    this.update(null, element);
    return element;
  }

  update(previous, domNode) {
    // Let's be optimistic: ceil()
    let idx = Math.min(
      Math.ceil(this.percentage * domNode.officesMap.pathCoordinates.length),
      domNode.officesMap.pathCoordinates.length
    );

    // How much we have traveled already
    let traveledPath = domNode.officesMap.pathCoordinates.slice(0, idx);
    if (!!domNode.officesMap.traveledPoly) {
      domNode.officesMap.traveledPoly.setMap(null);
      domNode.officesMap.traveledPoly = null;
    }
    domNode.officesMap.traveledPoly = new google.maps.Polyline({
      path: traveledPath,
      geodesic: true,
      strokeColor: '#02799E',
      strokeOpacity: 1,
      strokeWeight: 7
    });
    domNode.officesMap.traveledPoly.setMap(domNode.officesMap.map);
    traveledPath = null;

    // Where we are now
    if (!!domNode.officesMap.mikakoi) {
      domNode.officesMap.mikakoi.setPosition(
        domNode.officesMap.pathCoordinates[idx - 1]
      );
    } else {
      domNode.officesMap.mikakoi = new google.maps.Marker({
        position: domNode.officesMap.pathCoordinates[idx],
        draggable: false,
        clickable: true,
        map: domNode.officesMap.map,
        title: 'mikakoi',
        icon: 'images/mikakoi.gif',
        // http://stackoverflow.com/questions/14603383/google-maps-js-api-v3-and-looping-animated-gifs
        optimized: false
      });
    }

    // The rest of the way to the new office
    // -1 for the first bit (line needs two ends)
    let futurePath = domNode.officesMap.pathCoordinates.slice(idx - 1);
    if (!!domNode.officesMap.futurePoly) {
      domNode.officesMap.futurePoly.setMap(null);
      domNode.officesMap.futurePoly = null;
    }
    domNode.officesMap.futurePoly = new google.maps.Polyline({
      path: futurePath,
      geodesic: true,
      strokeColor: '#09b0e2',
      strokeOpacity: 1,
      strokeWeight: 2
    });
    domNode.officesMap.futurePoly.setMap(domNode.officesMap.map);
    futurePath = null;
  }

  destroy(domNode) { }
}

module.exports = OfficesMap;
