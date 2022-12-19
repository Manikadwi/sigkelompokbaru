var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_apaantuh_1 = new ol.format.GeoJSON();
var features_apaantuh_1 = format_apaantuh_1.readFeatures(json_apaantuh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apaantuh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apaantuh_1.addFeatures(features_apaantuh_1);
var lyr_apaantuh_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_apaantuh_1, 
                style: style_apaantuh_1,
                interactive: true,
                title: '<img src="styles/legend/apaantuh_1.png" /> apaantuh'
            });
var format_building_mosque_2 = new ol.format.GeoJSON();
var features_building_mosque_2 = format_building_mosque_2.readFeatures(json_building_mosque_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_mosque_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_mosque_2.addFeatures(features_building_mosque_2);
var lyr_building_mosque_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_mosque_2, 
                style: style_building_mosque_2,
                interactive: true,
                title: '<img src="styles/legend/building_mosque_2.png" /> building_mosque'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_apaantuh_1.setVisible(true);lyr_building_mosque_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_apaantuh_1,lyr_building_mosque_2];
lyr_apaantuh_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_mfd_20': 'FID_mfd_20', 'FID_ADMI_1': 'FID_ADMI_1', 'WADMPR': 'WADMPR', 'KODE_KAB': 'KODE_KAB', 'KABUPATEN': 'KABUPATEN', 'DESA': 'DESA', 'KODE_KEC': 'KODE_KEC', 'KECAMATAN': 'KECAMATAN', 'ID_2018': 'ID_2018', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_building_mosque_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'religion': 'religion', 'name': 'name', 'amenity': 'amenity', 'addr:full': 'addr:full', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_apaantuh_1.set('fieldImages', {'OBJECTID': '', 'FID_mfd_20': '', 'FID_ADMI_1': '', 'WADMPR': '', 'KODE_KAB': '', 'KABUPATEN': '', 'DESA': '', 'KODE_KEC': '', 'KECAMATAN': '', 'ID_2018': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_building_mosque_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'religion': '', 'name': '', 'amenity': '', 'addr:full': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:city': '', 'access:roof': '', });
lyr_apaantuh_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_mfd_20': 'no label', 'FID_ADMI_1': 'no label', 'WADMPR': 'no label', 'KODE_KAB': 'no label', 'KABUPATEN': 'no label', 'DESA': 'no label', 'KODE_KEC': 'no label', 'KECAMATAN': 'no label', 'ID_2018': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_building_mosque_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'religion': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_mosque_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});