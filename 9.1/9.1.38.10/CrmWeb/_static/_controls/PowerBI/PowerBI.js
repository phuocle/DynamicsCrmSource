Type.registerNamespace('Mscrm.PowerBI');

Mscrm.PowerBI.PowerBIDashboard = function(firstPartyIntegrationUrl, env, direction, mode, tenant) {
    Mscrm.PowerBI.PowerBIDashboard.initializeBase(this, [ firstPartyIntegrationUrl, env, direction, mode, tenant ]);
}
Mscrm.PowerBI.PowerBIDashboard.prototype = {
    $E_1: null,
    
    getUrl: function() {
        var $v_0 = getDialogArguments();
        return this.buildConfigPageUrl($v_0['GroupId'], $v_0['DashboardId'], $v_0['TileId']);
    },
    
    validate: function() {
        return !isNullOrEmptyString(this.selectedDashboardId) && !isNullOrEmptyString(this.tileUrl);
    },
    
    handleUpdateMessage: function(data, type) {
        if (type === 'dashboardData') {
            this.selectedDashboardId = data['dashboardId'];
            this.selectedGroupId = data['groupId'];
            this.$E_1 = data['dashboardName'];
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
        var $$t_6 = this;
        var $v_2 = function($p1_0) {
        };
        if ((('uciCallback') in $v_0)) {
            $v_2 = $v_0['uciCallback'];
        }
        else {
            $v_2 = null;
        }
        var $v_3 = new RemoteCommand('FormEditorWebService', 'SaveForm', null);
        $v_3.SetParameter('formId', (!isNullOrEmptyString($v_1)) ? $v_1.toString() : Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString());
        $v_3.SetParameter('formXml', this.$Y_1());
        $v_3.SetParameter('formType', 103);
        $v_3.SetParameter('name', this.$E_1);
        $v_3.SetParameter('description', this.$E_1);
        $v_3.SetParameter('isUserForm', 'true');
        $v_3.SetParameter('isTabletEnabled', $P_CRM('#ShowOnMobileClient').is(':checked'));
        var $v_4 = $v_3.Execute(null);
        if (!IsNull($v_4)) {
            if ($v_4.Success) {
                if ($v_2) {
                    $v_2($v_4.ReturnValue);
                    closeWindow();
                }
                else {
                    window.parent.parent.Mscrm.DashboardRibbonActions.refreshDashboardSelector($v_4.ReturnValue);
                    closeWindow();
                }
            }
        }
    },
    
    $Y_1: function() {
        return '<form><tabs><tab showlabel=\"false\" verticallayout=\"true\" id=\"{79c2fe56-9774-4fcc-82d9-15be85cb49b6}\"><labels><label description=\"Tab\" languagecode=\"1033\" /></labels><columns><column width=\"100%\"><sections><section showlabel=\"false\" showbar=\"false\" columns=\"111\" id=\"{17a1f9a6-0a04-4662-8d47-05cecb80b3a7}\"><labels><label description=\"Section\" languagecode=\"1033\" /></labels><rows><row><cell colspan=\"3\" rowspan=\"24\" showlabel=\"false\" id=\"{a294c3cf-aab6-482d-99e9-ed67cb0db353}\" availableforphone=\"false\"><labels /><control id=\"Component04cd521\" classid=\"{8C54228C-1B25-4909-A12A-F2B968BB0D62}\"><parameters><PowerBIGroupId>{2}</PowerBIGroupId><PowerBIDashboardId>{0}</PowerBIDashboardId><TileUrl>{1}</TileUrl><Type>1</Type></parameters></control></cell></row></rows></section></sections></column></columns></tab></tabs></form>'.replace('{0}', this.selectedDashboardId).replace('{1}', CrmEncodeDecode.CrmXmlEncode(this.tileUrl)).replace('{2}', this.selectedGroupId);
    }
}


Mscrm.PowerBI.PowerBIReport = function(isReport) {
    this.$$d_$M_0 = Function.createDelegate(this, this.$M_0);
    this.$$d_$e_0 = Function.createDelegate(this, this.$e_0);
    this.$J_0 = !isReport;
}
Mscrm.PowerBI.PowerBIReport.prototype = {
    $0_0: null,
    $J_0: false,
    $B_0: 0,
    $K_0: null,
    
    onLoad: function() {
        this.$0_0 = $P_CRM('#tileIframe');
        $P_CRM(window.top).bind('resize', this.$$d_$e_0);
        var $$t_2 = this;
        $P_CRM('#btnRefresh').bind('click', function($p1_0) {
            $$t_2.$0_0.attr('src', $$t_2.$0_0.attr('src'));
        });
        var $$t_3 = this;
        $P_CRM('#btnCross').bind('click', function($p1_0) {
            $$t_3.$Q_0();
        });
        if (this.$J_0) {
            $P_CRM(window.self).bind('message', this.$$d_$M_0);
        }
        else {
            this.$K_0 = $P_CRM('#openInPowerBiAnchor').attr('href');
        }
    },
    
    $M_0: function($p0) {
        var $v_0 = $p0.originalEvent;
        var $v_1 = $v_0['origin'];
        if (isNullOrEmptyString($v_1)) {
            return;
        }
        var $v_2 = this.$0_0.attr('src');
        if (!Mscrm.PowerBI.PowerBIControl.$P($v_1, $v_2)) {
            return;
        }
        var $v_3 = JSON.parse($v_0['data']);
        var $v_4 = $v_3['powerBIEventData'];
        if (IsNull($v_4) || $v_4['event'] !== 'tileClicked') {
            return;
        }
        this.$T_0($v_4['navigationUrl']);
    },
    
    $e_0: function($p0) {
        if (this.$B_0) {
            window.clearTimeout(this.$B_0);
            this.$B_0 = 0;
        }
        var $$t_1 = this;
        this.$B_0 = window.setTimeout(function() {
            $$t_1.$T_0($$t_1.$K_0);
        }, 100);
    },
    
    $T_0: function($p0) {
        Mscrm.Utilities.setReturnValue($p0);
        this.$Q_0();
    },
    
    $Q_0: function() {
        $P_CRM(window.top).unbind('resize', this.$$d_$e_0);
        closeWindow();
    }
}


Mscrm.PowerBI.PowerBITile = function(firstPartyIntegrationUrl, env, direction, mode, tenant) {
    this.$2_0 = firstPartyIntegrationUrl;
    this.$D_0 = env;
    this.$H_0 = direction;
    this.mode = mode;
    this.$G_0 = tenant;
}
Mscrm.PowerBI.PowerBITile.$U = function($p0) {
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
    
    $D_0: null,
    
    get_env: function() {
        return this.$D_0;
    },
    
    selectedGroupId: null,
    selectedDashboardId: null,
    $F_0: null,
    tileUrl: null,
    mode: null,
    $X_0: 0,
    $7_0: null,
    $C_0: null,
    $8_0: null,
    $H_0: null,
    $G_0: null,
    
    getUrl: function() {
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['Field'];
        return this.buildConfigPageUrl($v_1['GroupId'], $v_1['DashboardId'], $v_1['TileId']);
    },
    
    mobileEnabledCheck: function() {
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['Field'];
        var $v_2 = $v_1['EnableInMobile'];
        $P_CRM('#ShowOnMobileClient').attr('checked', $v_2);
    },
    
    onLoad: function() {
        var $v_0 = this.getUrl();
        this.$7_0 = $P_CRM('#errorMessage');
        this.$C_0 = $P_CRM('#warningMessage');
        this.$8_0 = $P_CRM('#infoMessage');
        this.mobileEnabledCheck();
        var $v_1 = window.self.LOCID_POWERBITILE_DISABLED;
        if (!isNullOrEmptyString($v_1)) {
            this.$g_0($v_1);
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
                $$t_5.$M_0(JSON.parse($v_2['data']));
            }
        });
    },
    
    validate: function() {
        return !isNullOrEmptyString(this.selectedDashboardId) && !isNullOrEmptyString(this.$F_0) && !isNullOrEmptyString(this.tileUrl);
    },
    
    applyChanges: function() {
        if (!this.validate()) {
            this.showError(window.LOCID_VALIDATIONERROR);
            return;
        }
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['Field'];
        var $v_2 = new PowerBITileObj($v_1['Id'], $v_1['RowSpan'], $v_1['ColSpan'], $v_1['Auto'], $v_1['TabName'], $v_1['SectionName'], $v_1['Labels'], $v_1['ShowLabel'], this.selectedGroupId, this.selectedDashboardId, this.$F_0, this.tileUrl, this.$X_0, $P_CRM('#ShowOnMobileClient').is(':checked'), true);
        Mscrm.Utilities.setReturnValue($v_2);
        closeWindow();
    },
    
    showError: function(error) {
        this.clearAllMessages();
        this.$7_0.text(error);
        this.$7_0.parent().show();
    },
    
    $h_0: function($p0) {
        this.clearAllMessages();
        this.$C_0.text($p0);
        this.$C_0.parent().show();
    },
    
    $g_0: function($p0) {
        this.clearAllMessages();
        this.$8_0.text($p0);
        this.$8_0.parent().show();
    },
    
    clearAllMessages: function() {
        this.$7_0.parent().hide();
        this.$C_0.parent().hide();
        this.$8_0.parent().hide();
    },
    
    $M_0: function($p0) {
        var $v_0 = $p0['type'];
        if ($v_0 === 'error') {
            var $v_1 = $p0['errorCode'];
            if ($v_1 === 'DATAERROR') {
                this.$h_0(window.self['LOCID_' + $v_1]);
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
            this.selectedGroupId = data['groupId'];
            this.selectedDashboardId = data['dashboardId'];
            this.$F_0 = data['tileId'];
            this.tileUrl = data['tileUrl'];
            if (this.validate()) {
                this.clearAllMessages();
            }
        }
    },
    
    buildConfigPageUrl: function(currentGroupId, currentDashboardId, currentTileId) {
        var $v_0 = this.$2_0 + 'Config.html?';
        var $v_1 = { dashboardLabel: window.LOCID_DASHBOARD_LABEL, tileLabel: window.LOCID_TILE_LABEL, checkboxLabel: window.LOCID_ISVISIBLEONPHONE_LABEL, loginLabel: window.LOCID_LOGIN_LABEL, loginText: window.LOCID_LOGIN_TEXT, deletedLabel: window.LOCID_MISSINGITEMLABEL, env: this.$D_0, direction: this.$H_0, mode: this.mode, myWorkspace: window.LOCID_MYWORKSPACE_TEXT, groupLabel: window.LOCID_GROUP_LABEL };
        if (!isNullOrEmptyString(currentGroupId)) {
            $v_1['groupId'] = currentGroupId;
        }
        if (!isNullOrEmptyString(currentDashboardId)) {
            $v_1['dashboardId'] = currentDashboardId;
        }
        if (!isNullOrEmptyString(currentTileId)) {
            $v_1['tileId'] = currentTileId;
        }
        if (!isNullOrEmptyString(this.$G_0)) {
            $v_1['tenant'] = this.$G_0;
        }
        $v_0 = $v_0 + $P_CRM.param($v_1);
        return $v_0;
    }
}


Mscrm.PowerBI.PowerBIControl = function(element) {
    this.$$d_$S_4 = Function.createDelegate(this, this.$S_4);
    this.$$d_$d_4 = Function.createDelegate(this, this.$d_4);
    this.$$d_$M_4 = Function.createDelegate(this, this.$M_4);
    Mscrm.PowerBI.PowerBIControl.initializeBase(this, [ element ]);
    this.$0_4 = $P_CRM('iframe', element);
    this.$A_4 = $P_CRM('.ms-crm-powerbi-toolbar', element);
    this.$N_4(true);
    $P_CRM(window.self).bind('message', this.$$d_$M_4);
    this.$1_4 = element;
    this.$a_4();
}
Mscrm.PowerBI.PowerBIControl.$P = function($p0, $p1) {
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
    $0_4: null,
    $A_4: null,
    $O_4: false,
    $L_4: null,
    $1_4: null,
    $2_4: null,
    
    get_FirstPartyIntegrationUrl: function() {
        return this.$2_4;
    },
    
    set_FirstPartyIntegrationUrl: function(value) {
        this.$2_4 = Mscrm.PowerBI.PowerBITile.$U(value);
        return value;
    },
    
    $9_4: null,
    
    get_PowerBIDashboardUrl: function() {
        return this.$9_4;
    },
    
    set_PowerBIDashboardUrl: function(value) {
        this.$9_4 = Mscrm.PowerBI.PowerBITile.$U(value);
        return value;
    },
    
    $5_4: 0,
    
    get_PowerBIType: function() {
        return this.$5_4;
    },
    
    set_PowerBIType: function(value) {
        this.$5_4 = value;
        return value;
    },
    
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!this.$5_4) {
            $P_CRM('#Refresh_href', this.$1_4).click(this.$$d_$d_4);
            $P_CRM('#Enlarge_href', this.$1_4).click(this.$$d_$S_4);
            var $$t_0 = this;
            $P_CRM('#OpenPowerBIDashboard_href', this.$1_4).click(function() {
                window.open($$t_0.$9_4);
            });
        }
        this.$V_4();
    },
    
    $V_4: function() {
        if (this.$5_4 !== 1) {
            return;
        }
        var $v_0 = $P_CRM('#crmForm').height();
        var $v_1 = $P_CRM(this.$1_4.parentNode).innerHeight();
        this.$1_4.parentNode.style.height = ($P_CRM(window).height() - $v_0 + $v_1) + 'px';
    },
    
    dialogCallback: function(navigationUrl) {
        if (isNullOrEmptyString(navigationUrl)) {
            this.$S_4(null);
        }
        else {
            this.$R_4(navigationUrl);
        }
    },
    
    $a_4: function() {
        var $v_0 = 0;
        var $$t_5 = this;
        var $v_1 = function($p1_0) {
            if ($v_0) {
                window.clearTimeout($v_0);
            }
            $v_0 = window.setTimeout(function() {
                $$t_5.$A_4.addClass('ms-crm-powerbi-toolbar-focus');
            }, 10);
        };
        var $$t_6 = this;
        var $v_2 = function($p1_0) {
            if ($v_0) {
                window.clearTimeout($v_0);
            }
            $v_0 = window.setTimeout(function() {
                $$t_6.$A_4.removeClass('ms-crm-powerbi-toolbar-focus');
            }, 10);
        };
        this.$1_4.addEventListener("focus", $v_1, true);
        this.$1_4.addEventListener("blur", $v_2, true);
    },
    
    $M_4: function($p0) {
        var $v_0 = $p0.originalEvent;
        var $v_1 = $v_0['origin'];
        if (isNullOrEmptyString($v_1)) {
            return;
        }
        if (!Mscrm.PowerBI.PowerBIControl.$P($v_1, this.$2_4)) {
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
                    this.$R_4($v_3['navigationUrl']);
                }
                break;
            case 'tileLoaded':
                this.$N_4(false);
                this.$c_4();
                break;
            case 'signInNeeded':
                this.$N_4(true);
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
        this.$L_4 = $v_5;
    },
    
    $N_4: function($p0) {
        var $v_0 = ($p0) ? 'hidden' : '';
        this.$A_4.css('visibility', $v_0);
    },
    
    $c_4: function() {
        this.$O_4 = true;
        if (this.$L_4 === 'signInNeeded') {
            Mscrm.CrmUIControl.prototype.raiseEvent.call(this, 116, {});
        }
    },
    
    $R_4: function($p0) {
        var $v_0 = this.$f_4($p0);
        if (!$v_0 || isNullOrEmptyString($v_0.$4_0)) {
            return;
        }
        var $v_1 = Mscrm.CrmUri.create('/_controls/powerbi/powerbireport.aspx');
        $v_1.get_query()['embedUrl'] = this.$Z_4($v_0);
        $v_1.get_query()['webUrl'] = $p0;
        $v_1.get_query()['isReport'] = true;
        this.$W_4($v_1);
    },
    
    $f_4: function($p0) {
        var $v_0 = new RegExp('groups/(.*)/reports/(.*)/(.*)', 'i');
        var $v_1 = $v_0.exec($p0);
        if ($v_1 && $v_1.length === 4) {
            return new Mscrm.PowerBI.PowerBIControl.ReportIdentifier($v_1[2], $v_1[1], $v_1[3]);
        }
        $v_0 = new RegExp('reports/(.*)/(.*)', 'i');
        $v_1 = $v_0.exec($p0);
        if ($v_1 && $v_1.length === 3) {
            return new Mscrm.PowerBI.PowerBIControl.ReportIdentifier($v_1[1], null, $v_1[2]);
        }
        return null;
    },
    
    $Z_4: function($p0) {
        var $v_0 = '/embed?.*';
        var $v_1 = '/dashboardEmbed?.*';
        var $v_2 = Mscrm.CrmUri.create(this.$0_4.attr('src'));
        var $v_3 = $v_2.get_query()['powerBIUrl'];
        var $v_4 = '/reportEmbed?reportId=' + $p0.$4_0;
        if (!isNullOrEmptyString($p0.$3_0) && $p0.$3_0 !== '00000000-0000-0000-0000-000000000000') {
            $v_4 += '&groupId=' + $p0.$3_0;
        }
        $v_4 += '&pageName=' + $p0.$6_0;
        var $v_5 = $v_3.replace(new RegExp((!this.$5_4) ? $v_0 : $v_1, 'i'), $v_4);
        $v_2.get_query()['powerBIUrl'] = $v_5;
        $v_2.get_query()['mode'] = 'report';
        return $v_2.toString();
    },
    
    $I_4: function() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$V_4();
        var $v_0 = this.$0_4[0];
        $v_0.src = $v_0.src;
    },
    
    $b_4: function() {
        if (this.$O_4) {
            return;
        }
        this.$I_4();
    },
    
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
            case 53:
                this.$I_4();
                break;
            case 116:
                this.$b_4();
                break;
        }
        return null;
    },
    
    $d_4: function($p0) {
        this.$I_4();
    },
    
    $S_4: function($p0) {
        var $v_0 = Mscrm.CrmUri.create('/_controls/powerbi/powerbireport.aspx');
        $v_0.get_query()['embedUrl'] = this.$0_4.attr('src');
        $v_0.get_query()['webUrl'] = this.$9_4;
        $v_0.get_query()['isReport'] = false;
        this.$W_4($v_0);
    },
    
    $W_4: function($p0) {
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


Mscrm.PowerBI.PowerBIControl.ReportIdentifier = function($p0, $p1, $p2) {
    this.$4_0 = $p0;
    this.$3_0 = $p1;
    this.$6_0 = $p2;
}
Mscrm.PowerBI.PowerBIControl.ReportIdentifier.prototype = {
    $4_0: null,
    $3_0: null,
    $6_0: null,
    
    get_reportId: function() {
        return this.$4_0;
    },
    
    set_reportId: function($p0) {
        this.$4_0 = $p0;
        return $p0;
    },
    
    get_groupId: function() {
        return this.$3_0;
    },
    
    set_groupId: function($p0) {
        this.$3_0 = $p0;
        return $p0;
    },
    
    get_pageName: function() {
        return this.$6_0;
    },
    
    set_pageName: function($p0) {
        this.$6_0 = $p0;
        return $p0;
    }
}


Mscrm.PowerBI.PowerBITile.registerClass('Mscrm.PowerBI.PowerBITile');
Mscrm.PowerBI.PowerBIDashboard.registerClass('Mscrm.PowerBI.PowerBIDashboard', Mscrm.PowerBI.PowerBITile);
Mscrm.PowerBI.PowerBIReport.registerClass('Mscrm.PowerBI.PowerBIReport');
Mscrm.PowerBI.PowerBIControl.registerClass('Mscrm.PowerBI.PowerBIControl', Mscrm.UIControl);
Mscrm.PowerBI.PowerBIControl.ReportIdentifier.registerClass('Mscrm.PowerBI.PowerBIControl.ReportIdentifier');
