<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.TestAzureServiceConnection" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">

        function pageLoadHandler() {

            var _submitUrl = Mscrm.CrmUri
                .create("/_grid/cmds/dlg_testazureserviceconnection.aspx?iObjType=9936&iTotal=1&iIndex=0&iId=" +
                    connectionId);
            var _xmlhttp = new XMLHttpRequest();
            _xmlhttp.open("POST", _submitUrl.toString(), _isAsynch);

            Mscrm.Utilities.setResponseTypeToMSXml(_xmlhttp);


            SetTokenInHeader(_xmlhttp, _submitUrl);
            var _xmlDoc = null;
            _xmlhttp.send(_xmlDoc);


            if (_xmlhttp.responseText.indexOf("<ok/>") === -1) {

                LaunchErrorDlg(_xmlhttp.responseXML, dialogCallBack);
            } else {

                dialogCallBack();
            }
        }

        function dialogCallBack() {

            executeDialogCloseCallback();

            closeWindow();
        }


        Sys.Application.add_load(pageLoadHandler);
    </script>
    <style type="text/css">
        #ProgressDiv {
            position: absolute;
            background-color: white;
            top: 42%;
            left: 44%;
        }
    </style>
</head>
</html>