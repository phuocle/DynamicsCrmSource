Type.registerNamespace('Mscrm');

Mscrm.AddressComputation = function Mscrm_AddressComputation(streetValue, cityValue, stateValue, postalCodeValue, countryValue) {
    this.$G_0 = [ 2, 4, 5, 6, 90 ];
    this.$H_0 = [ 2, 9, 10, 6, 90 ];
    this.$F_0 = [ 2, 4, 5, 8, 90 ];
    this.$E_0 = [ 4, 5, 6, 3, 90 ];
    this.$M_0 = [ 7, 10, 9, 2, 90 ];
    this.$C_0 = streetValue;
    this.$D_0 = cityValue;
    this.$A_0 = stateValue;
    this.$8_0 = postalCodeValue;
    this.$B_0 = countryValue;
}
Mscrm.AddressComputation.prototype = {
    $2_0: false,
    $0_0: false,
    $4_0: false,
    $1_0: false,
    $3_0: 0,
    $6_0: 0,
    $C_0: null,
    $D_0: null,
    $A_0: null,
    $8_0: null,
    $B_0: null,
    $P_0: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (77,3)
    buildAddress: function Mscrm_AddressComputation$buildAddress() {
        var $v_0;
        var $v_1 = new Sys.StringBuilder();
        this.$2_0 = !isNullOrEmptyString(this.$C_0);
        this.$0_0 = !isNullOrEmptyString(this.$8_0);
        this.$4_0 = !isNullOrEmptyString(this.$D_0);
        this.$1_0 = !isNullOrEmptyString(this.$A_0);
        var $v_2 = true;
        var $v_3;
        var $v_4;
        var $v_5;
        var $v_6;
        var $v_7;
        var $v_8;
        var $v_9;
        var $v_A;
        var $v_B = window.CountryNameList;
        var $v_C = eval('(' + $v_B + ')');
        var $v_D = $v_C;
        $v_0 = $v_D.Countries;
        this.$P_0 = $v_D.DefaultIndex;
        if (!this.$2_0 && !this.$0_0 && !this.$4_0 && !this.$1_0 && isNullOrEmptyString(this.$B_0)) {
            return $v_1.toString().trim();
        }
        this.$6_0 = this.$Y_0($v_0, this.$B_0);
        $v_8 = Mscrm.CountryInfo.getCodeLocation($v_0[this.$6_0].FormatParameters);
        $v_3 = Mscrm.CountryInfo.isStateOnOwnLine($v_0[this.$6_0].FormatParameters);
        $v_4 = Mscrm.CountryInfo.isStateBeforeCity($v_0[this.$6_0].FormatParameters);
        $v_5 = Mscrm.CountryInfo.isUpsideDown($v_0[this.$6_0].FormatParameters);
        $v_7 = Mscrm.CountryInfo.isStateInBracesOnly($v_0[this.$6_0].FormatParameters);
        $v_A = Mscrm.CountryInfo.getCityPostalCodeSeparator($v_0[this.$6_0].FormatParameters);
        $v_9 = Mscrm.CountryInfo.getCityStateSeparator($v_0[this.$6_0].FormatParameters);
        $v_6 = Mscrm.CountryInfo.isBlankLineAfterStreet($v_0[this.$6_0].FormatParameters);
        this.$3_0 = $v_0[this.$6_0].LCID;
        if (((this.$5_0(this.$3_0) === 17) || (this.$5_0(this.$3_0) === 18) || ((this.$5_0(this.$3_0) === 4) && ((this.$9_0(this.$3_0) === 1) || (this.$9_0(this.$3_0) === 2) || (this.$9_0(this.$3_0) === 4)))) && this.$T_0(this.$1_0, this.$4_0, this.$2_0)) {
            $v_1 = this.$U_0(this.$6_0, $v_0);
        }
        else {
            if (($v_8 === 4) && this.$0_0) {
                $v_1.append(this.$8_0);
                if (this.$2_0 || this.$4_0 || this.$1_0 || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (!$v_5 && this.$2_0) {
                $v_1.append(this.$C_0);
                if ((this.$0_0 && ($v_8 !== 4)) || this.$4_0 || this.$1_0 || $v_2) {
                    $v_1.appendLine();
                    if ($v_6) {
                        $v_1.appendLine();
                    }
                }
            }
            if ($v_5 && this.$1_0 && $v_3) {
                if ($v_7) {
                    $v_1.append('(');
                }
                $v_1.append(this.$A_0);
                if ($v_7) {
                    $v_1.append(')');
                }
                if (this.$0_0 && ($v_8 === 3)) {
                    $v_1.append(' ');
                }
                else if ((this.$0_0 && ($v_8 !== 4)) || this.$4_0 || this.$2_0 || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (((!$v_8) || ($v_8 === 6)) && this.$0_0) {
                $v_1.append(this.$8_0);
                if ($v_8 === 6) {
                    $v_1.appendLine();
                }
                else if (this.$4_0) {
                    if (!$v_A) {
                        $v_1.append(' ');
                    }
                    else if ($v_A === 32) {
                        $v_1.append(', ');
                    }
                    else if ($v_A === 64) {
                        $v_1.append('-');
                    }
                    else if ($v_A === 96) {
                        $v_1.append(' - ');
                    }
                }
                else if (this.$1_0 && !$v_3) {
                    $v_1.append(' ');
                }
                else if (this.$1_0 || (this.$2_0 && $v_5) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if ($v_5 && this.$1_0 && $v_4) {
                if ($v_7) {
                    $v_1.append('(');
                }
                $v_1.append(this.$A_0);
                if ($v_7) {
                    $v_1.append(')');
                }
                if (this.$4_0 || (this.$0_0 && ($v_8 === 1))) {
                    $v_1.append(' ');
                }
                else if ((this.$0_0 && ($v_8 === 5)) || this.$2_0 || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (this.$4_0) {
                $v_1.append(this.$D_0);
                if (this.$3_0 === 1090) {
                    $v_1.appendLine();
                    $v_1.append(this.$B_0);
                    $v_2 = false;
                    $v_1.appendLine();
                }
                else if (this.$0_0 && ($v_8 === 2)) {
                    if (!$v_A) {
                        $v_1.append(' ');
                    }
                    else if ($v_A === 32) {
                        $v_1.append(', ');
                    }
                    else if ($v_A === 64) {
                        $v_1.append('-');
                    }
                    else if ($v_A === 96) {
                        $v_1.append(' - ');
                    }
                }
                else if (this.$1_0 && !$v_3 && !$v_4) {
                    if (!$v_9) {
                        $v_1.append(' ');
                    }
                    else if ($v_9 === 8) {
                        $v_1.append(', ');
                    }
                    else if ($v_9 === 16) {
                        $v_1.append(' - ');
                    }
                }
                else if (this.$0_0 && ($v_8 === 1)) {
                    if (!$v_A) {
                        $v_1.append(' ');
                    }
                    else if ($v_A === 32) {
                        $v_1.append(', ');
                    }
                    else if ($v_A === 64) {
                        $v_1.append('-');
                    }
                    else if ($v_A === 96) {
                        $v_1.append(' - ');
                    }
                }
                else if (this.$1_0 || (this.$0_0 && (($v_8 === 5) || ($v_8 === 3))) || (this.$2_0 && $v_5) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (($v_8 === 2) && this.$0_0) {
                $v_1.append(this.$8_0);
                if (this.$1_0 && !$v_3) {
                    $v_1.append(' ');
                }
                else if (this.$1_0 || (this.$2_0 && $v_5) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (this.$1_0 && !$v_3 && !$v_4) {
                if ($v_7) {
                    $v_1.append('(');
                }
                $v_1.append(this.$A_0);
                if ($v_7) {
                    $v_1.append(')');
                }
                if (this.$0_0 && ($v_8 === 1)) {
                    $v_1.append(' ');
                }
                else if ((this.$0_0 && ($v_8 === 5)) || (this.$2_0 && $v_5) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (($v_8 === 1) && this.$0_0) {
                $v_1.append(this.$8_0);
                if ((this.$1_0 && $v_3) || (this.$2_0 && $v_5) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (this.$1_0 && $v_3 && !$v_5) {
                if ($v_7) {
                    $v_1.append('(');
                }
                $v_1.append(this.$A_0);
                if ($v_7) {
                    $v_1.append(')');
                }
                if ($v_2 && ((this.$3_0 === 1091) || (this.$3_0 === 2115))) {
                    $v_1.append(', ');
                    $v_1.append(this.$B_0);
                    $v_2 = false;
                }
                if (this.$0_0 && ($v_8 === 3)) {
                    $v_1.append(' ');
                }
                else if ((this.$0_0 && ($v_8 === 5)) || (this.$2_0 && $v_5) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if (($v_8 === 3) && this.$0_0) {
                $v_1.append(this.$8_0);
                if ((this.$2_0 && $v_5) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if ($v_5 && this.$2_0) {
                if ($v_6) {
                    $v_1.appendLine();
                }
                $v_1.append(this.$C_0);
                if ((this.$0_0 && ($v_8 === 5)) || $v_2) {
                    $v_1.appendLine();
                }
            }
            if ($v_2 && ((this.$3_0 === 1068) || (this.$3_0 === 2092) || (this.$3_0 === 1049) || (this.$3_0 === 2073) || (this.$3_0 === 1091) || (this.$3_0 === 2115) || (this.$3_0 === 1058) || (this.$3_0 === 1046))) {
                $v_1.append(this.$B_0);
                $v_2 = false;
                if (this.$0_0 && ($v_8 === 5)) {
                    $v_1.appendLine();
                }
            }
            if (($v_8 === 5) && this.$0_0) {
                $v_1.append(this.$8_0);
                if ($v_2) {
                    if ((this.$3_0 === 7177) || (this.$3_0 === 1078)) {
                        $v_1.append(' ');
                        $v_1.append(this.$B_0);
                        $v_2 = false;
                    }
                    else {
                        $v_1.appendLine();
                    }
                }
            }
            if ($v_2) {
                $v_1.append(this.$B_0);
            }
        }
        var $v_E = $v_1.toString().trim();
        return $v_E;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (406,3)
    $T_0: function Mscrm_AddressComputation$$T_0($p0, $p1, $p2) {
        var $v_0 = false;
        if ($p0) {
            $v_0 = this.$I_0(this.$A_0);
        }
        if (!$v_0 && $p1) {
            $v_0 = this.$I_0(this.$D_0);
        }
        if (!$v_0 && $p2) {
            $v_0 = this.$I_0(this.$C_0);
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (436,3)
    $I_0: function Mscrm_AddressComputation$$I_0($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            if ($p0.charCodeAt($v_0) > 127) {
                return true;
            }
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (456,3)
    $U_0: function Mscrm_AddressComputation$$U_0($p0, $p1) {
        var $v_0 = new Sys.StringBuilder();
        var $v_1;
        var $v_2 = 0;
        $v_2 = $p1[$p0].LCID;
        if (this.$5_0($v_2) === 17) {
            $v_1 = this.$G_0;
        }
        else if (this.$5_0($v_2) === 18) {
            $v_1 = this.$H_0;
        }
        else if ((this.$5_0($v_2) === 4) && (this.$9_0($v_2) === 1)) {
            $v_1 = this.$F_0;
        }
        else if ((this.$5_0($v_2) === 4) && ((this.$9_0($v_2) === 2) || (this.$9_0($v_2) === 4))) {
            $v_1 = this.$E_0;
        }
        else if (this.$c_0($v_2)) {
            $v_1 = this.$G_0;
        }
        else if (this.$d_0($v_2)) {
            $v_1 = this.$H_0;
        }
        else if (this.$h_0($v_2)) {
            $v_1 = this.$F_0;
        }
        else if (this.$f_0($v_2)) {
            $v_1 = this.$E_0;
        }
        else {
            $v_1 = this.$M_0;
        }
        for (var $$arr_5 = $v_1, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_3 = $$arr_5[$$idx_7];
            if ($v_3 === 90) {
                break;
            }
            else {
                switch ($v_3) {
                    case 2:
                        if (this.$0_0) {
                            $v_0.append(this.$8_0);
                        }
                        if (this.$1_0 || this.$4_0 || this.$2_0) {
                            $v_0.appendLine();
                        }
                        break;
                    case 3:
                        if (this.$0_0) {
                            if (this.$1_0 || this.$4_0 || this.$2_0) {
                                $v_0.appendLine();
                            }
                            $v_0.append(this.$8_0);
                        }
                        break;
                    case 4:
                        if (this.$1_0) {
                            $v_0.append(this.$A_0);
                        }
                        break;
                    case 5:
                        if (this.$4_0) {
                            $v_0.append(this.$D_0);
                        }
                        break;
                    case 6:
                        if (this.$2_0) {
                            $v_0.append(this.$C_0);
                        }
                        break;
                    case 8:
                        if (this.$1_0 || this.$4_0) {
                            $v_0.appendLine();
                        }
                        $v_0.append(this.$C_0);
                        break;
                    case 9:
                        if (this.$1_0) {
                            $v_0.append(this.$A_0);
                            if (this.$4_0 || this.$2_0) {
                                $v_0.append(' ');
                            }
                        }
                        break;
                    case 10:
                        if (this.$4_0) {
                            $v_0.append(this.$D_0);
                            if (this.$2_0) {
                                $v_0.append(' ');
                            }
                        }
                        break;
                }
            }
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (560,3)
    $Y_0: function Mscrm_AddressComputation$$Y_0($p0, $p1) {
        var $v_0 = 0;
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            if (this.$i_0($p0[$v_1].CountryNames, $p1)) {
                return $v_0;
            }
            $v_0 = $v_0 + 1;
        }
        return this.$P_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (578,3)
    $i_0: function Mscrm_AddressComputation$$i_0($p0, $p1) {
        var $v_0 = '|';
        var $v_1 = $p0.split($v_0);
        for (var $$arr_4 = $v_1, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6];
            if ($v_2.toLowerCase() === $p1.toLowerCase()) {
                return true;
            }
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (595,3)
    $5_0: function Mscrm_AddressComputation$$5_0($p0) {
        return ($p0 & 1023);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (605,3)
    $9_0: function Mscrm_AddressComputation$$9_0($p0) {
        return ($p0 >> 10);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (615,3)
    $c_0: function Mscrm_AddressComputation$$c_0($p0) {
        return ((this.$5_0($p0)) === 17);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (625,3)
    $d_0: function Mscrm_AddressComputation$$d_0($p0) {
        return ((this.$5_0($p0)) === 18);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (635,3)
    $e_0: function Mscrm_AddressComputation$$e_0($p0) {
        return (((this.$5_0($p0)) === 4) && ((this.$9_0($p0)) === 2));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (645,3)
    $h_0: function Mscrm_AddressComputation$$h_0($p0) {
        return (((this.$5_0($p0)) === 4) && ((this.$9_0($p0)) === 1));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (655,3)
    $g_0: function Mscrm_AddressComputation$$g_0($p0) {
        return (((this.$5_0($p0)) === 4) && ((this.$9_0($p0)) === 4));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (665,3)
    $f_0: function Mscrm_AddressComputation$$f_0($p0) {
        return (this.$e_0($p0) || this.$g_0($p0));
    }
}


Mscrm.CountryInfo = function Mscrm_CountryInfo() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (690,3)
Mscrm.CountryInfo.getCodeLocation = function Mscrm_CountryInfo$getCodeLocation(formatters) {
    return (formatters & 7);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (695,3)
Mscrm.CountryInfo.isUpsideDown = function Mscrm_CountryInfo$isUpsideDown(formatters) {
    return (formatters & 4096) === 4096;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (700,3)
Mscrm.CountryInfo.isStateOnOwnLine = function Mscrm_CountryInfo$isStateOnOwnLine(formatters) {
    return (formatters & 256) === 256;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (705,3)
Mscrm.CountryInfo.isStateBeforeCity = function Mscrm_CountryInfo$isStateBeforeCity(formatters) {
    return (formatters & 512) === 512;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (710,3)
Mscrm.CountryInfo.isStateInBracesOnly = function Mscrm_CountryInfo$isStateInBracesOnly(formatters) {
    return (formatters & 1024) === 1024;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (715,3)
Mscrm.CountryInfo.isBlankLineAfterStreet = function Mscrm_CountryInfo$isBlankLineAfterStreet(formatters) {
    return (formatters & 8192) === 8192;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (720,3)
Mscrm.CountryInfo.getCityStateSeparator = function Mscrm_CountryInfo$getCityStateSeparator(formatters) {
    return (formatters & 24);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\AddressComputation.cs (725,3)
Mscrm.CountryInfo.getCityPostalCodeSeparator = function Mscrm_CountryInfo$getCityPostalCodeSeparator(formatters) {
    return (formatters & 96);
}
Mscrm.CountryInfo.prototype = {
    LCID: 0,
    CountryNames: null,
    FormatParameters: 0
}


Mscrm.CountryTable = function Mscrm_CountryTable() {
}
Mscrm.CountryTable.prototype = {
    Countries: null,
    DefaultIndex: 0
}


Mscrm.CompositeDataControlUtilities = function Mscrm_CompositeDataControlUtilities() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (44,3)
Mscrm.CompositeDataControlUtilities.initializeNameCompositeControl = function Mscrm_CompositeDataControlUtilities$initializeNameCompositeControl(linkControlObj) {
    if (linkControlObj.get_flyOutDialog() && linkControlObj.get_flyOutDialog().get_options()) {
        linkControlObj.get_flyOutDialog().get_options().set_showCloseButton(false);
        linkControlObj.get_flyOutDialog().get_options().set_width(335);
        Mscrm.CompositeDataControlUtilities.$b(linkControlObj);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (55,3)
Mscrm.CompositeDataControlUtilities.$b = function Mscrm_CompositeDataControlUtilities$$b($p0) {
    switch (window.FullNameConventionCode) {
        case 0:
        case 1:
        case 6:
        case 7:
            var $v_0 = Mscrm.CompositeDataControlUtilities.$Z($p0.get_flyOutDialog().get_id());
            if ($v_0) {
                var $v_1 = Xrm.Page.ui.controls.get($v_0.attr('id'));
                if ($v_1) {
                    $v_1.setVisible(false);
                    $v_0.parents('tr').first().hide();
                    $p0.get_flyOutDialog().get_options().set_minHeight(100);
                }
            }
            break;
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (81,3)
Mscrm.CompositeDataControlUtilities.$Z = function Mscrm_CompositeDataControlUtilities$$Z($p0) {
    var $v_0 = null;
    var $v_1 = $P_CRM('#' + $p0).find('.ms-crm-Inline-Chrome');
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        if ($v_1[$v_2] && $v_1[$v_2].getAttribute('id')) {
            $v_0 = $v_1[$v_2].getAttribute('id');
            if ($v_0.endsWith('middlename')) {
                return $P_CRM($v_1[$v_2]);
            }
        }
    }
    return null;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (104,3)
Mscrm.CompositeDataControlUtilities.initializeAddressCompositeControl = function Mscrm_CompositeDataControlUtilities$initializeAddressCompositeControl(linkControlObj) {
    if (linkControlObj.get_flyOutDialog() && linkControlObj.get_flyOutDialog().get_options()) {
        linkControlObj.get_flyOutDialog().get_options().set_showCloseButton(false);
        linkControlObj.get_flyOutDialog().get_options().set_width(335);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (119,3)
Mscrm.CompositeDataControlUtilities.$a = function Mscrm_CompositeDataControlUtilities$$a($p0) {
    if ($p0.startsWith('yomi')) {
        return 'yomi';
    }
    else {
        return '';
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (132,3)
Mscrm.CompositeDataControlUtilities.$J = function Mscrm_CompositeDataControlUtilities$$J($p0) {
    return $p0.trim();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (143,3)
Mscrm.CompositeDataControlUtilities.$7 = function Mscrm_CompositeDataControlUtilities$$7($p0) {
    var $v_0 = '';
    var $v_1 = Mscrm.InlineEditDataService.get_formEntity().get_attributes().get($p0);
    if (!IsNull($v_1) && !IsNull($v_1.get_value())) {
        $v_0 = $v_1.get_value();
    }
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (161,3)
Mscrm.CompositeDataControlUtilities.$V = function Mscrm_CompositeDataControlUtilities$$V($p0, $p1, $p2) {
    var $v_0 = '';
    if ($p1.length > 0) {
        $v_0 = $p1;
    }
    if ($p1.length > 0 && ($p0.length > 0 || $p2.length > 0)) {
        $v_0 += ',';
    }
    if ($p0.length > 0) {
        $v_0 = $v_0 + ' ' + $p0;
    }
    if ($p2.length > 0) {
        $v_0 = $v_0 + ' ' + $p2 + '.';
    }
    return $v_0.toString().trim();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (192,3)
Mscrm.CompositeDataControlUtilities.$W = function Mscrm_CompositeDataControlUtilities$$W($p0, $p1, $p2, $p3) {
    $p1 = Mscrm.CompositeDataControlUtilities.$J($p1);
    $p2 = Mscrm.CompositeDataControlUtilities.$J($p2);
    $p3 = Mscrm.CompositeDataControlUtilities.$J($p3);
    var $v_0 = '';
    if ($p2.length > 0) {
        $v_0 = $p2.substring(0, 1);
    }
    var $v_1 = '';
    switch ($p0) {
        case 0:
            if ($p3.length > 0 && $p1.length > 0) {
                $v_1 = $p3 + ', ' + $p1;
            }
            else {
                $v_1 = $p3 + ' ' + $p1;
            }
            break;
        case 1:
            $v_1 = $p1 + ' ' + $p3;
            break;
        case 2:
            $v_1 = Mscrm.CompositeDataControlUtilities.$V($p1, $p3, $v_0);
            break;
        case 3:
            $v_1 = $p1;
            if ($p2.length > 0) {
                $v_1 = $v_1 + ' ' + $v_0 + '.';
            }
            $v_1 = $v_1 + ' ' + $p3;
            break;
        case 4:
            if ($p3.length > 0) {
                $v_1 = $p3;
            }
            if ($p3.length > 0 && ($p1.length > 0 || $p2.length > 0)) {
                $v_1 += ',';
            }
            if ($p1.length > 0) {
                $v_1 = $v_1 + ' ' + $p1;
            }
            if ($p2.length > 0) {
                $v_1 = $v_1 + ' ' + $p2;
            }
            break;
        case 5:
            $v_1 = $p1;
            if ($p2.length > 0) {
                $v_1 = $v_1 + ' ' + $p2;
            }
            $v_1 = $v_1 + ' ' + $p3;
            break;
        case 6:
            $v_1 = $p3 + ' ' + $p1;
            break;
        case 7:
            $v_1 = $p3 + $p1;
            break;
        default:
            $v_1 = $p3;
            break;
    }
    return $v_1.toString().trim();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (276,3)
Mscrm.CompositeDataControlUtilities.$X = function Mscrm_CompositeDataControlUtilities$$X($p0) {
    var $v_0 = $p0.indexOf('_');
    if ($v_0 > 0) {
        return $p0.substring(0, $v_0) + '_';
    }
    else {
        throw Error.create('Invalid Argument');
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (291,3)
Mscrm.CompositeDataControlUtilities.$N = function Mscrm_CompositeDataControlUtilities$$N($p0, $p1) {
    var $v_0;
    var $v_1 = null;
    var $v_2 = new Mscrm.FormDataEntity();
    $v_2 = Mscrm.InlineEditDataService.get_formEntity();
    for (var $v_3 = 0; $v_3 < $p1.length; $v_3++) {
        $v_0 = Mscrm.InlineEditDataService.get_formEntity().get_attributes().get($p0 + $p1[$v_3]);
        if (!IsNull($v_0)) {
            $v_1 = $v_2.validateValueForCompositeField($v_0, 2);
            if (!$v_1.isValid) {
                Mscrm.ErrorStatusControl.showError($v_1.errorText);
                $v_0.get_firstAvailableControl().setFocus();
                return false;
            }
        }
    }
    Mscrm.ErrorStatusControl.hide(Mscrm.MessageRanks.error);
    return true;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (320,3)
Mscrm.CompositeDataControlUtilities.$R = function Mscrm_CompositeDataControlUtilities$$R($p0) {
    var $v_0 = false;
    var $v_1 = $P_CRM('#' + $p0).find('.ms-crm-Inline-Chrome');
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        if ($v_1[$v_2] && $v_1[$v_2].getAttribute('hasError')) {
            $v_0 = $v_0 || Boolean.parse($v_1[$v_2].getAttribute('hasError').toString());
        }
    }
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (338,3)
Mscrm.CompositeDataControlUtilities.checkForComposeFullName = function Mscrm_CompositeDataControlUtilities$checkForComposeFullName(linkControlObj) {
    var $v_0 = '', $v_1 = '', $v_2 = '', $v_3 = '';
    Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_4 = Mscrm.InlineEditDataService.get_formEntity();
    var $v_5 = Mscrm.CompositeDataControlUtilities.$a(linkControlObj.get_fieldName());
    if (Mscrm.CompositeDataControlUtilities.$N($v_5, Mscrm.CompositeDataControlUtilities.$Q) && !Mscrm.CompositeDataControlUtilities.$R(linkControlObj.get_flyOutDialog().get_id())) {
        $v_0 = Mscrm.CompositeDataControlUtilities.$7($v_5 + 'firstname');
        $v_1 = Mscrm.CompositeDataControlUtilities.$7($v_5 + 'middlename');
        $v_2 = Mscrm.CompositeDataControlUtilities.$7($v_5 + 'lastname');
        $v_3 = Mscrm.CompositeDataControlUtilities.$W(window.FullNameConventionCode, $v_0, $v_1, $v_2);
        ($v_4.get_attributes().get($v_5 + Mscrm.CompositeDataControlUtilities.$O)).setValueForCompositeField($v_3);
        linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(true);
    }
    else {
        linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(false);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (371,3)
Mscrm.CompositeDataControlUtilities.$S = function Mscrm_CompositeDataControlUtilities$$S($p0) {
    var $v_0 = Mscrm.CompositeDataControlUtilities.$7($p0 + 'line1');
    var $v_1 = Mscrm.CompositeDataControlUtilities.$7($p0 + 'line2');
    var $v_2 = Mscrm.CompositeDataControlUtilities.$7($p0 + 'line3');
    return Mscrm.CompositeDataControlUtilities.combineStreetValues($v_0, $v_1, $v_2);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (387,3)
Mscrm.CompositeDataControlUtilities.combineStreetValues = function Mscrm_CompositeDataControlUtilities$combineStreetValues(street1, street2, street3) {
    var $v_0 = street1;
    if (!isNullOrEmptyString($v_0) && !isNullOrEmptyString(street2)) {
        $v_0 = $v_0 + '\r\n';
    }
    $v_0 = $v_0 + street2;
    if (!isNullOrEmptyString($v_0) && !isNullOrEmptyString(street3)) {
        $v_0 = $v_0 + '\r\n';
    }
    $v_0 = $v_0 + street3;
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (405,3)
Mscrm.CompositeDataControlUtilities.checkForComposeAddress = function Mscrm_CompositeDataControlUtilities$checkForComposeAddress(linkControlObj) {
    var $v_0 = '', $v_1 = '', $v_2 = '', $v_3 = '', $v_4 = '';
    Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var $v_5 = '';
    $v_5 = Mscrm.CompositeDataControlUtilities.$X(linkControlObj.get_fieldName());
    if (Mscrm.CompositeDataControlUtilities.$N($v_5, Mscrm.CompositeDataControlUtilities.$K) && !Mscrm.CompositeDataControlUtilities.$R(linkControlObj.get_flyOutDialog().get_id())) {
        $v_0 = Mscrm.CompositeDataControlUtilities.$S($v_5);
        $v_1 = Mscrm.CompositeDataControlUtilities.$7($v_5 + 'city');
        $v_2 = Mscrm.CompositeDataControlUtilities.$7($v_5 + 'stateorprovince');
        $v_3 = Mscrm.CompositeDataControlUtilities.$7($v_5 + 'postalcode');
        $v_4 = Mscrm.CompositeDataControlUtilities.$7($v_5 + 'country');
        Mscrm.CompositeDataControlUtilities.setComposeAddress($v_5, $v_0, $v_1, $v_2, $v_3, $v_4);
        linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(true);
    }
    else {
        linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(false);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\compositedata\CompositeDataControlUtilities.cs (443,3)
Mscrm.CompositeDataControlUtilities.setComposeAddress = function Mscrm_CompositeDataControlUtilities$setComposeAddress(addressPrefix, street, city, state, postalCode, country) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity();
    var $v_1 = new Mscrm.AddressComputation(street, city, state, postalCode, country);
    var $v_2 = $v_1.buildAddress();
    ($v_0.get_attributes().get(addressPrefix + Mscrm.CompositeDataControlUtilities.$L)).setValueForCompositeField($v_2);
}


Mscrm.AddressFormatParameters = function Mscrm_AddressFormatParameters() {
}


Mscrm.PrimaryLanguageIdentifiers = function Mscrm_PrimaryLanguageIdentifiers() {
}


Mscrm.SecondaryLanguageIdentifiers = function Mscrm_SecondaryLanguageIdentifiers() {
}


Mscrm.AddressComputation.registerClass('Mscrm.AddressComputation');
Mscrm.CountryInfo.registerClass('Mscrm.CountryInfo');
Mscrm.CountryTable.registerClass('Mscrm.CountryTable');
Mscrm.CompositeDataControlUtilities.registerClass('Mscrm.CompositeDataControlUtilities');
Mscrm.AddressFormatParameters.registerClass('Mscrm.AddressFormatParameters');
Mscrm.PrimaryLanguageIdentifiers.registerClass('Mscrm.PrimaryLanguageIdentifiers');
Mscrm.SecondaryLanguageIdentifiers.registerClass('Mscrm.SecondaryLanguageIdentifiers');
Mscrm.CompositeDataControlUtilities.$O = 'fullname';
Mscrm.CompositeDataControlUtilities.$L = 'composite';
Mscrm.CompositeDataControlUtilities.$Q = [ 'firstname', 'middlename', 'lastname' ];
Mscrm.CompositeDataControlUtilities.$K = [ 'line1', 'line2', 'line3', 'city', 'stateorprovince', 'postalcode', 'country' ];
