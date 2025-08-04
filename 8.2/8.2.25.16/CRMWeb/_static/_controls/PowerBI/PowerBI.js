Type.registerNamespace('Mscrm.PowerBI');

Mscrm.PowerBI.PowerBIDashboard = function(firstPartyIntegrationUrl, env, direction, mode) {
    Mscrm.PowerBI.PowerBIDashboard.initializeBase(this, [ firstPartyIntegrationUrl, env, direction, mode ]);
}
Mscrm.PowerBI.PowerBIDashboard.prototype = {
    $D_1: null,
    
    getUrl: function() {
        var $v_0 = getDialogArguments();
        return this.buildConfigPageUrl($v_0['DashboardId'], $v_0['TileId'], this.mode);
    },
    
    validate: function() {
        return !isNullOrEmptyString(this.selectedDashboardId) && !isNullOrEmptyString(this.tileUrl);
    },
    
    handleUpdateMessage: function(data, type) {
        if (type === 'dashboardData') {
            this.selectedDashboardId = data['dashboardId'];
            this.$D_1 = data['dashboardName'];
            this.tileUrl = data['tileUrl'];
            if (this.validate()) {
                this.clearAllMessages();
            }
        }
    },
    
    mobileEnabledCheck: function() {
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['isTabletEnabled'];
        $P_CRM('#ShowOnMobileClient').attr('checked', $v_1);
    },
    
    applyChanges: function() {
        if (!this.validate()) {
            this.showError(window.LOCID_VALIDATIONERROR);
            return;
        }
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['CrmDashboardId'];
        var $v_2 = new RemoteCommand('FormEditorWebService', 'SaveForm', null);
        $v_2.SetParameter('formId', (!isNullOrEmptyString($v_1)) ? $v_1.toString() : Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString());
        $v_2.SetParameter('formXml', this.$W_1());
        $v_2.SetParameter('formType', 103);
        $v_2.SetParameter('name', this.$D_1);
        $v_2.SetParameter('description', this.$D_1);
        $v_2.SetParameter('isUserForm', 'true');
        $v_2.SetParameter('isTabletEnabled', $P_CRM('#ShowOnMobileClient').is(':checked'));
        var $v_3 = $v_2.Execute(null);
        if (!IsNull($v_3)) {
            if ($v_3.Success) {
                window.parent.parent.Mscrm.DashboardRibbonActions.refreshDashboardSelector($v_3.ReturnValue);
                closeWindow();
            }
        }
    },
    
    $W_1: function() {
        return '<form><tabs><tab showlabel=\"false\" verticallayout=\"true\" id=\"{79c2fe56-9774-4fcc-82d9-15be85cb49b6}\"><labels><label description=\"Tab\" languagecode=\"1033\" /></labels><columns><column width=\"100%\"><sections><section showlabel=\"false\" showbar=\"false\" columns=\"111\" id=\"{17a1f9a6-0a04-4662-8d47-05cecb80b3a7}\"><labels><label description=\"Section\" languagecode=\"1033\" /></labels><rows><row><cell colspan=\"3\" rowspan=\"24\" showlabel=\"false\" id=\"{a294c3cf-aab6-482d-99e9-ed67cb0db353}\" availableforphone=\"false\"><labels /><control id=\"Component04cd521\" classid=\"{8C54228C-1B25-4909-A12A-F2B968BB0D62}\"><parameters><PowerBIDashboardId>{0}</PowerBIDashboardId><TileUrl>{1}</TileUrl><Type>1</Type></parameters></control></cell></row></rows></section></sections></column></columns></tab></tabs></form>'.replace('{0}', this.selectedDashboardId).replace('{1}', CrmEncodeDecode.CrmXmlEncode(this.tileUrl));
    }
}


Mscrm.PowerBI.PowerBIReport = function(isReport) {
    this.$$d_$K_0 = Function.createDelegate(this, this.$K_0);
    this.$$d_$c_0 = Function.createDelegate(this, this.$c_0);
    this.$H_0 = !isReport;
}
Mscrm.PowerBI.PowerBIReport.prototype = {
    $1_0: null,
    $H_0: false,
    $A_0: 0,
    $I_0: null,
    
    onLoad: function() {
        this.$1_0 = $P_CRM('#tileIframe');
        $P_CRM(window.top).bind('resize', this.$$d_$c_0);
        var $$t_2 = this;
        $P_CRM('#btnRefresh').bind('click', function($p1_0) {
            $$t_2.$1_0.attr('src', $$t_2.$1_0.attr('src'));
        });
        var $$t_3 = this;
        $P_CRM('#btnCross').bind('click', function($p1_0) {
            $$t_3.$O_0();
        });
        if (this.$H_0) {
            $P_CRM(window.self).bind('message', this.$$d_$K_0);
        }
        else {
            this.$I_0 = $P_CRM('#openInPowerBiAnchor').attr('href');
        }
    },
    
    $K_0: function($p0) {
        var $v_0 = $p0.originalEvent;
        var $v_1 = $v_0['origin'];
        if (isNullOrEmptyString($v_1)) {
            return;
        }
        var $v_2 = this.$1_0.attr('src');
        if (!Mscrm.PowerBI.PowerBIControl.$N($v_1, $v_2)) {
            return;
        }
        var $v_3 = JSON.parse($v_0['data']);
        var $v_4 = $v_3['powerBIEventData'];
        if (IsNull($v_4) || $v_4['event'] !== 'tileClicked') {
            return;
        }
        this.$R_0($v_4['navigationUrl']);
    },
    
    $c_0: function($p0) {
        if (this.$A_0) {
            window.clearTimeout(this.$A_0);
            this.$A_0 = 0;
        }
        var $$t_1 = this;
        this.$A_0 = window.setTimeout(function() {
            $$t_1.$R_0($$t_1.$I_0);
        }, 100);
    },
    
    $R_0: function($p0) {
        Mscrm.Utilities.setReturnValue($p0);
        this.$O_0();
    },
    
    $O_0: function() {
        $P_CRM(window.top).unbind('resize', this.$$d_$c_0);
        closeWindow();
    }
}


Mscrm.PowerBI.PowerBITile = function(firstPartyIntegrationUrl, env, direction, mode) {
    this.$2_0 = firstPartyIntegrationUrl;
    this.$C_0 = env;
    this.$F_0 = direction;
    this.mode = mode;
}
Mscrm.PowerBI.PowerBITile.$S = function($p0) {
    if ($p0.endsWith('/')) {
        $p0 = $p0.substr(0, $p0.length - 1);
    }
    return $p0;
}
Mscrm.PowerBI.PowerBITile.prototype = {
    $2_0: null,
    
    get_firstPartyIntegrationUrl: function() {
        return this.$2_0;
    },
    
    $C_0: null,
    
    get_env: function() {
        return this.$C_0;
    },
    
    selectedDashboardId: null,
    $E_0: null,
    tileUrl: null,
    mode: null,
    $V_0: 0,
    $6_0: null,
    $B_0: null,
    $7_0: null,
    $F_0: null,
    
    getUrl: function() {
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['Field'];
        return this.buildConfigPageUrl($v_1['DashboardId'], $v_1['TileId'], this.mode);
    },
    
    mobileEnabledCheck: function() {
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['Field'];
        var $v_2 = $v_1['EnableInMobile'];
        $P_CRM('#ShowOnMobileClient').attr('checked', $v_2);
    },
    
    onLoad: function() {
        var $v_0 = this.getUrl();
        this.$6_0 = $P_CRM('#errorMessage');
        this.$B_0 = $P_CRM('#warningMessage');
        this.$7_0 = $P_CRM('#infoMessage');
        this.mobileEnabledCheck();
        var $v_1 = window.self.LOCID_POWERBITILE_DISABLED;
        if (!isNullOrEmptyString($v_1)) {
            this.$e_0($v_1);
            return;
        }
        $P_CRM('#formeditor').attr('src', $v_0);
        var $$t_5 = this;
        $P_CRM(window).bind('message', function($p1_0) {
            var $v_2 = $p1_0.originalEvent;
            var $v_3 = $v_2['origin'];
            if (isNullOrEmptyString($v_3)) {
                return;
            }
            if ($$t_5.$2_0.toLowerCase().startsWith($v_3.toLowerCase())) {
                $$t_5.$K_0(JSON.parse($v_2['data']));
            }
        });
    },
    
    validate: function() {
        return !isNullOrEmptyString(this.selectedDashboardId) && !isNullOrEmptyString(this.$E_0) && !isNullOrEmptyString(this.tileUrl);
    },
    
    applyChanges: function() {
        if (!this.validate()) {
            this.showError(window.LOCID_VALIDATIONERROR);
            return;
        }
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['Field'];
        var $v_2 = new PowerBITileObj($v_1['Id'], $v_1['RowSpan'], $v_1['ColSpan'], $v_1['Auto'], $v_1['TabName'], $v_1['SectionName'], $v_1['Labels'], $v_1['ShowLabel'], this.selectedDashboardId, this.$E_0, this.tileUrl, this.$V_0, $P_CRM('#ShowOnMobileClient').is(':checked'), true);
        Mscrm.Utilities.setReturnValue($v_2);
        closeWindow();
    },
    
    showError: function(error) {
        this.clearAllMessages();
        this.$6_0.text(error);
        this.$6_0.parent().show();
    },
    
    $f_0: function($p0) {
        this.clearAllMessages();
        this.$B_0.text($p0);
        this.$B_0.parent().show();
    },
    
    $e_0: function($p0) {
        this.clearAllMessages();
        this.$7_0.text($p0);
        this.$7_0.parent().show();
    },
    
    clearAllMessages: function() {
        this.$6_0.parent().hide();
        this.$B_0.parent().hide();
        this.$7_0.parent().hide();
    },
    
    $K_0: function($p0) {
        var $v_0 = $p0['type'];
        if ($v_0 === 'error') {
            var $v_1 = $p0['errorCode'];
            if ($v_1 === 'DATAERROR') {
                this.$f_0(window.self['LOCID_' + $v_1]);
            }
            else {
                this.showError(window.self['LOCID_' + $v_1]);
            }
            return;
        }
        if ($v_0 === 'resize') {
            $P_CRM('#formeditor').height($p0['height']);
            return;
        }
        this.handleUpdateMessage($p0, $v_0);
    },
    
    handleUpdateMessage: function(data, type) {
        if (type === 'formData') {
            this.selectedDashboardId = data['dashboardId'];
            this.$E_0 = data['tileId'];
            this.tileUrl = data['tileUrl'];
            if (this.validate()) {
                this.clearAllMessages();
            }
        }
    },
    
    buildConfigPageUrl: function(currentDashboardId, currentTileId, mode) {
        var $v_0 = this.$2_0 + 'Config.html?';
        var $v_1 = { dashboardLabel: window.LOCID_DASHBOARD_LABEL, tileLabel: window.LOCID_TILE_LABEL, checkboxLabel: window.LOCID_ISVISIBLEONPHONE_LABEL, loginLabel: window.LOCID_LOGIN_LABEL, loginText: window.LOCID_LOGIN_TEXT, deletedLabel: window.LOCID_MISSINGITEMLABEL, env: this.$C_0, direction: this.$F_0, mode: this.mode };
        if (!isNullOrEmptyString(currentDashboardId)) {
            $v_1['dashboardId'] = currentDashboardId;
        }
        if (!isNullOrEmptyString(currentTileId)) {
            $v_1['tileId'] = currentTileId;
        }
        $v_0 = $v_0 + $P_CRM.param($v_1);
        return $v_0;
    }
}


Mscrm.PowerBI.PowerBIControl = function(element) {
    this.$$d_$Q_4 = Function.createDelegate(this, this.$Q_4);
    this.$$d_$b_4 = Function.createDelegate(this, this.$b_4);
    this.$$d_$K_4 = Function.createDelegate(this, this.$K_4);
    Mscrm.PowerBI.PowerBIControl.initializeBase(this, [ element ]);
    this.$1_4 = $P_CRM('iframe', element);
    this.$9_4 = $P_CRM('.ms-crm-powerbi-toolbar', element);
    this.$L_4(true);
    $P_CRM(window.self).bind('message', this.$$d_$K_4);
    this.$0_4 = element;
    this.$Y_4();
}
Mscrm.PowerBI.PowerBIControl.$N = function($p0, $p1) {
    var $v_0 = document.createElement('a');
    $v_0.setAttribute('href', $p0);
    var $v_1 = $v_0.protocol.toString();
    var $v_2 = $v_0.host.toString();
    var $v_3 = document.createElement('a');
    $v_3.setAttribute('href', $p1);
    var $v_4 = $v_3.protocol.toString();
    var $v_5 = $v_3.host.toString();
    var $v_6 = '//';
    return $v_1 + $v_6 + $v_2 === $v_4 + $v_6 + $v_5;
}
Mscrm.PowerBI.PowerBIControl.prototype = {
    $1_4: null,
    $9_4: null,
    $M_4: false,
    $J_4: null,
    $0_4: null,
    $2_4: null,
    
    get_FirstPartyIntegrationUrl: function() {
        return this.$2_4;
    },
    
    set_FirstPartyIntegrationUrl: function(value) {
        this.$2_4 = Mscrm.PowerBI.PowerBITile.$S(value);
        return value;
    },
    
    $8_4: null,
    
    get_PowerBIDashboardUrl: function() {
        return this.$8_4;
    },
    
    set_PowerBIDashboardUrl: function(value) {
        this.$8_4 = Mscrm.PowerBI.PowerBITile.$S(value);
        return value;
    },
    
    $4_4: 0,
    
    get_PowerBIType: function() {
        return this.$4_4;
    },
    
    set_PowerBIType: function(value) {
        this.$4_4 = value;
        return value;
    },
    
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!this.$4_4) {
            $P_CRM('#Refresh_href', this.$0_4).click(this.$$d_$b_4);
            $P_CRM('#Enlarge_href', this.$0_4).click(this.$$d_$Q_4);
            var $$t_0 = this;
            $P_CRM('#OpenPowerBIDashboard_href', this.$0_4).click(function() {
                window.open($$t_0.$8_4);
            });
        }
        this.$T_4();
    },
    
    $T_4: function() {
        if (this.$4_4 !== 1) {
            return;
        }
        this.$0_4.parentNode.style.height = '';
        this.$0_4.parentNode.style.height = ($P_CRM(window).height() - (this.$0_4.offsetTop + 1)) + 'px';
    },
    
    dialogCallback: function(navigationUrl) {
        if (isNullOrEmptyString(navigationUrl)) {
            this.$Q_4(null);
        }
        else {
            this.$P_4(navigationUrl);
        }
    },
    
    $Y_4: function() {
        var $v_0 = 0;
        var $$t_5 = this;
        var $v_1 = function($p1_0) {
            if ($v_0) {
                window.clearTimeout($v_0);
            }
            $v_0 = window.setTimeout(function() {
                $$t_5.$9_4.addClass('ms-crm-powerbi-toolbar-focus');
            }, 10);
        };
        var $$t_6 = this;
        var $v_2 = function($p1_0) {
            if ($v_0) {
                window.clearTimeout($v_0);
            }
            $v_0 = window.setTimeout(function() {
                $$t_6.$9_4.removeClass('ms-crm-powerbi-toolbar-focus');
            }, 10);
        };
        this.$0_4.addEventListener("focus", $v_1, true);
        this.$0_4.addEventListener("blur", $v_2, true);
    },
    
    $K_4: function($p0) {
        var $v_0 = $p0.originalEvent;
        var $v_1 = $v_0['origin'];
        if (isNullOrEmptyString($v_1)) {
            return;
        }
        if (!Mscrm.PowerBI.PowerBIControl.$N($v_1, this.$2_4)) {
            return;
        }
        var $v_2;
        try {
            $v_2 = JSON.parse($v_0['data']);
        }
        catch ($$e_4) {
            return;
        }
        if ($v_2['componentId'] !== this.get_id()) {
            return;
        }
        var $v_3 = $v_2['powerBIEventData'];
        if (IsNull($v_3)) {
            return;
        }
        var $v_4 = window.top.isOutlookHostedWindow();
        var $v_5 = $v_3['event'];
        switch ($v_5) {
            case 'tileClicked':
            case 'TileClick':
                if (!$v_4) {
                    this.$P_4($v_3['navigationUrl']);
                }
                break;
            case 'tileLoaded':
                this.$L_4(false);
                this.$a_4();
                break;
            case 'signInNeeded':
                this.$L_4(true);
                break;
            case 'signInClicked':
                if ($v_4) {
                    window.top.location.hash = '#' + new Date().getTime();
                    window.top.openUrl($v_3['url']);
                }
                break;
            default:
                return;
        }
        this.$J_4 = $v_5;
    },
    
    $L_4: function($p0) {
        var $v_0 = ($p0) ? 'hidden' : '';
        this.$9_4.css('visibility', $v_0);
    },
    
    $a_4: function() {
        this.$M_4 = true;
        if (this.$J_4 === 'signInNeeded') {
            Mscrm.CrmUIControl.prototype.raiseEvent.call(this, 116, {});
        }
    },
    
    $P_4: function($p0) {
        var $v_0 = this.$d_4($p0);
        if (!$v_0 || isNullOrEmptyString($v_0.$3_0)) {
            return;
        }
        var $v_1 = Mscrm.CrmUri.create('/_controls/powerbi/powerbireport.aspx');
        $v_1.get_query()['embedUrl'] = this.$X_4($v_0);
        $v_1.get_query()['webUrl'] = $p0;
        $v_1.get_query()['isReport'] = true;
        this.$U_4($v_1);
    },
    
    $d_4: function($p0) {
        var $v_0 = new RegExp('reports/(.*)/(.*)', 'i');
        var $v_1 = $v_0.exec($p0);
        if ($v_1 && $v_1.length === 3) {
            return new Mscrm.PowerBI.PowerBIControl.ReportIdentifier($v_1[1], $v_1[2]);
        }
        return null;
    },
    
    $X_4: function($p0) {
        var $v_0 = '/embed?.*';
        var $v_1 = '/dashboardEmbed?.*';
        var $v_2 = Mscrm.CrmUri.create(this.$1_4.attr('src'));
        var $v_3 = $v_2.get_query()['powerBIUrl'];
        var $v_4 = '/reportEmbed?reportId=' + $p0.$3_0;
        $v_4 += '&pageName=' + $p0.$5_0;
        var $v_5 = $v_3.replace(new RegExp((!this.$4_4) ? $v_0 : $v_1, 'i'), $v_4);
        $v_2.get_query()['powerBIUrl'] = $v_5;
        $v_2.get_query()['mode'] = 'report';
        return $v_2.toString();
    },
    
    $G_4: function() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$T_4();
        var $v_0 = this.$1_4[0];
        $v_0.src = $v_0.src;
    },
    
    $Z_4: function() {
        if (this.$M_4) {
            return;
        }
        this.$G_4();
    },
    
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
            case 53:
                this.$G_4();
                break;
            case 116:
                this.$Z_4();
                break;
        }
        return null;
    },
    
    $b_4: function($p0) {
        this.$G_4();
    },
    
    $Q_4: function($p0) {
        var $v_0 = Mscrm.CrmUri.create('/_controls/powerbi/powerbireport.aspx');
        $v_0.get_query()['embedUrl'] = this.$1_4.attr('src');
        $v_0.get_query()['webUrl'] = this.$8_4;
        $v_0.get_query()['isReport'] = false;
        this.$U_4($v_0);
    },
    
    $U_4: function($p0) {
        var $v_0 = $P_CRM(window.top).width() - 100;
        var $v_1 = $P_CRM(window.top).height() - 100;
        if ($v_0 <= 0 || $v_1 <= 0) {
            return;
        }
        var $v_2 = new Mscrm.CrmDialog($p0, null, $v_0, $v_1, null);
        $v_2.setCallbackInfo('dialogCallback', this, null);
        $v_2.show();
    }
}


Mscrm.PowerBI.PowerBIControl.ReportIdentifier = function($p0, $p1) {
    this.$3_0 = $p0;
    this.$5_0 = $p1;
}
Mscrm.PowerBI.PowerBIControl.ReportIdentifier.prototype = {
    $3_0: null,
    $5_0: null,
    
    get_reportId: function() {
        return this.$3_0;
    },
    
    set_reportId: function($p0) {
        this.$3_0 = $p0;
        return $p0;
    },
    
    get_pageName: function() {
        return this.$5_0;
    },
    
    set_pageName: function($p0) {
        this.$5_0 = $p0;
        return $p0;
    }
}


Mscrm.PowerBI.PowerBITile.registerClass('Mscrm.PowerBI.PowerBITile');
Mscrm.PowerBI.PowerBIDashboard.registerClass('Mscrm.PowerBI.PowerBIDashboard', Mscrm.PowerBI.PowerBITile);
Mscrm.PowerBI.PowerBIReport.registerClass('Mscrm.PowerBI.PowerBIReport');
Mscrm.PowerBI.PowerBIControl.registerClass('Mscrm.PowerBI.PowerBIControl', Mscrm.UIControl);
Mscrm.PowerBI.PowerBIControl.ReportIdentifier.registerClass('Mscrm.PowerBI.PowerBIControl.ReportIdentifier');
//@ sourceMappingURL=.srcmap
