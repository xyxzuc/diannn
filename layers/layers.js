var wms_layers = [];

var format_mergegeologi_0 = new ol.format.GeoJSON();
var features_mergegeologi_0 = format_mergegeologi_0.readFeatures(json_mergegeologi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergegeologi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergegeologi_0.addFeatures(features_mergegeologi_0);
var lyr_mergegeologi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mergegeologi_0, 
                style: style_mergegeologi_0,
                interactive: true,
                title: '<img src="styles/legend/mergegeologi_0.png" /> merge geologi'
            });
var format_potongtuntang_1 = new ol.format.GeoJSON();
var features_potongtuntang_1 = format_potongtuntang_1.readFeatures(json_potongtuntang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_potongtuntang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potongtuntang_1.addFeatures(features_potongtuntang_1);
var lyr_potongtuntang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_potongtuntang_1, 
                style: style_potongtuntang_1,
                interactive: true,
                title: '<img src="styles/legend/potongtuntang_1.png" /> potong tuntang'
            });

lyr_mergegeologi_0.setVisible(true);lyr_potongtuntang_1.setVisible(true);
var layersList = [lyr_mergegeologi_0,lyr_potongtuntang_1];
lyr_mergegeologi_0.set('fieldAliases', {'ET_ID': 'ET_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'map_id': 'map_id', 'theme_id': 'theme_id', 'map_indeks': 'map_indeks', 'map_name': 'map_name', 'scale_id': 'scale_id', 'regi_pv_id': 'regi_pv_id', 'regi_ds_id': 'regi_ds_id', 'map_acyear': 'map_acyear', 'map_puyear': 'map_puyear', 'map_inst': 'map_inst', 'cc_id_load': 'cc_id_load', 'map_com': 'map_com', 'filename': 'filename', 'filepath': 'filepath', 'OBJECTID_1': 'OBJECTID_1', 'FCODE': 'FCODE', 'SIMOBJ': 'SIMOBJ', 'NAMOBJ': 'NAMOBJ', 'UMUROBJ': 'UMUROBJ', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'layer': 'layer', 'path': 'path', });
lyr_potongtuntang_1.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_mergegeologi_0.set('fieldImages', {'ET_ID': '', 'Shape_Leng': '', 'Shape_Area': '', 'map_id': '', 'theme_id': '', 'map_indeks': '', 'map_name': '', 'scale_id': '', 'regi_pv_id': '', 'regi_ds_id': '', 'map_acyear': '', 'map_puyear': '', 'map_inst': '', 'cc_id_load': '', 'map_com': '', 'filename': '', 'filepath': '', 'OBJECTID_1': '', 'FCODE': '', 'SIMOBJ': '', 'NAMOBJ': '', 'UMUROBJ': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'Shape_Le_1': '', 'Shape_Le_2': '', 'layer': '', 'path': '', });
lyr_potongtuntang_1.set('fieldImages', {'objectid_1': '', 'objectid': '', 'kode_prov': '', 'nama_das': '', 'luas_ha': '', 'kel_m': '', 'prioritas_': '', 'kd_tematik': '', 'kd_region': '', 'kd_lintas': '', 'kd_das': '', 'wil_kerja': '', 'kd_urutdas': '', 'globalid': '', 'st_area_sh': '', 'st_length_': '', 'st_area(sh': '', 'st_length(': '', });
lyr_mergegeologi_0.set('fieldLabels', {'ET_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'map_id': 'no label', 'theme_id': 'no label', 'map_indeks': 'no label', 'map_name': 'no label', 'scale_id': 'no label', 'regi_pv_id': 'no label', 'regi_ds_id': 'no label', 'map_acyear': 'no label', 'map_puyear': 'no label', 'map_inst': 'no label', 'cc_id_load': 'no label', 'map_com': 'no label', 'filename': 'no label', 'filepath': 'no label', 'OBJECTID_1': 'no label', 'FCODE': 'no label', 'SIMOBJ': 'no label', 'NAMOBJ': 'no label', 'UMUROBJ': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_potongtuntang_1.set('fieldLabels', {'objectid_1': 'no label', 'objectid': 'no label', 'kode_prov': 'no label', 'nama_das': 'no label', 'luas_ha': 'no label', 'kel_m': 'no label', 'prioritas_': 'no label', 'kd_tematik': 'no label', 'kd_region': 'no label', 'kd_lintas': 'no label', 'kd_das': 'no label', 'wil_kerja': 'no label', 'kd_urutdas': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'st_area(sh': 'no label', 'st_length(': 'no label', });
lyr_potongtuntang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});