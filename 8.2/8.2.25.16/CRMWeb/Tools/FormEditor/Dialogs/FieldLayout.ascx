<%@ Control language="C#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.FieldLayout" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<div id="divColumnLayoutSection" style="display:none;">
    <fieldset>
	    <legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_197" runat="server"/>&nbsp;</legend>
	    <div class="ms-crm-Dialog-Desc" style="padding-bottom: 5px;">
		    <loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_199" runat="server"/>
	    </div>
	    <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
		    <col width="15"><col><col width="85" style="text-align: right;">
		    <tr>
			    <td><input id="SpanTrue" name="Span" type="radio" class="radio"></td>
			    <td><label for="SpanTrue"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_205" runat="server"/></label></td>
			    <td>
				    <table cellpadding="0" cellspacing="4" width="75" class="example">
					    <tr>
						    <td class="example">&nbsp;</td>
						    <td class="example">&nbsp;</td>
					    </tr>
					    <tr>
						    <td class="example active" colspan="2">&nbsp;</td>
					    </tr>
					    <tr>
						    <td class="example">&nbsp;</td>
						    <td class="example">&nbsp;</td>
					    </tr>
				    </table>
			    </td>
		    </tr>
		    <tr>
			    <td colspan="3" height="10"></td>
		    </tr>
		    <tr>
			    <td><input id="SpanFalse" name="Span" type="radio" class="radio"></td>
			    <td><label for="SpanFalse"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_227" runat="server"/></label></td>
			    <td>
				    <table cellpadding="0" cellspacing="4" width="75" class="example">
					    <tr>
						    <td class="example">&nbsp;</td>
						    <td class="example">&nbsp;</td>
					    </tr>
					    <tr>
						    <td class="example active">&nbsp;</td>
						    <td class="example">&nbsp;</td>
					    </tr>
					    <tr>
						    <td class="example">&nbsp;</td>
						    <td class="example">&nbsp;</td>
					    </tr>
				    </table>
			    </td>
		    </tr>
	    </table>
    </fieldset>
</div> 
<% 
if(	dataType == "memo"		||
	dataType == "iframe"	||
	dataType == "unknown"	||
	dataType == "text" && format == "textarea") 
{
%>
<div id="divRowLayoutSection" style="display:none;">
	<br>
    <fieldset>
	    <legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_238" runat="server"/>&nbsp;</legend>
	    <div class="ms-crm-Dialog-Desc">
		    <loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_240" runat="server"/>
	    </div>
	    <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
		    <col width="15"><col width="105"><col>
		    <tr>
			    <td colspan="2"><label for="NumRows"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_242" runat="server"/></label></td>
			    <td><ui:Number id="NumRows" Precision="0" MinValue="1" MaxValue="50" runat="server"/></td>
		    </tr>
		    <tr style="display:<%= previewMode ? "none" : "block"%>;">
		        <td><ui:CheckBox id="Auto" name="Auto" runat="server"/></td>
		        <td colspan="2"><label for="Auto"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_245" runat="server"/></label></td>
	        </tr>
        </table>
    </fieldset>
</div>
<%
}
%>
    
