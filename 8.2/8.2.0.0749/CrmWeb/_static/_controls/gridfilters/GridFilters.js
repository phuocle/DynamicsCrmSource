Type.registerNamespace("Mscrm");
Mscrm.ClickEvent = function() {};
Mscrm.ClickEvent.prototype = { processMenuitemClick: 0, processOkClick: 1, processCancelClick: 2 };
Mscrm.ClickEvent.registerEnum("Mscrm.ClickEvent", false);
Mscrm.BaseFetchXmlProcessor = function(elements, fetchXml) {
    this.$19_0 = {};
    this.$1A_0 = {};
    this.$Q_0 = fetchXml;
    for (var $v_0, $v_1, $v_2, $v_3, $v_4, $v_5 = "", $v_6, $v_7, $v_8 = 0; $v_8 < elements.length; $v_8++) {
        $v_7 = elements[$v_8];
        $v_0 = $v_7.getAttribute("attributename");
        $v_4 = $v_7.getAttribute("attributetype");
        $v_3 = $v_7.getAttribute("entityname");
        $v_1 = $v_7.getAttribute("attributeformat");
        $v_6 = $v_7.getAttribute("isfromrelatedentity").toLowerCase() === "true" ? true : false;
        if ($v_6) {
            $v_2 = $v_7.getAttribute("columnname");
            $v_5 = $v_7.getAttribute("linkedEntityDetails")
        } else $v_2 = $v_0;
        var $v_9 = new Mscrm.FilterConditionCollection($v_0, $v_4, $v_6, $v_3, $v_1);
        $v_9.$e_0 = $v_5;
        this.$19_0[$v_2] = $v_9;
        this.$1A_0[$v_0] = $v_0;
        var $v_A = this.$2Y_0($v_7);
        if (!IsNull($v_A) && $v_A !== $v_0) this.$1A_0[$v_A] = $v_0
    }
};
Mscrm.BaseFetchXmlProcessor.sanitizeFetchXmlFilters = function(filterNodeXml) {
    if (!IsNull(filterNodeXml)) {
        Mscrm.BaseFetchXmlProcessor.$2A(filterNodeXml, null);
        Mscrm.BaseFetchXmlProcessor.$3E(filterNodeXml)
    }
};
Mscrm.BaseFetchXmlProcessor.$3E = function($p0) {
    var $v_0 = null, $v_1 = true, $v_2 = null, $v_3, $v_4;
    while ($v_1) {
        $v_1 = false;
        $v_0 = XUI.Xml.SelectNodes($p0, ".//filter", null);
        if (!IsNull($v_0))
            for (var $v_5 = $v_0.length, $v_6 = 0; $v_6 < $v_5; $v_6++)
                if ($v_0[$v_6].childNodes.length === 1) {
                    $v_2 = XUI.Xml.SelectNodes($v_0[$v_6], "condition", null);
                    if (!IsNull($v_2) && $v_2.length === 1) {
                        $v_3 = $v_0[$v_6];
                        if ($v_3.parentNode.nodeName === "filter") {
                            $v_4 = $v_2[0];
                            $v_3.parentNode.appendChild($v_4);
                            $v_3.parentNode.removeChild($v_3);
                            $v_1 = true
                        }
                    }
                } else if (!$v_0[$v_6].childNodes.length) {
                    $v_3 = $v_0[$v_6];
                    $v_3.parentNode.removeChild($v_3);
                    $v_1 = true
                }
    }
};
Mscrm.BaseFetchXmlProcessor.$2A = function($p0, $p1) {
    for (var $v_0 = XUI.Xml
                 .SelectNodes($p0, "filter", null),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) Mscrm.BaseFetchXmlProcessor.$2A($v_0[$v_1], $p0);
    if (!IsNull($p1)) {
        var $v_2 = "and", $v_3 = "and";
        if (!IsNull($p0.attributes.getNamedItem("type"))) $v_2 = XUI.Xml.GetText($p0.attributes.getNamedItem("type"));
        if (!IsNull($p1.attributes.getNamedItem("type"))) $v_3 = XUI.Xml.GetText($p1.attributes.getNamedItem("type"));
        if ($v_2.toUpperCase() === $v_3.toUpperCase()) {
            for (var $v_4 = $p0, $v_5 = $p0.childNodes.length - 1; $v_5 >= 0; $v_5--) {
                var $v_6 = $p0.childNodes[$v_5];
                $p1.insertBefore($v_6, $v_4);
                $v_4 = $v_6
            }
            $p0.parentNode.removeChild($p0)
        }
    }
};
Mscrm.BaseFetchXmlProcessor.prototype = {
    $19_0: null,
    $1A_0: null,
    $H_0: null,
    $Q_0: null,
    process: function() {
        var $v_0 = XUI.Xml.SelectSingleNode(this.$Q_0, "/fetch/entity", null);
        this.$H_0 = XUI.Xml.GetText($v_0.attributes.getNamedItem("name"));
        var $v_1 = XUI.Xml.SelectSingleNode($v_0, "filter", null);
        Mscrm.BaseFetchXmlProcessor.sanitizeFetchXmlFilters($v_1);
        this.$1o_0($v_1, false, "");
        for (var $v_2 = XUI.Xml
                     .SelectNodes($v_0, "link-entity", null),
            $v_3 = 0;
            $v_3 < $v_2.length;
            $v_3++) this.$3Q_0($v_2[$v_3]);
        return this.$19_0
    },
    $3Q_0: function($p0) {
        var $v_0 = $p0.attributes.getNamedItem("alias");
        if (IsNull($v_0)) return;
        for (var $v_1 = XUI.Xml.SelectNodes($p0, "filter", null), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            Mscrm.BaseFetchXmlProcessor.sanitizeFetchXmlFilters($v_1[$v_2]);
            this.$1o_0($v_1[$v_2], false, XUI.Xml.GetText($v_0))
        }
    },
    $1o_0: function($p0, $p1, $p2) {
        if (IsNull($p0)) return;
        var $v_0 = XUI.Xml.SelectNodes($p0, "filter", null),
            $v_1 = XUI.Xml.SelectNodes($p0, "condition", null),
            $v_2 = Mscrm.GridFilterUtil.createUniqueId(),
            $v_3 = $p0.ownerDocument.createAttribute("gridfilterid");
        $v_3.value = $v_2;
        $p0.attributes.setNamedItem($v_3);
        var $v_4 = true, $v_5 = XUI.Xml.GetText($p0.attributes.getNamedItem("type"));
        if (!$p1)
            if ($v_5.toLowerCase() === "or") {
                if (!IsNull(XUI.Xml.SelectSingleNode($p0, ".//filter", null))) $p1 = true;
                else if ($v_1.length > 1)
                    if (this.canAddMultiSelectConditions($v_1, $p2)) {
                        var $v_6 = this.$2X_0($v_1, $p0.ownerDocument);
                        $v_2 = this.$3I_0($p0, $v_6, $v_2);
                        this.$2U_0($v_6, $v_2, $p2);
                        $v_4 = false
                    } else if (this.canAddUnaryDateConditions($v_1, $p2)) {
                        this.$2T_0($v_1, $v_2, $p2);
                        $v_4 = false
                    } else if (this.$1q_0($v_1)) {
                        this.populateCustomFilters($v_1, $v_2, $p2, 2);
                        $v_4 = false
                    } else $p1 = true
            } else if ($v_1.length > 1 && this.$1q_0($v_1)) {
                this.populateCustomFilters($v_1, $v_2, $p2, 1);
                $v_4 = false
            }
        for (var $v_7 = 0; $v_7 < $v_0.length; $v_7++) this.$1o_0($v_0[$v_7], $p1, $p2);
        $v_4 && this.$3P_0($p0, $p1, $p2, $v_1, $v_2, $v_5)
    },
    $3P_0: function($p0, $p1, $p2, $p3, $p4, $p5) {
        for (var $v_0 = null, $v_1 = "", $v_2 = null, $v_3 = 0; $v_3 < $p3.length; $v_3++) {
            $v_2 = $p3[$v_3];
            $v_1 = XUI.Xml.GetText($v_2.attributes.getNamedItem("attribute"));
            $v_0 = this.$f_0($v_1, $p2);
            if (IsNull($v_0)) continue;
            if ($p1) {
                this.$1Z_0($v_0);
                continue
            }
            if ($v_0.$R_0) continue;
            var $v_4 = this.$1K_0($v_2, $p1, $p4, $p2),
                $v_5 = this.tryAddConditionsToFilterConditionCollection($v_0, $v_4, $p5, $p0);
            if (!$v_5) {
                this.$1Z_0($v_0);
                $v_2.attributes.removeNamedItem("gridfilterconditionid")
            }
        }
    },
    $1K_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = XUI.Xml.GetText($p0.attributes.getNamedItem("attribute")),
            $v_1 = this.$f_0($v_0, $p3),
            $v_2 = $v_1.$S_0,
            $v_3 = XUI.Xml.GetText($p0.attributes.getNamedItem("operator")),
            $v_4 = new Sys.StringBuilder,
            $v_5 = null;
        if (isValueBoundOperator($v_3))
            if (this.$1l_0($v_2) && isMultiSelectOperator($v_3)) {
                var $v_A = $p0.childNodes;
                if (!IsNull($v_A) && $v_A.length > 0) this.$1v_0($v_A, $v_4);
                else {
                    $v_4.append("<values><value");
                    if (!IsNull($p0.attributes.getNamedItem("uiname"))) {
                        $v_4.append(' uiname="');
                        $v_4.append(XUI.Xml.GetText($p0.attributes.getNamedItem("uiname")));
                        $v_4.append('"');
                        $v_4.append(' uitype ="');
                        $v_4.append(XUI.Xml.GetText($p0.attributes.getNamedItem("uitype")));
                        $v_4.append('"')
                    }
                    $v_4.append(">");
                    $v_4.append(XUI.Xml.GetText($p0.attributes.getNamedItem("value")));
                    $v_4.append("</value>");
                    $v_4.append("</values>")
                }
                $v_3 = getMultiSelectOperator($v_3);
                $v_5 = $v_4.toString()
            } else {
                if (isMultiSelectDateOperator($v_3)) {
                    var $v_B = $p0.childNodes;
                    !IsNull($v_B) && $v_B.length > 0 && this.$1v_0($v_B, $v_4)
                } else {
                    var $v_C = $p0.attributes.getNamedItem("value");
                    $v_4.append(IsNull($v_C) ? "" : XUI.Xml.GetText($v_C))
                }
                $v_5 = $v_4.toString();
                $v_5 = isNullOrEmptyString($v_5) ? null : $v_5
            }
        var $v_6 = Mscrm.GridFilterUtil.createUniqueId(),
            $v_7 = $p0.ownerDocument.createAttribute("gridfilterconditionid");
        $v_7.value = $v_6;
        $p0.attributes.setNamedItem($v_7);
        var $v_8 = new Sys.StringBuilder;
        $v_8.append('/fetch//filter[@gridfilterid="');
        $v_8.append($p2);
        $v_8.append('"]/condition[@gridfilterconditionid="');
        $v_8.append($v_6);
        $v_8.append('"]');
        var $v_9 = new Mscrm.FilterCondition(isValueBoundOperator($v_3) ? 2 : 1, $v_3, $v_5, true, $v_8.toString());
        if ($v_0 !== this.$1j_0($v_0)) $v_9.$J_0 = $v_0;
        return $v_9
    },
    $1v_0: function($p0, $p1) {
        $p1.append("<values>");
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) $p1.append(XUI.Xml.XMLSerializer.serializeToString($p0[$v_0]));
        $p1.append("</values>")
    },
    populateCustomFilters: function(siblings, parentFilterId, alias, customFiltersOperator) {
        var $v_0 = XUI.Xml.GetText(siblings[0].attributes.getNamedItem("attribute")), $v_1 = this.$f_0($v_0, alias);
        if (IsNull($v_1)) return;
        if ($v_1.$R_0) return;
        if (!IsNull($v_1.$1_0) || $v_1.$2_0.length) {
            this.$1Z_0($v_1);
            return
        }
        var $v_2 = this.$1K_0(siblings[0], false, parentFilterId, alias),
            $v_3 = this.$1K_0(siblings[1], false, parentFilterId, alias);
        $v_1.$1_0 = new Mscrm.CustomFilterConditionGroup($v_2, $v_3, customFiltersOperator)
    },
    tryAddConditionsToFilterConditionCollection: function(fcc, condition, filterType, filterNode) {
        var $v_0 = getAbstractDataType(fcc.$S_0),
            $v_1 = filterType.toLowerCase() === "or" ? 2 : 1,
            $v_2 = fcc.getCustomFilterConditionsCount(),
            $v_3 = fcc.getOrdinaryFilterConditionsCount();
        if (!$v_2 && !$v_3)
            if (this.checkForAdditionToOrdinaryFilterGroup(condition, $v_0)) Array.add(fcc.$2_0, condition);
            else fcc.$1_0 = new Mscrm.CustomFilterConditionGroup(condition, null, $v_1);
        else if (!$v_2 && $v_3 === 1 && this.$1m_0(filterNode, fcc.$2_0[0])) {
            fcc.$1_0 = new Mscrm.CustomFilterConditionGroup(condition, fcc.$2_0[0], $v_1);
            Array.removeAt(fcc.$2_0, 0)
        } else if ($v_2 === 1 && !$v_3)
            if (IsNull(fcc.$1_0.$4_0) && this.$1m_0(filterNode, fcc.$1_0.$5_0)) fcc.$1_0.$4_0 = condition;
            else if (IsNull(fcc.$1_0.$5_0) && this.$1m_0(filterNode, fcc.$1_0.$4_0)) fcc.$1_0.$5_0 = condition;
            else return false;
        else return false;
        return true
    },
    $1m_0: function($p0, $p1) {
        if (isNullOrEmptyString($p1.$7_0)) return true;
        var $v_0 = $p0.ownerDocument;
        if ($p0 === XUI.Xml.SelectSingleNode($v_0, $p1.$7_0, null).parentNode) return true;
        return false
    },
    $1q_0: function($p0) { return $p0.length === 2 && this.$20_0($p0[0]) === this.$20_0($p0[1]) },
    canAddMultiSelectConditions: function(conditionNodeList, alias) {
        var $v_0 = conditionNodeList[0], $v_1 = [];
        Array.add($v_1, "eq");
        Array.add($v_1, "in");
        if (!Array.contains($v_1, XUI.Xml.GetText($v_0.attributes.getNamedItem("operator")))) return false;
        for (var $v_5 = 1;
            $v_5 < conditionNodeList.length;
            $v_5++
        )
            if (XUI.Xml.GetText(conditionNodeList[$v_5].attributes.getNamedItem("attribute")) !==
                XUI.Xml.GetText($v_0.attributes.getNamedItem("attribute")) ||
                !Array
                .contains($v_1, XUI.Xml.GetText(conditionNodeList[$v_5].attributes.getNamedItem("operator")))
            ) return false;
        var $v_2 = XUI.Xml.GetText(conditionNodeList[0].attributes.getNamedItem("attribute")),
            $v_3 = this.$f_0($v_2, alias);
        if (IsNull($v_3)) return false;
        var $v_4 = getAbstractDataType($v_3.$S_0);
        if (!this.$1l_0($v_4)) return false;
        return true
    },
    canAddUnaryDateConditions: function(conditionNodeList, alias) {
        var $v_0 = conditionNodeList[0], $v_1 = XUI.Xml.GetText($v_0.attributes.getNamedItem("operator"));
        if (!isUnaryDateTypeFilterOperator($v_1)) return false;
        for (var $v_2 = getDateFilterGroup($v_1), $v_6 = 1; $v_6 < conditionNodeList.length; $v_6++)
            if (XUI.Xml.GetText(conditionNodeList[$v_6].attributes.getNamedItem("attribute")) !==
                XUI.Xml.GetText($v_0.attributes.getNamedItem("attribute"))) return false;
            else $v_0 = conditionNodeList[$v_6];
        var $v_3 = XUI.Xml.GetText(conditionNodeList[0].attributes.getNamedItem("attribute")),
            $v_4 = this.$f_0($v_3, alias);
        if (IsNull($v_4)) return false;
        var $v_5 = getAbstractDataType($v_4.$S_0);
        if (!($v_5.toLowerCase() === "date")) return false;
        return true
    },
    $2T_0: function($p0, $p1, $p2) {
        var $v_0 = XUI.Xml.GetText($p0[0].attributes.getNamedItem("attribute"));
        if (this.$1r_0($v_0, $p2))
            for (var $v_1 = this.$f_0($v_0, $p2), $v_2 = 0; $v_2 < $p0.length; $v_2++) {
                var $v_3 = this.$1K_0($p0[$v_2], false, $p1, $p2);
                Array.add($v_1.$2_0, $v_3)
            }
    },
    $2U_0: function($p0, $p1, $p2) {
        var $v_0 = XUI.Xml.GetText($p0.attributes.getNamedItem("attribute"));
        if (this.$1r_0($v_0, $p2)) {
            var $v_1 = this.$f_0($v_0, $p2), $v_2 = this.$1K_0($p0, false, $p1, $p2);
            Array.add($v_1.$2_0, $v_2)
        }
    },
    $1r_0: function($p0, $p1) {
        var $v_0 = this.$f_0($p0, $p1);
        if (IsNull($v_0) || $v_0.$R_0) return false;
        var $v_1 = $v_0.getCustomFilterConditionsCount(), $v_2 = $v_0.getOrdinaryFilterConditionsCount();
        if ($v_2 + $v_1) {
            this.$1Z_0($v_0);
            return false
        }
        return true
    },
    $f_0: function($p0, $p1) {
        $p0 = this.$1j_0($p0);
        var $v_0 = (IsNull($p1) || $p1 === "" ? "" : $p1 + ".") + $p0, $v_1 = this.$19_0[$v_0];
        return $v_1
    },
    $2X_0: function($p0, $p1) {
        var $v_0 = $p1.createElement("condition"), $v_1 = $p1.createAttribute("attribute");
        $v_1.value = XUI.Xml.GetText($p0[0].attributes.getNamedItem("attribute"));
        $v_0.attributes.setNamedItem($v_1);
        var $v_2 = $p1.createAttribute("operator");
        $v_2.value = "in";
        $v_0.attributes.setNamedItem($v_2);
        for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
            var $v_4 = $p0[$v_3];
            if ($v_4.hasChildNodes())
                for (var $v_5 = 0;
                    $v_5 < $v_4.childNodes.length;
                    $v_5++
                ) $v_0.appendChild($v_4.childNodes[$v_5].cloneNode(true));
            else {
                var $v_6 = $p1.createElement("value");
                if (!IsNull($v_4.attributes.getNamedItem("uiname"))) {
                    $v_6.attributes.setNamedItem($v_4.attributes.getNamedItem("uiname").cloneNode(true));
                    $v_6.attributes.setNamedItem($v_4.attributes.getNamedItem("uitype").cloneNode(true))
                }
                XUI.Xml.SetText($v_6, XUI.Xml.GetText($v_4.attributes.getNamedItem("value")));
                $v_0.appendChild($v_6)
            }
        }
        return $v_0
    },
    $3I_0: function($p0, $p1, $p2) {
        var $v_0 = null;
        if (Mscrm.GridFilterUtil.hasParentFilterNode($p0)) {
            $p0.parentNode.appendChild($p1);
            $v_0 = XUI.Xml.GetText($p0.parentNode.attributes.getNamedItem("gridfilterid"));
            $p0.parentNode.removeChild($p0)
        } else {
            var $v_1 = XUI.Xml.GetText($p0.attributes.getNamedItem("type"));
            if ($v_1.toLowerCase() === "or") {
                var $v_2 = $p0.ownerDocument.createAttribute("operator");
                $v_2.value = "and";
                $p0.attributes.setNamedItem($v_2)
            }
            $v_0 = $p2
        }
        return $v_0
    },
    $1Z_0: function($p0) {
        $p0.$R_0 = true;
        Array.clear($p0.$2_0);
        $p0.$1_0 = null
    },
    $1l_0: function($p0) {
        $p0 = getAbstractDataType($p0).toLowerCase();
        return $p0 === "picklist" || $p0 === "lookup" || $p0 === "owner"
    },
    checkForAdditionToOrdinaryFilterGroup: function(condition, attributeType) {
        var $v_0 = condition.$3_0.toLowerCase();
        return $v_0 === "null" ||
            $v_0 === "not-null" ||
            isUnaryDateTypeFilterOperator($v_0) ||
            ($v_0 === "eq" || $v_0 === "in") && this.$1l_0(attributeType)
    },
    $2Y_0: function($p0) {
        var $v_0 = Mscrm.GridFilterUtil.getAttributeXml($p0);
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Xml.LoadXml($v_0),
                $v_2 = XUI.Xml.SelectSingleNode($v_1, "/attributeinfo/result", null),
                $v_3 = $v_2.attributes.getNamedItem("nameattr");
            if (!IsNull($v_3)) return $v_3.nodeValue
        }
        return null
    },
    $20_0: function($p0) {
        var $v_0 = $p0.attributes.getNamedItem("attribute");
        if (IsNull($v_0)) return null;
        else return this.$1j_0(XUI.Xml.GetText($v_0))
    },
    $1j_0: function($p0) {
        var $v_0 = this.$1A_0[$p0];
        if (isNullOrEmptyString($v_0)) return $p0;
        else return $v_0
    }
};
Mscrm.OutlookFetchXmlProcessor = function(elements, fetchXml) {
    Mscrm.OutlookFetchXmlProcessor.initializeBase(this, [elements, fetchXml])
};
Mscrm.OutlookFetchXmlProcessor.prototype = {
    checkForAdditionToOrdinaryFilterGroup: function(condition, attributeType) { return false },
    canAddMultiSelectConditions: function(conditionNodeList, alias) { return false },
    canAddUnaryDateConditions: function(conditionNodeList, alias) { return false }
};
Mscrm.WebFetchXmlProcessor = function(elements, fetchXml) {
    Mscrm.WebFetchXmlProcessor.initializeBase(this, [elements, fetchXml])
};

function getAbstractDataType(type) {
    switch (type) {
    case "nvarchar":
    case "text":
    case "string":
        return "string";
    case "ntext":
    case "memo":
        return "memo";
    case "bit":
    case "boolean":
    case "state":
    case "status":
    case "language":
    case "picklist":
        return "picklist";
    case "partylist":
    case "primarykey":
    case "lookup":
    case "customer":
        return "lookup";
    case "owner":
        return "owner";
    case "decimal":
    case "integer":
    case "int":
    case "float":
    case "money":
    case "number":
        return "number";
    case "datetime":
    case "time":
        return "date";
    case "dateonly":
        return "dateonly";
    default:
        return type
    }
}

function getLabelForOperator(oper) {
    switch (oper) {
    case "eq":
        return window.LOCID_AF_EQUALS;
    case "ne":
        return window.LOCID_AF_DOESNOTEQUAL;
    case "contains":
        return window.LOCID_AF_CONTAINS;
    case "doesnotcontain":
        return window.LOCID_AF_DOESNOTCONTAIN;
    case "beginswith":
        return window.LOCID_AF_BEGINSWITH;
    case "doesnotbeginwith":
        return window.LOCID_AF_DOESNOTBEGINWITH;
    case "endswith":
        return window.LOCID_AF_ENDSWITH;
    case "doesnotendwith":
        return window.LOCID_AF_DOESNOTENDWITH;
    case "not-null":
        return window.LOCID_AF_CONTAINSDATA;
    case "null":
        return window.LOCID_AF_DOESNOTCONTAINDATA;
    case "gt":
        return window.LOCID_AF_ISGREATERTHAN;
    case "ge":
        return window.LOCID_AF_ISGREATERTHANOREQUALTO;
    case "lt":
        return window.LOCID_AF_ISLESSTHAN;
    case "le":
        return window.LOCID_AF_ISLESSTHANOREQUALTO;
    case "in":
        return window.LOCID_AF_IN;
    case "not-in":
    case "notin":
        return window.LOCID_AF_NOTIN;
    case "on":
        return window.LOCID_AF_ON;
    case "not-on":
        return window.LOCID_AF_NOTON;
    case "after":
        return window.LOCID_AF_AFTER;
    case "on-or-after":
        return window.LOCID_AF_ONORAFTER;
    case "before":
        return window.LOCID_AF_BEFORE;
    case "on-or-before":
        return window.LOCID_AF_ONORBEFORE;
    case "yesterday":
        return window.LOCID_AF_YESTERDAY;
    case "today":
        return window.LOCID_AF_TODAY;
    case "tomorrow":
        return window.LOCID_AF_TOMORROW;
    case "next-seven-days":
        return window.LOCID_AF_INTHENEXT7DAYS;
    case "last-seven-days":
        return window.LOCID_AF_INTHELAST7DAYS;
    case "next-week":
        return window.LOCID_AF_NEXTWEEK;
    case "last-week":
        return window.LOCID_AF_LASTWEEK;
    case "this-week":
        return window.LOCID_AF_THISWEEK;
    case "next-month":
        return window.LOCID_AF_NEXTMONTH;
    case "last-month":
        return window.LOCID_AF_LASTMONTH;
    case "this-month":
        return window.LOCID_AF_THISMONTH;
    case "next-year":
        return window.LOCID_AF_NEXTYEAR;
    case "last-year":
        return window.LOCID_AF_LASTYEAR;
    case "this-year":
        return window.LOCID_AF_THISYEAR;
    case "anytime":
        return window.LOCID_AF_ANYTIME;
    case "eq-userid":
        return window.LOCID_AF_EQUALSCURRENTUSER;
    case "ne-userid":
        return window.LOCID_AF_DOESNOTEQUALCURRENTUSER;
    case "eq-userteams":
        return window.LOCID_AF_EQUALSCURRENTUSERTEAMS;
    case "eq-useroruserteams":
        return window.LOCID_AF_EQUALSCURRUSERORTEAMS;
    case "eq-useroruserhierarchy":
        return window.LOCID_AF_EQUALSUSERORTREE;
    case "eq-useroruserhierarchyandteams":
        return window.LOCID_AF_EQUALSUSERORTREETEAMS;
    case "last-x-hours":
        return window.LOCID_AF_LASTXHOURS;
    case "next-x-hours":
        return window.LOCID_AF_NEXTXHOURS;
    case "last-x-days":
        return window.LOCID_AF_LASTXDAYS;
    case "next-x-days":
        return window.LOCID_AF_NEXTXDAYS;
    case "last-x-weeks":
        return window.LOCID_AF_LASTXWEEKS;
    case "next-x-weeks":
        return window.LOCID_AF_NEXTXWEEKS;
    case "last-x-months":
        return window.LOCID_AF_LASTXMONTHS;
    case "next-x-months":
        return window.LOCID_AF_NEXTXMONTHS;
    case "last-x-years":
        return window.LOCID_AF_LASTXYEARS;
    case "next-x-years":
        return window.LOCID_AF_NEXTXYEARS;
    case "eq-userlanguage":
        return window.LOCID_AF_EQUSERLANGUAGE;
    case "olderthan-x-months":
        return window.LOCID_AF_OLDERTHANXMONTHS;
    case "olderthan-x-years":
        return window.LOCID_AF_OLDERTHANXYEARS;
    case "olderthan-x-weeks":
        return window.LOCID_AF_OLDERTHANXWEEKS;
    case "olderthan-x-days":
        return window.LOCID_AF_OLDERTHANXDAYS;
    case "olderthan-x-hours":
        return window.LOCID_AF_OLDERTHANXHOURS;
    case "olderthan-x-minutes":
        return window.LOCID_AF_OLDERTHANXMINUTES;
    case "in-fiscal-year":
        return window.LOCID_AF_INFISCALYEAR;
    case "in-fiscal-period":
        return window.LOCID_AF_INFISCALPERIOD;
    case "in-fiscal-period-and-year":
        return window.LOCID_AF_INFISCALPERIODANDYEAR;
    case "in-or-after-fiscal-period-and-year":
        return window.LOCID_AF_INORAFTERFISCALPERIOD;
    case "in-or-before-fiscal-period-and-year":
        return window.LOCID_AF_INORBEFOREFISCALPERIOD;
    case "last-fiscal-year":
        return window.LOCID_AF_LASTFISCALYEAR;
    case "this-fiscal-year":
        return window.LOCID_AF_THISFISCALYEAR;
    case "next-fiscal-year":
        return window.LOCID_AF_NEXTFISCALYEAR;
    case "last-x-fiscal-years":
        return window.LOCID_AF_LASTXFISCALYEARS;
    case "next-x-fiscal-years":
        return window.LOCID_AF_NEXTXFISCALYEARS;
    case "last-fiscal-period":
        return window.LOCID_AF_LASTFISCALPERIOD;
    case "this-fiscal-period":
        return window.LOCID_AF_THISFISCALPERIOD;
    case "next-fiscal-period":
        return window.LOCID_AF_NEXTFISCALPERIOD;
    case "last-x-fiscal-periods":
        return window.LOCID_AF_LASTXFISCALPERIODS;
    case "next-x-fiscal-periods":
        return window.LOCID_AF_NEXTXFISCALPERIODS;
    case "nop":
        return window.LOCID_GF_SELECTITEM
    }
    return null
}

function getParameterizedLabelForDynamicOperator(oper) {
    switch (oper) {
    case "last-x-hours":
        return window.LOCID_GF_LASTXHOURS;
    case "next-x-hours":
        return window.LOCID_GF_NEXTXHOURS;
    case "last-x-days":
        return window.LOCID_GF_LASTXDAYS;
    case "next-x-days":
        return window.LOCID_GF_NEXTXDAYS;
    case "last-x-weeks":
        return window.LOCID_GF_LASTXWEEKS;
    case "next-x-weeks":
        return window.LOCID_GF_NEXTXWEEKS;
    case "last-x-months":
        return window.LOCID_GF_LASTXMONTHS;
    case "next-x-months":
        return window.LOCID_GF_NEXTXMONTHS;
    case "last-x-years":
        return window.LOCID_GF_LASTXYEARS;
    case "next-x-years":
        return window.LOCID_GF_NEXTXYEARS;
    case "olderthan-x-months":
        return window.LOCID_GF_OLDERTHANXMONTHS;
    case "olderthan-x-years":
        return window.LOCID_GF_OLDERTHANXYEARS;
    case "olderthan-x-weeks":
        return window.LOCID_GF_OLDERTHANXWEEKS;
    case "olderthan-x-days":
        return window.LOCID_GF_OLDERTHANXDAYS;
    case "olderthan-x-hours":
        return window.LOCID_GF_OLDERTHANXHOURS;
    case "olderthan-x-minutes":
        return window.LOCID_GF_OLDERTHANXMINUTES;
    case "last-x-fiscal-years":
        return window.LOCID_GF_LASTXFISCALYEARS;
    case "next-x-fiscal-years":
        return window.LOCID_GF_NEXTXFISCALYEARS;
    case "last-x-fiscal-periods":
        return window.LOCID_GF_LASTXFISCALPERIODS;
    case "next-x-fiscal-periods":
        return window.LOCID_GF_NEXTXFISCALPERIODS;
    default:
        return null
    }
}

function isAtributeLookupContainsUser(resultAttributes) {
    var $v_0 = resultAttributes.getNamedItem("lookuptypes");
    if (IsNull($v_0)) return false;
    for (var $v_1 = XUI.Xml.GetText($v_0)
                 .split(","),
        $v_2 = 0;
        $v_2 < $v_1.length;
        ++$v_2) if ($v_1[$v_2] === "8") return true;
    return false
}

function getOperatorsForDataType(metadataType, isNameAttrStringPresent, isLookupUserPresent) {
    var $v_0 = null;
    if (metadataTypeHasDedicatedAFOperators(metadataType)) $v_0 = metadataType;
    else $v_0 = getAbstractDataType(metadataType);
    if ($v_0.toUpperCase() === "LOOKUP" && isLookupUserPresent) $v_0 = $v_0 + "withuser";
    if (isNameAttrStringPresent) $v_0 = $v_0 + "withname";
    switch ($v_0) {
    case "number":
        return "eq;ne;gt;ge;lt;le;not-null;null";
    case "string":
        return "eq;ne;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;not-null;null";
    case "memo":
        return "contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;not-null;null";
    case "date":
        return "on;on-or-after;on-or-before;yesterday;today;tomorrow;next-seven-days;last-seven-days;next-week;last-week;this-week;next-month;last-month;this-month;next-year;last-year;this-year;last-x-hours;next-x-hours;last-x-days;next-x-days;last-x-weeks;next-x-weeks;last-x-months;next-x-months;last-x-years;next-x-years;anytime;olderthan-x-minutes;olderthan-x-hours;olderthan-x-days;olderthan-x-weeks;olderthan-x-months;olderthan-x-years;not-null;null;in-fiscal-year;in-fiscal-period;in-fiscal-period-and-year;in-or-after-fiscal-period-and-year;in-or-before-fiscal-period-and-year;last-fiscal-year;this-fiscal-year;next-fiscal-year;last-x-fiscal-years;next-x-fiscal-years;last-fiscal-period;this-fiscal-period;next-fiscal-period;last-x-fiscal-periods;next-x-fiscal-periods";
    case "dateonly":
        return "on;on-or-after;on-or-before;yesterday;today;tomorrow;next-seven-days;last-seven-days;next-week;last-week;this-week;next-month;last-month;this-month;next-year;last-year;this-year;last-x-days;next-x-days;last-x-weeks;next-x-weeks;last-x-months;next-x-months;last-x-years;next-x-years;anytime;olderthan-x-days;olderthan-x-weeks;olderthan-x-months;olderthan-x-years;not-null;null;in-fiscal-year;in-fiscal-period;in-fiscal-period-and-year;in-or-after-fiscal-period-and-year;in-or-before-fiscal-period-and-year;last-fiscal-year;this-fiscal-year;next-fiscal-year;last-x-fiscal-years;next-x-fiscal-years;last-fiscal-period;this-fiscal-period;next-fiscal-period;last-x-fiscal-periods;next-x-fiscal-periods";
    case "picklist":
    case "picklistwithname":
        return "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith";
    case "language":
        return "eq;ne;not-null;null;eq-userlanguage";
    case "lookup":
    case "lookupwithname":
        return "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith";
    case "lookupwithuser":
        return "eq-userid;ne-userid;eq;ne;not-null;null";
    case "owner":
        return "eq-userid;ne-userid;eq-userteams;eq-useroruserteams;eq;ne;not-null;null;eq-useroruserhierarchy;eq-useroruserhierarchyandteams";
    case "lookupwithuserwithname":
        return "eq-userid;ne-userid;eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith";
    case "ownerwithname":
        return "eq-userid;ne-userid;eq-userteams;eq-useroruserteams;eq-useroruserhierarchy;eq-useroruserhierarchyandteams;eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith";
    case "partylist":
        return "eq;ne;not-null;null;contains;doesnotcontain"
    }
    return null
}

function metadataTypeHasDedicatedAFOperators(metadataType) {
    switch (metadataType.toLowerCase()) {
    case "language":
    case "partylist":
        return true;
    default:
        return false
    }
}

function getOptionValue(oper) {
    var $v_0 = oper;
    switch (oper) {
    case "contains":
        $v_0 = ":like:%{0}%";
        break;
    case "beginswith":
        $v_0 = ":like:{0}%";
        break;
    case "endswith":
        $v_0 = ":like:%{0}";
        break;
    case "doesnotcontain":
        $v_0 = ":not-like:%{0}%";
        break;
    case "doesnotbeginwith":
        $v_0 = ":not-like:{0}%";
        break;
    case "doesnotendwith":
        $v_0 = ":not-like:%{0}";
        break
    }
    return $v_0
}

function isValueBoundOperator(op) {
    switch (op) {
    case "null":
    case "not-null":
    case "yesterday":
    case "today":
    case "tomorrow":
    case "next-seven-days":
    case "last-seven-days":
    case "last-week":
    case "this-week":
    case "next-week":
    case "last-month":
    case "this-month":
    case "next-month":
    case "last-year":
    case "this-year":
    case "next-year":
    case "last-fiscal-period":
    case "this-fiscal-period":
    case "next-fiscal-period":
    case "last-fiscal-year":
    case "this-fiscal-year":
    case "next-fiscal-year":
    case "innext7days":
    case "inlast7days":
    case "nextweek":
    case "lastweek":
    case "thisweek":
    case "nextmonth":
    case "lastmonth":
    case "thismonth":
    case "nextyear":
    case "lastyear":
    case "thisyear":
    case "anytime":
    case "eq-userid":
    case "ne-userid":
    case "eq-userteams":
    case "eq-useroruserteams":
    case "eq-useroruserhierarchy":
    case "eq-useroruserhierarchyandteams":
    case "containsdata":
    case "doesnotcontaindata":
    case "eq-userlanguage":
    case "child-of":
    case "dedupe-equals":
    case "dedupe-equalsdateonly":
    case "dedupe-equalsdatetime":
    case "nop":
        return false
    }
    return true
}

function isUnaryDateTypeFilterOperator(dateOperator) {
    switch (dateOperator) {
    case "yesterday":
    case "today":
    case "tomorrow":
    case "last-week":
    case "this-week":
    case "next-week":
    case "last-month":
    case "this-month":
    case "next-month":
    case "last-year":
    case "this-year":
    case "next-year":
    case "last-fiscal-year":
    case "this-fiscal-year":
    case "next-fiscal-year":
    case "last-fiscal-period":
    case "this-fiscal-period":
    case "next-fiscal-period":
    case "anytime":
        return true;
    default:
        return false
    }
}

function getDateFilterGroup(dateOperator) {
    switch (dateOperator) {
    case "yesterday":
    case "today":
    case "tomorrow":
        return 1;
    case "last-week":
    case "this-week":
    case "next-week":
        return 2;
    case "last-month":
    case "this-month":
    case "next-month":
        return 3;
    case "last-year":
    case "this-year":
    case "next-year":
        return 4;
    case "last-fiscal-period":
    case "this-fiscal-period":
    case "next-fiscal-period":
        return 5;
    case "last-fiscal-year":
    case "this-fiscal-year":
    case "next-fiscal-year":
        return 6;
    default:
        return 0
    }
}

function isNameOperator(op) {
    switch (op) {
    case "contains":
    case "doesnotcontain":
    case "beginswith":
    case "doesnotbeginwith":
    case "endswith":
    case "doesnotendwith":
    case "like":
    case "not-like":
        return true
    }
    return false
}

function isDynamicDateOperator(op) {
    switch (op) {
    case "last-x-hours":
    case "next-x-hours":
    case "last-x-days":
    case "next-x-days":
    case "last-x-weeks":
    case "next-x-weeks":
    case "last-x-months":
    case "next-x-months":
    case "last-x-years":
    case "next-x-years":
    case "olderthan-x-months":
    case "olderthan-x-years":
    case "olderthan-x-weeks":
    case "olderthan-x-days":
    case "olderthan-x-hours":
    case "olderthan-x-minutes":
    case "last-x-fiscal-years":
    case "next-x-fiscal-years":
    case "last-x-fiscal-periods":
    case "next-x-fiscal-periods":
        return true
    }
    return false
}

function isOperatorExpectsDateTimeOperand(op) {
    switch (op) {
    case "on":
    case "not-on":
    case "after":
    case "on-or-after":
    case "before":
    case "on-or-before":
        return true;
    default:
        return false
    }
}

function isDateTimeOperandPiclklist(op) {
    switch (op) {
    case "in-fiscal-year":
    case "in-fiscal-period":
    case "in-fiscal-period-and-year":
    case "in-or-before-fiscal-period-and-year":
    case "in-or-after-fiscal-period-and-year":
        return true;
    default:
        return false
    }
}

function isMultiSelectDateOperator(op) {
    switch (op) {
    case "in-or-before-fiscal-period-and-year":
    case "in-or-after-fiscal-period-and-year":
        return true;
    default:
        return false
    }
}

function constructOperatorValues(conditionOperator, conditionValue) {
    if (conditionOperator === "like" || conditionOperator === "not-like") {
        var $v_0 = !conditionValue.indexOf("%"), $v_1 = conditionValue.lastIndexOf("%") === conditionValue.length - 1;
        if ($v_0 && $v_1) {
            conditionOperator = conditionOperator === "like" ? "contains" : "doesnotcontain";
            conditionValue = convertLikeToUserType(conditionValue.substring(1, conditionValue.length - 1))
        } else if ($v_0) {
            conditionOperator = conditionOperator === "like" ? "endswith" : "doesnotendwith";
            conditionValue = convertLikeToUserType(conditionValue.substring(1, conditionValue.length))
        } else if ($v_1) {
            conditionOperator = conditionOperator === "like" ? "beginswith" : "doesnotbeginwith";
            conditionValue = convertLikeToUserType(conditionValue.substring(0, conditionValue.length - 1))
        } else conditionOperator = conditionOperator === "like" ? "eq" : "ne"
    } else if (conditionOperator === "in" || conditionOperator === "not-in"
    ) conditionOperator = conditionOperator === "in" ? "eq" : "ne";
    return [conditionOperator, conditionValue]
}

function constructValues(dataType, conditionOperator, conditionValue) {
    switch (dataType) {
    case "lookup":
    case "owner":
        var $v_0 = conditionOperator === "in" || conditionOperator === "not-in", $v_1 = [], $v_2;
        if ($v_0)
            for (var $v_4 = XUI.Xml.SelectNodes(XUI.Xml.LoadXml(conditionValue), "/values/value", null),
                $v_5 = $v_4.length,
                $v_6 = null,
                $v_7 = 0;
                $v_7 < $v_5;
                $v_7++) {
                $v_6 = $v_4[$v_7];
                var $v_8 = new LookupControlItem;
                $v_8.id = XUI.Xml.GetText($v_6);
                $v_8.name = XUI.Xml.GetText($v_6.attributes.getNamedItem("uiname"));
                $v_2 = XUI.Xml.GetText($v_6.attributes.getNamedItem("uitype"));
                if (isNaN(parseInt($v_2, 10))) $v_8.typename = $v_2;
                else $v_8.type = $v_2;
                !IsNull($v_8.name) && !IsNull($v_2) && Array.add($v_1, $v_8)
            }
        return $v_1.length ? $v_1 : null;
    case "picklist":
        var $v_3 = conditionOperator === "in" || conditionOperator === "not-in";
        if ($v_3) {
            for (var $v_9 = new Sys.StringBuilder(""),
                $v_A = XUI.Xml.SelectNodes(XUI.Xml.LoadXml(conditionValue), "/values/value", null),
                $v_B = $v_A.length,
                $v_C = 0;
                $v_C < $v_B;
                $v_C++) {
                $v_9.append(XUI.Xml.GetText($v_A[$v_C]));
                $v_9.append(";")
            }
            var $v_D = $v_9.toString();
            if ($v_C) $v_D = $v_D.substring(0, $v_D.length - 1);
            return $v_D
        }
        break;
    case "date":
    case "dateonly":
        if (isDynamicDateOperator(conditionOperator) ||
            conditionOperator === "in-fiscal-year" ||
            conditionOperator === "in-fiscal-period") return parseInt(conditionValue, 10);
        else if (conditionOperator === "in-fiscal-period-and-year" ||
            conditionOperator === "in-or-before-fiscal-period-and-year" ||
            conditionOperator === "in-or-after-fiscal-period-and-year") {
            var $v_E = XUI.Xml.SelectNodes(XUI.Xml.LoadXml(conditionValue), "/values/value", null),
                $v_F = parseInt(XUI.Xml.GetText($v_E[0]), 10),
                $v_G = parseInt(XUI.Xml.GetText($v_E[1]), 10);
            return $v_G.toString() + ($v_F <= 9 ? "-0" : "-") + $v_F.toString()
        } else return !IsNull(conditionValue) && conditionValue.length > 0 ? ParseUtcDate(conditionValue) : null;
    case "number":
        return parseFloat(conditionValue)
    }
    return null
}

function convertLikeToUserType(op) {
    var $v_0 = new RegExp("\\[%\\]", "g");
    op = op.replace($v_0, "[*]");
    $v_0 = new RegExp("%", "g");
    op = op.replace($v_0, "*");
    $v_0 = new RegExp("\\[\\*\\]", "g");
    op = op.replace($v_0, "%");
    $v_0 = new RegExp("\\[\\[\\]", "g");
    op = op.replace($v_0, "[");
    $v_0 = new RegExp("\\[_\\]", "g");
    return op.replace($v_0, "_")
}

function isMultiSelectOperator(op) {
    switch (op.toLowerCase()) {
    case "eq":
    case "in":
    case "ne":
    case "not-in":
        return true;
    default:
        return false
    }
}

function getMultiSelectOperator(op) {
    switch (op.toLowerCase()) {
    case "eq":
    case "in":
        return "in";
    case "ne":
    case "not-in":
        return "not-in";
    default:
        return null
    }
}

Mscrm.QueryData = function() {};
Mscrm.QueryData.prototype = {
    $1d_0: null,
    $V_0: null,
    $H_0: null,
    $Q_0: null,
    $y_0: null,
    $h_0: null,
    $P_0: null,
    $m_0: null,
    $n_0: 0,
    $1H_0: 0,
    get_defaultSortColumn: function() { return this.$1d_0 },
    set_defaultSortColumn: function(value) {
        this.$1d_0 = value;
        return value
    },
    get_description: function() { return this.$V_0 },
    set_description: function(value) {
        this.$V_0 = value;
        return value
    },
    get_entityName: function() { return this.$H_0 },
    set_entityName: function(value) {
        this.$H_0 = value;
        return value
    },
    get_fetchXml: function() { return this.$Q_0 },
    set_fetchXml: function(value) {
        this.$Q_0 = value;
        return value
    },
    get_layoutXml: function() { return this.$y_0 },
    set_layoutXml: function(value) {
        this.$y_0 = value;
        return value
    },
    get_conditionalFormatting: function() { return this.$h_0 },
    set_conditionalFormatting: function(value) {
        this.$h_0 = value;
        return value
    },
    get_name: function() { return this.$P_0 },
    set_name: function(value) {
        this.$P_0 = value;
        return value
    },
    get_queryId: function() { return this.$m_0 },
    set_queryId: function(value) {
        this.$m_0 = value;
        return value
    },
    get_queryType: function() { return this.$n_0 },
    set_queryType: function(value) {
        this.$n_0 = value;
        return value
    },
    get_sourceViewType: function() { return this.$1H_0 },
    set_sourceViewType: function(value) {
        this.$1H_0 = value;
        return value
    }
};
Mscrm.MergedXml = function() {};
Mscrm.MergedXml.prototype = {
    $1J_0: null,
    $1B_0: null,
    get_xmlDoc: function() { return this.$1J_0 },
    set_xmlDoc: function(value) {
        this.$1J_0 = value;
        return value
    },
    get_ids: function() { return this.$1B_0 },
    set_ids: function(value) {
        this.$1B_0 = value;
        return value
    }
};
Mscrm.FilterConditionCollection = function(attribute, type, isFromRelated, entity, attributeFormat) {
    this.$2_0 = [];
    this.$F_0 = attribute;
    this.$k_0 = isFromRelated;
    this.$H_0 = entity;
    this.$S_0 = type;
    this.$1N_0 = attributeFormat
};
Mscrm.FilterConditionCollection.prototype = {
    $F_0: null,
    $S_0: null,
    $1N_0: null,
    $1_0: null,
    $H_0: null,
    $2_0: null,
    $k_0: false,
    $R_0: false,
    $e_0: null,
    get_attributeName: function() { return this.$F_0 },
    get_attributeType: function() { return this.$S_0 },
    get_attributeFormat: function() { return this.$1N_0 },
    get_customFilters: function() { return this.$1_0 },
    set_customFilters: function(value) {
        this.$1_0 = value;
        return value
    },
    get_entityName: function() { return this.$H_0 },
    get_filters: function() { return this.$2_0 },
    get_isDirty: function() {
        for (var $v_0 = 0; $v_0 < this.$2_0.length; $v_0++) if (this.$2_0[$v_0].$8_0) return true;
        if (!IsNull(this.$1_0)) return this.$1_0.get_isDirty();
        return false
    },
    get_isComplex: function() { return this.$R_0 },
    set_isComplex: function(value) {
        this.$R_0 = value;
        return value
    },
    get_isFromRelatedEntity: function() { return this.$k_0 },
    get_relatedEntityDetails: function() { return this.$e_0 },
    set_relatedEntityDetails: function(value) {
        this.$e_0 = value;
        return value
    },
    clearDirtyFlag: function() {
        for (var $v_0 = 0; $v_0 < this.$2_0.length; $v_0++) this.$2_0[$v_0].$8_0 = false;
        this.$1_0 && this.$1_0.clearDirtyFlag()
    },
    getCustomFilterConditionsCount: function() {
        var $v_0 = 0, $v_1 = this.$1_0;
        if (!IsNull($v_1))
            if (!IsNull($v_1.$4_0)) {
                $v_0++;
                if (!IsNull($v_1.$5_0)) $v_0++
            }
        return $v_0
    },
    getOrdinaryFilterConditionsCount: function() { return this.$2_0.length }
};
Mscrm.FilterCondition = function(OperatorType, Operator, Operand, isFromFetch, xpath) {
    this.$N_0 = OperatorType;
    this.$3_0 = Operator;
    this.$9_0 = Operand;
    this.$6_0 = isFromFetch;
    this.$7_0 = xpath
};
Mscrm.FilterCondition.prototype = {
    $N_0: 0,
    $I_0: false,
    $8_0: false,
    $6_0: false,
    $9_0: null,
    $3_0: null,
    $7_0: null,
    $J_0: null,
    get_nameAttribute: function() { return this.$J_0 },
    set_nameAttribute: function(value) {
        this.$J_0 = value;
        return value
    },
    get_isDeleted: function() { return this.$I_0 },
    set_isDeleted: function(value) {
        this.$I_0 = value;
        return value
    },
    get_isDirty: function() { return this.$8_0 },
    set_isDirty: function(value) {
        this.$8_0 = value;
        return value
    },
    get_isFromOriginalFetch: function() { return this.$6_0 },
    set_isFromOriginalFetch: function(value) {
        this.$6_0 = value;
        return value
    },
    get_operand: function() { return this.$9_0 },
    set_operand: function(value) {
        this.$9_0 = value;
        return value
    },
    get_operator: function() { return this.$3_0 },
    set_operator: function(value) {
        this.$3_0 = value;
        return value
    },
    get_operatorType: function() { return this.$N_0 },
    set_operatorType: function(value) {
        this.$N_0 = value;
        return value
    },
    get_xPath: function() { return this.$7_0 },
    set_xPath: function(value) {
        this.$7_0 = value;
        return value
    },
    describe: function() {
        var $v_0;
        switch (this.$N_0) {
        case 2:
            var $v_1 = constructOperatorValues(this.$3_0, this.$9_0), $v_2 = $v_1[0], $v_3 = $v_1[1];
            $v_0 = String.format(window.LOCID_GF_BINARYCONDITIONFORMAT, getLabelForOperator($v_2), $v_3);
            break;
        case 1:
            $v_0 = getLabelForOperator(this.$3_0);
            break;
        case 0:
        default:
            $v_0 = "";
            break
        }
        return $v_0
    }
};
Mscrm.CustomFilterConditionGroup = function(primary, secondary, BooleanOperator) {
    this.$4_0 = primary;
    this.$5_0 = secondary;
    this.$C_0 = BooleanOperator
};
Mscrm.CustomFilterConditionGroup.prototype = {
    $C_0: 0,
    $M_0: null,
    $L_0: null,
    $4_0: null,
    $5_0: null,
    $x_0: false,
    get_booleanOperator: function() { return this.$C_0 },
    set_booleanOperator: function(value) {
        this.$C_0 = value;
        return value
    },
    get_isDirty: function() {
        var $v_0 = false;
        if (!IsNull(this.$4_0))
            if (!IsNull(this.$5_0)) $v_0 = this.$4_0.$8_0 || this.$5_0.$8_0;
            else $v_0 = this.$4_0.$8_0;
        if (!IsNull(this.$M_0) || !IsNull(this.$L_0)) $v_0 = true;
        return $v_0
    },
    get_oldPrimary: function() { return this.$M_0 },
    set_oldPrimary: function(value) {
        this.$M_0 = value;
        return value
    },
    get_oldSecondary: function() { return this.$L_0 },
    set_oldSecondary: function(value) {
        this.$L_0 = value;
        return value
    },
    get_primary: function() { return this.$4_0 },
    set_primary: function(value) {
        this.$4_0 = value;
        return value
    },
    get_secondary: function() { return this.$5_0 },
    set_secondary: function(value) {
        this.$5_0 = value;
        return value
    },
    get_isApplyingDrilldown: function() { return this.$x_0 },
    set_isApplyingDrilldown: function(value) {
        this.$x_0 = value;
        return value
    },
    clearDirtyFlag: function() {
        if (this.$4_0) this.$4_0.$8_0 = false;
        if (this.$5_0) this.$5_0.$8_0 = false;
        if (this.$M_0) this.$L_0 = null;
        if (this.$L_0) this.$L_0 = null
    }
};
Mscrm.FilterNodeType = function() {};
Mscrm.FilterOperatorType = function() {};
Mscrm.CustomFiltersBooleanOperatorType = function() {};
Mscrm.FilterUIGroupType = function() {};
Mscrm.DateFilterGroup = function() {};
Mscrm.DateFilterGroup.get_getTotalNoOfGroups = function() {
    var $v_0 = 7;
    return $v_0
};
Mscrm.SaveViewParams = function(name, desc, id, objType) {
    this.sName = name;
    this.sDescription = desc;
    this.sQueryId = id;
    this.sQueryOjectType = objType
};
Mscrm.SaveViewParams.prototype = { sDescription: null, sName: null, sQueryId: null, sQueryOjectType: null };
Mscrm.GridFilterUtil = function() {};
Mscrm.GridFilterUtil.addFilterNode = function(filterNode, $sn_document) {
    var $v_0 = $sn_document.createElement("filter"), $v_1 = $sn_document.createAttribute("type");
    $v_1.value = "and";
    $v_0.attributes.setNamedItem($v_1);
    var $v_2 = filterNode.parentNode;
    $v_2.replaceChild($v_0, filterNode);
    $v_0.appendChild(filterNode)
};
Mscrm.GridFilterUtil.createMainFilterNode = function($sn_document, rootNode) {
    var $v_0 = $sn_document.createElement("filter"), $v_1 = $sn_document.createAttribute("type");
    $v_1.value = "and";
    $v_0.attributes.setNamedItem($v_1);
    rootNode.appendChild($v_0);
    return $v_0
};
Mscrm.GridFilterUtil.$2O = function($p0, $p1) {
    var $v_0 = $p1.split(";"), $v_1 = $p0.createElement("link-entity"), $v_2 = $p0.createAttribute("name");
    $v_2.value = $v_0[0];
    $v_1.attributes.setNamedItem($v_2);
    var $v_3 = $p0.createAttribute("from");
    $v_3.value = $v_0[1];
    $v_1.attributes.setNamedItem($v_3);
    var $v_4 = $p0.createAttribute("to");
    $v_4.value = $v_0[2];
    $v_1.attributes.setNamedItem($v_4);
    var $v_5 = $p0.createAttribute("alias");
    $v_5.value = Mscrm.GridFilterUtil.getUniqueAlias($p0);
    $v_1.attributes.setNamedItem($v_5);
    var $v_6 = $p0.createAttribute(Mscrm.GridFilterUtil.$1L);
    $v_6.value = "true";
    $v_1.attributes.setNamedItem($v_6);
    XUI.Xml.SelectSingleNode($p0, "/fetch/entity", null).appendChild($v_1);
    return $v_1
};
Mscrm.GridFilterUtil.$p = function($p0, $p1, $p2) {
    var $v_0 = $p2.createElement("condition"), $v_1 = $p2.createAttribute("attribute");
    if (IsNull($p0.$J_0)) $v_1.value = $p1;
    else $v_1.value = $p0.$J_0;
    $v_0.attributes.setNamedItem($v_1);
    var $v_2 = $p2.createAttribute("operator");
    $v_2.value = $p0.$3_0;
    $v_0.attributes.setNamedItem($v_2);
    var $v_3 = $p0.$7_0;
    if (!IsNull($v_3)) {
        var $v_4 = $p2.createAttribute("gridfilterconditionid"),
            $v_5 = $v_3.substring($v_3.indexOf("gridfilterconditionid") + 23,
                $v_3.indexOf("gridfilterconditionid") + 55);
        $v_4.value = $v_5;
        $v_0.attributes.setNamedItem($v_4)
    }
    if ($p0.$N_0 === 2)
        if ($p0.$9_0.toString().startsWith("<values>")) {
            var $v_6 = Mscrm.GridFilterUtil.$2Q($p0.$9_0);
            if (!IsNull($v_6) && $v_6.length)
                while ($v_6.length > 0) {
                    var $v_7 = Mscrm.Utilities.getAdoptedNode($p2, $v_6[0]);
                    $v_0.appendChild($v_7)
                }
        } else {
            var $v_8 = $p2.createAttribute("value");
            $v_8.value = $p0.$9_0.toString();
            $v_0.attributes.setNamedItem($v_8)
        }
    return $v_0
};
Mscrm.GridFilterUtil.$2Q = function($p0) {
    var $v_0 = XUI.Xml.LoadXml($p0);
    return XUI.Xml.DomUtils.GetFirstChild($v_0).childNodes
};
Mscrm.GridFilterUtil.createUserQuery = function(queryData) {
    if (queryData.$P_0.length > 0) {
        var $v_0 = new RemoteCommand("AdvancedFind", "CreateAndRetrieveUserQuery", null);
        $v_0.SetParameter("entityName", queryData.$H_0);
        $v_0.SetParameter("queryType", queryData.$n_0.toString());
        $v_0.SetParameter("name", queryData.$P_0);
        $v_0.SetParameter("description", queryData.$V_0);
        $v_0.SetParameter("fetchXml", queryData.$Q_0);
        $v_0.SetParameter("layoutXml", queryData.$y_0);
        $v_0.SetParameter("conditionalFormatting", queryData.$h_0);
        var $v_1 = $v_0.Execute(null);
        if ($v_1.Success) {
            var $v_2 = XUI.Xml.LoadXml($v_1.ReturnValue.toString()),
                $v_3 = XUI.Xml.SelectSingleNode($v_2, "//userqueryid", null),
                $v_4 = XUI.Xml.GetText($v_3);
            if (Mscrm.PageManager.isOutlookProxyPage()) {
                getOutlookHostedWindow().activateNewTab(queryData.$H_0, $v_4);
                return true
            }
            if (Mscrm.GridFilterUtil.refreshSavedQuerySelector(queryData.$H_0, $v_4)) return true
        }
    }
    return false
};
Mscrm.GridFilterUtil.refreshSavedQuerySelector = function(entityName, viewIdToSelect) {
    var $v_0 = "crmGrid", $v_1 = "crmGrid_SavedNewQuerySelector", $v_2 = null, $v_3 = null, $v_4 = true;
    $v_2 = $find($v_1);
    if (!IsNull($v_2) && $v_2.showNewVSControl && !$v_2.showOriginalSelectBox) $v_4 = true;
    else {
        $v_3 = $get($v_1);
        if (!IsNull($v_3)) $v_4 = false
    }
    if (!IsNull($v_2) || !IsNull($v_3)) {
        var $v_5 = new RemoteCommand("SavedQuerySelectorWebService", "GetSavedViewSelector", null);
        $v_5.SetParameter("entityName", entityName);
        var $v_6 = $v_5.Execute(null);
        if ($v_6.Success) {
            var $v_7 = $v_6.Xml, $v_8 = XUI.Xml.GetText($v_7);
            if (!IsNull($v_8))
                if ($v_4) {
                    $v_2.populateMenuFromQueryList($v_8);
                    $v_2.setSelectedViewItemInMenu(viewIdToSelect)
                } else {
                    $v_3.parentNode.innerHTML = $v_8;
                    $v_3 = $get($v_1);
                    for (var $v_9 = 0; $v_9 < $v_3.options.length; $v_9++) {
                        var $v_A = $v_3.options[$v_9], $v_B = $v_A.value;
                        if ($v_B === viewIdToSelect) {
                            $v_3.selectedIndex = $v_9;
                            handleView($v_3, Mscrm.GridControl.findComponent($v_0));
                            return true
                        }
                    }
                }
        }
    }
    return false
};
Mscrm.GridFilterUtil.getFilterConditionFromDictionary = function(properties) {
    var $v_0 = IsNull(properties["OperatorType"]) ? 0 : properties["OperatorType"],
        $v_1 = IsNull(properties["Operator"]) ? null : properties["Operator"],
        $v_2 = IsNull(properties["Operand"]) ? null : properties["Operand"],
        $v_3 = IsNull(properties["isFromFetch"]) ? false : properties["isFromFetch"],
        $v_4 = IsNull(properties["xpath"]) ? null : properties["xpath"],
        $v_5 = IsNull(properties["IsDirty"]) ? true : properties["IsDirty"],
        $v_6 = new Mscrm.FilterCondition($v_0, $v_1, $v_2, $v_3, $v_4);
    $v_6.$8_0 = $v_5;
    return $v_6
};
Mscrm.GridFilterUtil.getViewInfo = function(queryData, callbackRef) {
    var $v_0 = {};
    $v_0.sQueryId = queryData.$m_0;
    $v_0.sQueryObjectType = queryData.$n_0;
    $v_0.sName = queryData.$P_0;
    $v_0.sDescription = queryData.$V_0;
    var $v_1 = [callbackRef],
        $v_2 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterGetViewInfo",
            Mscrm.GridFilterUtil,
            $v_1,
            false),
        $v_3 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/AdvancedFind/QueryProperties.aspx?feature=advfind"),
            $v_0,
            500,
            310,
            null);
    $v_3.setCallbackReference($v_2);
    return $v_3.show()
};
Mscrm.GridFilterUtil.performActionAfterGetViewInfo = function(viewInfo, callbackRef) {
    var $v_0 = null;
    if (!IsNull(viewInfo)) {
        $v_0 = new Mscrm.QueryData;
        $v_0.$P_0 = viewInfo.sName;
        $v_0.$V_0 = viewInfo.sDescription
    } else $v_0 = null;
    Mscrm.Utilities.executeFunction(callbackRef, $v_0);
    return $v_0
};
Mscrm.GridFilterUtil.mergeFetchXml = function(transientXml, conditionCollection) {
    var $v_0 = [], $v_1 = transientXml, $v_2 = Mscrm.GridFilterUtil.$2o(conditionCollection, $v_1);
    Mscrm.GridFilterUtil.$3B(conditionCollection, $v_0, $v_1, $v_2);
    Mscrm.GridFilterUtil.$3A(conditionCollection, $v_0, $v_1, $v_2);
    Mscrm.GridFilterUtil.cleanupFetchXmlForRefresh($v_1);
    return Mscrm.GridFilterUtil.$2n($v_0, $v_1)
};
Mscrm.GridFilterUtil.$2o = function($p0, $p1) {
    var $v_0 = XUI.Xml.SelectSingleNode($p1, "/fetch/entity", null);
    if ($p0.$k_0) {
        $v_0 = Mscrm.GridFilterUtil.$2e($p1, $p0.$e_0);
        if (IsNull($v_0)) $v_0 = Mscrm.GridFilterUtil.$2O($p1, $p0.$e_0)
    }
    return $v_0
};
Mscrm.GridFilterUtil.$3B = function($p0, $p1, $p2, $p3) {
    for (var $v_0 = [],
        $v_1 = null,
        $v_2 = null,
        $v_3 = null,
        $v_4 = Mscrm.GridFilterUtil.checkForOrConditions($p0),
        $v_5 = Mscrm.GridFilterUtil.$2a($p0),
        $v_6 = $p0.$2_0.length,
        $v_7 = 0;
        $v_7 < $v_6;
        $v_7++) {
        $v_1 = $p0.$2_0[$v_7];
        if ($v_1.$I_0 && $v_1.$8_0) Mscrm.GridFilterUtil.$2R($p2, $v_0, $v_1);
        else if ($v_1.$8_0) {
            var $v_8 = null;
            if ($v_1.$6_0) {
                $v_8 = Mscrm.GridFilterUtil.$2m($p2, $v_1);
                if ($v_4 && Mscrm.GridFilterUtil.filterNodeType($v_8) === "and") {
                    $v_3 = Mscrm.GridFilterUtil.$2C(true, $v_3, $p1, $p2, $v_1, $v_8);
                    $v_3.appendChild(Mscrm.GridFilterUtil.$p($v_1, $p0.$F_0, $p2))
                } else if ($v_5 === 1 && Mscrm.GridFilterUtil.hasParentFilterNode($v_8)) {
                    Mscrm.GridFilterUtil.$3D($v_1);
                    $v_8.parentNode.appendChild(Mscrm.GridFilterUtil.$p($v_1, $p0.$F_0, $p2))
                } else $v_8.appendChild(Mscrm.GridFilterUtil.$p($v_1, $p0.$F_0, $p2))
            } else {
                Mscrm.GridFilterUtil.$2G($p2, $p3);
                $v_8 = Mscrm.GridFilterUtil.$1y($p3, $p2);
                Mscrm.GridFilterUtil.setUniqueIdInFilterCondition($v_1, $p1);
                if ($v_4) {
                    if (IsNull($v_2)) $v_2 = Mscrm.GridFilterUtil.$2C(false, $v_2, $p1, $p2, $v_1, $v_8);
                    $v_2.appendChild(Mscrm.GridFilterUtil.$p($v_1, $p0.$F_0, $p2))
                } else $v_8.appendChild(Mscrm.GridFilterUtil.$p($v_1, $p0.$F_0, $p2))
            }
        }
    }
    for (var $v_9 = 0; $v_9 < $v_0.length; $v_9++) Array.remove($p0.$2_0, $v_0[$v_9])
};
Mscrm.GridFilterUtil.$3A = function($p0, $p1, $p2, $p3) {
    !IsNull($p0.$1_0) && !IsNull($p0.$1_0.$M_0) && !$p0.$1_0.$x_0 && Mscrm.GridFilterUtil.$2S($p0, $p2);
    if (!IsNull($p0.$1_0) && $p0.$1_0.get_isDirty()) {
        var $v_0 = $p0.$1_0.$4_0, $v_1 = $p0.$1_0.$5_0;
        if (!IsNull($v_0) && !$v_0.$6_0) {
            Mscrm.GridFilterUtil.$2G($p2, $p3);
            var $v_2 = Mscrm.GridFilterUtil.$1y($p3, $p2);
            Mscrm.GridFilterUtil.setUniqueIdInFilterCondition($v_0, $p1);
            var $v_3 = Mscrm.GridFilterUtil.$p($v_0, $p0.$F_0, $p2);
            if (!IsNull($v_1)) {
                Mscrm.GridFilterUtil.setUniqueIdInFilterCondition($v_1, $p1);
                var $v_4 = Mscrm.GridFilterUtil.$p($v_1, $p0.$F_0, $p2);
                $v_3 = Mscrm.GridFilterUtil.$32($p0.$1_0.$C_0, $v_3, $v_4, $p2)
            }
            $v_2.appendChild($v_3)
        }
    }
};
Mscrm.GridFilterUtil.$2n = function($p0, $p1) {
    var $v_0 = new Mscrm.MergedXml;
    $v_0.$1J_0 = $p1;
    $v_0.$1B_0 = $p0;
    return $v_0
};
Mscrm.GridFilterUtil.hasParentFilterNode = function(node) { return node.parentNode.nodeName === "filter" };
Mscrm.GridFilterUtil.$2a = function($p0) {
    for (var $v_0, $v_1 = 0, $v_2 = 0; $v_2 < $p0.$2_0.length; $v_2++) {
        $v_0 = $p0.$2_0[$v_2];
        if (!$v_0.$I_0 && $v_0.$8_0) $v_1++
    }
    return $v_1
};
Mscrm.GridFilterUtil.$3D = function($p0) {
    var $v_0 = $p0.$7_0;
    if (!isNullOrEmptyString($v_0) && $v_0.indexOf("gridfilterid") >= 0) {
        var $v_1 = new Sys.StringBuilder;
        $v_1.append('/fetch//condition[@gridfilterconditionid="');
        $v_1.append($v_0.substring($v_0.length - 34, $v_0.length - 2));
        $v_1.append('"]');
        $v_0 = $v_1.toString();
        $p0.$7_0 = $v_0
    }
};
Mscrm.GridFilterUtil.$1y = function($p0, $p1) {
    var $v_0 = XUI.Xml.SelectSingleNode($p0, "filter", null);
    if (IsNull($v_0)) $v_0 = Mscrm.GridFilterUtil.createMainFilterNode($p1, $p0);
    else if ($v_0.attributes.getNamedItem("type").nodeValue !== "and") {
        Mscrm.GridFilterUtil.addFilterNode($v_0, $p1);
        $v_0 = $v_0.parentNode
    }
    return $v_0
};
Mscrm.GridFilterUtil.filterConditionHasXPath = function(condition) {
    return !IsNull(condition.$7_0) && condition.$7_0 !== ""
};
Mscrm.GridFilterUtil.filterNodeType = function(filterNode) {
    var $v_0 = filterNode.attributes.getNamedItem("type");
    if (IsNull($v_0)) return null;
    else return $v_0.nodeValue
};
Mscrm.GridFilterUtil.$2R = function($p0, $p1, $p2) {
    var $v_0 = XUI.Xml.SelectSingleNode($p0, $p2.$7_0, null);
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.parentNode;
        $v_1.removeChild($v_0)
    }
    Array.add($p1, $p2)
};
Mscrm.GridFilterUtil.setUniqueIdInFilterCondition = function(condition, Ids) {
    var $v_0 = Mscrm.GridFilterUtil.createUniqueId();
    Array.add(Ids, $v_0);
    var $v_1 = new Sys.StringBuilder;
    $v_1.append('/fetch//condition[@gridfilterconditionid="');
    $v_1.append($v_0);
    $v_1.append('"]');
    condition.$7_0 = $v_1.toString();
    return $v_0
};
Mscrm.GridFilterUtil.$2m = function($p0, $p1) {
    var $v_0 = Mscrm.GridFilterUtil.getParentFilterXPathFromConditionXPath($p1.$7_0);
    if (!isNullOrEmptyString($v_0)) return XUI.Xml.SelectSingleNode($p0, $v_0, null);
    else if (!isNullOrEmptyString($p1.$7_0)) {
        var $v_1 = XUI.Xml.SelectSingleNode($p0, $p1.$7_0, null);
        return IsNull($v_1) ? null : $v_1.parentNode
    }
    return null
};
Mscrm.GridFilterUtil.$2C = function($p0, $p1, $p2, $p3, $p4, $p5) {
    if (IsNull($p1)) {
        $p1 = $p3.createElement("filter");
        var $v_0 = $p3.createAttribute("type");
        $v_0.value = "or";
        $p1.attributes.setNamedItem($v_0);
        $p5.appendChild($p1)
    }
    if ($p0) {
        var $v_1 = $p3.createAttribute("gridfilterid"), $v_2 = Mscrm.GridFilterUtil.createUniqueId();
        $v_1.value = $v_2;
        $p1.attributes.setNamedItem($v_1);
        var $v_3 = Mscrm.GridFilterUtil.createUniqueId();
        Array.add($p2, $v_3);
        var $v_4 = new Sys.StringBuilder;
        $v_4.append('/fetch//filter[@gridfilterid="');
        $v_4.append($v_2);
        $v_4.append('"]/condition[@gridfilterconditionid="');
        $v_4.append($v_3);
        $v_4.append('"]');
        $p4.$7_0 = $v_4.toString()
    } else Mscrm.GridFilterUtil.setUniqueIdInFilterCondition($p4, $p2);
    return $p1
};
Mscrm.GridFilterUtil.$2G = function($p0, $p1) {
    var $v_0 = $p1.attributes.getNamedItem("link-type");
    if (!IsNull($v_0)) {
        var $v_1 = $p0.createAttribute("old-link-type");
        $v_1.value = $v_0.nodeValue;
        $p1.attributes.setNamedItem($v_1);
        $p1.attributes.removeNamedItem("link-type")
    }
};
Mscrm.GridFilterUtil.$2S = function($p0, $p1) {
    var $v_0 = XUI.Xml.SelectSingleNode($p1, $p0.$1_0.$M_0.$7_0, null);
    $v_0.parentNode.removeChild($v_0);
    $p0.$1_0.$M_0 = null;
    if (!IsNull($p0.$1_0.$L_0)) {
        var $v_1 = XUI.Xml.SelectSingleNode($p1, $p0.$1_0.$L_0.$7_0, null);
        $v_1.parentNode.removeChild($v_1);
        $p0.$1_0.$L_0 = null
    }
};
Mscrm.GridFilterUtil.$2e = function($p0, $p1) {
    var $v_0 = $p1.split(";"), $v_1 = new Sys.StringBuilder;
    $v_1.append('/fetch//link-entity[@name="');
    $v_1.append($v_0[0]);
    $v_1.append('" and @from="');
    $v_1.append($v_0[1]);
    $v_1.append('" and @to="');
    $v_1.append($v_0[2]);
    $v_1.append('"]');
    return XUI.Xml.SelectSingleNode($p0, $v_1.toString(), null)
};
Mscrm.GridFilterUtil.$32 = function($p0, $p1, $p2, $p3) {
    if (IsNull($p1)) return null;
    var $v_0 = $p3.createElement("filter"), $v_1 = $p3.createAttribute("type"), $v_2 = $p0 === 2 ? "or" : "and";
    $v_1.value = $v_2;
    $v_0.attributes.setNamedItem($v_1);
    $v_0.appendChild($p1);
    $v_0.appendChild($p2);
    return $v_0
};
Mscrm.GridFilterUtil.parseFetchForAttributes = function(elements, fetchXml) {
    var $v_0 = null;
    if (!Mscrm.PageManager.isOutlookProxyPage()) $v_0 = new Mscrm.WebFetchXmlProcessor(elements, fetchXml);
    else $v_0 = new Mscrm.OutlookFetchXmlProcessor(elements, fetchXml);
    var $v_1 = $v_0.process();
    return $v_1
};
Mscrm.GridFilterUtil.saveQuery = function(saveAs, queryData, transientXml) {
    var $v_0 = XUI.Xml.XMLSerializer.serializeToString(transientXml);
    if (IsNull($v_0) || $v_0 === "") return false;
    if (saveAs) {
        var $v_1 = [queryData, transientXml],
            $v_2 = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterSaveQuery", Mscrm.GridFilterUtil, $v_1, false);
        Mscrm.GridFilterUtil.getViewInfo(queryData, $v_2);
        return false
    } else if (queryData.$n_0 !== 4230) {
        Mscrm.GridFilterUtil.cleanupFetchXmlForSave(transientXml);
        queryData.$Q_0 = XUI.Xml.XMLSerializer.serializeToString(transientXml);
        return Mscrm.GridFilterUtil.updateQuery(queryData)
    } else return false
};
Mscrm.GridFilterUtil.performActionAfterSaveQuery = function(resultQueryData, queryData, transientXml) {
    if (!IsNull(resultQueryData)) {
        queryData.$P_0 = resultQueryData.$P_0;
        queryData.$V_0 = resultQueryData.$V_0;
        Mscrm.GridFilterUtil.cleanupFetchXmlForSave(transientXml);
        queryData.$Q_0 = XUI.Xml.XMLSerializer.serializeToString(transientXml);
        Mscrm.GridFilterUtil.createUserQuery(queryData)
    }
};
Mscrm.GridFilterUtil.updateQuery = function(queryData) {
    var $v_0 = new RemoteCommand("AdvancedFind", "UpdateQuery", null);
    $v_0.SetParameter("id", queryData.$m_0);
    $v_0.SetParameter("fetchXml", queryData.$Q_0);
    $v_0.SetParameter("layoutXml", queryData.$y_0);
    $v_0.SetParameter("name", queryData.$P_0);
    $v_0.SetParameter("description", queryData.$V_0);
    $v_0.SetParameter("viewType", queryData.$1H_0);
    $v_0.SetParameter("conditionalFormatting", queryData.$h_0);
    return $v_0.Execute(null).Success
};
Mscrm.GridFilterUtil.getSelectedViewType = function() {
    var $v_0 = "crmGrid_SavedNewQuerySelector", $v_1 = null, $v_2 = null, $v_3 = true;
    $v_1 = $find($v_0);
    if (!IsNull($v_1) && $v_1.showNewVSControl && !$v_1.showOriginalSelectBox) $v_3 = true;
    else {
        $v_2 = $get($v_0);
        if (!IsNull($v_2)) $v_3 = false
    }
    if ($v_3) {
        if ($v_1.selectedViewType === "4230") return 4230;
        return 1039
    } else {
        if (!IsNull($v_2)) {
            var $v_4 = $v_2.options[$v_2.selectedIndex], $v_5 = $v_4.Type;
            if (!IsNull($v_5) && parseInt($v_5, 10) === 4230) return 4230
        }
        return 1039
    }
};
Mscrm.GridFilterUtil.createUniqueId = function() {
    for (var $v_0 = "", $v_1 = 0; $v_1 < 32; $v_1++) $v_0 += Math.floor(Math.random() * 15).toString(15);
    return $v_0
};
Mscrm.GridFilterUtil.getParentFilterXPathFromConditionXPath = function(conditionXPath) {
    if (conditionXPath.indexOf("gridfilterid") !== -1)
        return conditionXPath.substring(0, conditionXPath.indexOf("gridfilterid") + 48);
    else return null
};
Mscrm.GridFilterUtil.checkForOrConditions = function(conditionCollection) {
    for (var $v_0 = 0, $v_1 = 0; $v_1 < conditionCollection.$2_0.length; $v_1++) {
        var $v_2 = conditionCollection.$2_0[$v_1];
        if (!$v_2.$I_0 && $v_2.$8_0 && !IsNull($v_2.$7_0)) $v_0++;
        if ($v_0 === 2) return true
    }
    return false
};
Mscrm.GridFilterUtil.getUniqueAlias = function($sn_document) {
    for (var $v_0 = [],
        $v_1,
        $v_2,
        $v_3 = XUI.Xml.SelectNodes($sn_document, "/fetch//link-entity", null),
        $v_4,
        $v_6 = 0;
        $v_6 < $v_3.length;
        $v_6++) {
        $v_1 = $v_3[$v_6];
        $v_2 = $v_1.attributes.getNamedItem("alias");
        if (!IsNull($v_2)) {
            $v_4 = $v_2.nodeValue;
            !isNullOrEmptyString($v_4) && Array.add($v_0, $v_4)
        }
    }
    var $v_5 = "aa";
    while (Array.contains($v_0, $v_5)) $v_5 = Mscrm.GridFilterUtil.$2i($v_5);
    return $v_5
};
Mscrm.GridFilterUtil.$2i = function($p0) {
    var $v_0 = $p0.charCodeAt(0), $v_1 = $p0.charCodeAt(1);
    $v_1++;
    if ($v_1 > 122) {
        $v_1 = 97;
        $v_0++;
        if ($v_0 > 122) return null
    }
    return String.fromCharCode($v_0, $v_1)
};
Mscrm.GridFilterUtil.cleanupFetchXmlForRefresh = function(merged) {
    Mscrm.GridFilterUtil.removeEmptyFilterNodes(merged, false);
    Mscrm.GridFilterUtil.$1s(merged, false)
};
Mscrm.GridFilterUtil.cleanupFetchXmlForSave = function(merged) {
    Mscrm.GridFilterUtil.removeEmptyFilterNodes(merged, true);
    Mscrm.GridFilterUtil.$1s(merged, true);
    Mscrm.GridFilterUtil.$2L(merged);
    Mscrm.GridFilterUtil.cleanupGridFilterIds(merged)
};
Mscrm.GridFilterUtil.$1s = function($p0, $p1) {
    Mscrm.GridFilterUtil.$3C($p0, false);
    Mscrm.GridFilterUtil.$3N($p0, $p1)
};
Mscrm.GridFilterUtil.$3N = function($p0, $p1) {
    var $v_0 = XUI.Xml.SelectNodes($p0, "/fetch//link-entity", null), $v_1;
    if (!$v_0.length) return;
    for (var $v_2, $v_3, $v_4, $v_5 = 0; $v_5 < $v_0.length; $v_5++) {
        $v_2 = $v_0[$v_5];
        $v_1 = XUI.Xml.SelectNodes($v_2, ".//condition", null).length > 0;
        $v_3 = $v_2.attributes.getNamedItem("old-link-type");
        if (IsNull($v_3)) continue;
        if (!$v_1) {
            $v_4 = $p0.createAttribute("link-type");
            $v_4.value = $v_3.nodeValue;
            $v_2.attributes.setNamedItem($v_4);
            $v_2.attributes.removeNamedItem("old-link-type")
        } else $p1 && $v_2.attributes.removeNamedItem("old-link-type");
        $v_1 && !IsNull($v_2.attributes.getNamedItem("visible")) && $v_2.attributes.removeNamedItem("visible")
    }
};
Mscrm.GridFilterUtil.$3C = function($p0, $p1) {
    var $v_0 = null;
    if ($p1) $v_0 = XUI.Xml.SelectNodes($p0, "/fetch//link-entity[not(*)]", null);
    else $v_0 = XUI.Xml.SelectNodes($p0, "/fetch//link-entity[not(*)][@" + Mscrm.GridFilterUtil.$1L + "='true']", null);
    for (var $v_1, $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        $v_1 = $v_0[$v_2];
        $v_1.parentNode.removeChild($v_1)
    }
};
Mscrm.GridFilterUtil.$2L = function($p0) {
    var $v_0 = XUI.Xml.SelectNodes($p0, "/fetch//link-entity[@" + Mscrm.GridFilterUtil.$1L + "]", null);
    Mscrm.GridFilterUtil.$1n($v_0, Mscrm.GridFilterUtil.$1L)
};
Mscrm.GridFilterUtil.removeEmptyFilterNodes = function(transientFetchXml, hardRemove) {
    var $v_0 = null;
    if (hardRemove) $v_0 = XUI.Xml.SelectNodes(transientFetchXml, "/fetch//filter[not(*)]", null);
    else $v_0 = XUI.Xml.SelectNodes(transientFetchXml, "/fetch//filter[not(*)][not(@gridfilterid)]", null);
    for (var $v_1, $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        $v_1 = $v_0[$v_2];
        $v_1.parentNode.removeChild($v_1)
    }
};
Mscrm.GridFilterUtil.cleanupGridFilterIds = function(merged) {
    var $v_0 = XUI.Xml.SelectNodes(merged, "/fetch//filter[@gridfilterid]", null);
    Mscrm.GridFilterUtil.$1n($v_0, "gridfilterid");
    var $v_1 = XUI.Xml.SelectNodes(merged, "/fetch//condition[@gridfilterconditionid]", null);
    Mscrm.GridFilterUtil.$1n($v_1, "gridfilterconditionid")
};
Mscrm.GridFilterUtil.$1n = function($p0, $p1) {
    for (var $v_0 = null, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        $v_0 = $p0[$v_1];
        if (IsNull($v_0.attributes.getNamedItem($p1))) continue;
        else $v_0.attributes.removeNamedItem($p1)
    }
};
Mscrm.GridFilterUtil.getAttributeXml = function(filterElement) {
    var $v_0 = filterElement.getAttribute("attributeXml");
    if (isNullOrEmptyString($v_0)) return null;
    else return $v_0
};
Mscrm.GridFilterUtil.isEqual = function(lhs, rhs) {
    if (IsNull(lhs) && IsNull(rhs)) return true;
    else if (IsNull(lhs) || IsNull(rhs)) return false;
    else return lhs.$9_0 === rhs.$9_0 && lhs.$3_0 === rhs.$3_0 && lhs.$J_0 === rhs.$J_0
};
Mscrm.GridFilterUtil.isOperatorEqual = function(join, conditionGroup) {
    if (IsNull(join) && IsNull(conditionGroup)) return true;
    else if (IsNull(join) || IsNull(conditionGroup)) return false;
    else return join === conditionGroup.$C_0
};
Mscrm.GridFilterUtil.isToggleableFilterAction = function(action) {
    switch (action) {
    case "IsNotNull":
    case "IsNull":
        return true;
    default:
        return false
    }
};
Mscrm.GridFilterUtil.getFilterPopupSetId = function(filterPopup) {
    var $v_0 = filterPopup.getAttribute("gridid");
    if (!isNullOrEmptyString($v_0)) return $v_0 + "_filterSet";
    else return "crmGrid_filterSet"
};
Mscrm.DateTimeFilterPopup = function(element) {
    this.$U_4 = [];
    this.$a_4 = [];
    this.$Z_4 = [];
    this.$c_4 = [];
    this.$W_4 = [];
    this.$X_4 = [];
    this.$u_4 = [];
    this.$14_4 = [];
    this.$z_4 = [];
    this.$15_4 = [];
    this.$v_4 = [];
    this.$w_4 = [];
    Mscrm.DateTimeFilterPopup.initializeBase(this, [element]);
    this._thisElement = element;
    this._type = "datetime"
};
Mscrm.DateTimeFilterPopup.prototype = {
    $i_4: false,
    initialize: function() {
        Mscrm.FilterPopup.prototype.initialize.call(this);
        Array.add(this.$U_4, this.$E_4("grid-filter-yesterday-checkbox"));
        Array.add(this.$U_4, this.$E_4("grid-filter-today-checkbox"));
        Array.add(this.$U_4, this.$E_4("grid-filter-tomorrow-checkbox"));
        Array.add(this.$a_4, this.$E_4("grid-filter-lastweek-checkbox"));
        Array.add(this.$a_4, this.$E_4("grid-filter-thisweek-checkbox"));
        Array.add(this.$a_4, this.$E_4("grid-filter-nextweek-checkbox"));
        Array.add(this.$Z_4, this.$E_4("grid-filter-lastmonth-checkbox"));
        Array.add(this.$Z_4, this.$E_4("grid-filter-thismonth-checkbox"));
        Array.add(this.$Z_4, this.$E_4("grid-filter-nextmonth-checkbox"));
        Array.add(this.$c_4, this.$E_4("grid-filter-lastyear-checkbox"));
        Array.add(this.$c_4, this.$E_4("grid-filter-thisyear-checkbox"));
        Array.add(this.$c_4, this.$E_4("grid-filter-nextyear-checkbox"));
        Array.add(this.$W_4, this.$E_4("grid-filter-lastfiscalperiod-checkbox"));
        Array.add(this.$W_4, this.$E_4("grid-filter-thisfiscalperiod-checkbox"));
        Array.add(this.$W_4, this.$E_4("grid-filter-nextfiscalperiod-checkbox"));
        Array.add(this.$X_4, this.$E_4("grid-filter-lastfiscalyear-checkbox"));
        Array.add(this.$X_4, this.$E_4("grid-filter-thisfiscalyear-checkbox"));
        Array.add(this.$X_4, this.$E_4("grid-filter-nextfiscalyear-checkbox"));
        Array.add(this.$u_4, "yesterday");
        Array.add(this.$u_4, "today");
        Array.add(this.$u_4, "tomorrow");
        Array.add(this.$14_4, "last-week");
        Array.add(this.$14_4, "this-week");
        Array.add(this.$14_4, "next-week");
        Array.add(this.$z_4, "last-month");
        Array.add(this.$z_4, "this-month");
        Array.add(this.$z_4, "next-month");
        Array.add(this.$15_4, "last-year");
        Array.add(this.$15_4, "this-year");
        Array.add(this.$15_4, "next-year");
        Array.add(this.$v_4, "last-fiscal-period");
        Array.add(this.$v_4, "this-fiscal-period");
        Array.add(this.$v_4, "next-fiscal-period");
        Array.add(this.$w_4, "last-fiscal-year");
        Array.add(this.$w_4, "this-fiscal-year");
        Array.add(this.$w_4, "next-fiscal-year")
    },
    CheckBoxChanged: function(id, popUp) { this.$i_4 = true },
    FilterChanged: function(item) {
        if (!IsNull(item.get_itemContents().getElementsByTagName("input")[0])) this.$2p_4(item);
        else this.$2t_4(item)
    },
    $2p_4: function($p0) {
        var $v_0 = $p0.get_menuItemId(),
            $v_1 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='" + $v_0 + "']", null);
        this.$i_4 = true;
        if ($p0.get_isCheckboxChecked()) $v_1 = this.setAttributeUtil($v_1, "ischecked", "true");
        else $v_1 = this.setAttributeUtil($v_1, "ischecked", "false")
    },
    $2t_4: function($p0) {
        var $v_0 = $p0.get_menuItemId(),
            $v_1 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='" + $v_0 + "']", null);
        $v_0 = XUI.Xml.GetText($v_1.attributes.getNamedItem("type"));
        if (!IsNull($v_1.attributes.getNamedItem("filterconditionxpath")) &&
            XUI.Xml.GetText($v_1.attributes
                .getNamedItem("type")) ===
            $v_0)
            if (!Mscrm.GridFilterUtil.isToggleableFilterAction($v_0) &&
                XUI.Xml.GetText($v_1.attributes.getNamedItem("filterconditionxpath"))) return;
        Mscrm.FilterPopup.prototype.FilterChanged.call(this, $p0);
        this.$i_4 = false
    },
    ProcessOkButtonClick: function(menu) {
        var $v_0 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
        if (this.$i_4 && this.isDateTimeFilterDirty()) {
            this.ClearFilterConditions(true, true);
            this.$2r_4();
            $v_0.ApplyFilters()
        } else {
            this.$i_4 = false;
            return
        }
    },
    $2r_4: function() {
        var $v_0 = this.$2c_4();
        if (IsNull($v_0) || !$v_0.length) this.$1t_4();
        else {
            for (var $v_1 = null, $v_2 = null, $v_3 = 0; $v_3 < this.$0_3.$2_0.length; $v_3++) {
                $v_2 = this.$0_3.$2_0[$v_3];
                var $v_4 = $v_2.$3_0;
                if (getDateFilterGroup($v_4) && $v_2.$6_0 && !$v_2.$I_0) {
                    $v_1 = $v_2;
                    break
                }
            }
            if (IsNull($v_1))
                for (var $v_5 = 0; $v_5 < $v_0.length; $v_5++) {
                    var $v_6 = $v_0[$v_5];
                    $v_6.$6_0 = false;
                    $v_6.$8_0 = true;
                    Array.add(this.$0_3.$2_0, $v_6)
                }
            else {
                var $v_7 = $v_1.$7_0, $v_8 = Mscrm.GridFilterUtil.getParentFilterXPathFromConditionXPath($v_7);
                this.$1t_4();
                for (var $v_9 = 0; $v_9 < $v_0.length; $v_9++) {
                    var $v_A = $v_0[$v_9], $v_B = new Sys.StringBuilder;
                    $v_B.append($v_8);
                    $v_B.append('/condition[@gridfilterconditionid="');
                    $v_B.append(Mscrm.GridFilterUtil.createUniqueId());
                    $v_B.append('"]');
                    $v_A.$7_0 = $v_B.toString();
                    $v_A.$6_0 = false;
                    $v_A.$8_0 = true;
                    Array.add(this.$0_3.$2_0, $v_A)
                }
            }
        }
        this.clearBackup()
    },
    clearUI: function() {
        Mscrm.FilterPopup.prototype.clearUI.call(this);
        this.$16_4(this.$U_4);
        this.$16_4(this.$a_4);
        this.$16_4(this.$Z_4);
        this.$16_4(this.$c_4);
        this.$16_4(this.$W_4);
        this.$16_4(this.$X_4)
    },
    initUI: function() {
        Mscrm.FilterPopup.prototype.initUI.call(this);
        for (var $v_0 = new Array(Mscrm.DateFilterGroup.get_getTotalNoOfGroups()),
            $v_1 = new Array(Mscrm.DateFilterGroup.get_getTotalNoOfGroups()),
            $v_4 = 0;
            $v_4 < $v_0.length;
            $v_4++) $v_0[$v_4] = false;
        for (var $v_2 = this.$2l_4(), $v_3 = false, $v_5 = 0; $v_5 < this.$0_3.$2_0.length; $v_5++) {
            var $v_6 = this.$0_3.$2_0[$v_5], $v_7 = $v_6.$3_0, $v_8 = this.$2Z_4($v_2, $v_6);
            $v_3 = $v_8 !== -1 ? true : false;
            $v_3 && Array.removeAt($v_2, $v_8);
            var $v_9 = getDateFilterGroup($v_7);
            if ($v_9) {
                if (!$v_0[$v_9]) {
                    $v_0[$v_9] = !$v_3;
                    $v_1[$v_9] = $v_6.$7_0
                }
                this._isFilterPopUpDirty = !$v_3 ? true : this._isFilterPopUpDirty
            }
        }
        for (var $v_A = 0; $v_A < $v_2.length; $v_A++) {
            var $v_B = getDateFilterGroup($v_2[$v_A].$3_0);
            $v_0[$v_B] = true;
            $v_1[$v_B] = $v_2[$v_A].$7_0;
            this._isFilterPopUpDirty = true
        }
        for (var $v_C = 0; $v_C < Mscrm.DateFilterGroup.get_getTotalNoOfGroups(); $v_C++)
            if ($v_C && !isNullOrEmptyString($v_1[$v_C]))
                if ($v_C === 1) this.setCheckmark(this.getId("DayFilterSubMenu"), !$v_0[$v_C], $v_1[$v_C]);
                else if ($v_C === 2) this.setCheckmark(this.getId("WeekFilterSubMenu"), !$v_0[$v_C], $v_1[$v_C]);
                else if ($v_C === 3) this.setCheckmark(this.getId("MonthFilterSubMenu"), !$v_0[$v_C], $v_1[$v_C]);
                else if ($v_C === 4) this.setCheckmark(this.getId("YearFilterSubMenu"), !$v_0[$v_C], $v_1[$v_C]);
                else if ($v_C === 5)
                    this.setCheckmark(this.getId("FiscalPeriodFilterSubMenu"), !$v_0[$v_C], $v_1[$v_C]);
                else $v_C === 6 && this.setCheckmark(this.getId("FiscalYearFilterSubMenu"), !$v_0[$v_C], $v_1[$v_C]);
        if (this._isFilterPopUpDirty) this.setMenuUIDirty(true);
        else this.setMenuUIDirty(false);
        for (var $v_D = 0; $v_D < this.$0_3.$2_0.length; $v_D++) {
            for (var $v_E = this.$0_3.$2_0[$v_D], $v_F = $v_E.$3_0, $v_G = false, $v_H = 0; $v_H < 3; $v_H++)
                if ($v_F === this.$u_4[$v_H]) {
                    var $v_I = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                        "//MenuItem[@buttonId='" + this.$U_4[$v_H] + "']",
                        null);
                    $v_I = this.setAttributeUtil($v_I, "ischecked", "true");
                    $v_I = this.setAttributeUtil($v_I, "isdummychecked", "true");
                    $v_G = true;
                    break
                }
            if ($v_G) continue;
            for (var $v_J = 0; $v_J < 3; $v_J++)
                if ($v_F === this.$14_4[$v_J]) {
                    var $v_K = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                        "//MenuItem[@buttonId='" + this.$a_4[$v_J] + "']",
                        null);
                    $v_K = this.setAttributeUtil($v_K, "ischecked", "true");
                    $v_K = this.setAttributeUtil($v_K, "isdummychecked", "true");
                    $v_G = true;
                    break
                }
            if ($v_G) continue;
            for (var $v_L = 0; $v_L < 3; $v_L++)
                if ($v_F === this.$z_4[$v_L]) {
                    var $v_M = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                        "//MenuItem[@buttonId='" + this.$Z_4[$v_L] + "']",
                        null);
                    $v_M = this.setAttributeUtil($v_M, "ischecked", "true");
                    $v_M = this.setAttributeUtil($v_M, "isdummychecked", "true");
                    $v_G = true;
                    break
                }
            if ($v_G) continue;
            for (var $v_N = 0; $v_N < 3; $v_N++)
                if ($v_F === this.$15_4[$v_N]) {
                    var $v_O = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                        "//MenuItem[@buttonId='" + this.$c_4[$v_N] + "']",
                        null);
                    $v_O = this.setAttributeUtil($v_O, "ischecked", "true");
                    $v_O = this.setAttributeUtil($v_O, "isdummychecked", "true");
                    $v_G = true;
                    break
                }
            if ($v_G) continue;
            for (var $v_P = 0; $v_P < 3; $v_P++)
                if ($v_F === this.$v_4[$v_P]) {
                    var $v_Q = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                        "//MenuItem[@buttonId='" + this.$W_4[$v_P] + "']",
                        null);
                    $v_Q = this.setAttributeUtil($v_Q, "ischecked", "true");
                    $v_Q = this.setAttributeUtil($v_Q, "isdummychecked", "true");
                    $v_G = true;
                    break
                }
            if ($v_G) continue;
            for (var $v_R = 0; $v_R < 3; $v_R++)
                if ($v_F === this.$w_4[$v_R]) {
                    var $v_S = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                        "//MenuItem[@buttonId='" + this.$X_4[$v_R] + "']",
                        null);
                    $v_S = this.setAttributeUtil($v_S, "ischecked", "true");
                    $v_S = this.setAttributeUtil($v_S, "isdummychecked", "true");
                    $v_G = true;
                    break
                }
        }
        this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml())
    },
    isDateTimeFilterDirty: function() {
        if (this.$17_4(this.$U_4) ||
            this.$17_4(this.$a_4) ||
            this.$17_4(this.$Z_4) ||
            this.$17_4(this.$c_4) ||
            this.$17_4(this.$W_4) ||
            this.$17_4(this.$X_4)) return true;
        return false
    },
    SetUIUndirty: function(menu) {
        this.resetDateTimeCheckBox(this.$U_4);
        this.resetDateTimeCheckBox(this.$a_4);
        this.resetDateTimeCheckBox(this.$Z_4);
        this.resetDateTimeCheckBox(this.$c_4);
        this.resetDateTimeCheckBox(this.$W_4);
        this.resetDateTimeCheckBox(this.$X_4);
        this.$i_4 = false
    },
    resetDateTimeCheckBox: function(checkBoxes) {
        for (var $v_0, $v_1 = 0; $v_1 < checkBoxes.length; $v_1++) {
            var $v_2 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                "//MenuItem[@buttonId='" + checkBoxes[$v_1] + "']",
                null);
            $v_0 = XUI.Xml.GetText($v_2.attributes.getNamedItem("isdummychecked"));
            if (!IsNull($v_0) && Boolean.parse($v_0.toString())
            ) $v_2 = this.setAttributeUtil($v_2, "ischecked", "true");
            else $v_2 = this.setAttributeUtil($v_2, "ischecked", "false")
        }
    },
    $16_4: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                "//MenuItem[@buttonId='" + $p0[$v_0] + "']",
                null);
            $v_1 = this.setAttributeUtil($v_1, "ischecked", "false");
            $v_1 = this.setAttributeUtil($v_1, "isdummychecked", "false")
        }
    },
    $1t_4: function() {
        for (var $v_0 = null, $v_1 = [], $v_2 = 0; $v_2 < this.$0_3.$2_0.length; $v_2++) {
            $v_0 = this.$0_3.$2_0[$v_2];
            var $v_3 = $v_0.$3_0;
            getDateFilterGroup($v_3) && $v_0.$6_0 && !$v_0.$I_0 && Array.add($v_1, $v_0)
        }
        for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) Array.remove(this.$0_3.$2_0, $v_1[$v_4])
    },
    $2c_4: function() {
        var $v_0 = [];
        Array.add($v_0, this.$U_4);
        Array.add($v_0, this.$a_4);
        Array.add($v_0, this.$Z_4);
        Array.add($v_0, this.$c_4);
        Array.add($v_0, this.$W_4);
        Array.add($v_0, this.$X_4);
        var $v_1 = [];
        Array.add($v_1, this.$u_4);
        Array.add($v_1, this.$14_4);
        Array.add($v_1, this.$z_4);
        Array.add($v_1, this.$15_4);
        Array.add($v_1, this.$v_4);
        Array.add($v_1, this.$w_4);
        for (var $v_2 = [], $v_3, $v_4, $v_5 = false, $v_6 = 0; $v_6 < $v_0.length; $v_6++) {
            $v_3 = $v_0[$v_6];
            $v_4 = $v_1[$v_6];
            for (var $v_7 = 0; $v_7 < $v_3.length; $v_7++) {
                var $v_8 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                    "//MenuItem[@buttonId='" + $v_3[$v_7] + "']",
                    null);
                if (XUI.Xml.GetText($v_8.attributes.getNamedItem("ischecked")) === "true") $v_5 = true;
                else $v_5 = false;
                $v_5 && Array.add($v_2, new Mscrm.FilterCondition(1, $v_4[$v_7], "", false, ""))
            }
        }
        return $v_2
    },
    $E_4: function($p0) {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append($p0);
        $v_0.append(this._thisElement.getAttribute("gridid"));
        $v_0.append(this._entityName);
        $v_0.append(this._attributeName);
        $v_0.append(this._relationshipName);
        return $v_0.toString()
    },
    $17_4: function($p0) {
        for (var $v_0, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                "//MenuItem[@buttonId='" + $p0[$v_1] + "']",
                null);
            $v_0 = XUI.Xml.GetText($v_2.attributes.getNamedItem("isdummychecked"));
            var $v_3;
            if (XUI.Xml.GetText($v_2.attributes.getNamedItem("ischecked")) === "true") $v_3 = true;
            else $v_3 = false;
            if (!IsNull($v_0) && Boolean.parse($v_0.toString()) !== $v_3 || IsNull($v_0) && $v_3) return true
        }
        return false
    },
    describeOrdinaryFilters: function() {
        var $v_0 = this.$0_3.$2_0;
        if (!$v_0.length) return "";
        for (var $v_1 = new Sys.StringBuilder,
            $v_2 = new Sys.StringBuilder,
            $v_3 = String.format(" {0} ", window.LOCID_GF_AND),
            $v_4 = 0;
            $v_4 < $v_0.length;
            $v_4++) {
            var $v_5 = $v_0[$v_4], $v_6 = getDateFilterGroup($v_5.$3_0);
            if ($v_6) {
                !$v_1.isEmpty() && $v_1.append(";");
                $v_1.append(this.describeOrdinaryCondition($v_5))
            } else {
                !$v_2.isEmpty() && $v_2.append($v_3);
                $v_2.append(this.describeOrdinaryCondition($v_5))
            }
        }
        if (!$v_1.isEmpty()) {
            var $v_7 = String.format(window.LOCID_GF_BINARYCONDITIONFORMAT, window.LOCID_AF_EQUALS, $v_1.toString());
            if (!$v_2.isEmpty()) {
                $v_2.append($v_3);
                $v_2.append("\r\n");
                $v_2.append($v_7);
                return $v_2.toString()
            } else return $v_7
        } else if (!$v_2.isEmpty()) return $v_2.toString();
        else return ""
    },
    describeCustomFilters: function() {
        var $v_0 = this.$0_3.getCustomFilterConditionsCount();
        if ($v_0 > 0) {
            var $v_1 = new Sys.StringBuilder, $v_2 = this.$0_3.$1_0;
            $v_1.append(this.$1i_4($v_2.$4_0, false));
            if ($v_0 > 1) {
                $v_1.append(" ");
                $v_1.append($v_2.$C_0 === 1 ? window.LOCID_GF_AND : window.LOCID_GF_OR);
                $v_1.append("\r\n");
                $v_1.append(this.$1i_4($v_2.$5_0, false))
            }
            return $v_1.toString()
        } else return null
    },
    describeOrdinaryCondition: function(condition) { return this.$1i_4(condition, true) },
    $1i_4: function($p0, $p1) {
        if ($p0.$3_0 === "containsdata" || $p0.$3_0 === "not-null") return window.LOCID_AF_CONTAINSDATA;
        else if ($p0.$3_0 === "doesnotcontaindata" || $p0.$3_0 === "null") return window.LOCID_AF_DOESNOTCONTAINDATA;
        else if (isDynamicDateOperator($p0.$3_0)) {
            var $v_0 = getParameterizedLabelForDynamicOperator($p0.$3_0), $v_1 = String.format($v_0, $p0.$9_0);
            return String.format(window.LOCID_GF_BINARYCONDITIONFORMAT, window.LOCID_AF_EQUALS, $v_1)
        } else if (isOperatorExpectsDateTimeOperand($p0.$3_0)) {
            var $v_2 = getLabelForOperator($p0.$3_0), $v_3 = $p0.$9_0;
            if (!isNullOrEmptyString($v_3)) {
                var $v_4 = this.$36_4($p0.$9_0), $v_5 = Mscrm.DateTimeUtility.formatDate($v_4);
                if (!isNullOrEmptyString($v_5)) $v_3 = $v_5
            }
            return String.format(window.LOCID_GF_BINARYCONDITIONFORMAT, $v_2, $v_3)
        } else if (isDateTimeOperandPiclklist($p0.$3_0)) {
            var $v_6 = String.format(window.LOCID_GF_BINARYCONDITIONFORMAT,
                getLabelForOperator($p0.$3_0),
                this.$2b_4($p0.$3_0, $p0.$9_0));
            return String.format(window.LOCID_GF_BINARYCONDITIONFORMAT, window.LOCID_AF_EQUALS, $v_6)
        } else {
            var $v_7 = Mscrm.FilterPopup.prototype.describeOrdinaryCondition.call(this, $p0);
            if ($p1) return $v_7;
            else return String.format(window.LOCID_GF_BINARYCONDITIONFORMAT, window.LOCID_AF_EQUALS, $v_7)
        }
    },
    $2Z_4: function($p0, $p1) {
        if (IsNull($p0)) return -1;
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) if ($p0[$v_0].$3_0 === $p1.$3_0) return $v_0;
        return -1
    },
    $2l_4: function() {
        for (var $v_0 = [], $v_1 = null, $v_2 = 0; $v_2 < this._originalFilters.length; $v_2++) {
            $v_1 = this._originalFilters[$v_2];
            getDateFilterGroup($v_1.$3_0) && Array.add($v_0, $v_1)
        }
        return $v_0
    },
    $36_4: function($p0) {
        if ($p0.length > 10)
            return new Date(parseInt($p0.substr(0, 4), 10),
                parseInt($p0.substr(5, 2), 10) - 1,
                parseInt($p0.substr(8, 2), 10),
                parseInt($p0.substr(11, 2), 10),
                parseInt($p0.substr(14, 2), 10),
                parseInt($p0.substr(17, 2), 10));
        else
            return new Date(parseInt($p0.substr(0, 4), 10),
                parseInt($p0.substr(5, 2), 10) - 1,
                parseInt($p0.substr(8, 2), 10))
    },
    $2b_4: function($p0, $p1) {
        if (isNullOrEmptyString($p1)) return "";
        switch ($p0) {
        case "in-fiscal-year":
            var $v_0 = parseInt($p1, 10);
            return this.$1X_4(window.FiscalYearDisplayName, $v_0);
        case "in-fiscal-period":
            var $v_1 = parseInt($p1, 10);
            return this.$1X_4(window.FiscalPeriodDisplayName, $v_1);
        case "in-fiscal-period-and-year":
        case "in-or-before-fiscal-period-and-year":
        case "in-or-after-fiscal-period-and-year":
            var $v_2 = XUI.Xml.SelectNodes(XUI.Xml.LoadXml($p1), "/values/value", null);
            $v_1 = parseInt(XUI.Xml.GetText($v_2[0]), 10);
            $v_0 = parseInt(XUI.Xml.GetText($v_2[1]), 10);
            return String.format("{0} {1}",
                this.$1X_4(window.FiscalPeriodDisplayName, $v_1),
                this.$1X_4(window.FiscalYearDisplayName, $v_0));
        default:
            return $p1
        }
    },
    $1X_4: function($p0, $p1) {
        var $v_0 = $p1.toString();
        if (IsNull($p0)) return $v_0;
        var $v_1 = $p0[$v_0];
        if (isNullOrEmptyString($v_1)) $v_1 = $v_0;
        return $v_1
    }
};
Mscrm.FilterPopup = function(element) {
    this.$$d_filterMenuHidden = Function.createDelegate(this, this.filterMenuHidden);
    this.$$d_MenuItemClicked = Function.createDelegate(this, this.MenuItemClicked);
    this.$$d_$35_3 = Function.createDelegate(this, this.$35_3);
    this.$$d_$34_3 = Function.createDelegate(this, this.$34_3);
    this.$$d_$33_3 = Function.createDelegate(this, this.$33_3);
    Mscrm.FilterPopup.initializeBase(this, [element]);
    this._thisElement = element
};
Mscrm.FilterPopup.prototype = {
    $0_3: null,
    $j_3: false,
    $t_3: null,
    $T_3: null,
    $1a_3: false,
    xmlString: null,
    menu: null,
    $1p_3: null,
    _newAlink: null,
    _newLilink: null,
    _thisElement: null,
    _type: null,
    _entityName: null,
    _attributeName: null,
    _attributeFormat: null,
    _attributeType: null,
    _relationshipName: "",
    _isFromRelated: false,
    _originalFilters: null,
    _originalCustomFilterConditionGroup: null,
    _isFilterPopUpDirty: false,
    $d_3: null,
    _attribXml: null,
    _attributeXmlDocument: null,
    _resultNode: null,
    _attributeDisplayName: "",
    _appliedFiltersOld: null,
    get_appliedFilters: function() { return this.$0_3 },
    set_appliedFilters: function(value) {
        this.$0_3 = value;
        if (!IsNull(this.$0_3.$2_0)) {
            this._originalFilters = [];
            for (var $v_0 = 0; $v_0 < this.$0_3.$2_0.length; $v_0++) {
                var $v_1 = this.$0_3.$2_0[$v_0];
                Array.add(this._originalFilters, this.cloneFilterCondition($v_1))
            }
        }
        if (!IsNull(this.$0_3.$1_0))
            this._originalCustomFilterConditionGroup = new Mscrm
                .CustomFilterConditionGroup(this.cloneFilterCondition(this.$0_3.$1_0.$4_0),
                    this.cloneFilterCondition(this.$0_3.$1_0.$5_0),
                    this.$0_3.$1_0.$C_0);
        return value
    },
    get_isFilterPopUpDirty: function() { return this._isFilterPopUpDirty },
    set_isFilterPopUpDirty: function(value) {
        this._isFilterPopUpDirty = value;
        return value
    },
    MenuItemClicked: function(eventCode, parameters) {
        if (eventCode === 0) this.FilterChanged(parameters["menuitem"]);
        else if (eventCode === 1) this.ProcessOkButtonClick(null);
        else eventCode === 2 && this.SetUIUndirty(null)
    },
    FilterChanged: function(item) {
        if (!IsNull(item)) {
            var $v_0 = item.get_menuItemId(),
                $v_1 = false,
                $v_2 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='" + $v_0 + "']", null);
            $v_0 = XUI.Xml.GetText($v_2.attributes.getNamedItem("type"));
            if (!IsNull($v_2.attributes.getNamedItem("filterconditionxpath")) &&
                XUI.Xml.GetText($v_2.attributes.getNamedItem("type")) === $v_0) {
                if (!Mscrm.GridFilterUtil.isToggleableFilterAction($v_0) &&
                    XUI.Xml.GetText($v_2.attributes.getNamedItem("filterconditionxpath"))) return;
                $v_1 = true
            }
            var $v_3 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
            if ($v_0 === "CustomFilters") {
                var $v_4 = Mscrm.Utilities.createCallbackFunctionObject("filterChangedCallback", this, null, false);
                this.handleCustomFiltersClick($v_4);
                return
            } else if ($v_0 === "SortAsc" || $v_0 === "SortDesc") {
                var $v_5 = false, $v_6 = $v_0 === "SortAsc" ? true : false;
                if (!IsNull(window.event) && window.event.shiftKey) $v_5 = true;
                $v_3.sortColumns(this._thisElement, $v_6, $v_5)
            } else {
                this.ClearFilterConditions(true, true);
                switch ($v_0) {
                case "ResetFilter":
                    break;
                case "IsNotNull":
                    this.handleNullNotNullItemClick(false, $v_1);
                    break;
                case "IsNull":
                    this.handleNullNotNullItemClick(true, $v_1);
                    break;
                default:
                    break
                }
            }
            this.filterChangedCallback()
        }
    },
    filterChangedCallback: function() {
        var $v_0 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
        $v_0.ApplyFilters()
    },
    initialize: function() {
        if (!IsNull($find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement)))) {
            Mscrm.CrmUIControl.prototype.initialize.call(this);
            var $v_0 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
            $v_0.RegisterFilterPopup(this._thisElement.id, this._type, "initialize");
            if (IsNull(this.$0_3) || IsNull(this.$0_3.$F_0)) {
                this._attributeName = this._thisElement.getAttribute("attributename");
                this._attributeType = this._thisElement.getAttribute("attributetype");
                this._entityName = this._thisElement.getAttribute("entityname");
                this._isFromRelated = this._thisElement.getAttribute("isfromrelatedentity") === "true" ? true : false;
                if (!IsNull(this._thisElement
                    .getAttribute("relationshipname")))
                    this._relationshipName = this._thisElement.getAttribute("relationshipname");
                else this._relationshipName = "";
                this._attributeFormat = this._thisElement.getAttribute("attributeformat");
                this.$0_3 = new Mscrm
                    .FilterConditionCollection(this._attributeName,
                        this._attributeType,
                        this._isFromRelated,
                        this._entityName,
                        this._attributeFormat)
            }
            this._attribXml = Mscrm.GridFilterUtil.getAttributeXml(this._thisElement);
            this._attributeXmlDocument = XUI.Xml.LoadXml(this._attribXml);
            this._resultNode = XUI.Xml.SelectSingleNode(this._attributeXmlDocument, "/attributeinfo/result", null);
            this._attributeDisplayName = XUI.Xml.GetText(this._resultNode);
            !Mscrm.PageManager.isOutlookProxyPage() && this.$2W_3()
        }
        this.$2M_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.menu) && this.menu.dispose();
        if (!Mscrm.PageManager.isOutlookProxyPage()) {
            !IsNull(this._newAlink) && $removeHandler(this._newAlink, "click", this.$$d_$33_3);
            !IsNull(this._newLilink) && $removeHandler(this._newLilink, "mouseover", this.$$d_$34_3);
            !IsNull(this._newLilink) && $removeHandler(this._newLilink, "mouseout", this.$$d_$35_3)
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    clearBackup: function() {
        if (this.$j_3) {
            this.$t_3 = null;
            this.$T_3 = null;
            this.$j_3 = false
        }
    },
    onEnable: function() { this.initUI() },
    onDisable: function() {
        this.clearUI();
        !IsNull(this.menu.get_currentMenu()) &&
            this.menu.get_currentMenu().get_isVisible() &&
            this.menu.get_currentMenu().hideAll(true)
    },
    onFilterApplied: function() {
        this.clearUI();
        this.initUI()
    },
    initUI: function() {
        if (!IsNull(this._thisElement) && this.$0_3.$R_0)
            if (IsNull(this._thisElement.attributes.getNamedItem("iscomplexfilter")) ||
                !Mscrm.Utilities.parseBoolean(this._thisElement.attributes.getNamedItem("iscomplexfilter").value)) {
                this._thisElement.setAttribute("iscomplexfilter", "true");
                var $v_3 = this.menu.get_menuXml().createElement("MenuItem");
                this.setAttributeUtil($v_3, "type", "space");
                var $v_4 = XUI.Xml.DomUtils.GetFirstChild(this.menu.get_menuXml()),
                    $v_5 = XUI.Xml.DomUtils.GetFirstChild($v_4);
                $v_4.insertBefore($v_3, $v_5);
                $v_3 = this.menu.get_menuXml().createElement("MenuItem");
                this.setAttributeUtil($v_3, "type", "notification");
                $v_4.insertBefore($v_3, $v_5)
            }
        var $v_0 = this.$0_3.getCustomFilterConditionsCount(), $v_1 = this.$0_3.getOrdinaryFilterConditionsCount();
        this._isFilterPopUpDirty = false;
        for (var $v_2 = false, $v_6 = 0; $v_6 < $v_1; $v_6++) {
            var $v_7 = this.$0_3.$2_0[$v_6], $v_8 = $v_7.$3_0, $v_9 = $v_7.$6_0;
            if ($v_8 === "null") {
                this.setCheckmark(this.getId("IsNull"), $v_9, $v_7.$7_0);
                $v_2 = true;
                this._isFilterPopUpDirty = !$v_9 ? true : this._isFilterPopUpDirty
            } else if ($v_8 === "not-null") {
                this.setCheckmark(this.getId("IsNotNull"), $v_9, $v_7.$7_0);
                $v_2 = true;
                this._isFilterPopUpDirty = !$v_9 ? true : this._isFilterPopUpDirty
            }
        }
        if (!$v_2)
            for (var $v_A = 0; $v_A < this._originalFilters.length; $v_A++) {
                var $v_B = this._originalFilters[$v_A], $v_C = $v_B.$3_0;
                if ($v_C === "null" || $v_C === "not-null") {
                    this._isFilterPopUpDirty = true;
                    break
                }
            }
        if ($v_0 > 0) {
            var $v_D = this.$0_3.$1_0, $v_E = true;
            if (!IsNull($v_D.$4_0)) $v_E = $v_D.$4_0.$6_0;
            if (!IsNull($v_D.$5_0))
                $v_E = $v_E && $v_D.$5_0.$6_0 && this.$2y_3($v_D, this._originalCustomFilterConditionGroup);
            this.setCheckmark(this.getId("CustomFilters"), $v_E, "");
            if (!$v_E) this._isFilterPopUpDirty = true
        } else if (!IsNull(this._originalCustomFilterConditionGroup)) {
            this._isFilterPopUpDirty = true;
            this.setCheckmark(this.getId("CustomFilters"), false, "")
        }
        if (this._isFilterPopUpDirty) this.setMenuUIDirty(true);
        else this.setMenuUIDirty(false);
        !Mscrm.PageManager.isOutlookProxyPage() && this.$3J_3(this.GetTooltipText())
    },
    GetTooltipText: function() {
        var $v_0, $v_1 = this.describe();
        if (isNullOrEmptyString($v_1)) $v_0 = window.LOCID_GF_NOFILTERAPPLIEDTEXT;
        else $v_0 = String.format("{0}\r\n\r\n{1}", this._attributeDisplayName, $v_1);
        return $v_0
    },
    describe: function() {
        if (this.$0_3.$R_0) return window.LOCID_GF_COMPLEXCRITERIA;
        var $v_0 = new Sys.StringBuilder, $v_1 = this.describeOrdinaryFilters(), $v_2 = this.describeCustomFilters();
        $v_0.append($v_1);
        if (!isNullOrEmptyString($v_1) && !isNullOrEmptyString($v_2)) {
            $v_0.append(" ");
            $v_0.append(window.LOCID_GF_AND);
            $v_0.append("\r\n")
        }
        $v_0.append($v_2);
        return $v_0.toString()
    },
    describeOrdinaryFilters: function() {
        for (var $v_0 = String.format(" {0} ", window.LOCID_GF_AND),
            $v_1 = this.$0_3.$2_0,
            $v_2 = new Sys.StringBuilder,
            $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++) {
            $v_3 > 0 && $v_2.append($v_0);
            var $v_4 = $v_1[$v_3];
            $v_2.append(this.describeOrdinaryCondition($v_4))
        }
        return $v_2.toString()
    },
    describeOrdinaryCondition: function(condition) { return condition.describe() },
    describeCustomFilters: function() {
        var $v_0 = this.$0_3.getCustomFilterConditionsCount();
        if ($v_0 > 0) {
            var $v_1 = new Sys.StringBuilder, $v_2 = this.$0_3.$1_0;
            $v_1.append(this.describeOrdinaryCondition($v_2.$4_0));
            if ($v_0 > 1) {
                $v_1.append(" ");
                $v_1.append($v_2.$C_0 === 1 ? window.LOCID_GF_AND : window.LOCID_GF_OR);
                $v_1.append("\r\n");
                $v_1.append(this.describeOrdinaryCondition($v_2.$5_0))
            }
            return $v_1.toString()
        } else return null
    },
    $2y_3: function($p0, $p1) {
        if (IsNull($p1)) return false;
        var $v_0 = $p1.$C_0;
        if (!IsNull($v_0) && $v_0 === $p0.$C_0) return true;
        return false
    },
    $3J_3: function($p0) {
        if ($p0.length < 500) {
            this.$d_3.alt = $p0;
            this.$d_3.title = $p0
        } else {
            var $v_0 = $p0.substr(0, 500) + "...";
            this.$d_3.alt = $v_0;
            this.$d_3.title = $v_0
        }
    },
    setMenuUIDirty: function(containsUnsavedConditions) {
        var $v_0;
        if (containsUnsavedConditions) {
            $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/dropdown_wfilter.png"));
            this.enableResetFiltersOption(true)
        } else {
            $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/dropdown.png"));
            this.enableResetFiltersOption(false)
        }
        if (!Mscrm.PageManager.isOutlookProxyPage()) {
            this.$d_3.src = $v_0.source;
            this.$d_3.className = "ms-crm-Menu-ButtonFilter " + $v_0.cssClass
        }
    },
    enableResetFiltersOption: function(isEnabled) {
        var $v_0 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
            "//MenuItem[@id='" + this.getId("ResetFilter") + "']",
            null);
        if (isEnabled) {
            $v_0 = this.setAttributeUtil($v_0, "isenabled", "True");
            $v_0 = this.setAttributeUtil($v_0, "iconPath", window.CDNURL + "/_imgs/grid/reset.png")
        } else {
            $v_0 = this.setAttributeUtil($v_0, "isenabled", "False");
            $v_0 = this.setAttributeUtil($v_0, "iconPath", window.CDNURL + "/_imgs/grid/disablereset.png")
        }
        this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml())
    },
    setCheckmark: function(id, isOriginalSavedQueryCheckMark, filterConditionXPath) {
        var $v_0 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='" + id + "']", null);
        if (!IsNull(filterConditionXPath) && filterConditionXPath !== ""
        ) $v_0 = this.setAttributeUtil($v_0, "filterconditionxpath", filterConditionXPath);
        var $v_1 = this.menu.get_menuXml().createAttribute("iconPath");
        if (isOriginalSavedQueryCheckMark) $v_1.value = window.CDNURL + "/_imgs/selected_nohighlight.png";
        else $v_1.value = window.CDNURL + "/_imgs/selected_highlight.png";
        $v_0.attributes.setNamedItem($v_1)
    },
    clearUI: function() {
        for (var $v_0 = "mnu" + this._thisElement.id,
            $v_1 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//MenuItem", null),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            !IsNull($v_1[$v_2].attributes.getNamedItem("filterconditionxpath")) &&
                $v_1[$v_2].attributes.removeNamedItem("filterconditionxpath");
            if (!IsNull($v_1[$v_2].attributes.getNamedItem("iconPath")))
                if (XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("type")) === "SortAsc" ||
                    XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("type")) === "SortDesc" ||
                    XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("type")) === "ResetFilter") continue;
                else
                    this.setAttributeUtil($v_1[$v_2],
                        "iconPath",
                        window.CDNURL + "/_imgs/imagestrips/transparent_spacer.gif")
        }
        this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml())
    },
    rollBackDrillDownCondition: function() {
        if (this.$j_3) {
            this.$3G_3();
            this.$j_3 = false;
            this.$2D_3(false)
        }
    },
    setAttributeUtil: function(node, attr, value) {
        if (!isNullOrEmptyString(value)) {
            var $v_0 = node.ownerDocument.createAttribute(attr);
            $v_0.value = value;
            node.attributes.setNamedItem($v_0);
            return node
        }
        return node
    },
    setDrillDownCondition: function(value, lookupParameter, formattedXValue, startDate, endDate, refresh) {
        if (!this.$j_3) {
            this.$2I_3();
            this.ClearFilterConditions(true, false);
            this.$j_3 = true;
            var $v_0 = IsNull(value) ? "" : value, $v_1, $v_2 = null;
            if (!isNullOrEmptyString(startDate) && !isNullOrEmptyString(endDate)) {
                $v_1 = this
                    .constructDrillDownEqualsCondition(startDate, lookupParameter, formattedXValue, 2, "on-or-after");
                $v_2 = this
                    .constructDrillDownEqualsCondition(endDate, lookupParameter, formattedXValue, 2, "on-or-before");
                $v_2.$8_0 = true
            } else if ($v_0 !== "")
                $v_1 = this.constructDrillDownEqualsCondition($v_0, lookupParameter, formattedXValue, 0, null);
            else $v_1 = new Mscrm.FilterCondition(1, "null", $v_0, false, null);
            $v_1.$8_0 = true;
            var $v_3 = new Mscrm.CustomFilterConditionGroup($v_1, $v_2, 1);
            if (!IsNull(this.$0_3.$1_0))
                if (!IsNull(this.$0_3.$1_0.$M_0)) {
                    $v_3.$M_0 = this.$0_3.$1_0.$M_0;
                    if ($v_3.$M_0.$6_0) $v_3.$x_0 = true;
                    if (!IsNull(this.$0_3.$1_0.$L_0)) $v_3.$L_0 = this.$0_3.$1_0.$L_0
                }
            this.$0_3.$1_0 = $v_3;
            this.$2D_3(refresh)
        }
    },
    constructDrillDownEqualsCondition: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = null;
        switch (getAbstractDataType(this.$0_3.$S_0)) {
        case "lookup":
        case "owner":
            $v_0 = new Mscrm.FilterCondition(2,
                "in",
                '<values><value uiname="' +
                CrmEncodeDecode.CrmXmlAttributeEncode($p2) +
                '" uitype="' +
                CrmEncodeDecode.CrmXmlAttributeEncode($p1) +
                '" >' +
                CrmEncodeDecode.CrmXmlEncode($p0) +
                "</value></values>",
                false,
                null);
            break;
        case "picklist":
            $v_0 = new Mscrm.FilterCondition(2,
                "in",
                "<values><value>" + CrmEncodeDecode.CrmXmlEncode($p0) + "</value></values>",
                false,
                null);
            break;
        case "datetime":
        case "date":
            $v_0 = new Mscrm.FilterCondition($p3, $p4, $p0, false, null);
            break;
        default:
            $v_0 = new Mscrm.FilterCondition(2, "eq", $p0, false, null);
            break
        }
        return $v_0
    },
    $2D_3: function($p0) {
        var $v_0 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
        !IsNull($v_0) && $v_0.ApplyFilters($p0)
    },
    $2I_3: function() {
        if (!IsNull(this.$0_3.$2_0)) {
            this.$t_3 = [];
            for (var $v_0 = 0; $v_0 < this.$0_3.$2_0.length; $v_0++) {
                var $v_1 = this.$0_3.$2_0[$v_0];
                Array.add(this.$t_3, this.cloneFilterCondition($v_1))
            }
        }
        if (!IsNull(this.$0_3.$1_0))
            this.$T_3 = new Mscrm
                .CustomFilterConditionGroup(this.cloneFilterCondition(this.$0_3.$1_0.$4_0),
                    this.cloneFilterCondition(this.$0_3.$1_0.$5_0),
                    this.$0_3.$1_0.$C_0)
    },
    $3G_3: function() {
        this.ClearFilterConditions(true, false);
        for (var $v_0 = 0; $v_0 < this.$t_3.length; $v_0++) {
            var $v_1 = this.cloneFilterCondition(this.$t_3[$v_0]);
            $v_1.$8_0 = true;
            Array.add(this.$0_3.$2_0, $v_1)
        }
        if (!IsNull(this.$T_3)) {
            if (!IsNull(this.$T_3.$4_0)) {
                var $v_2 = this.cloneFilterCondition(this.$T_3.$4_0);
                $v_2.$8_0 = true;
                this.$0_3.$1_0.$4_0 = $v_2
            }
            if (!IsNull(this.$T_3.$5_0)) {
                var $v_3 = this.cloneFilterCondition(this.$T_3.$5_0);
                $v_3.$8_0 = true;
                this.$0_3.$1_0.$5_0 = $v_3
            }
            this.$0_3.$1_0.$C_0 = this.$T_3.$C_0;
            this.$0_3.$1_0.$x_0 = false
        }
    },
    handleNullNotNullItemClick: function(nullItemClicked, toggleFilter) {
        for (var $v_0 = null, $v_1 = null, $v_2 = 0; $v_2 < this.$0_3.$2_0.length; $v_2++) {
            $v_1 = this.$0_3.$2_0[$v_2];
            var $v_3 = $v_1.$3_0;
            if (($v_3 === "not-null" || $v_3 === "null") && $v_1.$6_0 && !$v_1.$I_0) {
                $v_0 = $v_1;
                break
            }
        }
        if (IsNull($v_0)) {
            if (!toggleFilter) {
                var $v_4 = new Mscrm.FilterCondition(1, nullItemClicked ? "null" : "not-null", "", false, "");
                $v_4.$6_0 = false;
                $v_4.$8_0 = true;
                Array.add(this.$0_3.$2_0, $v_4)
            }
        } else if (toggleFilter) Array.remove(this.$0_3.$2_0, $v_0);
        else {
            $v_0.$3_0 = nullItemClicked ? "null" : "not-null";
            $v_0.$6_0 = false
        }
        this.clearBackup()
    },
    handleCustomFiltersClick: function(callbackFunc) {
        var $v_0 = {};
        this.initializeDialog($v_0);
        var $v_1 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/GridFilters/customfilterdlg.aspx"), $v_0, 380, 290, null),
            $v_2 = [callbackFunc];
        $v_1.setCallbackInfo("handleCustomFiltersClickCallback", this, $v_2);
        return $v_1.show()
    },
    handleCustomFiltersClickCallback: function(returnValue, callbackFunc) {
        var $v_0 = false, $v_1 = null, $v_2 = null;
        if (!IsNull(returnValue)) {
            var $v_3 = returnValue["booleanOperator"], $v_4 = returnValue["primary"], $v_5 = returnValue["secondary"];
            $v_1 = this.$23_3($v_4);
            $v_2 = this.$23_3($v_5);
            var $v_6 = false,
                $v_7 = this.$0_3.$1_0,
                $v_8 = IsNull($v_7) ? null : $v_7.$4_0,
                $v_9 = IsNull($v_7) ? null : $v_7.$5_0,
                $v_A = !Mscrm.GridFilterUtil.isEqual($v_1, $v_8);
            $v_A = $v_A ||
                !Mscrm.GridFilterUtil.isEqual($v_2, $v_9) ||
                !Mscrm.GridFilterUtil.isOperatorEqual($v_3, $v_7);
            if (IsNull($v_1) && !IsNull($v_2)) {
                $v_1 = $v_2;
                $v_2 = null
            }
            if ($v_A) {
                this.clearBackup();
                this.ClearFilterConditions(true, true);
                if (!IsNull($v_1))
                    if (!IsNull(this._originalCustomFilterConditionGroup) &&
                        !IsNull(this._originalCustomFilterConditionGroup.$4_0)) {
                        var $v_B = this.$0_3.$1_0.$4_0;
                        $v_B.$9_0 = $v_1.$9_0;
                        $v_B.$3_0 = $v_1.$3_0;
                        $v_B.$N_0 = $v_1.$N_0;
                        $v_B.$J_0 = $v_1.$J_0;
                        $v_B.$6_0 = false;
                        this.$0_3.$1_0.$C_0 = $v_3
                    } else {
                        $v_6 = true;
                        $v_1.$6_0 = false
                    }
                else if (!IsNull(this._originalCustomFilterConditionGroup) &&
                    !IsNull(this._originalCustomFilterConditionGroup.$4_0)) this.$0_3.$1_0.$4_0 = null;
                if (!IsNull($v_2))
                    if (!IsNull(this._originalCustomFilterConditionGroup) &&
                        !IsNull(this._originalCustomFilterConditionGroup.$5_0)) {
                        var $v_C = this.$0_3.$1_0.$5_0;
                        $v_C.$9_0 = $v_2.$9_0;
                        $v_C.$3_0 = $v_2.$3_0;
                        $v_C.$N_0 = $v_2.$N_0;
                        $v_C.$J_0 = $v_2.$J_0;
                        $v_C.$6_0 = false;
                        this.$0_3.$1_0.$C_0 = $v_3
                    } else {
                        $v_6 = true;
                        $v_2.$6_0 = false
                    }
                else if (!IsNull(this._originalCustomFilterConditionGroup) &&
                    !IsNull(this._originalCustomFilterConditionGroup.$5_0)) this.$0_3.$1_0.$5_0 = null;
                if ($v_6)
                    if (IsNull(this.$0_3.$1_0)) this.$0_3.$1_0 = new Mscrm.CustomFilterConditionGroup($v_1, $v_2, $v_3);
                    else {
                        this.$0_3.$1_0.$4_0 = $v_1;
                        this.$0_3.$1_0.$C_0 = $v_3;
                        if (!IsNull($v_2)) this.$0_3.$1_0.$5_0 = $v_2
                    }
            }
            $v_0 = true
        } else $v_0 = false;
        Mscrm.Utilities.executeFunction(callbackFunc, returnValue);
        this.$2H_3(this._entityName, $v_1, $v_2);
        return $v_0
    },
    $23_3: function($p0) {
        var $v_0 = null;
        if (!IsNull($p0)) {
            $v_0 = Mscrm.GridFilterUtil.getFilterConditionFromDictionary($p0);
            this.adjustNameAttribute($v_0);
            if (isValueBoundOperator($v_0.$3_0) && IsNull($v_0.$9_0)) $v_0 = null;
            return $v_0
        }
        return null
    },
    initializeDialog: function(diagArg) {
        diagArg.customFilter = this.$0_3.$1_0;
        if (this.$0_3.$1N_0 === "language") diagArg.metadataType = "language";
        else {
            var $v_0 = XUI.Xml.SelectSingleNode(this._attributeXmlDocument, "/attributeinfo/result/@datatype", null);
            if ($v_0 && XUI.Xml.GetText($v_0) === "date") diagArg.metadataType = "dateonly";
            else diagArg.metadataType = this.$0_3.$S_0
        }
        diagArg.attributeName = this.$0_3.$F_0;
        diagArg.attributeXml = this._attribXml;
        if (!IsNull(this.$0_3.$1_0)) {
            diagArg.booleanOperator = this.$0_3.$1_0.$C_0;
            if (!IsNull(this.$0_3.$1_0.$4_0)) diagArg.primaryCondition = this.$0_3.$1_0.$4_0;
            if (!IsNull(this.$0_3.$1_0.$5_0)) diagArg.secondaryCondition = this.$0_3.$1_0.$5_0
        }
    },
    adjustNameAttribute: function(condition) {},
    ClearFilterConditions: function(clearUnsavedCustomFilterConditions, restoreOriginalConditions) {
        for (var $v_0 = this.$0_3.getOrdinaryFilterConditionsCount(), $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$0_3.$2_0[$v_1];
            $v_2.$I_0 = true;
            $v_2.$8_0 = true
        }
        if (restoreOriginalConditions)
            for (var $v_3 = 0; $v_3 < this._originalFilters.length; $v_3++) {
                var $v_4 = this.cloneFilterCondition(this._originalFilters[$v_3]);
                $v_4.$8_0 = true;
                $v_4.$6_0 = true;
                Array.add(this.$0_3.$2_0, $v_4)
            }
        if (clearUnsavedCustomFilterConditions) {
            var $v_5 = this.$0_3.getCustomFilterConditionsCount();
            if ($v_5 >= 1) {
                this.$0_3.$1_0.$M_0 = this.$0_3.$1_0.$4_0;
                this.$0_3.$1_0.$4_0 = null;
                this.$0_3.$1_0.$C_0 = 1;
                if ($v_5 === 2) {
                    this.$0_3.$1_0.$L_0 = this.$0_3.$1_0.$5_0;
                    this.$0_3.$1_0.$5_0 = null
                }
            }
            if (restoreOriginalConditions)
                if (!IsNull(this._originalCustomFilterConditionGroup)) {
                    if (!IsNull(this._originalCustomFilterConditionGroup.$4_0)) {
                        var $v_6 = this.cloneFilterCondition(this._originalCustomFilterConditionGroup.$4_0);
                        $v_6.$8_0 = true;
                        $v_6.$6_0 = true;
                        this.$0_3.$1_0.$4_0 = $v_6
                    }
                    if (!IsNull(this._originalCustomFilterConditionGroup.$5_0)) {
                        var $v_7 = this.cloneFilterCondition(this._originalCustomFilterConditionGroup.$5_0);
                        $v_7.$8_0 = true;
                        $v_7.$6_0 = true;
                        this.$0_3.$1_0.$5_0 = $v_7
                    }
                    this.$0_3.$1_0.$C_0 = this._originalCustomFilterConditionGroup.$C_0
                }
        }
    },
    getId: function(action) {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("_MI");
        $v_0.append(this._thisElement.getAttribute("gridid"));
        $v_0.append(this._entityName);
        $v_0.append(this._attributeName);
        $v_0.append(this._relationshipName);
        $v_0.append(action);
        return $v_0.toString()
    },
    cloneFilterCondition: function($p0) {
        var $v_0 = null;
        if (!IsNull($p0)) {
            $v_0 = new Mscrm.FilterCondition($p0.$N_0, $p0.$3_0, $p0.$9_0, $p0.$6_0, $p0.$7_0);
            $v_0.$I_0 = $p0.$I_0;
            $v_0.$8_0 = $p0.$8_0;
            $v_0.$6_0 = $p0.$6_0;
            $v_0.$J_0 = $p0.$J_0
        }
        return $v_0
    },
    $2M_3: function() {
        this.xmlString = this._thisElement.getAttribute("xml_filter");
        this.menu = new Mscrm.Popup(this.$$d_MenuItemClicked);
        this.menu.set_menuXml(XUI.Xml.LoadXml(this.xmlString));
        var $v_0 = this._thisElement.parentNode.parentNode;
        this.$1p_3 = this._thisElement.getElementsByTagName("SPAN")[0];
        this._newAlink = $v_0.getElementsByTagName("A")[0];
        this._newLilink = $v_0.getElementsByTagName("LI")[0];
        if (!Mscrm.PageManager.isOutlookProxyPage()) {
            $addHandler(this._newAlink, "click", this.$$d_$33_3);
            $addHandler(this._newLilink, "mouseover", this.$$d_$34_3);
            $addHandler(this._newLilink, "mouseout", this.$$d_$35_3)
        }
    },
    SetUIUndirty: function(item) {},
    ProcessOkButtonClick: function(item) {},
    $33_3: function($p0) {
        $p0.stopPropagation();
        $p0.preventDefault();
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "UL");
        this.$2V_3($v_0)
    },
    $2V_3: function($p0) {
        var $v_0 = XUI.Xml.DomUtils.GetFirstChild(this._newAlink);
        $v_0.className = "ms-crm-Menu-FilterImgWrapper-Open";
        var $v_1 = Mscrm.Utilities.getXYPos($v_0, window.LOCID_UI_DIR === "RTL", $get("crmContentPanel")),
            $v_2 = $v_1["y"] + $v_0.offsetHeight,
            $v_3 = $v_1["x"];
        if (window.LOCID_UI_DIR === "RTL") $v_3 = $v_3 + $v_0.offsetWidth;
        this.$3L_3($p0, $v_3, $v_2)
    },
    $3L_3: function($p0, $p1, $p2) {
        if (IsNull(this.menu.get_currentMenu())) {
            this.menu.set_currentMenu(this.$2P_3($p1, $p2));
            this.menu.populateFilterMenu(this.xmlString)
        } else {
            this.menu.get_currentMenu().clearDOM();
            this.menu.populateFilterMenu(this.xmlString)
        }
        this.menu.get_currentMenu().set_propagateStyle(false);
        for (var $v_0 = 0; $v_0 < this.menu.get_currentMenu().get_menuItems().length; $v_0++)
            if (!this.menu.get_currentMenu().get_menuItems()[$v_0].get_itemContents().disabled &&
                this.menu.get_currentMenu().get_menuItems()[$v_0].get_actionCallback()) {
                this.menu.get_currentMenu()
                    .set_focusElementOnShow(this.menu.get_currentMenu().get_menuItems()[$v_0].get_itemContents());
                $v_0 = this.menu.get_currentMenu().get_menuItems().length
            }
        this.menu.get_currentMenu().set_left($p1);
        this.menu.get_currentMenu().set_top($p2);
        this.menu.get_currentMenu().show();
        this.$1a_3 = true
    },
    $2P_3: function($p0, $p1) {
        var $v_0 = Mscrm.Menu.createMenu();
        !IsNull(this._thisElement.attributes.getNamedItem("menu")) &&
            $v_0.set_menuId(this._thisElement.attributes.getNamedItem("menu").value);
        $v_0.set_stylePrefix("VS");
        $v_0.set_propagateStyle(false);
        $v_0.set_left($p0);
        $v_0.set_top($p1);
        $v_0.set_width(284);
        $v_0.set_hideCallback(this.$$d_filterMenuHidden);
        $v_0.set_shiftVertical(false);
        return $v_0
    },
    filterMenuHidden: function(_menu) {
        this.menu.get_currentMenu().clearDOM();
        try {
            this.$1a_3 = false;
            this._newAlink.focus();
            this.$1z_3()
        } catch ($$e_1) {
        }
    },
    $1z_3: function() { XUI.Html.DomUtils.GetFirstChild(this._newAlink).className = "ms-crm-Menu-FilterImgWrapper" },
    $2W_3: function() {
        for (var $v_0 = this._thisElement.getElementsByTagName("IMG"), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
            if ($v_0[$v_1].className.startsWith("ms-crm-Menu-ButtonFilter ")) {
                this.$d_3 = $v_0[$v_1];
                return
            }
    },
    $35_3: function($p0) { !this.$1a_3 && this.$1z_3() },
    $34_3: function($p0) {
        XUI.Html.DomUtils.GetFirstChild(this._newAlink).className = "ms-crm-Menu-FilterImgWrapper-Hover"
    },
    $2H_3: function($p0, $p1, $p2) {
        try {
            var $v_0 = {};
            $v_0["attributeDataType"] = this._attributeType;
            $v_0["entityId"] = Xrm.Internal.getEntityCode($p0).toString();
            $v_0["primaryFilterSelected"] = IsNull($p1) ? "false" : "true";
            $v_0["secondaryFilterSelected"] = IsNull($p2) ? "false" : "true";
            $v_0["userRoleId"] = window.USER_ROLES.toString();
            Mscrm.MetricsReporting.instance().addMetric("gridcustomfilter", $v_0)
        } catch ($v_1) {
        }
    }
};
Mscrm.FilterSet = function(element) {
    this.handleGridReset = this.HandleGridReset;
    this.registerFilterPopup = this.RegisterFilterPopup;
    this.isFilterEnabled = this.IsFilterEnabled;
    this.canEnableFilters = this.CanEnableFilters;
    this.enableFilters = this.EnableFilters;
    this.markFiltersAsDisabled = this.MarkFiltersAsDisabled;
    Mscrm.FilterSet.initializeBase(this, [element]);
    this.$1g_3 = element;
    this.$B_3 = [];
    this.$G_3 = []
};
Mscrm.FilterSet.initializeQueryData = function(crmGrid, layoutXml) {
    var $v_0 = new Mscrm.QueryData;
    $v_0.$m_0 = crmGrid.GetParameter("viewid");
    $v_0.$n_0 = 0;
    $v_0.$H_0 = crmGrid.GetParameter("otn");
    $v_0.$y_0 = layoutXml;
    $v_0.$P_0 = crmGrid.GetParameter("viewTitle");
    if (Mscrm.PageManager.isOutlookProxyPage()) $v_0.$h_0 = crmGrid.GetParameter("conditionalFormatting");
    else $v_0.$h_0 = null;
    $v_0.$1H_0 = parseInt(crmGrid.GetParameter("viewtype"), 10);
    return $v_0
};
Mscrm.FilterSet.prototype = {
    $O_3: false,
    $s_3: null,
    $1C_3: false,
    $B_3: null,
    $G_3: null,
    $A_3: null,
    $1g_3: null,
    $1S_3: null,
    $10_3: null,
    $1I_3: null,
    get_currentGrid: function() { return this.$A_3 },
    get_originalFetch: function() {
        return IsNull(this.$10_3) ? null : XUI.Xml.XMLSerializer.serializeToString(this.$10_3)
    },
    set_originalFetch: function(value) {
        if (!IsNull(value)) this.$10_3 = XUI.Xml.LoadXml(value);
        return value
    },
    get_transientFetch: function() { return XUI.Xml.XMLSerializer.serializeToString(this.$1I_3) },
    set_transientFetch: function(value) {
        if (!IsNull(value)) this.$1I_3 = XUI.Xml.LoadXml(value);
        return value
    },
    get_isFilterOnHiddenCol: function() { return this.$1C_3 },
    set_isFilterOnHiddenCol: function(value) {
        this.$1C_3 = value;
        return value
    },
    initialize: function() { Mscrm.CrmUIControl.prototype.initialize.call(this) },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.DisposeFilterMenu();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $25_3: function() { return $find(this.$1g_3.getAttribute("gridid")) },
    $2d_3: function($p0) {
        for (var $v_0 = XUI.Xml.SelectNodes($p0, "/grid/row/cell[@relatedentityname]", null), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) {
            $v_0[$v_1].attributes.removeNamedItem("relatedentityname");
            $v_0[$v_1].attributes.removeNamedItem("relatedentityattr");
            $v_0[$v_1].attributes.removeNamedItem("primaryentityattr");
            $v_0[$v_1].attributes.removeNamedItem("relationshipid");
            $v_0[$v_1].attributes.removeNamedItem("relationshipname")
        }
        return XUI.Xml.XMLSerializer.serializeToString($p0)
    },
    $2x_3: function() {
        for (var $v_0 = 0; $v_0 < this.$B_3.length; $v_0++) {
            var $v_1 = this.$G_3[$v_0];
            $v_1.onEnable()
        }
    },
    $30_3: function() {
        var $v_0 = this.$A_3.GetParameter("filter");
        if (!IsNull($v_0) && $v_0 !== "") return true;
        return false
    },
    $2E_3: function() {
        if (Mscrm.PageManager.isOutlookProxyPage()) return;
        for (var $v_0 = this.$O_3 ? "block" : "none", $v_1 = 0, $v_2 = 0; $v_2 < this.$B_3.length; $v_2++) {
            var $v_3 = this.$B_3[$v_2], $v_4 = $v_3.parentNode.parentNode, $v_5 = $v_4.parentNode.parentNode.parentNode;
            $v_5.style.display = $v_0;
            if (this.$O_3) {
                $v_1 = $v_5.clientWidth ? $v_5.clientWidth : 20;
                $v_5.parentNode.style.width = $v_1 + 3 + "px"
            } else $v_5.parentNode.style.width = "0px"
        }
    },
    $3H_3: function() {
        var $v_0 = Mscrm.GridFilterUtil.parseFetchForAttributes(this.$B_3, this.$10_3), $v_1, $v_2;
        this.$s_3 = "";
        for (var $v_3 = 0; $v_3 < this.$B_3.length; $v_3++) {
            $v_2 = this.$G_3[$v_3];
            $v_1 = this.$B_3[$v_3];
            this.SetMenuFilterConditions($v_2, $v_1, $v_0)
        }
    },
    SetMenuFilterConditions: function(popupMenu, element, menuFilterCollections) {
        var $v_0, $v_1;
        if (IsNull(menuFilterCollections)) {
            var $v_3 = [];
            Array.add($v_3, element);
            menuFilterCollections = Mscrm.GridFilterUtil.parseFetchForAttributes($v_3, this.$10_3)
        }
        $v_0 = element.getAttribute("isfromrelatedentity").toLowerCase() === "true" ? true : false;
        if ($v_0) $v_1 = element.getAttribute("columnname");
        else $v_1 = element.getAttribute("attributename");
        var $v_2 = menuFilterCollections[$v_1];
        if ($v_2.$R_0) {
            var $v_4 = XUI.Xml.LoadXml(element.getAttribute("attributexml")),
                $v_5 = XUI.Xml.SelectSingleNode($v_4, "/attributeinfo/result", null),
                $v_6 = XUI.Xml.GetText($v_5);
            if (isNullOrEmptyString(this.$s_3)) this.$s_3 = $v_6;
            else this.$s_3 = String.format(window.LOCID_GF_COMPLEXFILTERNAMES, this.$s_3, $v_6)
        }
        popupMenu.set_appliedFilters($v_2)
    },
    $2z_3: function() {
        for (var $v_0 = false, $v_1 = this.$B_3.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = this.$G_3[$v_2];
            if ($v_3._isFilterPopUpDirty) {
                $v_0 = true;
                break
            }
        }
        return $v_0
    },
    getRelatedEntityDetails: function(entityName, attributeName) {
        for (var $v_0 = null, $v_1 = null, $v_2 = 0; $v_2 < this.$B_3.length; $v_2++) {
            $v_0 = this.$G_3[$v_2];
            $v_1 = $v_0.$0_3;
            if (!IsNull($v_1
                    .$k_0) &&
                $v_1.$k_0 &&
                $v_1.$H_0 === entityName &&
                $v_1.$F_0 === attributeName) return $v_1.$e_0
        }
        return null
    },
    addFilterConditions: function(filters, refreshGrid) {
        if (IsNull(refreshGrid)) refreshGrid = true;
        var $v_0 = Mscrm.GridFilterUtil.mergeFetchXml(this.$1I_3, filters);
        this.set_transientFetch(XUI.Xml.XMLSerializer.serializeToString($v_0.$1J_0));
        if (refreshGrid) {
            !Mscrm.PageManager.isOutlookProxyPage() && this.$A_3.ShowLoadingMessage();
            this.RefreshWithFilters()
        }
        return $v_0.$1B_0
    },
    addVisualizationFilter: function(entityName,
        attributeName,
        value,
        lookupParameter,
        formattedXValue,
        attributeIsDateTime,
        startDate,
        endDate,
        refreshGrid,
        isRelatedEntityColumn,
        relatedEntityDetails) {
        var $v_0 = false, $v_1 = this.findPopup(entityName, attributeName, isRelatedEntityColumn, relatedEntityDetails);
        if (!IsNull($v_1))
            try {
                if (attributeIsDateTime)
                    $v_1
                        .setDrillDownCondition(value,
                            lookupParameter,
                            formattedXValue,
                            startDate,
                            endDate,
                            refreshGrid);
                else $v_1.setDrillDownCondition(value, lookupParameter, formattedXValue, null, null, refreshGrid)
            } catch ($$e_D) {
                $v_0 = true
            }
        return $v_0
    },
    removeVisualizationFilter: function(entityName, attributeName, isRelatedEntityColumn, relatedEntityDetail) {
        var $v_0 = this.findPopup(entityName, attributeName, isRelatedEntityColumn, relatedEntityDetail), $v_1 = false;
        if (!IsNull($v_0))
            try {
                $v_0.rollBackDrillDownCondition()
            } catch ($$e_6) {
                $v_1 = true
            }
        return $v_1
    },
    findPopup: function(entityName, attributeName, isRelatedEntityColumn, relatedEntityDetails) {
        if (IsNull(isRelatedEntityColumn)) {
            isRelatedEntityColumn = false;
            relatedEntityDetails = ""
        }
        for (var $v_0 = 0; $v_0 < this.$B_3.length; $v_0++) {
            var $v_1 = this.$G_3[$v_0], $v_2 = $v_1.$0_3;
            if (isRelatedEntityColumn) {
                if (!IsNull($v_2) &&
                    $v_2.$H_0 === entityName &&
                    $v_2.$F_0 === attributeName &&
                    $v_2.$k_0 &&
                    relatedEntityDetails === $v_2.$e_0) return $v_1
            } else if (!IsNull($v_2) && $v_2.$H_0 === entityName && $v_2.$F_0 === attributeName) return $v_1
        }
        return null
    },
    ApplyFilters: function(refreshGrid) {
        if (IsNull(refreshGrid)) refreshGrid = true;
        for (var $v_0 = null, $v_1 = 0; $v_1 < this.$B_3.length; $v_1++) {
            $v_0 = this.$G_3[$v_1];
            if ($v_0.$0_3.get_isDirty()) break;
            if ($v_1 === this.$B_3.length - 1) return
        }
        if ($v_0) {
            this.addFilterConditions($v_0.$0_3, refreshGrid);
            !refreshGrid && $v_0.$0_3.clearDirtyFlag();
            var $$t_3 = this;
            window.setTimeout(function() {
                    refreshGrid && $v_0.$0_3.clearDirtyFlag();
                    $v_0.onFilterApplied()
                },
                0)
        }
    },
    CanEnableFilters: function() {
        this.$A_3 = this.$25_3();
        if (!IsNull(this.$A_3)) {
            var $v_0 = this.$A_3.GetParameter("quickfind"), $v_1 = this.$A_3.GetParameter("fetchXmlForFilters");
            if (isNullOrEmptyString($v_0) && !isNullOrEmptyString($v_1)) return true
        }
        return false
    },
    clearPopups: function() {
        if (!IsNull(this.$B_3) && !IsNull(this.$G_3)) {
            if (this.$O_3)
                for (var $v_0 = 0; $v_0 < this.$B_3.length; $v_0++) {
                    var $v_1 = this.$G_3[$v_0];
                    !IsNull($v_1) && $v_1.dispose()
                }
            Array.clear(this.$B_3);
            Array.clear(this.$G_3)
        }
    },
    DisableFilters: function() {
        if (this.$O_3) {
            var $v_0 = this.isFilterSetDirty();
            $v_0 && this.$A_3.ShowLoadingMessage();
            this.$O_3 = false;
            this.$2E_3();
            for (var $v_1 = 0; $v_1 < this.$B_3.length; $v_1++) {
                var $v_2 = this.$G_3[$v_1];
                $v_2.onDisable()
            }
            if ($v_0) {
                this.set_transientFetch(this.get_originalFetch());
                this.RefreshWithFilters()
            }
            this.$1C_3 = false;
            refreshRibbon();
            !IsNull(Mscrm.PageManager.get_instance()) && Mscrm.PageManager.get_instance().raiseEvent(92, null);
            this.$29_3(false)
        }
    },
    EnableFilters: function() {
        var $v_0 = true;
        if (this.CanEnableFilters()) {
            this.$A_3 = this.$25_3();
            this.set_originalFetch(this.$A_3.GetParameter("fetchXmlForFilters"));
            if (!IsNull(this.get_originalFetch())) {
                this.$O_3 = true;
                this.$2E_3();
                this.$3H_3();
                this.set_transientFetch(this.get_originalFetch());
                this.$2x_3();
                refreshRibbon();
                !IsNull(Mscrm.PageManager.get_instance()) && Mscrm.PageManager.get_instance().raiseEvent(92, null)
            }
        } else $v_0 = false;
        this.$29_3($v_0);
        return $v_0
    },
    handleRefreshForIpad: function(isFiltersEnabled) {
        var $v_0 = $get("refreshButton");
        if (isFiltersEnabled) $v_0.style.display = "none";
        else $v_0.style.display = "inline"
    },
    HandleGridReset: function() {
        this.clearPopups();
        refreshRibbon()
    },
    IsFilterEnabled: function() { return this.$O_3 },
    isFilterSetDirty: function() { return this.IsFilterEnabled() && (this.$2z_3() || this.$1C_3) },
    MarkFiltersAsDisabled: function() {
        this.$O_3 = false;
        refreshRibbon()
    },
    RefreshWithFilters: function() {
        var $$t_1 = this;
        window.setTimeout(function() {
                $$t_1.$A_3.SetParameter("fetchXml", $$t_1.get_transientFetch());
                if (!Mscrm.PageManager.isOutlookProxyPage()) {
                    var $v_0 = $$t_1.$A_3;
                    $v_0.ResetPageNumber();
                    $v_0.set_gridRefreshSourceElement("filter");
                    $v_0.Refresh()
                }
                refreshRibbon()
            },
            0)
    },
    RegisterFilterPopup: function(id, type, source) {
        var $v_0 = $get(id);
        if (!Array.contains(this.$B_3, $v_0)) {
            var $v_1 = null;
            if (source !== "initialize")
                switch (type) {
                case "string":
                    $v_1 = new Mscrm.StringFilterPopup($v_0);
                    break;
                case "number":
                    $v_1 = new Mscrm.NumberFilterPopup($v_0);
                    break;
                case "datetime":
                case "dateonly":
                    $v_1 = new Mscrm.DateTimeFilterPopup($v_0);
                    break;
                default:
                    break
                }
            else $v_1 = $find(id);
            if (!IsNull($v_1)) {
                Array.add(this.$B_3, $v_0);
                Array.add(this.$G_3, $v_1)
            }
        }
    },
    Save: function(saveAs) {
        if (this.$O_3) {
            var $v_0 = false, $v_1 = this.$30_3();
            if ($v_1) $v_0 = confirm(window.LOCID_GF_JUMPBARMESSAGE);
            if ($v_1 && !$v_0) return;
            this.$1S_3 = Mscrm.FilterSet
                .initializeQueryData(this.$A_3, this.$2d_3(XUI.Xml.LoadXml(this.$A_3.GetParameter("layoutXml"))));
            var $v_2 = $find("crmGrid_JumpBar");
            !IsNull($v_2) && $v_2.Reset();
            this.$A_3.SetParameter("filter", "");
            this.$A_3.SetParameter("filterDisplay", "");
            var $v_3;
            if (Mscrm.PageManager.isOutlookProxyPage())
                $v_3 = XUI.Xml.LoadXml(this.$A_3.GetParameter("updatedFetchXmlForFilters"));
            else $v_3 = this.$1I_3;
            Mscrm.GridFilterUtil.saveQuery(saveAs, this.$1S_3, $v_3);
            !saveAs &&
                Mscrm.PageManager.isOutlookProxyPage() &&
                getOutlookHostedWindow().invalidateCacheForView(this.$1S_3.$m_0);
            if (!saveAs && !Mscrm.PageManager.isOutlookProxyPage()) {
                this.$A_3.Reset();
                alert(window.LOCID_GF_FILTERSAVED)
            }
        }
    },
    sortColumns: function(element, order, append) { this.$A_3.SortColumn(element, order, append) },
    ToggleFilters: function(showWarning) {
        if (IsNull(showWarning)) showWarning = false;
        if (this.$O_3) this.DisableFilters();
        else !this.EnableFilters() && showWarning && alert(window.LOCID_GF_NOFILTERSUPPORT)
    },
    $29_3: function($p0) {
        var $v_0 = $get("filterButton", this.$A_3.get_element()),
            $v_1 = $get("filterButtonImage", this.$A_3.get_element());
        if (!IsNull($v_0)) {
            $v_0.className = $v_0.className.replace("-Hover", "");
            $v_0.className = $p0 ? "ms-crm-List-FilterButton-Selected" : "ms-crm-List-FilterButton"
        }
        if (!IsNull($v_1) && !$p0)
            if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) $v_1.src = "/_imgs/grid/grid_filter.png";
            else $v_1.className = "ms-crm-ImageStrip-grid_filter"
    },
    DisposeFilterMenu: function() {
        if (!IsNull(this.$B_3) && !IsNull(this.$G_3))
            for (var $v_0 = 0; $v_0 < this.$B_3.length; $v_0++) {
                var $v_1 = this.$G_3[$v_0];
                !IsNull($v_1.menu.get_currentMenu()) && $v_1.menu.get_currentMenu().dispose()
            }
    },
    clearAllFiltersBackup: function() {
        for (var $v_0 = this.$B_3.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$G_3[$v_1];
            $v_2.clearBackup()
        }
    }
};
Mscrm.GridFilterCustomControl = function(element) { Mscrm.GridFilterCustomControl.initializeBase(this, [element]) };
Mscrm.GridFilterCustomControl.$2g = function($p0) {
    var $v_0 = new Sys.StringBuilder, $v_1 = $p0.split(":"), $v_2 = $v_1.length;
    if ($v_2 >= 2) {
        $v_0.append($v_1[1]);
        if ($v_2 >= 4)
            for (var $v_3 = 3; $v_3 < $v_2; $v_3 = $v_3 + 2) {
                $v_0.append(":");
                $v_0.append($v_1[$v_3])
            }
    }
    return $v_0.toString()
};
Mscrm.GridFilterCustomControl.prototype = {
    $F_3: null,
    $Y_3: null,
    $1Q_3: null,
    $18_3: null,
    $12_3: null,
    $1D_3: 1,
    $l_3: null,
    $11_3: null,
    $1R_3: null,
    $o_3: null,
    $13_3: null,
    $1T_3: null,
    $b_3: null,
    $1G_3: null,
    $4_3: null,
    $5_3: null,
    $1b_3: "",
    $1c_3: "",
    displayName: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$b_3 = getDialogArguments();
        this.$F_3 = this.$b_3.attributeName;
        this.$Y_3 = this.$b_3.metadataType;
        this.$1Q_3 = "";
        this.$4_3 = this.$b_3.primaryCondition;
        this.$5_3 = this.$b_3.secondaryCondition;
        var $v_0 = this.$b_3.booleanOperator;
        if (!IsNull($v_0)) this.$1D_3 = $v_0;
        this.$18_3 = XUI.Xml.LoadXml(this.$b_3.attributeXml);
        this.$12_3 = XUI.Xml.SelectSingleNode(this.$18_3, "/attributeinfo/result", null);
        this.$1G_3 = this.$12_3.attributes;
        var $v_1 = this.$1G_3.getNamedItem("nameattr");
        if (!IsNull($v_1)) this.$1Q_3 = $v_1.nodeValue;
        this.$l_3 = $get("primaryOperator");
        this.$o_3 = $get("secondaryOperator");
        this.$1R_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$l_3);
        this.$1T_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$o_3);
        this.$11_3 = $get("primaryValue");
        this.$13_3 = $get("secondaryValue");
        this.$38_3();
        this.$1M_3(this.$11_3, this.$l_3);
        this.$1M_3(this.$13_3, this.$o_3);
        if (this.$1D_3 === 1) {
            $get("And").checked = true;
            $get("Or").checked = false
        } else {
            $get("Or").checked = true;
            $get("And").checked = false
        }
        this.$2F_3(this.$11_3, this.$l_3, this.$4_3);
        this.$2F_3(this.$13_3, this.$o_3, this.$5_3);
        var $v_2 = XUI.Xml.SelectSingleNode(this.$18_3, "/attributeinfo/result", null);
        this.displayName = XUI.Xml.GetText($v_2);
        $get("dialogHeaderTitle").innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_GF_CUSTOMFILTERTITLE);
        $get("dialogHeaderDesc").innerHTML = CrmEncodeDecode
            .CrmHtmlEncode(String.format(window.LOCID_GF_CUSTOMFILTERDESC, this.displayName))
    },
    $38_3: function() {
        var $v_0 = null,
            $v_1 = !isNullOrEmptyString(this.$1Q_3),
            $v_2 = isAtributeLookupContainsUser(this.$1G_3),
            $v_3 = getOperatorsForDataType(this.$Y_3, $v_1, $v_2);
        $v_0 = $v_3.split(";");
        this.$1R_3.AddOption(getLabelForOperator("nop"), "nop");
        this.$1T_3.AddOption(getLabelForOperator("nop"), "nop");
        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            var $v_5 = $v_0[$v_4];
            this.$1R_3.AddOption(getLabelForOperator($v_5), $v_5);
            this.$1T_3.AddOption(getLabelForOperator($v_5), $v_5)
        }
    },
    GetCustomConditionGroup: function() {
        var $v_0 = {}, $v_1 = this.$l_3.value, $v_2 = this.$o_3.value;
        if ($v_1 === "nop") $v_1 = null;
        if ($v_2 === "nop") $v_2 = null;
        var $v_3 = this.$28_3(this.$11_3), $v_4 = this.$28_3(this.$13_3), $v_5 = getAbstractDataType(this.$Y_3);
        if ($v_5 === "owner" || $v_5 === "lookup" || $v_5 === "picklist") {
            if (!IsNull($v_3))
                if ($v_1 === "eq") $v_1 = "in";
                else if ($v_1 === "ne") $v_1 = "not-in";
            if (!IsNull($v_4))
                if ($v_2 === "eq") $v_2 = "in";
                else if ($v_2 === "ne") $v_2 = "not-in"
        }
        if (!IsNull($v_1) && $v_1 !== "") $v_0["primary"] = this.$1x_3($v_1, $v_3);
        if (!IsNull($v_2) && $v_2 !== "") $v_0["secondary"] = this.$1x_3($v_2, $v_4);
        $v_0["booleanOperator"] = this.$1D_3;
        return $v_0
    },
    SetOperatorValue: function(value) { this.$1D_3 = value },
    PrimaryChanged: function() { this.$1M_3(this.$11_3, this.$l_3) },
    SecondaryChanged: function() { this.$1M_3(this.$13_3, this.$o_3) },
    $28_3: function($p0) {
        var $v_0 = this.$26_3($p0);
        if (IsNull($v_0)) return null;
        var $v_1 = this.$24_3($v_0), $v_2 = false;
        if (getAbstractDataType(this.$Y_3) === "picklist") $v_2 = true;
        if (IsNull($v_1)) return null;
        var $v_3 = null, $v_4 = !IsNull($v_1) ? $v_1.get_dataValue() : "";
        if (!IsNull($v_4) && $v_4 === "") return null;
        else {
            if ($p0.style.display === "none") $v_3 = null;
            else $v_3 = $v_2 ? $v_1.get_dataXml() : $v_1.get_dataValue();
            if (!IsNull($v_3)) {
                var $v_5 = XUI.Xml.LoadXml($v_3), $v_6 = XUI.Xml.SelectNodes($v_5, "/values/value", null);
                if ($v_6.length < 2) $v_3 = $v_4
            }
        }
        return $v_3
    },
    $24_3: function($p0) {
        if (Sys.UI.DomElement.containsCssClass($p0, "multipicklist") ||
            Sys.UI.DomElement.containsCssClass($p0, "ms-crm-FiscalPeriodAndYear")) return $find($p0.id);
        else if (Sys.UI.DomElement
            .containsCssClass($p0, "ms-crm-Lookup"))
            return Mscrm.FormControlInputBehavior.GetBehavior(XUI.Html.DomUtils.GetFirstChild($p0.rows[0].cells[1]).id);
        else return Mscrm.FormControlInputBehavior.GetElementBehavior($p0)
    },
    $1x_3: function($p0, $p1) {
        var $v_0 = this.$2j_3($p0, $p1);
        $p0 = this.$2k_3($p0);
        var $v_1 = isValueBoundOperator($p0) ? 2 : 1;
        if ($p0.startsWith(":")) {
            var $v_3 = $p0.split(":");
            $p0 = $v_3[1];
            if (!isNullOrEmptyString($v_0)) $v_0 = $v_3[2].replace("{0}", $v_0)
        }
        var $v_2 = {};
        $v_2["OperatorType"] = $v_1;
        $v_2["Operator"] = $p0;
        $v_2["Operand"] = $v_0;
        $v_2["isFromFetch"] = false;
        $v_2["xpath"] = null;
        $v_2["filterGroup"] = null;
        $v_2["IsDirty"] = true;
        return $v_2
    },
    $1M_3: function($p0, $p1) {
        var $v_0 = $p1.value;
        if (isValueBoundOperator($v_0)) this.$39_3($p0, $v_0);
        else this.$3K_3($p0, "readonly")
    },
    $39_3: function($p0, $p1) {
        switch (getAbstractDataType(this.$Y_3)) {
        case "string":
        case "memo":
            this.$3K_3($p0, "string");
            var $v_0 = this.$r_3("maxlength");
            if (!isNullOrEmptyString($v_0))
                XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0)).maxLength = $v_0;
            break;
        case "number":
            this.$3K_3($p0, "number");
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0)),
                $v_2 = Mscrm.FormControlInputBehavior.GetBehavior($v_1.id),
                $v_3 = this.$r_3("datatype");
            if (!isNullOrEmptyString($v_3))
                if ($v_3 === "integer") $v_2.set_dataType("int");
                else $v_2.set_dataType($v_3);
            var $v_4 = this.$r_3("acc");
            !isNullOrEmptyString($v_4) && $v_2.set_precision(parseInt($v_4, 10));
            var $v_5 = this.$r_3("min");
            !isNullOrEmptyString($v_5) && $v_2.set_min(parseInt($v_5, 10));
            var $v_6 = this.$r_3("max");
            !isNullOrEmptyString($v_6) && $v_2.set_max(parseInt($v_6, 10));
            break;
        case "date":
        case "dateonly":
            var $v_7 = {}, $v_8 = {}, $v_9 = "", $v_A = "", $v_B;
            switch ($p1) {
            case "last-x-hours":
            case "next-x-hours":
            case "olderthan-x-hours":
                $v_7["hours"] = 1;
                $v_8["hours"] = 2e3;
                $v_9 = "hours";
                break;
            case "last-x-days":
            case "next-x-days":
            case "olderthan-x-days":
                $v_7["days"] = 1;
                $v_8["days"] = 500;
                $v_9 = "days";
                break;
            case "last-x-weeks":
            case "next-x-weeks":
            case "olderthan-x-weeks":
                $v_7["weeks"] = 1;
                $v_8["weeks"] = 100;
                $v_9 = "weeks";
                break;
            case "last-x-months":
            case "next-x-months":
            case "olderthan-x-months":
                $v_7["months"] = 1;
                $v_8["months"] = 100;
                $v_9 = "months";
                break;
            case "olderthan-x-minutes":
                $v_7["minutes"] = 1;
                $v_8["minutes"] = 1440;
                $v_9 = "minutes";
                break;
            case "last-x-years":
            case "next-x-years":
            case "olderthan-x-years":
                $v_7["years"] = 1;
                $v_8["years"] = 100;
                $v_9 = "years";
                break;
            case "last-x-fiscal-periods":
            case "next-x-fiscal-periods":
                $v_7["fiscalperiods"] = 1;
                $v_8["fiscalperiods"] = 100;
                $v_9 = "fiscalperiods";
                break;
            case "last-x-fiscal-years":
            case "next-x-fiscal-years":
                $v_7["fiscalyears"] = 1;
                $v_8["fiscalyears"] = 100;
                $v_9 = "fiscalyears";
                break;
            case "in-fiscal-year":
                this.$3K_3($p0, "fiscalperiodandyear");
                $v_A = XUI.Html.DomUtils.GetFirstChild($p0).id;
                $v_B = $find($v_A);
                $v_B.set_showPeriod(false);
                $v_B.set_showYear(true);
                break;
            case "in-fiscal-period":
                this.$3K_3($p0, "fiscalperiodandyear");
                $v_A = XUI.Html.DomUtils.GetFirstChild($p0).id;
                $v_B = $find($v_A);
                $v_B.set_showPeriod(true);
                $v_B.set_showYear(false);
                break;
            case "in-fiscal-period-and-year":
            case "in-or-before-fiscal-period-and-year":
            case "in-or-after-fiscal-period-and-year":
                this.$3K_3($p0, "fiscalperiodandyear");
                $v_A = XUI.Html.DomUtils.GetFirstChild($p0).id;
                $v_B = $find($v_A);
                $v_B.set_showPeriod(true);
                $v_B.set_showYear(true);
                break;
            case "eq":
            case "ne":
            case "gt":
            case "ge":
            case "lt":
            case "le":
                this.$3K_3($p0, "datetime");
                break;
            default:
                this.$3K_3($p0, "date");
                break
            }
            if ($v_9 !== "") {
                this.$3K_3($p0, "number");
                var $v_C = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0)),
                    $v_D = Mscrm.FormControlInputBehavior.GetBehavior($v_C.id);
                $v_D.set_min(parseInt($v_7[$v_9], 10));
                $v_D.set_max(parseInt($v_8[$v_9], 10));
                $v_D.set_precision(0)
            }
            break;
        case "picklist":
            if (isNameOperator($p1)) {
                this.$3K_3($p0, "string");
                var $v_E = this.$r_3("namemaxlength");
                if (!isNullOrEmptyString($v_E)) XUI.Html.DomUtils.GetFirstChild($p0).maxLength = $v_E
            } else {
                this.$3K_3($p0, "picklist");
                var $v_F = XUI.Html.DomUtils.GetFirstChild($p0);
                $find($v_F.id).LoadOptionsXml(this.$b_3.optionsXml)
            }
            break;
        case "lookup":
        case "owner":
            if (isNameOperator($p1)) {
                this.$3K_3($p0, "string");
                var $v_G = this.$r_3("namemaxlength");
                if (!isNullOrEmptyString($v_G)) XUI.Html.DomUtils.GetFirstChild($p0).maxLength = $v_G
            } else {
                var $v_H = this.$12_3.attributes.getNamedItem("lookuptypes").nodeValue,
                    $v_I = "multi",
                    $v_J = this.$12_3.attributes.getNamedItem("lookuptypenames").nodeValue,
                    $v_K = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(this.$18_3, "/attributeinfo/lookupicons", null)),
                    $v_L = {};
                $v_L["lookupStyle"] = $v_I;
                $v_L["lookupTypes"] = $v_H;
                $v_L["lookupTypeIcons"] = Mscrm.GridFilterCustomControl.$2g($v_K);
                $v_L["lookupTypeNames"] = $v_J;
                this.$3K_3($p0, "lookup", $v_L)
            }
            break
        }
    },
    $r_3: function($p0) {
        var $v_0 = this.$1G_3.getNamedItem($p0);
        if (!IsNull($v_0)) return $v_0.nodeValue;
        else return null
    },
    $26_3: function($p0) {
        var $v_0 = $p0.getAttribute("innerControlId");
        return isNullOrEmptyString($v_0) ? XUI.Html.DomUtils.GetFirstChild($p0) : $get($v_0)
    },
    $3K_3: function($p0, $p1, $p2) {
        var $v_0 = $p0.id === "primaryValue", $v_1 = $v_0 ? this.$1b_3 : this.$1c_3;
        if ($v_1 === $p1) return;
        $p0.removeAttribute("innerControlId");
        var $v_2 = XUI.Html.DomUtils.GetFirstChild($p0);
        if (!IsNull($v_2) && !isNullOrEmptyString($v_2.id)) {
            var $v_9 = Mscrm.FormControlInputBehavior.GetBehavior($v_2.id);
            !IsNull($v_9) && $v_9.dispose()
        }
        switch ($p1) {
        case "string":
            $p0.innerHTML = $get("txt").innerHTML;
            var $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0));
            $v_3.id = $p0.id + "_txt";
            $p0.setAttribute("innerControlId", $v_3.id);
            $create(Mscrm.FormInputControl.TextBoxInputBehavior, null, null, null, $v_3);
            this.$g_3($v_0, $p1);
            break;
        case "number":
            $p0.innerHTML = $get("num").innerHTML;
            var $v_4 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0));
            $v_4.id = $p0.id + "_num";
            $p0.setAttribute("innerControlId", $v_4.id);
            $create(Mscrm.FormInputControl.NumberInputBehavior, null, null, null, $v_4);
            this.$g_3($v_0, $p1);
            break;
        case "date":
            if ($v_1 !== $p1) {
                $p0.innerHTML = $get("date").innerHTML;
                Mscrm.FormInputControl.DateTimeBehaviorBase.registerDateTimeComponents($p0);
                this.$g_3($v_0, $p1)
            }
            break;
        case "datetime":
            if ($v_1 !== $p1) {
                $p0.innerHTML = $get("datetime").innerHTML;
                Mscrm.FormInputControl.DateTimeBehaviorBase.registerDateTimeComponents($p0);
                this.$g_3($v_0, $p1)
            }
            break;
        case "picklist":
            $p0.innerHTML = $get("picklist").innerHTML;
            var $v_5 = XUI.Xml.DomUtils.GetFirstChild($p0);
            $v_5.id = $p0.id + "_picklist";
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_controls/multipicklist/multipicklist.js"),
                true);
            $create(Mscrm.MultiPicklist, null, null, null, $v_5);
            this.$g_3($v_0, $p1);
            break;
        case "fiscalperiodandyear":
            $p0.innerHTML = $get("fiscalperiodandyear").innerHTML;
            var $v_6 = XUI.Xml.DomUtils.GetFirstChild($p0);
            $v_6.id = $p0.id + "_fiscalperiodandyear";
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/AdvancedFind/AdvFind.js"), true);
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/AdvancedFind/AdvancedFindControl.js"), true);
            $create(Mscrm.FiscalPeriodAndYear, null, null, null, $v_6);
            this.$g_3($v_0, $p1);
            break;
        case "lookup":
            $p0.innerHTML = $get("lookup").innerHTML;
            var $v_7 = XUI.Html.DomUtils.GetFirstChild($p0);
            $v_7.id = $p0.id + "_lookupTable";
            var $v_8 = XUI.Html.DomUtils.GetFirstChild($v_7.rows[0].cells[1]);
            $v_8.id = $v_7.id + "_img";
            Mscrm.CrmUIComponent.crmCreate(Mscrm.FormInputControl.PresenceLookupUIBehavior, $p2, null, null, $v_8);
            this.$g_3($v_0, $p1);
            break;
        case "readonly":
            $p0.innerHTML = $get("rotxt").innerHTML;
            this.$g_3($v_0, $p1);
            break
        }
    },
    $g_3: function($p0, $p1) {
        if ($p0) this.$1b_3 = $p1;
        else this.$1c_3 = $p1
    },
    $2j_3: function($p0, $p1) {
        if (IsNull($p1)) return null;
        var $v_0 = $p1;
        if (isNameOperator($p0)) return ConvertUserTypeToLike($v_0);
        switch (getAbstractDataType(this.$Y_3)) {
        case "date":
        case "dateonly":
            if (isValueBoundOperator($p0))
                if (isDynamicDateOperator($p0) || $p0 === "in-fiscal-year" || $p0 === "in-fiscal-period") $v_0 = $p1;
                else if ($p0 === "in-fiscal-period-and-year" ||
                    $p0 === "in-or-before-fiscal-period-and-year" ||
                    $p0 === "in-or-after-fiscal-period-and-year") {
                    var $v_1 = $p1, $v_2 = $v_1.substr(5, 2), $v_3 = $v_1.substr(0, 4), $v_4 = new Sys.StringBuilder;
                    $v_4.append("<values><value>");
                    $v_4.append(CrmEncodeDecode.CrmXmlEncode($v_2));
                    $v_4.append("</value><value>");
                    $v_4.append(CrmEncodeDecode.CrmXmlEncode($v_3));
                    $v_4.append("</value></values>");
                    $v_0 = $v_4.toString()
                } else if (!IsNull($p1)) {
                    $v_0 = FormatUtcDate($p1);
                    $v_0 = $v_0.substring(0, $v_0.length - 9)
                }
            break;
        case "picklist":
            if (($p0 === "in" || $p0 === "not-in") &&
                !IsNull($p1) &&
                isValueBoundOperator($p0) &&
                !$p1.startsWith("<values>")) {
                var $v_5 = new Sys.StringBuilder;
                $v_5.append("<values><value>");
                $v_5.append(CrmEncodeDecode.CrmXmlEncode($p1));
                $v_5.append("</value></values>");
                $v_0 = $v_5.toString()
            }
            break;
        case "lookup":
        case "owner":
            if (isValueBoundOperator($p0)) {
                var $v_6 = $p1, $v_7 = new Sys.StringBuilder;
                $v_7.append("<values>");
                for (var $v_8 = this.$12_3.attributes.getNamedItem("lookuptypenames").nodeValue,
                    $v_9 = $v_8.split(","),
                    $v_A = 0;
                    $v_A < $v_6.length;
                    $v_A++) {
                    for (var $v_B = $v_6[$v_A], $v_C = null, $v_D = 0; $v_D < $v_9.length; $v_D++)
                        if ($v_9[$v_D].indexOf(":" + $v_B.type + ":") > 0) {
                            $v_C = $v_9[$v_D].split(":")[0];
                            break
                        }
                    $v_7.append('<value uiname ="');
                    $v_7.append(CrmEncodeDecode.CrmXmlAttributeEncode($v_B.name));
                    $v_7.append('" uitype="');
                    $v_7.append(CrmEncodeDecode.CrmXmlAttributeEncode($v_C));
                    $v_7.append('">');
                    $v_7.append(CrmEncodeDecode.CrmXmlEncode($v_B.id));
                    $v_7.append("</value>")
                }
                $v_7.append("</values>");
                $v_0 = $v_6.length > 0 ? $v_7.toString() : ""
            }
            break;
        case "number":
            $v_0 = parseFloat($p1).toString();
            break;
        default:
            $v_0 = $p1;
            break
        }
        return $v_0
    },
    $2k_3: function($p0) {
        $p0 = getOptionValue($p0);
        if ($p0 === "anytime") return "not-null";
        else return $p0
    },
    $2F_3: function($p0, $p1, $p2) {
        if (!IsNull($p2)) {
            for (var $v_0 = constructOperatorValues($p2.$3_0, $p2.$9_0),
                $v_1 = $v_0[0],
                $v_2 = $v_0[1],
                $v_3,
                $v_4 = $p1.options.length,
                $v_5 = false,
                $v_8 = 0;
                $v_8 < $v_4;
                $v_8++) {
                $v_3 = $p1.options[$v_8];
                var $v_9 = $v_3.value;
                if ($v_1 === $v_9) {
                    $p1.selectedIndex = $v_8;
                    $v_5 = true;
                    break
                }
            }
            if (!$v_5) $p1.selectedIndex = 1;
            this.$1M_3($p0, $p1);
            var $v_6 = $p1.value, $v_7 = this.$26_3($p0);
            if (isValueBoundOperator($v_6))
                if (isNameOperator($v_1)) $v_7.value = $v_2;
                else {
                    var $v_A = getAbstractDataType(this.$Y_3);
                    switch ($v_A) {
                    case "string":
                    case "memo":
                        var $v_B = Mscrm.FormControlInputBehavior.GetBehavior($v_7.id);
                        $v_B.set_dataValue($v_2);
                        break;
                    default:
                        var $v_C = this.$24_3($v_7);
                        if (IsNull($v_2))
                            if (IsNull($v_C)) $v_7.DataValue = null;
                            else $v_C.set_dataValue(null);
                        else {
                            var $v_D = constructValues(getAbstractDataType(this.$Y_3), $p2.$3_0, $v_2);
                            if (IsNull($v_C)) $v_7.DataValue = $v_D;
                            else $v_C.set_dataValue($v_D)
                        }
                        break
                    }
                }
        }
    }
};
Mscrm.LookupFilterPopup = function(element) {
    this.$1h_5 = {};
    this.$1U_5 = {};
    Mscrm.LookupFilterPopup.initializeBase(this, [element]);
    this._type = "lookup"
};
Mscrm.LookupFilterPopup.prototype = {
    $D_5: null,
    $K_5: null,
    $1O_5: null,
    $1P_5: null,
    $1Y_5: 0,
    $1W_5: null,
    initialize: function() {
        Mscrm.FilterPopup.prototype.initialize.call(this);
        this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml());
        var $v_0 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(),
                "//MenuItem[@id='" + this.getId("Choose") + "']",
                null),
            $v_1 = XUI.Xml.GetText($v_0.attributes.getNamedItem("display")),
            $v_2 = XUI.Xml.GetText(this._resultNode);
        $v_1 = String.format($v_1, $v_2);
        $v_0 = this.setAttributeUtil($v_0, "display", $v_1);
        this.$1O_5 = CrmEncodeDecode.CrmHtmlDecode(XUI.Xml
            .GetText(XUI.Xml.SelectSingleNode(this._attributeXmlDocument, "/attributeinfo/lookupicons", null)));
        this.$1P_5 = this._resultNode.attributes.getNamedItem("lookuptypenames").nodeValue;
        for (var $v_3 = this.$1P_5.split(","), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            var $v_5 = $v_3[$v_4].split(":");
            this.$1h_5[$v_5[0]] = $v_5[1];
            this.$1U_5[$v_5[1]] = $v_5[0]
        }
        !Mscrm.PageManager.isOutlookProxyPage() && this.$2w_5()
    },
    onDisable: function() {
        Mscrm.FilterPopup.prototype.onDisable.call(this);
        this.$K_5 = null;
        this.$D_5 = null
    },
    FilterChanged: function(item) {
        if (!IsNull(item)) {
            var $v_0 = item.get_menuItemId(),
                $v_1 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='" + $v_0 + "']", null);
            $v_0 = XUI.Xml.GetText($v_1.attributes.getNamedItem("type"));
            if (!IsNull($v_1.attributes.getNamedItem("filterconditionxpath")) &&
                XUI.Xml.GetText($v_1.attributes
                    .getNamedItem("type")) ===
                $v_0)
                if (!isNullOrEmptyString($v_0) && !($v_0 === "Choose")
                )
                    if (!Mscrm.GridFilterUtil.isToggleableFilterAction($v_0) &&
                        XUI.Xml.GetText($v_1.attributes.getNamedItem("filterconditionxpath"))) return;
            this.$1W_5 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
            switch ($v_0) {
            case "Choose":
                this.$2v_5();
                break;
            case "CurrUser":
                this.ClearFilterConditions(true, true);
                this.$2q_5();
                this.$1W_5.ApplyFilters();
                break;
            case "ResetFilter":
                this.$K_5 = null;
                this.$D_5 = null;
                this.ClearFilterConditions(true, true);
                if (this.$0_3.get_isDirty()) this.$1W_5.ApplyFilters();
                else {
                    this.clearUI();
                    this.initUI()
                }
                break;
            default:
                Mscrm.FilterPopup.prototype.FilterChanged.call(this, item);
                break
            }
        }
        this._dirtyUI = false
    },
    ProcessOkButtonClick: function(menu) {
        var $v_0 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
        if (this.isVSAFilterDirty()) {
            this.ClearFilterConditions(true, true);
            this.$2s_5();
            $v_0.ApplyFilters()
        } else this._dirtyUI = false
    },
    clearUI: function() {
        Mscrm.FilterPopup.prototype.clearUI.call(this);
        this.$3F_5()
    },
    initUI: function() {
        Mscrm.FilterPopup.prototype.initUI.call(this);
        for (var $v_0 = false, $v_1 = null, $v_2 = this.$0_3.$2_0.length, $v_4 = 0; $v_4 < $v_2; $v_4++) {
            var $v_5 = this.$0_3.$2_0[$v_4], $v_6 = $v_5.$3_0, $v_7 = $v_5.$6_0;
            if ($v_5.$3_0 === "eq-userid") {
                this.setCheckmark(this.getId("CurrUser"), $v_7, $v_5.$7_0);
                this._isFilterPopUpDirty = !$v_7 ? true : this._isFilterPopUpDirty;
                break
            } else if ($v_5.$3_0 === "in" || $v_5.$3_0 === "eq") {
                this.setCheckmark(this.getId("Choose"), $v_7, $v_5.$7_0);
                $v_0 = true;
                this._isFilterPopUpDirty = !$v_7 ? true : this._isFilterPopUpDirty;
                $v_1 = $v_5;
                break
            }
        }
        this.$3M_5($v_1);
        if (!$v_0)
            for (var $v_8 = 0; $v_8 < this._originalFilters.length; $v_8++) {
                var $v_9 = this._originalFilters[$v_8], $v_A = $v_9.$3_0;
                if ($v_9.$3_0 === "in" || $v_9.$3_0 === "eq") {
                    this.setCheckmark(this.getId("Choose"), false, $v_9.$7_0);
                    this._isFilterPopUpDirty = true;
                    break
                }
            }
        if (this._isFilterPopUpDirty) this.setMenuUIDirty(true);
        else this.setMenuUIDirty(false);
        var $v_3 = this.$2N_5($v_1);
        if (!$v_3) this.menu.set_showOkCancelButtons(false);
        else this.menu.set_showOkCancelButtons(true);
        this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml());
        this.toggleButtonContainer($v_3)
    },
    $2B_5: function($p0, $p1, $p2) {
        var $v_0 = this.$1O_5.split(":"),
            $v_1 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='SelectionArea']", null);
        if (!IsNull($p0)) {
            for (var $v_2 = 0; $v_2 < $p0.items.length; $v_2++) {
                var $v_3 = this.menu.get_menuXml().createElement("option"), $v_4 = new Sys.StringBuilder;
                $v_4.append(this._thisElement.getAttribute("gridid"));
                $v_4.append(this._entityName);
                $v_4.append(this._attributeName);
                $v_4.append(this._relationshipName);
                $v_4.append("Check");
                $v_4.append(this.$1Y_5.toString());
                this.$1Y_5++;
                var $v_5 = $v_4.toString();
                this.setAttributeUtil($v_3, "id", $v_5);
                var $v_6 = null;
                $v_6 = $p0.items[$v_2].type;
                $v_3 = this.setAttributeUtil($v_3, "type", $v_6);
                XUI.Xml.SetText($v_3, $p0.items[$v_2].name);
                $v_3 = this.setAttributeUtil($v_3, "display", $p0.items[$v_2].name);
                $v_3 = this.setAttributeUtil($v_3, "value", $p0.items[$v_2].id);
                $v_3 = this.setAttributeUtil($v_3, "ischecked", $p1);
                $v_3 = this.setAttributeUtil($v_3, "isdummychecked", $p1);
                var $v_7 = CrmEncodeDecode.CrmHtmlDecode($p0.items[$v_2].typevalue), $v_8 = this.$1U_5[$v_6].toString();
                $v_3 = this.setAttributeUtil($v_3, "uitype", $v_8);
                $v_1.appendChild($v_3);
                for (var $v_9 = 0; $v_9 < $v_0.length; $v_9++)
                    if ($v_0[$v_9] === $v_6) {
                        var $v_A = $v_0[$v_9 + 1], $v_B = Mscrm.CrmUri.create($v_A).toString();
                        $v_3 = this.setAttributeUtil($v_3, "imagePath", $v_B)
                    }
            }
            this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml())
        }
    },
    $2N_5: function($p0) {
        if (IsNull(this.$D_5) && IsNull(this.$K_5)) return false;
        var $v_0 = this.$q_5(this.$D_5), $v_1 = this.$q_5(this.$K_5), $v_2 = $v_0 + $v_1;
        if (!$v_2) return false;
        this.$2B_5(this.$D_5, "true", $p0);
        this.$2B_5(this.$K_5, "false", $p0);
        this.$1Y_5 = 0;
        return true
    },
    $2v_5: function() { this.$2K_5() },
    $2s_5: function() {
        this.$D_5 = this.$21_5();
        this.$K_5 = this.$27_5();
        var $v_0 = this.$1w_5(this.$D_5);
        this.handleMultiSelectClicks($v_0);
        this.clearBackup()
    },
    $2q_5: function() {
        for (var $v_0 = null, $v_1 = null, $v_2 = 0; $v_2 < this.$0_3.$2_0.length; $v_2++) {
            $v_1 = this.$0_3.$2_0[$v_2];
            var $v_3 = $v_1.$3_0;
            if ($v_3 === "eq-userid" && $v_1.$6_0 && !$v_1.$I_0) {
                $v_0 = $v_1;
                break
            }
        }
        if (IsNull($v_0)) {
            var $v_4 = new Mscrm.FilterCondition(1, "eq-userid", "", false, "");
            $v_4.$6_0 = false;
            $v_4.$8_0 = true;
            Array.add(this.$0_3.$2_0, $v_4)
        } else {
            $v_0.$3_0 = "eq-userid";
            $v_0.$6_0 = false
        }
        this.clearBackup()
    },
    $2K_5: function() {
        var $v_0 = this._resultNode.attributes.getNamedItem("lookuptypes").nodeValue, $v_1 = "multi";
        if ($v_0 === "129") $v_1 = "subject";
        this.$D_5 = this.$21_5();
        this.$K_5 = this.$27_5();
        this.$37_5(this.$D_5);
        var $v_2 = null,
            $v_3 = [$v_2],
            $v_4 = Mscrm.Utilities.createCallbackFunctionObject("AddLookupItemsToFilter", this, $v_3, false);
        LookupObjectsWithCallback($v_4,
            this.$2f_5(),
            $v_1,
            $v_0,
            0,
            null,
            null,
            0,
            1,
            false,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null)
    },
    AddLookupItemsToFilter: function(returnedItems) {
        if (IsNull(returnedItems)) return;
        if (returnedItems.items.length > window.GF_MAXRECORDS_LOOKUP) {
            var $v_2 = String.format(window.LOCID_GF_LOOKUPMAXLIMIT, returnedItems.items.length);
            alert($v_2);
            return
        }
        this.$D_5 = returnedItems;
        this.$1u_5();
        this.ClearFilterConditions(true, true);
        var $v_0 = this.$1w_5(this.$D_5);
        this.handleMultiSelectClicks($v_0);
        var $v_1 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
        $v_1.ApplyFilters();
        this.clearBackup()
    },
    $3M_5: function($p0) {
        this.$K_5 = this.$31_5(this.$D_5, this.$K_5);
        this.$D_5 = null;
        if (!IsNull($p0)) {
            for (var $v_0 = XUI.Xml.LoadXml($p0.$9_0),
                $v_1 = XUI.Xml.SelectNodes($v_0, "/values/value", null),
                $v_2 = [],
                $v_3 = 0;
                $v_3 < $v_1.length;
                $v_3++) {
                var $v_4 = {};
                $v_4.type = this.$1h_5[$v_1[$v_3].attributes.getNamedItem("uitype").nodeValue];
                $v_4.id = XUI.Xml.GetText($v_1[$v_3]);
                $v_4.name = $v_1[$v_3].attributes.getNamedItem("uiname").nodeValue;
                Array.add($v_2, $v_4)
            }
            this.$D_5 = this.$1V_5($v_2);
            this.$1u_5()
        }
    },
    $1w_5: function($p0) {
        var $v_0 = this.$q_5($p0);
        if (!$v_0) return null;
        var $v_1 = $p0.items, $v_2 = null, $v_3 = new Sys.StringBuilder;
        $v_3.append("<values>");
        for (var $v_5 = 0; $v_5 < $v_0; $v_5++) {
            $v_2 = $v_1[$v_5];
            this.$2J_5($v_3, $v_2.id, $v_2.name, this.$1U_5[$v_2.type])
        }
        $v_3.append("</values>");
        var $v_4 = new Mscrm.FilterCondition(2, "in", $v_3.toString(), false, null);
        return $v_4
    },
    $2J_5: function($p0, $p1, $p2, $p3) {
        $p0.append('<value uiname="');
        $p0.append(CrmEncodeDecode.CrmXmlAttributeEncode($p2));
        $p0.append('" uitype="');
        $p0.append(CrmEncodeDecode.CrmXmlAttributeEncode($p3));
        $p0.append('">');
        $p0.append(CrmEncodeDecode.CrmXmlEncode($p1));
        $p0.append("</value>")
    },
    $3F_5: function() {
        var $v_0 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//option", null);
        if (!IsNull($v_0)) for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) $v_0[$v_1].parentNode.removeChild($v_0[$v_1]);
        this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml())
    },
    $2f_5: function() { return $get(this.$1k_5() + "hiddenlookupfilterfield") },
    $37_5: function($p0) {
        for (var $v_0 = $get(this.$1k_5() + "hiddenlookupfilterfield"),
            $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0).getElementsByTagName("IMG"),
            $v_2 = $v_1.length,
            $v_3 = 0;
            $v_3 < $v_2;
            $v_3++)
            if (Sys.UI.DomElement.containsCssClass($v_1[$v_3], "ms-crm-Lookup")) {
                var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_1[$v_3].id);
                $v_4.set_dataValue($p0.items);
                break
            }
    },
    $1k_5: function() {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("lookupFilterPopup");
        $v_0.append(this._thisElement.getAttribute("gridid"));
        $v_0.append(this._entityName);
        $v_0.append(this._attributeName);
        $v_0.append(this._relationshipName);
        return $v_0.toString()
    },
    $2w_5: function() {
        var $v_0 = $get(this.$1k_5() + "hiddenlookupfilterfield"),
            $v_1 = this._resultNode.attributes.getNamedItem("lookuptypes").nodeValue,
            $v_2 = "multi";
        if ($v_1 === "129") $v_2 = "subject";
        for (var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_0).getElementsByTagName("IMG"),
            $v_4 = null,
            $v_5 = $v_3.length,
            $v_6 = 0;
            $v_6 < $v_5;
            $v_6++)
            if (Sys.UI.DomElement.containsCssClass($v_3[$v_6], "ms-crm-Lookup")) {
                $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_3[$v_6].id);
                break
            }
        if (!IsNull($v_4)) {
            $v_4.set_lookupStyle($v_2);
            $v_4.set_lookupTypes($v_1);
            $v_4.set_lookupTypeIcons(this.$1O_5);
            $v_4.set_lookupTypeNames(this.$1P_5)
        }
    },
    $21_5: function() {
        var $v_0 = this.$22_5(true);
        return this.$1V_5($v_0)
    },
    $27_5: function() {
        var $v_0 = this.$22_5(false);
        return this.$1V_5($v_0)
    },
    $22_5: function($p0) {
        for (var $v_0 = [], $v_1 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//option", null), $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++)
            if (XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("ischecked")) === "true" && $p0 ||
                XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("ischecked")) === "false" && !$p0) {
                var $v_3 = {};
                $v_3.type = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("type"));
                if (!IsNull($v_1[$v_2].attributes
                    .getNamedItem("uitype")))
                    $v_3.typename = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("uitype"));
                $v_3.id = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("value"));
                $v_3.name = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("display"));
                Array.add($v_0, $v_3)
            }
        return $v_0
    },
    $1V_5: function($p0) {
        var $v_0 = {};
        $v_0.items = $p0;
        return $v_0
    },
    $q_5: function($p0) {
        if (!IsNull($p0) && !IsNull($p0.items)) return $p0.items.length;
        return 0
    },
    $1u_5: function() {
        var $v_0 = this.$q_5(this.$D_5), $v_1 = this.$q_5(this.$K_5);
        if (!$v_0 || !$v_1) return;
        for (var $v_2 = [], $v_5 = 0; $v_5 < $v_0; $v_5++) Array.add($v_2, this.$D_5.items[$v_5].id);
        for (var $v_3, $v_4 = [], $v_6 = 0; $v_6 < $v_1; $v_6++) {
            $v_3 = this.$K_5.items[$v_6];
            !Array.contains($v_2, $v_3.id) && Array.add($v_4, $v_3)
        }
        this.$K_5 = this.$1V_5($v_4)
    },
    $31_5: function($p0, $p1) {
        var $v_0 = this.$q_5(this.$D_5), $v_1 = this.$q_5(this.$K_5);
        if (!$v_0 && !$v_1) return null;
        if (!$v_0) return $p1;
        if (!$v_1) return $p0;
        for (var $v_2 = $p1
                     .items,
            $v_3 = $p0.items,
            $v_4 = 0;
            $v_4 < $v_2.length;
            $v_4++) $v_3[$v_3.length] = $v_2[$v_4];
        return $p0
    },
    describeOperand: function(operand) {
        if (isNullOrEmptyString(operand)) return "";
        else {
            for (var $v_0 = new Sys.StringBuilder,
                $v_1 = XUI.Xml.LoadXml(operand),
                $v_2 = [],
                $v_3 = XUI.Xml.SelectNodes($v_1, "/values/value", null),
                $v_4 = 0;
                $v_4 < $v_3.length;
                $v_4++) {
                $v_4 > 0 && $v_0.append(";");
                var $v_5 = $v_3[$v_4].attributes.getNamedItem("uiname").nodeValue;
                $v_0.append($v_5)
            }
            return $v_0.toString()
        }
    }
};
Mscrm.MultiSelectFilterPopup = function(element) { Mscrm.MultiSelectFilterPopup.initializeBase(this, [element]) };
Mscrm.MultiSelectFilterPopup.prototype = {
    _dirtyUI: false,
    _multiSelect: null,
    getMultiSelectElementReference: function() {
        for (var $v_0 = this._thisElement
                     .getElementsByTagName("LI"),
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) if ($v_0[$v_1].id.endsWith("MultiSelectContainer")) return $v_0[$v_1];
        return null
    },
    getButtonContainerReference: function() { return $get(this.getId("ButtonContainer"), this._thisElement) },
    handleMultiSelectClicks: function(fc) {
        if (IsNull(fc)) this.clearMultiSelectCondition();
        else {
            for (var $v_0 = null, $v_1 = null, $v_2 = 0; $v_2 < this.$0_3.$2_0.length; $v_2++) {
                $v_1 = this.$0_3.$2_0[$v_2];
                var $v_3 = $v_1.$3_0;
                if (($v_3 === "eq" || $v_3 === "in") && $v_1.$6_0 && !$v_1.$I_0) {
                    $v_0 = $v_1;
                    break
                }
            }
            if (IsNull($v_0)) {
                fc.$6_0 = false;
                fc.$8_0 = true;
                Array.add(this.$0_3.$2_0, fc)
            } else {
                var $v_4 = $v_0.$7_0, $v_5 = Mscrm.GridFilterUtil.getParentFilterXPathFromConditionXPath($v_4);
                this.clearMultiSelectCondition();
                var $v_6 = new Sys.StringBuilder;
                $v_6.append($v_5);
                $v_6.append('/condition[@gridfilterconditionid="');
                $v_6.append(Mscrm.GridFilterUtil.createUniqueId());
                $v_6.append('"]');
                fc.$7_0 = $v_6.toString();
                fc.$6_0 = false;
                fc.$8_0 = true;
                Array.add(this.$0_3.$2_0, fc)
            }
        }
    },
    MultiCheckBoxChanged: function() { this._dirtyUI = true },
    SetUIUndirty: function(item) {
        this._multiSelect = this.getMultiSelectElementReference();
        for (var $v_0 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//option", null), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++)
            if (!IsNull($v_0[$v_1].attributes.getNamedItem("isdummychecked")) &&
                Boolean.parse(XUI.Xml.GetText($v_0[$v_1].attributes
                    .getNamedItem("isdummychecked")))) this.setAttributeUtil($v_0[$v_1], "ischecked", "true");
            else this.setAttributeUtil($v_0[$v_1], "ischecked", "false");
        this._dirtyUI = false
    },
    isVSAFilterDirty: function() {
        this._multiSelect = this.getMultiSelectElementReference();
        for (var $v_0 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//option", null), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++)
            if (!IsNull($v_0[$v_1].attributes.getNamedItem("isdummychecked"))) {
                if (XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("isdummychecked")) !==
                    XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("ischecked"))) return true
            } else if (!IsNull($v_0[$v_1].attributes
                .getNamedItem("ischecked")))
                if (XUI.Xml.GetText($v_0[$v_1].attributes.getNamedItem("ischecked")) === "true") return true;
        return false
    },
    clearMultiSelectCondition: function() {
        for (var $v_0 = null, $v_1 = 0; $v_1 < this.$0_3.$2_0.length; $v_1++) {
            $v_0 = this.$0_3.$2_0[$v_1];
            var $v_2 = $v_0.$3_0;
            if (($v_2 === "eq" || $v_2 === "in") && $v_0.$6_0 && !$v_0.$I_0) {
                Array.remove(this.$0_3.$2_0, $v_0);
                return
            }
        }
    },
    adjustNameAttribute: function(condition) {
        if (isNameOperator(condition.$3_0))
            condition.$J_0 = this._resultNode.attributes.getNamedItem("nameattr").nodeValue
    },
    describeOrdinaryCondition: function(condition) {
        if (condition.$3_0 === "like" || condition.$3_0 === "not-like") return condition.describe();
        else {
            var $v_0 = new Sys.StringBuilder, $v_1 = condition.$3_0;
            if ($v_1 === "in") $v_1 = "eq";
            else if ($v_1 === "not-in") $v_1 = "ne";
            if (condition.$N_0 === 2) {
                var $v_2 = condition.$9_0;
                $v_0.append(String.format(window.LOCID_GF_BINARYCONDITIONFORMAT,
                    getLabelForOperator($v_1),
                    this.describeOperand($v_2)))
            } else $v_0.append(getLabelForOperator($v_1));
            return $v_0.toString()
        }
    },
    buildVSAMenuContainer: function() {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append('<LI class = "ms-crm-MultiSelect-container" id="');
        $v_0.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this.getId("LIMultiSelectContainer")));
        $v_0.append('"><UL class = "ms-crm-MultiSelect-container" style="height:10px" id = "');
        $v_0.append(CrmEncodeDecode.CrmHtmlAttributeEncode(this.getId("ULMultiSelectContainer")));
        $v_0.append('">{0}</UL></LI>');
        return $v_0.toString()
    },
    toggleButtonContainer: function(show) {
        var $v_0 = this.getButtonContainerReference();
        if (!IsNull($v_0)) $v_0.style.display = show ? "block" : "none"
    }
};
Mscrm.NumberFilterPopup = function(element) {
    Mscrm.NumberFilterPopup.initializeBase(this, [element]);
    this._type = "number"
};
Mscrm.PicklistFilterPopup = function(element) {
    this.$1f_5 = {};
    Mscrm.PicklistFilterPopup.initializeBase(this, [element]);
    this._type = "picklist"
};
Mscrm.PicklistFilterPopup.prototype = {
    $1F_5: null,
    $1e_5: null,
    $1E_5: null,
    FilterChanged: function(item) {
        var $v_0 = item.get_menuItemId(),
            $v_1 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='" + $v_0 + "']", null);
        $v_0 = XUI.Xml.GetText($v_1.attributes.getNamedItem("type"));
        if (!IsNull($v_1.attributes.getNamedItem("filterconditionxpath")) &&
            XUI.Xml.GetText($v_1.attributes
                .getNamedItem("type")) ===
            $v_0)
            if (!Mscrm.GridFilterUtil.isToggleableFilterAction($v_0) &&
                XUI.Xml.GetText($v_1.attributes.getNamedItem("filterconditionxpath"))) return;
        Mscrm.FilterPopup.prototype.FilterChanged.call(this, item);
        this._dirtyUI = false
    },
    ProcessOkButtonClick: function(menu) {
        var $v_0 = $find(Mscrm.GridFilterUtil.getFilterPopupSetId(this._thisElement));
        if (this.isVSAFilterDirty()) {
            this.ClearFilterConditions(true, true);
            this.$2u_5();
            $v_0.ApplyFilters()
        } else {
            this._dirtyUI = false;
            return
        }
    },
    initializeDialog: function(diagArg) {
        Mscrm.FilterPopup.prototype.initializeDialog.call(this, diagArg);
        diagArg.optionsXml = this.$1F_5
    },
    $3O_5: function($p0) {
        for (var $v_0 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//option", null),
            $v_1 = XUI.Xml.LoadXml($p0.$9_0),
            $v_2 = [],
            $v_3 = XUI.Xml.SelectNodes($v_1, "/values/value", null),
            $v_6 = 0;
            $v_6 < $v_3.length;
            $v_6++) Array.add($v_2, XUI.Xml.GetText($v_3[$v_6]));
        for (var $v_4 = 0, $v_7 = 0; $v_7 < $v_0.length; $v_7++) {
            this.setAttributeUtil($v_0[$v_7], "ischecked", "false");
            this.setAttributeUtil($v_0[$v_7], "isdummychecked", "false");
            for (var $v_8 = 0; $v_8 < $v_2.length; $v_8++)
                if (XUI.Xml.GetText($v_0[$v_7].attributes.getNamedItem("value")) === $v_2[$v_8].toString()) {
                    this.setAttributeUtil($v_0[$v_7], "isdummychecked", "true");
                    this.setAttributeUtil($v_0[$v_7], "ischecked", "true");
                    $v_4++
                }
        }
        var $v_5 = this.$1E_5.length;
        if ($v_4 === $v_5) {
            this.setAttributeUtil($v_0[0], "ischecked", "true");
            this.setAttributeUtil($v_0[0], "isdummychecked", "true")
        }
    },
    $2h_5: function() {
        var $v_0 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//option", null);
        if ($v_0.length < 2) return null;
        var $v_1 = new Sys.StringBuilder;
        $v_1.append("<values>");
        for (var $v_2 = 0, $v_4 = 0; $v_4 < $v_0.length; $v_4++)
            if (!IsNull($v_0[$v_4].attributes.getNamedItem("ischecked")))
                if (XUI.Xml.GetText($v_0[$v_4].attributes.getNamedItem("ischecked")) === "true") {
                    $v_1.append("<value>");
                    $v_1.append(CrmEncodeDecode
                        .CrmXmlEncode(CrmEncodeDecode
                            .CrmHtmlDecode(XUI.Xml.GetText($v_0[$v_4].attributes.getNamedItem("value")))));
                    $v_1.append("</value>");
                    $v_2++
                }
        $v_1.append("</values>");
        if (!$v_2) return null;
        var $v_3 = new Mscrm.FilterCondition(2, "in", $v_1.toString(), false, null);
        return $v_3
    },
    initialize: function() {
        Mscrm.FilterPopup.prototype.initialize.call(this);
        this.$1F_5 = this._resultNode.attributes.getNamedItem("optionsXML").nodeValue;
        var $v_0 = this.$1F_5;
        if (!IsNull($v_0)) {
            var $v_4 = XUI.Xml.LoadXml($v_0),
                $v_5 = XUI.Xml.SelectNodes($v_4, "/select/option", null),
                $v_6 = XUI.Xml.SelectSingleNode(this.menu.get_menuXml(), "//MenuItem[@id='SelectionArea']", null),
                $v_7 = $v_5.length;
            if ($v_7 > window.GF_MAXRECORDS_LOOKUP) {
                var $v_8 = String.format(window.LOCID_GF_PICKLISTMAXLIMIT, window.GF_MAXRECORDS_LOOKUP),
                    $v_9 = this.menu.get_menuXml().createElement("MenuItem");
                this.setAttributeUtil($v_9, "display", $v_8);
                this.setAttributeUtil($v_9, "type", "MessageArea");
                var $v_A = XUI.Xml.DomUtils.GetFirstChild(this.menu.get_menuXml());
                $v_A.insertBefore($v_9, XUI.Xml.DomUtils.GetFirstChild($v_A))
            } else if (!IsNull(!!$v_6))
                for (var $v_B = 0; $v_B < $v_5.length; $v_B++) {
                    var $v_C = new Sys.StringBuilder;
                    $v_C.append(this._thisElement.getAttribute("gridid"));
                    $v_C.append(this._entityName);
                    $v_C.append(this._attributeName);
                    $v_C.append(this._relationshipName);
                    $v_C.append("Check");
                    $v_C.append($v_B.toString());
                    var $v_D = $v_C.toString(),
                        $v_E = Mscrm.Utilities.getAdoptedNode(this.menu.get_menuXml(), $v_5[$v_B]);
                    $v_6.appendChild($v_E);
                    this.setAttributeUtil($v_E, "id", $v_D)
                }
        }
        this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml());
        this.$1e_5 = XUI.Xml.LoadXml(this.$1F_5);
        this.$1E_5 = XUI.Xml.SelectNodes(this.$1e_5, "/select/option", null);
        for (var $v_1, $v_2, $v_3, $v_F = 0; $v_F < this.$1E_5.length; $v_F++) {
            $v_3 = this.$1E_5[$v_F];
            $v_1 = $v_3.attributes.getNamedItem("value").nodeValue;
            $v_2 = XUI.Xml.GetText($v_3);
            this.$1f_5[$v_1] = $v_2
        }
    },
    $2u_5: function() {
        var $v_0 = this.$2h_5();
        this.handleMultiSelectClicks($v_0);
        this.clearBackup()
    },
    initUI: function() {
        Mscrm.FilterPopup.prototype.initUI.call(this);
        for (var $v_0 = false, $v_1 = 0; $v_1 < this.$0_3.$2_0.length; $v_1++) {
            var $v_2 = this.$0_3.$2_0[$v_1], $v_3 = $v_2.$3_0, $v_4 = $v_2.$6_0;
            if ($v_2.$3_0 === "in" || $v_2.$3_0 === "eq") {
                this.setCheckmark("SelectionArea", $v_4, $v_2.$7_0);
                $v_0 = true;
                this._isFilterPopUpDirty = !$v_4 ? true : this._isFilterPopUpDirty;
                this.$3O_5($v_2);
                break
            }
        }
        if (!$v_0)
            for (var $v_5 = 0; $v_5 < this._originalFilters.length; $v_5++) {
                var $v_6 = this._originalFilters[$v_5], $v_7 = $v_6.$3_0;
                if ($v_6.$3_0 === "in" || $v_6.$3_0 === "eq") {
                    this.setCheckmark("SelectionArea", false, $v_6.$7_0);
                    this._isFilterPopUpDirty = true;
                    break
                }
            }
        if (this._isFilterPopUpDirty) this.setMenuUIDirty(true);
        else this.setMenuUIDirty(false);
        if (!IsNull(this.menu.get_menuXml()))
            this.xmlString = XUI.Xml.XMLSerializer.serializeToString(this.menu.get_menuXml())
    },
    clearUI: function() {
        Mscrm.FilterPopup.prototype.clearUI.call(this);
        for (var $v_0 = XUI.Xml.SelectNodes(this.menu.get_menuXml(), "//option", null), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) {
            this.setAttributeUtil($v_0[$v_1], "ischecked", "false");
            this.setAttributeUtil($v_0[$v_1], "isdummychecked", "false")
        }
    },
    describeOperand: function(operand) {
        if (isNullOrEmptyString(operand)) return "";
        else {
            for (var $v_0 = new Sys.StringBuilder,
                $v_1 = XUI.Xml.LoadXml(operand),
                $v_2 = XUI.Xml.SelectNodes($v_1, "/values/value", null),
                $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++) {
                $v_3 > 0 && $v_0.append(";");
                var $v_4 = XUI.Xml.GetText($v_2[$v_3]), $v_5 = this.$1f_5[$v_4];
                $v_0.append($v_5)
            }
            return $v_0.toString()
        }
    }
};
Mscrm.StringFilterPopup = function(element) {
    Mscrm.StringFilterPopup.initializeBase(this, [element]);
    this._thisElement = element;
    this._type = "string"
};
Mscrm.BaseFetchXmlProcessor.registerClass("Mscrm.BaseFetchXmlProcessor");
Mscrm.OutlookFetchXmlProcessor.registerClass("Mscrm.OutlookFetchXmlProcessor", Mscrm.BaseFetchXmlProcessor);
Mscrm.WebFetchXmlProcessor.registerClass("Mscrm.WebFetchXmlProcessor", Mscrm.BaseFetchXmlProcessor);
Mscrm.QueryData.registerClass("Mscrm.QueryData");
Mscrm.MergedXml.registerClass("Mscrm.MergedXml");
Mscrm.FilterConditionCollection.registerClass("Mscrm.FilterConditionCollection");
Mscrm.FilterCondition.registerClass("Mscrm.FilterCondition");
Mscrm.CustomFilterConditionGroup.registerClass("Mscrm.CustomFilterConditionGroup");
Mscrm.FilterNodeType.registerClass("Mscrm.FilterNodeType");
Mscrm.FilterOperatorType.registerClass("Mscrm.FilterOperatorType");
Mscrm.CustomFiltersBooleanOperatorType.registerClass("Mscrm.CustomFiltersBooleanOperatorType");
Mscrm.FilterUIGroupType.registerClass("Mscrm.FilterUIGroupType");
Mscrm.DateFilterGroup.registerClass("Mscrm.DateFilterGroup");
Mscrm.SaveViewParams.registerClass("Mscrm.SaveViewParams");
Mscrm.GridFilterUtil.registerClass("Mscrm.GridFilterUtil");
Mscrm.FilterPopup.registerClass("Mscrm.FilterPopup", Mscrm.CrmUIControl);
Mscrm.DateTimeFilterPopup.registerClass("Mscrm.DateTimeFilterPopup", Mscrm.FilterPopup);
Mscrm.FilterSet.registerClass("Mscrm.FilterSet", Mscrm.CrmUIControl, Mscrm.IFilterSet);
Mscrm.GridFilterCustomControl.registerClass("Mscrm.GridFilterCustomControl", Mscrm.CrmUIControl);
Mscrm.MultiSelectFilterPopup.registerClass("Mscrm.MultiSelectFilterPopup", Mscrm.FilterPopup);
Mscrm.LookupFilterPopup.registerClass("Mscrm.LookupFilterPopup", Mscrm.MultiSelectFilterPopup);
Mscrm.NumberFilterPopup.registerClass("Mscrm.NumberFilterPopup", Mscrm.FilterPopup);
Mscrm.PicklistFilterPopup.registerClass("Mscrm.PicklistFilterPopup", Mscrm.MultiSelectFilterPopup);
Mscrm.StringFilterPopup.registerClass("Mscrm.StringFilterPopup", Mscrm.FilterPopup);
Mscrm.FilterNodeType.and = 1;
Mscrm.FilterNodeType.invalid = 0;
Mscrm.FilterNodeType.or = 2;
Mscrm.FilterOperatorType.invalid = 0;
Mscrm.FilterOperatorType.unary = 1;
Mscrm.FilterOperatorType.binary = 2;
Mscrm.CustomFiltersBooleanOperatorType.AND = 1;
Mscrm.CustomFiltersBooleanOperatorType.OR = 2;
Mscrm.FilterUIGroupType.NULL = 1;
Mscrm.FilterUIGroupType.NOTNULL = 2;
Mscrm.FilterUIGroupType.CUSTOMFILTERS = 3;
Mscrm.FilterUIGroupType.DATEUNARY = 4;
Mscrm.FilterUIGroupType.MULTISELECTAREA = 5;
Mscrm.FilterUIGroupType.COMPLEX = 6;
Mscrm.FilterUIGroupType.CURRENTUSER = 7;
Mscrm.DateFilterGroup.INVALID = 0;
Mscrm.DateFilterGroup.DAYGROUP = 1;
Mscrm.DateFilterGroup.WEEKGROUP = 2;
Mscrm.DateFilterGroup.MONTHGROUP = 3;
Mscrm.DateFilterGroup.YEARGROUP = 4;
Mscrm.DateFilterGroup.FISCALPERIODGROUP = 5;
Mscrm.DateFilterGroup.FISCALYEARGROUP = 6;
Mscrm.GridFilterUtil.$1L = "autoCreated"