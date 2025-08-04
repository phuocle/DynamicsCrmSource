<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.SimilarityRules.SimilarityRuleDetailPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript">

        var aspxVars_utilNoneEntityCode =
            <%= Microsoft.Crm.Util.None.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
        var aspxVars_IsSimilarityRuleActivated =
            <%= ((this.CurrentEntity["statecode"] == SimilarityRuleState.Active.ToString()) ? "'true'" : "'false'") %>;
        var aspxVars_isNewform = <%= ((CurrentForm.State == FormState.New) ? "'true'" : "'false'") %>;
        var aspxVars_DraftStateCode =
            <%= ((int) SimilarityRuleState.Draft).ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
        var aspxVars_CurrentEntityId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(this.CurrentEntity.Id) %>;
        var aspxVars_SimilarityRule =
            <%= Microsoft.Crm.Util.SimilarityRule.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;

        Sys.Application.add_load(PageLoad);
        Sys.Application.add_unload(PageUnload);

        function PageLoad() {

            $addHandler($get('crmFormSubmit'), "submit", onSaveRule);

            $find("crmForm").add_onSave(ForceSubmitRuleForm);

            var baseEntityType = $get("baseentitytypecode");
            previousBaseRecordValue = baseEntityType.value;

            var matchingEntityType = $get("matchingentitytypecode");
            $addHandler(matchingEntityType, "change", onMatchingRecordTypeChange);
            previousMatchingRecordValue = matchingEntityType.value;

            var excludeInactiveRecordsCheckBox = $get("excludeinactiverecords");
            if (excludeInactiveRecordsCheckBox) {
                excludeInactiveRecordsCheckBox.title = LOCID_EXCLUDE_INACTIVE_TOOLTIP;
            }
        }

        function PageUnload() {
            $removeHandler($get('crmFormSubmit'), "submit", onSaveRule);
            $removeHandler($get("matchingentitytypecode"), "change", onMatchingRecordTypeChange);
        }
    </script>
    <style type="text/css">
        .ms-crm-Form-Nav-Container {
            padding-top: 4px;
            width: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
        }

        .ms-crm-NRForm-Main-Container {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% }
               else
               { %>
            left: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% } %>
        }

        .ms-crm-Form-StatusBar { line-height: 24px; }

        #areaAsyncOperations,
        #areaAudit {
            position: absolute;
            width: 100%;
        }
    </style>
</head>
<body scroll="no">
<div class="ms-crm-Form-Layout">
    <div style="height: 98px">
        <div>
            <mnu:appformmenubar id="crmMenuBar" runat="server"/>
        </div>
    </div>
    <div id="areaForm" class="ms-crm-NRForm-Background">
        <frm:crudform id="crmForm" runat="server"/>
    </div>
    <div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
        <sdk:renderstatuscontrol id="crmRenderStatus" runat="server"/>
    </div>
</div>
</body>
</html>