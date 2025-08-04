<%@ Page language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.MailMergeFormPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<style type="text/css">
    DIV.LeftSpace {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        padding-right: 5px;
        <% }
           else
           { %>
        padding-left: 5px;
        <% } %>
    }

    TABLE.area {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        border-right: none;
        <% }
           else
           { %>
        border-left: none;
        <% } %>
    }

    body {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        dir: rtl;
        <% } %>
        background-color: #eef0f6;
    }
</style>

<script type="text/javascript">


    var _sLayoutXml = "";
    var _iSelectedColumns;


    var _sGlobalTemplateId;
    var _sGlobalLayoutXml = null;
    var _iGlobalSelectedColumns;


    var _sPersonalTemplateId;
    var _sPersonalLayoutXml = null;
    var _iPersonalSelectedColumns;

    var _globalLookup = null;
    var _personalLookup = null;
    Sys.Application.add_load(function() {
        _globalLookup = Mscrm.FormControlInputBehavior.GetBehavior('GlobalLookup');
        _personalLookup = Mscrm.FormControlInputBehavior.GetBehavior('PersonalLookup');

        _globalLookup.add_change(handleLookChange);
        _personalLookup.add_change(handleLookChange);


        _globalLookup.AddParam("parentType", <%= lookupObjectTypeCode %>);
        _personalLookup.AddParam("parentType", <%= lookupObjectTypeCode %>);


        var languageElement = document.getElementById("Language");
        if (IsNull(languageElement)) {

            _globalLookup.AddParam("languagecode", <%= defaultLanguage %>);
            _personalLookup.AddParam("languagecode", <%= defaultLanguage %>);

            updateUIState();
        } else {
            $addHandler(languageElement, "change", handleLanguageChange);
            handleLanguageChange();

        }
        attachWindowOnBeforeUnload(window_onbeforeunload);
    });

    function window_onbeforeunload(oEvent) {
        var languageElement = document.getElementById("Language");
        if (!IsNull(languageElement)) {
            $removeHandler(languageElement, "change", handleLanguageChange);
        }
    }


    function handleLanguageChange() {

        var languagecode = getLanguage();
        _globalLookup.AddParam("languagecode", languagecode);
        _personalLookup.AddParam("languagecode", languagecode);

        _sLayoutXml = null;
        _iSelectedColumns = null;
        _sGlobalTemplateId = null;
        _sGlobalLayoutXml = null;
        _iGlobalSelectedColumns = null;
        _sPersonalTemplateId = null;
        _sPersonalLayoutXml = null;
        _iPersonalSelectedColumns = null;

        _globalLookup.set_dataValue(null);
        _personalLookup.set_dataValue(null);


        updateUIState();
    }


    function handleLookChange() {

        var stemplateId = null;
        var radGlobalTemplate = $get('radGlobalTemplate');
        if (radGlobalTemplate.checked) {
            var dataValue = _globalLookup.get_dataValue();
            if (dataValue) {
                stemplateId = dataValue[0].id;
            }
            if (stemplateId != _sGlobalTemplateId) {
                _sGlobalTemplateId = stemplateId;
                _sGlobalLayoutXml = null;
                _iGlobalSelectedColumns = null;
            }
        } else if (radPersonalTemplate.checked) {
            var value = _personalLookup.get_dataValue();
            if (value) {
                stemplateId = value[0].id;
            }
            if (stemplateId != _sPersonalTemplateId) {
                _sPersonalTemplateId = stemplateId;
                _sPersonalLayoutXml = null;
                _iPersonalSelectedColumns = null;
            }
        }


        updateUIState();
    }


    function updateUIState() {
        if ($get('radNoTemplate').checked) {

            _globalLookup.set_disabled(true);
            _personalLookup.set_disabled(true);
        } else if ($get('radGlobalTemplate').checked) {

            _globalLookup.set_disabled(false);
            _personalLookup.set_disabled(true);
        } else if ($get('radPersonalTemplate').checked) {

            _globalLookup.set_disabled(true);
            _personalLookup.set_disabled(false);
        }


        setColumnsLabel(getSelectedColumns());
    }


    function validateInputs() {
        if ($get('radGlobalTemplate').checked) {
            if (IsNull(_globalLookup.get_dataValue())) {

                alert(LOCID_NOTEMPLATE_SELECTED);
                return false;
            }
        } else if ($get('radPersonalTemplate').checked) {
            var dataValue = _personalLookup.get_dataValue();
            if (IsNull(dataValue)) {

                alert(LOCID_NOTEMPLATE_SELECTED);
                return false;
            }
            templateId = dataValue[0].id;
        }

        return true;
    }


    function getLookupType() {
        return "<%= lookupObjectTypeCode %>";
    }


    function getLanguage() {
        var languageControl = Mscrm.FormControlInputBehavior.GetBehavior("Language");
        if (!IsNull(languageControl)) {
            return languageControl.get_dataValue();
        }


        return <%= defaultLanguage %>;
    }


    function getTemplateId() {

        var templateId = "";
        if ($get('radGlobalTemplate').checked) {
            var dataValue = _globalLookup.get_dataValue();
            if (!IsNull(dataValue)) {
                templateId = dataValue[0].id;
            }
        } else if ($get('radPersonalTemplate').checked) {
            var value = _personalLookup.get_dataValue();
            if (!IsNull(value)) {
                templateId = value[0].id;
            }
        }
        return templateId;
    }


    function getLayoutXml(bfetch) {
        var stemplateId = "";
        if ($get('radNoTemplate').checked) {
            return _sLayoutXml;
        } else if ($get('radGlobalTemplate').checked) {
            if (!bfetch) {
                return _sGlobalLayoutXml;
            }


            if (!IsNull(_sGlobalLayoutXml) && (_sGlobalLayoutXml != "")) {
                return _sGlobalLayoutXml;
            }

            stemplateId = _sGlobalTemplateId;
        } else if ($get('radPersonalTemplate').checked) {
            if (!bfetch) {
                return _sPersonalLayoutXml;
            }


            if (!IsNull(_sPersonalLayoutXml) && (_sPersonalLayoutXml != "")) {
                return _sPersonalLayoutXml;
            }

            stemplateId = _sPersonalTemplateId;
        }


        var command = new RemoteCommand("MailMerge", "Retrieve");
        var columns = new Array();
        columns.type = "string";
        columns[0] = "defaultfilter";

        command.SetParameter("id", stemplateId);
        command.SetParameter("columns", columns);

        var oResult = command.Execute();
        if (oResult.Success) {
            var resultXml = XUI.Xml.LoadXml(oResult.ReturnValue);
            var defaultFilter = XUI.Xml.SelectSingleNode(resultXml, "/mailmergetemplate/defaultfilter", null);
            if (defaultFilter) {
                return XUI.Xml.GetText(defaultFilter);
            }
        } else {
            alert(LOCID_RETRIEVE_FAILED);
        }
        return "";
    }


    function setLayoutXml(sLayoutXml) {
        if ($get('radGlobalTemplate').checked) {
            _sGlobalLayoutXml = sLayoutXml;
        } else if ($get('radPersonalTemplate').checked) {
            _sPersonalLayoutXml = sLayoutXml;
        }


        _sLayoutXml = sLayoutXml;
    }


    function setSelectedColumns(numColumns) {

        if ($get('radNoTemplate').checked) {
            _iSelectedColumns = numColumns;
        } else if ($get('radGlobalTemplate').checked) {
            _iGlobalSelectedColumns = numColumns;
        } else if ($get('radPersonalTemplate').checked) {
            _iPersonalSelectedColumns = numColumns;
        }
    }


    function getSelectedColumns() {
        if ($get('radNoTemplate').checked) {
            return _iSelectedColumns;
        } else if ($get('radGlobalTemplate').checked) {
            return _iGlobalSelectedColumns;
        } else if ($get('radPersonalTemplate').checked) {
            return _iPersonalSelectedColumns;
        }
        return null;
    }


    function setColumnsLabel(numColumns) {
        var columnLable = document.getElementById("SelectedColumnsLabel");
        if (columnLable) {
            if (numColumns) {
                XUI.Html.SetText(columnLable, formatString(LOCID_COLUMNS_SELECTED, numColumns));
            } else {
                XUI.Html.SetText(columnLable, "");
            }
        }
    }


    function ViewUpdateColumns() {

        if ($get('radGlobalTemplate').checked) {
            if (IsNull(_globalLookup.get_dataValue())) {
                alert(LOCID_NOTEMPLATE_SELECTED);
                return;
            }
        } else if ($get('radPersonalTemplate').checked) {
            if (IsNull(_personalLookup.get_dataValue())) {
                alert(LOCID_NOTEMPLATE_SELECTED);
                return;
            }
        }


        var oArgs = new Object();
        oArgs.PrimaryEntityName = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(lookupObjectTypeName) %>;
        oArgs.ShowRelatedEntities = true;
        oArgs.bQuickFindMode = false;

        var _oFieldsXmlDom = XUI.Xml.LoadXml("<entities></entities>");

        var _oPropertiesXmlDom = XUI.Xml.LoadXml("<entities></entities>");

        var gridXml = getLayoutXml(true);
        if (IsNull(gridXml) || gridXml == "") {
            gridXml = XUI.Html.GetText(preDefaultGridXml);
        }
        var _oGridXmlDom = XUI.Xml.LoadXml(gridXml);

        var fetchXml = "<fetch><entity name=\"" +
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(lookupObjectTypeName)) %> +
            "\"><filter></filter></entity></fetch>";
        var _oFetchXmlDom = XUI.Xml.LoadXml(fetchXml);

        var _oEntitiesXmlDom = XUI.Xml.LoadXml(XUI.Html.GetText(preEntitiesXml));


        oArgs.FieldsXml = _oFieldsXmlDom;
        oArgs.FieldPropertiesXml = _oPropertiesXmlDom;
        oArgs.GridXml = _oGridXmlDom;
        oArgs.FetchXml = _oFetchXmlDom;
        oArgs.EntitiesXml = _oEntitiesXmlDom;

        var maxSelectedColumns = <%= MaxSelectedColumns %>;
        var oUrl = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx");
        oUrl.get_query()["mode"] = "select";
        oUrl.get_query()["maxcolumns"] = maxSelectedColumns;

        var parameters = new Array(maxSelectedColumns);
        var oURL = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx?mode=select&maxcolumns=" +
            CrmEncodeDecode.CrmUrlEncode(maxSelectedColumns));
        var crmDialog = new Mscrm.CrmDialog(oUrl, oArgs, 570, 400, null);
        crmDialog.setCallbackInfo("performActionAfterAddColumns", this, parameters);
        crmDialog.show();
    }

    function performActionAfterAddColumns(oFieldObjs, maxSelectedColumns) {
        if (oFieldObjs && oFieldObjs.GridXml) {
            gridXml = oFieldObjs.GridXml;
            var gridXmlDoc = XUI.Xml.LoadXml(gridXml);

            var columnCount = XUI.Xml.SelectNodes(gridXmlDoc.documentElement, "/grid/row/cell", null).length;
            if (columnCount > maxSelectedColumns) {
                alert(formatString(LOCID_MAXCOLUMN_ERROR, maxSelectedColumns, columnCount));
                return;
            }

            setSelectedColumns(columnCount);


            setLayoutXml(gridXml);


            updateUIState();
        }
    }
</script>
</head>
<body>
<div class="LeftSpace">
    <pre id="preEntitiesXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_entitiesXml) %></pre>
    <pre id="preDefaultGridXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_defaultGridXml) %></pre>
    <div style="height: 15px">
        &nbsp;
    </div>

    <% if (languageCount > 1)
       { %>
        <div>
            <span id="LanguageSpan">
                <table style="width: 100%; table-layout: fixed">
                    <col width="30%"/> <col/>
                    <tr class="main">
                        <td>
                            <loc:Text ResourceId="web._grid.cmds.dlg_webmailmerge.aspx_language" runat="server"/>:
                        </td>
                        <td>
                            <sdk:LanguagePicker id="Language" runat="server"/>
                        </td>
                    </tr>
                </table>
            </span>
        </div>
        <div>
            <span id="LanguageHrSpan">
                <hr/>
            </span>
        </div>
    <% } %>

    <div>
        <div style="width: 100%" class="main">

            <label class="ms-crm-Bold-Header">
                <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_lable_Select_template"
                          runat="server"/>
            </label>
        </div>
        <div>
            <table style="width: 100%; table-layout: fixed">
                <col width="26"/>
                <col/>

                <tr>
                    <td>
                        <input class="radio" type="radio" id="radNoTemplate" name="rad1Group" onclick="updateUIState()"
                               <%= (CanMailMerge) ? "editable checked" : "disabled" %>>
                    </td>
                    <td>
                        <label for="radNoTemplate">
                            <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_blank"
                                      runat="server"/>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td>
                        <input class="radio" type="radio" id="radGlobalTemplate" name="rad1Group" onclick="updateUIState()"
                               <%= (CanMailMerge) ? "editable" : "disabled" %>>
                    </td>
                    <td>
                        <table style="width: 100%; table-layout: fixed">
                            <tr>
                                <td>
                                    <label for="radGlobalTemplate">
                                        <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_global"
                                                  runat="server"/>
                                    </label>
                                </td>
                                <td>
                                    <sdk:LookupControl id="GlobalLookup" DefaultViewId="0B3B7555-623F-49a7-9802-8BA647EAC6C4" runat="server"/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td>
                        <input class="radio" type="radio" id="radPersonalTemplate" name="rad1Group"
                               onclick="updateUIState()" <%= (CanMailMerge) ? "editable" : "disabled" %>>
                    </td>
                    <td>
                        <table style="width: 100%; table-layout: fixed">
                            <tr>
                                <td>
                                    <label for="radPersonalTemplate">
                                        <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_personal" runat="server"/>
                                    </label>
                                </td>
                                <td>
                                    <sdk:LookupControl id="PersonalLookup" DefaultViewId="8205C948-B678-458d-A1F0-FF5E1F0C04D3" runat="server"/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div>
        <hr/>
    </div>


    <div>
        <table style="width: 100%; table-layout: fixed">
            <tr class="main">
                <td>

                    <label class="ms-crm-Bold-Header">
                        <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_FieldSelect_heading" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_FieldSelect_description" runat="server"/>
                </td>
            </tr>
            <tr>
                <td>
                    <table style="width: 100%">
                        <col width="30%"/><col/>
                        <tr>
                            <td CLASS="HtmlBar_AddTextButton_td">
                                <ui:Button ID="ViewOrUpdateButton" OnClick="ViewUpdateColumns();" runat=server> </ui:Button>
                            </td>
                            <td>
                                <ui:LabelUI ID="SelectedColumnsLabel" runat=server> </ui:LabelUI>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>

    <div style="height: 0px" style="display: none">
        <form id="downloadMailMerge" name="downloadMailMerge" action="" method="post">
            <input type="hidden" id="ids" name="ids"/>
            <input type="hidden" id="gridxml" name="gridxml"/>
            <input type="hidden" id="layoutxml" name="layoutxml"/>
        </form>
    </div>
</div>
</body>
</html>