<%@ Page Language="c#" Inherits="System.Web.UI.Page" %>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="x-ua-compatible" content="IE=edge">
	<title></title>
</head>
<body>
	<script src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js" type="text/javascript"></script>
	<script language="c#" runat="server">
		protected String InlineData()
		{
			string code = "code=" + Request["code"];
			string grantType = "grant_type=authorization_code";
			string redirect_uri = "redirect_uri=" + Request.Url.AbsoluteUri.Substring(0, Request.Url.AbsoluteUri.IndexOf("?"));

			string authorizePostfix = "/authorize";
			string tokenPostfix = "/token";

			var jsSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
			string authorizationUri = Request["state"];
			string clientId = authorizationUri.Substring(authorizationUri.LastIndexOf("client_id"), authorizationUri.LastIndexOf("-") - authorizationUri.LastIndexOf("client_id"));
			string stateKey = authorizationUri.Substring(authorizationUri.LastIndexOf("-") + 1);

			string post_data = code + "&" + clientId + "&" + grantType + "&" + redirect_uri;

			byte[] byteArray = Encoding.UTF8.GetBytes(post_data);

			string uri = authorizationUri.Substring(0, authorizationUri.LastIndexOf(authorizePostfix)) + tokenPostfix;

			System.Net.WebRequest request = System.Net.WebRequest.Create(uri);

			request.Method = "POST";
			request.ContentType = "application/x-www-urlencoded";

			request.ContentLength = byteArray.Length;
			System.IO.Stream dataStream = request.GetRequestStream();
			dataStream.Write(byteArray, 0, byteArray.Length);
			dataStream.Close();
			System.IO.StreamReader reader;

			try
			{
				System.Net.WebResponse response = request.GetResponse();
				reader = new System.IO.StreamReader(response.GetResponseStream(), Encoding.UTF8);
			}
			catch (System.Net.WebException e)
			{
				reader = new System.IO.StreamReader(e.Response.GetResponseStream(), Encoding.UTF8);
			}

			string responseString = reader.ReadToEnd();
			Dictionary<string, object> responseObject = (Dictionary<string, object>)jsSerializer.Deserialize(responseString, typeof(object));
			responseObject["state_key"] = stateKey;
			return jsSerializer.Serialize(responseObject);
		}

</script>
	<form id="form1" runat="server">
		<script>
			var response = <% =InlineData() %>;
	</script>
	</form>
	<script>
		var loginDialogMode = localStorage.getItem("MailApp_LoginDialogMode");

		if (loginDialogMode === "OfficeDialog")
		{
			Office.initialize = function ()
			{
				if (Office.context.ui.messageParent)
				{
					Office.context.ui.messageParent(JSON.stringify(response));
				}
				else
				{
					fallback();
				}
			};
		}
		else
		{
			fallback();
		}

		function fallback()
		{
			if (window.opener && window.opener.adfsLoginCallback)
			{
				window.opener.adfsLoginCallback(response);
				window.close();
			}
			else
			{
				var expiry = Date.now() + parseInt(response["expires_in"], 10) * 1000;
				var access_token = response["access_token"];
				var mailAppQuery = localStorage.getItem('MailAppQuery');
				var search = mailAppQuery ? mailAppQuery + '&expiry' + expiry : '?expiry' + expiry;
				search += '&secondaryLoad=1';
				window.location.replace(window.location.protocol + '//' + window.location.host + '/crmmailapp/index.html' + search + '#' + access_token);
			}
		}
</script>
</body>
</html>