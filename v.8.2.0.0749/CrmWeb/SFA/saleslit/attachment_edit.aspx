<%@ Page language="c#" Inherits="Microsoft.Crm.Web.SalesLitItemPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html>
<head>


    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">

        textarea {
            height: 100%;
            overflow-y: auto;
        }

        .ms-crm-BodyContainer {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .ms-crm-StatusContainer {
            height: 25px;
            position: absolute;
            bottom: 0px;
            width: 100%;
        }

        .ms-crm-AttachmentContainer {
            position: absolute;
            bottom: 25px;
            width: 100%;
        }

        div.ms-crm-Tab {
            position: absolute;
            top: 150px;
            bottom: 100px;
            left: 5px;
            right: 5px;
        }

    </style>
</head>

<body>


<div id="areaForm" class="ms-crm-Form-Area ms-crm-BodyContainer" style="overflow-x: hidden">
    <div height="28">
        <mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
    </div>

    <frm:HardcodedForm id="crmForm" runat="server">
        <sdk:HiddenInputControl ID="salesliteratureid" runat="server"/>

        <div style="padding: 5px">
            <div class="ms-crm-TabBar-Cell">
                <cnt:AppTabBar id="crmTabBar" runat="server"/>
            </div>
            <div class="ms-crm-Tab" style="width: auto; height: auto;" id="tab0">
                <table cellpadding="2" cellspacing="0" height="100%" width="100%" style="table-layout: fixed;">
                    <col><col width="85%">
                    <tr>
                        <td id="title_c" class="ms-crm-Field-Required">
                            <label for="title">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_70" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                            </label>
                        </td>
                        <td>
                            <sdk:TextBoxControl Required="true" id="title" MaxLength="200" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="authorname">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_74" runat="server"/>
                            </label>
                        </td>
                        <td>
                            <sdk:TextBoxControl id="authorname" MaxLength="255" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="keywords">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_78" runat="server"/>
                            </label>
                        </td>
                        <td>
                            <sdk:TextBoxControl id="keywords" MaxLength="255" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2" style="padding-top: 10px;">
                            <label for="abstract">
                                <loc:Text ResourceId="Web.SFA.saleslit.attachment_edit.aspx_82" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr height="100%">
                        <td colspan="2" style="padding-top: 8px; vertical-align: top">
                            <sdk:TextAreaControl id="abstract" MaxLength="2000" Height="270px" runat="server"/>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    </frm:HardcodedForm>
    <div class="ms-crm-AttachmentContainer">
        <cnt:AppAttachment id="crmAttachment" runat="server"/>
    </div>
    <div class="ms-crm-StatusContainer">
        <div class="ms-crm-Form-StatusBar">
            <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
        </div>
    </div>
</div>

</body>
</html>