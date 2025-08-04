<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.FormEditorPreview" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript">

        var oFormXml;
        var crmFormCtrl;

        function loadXmls() {
            oFormXml = XUI.Xml.LoadXml(XUI.Html.GetText(preFormXml));
        }

        Sys.Application.add_load(OnLoad);

        function OnLoad() {
            loadXmls();
            crmFormCtrl = $find("crmForm");
            crmFormCtrl.add_onSave(Save);
            crmFormCtrl.detachCloseAlert();
        }

        function Save(sender, args) {

            args.preventDefault();
        }

        function CallOnSave() {
            try {

                crmFormCtrl.fireSaveEvent(1);
            } catch (e) {
            }
        }
    </script>
</head>
<body>
<pre id="preFormXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Request.Form["formXml"]) %></pre>
<div class="ms-crm-Form-Layout">
    <div style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; width: 100%; height: 100%">
        <div style="height: 35px">
            <div>
                <mnu:appgenericmenubar id="crmMenuBar" runat="server"/>
            </div>
        </div>
        <div class="ms-crm-NRForm-Background" style="top: 35px; bottom: 0px;">
            <div id="formpreviewbody" class="ms-crm-NRForm-Main-Container">
                <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                    <div id="areaForm" class="ms-crm-Form-Area">
                        <frm:formeditorpreviewform id="crmForm" renderonlybody="false" runat="server"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>