import Immutable from 'immutable';

class OfficesMap {
  constructor(percentage) {
    this.type = 'Widget';
    this.percentage = percentage;
  }

  init() {
    let oldOfficeCoords = [60.154374, 24.886746];
    let newOfficeCoords = [60.1687025, 24.9341899];
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
      [60.154389, 24.886899],
      [60.154469, 24.887060],
      [60.154552, 24.886931],
      [60.154642, 24.886776],
      [60.154733, 24.886642],
      [60.154816, 24.886470],
      [60.154893, 24.886255],
      [60.154971, 24.886035],
      [60.155029, 24.885869],
      [60.155107, 24.885665],
      [60.155211, 24.885542],
      [60.155315, 24.885419],
      [60.155427, 24.885317],
      [60.155569, 24.885343],
      [60.155713, 24.885397],
      [60.155830, 24.885440],
      [60.155953, 24.885494],
      [60.156065, 24.885531],
      [60.156185, 24.885574],
      [60.156324, 24.885617],
      [60.156423, 24.885660],
      [60.156543, 24.885708],
      [60.156658, 24.885735],
      [60.156759, 24.885762],
      [60.156869, 24.885789],
      [60.156970, 24.885864],
      [60.157074, 24.885955],
      [60.157178, 24.885934],
      [60.157293, 24.885853],
      [60.157421, 24.885885],
      [60.157549, 24.885939],
      [60.157667, 24.885982],
      [60.157787, 24.886041],
      [60.157907, 24.886111],
      [60.158019, 24.886170],
      [60.158129, 24.886239],
      [60.158289, 24.886336],
      [60.158417, 24.886432],
      [60.158524, 24.886534],
      [60.158617, 24.886636],
      [60.158713, 24.886738],
      [60.158836, 24.886888],
      [60.158948, 24.887023],
      [60.159050, 24.887157],
      [60.159152, 24.887285],
      [60.159275, 24.887441],
      [60.159406, 24.887597],
      [60.159497, 24.887725],
      [60.159611, 24.887865],
      [60.159745, 24.888020],
      [60.159870, 24.888171],
      [60.159985, 24.888315],
      [60.160116, 24.888471],
      [60.160223, 24.888605],
      [60.160340, 24.888766],
      [60.160479, 24.888922],
      [60.160588, 24.889066],
      [60.160706, 24.889200],
      [60.160802, 24.889308],
      [60.160909, 24.889479],
      [60.160954, 24.889748],
      [60.160983, 24.890075],
      [60.161007, 24.890322],
      [60.161029, 24.890595],
      [60.161056, 24.890837],
      [60.161088, 24.891094],
      [60.161117, 24.891346],
      [60.161148, 24.891604],
      [60.161170, 24.891819],
      [60.161191, 24.892012],
      [60.161218, 24.892194],
      [60.161247, 24.892414],
      [60.161282, 24.892650],
      [60.161319, 24.892902],
      [60.161349, 24.893138],
      [60.161410, 24.893374],
      [60.161477, 24.893600],
      [60.161522, 24.893830],
      [60.161554, 24.894066],
      [60.161589, 24.894303],
      [60.161624, 24.894571],
      [60.161666, 24.894860],
      [60.161704, 24.895102],
      [60.161738, 24.895381],
      [60.161773, 24.895638],
      [60.161810, 24.895923],
      [60.161850, 24.896185],
      [60.161885, 24.896480],
      [60.161925, 24.896738],
      [60.161955, 24.897012],
      [60.161992, 24.897301],
      [60.162029, 24.897564],
      [60.162067, 24.897822],
      [60.162093, 24.898074],
      [60.162133, 24.898337],
      [60.162163, 24.898546],
      [60.162197, 24.898771],
      [60.162221, 24.898996],
      [60.162251, 24.899222],
      [60.162280, 24.899431],
      [60.162315, 24.899672],
      [60.162347, 24.899924],
      [60.162376, 24.900182],
      [60.162403, 24.900370],
      [60.162430, 24.900600],
      [60.162467, 24.900895],
      [60.162502, 24.901153],
      [60.162534, 24.901421],
      [60.162558, 24.901679],
      [60.162584, 24.901909],
      [60.162616, 24.902188],
      [60.162646, 24.902430],
      [60.162675, 24.902676],
      [60.162710, 24.902902],
      [60.162737, 24.903095],
      [60.162851, 24.903138],
      [60.162969, 24.903143],
      [60.163049, 24.903288],
      [60.163113, 24.903481],
      [60.163172, 24.903680],
      [60.163238, 24.903840],
      [60.163310, 24.904007],
      [60.163390, 24.904200],
      [60.163465, 24.904372],
      [60.163537, 24.904522],
      [60.163607, 24.904693],
      [60.163663, 24.904822],
      [60.163721, 24.904972],
      [60.163788, 24.905123],
      [60.163852, 24.905273],
      [60.163932, 24.905460],
      [60.164010, 24.905632],
      [60.164079, 24.905809],
      [60.164154, 24.905970],
      [60.164226, 24.906136],
      [60.164295, 24.906297],
      [60.164365, 24.906464],
      [60.164447, 24.906662],
      [60.164525, 24.906828],
      [60.164605, 24.907032],
      [60.164672, 24.907172],
      [60.164741, 24.907333],
      [60.164829, 24.907520],
      [60.164896, 24.907687],
      [60.164968, 24.907853],
      [60.165037, 24.908003],
      [60.165123, 24.908170],
      [60.165195, 24.908347],
      [60.165288, 24.908524],
      [60.165365, 24.908690],
      [60.165445, 24.908931],
      [60.165496, 24.909130],
      [60.165550, 24.909328],
      [60.165584, 24.909495],
      [60.165622, 24.909709],
      [60.165654, 24.909881],
      [60.165683, 24.910074],
      [60.165715, 24.910235],
      [60.165752, 24.910433],
      [60.165792, 24.910643],
      [60.165827, 24.910857],
      [60.165870, 24.911045],
      [60.165897, 24.911233],
      [60.165907, 24.911431],
      [60.165886, 24.911651],
      [60.165867, 24.911839],
      [60.165875, 24.912059],
      [60.165915, 24.912263],
      [60.165950, 24.912466],
      [60.165982, 24.912702],
      [60.165998, 24.912922],
      [60.166019, 24.913212],
      [60.166030, 24.913437],
      [60.166041, 24.913663],
      [60.166049, 24.913893],
      [60.166059, 24.914086],
      [60.166070, 24.914317],
      [60.166185, 24.914483],
      [60.166289, 24.914644],
      [60.166361, 24.914805],
      [60.166433, 24.915020],
      [60.166492, 24.915240],
      [60.166534, 24.915422],
      [60.166582, 24.915658],
      [60.166614, 24.915846],
      [60.166652, 24.916050],
      [60.166684, 24.916275],
      [60.166713, 24.916565],
      [60.166732, 24.916860],
      [60.166737, 24.917053],
      [60.166748, 24.917310],
      [60.166759, 24.917536],
      [60.166759, 24.917740],
      [60.166764, 24.917954],
      [60.166772, 24.918169],
      [60.166780, 24.918405],
      [60.166785, 24.918609],
      [60.166791, 24.918845],
      [60.166796, 24.919086],
      [60.166804, 24.919328],
      [60.166812, 24.919585],
      [60.166820, 24.919805],
      [60.166828, 24.920036],
      [60.166836, 24.920298],
      [60.166844, 24.920572],
      [60.166855, 24.920835],
      [60.166964, 24.920953],
      [60.167081, 24.920996],
      [60.167194, 24.920980],
      [60.167335, 24.920969],
      [60.167468, 24.920948],
      [60.167594, 24.920931],
      [60.167690, 24.921087],
      [60.167717, 24.921371],
      [60.167735, 24.921602],
      [60.167746, 24.921833],
      [60.167751, 24.922047],
      [60.167789, 24.922310],
      [60.167861, 24.922471],
      [60.167901, 24.922670],
      [60.167946, 24.922852],
      [60.167994, 24.923018],
      [60.168045, 24.923179],
      [60.168085, 24.923367],
      [60.168173, 24.923560],
      [60.168274, 24.923710],
      [60.168354, 24.923839],
      [60.168450, 24.924005],
      [60.168525, 24.924231],
      [60.168570, 24.924456],
      [60.168637, 24.924654],
      [60.168720, 24.924858],
      [60.168771, 24.925073],
      [60.168824, 24.925261],
      [60.168877, 24.925448],
      [60.168928, 24.925663],
      [60.168987, 24.925824],
      [60.169045, 24.926022],
      [60.169102, 24.926210],
      [60.169158, 24.926387],
      [60.169216, 24.926591],
      [60.169216, 24.926822],
      [60.169272, 24.927036],
      [60.169336, 24.927283],
      [60.169243, 24.927460],
      [60.169174, 24.927605],
      [60.169088, 24.927750],
      [60.168997, 24.927937],
      [60.168920, 24.928055],
      [60.168859, 24.928173],
      [60.168784, 24.928302],
      [60.168707, 24.928463],
      [60.168637, 24.928597],
      [60.168560, 24.928737],
      [60.168461, 24.928833],
      [60.168362, 24.928941],
      [60.168306, 24.929139],
      [60.168234, 24.929284],
      [60.168149, 24.929439],
      [60.168045, 24.929633],
      [60.167943, 24.929836],
      [60.167863, 24.929976],
      [60.167789, 24.930115],
      [60.167722, 24.930233],
      [60.167618, 24.930410],
      [60.167524, 24.930598],
      [60.167452, 24.930748],
      [60.167383, 24.930931],
      [60.167364, 24.931124],
      [60.167386, 24.931328],
      [60.167508, 24.931344],
      [60.167618, 24.931279],
      [60.167751, 24.931344],
      [60.167861, 24.931397],
      [60.167967, 24.931456],
      [60.168069, 24.931537],
      [60.168152, 24.931628],
      [60.168226, 24.931886],
      [60.168285, 24.932057],
      [60.168341, 24.932224],
      [60.168397, 24.932395],
      [60.168461, 24.932572],
      [60.168520, 24.932749],
      [60.168581, 24.932916],
      [60.168640, 24.933087],
      [60.168693, 24.933270],
      [60.168747, 24.933452],
      [60.168803, 24.933602],
      [60.168848, 24.933774],
      [60.168896, 24.933967],
      [60.168848, 24.934106],
      [60.168787, 24.934133],
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

    let mapColor = "#CCEDE3";

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
      zoom: 14,
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
      title: 'The Old Futurice Office',
      icon: 'images/old-logo-marker.png'
    });
    let marker2 = new google.maps.Marker({
      position: newOfficePosition,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      title: 'The New Futurice Office',
      icon: 'images/logo-marker.png'
    });

    google.maps.event.addListener(marker2, 'click', () =>
      window.location.href = 'http://www.futurice.com/'
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
      strokeColor: 'rgb(0,90,75)',
      strokeOpacity: 1,
      strokeWeight: 7
    });
    domNode.officesMap.traveledPoly.setMap(domNode.officesMap.map);
    traveledPath = null;

    // Where we are now
    if (!!domNode.officesMap.olegBike) {
      domNode.officesMap.olegBike.setPosition(
        domNode.officesMap.pathCoordinates[idx - 1]
      );
    } else {
      domNode.officesMap.olegBike = new google.maps.Marker({
        position: domNode.officesMap.pathCoordinates[idx],
        draggable: false,
        clickable: true,
        map: domNode.officesMap.map,
        title: '@phadej',
        icon: 'images/olegbike_blk_small.png'
      });
      google.maps.event.addListener(domNode.officesMap.olegBike, 'click', () =>
        window.location.href = 'https://vimeo.com/122725089'
      );
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
      strokeColor: 'rgb(0,90,75)',
      strokeOpacity: 1,
      strokeWeight: 2
    });
    domNode.officesMap.futurePoly.setMap(domNode.officesMap.map);
    futurePath = null;
  }

  destroy(domNode) { }
}

module.exports = OfficesMap;
