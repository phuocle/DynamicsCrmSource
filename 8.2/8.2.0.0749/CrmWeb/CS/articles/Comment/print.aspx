<%@ Page Inherits="Microsoft.Crm.Service.Web.CS.PrintArticleCommentPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style>
        .ms-crm-Form { height: 100%; }
    </style>
</head>
<body style="border: 0px;">
<frm:HardcodedForm id="crmForm" runat="server">
    <div style="width: 100%; height: 100%; position: relative">
        <table cellspacing="0" cellpadding="0" width="100%">
            <tr>
                <td style="padding: 10px">
                    <table cellpadding="2" cellspacing="0" class="stdTable">
                        <col width="110"><col>
                        <tr>
                            <td class="ms-crm-Field-Label-Print">
                                <loc:Text ResourceId="Web.CS.Articles.Comment.print.aspx_1" runat="server"/>
                            </td>
                            <cnt:AppPrintFieldControl runat='server' id='title'/>
                        </tr>
                        <tr style="padding-top: 10px">
                            <td colspan=2>
                            <table class="stdTable" cellpadding=0 cellspacing=0>
                                <tr>
                                    <cnt:AppPrintFieldControl runat='server' id='commenttext'/>
                                </tr>
                            </table>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

    </div>
</frm:HardcodedForm>
</body>
</html>