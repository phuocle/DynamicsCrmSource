<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.RecommendationModel.RecommendationModelRedirectionPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:appheader runat="server" id="crmHeader"/>
    <script type="text/javascript">

        function pageLoadHandler() {

            var _submitUrl = Mscrm.CrmUri.create(postBackUri);
            var _xmlhttp = new XMLHttpRequest();
            _xmlhttp.open("POST", _submitUrl.toString(), _isAsynch);

            Mscrm.Utilities.setResponseTypeToMSXml(_xmlhttp);


            SetTokenInHeader(_xmlhttp, _submitUrl);
            var _xmlDoc = null;
            _xmlhttp.send(_xmlDoc);

            try {

                if (!Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty(_xmlhttp.responseText)) {

                    var modelId = _xmlhttp.responseText;
                    var parameters = {};


                    parameters["replace"] = "true";

                    var objectTypeCodeForRecommendationModel = 9933;
                    openObj(objectTypeCodeForRecommendationModel, modelId, null, null, null, parameters);


                    if (IsOutlookClient() == true)
                        openProductCatalogForm();
                }
            } catch (err) {

                LaunchErrorDlg(_xmlhttp.responseXML, errorDialogCallBack);
            }


            return false;
        }

        function errorDialogCallBack() {

            openProductCatalogForm();
        }

        function openProductCatalogForm() {
            var uri = Mscrm.CrmUri.create(productCatalogSettingsPageUri);

            window.location.replace(uri.toString());
        }


        Sys.Application.add_load(pageLoadHandler);
    </script>
</head>
</html>