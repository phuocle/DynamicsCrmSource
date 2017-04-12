<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.WebMailMerge" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<% if (Util.IsForOutlookClient())
   { %>
    <object id="_oMailMerge" classid='clsid:E19EA63A-8B6F-4AA3-9013-3DE5EBAFD7BF' style='display: none'></object>
<% } %>
<script language="javascript">


    var _iTotalRecords;
    var _iSelectedRecords;
    var _aIds;
    var _oGridXml;


    var _sLayoutXml;
    var _iSelectedColumns;


    var _sGlobalTemplateId;
    var _sGlobalLayoutXml;
    var _iGlobalSelectedColumns;


    var _sPersonalTemplateId;
    var _sPersonalLayoutXml;
    var _iPersonalSelectedColumns;

    var _globalLookup = null;
    var _personalLookup = null;

    var radCurrentSelection = null;
    var radCurrentPage = null;
    var radCurrentQuery = null;
    var radGlobalTemplate = null;
    var radNoTemplate = null;
    var radPersonalTemplate = null;

    Sys.Application.add_load(function() {
        <% if (Util.IsForOutlookClient())
           { %>
        try {
            _oMailMerge.Initialize();
        } catch (e) {
        }
        <% } %>

        radCurrentSelection = $get('radCurrentSelection');
        radCurrentPage = $get('radCurrentPage');
        radCurrentQuery = $get('radCurrentQuery');
        radGlobalTemplate = $get('radGlobalTemplate');
        radNoTemplate = $get('radNoTemplate');
        radPersonalTemplate = $get('radPersonalTemplate');

        <% if (String.IsNullOrEmpty(objectId))
           { %>



        <% if (String.IsNullOrEmpty(Request.QueryString["Id"]))
           { %>

        var oArgs = getDialogArguments();
        with (oArgs) {
            _iTotalRecords = TotalRecords;
            _iSelectedRecords = SelectedRecords;
            _aIds = Ids;
            _oGridXml = GridXml;
        }

        <% }
           else
           { %>

        _iTotalRecords = 1;
        _iSelectedRecords = 1;
        _aIds = <%= CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["Id"]) %>;
        _oGridXml = "";

        <% } %>

        if (_iSelectedRecords > 0) {
            radCurrentSelection.checked = true;
            if (_iTotalRecords == 1) {
                radCurrentPage.disabled = true;
                radCurrentQuery.disabled = true;
            }
        } else if (_iSelectedRecords == 0) {
            radCurrentSelection.disabled = true;
            radCurrentPage.disabled = true;
            radCurrentQuery.disabled = true;
        }
        <% } %>

        _globalLookup = Mscrm.FormControlInputBehavior.GetBehavior('GlobalLookup');
        _personalLookup = Mscrm.FormControlInputBehavior.GetBehavior('PersonalLookup');

        _globalLookup.add_change(handleLookChange);
        _personalLookup.add_change(handleLookChange);


        _globalLookup.AddParam("parentType", <%= lookupObjectTypeCode %>);
        _personalLookup.AddParam("parentType", <%= lookupObjectTypeCode %>);


        $get('butBegin').disabled = true;

        var languageElement = document.getElementById("Language");
        if (IsNull(languageElement)) {

            _globalLookup.AddParam("languagecode", <%= defaultLanguage %>);
            _personalLookup.AddParam("languagecode", <%= defaultLanguage %>);
        } else {
            $addHandler($get('Language'), 'change', handleLanguageChange);
            handleLanguageChange();
        }


        updateUIState();
    });


    function cancel() {
        closeWindow();
    }


    function applychanges() {

        if (!validateInputs()) {

            return;
        }


        var templateId = getTemplateId();


        var layoutXml = getLayoutXml(false);
        if (!IsNull(layoutXml) && layoutXml != "") {
            $get('layoutxml').value = layoutXml;
        }


        if (!IsNull(_oGridXml)) {
            $get('gridxml').value = _oGridXml;
        }


        var queryString = "otc=" + "<%= objectTypeCode %>";
        var languageid = getLanguage();
        var currentPage = false;

        if (!IsNull(languageid)) {
            queryString += "&languageid=" + CrmEncodeDecode.CrmUrlEncode(languageid);
        }

        if (!IsNull(templateId)) {
            queryString += "&templateid=" + CrmEncodeDecode.CrmUrlEncode(templateId);
        }


        var mergeType = $get('MergeTypePicklist').value;
        queryString += "&mergetype=" + CrmEncodeDecode.CrmUrlEncode(mergeType);


        if (!IsNull(_aIds) && radCurrentSelection.checked) {
            $get('ids').value = _aIds;
        } else if (radCurrentPage.checked) {
            currentPage = true;
            queryString += "&currentpage=" + CrmEncodeDecode.CrmUrlEncode(true);
        }

        <% if (!String.IsNullOrEmpty(objectId))
           { %>
        queryString += "&oid=" +
            CrmEncodeDecode.CrmUrlEncode(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectId) %>);
        <% } %>

        try {
            <% if (Util.IsForOutlookClient())
               { %>

            if (IsNull(languageid)) {
                languageid = <%= defaultLanguage %>;
            }
            if (IsNull(layoutXml)) {
                layoutXml = "";
            }
            if (IsNull(templateId)) {
                templateId = "";
            }
            if (!radCurrentSelection.checked) {
                _aIds = "";
            }
            var quickCampaingName = "";

            if (IsNull(_aIds)) {
                _aIds = "";
            }
            if (IsNull(_oGridXml)) {
                _oGridXml = "";
            }


            var runMailMergeInCurrentProcess;
            try {
                runMailMergeInCurrentProcess = getOutlookHostedWindow()
                    .DoMailMerge(<%= objectTypeCode %>,
                        <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectId) %>,
                        <%= lookupObjectTypeCode %>,
                        languageid,
                        templateId,
                        currentPage,
                        _aIds,
                        _oGridXml,
                        layoutXml,
                        mergeType,
                        quickCampaingName);
            } catch (e) {


                runMailMergeInCurrentProcess = true;
            }

            if (runMailMergeInCurrentProcess) {

                _oMailMerge.DoMailMerge(<%= objectTypeCode %>,
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectId) %>,
                    <%= lookupObjectTypeCode %>,
                    languageid,
                    templateId,
                    currentPage,
                    _aIds,
                    _oGridXml,
                    layoutXml,
                    mergeType,
                    quickCampaingName);
            }

            <% }
               else
               { %>

            $get('downloadMailMerge').action = Mscrm.CrmUri.create("/tools/mailmerge/download.aspx?" + queryString)
                .toString();
            $get('downloadMailMerge').submit();
            <% } %>
        } catch (e) {
            alert(LOCID_MAILMERGE_ERROR);
            throw e;
        }



        <% if (Util.IsForOutlookClient())
           { %>

        closeWindow();
        <% } %>
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


    function handleLookChange(sender, args) {
        var stemplateId;
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
        if (radNoTemplate.checked) {

            _globalLookup.set_disabled(true);
            _personalLookup.set_disabled(true);


            $get('butBegin').disabled = false;
        } else if (radGlobalTemplate.checked) {

            _globalLookup.set_disabled(false);
            _personalLookup.set_disabled(true);


            $get('butBegin').disabled = false;
        } else if (radPersonalTemplate.checked) {

            _globalLookup.set_disabled(true);
            _personalLookup.set_disabled(false);


            $get('butBegin').disabled = false;
        }


        setColumnsLabel(getSelectedColumns());

        <% if (!String.IsNullOrEmpty(objectId))
           { %>

        var ele = document.getElementById("RecordSelectionSpan");
        ele.style.display = "none";
        var ele = document.getElementById("RecordSelectionSeperatorSpan");
        ele.style.display = "none";
        <% } %>

        <% if (doNotShowMergeType)
           { %>

        var ele = document.getElementById("MergeTypeSpan");
        ele.style.display = "none";
        var ele = document.getElementById("MergeTypeHrSpan");
        ele.style.display = "none";
        <% } %>
    }


    function validateInputs() {
        if (radGlobalTemplate.checked) {
            if (IsNull(_globalLookup.get_dataValue())) {

                alert(LOCID_NOTEMPLATE_SELECTED);
                return false;
            }
        } else if (radPersonalTemplate.checked) {
            var dataValue = _personalLookup.get_dataValue();
            if (IsNull(dataValue)) {

                alert(LOCID_NOTEMPLATE_SELECTED);
                return false;
            }
            templateId = dataValue[0].id;
        }

        return true;
    }


    function getLanguage() {

        var languageElementControl = Mscrm.FormControlInputBehavior.GetBehavior('Language');
        if (!IsNull(languageElementControl)) {
            return languageElementControl.get_dataValue();
        }

        return <%= defaultLanguage %>;
    }


    function getTemplateId() {

        var templateId = "";
        if (radGlobalTemplate.checked) {
            var dataValue = _globalLookup.get_dataValue();
            if (IsNull(dataValue)) {

                alert(LOCID_NOTEMPLATE_SELECTED);
                return;
            }
            templateId = dataValue[0].id;
        } else if (radPersonalTemplate.checked) {
            var value = _personalLookup.get_dataValue();
            if (IsNull(value)) {

                alert(LOCID_NOTEMPLATE_SELECTED);
                return;
            }
            templateId = value[0].id;
        }
        return templateId;
    }


    function getLayoutXml(bfetch) {
        var stemplateId;
        if (radNoTemplate.checked) {
            return _sLayoutXml;
        } else if (radGlobalTemplate.checked) {
            if (!bfetch) {
                return _sGlobalLayoutXml;
            }


            if (!IsNull(_sGlobalLayoutXml) && (_sGlobalLayoutXml != "")) {
                return _sGlobalLayoutXml;
            }

            stemplateId = _sGlobalTemplateId;
        } else if (radPersonalTemplate.checked) {
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
        if (radGlobalTemplate.checked) {
            _sGlobalLayoutXml = sLayoutXml;
        } else if (radPersonalTemplate.checked) {
            _sPersonalLayoutXml = sLayoutXml;
        }


        _sLayoutXml = sLayoutXml;
    }


    function setSelectedColumns(numColumns) {

        if (radNoTemplate.checked) {
            _iSelectedColumns = numColumns;
        } else if (radGlobalTemplate.checked) {
            _iGlobalSelectedColumns = numColumns;
        } else if (radPersonalTemplate.checked) {
            _iPersonalSelectedColumns = numColumns;
        }
    }


    function getSelectedColumns() {
        if (radNoTemplate.checked) {
            return _iSelectedColumns;
        } else if (radGlobalTemplate.checked) {
            return _iGlobalSelectedColumns;
        } else if (radPersonalTemplate.checked) {
            return _iPersonalSelectedColumns;
        }
        return null;
    }


    function setColumnsLabel(numColumns) {
        var columnLable = document.getElementById("SelectedColumnsLabel");
        if (columnLable) {
            if (numColumns) {
                XUI.Html.SetText(columnLable, formatString(LOCID_COLUMNS_SELECTED, numColumns))
            } else {
                XUI.Html.SetText(columnLable, "");
            }
        }
    }


    function ViewUpdateColumns() {

        if (radGlobalTemplate.checked) {
            if (IsNull(_globalLookup.get_dataValue())) {
                alert(LOCID_NOTEMPLATE_SELECTED);
                return;
            }
        } else if (radPersonalTemplate.checked) {
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
            gridXml = XUI.Html.GetText($get("preDefaultGridXml"));
        }
        var _oGridXmlDom = XUI.Xml.LoadXml(gridXml);

        var fetchXml = "<fetch><entity name=\"" +
            CrmEncodeDecode
            .CrmXmlAttributeEncode(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(lookupObjectTypeName) %>) +
            "\"><filter></filter></entity></fetch>";
        var _oFetchXmlDom = XUI.Xml.LoadXml(fetchXml);

        var _oEntitiesXmlDom = XUI.Xml.LoadXml(XUI.Html.GetText($get("preEntitiesXml")));


        oArgs.FieldsXml = _oFieldsXmlDom;
        oArgs.FieldPropertiesXml = _oPropertiesXmlDom;
        oArgs.GridXml = _oGridXmlDom;
        oArgs.FetchXml = _oFetchXmlDom;
        oArgs.EntitiesXml = _oEntitiesXmlDom;

        var maxSelectedColumns = <%= MaxSelectedColumns %>;
        var parameters = new Array(maxSelectedColumns);
        var oURL = Mscrm.CrmUri
            .create("/Tools/ViewEditor/Dialogs/AddColumns.aspx?mode=select&frommailmerge=1&maxcolumns=" +
                CrmEncodeDecode.CrmUrlEncode(maxSelectedColumns));
        var crmDialog = new Mscrm.CrmDialog(oURL, oArgs, 570, 450, null);
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

<pre id="preEntitiesXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_entitiesXml) %></pre>
<pre id="preDefaultGridXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_defaultGridXml) %></pre>
<table width="100%" cellpadding="8">
<% if (languageCount > 1)
   { %>

    <tr>
        <td>
            <span id="LanguageSpan">
                <table width="100%" style="table-layout: fixed">
                    <col width="30%"/> <col/>
                    <tr class="main">
                        <td>
                            <label for="Language">
                            <loc:Text ResourceId="web._grid.cmds.dlg_webmailmerge.aspx_language" runat="server"/>
                        </td>
                        <td>
                            <sdk:LanguagePicker id="Language" AutoRegisterClientComponent="false" runat="server"/>
                            <script language="javascript">crmCreate(Mscrm.FormInputControl
    .SelectInputBehavior,
    {},
    null,
    null,
    $get('Language'));</script>
                        </td>
                    </tr>
                </table>
            </span>
        </td>
    </tr>
    <tr>
        <td style="padding: 0px;">
            <span id="LanguageHrSpan">
                <hr/>
            </span>
        </td>
    </tr>
<% } %>

<tr>
    <td>
        <span id="MergeTypeSpan">
            <table width="100%" style="table-layout: fixed">
                <col width="40%"/> <col/>
                <tr class="main">
                    <td>

                        <label class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="web._grid.cmds.dlg_webmailmerge.aspx_mergetype" runat="server"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <sdk:PicklistControl id="MergeTypePicklist" runat="server"/>
                    </td>
                </tr>
            </table>
        </span>
    </td>
</tr>
<tr>
    <td style="padding: 0px;">
        <span id="MergeTypeHrSpan">
            <hr/>
        </span>
    </td>
</tr>

<tr>
    <td>
        <table width="100%" style="table-layout: fixed">
            <tr class="main">
                <td>

                    <label class="ms-crm-Bold-Header">
                        <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_lable_Select_template"
                                  runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" style="table-layout: fixed">
                        <col width="26"/>
                        <col/>

                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radNoTemplate" name="rad1Group" onclick="updateUIState()"
                                       <%= (CanMailMerge) ? "editable checked" : "disabled" %>>
                            </td>
                            <td>
                                <table width="100%" style="table-layout: fixed">
                                    <tr>
                                        <td>
                                            <label for="radNoTemplate">
                                                <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_blank"
                                                          runat="server"/>
                                            </label>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input class="radio" type="radio" id="radGlobalTemplate" name="rad1Group" onclick="updateUIState()"
                                       <%= (CanMailMerge) ? "editable" : "disabled" %>>
                            </td>
                            <td>
                                <table width="100%" style="table-layout: fixed">
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
                                <table width="100%" style="table-layout: fixed">
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
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td style="padding: 0px;">
        <hr/>
    </td>
</tr>

<tr>
    <td>
        <span id="RecordSelectionSpan">
            <table width="100%" style="table-layout: fixed">
                <tr class="main">

                    <td>
                        <label class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_lable_Select_record"
                                      runat="server"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" style="table-layout: fixed">
                            <col width="26"/>
                            <col/>

                            <tr>
                                <td>
                                    <input class="radio" type="radio" id="radCurrentSelection" name="rad2Group" onclick="updateUIState()"
                                           <%= (CanMailMerge) ? "editable checked" : "disabled" %>>
                                </td>
                                <td>
                                    <table width="100%" style="table-layout: fixed">
                                        <tr>
                                            <td>
                                                <label for="radCurrentSelection">
                                                    <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_Select_record"
                                                              runat="server"/>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input class="radio" type="radio" id="radCurrentPage" name="rad2Group" onclick="updateUIState()"
                                           <%= (CanMailMerge) ? "editable" : "disabled" %>>
                                </td>
                                <td>
                                    <table width="100%" style="table-layout: fixed">
                                        <tr>
                                            <td>
                                                <label for="radCurrentPage">
                                                    <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_Select_page"
                                                              runat="server"/>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input class="radio" type="radio" id="radCurrentQuery" name="rad2Group" onclick="updateUIState()"
                                           <%= (CanMailMerge) ? "editable" : "disabled" %>>
                                </td>
                                <td>
                                    <table width="100%" style="table-layout: fixed">
                                        <tr>
                                            <td>
                                                <label for="radCurrentQuery">
                                                    <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_Select_query" runat="server"/>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </span>
    </td>
</tr>
<tr>
    <td style="padding: 0px;">
        <span id="RecordSelectionSeperatorSpan">
            <hr/>
        </span>
    </td>
</tr>

<tr>
    <td>
        <table width="100%" style="table-layout: fixed">
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
                    <table width="100%">
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
    </td>
</tr>
<tr height="0" style="display: none">
    <td>
        <form id="downloadMailMerge" name="downloadMailMerge" action="" method="post">
            <input type="hidden" id="ids" name="ids"/>
            <input type="hidden" id="gridxml" name="gridxml"/>
            <input type="hidden" id="layoutxml" name="layoutxml"/>
        </form>
    </td>
</tr>
</table>