<%@ Page language="c#" Inherits="System.Web.UI.Page"%>
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
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

        try
        {
            System.Net.WebResponse response = request.GetResponse();
            System.IO.StreamReader reader = new System.IO.StreamReader(response.GetResponseStream(), Encoding.UTF8);
            string responseString = reader.ReadToEnd();

            Dictionary<string, object> responseObject = (Dictionary<string, object>) jsSerializer.Deserialize(responseString, typeof(object));
            Dictionary<string, string> responseSubset = new Dictionary<string, string>();

            responseSubset["access_token"] = (string) responseObject["access_token"];
            responseSubset["expires_in"] = responseObject["expires_in"].ToString();
            responseSubset["state_key"] = stateKey;

            return jsSerializer.Serialize(responseSubset);
        }
        catch (System.Net.WebException e)
        {
            System.IO.StreamReader reader = new System.IO.StreamReader(e.Response.GetResponseStream(), Encoding.UTF8);
            return reader.ReadToEnd();
        }
    }

</script>
<form id="form1" runat="server">
    <script>
        var res = <% = InlineData() %>;
    </script>
</form>
<script>
    var accessToken = res['access_token'];
    var expiry = parseInt(res['expires_in']);
    var stateKey = res['state_key'];

    expiry = Date.now() + expiry * 1000; // ADFS uses seconds as units, while JS uses ms.
    if (window.opener.adfsLoginCallback) {
        window.opener.adfsLoginCallback(null, accessToken, expiry, stateKey);
        window.close();
    } else {
        var mailAppQuery = localStorage.getItem('MailAppQuery');
        var search = mailAppQuery ? mailAppQuery + '&expiry' + expiry : '?expiry' + expiry;
        search += '&secondaryLoad=1';
        window.location.replace(window.location.protocol +
            '//' +
            window.location.host +
            '/crmmailapp/index.html' +
            search +
            '#' +
            access_token);
    }
</script>
</body>
</html>