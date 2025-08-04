<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ListCAAssociationPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<html>
<head>
	<style type="text/css">
		.myclass
		{
			border:0;
		}
	</style>
	<script language="JavaScript">
		var _iObjType	= <%=ObjType.ToString(CultureInfo.InvariantCulture)%>;
	</script>
	<cnt:AppHeader id="crmHeader" runat="server" />
	<script language="JavaScript">
		$addHandler(window, "load", windowOnLoad);
		function windowOnLoad()
		{
			$get("butBegin").focus();
		}
			
		function applychanges()
		{
			var radAddMLRadioButton = $get("RadAddMLToCampAndActs");
			if (radAddMLRadioButton.checked)
			{
				Mscrm.Utilities.setReturnValue(true);
			}
			else
			{
				Mscrm.Utilities.setReturnValue(false);
			}
			closeWindow();
		}
			
		function cancel()
		{
			closeWindow();
		}
	</script>
</head>
<body>
	<frm:DialogForm id="crmForm" runat="server">
		<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>
		<table border="0" style="width:100%">
			<colgroup span="2">
				<col width="26" />
			</colgroup>
			<tr>
				<td>
					<input class="radio" type="radio" id="RadAddMLToCampOnly" name="AddMLRadioGroup" />
				</td>
				<td>
					<label for="RadAddMLToCampOnly"><loc:Text ResourceId="MA.Campaign.Dialogs.ListAssoc.AddToCampaignOnly" runat="server" /></label>
				</td>
			</tr>
			<tr>
				<td>
					<input class="radio" type="radio" id="RadAddMLToCampAndActs" name="AddMLRadioGroup" checked="checked" />
				</td>
				<td>
					<label for="RadAddMLToCampAndActs"><loc:Text ResourceId="MA.Campaign.Dialogs.ListAssoc.AddToCampaignAndActivities" runat="server" /></label>
				</td>
			</tr>
		</table>
	</frm:DialogForm>
</body>
</html>
