<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Relationships.Mappings.CreateMappingPage"   %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>




<table style="width:100%;height:100%" cellspacing="0" cellpadding="0">
<col style="width:50%" /><col />
<tr>



<td style="vertical-align:top;height:100%" class="createMapping_td_LeftColumn">
<div style="height:100%;position:absolute;width:50%">
<div style="height:23px">
<label for="sourceAttributesGrid"><loc:Text ResourceId="SystemCustomization.CreateMappingPage.SourceAttributes.Label" runat="server"/></label>
</div>
<div style="position: absolute;top:23px;left:0px;right:0px;bottom:0px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<app:AppGrid id="sourceAttributesGrid" runat="server"/>
</div>
</div>
</div>
</td>




<td style="vertical-align:top;height:100%" class="createMapping_td_RightColumn">
<div style="height:100%;position:absolute;width:50%">
<div style="height:23px">
<label for="targetAttributesGrid"><loc:Text ResourceId="SystemCustomization.CreateMappingPage.TargetAttributes.Label" runat="server"/></label>
</div>
<div style="position: absolute;top:23px;left:0px;right:0px;bottom:0px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<app:AppGrid id="targetAttributesGrid" runat="server"/>
</div>
</div>
</div>
</td>
</tr>
</table>
