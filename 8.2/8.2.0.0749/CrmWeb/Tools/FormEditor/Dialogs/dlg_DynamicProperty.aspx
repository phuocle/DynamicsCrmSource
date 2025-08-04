<!DOCTYPE html >

<%@ Page Language="c#" Inherits=" Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.DynamicProperty" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Mscrm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Sales.ObjectModel" %>
<html>
<head>
    <script src="/_static/_common/scripts/jquery-2.1.1.min.js"></script>
    <script src="/_static/_common/scripts/jsrender.min.js"></script>
    <cnt:appheader id="crmHeader" runat="server"/>
    <style type="text/css">
        .ms-crm-IE7-td-Texarea-Container, .ms-crm-IE7-Texarea { position: static; }

        .ms-crm-RefreshDialog-Header-Title {
            height: 40px;
            width: inherit !important;
            font-family: <% = WebUtility.GetFontResourceForStyle("Flyout_Dialog_Title.Font") %> !important;
            font-size: <% = WebUtility.GetFontResourceForStyle("General.27px.font_size") %> !important;
            font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %> !important;
            color: #262626 !important;
            padding-left: 3px;
        }

        .ms-crm-RefreshDialog-Header-Desc {
            font-family: <% = WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font") %> !important;
            color: #262626 !important;
            font-size: <% = WebUtility.GetFontResourceForStyle("General.12px.font_size") %> !important;
            font-weight: <% = WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %> !important;
            vertical-align: middle !important;
            padding-top: 0px !important;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-left: 3px;
        }

        .ms-crm-RefreshDialog-Main { top: 75px !important; }

        .ms-crm-RefreshDialog-Warning { padding-top: 0px !important; }
    </style>
    <script type="text/javascript" language="javascript">
        Sys.Application.add_load(OnDynamicPropertyWindowLoad);

        var _productId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(productId) %>;
        var _dpPreviewMode = Mscrm.Utilities
            .parseBoolean(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(dpPreviewMode) %>);
        var _typeCode = parseInt(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(otc) %>);
        var _isReadOnly = Mscrm.Utilities
            .parseBoolean(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(isReadOnly) %>);

        function OnDynamicPropertyWindowLoad() {
            crmCreate(Mscrm.DynamicPropertyListControl,
                {},
                null,
                {},
                $get('DynamicPropertiesList_LinkControl_dynamicPropertyListControl'));
            Mscrm.DynamicPropertyListControl.control
                .set_renderType(_dpPreviewMode
                    ? Mscrm.DynamicPropertyListControlRenderType.designPreview
                    : Mscrm.DynamicPropertyListControlRenderType.runtime);
            Mscrm.DynamicPropertyListControl.control.set_targetEntityId(_productId);
            Mscrm.DynamicPropertyListControl.control.set_targetEntityTypeCode(_typeCode);
            Mscrm.DynamicPropertyListControl.control.set_isPreview(_dpPreviewMode);
            Mscrm.DynamicPropertyListControl.control.set_isReadOnly(_isReadOnly);
            Mscrm.DynamicPropertyListControl.control.render(null);
        }

        function applychanges() {
            if (!_dpPreviewMode) {
                Mscrm.DynamicPropertyListControl.control.update(
                    function(saveResponse) {
                        if (saveResponse) {
                            closeWindow();
                        }
                    },
                    function(errorResponse) {
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(errorResponse);
                    }
                );
            }
        }
    </script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
    <table width="100%">
        <col width="100"/>
        <col/>
        <tr>
            <td>
                <div id="DynamicPropertiesList_LinkControl_flyoutContent" class="ms-crm-absolutePosition">
                    <table>
                        <tr>
                            <td class="dplist-label-Details">
                                <loc:text resourceid="query.dynamicproperties.flyout.details" runat="server"/>
                            </td>
                        </tr>
                    </table>
                    <table id="DynamicPropertiesList_LinkControl_dynamicPropertyListControl">&nbsp;</table>
                    <table>&nbsp;</table>
                    <table>&nbsp;</table>
                    <table>&nbsp;</table>
                    <table>&nbsp;</table>
                </div>
            </td>
        </tr>
    </table>
</frm:dialogform>
</body>
</html>