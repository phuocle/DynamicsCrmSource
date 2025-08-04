<%@ Page language="c#" Inherits=" Microsoft.Crm.Web.Tools.Solution.ImportStatusPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Web"%>


<table cellpadding="8" cellspacing="0" style="table-layout: fixed; width: 100%; height: 100%">
    <col style="width: 75px"><col>
    <tr valign="top">
        <td>
            <img alt="" id="imgIcon" src="/_imgs/SystemCustomization/ico_importCustomizations.gif">
        </td>
        <td>
            <div id="divMessage">
                <loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.Importing" runat="server"/>
            </div>
        </td>
    </tr>
    <tr valign="middle">
        <td colspan="2">
            <div id="divProgress">
                <div id='divFillBg' style='display: inline; position: absolute; top: 150px; left: 20px; height: 23px; width: 360px; background-color: #ffffff;'>&nbsp;</div>
                <% if (!Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
                   { %>
                    <div id='divFill' class='ms-crm-ProgressBar-fillBar' style='display: inline; position: absolute; top: 150px; left: 20px; height: 23px; width: 0px;'>&nbsp;</div>
                <% }
                   else
                   { %>
                    <div id='divFill' class='ms-crm-ProgressBar-fillBar' style='display: inline; position: absolute; top: 150px; left: 381px; height: 23px; width: 0px;'></div>
                <% } %>
                <div id='divStatus' style='display: inline; position: absolute; top: 150px; left: 19px; height: 23px; width: 362px;'>
                    <img alt='' src='/_imgs/statusbar.gif' height='23' width='362'>
                </div>
            </div>
            <div id="divRetrievingMessage" style="display: none">
                <loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.Retrieving" runat="server"/>
            </div>
            <div id="divMoreMessages" style="display: none">
                <label for="txtMessages">
                    <loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.AdditionalMessages" runat="server"/>
                </label><br/>
                <textarea id="txtMessages" maxlength="10000" style="margin-top: 4px; overflow-y: scroll; width: 100%; height: 180px;" readonly="true"><loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.None" runat="server"/></textarea>
            </div>
        </td>
    </tr>
</table>