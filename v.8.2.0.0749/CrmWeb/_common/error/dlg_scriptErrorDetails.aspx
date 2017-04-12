<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ScriptErrorDetailsDialogPage" %>

<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" language="javascript">
        var SUPPRESS_SCRIPT_ERRORS = true;

        function PageOnLoad() {
            $addHandler(window, "error", OnError);
            try {

                var reportText = ReportFirstLine + "\r\n\r\n";
                var oArgs = getDialogArguments();
                if (!IsNull(oArgs)) {
                    for (var i = 0; i < oArgs.length; i++) {

                        if (Trim(oArgs[i].report).slice(-23) == "</CrmScriptErrorReport>") {
                            reportText = reportText + CrmEncodeDecode.CrmXmlDecode(oArgs[i].report) + "\r\n";
                        }
                    }
                }

                document.getElementById("errorReportContents").value = reportText;
            } catch (e) {
            }
            $addHandler(window, 'unload', PageOnUnLoad);
        }

        $addHandler(window, "load", PageOnLoad);

        function OnError() {
            try {

                window.status = ScriptErrorStatusBar;


                return true;
            } catch (e) {
            }
        }

        function PageOnUnLoad() {
            $removeHandler(window, 'load', PageOnLoad);
            $removeHandler(window, "error", OnError);
        }
    </script>
    <style type="text/css">
        textarea {
            position: absolute;
            height: 94%;
            width: 97%;
            overflow: auto;
            background-color: #FFFFFF;
            padding: 4px;
            direction: ltr;
        }
    </style>
</head>
<body scroll="no">
<form id="ScriptError" style="margin: 0px; border: 0px; padding: 0px; height: 100%;">
    <textarea wrap="off" readonly="true" id='errorReportContents'></textarea>
</form>
</body>
</html>