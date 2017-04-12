<!DOCTYPE html />
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.AddSharePointDocumentLocation" %>

<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<html>
<head>
    <cnt:AppHeader ID="crmHeader" runat="server"/>

    <style type="text/css">
        .ms-crm-RefreshDialog-Main { top: 76px !important; }

        #dialogHeaderTitle {
            color: #000000 !important;
            font-size: 36px !important;
            font-family: Segoe UI !important;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            margin-right: 30px;
            <% }
               else
               { %>
            margin-left: 30px;
            <% } %>
            margin-top: 11px;
        }

        .ms-crm-dlglabel {
            vertical-align: top;
            font-family: Segoe UI;
            color: #444444;
            font-size: 12px;
            font-weight: normal !important;
        }

        .ms-crm-dlgdesc {
            vertical-align: top;
            font-family: Segoe UI;
            color: #666666;
            font-size: 12px;
            font-weight: normal !important;
        }

        a#btnCross {
            top: 10px !important;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            left: 30px;
            <% }
               else
               { %>
            right: 30px;
            <% } %>
        }

        #butBegin { margin-right: 2px !important; }

        div.sectionHeader {
            width: 200px;
            float: left;
            font-size: 12pt;
            font-family: Segoe UI;
            color: #444444;
        }

        div.sectionSubHeader {
            width: 400px;
            position: relative;
            display: inline-block;
            font-size: 12pt;
            font-family: Segoe UI;
            color: #B1B1B1;
        }

        html { overflow: auto; }



    </style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server">

    <div id="dialogContainer" width="100%" height="100%">

        <div style="font-size: 12pt; font-family: Segoe UI; color: #444444;">
            <% if (mode == AddLocationDialogMode.Add)
               { %>
                <label for="dialogdesc" class="ms-crm-dlgdesc" title="<loc:Text Encoding='HtmlAttribute' ResourceId='AddLocationDialogHeader' runat='server'/>">
                    <loc:Text ResourceId="AddLocationDialogHeader" runat="server"/>
                </label>
            <% }
               else
               { %>
                <label for="dialogloc" class="ms-crm-dlgdesc" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EditLocationDialogHeader' runat='server'/>">
                    <loc:Text ResourceId="EditLocationDialogHeader" runat="server"/>
                </label>
            <% } %>
        </div>

        <div>
            <div class="sectionHeader" style="padding-top: 22px;">
                <label for="locationNameText" class="ms-crm-dlglabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='LocationNameLabel' runat='server'/>">
                    <loc:Text ResourceId="LocationNameLabel" runat="server"/>
                </label>
            </div>
            <div class="sectionSubHeader"style="padding-top: 22px;">
                <input type="text" maxlength="160" id="locationNameText" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(locationNameTextValue) %>"/>
            </div>
        </div>


        <div style="padding-top: 28px; font-size: 12pt; font-family: Segoe UI; color: #444444;">
            <% if (mode == AddLocationDialogMode.Add)
               { %>
                <label for="relativeUrl" class="ms-crm-dlgdesc" title="<loc:Text Encoding='HtmlAttribute' ResourceId='AddLocationParentSiteLocation' runat='server'/>">
                    <loc:Text ResourceId="AddLocationParentSiteLocation" runat="server"/>
                </label>
            <% }
               else
               { %>
                <label for="relativeUrl" class="ms-crm-dlglabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EditLocationParentSiteLocation' runat='server'/>">
                    <loc:Text ResourceId="EditLocationParentSiteLocation" runat="server"/>
                </label>
            <% } %>
        </div>


        <div style="padding-top: 10px;">
            <div class="sectionHeader">
                <label for="locationLookup" class="ms-crm-dlglabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='AddLocationParentSiteLabel' runat='server'/>">
                    <loc:Text ResourceId="AddLocationParentSiteLabel" runat="server"/>
                </label>
            </div>
            <div class="sectionSubHeader" style="color='#000000'">
                <sdk:LookupControl ID="locationLookup" AccessibilityLabelResourceId="DocumentManagement.AddLocation.ParentURL.Label" LookupStyle="single" AutoRegisterClientComponent="false" runat="server"/>
            </div>
        </div>
        <div style="padding-top: 6px;">
            <div class="sectionHeader">
                <label for="folderNameText" class="ms-crm-dlglabel" title="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.AddLocation.Folder.Label' runat='server'/>"><loc:Text ResourceId="DocumentManagement.AddLocation.Folder.Label" runat="server"/>
            </div>
            <div class="sectionSubHeader">
                <input type="text" id="folderNameText" runat="server"/>
            </div>
        </div>
    </div>
</frm:DialogForm>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display: none; height: 100%; width: 100%;">
    <div id="progressInner" style="height: 100%; width: 100%">
        <div style="top: 45%; text-align: center; position: relative;">
            <img alt="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Visualization.Loading.Text")) %>" src="/_imgs/AdvFind/progress.gif"/>
            <br/>
            <loc:Text ResourceId="CreateFolderNotification" runat="server"/>
        </div>
    </div>
</div>
</body>
</html>