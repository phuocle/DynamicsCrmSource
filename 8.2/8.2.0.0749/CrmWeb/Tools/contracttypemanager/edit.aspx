<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.ContractTemplatePage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        .ms-crm-IE7-td-Texarea-Container,
        .ms-crm-IE7-Texarea { position: static; }
    </style>
    <script type="text/javascript" language="javascript">

        Sys.Application.add_load(setFocus);
        Sys.Application.add_unload(PageUnload);

        function setFocus() {
            if (!_bReadOnly) {
                var oCrmFormSubmit = $get('crmFormSubmit');
                $addHandler(oCrmFormSubmit, "submit", validateMask);
                $get('name').focus();
            }
        }

        function validateMask(oEvent) {
            var calendarControl = $find("effectivitycalendarowner");
            if (calendarControl.validateMask()) {
                return true;
            } else {
                oEvent.preventDefault();
                return false;
            }
        }

        function PageUnload() {
            try {
                $removeHandler($get('crmFormSubmit'), "submit", validateMask);
            } catch (e) {
            }
        }

    </script>
</head>

<body style="overflow-y: hidden;">

<div class="ms-crm-BodyContainer">
    <div class="ms-crm-MenuBarCell">

        <mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
    </div>
    <div class="ms-crm-Form-Background" id="tdAreas" style="margin: 10px;">
        <div id="areaForm" class="ms-crm-Form-Areas">
            <div class="ms-crm-TabBar-Cell">

                <cnt:AppTabBar id="crmTabBar" runat="server"/>
            </div>
            <div class="ms-crm-Tab" id="tab0" style="margin: 2px 10px 10px 10px;">

                <frm:HardcodedForm id="crmForm" runat="server">
                    <table class="ms-crm-ContactTypeEditorForm ms-crm-ZeroedCellPadding" cellspacing="5">
                        <col class="contracttypemanager_edit_col_1"/><col/><col class="contracttypemanager_edit_col_3"/><col/>
                        <tr>
                            <td id="name_c" class="ms-crm-Field-Required">
                                <label for="name">
                                    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(name.Metadata.DisplayNames.GetLabel(CrmCultureInfo.CurrentUICulture.LCID, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td>
                                <sdk:TextBoxControl id="name" runat="server"/>
                            </td>
                            <td id="abbreviation_c" class="ms-crm-Field-Required">
                                <label for="abbreviation">
                                    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(abbreviation.Metadata.DisplayNames.GetLabel(CrmCultureInfo.CurrentUICulture.LCID, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td>
                                <sdk:TextBoxControl id="abbreviation" runat="server"/>
                            </td>
                        </tr>

                        <tr>
                            <td id="billingfrequencycode_c" class="ms-crm-Field-Required">
                                <label for="billingfrequencycode">
                                    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(billingfrequencycode.Metadata.DisplayNames.GetLabel(CrmCultureInfo.CurrentUICulture.LCID, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td>
                                <sdk:PicklistControl id="billingfrequencycode" runat="server"/>
                            </td>
                            <td id="allotmenttypecode_c" class="ms-crm-Field-Required">
                                <label for="allotmenttypecode">
                                    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(allotmenttypecode.Metadata.DisplayNames.GetLabel(CrmCultureInfo.CurrentUICulture.LCID, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td>
                                <sdk:PicklistControl id="allotmenttypecode" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td id="contractservicelevelcode_c">
                                <label for="contractservicelevelcode"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(contractservicelevelcode.Metadata.DisplayNames.GetLabel(CrmCultureInfo.CurrentUICulture.LCID, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %></label>
                            </td>
                            <td>
                                <sdk:PicklistControl id="contractservicelevelcode" runat="server"/>
                            </td>
                            <td id="usediscountaspercentage_c">
                                <label for="usediscountaspercentage"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(usediscountaspercentage.Metadata.DisplayNames.GetLabel(CrmCultureInfo.CurrentUICulture.LCID, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %></label>
                            </td>
                            <td>
                                <sdk:PicklistControl id="usediscountaspercentage" runat="server"/>
                            </td>
                        </tr>
                        <tr class="ms-crm-DescriptionRow">
                            <td id="description_c">
                                <label for="description"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(description.Metadata.DisplayNames.GetLabel(CrmCultureInfo.CurrentUICulture.LCID, new OrganizationContext(UserInformation.Current.OrganizationId)).Description) %></label>
                            </td>
                            <td colspan="3">
                                <sdk:TextAreaControl id="description" height="75px" runat="server"/><br><br>
                            </td>
                        </tr>
                        <tr class="ms-crm-CalendarRow">
                            <td id="effectivitycalendar_c" class="ms-crm-Field-Required">
                                <label for="effectivitycalendar">
                                    <loc:Text ResourceId="Web.Tools.contracttypemanager.edit.aspx_241" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td colspan="3">
                                <cnt:AppContractCalendar id="effectivitycalendar" runat="server"/>
                            </td>
                        </tr>
                    </table>
                </frm:HardcodedForm>
            </div>
        </div>
    </div>
    <div class="ms-crm-StatusContainer">
        <div class="ms-crm-Form-StatusBar">
            <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
        </div>
    </div>
</div>

</body>
</html>