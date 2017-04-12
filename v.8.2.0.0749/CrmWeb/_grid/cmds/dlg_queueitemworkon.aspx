<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.QueueItemWorkOnDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        div.Desc {
            padding-top: 5px;
            color: #444444;
        }
    </style>

    <script type="text/javascript">


        var _sAction = "queueitemworkon";
        var _crmUserLookup = null;

        Sys.Application.add_load(function() {
            _crmUserLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmUserLookup');
        });

        function radioClick(eventObject) {
            _crmUserLookup.set_disabled((eventObject.target.id == "rdoMe"));
        }

        function applychanges() {
            if ($get("rdoMe").checked) {
                _custParams += "&isworkerme=1";
                go();
            } else {
                var dataValue = _crmUserLookup.get_dataValue();
                if (IsNull(dataValue)) {
                    alert(LOCID_NOONE_SELECTED);
                } else if (0 != dataValue.length) {
                    _custParams = "&isworkerme=0&workerid=" + CrmEncodeDecode.CrmUrlEncode(dataValue[0].id);

                    if ("8" == dataValue[0].type) {
                        _custParams += "&workertype=8";
                    } else {
                        _custParams += "&workertype=9";
                    }
                    go();
                }
            }
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
        <col width="26"><col>
        <tr>
            <td valign="top">
                <input tabindex="1" class="radio" type="radio" name="type" id="rdoMe" checked onclick="radioClick(new Sys.UI.DomEvent(event))">
            </td>
            <td valign="top">
                <label for="rdoMe">
                    <b>
                        <loc:Text ResourceId="Dialog_QueueItemWorkOn_Me_Label" runat="server"/>
                    </b>
                </label>
                <br>
                <div class="Desc">
                    <loc:Text ResourceId="Dialog_QueueItemWorkOn_Me_Description" runat="server"></loc:Text>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
            <td valign="top">
                <input tabindex="2" class="radio" type="radio" name="type" id="rdoOther" onclick="radioClick(new Sys.UI.DomEvent(event))">
            </td>
            <td valign="top">
                <label for="rdoOther">
                    <b>
                        <loc:Text ResourceId="Dialog_QueueItemWorkOn_Other_Label" runat="server"/>
                    </b>
                </label>
                <br>
                <div class="Desc" style="padding-bottom: 10px;">
                    <loc:Text ResourceId="Dialog_QueueItemWorkOn_Other_Description" runat="server"></loc:Text>
                </div>
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>
                            <sdk:LookupControl tabindex="3" id="crmUserLookup" Lookupbrowse="false" LookupStyle="single" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>