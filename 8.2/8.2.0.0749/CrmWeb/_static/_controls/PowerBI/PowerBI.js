Type.registerNamespace('Mscrm.PowerBI');

Mscrm.PowerBI.PowerBIDashboard = function(firstPartyIntegrationUrl, env, direction, mode) {
    Mscrm.PowerBI.PowerBIDashboard.initializeBase(this, [firstPartyIntegrationUrl, env, direction, mode]);
}
Mscrm.PowerBI.PowerBIDashboard.prototype = {
    $B_1: null,

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
            this.$B_1 = data['dashboardName'];
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
        $v_2.SetParameter('formId',
            (!isNullOrEmptyString($v_1))
            ? $v_1.toString()
            : Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString());
        $v_2.SetParameter('formXml', this.$U_1());
        $v_2.SetParameter('formType', 103);
        $v_2.SetParameter('name', this.$B_1);
        $v_2.SetParameter('description', this.$B_1);
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

    $U_1: function() {
        return '<form><tabs><tab showlabel=\"false\" verticallayout=\"true\" id=\"{79c2fe56-9774-4fcc-82d9-15be85cb49b6}\"><labels><label description=\"Tab\" languagecode=\"1033\" /></labels><columns><column width=\"100%\"><sections><section showlabel=\"false\" showbar=\"false\" columns=\"111\" id=\"{17a1f9a6-0a04-4662-8d47-05cecb80b3a7}\"><labels><label description=\"Section\" languagecode=\"1033\" /></labels><rows><row><cell colspan=\"3\" rowspan=\"24\" showlabel=\"false\" id=\"{a294c3cf-aab6-482d-99e9-ed67cb0db353}\" availableforphone=\"false\"><labels /><control id=\"Component04cd521\" classid=\"{8C54228C-1B25-4909-A12A-F2B968BB0D62}\"><parameters><PowerBIDashboardId>{0}</PowerBIDashboardId><TileUrl>{1}</TileUrl><Type>1</Type></parameters></control></cell></row></rows></section></sections></column></columns></tab></tabs></form>'.replace('{0}', this.selectedDashboardId).replace('{1}', CrmEncodeDecode.CrmXmlEncode(this.tileUrl));
    }
}


Mscrm.PowerBI.PowerBIReport = function(isReport) {
    this.$$d_$I_0 = Function.createDelegate(this, this.$I_0);
    this.$$d_$a_0 = Function.createDelegate(this, this.$a_0);
    this.$F_0 = !isReport;
}
Mscrm.PowerBI.PowerBIReport.prototype = {
    $1_0: null,
    $F_0: false,
    $8_0: 0,
    $G_0: null,

    onLoad: function() {
        this.$1_0 = $P_CRM('#tileIframe');
        $P_CRM(window.top).bind('resize', this.$$d_$a_0);
        var $$t_2 = this;
        $P_CRM('#btnRefresh').bind('click',
            function($p1_0) {
                $$t_2.$1_0.attr('src', $$t_2.$1_0.attr('src'));
            });
        var $$t_3 = this;
        $P_CRM('#btnCross').bind('click',
            function($p1_0) {
                $$t_3.$M_0();
            });
        if (this.$F_0) {
            $P_CRM(window.self).bind('message', this.$$d_$I_0);
        } else {
            this.$G_0 = $P_CRM('#openInPowerBiAnchor').attr('href');
        }
    },

    $I_0: function($p0) {
        var $v_0 = $p0.originalEvent;
        var $v_1 = $v_0['origin'];
        if (isNullOrEmptyString($v_1)) {
            return;
        }
        var $v_2 = this.$1_0.attr('src');
        if (!Mscrm.PowerBI.PowerBIControl.$L($v_1, $v_2)) {
            return;
        }
        var $v_3 = JSON.parse($v_0['data']);
        var $v_4 = $v_3['powerBIEventData'];
        if (IsNull($v_4) || $v_4['event'] !== 'tileClicked') {
            return;
        }
        this.$P_0($v_4['navigationUrl']);
    },

    $a_0: function($p0) {
        if (this.$8_0) {
            window.clearTimeout(this.$8_0);
            this.$8_0 = 0;
        }
        var $$t_1 = this;
        this.$8_0 = window.setTimeout(function() {
                $$t_1.$P_0($$t_1.$G_0);
            },
            100);
    },

    $P_0: function($p0) {
        Mscrm.Utilities.setReturnValue($p0);
        this.$M_0();
    },

    $M_0: function() {
        $P_CRM(window.top).unbind('resize', this.$$d_$a_0);
        closeWindow();
    }
}


Mscrm.PowerBI.PowerBITile = function(firstPartyIntegrationUrl, env, direction, mode) {
    this.$2_0 = firstPartyIntegrationUrl;
    this.$A_0 = env;
    this.$D_0 = direction;
    this.mode = mode;
}
Mscrm.PowerBI.PowerBITile.$Q = function($p0) {
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

    $A_0: null,

    get_env: function() {
        return this.$A_0;
    },

    selectedDashboardId: null,
    $C_0: null,
    tileUrl: null,
    mode: null,
    $T_0: 0,
    $4_0: null,
    $9_0: null,
    $5_0: null,
    $D_0: null,

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
        this.$4_0 = $P_CRM('#errorMessage');
        this.$9_0 = $P_CRM('#warningMessage');
        this.$5_0 = $P_CRM('#infoMessage');
        this.mobileEnabledCheck();
        var $v_1 = window.self.LOCID_POWERBITILE_DISABLED;
        if (!isNullOrEmptyString($v_1)) {
            this.$c_0($v_1);
            return;
        }
        $P_CRM('#formeditor').attr('src', $v_0);
        var $$t_5 = this;
        $P_CRM(window).bind('message',
            function($p1_0) {
                var $v_2 = $p1_0.originalEvent;
                var $v_3 = $v_2['origin'];
                if (isNullOrEmptyString($v_3)) {
                    return;
                }
                if ($$t_5.$2_0.toLowerCase().startsWith($v_3.toLowerCase())) {
                    $$t_5.$I_0(JSON.parse($v_2['data']));
                }
            });
    },

    validate: function() {
        return !isNullOrEmptyString(this.selectedDashboardId) &&
            !isNullOrEmptyString(this.$C_0) &&
            !isNullOrEmptyString(this.tileUrl);
    },

    applyChanges: function() {
        if (!this.validate()) {
            this.showError(window.LOCID_VALIDATIONERROR);
            return;
        }
        var $v_0 = getDialogArguments();
        var $v_1 = $v_0['Field'];
        var $v_2 = new PowerBITileObj($v_1['Id'],
            $v_1['RowSpan'],
            $v_1['ColSpan'],
            $v_1['Auto'],
            $v_1['TabName'],
            $v_1['SectionName'],
            $v_1['Labels'],
            $v_1['ShowLabel'],
            this.selectedDashboardId,
            this.$C_0,
            this.tileUrl,
            this.$T_0,
            $P_CRM('#ShowOnMobileClient').is(':checked'),
            true);
        Mscrm.Utilities.setReturnValue($v_2);
        closeWindow();
    },

    showError: function(error) {
        this.clearAllMessages();
        this.$4_0.text(error);
        this.$4_0.parent().show();
    },

    $d_0: function($p0) {
        this.clearAllMessages();
        this.$9_0.text($p0);
        this.$9_0.parent().show();
    },

    $c_0: function($p0) {
        this.clearAllMessages();
        this.$5_0.text($p0);
        this.$5_0.parent().show();
    },

    clearAllMessages: function() {
        this.$4_0.parent().hide();
        this.$9_0.parent().hide();
        this.$5_0.parent().hide();
    },

    $I_0: function($p0) {
        var $v_0 = $p0['type'];
        if ($v_0 === 'error') {
            var $v_1 = $p0['errorCode'];
            if ($v_1 === 'DATAERROR') {
                this.$d_0(window.self['LOCID_' + $v_1]);
            } else {
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
            this.$C_0 = data['tileId'];
            this.tileUrl = data['tileUrl'];
            if (this.validate()) {
                this.clearAllMessages();
            }
        }
    },

    buildConfigPageUrl: function(currentDashboardId, currentTileId, mode) {
        var $v_0 = this.$2_0 + 'Config.html?';
        var $v_1 = {
            dashboardLabel: window.LOCID_DASHBOARD_LABEL,
            tileLabel: window.LOCID_TILE_LABEL,
            checkboxLabel: window.LOCID_ISVISIBLEONPHONE_LABEL,
            loginLabel: window.LOCID_LOGIN_LABEL,
            loginText: window.LOCID_LOGIN_TEXT,
            deletedLabel: window.LOCID_MISSINGITEMLABEL,
            env: this.$A_0,
            direction: this.$D_0,
            mode: this.mode
        };
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
    this.$$d_$O_4 = Function.createDelegate(this, this.$O_4);
    this.$$d_$Z_4 = Function.createDelegate(this, this.$Z_4);
    this.$$d_$I_4 = Function.createDelegate(this, this.$I_4);
    Mscrm.PowerBI.PowerBIControl.initializeBase(this, [element]);
    this.$1_4 = $P_CRM('iframe', element);
    this.$7_4 = $P_CRM('.ms-crm-powerbi-toolbar', element);
    this.$J_4(true);
    $P_CRM(window.self).bind('message', this.$$d_$I_4);
    this.$0_4 = element;
    this.$W_4();
}
Mscrm.PowerBI.PowerBIControl.$L = function($p0, $p1) {
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
    $7_4: null,
    $K_4: false,
    $H_4: null,
    $0_4: null,
    $2_4: null,

    get_FirstPartyIntegrationUrl: function() {
        return this.$2_4;
    },

    set_FirstPartyIntegrationUrl: function(value) {
        this.$2_4 = Mscrm.PowerBI.PowerBITile.$Q(value);
        return value;
    },

    $6_4: null,

    get_PowerBIDashboardUrl: function() {
        return this.$6_4;
    },

    set_PowerBIDashboardUrl: function(value) {
        this.$6_4 = Mscrm.PowerBI.PowerBITile.$Q(value);
        return value;
    },

    $3_4: 0,

    get_PowerBIType: function() {
        return this.$3_4;
    },

    set_PowerBIType: function(value) {
        this.$3_4 = value;
        return value;
    },

    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!this.$3_4) {
            $P_CRM('#Refresh_href', this.$0_4).click(this.$$d_$Z_4);
            $P_CRM('#Enlarge_href', this.$0_4).click(this.$$d_$O_4);
            var $$t_0 = this;
            $P_CRM('#OpenPowerBIDashboard_href', this.$0_4).click(function() {
                window.open($$t_0.$6_4);
            });
        }
        this.$R_4();
    },

    $R_4: function() {
        if (this.$3_4 !== 1) {
            return;
        }
        this.$0_4.parentNode.style.height = '';
        this.$0_4.parentNode.style.height = ($P_CRM(window).height() - (this.$0_4.offsetTop + 1)) + 'px';
    },

    dialogCallback: function(navigationUrl) {
        if (isNullOrEmptyString(navigationUrl)) {
            this.$O_4(null);
        } else {
            this.$N_4(navigationUrl);
        }
    },

    $W_4: function() {
        var $v_0 = 0;
        var $$t_5 = this;
        var $v_1 = function($p1_0) {
            if ($v_0) {
                window.clearTimeout($v_0);
            }
            $v_0 = window.setTimeout(function() {
                    $$t_5.$7_4.addClass('ms-crm-powerbi-toolbar-focus');
                },
                10);
        };
        var $$t_6 = this;
        var $v_2 = function($p1_0) {
            if ($v_0) {
                window.clearTimeout($v_0);
            }
            $v_0 = window.setTimeout(function() {
                    $$t_6.$7_4.removeClass('ms-crm-powerbi-toolbar-focus');
                },
                10);
        };
        this.$0_4.addEventListener("focus", $v_1, true);
        this.$0_4.addEventListener("blur", $v_2, true);
    },

    $I_4: function($p0) {
        var $v_0 = $p0.originalEvent;
        var $v_1 = $v_0['origin'];
        if (isNullOrEmptyString($v_1)) {
            return;
        }
        if (!Mscrm.PowerBI.PowerBIControl.$L($v_1, this.$2_4)) {
            return;
        }
        var $v_2;
        try {
            $v_2 = JSON.parse($v_0['data']);
        } catch ($$e_4) {
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
                this.$N_4($v_3['navigationUrl']);
            }
            break;
        case 'tileLoaded':
            this.$J_4(false);
            this.$Y_4();
            break;
        case 'signInNeeded':
            this.$J_4(true);
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
        this.$H_4 = $v_5;
    },

    $J_4: function($p0) {
        var $v_0 = ($p0) ? 'hidden' : '';
        this.$7_4.css('visibility', $v_0);
    },

    $Y_4: function() {
        this.$K_4 = true;
        if (this.$H_4 === 'signInNeeded') {
            Mscrm.CrmUIControl.prototype.raiseEvent.call(this, 116, {});
        }
    },

    $N_4: function($p0) {
        var $v_0 = this.$b_4($p0);
        if (isNullOrEmptyString($v_0)) {
            return;
        }
        var $v_1 = Mscrm.CrmUri.create('/_controls/powerbi/powerbireport.aspx');
        $v_1.get_query()['embedUrl'] = this.$V_4($v_0);
        $v_1.get_query()['webUrl'] = $p0;
        $v_1.get_query()['isReport'] = true;
        this.$S_4($v_1);
    },

    $b_4: function($p0) {
        var $v_0 = new RegExp('reports/(.*)/reportsection', 'i');
        var $v_1 = $v_0.exec($p0);
        if ($v_1 && $v_1.length === 2) {
            return $v_1[1];
        }
        return null;
    },

    $V_4: function($p0) {
        var $v_0 = '/embed?.*';
        var $v_1 = '/dashboardEmbed?.*';
        var $v_2 = Mscrm.CrmUri.create(this.$1_4.attr('src'));
        var $v_3 = $v_2.get_query()['powerBIUrl'];
        var $v_4 = $v_3.replace(new RegExp((!this.$3_4) ? $v_0 : $v_1, 'i'), '/reportEmbed?reportId=' + $p0);
        $v_2.get_query()['powerBIUrl'] = $v_4;
        $v_2.get_query()['mode'] = 'report';
        return $v_2.toString();
    },

    $E_4: function() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$R_4();
        var $v_0 = this.$1_4[0];
        $v_0.src = $v_0.src;
    },

    $X_4: function() {
        if (this.$K_4) {
            return;
        }
        this.$E_4();
    },

    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 53:
            this.$E_4();
            break;
        case 116:
            this.$X_4();
            break;
        }
        return null;
    },

    $Z_4: function($p0) {
        this.$E_4();
    },

    $O_4: function($p0) {
        var $v_0 = Mscrm.CrmUri.create('/_controls/powerbi/powerbireport.aspx');
        $v_0.get_query()['embedUrl'] = this.$1_4.attr('src');
        $v_0.get_query()['webUrl'] = this.$6_4;
        $v_0.get_query()['isReport'] = false;
        this.$S_4($v_0);
    },

    $S_4: function($p0) {
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


Mscrm.PowerBI.PowerBITile.registerClass('Mscrm.PowerBI.PowerBITile');
Mscrm.PowerBI.PowerBIDashboard.registerClass('Mscrm.PowerBI.PowerBIDashboard', Mscrm.PowerBI.PowerBITile);
Mscrm.PowerBI.PowerBIReport.registerClass('Mscrm.PowerBI.PowerBIReport');
Mscrm.PowerBI.PowerBIControl.registerClass('Mscrm.PowerBI.PowerBIControl', Mscrm.UIControl);
//@ sourceMappingURL=.srcmap