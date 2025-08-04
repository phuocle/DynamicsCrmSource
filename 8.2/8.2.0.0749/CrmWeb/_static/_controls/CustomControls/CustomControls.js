Type.registerNamespace('Mscrm');

Mscrm.SubGridDialogArguments = function() {
}
Mscrm.SubGridDialogArguments.prototype = {
    Field: null,
    FieldsXml: null,
    FieldPropertiesXml: null,
    FormXml: null,
    ObjectTypeCode: '',
    EditorType: '',
    sCustomControlUniqueId: ''
}


Type.registerNamespace('Mscrm.CustomControls');

Mscrm.CustomControls.Mode = function() {}
Mscrm.CustomControls.Mode.prototype = {
    read: 0,
    edit: 1
}
Mscrm.CustomControls.Mode.registerEnum('Mscrm.CustomControls.Mode', false);


Mscrm.CustomControls.DeviceType = function() {}
Mscrm.CustomControls.DeviceType.prototype = {
    none: -1,
    phone: 0,
    tablet: 1,
    web: 2
}
Mscrm.CustomControls.DeviceType.registerEnum('Mscrm.CustomControls.DeviceType', false);


Mscrm.CustomControls.ViewLookupState = function() {}
Mscrm.CustomControls.ViewLookupState.prototype = {
    none: 0,
    toBeAdded: 1,
    inUse: 2,
    toBeRemoved: 3,
    removed: 4
}
Mscrm.CustomControls.ViewLookupState.registerEnum('Mscrm.CustomControls.ViewLookupState', false);


Mscrm.CustomControls.BoundControlProperty = function() {
    Mscrm.CustomControls.BoundControlProperty.initializeBase(this);
    this.$U_0 = false;
    this.$H_0 = false;
}


Mscrm.CustomControls.CandidateControlsDialogManager = function() {
    this.$$d_$3U_0 = Function.createDelegate(this, this.$3U_0);
    this.$$d_$3T_0 = Function.createDelegate(this, this.$3T_0);
    this.$$d_$3V_0 = Function.createDelegate(this, this.$3V_0);
    this.$$d_$3Q_0 = Function.createDelegate(this, this.$3Q_0);
    this.$$d_$3X_0 = Function.createDelegate(this, this.$3X_0);
    this.$$d_$3Y_0 = Function.createDelegate(this, this.$3Y_0);
    this.$$d_$3p_0 = Function.createDelegate(this, this.$3p_0);
    this.$$d_$4X_0 = Function.createDelegate(this, this.$4X_0);
}
Mscrm.CustomControls.CandidateControlsDialogManager.get_instance = function() {
    if (!Mscrm.CustomControls.CandidateControlsDialogManager.$l) {
        Mscrm.CustomControls.CandidateControlsDialogManager.$l = new Mscrm.CustomControls
            .CandidateControlsDialogManager();
    }
    return Mscrm.CustomControls.CandidateControlsDialogManager.$l;
}
Mscrm.CustomControls.CandidateControlsDialogManager.prototype = {
    $Z_0: null,
    $2C_0: null,
    $1P_0: null,
    $2p_0: null,
    $e_0: null,
    $2m_0: null,
    $2T_0: null,
    $1R_0: null,
    _onRowMouseOutHandler: null,

    $45_0: function() {
        var $v_0 = getDialogArguments();
        if (IsNull($v_0) || IsNull($v_0['CandidateControlDescriptors'])) {
            return null;
        }
        var $v_1 = $v_0['CandidateControlDescriptors'];
        var $v_2 = new Array($v_1.length);
        if (!IsNull($v_1)) {
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                var $v_4 = new Mscrm.CustomControls.CandidateCustomControl();
                $v_4.$3_0 = $v_1[$v_3];
                $v_2[$v_3] = $v_4;
            }
        }
        return $v_2;
    },

    $4p_0: function() {
        var $v_0 = getDialogArguments();
        var $v_1 = $get('btnOK');
        if (!IsNull(this.$e_0) && this.$e_0.length > 0) {
            for (var $v_3 = 0; $v_3 < this.$e_0.length; $v_3++) {
                var $v_4 = this.$e_0[$v_3];
                var $v_5 = this.$40_0($v_4);
                Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_5, 'click', this.$2m_0);
                Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_5, 'mouseover', this.$1R_0);
                Mscrm.CustomControls.CustomControlUtility
                    .addHandlerToDomElement($v_5, 'mouseout', this._onRowMouseOutHandler);
                $v_4.$Y_0 = $v_5;
                this.$2C_0.appendChild($v_5);
            }
            $v_1.setAttribute('TabIndex', '0');
            var $v_2 = $get('btnCross');
            $v_2.setAttribute('TabIndex', '0');
        } else {
            $get('DlgContentDiv').style.display = 'none';
            var $v_6 = $get('ZeroRecordsDiv');
            var $v_7 = new Sys.StringBuilder();
            $v_7.append('(');
            $v_7.append($v_0['manifestType'].toString());
            $v_7.append(')');
            var $v_8 = String.format(window.LOCID_ADDCONTROL_ZERO_RECORDS, $v_7.toString());
            $v_6.appendChild(Mscrm.CustomControls.CustomControlUtility
                .wrapTextInGivenTagname($v_8, 'div', 'style', 'margin-top: 22%'));
            $v_6.style.display = 'block';
            $v_1.disabled = true;
        }
    },

    $4X_0: function($p0) {
        this.$Z_0 = this.$4k_0($p0, this.$Z_0);
    },

    $4k_0: function($p0, $p1) {
        var $v_0 = $get('dialogContentDescription');
        $v_0.style.display = 'none';
        if (IsNull($p1) || $p1.id !== $p0.rawEvent.currentTarget.id) {
            if (!IsNull(this.$Z_0)) {
                Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($p1, '#FFFFFF');
            }
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($p0.rawEvent.currentTarget, '#B1D6F0');
            $p1 = $p0.rawEvent.currentTarget;
            $p1.focus();
            $get('btnOK').disabled = false;
        }
        if (this.$1P_0.hasChildNodes()) {
            for (var $v_2 = this.$1P_0.childNodes.length - 1; $v_2 >= 0; $v_2--) {
                this.$1P_0.removeChild(this.$1P_0.lastChild);
            }
        }
        var $v_1 = $p0.rawEvent.currentTarget.id;
        for (var $v_3 = 0; $v_3 < this.$e_0.length; $v_3++) {
            if (this.$e_0[$v_3].$Y_0.id === $v_1) {
                var $v_4 = document.createElement('tr');
                var $v_5 = document.createElement('td');
                $v_5.setAttribute('colspan', '2');
                Mscrm.CustomControls.CustomControlUtility.setInnerText($v_5, this.$e_0[$v_3].$3_0.$8_0);
                $v_5.setAttribute('class', 'customcontrolDescription-header');
                $v_5.title = this.$e_0[$v_3].$3_0.$8_0;
                $v_4.appendChild($v_5);
                var $v_6 = document.createElement('tr');
                var $v_7 = document.createElement('td');
                var $v_8 = document.createElement('td');
                $v_7.appendChild(this.$3v_0(this.$e_0[$v_3]));
                $v_6.appendChild($v_7);
                $v_8.appendChild(this.$3w_0(this.$e_0[$v_3]));
                $v_8.setAttribute('align', 'center');
                $v_6.appendChild($v_8);
                this.$1P_0.appendChild($v_4);
                this.$1P_0.appendChild($v_6);
                this.$2p_0.setAttribute('returnId', $v_1);
            }
        }
        return $p1;
    },

    $3Y_0: function($p0) {
        if (!IsNull($p0.rawEvent.currentTarget) &&
            $p0.rawEvent.currentTarget.tagName.toUpperCase() === 'TR' &&
            $p0.rawEvent.currentTarget !== this.$Z_0) {
            var $v_0 = $p0.rawEvent.currentTarget;
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_0, '#D7EBF9');
        }
    },

    $3X_0: function($p0) {
        if (!IsNull($p0.rawEvent.currentTarget) &&
            $p0.rawEvent.currentTarget.tagName.toUpperCase() === 'TR' &&
            $p0.rawEvent.currentTarget !== this.$Z_0) {
            var $v_0 = $p0.rawEvent.currentTarget;
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_0, '#FFFFFF');
        }
    },

    $3w_0: function($p0) {
        var $v_0 = document.createElement('img');
        if (!isNullOrEmptyString($p0.$3_0.$i_0)) {
            $v_0.setAttribute('src', $p0.$3_0.$i_0);
        }
        $v_0.setAttribute('alt', $p0.$3_0.$8_0);
        $v_0.setAttribute('style', 'width:170px;height:130px;');
        return $v_0;
    },

    $3p_0: function($p0) {
        this.setReturnId();
    },

    $1c_0: null,
    $1d_0: null,
    $1o_0: null,
    $1n_0: null,

    get_candidateDecriptorList: function() {
        return this.$e_0;
    },

    set_candidateDecriptorList: function(value) {
        this.$e_0 = value;
        return value;
    },

    initiate: function() {
        this.$2m_0 = this.$$d_$4X_0;
        this.$2T_0 = this.$$d_$3p_0;
        this.$1R_0 = this.$$d_$3Y_0;
        this._onRowMouseOutHandler = this.$$d_$3X_0;
        this.$1n_0 = this.$$d_$3Q_0;
        this.$1d_0 = this.$$d_$3V_0;
        this.$1o_0 = this.$$d_$3T_0;
        this.$2C_0 = $get('tblCustomControlDialog');
        this.$1P_0 = $get('tblContentDetails');
        this.$2p_0 = $get('selectedIdDiv');
        this.$1c_0 = this.$$d_$3U_0;
        this.$e_0 = this.$45_0();
        this.$4p_0();
        var $v_0 = $get('btnOK');
        var $v_1 = $get('btnCross');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_0, 'click', this.$2T_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_0, 'keydown', this.$1d_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_1, 'keydown', this.$1n_0);
        Mscrm.CustomControls.CustomControlUtility
            .addHandlerToDomElement($get('tblCustomControlDialog'), 'keyup', this.$1c_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement(document.body, 'keydown', this.$1o_0);
        Mscrm.CustomControls.CustomControlUtility
            .setParentIFrameTitleAttribute(Mscrm.CustomControls.CustomControlUtility
                .findParentIFrameElement('SelectCustomControl.aspx'),
                $get('DlgHdTitle').firstChild.nodeValue);
    },

    $4t_0: function($p0) {
        return $p0;
    },

    $3v_0: function($p0) {
        if (IsNull($p0) || IsNull($p0.$3_0)) {
            return null;
        }
        var $v_0 = $p0.$3_0;
        var $v_1 = document.createElement('div');
        $v_1.setAttribute('style', 'height:120px;overflow-y:auto');
        var $v_2 = document.createElement('table');
        $v_2.id = $p0.$Y_0.id + '_Details';
        $v_2.setAttribute('style', 'word-break:break-word;width:100%;');
        var $v_3 = document.createElement('tr');
        var $v_4 = document.createElement('td');
        $v_3.appendChild($v_4);
        $v_2.appendChild($v_3);
        var $v_5 = document.createElement('tr');
        var $v_6 = document.createElement('td');
        var $v_7 = document.createElement('td');
        $v_6.appendChild(Mscrm.CustomControls.CustomControlUtility
            .wrapTextInGivenTagname(window.LOCID_CCCONFIG_MODES + ' ',
                'span',
                'class',
                'customControlDescription-propertyName'));
        $v_7.appendChild(Mscrm.CustomControls.CustomControlUtility
            .wrapTextInGivenTagname(this.$4G_0($v_0.$m_0), 'span'));
        $v_5.appendChild($v_6);
        $v_5.appendChild($v_7);
        $v_2.appendChild($v_5);
        var $v_8 = document.createElement('tr');
        var $v_9 = document.createElement('td');
        var $v_A = document.createElement('td');
        $v_A.style.width = '60%';
        $v_9.appendChild(Mscrm.CustomControls.CustomControlUtility
            .wrapTextInGivenTagname(window.LOCID_CCCONFIG_CRMTYPES + ' ',
                'span',
                'class',
                'customControlDescription-propertyName'));
        $v_A.appendChild(Mscrm.CustomControls.CustomControlUtility.wrapTextInGivenTagname(this.$4L_0($v_0), 'span'));
        $v_9.style.verticalAlign = 'top';
        $v_8.appendChild($v_9);
        $v_8.appendChild($v_A);
        $v_2.appendChild($v_8);
        var $v_B = document.createElement('tr');
        var $v_C = document.createElement('td');
        var $v_D = document.createElement('td');
        $v_C.innerHTML = '&nbsp;';
        $v_D.innerHTML = '&nbsp;';
        $v_B.appendChild($v_C);
        $v_B.appendChild($v_D);
        $v_2.appendChild($v_B);
        if (!isNullOrEmptyString($p0.$3_0.$o_0)) {
            var $v_E = document.createElement('tr');
            var $v_F = document.createElement('td');
            $v_F.setAttribute('colspan', '2');
            Mscrm.CustomControls.CustomControlUtility.setInnerText($v_F, $p0.$3_0.$o_0);
            $v_E.appendChild($v_F);
            $v_2.appendChild($v_E);
        }
        $v_1.appendChild($v_2);
        return $v_1;
    },

    $4L_0: function($p0) {
        var $v_0 = new Array(0);
        var $v_1 = $p0.$5_0[0];
        if ($v_1.$H_0) {
            return 'Grid';
        } else {
            $v_0 = $v_1.$6_0;
        }
        return $v_0.join(', ');
    },

    $4G_0: function($p0) {
        var $v_0 = new Array(0);
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($v_1 === 1) {
                $v_0 = $v_0.concat(window.LOCID_CCCONFIG_MODES_EDIT);
            }
            if (!($v_1)) {
                $v_0 = $v_0.concat(window.LOCID_CCCONFIG_MODES_READ);
            }
        }
        return $v_0.join(' + ');
    },

    $40_0: function($p0) {
        var $v_0 = document.createElement('tr');
        $v_0.className = 'selectcustomcontrol-trStyle';
        $v_0.id = this.$4t_0($p0.$3_0.$4_0.toString());
        $v_0.setAttribute('TabIndex', '0');
        var $v_1 = document.createElement('td');
        $v_1.className = 'selectcustomcontrol-tdStyle';
        $v_1.setAttribute('rtl', window.LOCID_UI_DIR === 'RTL');
        Sys.UI.DomElement.addCssClass($v_1, 'customControl-rowfirstcolumn-indent');
        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_1, $p0.$3_0.$8_0);
        $v_1.title = $p0.$3_0.$8_0;
        $v_0.appendChild($v_1);
        return $v_0;
    },

    setReturnId: function() {
        if (!IsNull($get('selectedIdDiv').getAttribute('returnId'))) {
            var $v_0 = $get('selectedIdDiv').getAttribute('returnId').toString();
            Mscrm.Utilities.setReturnValue($v_0);
            closeWindow(true);
        } else {
            var $v_1 = 'CloseWindow';
            Mscrm.Utilities.setReturnValue($v_1);
            closeWindow(true);
        }
    },

    $3U_0: function($p0) {
        if ($p0.keyCode === 38 || $p0.keyCode === 40 || $p0.keyCode === 32) {
            var $v_0 = '';
            var $v_1 = $p0.target;
            $v_0 = $v_1.id;
            var $v_2 = this.$2C_0;
            var $v_3 = $v_2.rows;
            var $v_4;
            var $v_5 = 0;
            if (!IsNull($v_3)) {
                for (var $v_6 = 0; $v_6 < $v_3.length; $v_6++) {
                    var $v_7 = $v_3[$v_6];
                    if ($v_7.id.toString() === $v_0) {
                        if ($p0.keyCode === 38) {
                            $v_5 = $v_6 - 1;
                        } else if ($p0.keyCode === 40) {
                            $v_5 = $v_6 + 1;
                        } else if ($p0.keyCode === 32) {
                            $v_5 = $v_6;
                        }
                        $v_4 = $v_3[$v_5];
                        if (!IsNull($v_4)) {
                            $v_4.focus();
                            $v_4.click();
                            $p0.stopPropagation();
                            $p0.preventDefault();
                        }
                        break;
                    }
                }
            }
        }
    },

    $3V_0: function($p0) {
        var $v_0 = $get('btnCross');
        Mscrm.CustomControls.CustomControlUtility.onOKBtnKeyTabPressedHandler($p0, $v_0);
    },

    $3Q_0: function($p0) {
        if ($p0.keyCode === 9) {
            if (IsNull(this.$e_0) || !this.$e_0.length) {
                $p0.stopPropagation();
                $p0.preventDefault();
                document.body.focus();
                return;
            }
            var $v_0 = $get('btnOK');
            Mscrm.CustomControls.CustomControlUtility.onCrossBtnKeyTabPressedHandler($p0, $v_0);
        } else if ($p0.keyCode === 13 || $p0.keyCode === 32) {
            var $v_1 = 'CloseWindow';
            Mscrm.Utilities.setReturnValue($v_1);
            closeWindow(true);
        }
    },

    $3T_0: function($p0) {
        if ($p0.keyCode === 27) {
            var $v_0 = 'CloseWindow';
            Mscrm.Utilities.setReturnValue($v_0);
        }
    }
}


Mscrm.CustomControls.CandidateCustomControl = function() {
}
Mscrm.CustomControls.CandidateCustomControl.prototype = {
    $Y_0: null,

    get_rowElement: function() {
        return this.$Y_0;
    },

    set_rowElement: function(value) {
        this.$Y_0 = value;
        return value;
    },

    $3_0: null,

    get_controlDescriptor: function() {
        return this.$3_0;
    },

    set_controlDescriptor: function(value) {
        this.$3_0 = value;
        return value;
    }
}


Mscrm.CustomControls.ControlDescriptor = function() {
}
Mscrm.CustomControls.ControlDescriptor.prototype = {
    $4_0: null,
    $8_0: null,
    $1b_0: null,
    $o_0: null,
    $18_0: null,
    $11_0: null,
    $1A_0: null,
    $m_0: null,
    $i_0: null,
    $1j_0: null,
    $5_0: null,
    $S_0: null,

    get_propertyList: function() {
        return this.$5_0;
    },

    set_propertyList: function(value) {
        this.$5_0 = value;
        return value;
    },

    get_datasetList: function() {
        return this.$S_0;
    },

    set_datasetList: function(value) {
        this.$S_0 = value;
        return value;
    },

    get_id: function() {
        return this.$4_0;
    },

    set_id: function(value) {
        this.$4_0 = value;
        return value;
    },

    get_name: function() {
        return this.$8_0;
    },

    set_name: function(value) {
        this.$8_0 = value;
        return value;
    },

    get_fullName: function() {
        return this.$1b_0;
    },

    set_fullName: function(value) {
        this.$1b_0 = value;
        return value;
    },

    get_controlDescription: function() {
        return this.$o_0;
    },

    set_controlDescription: function(value) {
        this.$o_0 = value;
        return value;
    },

    get_controlVendor: function() {
        return this.$18_0;
    },

    set_controlVendor: function(value) {
        this.$18_0 = value;
        return value;
    },

    get_controlVersion: function() {
        return this.$11_0;
    },

    set_controlVersion: function(value) {
        this.$11_0 = value;
        return value;
    },

    get_languageSupport: function() {
        return this.$1A_0;
    },

    set_languageSupport: function(value) {
        this.$1A_0 = value;
        return value;
    },

    get_modes: function() {
        return this.$m_0;
    },

    set_modes: function(value) {
        this.$m_0 = value;
        return value;
    },

    get_previewImagePath: function() {
        return this.$i_0;
    },

    set_previewImagePath: function(value) {
        this.$i_0 = value;
        return value;
    },

    get_controlDescriptorManifestDataObj: function() {
        return this.$1j_0;
    },

    set_controlDescriptorManifestDataObj: function(value) {
        this.$1j_0 = value;
        return value;
    }
}


Mscrm.CustomControls.ControlProperty = function() {
}
Mscrm.CustomControls.ControlProperty.prototype = {
    $D_0: null,
    $6_0: null,
    $L_0: null,
    $A_0: null,
    $2_0: null,
    $1_0: null,
    $13_0: null,
    $j_0: null,
    $I_0: null,
    $1S_0: null,
    $29_0: null,
    $1J_0: null,
    $n_0: null,

    get_parentDataSetName: function() {
        return this.$n_0;
    },

    set_parentDataSetName: function(value) {
        this.$n_0 = value;
        return value;
    },

    $V_0: false,

    get_isPropertySet: function() {
        return this.$V_0;
    },

    set_isPropertySet: function(value) {
        this.$V_0 = value;
        return value;
    },

    $W_0: false,

    get_isViewLookupPropertySet: function() {
        return this.$W_0;
    },

    set_isViewLookupPropertySet: function(value) {
        this.$W_0 = value;
        return value;
    },

    $q_0: false,

    get_isFormProperty: function() {
        return this.$q_0;
    },

    set_isFormProperty: function(value) {
        this.$q_0 = value;
        return value;
    },

    $H_0: false,

    get_isDatasetNode: function() {
        return this.$H_0;
    },

    set_isDatasetNode: function(value) {
        this.$H_0 = value;
        return value;
    },

    $U_0: false,

    get_isInputType: function() {
        return this.$U_0;
    },

    set_isInputType: function(value) {
        this.$U_0 = value;
        return value;
    },

    $1O_0: false,

    get_isGroupsNode: function() {
        return this.$1O_0;
    },

    set_isGroupsNode: function(value) {
        this.$1O_0 = value;
        return value;
    },

    $1F_0: null,

    get_parentGroupName: function() {
        return this.$1F_0;
    },

    set_parentGroupName: function(value) {
        this.$1F_0 = value;
        return value;
    },

    $15_0: null,

    get_grandParentGroupsName: function() {
        return this.$15_0;
    },

    set_grandParentGroupsName: function(value) {
        this.$15_0 = value;
        return value;
    },

    get_boundAttributeName: function() {
        return this.$D_0;
    },

    set_boundAttributeName: function(value) {
        this.$D_0 = value;
        return value;
    },

    get_candidatePropertyTypeGroup: function() {
        return this.$6_0;
    },

    set_candidatePropertyTypeGroup: function(value) {
        this.$6_0 = value;
        return value;
    },

    get_description: function() {
        return this.$A_0;
    },

    set_description: function(value) {
        this.$A_0 = value;
        return value;
    },

    get_propertyName: function() {
        return this.$2_0;
    },

    set_propertyName: function(value) {
        this.$2_0 = value;
        return value;
    },

    get_propertyValue: function() {
        return this.$1_0;
    },

    set_propertyValue: function(value) {
        this.$1_0 = value;
        return value;
    },

    get_staticOptions: function() {
        if (IsNull(this.$29_0)) {
            this.$29_0 = new Array(0);
        }
        return this.$29_0;
    },

    set_staticOptions: function(value) {
        this.$29_0 = value;
        return value;
    },

    get_propertyDefaultValue: function() {
        return this.$13_0;
    },

    set_propertyDefaultValue: function(value) {
        this.$13_0 = value;
        return value;
    },

    isRequired: false,

    get_selectedCandidatePropertyType: function() {
        return this.$L_0;
    },

    set_selectedCandidatePropertyType: function(value) {
        this.$L_0 = value;
        if (!IsNull(this.$1S_0)) {
            for (var $v_0 = 0; $v_0 < this.$1S_0.length; $v_0++) {
                this.$1S_0[$v_0].set_selectedCandidatePropertyType(value);
                this.$1S_0[$v_0].$6_0 = [this.$L_0];
            }
        }
        return value;
    },

    get_isOfType: function() {
        return this.$j_0;
    },

    set_isOfType: function(value) {
        this.$j_0 = value;
        return value;
    },

    get_propertyDisplayName: function() {
        return this.$I_0;
    },

    set_propertyDisplayName: function(value) {
        this.$I_0 = value;
        return value;
    },

    get_childProperties: function() {
        if (IsNull(this.$1S_0)) {
            this.$1S_0 = new Array(0);
        }
        return this.$1S_0;
    },

    get_grandParentGroupsNode: function() {
        return this.$1J_0;
    },

    set_grandParentGroupsNode: function(value) {
        this.$1J_0 = value;
        return value;
    }
}


Mscrm.CustomControls.CustomControlConstants = function() {
}


Mscrm.CustomControls.CustomControlManager = function() {
    this.$$d_$3s_0 = Function.createDelegate(this, this.$3s_0);
    this.$$d_$4g_0 = Function.createDelegate(this, this.$4g_0);
    this.$$d_$3U_0 = Function.createDelegate(this, this.$3U_0);
    this.$$d_$4f_0 = Function.createDelegate(this, this.$4f_0);
    this.$$d_onVisibleByDefaultClickHandler = Function.createDelegate(this, this.onVisibleByDefaultClickHandler);
    this.$$d_onHideOnWebClickHandler = Function.createDelegate(this, this.onHideOnWebClickHandler);
    this.$$d_$4n_0 = Function.createDelegate(this, this.$4n_0);
    this.$$d_$3W_0 = Function.createDelegate(this, this.$3W_0);
    this.$$d_onPropertyTableRowClickHandler = Function.createDelegate(this, this.onPropertyTableRowClickHandler);
    this.$$d_$3R_0 = Function.createDelegate(this, this.$3R_0);
    this.$$d_$4h_0 = Function.createDelegate(this, this.$4h_0);
    this.$$d_$4i_0 = Function.createDelegate(this, this.$4i_0);
    this.$$d_$3X_0 = Function.createDelegate(this, this.$3X_0);
    this.$$d_$3Y_0 = Function.createDelegate(this, this.$3Y_0);
    this.$$d_$4e_0 = Function.createDelegate(this, this.$4e_0);
    this.$1Y_0 = {};
    this.$36_0 = {};
    this.$19_0 = new Array(0);
    this.$v_0 = new Array(0);
}
Mscrm.CustomControls.CustomControlManager.get_instance = function() {
    if (!Mscrm.CustomControls.CustomControlManager.$l) {
        Mscrm.CustomControls.CustomControlManager.$l = new Mscrm.CustomControls.CustomControlManager();
    }
    return Mscrm.CustomControls.CustomControlManager.$l;
}
Mscrm.CustomControls.CustomControlManager.getAssociatePropertyByName = function(fieldCustomControl, propertyName) {
    var $v_0 = fieldCustomControl.$3_0.$5_0;
    for (var $$arr_3 = fieldCustomControl.$3_0.$5_0, $$len_4 = $$arr_3.length, $$idx_5 = 0;
        $$idx_5 < $$len_4;
        ++$$idx_5) {
        var $v_1 = $$arr_3[$$idx_5];
        if ($v_1.$2_0 === propertyName) {
            return $v_1;
        }
    }
    return null;
}
Mscrm.CustomControls.CustomControlManager.$4x = function($p0, $p1) {
    if (IsNull($p1) ||
        isNullOrEmptyString($p0) ||
        (!$p1.$6_0.length && Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p1.$j_0))) {
        return null;
    }
    var $v_0 = -1;
    if ($p1.$H_0 || $p1.$W_0) {
        $v_0 = -1;
    } else if ($p1.$V_0) {
        var $v_2 = Mscrm.CustomControls.CustomControlManager
            .getAssociatePropertyByName(Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[$p0], $p1.$n_0);
        $v_0 = $v_2.$E_1;
    } else {
        var $v_3 = getDialogArguments();
        if (Mscrm.CustomControls.CustomControlManager.get_instance().$F_0) {
            var $v_4 = $v_3;
            if (!IsNull($v_4) && !isNullOrEmptyString($v_4.ObjectTypeCode)) {
                $v_0 = parseInt($v_4.ObjectTypeCode);
            }
        } else {
            var $v_5 = $v_3;
            if (!IsNull($v_5) && !isNullOrEmptyString($v_5.sObjectTypeCode)) {
                $v_0 = parseInt($v_5.sObjectTypeCode);
            }
        }
    }
    if ($v_0 === -1 || !$v_0) {
        return null;
    } else {
        Mscrm.CustomControls.CustomControlManager.get_instance().$38_0($v_0);
    }
    if (Mscrm.CustomControls.CustomControlUtility.isPotentialLookupProperty($p1.$6_0)) {
        var $v_6 = $p1;
        $v_6.$R_1 = $v_0;
        $p1 = $v_6;
    }
    var $v_1 = new Array(0);
    for (var $v_7 = 0; $v_7 < $p1.$6_0.length; $v_7++) {
        var $v_8 = $p1.$6_0[$v_7];
        var $v_9;
        $v_9 = Mscrm.CustomControls.CustomControlUtility
            .retrieveAssociateFieldsFromResponse($v_8,
                Mscrm.CustomControls.CustomControlManager.get_instance().$1Y_0,
                $v_0);
        var $v_A = new Array(0);
        Array.forEach($v_9,
            function($p1_0) {
                $v_A = $v_A.concat(String.format('{0} ({1})', $p1_0, $v_8));
            });
        $v_1 = $v_1.concat.apply($v_1, $v_A);
    }
    if ($v_1.length > 0) {
        $v_1.sort();
    }
    return $v_1;
}
Mscrm.CustomControls.CustomControlManager.updatePropertyValue = function(propertyInfo) {
    if (IsNull(propertyInfo) ||
        IsNull(propertyInfo['PropertyCustomControlId']) ||
        IsNull(propertyInfo['ReturnProperty'])) {
        return;
    }
    var $v_0 = propertyInfo['PropertyCustomControlId'];
    var $v_1 = propertyInfo['ReturnProperty'];
    if (!IsNull(propertyInfo['Esc'])) {
        var $v_5 = $get(Mscrm.CustomControls.CustomControlManager.get_instance().$1f_0($v_0, $v_1.$2_0));
        if (!IsNull($v_5.parentNode)) {
            $v_5.parentNode.focus();
        }
        return;
    }
    if (!IsNull(propertyInfo['HasViewLookupBeenDeleted'])) {
        var $v_6 = $v_1;
        Mscrm.CustomControls.CustomControlManager.updateControlPropertyList($v_0, $v_6, true);
        return;
    }
    var $v_2 = propertyInfo['HasViewLookupBeenAdded'];
    if ($v_1.$W_0 && $v_2) {
        var $v_7 = $v_1;
        var $v_8 = $v_7.parentDataSetProperty;
        var $v_9 = Mscrm.CustomControls.ViewLookupProperty.createFromModifiedTemplate($v_7);
        Array.insert($v_8.$9_1, $v_8.$9_1.length - 1, $v_9);
        Mscrm.CustomControls.CustomControlManager.updateControlPropertyList($v_0, $v_9.parentDataSetProperty, true);
        $v_1 = $v_9;
    }
    var $v_3 = propertyInfo['HasEntityViewChanged'];
    Mscrm.CustomControls.CustomControlManager.get_instance().updateCustomControlProperty($v_0, $v_1, $v_3);
    var $v_4 = propertyInfo['HasViewIdChanged'];
    if ($v_1.$H_0) {
        var $v_A = $v_1;
        if ($v_A.$d_1 && $v_4) {
            Mscrm.CustomControls.CustomControlManager.resetViewLookupPropertiesList($v_0, $v_1);
        }
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents) &&
            $v_A.$2_0 === 'SubGrid' &&
            $v_3) {
            var $v_B = propertyInfo['OriginalEntityTypeCode'];
            if (!IsNull($v_B)) {
                Mscrm.CustomControls.CustomControlManager.$3c($v_B);
            }
            if (!IsNull(Mscrm.CustomControls.CustomControlManager.get_instance().$z_0)) {
                Mscrm.CustomControls.CustomControlManager.get_instance().$z_0();
            }
        }
    }
}
Mscrm.CustomControls.CustomControlManager.$3c = function($p0) {
    var $v_0 = true;
    var $v_1 = Mscrm.CustomControls.CustomControlManager.get_instance().$2v_0();
    for (var $v_2 = 0; $v_2 < $v_1.get_Count(); $v_2++) {
        var $v_3 = $v_1.get_item($v_2);
        if ($v_3.$2_0 === 'SubGrid' && $v_3.$E_1 === $p0) {
            $v_0 = false;
            break;
        }
    }
    if ($v_0) {
        Mscrm.FormLibraryAndEventHandlerUtils.removeRelatedEntityGridControlEvents($p0);
    }
}
Mscrm.CustomControls.CustomControlManager.addSelectedControl = function(selectedCandidateCustomControlId) {
    if (selectedCandidateCustomControlId === 'CloseWindow') {
        var $v_0 = $get('addcontrolid');
        $v_0.focus();
        return;
    } else {
        var $v_1 = $get('divPropertyTableContainer');
        $v_1.style.border = '1px solid #808080';
        var $v_2 = Mscrm.CustomControls.CustomControlManager.get_instance();
        $v_2.addSelectedCustomControl(selectedCandidateCustomControlId);
    }
}
Mscrm.CustomControls.CustomControlManager
    .openPropertyPage = function(customControlId, controlProperty, isEntityGrid, isDashboardEditor) {
        var $v_0 = Mscrm.GlobalImported.CrmUri.create('/Tools/FormEditor/Dialogs/CustomControlPropertyPage.aspx');
        var $v_1 = {};
        var $v_2 = false;
        if (controlProperty.$W_0) {
            var $v_6 = controlProperty;
            if ($v_6.$y_1 && $v_6.parentDataSetProperty.$Q_1) {
                $v_6 = $v_6.clone();
                $v_6.updateParentProperties();
                controlProperty = $v_6;
                $v_2 = true;
            }
        }
        $v_1['ControlProperty'] = controlProperty;
        $v_1['CustomControlId'] = customControlId;
        $v_1['BindEntityProperties'] = Mscrm.CustomControls.CustomControlManager.$4x(customControlId, controlProperty);
        $v_1['IsParent'] = Mscrm.CustomControls.CustomControlManager.$4O(customControlId, controlProperty);
        $v_1['IsBoundProperty'] = Mscrm.CustomControls.BoundControlProperty.isInstanceOfType(controlProperty);
        var $v_3 = Mscrm.CustomControls.CustomControlManager.$5A(customControlId, controlProperty);
        $v_1['IsEntityGrid'] = isEntityGrid;
        $v_1['IsDashboardEditor'] = isDashboardEditor;
        if (controlProperty.$H_0) {
            $v_1['AllEntityData'] = Mscrm.CustomControls.CustomControlManager.get_instance().$N_0['AllEntityData'];
            var $v_7 = (controlProperty).$E_1;
            $v_7 = (!$v_7) ? 1 : $v_7;
            $v_1['etc'] = String.format('{0}', $v_7);
        }
        if (controlProperty.$q_0) {
            $v_1['AllEntityData'] = Mscrm.CustomControls.CustomControlManager.get_instance().$N_0['AllEntityData'];
            var $v_8 = (controlProperty).get_formData().$E_0;
            $v_8 = (!$v_8) ? 1 : $v_8;
            $v_1['etc'] = String.format('{0}', $v_8);
            $v_1['propertyType'] = String.format('{0}', controlProperty.$L_0);
        }
        if (isNullOrEmptyString(customControlId) ||
            IsNull(Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[customControlId])) {
            return;
        }
        var $v_4 = '';
        if (!isNullOrEmptyString(controlProperty.$j_0)) {
            $v_4 = Mscrm.CustomControls.CustomControlManager
                .getAssociatePropertyByName(Mscrm.CustomControls.CustomControlManager.get_instance()
                    .$M_0[customControlId],
                    controlProperty.$j_0).$I_0;
        }
        $v_1['OfTypeParentPropertyDisplayName'] = $v_4;
        var $v_5 = new Xrm.DialogOptions();
        if (controlProperty.$V_0) {
            if (!Mscrm.CustomControls.CustomControlManager.$4S(customControlId, controlProperty) && !$v_2) {
                Mscrm.CustomControls.CustomControlManager
                    .$3Z('0x80061215',
                        controlProperty,
                        Mscrm.CustomControls.CustomControlManager
                        .getAssociatePropertyByName(Mscrm.CustomControls.CustomControlManager.get_instance()
                            .$M_0[customControlId],
                            controlProperty.$n_0).$I_0);
                return;
            }
        }
        if ($v_3) {
            $v_5.width = 500;
            $v_5.height = (controlProperty.$W_0)
                ? 500
                : (Mscrm.CustomControls.CustomControlUtility.isPotentialLookupProperty(controlProperty.$6_0))
                ? 600
                : 430;
            var $v_9 = Mscrm.CustomControls.CustomControlManager.updatePropertyValue;
            Xrm.Internal.openDialog($v_0.toString(), $v_5, $v_1, null, $v_9);
        } else {
            Mscrm.CustomControls.CustomControlManager.$3Z('0x80061214', controlProperty, $v_4);
            return;
        }
    }
Mscrm.CustomControls.CustomControlManager.$3Z = function($p0, $p1, $p2) {
    var $v_0 = Mscrm.ErrorInformation.createExtendedErrorInfo($p0, null, null, [$p1.$I_0, $p2]);
    openErrorDlg($p0, null, $v_0, 0, 0);
}
Mscrm.CustomControls.CustomControlManager.$4O = function($p0, $p1) {
    var $v_0 = false;
    var $v_1 = Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[$p0];
    if (!IsNull($v_1)) {
        for (var $$arr_4 = $v_1.$3_0.$5_0, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6];
            if ($v_2.$j_0 === $p1.$2_0) {
                $v_0 = true;
                break;
            }
        }
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlManager.$4S = function($p0, $p1) {
    var $v_0 = Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[$p0];
    var $v_1 = $p1.$n_0;
    var $v_2 = Mscrm.CustomControls.CustomControlManager.getAssociatePropertyByName($v_0, $v_1);
    if (!IsNull($v_2)) {
        if (!isNullOrEmptyString($v_2.$B_1) || !isNullOrEmptyString($v_2.$1_0)) {
            return true;
        }
    }
    return false;
}
Mscrm.CustomControls.CustomControlManager.$5A = function($p0, $p1) {
    if (IsNull($p1) || isNullOrEmptyString($p0)) {
        return false;
    }
    var $v_0 = $p1.$j_0;
    var $v_1 = Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[$p0];
    if (!IsNull($v_1)) {
        for (var $$arr_4 = $v_1.$3_0.$5_0, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6];
            if ($v_2.$2_0 === $v_0) {
                if (isNullOrEmptyString($v_2.$1_0)) {
                    return false;
                }
            }
        }
    }
    return true;
}
Mscrm.CustomControls.CustomControlManager
    .updateControlPropertyList = function(customControlId, dataSetProperty, needUxUpdate, controlDescriptor) {
        if ((IsNull(Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[customControlId]) &&
                IsNull(controlDescriptor)) ||
            IsNull(dataSetProperty) ||
            IsNull(dataSetProperty.$9_1)) {
            return;
        }
        var $v_0 = Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[customControlId];
        if (IsNull(controlDescriptor)) {
            controlDescriptor = $v_0.$3_0;
        }
        var $v_1 = controlDescriptor.$5_0;
        var $v_2 = new Array(0);
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            var $v_4 = $v_1[$v_3];
            if ($v_4.$W_0 && ($v_4).parentDataSetProperty.$2_0 === dataSetProperty.$2_0) {
                continue;
            }
            $v_2.push($v_4);
        }
        for (var $v_5 = 0; $v_5 < dataSetProperty.$9_1.length; $v_5++) {
            var $v_6 = dataSetProperty.$9_1[$v_5];
            var $v_7 = Array.indexOf($v_2, dataSetProperty);
            Array.insert($v_2, $v_7 + dataSetProperty.$1W_1 + $v_5 + 1, $v_6);
            $v_6.viewLookupPropertyState = 2;
        }
        controlDescriptor.$5_0 = $v_2;
        if (needUxUpdate) {
            if (IsNull($v_0)) {
                return;
            }
            var $v_8 = $v_0.$t_0;
            Mscrm.CustomControls.CustomControlManager.get_instance().$1C_0.removeChild($v_8);
            var $v_9 = Mscrm.CustomControls.CustomControlManager.get_instance().$2q_0($v_0);
            $v_0.$t_0 = $v_9;
            Mscrm.CustomControls.CustomControlManager.get_instance().$1C_0.appendChild($v_9);
            Mscrm.CustomControls.CustomControlManager.get_instance().$2K_0($v_0);
            $v_0.$Y_0.focus();
            $v_0.$Y_0.click();
            var $v_A = $get(Mscrm.CustomControls.CustomControlManager.get_instance()
                .$1f_0(customControlId, dataSetProperty.$2_0));
            $v_A.focus();
            $v_A.click();
        }
    }
Mscrm.CustomControls.CustomControlManager.resetViewLookupPropertiesList = function(customControlId, dataSetProperty) {
    if (IsNull(dataSetProperty) || !dataSetProperty.$d_1 || IsNull(dataSetProperty.$9_1)) {
        return;
    }
    dataSetProperty.$9_1 = new Array(0);
    dataSetProperty.$9_1.push(Mscrm.CustomControls.ViewLookupProperty.createTemplate(dataSetProperty));
    Mscrm.CustomControls.CustomControlManager.updateControlPropertyList(customControlId, dataSetProperty, true);
}
Mscrm.CustomControls.CustomControlManager.prototype = {
    $1E_0: false,
    $1m_0: null,
    $2D_0: null,
    $F_0: false,
    $K_0: false,
    $1w_0: true,
    $s_0: null,
    $1G_0: null,
    $f_0: null,
    $1y_0: null,
    $1D_0: null,
    $2H_0: null,
    $2E_0: false,
    $7_0: null,
    $N_0: null,
    $1a_0: null,
    $37_0: null,
    $1C_0: null,
    $24_0: null,
    $1X_0: null,
    $2L_0: null,
    $M_0: null,
    $Z_0: null,
    $1B_0: null,
    _onGridRowClickHandler: null,
    $2O_0: false,
    $2i_0: null,
    $2d_0: null,
    $2o_0: null,
    $21_0: null,
    $20_0: null,
    $2c_0: null,
    $1R_0: null,
    $22_0: null,
    $2G_0: null,
    $2h_0: null,
    $2g_0: null,
    $2F_0: null,
    $2M_0: false,
    $1Q_0: null,
    $1c_0: null,
    $2f_0: null,
    $1l_0: null,
    $z_0: null,

    get_onExistingControlsAddedOrRemoved: function() {
        return this.$z_0;
    },

    set_onExistingControlsAddedOrRemoved: function(value) {
        this.$z_0 = value;
        return value;
    },

    get_existingXML: function() {
        return this.$1l_0;
    },

    get_fieldDialogArgumentsObj: function() {
        return this.$f_0;
    },

    set_fieldDialogArgumentsObj: function(value) {
        this.$f_0 = value;
        return value;
    },

    get_subGridDialogArgumentsObj: function() {
        return this.$1D_0;
    },

    set_subGridDialogArgumentsObj: function(value) {
        this.$1D_0 = value;
        return value;
    },

    get_existingCustomControlsList: function() {
        return this.$7_0;
    },

    set_existingCustomControlsList: function(value) {
        this.$7_0 = value;
        return value;
    },

    get_existingEntityCustomControlsList: function() {
        return this.$19_0;
    },

    set_existingEntityCustomControlsList: function(value) {
        this.$19_0 = value;
        return value;
    },

    get_entityAssociateFieldsMap: function() {
        return this.$1Y_0;
    },

    get_attributeDisplayNameResponseMap: function() {
        return this.$36_0;
    },

    get_isGrid: function() {
        return this.$F_0;
    },

    get_dataResponse: function() {
        return this.$N_0;
    },

    $1x_0: null,

    get_updatedFieldRowClassId: function() {
        return this.$1x_0;
    },

    set_updatedFieldRowClassId: function(value) {
        this.$1x_0 = value;
        return value;
    },

    $1L_0: null,

    get_currentEntityTypeCode: function() {
        return this.$1L_0;
    },

    set_currentEntityTypeCode: function(value) {
        this.$1L_0 = value;
        return value;
    },

    $O_0: null,

    get_customControlUniqueId: function() {
        return this.$O_0;
    },

    set_customControlUniqueId: function(value) {
        this.$O_0 = value;
        return value;
    },

    $1g_0: null,

    get_currentViewId: function() {
        return this.$1g_0;
    },

    set_currentViewId: function(value) {
        this.$1g_0 = value;
        return value;
    },

    initiate: function() {
        this.$20_0 = this.$$d_$4e_0;
        this._onGridRowClickHandler = Mscrm.CustomControls.CustomControlUtility.onExistingTableRowClick;
        this.$1R_0 = this.$$d_$3Y_0;
        this.$22_0 = this.$$d_$3X_0;
        this.$2h_0 = this.$$d_$4i_0;
        this.$2g_0 = this.$$d_$4h_0;
        this.$2G_0 = this.$$d_$3R_0;
        this.$2i_0 = this.$$d_onPropertyTableRowClickHandler;
        this.$21_0 = this.$$d_$3W_0;
        this.$2F_0 = this.$$d_$4n_0;
        this.$2d_0 = this.$$d_onHideOnWebClickHandler;
        this.$2o_0 = this.$$d_onVisibleByDefaultClickHandler;
        this.$2c_0 = this.$$d_$4f_0;
        this.$4z_0();
        this.$1m_0 = this.$46_0();
        this.$M_0 = {};
        this.$1a_0 = $get('tblCustomControl');
        this.$37_0 = $get('tblContainerDIV');
        this.$1C_0 = $get('divPropertyTableContainer');
        this.$24_0 = $get('selectionRemindBoxId');
        var $v_0 = $get('addControlDiv');
        if (!IsNull($v_0)) {
            $v_0.title = window.LOCID_CUSTOMCONTROL_CONFIG;
        }
        this.$4r_0();
        this.$2M_0 = this.$44_0();
        this.$1c_0 = this.$$d_$3U_0;
        this.$2f_0 = this.$$d_$4g_0;
        var $v_1 = $get('addcontrolid');
        if (!this.$2M_0) {
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_1, 'click', this.$2F_0);
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_1, 'keydown', this.$2F_0);
            $v_1.style.display = 'block';
            $v_1.style.width = '100px';
            $v_1.style.cursor = 'default';
        } else {
            $v_1.style.display = 'none';
        }
        if (!this.$F_0) {
            var $v_2 = $get('chkVisible');
            if (!IsNull($v_2)) {
                Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_2, 'click', this.$2o_0);
            }
        }
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement(this.$1a_0, 'keydown', this.$1c_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement(this.$1C_0, 'keydown', this.$2f_0);
    },

    initiateFromEntityConfig: function() {
        this.$K_0 = true;
        this.$F_0 = true;
        this.initiate();
    },

    $4z_0: function() {
        if (this.$K_0) {
            this.$1Q_0 = 'section';
            this.$2D_0 = 'entitygrid';
            this.$O_0 = 'entitygrid';
            return;
        }
        this.$f_0 = getDialogArguments();
        if (!IsNull(this.$f_0) && !IsNull(this.$f_0.oField)) {
            this.$1y_0 = this.$f_0.oField;
            this.$2D_0 = this.$2A_0();
            this.$1Q_0 = this.$4v_0();
            this.$O_0 = this.$f_0.sCustomControlUniqueId;
        } else {
            this.$1D_0 = getDialogArguments();
            if (!IsNull(this.$1D_0) && !IsNull(this.$1D_0.Field)) {
                this.$f_0 = null;
                this.$F_0 = true;
                this.$2H_0 = this.$1D_0.Field;
                this.$2D_0 = this.$2A_0();
                this.$1Q_0 = 'section';
                this.$1L_0 = ($get('DataSourceCombo')).value.split(':')[0];
                this.$1g_0 = this.$2B_0();
                var $v_0 = this.$1D_0.EditorType;
                if (!isNullOrEmptyString($v_0) && $v_0 === 'dashboardEditor') {
                    this.$2E_0 = true;
                    var $v_1 = $get('tab1Tab');
                    if (!IsNull($v_1)) {
                        $v_1.style.display = 'none';
                    }
                }
                this.$O_0 = this.$1D_0.sCustomControlUniqueId;
            }
        }
    },

    $46_0: function() {
        if (this.$F_0) {
            return 'Grid';
        }
        var $v_0 = '';
        var $v_1 = '';
        if (!IsNull(this.$1y_0)) {
            $v_0 = this.$1y_0.sDataType;
            $v_1 = this.$1y_0.sDataTypeFormat;
        }
        var $v_2 = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.retrieveCorrespondingManifestType($v_0, $v_1);
        if (isNullOrEmptyString($v_2)) {
        }
        return $v_2;
    },

    $4q_0: function() {
        this.$3n_0();
    },

    $2s_0: function($p0) {
        var $v_0 = new Mscrm.CustomControls.FieldCustomControl();
        $v_0.$8_0 = this.$2t_0();
        $v_0.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid($p0);
        $v_0.$J_0 = true;
        return $v_0;
    },

    $2t_0: function() {
        var $v_0 = '';
        var $v_1 = String.format(window.LOCID_DEFAULTSTRING, this.$4u_0());
        $v_0 = String.format('{0} {1}', window.LOCID_BRAND_CRM, $v_1);
        return $v_0;
    },

    $4u_0: function() {
        if (this.$F_0) {
            return Mscrm.CustomControls.DefaultControlName.gridType;
        }
        var $v_0 = this.$1m_0;
        if (isNullOrEmptyString($v_0)) {
            return $v_0;
        }
        switch ($v_0) {
        case 'Currency':
            return Mscrm.CustomControls.DefaultControlName.moneyType;
        case 'DateAndTime.DateAndTime':
        case 'DateAndTime.DateOnly':
            return Mscrm.CustomControls.DefaultControlName.dateTimeType;
        case 'Decimal':
            return Mscrm.CustomControls.DefaultControlName.decimalType;
        case 'FP':
            return Mscrm.CustomControls.DefaultControlName.doubleType;
        case 'Lookup.Customer':
        case 'Lookup.Owner':
        case 'Lookup.PartyList':
        case 'Lookup.Regarding':
        case 'Lookup.Simple':
            return Mscrm.CustomControls.DefaultControlName.lookupType;
        case 'Multiple':
            return Mscrm.CustomControls.DefaultControlName.memoType;
        case 'OptionSet':
            return Mscrm.CustomControls.DefaultControlName.optionSetType;
        case 'SingleLine.Email':
        case 'SingleLine.Phone':
        case 'SingleLine.Text':
        case 'SingleLine.TextArea':
        case 'SingleLine.Ticker':
        case 'SingleLine.URL':
            return Mscrm.CustomControls.DefaultControlName.stringType;
        case 'TwoOptions':
            return Mscrm.CustomControls.DefaultControlName.booleanType;
        case 'Whole.Duration':
        case 'Whole.Language':
        case 'Whole.None':
        case 'Whole.TimeZone':
            return Mscrm.CustomControls.DefaultControlName.integerType;
        default:
            return '';
        }
    },

    isRadiobuttonChecked: function(ActualDeviceList, Device) {
        for (var $v_0 = 0; $v_0 < ActualDeviceList.length; $v_0++) {
            if (ActualDeviceList[$v_0] === Device) {
                return true;
            }
        }
        return false;
    },

    $3Y_0: function($p0) {
        var $v_0 = $p0.rawEvent.currentTarget;
        if (!IsNull($p0.rawEvent.currentTarget) &&
            $p0.rawEvent.currentTarget.tagName.toUpperCase() === 'TR' &&
            $p0.rawEvent.currentTarget !== Mscrm.CustomControls.CustomControlUtility.$1Z) {
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_0, '#D7EBF9');
        }
        this.$Z_0 = $v_0;
        var $v_1 = $v_0.lastChild;
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_1, 'click', this.$2G_0);
    },

    $3X_0: function($p0) {
        var $v_0 = $p0.rawEvent.currentTarget;
        if (!IsNull($p0.rawEvent.currentTarget) &&
            $p0.rawEvent.currentTarget.tagName.toUpperCase() === 'TR' &&
            $p0.rawEvent.currentTarget !== Mscrm.CustomControls.CustomControlUtility.$1Z) {
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_0, '#FFFFFF');
        }
        var $v_1 = $v_0.lastChild;
        Mscrm.CustomControls.CustomControlUtility.removeHandlerFromDomElement($v_1, 'click', this.$2G_0);
    },

    $4i_0: function($p0) {
        if (!IsNull($p0.rawEvent.currentTarget) &&
            $p0.rawEvent.currentTarget.tagName.toUpperCase() === 'TR' &&
            $p0.rawEvent.currentTarget !== this.$1B_0) {
            var $v_0 = $p0.rawEvent.currentTarget;
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_0, '#D7EBF9');
        }
    },

    $4h_0: function($p0) {
        if (!IsNull($p0.rawEvent.currentTarget) &&
            $p0.rawEvent.currentTarget.tagName.toUpperCase() === 'TR' &&
            $p0.rawEvent.currentTarget !== this.$1B_0) {
            var $v_0 = $p0.rawEvent.currentTarget;
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_0, '#FFFFFF');
        }
    },

    $4e_0: function($p0) {
        var $v_0 = null;
        this.$1C_0.style.border = 'none';
        this.$24_0.style.display = 'none';
        for (var $v_1 = 0; $v_1 < this.$7_0.length; $v_1++) {
            var $v_2 = this.$7_0[$v_1];
            if (!$v_2.$J_0) {
                var $v_3 = $v_2.$t_0;
                var $v_4 = $p0.rawEvent.currentTarget.id;
                if ($v_3 && $v_3.id.indexOf($v_4) < 0) {
                    $v_3.style.display = 'none';
                } else if ($v_3.id.indexOf($v_4) >= 0) {
                    $v_3.style.display = 'block';
                }
                $v_0 = $v_2.$u_0.parentNode;
                $v_0.removeAttribute('style');
            }
        }
    },

    $4f_0: function($p0) {
        $p0.stopPropagation();
        var $v_0 = $p0.rawEvent.currentTarget;
        var $v_1 = $v_0.getAttribute('associatecontrolid');
        var $v_2 = $v_0.getAttribute('associatepropertyname');
        if (!isNullOrEmptyString($v_1) && !isNullOrEmptyString($v_2)) {
            var $v_3 = Mscrm.CustomControls.CustomControlManager
                .getAssociatePropertyByName(Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[$v_1], $v_2);
            $v_3.$1_0 = $v_0.value;
            var $v_4 = $get(this.$1f_0($v_1, $v_2));
            if (!IsNull($v_4)) {
                $v_4.title = $v_0.value;
            }
            this.$2K_0(Mscrm.CustomControls.CustomControlManager.get_instance().$M_0[$v_1]);
        }
    },

    $3H_0: function($p0) {
        this.updateCustomControlRadioChecked();
        var $v_0 = new Array(0);
        this.$2y_0();
        this.$1C_0.style.border = '1px solid #808080';
        this.$24_0.style.display = 'table';
        if (!isNullOrEmptyString($p0)) {
            var $v_5 = this.$M_0[$p0];
            if (!IsNull($v_5)) {
                $v_0 = $v_5.$G_0;
                this.$1C_0.removeChild($v_5.$t_0);
            }
            delete this.$M_0[$p0];
            Mscrm.CustomControls.CustomControlUtility.removeHandlerFromDomElement(this.$Z_0, 'mouseover', this.$1R_0);
            Mscrm.CustomControls.CustomControlUtility.removeHandlerFromDomElement(this.$Z_0, 'mouseout', this.$22_0);
            Mscrm.CustomControls.CustomControlUtility
                .removeHandlerFromDomElement(this.$Z_0, 'click', this._onGridRowClickHandler);
            Mscrm.CustomControls.CustomControlUtility.removeHandlerFromDomElement(this.$Z_0, 'click', this.$20_0);
            Mscrm.CustomControls.CustomControlUtility.removeHandlerFromDomElement(this.$Z_0, 'keyup', this.$1c_0);
            var $v_6 = $v_5.$t_0.getElementsByTagName('input');
            for (var $v_7 = 0; $v_7 < $v_6.length; $v_7++) {
                Mscrm.CustomControls.CustomControlUtility.removeHandlerFromDomElement($v_6[$v_7], 'click', this.$21_0);
            }
        }
        this.$1a_0.removeChild(this.$Z_0);
        var $v_1 = this.$7_0.length;
        var $v_2 = new Array($v_1 - 1);
        var $v_3 = 0;
        var $v_4 = 0;
        for (var $v_8 = 0; $v_8 < $v_1; $v_8++) {
            var $v_9 = this.$7_0[$v_8];
            if ($v_9.$4_0.toString() !== $p0) {
                if ($v_9.$J_0) {
                    for (var $v_A = 0; $v_A < $v_0.length; $v_A++) {
                        this.selectDeviceTypeForGivenFieldCustomID($v_0[$v_A], $v_9);
                        $v_9.$G_0.push($v_0[$v_A]);
                    }
                }
                $v_2[$v_4] = $v_9;
                $v_4++;
            } else {
                if (Mscrm.FeatureControl.get_Current()
                    .isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents)) {
                    var $v_B = $v_9.$3_0.$S_0;
                    if (!IsNull($v_B)) {
                        for (var $v_C = 0; $v_C < $v_B.length; ++$v_C) {
                            var $v_D = $v_B[$v_C];
                            if ($v_D.$2_0 === 'SubGrid') {
                                $v_3 = $v_D.$E_1;
                            }
                        }
                    }
                }
            }
        }
        this.$7_0 = $v_2;
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents)) {
            Mscrm.CustomControls.CustomControlManager.$3c($v_3);
        }
        if (!IsNull(this.$z_0)) {
            this.$z_0();
        }
    },

    $3R_0: function($p0) {
        var $v_0 = this.$Z_0.id;
        var $v_1 = this.$M_0[$v_0];
        if (IsNull($v_1)) {
            return;
        }
        if ($v_1.$g_0) {
            var $v_2 = $get('divPropertyTableContainer');
            $v_2.style.border = '1px solid #808080';
            this.addSelectedCustomControl($v_1.$3_0.$4_0.toString(), $v_1);
        } else {
            if (!this.$F_0) {
                var $v_3 = 0;
                var $v_4 = null;
                var $v_5 = String.format('chkBoxHideOnWeb_{0}', $v_0);
                $v_4 = $get($v_5);
                for (var $v_6 = 0; $v_6 < this.$v_0.length; $v_6++) {
                    if (this.$v_0[$v_6] === $v_4) {
                        $v_3 = $v_6;
                    }
                }
                if ($v_3 > -1) {
                    this.$v_0.splice($v_3, 1);
                }
            }
            this.$3H_0($v_0);
        }
    },

    onPropertyTableRowClickHandler: function(evt) {
        if (evt.target.tagName.toUpperCase() === 'SELECT') {
            return;
        }
        var $v_0 = evt.rawEvent.currentTarget;
        if (IsNull(this.$1B_0) || this.$1B_0.id !== evt.rawEvent.currentTarget.id) {
            if (!IsNull(this.$1B_0)) {
                Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor(this.$1B_0, '#FFFFFF');
            }
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_0, '#B1D6F0');
            this.$1B_0 = $v_0;
        }
        var $v_1 = $v_0.getAttribute('associatecontrolid');
        if (!isNullOrEmptyString($v_1)) {
            Mscrm.CustomControls.CustomControlUtility.onExistingPropertyTableRowClick(evt);
            var $v_2 = this.$M_0[$v_1];
            if (!IsNull($v_2)) {
                this.$3K_0($v_2, $v_0);
            }
        }
        $v_0.focus();
    },

    onHideOnWebClickHandler: function(evt) {
        var $v_0 = $get('chkVisible');
        var $v_1 = (evt.target);
        if (!IsNull($v_1)) {
            this.$1E_0 = $v_1.checked;
        }
        if (this.$1E_0) {
            $v_0.checked = false;
        }
        for (var $$arr_3 = this.$v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if (this.$1E_0) {
                $v_2.checked = true;
            } else {
                $v_2.checked = false;
            }
        }
    },

    onVisibleByDefaultClickHandler: function(evt) {
        var $v_0 = $get('chkVisible');
        var $v_1 = $v_0.checked;
        for (var $$arr_3 = this.$v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if ($v_1) {
                $v_2.checked = false;
            }
        }
    },

    validateFieldCustomControls: function() {
        this.$1w_0 = true;
        this.updateCustomControlRadioChecked();
        for (var $v_0 = 0; $v_0 < this.$7_0.length; $v_0++) {
            var $v_1 = this.$7_0[$v_0];
            if ($v_1.$g_0) {
                continue;
            }
            if (!$v_1.$J_0) {
                if (!IsNull($v_1) && !IsNull($v_1.$3_0) && !IsNull($v_1.$3_0.$5_0)) {
                    var $v_2 = $v_1.$3_0.$5_0;
                    var $v_3 = false;
                    for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
                        var $v_5 = false;
                        var $v_6 = $v_2[$v_4];
                        if (!isNullOrEmptyString($v_6.$15_0) && $v_6.$1J_0.$1_0 !== $v_6.$1F_0) {
                            $v_5 = true;
                        }
                        if ($v_2[$v_4].isRequired && !$v_5 && isNullOrEmptyString($v_2[$v_4].$1_0)) {
                            var $v_7 = $get(this.$3e_0($v_1.$4_0.toString(), $v_2[$v_4].$2_0));
                            $v_7.style.visibility = 'visible';
                            this.$1w_0 = false;
                            if (!$v_3) {
                                if (!IsNull(this.$1B_0)) {
                                    Mscrm.CustomControls.CustomControlUtility
                                        .applyRowBackgroundColor(this.$1B_0, '#FFFFFF');
                                }
                                var $v_8 = this.$2w_0($v_1.$4_0.toString(), $v_2[$v_4].$2_0);
                                if (!IsNull($v_8)) {
                                    Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_8, '#FFFFFF');
                                }
                                Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_8, '#B1D6F0');
                                if (!$v_1.$T_0.hasChildNodes()) {
                                    $v_1.$T_0.appendChild(Mscrm.CustomControls.CustomControlUtility
                                        .wrapTextAndImgageInGivenTagname(Mscrm.CustomControls.CustomControlManager.$2J,
                                            '/_imgs/error/notif_icn_crit16.png'));
                                    $v_1.$T_0.style.display = 'none';
                                }
                                this.$3K_0($v_1, $v_8);
                                $v_3 = true;
                            }
                        }
                    }
                }
                if (!this.$1w_0) {
                    this.$2y_0();
                    $v_1.$t_0.style.display = 'block';
                    if (!$v_1.$T_0.hasChildNodes()) {
                        $v_1.$T_0.appendChild(Mscrm.CustomControls.CustomControlUtility
                            .wrapTextAndImgageInGivenTagname(Mscrm.CustomControls.CustomControlManager.$2J,
                                '/_imgs/error/notif_icn_crit16.png'));
                        $v_1.$T_0.style.display = 'none';
                    }
                    var $v_9 = $get($v_1.$4_0.toString());
                    Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_9, '#B1D6F0');
                    break;
                } else {
                    if (!IsNull($v_1.$3_0) && !IsNull($v_1.$T_0)) {
                        if ($v_1.$T_0.hasChildNodes()) {
                            $v_1.$T_0.removeChild($v_1.$T_0.firstChild);
                        }
                    }
                }
            }
        }
        return this.$1w_0;
    },

    $3q_0: function($p0, $p1) {
        if (!IsNull($p0.$3_0) && !IsNull($p0.$3_0.$5_0)) {
            for (var $v_0 = 0; $v_0 < $p0.$3_0.$5_0.length; $v_0++) {
                if ($p0.$3_0.$5_0[$v_0].$2_0 === $p1) {
                    return $p0.$3_0.$5_0[$v_0].isRequired;
                }
            }
        }
        return false;
    },

    containsEditableGrid: function() {
        var $v_0 = this.$2v_0();
        for (var $v_1 = 0; $v_1 < $v_0.get_Count(); $v_1++) {
            var $v_2 = $v_0.get_item($v_1);
            if (!IsNull($v_2.$d_1) && $v_2.$d_1) {
                return true;
            }
        }
        return false;
    },

    getEditableGridViewEntities: function() {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Mscrm.EntityDescriptor))();
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Number))();
        var $v_2 = this.$2v_0();
        for (var $v_3 = 0; $v_3 < $v_2.get_Count(); $v_3++) {
            var $v_4 = $v_2.get_item($v_3);
            if ((IsNull($v_4.$E_1) || !$v_4.$E_1) && isNullOrEmptyString($v_4.$h_1)) {
                continue;
            }
            var $v_5 = (!IsNull($v_4.$E_1)) ? $v_4.$E_1 : Xrm.Internal.getEntityCode($v_4.$h_1);
            if (!$v_1.contains($v_5)) {
                var $v_6 = (!isNullOrEmptyString($v_4.$h_1)) ? $v_4.$h_1 : Xrm.Internal.getEntityName($v_4.$E_1);
                var $v_7 = Xrm.Internal.getEntityDisplayName($v_6);
                var $v_8 = !IsNull($v_4.$Q_1) && $v_4.$Q_1;
                var $v_9 = new Mscrm.EntityDescriptor();
                $v_9.set_entityCode($v_5.toString());
                $v_9.set_logicalName($v_6);
                $v_9.set_localizedName($v_7);
                $v_9.set_isPrimary($v_8);
                $v_0.add($v_9);
                $v_1.add($v_5);
            }
        }
        return $v_0.toArray();
    },

    $2v_0: function() {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Mscrm.CustomControls.DatasetNodeControlProperty))();
        if (IsNull(this.$7_0)) {
            return $v_0;
        }
        for (var $v_1 = 0; $v_1 < this.$7_0.length; $v_1++) {
            var $v_2 = this.$7_0[$v_1];
            if (!IsNull($v_2.$3_0) && !IsNull($v_2.$3_0.$S_0)) {
                if (this.$4R_0($v_2)) {
                    continue;
                }
                var $v_3 = $v_2.$3_0.$S_0;
                for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                    var $v_5 = $v_3[$v_4];
                    if ($v_5.$d_1 || $v_5.$2_0 === 'SubGrid') {
                        $v_0.add($v_5);
                    }
                }
            }
        }
        return $v_0;
    },

    $4R_0: function($p0) {
        return $p0.$g_0;
    },

    $3K_0: function($p0, $p1) {
        var $v_0 = $p1.getAttribute('associatepropertyname');
        var $v_1 = Mscrm.CustomControls.CustomControlManager.getAssociatePropertyByName($p0, $v_0);
        if ($v_1.isRequired && isNullOrEmptyString($v_1.$1_0) && !this.$1w_0) {
            $p0.$T_0.style.display = 'block';
        } else {
            $p0.$T_0.style.display = 'none';
        }
        var $v_2 = $p0.$u_0.parentNode;
        $v_2.style.overflowY = 'auto';
        if (!IsNull($p0.$u_0)) {
            if ($p0.$u_0.hasChildNodes()) {
                $p0.$u_0.removeChild($p0.$u_0.firstChild);
            }
            var $v_3 = this.$4I_0($p0, $v_0);
            if (this.$3q_0($p0, $v_0)) {
                $p0.$u_0.appendChild(Mscrm.CustomControls.CustomControlUtility
                    .wrapTextInGivenTagname($v_3 + ' ' + window.LOCID_CCCONFIG_REQUIRED,
                        'label',
                        'style',
                        'cursor:default'));
            } else {
                $p0.$u_0.appendChild(Mscrm.CustomControls.CustomControlUtility
                    .wrapTextInGivenTagname($v_3, 'label', 'style', 'cursor:default'));
            }
        }
        if (!IsNull($p0.$1H_0)) {
            if ($p0.$1H_0.hasChildNodes()) {
                $p0.$1H_0.removeChild($p0.$1H_0.firstChild);
            }
            var $v_4 = Mscrm.CustomControls.CustomControlUtility.wrapTextInGivenTagname($v_1.$A_0, 'span');
            Sys.UI.DomElement.addCssClass($v_4, 'customcontrol-Description-Firefox');
            $p0.$1H_0.appendChild($v_4);
        }
        if (!IsNull($p0.$1I_0)) {
            if ($p0.$1I_0.hasChildNodes()) {
                $p0.$1I_0.removeChild($p0.$1I_0.firstChild);
            }
            if (!$v_1.$H_0 && !$v_1.$1O_0) {
                var $v_5 = document.createElement('label');
                $v_5.style.cursor = 'default';
                $v_5.style.fontSize = '11px';
                var $v_6 = document.createElement('span');
                $v_6.setAttribute('class', 'customcontrol-fontfamily');
                Mscrm.CustomControls.CustomControlUtility.setInnerText($v_6, window.LOCID_CCCONFIG_COMPATTYPES + ' ');
                var $v_7 = document.createElement('label');
                $v_7.style.cursor = 'default';
                $v_7.style.fontSize = '11px';
                Mscrm.CustomControls.CustomControlUtility.setInnerText($v_7, this.$4H_0($p0, $v_0));
                $v_5.appendChild($v_6);
                $v_5.appendChild($v_7);
                $p0.$1I_0.appendChild($v_5);
            }
        }
    },

    $3W_0: function($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $v_0.getAttribute('associatecontrolid');
        if (isNullOrEmptyString($v_1)) {
            return;
        }
        var $v_2 = this.$M_0[$v_1];
        var $v_3 = $v_2.$3_0.$5_0;
        var $v_4 = $v_0.getAttribute('associatepropertyname');
        for (var $v_5 = 0; $v_5 < $v_3.length; $v_5++) {
            var $v_6 = $v_3[$v_5];
            if ($v_6.$2_0 === $v_4) {
                Mscrm.CustomControls.CustomControlManager
                    .openPropertyPage($v_2.$4_0.toString(), $v_6, this.$K_0, this.$2E_0);
                break;
            }
        }
    },

    $3n_0: function() {
        for (var $v_0 = 0; $v_0 < this.$7_0.length; $v_0++) {
            var $v_1 = this.$7_0[$v_0];
            if ($v_1.$J_0) {
                $v_1.$G_0.push(2);
                $v_1.$G_0.push(0);
                $v_1.$G_0.push(1);
            }
            this.$3M_0($v_1);
        }
    },

    initializeControlDescriptors: function(responseText) {
        this.$1X_0 = this.$3N_0(responseText);
        if (!this.$K_0) {
            this.$7_0 = this.createExistingCustomControlsFromFormXml();
        } else {
            this.$7_0 = this.createExistingCustomControlsFromEntityXmlSnippet(true);
        }
        if (this.$F_0 && !this.$K_0) {
            this.$3b_0();
        }
        for (var $v_0 = 0; $v_0 < this.$7_0.length; $v_0++) {
            var $v_1 = this.$7_0[$v_0];
            if (!IsNull($v_1) && !$v_1.$J_0) {
                $v_1.$3_0 = this.$3F_0($v_1);
            }
        }
        this.$4q_0();
        for (var $v_2 = 0; $v_2 < this.$7_0.length; $v_2++) {
            this.$3L_0(this.$7_0[$v_2]);
        }
        if (!this.$F_0) {
            var $v_3 = Mscrm.FormLibraryAndEventHandlerUtils.formXml;
            var $v_4 = XUI.Xml.SelectSingleNode($v_3,
                'entity/form/controlDescriptions/controlDescription[@forControl=\'' + this.$O_0 + '\']',
                null);
            if (IsNull($v_4)) {
                this.$1E_0 = false;
            } else {
                var $v_5 = XUI.Xml.SelectSingleNode($v_4,
                    'customControl/parameters/msinternal.isvisibleinmocaonly',
                    null);
                if (!IsNull($v_5)) {
                    var $v_6 = XUI.Xml.GetText($v_5);
                    this.$1E_0 = Boolean.parse($v_6);
                }
            }
            this.$50_0(this.$1E_0);
        }
        this.$39_0();
        if (!IsNull(this.$z_0)) {
            this.$z_0();
        }
    },

    $50_0: function($p0) {
        for (var $$arr_1 = this.$v_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            $v_0.checked = $p0;
        }
    },

    $3F_0: function($p0) {
        var $v_0 = false;
        var $v_1 = $p0.$17_0;
        if (isNullOrEmptyString($v_1)) {
            return null;
        }
        var $v_2 = '<wrap>' + $v_1 + '</wrap>';
        var $v_3 = XUI.Xml.LoadXml($v_2);
        var $v_4 = XUI.Xml.SelectNodes($v_3, '//customControl', null);
        if (!$v_4.length) {
            return null;
        }
        var $v_5 = null;
        if (!IsNull($v_4[0].attributes.getNamedItem('name')) &&
            !Microsoft.Crm.Client.Core.Framework._String
            .isNullOrEmpty(($v_4[0]).attributes.getNamedItem('name').nodeValue)) {
            var $v_8 = ($v_4[0]).attributes.getNamedItem('name').nodeValue;
            $v_5 = this.$3x_0($v_8);
        } else {
            var $v_9 = new Microsoft.Crm.Client.Core.Framework.Guid(($v_4[0]).attributes.getNamedItem('id').nodeValue)
                .toString();
            $v_5 = this.$3G_0($v_9);
        }
        $p0.$8_0 = $v_5.$8_0;
        var $v_6 = $v_4[0];
        var $v_7 = Mscrm.CustomControls.CustomControlUtility.getXmlNodeFirstChild($v_6);
        if (!IsNull($v_7)) {
            var $v_A = new Array(0);
            for (var $$arr_C = $v_7.childNodes, $$len_D = $$arr_C.length, $$idx_E = 0; $$idx_E < $$len_D; ++$$idx_E) {
                var $v_C = $$arr_C[$$idx_E];
                $v_A.push($v_C);
                var $v_D = $v_C.nodeName;
                if ($v_D === 'data-set') {
                    for (var $v_E = 0; $v_E < $v_C.childNodes.length; $v_E++) {
                        var $v_F = $v_C.childNodes[$v_E];
                        if ($v_F.nodeName === 'columnsDefaultView') {
                            for (var $v_G = 0; $v_G < $v_F.childNodes.length; $v_G++) {
                                $v_A.push($v_F.childNodes[$v_G]);
                            }
                        } else if ($v_F.nodeName !== 'ViewId' &&
                            $v_F.nodeName !== 'IsUserView' &&
                            $v_F.nodeName !== 'RelationshipName' &&
                            $v_F.nodeName !== 'RelationshipRoleOrdinal' &&
                            $v_F.nodeName !== 'TargetEntityType' &&
                            $v_F.nodeName !== 'EnableViewPicker' &&
                            $v_F.nodeName !== 'FilteredViewIds') {
                            $v_A.push($v_F);
                        }
                    }
                }
            }
            var $v_B = 0;
            for (var $$arr_L = $v_A, $$len_M = $$arr_L.length, $$idx_N = 0; $$idx_N < $$len_M; ++$$idx_N) {
                var $v_H = $$arr_L[$$idx_N];
                var $v_I = $v_H.nodeName;
                if ($v_I === 'data-set') {
                    var $v_L = XUI.Xml.GetText($v_H.attributes.getNamedItem('name'));
                    var $v_M = this.$1q_0($v_5.$5_0, $v_L);
                    if ($v_M.$d_1) {
                        $v_0 = true;
                    }
                    var $v_N = XUI.Xml.SelectSingleNode($v_H, 'ViewId', null);
                    var $v_O = (!IsNull($v_N)) ? XUI.Xml.GetText($v_N) : '';
                    if (!this.$F_0 || $v_B > 0) {
                        var $v_P = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_H, 'TargetEntityType', null));
                        var $v_Q = Mscrm.CustomControls.CustomControlUtility.getViewName($v_P, $v_O);
                        $v_M.$1_0 = $v_O;
                        $v_M.$B_1 = $v_O;
                        $v_M.$16_1 = $v_Q;
                        $v_M.$h_1 = $v_P;
                        $v_M.$E_1 = Xrm.Internal.getEntityCode($v_P);
                        $v_B = $v_B + 1;
                    } else {
                        $v_M.$Q_1 = true;
                        $v_B = $v_B + 1;
                        continue;
                    }
                }
                if ($v_I === 'cell' && $v_H.parentNode.nodeName === 'columnsDefaultView') {
                    var $v_R = $v_H;
                    if (!IsNull($v_R)) {
                        var $v_S = XUI.Xml.GetText($v_R.parentNode.parentNode.attributes.getNamedItem('name'));
                        var $v_T = this.$1q_0($v_5.$5_0, $v_S);
                        if (!IsNull($v_T)) {
                            var $v_U = $v_R.attributes.getNamedItem('entityName').nodeValue;
                            var $v_V = Xrm.Internal.getEntityCode($v_U);
                            var $v_W = Xrm.Internal.getEntityDisplayName($v_U);
                            var $v_X = $v_R.attributes.getNamedItem('viewId').nodeValue;
                            var $v_Y = $v_R.attributes.getNamedItem('attributeName').nodeValue;
                            var $v_Z = new Mscrm.CustomControls
                                .ViewLookupProperty($v_W, $v_U, $v_V, $v_X, $v_Y, $v_Y, '', $v_T, false);
                            this.$3f_0($v_Z, $v_R);
                            if (IsNull($v_T.$9_1)) {
                                $v_T.$9_1 = new Array(0);
                            }
                            $v_T.$9_1.push($v_Z);
                        }
                    }
                    continue;
                }
                var $v_J = null;
                if (!IsNull($v_H.attributes)) {
                    $v_J = $v_H.attributes.getNamedItem('type');
                }
                if (!IsNull($v_J) && ($v_J.nodeValue === 'Form.Card' || $v_J.nodeValue === 'Form.Main')) {
                    var $v_a = this.$1q_0($v_5.$5_0, $v_H.nodeName);
                    if (!IsNull($v_a)) {
                        if ($v_H.hasChildNodes()) {
                            var $v_b = $v_H.childNodes;
                            for (var $$arr_i = $v_b, $$len_j = $$arr_i.length, $$idx_k = 0;
                                $$idx_k < $$len_j;
                                ++$$idx_k) {
                                var $v_c = $$arr_i[$$idx_k];
                                if ($v_c.nodeName === 'BindAttribute') {
                                    var $v_d = $v_c.firstChild.nodeValue;
                                    $v_a.$1r_2 = Mscrm.CustomControls.CustomControlUtility.retrieveFormData($v_d);
                                }
                            }
                        }
                    }
                }
                var $v_K = this.$1q_0($v_5.$5_0, $v_I);
                if (!IsNull($v_K)) {
                    if ($v_H.childNodes.length > 1 &&
                        Mscrm.CustomControls.CustomControlUtility.isPotentialLookupProperty($v_K.$6_0)) {
                        var $v_e = $v_K;
                        if ($v_e) {
                            $v_e.$Q_1 = this.$4P_0($v_5.$5_0, $v_I);
                            $v_e.$R_1 = Number.parseInvariant(this.$f_0.sObjectTypeCode);
                            if (!IsNull(XUI.Xml.SelectSingleNode($v_H, 'BindAttribute', null))) {
                                $v_e.$1_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_H, 'BindAttribute', null));
                                this.$3f_0($v_e, $v_H);
                            }
                        }
                    } else {
                        $v_K.$1_0 = XUI.Xml.GetText($v_H);
                    }
                    if ($v_K.$U_0) {
                        ($v_K).$C_1 = (!$v_H.attributes.getNamedItem('static'))
                            ? false
                            : Boolean.parse($v_H.attributes.getNamedItem('static').nodeValue);
                    }
                    if (isNullOrEmptyString($v_K.$L_0)) {
                        var $v_f = XUI.Xml.GetText($v_H);
                        var $v_g = this.$4J_0($v_K, $v_5, $v_f);
                        $v_K
                            .set_selectedCandidatePropertyType((!$v_H.attributes.getNamedItem('type'))
                                ? $v_g
                                : $v_H.attributes.getNamedItem('type').nodeValue);
                    }
                }
            }
        }
        if ($p0.$g_0) {
            return $v_5;
        }
        for (var $v_h = 0; $v_h < 3; $v_h++) {
            var $v_i = XUI.Xml
                .SelectSingleNode($v_3, String.format('//customControl[@formFactor=\'{0}\']', $v_h), null);
            if ($v_i) {
                switch ($v_h) {
                case 0:
                    $p0.$G_0.push(0);
                    break;
                case 1:
                    $p0.$G_0.push(1);
                    break;
                case 2:
                    $p0.$G_0.push(2);
                    break;
                }
            }
        }
        if ($v_0) {
            this.$55_0($v_5);
            this.$3C_0($v_5);
        }
        return $v_5;
    },

    $4P_0: function($p0, $p1) {
        var $v_0 = null;
        for (var $$arr_3 = $p0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_1 = $$arr_3[$$idx_5];
            if (!$v_1.$U_0) {
                $v_0 = $v_1;
                break;
            }
        }
        return !!$v_0 && $v_0.$2_0 === $p1;
    },

    $3f_0: function($p0, $p1) {
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'DefaultViewId', null))) {
            $p0.$B_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'DefaultViewId', null));
        }
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'FilterRelationshipName', null))) {
            $p0.$c_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'FilterRelationshipName', null));
        }
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'DependentAttributeName', null))) {
            $p0.$a_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'DependentAttributeName', null));
        }
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'DependentAttributeType', null))) {
            $p0.$b_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'DependentAttributeType', null));
        }
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'AllowFilterOff', null))) {
            var $v_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'AllowFilterOff', null));
            $p0.$P_1 = !isNullOrEmptyString($v_0) && Boolean.parse($v_0);
        }
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'DisableQuickFind', null))) {
            var $v_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'DisableQuickFind', null));
            $p0.$w_1 = isNullOrEmptyString($v_1) || Boolean.parse($v_1);
        }
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'AvailableViewIds', null))) {
            $p0.$14_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'AvailableViewIds', null));
        }
        if (!IsNull(XUI.Xml.SelectSingleNode($p1, 'DisableViewPicker', null))) {
            var $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p1, 'DisableViewPicker', null));
            $p0.$p_1 = !isNullOrEmptyString($v_2) && Boolean.parse($v_2);
        }
    },

    $3x_0: function($p0) {
        for (var $$arr_1 = this.$1X_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (!IsNull($v_0) &&
                !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0.$1b_0) &&
                $v_0.$1b_0 === $p0) {
                return this.$2r_0($v_0.$1j_0);
            }
        }
        return null;
    },

    $3G_0: function($p0) {
        for (var $$arr_1 = this.$1X_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (!IsNull($v_0) && !IsNull($v_0.$4_0) && $v_0.$4_0.toString() === $p0) {
                return this.$2r_0($v_0.$1j_0);
            }
        }
        return null;
    },

    $4I_0: function($p0, $p1) {
        if (!IsNull($p0.$3_0) && !IsNull($p0.$3_0.$5_0)) {
            for (var $$arr_2 = $p0.$3_0.$5_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_0 = $$arr_2[$$idx_4];
                if ($v_0.$2_0 === $p1) {
                    return $v_0.$I_0;
                }
            }
        }
        return '';
    },

    $4H_0: function($p0, $p1) {
        if (!IsNull($p0.$3_0) && !IsNull($p0.$3_0.$5_0)) {
            for (var $$arr_2 = $p0.$3_0.$5_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_0 = $$arr_2[$$idx_4];
                if ($v_0.$2_0 === $p1) {
                    return $v_0.$6_0.join(', ').toString();
                }
            }
        }
        return '';
    },

    $1q_0: function($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            if ($p0[$v_0].$2_0 === $p1) {
                return $p0[$v_0];
            }
        }
        return null;
    },

    getCandidateControlDescrptors: function() {
        return this.$1X_0;
    },

    getCustomControlDOMForformXML: function(formXMLDoc, currentControlClassId, parameters) {
        if (IsNull(currentControlClassId) || currentControlClassId === '{F9A8A302-114E-466A-B582-6771B2AE0D92}') {
            this.$1G_0 = this.$s_0;
        } else {
            this.$1G_0 = currentControlClassId;
            if (this.$1G_0.indexOf('{') === -1) {
                this.$1G_0 = '{' + this.$1G_0 + '}';
            }
        }
        for (var $v_4 = 0; $v_4 < this.$7_0.length; $v_4++) {
            this.$7_0[$v_4].$G_0 = new Array(0);
        }
        this.updateCustomControlRadioChecked();
        var $v_0 = null;
        var $v_1 = null;
        var $v_2 = XUI.Xml.SelectSingleNode(formXMLDoc, 'entity/form', null);
        if (IsNull(XUI.Xml.SelectSingleNode(formXMLDoc, 'entity/form/controlDescriptions', null))) {
            $v_0 = Mscrm.CustomControls.CustomControlUtility
                .createXmlDocumentElement(formXMLDoc, 'controlDescriptions');
            $v_2.appendChild($v_0);
        } else {
            $v_0 = XUI.Xml.SelectSingleNode(formXMLDoc, 'entity/form/controlDescriptions', null);
        }
        var $v_3 = XUI.Xml.SelectSingleNode(formXMLDoc,
            'entity/form/controlDescriptions/controlDescription[@forControl=\'' + this.$O_0 + '\']',
            null);
        if (this.$7_0.length - this.$19_0.length <= 1) {
            if (!IsNull($v_3)) {
                var $v_5 = this.$2x_0(formXMLDoc, this.$O_0);
                var $v_6 = formXMLDoc.createAttribute('classid');
                $v_6.value = this.$1G_0;
                $v_5.attributes.setNamedItem($v_6);
                $v_0.removeChild($v_3);
            }
            this.$1x_0 = this.$1G_0;
            return formXMLDoc;
        }
        this.$1x_0 = '{F9A8A302-114E-466A-B582-6771B2AE0D92}';
        if (IsNull($v_3)) {
            $v_1 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement(formXMLDoc, 'controlDescription');
            $v_0.appendChild($v_1);
            var $v_7 = formXMLDoc.createAttribute('forControl');
            $v_7.value = this.$O_0;
            $v_1.attributes.setNamedItem($v_7);
        } else {
            var $v_8 = XUI.Xml.SelectNodes(formXMLDoc,
                'entity/form/controlDescriptions/controlDescription[@forControl=\'' + this.$O_0 + '\']/customControl',
                null);
            for (var $$arr_C = $v_8, $$len_D = $$arr_C.length, $$idx_E = 0; $$idx_E < $$len_D; ++$$idx_E) {
                var $v_9 = $$arr_C[$$idx_E];
                $v_3.removeChild($v_9);
            }
            $v_1 = XUI.Xml.SelectSingleNode(formXMLDoc,
                'entity/form/controlDescriptions/controlDescription[@forControl=\'' + this.$O_0 + '\']',
                null);
        }
        this.$3B_0(formXMLDoc, $v_1, parameters);
        return formXMLDoc;
    },

    getSubgridUniqueId: function() {
        return this.$O_0;
    },

    setSubgridParameters: function(generatedGridSnippet,
        viewId,
        isUserView,
        relationshipName,
        relationshipRoleOrdinal,
        targetEntityType,
        viewSel,
        filteredViewIds) {
        if (IsNull(generatedGridSnippet) || isNullOrEmptyString(viewId)) {
            return;
        }
        var $v_0 = XUI.Xml.SelectNodes(generatedGridSnippet,
            '/controlDescriptions/controlDescription/customControl/parameters/data-set/ViewId',
            null);
        if (!IsNull($v_0)) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                if (XUI.Xml.GetText($v_2) === viewId) {
                    var $v_3 = $v_2.parentNode;
                    if (isNullOrEmptyString(isUserView)) {
                        isUserView = 'false';
                    }
                    var $v_4 = Mscrm.CustomControls.CustomControlUtility
                        .createXmlDocumentElement(generatedGridSnippet, 'IsUserView');
                    XUI.Xml.SetText($v_4, isUserView);
                    $v_3.appendChild($v_4);
                    if (!isNullOrEmptyString(relationshipName)) {
                        var $v_5 = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement(generatedGridSnippet, 'RelationshipName');
                        XUI.Xml.SetText($v_5, relationshipName);
                        $v_3.appendChild($v_5);
                    }
                    if (!isNullOrEmptyString(relationshipRoleOrdinal)) {
                        var $v_6 = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement(generatedGridSnippet, 'RelationshipRoleOrdinal');
                        XUI.Xml.SetText($v_6, relationshipRoleOrdinal);
                        $v_3.appendChild($v_6);
                    }
                    if (!isNullOrEmptyString(targetEntityType)) {
                        var $v_7 = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement(generatedGridSnippet, 'TargetEntityType');
                        XUI.Xml.SetText($v_7, targetEntityType);
                        $v_3.appendChild($v_7);
                    }
                    if (!isNullOrEmptyString(viewSel)) {
                        var $v_8 = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement(generatedGridSnippet, 'EnableViewPicker');
                        XUI.Xml.SetText($v_8, viewSel);
                        $v_3.appendChild($v_8);
                    }
                    if (!IsNull(filteredViewIds)) {
                        var $v_9 = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement(generatedGridSnippet, 'FilteredViewIds');
                        XUI.Xml.SetText($v_9, filteredViewIds);
                        $v_3.appendChild($v_9);
                    }
                }
            }
        }
    },

    generateGridSnippet: function() {
        for (var $v_3 = 0; $v_3 < this.$7_0.length; $v_3++) {
            this.$7_0[$v_3].$G_0 = new Array(0);
        }
        this.updateCustomControlRadioChecked();
        var $v_0 = XUI.Xml.CreateDocument();
        var $v_1 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($v_0, 'controlDescriptions');
        $v_0.appendChild($v_1);
        if (this.$7_0.length - this.$19_0.length <= 1) {
            return $v_0;
        }
        var $v_2 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($v_0, 'controlDescription');
        if (!this.$K_0) {
            var $v_4 = $v_0.createAttribute('forControl');
            $v_4.value = this.$O_0;
            $v_2.attributes.setNamedItem($v_4);
        }
        $v_1.appendChild($v_2);
        this.$3B_0($v_0, $v_2, null);
        return $v_0;
    },

    generateGridSnippetForValidation: function() {
        var $v_0 = this.generateGridSnippet();
        var $v_1 = $v_0.getElementsByTagName('customControl');
        if ($v_1.length > 0) {
            return $v_0;
        } else {
            return null;
        }
    },

    generateGridSnippetForEntity: function() {
        if (IsNull(this.$N_0['EntityTypeCode'])) {
            return null;
        }
        var $v_0 = XUI.Xml.CreateDocument();
        var $v_1 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($v_0, 'wrappernamespace');
        $v_0.appendChild($v_1);
        var $v_2 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($v_0, 'wrapper');
        $v_1.appendChild($v_2);
        $v_2.appendChild(this.generateGridSnippet().documentElement);
        var $v_3 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($v_0, 'primaryetc');
        XUI.Xml.SetText($v_3, this.$N_0['EntityTypeCode']);
        $v_2.appendChild($v_3);
        return $v_0;
    },

    $3B_0: function($p0, $p1, $p2) {
        for (var $v_0 = 0; $v_0 < this.$7_0.length; $v_0++) {
            var $v_1 = this.$7_0[$v_0];
            if ($v_1.$g_0) {
                continue;
            }
            var $v_2 = this.isRadiobuttonChecked($v_1.$G_0, 0);
            var $v_3 = this.isRadiobuttonChecked($v_1.$G_0, 1);
            var $v_4 = this.isRadiobuttonChecked($v_1.$G_0, 2);
            var $v_5 = this.$4E_0($v_2, $v_3, $v_4);
            if (!IsNull($v_1)) {
                if (!$v_1.$J_0) {
                    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                        this.$3y_0($v_1, $p0, $v_5[$v_6], $p1, $p2);
                    }
                } else {
                    this.$3z_0($p0, $v_5, $p1);
                }
            }
        }
    },

    $3y_0: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p1, 'customControl');
        var $v_1 = $p1.createAttribute('name');
        $v_1.value = $p0.$3_0.$1b_0;
        $v_0.attributes.setNamedItem($v_1);
        if ($p2 !== -1) {
            var $v_3 = $p1.createAttribute('formFactor');
            $v_3.value = String.format('{0}', $p2);
            $v_0.attributes.setNamedItem($v_3);
        }
        var $v_2 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p1, 'parameters');
        for (var $v_4 = 0; $v_4 < $p0.$3_0.$5_0.length; $v_4++) {
            var $v_5 = $p0.$3_0.$5_0[$v_4];
            if (!isNullOrEmptyString($v_5.$15_0) && $v_5.$1J_0.$1_0 !== $v_5.$1F_0) {
                continue;
            }
            if ($v_5.$V_0) {
                continue;
            }
            if (!$v_5.$H_0) {
                this.$3D_0($v_5, $v_2, $p1, $p4);
            } else {
                var $v_6 = true;
                var $v_7 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p1, 'data-set');
                var $v_8 = $p1.createAttribute('name');
                $v_8.value = $v_5.$2_0;
                $v_7.attributes.setNamedItem($v_8);
                var $v_9 = $v_5;
                if ($v_9.$1U_1) {
                    var $v_A = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p1, 'ViewId');
                    if (!isNullOrEmptyString($v_9.$B_1)) {
                        XUI.Xml.SetText($v_A, $v_9.$B_1);
                        $v_7.appendChild($v_A);
                        var $v_B = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement($p1, 'IsUserView');
                        XUI.Xml.SetText($v_B, 'false');
                        $v_7.appendChild($v_B);
                        var $v_C = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement($p1, 'TargetEntityType');
                        XUI.Xml.SetText($v_C, $v_9.$h_1);
                        $v_7.appendChild($v_C);
                    } else {
                        $v_6 = false;
                    }
                } else {
                    if (!this.$K_0) {
                        var $v_D = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p1, 'ViewId');
                        XUI.Xml.SetText($v_D, $v_5.$1_0);
                        $v_7.appendChild($v_D);
                    }
                }
                if ($v_6) {
                    for (var $v_E = 0; $v_E < $v_9.$1W_1; $v_E++) {
                        this.$3D_0($p0.$3_0.$5_0[$v_4 + $v_E + 1], $v_7, $p1, null);
                    }
                    if ($v_9.$d_1 && !IsNull($v_9.$9_1) && $v_9.$9_1.length > 0) {
                        var $v_F = Mscrm.CustomControls.CustomControlUtility
                            .createXmlDocumentElement($p1, 'columnsDefaultView');
                        for (var $v_G = 0; $v_G < $v_9.$9_1.length; $v_G++) {
                            if (!($v_9.$9_1[$v_G]).$y_1) {
                                this.$3j_0($v_9.$9_1[$v_G], $v_F, $p1);
                            }
                        }
                        $v_7.appendChild($v_F);
                    }
                    $v_2.appendChild($v_7);
                }
            }
        }
        if (!this.$F_0 && this.$v_0.length > 0) {
            var $v_H = this.$v_0[0];
            this.$1E_0 = $v_H.checked;
            if (this.$1E_0) {
                var $v_I = Mscrm.CustomControls.CustomControlUtility
                    .createXmlDocumentElement($p1, 'msinternal.isvisibleinmocaonly');
                XUI.Xml.SetText($v_I, this.$1E_0.toString());
                var $v_J = $p1.createAttribute('static');
                $v_J.value = 'true';
                $v_I.attributes.setNamedItem($v_J);
                $v_2.appendChild($v_I);
            }
        }
        $v_0.appendChild($v_2);
        $p3.appendChild($v_0);
    },

    $3D_0: function($p0, $p1, $p2, $p3) {
        if (isNullOrEmptyString($p0.$1_0)) {
            return;
        }
        var $v_0 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, $p0.$2_0);
        if ($p0.$1O_0) {
            var $v_1 = $p2.createAttribute('isGroup');
            $v_1.value = 'true';
            $v_0.attributes.setNamedItem($v_1);
            var $v_2 = $p2.createAttribute('static');
            $v_2.value = 'true';
            $v_0.attributes.setNamedItem($v_2);
        } else {
            if ($p0.$U_0) {
                var $v_3 = $p2.createAttribute('type');
                if ($p0.$U_0 && ($p0).$C_1) {
                    var $v_4 = $p2.createAttribute('static');
                    $v_4.value = ($p0).$C_1.toString();
                    $v_0.attributes.setNamedItem($v_4);
                    $v_3.value = $p0.$L_0;
                } else {
                    $v_3.value = $p0.$L_0;
                }
                $v_0.attributes.setNamedItem($v_3);
            }
        }
        if (Mscrm.CustomControls.CustomControlUtility.isLookupProperty($p0.$L_0) && !$p0.$V_0) {
            var $v_5 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'BindAttribute');
            XUI.Xml.SetText($v_5, $p0.$1_0);
            $v_0.appendChild($v_5);
            var $v_6 = $p0;
            if ($v_6.$Q_1) {
                if ($p3) {
                    this.$4F_0($p3, $v_6);
                }
                $p0 = $v_6;
            }
            var $v_7 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'DefaultViewId');
            XUI.Xml.SetText($v_7,
                (isNullOrEmptyString(($p0).$B_1))
                ? Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()
                : ($p0).$B_1);
            $v_0.appendChild($v_7);
            var $v_8 = Mscrm.CustomControls.CustomControlUtility
                .createXmlDocumentElement($p2, 'FilterRelationshipName');
            XUI.Xml.SetText($v_8, ($p0).$c_1);
            $v_0.appendChild($v_8);
            var $v_9 = Mscrm.CustomControls.CustomControlUtility
                .createXmlDocumentElement($p2, 'DependentAttributeName');
            XUI.Xml.SetText($v_9, ($p0).$a_1);
            $v_0.appendChild($v_9);
            var $v_A = Mscrm.CustomControls.CustomControlUtility
                .createXmlDocumentElement($p2, 'DependentAttributeType');
            XUI.Xml.SetText($v_A, ($p0).$b_1);
            $v_0.appendChild($v_A);
            var $v_B = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'AvailableViewIds');
            XUI.Xml.SetText($v_B, ($p0).$14_1);
            $v_0.appendChild($v_B);
            var $v_C = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'AllowFilterOff');
            XUI.Xml.SetText($v_C, (IsNull(($p0).$P_1)) ? 'true' : ($p0).$P_1.toString());
            $v_0.appendChild($v_C);
            var $v_D = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'DisableQuickFind');
            XUI.Xml.SetText($v_D, (IsNull(($p0).$w_1)) ? 'true' : ($p0).$w_1.toString());
            $v_0.appendChild($v_D);
            var $v_E = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'DisableViewPicker');
            XUI.Xml.SetText($v_E, (IsNull(($p0).$p_1)) ? 'true' : ($p0).$p_1.toString());
            $v_0.appendChild($v_E);
        } else if ($p0.$q_0) {
            var $v_F = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'BindAttribute');
            XUI.Xml.SetText($v_F, $p0.$1_0);
            $v_0.appendChild($v_F);
        } else {
            XUI.Xml.SetText($v_0, $p0.$1_0);
        }
        $p1.appendChild($v_0);
    },

    $4F_0: function($p0, $p1) {
        $p1.$B_1 = (!IsNull($p0['DefaultViewId']))
            ? $p0['DefaultViewId'].toString()
            : Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString();
        $p1.$c_1 = (!IsNull($p0['FilterRelationshipName'])) ? $p0['FilterRelationshipName'].toString() : '';
        $p1.$a_1 = (!IsNull($p0['DependentAttributeName'])) ? $p0['DependentAttributeName'].toString() : '';
        $p1.$b_1 = (!IsNull($p0['DependentAttributeType'])) ? $p0['DependentAttributeType'].toString() : '';
        $p1.$14_1 = (!IsNull($p0['AvailableViewIds'])) ? $p0['AvailableViewIds'].toString() : '';
        if (!IsNull($p0['AllowFilterOff'])) {
            var $v_0 = $p0['AllowFilterOff'].toString();
            $p1.$P_1 = !isNullOrEmptyString($v_0) && Boolean.parse($v_0);
        } else {
            $p1.$P_1 = false;
        }
        if (!IsNull($p0['DisableViewPicker'])) {
            var $v_1 = $p0['DisableViewPicker'].toString();
            $p1.$p_1 = !isNullOrEmptyString($v_1) && Boolean.parse($v_1);
        } else {
            $p1.$p_1 = false;
        }
        if (!IsNull($p0['DisableQuickFind'])) {
            var $v_2 = $p0['DisableQuickFind'].toString();
            $p1.$w_1 = isNullOrEmptyString($v_2) || Boolean.parse($v_2);
        } else {
            $p1.$w_1 = true;
        }
    },

    $3z_0: function($p0, $p1, $p2) {
        var $v_0 = this.$2x_0($p0, this.$O_0);
        var $v_1 = (this.$F_0) ? this.$s_0 : this.$1G_0;
        var $v_2 = '';
        var $v_3 = '';
        if (!IsNull($v_0) && !IsNull($v_0.attributes.getNamedItem('datafieldname'))) {
            $v_2 = $v_0.attributes.getNamedItem('datafieldname').nodeName;
            $v_3 = $v_0.attributes.getNamedItem('datafieldname').nodeValue;
        }
        for (var $v_4 = 0; $v_4 < $p1.length; $v_4++) {
            var $v_5 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p0, 'customControl');
            var $v_6 = $p0.createAttribute('id');
            $v_6.value = $v_1;
            $v_5.attributes.setNamedItem($v_6);
            var $v_7 = $p0.createAttribute('formFactor');
            $v_7.value = ($p1[$v_4]).toString();
            if ($p1[$v_4] !== -1) {
                $v_5.attributes.setNamedItem($v_7);
            }
            var $v_8 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p0, 'parameters');
            if (!isNullOrEmptyString($v_2)) {
                var $v_9 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p0, $v_2);
                XUI.Xml.SetText($v_9, $v_3);
                $v_8.appendChild($v_9);
            }
            $v_5.appendChild($v_8);
            $p2.appendChild($v_5);
        }
    },

    updateCustomControlRadioChecked: function() {
        var $v_0 = Mscrm.CustomControls.CustomControlUtility.isDataSetControlEnabled();
        var $v_1 = ($v_0) ? this.$2u_0(2) : null;
        var $v_2 = this.$2u_0(0);
        var $v_3 = this.$2u_0(1);
        var $v_4 = false;
        var $v_5 = null;
        for (var $v_6 = 0; $v_6 < this.$7_0.length; $v_6++) {
            var $v_7 = this.$7_0[$v_6];
            $v_7.$G_0 = new Array(0);
            if ($v_0 && $v_7.$4_0.toString() === $v_1 && this.$3O_0($v_7)) {
                $v_4 = true;
                $v_7.$G_0.push(2);
            }
            if ($v_7.$J_0) {
                $v_5 = $v_7;
            }
            if ($v_7.$4_0.toString() === $v_2) {
                $v_7.$G_0.push(0);
            }
            if ($v_7.$4_0.toString() === $v_3) {
                $v_7.$G_0.push(1);
            }
        }
        if (!$v_4 && !IsNull($v_5)) {
            $v_5.$G_0.push(2);
        }
    },

    $2u_0: function($p0) {
        var $v_0 = '';
        switch ($p0) {
        case 0:
            $v_0 = 'radphone';
            break;
        case 1:
            $v_0 = 'radtablet';
            break;
        case 2:
            $v_0 = 'radweb';
            break;
        default:
            return '';
        }
        var $v_1 = '';
        var $v_2 = document.getElementsByName($v_0);
        for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3];
            var $v_5 = false;
            if ($v_4.getAttribute('type') === 'radio') {
                $v_5 = $v_2[$v_3].checked;
            }
            if ($v_5) {
                $v_1 = $v_4.id.split('_')[0];
                break;
            }
        }
        return $v_1;
    },

    createExistingCustomControlsFromFormXml: function() {
        var $v_0 = new Array(0);
        var $v_1 = null;
        if (!this.$F_0) {
            $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.formXml;
        } else {
            $v_1 = this.$1D_0.FormXml;
        }
        if (Mscrm.Utilities.isEdge() || isOutlookHostedWindow()) {
            $v_1 = $v_1.cloneNode(true);
        }
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Xml.SelectNodes($v_1,
                'entity/form/controlDescriptions/controlDescription[@forControl=\'' + this.$O_0 + '\']/customControl',
                null);
            if (!$v_2.length) {
                var $v_3 = this.$2x_0($v_1, this.$O_0);
                if (!IsNull($v_3)) {
                    this.$s_0 = $v_3.attributes.getNamedItem('classid').nodeValue;
                } else {
                    this.$s_0 = '{E7A81278-8635-4d9e-8D4D-59480B391C5B}';
                }
                $v_0.push(this.$2s_0(this.$s_0));
            } else {
                var $v_4 = '';
                var $v_5 = '';
                for (var $v_6 = 0; $v_6 < $v_2.length; $v_6++) {
                    var $v_7 = $v_2[$v_6];
                    var $v_8 = ($v_7.attributes.getNamedItem('id'))
                        ? (new Microsoft.Crm.Client.Core.Framework.Guid($v_7.attributes.getNamedItem('id').nodeValue))
                        .toString()
                        : '';
                    var $v_9 = ($v_7.attributes.getNamedItem('name'))
                        ? $v_7.attributes.getNamedItem('name').nodeValue
                        : '';
                    var $v_A = !IsNull($v_7.attributes.getNamedItem('formFactor'));
                    if ($v_9 !== $v_4 ||
                        Mscrm.CustomControls.CustomControlUtility
                        .getNodeOuterHtml(Mscrm.CustomControls.CustomControlUtility.getXmlNodeFirstChild($v_7)) !==
                        $v_5 ||
                        !$v_A) {
                        var $v_B = new Mscrm.CustomControls.FieldCustomControl();
                        if (Mscrm.CustomControls.CustomControlUtility
                            .getXmlNodeFirstChild(Mscrm.CustomControls.CustomControlUtility.getXmlNodeFirstChild($v_7))
                            .nodeName ===
                            'datafieldname' ||
                            (this.$F_0 &&
                                $v_8 ===
                                new Microsoft.Crm.Client.Core.Framework.Guid('{E7A81278-8635-4d9e-8D4D-59480B391C5B}')
                                .toString())) {
                            $v_B.$J_0 = true;
                            $v_B.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_8);
                            this.$s_0 = $v_7.attributes.getNamedItem('id').nodeValue;
                            $v_B.$8_0 = this.$2t_0();
                        } else {
                            $v_B.$4_0 = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
                        }
                        $v_B.$17_0 = Mscrm.CustomControls.CustomControlUtility.getNodeOuterHtml($v_7);
                        $v_0.push($v_B);
                    } else {
                        $v_0[$v_0.length - 1].$17_0 += Mscrm.CustomControls.CustomControlUtility.getNodeOuterHtml($v_7);
                    }
                    $v_4 = $v_9;
                    $v_5 = Mscrm.CustomControls.CustomControlUtility
                        .getNodeOuterHtml(Mscrm.CustomControls.CustomControlUtility.getXmlNodeFirstChild($v_7));
                }
            }
        }
        return this.$3d_0($v_0);
    },

    createExistingCustomControlsFromEntityXmlSnippet: function(showInEntityLevel) {
        var $v_0 = new Array(0);
        var $v_1 = CrmEncodeDecode.CrmXmlDecode(this.$N_0['ExistingEntityConfigXML']);
        if (!isNullOrEmptyString($v_1)) {
            this.$1l_0 = XUI.Xml.LoadXml($v_1);
            var $v_2 = this.$1l_0.getElementsByTagName('customControl');
            if (!$v_2.length) {
                this.$1l_0 = null;
            }
        } else {
            this.$1l_0 = null;
        }
        if (isNullOrEmptyString($v_1) && showInEntityLevel) {
            this.$s_0 = '{E7A81278-8635-4d9e-8D4D-59480B391C5B}';
            $v_0.push(this.$2s_0(this.$s_0));
        } else if (!isNullOrEmptyString($v_1)) {
            var $v_3 = $v_1.indexOf('xmlns');
            if ($v_3 !== -1) {
                var $v_8 = $v_1.substr(0, $v_3);
                var $v_9 = $v_1.substr($v_3 + 5);
                $v_1 = $v_8 + 'none-attribute' + $v_9;
            }
            var $v_4 = XUI.Xml.LoadXml($v_1);
            var $v_5 = XUI.Xml.SelectNodes($v_4, '//customControl', null);
            if (showInEntityLevel && (IsNull($v_5) || !$v_5.length)) {
                this.$s_0 = '{E7A81278-8635-4d9e-8D4D-59480B391C5B}';
                $v_0.push(this.$2s_0(this.$s_0));
                return $v_0;
            }
            var $v_6 = '';
            var $v_7 = '';
            for (var $v_A = 0; $v_A < $v_5.length; $v_A++) {
                var $v_B = $v_5[$v_A];
                var $v_C = ($v_B.attributes.getNamedItem('id'))
                    ? (new Microsoft.Crm.Client.Core.Framework.Guid($v_B.attributes.getNamedItem('id').nodeValue))
                    .toString()
                    : '';
                var $v_D = ($v_B.attributes.getNamedItem('name')) ? $v_B.attributes.getNamedItem('name').nodeValue : '';
                var $v_E = !IsNull($v_B.attributes.getNamedItem('formFactor'));
                if ($v_D !== $v_6 ||
                    Mscrm.CustomControls.CustomControlUtility
                    .getNodeOuterHtml(Mscrm.CustomControls.CustomControlUtility.getXmlNodeFirstChild($v_B)) !==
                    $v_7 ||
                    !$v_E) {
                    var $v_F = $v_C ===
                        new Microsoft.Crm.Client.Core.Framework.Guid('{E7A81278-8635-4d9e-8D4D-59480B391C5B}')
                        .toString();
                    if (!showInEntityLevel && $v_F) {
                        continue;
                    }
                    var $v_G = new Mscrm.CustomControls.FieldCustomControl();
                    if (showInEntityLevel && $v_F) {
                        $v_G.$J_0 = true;
                        $v_G.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_C);
                        this.$s_0 = '{E7A81278-8635-4d9e-8D4D-59480B391C5B}';
                        $v_G.$8_0 = this.$2t_0();
                    } else {
                        $v_G.$4_0 = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
                        if (!showInEntityLevel) {
                            $v_G.$g_0 = true;
                        }
                    }
                    $v_G.$17_0 = Mscrm.CustomControls.CustomControlUtility.getNodeOuterHtml($v_B);
                    $v_0.push($v_G);
                } else {
                    $v_0[$v_0.length - 1].$17_0 += Mscrm.CustomControls.CustomControlUtility.getNodeOuterHtml($v_B);
                }
                $v_6 = $v_D;
                $v_7 = Mscrm.CustomControls.CustomControlUtility
                    .getNodeOuterHtml(Mscrm.CustomControls.CustomControlUtility.getXmlNodeFirstChild($v_B));
            }
        }
        return this.$3d_0($v_0);
    },

    $3d_0: function($p0) {
        if (IsNull($p0) || !$p0.length) {
            return $p0;
        }
        var $v_0 = new Array(0);
        var $v_1 = 0;
        for (; $v_1 < $p0.length; $v_1++) {
            if (($p0[$v_1]).$J_0) {
                $v_0.push($p0[$v_1]);
                break;
            }
        }
        for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) {
            if ($v_2 === $v_1) {
                continue;
            }
            if (($p0[$v_2]).$J_0) {
                $p0[$v_1].$17_0 += $p0[$v_2].$17_0;
                continue;
            }
            $v_0.push($p0[$v_2]);
        }
        return $v_0;
    },

    $4E_0: function($p0, $p1, $p2) {
        var $v_0 = new Array(0);
        if ($p0) {
            $v_0.push(0);
        }
        if ($p1) {
            $v_0.push(1);
        }
        if ($p2) {
            $v_0.push(2);
        }
        if (!$v_0.length) {
            $v_0.push(-1);
        }
        return $v_0;
    },

    updateCustomControlProperty: function(customControlId, controlProperty, hasEntityViewChanged) {
        if (isNullOrEmptyString(customControlId) || IsNull(controlProperty)) {
            return;
        }
        if (IsNull(hasEntityViewChanged)) {
            hasEntityViewChanged = false;
        }
        var $v_0 = this.$M_0[customControlId];
        var $v_1 = $get(this.$1f_0(customControlId, controlProperty.$2_0));
        if (!IsNull($v_1)) {
            if (controlProperty.$H_0 && (controlProperty).$1U_1) {
                var $v_2 = controlProperty;
                Mscrm.CustomControls.CustomControlUtility.setInnerText($v_1, $v_2.$16_1);
                $v_1.title = $v_2.$16_1;
                if (hasEntityViewChanged) {
                    for (var $v_3 = 0; $v_3 < $v_0.$3_0.$5_0.length; $v_3++) {
                        var $v_4 = $v_0.$3_0.$5_0[$v_3];
                        if ($v_4.$V_0 && $v_4.$n_0 === controlProperty.$2_0) {
                            $v_4.$1_0 = '';
                            this.updateCustomControlProperty(customControlId, $v_4);
                        }
                    }
                }
            } else if (controlProperty.$q_0) {
                var $v_5 = controlProperty;
                Mscrm.CustomControls.CustomControlUtility.setInnerText($v_1, $v_5.get_formData().$r_0);
                $v_1.title = $v_5.get_formData().$r_0;
            } else {
                Mscrm.CustomControls.CustomControlUtility.appendPropertyValuetoElem($v_1, controlProperty);
            }
            if (!isNullOrEmptyString(controlProperty.$1_0)) {
                var $v_6 = $get(this.$3e_0(customControlId, controlProperty.$2_0));
                if (!IsNull($v_6)) {
                    $v_6.style.visibility = 'hidden';
                    var $v_7 = this.$2w_0(customControlId, controlProperty.$2_0);
                    if (!IsNull($v_7)) {
                        Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor($v_7, '#FFFFFF');
                    }
                }
                if (!IsNull($v_0.$3_0) && !IsNull($v_0.$T_0)) {
                    if ($v_0.$T_0.hasChildNodes()) {
                        $v_0.$T_0.style.display = 'none';
                    }
                }
            }
            if (!IsNull(controlProperty.$1_0)) {
                if (!controlProperty.$H_0) {
                    $v_1.title = Mscrm.CustomControls.CustomControlUtility.retrievePropertyValueForTitle($v_1);
                }
            }
            $v_1.parentNode.focus();
            $v_1.parentNode.click();
        }
        if (!IsNull($v_0)) {
            if (!IsNull(controlProperty.get_childProperties())) {
                for (var $$arr_B = controlProperty.get_childProperties(), $$len_C = $$arr_B.length, $$idx_D = 0;
                    $$idx_D < $$len_C;
                    ++$$idx_D) {
                    var $v_8 = $$arr_B[$$idx_D];
                    $v_8.$1_0 = '';
                    if ($v_8.$U_0) {
                        ($v_8).$C_1 = false;
                    }
                    var $v_9 = $get(this.$1f_0(customControlId, $v_8.$2_0));
                    if (!IsNull($v_9)) {
                        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_9, '');
                    }
                }
            }
        }
    },

    addSelectedCustomControl: function(selectedCandidateCustomControlId, oldCustomControl) {
        this.$2y_0();
        this.$24_0.style.display = 'table';
        var $v_0 = this.$3G_0(selectedCandidateCustomControlId);
        if (!IsNull($v_0)) {
            var $v_1 = new Mscrm.CustomControls.FieldCustomControl();
            $v_1.$4_0 = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
            $v_1.$8_0 = $v_0.$8_0;
            $v_1.$3_0 = $v_0;
            this.$7_0.push($v_1);
            var $v_2 = this.$3A_0($v_1, false, false, false, $v_1.$4_0.toString());
            this.$M_0[$v_1.$4_0.toString()] = $v_1;
            $v_1.$Y_0 = $v_2;
            if (!$v_1.$J_0) {
                Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_2, 'mouseover', this.$1R_0);
                Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_2, 'mouseout', this.$22_0);
            }
            Mscrm.CustomControls.CustomControlUtility
                .addHandlerToDomElement($v_2, 'click', this._onGridRowClickHandler);
            this.$1a_0.appendChild($v_2);
            if (!IsNull(oldCustomControl)) {
                for (var $v_4 = 0; $v_4 < oldCustomControl.$3_0.$S_0.length; $v_4++) {
                    var $v_5 = oldCustomControl.$3_0.$S_0[$v_4];
                    if (!isNullOrEmptyString($v_5.$B_1) && $v_5.$d_1) {
                        var $v_6 = $v_1.$3_0.$S_0[$v_4];
                        this.$3t_0($v_5, $v_6);
                        Mscrm.CustomControls.CustomControlManager
                            .updateControlPropertyList($v_1.$4_0.toString(), $v_6, false);
                    }
                }
                this.$3u_0(oldCustomControl, $v_1);
            }
            if (this.$F_0 && ($v_1.$3_0.$S_0[0]).$d_1) {
                this.$3C_0($v_1.$3_0);
            }
            var $v_3 = this.$2q_0($v_1);
            $v_1.$t_0 = $v_3;
            this.$1C_0.appendChild($v_3);
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_1.$Y_0, 'click', this.$20_0);
            this.$2K_0($v_1);
            $v_1.$Y_0.focus();
            $v_1.$Y_0.click();
            if (!IsNull(this.$z_0)) {
                this.$z_0();
            }
        }
    },

    $3t_0: function($p0, $p1) {
        if (IsNull($p0.$9_1)) {
            return;
        }
        var $v_0 = ($p0.$Q_1) ? this.$2B_0() : $p0.$B_1;
        if (isNullOrEmptyString($v_0)) {
            return;
        }
        if (IsNull($p1.$9_1)) {
            $p1.$9_1 = new Array(0);
        }
        for (var $v_1 = 0; $v_1 < $p0.$9_1.length; $v_1++) {
            if ($p0.$9_1[$v_1].$X_1 === $v_0) {
                $p0.$9_1[$v_1].parentDataSetProperty = $p1;
                $p1.$9_1.push($p0.$9_1[$v_1]);
            }
        }
    },

    $3u_0: function($p0, $p1) {
        var $v_0 = $p0.$3_0.$5_0;
        var $v_1 = $p1.$3_0.$5_0;
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            var $v_4 = this.$1q_0($v_1, $v_3.$2_0);
            if (IsNull($v_4)) {
                continue;
            }
            $v_4.$1_0 = $v_3.$1_0;
            if (isNullOrEmptyString($v_4.$L_0)) {
                $v_4.set_selectedCandidatePropertyType($v_3.$L_0);
            }
            if ($v_3.$U_0) {
                ($v_4).$C_1 = ($v_3).$C_1;
            }
            if ($v_3.$H_0) {
                ($v_4).$B_1 = ($v_3).$B_1;
                ($v_4).$16_1 = ($v_3).$16_1;
                ($v_4).$h_1 = ($v_3).$h_1;
                ($v_4).$E_1 = ($v_3).$E_1;
            }
            if ($v_3.$W_0 && ($v_4).$X_1 === ($v_3).$X_1) {
                ($v_4).$B_1 = ($v_3).$B_1;
                ($v_4).$c_1 = ($v_3).$c_1;
                ($v_4).$a_1 = ($v_3).$a_1;
                ($v_4).$b_1 = ($v_3).$b_1;
                ($v_4).$P_1 = ($v_3).$P_1;
            }
        }
    },

    $3C_0: function($p0) {
        var $v_0 = $p0.$S_0;
        if (!IsNull($v_0)) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                if ($v_2.$d_1) {
                    var $v_3 = Mscrm.CustomControls.ViewLookupProperty.createTemplate($v_2);
                    if (IsNull($v_2.$9_1)) {
                        $v_2.$9_1 = new Array(0);
                    }
                    $v_2.$9_1.push($v_3);
                    var $v_4 = Array.indexOf($p0.$5_0, $v_2);
                    Array.insert($p0.$5_0, $v_4 + $v_2.$1W_1 + $v_2.$9_1.length, $v_3);
                }
            }
        }
    },

    $4n_0: function($p0) {
        if ($p0.type.toUpperCase() === 'KEYDOWN' && !($p0.keyCode === 13 || $p0.keyCode === 32)) {
            return;
        }
        var $v_0 = Mscrm.GlobalImported.CrmUri.create('/Tools/FormEditor/Dialogs/SelectCustomControl.aspx');
        var $v_1 = new Xrm.DialogOptions();
        $v_1.width = 470;
        $v_1.height = 430;
        var $v_2 = {};
        $v_2['CandidateControlDescriptors'] = Mscrm.CustomControls.CustomControlManager.get_instance()
            .getCandidateControlDescrptors();
        $v_2['manifestType'] = this.$1m_0;
        var $v_3 = Mscrm.CustomControls.CustomControlManager.addSelectedControl;
        Xrm.Internal.openDialog($v_0.toString(), $v_1, $v_2, null, $v_3);
    },

    selectDeviceTypeForGivenFieldCustomID: function(deviceType, selectedFieldCustomControl) {
        var $v_0 = '';
        switch (deviceType) {
        case 0:
            $v_0 = selectedFieldCustomControl.$4_0 + '_' + 'phone';
            break;
        case 1:
            $v_0 = selectedFieldCustomControl.$4_0 + '_' + 'tablet';
            break;
        case 2:
            $v_0 = selectedFieldCustomControl.$4_0 + '_' + 'web';
            break;
        }
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = $get($v_0);
            $v_1.checked = true;
        }
    },

    dispose: function() {
        if (!IsNull(Mscrm.CustomControls.CustomControlManager.$l)) {
            Mscrm.CustomControls.CustomControlManager.$l = null;
        }
        this.$7_0 = null;
    },

    $2q_0: function($p0) {
        var $v_0 = (window.LOCID_UI_DIR === 'RTL') ? true : false;
        var $v_1 = document.createElement('fieldset');
        $v_1.id = this.$4w_0($p0.$4_0.toString());
        $v_1.style.display = 'none';
        if (this.$K_0) {
            $v_1.style.height = '248px';
        } else if (this.$F_0) {
            if (Mscrm.Utilities.isFirefox()) {
                $v_1.style.height = '279px';
            } else if (Mscrm.Utilities.isIE10OrHigher()) {
                $v_1.style.height = '288px';
            } else {
                $v_1.style.height = '282px';
            }
        } else {
            if (Mscrm.Utilities.isFirefox()) {
                $v_1.style.height = '340px';
            } else if (Mscrm.Utilities.isIE10OrHigher()) {
                $v_1.style.height = '344px';
            } else {
                $v_1.style.height = '345px';
            }
        }
        if (!this.$K_0 && this.$F_0 && Mscrm.Utilities.isIE10OrHigher()) {
            $v_1.style.height = '286px';
        }
        if (this.$K_0) {
            $v_1.setAttribute('class', 'customControl-fieldset');
        }
        var $v_2 = document.createElement('legend');
        var $v_3 = document.createElement('span');
        $v_3.setAttribute('class', 'customcontrol_legend_fontfamily customcontrol-controlname');
        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_3, $p0.$8_0);
        if (this.$K_0) {
            $v_2.setAttribute('class', 'entityLevelPropertyTableContainer-legend');
        } else if (this.$F_0) {
            $v_2.setAttribute('class', 'subgridPropertyTableContainer-legend');
        } else {
            $v_2.setAttribute('class', 'propertyTableContainer-legend');
        }
        if (Mscrm.Utilities.isIE10OrHigher() && (this.$K_0 || this.$F_0)) {
            $v_2.style.paddingLeft = '2px';
        }
        $v_2.title = $p0.$8_0;
        $v_2.appendChild($v_3);
        var $v_4 = document.createElement('div');
        $v_4.setAttribute('width', '100%');
        $v_4.setAttribute('class', ($v_0) ? 'customcontrolproperty-topdivele-RTL' : 'customcontrolproperty-topdivele');
        var $v_5 = document.createElement('table');
        $v_5.setAttribute('style', 'width:100%;');
        var $v_6 = document.createElement('tr');
        var $v_7 = document.createElement('div');
        $v_7.setAttribute('valign', 'top');
        var $v_8 = document.createElement('div');
        $v_8.setAttribute('style', 'padding-top:30px;');
        var $v_9 = document.createElement('div');
        $v_9.setAttribute('class', 'customcontrol_fontfamily customcontrol_compatiabletypecontainer');
        $v_9.setAttribute('id', 'customcontrolproprtyerror');
        if (this.$F_0 && Mscrm.Utilities.isIE10OrHigher()) {
            $v_9.style.marginLeft = '5px';
        }
        $p0.$T_0 = $v_9;
        var $v_A = document.createElement('div');
        $v_A.setAttribute('class', 'customcontrol-fontfamily customcontrol_compatiabletypecontainer');
        if (this.$F_0 && Mscrm.Utilities.isIE10OrHigher()) {
            $v_A.style.marginLeft = '5px';
        }
        $p0.$u_0 = $v_A;
        var $v_B = document.createElement('div');
        $v_B.setAttribute('class', 'customcontrol-fontfamily customcontrol_compatiabletypecontainer');
        if (this.$F_0 && Mscrm.Utilities.isIE10OrHigher()) {
            $v_B.style.marginLeft = '5px';
        }
        $p0.$1H_0 = $v_B;
        var $v_C = document.createElement('div');
        $v_C.setAttribute('style', 'padding-top:10px;');
        var $v_D = document.createElement('div');
        $v_D.setAttribute('class', '');
        $v_D.setAttribute('style', 'display:inline');
        var $v_E = document.createElement('div');
        $v_E.setAttribute('class', 'customcontrol-fontfamily customcontrol_compatiabletypecontainer');
        if (this.$F_0 && Mscrm.Utilities.isIE10OrHigher()) {
            $v_E.style.marginLeft = '5px';
        }
        $p0.$1I_0 = $v_E;
        $v_7.appendChild($v_8);
        $v_7.appendChild($v_C);
        var $v_F = document.createElement('div');
        if (this.$K_0) {
            if (Mscrm.Utilities.isIE10OrHigher()) {
                $v_F.setAttribute('class', 'entitycustomcontrolproperty-divele-IE');
            } else {
                $v_F.setAttribute('class', 'entitycustomcontrolproperty-divele');
            }
        } else if (this.$F_0) {
            if (Mscrm.Utilities.isIE10OrHigher()) {
                $v_F.setAttribute('rtl', $v_0);
                Sys.UI.DomElement.addCssClass($v_F, 'subgridcustomcontrolproperty-divele-IE');
            } else {
                $v_F.setAttribute('class', 'subgridcustomcontrolproperty-divele');
            }
        } else {
            $v_F.setAttribute('class', 'customcontrolproperty-divele');
        }
        $v_F.setAttribute('style', 'border-bottom: 1px solid #808080;');
        var $v_G = document.createElement('table');
        $v_G.setAttribute('width', '98%');
        $v_G.setAttribute('class', 'customcontrolproperty-diveletable');
        $v_G.setAttribute('style', 'table-layout: fixed;border-collapse:collapse');
        var $v_H = document.createElement('div');
        $v_H.setAttribute('width', '100%');
        $v_H.setAttribute('class', 'customcontrolproperty-downdivele');
        var $v_I = false;
        var $v_J = false;
        var $v_K = false;
        if (!IsNull($p0.$3_0) && !IsNull($p0.$3_0.$5_0)) {
            var $v_M = $p0.$3_0.$5_0;
            if ($p0.$3_0.$5_0.length > 2) {
                if (this.$K_0) {
                    $v_F.setAttribute('style', 'overflow-y: auto;height: 70%;');
                } else {
                    $v_F.setAttribute('style', 'overflow-y: auto;');
                }
            } else {
                $v_F.setAttribute('style', 'overflow-y: auto;height: 100px');
                $v_H.setAttribute('style', 'margin-top: 60px;');
            }
            var $v_N = document.createElement('tr');
            $v_N.setAttribute('class', 'propertytable-trstyle');
            var $v_O = document.createElement('td');
            $v_O.setAttribute('width', '40%');
            $v_O.appendChild(Mscrm.CustomControls.CustomControlUtility
                .wrapTextInGivenTagname(window.LOCID_PROPERTY_NAME, 'span'));
            $v_O.setAttribute('class', 'customcontrol-header');
            $v_O.title = window.LOCID_PROPERTY_NAME;
            var $v_P = document.createElement('td');
            $v_P.setAttribute('width', '45%');
            $v_P.appendChild(Mscrm.CustomControls.CustomControlUtility
                .wrapTextInGivenTagname(window.LOCID_PROPERTY_VALUE, 'span'));
            $v_P.setAttribute('class', 'customcontrol-header');
            $v_P.title = window.LOCID_PROPERTY_VALUE;
            var $v_Q = document.createElement('td');
            $v_Q.setAttribute('width', '15%');
            $v_Q.setAttribute('class', 'customcontrol-header');
            $v_N.appendChild($v_O);
            $v_N.appendChild($v_P);
            $v_N.appendChild($v_Q);
            $v_G.appendChild($v_N);
            for (var $v_R = 0; $v_R < $v_M.length; $v_R++) {
                var $v_S = '';
                var $v_T = '';
                $v_J = false;
                var $v_U = $v_M[$v_R];
                $v_K = ($v_U.$W_0 && ($v_U).$y_1);
                var $v_V = document.createElement('tr');
                $v_V.setAttribute('class', 'propertytable-trstyle');
                $v_V.id = $p0.$4_0.toString() + '_' + $v_U.$2_0;
                $v_V.setAttribute('associatecontrolid', $p0.$4_0.toString());
                $v_V.setAttribute('associatepropertyname', $v_U.$2_0);
                $v_V.setAttribute('associatepropertydesp', $v_U.$A_0);
                $v_V.setAttribute('associatepropertytype', $v_U.$6_0.toString());
                $v_V.setAttribute('TabIndex', 0);
                var $v_W = document.createElement('td');
                $v_W.setAttribute('width', '40%');
                if ($v_U.$H_0) {
                    var $v_Z = window.LOCID_CUSTOMCONTROLS_VIEWSTART;
                    if (!isNullOrEmptyString($v_U.$I_0)) {
                        $v_Z = $v_U.$I_0;
                    }
                    $v_W.appendChild(Mscrm.CustomControls.CustomControlUtility.wrapTextInGivenTagname($v_Z, 'span'));
                    $v_S = $v_Z;
                    $v_W.setAttribute('class', 'boundproperty');
                } else if ($v_U.isRequired) {
                    var $v_a = document.createElement('img');
                    $v_a.setAttribute('src', '/_imgs/frm_required.gif');
                    $v_a.setAttribute('alt', 'Required');
                    var $v_b = document.createElement('span');
                    Mscrm.CustomControls.CustomControlUtility.setInnerText($v_b, $v_U.$I_0);
                    $v_b.setAttribute('class', 'spanProperty');
                    $v_W.appendChild($v_b);
                    $v_S = $v_U.$I_0;
                    $v_W.appendChild($v_a);
                } else if ($v_K) {
                    var $v_c = document.createElement('a');
                    $v_c.setAttribute('href', '#');
                    $v_c.setAttribute('associatecontrolid', $p0.$4_0.toString());
                    $v_c.setAttribute('associatepropertyname', $v_U.$2_0);
                    $v_c.setAttribute('TabIndex', 0);
                    var $v_d = document.createElement('span');
                    $v_d.setAttribute('class', 'spanProperty');
                    $v_d.setAttribute('style', 'cursor:pointer');
                    var $v_e = document.createElement('u');
                    $v_e.setAttribute('associatecontrolid', $p0.$4_0.toString());
                    $v_e.setAttribute('associatepropertyname', $v_U.$2_0);
                    $v_e.title = window.LOCID_CCCONFIG_ADDLOOKUPDESC;
                    Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_e, 'click', this.$21_0);
                    Mscrm.CustomControls.CustomControlUtility.setInnerText($v_e, window.LOCID_CCCONFIG_ADDLOOKUP);
                    $v_d.appendChild($v_e);
                    $v_c.appendChild($v_d);
                    $v_W.appendChild($v_c);
                    $v_W.setAttribute('class', 'inputproperty');
                    $v_V.setAttribute('style', 'outline: none');
                    $v_V.setAttribute('TabIndex', -1);
                } else {
                    var $v_f = document.createElement('span');
                    Mscrm.CustomControls.CustomControlUtility.setInnerText($v_f, $v_U.$I_0);
                    $v_f.setAttribute('class', 'spanProperty');
                    $v_W.appendChild($v_f);
                    $v_S = $v_U.$I_0;
                    $v_W.setAttribute('class', 'inputproperty');
                }
                if ($v_U.$V_0 || $v_K) {
                    $v_W.setAttribute('class', ($v_0) ? 'inputproperty-indent-RTL' : 'inputproperty-indent');
                } else {
                    $v_W.setAttribute('rtl', $v_0);
                    Sys.UI.DomElement.addCssClass($v_W, 'customControl-rowfirstcolumn-indent');
                }
                $v_W.title = $v_S;
                var $v_X = document.createElement('td');
                $v_X.setAttribute('width', '45%');
                $v_X.setAttribute('class', 'propertyTableContainer-tdStyle');
                $v_X.id = this.$1f_0($p0.$4_0.toString(), $v_U.$2_0);
                if ($v_U.$1O_0) {
                    var $v_g = $v_U;
                    var $v_h = document.createElement('span');
                    var $v_i = document.createElement('select');
                    $v_i.className = 'ms-crm-SelectBox';
                    $v_i.setAttribute('associatecontrolid', $p0.$4_0);
                    $v_i.setAttribute('associatepropertyname', $v_g.$2_0);
                    Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_i, 'change', this.$2c_0);
                    $v_J = true;
                    if (!$v_g.isRequired) {
                        var $v_j = document.createElement('option');
                        $v_j.value = '';
                        $v_j.text = '';
                        $v_j.selected = true;
                        $v_i.appendChild($v_j);
                    }
                    for (var $v_k = 0; $v_k < $v_g.$1i_1; $v_k++) {
                        var $v_l = document.createElement('option');
                        $v_l.value = $v_g.$1T_1[$v_k];
                        $v_l.text = $v_g.$1h_1[$v_k];
                        if (!isNullOrEmptyString($v_g.$1_0) && $v_l.value === $v_g.$1_0.toString()) {
                            $v_l.selected = true;
                        }
                        $v_i.appendChild($v_l);
                    }
                    $v_T = $v_i.value;
                    $v_h.appendChild($v_i);
                    $v_X.appendChild($v_h);
                } else if ($v_U.$H_0) {
                    var $v_m = $v_U;
                    if ($v_m.$1U_1) {
                        $v_X.appendChild(Mscrm.CustomControls.CustomControlUtility
                            .wrapTextInGivenTagname($v_m.$16_1, 'span'));
                        $v_J = false;
                    } else {
                        $v_X.appendChild(Mscrm.CustomControls.CustomControlUtility
                            .wrapTextInGivenTagname(this.$33_0(), 'span'));
                        $v_m.$1_0 = this.$2B_0();
                        $v_m.$B_1 = $v_m.$1_0;
                        if (this.$K_0) {
                            $v_m.$E_1 = parseInt(this.$N_0['EntityTypeCode']);
                        } else if (this.$F_0) {
                            $v_m.$E_1 = this.$4y_0();
                        } else {
                            $v_m.$E_1 = parseInt(this.$f_0.sObjectTypeCode);
                        }
                        $v_J = true;
                    }
                    $v_I = true;
                    $v_T = Mscrm.CustomControls.CustomControlUtility.retrievePropertyValueForTitle($v_X);
                } else if (!$v_I && Mscrm.CustomControls.BoundControlProperty.isInstanceOfType($v_U)) {
                    $v_X.appendChild(Mscrm.CustomControls.CustomControlUtility
                        .wrapTextInGivenTagname(this.$2A_0(), 'span'));
                    $v_T = this.$2A_0();
                    $v_U.$1_0 = this.$2A_0();
                    $v_U.set_selectedCandidatePropertyType(this.$1m_0);
                    $v_I = true;
                    $v_J = true;
                } else if ($v_U.$q_0) {
                    var $v_n = $v_U;
                    $v_X.appendChild(Mscrm.CustomControls.CustomControlUtility
                        .wrapTextInGivenTagname($v_n.get_formData().$r_0, 'span'));
                    $v_T = $v_n.get_formData().$r_0;
                } else {
                    if (!IsNull($v_U.$1_0)) {
                        Mscrm.CustomControls.CustomControlUtility.appendPropertyValuetoElem($v_X, $v_U);
                        $v_T = Mscrm.CustomControls.CustomControlUtility.retrievePropertyValueForTitle($v_X);
                    }
                }
                $v_X.title = $v_T;
                var $v_Y = document.createElement('td');
                $v_Y.setAttribute('width', '15%');
                $v_Y.setAttribute('align', 'center');
                if (!$v_J && !$p0.$g_0 && !$v_K) {
                    var $v_o = document.createElement('img');
                    $v_o.setAttribute('src', '/_imgs/pencil.png');
                    $v_o.setAttribute('alt', window.LOCID_CONFIGURE_PROPERTY);
                    Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_o, 'click', this.$21_0);
                    $v_o.setAttribute('associatecontrolid', $p0.$4_0.toString());
                    $v_o.setAttribute('associatepropertyname', $v_U.$2_0);
                    $v_o.title = window.LOCID_CONFIGURE_PROPERTY;
                    $v_o.setAttribute('class',
                        ($v_0) ? 'customcontrolproperty-value-RTL' : 'customcontrolproperty-value');
                    Sys.UI.DomElement.addCssClass($v_o, 'ms-crm-RefreshDialogFlipImage');
                    $v_o.style.backgroundColor = 'transparent';
                    if ($v_U.isRequired) {
                        var $v_p = document.createElement('img');
                        $v_p.setAttribute('src', '/_imgs/error/notif_icn_crit16.png');
                        $v_p.setAttribute('alt', '');
                        $v_p.setAttribute('class', 'customcontrolproperty-error-image');
                        $v_p.id = $p0.$4_0.toString() + '_' + $v_U.$2_0 + '_' + 'img';
                        $v_p.title = Mscrm.CustomControls.CustomControlManager.$2J;
                        $v_Y.appendChild($v_p);
                    } else {
                        if ($v_0) {
                            $v_o.style.marginRight = '20px';
                        } else {
                            $v_o.style.marginLeft = '20px';
                        }
                    }
                    $v_o.setAttribute('TabIndex', 0);
                    $v_Y.appendChild($v_o);
                }
                $v_V.appendChild($v_W);
                $v_V.appendChild($v_X);
                $v_V.appendChild($v_Y);
                if (!$v_K) {
                    Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_V, 'click', this.$2i_0);
                    Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_V, 'mouseover', this.$2h_0);
                    Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_V, 'mouseout', this.$2g_0);
                }
                $v_G.appendChild($v_V);
            }
        }
        var $v_L = document.createElement('div');
        $v_L.setAttribute('width', '100%');
        $v_H.appendChild($v_A);
        $v_H.appendChild($v_E);
        $v_H.appendChild($v_B);
        $v_L.appendChild($v_9);
        $v_F.appendChild($v_G);
        $v_1.appendChild($v_2);
        $v_1.appendChild($v_F);
        $v_1.appendChild($v_L);
        $v_1.appendChild($v_H);
        if (!this.$F_0) {
            var $v_q = document.createElement('div');
            $v_q.setAttribute('class', 'customcontrol-fontfamily customcontrol_compatiabletypecontainer');
            $v_q.style.position = 'absolute';
            $v_q.style.bottom = '12px';
            $v_q.style.paddingLeft = '0px';
            $v_q.style.marginLeft = '-4px';
            var $v_r = document.createElement('input');
            $v_r.id = String.format('chkBoxHideOnWeb_{0}', $p0.$4_0);
            $v_r.setAttribute('type', 'checkbox');
            $v_r.setAttribute('class', 'ms-crm-CheckBox');
            $v_r.tabIndex = 0;
            $v_r.style.verticalAlign = 'middle';
            if (this.$v_0.length > 0) {
                var $v_t = this.$v_0[0];
                if ($v_t.checked) {
                    ($v_r).checked = true;
                }
            }
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_r, 'click', this.$2d_0);
            $v_r.title = window.LOCID_CCCONFIG_HIDE_ON_WEB;
            $v_q.appendChild($v_r);
            var $v_s = document.createElement('label');
            $v_s.id = String.format('labelHideOnWeb_{0}', $p0.$4_0);
            $v_s.setAttribute('for', $v_r.id);
            $v_s.tabIndex = 0;
            Mscrm.CustomControls.CustomControlUtility.setInnerText($v_s, window.LOCID_CC_HIDDEN_ONWEB);
            $v_q.appendChild($v_s);
            this.$v_0.push($v_r);
            $v_1.style.position = 'relative';
            $v_1.appendChild($v_q);
        }
        return $v_1;
    },

    $3A_0: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = (window.LOCID_UI_DIR === 'RTL') ? true : false;
        var $v_1 = document.createElement('tr');
        $v_1.id = $p4;
        $v_1.setAttribute('TabIndex', 0);
        $v_1.className = 'customcontrol-bottomline customcontrol-tbrow';
        $v_1.setAttribute('tabIndicationAttributeName', 'tabStart');
        if (Mscrm.Utilities.isIE10OrHigher()) {
            $v_1.setAttribute('style', 'line-height: 1px');
        }
        var $v_2 = document.createElement('td');
        $v_2.className = 'customcontrol-controlname';
        $v_2.setAttribute('rtl', $v_0);
        Sys.UI.DomElement.addCssClass($v_2, 'customControl-rowfirstcolumn-indent');
        var $v_3 = '';
        if ($p0.$g_0) {
            $v_3 = String.format(window.LOCID_CC_TEMPLATE_PREFIX, $p0.$8_0);
        } else {
            $v_3 = $p0.$8_0;
        }
        $v_2.appendChild(Mscrm.CustomControls.CustomControlUtility.wrapTextInGivenTagname($v_3, 'span'));
        $v_2.title = $v_3;
        var $v_4 = null;
        if (Mscrm.CustomControls.CustomControlUtility.isDataSetControlEnabled()) {
            $v_4 = document.createElement('td');
            var $v_B = document.createElement('input');
            $v_B.id = $p0.$4_0 + '_' + 'web';
            $v_B.setAttribute('type', 'radio');
            $v_B.setAttribute('isSafari', Mscrm.Utilities.isSafari());
            $v_B.setAttribute('class', 'customcontrol-InputRadio');
            $v_B.title = String.format(window.LOCID_CCCONFIG_RADIO_WEB, $p0.$8_0);
            $v_B.setAttribute('name', 'radweb');
            $v_B.setAttribute('TabIndex', 0);
            $v_B.setAttribute('tabIndicationAttributeName', 'tabWeb');
            if ($p1) {
                $v_B.setAttribute('checked', 'checked');
            }
            if ($p0.$g_0 || !this.$3O_0($p0)) {
                $v_B.disabled = true;
            }
            $v_4.appendChild($v_B);
        }
        var $v_5 = document.createElement('td');
        var $v_6 = document.createElement('input');
        $v_6.id = $p0.$4_0 + '_' + 'phone';
        $v_6.setAttribute('type', 'radio');
        $v_6.setAttribute('isSafari', Mscrm.Utilities.isSafari());
        $v_6.setAttribute('class', 'customcontrol-InputRadio');
        $v_6.title = String.format(window.LOCID_CCCONFIG_RADIO_PHONE, $p0.$8_0);
        $v_6.setAttribute('name', 'radphone');
        $v_6.setAttribute('TabIndex', 0);
        $v_6.setAttribute('tabIndicationAttributeName', 'tabPhone');
        if ($p2) {
            $v_6.setAttribute('checked', 'checked');
        }
        if ($p0.$g_0 || this.$1Q_0.toUpperCase() === 'HEADER') {
            $v_6.disabled = true;
        }
        $v_5.appendChild($v_6);
        var $v_7 = document.createElement('td');
        var $v_8 = document.createElement('input');
        $v_8.id = $p0.$4_0 + '_' + 'tablet';
        $v_8.setAttribute('type', 'radio');
        $v_8.setAttribute('isSafari', Mscrm.Utilities.isSafari());
        $v_8.setAttribute('class', 'customcontrol-InputRadio');
        $v_8.title = String.format(window.LOCID_CCCONFIG_RADIO_TABLET, $p0.$8_0);
        $v_8.setAttribute('name', 'radtablet');
        $v_8.setAttribute('TabIndex', 0);
        $v_8.setAttribute('tabIndicationAttributeName', 'tabTablet');
        if ($p3) {
            $v_8.setAttribute('checked', 'checked');
        }
        if ($p0.$g_0) {
            $v_8.disabled = true;
        }
        $v_7.appendChild($v_8);
        var $v_9 = document.createElement('td');
        $v_9.setAttribute('align', 'center');
        var $v_A = document.createElement('img');
        $v_A.setAttribute('rowId', $p4);
        $v_A.setAttribute('TabIndex', 0);
        $v_A.setAttribute('class', ($v_0) ? 'customcontrol-Delete-RTL' : 'customcontrol-Delete');
        $v_A.setAttribute('tabIndicationAttributeName', 'tabEnd');
        if ($p0.$g_0) {
            $v_A.setAttribute('src', '/_imgs/plus.png');
            $v_A.title = window.LOCID_CUSTOMCONTROL_ADD_TITLE;
            $v_A.setAttribute('alt', window.LOCID_CUSTOMCONTROL_ADD_TITLE);
        } else {
            $v_A.setAttribute('src', '/_imgs/cross.png');
            $v_A.title = window.LOCID_CUSTOMCONTROL_DELETE_TITLE;
            $v_A.setAttribute('alt', window.LOCID_CUSTOMCONTROL_DELETE_TITLE);
        }
        if (!$p0.$J_0) {
            $v_9.appendChild($v_A);
        } else {
            $v_9.innerHTML = '&nbsp;';
        }
        $v_1.appendChild($v_2);
        if (!IsNull($v_4)) {
            $v_1.appendChild($v_4);
        }
        $v_1.appendChild($v_5);
        $v_1.appendChild($v_7);
        $v_1.appendChild($v_9);
        return $v_1;
    },

    $3O_0: function($p0) {
        return $p0.$J_0 ||
        (!!$p0.$3_0 &&
            !!$p0.$3_0.$S_0 &&
            $p0.$3_0.$S_0.length > 0 &&
            ($p0.$3_0.$S_0[0]).$d_1 &&
            (!IsNull(this.$N_0) &&
                !IsNull(this.$N_0['IsControlWebEnabled']) &&
                Boolean.parse(this.$N_0['IsControlWebEnabled'].toString())) &&
            !this.$2E_0);
    },

    $4w_0: function($p0) {
        return $p0 + '_fieldset';
    },

    $1f_0: function($p0, $p1) {
        return $p0 + '_' + $p1 + '_value';
    },

    $3e_0: function($p0, $p1) {
        return $p0 + '_' + $p1 + '_img';
    },

    $2y_0: function() {
        for (var $v_0 = 0; $v_0 < this.$7_0.length; $v_0++) {
            var $v_1 = this.$7_0[$v_0];
            if (!$v_1.$J_0) {
                var $v_2 = $get($v_1.$4_0.toString());
                $v_2.removeAttribute('style');
                var $v_3 = $v_1.$t_0;
                $v_3.style.display = 'none';
            }
        }
    },

    $3U_0: function($p0) {
        if ($p0.keyCode === 38 || $p0.keyCode === 40 || $p0.keyCode === 32) {
            var $v_0 = this.$1a_0;
            var $v_1 = $v_0.rows;
            var $v_2 = '';
            var $v_3 = $p0.target;
            $v_2 = $v_3.id;
            if (!isNullOrEmptyString($v_2)) {
                this.$3P_0($p0, $v_1, $v_2);
            }
        }
        if ($p0.keyCode === 9) {
            Mscrm.CustomControls.CustomControlUtility.processTabKeyHandler($p0);
        }
        if ($p0.target.tagName === 'IMG' && ($p0.keyCode === 13 || $p0.keyCode === 32)) {
            var $v_4 = $p0.target.getAttribute('rowId').toString();
            this.$Z_0 = $get($v_4);
            this.$3R_0($p0);
            document.body.focus();
        }
    },

    $4g_0: function($p0) {
        if ($p0.keyCode === 38 || $p0.keyCode === 40 || $p0.keyCode === 32) {
            var $v_0 = '';
            var $v_1 = $p0.target;
            $v_0 = $v_1.id;
            var $v_2 = $v_1.parentNode;
            var $v_3 = $v_2.rows;
            this.$3P_0($p0, $v_3, $v_0);
        }
        if (($p0.target
                .tagName ===
                'IMG' ||
                $p0.target.tagName === 'A') &&
            ($p0.keyCode === 13 || $p0.keyCode === 32)) {
            this.$3W_0($p0);
        }
    },

    $3P_0: function($p0, $p1, $p2) {
        var $v_0;
        var $v_1 = 0;
        if (!IsNull($p1)) {
            for (var $v_2 = 0; $v_2 < $p1.length; $v_2++) {
                var $v_3 = $p1[$v_2];
                if ($v_3.id.toString() === $p2) {
                    if ($p0.keyCode === 38) {
                        $v_1 = $v_2 - 1;
                    } else if ($p0.keyCode === 40) {
                        $v_1 = $v_2 + 1;
                    } else if ($p0.keyCode === 32) {
                        $v_1 = $v_2;
                    }
                    $v_0 = $p1[$v_1];
                    if (!IsNull($v_0)) {
                        $v_0.focus();
                        $v_0.click();
                        $p0.stopPropagation();
                        $p0.preventDefault();
                    }
                    break;
                }
            }
        }
    },

    $3b_0: function() {
        this.$19_0 = this.createExistingCustomControlsFromEntityXmlSnippet(false);
        var $v_0 = this.$7_0.length + this.$19_0.length;
        var $v_1 = new Array($v_0);
        $v_1[0] = this.$7_0[0];
        var $v_2 = 1;
        for (var $v_3 = 0; $v_3 < this.$19_0.length; $v_3++) {
            $v_1[$v_2] = this.$19_0[$v_3];
            $v_2++;
        }
        for (var $v_4 = 1; $v_4 < this.$7_0.length; $v_4++) {
            $v_1[$v_2] = this.$7_0[$v_4];
            $v_2++;
        }
        this.$7_0 = $v_1;
    },

    $3M_0: function($p0) {
        if (IsNull($p0)) {
            return;
        }
        var $v_0 = this.$3A_0($p0,
            this.isRadiobuttonChecked($p0.$G_0, 2),
            this.isRadiobuttonChecked($p0.$G_0, 0),
            this.isRadiobuttonChecked($p0.$G_0, 1),
            $p0.$4_0.toString());
        this.$M_0[$p0.$4_0.toString()] = $p0;
        $p0.$Y_0 = $v_0;
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_0, 'mouseover', this.$1R_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_0, 'mouseout', this.$22_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_0, 'click', this._onGridRowClickHandler);
        this.$1a_0.appendChild($v_0);
    },

    $3L_0: function($p0) {
        if (!IsNull($p0)) {
            if (!$p0.$J_0) {
                var $v_0 = this.$2q_0($p0);
                $p0.$t_0 = $v_0;
                this.$1C_0.appendChild($v_0);
                this.$2K_0($p0);
            }
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($p0.$Y_0, 'click', this.$20_0);
        }
    },

    $4r_0: function() {
        var $v_0 = Mscrm.GlobalImported.CrmUri.create('/Tools/FormEditor/Dialogs/CustomControlDataDialog.aspx');
        $v_0.get_query()['dataType'] = this.$1m_0;
        if (this.$F_0) {
            $v_0.get_query()['isDataset'] = true;
            if (!this.$K_0) {
                $v_0.get_query()['etc'] = this.$1L_0;
            } else {
                var $v_3 = Mscrm.GlobalImported.CrmUri.create(window.location.href);
                if (!isNullOrEmptyString($v_3.get_query()['id'])) {
                    $v_0.get_query()['entityid'] = $v_3.get_query()['id'];
                } else if (!isNullOrEmptyString($v_3.get_query()['entityId'])) {
                    $v_0.get_query()['entityid'] = $v_3.get_query()['entityId'];
                } else {
                    $v_0.get_query()['entityid'] = $v_3.get_query()['entityid'];
                }
                $v_0.get_query()['isEntityDataset'] = true;
            }
        } else {
            $v_0.get_query()['etc'] = this.$f_0.sObjectTypeCode;
        }
        var $$t_5 = this;
        var $v_1 = function($p1_0) {
            $$t_5.initializeControlDescriptors($p1_0);
        };
        var $v_2 = !this.$K_0 && !isOutlookHostedWindow();
        Mscrm.CustomControls.CustomControlUtility.requestPage($v_0.toString(), $v_1, $v_2, null);
    },

    $3N_0: function($p0) {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Mscrm.CustomControls.ControlDescriptor))();
        this.$N_0 = Mscrm.CustomControls.CustomControlUtility.parseJson($p0);
        if (IsNull(this.$N_0['ErrorInfo'])) {
            this.$2O_0 = true;
            this.$2L_0 = this.$N_0['CustomControlDescriptors'];
            for (var $$arr_2 = this.$2L_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_1 = $$arr_2[$$idx_4];
                var $v_2 = this.$2r_0($v_1);
                $v_0.add($v_2);
            }
        } else {
            this.$2O_0 = false;
        }
        if ($v_0.get_Count() > 1) {
            $v_0.sort(this.$$d_$3s_0);
        }
        return $v_0.toArray();
    },

    $3s_0: function($p0, $p1) {
        var $v_0 = $p0;
        var $v_1 = $p1;
        return $v_0.$8_0.localeCompare($v_1.$8_0);
    },

    $2r_0: function($p0) {
        var $v_0 = new Mscrm.CustomControls.ControlDescriptor();
        $v_0.$1j_0 = $p0;
        $v_0.$4_0 = new Microsoft.Crm.Client.Core.Framework
            .Guid(CrmEncodeDecode.CrmHtmlDecode(($p0['CustomControlId'])));
        $v_0.$8_0 = CrmEncodeDecode.CrmHtmlDecode($p0['CustomControlName']);
        $v_0.$1b_0 = CrmEncodeDecode.CrmHtmlDecode($p0['CustomControlFullName']);
        if (!isNullOrEmptyString($p0['ControlDescription'])) {
            $v_0.$o_0 = CrmEncodeDecode.CrmHtmlDecode($p0['ControlDescription']);
        }
        $v_0.$11_0 = CrmEncodeDecode.CrmHtmlDecode($p0['CustomControlVersion']);
        $v_0.$i_0 = (isNullOrEmptyString($p0['CustomControlPreviewImagePath']))
            ? ''
            : CrmEncodeDecode.CrmHtmlDecode($p0['CustomControlPreviewImagePath']);
        if (isNullOrEmptyString($v_0.$i_0)) {
            $v_0.$i_0 = window.CDNURL + '/_imgs/placeholders/placeholder_cog.png';
        }
        $v_0.$m_0 = new Array(0);
        if (!isNullOrEmptyString($p0['EditMode']) && Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($p0['EditMode']))) {
            $v_0.$m_0.push(1);
        }
        if (!isNullOrEmptyString($p0['ReadMode']) && Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($p0['ReadMode']))) {
            $v_0.$m_0.push(0);
        }
        var $v_1 = $p0['ControlProperties'];
        var $v_2 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Mscrm.CustomControls.ControlProperty))();
        var $v_3 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Mscrm.CustomControls.ControlProperty))();
        for (var $$arr_5 = $v_1, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_4 = $$arr_5[$$idx_7];
            var $v_5;
            var $v_6 = (isNullOrEmptyString($v_4['IsGroupsNode']))
                ? false
                : Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($v_4['IsGroupsNode']));
            var $v_7 = (isNullOrEmptyString($v_4['IsPhantomDatasetProperty']))
                ? false
                : Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($v_4['IsPhantomDatasetProperty']));
            if ($v_6) {
                $v_5 = new Mscrm.CustomControls.GroupsNodeControlProperty();
                var $v_9 = (isNullOrEmptyString($v_4['GroupNodesNumber']))
                    ? 0
                    : Number.parseInvariant(CrmEncodeDecode.CrmHtmlDecode($v_4['GroupNodesNumber']));
                ($v_5).$1i_1 = $v_9;
                ($v_5).$1T_1 = new Array(0);
                ($v_5).$1h_1 = new Array(0);
                for (var $v_A = 0; $v_A < $v_9; $v_A++) {
                    var $v_B = (isNullOrEmptyString($v_4[String.format('Group_{0}_Name', $v_A)]))
                        ? ''
                        : CrmEncodeDecode.CrmHtmlDecode($v_4[String.format('Group_{0}_Name', $v_A)]);
                    ($v_5).$1T_1.push($v_B);
                    var $v_C = (isNullOrEmptyString($v_4[String.format('Group_{0}_DisplayName', $v_A)]))
                        ? ''
                        : CrmEncodeDecode.CrmHtmlDecode($v_4[String.format('Group_{0}_DisplayName', $v_A)]);
                    ($v_5).$1h_1.push($v_C);
                }
            } else if (!$v_7) {
                var $v_D = CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyUsage']);
                if ($v_D.toUpperCase() === 'INPUT') {
                    if (($v_4['PropertyCompatibleTypes']) === 'Form.Card') {
                        $v_5 = new Mscrm.CustomControls.FormCardProperty();
                    } else if (($v_4['PropertyCompatibleTypes']) === 'Form.Main') {
                        $v_5 = new Mscrm.CustomControls.FormMainProperty();
                    } else {
                        $v_5 = new Mscrm.CustomControls.InputControlProperty();
                    }
                } else {
                    $v_5 = new Mscrm.CustomControls.BoundControlProperty();
                }
            } else {
                $v_5 = new Mscrm.CustomControls.DatasetNodeControlProperty();
                ($v_5).$1W_1 = (isNullOrEmptyString($v_4['PropertySetLength']))
                    ? 0
                    : Number.parseInvariant(CrmEncodeDecode.CrmHtmlDecode($v_4['PropertySetLength']));
                $v_5.$6_0 = ['Grid'];
                ($v_5).$1U_1 = (isNullOrEmptyString($v_4['IsConfigurationNeeded']))
                    ? false
                    : Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($v_4['IsConfigurationNeeded']));
                ($v_5).$d_1 = (isNullOrEmptyString($v_4['IsDatasetEditable']))
                    ? false
                    : Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($v_4['IsDatasetEditable']));
                ($v_5).$Q_1 = (!$v_3.get_Count());
                $v_3.add($v_5);
            }
            $v_5.$2_0 = (isNullOrEmptyString($v_4['PropertyName']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyName']);
            $v_5.$I_0 = (isNullOrEmptyString($v_4['PropertyDisplayName']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyDisplayName']);
            $v_5.$A_0 = (isNullOrEmptyString($v_4['PropertyDescription']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyDescription']);
            $v_5.$j_0 = (isNullOrEmptyString($v_4['PropertyOfSameType']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyOfSameType']);
            $v_5.isRequired = (isNullOrEmptyString($v_4['PropertyRequired']))
                ? false
                : Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyRequired']));
            if (!isNullOrEmptyString($v_4['PropertyDefaultValue'])) {
                ($v_5).$C_1 = true;
                $v_5.set_selectedCandidatePropertyType((IsNull($v_4['PropertyCompatibleTypes']))
                    ? ''
                    : CrmEncodeDecode.CrmHtmlDecode(($v_4['PropertyCompatibleTypes'])).split(',')[0]);
            }
            $v_5.$1_0 = ((Mscrm.CustomControls.InputControlProperty.isInstanceOfType($v_5)) &&
                    isNullOrEmptyString($v_4['PropertyDefaultValue']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyDefaultValue']);
            $v_5.$13_0 = (isNullOrEmptyString($v_4['PropertyDefaultValue']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['PropertyDefaultValue']);
            $v_5.$6_0 = (IsNull($v_4['PropertyCompatibleTypes']))
                ? new Array(0)
                : CrmEncodeDecode.CrmHtmlDecode(($v_4['PropertyCompatibleTypes'])).split(',');
            $v_5.$n_0 = (isNullOrEmptyString($v_4['PropertySetParentDatasetName']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['PropertySetParentDatasetName']);
            $v_5.$V_0 = !isNullOrEmptyString($v_5.$n_0);
            $v_5.$1F_0 = (isNullOrEmptyString($v_4['ParentGroupName']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['ParentGroupName']);
            $v_5.$15_0 = (isNullOrEmptyString($v_4['GrandParentGroupsName']))
                ? ''
                : CrmEncodeDecode.CrmHtmlDecode($v_4['GrandParentGroupsName']);
            var $v_8 = $v_4['PropertyOptions'];
            if (!IsNull($v_8)) {
                for (var $$arr_I = $v_8, $$len_J = $$arr_I.length, $$idx_K = 0; $$idx_K < $$len_J; ++$$idx_K) {
                    var $v_E = $$arr_I[$$idx_K];
                    var $v_F = new Mscrm.CustomControls.Options();
                    $v_F.$28_0 = (isNullOrEmptyString($v_E['OptionName']))
                        ? ''
                        : CrmEncodeDecode.CrmHtmlDecode($v_E['OptionName']);
                    $v_F.$1e_0 = (isNullOrEmptyString($v_E['OptionValue']))
                        ? ''
                        : CrmEncodeDecode.CrmHtmlDecode($v_E['OptionValue']);
                    $v_F.$1u_0 = (isNullOrEmptyString($v_E['OptionDisplayName']))
                        ? ''
                        : CrmEncodeDecode.CrmHtmlDecode($v_E['OptionDisplayName']);
                    $v_F.$1t_0 = (isNullOrEmptyString($v_E['OptionDescription']))
                        ? ''
                        : CrmEncodeDecode.CrmHtmlDecode($v_E['OptionDescription']);
                    $v_F.$27_0 = (isNullOrEmptyString($v_E['OptionDefaultSelect']))
                        ? ''
                        : CrmEncodeDecode.CrmHtmlDecode($v_E['OptionDefaultSelect']);
                    $v_5.get_staticOptions().push($v_F);
                }
            }
            if ($v_5.$1O_0 && $v_5.isRequired && ($v_5).$1i_1 > 0) {
                $v_5.$13_0 = ($v_5).$1T_1[0];
                $v_5.$1_0 = $v_5.$13_0;
            }
            if (Mscrm.CustomControls.CustomControlUtility.isPotentialLookupProperty($v_5.$6_0)) {
                ($v_5).$Q_1 = this.$4N_0($v_2);
            }
            $v_2.add($v_5);
        }
        $v_0.$5_0 = $v_2.toArray();
        $v_0.$S_0 = $v_3.toArray();
        for (var $v_G = 0; $v_G < $v_0.$5_0.length; $v_G++) {
            for (var $v_H = 0; $v_H < $v_0.$5_0.length; $v_H++) {
                var $v_I = $v_0.$5_0[$v_G];
                var $v_J = $v_0.$5_0[$v_H];
                if ($v_I.$j_0 === $v_J.$2_0) {
                    $v_J.get_childProperties().push($v_I);
                }
                if ($v_I.$15_0 === $v_J.$2_0) {
                    $v_I.$1J_0 = $v_J;
                }
            }
        }
        return $v_0;
    },

    $4N_0: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.get_Count(); $v_0++) {
            if (!$p0.get_item($v_0).$U_0) {
                return false;
            }
        }
        return true;
    },

    $2A_0: function() {
        var $v_0 = '';
        if (!IsNull(this.$f_0)) {
            $v_0 = this.$f_0.sActualDBName;
        } else if (!IsNull(this.$2H_0)) {
            $v_0 = this.$2H_0.Id;
        }
        return $v_0;
    },

    $33_0: function() {
        var $v_0 = '';
        var $v_1 = $get('ViewComboSelector');
        if (IsNull($v_1)) {
            $v_1 = $get('DefaultViewCombo');
        }
        if (!IsNull($v_1) && $v_1.options.length > 0) {
            $v_0 = $v_1.options[$v_1.selectedIndex].getAttribute('title').toString();
        }
        return $v_0;
    },

    $2B_0: function() {
        if (!IsNull($get('ViewComboSelector'))) {
            return ($get('ViewComboSelector')).value;
        }
        if (!IsNull($get('DefaultViewCombo'))) {
            return ($get('DefaultViewCombo')).value;
        }
        return Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString();
    },

    $4y_0: function() {
        if (!IsNull($get('DataSourceCombo'))) {
            return parseInt(($get('DataSourceCombo')).value.split(':')[0]);
        }
        return -1;
    },

    $4v_0: function() {
        var $v_0 = '';
        if (!IsNull(this.$f_0)) {
            $v_0 = this.$f_0.sFldExpFor;
        }
        return $v_0;
    },

    $44_0: function() {
        if (this.$1Q_0.toUpperCase() === 'FOOTER') {
            return true;
        }
        return false;
    },

    $2x_0: function($p0, $p1) {
        var $v_0 = null;
        if (this.$1Q_0.toUpperCase() === 'HEADER') {
            $v_0 = XUI.Xml.SelectSingleNode($p0,
                'entity/form/header/rows/row/cell/control[@uniqueid =\'' + this.$O_0 + '\']',
                null);
        } else if (this.$1Q_0.toUpperCase() === 'FOOTER') {
            $v_0 = XUI.Xml.SelectSingleNode($p0,
                'entity/form/footer/rows/row/cell/control[@uniqueid =\'' + this.$O_0 + '\']',
                null);
        } else {
            $v_0 = XUI.Xml.SelectSingleNode($p0,
                'entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@uniqueid =\'' +
                this.$O_0 +
                '\']',
                null);
        }
        return $v_0;
    },

    $2K_0: function($p0) {
        if (!IsNull($p0) && !IsNull($p0.$3_0)) {
            var $v_0 = $p0.$3_0.$5_0;
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                if (!isNullOrEmptyString($v_2.$15_0)) {
                    var $v_3 = $v_2.$1J_0.$1_0 === $v_2.$1F_0;
                    var $v_4 = this.$2w_0($p0.$4_0.toString(), $v_2.$2_0);
                    $v_4.style.display = ($v_3) ? 'table-row' : 'none';
                    if ($v_3) {
                        $v_4.style.borderTop = '2px solid #FFFFFF';
                    }
                }
            }
        }
    },

    updatePrimaryEntity: function() {
        if (!this.$F_0 || this.$K_0) {
            return;
        }
        var $v_0 = Mscrm.GlobalImported.CrmUri.create('/Tools/FormEditor/Dialogs/CustomControlDataDialog.aspx');
        $v_0.get_query()['dataType'] = 'Grid';
        $v_0.get_query()['isDataset'] = true;
        var $v_1 = this.$2B_0();
        if ($v_1 !== this.$1g_0) {
            this.$56_0();
            this.$1g_0 = $v_1;
        }
        var $v_2 = ($get('DataSourceCombo')).value.split(':')[0];
        if ($v_2 === this.$1L_0) {
            return;
        }
        this.$1L_0 = $v_2;
        if (!isNullOrEmptyString($v_2)) {
            $v_0.get_query()['etc'] = this.$1L_0;
        }
        var $$t_5 = this;
        var $v_3 = function($p1_0) {
            Mscrm.CustomControls.CustomControlManager.get_instance().$4o_0($p1_0);
        };
        Mscrm.CustomControls.CustomControlUtility.requestPage($v_0.toString(), $v_3, false, null);
    },

    $56_0: function() {
        for (var $v_0 = 0; $v_0 < this.$7_0.length; $v_0++) {
            var $v_1 = this.$7_0[$v_0];
            if (!$v_1.$J_0 && !IsNull($v_1.$3_0.$S_0) && $v_1.$3_0.$S_0.length > 0) {
                var $v_2 = $v_1.$3_0.$S_0[0];
                $v_2.$1_0 = this.$2B_0();
                ($v_2).$B_1 = $v_2.$1_0;
                var $v_3 = this.$1f_0($v_1.$4_0.toString(), $v_2.$2_0);
                var $v_4 = $get($v_3);
                if (!IsNull($v_4)) {
                    Mscrm.CustomControls.CustomControlUtility.setInnerText($v_4, this.$33_0());
                    $v_4.title = this.$33_0();
                }
                if (!$v_1.$g_0 && ($v_2).$d_1) {
                    Mscrm.CustomControls.CustomControlManager.resetViewLookupPropertiesList($v_1.$4_0.toString(), $v_2);
                }
            }
        }
    },

    $4o_0: function($p0) {
        var $v_0 = new Array(0);
        for (var $v_1 = this.$7_0.length - 1; $v_1 > 0; $v_1--) {
            $v_0.push(this.$7_0[$v_1].$4_0.toString());
        }
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            this.$Z_0 = $get($v_0[$v_2]);
            this.$3H_0($v_0[$v_2]);
        }
        this.$1X_0 = null;
        this.$N_0 = null;
        this.$19_0 = new Array(0);
        this.$1X_0 = this.$3N_0($p0);
        this.$3b_0();
        for (var $v_3 = 1; $v_3 < this.$7_0.length; $v_3++) {
            var $v_4 = this.$7_0[$v_3];
            if (!IsNull($v_4) && !$v_4.$J_0) {
                $v_4.$3_0 = this.$3F_0($v_4);
            }
            this.$3M_0($v_4);
            this.$3L_0($v_4);
        }
        this.$39_0();
    },

    $2w_0: function($p0, $p1) {
        var $v_0 = $get($p0 + '_' + $p1);
        return $v_0;
    },

    $39_0: function() {
        if (!IsNull(this.$N_0) && !IsNull(this.$N_0['PrimaryEntityAttributesTypeMap'])) {
            var $v_0 = this.$N_0['EntityTypeCode'];
            this.$1Y_0[$v_0] = this.$N_0['PrimaryEntityAttributesTypeMap'];
        }
    },

    $38_0: function($p0) {
        var $v_0 = String.format('{0}', $p0);
        if (IsNull(this.$1Y_0[$v_0])) {
            var $v_1 = Mscrm.GlobalImported.CrmUri.create('/Tools/FormEditor/Dialogs/CustomControlDataDialog.aspx');
            $v_1.get_query()['viewetc'] = $v_0;
            var $$t_7 = this;
            var $v_2 = function($p1_0) {
                var $v_3 = Mscrm.CustomControls.CustomControlUtility.parseJson($p1_0);
                var $v_4 = $v_3['PrimaryEntityAttributesTypeMap'];
                $$t_7.$1Y_0[$v_0] = $v_4;
            };
            Mscrm.CustomControls.CustomControlUtility.requestPage($v_1.toString(), $v_2, false, null);
        }
    },

    $3j_0: function($p0, $p1, $p2) {
        if (isNullOrEmptyString($p0.$B_1)) {
            return;
        }
        var $v_0 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p2, 'cell');
        var $v_1 = $p2.createAttribute('entityName');
        $v_1.value = $p0.$10_1;
        $v_0.attributes.setNamedItem($v_1);
        var $v_2 = $p2.createAttribute('viewId');
        $v_2.value = $p0.$X_1;
        $v_0.attributes.setNamedItem($v_2);
        var $v_3 = $p2.createAttribute('attributeName');
        $v_3.value = $p0.$k_1;
        $v_0.attributes.setNamedItem($v_3);
        this.$25_0('DefaultViewId', $p0.$B_1, $v_0, $p2);
        this.$25_0('FilterRelationshipName', $p0.$c_1, $v_0, $p2);
        this.$25_0('DependentAttributeName', $p0.$a_1, $v_0, $p2);
        this.$25_0('DependentAttributeType', $p0.$b_1, $v_0, $p2);
        var $v_4 = (!IsNull($p0.$P_1)) ? String.format('{0}', $p0.$P_1) : 'false';
        this.$25_0('AllowFilterOff', $v_4, $v_0, $p2);
        $p1.appendChild($v_0);
    },

    $25_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement($p3, $p0);
        if (!isNullOrEmptyString($p1)) {
            XUI.Xml.SetText($v_0, $p1);
            $p2.appendChild($v_0);
        }
    },

    $55_0: function($p0) {
        var $v_0 = $p0.$S_0;
        for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if (!IsNull($v_1.$9_1)) {
                var $v_2 = $v_1.$9_1[0].$R_1;
                var $v_3 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
                for (var $$arr_8 = $v_1.$9_1, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
                    var $v_6 = $$arr_8[$$idx_A];
                    if (!$v_3.contains($v_6.$k_1)) {
                        $v_3.add($v_6.$k_1);
                    }
                }
                var $v_4 = Mscrm.GlobalImported.CrmUri.create('/Tools/FormEditor/Dialogs/CustomControlDataDialog.aspx');
                $v_4.get_query()['lcid'] = Xrm.Page.context.getUserLcid();
                $v_4.get_query()['etc'] = $v_2;
                $v_4.get_query()['attributeList'] = $v_3.toArray().toString();
                $v_4.get_query()['isForViewLookup'] = true;
                var $$t_P = this;
                var $v_5 = function($p1_0) {
                    var $v_7 = Mscrm.CustomControls.CustomControlUtility.parseJson($p1_0);
                    if (IsNull($v_7['ErrorInfo'])) {
                        var $v_8 = $v_7['ViewLookupData'];
                        var $v_9 = {};
                        for (var $$arr_H = $v_8, $$len_I = $$arr_H.length, $$idx_J = 0; $$idx_J < $$len_I; ++$$idx_J) {
                            var $v_A = $$arr_H[$$idx_J];
                            var $$dict_M = $v_A;
                            for (var $$key_N in $$dict_M) {
                                var $v_B = { key: $$key_N, value: $$dict_M[$$key_N] };
                                $v_9[$v_B.key] = $v_B.value;
                            }
                        }
                        $$t_P.$57_0($p0, $v_1, $v_9);
                    }
                };
                Mscrm.CustomControls.CustomControlUtility.requestPage($v_4.toString(), $v_5, false, null);
            }
        }
    },

    $57_0: function($p0, $p1, $p2) {
        if (!IsNull($p1.$9_1)) {
            for (var $$arr_3 = $p1.$9_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_0 = $$arr_3[$$idx_5];
                var $v_1 = CrmEncodeDecode.CrmHtmlEncode($v_0.$k_1);
                if ((($v_1) in $p2)) {
                    var $v_2 = CrmEncodeDecode.CrmHtmlDecode($p2[$v_1]);
                    var $v_3 = $v_2;
                    if ($p1.$Q_1 && $v_0.$R_1 && !isNullOrEmptyString($v_0.$X_1)) {
                        $v_3 = String.format('{0} ({1})',
                            $v_2,
                            Mscrm.CustomControls.CustomControlUtility
                            .getViewNameByEntityTypeCode($v_0.$R_1, $v_0.$X_1));
                    }
                    $v_0.$1K_1 = $v_2;
                    $v_0.$I_0 = String.format('{0} {1}', window.LOCID_CCCONFIG_VIEWLOOKUPPREFIX, $v_3);
                }
            }
        }
        Mscrm.CustomControls.CustomControlManager.updateControlPropertyList($p0.$4_0.toString(), $p1, false, $p0);
    },

    $4J_0: function($p0, $p1, $p2) {
        var $v_0 = this.$N_0['EntityTypeCode'];
        var $v_1 = this.$N_0['PrimaryEntityAttributesTypeMap'];
        var $v_2 = '';
        var $v_3 = 0;
        if ($p0.$V_0) {
            var $v_4 = this.$1q_0($p1.$5_0, $p0.$n_0);
            $v_3 = $v_4.$E_1;
        }
        if ($v_3 !== -1 && $v_3.toString() !== $v_0 && $v_3) {
            Mscrm.CustomControls.CustomControlManager.get_instance().$38_0($v_3);
            $v_1 = this.$1Y_0[$v_3.toString()];
        }
        var $$dict_E = $v_1;
        for (var $$key_F in $$dict_E) {
            var $v_5 = { key: $$key_F, value: $$dict_E[$$key_F] };
            var $v_6 = $v_5.value.toString().split(',');
            for (var $$arr_A = $v_6, $$len_B = $$arr_A.length, $$idx_C = 0; $$idx_C < $$len_B; ++$$idx_C) {
                var $v_7 = $$arr_A[$$idx_C];
                if ($v_7 === $p2) {
                    $v_2 = $v_5.key;
                    break;
                }
            }
            if ($v_2 !== '') {
                break;
            }
        }
        return $v_2;
    }
}


Mscrm.CustomControls.CustomControlValidation = function() {
}
Mscrm.CustomControls.CustomControlValidation.$3h = function($p0, $p1) {
    var $v_0 = true;
    $p1.val = '';
    if (Mscrm.NumberUtility.locStringToInt($p0) > 2147483647 ||
        Mscrm.NumberUtility.locStringToInt($p0) < -2147483648 ||
        isNaN(Mscrm.NumberUtility.locStringToInt($p0))) {
        $v_0 = false;
        $p1.val = String.format(window.LOCID_NUMBER_RANGE_MASK, -2147483648, 2147483647);
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlValidation.$5C = function($p0, $p1) {
    var $v_0 = true;
    $p1.val = '';
    var $v_1 = '^[-+]?\\d*\\.?\\d*$';
    var $v_2 = new RegExp($v_1);
    $v_0 = $v_2.test($p0);
    if (!$v_0) {
        $p1.val = window.LOCID_INVALID_DURATION;
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlValidation.$59 = function($p0, $p1) {
    var $v_0 = true;
    $p1.val = '';
    try {
        var $v_1 = Mscrm.CustomControls.CustomControlValidation.parseISO8601Date($p0);
        if (!IsNull($v_1) && !isNaN($v_1.getDate())) {
            $v_0 = true;
        } else {
            $v_0 = false;
        }
    } catch ($v_2) {
        $v_0 = false;
    }
    if (!$v_0) {
        $p1.val = window.LOCID_INVALID_DATE;
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlValidation.parseISO8601Date = function(dateString) {
    var $v_0;
    var $v_1 = parseInt(dateString.substr(0, 4), 10);
    var $v_2 = parseInt(dateString.substr(5, 2), 10);
    var $v_3 = parseInt(dateString.substr(8, 2), 10);
    var $v_4 = parseInt(dateString.substr(11, 2), 10);
    var $v_5 = parseInt(dateString.substr(14, 2), 10);
    var $v_6 = parseInt(dateString.substr(17, 2), 10);
    if (dateString.length > 10) {
        $v_0 = new Date($v_1, $v_2 - 1, $v_3, $v_4, $v_5, $v_6);
    } else {
        $v_0 = new Date($v_1, $v_2 - 1, $v_3);
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlValidation.$58 = function($p0, $p1) {
    var $v_0 = true;
    $p1.val = '';
    try {
        var $v_1 = Mscrm.CustomControls.CustomControlValidation.parseISO8601Date($p0);
        if (!IsNull($v_1) && !isNaN($v_1.getDate())) {
            $v_0 = true;
        } else {
            $v_0 = false;
        }
    } catch ($v_2) {
        $v_0 = false;
    }
    if (!$v_0) {
        $p1.val = window.LOCID_INVALID_DATE_TIME;
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlValidation.$5B = function($p0, $p1) {
    var $v_0 = '^[^@\\s\\\"<>)(\\[\\]:;,]+@[^@\\s\\\"<>)(\\[\\]:;,]+$';
    $p1.val = '';
    var $v_1 = new RegExp($v_0);
    var $v_2 = $v_1.test($p0);
    if (!$v_2) {
        $p1.val = window.LOCID_INVALID_EMAIL;
    }
    return $v_2;
}
Mscrm.CustomControls.CustomControlValidation.$35 = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = true;
    $p1.val = '';
    var $v_1 = $p0.toString().split('.');
    var $v_2 = Mscrm.CustomControls.CustomControlValidation.getProcessedValue($p0, $p4);
    if ($v_2 > $p3 || $v_2 < $p2 || isNaN($v_2)) {
        $v_0 = false;
        $p1.val = String.format(window.LOCID_FLOAT_RANGE_MASK,
            Mscrm.NumberUtility.addFormatting($p2, $p4, true),
            Mscrm.NumberUtility.addFormatting($p3, $p4, true));
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlValidation.getProcessedValue = function(input, precision) {
    var $v_0 = 1;
    var $v_1 = Mscrm.NumberUtility.locStringToFloat(input);
    if (Object.getType($v_1) === Number && !isNaN($v_1)) {
        if (!IsNull(precision) && precision >= 0) {
            for (var $v_2 = 0; $v_2 < precision; $v_2++) {
                $v_0 *= 10;
            }
            $v_1 = Math.round($v_1 * $v_0) / $v_0;
        }
    }
    return $v_1;
}
Mscrm.CustomControls.CustomControlValidation.validateStaticType = function(value, staticValueType, errorMessage) {
    switch (staticValueType) {
    case 'Whole.Language':
    case 'Whole.TimeZone':
    case 'Whole':
        return Mscrm.CustomControls.CustomControlValidation.$3h(value, errorMessage);
    case 'Whole.None':
        return Mscrm.CustomControls.CustomControlValidation.$3h(value, errorMessage);
    case 'Whole.Duration':
        return Mscrm.CustomControls.CustomControlValidation.$5C(value, errorMessage);
    case 'DateAndTime.DateOnly':
        return Mscrm.CustomControls.CustomControlValidation.$59(value, errorMessage);
    case 'DateAndTime.DateAndTime':
        return Mscrm.CustomControls.CustomControlValidation.$58(value, errorMessage);
    case 'Decimal':
    case 'decimal':
        return Mscrm.CustomControls.CustomControlValidation.$35(value, errorMessage, -100000000000, 100000000000, 7);
    case 'SingleLine.Email':
        return Mscrm.CustomControls.CustomControlValidation.$5B(value, errorMessage);
    case 'FP':
        return Mscrm.CustomControls.CustomControlValidation.$35(value, errorMessage, -100000000000, 100000000000, 5);
    case 'Currency':
        return Mscrm.CustomControls.CustomControlValidation
            .$35(value, errorMessage, -922337203685477, 922337203685477, 4);
    default:
        errorMessage.val = '';
        return true;
    }
}


Mscrm.CustomControls.CustomControlUtility = function() {
}
Mscrm.CustomControls.CustomControlUtility.get_existingTableSelectRow = function() {
    return Mscrm.CustomControls.CustomControlUtility.$1Z;
}
Mscrm.CustomControls.CustomControlUtility.parseJson = function(json) {
    if (json.startsWith('while(1);')) {
        json = json.substr(9);
    }
    try {
        return JSON.parse(json);
    } catch ($v_0) {
    }
    return null;
}
Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement = function(element, eventName, handler) {
    if (!IsNull(element) &&
        !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(eventName) &&
        eventName !== 'focus') {
        $addHandler(element, eventName, handler);
    }
}
Mscrm.CustomControls.CustomControlUtility.addHandlerToWindow = function(eventName, handler) {
    $addHandler(window, eventName, handler);
}
Mscrm.CustomControls.CustomControlUtility.removeHandlerFromDomElement = function(element, eventName, handler) {
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(eventName) && eventName !== 'focus') {
        if (Mscrm.CustomControls.CustomControlUtility.hasDomElementContainTheHandlersCollection(element)) {
            if (Mscrm.CustomControls.CustomControlUtility.$4M(element, eventName)) {
                $removeHandler(element, eventName, handler);
            }
        }
    }
}
Mscrm.CustomControls.CustomControlUtility.$4M = function($p0, $p1) {
    var $v_0 = false;
    if (!IsNull($p0)) {
        $v_0 = !IsNull($p0._events[$p1]);
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.hasDomElementContainTheHandlersCollection = function(element) {
    var $v_0 = false;
    if (!IsNull(element)) {
        $v_0 = !IsNull(element._events);
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.onExistingTableRowClick = function(evt) {
    Mscrm.CustomControls.CustomControlUtility.$1Z = Mscrm.CustomControls.CustomControlUtility
        .handleRowClick(evt, Mscrm.CustomControls.CustomControlUtility.$1Z);
    var $v_0 = evt.target;
    if (!IsNull($v_0) &&
        $v_0.tagName.toUpperCase() === 'INPUT' &&
        !isNullOrEmptyString($v_0.getAttribute('type')) &&
        ($v_0.getAttribute('type')).toUpperCase() === 'RADIO') {
        return;
    }
    Mscrm.CustomControls.CustomControlUtility.$1Z.focus();
}
Mscrm.CustomControls.CustomControlUtility.onExistingPropertyTableRowClick = function(evt) {
    Mscrm.CustomControls.CustomControlUtility.$2N = Mscrm.CustomControls.CustomControlUtility
        .handleRowClick(evt, Mscrm.CustomControls.CustomControlUtility.$2N);
}
Mscrm.CustomControls.CustomControlUtility.handleRowClick = function(evt, selectedRow) {
    if (IsNull(selectedRow) || selectedRow.id !== evt.rawEvent.currentTarget.id) {
        if (!IsNull(selectedRow)) {
            Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor(selectedRow, '#FFFFFF');
        }
        Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor(evt.rawEvent.currentTarget, '#B1D6F0');
        selectedRow = evt.rawEvent.currentTarget;
    }
    return selectedRow;
}
Mscrm.CustomControls.CustomControlUtility.applyRowBackgroundColor = function(row, color) {
    if (Mscrm.Utilities.isIE10()) {
        var $v_0 = row.getElementsByTagName('td');
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            $v_0[$v_1].style.backgroundColor = color;
        }
    } else {
        row.style.backgroundColor = color;
    }
}
Mscrm.CustomControls.CustomControlUtility
    .wrapTextInGivenTagname = function(inputString, tagName, attributeName, attributeValue) {
        if (isNullOrEmptyString(tagName)) {
            return null;
        }
        if (IsNull(inputString)) {
            inputString = '';
        }
        var $v_0 = document.createElement(tagName);
        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_0, inputString);
        if (!(isNullOrEmptyString(attributeName) || isNullOrEmptyString(attributeValue))) {
            $v_0.setAttribute(attributeName, attributeValue);
        }
        return $v_0;
    }
Mscrm.CustomControls.CustomControlUtility.createXmlDocumentElement = function(XmlDoc, elementName) {
    if (IsNull(XmlDoc) || isNullOrEmptyString(elementName)) {
        return null;
    }
    var $v_0 = XmlDoc.createElement(elementName);
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.wrapTextAndImgageInGivenTagname = function(inputString, imgPath) {
    if (isNullOrEmptyString(inputString)) {
        return null;
    }
    var $v_0 = document.createElement('div');
    $v_0.setAttribute('style', 'min-height: 20px;');
    var $v_1 = document.createElement('img');
    $v_1.setAttribute('src', imgPath);
    $v_1.setAttribute('class', 'customcontrol-property-ErrorIcon');
    var $v_2 = document.createElement('label');
    $v_2.setAttribute('class', 'customcontrolproperty-errordescription');
    Mscrm.CustomControls.CustomControlUtility.setInnerText($v_2, inputString);
    if (!isNullOrEmptyString(imgPath)) {
        $v_0.appendChild($v_1);
    }
    $v_0.appendChild($v_2);
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.debugFail = function(errorMessage) {
    if (confirm(String.format('Assert failed:\n{0}\n\nBreak into debugger?', errorMessage))) {
        debugger;
    }
}
Mscrm.CustomControls.CustomControlUtility.requestPage = function(requestUrl, successCallback, asynchronous, headers) {
    try {
        var $v_0 = new XMLHttpRequest();
        $v_0.onreadystatechange = function() {
            if ($v_0.readyState !== 4) {
                return;
            }
            $v_0.onreadystatechange = null;
            if ($v_0.status !== 200) {
            }
            successCallback($v_0.responseText);
            $v_0 = null;
        };
        $v_0.open('GET', requestUrl, asynchronous);
        if (headers && headers.length > 0) {
            Array.forEach(headers,
                function($p1_0) {
                    $v_0.setRequestHeader(($p1_0).get_key(), ($p1_0).get_value());
                });
        }
        $v_0.send(null);
    } catch ($v_1) {
    }
}
Mscrm.CustomControls.CustomControlUtility
    .retrieveAssociateFieldsFromFormXml = function(givenType, fieldDialogArguments) {
        var $v_0 = new Array(0);
        var $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.formXml;
        var $v_2 = $v_1.getElementsByTagName('form');
        var $v_3 = XUI.Xml.SelectNodes($v_2[0], 'tabs/tab/columns/column/sections/section/rows/row/cell/control', null);
        var $v_4 = null;
        var $v_5 = null;
        if (!IsNull(fieldDialogArguments)) {
            $v_4 = fieldDialogArguments.oFieldsXml;
            $v_5 = fieldDialogArguments.oPropertiesXml;
        }
        for (var $v_6 = 0; $v_6 < $v_3.length; $v_6++) {
            var $v_7 = $v_3[$v_6];
            var $v_8 = $v_7.attributes.getNamedItem('datafieldname');
            if (!IsNull($v_8) && !IsNull($v_4) && !IsNull($v_5)) {
                var $v_9 = $v_8.nodeValue;
                if (!isNullOrEmptyString($v_9)) {
                    var $v_A = XUI.Xml.SelectSingleNode($v_4, '/entity/fields/field[@name = \'' + $v_9 + '\']', null);
                    if (!IsNull($v_A)) {
                        var $v_B = XUI.Xml.SelectSingleNode($v_5,
                            '/entity/fields/field[@name = \'' + $v_9 + '\']',
                            null);
                        if (!IsNull($v_A.attributes.getNamedItem('datatype'))) {
                            var $v_C = $v_A.attributes.getNamedItem('datatype').nodeValue;
                            var $v_D = '';
                            if (!IsNull($v_B.attributes.getNamedItem('format'))) {
                                $v_D = $v_B.attributes.getNamedItem('format').nodeValue;
                            }
                            if (givenType ===
                                Microsoft.Crm.Client.Core.Framework.CustomControlUtils
                                .retrieveCorrespondingManifestType($v_C, $v_D)) {
                                $v_0.push($v_9);
                            }
                        }
                    }
                }
            }
        }
        return $v_0;
    }
Mscrm.CustomControls.CustomControlUtility
    .retrieveAssociateFieldsFromResponse = function(givenType, entityAssociateFieldsMap, candidateEntityTypeCode) {
        var $v_0 = new Array(0);
        var $v_1 = String.format('{0}', candidateEntityTypeCode);
        if (!IsNull(entityAssociateFieldsMap[$v_1])) {
            var $v_2 = entityAssociateFieldsMap[$v_1];
            if (!IsNull($v_2[givenType])) {
                $v_0 = ($v_2[givenType]).split(',');
            }
        }
        return $v_0;
    }
Mscrm.CustomControls.CustomControlUtility.appendPropertyValuetoElem = function(propertyValueElem, controlProperty) {
    if (IsNull(propertyValueElem) || controlProperty.$W_0) {
        return;
    }
    if (!IsNull(propertyValueElem.firstChild)) {
        propertyValueElem.removeChild(propertyValueElem.firstChild);
    }
    var $v_0 = document.createElement('span');
    propertyValueElem.appendChild($v_0);
    if (isNullOrEmptyString(controlProperty.$1_0)) {
        return;
    }
    var $v_1 = window.LOCID_UI_DIR === 'RTL';
    if (controlProperty.$U_0 && controlProperty.get_staticOptions().length > 0) {
        for (var $v_2 = 0; $v_2 < controlProperty.get_staticOptions().length; $v_2++) {
            var $v_3 = controlProperty.get_staticOptions()[$v_2];
            if ($v_3.$1e_0 === controlProperty.$1_0.toString()) {
                Mscrm.CustomControls.CustomControlUtility
                    .processPropertyValueString($v_0, controlProperty, $v_3.$1u_0, $v_1);
                return;
            }
        }
    }
    Mscrm.CustomControls.CustomControlUtility
        .processPropertyValueString($v_0, controlProperty, controlProperty.$1_0, $v_1);
}
Mscrm.CustomControls.CustomControlUtility.retrievePropertyValueForTitle = function(propertyValueElem) {
    if (IsNull(propertyValueElem) || IsNull(propertyValueElem.firstChild)) {
        return '';
    }
    return XUI.Html.GetText(propertyValueElem.firstChild);
}
Mscrm.CustomControls.CustomControlUtility
    .processPropertyValueString = function(spanElement, controlProperty, propertyDisplayValue, isRTL) {
        if (!isRTL) {
            var $v_0 = String.format('{0} ({1})', propertyDisplayValue, controlProperty.$L_0);
            Mscrm.CustomControls.CustomControlUtility.setInnerText(spanElement, $v_0);
        } else {
            spanElement.innerHTML = CrmEncodeDecode.CrmHtmlEncode(String.format('{0} ', propertyDisplayValue)) +
                '<span>&lrm;' +
                CrmEncodeDecode.CrmHtmlEncode(String.format('({0})', controlProperty.$L_0)) +
                '&lrm;</span>';
        }
    }
Mscrm.CustomControls.CustomControlUtility.getNodeOuterHtml = function(node) {
    return XUI.Xml.XMLSerializer.serializeToString(node);
}
Mscrm.CustomControls.CustomControlUtility.setInnerText = function(element, text) {
    if (!IsNull(element)) {
        XUI.Html.SetText(element, text);
    }
}
Mscrm.CustomControls.CustomControlUtility.getXmlNodeFirstChild = function(xmlNode) {
    if (IsNull(xmlNode)) {
        return null;
    }
    if (Mscrm.Utilities.isIE()) {
        return xmlNode.firstChild;
    } else {
        return XUI.Xml.DomUtils.GetFirstChild(xmlNode);
    }
}
Mscrm.CustomControls.CustomControlUtility.retrieveAllViews = function(entityTypeCode) {
    var $v_0 = '';
    var $v_1 = new RemoteCommand('FormEditorWebService', 'GetViewsHtml');
    $v_1.SetParameter('entityCode', entityTypeCode);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) {
        $v_0 = $v_2.ReturnValue.toString();
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.retrieveAllCardForms = function(entityTypeCode) {
    return Mscrm.CustomControls.CustomControlUtility.retrieveAllForms(entityTypeCode, 'GetCardForms');
}
Mscrm.CustomControls.CustomControlUtility.retrieveAllMainForms = function(entityTypeCode) {
    return Mscrm.CustomControls.CustomControlUtility.retrieveAllForms(entityTypeCode, 'GetMainForms');
}
Mscrm.CustomControls.CustomControlUtility.retrieveAllForms = function(entityTypeCode, webMethodName) {
    var $v_0 = null;
    var $v_1 = new RemoteCommand('FormEditorWebService', webMethodName);
    $v_1.SetParameter('entityCode', entityTypeCode);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) {
        var $v_3 = JSON.parse($v_2.ReturnValue.toString());
        $v_0 = new Array($v_3.length);
        for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            var $v_5 = $v_3[$v_4];
            var $v_6 = new Mscrm.CustomControls.FormData();
            $v_6.$x_0 = $v_5['formId'];
            $v_6.$r_0 = $v_5['name'];
            $v_6.$E_0 = $v_5['entityCode'];
            $v_0[$v_4] = $v_6;
        }
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.retrieveFormData = function(formId) {
    var $v_0 = null;
    var $v_1 = new RemoteCommand('FormEditorWebService', 'GetFormData');
    $v_1.SetParameter('formId', formId);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) {
        var $v_3 = JSON.parse($v_2.ReturnValue.toString());
        $v_0 = new Mscrm.CustomControls.FormData();
        $v_0.$x_0 = $v_3['formId'];
        $v_0.$r_0 = $v_3['name'];
        $v_0.$E_0 = $v_3['entityCode'];
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.getViewName = function(entityName, viewId) {
    var $v_0 = Xrm.Internal.getEntityCode(entityName);
    return Mscrm.CustomControls.CustomControlUtility.getViewNameByEntityTypeCode($v_0, viewId);
}
Mscrm.CustomControls.CustomControlUtility.getViewNameByEntityTypeCode = function(entityTypeCode, viewId) {
    var $v_0 = '';
    var $v_1 = Mscrm.CustomControls.CustomControlUtility.retrieveAllViews(entityTypeCode);
    var $v_2 = XUI.Xml.LoadXml($v_1);
    var $v_3 = XUI.Xml.SelectSingleNode($v_2, '/select/OPTGROUP/option[@value = \'' + viewId + '\']', null);
    if (!IsNull($v_3) && !IsNull($v_3.attributes.getNamedItem('title'))) {
        $v_0 = $v_3.attributes.getNamedItem('title').nodeValue;
    }
    return $v_0;
}
Mscrm.CustomControls.CustomControlUtility.findParentIFrameElement = function(sourceFileName) {
    var $v_0 = window.parent.document.getElementsByTagName('iframe');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if ($v_0[$v_1].getAttributeNode('src') &&
            $v_0[$v_1].getAttributeNode('src').value.indexOf(sourceFileName) !== -1) {
            return $v_0[$v_1];
        }
    }
    return null;
}
Mscrm.CustomControls.CustomControlUtility.setParentIFrameTitleAttribute = function(iframeElement, title) {
    if (iframeElement) {
        iframeElement.setAttribute('Title', title);
        iframeElement.setAttribute('TabIndex', '-1');
    }
}
Mscrm.CustomControls.CustomControlUtility
    .retrieveFormattedViewLookupPropertyValue = function(parentEntityViewId, attributeLogicalName, parentDataSetName) {
        return String.format('{0}_{1}_{2}', parentEntityViewId, attributeLogicalName, parentDataSetName);
    }
Mscrm.CustomControls.CustomControlUtility
    .retrieveFormattedViewLookupPropertyName = function(parentEntityLogicalName,
        parentEntityViewId,
        attributeLogicalName,
        parentDataSetName) {
        return String.format('{0}_{1}_{2}_{3}',
            parentEntityLogicalName,
            parentEntityViewId,
            attributeLogicalName,
            parentDataSetName);
    }
Mscrm.CustomControls.CustomControlUtility.onOKBtnKeyTabPressedHandler = function(eventObject, firstElement) {
    if (eventObject.keyCode === 9 && !eventObject.shiftKey) {
        Mscrm.CustomControls.CustomControlUtility.overrideFocusOnTab(firstElement, eventObject);
    }
}
Mscrm.CustomControls.CustomControlUtility.onCrossBtnKeyTabPressedHandler = function(eventObject, lastElement) {
    if (eventObject.keyCode === 9 && eventObject.shiftKey) {
        Mscrm.CustomControls.CustomControlUtility.overrideFocusOnTab(lastElement, eventObject);
    }
}
Mscrm.CustomControls.CustomControlUtility.overrideFocusOnTab = function(nextFocusableElement, domEvent) {
    domEvent.stopPropagation();
    domEvent.preventDefault();
    if (!IsNull(nextFocusableElement)) {
        window.setTimeout(function() {
                nextFocusableElement.focus();
            },
            0);
    }
}
Mscrm.CustomControls.CustomControlUtility.processTabKeyHandler = function(eventObject) {
    var $v_0 = eventObject.target;
    var $v_1 = $v_0.getAttribute('tabIndicationAttributeName');
    if (isNullOrEmptyString($v_1)) {
        return;
    }
    var $v_2 = '';
    if (eventObject.keyCode === 9) {
        if (eventObject.shiftKey) {
            switch ($v_1) {
            case 'tabPhone':
                if (Mscrm.CustomControls.CustomControlUtility.isDataSetControlEnabled()) {
                    $v_2 = eventObject.target.id.replace('_phone', '');
                    Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_web', eventObject);
                }
                return;
            case 'tabTablet':
                $v_2 = eventObject.target.id.replace('_tablet', '');
                Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_phone', eventObject);
                return;
            case 'tabEnd':
                $v_2 = eventObject.target.getAttribute('rowid');
                if (Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_tablet', eventObject)) {
                    return;
                }
                if (Mscrm.CustomControls.CustomControlUtility.isDataSetControlEnabled()) {
                    Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_web', eventObject);
                } else {
                    Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_phone', eventObject);
                }
                return;
            }
        } else {
            switch ($v_1) {
            case 'tabStart':
                $v_2 = eventObject.target.id;
                if ((Mscrm.CustomControls.CustomControlUtility.isDataSetControlEnabled() &&
                        Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_web', eventObject)) ||
                    Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_phone', eventObject)) {
                    return;
                }
                Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_tablet', eventObject);
                return;
            case 'tabWeb':
                if (Mscrm.CustomControls.CustomControlUtility.isDataSetControlEnabled()) {
                    $v_2 = eventObject.target.id.replace('_web', '');
                    Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_phone', eventObject);
                }
                return;
            case 'tabPhone':
                $v_2 = eventObject.target.id.replace('_phone', '');
                Mscrm.CustomControls.CustomControlUtility.processNextRadioButton($v_2 + '_tablet', eventObject);
                return;
            }
        }
    }
}
Mscrm.CustomControls.CustomControlUtility.isDataSetControlEnabled = function() {
    return Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.DataSetControl);
}
Mscrm.CustomControls.CustomControlUtility.processNextRadioButton = function(radioButtonId, eventObject) {
    if (Mscrm.CustomControls.CustomControlUtility.isNextRadioButtonChecked(radioButtonId)) {
        return true;
    }
    if (Mscrm.CustomControls.CustomControlUtility.focusOnSelectedRadioButton(radioButtonId, eventObject)) {
        return true;
    }
    return false;
}
Mscrm.CustomControls.CustomControlUtility.focusOnSelectedRadioButton = function(radioButtonId, eventObject) {
    var $v_0 = $get(radioButtonId);
    if (!IsNull($v_0) && !$v_0.disabled) {
        eventObject.preventDefault();
        eventObject.stopPropagation();
        $v_0.focus();
        return true;
    }
    return false;
}
Mscrm.CustomControls.CustomControlUtility.isNextRadioButtonChecked = function(radioButtonId) {
    var $v_0 = $get(radioButtonId);
    var $v_1 = false;
    if (!IsNull($v_0)) {
        $v_1 = $v_0.checked;
    }
    return $v_1;
}
Mscrm.CustomControls.CustomControlUtility.isLookupProperty = function(type) {
    return !isNullOrEmptyString(type) && type.toLowerCase().startsWith('lookup.');
}
Mscrm.CustomControls.CustomControlUtility.isSimpleLookupProperty = function(type) {
    return !isNullOrEmptyString(type) && type.toLowerCase() === 'lookup.simple';
}
Mscrm.CustomControls.CustomControlUtility.isPotentialLookupProperty = function(types) {
    if (!IsNull(types)) {
        for (var $$arr_1 = types, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (Mscrm.CustomControls.CustomControlUtility.isLookupProperty($v_0)) {
                return true;
            }
        }
    }
    return false;
}


Mscrm.CustomControls.DefaultControlName = function() {
}


Mscrm.CustomControls.EntityDataBundle = function() {
}
Mscrm.CustomControls.EntityDataBundle.prototype = {
    Key: null,
    Value: null
}


Mscrm.CustomControls.TabIndicationAttribute = function() {
}


Mscrm.CustomControls.DatasetNodeControlProperty = function() {
    Mscrm.CustomControls.DatasetNodeControlProperty.initializeBase(this);
    this.$H_0 = true;
    this.$U_0 = false;
    this.$Q_1 = false;
}
Mscrm.CustomControls.DatasetNodeControlProperty.prototype = {
    $1W_1: 0,

    get_propertySetLength: function() {
        return this.$1W_1;
    },

    set_propertySetLength: function(value) {
        this.$1W_1 = value;
        return value;
    },

    $16_1: null,

    get_viewName: function() {
        return this.$16_1;
    },

    set_viewName: function(value) {
        this.$16_1 = value;
        return value;
    },

    $B_1: null,

    get_viewId: function() {
        return this.$B_1;
    },

    set_viewId: function(value) {
        this.$B_1 = value;
        return value;
    },

    $h_1: null,

    get_entityName: function() {
        return this.$h_1;
    },

    set_entityName: function(value) {
        this.$h_1 = value;
        return value;
    },

    $E_1: 0,

    get_entityTypeCode: function() {
        return this.$E_1;
    },

    set_entityTypeCode: function(value) {
        this.$E_1 = value;
        return value;
    },

    $1U_1: false,

    get_isConfigurationNeeded: function() {
        return this.$1U_1;
    },

    set_isConfigurationNeeded: function(value) {
        this.$1U_1 = value;
        return value;
    },

    $d_1: false,

    get_isEditableDataset: function() {
        return this.$d_1;
    },

    set_isEditableDataset: function(value) {
        this.$d_1 = value;
        return value;
    },

    $Q_1: false,

    get_isPrimary: function() {
        return this.$Q_1;
    },

    set_isPrimary: function(value) {
        this.$Q_1 = value;
        return value;
    },

    $9_1: null,

    get_viewLookupPropertiesList: function() {
        return this.$9_1;
    },

    set_viewLookupPropertiesList: function(value) {
        this.$9_1 = value;
        return value;
    }
}


Mscrm.CustomControls.FieldCustomControl = function() {
    this.$G_0 = new Array(3);
}
Mscrm.CustomControls.FieldCustomControl.prototype = {
    $J_0: false,
    $4_0: null,
    $8_0: null,
    $3_0: null,
    $17_0: null,
    $g_0: false,
    $Y_0: null,
    $t_0: null,
    $u_0: null,
    $1I_0: null,
    $1H_0: null,
    $T_0: null,

    get_controlDescriptor: function() {
        return this.$3_0;
    },

    set_controlDescriptor: function(value) {
        this.$3_0 = value;
        return value;
    },

    get_customControlName: function() {
        return this.$8_0;
    },

    set_customControlName: function(value) {
        this.$8_0 = value;
        return value;
    },

    get_fieldDeviceType: function() {
        return this.$G_0;
    },

    set_fieldDeviceType: function(value) {
        this.$G_0 = value;
        return value;
    },

    get_rowElement: function() {
        return this.$Y_0;
    },

    set_rowElement: function(value) {
        this.$Y_0 = value;
        return value;
    },

    get_propertyTableContainer: function() {
        return this.$t_0;
    },

    set_propertyTableContainer: function(value) {
        this.$t_0 = value;
        return value;
    },

    get_propertyTablePropertyNameContainer: function() {
        return this.$u_0;
    },

    set_propertyTablePropertyNameContainer: function(value) {
        this.$u_0 = value;
        return value;
    },

    get_propertyTablePropertyTypeContainer: function() {
        return this.$1I_0;
    },

    set_propertyTablePropertyTypeContainer: function(value) {
        this.$1I_0 = value;
        return value;
    },

    get_propertyTablePropertyDescriptionContainer: function() {
        return this.$1H_0;
    },

    set_propertyTablePropertyDescriptionContainer: function(value) {
        this.$1H_0 = value;
        return value;
    },

    get_propertyTablePropertyErrorDescriptionContainer: function() {
        return this.$T_0;
    },

    set_propertyTablePropertyErrorDescriptionContainer: function(value) {
        this.$T_0 = value;
        return value;
    },

    get_isDefaultFormControl: function() {
        return this.$J_0;
    },

    set_isDefaultFormControl: function(value) {
        this.$J_0 = value;
        return value;
    },

    get_id: function() {
        return this.$4_0;
    },

    set_id: function(value) {
        this.$4_0 = value;
        return value;
    },

    get_controlFormXmlSnippet: function() {
        return this.$17_0;
    },

    set_controlFormXmlSnippet: function(value) {
        this.$17_0 = value;
        return value;
    },

    get_isReadOnlyControlOnSurface: function() {
        return this.$g_0;
    },

    set_isReadOnlyControlOnSurface: function(value) {
        this.$g_0 = value;
        return value;
    }
}


Mscrm.CustomControls.FormCardProperty = function() {
    Mscrm.CustomControls.FormCardProperty.initializeBase(this);
    this.$1M_2 = true;
    Mscrm.CustomControls.ControlProperty.prototype.set_selectedCandidatePropertyType.call(this, 'Form.Card');
}


Mscrm.CustomControls.FormMainProperty = function() {
    Mscrm.CustomControls.FormMainProperty.initializeBase(this);
    this.$1N_2 = true;
    Mscrm.CustomControls.ControlProperty.prototype.set_selectedCandidatePropertyType.call(this, 'Form.Main');
}


Mscrm.CustomControls.FormProperty = function() {
    Mscrm.CustomControls.FormProperty.initializeBase(this);
    this.$q_0 = true;
    this.$C_1 = true;
}
Mscrm.CustomControls.FormProperty.prototype = {
    $1r_2: null,

    get_formData: function() {
        if (!this.$1r_2) {
            this.$1r_2 = new Mscrm.CustomControls.FormData();
        }
        return this.$1r_2;
    },

    set_formData: function(value) {
        this.$1r_2 = value;
        return value;
    },

    $1M_2: false,

    get_isFormCardProperty: function() {
        return this.$1M_2;
    },

    set_isFormCardProperty: function(value) {
        this.$1M_2 = value;
        return value;
    },

    $1N_2: false,

    get_isFormMainProperty: function() {
        return this.$1N_2;
    },

    set_isFormMainProperty: function(value) {
        this.$1N_2 = value;
        return value;
    }
}


Mscrm.CustomControls.FormData = function() {
}
Mscrm.CustomControls.FormData.prototype = {
    $x_0: null,

    get_formId: function() {
        return this.$x_0;
    },

    set_formId: function(value) {
        this.$x_0 = value;
        return value;
    },

    $r_0: null,

    get_name: function() {
        return this.$r_0;
    },

    set_name: function(value) {
        this.$r_0 = value;
        return value;
    },

    $E_0: 0,

    get_entityTypeCode: function() {
        return this.$E_0;
    },

    set_entityTypeCode: function(value) {
        this.$E_0 = value;
        return value;
    }
}


Mscrm.CustomControls.GroupsNodeControlProperty = function() {
    Mscrm.CustomControls.GroupsNodeControlProperty.initializeBase(this);
    this.$1O_0 = true;
}
Mscrm.CustomControls.GroupsNodeControlProperty.prototype = {
    $1T_1: null,

    get_groupNameList: function() {
        return this.$1T_1;
    },

    set_groupNameList: function(value) {
        this.$1T_1 = value;
        return value;
    },

    $1h_1: null,

    get_groupDisplayNameList: function() {
        return this.$1h_1;
    },

    set_groupDisplayNameList: function(value) {
        this.$1h_1 = value;
        return value;
    },

    $1i_1: 0,

    get_numberOfGroup: function() {
        return this.$1i_1;
    },

    set_numberOfGroup: function(value) {
        this.$1i_1 = value;
        return value;
    }
}


Mscrm.CustomControls.InputControlProperty = function() {
    Mscrm.CustomControls.InputControlProperty.initializeBase(this);
    this.$U_0 = true;
    this.$H_0 = false;
}
Mscrm.CustomControls.InputControlProperty.prototype = {
    $C_1: false,

    getPropertyValue: function() {
    },

    get_isStaticSetting: function() {
        return this.$C_1;
    },

    set_isStaticSetting: function(value) {
        this.$C_1 = value;
        return value;
    }
}


Mscrm.CustomControls.Options = function() {
}
Mscrm.CustomControls.Options.prototype = {
    $28_0: null,
    $1e_0: null,
    $27_0: null,
    $1t_0: null,
    $1u_0: null,

    get_optionName: function() {
        return this.$28_0;
    },

    set_optionName: function(value) {
        this.$28_0 = value;
        return value;
    },

    get_optionValue: function() {
        return this.$1e_0;
    },

    set_optionValue: function(value) {
        this.$1e_0 = value;
        return value;
    },

    get_optionDisplayName: function() {
        return this.$1u_0;
    },

    set_optionDisplayName: function(value) {
        this.$1u_0 = value;
        return value;
    },

    get_optionDescription: function() {
        return this.$1t_0;
    },

    set_optionDescription: function(value) {
        this.$1t_0 = value;
        return value;
    },

    get_optionDefaultSelect: function() {
        return this.$27_0;
    },

    set_optionDefaultSelect: function(value) {
        this.$27_0 = value;
        return value;
    }
}


Mscrm.CustomControls.PropertyDialogManager = function() {
    this.$$d_$4Y_0 = Function.createDelegate(this, this.$4Y_0);
    this.$$d_$4j_0 = Function.createDelegate(this, this.$4j_0);
    this.$$d_$4s_0 = Function.createDelegate(this, this.$4s_0);
    this.$$d_$52_0 = Function.createDelegate(this, this.$52_0);
    this.$$d_$4U_0 = Function.createDelegate(this, this.$4U_0);
    this.$$d_$4c_0 = Function.createDelegate(this, this.$4c_0);
    this.$$d_$4d_0 = Function.createDelegate(this, this.$4d_0);
    this.$$d_$4l_0 = Function.createDelegate(this, this.$4l_0);
    this.$$d_$3Q_0 = Function.createDelegate(this, this.$3Q_0);
    this.$$d_$3V_0 = Function.createDelegate(this, this.$3V_0);
    this.$$d_$4b_0 = Function.createDelegate(this, this.$4b_0);
    this.$$d_$4a_0 = Function.createDelegate(this, this.$4a_0);
    this.$$d_$4Z_0 = Function.createDelegate(this, this.$4Z_0);
    this.$$d_$3S_0 = Function.createDelegate(this, this.$3S_0);
    this.$$d_$4W_0 = Function.createDelegate(this, this.$4W_0);
    this.$$d_$3T_0 = Function.createDelegate(this, this.$3T_0);
    this.$$d_$4m_0 = Function.createDelegate(this, this.$4m_0);
    this.$$d_$4T_0 = Function.createDelegate(this, this.$4T_0);
    this.$$d_$4V_0 = Function.createDelegate(this, this.$4V_0);
    this.$1p_0 = {};
}
Mscrm.CustomControls.PropertyDialogManager.get_instance = function() {
    if (!Mscrm.CustomControls.PropertyDialogManager.$l) {
        Mscrm.CustomControls.PropertyDialogManager.$l = new Mscrm.CustomControls.PropertyDialogManager();
    }
    return Mscrm.CustomControls.PropertyDialogManager.$l;
}
Mscrm.CustomControls.PropertyDialogManager.prototype = {
    $1k_0: null,
    $2z_0: false,
    $0_0: null,
    $1z_0: false,
    $2P_0: null,
    $23_0: 0,
    $K_0: false,
    $2U_0: null,
    $2V_0: null,
    $2W_0: null,
    $2j_0: null,
    $2S_0: null,
    $2e_0: null,
    $2n_0: null,
    $1o_0: null,
    $1d_0: null,
    $1n_0: null,
    $2k_0: null,
    $2Q_0: null,
    $2l_0: null,
    $2b_0: null,
    $2a_0: null,
    $2R_0: null,
    $2X_0: null,
    $2Y_0: null,
    $2Z_0: null,
    $12_0: false,
    $1v_0: '',

    get_viewLookupResponseMap: function() {
        return this.$1p_0;
    },

    initiate: function() {
        var $v_0 = getDialogArguments();
        if (IsNull($v_0) || isNullOrEmptyString($v_0['CustomControlId']) || IsNull($v_0['ControlProperty'])) {
            return;
        }
        this.$1k_0 = $v_0['CustomControlId'];
        this.$0_0 = $v_0['ControlProperty'];
        this.$1z_0 = $v_0['IsBoundProperty'];
        this.$2P_0 = $v_0['OfTypeParentPropertyDisplayName'];
        this.$K_0 = $v_0['IsEntityGrid'];
        if (this.$0_0.$H_0) {
            this.$1v_0 = (this.$0_0).$B_1;
        } else if (this.$0_0.$W_0) {
            var $v_P = this.$0_0;
            this.$1v_0 = Mscrm.CustomControls.CustomControlUtility
                .retrieveFormattedViewLookupPropertyValue($v_P.$X_1, $v_P.$k_1, $v_P.$n_0);
        } else {
            this.$1v_0 = (!isNullOrEmptyString(this.$0_0.$1_0))
                ? String.format('{0} ({1})', this.$0_0.$1_0, this.$0_0.$L_0)
                : '';
        }
        var $v_1 = $get('lblHeader');
        var $v_2 = $get('rdStaticProperty');
        var $v_3 = $get('rdEntityProperty');
        var $v_4 = $get('lblStaticOptions');
        Mscrm.CustomControls.CustomControlUtility
            .setInnerText($v_1, window.LOCID_CCCONFIG_CONFIGPROPERTY + ' \"' + this.$0_0.$I_0 + '\"');
        var $v_5 = (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.$0_0.$I_0))
            ? this.$0_0.$2_0
            : this.$0_0.$I_0;
        $v_1.title = window.LOCID_CCCONFIG_CONFIGPROPERTY + ' \"' + $v_5 + '\"';
        $v_2.title = window.LOCID_CCCONFIG_BIND_STATIC_VALUE;
        $v_3.title = window.LOCID_CCCONFIG_BIND_FIELD_VALUE;
        $v_4.title = window.LOCID_CCCONFIG_STATIC_OPT_LABEL;
        var $v_6 = $get('lblHeaderDescription');
        var $v_7 = $get('lblHeaderOptionDescription');
        Sys.UI.DomElement.addCssClass($v_6, 'customcontrol-Description-Firefox');
        Sys.UI.DomElement.addCssClass($v_7, 'customcontrol-Description-Firefox');
        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_6, this.$0_0.$A_0);
        if (this.$0_0.$W_0) {
            Mscrm.CustomControls.CustomControlUtility
                .setInnerText($v_1, window.LOCID_CCCONFIG_CONFIGPROPERTY + ' \"' + this.$0_0.$I_0 + '\"');
            this.$3r_0();
        } else if (this.$0_0.$H_0) {
            var $v_Q = (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.$0_0.$I_0))
                ? this.$0_0.$2_0
                : this.$0_0.$I_0;
            Mscrm.CustomControls.CustomControlUtility
                .setInnerText($v_1, window.LOCID_CCCONFIG_CONFIGPROPERTY + ' \"' + $v_Q + '\"');
            this.$3m_0($v_0);
        } else if (this.$0_0.$q_0) {
            var $v_R = (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.$0_0.$I_0))
                ? this.$0_0.$2_0
                : this.$0_0.$I_0;
            Mscrm.CustomControls.CustomControlUtility
                .setInnerText($v_1, window.LOCID_CCCONFIG_CONFIGPROPERTY + ' \"' + $v_R + '\"');
            this.$3l_0($v_0);
        } else {
            this.$3o_0($v_0, this.$0_0.$L_0);
            this.$43_0($v_0['IsParent']);
        }
        this.$2S_0 = this.$$d_$4V_0;
        this.$2e_0 = this.$$d_$4T_0;
        this.$2n_0 = this.$$d_$4m_0;
        this.$1o_0 = this.$$d_$3T_0;
        this.$2k_0 = this.$$d_$4W_0;
        this.$2Q_0 = this.$$d_$3S_0;
        this.$2X_0 = this.$$d_$4Z_0;
        this.$2Y_0 = this.$$d_$4a_0;
        this.$2Z_0 = this.$$d_$4b_0;
        this.$1d_0 = this.$$d_$3V_0;
        this.$1n_0 = this.$$d_$3Q_0;
        this.$2l_0 = this.$$d_$4l_0;
        this.$2b_0 = this.$$d_$4d_0;
        this.$2a_0 = this.$$d_$4c_0;
        this.$2R_0 = this.$$d_$4U_0;
        var $v_8 = $get('txtStaticValue');
        var $v_9 = $get('bindStaticTypeOption');
        var $v_A = $get('ccDataSourceCombo');
        var $v_B = $get('ccDataSourceComboForCardForm');
        var $v_C = $get('ccDataSourceComboForMainForm');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_8, 'blur', this.$2S_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_8, 'keydown', this.$2e_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_9, 'change', this.$2k_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_A, 'change', this.$2X_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_B, 'change', this.$2Y_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_C, 'change', this.$2Z_0);
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement(document.body, 'keydown', this.$1o_0);
        var $v_D = $get('bindSelectedOption');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_D, 'change', this.$2l_0);
        var $v_E = $get('entityViewCombo');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_E, 'change', this.$2b_0);
        var $v_F = $get('entityViewFieldCombo');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_F, 'change', this.$2a_0);
        this.$3i_0();
        var $v_G = $get('rdbtnStaticProperty');
        var $v_H = $get('rdbtnStaticOptions');
        $v_H.title = window.LOCID_CCCONFIG_STATIC_OPT_LABEL;
        var $v_I = $get('txtAreaStaticValue');
        $v_G.setAttribute('TabIndex', '0');
        $v_G.title = window.LOCID_CCCONFIG_BIND_STATIC_VALUE;
        $v_9.setAttribute('TabIndex', '0');
        $v_8.setAttribute('TabIndex', '0');
        $v_8.title = window.LOCID_CCCONFIG_TEXT;
        $v_I.title = window.LOCID_CCCONFIG_TEXT;
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_I, 'keydown', this.$2n_0);
        var $v_J = $get('StaticValue_warn');
        $v_J.style.display = 'none';
        var $v_K = $get('rdbtnEntityProperty');
        $v_K.setAttribute('TabIndex', '0');
        $v_K.title = window.LOCID_CCCONFIG_BIND_FIELD_VALUE;
        var $v_L = $get('bindEntityOption');
        $v_L.setAttribute('TabIndex', '0');
        $v_L.title = window.LOCID_CCCONFIG_FIELD;
        if (Mscrm.CustomControls.CustomControlUtility.isPotentialLookupProperty(this.$0_0.$6_0) &&
            !this.$0_0.$V_0 &&
            !this.$0_0.$H_0) {
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_L, 'change', this.$2R_0);
        } else {
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_L, 'change', this.$2Q_0);
        }
        var $v_M = $get('butReset');
        $v_M.setAttribute('TabIndex', '0');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_M, 'keydown', this.$1d_0);
        var $v_N = $get('butBegin');
        $v_N.setAttribute('TabIndex', '0');
        if (this.$0_0.$W_0) {
            var $v_S = $get('btnDelete');
            $v_S.setAttribute('TabIndex', '0');
            Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_S, 'keydown', this.$1d_0);
        }
        var $v_O = $get('btnCross');
        $v_O.setAttribute('TabIndex', '0');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_O, 'keydown', this.$1n_0);
        Mscrm.CustomControls.CustomControlUtility
            .setParentIFrameTitleAttribute(Mscrm.CustomControls.CustomControlUtility
                .findParentIFrameElement('CustomControlPropertyPage.aspx'),
                $get('lblHeader').firstChild.nodeValue);
    },

    $53_0: function($p0) {
        switch ($p0) {
        case 'TwoOptions':
        case 'Lookup.Simple':
        case 'Lookup.Customer':
        case 'Lookup.Owner':
        case 'Lookup.PartyList':
        case 'Lookup.Regarding':
        case 'OptionSet':
            return true;
        default:
            return false;
        }
    },

    $3o_0: function($p0, $p1) {
        var $v_0 = $get('divBoundProperty');
        var $v_1 = $get('bindStaticTypeOption');
        var $v_2 = $get('bindEntityOption');
        var $v_3 = $get('txtStaticValue');
        var $v_4 = $get('txtAreaStaticValue');
        var $v_5 = 0;
        var $v_6 = false;
        var $v_7 = this.$0_0.$6_0;
        var $v_8 = (window.LOCID_UI_DIR === 'RTL') ? true : false;
        for (var $v_E = 0; $v_E < $v_7.length; $v_E++) {
            if (!this.$53_0($v_7[$v_E])) {
                var $v_F = document.createElement('option');
                $v_F.value = $v_7[$v_E];
                $v_F.text = $v_7[$v_E];
                $v_1.appendChild($v_F);
                $v_5++;
            }
        }
        var $v_9 = $p0['BindEntityProperties'];
        if (!IsNull($v_9) && $v_9.length > 0) {
            for (var $v_G = 0; $v_G < $v_9.length; $v_G++) {
                var $v_H = document.createElement('option');
                var $v_I = $v_9[$v_G].indexOf(' (');
                $v_H.value = $v_9[$v_G].substring(0, $v_I);
                if ($v_8) {
                    $v_H.text = '(' + $v_9[$v_G].replace(')', '');
                } else {
                    $v_H.text = $v_9[$v_G];
                }
                $v_2.appendChild($v_H);
            }
        }
        var $v_A = $get('rdbtnEntityProperty');
        var $v_B = $get('rdbtnStaticProperty');
        if (isNullOrEmptyString(this.$0_0.$L_0) || !(this.$0_0).$C_1) {
            if (($v_1).value === 'SingleLine.TextArea' || ($v_1).value === 'Multiple') {
                $v_4.style.display = 'inline-block';
                $v_3.style.display = 'none';
            }
        } else if (this.$0_0.$L_0 === 'SingleLine.TextArea' || this.$0_0.$L_0 === 'Multiple') {
            $v_4.style.display = 'inline-block';
            $v_3.style.display = 'none';
        }
        for (var $v_J = 0; $v_J < this.$0_0.$6_0.length; $v_J++) {
            if (this.$0_0.$6_0[$v_J] === 'Enum' && !this.$1z_0) {
                this.$12_0 = true;
                break;
            }
        }
        var $v_C = $get('rdbtnStaticOptions');
        if (!this.$0_0.$V_0 && this.$0_0.$U_0 && $p0['IsEntityGrid'] && !this.$12_0) {
            $v_B.checked = true;
            $v_6 = true;
        }
        if (!this.$1z_0 && (this.$0_0).$C_1 && !this.$12_0) {
            if ($v_5) {
                $v_B.checked = true;
                ($v_1).value = this.$0_0.$L_0;
                if (this.$0_0.$L_0 === 'SingleLine.TextArea' || this.$0_0.$L_0 === 'Multiple') {
                    ($v_4).value = this.$0_0.$1_0.toString();
                } else {
                    ($v_3).value = this.$0_0.$1_0.toString();
                }
            }
        } else {
            if (!$v_6) {
                if (!IsNull($v_9) && !$v_9.length) {
                    var $v_L = $get('emptyOption');
                    $v_L.value = window.LOCID_NO_FIELDS_AVAILABLE;
                    $v_L.text = window.LOCID_NO_FIELDS_AVAILABLE;
                    $v_L.style.color = '#E8E8E8';
                    $v_2.setAttribute('disabled', 'disabled');
                    $v_A.setAttribute('disabled', 'disabled');
                    $v_B.checked = true;
                    $v_2.style.backgroundColor = '#E8E8E8';
                } else {
                    $v_A.checked = true;
                }
                if (!IsNull(this.$0_0.$1_0) && this.$0_0.$1_0.toString() !== '') {
                    ($v_2).value = this.$0_0.$1_0.toString();
                }
                var $v_K = $get('divStaticProperty');
                if (this.$1z_0) {
                    $v_K.style.display = 'none';
                    var $v_M = $get('divoptions');
                    $v_M.style.paddingTop = '10px';
                    var $v_N = $get('DlgHdDesc');
                    $v_N.style.marginTop = '10px';
                }
                if (this.$12_0) {
                    $v_K.style.display = 'none';
                    $v_0 = $get('divBoundProperty');
                    $v_0.style.display = 'none';
                    ($get('rdbtnStaticOptions')).checked = true;
                    var $v_O = $get('bindSelectedOption');
                    if ($v_8) {
                        $v_O.style.marginRight = '30px';
                    } else {
                        $v_O.style.marginLeft = '30px';
                    }
                    $v_O.style.marginTop = '5px';
                    var $v_P = $get('lblHeaderDescription');
                    var $v_Q = $get('lblHeaderOptionDescription');
                    Mscrm.CustomControls.CustomControlUtility.setInnerText($v_P, this.$0_0.$A_0);
                    var $v_R = $get('DlgHdOptionDesc');
                    $v_R.style.display = 'block';
                    if ($v_8) {
                        $v_R.style.paddingRight = '5px';
                        $v_R.style.marginLeft = '8%';
                        $v_R.style.marginRight = '23px';
                    } else {
                        $v_R.style.paddingLeft = '5px';
                        $v_R.style.marginRight = '8%';
                        $v_R.style.marginLeft = '23px';
                    }
                    var $v_S = false;
                    var $v_T = false;
                    for (var $v_V = 0; $v_V < this.$0_0.get_staticOptions().length; $v_V++) {
                        var $v_W = document.createElement('Option');
                        $v_W.value = this.$0_0.get_staticOptions()[$v_V].$1e_0;
                        $v_W.text = this.$0_0.get_staticOptions()[$v_V].$1u_0;
                        $v_W.setAttribute('optionName', this.$0_0.get_staticOptions()[$v_V].$28_0);
                        $v_W.setAttribute('optionDescription', this.$0_0.get_staticOptions()[$v_V].$1t_0);
                        $v_W.setAttribute('optionDefaultSelect', this.$0_0.get_staticOptions()[$v_V].$27_0);
                        if (!this.$0_0.isRequired) {
                            if (!$v_S) {
                                var $v_X = document.createElement('Option');
                                $v_X.title = window.LOCID_CCCONFIG_STATIC_OPT_TITLE;
                                $v_X.setAttribute('id', 'emptyOption');
                                $v_X.selected = true;
                                Mscrm.CustomControls.CustomControlUtility.setInnerText($v_Q, '');
                                $v_X.setAttribute('optionDescription', '');
                                $v_O.title = window.LOCID_CCCONFIG_STATIC_OPT_TITLE;
                                $v_O.appendChild($v_X);
                                $v_S = true;
                            }
                        }
                        if (this.$0_0.get_staticOptions()[$v_V].$1e_0 === this.$0_0.$1_0) {
                            $v_W.selected = true;
                            Mscrm.CustomControls.CustomControlUtility
                                .setInnerText($v_Q, this.$0_0.get_staticOptions()[$v_V].$1t_0);
                            $v_T = true;
                        }
                        $v_O.appendChild($v_W);
                    }
                    if (!$v_T) {
                        var $v_Y = $get('bindSelectedOption');
                        var $v_Z = $v_Y.options[0];
                        Mscrm.CustomControls.CustomControlUtility
                            .setInnerText($v_Q, $v_Z.getAttribute('OptionDescription'));
                        $v_Z.selected = true;
                        this.$2z_0 = true;
                    }
                    var $v_U = $get('divOptionSet');
                    $v_U.style.display = 'inline-block';
                    $v_U.style.paddingTop = '10px';
                }
            }
        }
        if (this.$0_0.$U_0 && ($p0['IsEntityGrid'] || $p0['IsDashboardEditor'])) {
            $v_2.setAttribute('disabled', 'disabled');
            $v_A.setAttribute('disabled', 'disabled');
            $v_2.style.backgroundColor = '#E8E8E8';
            $v_B.checked = true;
        }
        if (this.$0_0.$U_0 && $p0['IsEntityGrid'] && this.$12_0) {
            $v_C.checked = true;
        }
        if (!$v_5) {
            var $v_a = $get('divStaticProperty');
            $v_a.style.display = 'none';
        }
        var $v_D = $get('divViewPicker');
        if (!IsNull($v_D)) {
            $v_D.style.display = 'none';
        }
        if (Mscrm.CustomControls.CustomControlUtility.isSimpleLookupProperty($p1) && !this.$0_0.$V_0) {
            this.$2I_0(this.$0_0, true);
        }
    },

    $3m_0: function($p0) {
        var $v_0 = this.$0_0;
        ($get('rdbtnViewPicker')).checked = true;
        ($get('rdbtnViewPicker')).title = window.LOCID_CCCONFIG_VIEWPICKER;
        var $v_1 = $p0['AllEntityData'];
        var $v_2 = (!isNullOrEmptyString($v_0.$B_1)) ? $v_0.$B_1 : '';
        var $v_3 = (!isNullOrEmptyString($v_0.$h_1)) ? Xrm.Internal.getEntityCode($v_0.$h_1) : 0;
        this.$23_0 = $v_3;
        var $v_4 = $get('ccDataSourceCombo');
        var $v_5 = document.createElement('option');
        $v_5.value = '';
        $v_5.text = '';
        $v_4.appendChild($v_5);
        for (var $$arr_7 = $v_1, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_9 = $$arr_7[$$idx_9];
            $v_5 = document.createElement('option');
            $v_5.value = $v_9['value'].toString();
            $v_5.text = $v_9['key'].toString();
            $v_4.appendChild($v_5);
            if ($v_5.value.split(':')[0] === $v_3.toString()) {
                $v_5.selected = true;
            }
        }
        if (!$v_3) {
            ($v_4).selectedIndex = 0;
        }
        this.$32_0($v_3);
        if (!isNullOrEmptyString($v_2)) {
            ($get('ccViewComboId')).value = $v_2;
        }
        var $v_6 = $get('divStaticProperty');
        var $v_7 = $get('divBoundProperty');
        $v_7.style.display = 'none';
        $v_6.style.display = 'none';
        var $v_8 = $get('divViewPicker');
        $v_8.style.display = 'block';
        $v_8.style.paddingTop = '10px';
    },

    $3l_0: function($p0) {
        var $v_0 = this.$0_0;
        var $v_1 = null;
        if ($v_0.$1M_2) {
            ($get('rdbtnCardFormPicker')).checked = true;
            ($get('rdbtnCardFormPicker')).title = window.LOCID_CCCONFIG_CARDFORMPICKER;
            $v_1 = 'ccDataSourceComboForCardForm';
        } else if ($v_0.$1N_2) {
            ($get('rdbtnMainFormPicker')).checked = true;
            ($get('rdbtnMainFormPicker')).title = window.LOCID_CCCONFIG_MAINFORMPICKER;
            $v_1 = 'ccDataSourceComboForMainForm';
        }
        var $v_2 = $p0['AllEntityData'];
        var $v_3 = (!isNullOrEmptyString($v_0.get_formData().$x_0)) ? $v_0.get_formData().$x_0 : '';
        var $v_4 = Number.parseInvariant($p0['etc']);
        this.$23_0 = $v_4;
        var $v_5 = $get($v_1);
        for (var $$arr_7 = $v_2, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_A = $$arr_7[$$idx_9];
            var $v_B = document.createElement('option');
            $v_B.value = $v_A['value'].toString();
            $v_B.text = $v_A['key'].toString();
            $v_5.appendChild($v_B);
            if ($v_B.value.split(':')[0] === $v_4.toString()) {
                $v_B.selected = true;
            }
        }
        var $v_6 = $get('divStaticProperty');
        var $v_7 = $get('divBoundProperty');
        $v_7.style.display = 'none';
        $v_6.style.display = 'none';
        var $v_8 = null;
        var $v_9 = null;
        if ($v_0.$1M_2) {
            this.$30_0($v_4);
            $v_8 = $get('divCardFormPicker');
            $v_9 = 'ccCardFormComboId';
        } else if ($v_0.$1N_2) {
            this.$31_0($v_4);
            $v_8 = $get('divMainFormPicker');
            $v_9 = 'ccMainFormComboId';
        }
        if (!isNullOrEmptyString($v_3)) {
            ($get($v_9)).value = $v_3;
        }
        $v_8.style.display = 'block';
        $v_8.style.paddingTop = '10px';
    },

    $3r_0: function() {
        var $v_0 = $get('divStaticProperty');
        var $v_1 = $get('divBoundProperty');
        var $v_2 = $get('butReset');
        $v_1.style.display = 'none';
        $v_0.style.display = 'none';
        $v_2.style.display = 'none';
        var $v_3 = this.$0_0;
        var $v_4 = $get('divViewLookup');
        $v_4.style.display = 'block';
        if ($v_3.$y_1) {
            var $v_5 = $get('divViewLookupConfigure');
            $v_5.style.display = 'none';
            var $v_6 = $get('divViewLookupSelect');
            $v_6.style.display = 'block';
            window.populateDisplaySection($v_3.$R_1,
                null,
                $v_3.$X_1,
                'entityViews',
                'entityViewLabelId',
                'entityViewCombo');
            var $v_7 = $get('entityViewCombo');
            if (!IsNull($v_7)) {
                $v_7.disabled = !$v_3.parentDataSetProperty.$Q_1 || !this.$K_0;
            }
            var $v_8 = $v_7;
            if (!IsNull($v_8)) {
                var $v_9 = ($v_8.options[$v_8.selectedIndex]).value;
                var $v_A = $get('entityViewFieldCombo');
                if (!IsNull($v_A)) {
                    this.$3a_0($v_A, $v_9);
                }
            }
        } else {
            var $v_B = $get('btnDelete');
            $v_B.style.display = 'inline-block';
            this.$2I_0($v_3, false);
        }
    },

    $3a_0: function($p0, $p1) {
        if (Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty($p1)) {
            return;
        }
        if (IsNull(this.$1p_0[$p1])) {
            var $v_0 = Mscrm.CrmUri.create('/Tools/FormEditor/Dialogs/CustomControlDataDialog.aspx');
            $v_0.get_query()['lcid'] = Xrm.Page.context.getUserLcid();
            $v_0.get_query()['viewid'] = $p1;
            $v_0.get_query()['isForViewLookup'] = true;
            var $$t_6 = this;
            var $v_1 = function($p1_0) {
                var $v_2 = Mscrm.CustomControls.CustomControlUtility.parseJson($p1_0);
                if (IsNull($v_2['ErrorInfo'])) {
                    $$t_6.$1p_0[$p1] = $v_2;
                } else {
                    $v_2 = {};
                    $v_2['ViewLookupData'] = new Array(0);
                }
                $$t_6.bindViewColumnOptions($p0, $v_2, $p1);
            };
            Mscrm.CustomControls.CustomControlUtility.requestPage($v_0.toString(), $v_1, false, null);
        } else if (!IsNull(Mscrm.CustomControls.PropertyDialogManager.get_instance().$1p_0[$p1])) {
            this.bindViewColumnOptions($p0, Mscrm.CustomControls.PropertyDialogManager.get_instance().$1p_0[$p1], $p1);
        }
    },

    bindViewColumnOptions: function(selectElement, viewLookupDataDict, viewId) {
        if (IsNull(selectElement)) {
            return;
        }
        for (var $v_4 = selectElement.options.length - 1; $v_4 >= 0; $v_4--) {
            if (selectElement.options[$v_4].id === 'entityViewFieldComboEmptyOption') {
                continue;
            }
            selectElement.remove($v_4);
        }
        if (IsNull(viewLookupDataDict)) {
            return;
        }
        var $v_0 = Mscrm.CustomControls.PropertyDialogManager.get_instance().$0_0;
        var $v_1 = $v_0.parentDataSetProperty;
        var $v_2 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
        if (!IsNull($v_1.$9_1)) {
            for (var $$arr_7 = $v_1.$9_1, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
                var $v_5 = $$arr_7[$$idx_9];
                $v_2.add($v_5.$2_0);
            }
        }
        var $v_3 = viewLookupDataDict['ViewLookupData'];
        if ($v_3.length > 0) {
            for (var $$arr_C = $v_3, $$len_D = $$arr_C.length, $$idx_E = 0; $$idx_E < $$len_D; ++$$idx_E) {
                var $v_6 = $$arr_C[$$idx_E];
                var $v_7 = CrmEncodeDecode.CrmHtmlDecode($v_6['ViewLookupAttributeDisplayName']);
                var $v_8 = CrmEncodeDecode.CrmHtmlDecode($v_6['ViewLookupAttributeLogicalName']);
                var $v_9 = CrmEncodeDecode.CrmHtmlDecode($v_6['ViewLookupAttributeDescription']);
                var $v_A = CrmEncodeDecode.CrmHtmlDecode($v_6['ViewLookupParentEntityLogicalName']);
                var $v_B = Mscrm.CustomControls.CustomControlUtility
                    .retrieveFormattedViewLookupPropertyName($v_0.$10_1, viewId, $v_8, $v_0.$n_0);
                if ($v_2.contains($v_B) || $v_A !== $v_0.$10_1) {
                    continue;
                }
                var $v_C = document.createElement('option');
                $v_C.value = $v_8;
                $v_C.text = $v_7;
                $v_C.title = $v_9;
                selectElement.appendChild($v_C);
            }
        }
    },

    $2I_0: function($p0, $p1) {
        if ($p1 && $p0.$R_1 !== Microsoft.Crm.Client.Core.Framework.Undefined.int32Value) {
            var $v_2 = $get('divViewLookup');
            $v_2.style.display = 'block';
            window.populateDisplaySectionForLookupProperty($p0.$R_1,
                $p0.$1_0,
                $p0.$B_1,
                $p0.$w_1,
                $p0.$p_1,
                'DefaultView',
                'defaultViewLabelId',
                'DefaultViewCombo',
                'viewSelection',
                'ViewListSelector',
                $p0.$14_1);
            window.populateRelFiltersSection($p0.$R_1, $p0.$1_0, $p0.$c_1, $p0.$a_1, $p0.$b_1, $p0.$P_1);
        } else {
            window.populateDisplaySection($p0.$R_1,
                $p0.$k_1,
                $p0.$B_1,
                'DefaultView',
                'defaultViewLabelId',
                'DefaultViewCombo');
            window.populateRelFiltersSection($p0.$R_1, $p0.$k_1, $p0.$c_1, $p0.$a_1, $p0.$b_1, $p0.$P_1);
        }
        var $v_0 = $get('chkEnableRelFilter');
        var $v_1 = ToggleRelFilter;
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_0, 'click', $v_1);
    },

    $4s_0: function($p0) {
        if (isNullOrEmptyString(this.$0_0.$13_0)) {
            ($get('txtStaticValue')).value = '';
            ($get('txtAreaStaticValue')).value = '';
        } else {
            if (!this.$12_0) {
                var $v_0 = $get('rdbtnStaticProperty');
                $v_0.checked = true;
            }
            ($get('txtStaticValue')).value = (isNullOrEmptyString(this.$0_0.$13_0)) ? '' : this.$0_0.$13_0;
            ($get('txtAreaStaticValue')).value = (isNullOrEmptyString(this.$0_0.$13_0)) ? '' : this.$0_0.$13_0;
        }
        ($get('bindStaticTypeOption')).selectedIndex = 0;
        ($get('bindEntityOption')).selectedIndex = 0;
        if (this.$0_0.$H_0) {
            var $v_1 = ($get('ccDataSourceCombo'));
            $v_1.selectedIndex = 0;
            this.$32_0(Number.parseInvariant($v_1.value.split(':')[0]));
        } else if (this.$0_0.$q_0 && (this.$0_0).$1M_2) {
            var $v_2 = ($get('ccDataSourceComboForCardForm'));
            $v_2.selectedIndex = 0;
            this.$30_0(Number.parseInvariant($v_2.value.split(':')[0]));
        } else if (this.$0_0.$q_0 && (this.$0_0).$1N_2) {
            var $v_3 = ($get('ccDataSourceComboForMainForm'));
            $v_3.selectedIndex = 0;
            this.$31_0(Number.parseInvariant($v_3.value.split(':')[0]));
        } else if (!this.$12_0) {
            var $v_4 = $get('bindSelectedOption');
            this.$3k_0($v_4);
        } else if (this.$12_0) {
            var $v_5 = $get('bindSelectedOption');
            var $v_6 = $v_5.options;
            if (this.$0_0.isRequired) {
                var $v_7 = false;
                for (var $v_8 = 0; $v_8 < $v_6.length; $v_8++) {
                    var $v_9 = Boolean.parse(($v_6[$v_8]).getAttribute('optionDefaultSelect'));
                    if ($v_9) {
                        ($v_6[$v_8]).selected = true;
                        $v_7 = true;
                        break;
                    }
                }
                if (!$v_7 && $v_6.length > 0) {
                    ($v_6[0]).selected = true;
                }
            } else {
                for (var $v_A = 0; $v_A < $v_6.length; $v_A++) {
                    var $v_B = ($v_6[$v_A]).id;
                    if ($v_B === 'emptyOption') {
                        ($v_6[$v_A]).selected = true;
                        break;
                    }
                }
            }
            this.$3E_0($v_5);
        }
    },

    $4Y_0: function($p0) {
        if (this.$0_0.$W_0) {
            var $v_0 = this.$0_0;
            if (!$v_0.$y_1 && !IsNull($v_0.parentDataSetProperty)) {
                var $v_1 = $v_0.parentDataSetProperty;
                if (!IsNull($v_1.$9_1)) {
                    Array.remove($v_1.$9_1, $v_0);
                    var $v_2 = {};
                    $v_2['PropertyCustomControlId'] = this.$1k_0;
                    $v_2['ReturnProperty'] = $v_1;
                    $v_2['HasViewLookupBeenDeleted'] = true;
                    Mscrm.Utilities.setReturnValue($v_2);
                }
                closeWindow(true);
            }
        }
    },

    $3E_0: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.options.length; $v_0++) {
            var $v_1 = $p0.options[$v_0];
            if (!IsNull($v_1)) {
                if ($v_1.selected) {
                    var $v_2 = $get('lblHeaderOptionDescription');
                    var $v_3 = $v_1.getAttribute('optionDescription');
                    Mscrm.CustomControls.CustomControlUtility.setInnerText($v_2, $v_3);
                }
            }
        }
    },

    $3k_0: function($p0) {
        var $v_0 = $get('lblHeaderOptionDescription');
        var $v_1 = false;
        if (!this.$2z_0) {
            for (var $v_2 = 0; $v_2 < $p0.options.length; $v_2++) {
                var $v_3 = $p0.options[$v_2];
                if (!IsNull($v_3)) {
                    if (!isNullOrEmptyString($v_3.getAttribute('optionDefaultSelect'))) {
                        var $v_4 = $v_3.getAttribute('optionDescription');
                        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_0, $v_4);
                        $p0.selectedIndex = $v_2;
                        $v_1 = true;
                    } else if (!$v_1) {
                        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_0, '');
                        $p0.selectedIndex = 0;
                    }
                }
            }
        } else {
            Mscrm.CustomControls.CustomControlUtility
                .setInnerText($v_0, $p0.options[0].getAttribute('optionDescription'));
            $p0.selectedIndex = 0;
        }
    },

    $4j_0: function($p0) {
        this.$26_0();
    },

    $4T_0: function($p0) {
        this.$34_0();
        this.$26_0();
    },

    $4m_0: function($p0) {
        this.$34_0();
    },

    $34_0: function() {
        var $v_0 = $get('rdbtnEntityProperty');
        if ($v_0.checked) {
            var $v_1 = $get('rdbtnStaticProperty');
            $v_1.checked = true;
            $v_0.checked = false;
        }
    },

    $3T_0: function($p0) {
        if ($p0.keyCode === 27) {
            var $v_0 = {};
            $v_0['PropertyCustomControlId'] = this.$1k_0;
            $v_0['ReturnProperty'] = this.$0_0;
            $v_0['Esc'] = true;
            Mscrm.Utilities.setReturnValue($v_0);
            closeWindow(true);
        }
    },

    $3V_0: function($p0) {
        var $v_0 = $get('btnCross');
        Mscrm.CustomControls.CustomControlUtility.onOKBtnKeyTabPressedHandler($p0, $v_0);
    },

    $3Q_0: function($p0) {
        if ($p0.keyCode === 9) {
            var $v_0 = $get('butReset');
            Mscrm.CustomControls.CustomControlUtility.onCrossBtnKeyTabPressedHandler($p0, $v_0);
        } else if ($p0.keyCode === 13 || $p0.keyCode === 32) {
            var $v_1 = {};
            $v_1['PropertyCustomControlId'] = this.$1k_0;
            $v_1['ReturnProperty'] = this.$0_0;
            $v_1['Esc'] = true;
            Mscrm.Utilities.setReturnValue($v_1);
            closeWindow(true);
        }
    },

    $4W_0: function($p0) {
        var $v_0 = $get('bindStaticTypeOption');
        var $v_1 = $get('txtStaticValue');
        var $v_2 = $get('txtAreaStaticValue');
        var $v_3 = $get('txtStaticValue');
        var $v_4 = $get('txtAreaStaticValue');
        $v_3.value = '';
        $v_4.value = '';
        this.$34_0();
        this.$26_0();
        if ($v_0.value === 'SingleLine.TextArea' || $v_0.value === 'Multiple') {
            $v_1.style.display = 'none';
            $v_2.style.display = 'inline-block';
        } else {
            $v_1.style.display = 'inline-block';
            $v_2.style.display = 'none';
        }
    },

    $3S_0: function($p0) {
        var $v_0 = $get('rdbtnStaticProperty');
        if ($v_0.checked) {
            var $v_1 = $get('rdbtnEntityProperty');
            $v_1.checked = true;
            $v_0.checked = false;
        }
        this.$26_0();
    },

    $4l_0: function($p0) {
        var $v_0 = $p0.target;
        this.$3E_0($v_0);
    },

    $4Z_0: function($p0) {
        var $v_0 = $get('ccDataSourceCombo');
        this.$32_0(Number.parseInvariant($v_0.value.split(':')[0]));
    },

    $4a_0: function($p0) {
        var $v_0 = $get('ccDataSourceComboForCardForm');
        this.$30_0(Number.parseInvariant($v_0.value.split(':')[0]));
    },

    $4b_0: function($p0) {
        var $v_0 = $get('ccDataSourceComboForMainForm');
        this.$31_0(Number.parseInvariant($v_0.value.split(':')[0]));
    },

    $4d_0: function($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $get('entityViewFieldCombo');
        var $v_2 = $v_0.value;
        this.$3a_0($v_1, $v_2);
    },

    $4c_0: function($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $v_0.options[$v_0.selectedIndex];
        var $v_2 = $v_1.value;
        var $v_3 = $v_1.text;
        var $v_4 = $v_1.title;
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_2)) {
            var $v_5 = this.$0_0;
            $v_5.$k_1 = $v_2;
            $v_5.$1K_1 = $v_3;
            this.$2I_0($v_5, false);
        }
        this.$54_0($v_2);
    },

    $4U_0: function($p0) {
        var $v_0 = $p0.target;
        var $v_1 = $v_0.options[$v_0.selectedIndex];
        var $v_2 = $v_1.value;
        var $v_3 = $v_1.text;
        var $v_4 = $v_3.split('(')[1];
        if (Mscrm.CustomControls.CustomControlUtility.isLookupProperty($v_4) &&
            !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_2) &&
            !this.$0_0.$V_0) {
            var $v_5 = this.$0_0;
            $v_5.$1_0 = $v_2;
            $v_5.$c_1 = null;
            $v_5.$p_1 = true;
            $v_5.$14_1 = null;
            $v_5.$w_1 = true;
            $v_5.$P_1 = true;
            $v_5.$a_1 = '';
            $v_5.$b_1 = '';
            this.$2I_0($v_5, true);
        } else {
            this.$3S_0($p0);
        }
    },

    $54_0: function($p0) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0);
        var $v_1 = $get('divViewLookupConfigure');
        $v_1.style.display = ($v_0) ? 'none' : 'block';
        var $v_2 = $get('chkShowQuickFind');
        if ($v_2) {
            $v_2.style.display = 'none';
        }
        var $v_3 = $get('chkShowQuickFindLabel');
        if ($v_3) {
            $v_3.style.display = 'none';
        }
        var $v_4 = $get('chkShowViewPickerLabel');
        if ($v_4) {
            $v_4.style.display = 'none';
        }
        var $v_5 = $get('tdViewSelector');
        if ($v_5) {
            $v_5.style.display = 'none';
        }
    },

    $32_0: function($p0) {
        var $v_0 = $get('viewPickerDefaultView');
        if (isNaN($p0) || !$p0) {
            $v_0
                .innerHTML =
                '<select id=\'ccViewComboId\' style=\'width: 94%;\'><option value=\'\' title=\'\'></option></select>';
            return;
        }
        var $v_1 = Mscrm.CustomControls.CustomControlUtility.retrieveAllViews($p0);
        var $v_2 = $v_1.replace('crmGrid_SavedQuerySelector', 'ccViewComboId');
        $v_0.innerHTML = $v_2;
        var $v_3 = $get('ccViewComboId');
        if (!IsNull($v_3)) {
            $v_3.setAttribute('onchange', null);
            $v_3.style.width = '94%';
        }
    },

    $30_0: function($p0) {
        var $v_0 = Mscrm.CustomControls.CustomControlUtility.retrieveAllCardForms($p0);
        var $v_1 = $get('ccCardFormComboId');
        if (!IsNull($v_1)) {
            Mscrm.CustomControls.CustomControlUtility.setInnerText($v_1, ' ');
            if (!IsNull($v_0)) {
                for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                    var $v_2 = $$arr_3[$$idx_5];
                    var $v_3 = document.createElement('option');
                    $v_3.value = $v_2.$x_0;
                    $v_3.text = $v_2.$r_0;
                    $v_1.appendChild($v_3);
                }
            }
        }
    },

    $31_0: function($p0) {
        var $v_0 = Mscrm.CustomControls.CustomControlUtility.retrieveAllMainForms($p0);
        var $v_1 = $get('ccMainFormComboId');
        if (!IsNull($v_1)) {
            Mscrm.CustomControls.CustomControlUtility.setInnerText($v_1, ' ');
            if (!IsNull($v_0)) {
                for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                    var $v_2 = $$arr_3[$$idx_5];
                    var $v_3 = document.createElement('option');
                    $v_3.value = $v_2.$x_0;
                    $v_3.text = $v_2.$r_0;
                    $v_1.appendChild($v_3);
                }
            }
        }
    },

    $26_0: function() {
        var $v_0 = $get('customControlPropertyErrorDiv');
        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_0, '');
        $v_0.style.display = 'none';
        var $v_1 = $get('StaticValue_warn');
        $v_1.style.display = 'none';
    },

    $4V_0: function($p0) {
        var $v_0 = $get('txtStaticValue');
        var $v_1 = $get('bindStaticTypeOption');
        var $v_2 = '';
        var $v_3 = $get('rdbtnStaticProperty');
        if ($v_3.checked) {
            var $$t_9, $$t_A;
            if (!(($$t_A = this.$3g_0($v_0, $v_1, ($$t_9 = { 'val': $v_2 }))), $v_2 = $$t_9.val, $$t_A)) {
                var $v_4 = $get('customControlPropertyErrorDiv');
                $v_4.innerHTML = '';
                $v_4.style.display = 'inline-block';
                var $v_5 = $get('StaticValue_warn');
                $v_4.setAttribute('class', 'customcontrol_fontfamily');
                var $v_6 = Mscrm.CustomControls.CustomControlUtility.wrapTextAndImgageInGivenTagname($v_2, '');
                $v_4.appendChild($v_6);
                $v_5.style.display = 'inline-block';
            } else {
                var $v_7 = Mscrm.CustomControls.CustomControlValidation.parseISO8601Date($v_0.value);
                if ($v_1.value === 'DateAndTime.DateOnly') {
                    $v_0.value = Mscrm.DateTimeUtility.formatDate($v_7, 'yyyy-MM-dd');
                } else if ($v_1.value === 'DateAndTime.DateAndTime') {
                    $v_0.value = Mscrm.DateTimeUtility.formatDate($v_7, 'yyyy-MM-dd\'T\'HH:mm:ssZ');
                } else if ($v_1.value === 'Whole.None') {
                    $v_0.value = Mscrm.NumberUtility.locStringToInt($v_0.value).toString();
                } else if ($v_1.value === 'FP') {
                    $v_0.value = Mscrm.NumberUtility
                        .addFormatting(Mscrm.NumberUtility.locStringToFloat($v_0.value), 5, true);
                } else if ($v_1.value === 'Currency') {
                    $v_0.value = Mscrm.NumberUtility
                        .addFormatting(Mscrm.NumberUtility.locStringToFloat($v_0.value), 4, true);
                } else if ($v_1.value === 'Decimal') {
                    $v_0.value = Mscrm.NumberUtility
                        .addFormatting(Mscrm.NumberUtility.locStringToFloat($v_0.value), 7, true);
                }
                this.$26_0();
            }
        }
    },

    $3g_0: function($p0, $p1, $p2) {
        var $v_0 = $p0.value;
        var $v_1 = $p1.value;
        return Mscrm.CustomControls.CustomControlValidation.validateStaticType($v_0, $v_1, $p2);
    },

    $43_0: function($p0) {
        var $v_0 = $get('customControlPropertyInfoDIV');
        if ($p0 || !(isNullOrEmptyString(this.$0_0.$j_0))) {
            Sys.UI.DomElement.addCssClass($v_0, 'customcontrolproperty-infoDiv');
        }
        if ($p0) {
            var $v_1 = Mscrm.CustomControls.CustomControlUtility
                .wrapTextAndImgageInGivenTagname(Mscrm.CustomControls.PropertyDialogManager.$3I, '');
            $v_0.appendChild($v_1);
        }
        if (!(isNullOrEmptyString(this.$0_0.$j_0))) {
            var $v_2 = Mscrm.CustomControls.CustomControlUtility
                .wrapTextAndImgageInGivenTagname(String
                    .format(Mscrm.CustomControls.PropertyDialogManager.$3J, this.$2P_0),
                    '');
            $v_0.appendChild($v_2);
        }
    },

    $52_0: function($p0) {
        var $v_0 = $get('rdbtnEntityProperty');
        var $v_1 = $get('rdbtnViewPicker');
        var $v_2 = $get('rdbtnStaticOptions');
        var $v_3 = $get('rdbtnStaticProperty');
        var $v_4 = true;
        var $v_5 = false;
        var $v_6 = false;
        var $v_7 = false;
        if (this.$0_0.$W_0) {
            var $v_8 = $get('DefaultViewCombo');
            if (IsNull($v_8)) {
                $v_4 = false;
            } else {
                var $v_9 = $get('entityViewCombo');
                if (!IsNull($v_9)) {
                    (this.$0_0).$X_1 = $v_9.value;
                }
                (this.$0_0).$B_1 = $v_8.value;
                (this.$0_0).$1_0 = $v_8.value;
                var $v_A = $get('chkEnableRelFilter');
                var $v_B = $get('chkAllowFilterOff');
                (this.$0_0).$c_1 = ($v_A.checked) ? this.$1s_0('FilterRelationshipName') : '';
                (this.$0_0).$a_1 = ($v_A.checked) ? this.$1s_0('DependentAttributeName') : '';
                (this.$0_0).$b_1 = this.$1s_0('DependentAttributeType');
                (this.$0_0).$P_1 = $v_B.checked;
                $v_7 = (this.$0_0).$y_1;
            }
        } else if (this.$0_0.$H_0 && $v_1.checked) {
            var $v_C = $get('ccViewComboId');
            var $v_D = $get('ccDataSourceCombo');
            var $v_E = (this.$0_0).$B_1;
            (this.$0_0).$B_1 = $v_C.value;
            (this.$0_0).$1_0 = $v_C.value;
            $v_5 = $v_E !== $v_C.value;
            (this.$0_0).$16_1 = $v_C.options[$v_C.selectedIndex].getAttribute('title').toString();
            (this.$0_0).$h_1 = $v_D.value.split(':')[1];
            (this.$0_0).$E_1 = parseInt($v_D.value.split(':')[0]);
        } else if (this.$0_0.$q_0) {
            var $v_F = null;
            var $v_G = null;
            if ((this.$0_0).$1M_2) {
                $v_F = $get('ccCardFormComboId');
                $v_G = $get('ccDataSourceComboForCardForm');
            } else if ((this.$0_0).$1N_2) {
                $v_F = $get('ccMainFormComboId');
                $v_G = $get('ccDataSourceComboForMainForm');
            }
            if ($v_F.selectedIndex < 0) {
                $v_4 = false;
            } else {
                var $v_H = (this.$0_0).get_formData().$x_0;
                (this.$0_0).get_formData().$x_0 = $v_F.value;
                (this.$0_0).$1_0 = $v_F.value;
                $v_6 = $v_H !== $v_F.value;
                (this.$0_0).get_formData().$r_0 = $v_F.options[$v_F.selectedIndex].innerHTML;
                (this.$0_0).get_formData().$E_0 = parseInt($v_G.value.split(':')[0]);
            }
        } else {
            if ($v_0.checked && !this.$12_0) {
                var $v_I = $get('bindEntityOption');
                if (!IsNull($v_I) && !IsNull($v_I.options[$v_I.selectedIndex])) {
                    this.$0_0.$1_0 = $v_I.value;
                    var $v_J = $v_I.options[$v_I.selectedIndex].innerHTML;
                    var $v_K = $v_J.split(' ');
                    var $v_L = $v_K[$v_K.length - 1];
                    $v_L = $v_L.replace('(', '');
                    $v_L = $v_L.replace(')', '');
                    this.$0_0.set_selectedCandidatePropertyType($v_L);
                    if (this.$0_0.$U_0) {
                        (this.$0_0).$C_1 = false;
                    }
                }
                if (!this.$0_0.$V_0) {
                    this.$51_0();
                }
            } else if ($v_3.checked && !this.$12_0) {
                var $v_M = $get('bindStaticTypeOption');
                var $v_N = null;
                if ($v_M.value === 'SingleLine.TextArea' || $v_M.value === 'Multiple') {
                    $v_N = $get('txtAreaStaticValue');
                } else {
                    $v_N = $get('txtStaticValue');
                }
                var $v_O = '';
                if (!IsNull($v_N) && !IsNull($v_M)) {
                    var $$t_V, $$t_W;
                    if ((($$t_W = this.$3g_0($v_N, $v_M, ($$t_V = { 'val': $v_O }))), $v_O = $$t_V.val, $$t_W)) {
                        this.$0_0.$1_0 = $v_N.value;
                        (this.$0_0).$C_1 = true;
                        this.$0_0.set_selectedCandidatePropertyType($v_M.value);
                    } else {
                        var $v_P = $get('customControlPropertyErrorDiv');
                        Mscrm.CustomControls.CustomControlUtility.setInnerText($v_P, '');
                        $v_P.style.display = 'inline-block';
                        $v_P.setAttribute('class', 'customcontrolproperty-errorDiv');
                        var $v_Q = Mscrm.CustomControls.CustomControlUtility.wrapTextAndImgageInGivenTagname($v_O, '');
                        $v_P.appendChild($v_Q);
                        var $v_R = $get('StaticValue_warn');
                        $v_R.style.display = 'inline-block';
                        $v_4 = false;
                    }
                }
            } else if ($v_2.checked) {
                var $v_S = $get('bindSelectedOption');
                this.$0_0.$1_0 = $v_S.value;
                this.$0_0.set_selectedCandidatePropertyType('Enum');
                (this.$0_0).$C_1 = true;
            }
        }
        if ($v_4) {
            if (this.$4Q_0(this.$0_0)) {
                var $v_T = {};
                $v_T['PropertyCustomControlId'] = this.$1k_0;
                $v_T['ReturnProperty'] = this.$0_0;
                $v_T['HasViewIdChanged'] = $v_5;
                $v_T['HasFormIdChanged'] = $v_6;
                $v_T['HasViewLookupBeenAdded'] = $v_7;
                if (this.$0_0.$H_0 && this.$23_0 !== (this.$0_0).$E_1) {
                    $v_T['HasEntityViewChanged'] = true;
                    $v_T['OriginalEntityTypeCode'] = this.$23_0;
                }
                Mscrm.Utilities.setReturnValue($v_T);
            }
            closeWindow(true);
        }
    },

    $51_0: function() {
        var $v_0 = $get('DefaultViewCombo');
        if (IsNull($v_0)) {
        } else {
            var $v_1 = $get('entityViewCombo');
            if (!IsNull($v_1)) {
                (this.$0_0).$X_1 = $v_1.value;
            }
            (this.$0_0).$B_1 = $v_0.value;
            var $v_2 = $get('chkShowQuickFind');
            (this.$0_0).$w_1 = !$v_2.checked;
            var $v_3 = $get('viewSelection');
            if ($v_3.selectedIndex) {
                var $v_6 = $get('ViewListSelector');
                (this.$0_0).$14_1 = this.$4K_0($v_6, $v_3.selectedIndex);
                (this.$0_0).$p_1 = false;
            } else {
                (this.$0_0).$14_1 = null;
                (this.$0_0).$p_1 = true;
            }
            var $v_4 = $get('chkEnableRelFilter');
            var $v_5 = $get('chkAllowFilterOff');
            (this.$0_0).$c_1 = ($v_4.checked) ? this.$1s_0('FilterRelationshipName') : '';
            (this.$0_0).$a_1 = ($v_4.checked) ? this.$1s_0('DependentAttributeName') : '';
            (this.$0_0).$b_1 = this.$1s_0('DependentAttributeType');
            (this.$0_0).$P_1 = $v_5.checked;
        }
    },

    $4K_0: function($p0, $p1) {
        return ($p1 === 1) ? '' : window.getViewsSelected($p0);
    },

    $4Q_0: function($p0) {
        var $v_0 = false;
        if ($p0.$H_0) {
            if (($p0).$B_1 !== this.$1v_0) {
                $v_0 = true;
            }
        } else {
            var $v_1 = String.format('{0} ({1})', $p0.$1_0, $p0.$L_0);
            if ($v_1 !== this.$1v_0) {
                $v_0 = true;
            }
        }
        return $v_0;
    },

    $3i_0: function() {
        this.$2U_0 = this.$$d_$52_0;
        this.$2V_0 = this.$$d_$4s_0;
        this.$2j_0 = this.$$d_$4j_0;
        this.$2W_0 = this.$$d_$4Y_0;
        var $v_0 = $get('butBegin');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_0, 'click', this.$2U_0);
        var $v_1 = $get('butReset');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_1, 'click', this.$2V_0);
        var $v_2 = $get('rdbtnEntityProperty');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_2, 'click', this.$2j_0);
        var $v_3 = $get('btnDelete');
        Mscrm.CustomControls.CustomControlUtility.addHandlerToDomElement($v_3, 'click', this.$2W_0);
    },

    $1s_0: function($p0) {
        var $v_0;
        var $v_1;
        var $v_2 = '.';
        var $v_3 = $get('selCurRels');
        var $v_4 = $get('selTarRels');
        if ($v_3.value.split($v_2).length > 1) {
            $v_0 = $v_3;
            $v_1 = $v_4;
        } else {
            $v_0 = $v_4;
            $v_1 = $v_3;
        }
        switch ($p0) {
        case 'DependentAttributeName':
            return $v_0.value.split($v_2)[0] + $v_2 + $v_0.value.split($v_2)[1];
        case 'DependentAttributeType':
            return $v_0.value.split($v_2)[2];
        case 'FilterRelationshipName':
            return $v_1.value;
        }
        return '';
    }
}


Mscrm.CustomControls.Stub = function() {
}
Mscrm.CustomControls.Stub.getControlDescriptorList = function() {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.ControlDescriptor();
    $v_1.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('E175E2D7-CE07-445A-90DC-D79F206B3B7D');
    $v_1.$8_0 = 'Microsoft Calendar 1.0';
    $v_1.$18_0 = 'Microsoft';
    $v_1.$11_0 = '1.0';
    $v_1.$o_0 = 'Microsof Custom Control';
    $v_1.$1A_0 = 'English';
    $v_1.$m_0 = [0, 1];
    $v_1.$i_0 = window.CDNURL + '/_imgs/import_dm.gif';
    $v_1.$5_0 = Mscrm.CustomControls.Stub.$48($v_1.$8_0);
    var $v_2 = new Mscrm.CustomControls.ControlDescriptor();
    $v_2.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('B6F20FC6-C38D-4864-8EF1-B35DE1C50953');
    $v_2.$8_0 = 'Microsoft Gantt 1.0';
    $v_2.$18_0 = 'TCS';
    $v_2.$11_0 = '1.0';
    $v_2.$o_0 = 'TCS Custom Control';
    $v_2.$1A_0 = 'English';
    $v_2.$m_0 = [0];
    $v_2.$i_0 = window.CDNURL + '/_imgs/import_dm.gif';
    $v_2.$5_0 = Mscrm.CustomControls.Stub.$4A($v_2.$8_0);
    var $v_3 = new Mscrm.CustomControls.ControlDescriptor();
    $v_3.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('64A9461A-F1D7-4D9F-AD99-8D7C9A345B66');
    $v_3.$8_0 = 'Wijmo Editable Grid 5.0';
    $v_3.$18_0 = 'Kendo';
    $v_3.$11_0 = '1.0';
    $v_3.$o_0 = 'Kendo Custom Control';
    $v_3.$1A_0 = 'English';
    $v_3.$m_0 = [0, 1];
    $v_3.$i_0 = window.CDNURL + '/_imgs/import_dm.gif';
    $v_3.$5_0 = Mscrm.CustomControls.Stub.$4D($v_3.$8_0);
    var $v_4 = new Mscrm.CustomControls.ControlDescriptor();
    $v_4.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('ADD6BC51-E259-4509-B304-A4E19515D76A');
    $v_4.$8_0 = 'Jquery Heat Map 2.5.4';
    $v_4.$18_0 = 'Infragistics';
    $v_4.$11_0 = '1.0';
    $v_4.$o_0 = 'Kendo Custom Control';
    $v_4.$1A_0 = 'English';
    $v_4.$m_0 = [0];
    $v_4.$i_0 = window.CDNURL + '/_imgs/import_dm.gif';
    $v_4.$5_0 = Mscrm.CustomControls.Stub.$49($v_4.$8_0);
    var $v_5 = new Mscrm.CustomControls.ControlDescriptor();
    $v_5.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('948113EC-8FBE-43B2-AF98-68E48A9CF40F');
    $v_5.$8_0 = 'Wizmo Radio Slider 5.0 Configuration';
    $v_5.$18_0 = 'TCS';
    $v_5.$11_0 = '2.0';
    $v_5.$o_0 = 'Wizzz Custom Control';
    $v_5.$1A_0 = 'Franch';
    $v_5.$m_0 = [0, 1];
    $v_5.$i_0 = window.CDNURL + '/_imgs/import_dm.gif';
    $v_5.$5_0 = Mscrm.CustomControls.Stub.$47($v_5.$8_0);
    var $v_6 = new Mscrm.CustomControls.ControlDescriptor();
    $v_6.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('38FDDC7F-A3D3-43C2-A5DC-07D564E2C4EB');
    $v_6.$8_0 = 'Smart Timer Watch';
    $v_6.$18_0 = 'BABA';
    $v_6.$11_0 = '3.0';
    $v_6.$o_0 = 'Smart Timer';
    $v_6.$1A_0 = 'Simplified Chinese';
    $v_6.$m_0 = [0, 1];
    $v_6.$i_0 = window.CDNURL + '/_imgs/import_dm.gif';
    $v_6.$5_0 = Mscrm.CustomControls.Stub.$4C($v_6.$8_0);
    var $v_7 = new Mscrm.CustomControls.ControlDescriptor();
    $v_7.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('F5308DF5-8A75-494B-AC97-474FED567CF0');
    $v_7.$8_0 = 'SimpleClickControl';
    $v_7.$18_0 = 'Mscrm';
    $v_7.$11_0 = '1.0';
    $v_7.$o_0 = '(Placeholder if it has. This is just for demo)';
    $v_7.$1A_0 = '(Placeholder if it has. This is just for demo)';
    $v_7.$m_0 = [0];
    $v_7.$i_0 = window.CDNURL + '/_imgs/grid_temp.gif';
    $v_7.$5_0 = Mscrm.CustomControls.Stub.$4B($v_7.$8_0);
    $v_0.push($v_1);
    $v_0.push($v_2);
    $v_0.push($v_3);
    $v_0.push($v_4);
    $v_0.push($v_5);
    $v_0.push($v_6);
    $v_0.push($v_7);
    return $v_0;
}
Mscrm.CustomControls.Stub.getExistingCustomControlsFromFormXml = function() {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.FieldCustomControl();
    $v_1.$8_0 = 'Default Control: Textbox';
    $v_1.$4_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    $v_1.$J_0 = true;
    $v_1.$G_0.push(-1);
    $v_0.push($v_1);
    var $v_2 = new Mscrm.CustomControls.FieldCustomControl();
    $v_2.$8_0 = 'Wizmo Radio Slider 5.0 Configuration';
    $v_2.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('948113EC-8FBE-43B2-AF98-68E48A9CF40F');
    $v_2.$G_0.push(1);
    $v_2.$G_0.push(2);
    $v_0.push($v_2);
    var $v_3 = new Mscrm.CustomControls.FieldCustomControl();
    $v_3.$8_0 = 'Microsoft Gantt 1.0';
    $v_3.$4_0 = new Microsoft.Crm.Client.Core.Framework.Guid('B6F20FC6-C38D-4864-8EF1-B35DE1C50953');
    $v_3.$G_0.push(1);
    $v_3.$G_0.push(0);
    $v_0.push($v_3);
    return $v_0;
}
Mscrm.CustomControls.Stub.$48 = function($p0) {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.BoundControlProperty();
    $v_1.$D_0 = '';
    $v_1.$6_0 = ['string'];
    $v_1.$A_0 = 'This is the CherryBloom property of the control';
    $v_1.$2_0 = 'CherryBloom';
    $v_1.$1_0 = 'Orchards';
    var $v_2 = new Mscrm.CustomControls.InputControlProperty();
    $v_2.$D_0 = '';
    $v_2.$6_0 = ['decimal', 'string'];
    $v_2.$A_0 = 'This is the GoldenGate property of the control';
    $v_2.$2_0 = 'GoldenGate';
    $v_2.$1_0 = '3423';
    $v_2.$C_1 = true;
    $v_2.$j_0 = $v_1.$2_0;
    var $v_3 = new Mscrm.CustomControls.InputControlProperty();
    $v_3.$D_0 = '';
    $v_3.$6_0 = ['memo', 'string'];
    $v_3.$A_0 = 'This is the HornGrebe property of the control';
    $v_3.$2_0 = 'HornGrebe';
    $v_3.$1_0 = '324';
    $v_3.$C_1 = true;
    $v_3.$j_0 = $v_1.$2_0;
    var $v_4 = new Mscrm.CustomControls.InputControlProperty();
    $v_4.$D_0 = '';
    $v_4.$6_0 = ['string', 'boolean'];
    $v_4.$A_0 = 'This is the Latern property of the control';
    $v_4.$2_0 = 'Latern';
    $v_4.$1_0 = 'false';
    $v_4.$C_1 = true;
    $v_0.push($v_1);
    $v_0.push($v_2);
    $v_0.push($v_3);
    $v_0.push($v_4);
    return $v_0;
}
Mscrm.CustomControls.Stub.$4A = function($p0) {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.BoundControlProperty();
    $v_1.$D_0 = '';
    $v_1.$6_0 = ['string'];
    $v_1.$A_0 = 'This is the SandDune property of the control';
    $v_1.$2_0 = 'SandDune';
    $v_1.$1_0 = 'Namibia';
    var $v_2 = new Mscrm.CustomControls.InputControlProperty();
    $v_2.$D_0 = '';
    $v_2.$6_0 = ['decimal', 'string'];
    $v_2.$A_0 = 'This is the RedSlider property of the control';
    $v_2.$2_0 = 'RedSlider';
    $v_2.$1_0 = '435';
    $v_2.$C_1 = true;
    var $v_3 = new Mscrm.CustomControls.InputControlProperty();
    $v_3.$D_0 = '';
    $v_3.$6_0 = ['memo', 'string'];
    $v_3.$A_0 = 'This is the CraterLake property of the control';
    $v_3.$2_0 = 'CraterLake';
    $v_3.$1_0 = 'Beautiful';
    $v_3.$C_1 = true;
    var $v_4 = new Mscrm.CustomControls.InputControlProperty();
    $v_4.$D_0 = '';
    $v_4.$6_0 = ['string', 'boolean'];
    $v_4.$A_0 = 'This is the ColoradoRiver property of the control';
    $v_4.$2_0 = 'ColoradoRiver';
    $v_4.$1_0 = '5345345';
    $v_4.$C_1 = true;
    var $v_5 = new Mscrm.CustomControls.InputControlProperty();
    $v_5.$D_0 = '';
    $v_5.$6_0 = ['string', 'boolean'];
    $v_5.$A_0 = 'This is the Twitter property of the control';
    $v_5.$2_0 = 'Twitter';
    $v_5.$1_0 = 'Fans';
    $v_5.$C_1 = true;
    var $v_6 = new Mscrm.CustomControls.InputControlProperty();
    $v_6.$D_0 = '';
    $v_6.$6_0 = ['string', 'boolean'];
    $v_6.$A_0 = 'This is the Facebook property of the control';
    $v_6.$2_0 = 'Facebook';
    $v_6.$1_0 = 'Messege';
    $v_6.$C_1 = true;
    $v_0.push($v_1);
    $v_0.push($v_2);
    $v_0.push($v_3);
    $v_0.push($v_4);
    $v_0.push($v_5);
    $v_0.push($v_6);
    return $v_0;
}
Mscrm.CustomControls.Stub.$4D = function($p0) {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.BoundControlProperty();
    $v_1.$D_0 = '';
    $v_1.$6_0 = ['string'];
    $v_1.$A_0 = 'This is the Malaysia property of the control';
    $v_1.$2_0 = 'Malaysia';
    $v_1.$1_0 = 'Country';
    var $v_2 = new Mscrm.CustomControls.InputControlProperty();
    $v_2.$D_0 = '';
    $v_2.$6_0 = ['decimal', 'string'];
    $v_2.$A_0 = 'This is the Portion property of the control';
    $v_2.$2_0 = 'Portion';
    $v_2.$1_0 = '65346';
    $v_2.$C_1 = true;
    var $v_3 = new Mscrm.CustomControls.InputControlProperty();
    $v_3.$D_0 = '';
    $v_3.$6_0 = ['memo', 'string'];
    $v_3.$A_0 = 'This is the Curtain property of the control';
    $v_3.$2_0 = 'Curtain';
    $v_3.$1_0 = 'Yellow';
    $v_3.$C_1 = true;
    $v_0.push($v_1);
    $v_0.push($v_2);
    $v_0.push($v_3);
    return $v_0;
}
Mscrm.CustomControls.Stub.$49 = function($p0) {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.BoundControlProperty();
    $v_1.$D_0 = '';
    $v_1.$6_0 = ['string'];
    $v_1.$A_0 = 'This is the Flat property of the control';
    $v_1.$2_0 = 'Flat';
    $v_1.$1_0 = 'Fax';
    var $v_2 = new Mscrm.CustomControls.InputControlProperty();
    $v_2.$D_0 = '';
    $v_2.$6_0 = ['decimal', 'string'];
    $v_2.$A_0 = 'This is the Village property of the control';
    $v_2.$2_0 = 'Village';
    $v_2.$1_0 = '643';
    $v_2.$C_1 = true;
    var $v_3 = new Mscrm.CustomControls.InputControlProperty();
    $v_3.$D_0 = '';
    $v_3.$6_0 = ['memo', 'string'];
    $v_3.$A_0 = 'This is the Chocolate property of the control';
    $v_3.$2_0 = 'Chocolate';
    $v_3.$1_0 = 'Sweet';
    $v_3.$C_1 = true;
    var $v_4 = new Mscrm.CustomControls.InputControlProperty();
    $v_4.$D_0 = '';
    $v_4.$6_0 = ['string', 'boolean'];
    $v_4.$A_0 = 'This is the Money property of the control';
    $v_4.$2_0 = 'Money';
    $v_4.$1_0 = 'false';
    $v_4.$C_1 = true;
    $v_0.push($v_1);
    $v_0.push($v_2);
    $v_0.push($v_3);
    $v_0.push($v_4);
    return $v_0;
}
Mscrm.CustomControls.Stub.$47 = function($p0) {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.BoundControlProperty();
    $v_1.$D_0 = '';
    $v_1.$6_0 = ['string'];
    $v_1.$A_0 = 'This is the Cricket property of the control';
    $v_1.$2_0 = 'Cricket';
    $v_1.$1_0 = 'Great';
    var $v_2 = new Mscrm.CustomControls.InputControlProperty();
    $v_2.$D_0 = '';
    $v_2.$6_0 = ['decimal', 'string'];
    $v_2.$A_0 = 'This is the Planet property of the control';
    $v_2.$2_0 = 'Planet';
    $v_2.$1_0 = 'Flat';
    $v_2.$C_1 = true;
    $v_2.$j_0 = $v_1.$2_0;
    var $v_3 = new Mscrm.CustomControls.InputControlProperty();
    $v_3.$D_0 = '';
    $v_3.$6_0 = ['memo', 'string'];
    $v_3.$A_0 = 'This is the Cart property of the control';
    $v_3.$2_0 = 'Cart';
    $v_3.$1_0 = '900';
    $v_3.$C_1 = true;
    var $v_4 = new Mscrm.CustomControls.InputControlProperty();
    $v_4.$D_0 = '';
    $v_4.$6_0 = ['string', 'boolean'];
    $v_4.$A_0 = 'This is the Fiction property of the control';
    $v_4.$2_0 = 'Fiction';
    $v_4.$1_0 = '8889';
    $v_4.$C_1 = true;
    var $v_5 = new Mscrm.CustomControls.InputControlProperty();
    $v_5.$D_0 = '';
    $v_5.$6_0 = ['string', 'boolean'];
    $v_5.$A_0 = 'This is the Land  property of the control';
    $v_5.$2_0 = 'Land';
    $v_5.$1_0 = '200';
    $v_5.$C_1 = true;
    $v_0.push($v_1);
    $v_0.push($v_2);
    $v_0.push($v_3);
    $v_0.push($v_4);
    $v_0.push($v_5);
    return $v_0;
}
Mscrm.CustomControls.Stub.$4C = function($p0) {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.BoundControlProperty();
    $v_1.$D_0 = '';
    $v_1.$6_0 = ['string'];
    $v_1.$A_0 = 'This is the Budget property of the control';
    $v_1.$2_0 = 'Budget';
    $v_1.$1_0 = 'Phone';
    var $v_2 = new Mscrm.CustomControls.InputControlProperty();
    $v_2.$D_0 = '';
    $v_2.$6_0 = ['decimal', 'string'];
    $v_2.$A_0 = 'This is the Story  property of the control';
    $v_2.$2_0 = 'Story';
    $v_2.$1_0 = '345';
    $v_2.$C_1 = true;
    var $v_3 = new Mscrm.CustomControls.InputControlProperty();
    $v_3.$D_0 = '';
    $v_3.$6_0 = ['memo', 'string'];
    $v_3.$A_0 = 'This is the Ant  property of the control';
    $v_3.$2_0 = 'Ant';
    $v_3.$1_0 = '900';
    $v_3.$C_1 = true;
    var $v_4 = new Mscrm.CustomControls.InputControlProperty();
    $v_4.$D_0 = '';
    $v_4.$6_0 = ['string', 'boolean'];
    $v_4.$A_0 = 'This is the Beach property of the control';
    $v_4.$2_0 = 'Beach';
    $v_4.$1_0 = true;
    $v_4.$C_1 = true;
    $v_0.push($v_1);
    $v_0.push($v_2);
    $v_0.push($v_3);
    $v_0.push($v_4);
    return $v_0;
}
Mscrm.CustomControls.Stub.$4B = function($p0) {
    var $v_0 = new Array(0);
    var $v_1 = new Mscrm.CustomControls.BoundControlProperty();
    $v_1.$D_0 = '';
    $v_1.$6_0 = ['integer'];
    $v_1.$A_0 = 'The value of the linked field';
    $v_1.$2_0 = 'Value';
    $v_1.$1_0 = '';
    var $v_2 = new Mscrm.CustomControls.InputControlProperty();
    $v_2.$D_0 = '';
    $v_2.$6_0 = ['string'];
    $v_2.$A_0 = 'An encouraging message to display to your user';
    $v_2.$2_0 = 'Message';
    $v_2.$1_0 = 'Good job!';
    $v_2.$C_1 = true;
    $v_0.push($v_1);
    $v_0.push($v_2);
    return $v_0;
}


Mscrm.CustomControls.ViewLookupProperty = function(parentEntityDisplayName,
    parentEntityLogicalName,
    parentEntityTypeCode,
    parentEntityViewId,
    attributeDisplayName,
    attributeLogicalName,
    propertyDescription,
    parentDataSetProperty,
    isTemplate) {
    Mscrm.CustomControls.ViewLookupProperty.initializeBase(this);
    this.$V_0 = true;
    this.$W_0 = true;
    this.$2_0 = Mscrm.CustomControls.CustomControlUtility
        .retrieveFormattedViewLookupPropertyName(parentEntityLogicalName,
            parentEntityViewId,
            attributeLogicalName,
            parentDataSetProperty.$2_0);
    var $v_0 = attributeDisplayName;
    if (!isTemplate && parentDataSetProperty.$Q_1 && parentEntityTypeCode && !isNullOrEmptyString(parentEntityViewId)) {
        $v_0 = String.format('{0} ({1})',
            attributeDisplayName,
            Mscrm.CustomControls.CustomControlUtility
            .getViewNameByEntityTypeCode(parentEntityTypeCode, parentEntityViewId));
    }
    this.$I_0 = (isTemplate)
        ? window.LOCID_CCCONFIG_ADDLOOKUP
        : String.format('{0} {1}', window.LOCID_CCCONFIG_VIEWLOOKUPPREFIX, $v_0);
    this.$6_0 = new Array(0);
    this.$1V_1 = parentEntityDisplayName;
    this.$10_1 = parentEntityLogicalName;
    this.$R_1 = parentEntityTypeCode;
    this.$X_1 = parentEntityViewId;
    this.$1K_1 = attributeDisplayName;
    this.$k_1 = attributeLogicalName;
    this.$A_0 = propertyDescription;
    this.$15_0 = parentDataSetProperty.$15_0;
    this.$1J_0 = parentDataSetProperty.$1J_0;
    this.$n_0 = parentDataSetProperty.$2_0;
    this.$1F_0 = parentDataSetProperty.$1F_0;
    this.viewLookupPropertyState = 1;
    this.parentDataSetProperty = parentDataSetProperty;
    this.$y_1 = isTemplate;
}
Mscrm.CustomControls.ViewLookupProperty.createTemplate = function(parentDataSetProperty) {
    return new Mscrm.CustomControls.ViewLookupProperty(parentDataSetProperty.$A_0,
        parentDataSetProperty.$h_1,
        parentDataSetProperty.$E_1,
        parentDataSetProperty.$B_1,
        null,
        null,
        null,
        parentDataSetProperty,
        true);
}
Mscrm.CustomControls.ViewLookupProperty.createFromModifiedTemplate = function(template) {
    var $v_0 = new Mscrm.CustomControls.ViewLookupProperty(template.$1V_1,
        template.$10_1,
        template.$R_1,
        template.$X_1,
        template.$1K_1,
        template.$k_1,
        template.$A_0,
        template.parentDataSetProperty,
        false);
    $v_0.$B_1 = template.$B_1;
    $v_0.$P_1 = template.$P_1;
    $v_0.$a_1 = template.$a_1;
    $v_0.$b_1 = template.$b_1;
    $v_0.$c_1 = template.$c_1;
    return $v_0;
}
Mscrm.CustomControls.ViewLookupProperty.prototype = {
    clone: function() {
        return new Mscrm.CustomControls.ViewLookupProperty(this.$1V_1,
            this.$10_1,
            this.$R_1,
            this.$X_1,
            this.$1K_1,
            this.$k_1,
            this.$A_0,
            this.parentDataSetProperty,
            this.$y_1);
    },

    updateParentProperties: function() {
        this.$R_1 = this.parentDataSetProperty.$E_1;
        this.$10_1 = Xrm.Internal.getEntityName(this.$R_1);
        this.$1V_1 = Xrm.Internal.getEntityDisplayName(this.$10_1);
        this.$X_1 = this.parentDataSetProperty.$B_1;
    },

    $B_1: null,

    get_viewId: function() {
        return this.$B_1;
    },

    set_viewId: function(value) {
        this.$B_1 = value;
        return value;
    },

    $1V_1: null,

    get_parentEntityDisplayName: function() {
        return this.$1V_1;
    },

    set_parentEntityDisplayName: function(value) {
        this.$1V_1 = value;
        return value;
    },

    $10_1: null,

    get_parentEntityLogicalName: function() {
        return this.$10_1;
    },

    set_parentEntityLogicalName: function(value) {
        this.$10_1 = value;
        return value;
    },

    $R_1: 0,

    get_parentEntityTypeCode: function() {
        return this.$R_1;
    },

    set_parentEntityTypeCode: function(value) {
        this.$R_1 = value;
        return value;
    },

    $X_1: null,

    get_parentEntityViewId: function() {
        return this.$X_1;
    },

    set_parentEntityViewId: function(value) {
        this.$X_1 = value;
        return value;
    },

    $1K_1: null,

    get_attributeDisplayName: function() {
        return this.$1K_1;
    },

    set_attributeDisplayName: function(value) {
        this.$1K_1 = value;
        return value;
    },

    $k_1: null,

    get_attributeLogicalName: function() {
        return this.$k_1;
    },

    set_attributeLogicalName: function(value) {
        this.$k_1 = value;
        return value;
    },

    $c_1: null,

    get_filterRelationshipName: function() {
        return this.$c_1;
    },

    set_filterRelationshipName: function(value) {
        this.$c_1 = value;
        return value;
    },

    $a_1: null,

    get_dependentAttributeName: function() {
        return this.$a_1;
    },

    set_dependentAttributeName: function(value) {
        this.$a_1 = value;
        return value;
    },

    $b_1: null,

    get_dependentAttributetype: function() {
        return this.$b_1;
    },

    set_dependentAttributetype: function(value) {
        this.$b_1 = value;
        return value;
    },

    $P_1: false,

    get_allowFilterOff: function() {
        return this.$P_1;
    },

    set_allowFilterOff: function(value) {
        this.$P_1 = value;
        return value;
    },

    $w_1: false,

    get_disableQuickFind: function() {
        return this.$w_1;
    },

    set_disableQuickFind: function(value) {
        this.$w_1 = value;
        return value;
    },

    $p_1: false,

    get_disableViewPicker: function() {
        return this.$p_1;
    },

    set_disableViewPicker: function(value) {
        this.$p_1 = value;
        return value;
    },

    $14_1: null,

    get_availableViewIds: function() {
        return this.$14_1;
    },

    set_availableViewIds: function(value) {
        this.$14_1 = value;
        return value;
    },

    $Q_1: false,

    get_isPrimary: function() {
        return this.$Q_1;
    },

    set_isPrimary: function(value) {
        this.$Q_1 = value;
        return value;
    },

    viewLookupPropertyState: 0,
    parentDataSetProperty: null,
    $y_1: false,

    get_isTemplate: function() {
        return this.$y_1;
    },

    set_isTemplate: function(value) {
        this.$y_1 = value;
        return value;
    }
}


Mscrm.SubGridDialogArguments.registerClass('Mscrm.SubGridDialogArguments');
Mscrm.CustomControls.ControlProperty.registerClass('Mscrm.CustomControls.ControlProperty');
Mscrm.CustomControls.BoundControlProperty.registerClass('Mscrm.CustomControls.BoundControlProperty',
    Mscrm.CustomControls.ControlProperty);
Mscrm.CustomControls.CandidateControlsDialogManager
    .registerClass('Mscrm.CustomControls.CandidateControlsDialogManager');
Mscrm.CustomControls.CandidateCustomControl.registerClass('Mscrm.CustomControls.CandidateCustomControl');
Mscrm.CustomControls.ControlDescriptor.registerClass('Mscrm.CustomControls.ControlDescriptor');
Mscrm.CustomControls.CustomControlConstants.registerClass('Mscrm.CustomControls.CustomControlConstants');
Mscrm.CustomControls.CustomControlManager.registerClass('Mscrm.CustomControls.CustomControlManager');
Mscrm.CustomControls.CustomControlValidation.registerClass('Mscrm.CustomControls.CustomControlValidation');
Mscrm.CustomControls.CustomControlUtility.registerClass('Mscrm.CustomControls.CustomControlUtility');
Mscrm.CustomControls.DefaultControlName.registerClass('Mscrm.CustomControls.DefaultControlName');
Mscrm.CustomControls.EntityDataBundle.registerClass('Mscrm.CustomControls.EntityDataBundle');
Mscrm.CustomControls.TabIndicationAttribute.registerClass('Mscrm.CustomControls.TabIndicationAttribute');
Mscrm.CustomControls.DatasetNodeControlProperty
    .registerClass('Mscrm.CustomControls.DatasetNodeControlProperty', Mscrm.CustomControls.ControlProperty);
Mscrm.CustomControls.FieldCustomControl.registerClass('Mscrm.CustomControls.FieldCustomControl');
Mscrm.CustomControls.InputControlProperty.registerClass('Mscrm.CustomControls.InputControlProperty',
    Mscrm.CustomControls.ControlProperty);
Mscrm.CustomControls.FormProperty.registerClass('Mscrm.CustomControls.FormProperty',
    Mscrm.CustomControls.InputControlProperty);
Mscrm.CustomControls.FormCardProperty.registerClass('Mscrm.CustomControls.FormCardProperty',
    Mscrm.CustomControls.FormProperty);
Mscrm.CustomControls.FormMainProperty.registerClass('Mscrm.CustomControls.FormMainProperty',
    Mscrm.CustomControls.FormProperty);
Mscrm.CustomControls.FormData.registerClass('Mscrm.CustomControls.FormData');
Mscrm.CustomControls.GroupsNodeControlProperty
    .registerClass('Mscrm.CustomControls.GroupsNodeControlProperty', Mscrm.CustomControls.ControlProperty);
Mscrm.CustomControls.Options.registerClass('Mscrm.CustomControls.Options');
Mscrm.CustomControls.PropertyDialogManager.registerClass('Mscrm.CustomControls.PropertyDialogManager');
Mscrm.CustomControls.Stub.registerClass('Mscrm.CustomControls.Stub');
Mscrm.CustomControls.ViewLookupProperty.registerClass('Mscrm.CustomControls.ViewLookupProperty',
    Mscrm.CustomControls.ControlProperty);
Mscrm.CustomControls.CandidateControlsDialogManager.$l = null;
Mscrm.CustomControls.CustomControlConstants.disableQuickFind = 'DisableQuickFind';
Mscrm.CustomControls.CustomControlConstants.disableViewPicker = 'DisableViewPicker';
Mscrm.CustomControls.CustomControlConstants.availableViewIds = 'AvailableViewIds';
Mscrm.CustomControls.CustomControlConstants.targetEntityType = 'TargetEntityType';
Mscrm.CustomControls.CustomControlConstants.dependentAttributeName = 'DependentAttributeName';
Mscrm.CustomControls.CustomControlConstants.filterRelationshipName = 'FilterRelationshipName';
Mscrm.CustomControls.CustomControlConstants.extraCondition = 'ExtraCondition';
Mscrm.CustomControls.CustomControlConstants.dependentAttributeType = 'DependentAttributeType';
Mscrm.CustomControls.CustomControlConstants.allowFilterOff = 'AllowFilterOff';
Mscrm.CustomControls.CustomControlConstants.defaultViewId = 'DefaultViewId';
Mscrm.CustomControls.CustomControlConstants.emptyString = '';
Mscrm.CustomControls.CustomControlConstants.lookupDot = 'lookup.';
Mscrm.CustomControls.CustomControlConstants.lookupSimple = 'lookup.simple';
Mscrm.CustomControls.CustomControlConstants.bindAttribute = 'BindAttribute';
Mscrm.CustomControls.CustomControlManager.$2J = window.LOCID_PROPERTY_REQUIREDMESSAGE;
Mscrm.CustomControls.CustomControlManager.$l = null;
Mscrm.CustomControls.CustomControlValidation.floatPrecision = 5;
Mscrm.CustomControls.CustomControlValidation.decimalPrecision = 7;
Mscrm.CustomControls.CustomControlValidation.currencyPrecision = 4;
Mscrm.CustomControls.CustomControlValidation.numberMaxValue = 100000000000;
Mscrm.CustomControls.CustomControlValidation.numberMinValue = -100000000000;
Mscrm.CustomControls.CustomControlValidation.currencyMaxValue = 922337203685477;
Mscrm.CustomControls.CustomControlValidation.currencyMinValue = -922337203685477;
Mscrm.CustomControls.CustomControlUtility.$1Z = null;
Mscrm.CustomControls.CustomControlUtility.$2N = null;
Mscrm.CustomControls.CustomControlUtility.closeWindow = 'CloseWindow';
Mscrm.CustomControls.CustomControlUtility.tabIndicationAttributeName = 'tabIndicationAttributeName';
Mscrm.CustomControls.CustomControlUtility
    .controlDescriptorDataUrl = '/Tools/FormEditor/Dialogs/CustomControlDataDialog.aspx';
Mscrm.CustomControls.DefaultControlName.booleanType = window.LOCID_CCCONFIG_FLIP_LABEL;
Mscrm.CustomControls.DefaultControlName.dateTimeType = window.LOCID_CCCONFIG_LABEL_TEXTBOX;
Mscrm.CustomControls.DefaultControlName.decimalType = window.LOCID_CCCONFIG_LABEL_TEXTBOX;
Mscrm.CustomControls.DefaultControlName.doubleType = window.LOCID_CCCONFIG_LABEL_TEXTBOX;
Mscrm.CustomControls.DefaultControlName.integerType = window.LOCID_CCCONFIG_LABEL_TEXTBOX;
Mscrm.CustomControls.DefaultControlName.lookupType = window.LOCID_CCCONFIG_LABEL_TEXTBOX;
Mscrm.CustomControls.DefaultControlName.memoType = window.LOCID_CCCONFIG_LABEL_TEXTAREA;
Mscrm.CustomControls.DefaultControlName.moneyType = window.LOCID_CCCONFIG_LABEL_TEXTBOX;
Mscrm.CustomControls.DefaultControlName.optionSetType = window.LOCID_CCCONFIG_LABEL_OPTIONSET;
Mscrm.CustomControls.DefaultControlName.stringType = window.LOCID_CCCONFIG_LABEL_TEXTBOX;
Mscrm.CustomControls.DefaultControlName.gridType = window.LOCID_CCCONFIG_LIST_GRID;
Mscrm.CustomControls.TabIndicationAttribute.tabStart = 'tabStart';
Mscrm.CustomControls.TabIndicationAttribute.tabEnd = 'tabEnd';
Mscrm.CustomControls.TabIndicationAttribute.tabWeb = 'tabWeb';
Mscrm.CustomControls.TabIndicationAttribute.tabPhone = 'tabPhone';
Mscrm.CustomControls.TabIndicationAttribute.tabTablet = 'tabTablet';
Mscrm.CustomControls.PropertyDialogManager.$l = null;
Mscrm.CustomControls.PropertyDialogManager.$3I = window.LOCID_PROPERTY_INFORMATION;
Mscrm.CustomControls.PropertyDialogManager.$3J = window.LOCID_PROPERTY_RESETINFORMATION;
Mscrm.CustomControls.PropertyDialogManager.$42 = window.LOCID_PROPERTY_NAMEINFORMATION;
Mscrm.CustomControls.PropertyDialogManager.$41 = window.LOCID_PROPERTY_DEPENDENTERROR;
//@ sourceMappingURL=.srcmap