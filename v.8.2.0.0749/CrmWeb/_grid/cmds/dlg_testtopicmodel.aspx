<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.TestTopicModelDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader ID="crmHeader" runat="server"/>
    <script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery1.7.2.min.js"></script>
    <script language="JavaScript">
        var _sAction = "testtopicmodel";
        var configurationUsedId = "";
        var maxTopics = "";
        var _iObjType = <%= ObjType.ToString(CultureInfo.InvariantCulture) %>;

        function applychanges() {
            if (validateForTest()) {
                go();
            }
        }

        function cancel() {
            closeWindow();
        }


        function validateForTest() {

            var regXInt = /^\d+$/;
            configurationUsedId = $get("ConfigurationList").value;
            maxTopics = $get("maxTopics").value;
            if (configurationUsedId == 0) {
                alert(LOCID_TESTMODEL_CONFG_MUST);
                return false;
            } else if (!regXInt.test(maxTopics)) {
                alert(LOCID_TESTMODEL_MAXTOPIC_MUST);
                return false;
            }
            return true;
        }


        function getCustParamsForItem(i) {
            var sCustParamsForItem = "&maxTopics=" + maxTopics + "&configurationUsedId=" + configurationUsedId;
            return sCustParamsForItem;
        }
    </script>

    <style type="text/css">
        #loadingContainer {
            height: 100%;
            width: 100%;
            position: relative;
            background-color: white;
            opacity: 0.9;
        }

        #loadingContainer td {
            vertical-align: middle;
            text-align: center;
        }
    </style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server">
    <table cellpadding="1" cellspacing="1" width="60%">
        <tr>
            <td>
                <label for="topicModelConfigurations">
                    <loc:Text ResourceId="topicModelConfigurations_Label_Text" runat="server"/>
                    <img id="selectConfigurationImage" alt="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Forms.Required.AltTag")) %>" src="/_imgs/frm_required.gif"/>
                </label>
            </td>
            <td style="padding-left: 10">
                <ui:Select id="ConfigurationList" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="maxTopics">
                    <loc:Text ResourceId="maxTopics_Label_Text" runat="server"/>
                    <img id="selectMaxTopicsImage" alt="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Forms.Required.AltTag")) %>" src="/_imgs/frm_required.gif"/>
                </label>
            </td>
            <td style="padding-left: 10">
                <sdk:TextBoxControl Required="true" id="maxTopics" runat="server"/>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>