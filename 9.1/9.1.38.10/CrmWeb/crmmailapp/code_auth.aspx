<%@ Page language="c#" Inherits="System.Web.UI.Page"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="x-ua-compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="resources/styles/code_auth.css" type="text/css" />
</head>
<body>
	<script src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js" type="text/javascript"></script>

	<script language="c#" runat="server">
		protected void SetSecurityProtocolFromConfig(string configKey)
		{
			var ignoreCase = true;
			System.Net.ServicePointManager.SecurityProtocol = (System.Net.SecurityProtocolType) System.Enum.Parse(
				typeof(System.Net.SecurityProtocolType), System.Web.Configuration.WebConfigurationManager.AppSettings[configKey], ignoreCase);
		}

		protected System.Net.WebRequest CreateRequest(string uri, int contentLength)
		{
			var request = System.Net.WebRequest.Create(uri);
			request.Method = "POST";
			request.ContentType = "application/x-www-urlencoded";
			request.ContentLength = contentLength;
			return request;
		}

		protected String InlineData()
		{
			string code = "code=" + Request["code"];
			string grantType = "grant_type=authorization_code";
			string redirect_uri = "redirect_uri=" + Request.Url.AbsoluteUri.Substring(0, Request.Url.AbsoluteUri.IndexOf("?"));

			string authorizePostfix = "/authorize";
			string tokenPostfix = "/token";

			var jsSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
			string state = Request["state"];
			
			string authorizationUrl = "";
			// Get auth url
			if(!UseStateForAuthUrl())
			{
				authorizationUrl = GetAuthUrlFromOrgService();
			}
			else 
			{
			   // Otherwise fallback to state value
				authorizationUrl = state;
			}

			//validate authorizationUri
			if(!validateUri(authorizationUrl))
			{
				throw new ArgumentException("Invalid auth url passed.");
			}
			else
			{
				string clientId = state.Substring(state.LastIndexOf("client_id"), state.LastIndexOf("-") - state.LastIndexOf("client_id"));
				string stateKey = state.Substring(state.LastIndexOf("-") + 1);

				string post_data = code + "&" + clientId + "&" + grantType + "&" + redirect_uri;

				byte[] byteArray = Encoding.UTF8.GetBytes(post_data);

				string uri = authorizationUrl.Substring(0, authorizationUrl.LastIndexOf(authorizePostfix)) + tokenPostfix;
				var prevProtocol = System.Net.ServicePointManager.SecurityProtocol;
				SetSecurityProtocolFromConfig("MailAppSecureProtocol");
				var request = CreateRequest(uri, byteArray.Length);
				System.IO.Stream dataStream = null;

				try
				{
					dataStream = request.GetRequestStream();
				}
				catch (System.Net.WebException)
				{
					SetSecurityProtocolFromConfig("MailAppSecureProtocolFallback");
					request = CreateRequest(uri, byteArray.Length);
					dataStream = request.GetRequestStream();
				}

				dataStream.Write(byteArray, 0, byteArray.Length);
				dataStream.Close();
				System.Net.ServicePointManager.SecurityProtocol = prevProtocol;

				System.IO.StreamReader reader;

				try {
					System.Net.WebResponse response = request.GetResponse();
					reader = new System.IO.StreamReader(response.GetResponseStream(), Encoding.UTF8);
				}
				catch (System.Net.WebException e)
				{
					return "An error has occurred.";
				}

				string responseString = reader.ReadToEnd();
				Dictionary<string, object> responseObject = (Dictionary<string, object>)jsSerializer.Deserialize(responseString, typeof(object));
				responseObject["state_key"] = stateKey;

				return jsSerializer.Serialize(responseObject);
			}
		}

		private bool validateUri(string adfsUri)
		{
			Uri formattedUri;			
			return Uri.TryCreate(adfsUri, UriKind.Absolute, out formattedUri) && (formattedUri.Scheme == Uri.UriSchemeHttps || formattedUri.Scheme == Uri.UriSchemeHttp);
		}

		private string GetAuthUrlFromOrgService()
		{
			var currentUrl = Request.Url;
			string orgServiceUrl = currentUrl.Scheme + "://" + currentUrl.Host + (currentUrl.IsDefaultPort ? "" : ":" + currentUrl.Port) + "/XRMServices/2011/Organization.svc/web?SdkClientVersion=7.0.0000";

			string authUrlFromOrgService = "";	
			try
			{
				var request = System.Net.WebRequest.Create(orgServiceUrl);
				request.Method = "GET";
				System.Net.WebResponse response = request.GetResponse();
				response.Close();
			}
			catch (System.Net.WebException ex)
			{
				string authHeader = ex.Response.Headers["WWW-Authenticate"];
				if (!string.IsNullOrEmpty(authHeader))
				{
					// Extract authorization_uri using regex
					string pattern = @"Bearer authorization_uri=(?<uri>http[s]://[^\s,]+)";
					var match = System.Text.RegularExpressions.Regex.Match(authHeader, pattern);
					if (match.Success)
					{
						return match.Groups["uri"].Value;	
					}
				}
			}
			return string.Empty;
		}

		private bool UseStateForAuthUrl()
		{
			string useState = System.Web.Configuration.WebConfigurationManager.AppSettings["UseStateForAuthUrl"];
			
			if(string.IsNullOrEmpty(useState))
			{
				return false;
			}

			try 
			{
				return bool.Parse(useState);
			}
			catch
			{
				return false;
			}
		}

	</script>
	<form id="form1" runat="server">
		<script>
			var response = <% =InlineData() %>;		
		</script>

		<div id="pageWrapper">
			<div id="iconWrapper">
				<i id="icon"></i>
			</div>
			<div id="contentWrapper">
				<div id="title">
					<loc:text ResourceId='Dialog.AppsForCrm.MailApp.Code_Auth_Title' runat='server' />
				</div>
				<div id="message">
				</div>
			</div>
		</div>
		<div id="footer">
			<loc:text ResourceId='Dialog.AppsForCrm.MailApp.Code_Auth_Copyright' runat='server' />
		</div>

		<script>
			if (!window.opener)
			{
				Office.initialize = function ()
				{
					Office.context.ui.messageParent(JSON.stringify(response));
				};
			}
			else
			{
				fallback();
			}

			function fallback()
			{
				try
				{
					if (window.opener && window.opener.adfsLoginCallback)
					{
						window.opener.adfsLoginCallback(response);
						window.close();
					}
					else
					{
						throw Error("Failed to call parent window");
					}
				}
				catch (e)
				{
					var messageDiv = document.getElementById("message");
					if (/permission denied/i.test(e.message))
					{
						messageDiv.innerText = "<loc:text ResourceId='Dialog.AppsForCrm.MailApp.Code_Auth_BlockError' runat='server' />";
					}
					else
					{
						messageDiv.innerText = "<loc:text ResourceId='Dialog.AppsForCrm.MailApp.Code_Auth_OtherError' runat='server' />";
					}
				}
			}
		</script>
	</form>
</body>
</html>