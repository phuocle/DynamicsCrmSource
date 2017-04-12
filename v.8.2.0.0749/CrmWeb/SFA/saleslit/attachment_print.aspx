<%@ Page language="c#" Inherits="Microsoft.Crm.Web.SalesLitItemPrintPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style>
        .ms-crm-Form { height: 100%; }
    </style>
</head>

<body>

<frm:HardcodedForm id="crmForm" runat="server">
    <div style="width: 100%; height: 100%; position: relative">
        <table cellpadding="0" cellspacing="0" style="width: 100%; height: 100%; table-layout: fixed">
            <tr>
                <td valign="top" style="padding: 10px">
                    <table cellpadding="2" cellspacing="0" style="width: 100%">
                        <col><col width="80%">
                        <tr>
                            <td class="ms-crm-Field-Label-Print">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_70" runat="server"/>
                            </td>
                            <cnt:AppPrintFieldControl runat='server' id='title_d'/>
                        </tr>
                        <tr>
                            <td class="ms-crm-Field-Label-Print">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_74" runat="server"/>
                            </td>
                            <cnt:AppPrintFieldControl runat='server' id='authorname_d'/>
                        </tr>
                        <tr>
                            <td class="ms-crm-Field-Label-Print">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_78" runat="server"/>
                            </td>
                            <cnt:AppPrintFieldControl runat='server' id='keywords_d'/>
                        </tr>
                        <tr>
                            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2" style="padding-top: 10px;">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_82" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <cnt:AppPrintFieldControl runat='server' id='abstract_d'/>
                        </tr>
                        <tr style="padding-top: 20px;">
                            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2" valign="top">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit_aspx_59" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="ms-crm-Field-Label-Print">
                                <loc:Text ResourceId="Web.Notes.print.aspx_33" runat="server"/>
                            </td>
                            <cnt:AppPrintAttachmentControl id="filename_d" runat='server'/>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

    </div>
</frm:HardcodedForm>

</body>
</html>