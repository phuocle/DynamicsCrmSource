Type.registerNamespace('Mscrm');

Mscrm.VisualizationActions = function() {
}
Mscrm.VisualizationActions.refreshVisualizationsGrid = function() {
    try {
        var $v_0 = $find('gridVisualizations');
        if (IsNull($v_0)) {
            $v_0 = window.top.opener.$find('gridVisualizations');
        }
        if (!IsNull($v_0)) {
            $v_0.refresh();
        }
    } catch ($$e_1) {
    }
}
Mscrm.VisualizationActions.importVisualization = function(visualizationType) {
    var $v_0 = Mscrm.CrmUri.create('/Visualization/cmds/dlg_importvisualization.aspx');
    $v_0.get_query()['vizType'] = visualizationType;
    var $v_1 = new Mscrm.CrmDialog($v_0, null, 400, 300, 'maximize:no;minimize:no');
    $v_1.setCallbackInfo('refreshVisualizationsGrid', Mscrm.VisualizationActions, null);
    $v_1.show();
}
Mscrm.VisualizationActions.exportVisualization = function(selectedVisualization,
    selectedVisualizationType,
    retrieveUnpublished,
    exportElement) {
    var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_exportvisualization.aspx');
    $v_0.get_query()['vistype'] = selectedVisualizationType;
    $v_0.get_query()['visualizationId'] = selectedVisualization;
    $v_0.get_query()['unpublished'] = retrieveUnpublished.toString();
    Mscrm.VisualizationActions.$1(exportElement);
    var $v_1 = Mscrm.VisualizationActions.$3(exportElement);
    if (!IsNull($v_1)) {
        $v_1.action = $v_0.toString();
        $v_1.submit();
    }
}
Mscrm.VisualizationActions.$3 = function($p0) {
    var $v_0 = null;
    var $v_1 = 'exportChartForm';
    $v_0 = $get($v_1, $p0);
    if (IsNull($v_0)) {
        $v_0 = document.createElement('form');
        $v_0.style.display = 'none';
        $v_0.id = $v_1;
        $p0.appendChild($v_0);
    }
    $v_0.target = Mscrm.VisualizationActions.$0;
    $v_0.method = 'post';
    return $v_0;
}
Mscrm.VisualizationActions.$1 = function($p0) {
    var $v_0 = null;
    $v_0 = $get(Mscrm.VisualizationActions.$0, $p0);
    if (IsNull($v_0)) {
        $v_0 = document.createElement('iframe');
        $v_0.id = Mscrm.VisualizationActions.$0;
        $v_0.setAttribute('name', Mscrm.VisualizationActions.$0);
        $v_0.style.display = 'none';
        $p0.appendChild($v_0);
        $v_0.contentWindow.name = Mscrm.VisualizationActions.$0;
        var $v_1 = Mscrm.VisualizationActions.$2;
        $addHandler($v_0, 'load', $v_1);
    }
}
Mscrm.VisualizationActions.$2 = function($p0) {
    var $v_0 = $p0.target;
    var $v_1 = '_ExportError_';
    try {
        var $v_2 = $v_0.contentWindow.document.body.innerHTML;
        if ($v_2.startsWith($v_1)) {
            var $v_3 = $v_2.substring($v_1.length, $v_2.length);
            openErrorDlg($v_3, null, null, 0, 0);
        }
    } catch ($$e_5) {
    }
}
Mscrm.VisualizationActions.fireEventForStickyVisualization = function(parameters) {
    if (IsNull(parameters['IsDashboardComponent']) || !Boolean.parse(parameters['IsDashboardComponent'])) {
        var $v_0 = {};
        $v_0['visualizationId'] = parameters['visualizationId'];
        $v_0['visualizationType'] = parameters['visualizationType'];
        $v_0['visualizationPaneMode'] = parameters['visualizationPaneMode'];
        $v_0['layout'] = parameters['layout'];
        if (Mscrm.PageManager.isOutlookProxyPage()) {
            $v_0['etn'] = parameters['etn'];
            getOutlookHostedWindow().handleEvent(60, $v_0, null);
        } else if (!IsNull(Mscrm.PageManager.get_instance())) {
            Mscrm.PageManager.get_instance().raiseEvent(60, $v_0);
            Mscrm.VisualizationActions.$4(parameters);
        }
    }
}
Mscrm.VisualizationActions.$4 = function($p0) {
    var $v_0 = Mscrm.PageManager.get_instance().raiseEvent(3, null);
    if (IsNull($v_0) || !$v_0.length) {
        return;
    }
    var $v_1 = $v_0[0];
    if (($v_1['subAreaId']).toUpperCase() !== 'NAV_ACTIVITIES') {
        return;
    }
    var $v_2 = $get('crmTypeSelector');
    if (!IsNull($v_2) && !isNullOrEmptyString($v_2.value)) {
        var $v_3 = $v_2.value;
        var $v_4 = {};
        $v_4['data'] = $p0;
        $v_4['key'] = String.format('ActivitiesTypeCachedVisualization_{0}', $v_3);
        Mscrm.PageManager.get_instance().raiseEvent(5, $v_4);
    }
}
Mscrm.VisualizationActions
    .createVizParamsDictionary = function(layout,
        visualizationId,
        visualizationType,
        visualizationPaneMode,
        etn,
        isDashboardComponent) {
        var $v_0 = {};
        $v_0['layout'] = layout;
        $v_0['visualizationId'] = visualizationId;
        $v_0['visualizationType'] = visualizationType;
        $v_0['visualizationPaneMode'] = visualizationPaneMode;
        $v_0['etn'] = etn;
        $v_0['IsDashboardComponent'] = isDashboardComponent;
        return $v_0;
    }


Mscrm.VisualizationPaneMode = function() {
}


Mscrm.VisualizationActions.registerClass('Mscrm.VisualizationActions');
Mscrm.VisualizationPaneMode.registerClass('Mscrm.VisualizationPaneMode');
Mscrm.VisualizationActions.$0 = 'exportChartIframe';
Mscrm.VisualizationPaneMode.collapsedSize = '0';
Mscrm.VisualizationPaneMode.defaultSize = '1';
Mscrm.VisualizationPaneMode.expandedSize = '2';
Mscrm.VisualizationPaneMode.resizeMode = '3';
Mscrm.VisualizationPaneMode.none = '4';
//@ sourceMappingURL=.srcmap