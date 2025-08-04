<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Controls.PowerBI.PowerBIReport" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!Doctype html>
<html>
<head runat="server">
<cnt:appheader id="crmHeader" runat="server" />
<script>
var report = new Mscrm.PowerBI.PowerBIReport("<%= this.isReport %>" === "True");
Sys.Application.add_load(function () { report.onLoad(); });
</script>
</head>
<body>

<div class="ms-crm-RefreshDialog-Header" overridedefaultfocus="True" overriddenfirstfocusableelementid="btnCross" overriddenfirstfocusableonloadelementid="btnCross" style="display: none">
</div>
<div class="powerbireport-container">
<div class="powerbireport-table-row">
<div class="powerbireport-header">
<div class="powerbireport-title" dir="<%= this.Direction %>"><%= this.Title %></div>
<div class="powerbireport-button-container" dir="<%= this.Direction %>">
<a href="javascript:void(0)" id="btnRefresh" title="<loc:Text Encoding='HtmlAttribute' ResourceId='PowerBIRuntime_ContextButton_Refresh' runat='server'/>">
<img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='PowerBIRuntime_ContextButton_Refresh' runat='server'/>" src="/_imgs/Refresh.png">
</a>
<a href="#" id="openInPowerBiAnchor" target="_blank" runat="server">
<img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='PowerBIRuntime_ContextButton_ViewDetail' runat='server'/>" src="/_imgs/Ribbon/powerbitile_16.png">
</a>
<a href="javascript:void(0)" id="btnCross" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Button_Label_Cancel' runat='server'/>">
<img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Button_Label_Cancel' runat='server'/>" src="/_imgs/CloseDialog.png">
</a>
</div>
</div>
</div>
<div class="powerbireport-table-row powerbireport-table-row-fill">
<iframe class="powerbireport-tileiframe" id="tileIframe" name="tileIframe" scrolling="no" frameborder="0" runat="server"></iframe>
</div>
</div>
</body>
</html>
