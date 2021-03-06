Type.registerNamespace('Mscrm');

Mscrm.GraphicsUtil = function() {
}
Mscrm.GraphicsUtil.prototype = {
    createRootElement: function(container, width, height) {
        var $v_0 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        container.appendChild($v_0);
        $v_0.style.width = width + 'px';
        $v_0.style.height = height + 'px';
        return $v_0;
    },

    createRectElement: function(container, top, left, width, height) {
        var $v_0 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        container.appendChild($v_0);
        $v_0.setAttribute('width', width + 'px');
        $v_0.setAttribute('height', height + 'px');
        $v_0.setAttribute('x', left + 'px');
        $v_0.setAttribute('y', top + 'px');
        $v_0.setAttribute('fill', '#ffffff');
        XUI.Html.SetOpacity($v_0, 0.5);
        return $v_0;
    },

    createPolylineElement: function(container, coordinates) {
        var $v_0 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        container.appendChild($v_0);
        $v_0.setAttribute('points', coordinates);
        $v_0.setAttribute('fill', '#ffffff');
        XUI.Html.SetOpacity($v_0, 0.5);
        return $v_0;
    }
}


Mscrm.VmlUtil = function() {
    Mscrm.VmlUtil.initializeBase(this);
}
Mscrm.VmlUtil.prototype = {
    createRootElement: function(container, width, height) {
        var $v_0 = document.createElement('v:group');
        container.appendChild($v_0);
        $v_0.style.width = width + 'px';
        $v_0.style.height = height + 'px';
        $v_0.style.position = 'absolute';
        if (window.LOCID_UI_DIR === 'RTL') {
            $v_0.style.right = '0px';
        } else {
            $v_0.style.left = '0px';
        }
        $v_0.style.top = '0px';
        $v_0.setAttribute('coordorigin', '0,0');
        $v_0.setAttribute('coordsize', width + ',' + height);
        return $v_0;
    },

    createRectElement: function(container, top, left, width, height) {
        var $v_0 = document.createElement('v:rect');
        container.appendChild($v_0);
        $v_0.style.width = width + 'px';
        $v_0.style.height = height + 'px';
        $v_0.style.top = top + 'px';
        $v_0.style.left = left + 'px';
        $v_0.setAttribute('filled', 'true');
        $v_0.setAttribute('fillcolor', '#ffffff');
        $v_0.setAttribute('stroked', 'false');
        this.$D_1($v_0);
        return $v_0;
    },

    createPolylineElement: function(container, coordinates) {
        var $v_0 = document.createElement('v:polyline');
        $v_0.setAttribute('points', coordinates);
        $v_0.setAttribute('filled', 'true');
        $v_0.setAttribute('fillcolor', '#ffffff');
        $v_0.setAttribute('stroked', 'false');
        this.$D_1($v_0);
        container.appendChild($v_0);
        return $v_0;
    },

    $D_1: function($p0) {
        var $v_0 = document.createElement('v:fill');
        $p0.appendChild($v_0);
        $v_0.setAttribute('color', '#ffffff');
        $v_0.setAttribute('opacity', '.5');
        XUI.Html.SetOpacity($v_0, 0.5);
        return $v_0;
    }
}


Mscrm.Visualization = function() {
}
Mscrm.Visualization.get_$A = function() {
    return $get('overlayContainer');
}
Mscrm.Visualization.showDrillDown = function(domEvent,
    seriesName,
    seriesIndex,
    yColumnName,
    formattedXValue,
    x1Value,
    lookupAttributeString,
    primaryGroupByStartDate,
    primaryGroupByEndDate,
    primaryGroupByAlias,
    x2Value,
    secondaryXLookupAttributeString,
    secondaryGroupByStartDate,
    secondaryGroupByEndDate,
    secondaryGroupByAlias) {
    var $v_0 = Mscrm.Visualization.$3();
    var $v_1 = $get('CrmChart');
    Mscrm.Visualization.cancelDrillDown(false, false);
    var $v_2 = seriesIndex;
    if (!IsNull(domEvent) &&
        !IsNull(domEvent.target) &&
        !IsNull(domEvent.target.nodeName) &&
        domEvent.target.nodeName.toUpperCase() === 'AREA' &&
        !IsNull(domEvent.target.getAttribute('href')) &&
        !isNullOrEmptyString(domEvent.target.getAttribute('href').toString())) {
        Mscrm.Visualization.$6 = domEvent.target;
        domEvent.stopPropagation();
        Mscrm.Visualization.selectChartType(domEvent, Mscrm.Visualization.$8);
    }
    if (!IsNull($v_1)) {
        Mscrm.Visualization.$J();
        Mscrm.Visualization.showDrillDownBox(domEvent);
        var $v_3 = $get('tdDrillDownLabel');
        if (!IsNull($v_3)) {
            XUI.Html.SetText($v_3, formattedXValue + ': ' + seriesName);
            $v_3.title = XUI.Html.GetText($v_3);
        }
        if (!IsNull($v_0)) {
            Mscrm.Visualization.$0 = $v_0.get_drillDownParamObj().clone();
            Mscrm.Visualization.$0.clear();
            Mscrm.Visualization.$0.set_seriesIndex($v_2);
            Mscrm.Visualization.$0.set_x1Value(x1Value);
            Mscrm.Visualization.$0.set_x2Value(x2Value);
            Mscrm.Visualization.$0.set_lookupAttributeString(lookupAttributeString);
            Mscrm.Visualization.$0.set_secondaryXLookupAttributeString(secondaryXLookupAttributeString);
            Mscrm.Visualization.$0.set_formattedXValue(formattedXValue);
            Mscrm.Visualization.$0.set_yColumnName(yColumnName);
            Mscrm.Visualization.$0.set_xAttributeName(Mscrm.Visualization.$1('xattributename'));
            Mscrm.Visualization.$0.set_xAttributeType(Mscrm.Visualization.$1('xcolumntype'));
            Mscrm.Visualization.$0.set_xEntityName(Mscrm.Visualization.$1('xentityname'));
            Mscrm.Visualization.$0.set_isRelatedEntityColumn(Mscrm.Visualization.$1('isxrelatedentitycolumn'));
            Mscrm.Visualization.$0.set_relatedEntityDetail(Mscrm.Visualization.$1('relatedentitydetail'));
            Mscrm.Visualization.$0.set_primaryGroupByStartDate(primaryGroupByStartDate);
            Mscrm.Visualization.$0.set_primaryGroupByEndDate(primaryGroupByEndDate);
            Mscrm.Visualization.$0.set_secondaryGroupByStartDate(secondaryGroupByStartDate);
            Mscrm.Visualization.$0.set_secondaryGroupByEndDate(secondaryGroupByEndDate);
            if (!isNullOrEmptyString(Mscrm.Visualization.$1('secondarygroupbyname'))) {
                Mscrm.Visualization.$0.set_formattedX2Value(seriesName);
            }
            Mscrm.Visualization.$0.set_secondaryGroupByName(Mscrm.Visualization.$1('secondarygroupbyname'));
            Mscrm.Visualization.$0.set_secondaryGroupByColumnType(Mscrm.Visualization.$1('secondarygroupbycolumntype'));
            Mscrm.Visualization.$0.set_secondaryGroupByEntityName(Mscrm.Visualization.$1('secondarygroupbyentityname'));
            Mscrm.Visualization.$0
                .set_isSecondaryGroupByRelatedEntityColumn(Mscrm.Visualization
                    .$1('issecondarygroupbyrelatedentitycolumn'));
            Mscrm.Visualization.$0
                .set_secondaryGroupByRelatedEntityDetail(Mscrm.Visualization.$1('secondarygroupbyrelatedentitydetail'));
            Mscrm.Visualization.$0.set_primaryGroupByAlias(primaryGroupByAlias);
            Mscrm.Visualization.$0.set_secondaryGroupByAlias(secondaryGroupByAlias);
        }
        $v_0.refreshGridOnColumnSelection(Mscrm.Visualization.$0);
    }
}
Mscrm.Visualization.$3 = function() {
    return window.parent.Sys.Application.findComponent(Mscrm.Visualization.$4 + '_paneControl');
}
Mscrm.Visualization.$I = function($p0) {
    var $v_0 = $get('viewBySelector');
    if (!IsNull($v_0)) {
        if (!Mscrm.Utilities.isIosDevice()) {
            try {
                $v_0.focus();
            } catch ($$e_2) {
            }
        }
        $v_0.selectedIndex = 0;
        Mscrm.Visualization.$F();
    }
}
Mscrm.Visualization.$G = function($p0, $p1) {
    var $v_0 = document.body.clientWidth;
    var $v_1 = document.body.clientHeight;
    var $v_2 = 0;
    var $v_3 = 0;
    var $v_4 = $p0.clientX;
    var $v_5 = $p0.clientY;
    $p1.style.left = '0px';
    $p1.style.top = '0px';
    $v_2 = $v_4;
    $v_3 = $v_5;
    var $v_6 = $p1.clientWidth - document.body.scrollLeft;
    var $v_7 = $p1.clientHeight - document.body.scrollTop;
    if (($v_4 + $v_6) >= $v_0) {
        $v_2 = $v_0 - $v_6 - 5;
    }
    if (($v_5 + $v_7) >= $v_1) {
        $v_3 = $v_1 - $v_7 - 5;
    }
    if ($v_4 - document.body.scrollLeft <= 12) {
        $v_2 = $v_4 + 12;
    }
    if ($v_5 - document.body.scrollTop <= 12) {
        $v_3 = $v_5 + 12;
    }
    if ($v_2 < 0) {
        $v_2 = 0;
    }
    if ($v_3 < 0) {
        $v_3 = 0;
    }
    $p1.style.left = $v_2.toString() + 'px';
    $p1.style.top = $v_3.toString() + 'px';
}
Mscrm.Visualization.onChange = function() {
    Mscrm.Visualization.$F();
}
Mscrm.Visualization.onBack = function() {
    var $v_0 = $get('btnBack');
    if ($v_0.disabled) {
        return;
    }
    Mscrm.Visualization.cancelDrillDown(false, false);
    var $v_1 = Mscrm.Visualization.$3();
    Mscrm.Visualization.$B($v_1);
    var $v_2 = !Mscrm.Visualization.$M($v_1);
    $v_1.refreshGridAndLoadVisualizationOnBack($v_2);
}
Mscrm.Visualization.onHome = function() {
    var $v_0 = $get('btnHome');
    if ($v_0.disabled) {
        return;
    }
    Mscrm.Visualization.cancelDrillDown(false, false);
    var $v_1 = Mscrm.Visualization.$3();
    Mscrm.Visualization.$B($v_1);
    if ($get('drillDownChartTitle')) {
        $v_1.setParameter('drillDownChartTitle', ($get('drillDownChartTitle')).value);
    }
    $v_1.set_navigateToHomeChart(true);
    $v_1.refreshGridAndLoadVisualizationOnBack(true);
}
Mscrm.Visualization.$M = function($p0) {
    if ($p0.get_navigateToHomeChart() || !$p0.get_multiLevelDrillDownParametersBackup().get_count()) {
        return false;
    }
    if ($p0.get_multiLevelDrillDownParametersBackup().get_count() > 0) {
        var $v_0 = $p0.get_multiLevelDrillDownParametersBackup()
            .getAtIndex($p0.get_multiLevelDrillDownParametersBackup().get_count() - 1);
        var $v_1 = $p0.get_multiLevelDrillDownParametersBackup()
            .getAtIndex($p0.get_multiLevelDrillDownParametersBackup().get_count());
        $p0.get_drillDownParamObj().set_aggregationFetchXml($v_1.get_aggregationFetchXml());
        $p0.get_drillDownParamObj().set_filterFetchXml($v_1.get_filterFetchXml());
        $p0.get_drillDownParamObj().set_chartType($v_0.get_chartType());
        $p0.get_drillDownParamObj().set_chartTitle($v_0.get_chartTitle());
        $p0.get_drillDownParamObj().set_formattedXValue($v_0.get_formattedXValue());
        $p0.get_drillDownParamObj().set_formattedX2Value($v_0.get_formattedX2Value());
        $p0.get_drillDownParamObj().set_isRelatedEntityColumn($v_1.get_isRelatedEntityColumn());
        $p0.get_drillDownParamObj().set_relatedEntityDetail($v_1.get_relatedEntityDetail());
        $p0.get_drillDownParamObj().set_lookupAttributeString($v_1.get_lookupAttributeString());
        $p0.get_drillDownParamObj().set_secondaryXLookupAttributeString($v_1.get_secondaryXLookupAttributeString());
        $p0.get_drillDownParamObj().set_seriesIndex($v_0.get_seriesIndex());
        $p0.get_drillDownParamObj().set_xAttributeName($v_1.get_xAttributeName());
        $p0.get_drillDownParamObj().set_xAttributeType($v_1.get_xAttributeType());
        $p0.get_drillDownParamObj().set_xEntityName($v_1.get_xEntityName());
        $p0.get_drillDownParamObj().set_x1Value($v_1.get_x1Value());
        $p0.get_drillDownParamObj().set_x2Value($v_1.get_x2Value());
        $p0.get_drillDownParamObj().set_yColumnName($v_1.get_yColumnName());
        $p0.get_drillDownParamObj().set_viewBy($v_0.get_viewBy());
        $p0.get_drillDownParamObj().set_filterIdsArray($v_1.get_filterIdsArray());
        $p0.get_drillDownParamObj().set_primaryGroupByStartDate($v_1.get_primaryGroupByStartDate());
        $p0.get_drillDownParamObj().set_primaryGroupByEndDate($v_1.get_primaryGroupByEndDate());
        $p0.get_drillDownParamObj().set_secondaryGroupByStartDate($v_1.get_secondaryGroupByStartDate());
        $p0.get_drillDownParamObj().set_secondaryGroupByEndDate($v_1.get_secondaryGroupByEndDate());
        $p0.get_drillDownParamObj().set_secondaryGroupByName($v_1.get_secondaryGroupByName());
        $p0.get_drillDownParamObj().set_secondaryGroupByColumnType($v_1.get_secondaryGroupByColumnType());
        $p0.get_drillDownParamObj().set_secondaryGroupByEntityName($v_1.get_secondaryGroupByEntityName());
        $p0.get_drillDownParamObj()
            .set_isSecondaryGroupByRelatedEntityColumn($v_1.get_isSecondaryGroupByRelatedEntityColumn());
        $p0.get_drillDownParamObj()
            .set_secondaryGroupByRelatedEntityDetail($v_1.get_secondaryGroupByRelatedEntityDetail());
        return true;
    }
    return false;
}
Mscrm.Visualization.onUpdate = function() {
    var $v_0 = Mscrm.Visualization.$3();
    $v_0.loadVisualization(false);
}
Mscrm.Visualization.drillChart = function() {
    var $v_0 = $get('viewBySelector');
    if (IsNull($v_0) || !$v_0.selectedIndex) {
        return;
    }
    var $v_1 = $v_0.value;
    var $v_2 = Mscrm.Visualization.$3();
    if (!IsNull($v_2)) {
        var $v_3 = $get('btnBack');
        var $v_4 = $get('btnHome');
        Mscrm.Visualization.registerChildWithXrmUIControl($v_3,
            'CrmChart',
            'Back',
            Mscrm.Visualization.$4 + '_paneControl');
        Mscrm.Visualization.registerChildWithXrmUIControl($v_4,
            'CrmChart',
            'Home',
            Mscrm.Visualization.$4 + '_paneControl');
        $v_2.get_drillDownParamObj().clear();
        $v_2.set_drillDownParamObj(Mscrm.Visualization.$0.clone());
        Mscrm.Visualization.$B($v_2);
        $v_2.get_drillDownParamObj().set_aggregationFetchXml(($get('aggFetchXml')).value);
        $v_2.get_drillDownParamObj().set_filterFetchXml(($get('filterFetchXml')).value);
        if ($get('drillDownChartTitle')) {
            $v_2.get_drillDownParamObj().set_chartTitle(($get('drillDownChartTitle')).value);
        }
        $v_2.get_drillDownParamObj().set_viewBy($v_1);
        $v_2.get_drillDownParamObj().set_chartType(Mscrm.Visualization.$2);
        Mscrm.Visualization.$N();
        $v_2.loadVisualization(true);
    }
}
Mscrm.Visualization.$B = function($p0) {
    if ($get('alreadyViewByAttr')) {
        $p0.setParameter('alreadyViewByAttribute', ($get('alreadyViewByAttr')).value);
    }
}
Mscrm.Visualization.$N = function() {
    var $v_0 = Mscrm.Visualization.$3();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_drillDownParamObj().clone();
        $v_0.get_multiLevelDrillDownParametersBackup().add($v_1);
    }
}
Mscrm.Visualization.$1 = function($p0) {
    var $v_0 = $get('drilldownparams');
    if ($v_0) {
        var $v_1 = $get($p0, $v_0);
        if ($v_1) {
            return CrmEncodeDecode.CrmHtmlDecode($v_1.getAttribute('value').toString());
        }
    }
    return null;
}
Mscrm.Visualization.$H = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = $p0.createRootElement($p2, $p3, $p4);
    $v_0.setAttribute('id', 'overlayGroup');
    for (var $v_1 = 0, $v_2 = $p1.length; $v_1 < $v_2; $v_1++) {
        var $v_3 = $p1[$v_1].coords.toString();
        var $v_4 = $p1[$v_1].shape.toString();
        $v_4 = $v_4.toLowerCase();
        if (isNullOrEmptyString($v_3)) {
            return;
        }
        if (IsNull($v_4)) {
            return;
        }
        var $v_5 = null;
        switch ($v_4) {
        case 'rect':
            var $v_6 = new Array(4);
            $v_6 = $v_3.split(',');
            var $v_7 = Number.parseInvariant($v_6[0]);
            var $v_8 = Number.parseInvariant($v_6[1]);
            var $v_9 = Number.parseInvariant($v_6[2]);
            var $v_A = Number.parseInvariant($v_6[3]);
            var $v_B = Math.abs($v_9 - $v_7);
            var $v_C = Math.abs($v_A - $v_8);
            $v_5 = $p0.createRectElement($v_0, $v_8, $v_7, $v_B, $v_C);
            break;
        case 'poly':
        default:
            $v_5 = $p0.createPolylineElement($v_0, $v_3);
            break;
        }
        $addHandler($v_5, 'click', Mscrm.Visualization.cancelClickEvent);
    }
    $p2.style.display = 'block';
}
Mscrm.Visualization.$J = function() {
    var $v_0 = 'onclick';
    if (!Mscrm.Visualization.$6.getAttribute($v_0)) {
        $v_0 = 'onmouseover';
    }
    var $v_1 = 'CrmChart';
    var $v_2 = false;
    var $v_3 = Mscrm.Visualization.$6.getAttribute($v_0).toString();
    if (IsNull($v_3)) {
        return;
    }
    var $v_4 = Mscrm.Visualization.$6.parentNode;
    var $v_5 = [];
    var $v_6 = 0;
    var $v_7 = $v_4.getElementsByTagName('area');
    for (var $v_F = 0, $v_G = $v_7.length; $v_F < $v_G; $v_F++) {
        var $v_H = '';
        if ($v_7[$v_F].getAttribute($v_0)) {
            $v_H = $v_7[$v_F].getAttribute($v_0).toString();
        }
        if (!isNullOrEmptyString($v_H)) {
            if ($v_2) {
                if ($v_H !== $v_3) {
                    $v_5[$v_6] = $v_7[$v_F];
                    $v_6++;
                }
            } else {
                if ($v_H === $v_3) {
                    $v_5[$v_6] = $v_7[$v_F];
                    $v_6++;
                }
            }
        }
    }
    var $v_8 = Mscrm.Visualization.get_$A();
    if (IsNull($v_8)) {
        $v_8 = document.createElement('div');
        $v_8.id = 'overlayContainer';
        $v_8.style.position = 'absolute';
        $addHandler($v_8, 'click', Mscrm.Visualization.$C);
        $v_4.parentNode.appendChild($v_8);
    }
    var $v_9 = $get($v_1);
    var $v_A = $v_9.offsetWidth;
    var $v_B = $v_9.offsetHeight;
    var $v_C = $v_9.offsetLeft;
    var $v_D = $v_9.offsetTop;
    if (window.LOCID_UI_DIR === 'RTL') {
        $v_8.style.right = (-$v_C).toString() + 'px';
    } else {
        $v_8.style.left = $v_C.toString() + 'px';
    }
    $v_8.style.display = '';
    $v_8.style.top = $v_D.toString() + 'px';
    $v_8.style.width = $v_A + 'px';
    $v_8.style.height = $v_B + 'px';
    $v_8.innerHTML = '';
    var $v_E = null;
    if (Mscrm.Visualization.$L()) {
        $v_E = new Mscrm.GraphicsUtil();
    } else {
        $v_E = new Mscrm.VmlUtil();
    }
    Mscrm.Visualization.$H($v_E, $v_5, $v_8, $v_A, $v_B);
    if ($v_2) {
        $v_9.setAttribute('highlight', '1');
    } else {
        $v_9.setAttribute('highlight', '-1');
    }
}
Mscrm.Visualization.$L = function() {
    return (document.implementation.hasFeature('org.w3c.svg', null) ||
    (document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', null) &&
        document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Shape', null)));
}
Mscrm.Visualization.$K = function() {
    var $v_0 = Mscrm.Visualization.get_$A();
    return (!IsNull($v_0) && $v_0.innerHTML !== '');
}
Mscrm.Visualization.$O = function($p0) {
    var $v_0 = Mscrm.Visualization.get_$A();
    if (!IsNull($v_0)) {
        $removeHandler($v_0, 'click', Mscrm.Visualization.$C);
    }
    var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
    if (!IsNull($v_1)) {
        var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
        if ($v_1.nodeName === 'svg' && !IsNull($v_2)) {
            $removeHandler($v_2, 'click', Mscrm.Visualization.cancelClickEvent);
        }
    }
    $v_0.innerHTML = '';
    $v_0.style.display = 'none';
    if (!IsNull($p0)) {
        $p0.setAttribute('highlight', '0');
    }
}
Mscrm.Visualization.$F = function() {
    var $v_0 = $get('OKButton');
    var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
    var $v_2 = $get('viewBySelector');
    if (!IsNull($v_2)) {
        if (!$v_2.selectedIndex) {
            $v_1.src = '/_imgs/visualization/ok_disabled.png';
            $v_0.setAttribute('disabled', 'disabled');
            $v_0.tabIndex = -1;
        } else {
            $v_1.src = '/_imgs/visualization/ok.png';
            $v_0.removeAttribute('disabled');
            $v_0.tabIndex = 0;
        }
    }
}
Mscrm.Visualization.selectChartType = function(domEvent, chartType) {
    if (IsNull(chartType)) {
        var $v_0 = Mscrm.Visualization.$E(domEvent);
        if (IsNull($v_0)) {
            return;
        }
        chartType = $v_0.id;
    }
    if (Mscrm.Visualization.$2 !== '') {
        var $v_1 = Mscrm.Visualization.$2;
        Mscrm.Visualization.$2 = '';
        Mscrm.Visualization.hoverChartType(domEvent, false, $v_1);
    }
    Mscrm.Visualization.$2 = chartType;
    Mscrm.Visualization.hoverChartType(domEvent, true, Mscrm.Visualization.$2);
}
Mscrm.Visualization.hoverChartType = function(domEvent, hover, chartType) {
    var $v_0 = (IsNull(chartType)) ? Mscrm.Visualization.$E(domEvent) : $get(chartType);
    if (IsNull($v_0)) {
        return;
    }
    var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
    if (hover) {
        var $v_2 = $v_0.id;
        $v_1.src = String.format('/_imgs/visualization/designer/{0}chart/{0}chart_sel.png', $v_2);
        $v_1.className = String.format('ms-crm-ImageStrip-{0}Chart_sel', $v_2.toLowerCase());
        Mscrm.Visualization.$5 = $v_2;
    } else {
        if (Mscrm.Visualization.$5 !== Mscrm.Visualization.$2 && Mscrm.Visualization.$5.length) {
            var $v_3 = $v_0.id;
            $v_1.src = String.format('/_imgs/visualization/designer/{0}chart/{0}chart.png', $v_3);
            $v_1.className = '';
            Mscrm.Visualization.$5 = '';
        }
    }
}
Mscrm.Visualization.hoverOKButton = function(srcElement, hover) {
    if (!IsNull(srcElement)) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(srcElement);
        var $v_1 = srcElement.getAttribute('disabled');
        if (IsNull($v_1) || $v_1 === false) {
            $v_0.src = (hover) ? '/_imgs/visualization/ok_hover.png' : '/_imgs/visualization/ok.png';
        }
    }
}
Mscrm.Visualization.$E = function($p0) {
    var $v_0 = null;
    if (!IsNull($p0)) {
        switch ($p0.target.tagName) {
        case 'IMG':
            $v_0 = $p0.target.parentNode;
            break;
        case 'A':
            $v_0 = $p0.target;
            break;
        default:
            break;
        }
    }
    return $v_0;
}
Mscrm.Visualization.$C = function($p0) {
    Mscrm.Visualization.cancelDrillDown();
}
Mscrm.Visualization.cancelDrillDown = function(isGridRefreshRequired, isChartRefreshRequired) {
    if (!Mscrm.Visualization.$K()) {
        return false;
    }
    if (IsNull(isGridRefreshRequired)) {
        isGridRefreshRequired = true;
    }
    if (IsNull(isChartRefreshRequired) || !isGridRefreshRequired) {
        isChartRefreshRequired = false;
    }
    var $v_0 = $get('drillDownBox');
    if (!IsNull($v_0)) {
        $v_0.style.display = 'none';
    }
    var $v_1 = $get('CrmChart');
    if (!IsNull($v_1)) {
        Mscrm.Visualization.$O($v_1);
    }
    var $v_2 = Mscrm.Visualization.$3();
    $v_2.refreshGridOnCancel(Mscrm.Visualization.$0, isGridRefreshRequired, isChartRefreshRequired);
    return true;
}
Mscrm.Visualization.showDrillDownBox = function(domEvent) {
    Mscrm.Visualization.cancelClickEvent(domEvent);
    var $v_0 = $get('drillDownBox');
    if (!IsNull($v_0)) {
        if (!$v_0.style.display.length || $v_0.style.display === 'none') {
            $v_0.style.display = 'block';
            var $v_1 = {};
            $v_1['type'] = 'DrillDownContainer';
            $v_1['parentId'] = Mscrm.Visualization.$4 + '_paneControl';
            Mscrm.Utilities.registerControlForXrmUI($v_0, $v_1);
            var $v_2 = $v_0.querySelectorAll('.ms-crm-drillDownBox-Button');
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                if (!IsNull($v_2[$v_3].getAttribute('id'))) {
                    Mscrm.Visualization
                        .registerChildWithXrmUIControl($v_2[$v_3],
                            $v_2[$v_3].getAttribute('id').toString(),
                            'ChartDrillDownType',
                            'DrillDownContainer');
                }
            }
            Mscrm.Visualization.$I(Mscrm.Visualization.$8);
        }
        Mscrm.Visualization.$G(domEvent, $v_0);
    }
}
Mscrm.Visualization.registerChildWithXrmUIControl = function(element, childControlName, childControlType, parentId) {
    var $v_0 = {};
    $v_0['id'] = childControlName;
    $v_0['type'] = childControlType;
    $v_0['parentId'] = parentId;
    Mscrm.Utilities.registerControlForXrmUI(element, $v_0);
}
Mscrm.Visualization.cancelClickEvent = function(domEvent) {
    if (!IsNull(domEvent)) {
        domEvent.preventDefault();
        domEvent.stopPropagation();
    }
}
Mscrm.Visualization.handleKeyUp = function(domEvent) {
    if (Mscrm.Utilities.getDomEventKeyCode(domEvent) === 27) {
        Mscrm.Visualization.cancelDrillDown(true, false);
        var $v_0 = false;
        var $v_1 = $get('ImageMap');
        if (!IsNull($v_1)) {
            $v_1 = XUI.Html.DomUtils.GetFirstChild($v_1);
            if (!IsNull($v_1)) {
                $v_1.focus();
                $v_0 = true;
            }
        }
        if (!$v_0) {
            document.body.focus();
        }
    }
}


Mscrm.GraphicsUtil.registerClass('Mscrm.GraphicsUtil');
Mscrm.VmlUtil.registerClass('Mscrm.VmlUtil', Mscrm.GraphicsUtil);
Mscrm.Visualization.registerClass('Mscrm.Visualization');
Mscrm.Visualization.$0 = null;
Mscrm.Visualization.$8 = 'Column';
Mscrm.Visualization.$2 = '';
Mscrm.Visualization.$5 = '';
Mscrm.Visualization.$6 = null;
Mscrm.Visualization.$7 = window.frameElement;
Mscrm.Visualization.$4 = ((!IsNull(Mscrm.Visualization.$7)) && (!IsNull(Mscrm.Visualization.$7.getAttribute('gridId'))))
    ? Mscrm.Visualization.$7.getAttribute('gridId').toString()
    : '';
//@ sourceMappingURL=.srcmap