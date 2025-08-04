<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.KBArticleTemplateLookup" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
	_onSelectFunc	= PreviewItem;
	_noItemsMessage = LOCID_NO_ITEMS_MESSAGE;
	function PreviewItem(e)
	{
		// bind properties
		XUI.Html.SetText($get("TmplTitle") , e.getAttribute("itemTitle"));
		XUI.Html.SetText($get("TmplCreatedBy") , e.getAttribute("itemCreatedBy"));
		XUI.Html.SetText($get("TmplDesc") , e.getAttribute("itemDesc"));
	}
	
	function LoadItem()
	{
		var oUrl = getObjUrl(KbArticle);
		oUrl.get_query()["_tmplid"] = _selectedItem.getAttribute('item');
		
        var iCreateFromId = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["_CreateFromId"])%>;
        var iCreateFromType = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["_CreateFromType"])%>;
        oUrl.get_query()["_CreateFromId"] = iCreateFromId;
        oUrl.get_query()["_CreateFromType"] = iCreateFromType;
		// launch form for object type, using the dialogs opener which is passed in
		var oArgs = getDialogArguments();
		//Closing the ModalWindow before opening the new window - 
		//Workaround for the firefox issue where opening new window and closing the ModalDialog is minimizing the newly opened window.
		window.setTimeout("closeWindow(true)",5);
		if (oArgs)
		{
			oArgs.openStdWin(oUrl, buildWinName());
		}
		else
		{
			openStdWin(oUrl, buildWinName());
		}
		
	}
	function ChangeLanguage()
	{
		LoadOptionsForLanguage($get("LanguageCode").value, "kbarticletemplate");
	}
     
     Sys.Application.add_load(function () {
			AdjustTemplateContentWidth();
			$addHandler(window, 'resize', AdjustTemplateContentWidth);
		});
		function AdjustTemplateContentWidth() {
			if(document.getElementById("TemplateTable"))
			{
				document.getElementById("TemplateTable").style.width = document.getElementById("ItemList").clientWidth;
			}
		}
</script>
</head>
<style>
    
    /* there is a radio button in the controll which  */
    .ms-crm-Dialog-List
    {
        position:relative;
    }
    
    .ms-crm-LookupTemplateContentBlock
    {
        top:76px;
        bottom:75px;
        left:15px;
        right:15px;
        position:absolute;
        display:block;
    }
    
    .ms-crm-LookupTemplateDetails
    {
        top:30px;
        display:inline-block;
        position:absolute;
        left:0px;
        bottom:0px;
        right:0px;
    }
    
    .ms-crm-LookupTemplateLanguageBlock
    {
        display:block;
        Height:30px;
        position:absolute;
        left:0px;
        top:0px;
        right:0px;
    }
    
    .ms-crm-LookupTemplateLeft
    {
       display:inline-block;
       width:50%;
       position:absolute;
       top:0px;
       bottom:0px;
       <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
       right:0px;
       <% }else { %>
       left:0px;
       <% }%>
    }
    
    .ms-crm-LookupTemplateRight
    {
        top:0px;
        bottom:0px;
        overflow:auto;
        display:inline-block;
        width:50%;
        position:absolute;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
        left:0px;
        <% }else { %>
        right:0px;
        <% }%>
    }
    
    .ms-crm-InnerTable #TemplateTable
    {
        overflow:hidden;
    }
    
  
</style>
<body>
<div class="ms-crm-absolutePosition">
    <div class="ms-crm-Dialog-Header">
			<div class="ms-crm-Dialog-Header-Title"><b><loc:Text ResourceId="Web.CS.articles.lookup_template.aspx_113" runat="server"/></b></div>
			<div class="ms-crm-Dialog-Header-Desc"><loc:Text ResourceId="Web.CS.articles.lookup_template.aspx_114" runat="server"/></div>
    </div>
    <div class="ms-crm-LookupTemplateContentBlock">
        <div class="ms-crm-LookupTemplateLanguageBlock">
			<table cellpadding="0" cellspacing="0" width="50%">
				<col width="100" /><col />
				<tr>
					<td valign="top" id="languagecode_c"><label for="LanguageCode"><loc:MetadataText EntityType="kbarticletemplate" AttributeName="languagecode" runat="server"/></label></td>
					<td><sdk:LanguagePicker id="LanguageCode" runat="server" IncludeAllOption="true" OnChange="ChangeLanguage();"/>&nbsp;</td>
				</tr>
			</table>
		</div>
        <div class="ms-crm-LookupTemplateDetails" >
            <div class="ms-crm-LookupTemplateLeft">
			    <div id="ItemList" class="ms-crm-Dialog-ScrollableList  ms-crm-absolutePosition ms-crm-InnerTable" style="width:auto;height:auto;"><ui:XmlRenderer id="xmlRenderer" runat="server"/></div>
			</div>
            <div class="ms-crm-LookupTemplateRight">
			    <table cellspacing="2" cellpadding="1" class="stdTable" style="padding:10px;">
				    <col width="200"/><col/>
				    <tr><td class="ms-crm-Bold-Header"><loc:Text ResourceId="Web.CS.articles.lookup_template.aspx_149" runat="server"/></td></tr>
				    <tr><td id="TmplTitle">&nbsp;</td></tr>
				    <tr style="height:8px;"><td>&nbsp;</td></tr>
				    <tr><td class="ms-crm-Bold-Header"><loc:Text ResourceId="Web.CS.articles.lookup_template.aspx_151" runat="server"/></td></tr>
				    <tr><td id="TmplCreatedBy">&nbsp;</td></tr>
				    <tr style="height:8px;"><td>&nbsp;</td></tr>
				    <tr><td class="ms-crm-Bold-Header" valign="top"><loc:Text ResourceId="Web.CS.articles.lookup_template.aspx_152" runat="server"/></td></tr>
				    <tr><td id= "TmplDesc"></td></tr>
				    <tr height="100%"><td>&nbsp;</td></tr>
			    </table>
			</div>
        </div>
    </div>
    <div class="ms-crm-Dialog-Buttons" style="border-top:1px solid #a4abb2">
		<form name="crmForm" id="crmForm" action="">
		<ui:Button ID="butBegin" OnClick="LoadItem()" ResourceId="A4A4842B-7564-4BCF-B21D-4D6A78F17BE1" runat="server"></ui:Button>
			&nbsp;
		<ui:Button OnClick="closeWindow()" ResourceId="C5C18B6A-47D1-4176-BD01-CD39ACF15234" runat="server"></ui:Button>
			
		</form>
	</div>
</div>
</body>
</html>
