<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.SimilarityRules.SimilarityRuleConditionPage" %>
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
        var aspxVars_isConditionXmlNullOrEmpty = <%= ((string.IsNullOrEmpty(conditionXml)) ? "'true'" : "'false'") %>;
        var aspxVars_conditionXml =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(conditionXml + String.Empty) %>;

        var aspxVars_operatorEquals =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) SimilarityRuleOperator.Equals]) %>;
        var aspxVars_operatorEqualsLabel = "<%= CurrentResourceManager.GetString("SimilarityRules_Operator_Equals") %>";
        var aspxVars_operatorStartsWith =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) SimilarityRuleOperator.StartsWith]) %>;
        var aspxVars_operatorStartsWithLabel =
            "<%= CurrentResourceManager.GetString("SimilarityRules_Operator_StartWith") %>";
        var aspxVars_operatorEndsWith =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) SimilarityRuleOperator.EndsWith]) %>;
        var aspxVars_operatorEndsWithLabel =
            "<%= CurrentResourceManager.GetString("SimilarityRules_Operator_EndsWith") %>";
        var aspxVars_operatorEqualsDateOnly =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) SimilarityRuleOperator.EqualsDateOnly]) %>;
        var aspxVars_operatorEqualsDateOnlyLabel =
            "<%= CurrentResourceManager.GetString("SimilarityRules_Operator_EqualsDateOnly") %>";
        var aspxVars_operatorEqualsDateAndTime =
            <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ruleOperatorArray[(int) SimilarityRuleOperator.EqualsDateAndTime]) %>;
        var aspxVars_operatorEqualsDateAndTimeLabel =
            "<%= CurrentResourceManager.GetString("SimilarityRules_Operator_EqualsDateAndTime") %>";


        Sys.Application.add_load(PageLoad)

        function PageLoad() {

            var appCondition = $find("similarityRuleAppCondition");
            appCondition.set_getUserDefinedList(GetSimilarityRuleAttributeOperatorList);

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
        }

    </script>
    <style type="text/css">
        .cndCondition > div { min-width: <%= Microsoft.Crm.Utility.AppResourceManager.Default.GetString("tools/systemcustomization/similarityrules/SimilarityRuleCondition.aspx_WINDOW_WIDTH") %>px; }

        SPAN.ms-crm-AdvFind-FieldList { width: 230px; }
    </style>
</head>
<body style="background-color: #FFF">
<div style="height: 100%; width: <%= AppResourceManager.Default.GetString("tools/systemcustomization/similarityrules/SimilarityRuleCondition.aspx_WINDOW_WIDTH") %>px">
    <div class="SimilarityRuleCondition_div_AppCondition" style="width: 100%">
        <!--[if IE 7]>
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <![endif]-->
        <div id="condition" style="height: 100%;">
            <div class="SimilarityRuleCondition_div_Container">
                <cnt:AppCondition id="similarityRuleAppCondition" runat="server"/>
            </div>
        </div>
        <!--[if IE 7]>
            </div>
        <![endif]-->
    </div>
</div>
</body>
</html>