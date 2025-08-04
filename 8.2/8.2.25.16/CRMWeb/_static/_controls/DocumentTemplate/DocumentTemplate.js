Type.registerNamespace('Mscrm.DocumentTemplate');

Mscrm.DocumentTemplate.CreateDialogControl = function($p0, $p1) {
    this.$$d_$14_0 = Function.createDelegate(this, this.$14_0);
    this.$$d_$U_0 = Function.createDelegate(this, this.$U_0);
    this.$$d_$V_0 = Function.createDelegate(this, this.$V_0);
    this.$$d_$11_0 = Function.createDelegate(this, this.$11_0);
    this.$$d_$12_0 = Function.createDelegate(this, this.$12_0);
    this.$$d_focusOnTab = Function.createDelegate(this, this.focusOnTab);
    this.$$d_$13_0 = Function.createDelegate(this, this.$13_0);
    this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
    this.$$d_$10_0 = Function.createDelegate(this, this.$10_0);
    this.$$d_$x_0 = Function.createDelegate(this, this.$x_0);
    this.$$d_$a_0 = Function.createDelegate(this, this.$a_0);
    this.$$d_$z_0 = Function.createDelegate(this, this.$z_0);
    this.$$d_$Y_0 = Function.createDelegate(this, this.$Y_0);
    this.$0_0 = $p0;
    this.$1_0 = this.$0_0.find('#createTemplateGetFile');
    this.$3_0 = this.$0_0.find('#EntityList');
    this.$5_0 = this.$0_0.find('#ViewList');
    this.$J_0 = this.$0_0.find('#updateTemplateDialogLink');
    this.$7_0 = this.$0_0.find('#wordTemplate');
    this.$E_0 = this.$0_0.find('#createTemplateLabelQuery');
    this.$4_0 = this.$0_0.find('#excelTemplate');
    this.$2_0 = this.$0_0.find('#buttonClose');
    this.templateTypeCode = $p1;
    this.$G_0 = this.$0_0.find('#editColumnsLink');
    this.$Q_0();
    this.$R_0();
}
Mscrm.DocumentTemplate.CreateDialogControl.create = function(element, templateTypeCode) {
    return new Mscrm.DocumentTemplate.CreateDialogControl($P_CRM(element), templateTypeCode);
}
Mscrm.DocumentTemplate.CreateDialogControl.prototype = {
    templateTypeCode: 0,
    entityTypeCode: 0,
    $0_0: null,
    $3_0: null,
    $5_0: null,
    $A_0: 0,
    $1_0: null,
    $J_0: null,
    $7_0: null,
    $4_0: null,
    $E_0: null,
    $G_0: null,
    $2_0: null,
    $8_0: null,
    $9_0: null,
    
    $Q_0: function() {
        this.$3_0.on('change', this.$$d_$Y_0);
        this.$5_0.on('change', this.$$d_$z_0);
        this.$1_0.on('click', this.$$d_$a_0);
        this.$J_0.on('click', this.$$d_$x_0);
        this.$7_0.on('click', this.$$d_$10_0);
        this.$4_0.on('click', this.$$d_$w_0);
        this.$7_0.on('keypress', this.$$d_$10_0);
        this.$4_0.on('keypress', this.$$d_$w_0);
        this.$G_0.on('click', this.$$d_$13_0);
        this.$1_0.on('keydown', this.$$d_focusOnTab);
        this.$2_0.on('keydown', this.$$d_focusOnTab);
    },
    
    $R_0: function() {
        this.$1_0.removeAttr('style');
        this.$0_0.find('a.helpContainer').addClass(window.USER_LANGUAGE_TWO_LETTER_NAME);
        if (Mscrm.SessionInfo.isOutlookClient()) {
            $P_CRM('.createTemplateClose').addClass('hideCloseButton');
        }
    },
    
    $Y_0: function($p0) {
        this.$Z_0($p0);
    },
    
    $Z_0: function($p0) {
        var $v_0 = this.$3_0.children(':selected').val();
        if (isNullOrEmptyString($v_0) || $v_0 === '0') {
            this.$5_0.children().remove();
            return;
        }
        this.entityTypeCode = Number.parseInvariant($v_0);
        this.$W_0();
        var $v_1 = new Mscrm.RemoteCommandJson('DocumentTemplate', 'GetEntityViewList');
        $v_1.setParameter('entityCode', this.entityTypeCode);
        $v_1.execute().done(this.$$d_$12_0);
    },
    
    $12_0: function($p0) {
        this.$5_0.children().remove();
        var $v_0 = JSON.parse($p0);
        if (!$v_0.length) {
            var $v_1 = new Mscrm.RemoteCommandJson('DocumentTemplate', 'GetEntityDefaultView');
            $v_1.setParameter('entityCode', this.entityTypeCode);
            $v_1.setParameter('queryType', 1);
            $v_1.execute().done(this.$$d_$11_0);
            return;
        }
        for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            this.$T_0($v_2);
        }
    },
    
    $11_0: function($p0) {
        var $v_0 = JSON.parse($p0);
        this.$T_0($v_0);
    },
    
    $T_0: function($p0) {
        this.$5_0.append(String.format('<option value=\'{0}\'>{1}</option>', CrmEncodeDecode.CrmHtmlAttributeEncode(JSON.stringify($p0.ViewReference)), CrmEncodeDecode.CrmHtmlEncode($p0.ViewName)));
    },
    
    $z_0: function($p0) {
        this.$W_0();
    },
    
    $W_0: function() {
        this.$8_0 = '';
        this.$9_0 = '';
    },
    
    $a_0: function($p0) {
        this.$b_0($p0);
    },
    
    $b_0: function($p0) {
        if (this.$4_0.hasClass('selected')) {
            var $v_0 = this.$5_0.find(':selected').val();
            if (isNullOrEmptyString($v_0)) {
                return;
            }
            var $v_1 = JSON.parse($v_0);
            this.$g_0($v_1.ViewId, $v_1.ViewTypeCode);
        }
        else {
            this.entityTypeCode = Number.parseInvariant(this.$3_0.children(':selected').val());
            window.parent.Mscrm.GridRibbonActions.displaySelectEntitiesDialog(this.entityTypeCode);;
            window.setTimeout(this.$$d_$V_0, 0);
        }
    },
    
    $g_0: function($p0, $p1) {
        this.$d_0();
        var $v_0 = $P_CRM('<form></form>');
        $v_0.attr('method', 'post');
        $v_0.attr('action', Mscrm.CrmUri.create('/_grid/print/print_data.aspx').toString());
        $v_0.attr('target', 'exportIFrame');
        $v_0.attr('id', 'exportForm');
        var $v_1 = $P_CRM('<input></input>');
        $v_1.attr('type', 'hidden');
        $v_1.attr('name', 'exportType');
        $v_1.attr('value', 'DocumentTemplate');
        $v_0.append($v_1);
        var $v_2 = $P_CRM('<input></input>');
        $v_2.attr('type', 'hidden');
        $v_2.attr('name', 'viewid');
        $v_2.attr('value', $p0);
        $v_0.append($v_2);
        var $v_3 = $P_CRM('<input></input>');
        $v_3.attr('type', 'hidden');
        $v_3.attr('name', 'viewtype');
        $v_3.attr('value', $p1);
        $v_0.append($v_3);
        var $v_4 = $P_CRM('<input></input>');
        $v_4.attr('type', 'hidden');
        $v_4.attr('name', 'gridXml');
        $v_4.attr('value', '<grid><pageNum>1</pageNum><recsPerPage>50</recsPerPage></grid>');
        $v_0.append($v_4);
        var $v_5 = $P_CRM('<input></input>');
        $v_5.attr('type', 'hidden');
        $v_5.attr('name', 'fetchXml');
        $v_5.attr('value', this.$8_0);
        $v_0.append($v_5);
        var $v_6 = $P_CRM('<input></input>');
        $v_6.attr('type', 'hidden');
        $v_6.attr('name', 'layoutXml');
        $v_6.attr('value', this.$9_0);
        $v_0.append($v_6);
        document.cookie = 'excelDownloadToken=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
        this.$A_0 = window.setInterval(this.$$d_$U_0, 100);
        this.$0_0.append($v_0);
        $v_0.submit();
    },
    
    $U_0: function() {
        if (document.cookie.indexOf('excelDownloadToken=1') >= 0) {
            return;
        }
        window.clearInterval(this.$A_0);
        this.$0_0.find('#exportForm').remove();
        if (Mscrm.SessionInfo.isOutlookClient()) {
            $P_CRM('#downloadTemplateClose').show();
            $P_CRM('#loadingContainer').removeClass('indicatorOn');
            $P_CRM('#downloadedTitle').css('display', 'block');
        }
        else {
            this.$V_0();
        }
    },
    
    $V_0: function() {
        close();;
    },
    
    $d_0: function() {
        $P_CRM('#loadingContainer').toggleClass('indicatorOn');
        var $v_0 = $P_CRM('#progressImage');
        var $v_1 = {};
        $v_1['top'] = ($P_CRM(window).height() - $v_0.height()) / 2 + 'px';
        $v_1['left'] = ($P_CRM(window).width() - $v_0.height()) / 2 + 'px';
        $v_0.css($v_1);
        $P_CRM('.ms-crm-RefreshDialog-Main-Container').hide();
    },
    
    focusOnTab: function(e) {
        if (Mscrm.DocumentTemplate.UploadDialogControl.getKeyCode(e) !== 9) {
            return;
        }
        var $v_0 = Mscrm.DocumentTemplate.UploadDialogControl.getShiftKey(e);
        var $v_1 = $P_CRM(e.target);
        if ($v_1.length < 1) {
            return;
        }
        if ($v_1[0] === this.$2_0[0] && $v_0) {
            e.stopPropagation();
            e.preventDefault();
            this.$1_0.focus();
        }
        else if ($v_1[0] === this.$1_0[0] && !$v_0) {
            e.stopPropagation();
            e.preventDefault();
            this.$2_0.focus();
        }
    },
    
    dispose: function() {
        this.$3_0.off('change', this.$$d_$Y_0);
        this.$5_0.off('change', this.$$d_$z_0);
        this.$1_0.off('click', this.$$d_$a_0);
        this.$J_0.off('click', this.$$d_$x_0);
        this.$7_0.off('click', this.$$d_$10_0);
        this.$4_0.off('click', this.$$d_$w_0);
        this.$7_0.off('keypress', this.$$d_$10_0);
        this.$4_0.off('keypress', this.$$d_$w_0);
        this.$G_0.off('click', this.$$d_$13_0);
        this.$2_0.off('keydown', this.$$d_focusOnTab);
        this.$1_0.off('keydown', this.$$d_focusOnTab);
        this.$0_0 = null;
        this.$1_0 = null;
        this.$3_0 = null;
        this.$5_0 = null;
        this.$J_0 = null;
        this.$7_0 = null;
        this.$E_0 = null;
        this.$4_0 = null;
        this.$2_0 = null;
    },
    
    $x_0: function($p0) {
        this.$y_0($p0);
    },
    
    $y_0: function($p0) {
        window.parent.Mscrm.GridRibbonActions.displayUpdateTemplateDialog(this.templateTypeCode);;
        var $$t_1 = this;
        window.setTimeout(function() {
            close();
        }, 0);
    },
    
    $10_0: function($p0) {
        if ($p0.type === 'keypress' && Mscrm.DocumentTemplate.UploadDialogControl.getKeyCode($p0) !== 13) {
            return;
        }
        this.$4_0.removeClass('selected');
        this.$7_0.addClass('selected');
        this.$E_0.addClass('hideDropDown');
        var $v_0 = Xrm.Internal.getResourceString('Web.SelectEntities.Window_Title_Ara');
        this.$1_0.text($v_0);
        this.$1_0.attr('title', $v_0);
    },
    
    $w_0: function($p0) {
        if ($p0.type === 'keypress' && Mscrm.DocumentTemplate.UploadDialogControl.getKeyCode($p0) !== 13) {
            return;
        }
        this.$7_0.removeClass('selected');
        this.$4_0.addClass('selected');
        this.$E_0.removeClass('hideDropDown');
        var $v_0 = Xrm.Internal.getResourceString('Web.CreateTemplate.Window_DownloadFile_Ara');
        this.$1_0.text($v_0);
        this.$1_0.attr('title', $v_0);
    },
    
    $13_0: function($p0) {
        if (Mscrm.InternalUtilities._String.isNullOrEmpty(this.$8_0) || Mscrm.InternalUtilities._String.isNullOrEmpty(this.$9_0)) {
            var $v_0 = this.$5_0.find(':selected').val();
            if (isNullOrEmptyString($v_0)) {
                return;
            }
            var $v_1 = JSON.parse($v_0);
            var $v_2 = ((Number.parseInvariant($v_1.ViewTypeCode) === 1039) ? 'GetSystemQuery' : 'GetUserQuery');
            var $v_3 = new RemoteCommand('AdvancedFind', $v_2);
            $v_3.SetParameter('id', $v_1.ViewId);
            var $v_4 = $v_3.Execute(this.$$d_$14_0);
        }
        else {
            this.$X_0();
        }
    },
    
    $14_0: function($p0, $p1) {
        if (!$p0 || !$p0.Success) {
            return;
        }
        var $v_0 = XUI.Xml.LoadXml(XUI.Xml.GetText($p0.Xml));
        this.$8_0 = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.XMLSerializer.serializeToString($v_0.getElementsByTagName('fetchxml')[0].firstChild));
        this.$9_0 = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.XMLSerializer.serializeToString($v_0.getElementsByTagName('layoutxml')[0].firstChild));
        this.$X_0();
    },
    
    $X_0: function() {
        var $v_0 = {};
        $v_0['FetchXml'] = this.$8_0;
        $v_0['LayoutXml'] = this.$9_0;
        var $v_1 = Xrm.Internal.getEntityName(Number.parseInvariant(this.$3_0.children(':selected').val()));
        var $v_2 = new Mscrm.CrmDialog(Mscrm.CrmUri.create(String.format('/AdvancedFind/dialogs/dlg_editview.aspx?EntityName={0}&FromTemplate=1', $v_1)), $v_0, 800, 450, null);
        var $v_3 = false;
        var $v_4 = Mscrm.Utilities.createCallbackFunctionObject('UpdateXmls', this, null, $v_3);
        $v_2.setCallbackReference($v_4);
        $v_2.show();
    },
    
    UpdateXmls: function(result) {
        this.$G_0.focus();
        if (IsNull(result)) {
            return;
        }
        var $v_0 = result.FetchXml;
        var $v_1 = result.LayoutXml;
        if (isNullOrEmptyString($v_0) || isNullOrEmptyString($v_1)) {
            return;
        }
        this.$8_0 = $v_0;
        this.$9_0 = $v_1;
    }
}


Mscrm.DocumentTemplate.ViewReference = function() {
}
Mscrm.DocumentTemplate.ViewReference.prototype = {
    ViewId: null,
    ViewTypeCode: null
}


Mscrm.DocumentTemplate.View = function() {
}
Mscrm.DocumentTemplate.View.prototype = {
    ViewReference: null,
    ViewName: null
}


Mscrm.DocumentTemplate.SelectDialogControl = function($p0, $p1) {
    this.$$d_$U_0 = Function.createDelegate(this, this.$U_0);
    this.$$d_focusOnTab = Function.createDelegate(this, this.focusOnTab);
    this.$$d_$a_0 = Function.createDelegate(this, this.$a_0);
    this.$$d_$Y_0 = Function.createDelegate(this, this.$Y_0);
    this.$0_0 = $p0;
    this.$1_0 = this.$0_0.find('#imgExportWord');
    this.$3_0 = this.$0_0.find('#EntityList');
    this.$2_0 = this.$0_0.find('#buttonClose');
    this.entityTypeCode = $p1;
    this.$Q_0();
    this.$R_0();
}
Mscrm.DocumentTemplate.SelectDialogControl.create = function(element, entityTypeCode) {
    return new Mscrm.DocumentTemplate.SelectDialogControl($P_CRM(element), entityTypeCode);
}
Mscrm.DocumentTemplate.SelectDialogControl.prototype = {
    entityTypeCode: 0,
    $0_0: null,
    $3_0: null,
    $A_0: 0,
    $1_0: null,
    $2_0: null,
    
    $Q_0: function() {
        this.$3_0.on('change', this.$$d_$Y_0);
        this.$1_0.on('click', this.$$d_$a_0);
        this.$1_0.on('keydown', this.$$d_focusOnTab);
        this.$2_0.on('keydown', this.$$d_focusOnTab);
    },
    
    $R_0: function() {
        if (Mscrm.SessionInfo.isOutlookClient()) {
            $P_CRM('.selectEntitiesClose').addClass('hideCloseButton');
        }
    },
    
    $Y_0: function($p0) {
        this.$Z_0($p0);
    },
    
    $Z_0: function($p0) {
        this.entityTypeCode = Number.parseInvariant(this.$3_0.children(':selected').val());
        window.parent.Mscrm.GridRibbonActions.displaySelectEntitiesDialog(this.entityTypeCode);;
        var $$t_1 = this;
        window.setTimeout(function() {
            close();
        }, 0);
    },
    
    $a_0: function($p0) {
        this.$b_0($p0);
    },
    
    $b_0: function($p0) {
        this.entityTypeCode = Number.parseInvariant(this.$3_0.children(':selected').val());
        var $v_0 = new Mscrm.DocumentTemplate.SelectDialogControl.SelectedEntities();
        $v_0.oneToMany = this.$P_0('crmGridOneToN');
        $v_0.manyToOne = this.$P_0('crmGridNToOne');
        $v_0.manyToMany = this.$P_0('crmGridNToN');
        this.$h_0(this.entityTypeCode.toString(), JSON.stringify($v_0));
    },
    
    $P_0: function($p0) {
        var $v_0 = $find($p0);
        var $v_1 = $v_0.getGrid().getSelectedRows();
        if (!IsNull($v_1) && $v_1.getLength()) {
            var $v_2 = new Array($v_1.getLength());
            for (var $v_3 = 0; $v_3 < $v_1.getLength(); $v_3++) {
                $v_2[$v_3] = $v_1.get($v_3).getData().getEntity().getAttributes().getByName('schemaname').getValue();
            }
            return $v_2;
        }
        else {
            return null;
        }
    },
    
    $h_0: function($p0, $p1) {
        this.$d_0();
        var $v_0 = $P_CRM('<form></form>');
        $v_0.attr('method', 'post');
        $v_0.attr('action', Mscrm.CrmUri.create('/_grid/print/print_data.aspx').toString());
        $v_0.attr('target', 'exportIFrame');
        $v_0.attr('id', 'exportForm');
        var $v_1 = $P_CRM('<input></input>');
        $v_1.attr('type', 'hidden');
        $v_1.attr('name', 'exportType');
        $v_1.attr('value', 'WordTemplate');
        $v_0.append($v_1);
        var $v_2 = $P_CRM('<input></input>');
        $v_2.attr('type', 'hidden');
        $v_2.attr('name', 'associatedentitytypecode');
        $v_2.attr('value', CrmEncodeDecode.CrmHtmlAttributeEncode($p0));
        $v_0.append($v_2);
        var $v_3 = $P_CRM('<input></input>');
        $v_3.attr('type', 'hidden');
        $v_3.attr('name', 'selectedEntities');
        $v_3.attr('value', $p1);
        $v_0.append($v_3);
        document.cookie = 'excelDownloadToken=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
        this.$A_0 = window.setInterval(this.$$d_$U_0, 100);
        this.$0_0.append($v_0);
        $v_0.submit();
    },
    
    $U_0: function() {
        if (document.cookie.indexOf('excelDownloadToken=1') >= 0) {
            return;
        }
        window.clearInterval(this.$A_0);
        this.$0_0.find('#exportForm').remove();
        if (Mscrm.SessionInfo.isOutlookClient()) {
            $P_CRM('#loadingContainer').removeClass('indicatorOn');
            $P_CRM('#downloadedTitle').css('display', 'block');
        }
        else {
            close();;
        }
    },
    
    $d_0: function() {
        $P_CRM('#loadingContainer').toggleClass('indicatorOn');
        var $v_0 = $P_CRM('#progressImage');
        var $v_1 = {};
        $v_1['top'] = ($P_CRM(window).height() - $v_0.height()) / 2 + 'px';
        $v_1['left'] = ($P_CRM(window).width() - $v_0.height()) / 2 + 'px';
        $v_0.css($v_1);
        $P_CRM('.ms-crm-RefreshDialog-Main-Container').hide();
    },
    
    focusOnTab: function(e) {
        if (Mscrm.DocumentTemplate.UploadDialogControl.getKeyCode(e) !== 9) {
            return;
        }
        var $v_0 = Mscrm.DocumentTemplate.UploadDialogControl.getShiftKey(e);
        var $v_1 = $P_CRM(e.target);
        if ($v_1.length < 1) {
            return;
        }
        if ($v_1[0] === this.$2_0[0] && $v_0) {
            e.stopPropagation();
            e.preventDefault();
            this.$1_0.focus();
        }
        else if ($v_1[0] === this.$1_0[0] && !$v_0) {
            e.stopPropagation();
            e.preventDefault();
            this.$2_0.focus();
        }
    },
    
    dispose: function() {
        this.$3_0.off('change', this.$$d_$Y_0);
        this.$1_0.off('click', this.$$d_$a_0);
        this.$1_0.off('keydown', this.$$d_focusOnTab);
        this.$2_0.off('keydown', this.$$d_focusOnTab);
        this.$0_0 = null;
        this.$1_0 = null;
        this.$3_0 = null;
        this.$2_0 = null;
    }
}


Mscrm.DocumentTemplate.SelectDialogControl.SelectedEntities = function() {
}
Mscrm.DocumentTemplate.SelectDialogControl.SelectedEntities.prototype = {
    oneToMany: null,
    manyToOne: null,
    manyToMany: null
}


Mscrm.DocumentTemplate.UploadDialogControl = function($p0, $p1, $p2) {
    this.$$d_$f_0 = Function.createDelegate(this, this.$f_0);
    this.$$d_$i_0 = Function.createDelegate(this, this.$i_0);
    this.$$d_$15_0 = Function.createDelegate(this, this.$15_0);
    this.$$d_focusOnTab = Function.createDelegate(this, this.focusOnTab);
    this.$$d_$u_0 = Function.createDelegate(this, this.$u_0);
    this.$$d_$q_0 = Function.createDelegate(this, this.$q_0);
    this.$$d_$n_0 = Function.createDelegate(this, this.$n_0);
    this.$$d_$l_0 = Function.createDelegate(this, this.$l_0);
    this.$$d_$p_0 = Function.createDelegate(this, this.$p_0);
    this.$$d_$s_0 = Function.createDelegate(this, this.$s_0);
    this.$$d_$j_0 = Function.createDelegate(this, this.$j_0);
    this.$0_0 = $p0;
    this.$M_0 = this.$0_0.find('#upload_link');
    this.$I_0 = this.$0_0.find('#fileUpload');
    this.$B_0 = this.$0_0.find('#drop_zone');
    this.$F_0 = this.$0_0.find('#displayFileName');
    this.$1_0 = this.$0_0.find('#editTemplateInformation');
    this.$6_0 = this.$0_0.find('.errorDescription');
    this.$N_0 = this.$0_0.find('.specificError');
    this.$2_0 = this.$0_0.find('#buttonClose');
    this.$D_0 = this.$0_0.find('#btnCancel');
    this.$S_0 = $p1;
    this.$1_0.addClass('hideUploadButton');
    this.$L_0 = (IsNull($p2)) ? 32 : $p2;
    this.$e_0();
    this.$Q_0();
    this.$R_0();
}
Mscrm.DocumentTemplate.UploadDialogControl.create = function(element, templateType, maxAllowedFileSizeInMB) {
    return new Mscrm.DocumentTemplate.UploadDialogControl($P_CRM(element), templateType, maxAllowedFileSizeInMB);
}
Mscrm.DocumentTemplate.UploadDialogControl.$C = function($p0) {
    if (IsNull($p0)) {
        return 'null';
    }
    return String.format('{0} \'{1}\': {2}', $p0.tagName, $p0.id, $p0.className);
}
Mscrm.DocumentTemplate.UploadDialogControl.getKeyCode = function(evt) {
    return evt.keyCode;
}
Mscrm.DocumentTemplate.UploadDialogControl.getShiftKey = function(evt) {
    return evt.shiftKey;
}
Mscrm.DocumentTemplate.UploadDialogControl.prototype = {
    $S_0: 0,
    $K_0: 0,
    $H_0: null,
    $0_0: null,
    $M_0: null,
    $I_0: null,
    $B_0: null,
    $F_0: null,
    $1_0: null,
    $2_0: null,
    $D_0: null,
    $6_0: null,
    $N_0: null,
    $L_0: 0,
    
    $Q_0: function() {
        this.$M_0.on('click', this.$$d_$j_0);
        this.$I_0.on('change', this.$$d_$s_0);
        this.$B_0.on('dragover', this.$$d_$p_0);
        this.$B_0.on('dragenter', this.$$d_$l_0);
        this.$B_0.on('dragleave', this.$$d_$n_0);
        this.$B_0.on('drop', this.$$d_$q_0);
        this.$1_0.on('click', this.$$d_$u_0);
        this.$2_0.on('keydown', this.$$d_focusOnTab);
        this.$D_0.on('keydown', this.$$d_focusOnTab);
    },
    
    $R_0: function() {
        if (Mscrm.SessionInfo.isOutlookClient()) {
            $P_CRM('.uploadTemplateClose').addClass('hideCloseButton');
        }
    },
    
    $e_0: function() {
        var $v_0 = Xrm.Internal.getResourceString('Button_Label_Help');
        var $v_1 = CrmEncodeDecode.CrmHtmlAttributeEncode($v_0);
        var $v_2 = CrmEncodeDecode.CrmHtmlAttributeEncode(window.USER_LANGUAGE_TWO_LETTER_NAME);
        var $v_3 = (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) ? window.CDNURL + '/_imgs/office/helpdialog_hi_contrast_white_on_black_24x24.png' : window.CDNURL + '/_imgs/office/helpdialog_black_24x24.png';
        var $v_4 = String.format('<a target=\"_blank\" href=\"http://go.microsoft.com/fwlink/?LinkID=624118\" id=\"helpAnchor\" class=\"helpContainer {2}\" title=\"{1}\">\r\n\t\t\t\t\t<img src=\"{0}\" alt=\"{1}\"></a>', $v_3, $v_1, $v_2);
        this.$1_0.before($v_4);
    },
    
    $j_0: function($p0) {
        this.$k_0($p0);
    },
    
    $k_0: function($p0) {
        $p0.preventDefault();
        this.$I_0.click();
    },
    
    $s_0: function($p0) {
        this.$t_0($p0);
    },
    
    $t_0: function($p0) {
        var $v_0 = $p0.originalEvent.currentTarget.files;
        this.$c_0($v_0);
        this.$I_0.val('');
    },
    
    $q_0: function($p0) {
        this.$r_0($p0);
    },
    
    $r_0: function($p0) {
        this.$0_0.removeClass('displayBlueCloud');
        $p0.stopPropagation();
        $p0.preventDefault();
        this.$K_0 = 0;
        var $v_0 = $p0.originalEvent.dataTransfer.files;
        this.$c_0($v_0);
    },
    
    $c_0: function($p0) {
        if (IsNull($p0) || $p0.length < 1) {
            return;
        }
        if (!this.$16_0($p0)) {
            return;
        }
        this.$6_0.removeClass('specificError');
        this.$6_0.removeClass('genericError');
        this.$H_0 = $p0[0];
        this.$F_0.text($p0[0].name);
        this.$1_0.removeClass('hideUploadButton');
    },
    
    $16_0: function($p0) {
        var $v_0 = this.$L_0 * 1024 * 1024;
        if ($v_0 < $p0[0].size) {
            alert(String.format(Xrm.Internal.getResourceString('ImportWizard.UploadFilePage.UploadIFrame.Error.FileSize'), this.$L_0));
            return false;
        }
        return true;
    },
    
    $p_0: function($p0) {
        $p0.preventDefault();
    },
    
    $l_0: function($p0) {
        this.$m_0($p0);
    },
    
    $m_0: function($p0) {
        this.$0_0.addClass('displayBlueCloud');
        this.$K_0++;
        Xrm.Internal.trace.logT(Mscrm.DocumentTemplate.UploadDialogControl, 'Enter:\ntarget: {0}\ncurr: {1}\nrel: {2}', Mscrm.DocumentTemplate.UploadDialogControl.$C($p0.target), Mscrm.DocumentTemplate.UploadDialogControl.$C($p0.currentTarget), Mscrm.DocumentTemplate.UploadDialogControl.$C($p0.relatedTarget));
        $p0.stopPropagation();
        $p0.preventDefault();
        $p0.originalEvent.dataTransfer.dropEffect = 'Copy';
    },
    
    $n_0: function($p0) {
        this.$o_0($p0);
    },
    
    $o_0: function($p0) {
        this.$K_0--;
        if (this.$K_0 <= 0) {
            this.$0_0.removeClass('displayBlueCloud');
        }
        Xrm.Internal.trace.logT(Mscrm.DocumentTemplate.UploadDialogControl, 'Leave:\ntarget: {0}\ncurr: {1}\nrel: {2}', Mscrm.DocumentTemplate.UploadDialogControl.$C($p0.target), Mscrm.DocumentTemplate.UploadDialogControl.$C($p0.currentTarget), Mscrm.DocumentTemplate.UploadDialogControl.$C($p0.relatedTarget));
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    $u_0: function($p0) {
        this.$v_0($p0);
    },
    
    $v_0: function($p0) {
        if (IsNull(this.$H_0)) {
            return;
        }
        this.$1_0.addClass('hideUploadButton');
        this.$0_0.addClass('processing');
        this.$6_0.removeClass('specificError');
        this.$6_0.removeClass('genericError');
        var $v_0 = Mscrm.DocumentTemplate.Stubs.FormDataCreator.createFormData();
        $v_0.append('file', this.$H_0);
        var $v_1 = Mscrm.CrmUri.create('/_forms/Template/dlg_UploadDialog.aspx');
        $v_1.get_query()['action'] = 'fileUpload';
        $v_1.get_query()['TemplateType'] = this.$S_0;
        var $v_2 = new jQueryAjaxOptions();
        var $$t_5 = this;
        $v_2.beforeSend = function($p1_0) {
            Mscrm.WrpcTokenFuncs.setTokenInHeader($p1_0, $v_1);
        };
        $v_2.url = $v_1.toString();
        $v_2.type = 'POST';
        $v_2.data = $v_0;
        $v_2.processData = false;
        $v_2.contentType = false;
        $P_CRM.ajax($v_2).success(this.$$d_$15_0).error(this.$$d_$i_0).always(this.$$d_$f_0);
    },
    
    $15_0: function($p0) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p0.toString());
        if (!Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty($v_0.toString())) {
            Mscrm.DocumentTemplate.Stubs.ParentWindow.set_isNewTemplateAvailable(true);
            var $v_1 = Xrm.Page.context.getQueryStringParameters();
            window.parent.openObj($v_1['TemplateType'],$v_0.toString());;
            var $$t_3 = this;
            window.setTimeout(function() {
                closeWindow(true);;
            }, 0);
            return;
        }
        this.$6_0.addClass('genericError');
    },
    
    $i_0: function($p0, $p1, $p2) {
        Mscrm.DocumentTemplate.Stubs.ParentWindow.set_isNewTemplateAvailable(false);
        if ($p0.status === 500 && !isNullOrEmptyString($p0.responseText)) {
            var $v_0 = JSON.parse($p0.responseText);
            this.$N_0.text($v_0['DisplayText']);
            this.$6_0.addClass('specificError');
        }
        else {
            this.$6_0.addClass('genericError');
        }
    },
    
    $f_0: function() {
        if (IsNull(this)) {
            return;
        }
        this.$H_0 = null;
        if (!IsNull(this.$F_0)) {
            this.$F_0.text('');
        }
        this.$0_0.removeClass('processing');
    },
    
    focusOnTab: function(e) {
        if (Mscrm.DocumentTemplate.UploadDialogControl.getKeyCode(e) !== 9) {
            return;
        }
        var $v_0 = Mscrm.DocumentTemplate.UploadDialogControl.getShiftKey(e);
        var $v_1 = $P_CRM(e.target);
        if ($v_1.length < 1) {
            return;
        }
        if ($v_1[0] === this.$2_0[0] && $v_0) {
            e.stopPropagation();
            e.preventDefault();
            this.$D_0.focus();
        }
        else if ($v_1[0] === this.$D_0[0] && !$v_0) {
            e.stopPropagation();
            e.preventDefault();
            this.$2_0.focus();
        }
    }
}


Type.registerNamespace('Mscrm.DocumentTemplate.Stubs');

Mscrm.DocumentTemplate.Stubs.FormDataCreator = function() {
}
Mscrm.DocumentTemplate.Stubs.FormDataCreator.createFormData = function() {
    return new FormData();;
}


Mscrm.DocumentTemplate.Stubs.ParentWindow = function() {
}
Mscrm.DocumentTemplate.Stubs.ParentWindow.get_isNewTemplateAvailable = function() {
    return window.parent.parent.IsNewTemplateAvailable;
}
Mscrm.DocumentTemplate.Stubs.ParentWindow.set_isNewTemplateAvailable = function(value) {
    window.parent.parent.IsNewTemplateAvailable = value;
    return value;
}


Mscrm.DocumentTemplate.CreateDialogControl.registerClass('Mscrm.DocumentTemplate.CreateDialogControl');
Mscrm.DocumentTemplate.ViewReference.registerClass('Mscrm.DocumentTemplate.ViewReference');
Mscrm.DocumentTemplate.View.registerClass('Mscrm.DocumentTemplate.View');
Mscrm.DocumentTemplate.SelectDialogControl.registerClass('Mscrm.DocumentTemplate.SelectDialogControl');
Mscrm.DocumentTemplate.SelectDialogControl.SelectedEntities.registerClass('Mscrm.DocumentTemplate.SelectDialogControl.SelectedEntities');
Mscrm.DocumentTemplate.UploadDialogControl.registerClass('Mscrm.DocumentTemplate.UploadDialogControl');
Mscrm.DocumentTemplate.Stubs.FormDataCreator.registerClass('Mscrm.DocumentTemplate.Stubs.FormDataCreator');
Mscrm.DocumentTemplate.Stubs.ParentWindow.registerClass('Mscrm.DocumentTemplate.Stubs.ParentWindow');
//@ sourceMappingURL=.srcmap
