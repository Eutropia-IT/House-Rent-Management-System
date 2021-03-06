$(document).ready(function () {
    'use strict';

    if ($('#map-leaflet').length) {
        var map = L.map('map-leaflet', {
            zoom: 8,
            maxZoom: 20,
            tap: false,
            gestureHandling: true,
            center: [23.754911, 90.389377]
        });

        var marker_cluster = L.markerClusterGroup();

        map.scrollWheelZoom.disable();

        var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            scrollWheelZoom: false,
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        $.ajax('http://127.0.0.1:8000/map-data/', {
            success: function (markers) {
                $.each(markers, function (index, value) {
                    var icon = L.divIcon({
                        html: value.icon,
                        iconSize: [50, 50],
                        iconAnchor: [50, 50],
                        popupAnchor: [-20, -42]
                    });

                    var marker = L.marker(value.center, {
                        icon: icon
                    }).addTo(map);

                    marker.bindPopup(
                        '<div class="listing-window-image-wrapper">' +
                        '<a href="' + value.link + '">' +
                        '<div class="listing-window-image" style="background-image: url(' + '/media/' + value.image + ');"></div>' +
                        '<div class="listing-window-content">' +
                        '<div class="info">' +
                        '<h2>' + value.title + '</h2>' +
                        '<p>' + value.desc + '</p>' +
                        '<h3>' + value.price + '</h3>' +
                        '</div>' +
                        '</div>' +
                        '</a>' +
                        '</div>'
                    );

                    marker_cluster.addLayer(marker);
                });

                map.addLayer(marker_cluster);
            }
        });
    }

});
