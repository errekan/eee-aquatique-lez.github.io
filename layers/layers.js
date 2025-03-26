var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TerritoireduSAGEduLez_1 = new ol.format.GeoJSON();
var features_TerritoireduSAGEduLez_1 = format_TerritoireduSAGEduLez_1.readFeatures(json_TerritoireduSAGEduLez_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerritoireduSAGEduLez_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerritoireduSAGEduLez_1.addFeatures(features_TerritoireduSAGEduLez_1);
var lyr_TerritoireduSAGEduLez_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerritoireduSAGEduLez_1, 
                style: style_TerritoireduSAGEduLez_1,
                popuplayertitle: 'Territoire du SAGE du Lez',
                interactive: false,
                title: '<img src="styles/legend/TerritoireduSAGEduLez_1.png" /> Territoire du SAGE du Lez'
            });
var format_Plansdeaurfrencs_2 = new ol.format.GeoJSON();
var features_Plansdeaurfrencs_2 = format_Plansdeaurfrencs_2.readFeatures(json_Plansdeaurfrencs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plansdeaurfrencs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plansdeaurfrencs_2.addFeatures(features_Plansdeaurfrencs_2);
var lyr_Plansdeaurfrencs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plansdeaurfrencs_2, 
                style: style_Plansdeaurfrencs_2,
                popuplayertitle: 'Plans d\'eau référencés',
                interactive: false,
                title: '<img src="styles/legend/Plansdeaurfrencs_2.png" /> Plans d\'eau référencés'
            });
var format_Milieuxaquatiques_3 = new ol.format.GeoJSON();
var features_Milieuxaquatiques_3 = format_Milieuxaquatiques_3.readFeatures(json_Milieuxaquatiques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Milieuxaquatiques_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Milieuxaquatiques_3.addFeatures(features_Milieuxaquatiques_3);
var lyr_Milieuxaquatiques_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Milieuxaquatiques_3, 
                style: style_Milieuxaquatiques_3,
                popuplayertitle: 'Milieux aquatiques',
                interactive: false,
    title: 'Milieux aquatiques<br />\
    <img src="styles/legend/Milieuxaquatiques_3_0.png" /> Ecoulements permanents<br />\
    <img src="styles/legend/Milieuxaquatiques_3_1.png" /> Ecoulements intermittents<br />' });
var format_EEEMollusquesbivalves_4 = new ol.format.GeoJSON();
var features_EEEMollusquesbivalves_4 = format_EEEMollusquesbivalves_4.readFeatures(json_EEEMollusquesbivalves_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEEMollusquesbivalves_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEEMollusquesbivalves_4.addFeatures(features_EEEMollusquesbivalves_4);
var lyr_EEEMollusquesbivalves_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEEMollusquesbivalves_4, 
                style: style_EEEMollusquesbivalves_4,
                popuplayertitle: 'EEE "Mollusques bivalves"',
                interactive: true,
    title: 'EEE "Mollusques bivalves"<br />\
    <img src="styles/legend/EEEMollusquesbivalves_4_0.png" /> Anodonte chinoise<br />\
    <img src="styles/legend/EEEMollusquesbivalves_4_1.png" /> Corbicule asiatique<br />\
    <img src="styles/legend/EEEMollusquesbivalves_4_2.png" /> Moule quagga et moule zébrée<br />' });
var format_EEEEcrevisses_5 = new ol.format.GeoJSON();
var features_EEEEcrevisses_5 = format_EEEEcrevisses_5.readFeatures(json_EEEEcrevisses_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEEEcrevisses_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEEEcrevisses_5.addFeatures(features_EEEEcrevisses_5);
var lyr_EEEEcrevisses_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEEEcrevisses_5, 
                style: style_EEEEcrevisses_5,
                popuplayertitle: 'EEE "Ecrevisses"',
                interactive: true,
    title: 'EEE "Ecrevisses"<br />\
    <img src="styles/legend/EEEEcrevisses_5_0.png" /> Ecrevisse américaine<br />\
    <img src="styles/legend/EEEEcrevisses_5_1.png" /> Ecrevisse de Louisiane<br />' });
var format_EEEFaunepiscicole_6 = new ol.format.GeoJSON();
var features_EEEFaunepiscicole_6 = format_EEEFaunepiscicole_6.readFeatures(json_EEEFaunepiscicole_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEEFaunepiscicole_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEEFaunepiscicole_6.addFeatures(features_EEEFaunepiscicole_6);
var lyr_EEEFaunepiscicole_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEEFaunepiscicole_6, 
                style: style_EEEFaunepiscicole_6,
                popuplayertitle: 'EEE "Faune piscicole"',
                interactive: true,
    title: 'EEE "Faune piscicole"<br />\
    <img src="styles/legend/EEEFaunepiscicole_6_0.png" /> Carassin argenté<br />\
    <img src="styles/legend/EEEFaunepiscicole_6_1.png" /> Perche-soleil<br />\
    <img src="styles/legend/EEEFaunepiscicole_6_2.png" /> Pseudorasbora<br />\
    <img src="styles/legend/EEEFaunepiscicole_6_3.png" /> Silure<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_TerritoireduSAGEduLez_1.setVisible(true);lyr_Plansdeaurfrencs_2.setVisible(true);lyr_Milieuxaquatiques_3.setVisible(true);lyr_EEEMollusquesbivalves_4.setVisible(true);lyr_EEEEcrevisses_5.setVisible(true);lyr_EEEFaunepiscicole_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TerritoireduSAGEduLez_1,lyr_Plansdeaurfrencs_2,lyr_Milieuxaquatiques_3,lyr_EEEMollusquesbivalves_4,lyr_EEEEcrevisses_5,lyr_EEEFaunepiscicole_6];
lyr_TerritoireduSAGEduLez_1.set('fieldAliases', {'gid': 'gid', 'CodeNatZon': 'CodeNatZon', 'NomZone': 'NomZone', 'StZone': 'StZone', 'TypeZone': 'TypeZone', 'EtatAvance': 'EtatAvance', 'TypePerimS': 'TypePerimS', 'SourcePeri': 'SourcePeri', 'CdComiteBa': 'CdComiteBa', 'CommentEta': 'CommentEta', });
lyr_Plansdeaurfrencs_2.set('fieldAliases', {'gid': 'gid', 'CdOH': 'CdOH', 'TopoOH': 'TopoOH', 'SourceNomO': 'SourceNomO', 'NaturePE': 'NaturePE', 'DateCreati': 'DateCreati', 'StatutOH': 'StatutOH', 'InfluenceM': 'InfluenceM', 'CaractereP': 'CaractereP', 'AltitudeOH': 'AltitudeOH', 'SystemeAlt': 'SystemeAlt', 'ModeAltiOH': 'ModeAltiOH', 'PrecAltiOH': 'PrecAltiOH', 'HauteurMax': 'HauteurMax', 'ModHauteur': 'ModHauteur', 'Commentair': 'Commentair', 'ProjCoordO': 'ProjCoordO', });
lyr_Milieuxaquatiques_3.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'REGIME': 'REGIME', 'CARAC_FIN': 'CARAC_FIN', 'id_1': 'id_1', });
lyr_EEEMollusquesbivalves_4.set('fieldAliases', {'Date': 'Date', 'Masse d\'eau': 'Masse d\'eau', 'Code de la masse d\'eau': 'Code de la masse d\'eau', 'Commune': 'Commune', 'Station': 'Station', 'Opération': 'Opération', 'LargeurMoy': 'LargeurMoy', 'HauteurMoy': 'HauteurMoy', 'X': 'X', 'Y': 'Y', 'Espèces': 'Espèces', 'Code de l\'espèce': 'Code de l\'espèce', 'Effectif': 'Effectif', 'Source': 'Source', });
lyr_EEEEcrevisses_5.set('fieldAliases', {'Date': 'Date', 'Masse d\'eau': 'Masse d\'eau', 'Code de la masse d\'eau': 'Code de la masse d\'eau', 'Commune': 'Commune', 'Station': 'Station', 'Opération': 'Opération', 'LargeurMoy': 'LargeurMoy', 'HauteurMoy': 'HauteurMoy', 'X': 'X', 'Y': 'Y', 'Espèces': 'Espèces', 'Code de l\'espèce': 'Code de l\'espèce', 'Effectif': 'Effectif', 'Source': 'Source', });
lyr_EEEFaunepiscicole_6.set('fieldAliases', {'Date': 'Date', 'Masse d\'eau': 'Masse d\'eau', 'Code de la masse d\'eau': 'Code de la masse d\'eau', 'Commune': 'Commune', 'Station': 'Station', 'Opération': 'Opération', 'LargeurMoy': 'LargeurMoy', 'HauteurMoy': 'HauteurMoy', 'X': 'X', 'Y': 'Y', 'Espèces': 'Espèces', 'Code de l\'espèce': 'Code de l\'espèce', 'Effectif': 'Effectif', 'Source': 'Source', });
lyr_TerritoireduSAGEduLez_1.set('fieldImages', {'gid': 'Range', 'CodeNatZon': 'TextEdit', 'NomZone': 'TextEdit', 'StZone': 'TextEdit', 'TypeZone': 'Range', 'EtatAvance': 'TextEdit', 'TypePerimS': 'Range', 'SourcePeri': 'Range', 'CdComiteBa': 'TextEdit', 'CommentEta': 'TextEdit', });
lyr_Plansdeaurfrencs_2.set('fieldImages', {'gid': 'Range', 'CdOH': 'TextEdit', 'TopoOH': 'TextEdit', 'SourceNomO': 'TextEdit', 'NaturePE': 'TextEdit', 'DateCreati': 'DateTime', 'StatutOH': 'TextEdit', 'InfluenceM': 'Range', 'CaractereP': 'Range', 'AltitudeOH': 'TextEdit', 'SystemeAlt': 'TextEdit', 'ModeAltiOH': 'TextEdit', 'PrecAltiOH': 'TextEdit', 'HauteurMax': 'TextEdit', 'ModHauteur': 'TextEdit', 'Commentair': 'TextEdit', 'ProjCoordO': 'TextEdit', });
lyr_Milieuxaquatiques_3.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'REGIME': 'TextEdit', 'CARAC_FIN': 'TextEdit', 'id_1': 'TextEdit', });
lyr_EEEMollusquesbivalves_4.set('fieldImages', {'Date': 'TextEdit', 'Masse d\'eau': 'TextEdit', 'Code de la masse d\'eau': 'TextEdit', 'Commune': 'TextEdit', 'Station': 'TextEdit', 'Opération': 'TextEdit', 'LargeurMoy': 'TextEdit', 'HauteurMoy': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'Espèces': 'TextEdit', 'Code de l\'espèce': 'TextEdit', 'Effectif': 'Range', 'Source': 'TextEdit', });
lyr_EEEEcrevisses_5.set('fieldImages', {'Date': 'TextEdit', 'Masse d\'eau': 'TextEdit', 'Code de la masse d\'eau': 'TextEdit', 'Commune': 'TextEdit', 'Station': 'TextEdit', 'Opération': 'TextEdit', 'LargeurMoy': 'TextEdit', 'HauteurMoy': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'Espèces': 'TextEdit', 'Code de l\'espèce': 'TextEdit', 'Effectif': 'Range', 'Source': 'TextEdit', });
lyr_EEEFaunepiscicole_6.set('fieldImages', {'Date': 'TextEdit', 'Masse d\'eau': 'TextEdit', 'Code de la masse d\'eau': 'TextEdit', 'Commune': 'TextEdit', 'Station': 'TextEdit', 'Opération': 'TextEdit', 'LargeurMoy': 'TextEdit', 'HauteurMoy': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'Espèces': 'TextEdit', 'Code de l\'espèce': 'TextEdit', 'Effectif': 'Range', 'Source': 'TextEdit', });
lyr_TerritoireduSAGEduLez_1.set('fieldLabels', {'gid': 'no label', 'CodeNatZon': 'no label', 'NomZone': 'no label', 'StZone': 'no label', 'TypeZone': 'no label', 'EtatAvance': 'no label', 'TypePerimS': 'no label', 'SourcePeri': 'no label', 'CdComiteBa': 'no label', 'CommentEta': 'no label', });
lyr_Plansdeaurfrencs_2.set('fieldLabels', {'gid': 'no label', 'CdOH': 'no label', 'TopoOH': 'no label', 'SourceNomO': 'no label', 'NaturePE': 'no label', 'DateCreati': 'no label', 'StatutOH': 'no label', 'InfluenceM': 'no label', 'CaractereP': 'no label', 'AltitudeOH': 'no label', 'SystemeAlt': 'no label', 'ModeAltiOH': 'no label', 'PrecAltiOH': 'no label', 'HauteurMax': 'no label', 'ModHauteur': 'no label', 'Commentair': 'no label', 'ProjCoordO': 'no label', });
lyr_Milieuxaquatiques_3.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'REGIME': 'no label', 'CARAC_FIN': 'no label', 'id_1': 'no label', });
lyr_EEEMollusquesbivalves_4.set('fieldLabels', {'Date': 'inline label - always visible', 'Masse d\'eau': 'inline label - always visible', 'Code de la masse d\'eau': 'hidden field', 'Commune': 'inline label - always visible', 'Station': 'hidden field', 'Opération': 'inline label - always visible', 'LargeurMoy': 'hidden field', 'HauteurMoy': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Espèces': 'inline label - always visible', 'Code de l\'espèce': 'hidden field', 'Effectif': 'inline label - always visible', 'Source': 'inline label - always visible', });
lyr_EEEEcrevisses_5.set('fieldLabels', {'Date': 'inline label - always visible', 'Masse d\'eau': 'inline label - always visible', 'Code de la masse d\'eau': 'hidden field', 'Commune': 'inline label - always visible', 'Station': 'hidden field', 'Opération': 'inline label - always visible', 'LargeurMoy': 'hidden field', 'HauteurMoy': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Espèces': 'inline label - always visible', 'Code de l\'espèce': 'hidden field', 'Effectif': 'inline label - always visible', 'Source': 'inline label - always visible', });
lyr_EEEFaunepiscicole_6.set('fieldLabels', {'Date': 'inline label - always visible', 'Masse d\'eau': 'inline label - always visible', 'Code de la masse d\'eau': 'hidden field', 'Commune': 'inline label - always visible', 'Station': 'hidden field', 'Opération': 'inline label - always visible', 'LargeurMoy': 'hidden field', 'HauteurMoy': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Espèces': 'inline label - always visible', 'Code de l\'espèce': 'hidden field', 'Effectif': 'inline label - always visible', 'Source': 'inline label - always visible', });
lyr_EEEFaunepiscicole_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});