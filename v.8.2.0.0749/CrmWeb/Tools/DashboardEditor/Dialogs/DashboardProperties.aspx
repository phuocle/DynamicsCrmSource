<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DashboardEditor.DashboardProperties" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<!Doctype html>
<html>
<head>
    <title><% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_sTitle) %></title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="Javascript">

        var oDashboardName;
        var oDashboardDescription;
        Sys.Application.add_load(OnLoad);

        function OnLoad() {
            var oArgs = getDialogArguments();
            oDashboardName = Mscrm.FormControlInputBehavior.GetBehavior("dashboardName");
            oDashboardDescription = Mscrm.FormControlInputBehavior.GetBehavior("dashboardDescription");

            oDashboardName.set_dataValue(oArgs.sName);
            oDashboardDescription.set_dataValue(oArgs.sDesc);
            oDashboardName.setFocus();
        }

        function cancel() {
            closeWindow();
        }

        function applychanges() {
            if (IsNull(oDashboardName.get_dataValue())) {
                alert(formatString(LOCID_AF_MSG_VALUEREQUIRED, LOCID_AF_LABEL_NAME));
                oDashboardName.setFocus();
                return false;
            }

            var oRet = new Object();
            oRet.sName = oDashboardName.get_dataValue();
            oRet.sDesc = IsNull(oDashboardDescription.get_dataValue()) ? "" : oDashboardDescription.get_dataValue();

            Mscrm.Utilities.setReturnValue(oRet);

            closeWindow();
        }
    </script>
    <style>
        .propertycontainer {
            left: 10px;
            right: 10px;
            top: 10px;
            bottom: 10px;
        }

        .namecontainer {
            height: 47px;
            bottom: auto !important;
        }

        .descriptioncontainer { top: 47px !important; }

        .textAreaContainer { top: 20px; }
    </style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <div class="ms-crm-absolutePosition propertycontainer">
        <div class="ms-crm-absolutePosition namecontainer">
            <span class="ms-crm-Field-Required">
                <label for="dashboardName">
                    <loc:Text ResourceId="Web.DashboardEditor.PropertyDialog.NameLabel" runat="server"/>
                    <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                </label>
            </span>
            <span>
                <sdk:TextBoxControl id="dashboardName" MaxLength="100" runat="server"/>
            </span>
        </div>
        <div class="ms-crm-absolutePosition descriptioncontainer">
            <div class="ms-crm-absolutePosition" style="bottom: auto; height: 20px;">
                <div class="ms-crm-absolutePosition" style="top: auto;">
                    <loc:Text ResourceId="Web.DashboardEditor.PropertyDialog.DescLabel" runat="server"/>
                </div>
            </div>
            <div class="ms-crm-absolutePosition textAreaContainer">
                <div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
                    <sdk:TextAreaControl id="dashboardDescription" MaxLength="2000" runat="server"/>
                </div>
            </div>
        </div>
    </div>
</frm:DialogForm>
</body>
</html>