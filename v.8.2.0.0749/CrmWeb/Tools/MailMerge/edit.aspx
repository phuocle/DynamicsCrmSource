<%@ Page language="c#" Inherits="Microsoft.Crm.Web.BusinessManagement.MailMergeTemplateDetailPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server"/>

<% if (Microsoft.Crm.Application.Utility.Util.IsForOutlookClient())
   { %>
    <object id="_oMailMerge" classid='clsid:E19EA63A-8B6F-4AA3-9013-3DE5EBAFD7BF' style='display: none'></object>
<% } %>
<script type="text/javascript">
    Sys.Application.add_load(function() {
        $find("crmForm").detachCloseAlert();
        attachWindowOnBeforeUnload(attachmentClose);

        var attachments = $get("Attachments");
        var popupErrorUrlValue = attachments.PopupErrorUrl.value;
        if (popupErrorUrlValue != "") {
            attachments.PopupErrorUrl.value = "";
            openStdDlg(popupErrorUrlValue, 'window1', 350, 250, true, false, null);
        }
    });

    function doMailMerge() {
        if ($find("crmForm").get_isDirty()) {
            alert(LOCID_LAUNCHWORD_DIRTY);
            return;
        }

        var objectType = <%= objectType %>;
        var objectId = "";
        <% if (objectType == Util.Quote)
           { %>
        objectId = "{00000000-0000-0000-0000-000000000000}";
        <% } %>
        var lookupObjectType = <%= objectType %>;
        var languageId = getLanguage();
        var templateId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectId) %>;
        var currentPage = false;
        var ids = "{00000000-0000-0000-0000-000000000000}";
        var gridXml = "";
        var layoutXml = $get("defaultfilter").value;
        var mergeType = -1;
        var quickCampaignName = "";

        <% if (Microsoft.Crm.Application.Utility.Util.IsForOutlookClient())
           { %>

        var runMailMergeInCurrentProcess;
        try {
            runMailMergeInCurrentProcess = getOutlookHostedWindow()
                .DoMailMerge(objectType,
                    objectId,
                    lookupObjectType,
                    languageId,
                    templateId,
                    currentPage,
                    ids,
                    gridXml,
                    layoutXml,
                    mergeType,
                    quickCampaignName);
        } catch (e) {


            runMailMergeInCurrentProcess = true;
        }

        if (runMailMergeInCurrentProcess) {

            _oMailMerge.DoMailMerge(objectType,
                objectId,
                lookupObjectType,
                languageId,
                templateId,
                currentPage,
                ids,
                gridXml,
                layoutXml,
                mergeType,
                quickCampaignName);
        }

        <% }
           else
           { %>
        var queryString = "otc=" + CrmEncodeDecode.CrmUrlEncode(objectType);
        queryString += "&mergetype=" + CrmEncodeDecode.CrmUrlEncode(mergeType);
        queryString += "&languageid=" + CrmEncodeDecode.CrmUrlEncode(languageId);
        queryString += "&templateid=" + CrmEncodeDecode.CrmUrlEncode(templateId);
        queryString += "&currentpage=" + CrmEncodeDecode.CrmUrlEncode(currentPage);

        if (!IsNull(objectId) && objectId != "") {
            queryString += "&oid=" + CrmEncodeDecode.CrmUrlEncode(objectId);
        }
        var downloadMailMerge = $get("downloadMailMerge");
        downloadMailMerge.layoutxml.value = layoutXml;
        downloadMailMerge.gridxml.value = gridXml;
        downloadMailMerge.ids.value = ids;


        downloadMailMerge.action = Mscrm.CrmUri.create("/tools/mailmerge/download.aspx?" + queryString).toString();
        downloadMailMerge.submit();
        <% } %>
    }

    function getLanguage() {
        var language = $get("languagecode");
        if (!IsNull(language)) {
            return language.value;
        }
        return 0;
    }


    function setColumnsLabel(numColumns) {
        var columnLable = $get("SelectedColumnsLabel");
        if (columnLable) {
            XUI.Html.SetText(columnLable,
                formatString(LOCID_COLUMNS_SELECTED_SAVE, IsNull(numColumns) ? LOCID_COLUMNS_DEFAULT : numColumns));
        }
    }


    function ViewUpdateColumns() {
        var oArgs = new Object();
        oArgs.PrimaryEntityName = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectTypeName) %>;
        oArgs.ShowRelatedEntities = true;
        oArgs.bQuickFindMode = false;

        var _oFieldsXmlDom = XUI.Xml.LoadXml("<entities></entities>");

        var _oPropertiesXmlDom = XUI.Xml.LoadXml("<entities></entities>");

        var gridXml = $get("defaultfilter").value;
        var preDefaultGridXml = $get("preDefaultGridXml");
        if (IsNull(gridXml) || gridXml == "") {
            gridXml = XUI.Html.GetText(preDefaultGridXml);
        }
        var _oDefaultGridXmlDom = XUI.Xml.LoadXml(XUI.Html.GetText(preDefaultGridXml));
        var _oGridXmlDom = XUI.Xml.LoadXml(gridXml);

        var fetchXml = "<fetch><entity name=\"" +
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectTypeName) %> +
            "\"><filter></filter></entity></fetch>";
        var _oFetchXmlDom = XUI.Xml.LoadXml(fetchXml);

        var _oEntitiesXmlDom = XUI.Xml.LoadXml(XUI.Html.GetText($get("preEntitiesXml")));


        oArgs.FieldsXml = _oFieldsXmlDom;
        oArgs.FieldPropertiesXml = _oPropertiesXmlDom;
        oArgs.GridXml = _oGridXmlDom;
        oArgs.FetchXml = _oFetchXmlDom;
        oArgs.EntitiesXml = _oEntitiesXmlDom;

        var maxSelectedColumns = <%= MaxSelectedColumns %>;
        var oURL = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx?mode=select&maxcolumns=" +
            CrmEncodeDecode.CrmUrlEncode(maxSelectedColumns));
        var parameters = new Array(maxSelectedColumns, _oDefaultGridXmlDom);
        var crmDialog = new Mscrm.CrmDialog(oURL, oArgs, 570, 400, null);
        crmDialog.setCallbackInfo("performActionAfterAddColumns", this, parameters);
        crmDialog.show();
    }

    function performActionAfterAddColumns(oFieldObjs, maxSelectedColumns, oDefaultGridXmlDom) {
        if (oFieldObjs && oFieldObjs.GridXml) {
            gridXml = oFieldObjs.GridXml;
            var gridXmlDoc = XUI.Xml.LoadXml(gridXml);

            var columnCount = XUI.Xml.SelectNodes(gridXmlDoc.documentElement, "/grid/row/cell", null).length;
            if (columnCount > maxSelectedColumns) {
                alert(formatString(LOCID_MAXCOLUMN_ERROR, maxSelectedColumns, columnCount));
                return;
            }


            if (gridXml != XUI.Xml.XMLSerializer.serializeToString(oDefaultGridXmlDom.documentElement)) {
                setColumnsLabel(columnCount);


                var columnSetXmlNodeControl = Mscrm.FormControlInputBehavior.GetBehavior("defaultfilter");
                if (columnSetXmlNodeControl) {
                    columnSetXmlNodeControl.set_dataValue(gridXml);
                    columnSetXmlNodeControl.set_doNotSubmit(false);
                }
            }
        }
    }


    function publishTemplate() {
        if ($find("crmForm").get_isDirty()) {
            alert(LOCID_PUBLISHTEMPLATE_DIRTY);
        } else {
            var oArgs = new Object();
            var ruleIdArray = new Array(1);
            ruleIdArray[0] = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(this.CurrentEntity.Id) %>;
            oArgs.Ids = ruleIdArray;

            var callbackFunction = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterPublishTemplate", this);
            var ret = openStdDlgWithCallback(Mscrm.CrmUri.create("/_grid/cmds/dlg_publishmailmergetemplate.aspx"),
                oArgs.Ids,
                650,
                200,
                callbackFunction,
                true,
                false,
                "maximize:yes;minimize:yes");
            if (isOutlookHostedWindow()) {
                performActionAfterPublishTemplate(ret);
            }
        }
    }

    function performActionAfterPublishTemplate(ret) {
        if (ret == true) {

            try {
                window.opener
                    .auto(<%= Microsoft.Crm.Util.MailMergeTemplate.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>);
            } catch (e) {
            }


            location.reload();
        }
    }


    function unpublishTemplate() {
        if ($find("crmForm").get_isDirty()) {
            alert(LOCID_UNPUBLISHTEMPLATE_DIRTY);
        } else {
            var oArgs = new Object();
            var ruleIdArray = new Array(1);
            ruleIdArray[0] = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(this.CurrentEntity.Id) %>;
            oArgs.Ids = ruleIdArray;
            var callbackFunction = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterUnpublishTemplate", this);
            var ret = openStdDlgWithCallback(Mscrm.CrmUri.create("/_grid/cmds/dlg_unpublishmailmergetemplate.aspx"),
                oArgs.Ids,
                650,
                200,
                callbackFunction,
                true,
                false,
                "maximize:yes;minimize:yes");
            if (isOutlookHostedWindow()) {
                performActionAfterUnpublishTemplate(ret);
            }
        }
    }

    function performActionAfterUnpublishTemplate(ret) {
        if (ret == true) {

            try {
                window.opener
                    .auto(<%= Microsoft.Crm.Util.MailMergeTemplate.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>);
            } catch (e) {
            }


            location.reload();
        }
    }

</script>
<style type="text/css">
    DIV.ms-crm-FormBodyContainer { position: absolute; }

    DIV.ms-crm-absPosition {
        position: absolute;
        width: 100%;
    }

    table.ms-crm-SelectDataFieldsTable {
        table-layout: fixed;
        width: 100%;
    }

    DIV.ms-crm-MenuBar { height: 34px; }

    LI.ms-crm-Menu-Spacer { padding-top: 0px; }
</style>
</head>
<body scrollbar="no">
<pre id="preEntitiesXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_entitiesXml) %></pre>
<pre id="preDefaultGridXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_defaultGridXml) %></pre>
<div class="ms-crm-absPosition" style="height: 100%;">
<div class="ms-crm-Form-MenuBarRow ms-crm-absPosition" style="height: 98px; top: 0px;">
    <mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
</div>
<div class="ms-crm-absPosition" style="top: 98px; bottom: 0px;">
<% if (!isNew)
   { %>
<div class="ms-crm-absPosition" style="top: 0px; bottom: 150px">
<% }
   else
   { %>
<div class="ms-crm-absPosition" style="top: 0px; bottom: 110px">
    <% } %>
    <div id="tdAreas" class="ms-crm-Form-Background" style="width: 100%; height: 100%">
        <div id="areaForm" class="ms-crm-Form-Area">
            <frm:CrudForm id="crmForm" runat="server"/>
        </div>
    </div>
</div>
    <% if (!isNew)
       { %>
<div class="ms-crm-absPosition" style="bottom: 0px; height: 150px">

    <div>

        <label class="ms-crm-Bold-Header">
            <loc:Text ResourceId="Web._grid.cmds.dlg_webmailmerge.aspx_FieldSelect_heading" runat="server"/>
        </label>
    </div>
    <div>
        <hr/>
    </div>
    <div>
        <table class="ms-crm-SelectDataFieldsTable">
            <col class="select_fields_col_1"/><col/>
            <tr>
                <td class="HtmlBar_AddTextButton_td">
                    <ui:Button ID="ViewOrUpdateButton" OnClick="ViewUpdateColumns();" runat=server> </ui:Button>
                </td>
                <td>
                    <ui:LabelUI ID="SelectedColumnsLabel" runat=server> </ui:LabelUI>
                </td>
            </tr>
        </table>
    </div>

    <% }
       else
       { %>
    <div class="ms-crm-absPosition" style="bottom: 0px; height: 110px">

        <% } %>
        <div>
            <cnt:AppAttachment id="crmAttachment" runat="server"/>
        </div>
        <div class="ms-crm-Form-StatusBar">
            <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
        </div>
        <div style="display: none">
            <form id="downloadMailMerge" name="downloadMailMerge" action="" method="post">
                <input type="hidden" id="ids" name="ids"/>
                <input type="hidden" id="gridxml" name="gridxml"/>
                <input type="hidden" id="layoutxml" name="layoutxml"/>
            </form>
        </div>
    </div>
    </div>
</body>
</html>