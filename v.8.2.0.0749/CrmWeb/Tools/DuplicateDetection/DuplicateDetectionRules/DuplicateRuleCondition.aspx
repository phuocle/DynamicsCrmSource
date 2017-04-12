<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.DuplicateRuleConditionPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>

<html xmlns:Crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript" language="Javascript">
        var aspxVars_iMaxMatchCodeLength =
            <%= Microsoft.Crm.DuplicateDetectionConstants.MaximumMatchcodeLength.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
        var aspxVars_iDateOnlyMatchCodeLength =
            <%= Microsoft.Crm.Sdk.CrmDateTime.Now.UniversalTime.ToShortDateString().Length.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
        var aspxVars_isConditionXmlNullOrEmpty = <%= ((string.IsNullOrEmpty(ConditionXml)) ? "'true'" : "'false'") %>;
        var aspxVars_conditionXml =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ConditionXml + String.Empty) %>;
        var aspxVars_operatorEquals =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) DuplicateRuleOperator.Equals]) %>;
        var aspxVars_operatorEqualsLabel =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(OperatorUIData.PicklistOptions[(int) DuplicateRuleOperator.Equals].Labels.GetLabel(LanguageCode, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %>;
        var aspxVars_operatorFirstN =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) DuplicateRuleOperator.FirstN]) %>;
        var aspxVars_operatorFirstNLabel =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(OperatorUIData.PicklistOptions[(int) DuplicateRuleOperator.FirstN].Labels.GetLabel(LanguageCode, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %>;
        var aspxVars_operatorLastN =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) DuplicateRuleOperator.LastN]) %>;
        var aspxVars_operatorLastNLabel =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(OperatorUIData.PicklistOptions[(int) DuplicateRuleOperator.LastN].Labels.GetLabel(LanguageCode, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %>;
        var aspxVars_operatorEqualsDateOnly =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) DuplicateRuleOperator.EqualsDateOnly]) %>;
        var aspxVars_operatorEqualsDateOnlyLabel =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(OperatorUIData.PicklistOptions[(int) DuplicateRuleOperator.EqualsDateOnly].Labels.GetLabel(LanguageCode, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %>;
        var aspxVars_operatorEqualsDateAndTime =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) DuplicateRuleOperator.EqualsDateAndTime]) %>;
        var aspxVars_operatorEqualsDateAndTimeLabel =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(OperatorUIData.PicklistOptions[(int) DuplicateRuleOperator.EqualsDateAndTime].Labels.GetLabel(LanguageCode, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %>;


        Sys.Application.add_load(PageLoad)

        function PageLoad() {

            var appCondition = $find("dupRuleAppCondition");
            appCondition.set_getUserDefinedList(GetDeDupeAttributeOperatorList);
            appCondition.set_notifyConditionsChanged(ComputeTotalMatchCodeLength);

            baseAttributeMetadataList = CreateAttributeMetadataDictionary(appCondition.get_primaryEntityCode());

            if (!window._isSingleEntityRule) {
                iMatchingAttributeListIndex = 1;
                iOperatorListIndex = 2;
                iNumCharsIndex = 3;
                matchingAttributeMetadataList =
                    CreateAttributeMetadataDictionary(appCondition.get_secondaryEntityCode());
            }


            if (aspxVars_isConditionXmlNullOrEmpty == "false") {
                appCondition.LoadXml(aspxVars_conditionXml);
            }


            window.setTimeout(ComputeTotalMatchCodeLength, 0);


            var statusBar = document.getElementById("status");
            XUI.Html.SetText(statusBar,
                formatString(LOCID_DEDUP_MATCHCODE_STATUS, iTotalCurrentMatchCodeLength, aspxVars_iMaxMatchCodeLength));


            statusBar.title = LOCID_DEDUP_STATUS_TOOLTIP;
            statusBar.style.display = "block";
        }

    </script>
    <style type="text/css">
        .cndCondition > div { min-width: <%= Microsoft.Crm.Utility.AppResourceManager.Default.GetString("tools/duplicatedetection/duplicatedetectionrules/DuplicateRuleCondition.aspx_WINDOW_WIDTH") %>px; }

        SPAN.ms-crm-AdvFind-FieldList { width: 230px; }
    </style>
</head>
<body style="background-color: #FFF">
<div style="height: 100%; width: <%= AppResourceManager.Default.GetString("tools/duplicatedetection/duplicatedetectionrules/DuplicateRuleCondition.aspx_WINDOW_WIDTH") %>px">
    <div class="DuplicateRuleCondition_div_AppCondition" style="width: 100%">
        <!--[if IE 7]>
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <![endif]-->
        <div id="condition" style="height: 100%;">
            <div class="DuplicateRuleCondition_div_Container">
                <cnt:AppCondition id="dupRuleAppCondition" runat="server"/>
            </div>
            <div class="DuplicateRuleCondition_div_Status" id="status"></div>
        </div>
        <!--[if IE 7]>
            </div>
        <![endif]-->
    </div>
</div>
</body>
</html>