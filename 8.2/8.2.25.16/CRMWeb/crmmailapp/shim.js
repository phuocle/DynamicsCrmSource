var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var ExchangeApi = (function () {
            function ExchangeApi() {
            }
            ExchangeApi.prototype.accept = function (visitor) {
                throw new Error("Not implemented abstract method");
            };
            ExchangeApi.prototype.makeRequest = function (callback, fail) {
                throw new Error("Not implemented abstract method");
            };
            ExchangeApi.prototype.initialize = function () {
                throw new Error("Not implemented abstract method");
            };
            ExchangeApi.prototype.setRequestMethod = function (requestMethod) {
                this.requestMethod = requestMethod;
            };
            return ExchangeApi;
        }());
        Exchange.ExchangeApi = ExchangeApi;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var EwsApi = (function (_super) {
            __extends(EwsApi, _super);
            function EwsApi() {
                _super.call(this);
                this.exchange2006MessagesNamespace = "http://schemas.microsoft.com/exchange/services/2006/messages";
                this.exchange2006TypesNamespace = "http://schemas.microsoft.com/exchange/services/2006/types";
                this.requestedVersion = "Exchange2010";
                this.initialize();
            }
            EwsApi.prototype.initialize = function () {
                this.itemType = "";
                this.itemId = "";
                this.methodDefinition = "";
                this.bodyRequest = "";
            };
            EwsApi.prototype.accept = function (visitor) {
                return visitor.visit(this);
            };
            EwsApi.prototype.makeRequest = function (callback) {
                Mscrm.OfficeProvider.makeEwsRequestAsync(this.toSoap(), callback);
            };
            EwsApi.prototype.toSoap = function () {
                return this.createRequestHeader() + this.bodyToSoap() + this.createRequestFooter();
            };
            EwsApi.prototype.bodyToSoap = function () {
                var request = this.methodDefinition + "\n\t\t\t\t\t\t" + this.bodyRequest + "\n\t\t\t\t\t</" + this.requestMethod + ">";
                return request;
            };
            EwsApi.prototype.setMethodDefinition = function (methodProperties) {
                this.methodDefinition = "<" + this.requestMethod + " \n\t\t\t\t\txmlns=\"" + this.exchange2006MessagesNamespace + "\" \n\t\t\t\t\txmlns:t=\"" + this.exchange2006TypesNamespace + "\"";
                if (methodProperties) {
                    this.methodDefinition += " " + methodProperties.join(" ");
                }
                this.methodDefinition += ">";
            };
            EwsApi.prototype.setBodyRequest = function (request) {
                this.bodyRequest = request;
            };
            EwsApi.prototype.createRequestHeader = function () {
                return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\t\t\t\t\t\t<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \n\t\t\t\t\t\t\txmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" \n\t\t\t\t\t\t\txmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" \n\t\t\t\t\t\t\txmlns:t=\"http://schemas.microsoft.com/exchange/services/2006/types\">\n\t\t\t\t\t\t<soap:Header>\n\t\t\t\t\t\t<t:RequestServerVersion Version=\"" + this.requestedVersion + "\" />\n\t\t\t\t\t\t</soap:Header>\n\t\t\t\t\t\t<soap:Body>";
            };
            EwsApi.prototype.createRequestFooter = function () {
                return "</soap:Body> </soap:Envelope>";
            };
            EwsApi.prototype.createResponse = function (result) {
                var asyncResponse = { status: result.status, value: result.value, error: result.error };
                if (!result.error) {
                    var parser = Exchange.EwsResponseParser.fromString(result["value"]);
                    var responseCode = parser.getNode("ResponseCode").textContent;
                    if (responseCode.indexOf("NoError") === -1) {
                        var messageText = parser.getNode("MessageText").textContent;
                        asyncResponse.error = {
                            code: responseCode,
                            name: "Ews request failed",
                            message: "Error while making EWS " + this.requestMethod + " request: " + messageText
                        };
                    }
                    else {
                        asyncResponse.value = parser;
                    }
                }
                return asyncResponse;
            };
            EwsApi.apiVersion = "ManagedEws2010";
            return EwsApi;
        }(Exchange.ExchangeApi));
        Exchange.EwsApi = EwsApi;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Authentication;
    (function (Authentication) {
        Authentication.LOGIN_DIALOG_MODE_KEY = "MailApp_LoginDialogMode";
        Authentication.LOGIN_DIALOG_MODE_VALUE_EXTERNAL = "ExternalWindow";
        Authentication.LOGIN_DIALOG_MODE_VALUE_OFFICE_DIALOG = "OfficeDialog";
    })(Authentication = Mscrm.Authentication || (Mscrm.Authentication = {}));
})(Mscrm || (Mscrm = {}));
(function () {
    var bootManager;
    $(function () {
        window.ClientVersion = "1.0.0000.0000";
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }
        window.Office.initialize = function () {
            Mscrm.Performance.PerformanceStopwatch.addRetroactiveStopWatch("MailAppShim.OfficeJS.WaitingForInitializeCall", window.ShimJsLoadEndTime, Date.now());
            Mscrm.Performance.PerformanceMarker.addMarker("MailAppShim.OfficeInitialize");
            window.Office = undefined;
            var sw = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.ResourcesJSLoad");
            sw.start();
            var userOWAPreferredLanguage = Mscrm.OfficeProvider.getDisplayLanguage();
            var supportedLanguages = ["id-id", "uk-ua", "th-th", "bg-bg", "ja-jp", "es-es", "lt-lt", "cs-cz", "lv-lv", "de-de", "nl-nl", "hi-in", "tr-tr", "it-it", "da-dk", "sl-si", "ms-my", "kk-kz", "ru-ru", "hu-hu", "fr-fr", "vi-vn", "hr-hr", "sk-sk", "zh-tw", "ko-kr", "zh-cn", "pt-br", "el-gr", "fi-fi", "nb-no", "pl-pl", "ro-ro", "sv-se", "et-ee", "pt-pt"];
            var script = document.createElement("script");
            if (userOWAPreferredLanguage && supportedLanguages.indexOf(userOWAPreferredLanguage.toLowerCase()) != -1) {
                script.src = "Resources/" + userOWAPreferredLanguage + "/resources.js";
            }
            else {
                script.src = "Resources/resources.js";
            }
            script.onload = function () {
                sw.stop();
                Mscrm.Boot.UIManager.showProgressMsg(Mscrm.Resources.ResourceManager.getString('MoCA_OWA_Assets_Loading_Message'));
                bootManager = new Mscrm.Boot.BootManager();
                var telemetryReporter = Mscrm.Telemetry.TelemetryReporter.getInstance();
                telemetryReporter.start();
                bootManager.start();
            };
            document.body.appendChild(script);
        };
    });
})();
var Environment;
(function (Environment) {
    Environment[Environment["PROD"] = 0] = "PROD";
    Environment[Environment["INT"] = 1] = "INT";
    Environment[Environment["TIE"] = 2] = "TIE";
    Environment[Environment["ONEBOX"] = 3] = "ONEBOX";
})(Environment || (Environment = {}));
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, i) {
            return typeof args[i] != 'undefined'
                ? args[i]
                : match;
        });
    };
}
var Mscrm;
(function (Mscrm) {
    var Authentication;
    (function (Authentication) {
        var CallbackTokenAuthenticationManager = (function () {
            function CallbackTokenAuthenticationManager() {
                this.tokenKeyPrefix = 'MailAppToken_';
                this.tokenExpiryKeyPrefix = 'MailAppTokenExpiry_';
                this.exchangeManifestNotInstalledErrorCode = 9017;
            }
            CallbackTokenAuthenticationManager.prototype.initialize = function () {
                var token = localStorage.getItem(this.tokenKeyPrefix);
                var expiry = localStorage.getItem(this.tokenExpiryKeyPrefix);
                return false;
            };
            CallbackTokenAuthenticationManager.prototype.authenticate = function (resource, refreshToken) {
                var _this = this;
                if (!refreshToken) {
                    if (this.token && this.expiry && new Date() < this.expiry) {
                        var deferred_1 = $.Deferred();
                        deferred_1.resolve(this.token);
                        return deferred_1;
                    }
                }
                var sw = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.Authentication.OfficeJS.GetCallbackTokenAsync");
                sw.start();
                var deferred = Mscrm.OfficeProvider.getCallbackTokenAsync();
                deferred.then(function (token) {
                    sw.stop();
                    _this.token = token;
                    var rawExpiry = Mscrm.Utilities.parseToken(token).exp;
                    _this.expiry = new Date(rawExpiry * 1000);
                }, function (error) {
                    sw.stop();
                    var message = "CallbackTokenAuthenticationManager: OfficeProvider.getCallbackTokenAsync rejected";
                    var code = Mscrm.Boot.ClientError.SignInErrorCode;
                    if (error && error.code) {
                        message = message + " with error code \"" + error.code + "\"";
                        if (error.code === _this.exchangeManifestNotInstalledErrorCode) {
                            if (Mscrm.Boot.activeBootManager.mode === Mscrm.MailAppMode.Module) {
                                code = Mscrm.Boot.ClientError.ModuleCallbackTokenUnsupported;
                            }
                            else {
                                code = Mscrm.Boot.ClientError.MailboxInstallationErrorCode;
                            }
                        }
                    }
                    Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError("GetCallbackTokenAsync failed", code), message);
                });
                return deferred;
            };
            CallbackTokenAuthenticationManager.prototype.retrieveExpiry = function () {
                return this.expiry;
            };
            CallbackTokenAuthenticationManager.prototype.updateAuthenticationCache = function (currentPrincipalEmail) {
                if (currentPrincipalEmail) {
                    var previousPrincipalEmail = Mscrm.Settings.Browser.getSetting(Mscrm.Settings.Keys.principalEmail);
                    if (currentPrincipalEmail !== previousPrincipalEmail) {
                        Mscrm.Logging.Logger.logInfo("New user has signed in. Clearing ADAL cache");
                        Mscrm.Settings.Browser.saveSetting(Mscrm.Settings.Keys.principalEmail, currentPrincipalEmail);
                    }
                }
            };
            CallbackTokenAuthenticationManager.prototype.getQueryParameters = function () {
                return '&liveid=1';
            };
            return CallbackTokenAuthenticationManager;
        }());
        Authentication.CallbackTokenAuthenticationManager = CallbackTokenAuthenticationManager;
    })(Authentication = Mscrm.Authentication || (Mscrm.Authentication = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Authentication;
    (function (Authentication) {
        var CookieAuthenticationManager = (function () {
            function CookieAuthenticationManager() {
                var port = window.location.port;
                var host = window.location.hostname;
                this.orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    this.orgUrl += ':' + port;
                }
            }
            CookieAuthenticationManager.prototype.initialize = function () {
                return false;
            };
            CookieAuthenticationManager.prototype.authenticate = function () {
                var _this = this;
                var deferred = $.Deferred();
                if (!Mscrm.Boot.activeBootManager.secondaryLoad) {
                    var url = this.orgUrl + "/crmmailapp/authcheck.aspx";
                    var authCheckRequest = new XMLHttpRequest();
                    authCheckRequest.onreadystatechange = function () {
                        if (authCheckRequest.readyState === 4) {
                            if (authCheckRequest.status != 200) {
                                var redirectUrl = _this.orgUrl + '/CrmMailApp/auth.aspx';
                                if (window != window.top) {
                                    window.authLoginCallback = function () {
                                        window.location.search += '&secondaryLoad=1';
                                    };
                                    window.open(redirectUrl);
                                }
                                else {
                                    var pathname = window.location.pathname;
                                    redirectUrl += '?MailAppRedirect=' + encodeURIComponent(pathname.substring(pathname.lastIndexOf('/') + 1) + window.location.search + '&secondaryLoad=1');
                                    window.location.href = redirectUrl;
                                }
                            }
                            else {
                                deferred.resolve(null);
                            }
                        }
                    };
                    authCheckRequest.open("GET", url, true);
                    authCheckRequest.send();
                }
                else {
                    deferred.resolve(null);
                }
                return deferred.promise();
            };
            CookieAuthenticationManager.prototype.retrieveExpiry = function () {
                return null;
            };
            CookieAuthenticationManager.prototype.updateAuthenticationCache = function (currentPrincipalEmail) {
                if (currentPrincipalEmail) {
                    var previousPrincipalEmail = Mscrm.Settings.Session.getSetting(Mscrm.Settings.Keys.principalEmail);
                    if (currentPrincipalEmail !== previousPrincipalEmail) {
                        Mscrm.Settings.Session.saveSetting(Mscrm.Settings.Keys.principalEmail, currentPrincipalEmail);
                    }
                }
            };
            CookieAuthenticationManager.prototype.getQueryParameters = function () {
                return '';
            };
            return CookieAuthenticationManager;
        }());
        Authentication.CookieAuthenticationManager = CookieAuthenticationManager;
    })(Authentication = Mscrm.Authentication || (Mscrm.Authentication = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Authentication;
    (function (Authentication) {
        var TokenAuthenticationManager = (function () {
            function TokenAuthenticationManager() {
                this.isTokenRetrievalPending = {};
                var env;
                var split = document.location.hostname.split('.');
                var crmSpecifier = split.slice(split.length - 3).join('.');
                switch (crmSpecifier) {
                    case 'crm.dynamics.com':
                        env = Environment.PROD;
                        break;
                    case 'crm.dynamics-int.com':
                        env = Environment.INT;
                        break;
                    case 'crm.crmlivetie.com':
                    case 'crm.1boxtest.com':
                        env = Environment.TIE;
                        break;
                    default:
                        env = Environment.PROD;
                }
                var clientId = '60216f25-dbae-452b-83ae-6224158ce95e';
                var authAuthority = env === Environment.PROD ? 'https://login.windows.net/' : 'https://login.windows-ppe.net/';
                var loginRedirectUri = 'https://' + document.location.hostname + '/CrmMailApp/auth.html';
                this.envConfig = new Mscrm.Settings.EnvironmentConfig(clientId, authAuthority, loginRedirectUri);
                var port = window.location.port;
                var host = window.location.hostname;
                this.orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    this.orgUrl += ':' + port;
                }
                this.defaultResource = this.orgUrl;
                var config = {
                    tenant: 'common',
                    clientId: this.envConfig.aadClientId,
                    instance: this.envConfig.authAuthority,
                    redirectUri: this.envConfig.loginRedirectUri,
                    debug: env != Environment.PROD,
                    cacheLocation: 'localStorage'
                };
                this.tokenDeferreds = {};
                this.adalContext = new window.AuthenticationContext(config);
            }
            TokenAuthenticationManager.prototype.initialize = function () {
                var isCallback = this.adalContext.isCallback(window.location.hash);
                this.adalContext.handleWindowCallback();
                return isCallback;
            };
            TokenAuthenticationManager.prototype.authenticate = function (resource, refreshToken) {
                if (!resource)
                    resource = this.defaultResource;
                return this.retrieveToken(resource, refreshToken);
            };
            TokenAuthenticationManager.prototype.retrieveToken = function (resource, refreshToken) {
                var _this = this;
                if (!resource) {
                    Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError("Resource is required for token retrieval", Mscrm.Boot.ClientError.SignInErrorCode), "TokenAuthenticationManager: Resource is required for token retrieval");
                }
                if (this.isTokenRetrievalPending[resource] || (this.tokenDeferreds[resource] && !refreshToken)) {
                    return this.tokenDeferreds[resource].promise();
                }
                var deferred = $.Deferred();
                this.isTokenRetrievalPending[resource] = true;
                this.tokenDeferreds[resource] = deferred;
                var user = this.adalContext.getCachedUser();
                var sw = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.Authentication.ADAL.AcquireToken");
                sw.start();
                var ua = new Mscrm.UserAgent.UserAgent();
                this.adalContext.acquireToken(resource, function (error, token) {
                    sw.stop();
                    if (error) {
                        if (error === "User login is required" || !Mscrm.Boot.activeBootManager.secondaryLoad) {
                            _this.adalContext.clearCache();
                            _this.login();
                        }
                        else {
                            var errorMessage = Mscrm.Resources.ResourceManager.getString("MailApp_Error_Trusted_Sites").format(_this.envConfig.authAuthority);
                            Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(errorMessage, Mscrm.Boot.ClientError.PopUpBlockErrorCode), "TokenAuthenticationManager: ADAL acquireToken error - " + error);
                        }
                    }
                    else {
                        _this.onTokenReady(token, resource);
                    }
                });
                return deferred.promise();
            };
            TokenAuthenticationManager.prototype.retrieveExpiry = function (resource) {
                if (resource === void 0) { resource = this.defaultResource; }
                var expiration = localStorage.getItem("adal.expiration.key" + resource);
                var expirationInt = parseInt(expiration);
                if (!isNaN(expirationInt)) {
                    return new Date(parseInt(expiration) * 1000);
                }
                return null;
            };
            TokenAuthenticationManager.prototype.login = function () {
                var _this = this;
                var adalSW = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.Authentication.ADAL.Login");
                var sw = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.Authentication.Login");
                sw.start();
                this.adalContext.config.displayCall = function (url) {
                    if (!_this.adalContext.getCachedUser()) {
                        var adalLoginCallback = function (responseBoxed) {
                            localStorage.setItem(Authentication.LOGIN_DIALOG_MODE_KEY, Authentication.LOGIN_DIALOG_MODE_VALUE_EXTERNAL);
                            window.adalLoginCallback = null;
                            var response = responseBoxed;
                            _this.adalContext.config.displayCall = null;
                            sw.stop();
                            if (!response.error) {
                                window.location.hash = response.hash;
                                _this.adalContext.handleWindowCallback();
                                adalSW.stop();
                                window.location.search += '&secondaryLoad=1';
                            }
                            else {
                                var internalError = response.error + (response.error_description ? " - " + response.error_description : "");
                                internalError += (response.error_code ? " (Code: " + response.error_code + ")" : "");
                                Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(internalError, Mscrm.Boot.ClientError.SignInErrorCode), internalError);
                                return;
                            }
                        };
                        window.adalLoginCallback = adalLoginCallback;
                        Mscrm.OfficeProvider.openLoginDialog(url, adalLoginCallback);
                    }
                };
                adalSW.start();
                this.adalContext.login();
            };
            TokenAuthenticationManager.prototype.onTokenReady = function (accessToken, resource) {
                if (!accessToken) {
                    Mscrm.Logging.Logger.logError("Null accessToken received from auth iframe", "authentication");
                    return;
                }
                if (this.tokenDeferreds[resource]) {
                    var deferred = this.tokenDeferreds[resource];
                    this.tokenDeferreds[resource] = null;
                    this.isTokenRetrievalPending[resource] = false;
                    deferred.resolve(accessToken);
                }
            };
            TokenAuthenticationManager.prototype.updateAuthenticationCache = function (currentPrincipalEmail) {
                if (currentPrincipalEmail) {
                    var previousPrincipalEmail = Mscrm.Settings.Browser.getSetting(Mscrm.Settings.Keys.principalEmail);
                    if (currentPrincipalEmail !== previousPrincipalEmail) {
                        Mscrm.Logging.Logger.logInfo("New user has signed in. Clearing ADAL cache");
                        this.adalContext.clearCache();
                        Mscrm.Settings.Browser.saveSetting(Mscrm.Settings.Keys.principalEmail, currentPrincipalEmail);
                    }
                }
            };
            TokenAuthenticationManager.prototype.getQueryParameters = function () {
                return '&liveid=1';
            };
            return TokenAuthenticationManager;
        }());
        Authentication.TokenAuthenticationManager = TokenAuthenticationManager;
    })(Authentication = Mscrm.Authentication || (Mscrm.Authentication = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Authentication;
    (function (Authentication) {
        var OnPremAuthenticationManager = (function () {
            function OnPremAuthenticationManager(orgId, externalDomain) {
                this.requestedResourceKey = 'MailAppRequestedResource';
                this.tokenKeyPrefix = 'MailAppToken_';
                this.tokenExpiryKeyPrefix = 'MailAppTokenExpiry_';
                this.timeOutValue = 10000;
                this.isTokenRetrievalPending = false;
                this.clientId = orgId;
                this.externalDomain = externalDomain;
                var port = window.location.port;
                var host = window.location.hostname;
                this.orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    this.orgUrl += ':' + port;
                }
                this.redirectUri = this.orgUrl + '/crmmailapp/code_auth.aspx';
                this.oAuthDiscoveryEndpoint = this.orgUrl + '/XRMServices/2011/Organization.svc/web?SdkClientVersion=7.0.0000';
            }
            OnPremAuthenticationManager.prototype.initialize = function () {
                var isCallback = window.location.hash.length > 1 && window.location.search.indexOf('expiry') > -1;
                if (isCallback) {
                    try {
                        var search = window.location.search;
                        var queryExpiry = parseInt(search.slice(search.indexOf('expiry')).split('&')[0].split('=')[1]);
                        this.onTokenReady(window.location.hash.slice(1), localStorage.getItem(this.requestedResourceKey), queryExpiry);
                        return true;
                    }
                    catch (e) { }
                }
                var storedToken = localStorage.getItem(this.tokenKeyPrefix + this.orgUrl);
                var storedExpiry = localStorage.getItem(this.tokenExpiryKeyPrefix + this.orgUrl);
                if (storedToken && storedExpiry) {
                    try {
                        var expiry = new Date(parseInt(storedExpiry));
                        if (expiry < new Date(Date.now() + (5 * 60 * 1000)) || isNaN(expiry.getTime()) || storedToken == 'undefined') {
                            this.clearCache();
                        }
                        else {
                            this.accessToken = storedToken;
                            this.expiry = expiry;
                        }
                    }
                    catch (e) {
                        this.clearCache();
                    }
                }
                return false;
            };
            OnPremAuthenticationManager.prototype.clearCache = function (resource) {
                if (resource === void 0) { resource = this.orgUrl; }
                localStorage.removeItem(this.requestedResourceKey);
                localStorage.removeItem(this.tokenKeyPrefix + resource);
                localStorage.removeItem(this.tokenExpiryKeyPrefix + resource);
            };
            OnPremAuthenticationManager.prototype.authenticate = function (resource, refreshToken) {
                return this.retrieveToken(refreshToken);
            };
            OnPremAuthenticationManager.prototype.discoverEndpointAndResource = function () {
                if (this.endpointDeferred) {
                    return this.endpointDeferred.promise();
                }
                var deferred = $.Deferred();
                var req = new XMLHttpRequest();
                req.open('GET', this.oAuthDiscoveryEndpoint, true);
                req.setRequestHeader('Authorization', 'Bearer');
                req.onreadystatechange = function () {
                    if (req.readyState === 4) {
                        var resourceId;
                        var authorizationUri;
                        var wwwHeader = req.getResponseHeader('WWW-Authenticate');
                        if (wwwHeader) {
                            wwwHeader = wwwHeader.toLowerCase();
                            if (wwwHeader.indexOf('bearer') === 0) {
                                wwwHeader = wwwHeader.slice(6);
                                var split = wwwHeader.split(',');
                                for (var i = 0; i < split.length; i++) {
                                    var component = split[i].trim();
                                    if (component.indexOf('authorization_uri') != -1) {
                                        var uriSplit = component.split('=');
                                        if (uriSplit.length > 1) {
                                            authorizationUri = uriSplit[1];
                                        }
                                        else {
                                            var internalError = "oAuth Discovery did not return authorization_uri";
                                            Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(internalError, Mscrm.Boot.ClientError.SignInErrorCode), internalError);
                                            deferred.reject(new Error(internalError));
                                            return;
                                        }
                                    }
                                    else if (component.indexOf('resource_id') != -1) {
                                        var resourceSplit = component.split('=');
                                        if (resourceSplit.length > 1) {
                                            resourceId = resourceSplit[1];
                                        }
                                    }
                                }
                            }
                            else {
                                var internalError = "OnPremAuthenticationManager: oAuth Discovery response did not contain 'bearer'";
                                Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(internalError, Mscrm.Boot.ClientError.SignInErrorCode), internalError);
                                deferred.reject(new Error(internalError));
                                return;
                            }
                        }
                        deferred.resolve([authorizationUri, resourceId]);
                    }
                };
                req.send();
                this.endpointDeferred = deferred;
                return this.endpointDeferred.promise();
            };
            OnPremAuthenticationManager.prototype.retrieveToken = function (refreshToken) {
                var _this = this;
                if ((!this.tokenDeferred || refreshToken) && !this.isTokenRetrievalPending) {
                    this.isTokenRetrievalPending = true;
                    this.tokenDeferred = $.Deferred();
                    this.retrieveTokenInternal(refreshToken);
                    this.tokenDeferred.done(function () {
                        _this.isTokenRetrievalPending = false;
                    });
                }
                return this.tokenDeferred.promise();
            };
            OnPremAuthenticationManager.prototype.retrieveTokenInternal = function (refreshToken) {
                var _this = this;
                if (this.accessToken && !refreshToken) {
                    this.tokenDeferred.resolve(this.accessToken);
                    return;
                }
                this.discoverEndpointAndResource().then(function (results) {
                    var authorizationUri = results[0];
                    var resourceId = results[1] || _this.orgUrl;
                    Mscrm.Utilities.generateKey().then(function (stateKey) {
                        var tokenCallback = function (responseBoxed) {
                            var response = responseBoxed;
                            if (response.error) {
                                var internalError = response.error + (response.error_description ? " - " + response.error_description : "");
                                internalError += (response.error_code ? " (Code: " + response.error_code + ")" : "");
                                Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(internalError, Mscrm.Boot.ClientError.SignInErrorCode), internalError);
                                return;
                            }
                            if (stateKey === response.state_key) {
                                var expiry = Date.now() + parseInt(response.expires_in, 10) * 1000;
                                _this.onTokenReady(response.access_token, resourceId, expiry);
                            }
                            else {
                                var internalError = "OnPremAuthenticationManager: State mismatch";
                                Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(internalError, Mscrm.Boot.ClientError.SignInErrorCode), internalError);
                            }
                        };
                        window.adfsLoginCallback = tokenCallback;
                        var oAuthUrl = authorizationUri +
                            '?client_id=' + _this.clientId +
                            '&redirect_uri=' + _this.redirectUri +
                            '&resource=' + resourceId +
                            '&response_type=code' +
                            '&state=' + authorizationUri + '?client_id=' + _this.clientId + '-' + stateKey;
                        var signOutUri = authorizationUri.substring(0, authorizationUri.lastIndexOf('/adfs')) + '/adfs/ls/?wa=wsignout1.0';
                        var url = _this.orgUrl + '/crmmailapp/out.html?sign_out_uri=' + encodeURIComponent(signOutUri) + '&auth_uri=' + encodeURIComponent(oAuthUrl);
                        if (!Mscrm.OfficeProvider.openLoginDialog(url, tokenCallback) && new Mscrm.UserAgent.BrowserValidator().isBrowserIE()) {
                            var errorMessage_1 = Mscrm.Resources.ResourceManager.getString(Mscrm.Boot.ErrorManager.getResourceName(Mscrm.Boot.ClientError.PopUpBlockErrorCode))
                                .format(_this.orgUrl, authorizationUri.substring(0, authorizationUri.lastIndexOf('/adfs')), _this.externalDomain);
                            var loggingMessage_1 = "OnPremAuthenticationManager: Pop up blocker or trusted URLs error";
                            setTimeout(function () {
                                Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(errorMessage_1, Mscrm.Boot.ClientError.PopUpBlockErrorCode), loggingMessage_1);
                            }, _this.timeOutValue);
                        }
                    }, function (error) {
                        Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError("OnPremAuthenticationManager: Failed to generate auth key - " + error, Mscrm.Boot.ClientError.SignInErrorCode), "OnPremAuthenticationManager: Failed to generate auth key - " + error);
                    });
                }, function (error) {
                    Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(error.message, Mscrm.Boot.ClientError.SignInErrorCode), "OnPremAuthenticationManager: Failed to discover auth endpoint - " + error.message);
                });
            };
            OnPremAuthenticationManager.prototype.retrieveExpiry = function () {
                return this.expiry;
            };
            OnPremAuthenticationManager.prototype.onTokenReady = function (accessToken, resource, expiry) {
                localStorage.setItem('MailAppToken_' + this.orgUrl, accessToken);
                localStorage.setItem('MailAppTokenExpiry_' + this.orgUrl, expiry.toString());
                this.expiry = new Date(expiry);
                this.accessToken = accessToken;
                if (this.tokenDeferred) {
                    this.tokenDeferred.resolve(accessToken);
                }
            };
            OnPremAuthenticationManager.prototype.updateAuthenticationCache = function (currentPrincipalEmail) {
                if (currentPrincipalEmail) {
                    var previousPrincipalEmail = Mscrm.Settings.Browser.getSetting(Mscrm.Settings.Keys.principalEmail);
                    if (currentPrincipalEmail !== previousPrincipalEmail) {
                        Mscrm.Logging.Logger.logInfo("New user has signed in. Clearing ADAL cache");
                        this.clearCache();
                        Mscrm.Settings.Browser.saveSetting(Mscrm.Settings.Keys.principalEmail, currentPrincipalEmail);
                    }
                }
            };
            OnPremAuthenticationManager.prototype.getQueryParameters = function () {
                return '&liveid=1';
            };
            return OnPremAuthenticationManager;
        }());
        Authentication.OnPremAuthenticationManager = OnPremAuthenticationManager;
    })(Authentication = Mscrm.Authentication || (Mscrm.Authentication = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Boot;
    (function (Boot) {
        var BootManager = (function () {
            function BootManager() {
                this.orgConfigExpiryPeriod = 1;
                this.clientLoader = new Boot.ClientLoader('WebView', document.getElementById('content'));
                Boot.activeBootManager = this;
                this.parseQueryParameters();
            }
            BootManager.prototype.isOutlookMobile = function () {
                return this.deviceType == DeviceType.Phone ||
                    window.navigator.userAgent.indexOf("iPhone") != -1 ||
                    window.navigator.appVersion.indexOf("Phone") != -1 ||
                    window.navigator.userAgent.indexOf("Android") != -1;
            };
            BootManager.prototype.start = function (forcedOrgConfig) {
                var _this = this;
                var loadingContainer = $("#loadingContainer");
                if (this.isOutlookMobile()) {
                    loadingContainer.children(".mailApp").addClass("outlookMobile");
                }
                loadingContainer.show();
                this.updateLoadingText("MoCA_OWA_Assets_Loading_Message");
                switch (this.useAuthMethod) {
                    case AuthMethod.Token:
                        this.authManager = new Mscrm.Authentication.TokenAuthenticationManager();
                        break;
                    case AuthMethod.Cookie:
                        this.authManager = new Mscrm.Authentication.CookieAuthenticationManager();
                        break;
                    case AuthMethod.Default:
                    default:
                        if (this.deploymentEnvironment === 'onprem') {
                            this.authManager = new Mscrm.Authentication.OnPremAuthenticationManager(this.orgId, this.externalDomain);
                        }
                        else {
                            if (this.serviceDeploymentEnvironment === 'online') {
                                this.authManager = new Mscrm.Authentication.CallbackTokenAuthenticationManager();
                            }
                            else {
                                this.authManager = new Mscrm.Authentication.TokenAuthenticationManager();
                            }
                        }
                        break;
                }
                this.loadClient();
                Mscrm.Performance.PerformanceStopwatch.addRetroactiveStopWatch("MailAppShim.CSSInit", window.ShimPageLoadStartTime, window.ShimJsLoadStartTime);
                Mscrm.Performance.PerformanceStopwatch.addRetroactiveStopWatch("MailAppShim.JsLoad", window.ShimJsLoadStartTime, window.ShimJsLoadEndTime);
                var sw = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.BrowserCompatCheck");
                sw.start();
                var deviceValidator = new Mscrm.UserAgent.DeviceValidator();
                var browserValidator = new Mscrm.UserAgent.BrowserValidator();
                if (!browserValidator.isBrowserSupported()) {
                    Boot.ErrorManager.handleError(new Boot.ClientError('Browser', Boot.ClientError.BrowserSupportErrorCode), "Browser not supported");
                    return;
                }
                if (deviceValidator.isMobileDevice() && this.serviceDeploymentEnvironment == "onprem") {
                    Boot.ErrorManager.handleError(new Boot.ClientError('MobileBrowser', Boot.ClientError.MobileBrowserSupportErrorCode), "Mobile not supported for OnPrem");
                    return;
                }
                sw.stop();
                sw = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.DeviceCompatCheck");
                sw.start();
                if (!deviceValidator.isDeviceSupported()) {
                    Boot.ErrorManager.handleError(new Boot.ClientError('Device', Boot.ClientError.DeviceSupportErrorCode), "Device not supported");
                    return;
                }
                sw.stop();
                this.authSW = new Mscrm.Performance.PerformanceStopwatch("MailAppShim.Authentication");
                this.authSW.start();
                this.updateLoadingText("MoCA_OWA_Authentication_Loading_Message");
                if (!this.authManager.initialize()) {
                    var exchangeApiProvider = Mscrm.Exchange.ExchangeApiProvider.getInstance();
                    exchangeApiProvider.initialize(this.authManager, this.serviceDeploymentEnvironment, Mscrm.OfficeProvider.getDiagnostics(), this.deploymentEnvironment);
                    this.authManager.updateAuthenticationCache(Mscrm.OfficeProvider.getUserProfile().emailAddress);
                    this.authManager.authenticate(null, false).then(this.onAuthenticated.bind(this), function (err) {
                        Mscrm.Logging.Logger.logError("Failed to acquire auth token: " + JSON.stringify(err), "authentication");
                        _this.authSW.stop();
                        _this.authSW.report();
                    });
                }
            };
            BootManager.prototype.unloadClient = function () {
                this.clientLoader.unloadClient();
            };
            BootManager.prototype.updateLoadingText = function (resourceId) {
                var text = Mscrm.Resources.ResourceManager.getString(resourceId);
                Mscrm.Boot.UIManager.showProgressMsg(text);
            };
            BootManager.prototype.loadClient = function () {
                Mscrm.Performance.PerformanceMarker.addMarker("MailAppShim.ClientLoadStart");
                this.clientLoader.loadClient(this.authManager);
                this.updateLoadingText("MoCA_OWA_Client_Assets_Loading_Message");
            };
            BootManager.prototype.onAuthenticated = function (token) {
                this.crmProvider = new Mscrm.Crm.CrmProvider(token);
                this.authSW.stop();
                this.authSW.report();
                this.token = token;
                this.reportMailboxId();
                this.clientLoader.postAuthLoad(token);
            };
            BootManager.prototype.parseQueryParameters = function () {
                if (window.location.search && window.location.search.length > 0) {
                    var params = {};
                    var paramStr = window.location.search.substr(1);
                    var paramPairs = paramStr.split('&');
                    for (var i = 0; i < paramPairs.length; i++) {
                        var splitPair = paramPairs[i].split('=');
                        params[splitPair[0]] = splitPair[1];
                    }
                    this.displayMode = params['mailAppMode'];
                    this.orgName = params['org'];
                    this.deploymentEnvironment = params['de'];
                    this.serviceDeploymentEnvironment = params['sde'];
                    this.orgId = params['orgId'];
                    this.externalDomain = params['ed'];
                    this.secondaryLoad = params['secondaryLoad'] && (params['secondaryLoad'] === "true" || params['secondaryLoad'] === "1");
                    if (params['useAuthMethod'] === AuthMethod.Token.toString()) {
                        this.useAuthMethod = AuthMethod.Token;
                    }
                    else if (params['useAuthMethod'] === AuthMethod.Cookie.toString()) {
                        this.useAuthMethod = AuthMethod.Cookie;
                    }
                    else {
                        this.useAuthMethod = AuthMethod.Default;
                    }
                    this.showPerformance = params['showperf'] && params['showperf'] === 'true';
                    this.collectorService = params['collectorurl'];
                    if (this.displayMode.indexOf('Compose') != -1) {
                        this.mode = MailAppMode.Compose;
                    }
                    else if (this.displayMode.indexOf('Module') != -1) {
                        this.mode = MailAppMode.Module;
                    }
                    else {
                        this.mode = MailAppMode.Read;
                    }
                    this.deviceType = DeviceType.Desktop;
                    if (this.displayMode !== undefined) {
                        if (this.displayMode.indexOf('Phone') != -1) {
                            this.deviceType = DeviceType.Phone;
                        }
                        else if (this.displayMode.indexOf('Tablet') != -1) {
                            this.deviceType = DeviceType.Tablet;
                        }
                    }
                }
            };
            BootManager.prototype.reportMailboxId = function () {
                var report = function (eventValues) {
                    Mscrm.Telemetry.TelemetryReporter.getInstance().reportEvent(new Mscrm.Telemetry.TelemetryEvent("mailapp_crm_mailbox_info", eventValues));
                };
                this.crmProvider.getUserMailboxId().then(function (mailboxId) {
                    report({ MailboxId: mailboxId });
                }, function (error) {
                    report({ Message: "Failed to retrieve mailbox id on the CRM server with message: " + error.message });
                });
            };
            BootManager.minimalSupportedServerVersion = '8.0.0.0';
            return BootManager;
        }());
        Boot.BootManager = BootManager;
    })(Boot = Mscrm.Boot || (Mscrm.Boot = {}));
    var CachedOrganizationConfig = (function () {
        function CachedOrganizationConfig(organizationConfig) {
            this.organizationConfig = organizationConfig;
            this.cachedDate = new Date();
        }
        return CachedOrganizationConfig;
    }());
    (function (DeviceType) {
        DeviceType[DeviceType["Desktop"] = 0] = "Desktop";
        DeviceType[DeviceType["Tablet"] = 1] = "Tablet";
        DeviceType[DeviceType["Phone"] = 2] = "Phone";
    })(Mscrm.DeviceType || (Mscrm.DeviceType = {}));
    var DeviceType = Mscrm.DeviceType;
    (function (MailAppMode) {
        MailAppMode[MailAppMode["Read"] = 0] = "Read";
        MailAppMode[MailAppMode["Compose"] = 1] = "Compose";
        MailAppMode[MailAppMode["Module"] = 2] = "Module";
    })(Mscrm.MailAppMode || (Mscrm.MailAppMode = {}));
    var MailAppMode = Mscrm.MailAppMode;
    var AuthMethod;
    (function (AuthMethod) {
        AuthMethod[AuthMethod["Default"] = 0] = "Default";
        AuthMethod[AuthMethod["Token"] = 1] = "Token";
        AuthMethod[AuthMethod["Cookie"] = 2] = "Cookie";
    })(AuthMethod || (AuthMethod = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Boot;
    (function (Boot) {
        var LocalStorage = window.localStorage;
        var CrmDataLoader = (function () {
            function CrmDataLoader(token, orgUrl, itemType) {
                this.token = token;
                this.orgUrl = orgUrl;
                this.itemType = itemType;
                this.metadataServiceCalled = false;
                this.componentsWithMissingOrExpiredCache = [];
                this.cachedDataComponentKeys = {
                    "entityMetadata": "MailAppInitialData_EntityMetadata",
                    "applicationMetadata": "MailAppInitialData_ApplicationMetadata",
                    "userContextRequestData": "MailAppInitialData_UserContextRequestData",
                    "userContext": "MailAppInitialData_UserContext",
                    "userValidation": "MailAppInitialData_UserValidation",
                    "userValidation:message": "MailAppInitialData_UserValidation:message",
                    "userValidation:appointment": "MailAppInitialData_UserValidation:appointment",
                    "userValidation:module": "MailAppInitialData_UserValidation:module",
                    "metadataUpdateRequired": "MailAppInitialData_MetadataUpdateRequired"
                };
            }
            CrmDataLoader.prototype.callLoadData = function (webMethod, token, deferred, name, data, cacheExists) {
                var _this = this;
                this.loadData(webMethod, token, name, data).then(function (response) {
                    _this.metadataServiceCalled = true;
                    if (response.d && response.d.TimeStamp) {
                        response.TimeStamp = response.d.TimeStamp;
                    }
                    deferred.resolve(response);
                }, function (error) {
                    if (cacheExists && error.status == 503) {
                        deferred.resolve(null);
                    }
                    deferred.reject(error);
                });
            };
            CrmDataLoader.prototype.loadData = function (webMethod, token, name, data) {
                var _this = this;
                var deferred = $.Deferred();
                var startTime = Date.now();
                $.ajax({
                    url: "/AppWebServices/MailAppInitialDataService.asmx/" + webMethod,
                    type: "POST",
                    data: data,
                    beforeSend: function (xhr) {
                        if (token) {
                            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                        }
                    },
                    contentType: "application/json;charset=utf-8"
                }).done(function (receivedData) {
                    var error = _this.getErrorFromResponsePayload(receivedData ? receivedData.d : null, name);
                    if (!error) {
                        _this.recordAndReportPerformanceStopwatch(webMethod, startTime, Date.now());
                        deferred.resolve(receivedData.d);
                    }
                    else {
                        deferred.reject(error);
                    }
                }).fail(function (error) {
                    if (error.status !== 503) {
                        error['message'] = webMethod + " request failed: " + error.status + " - " + error.statusText;
                    }
                    deferred.reject(error);
                });
                return deferred;
            };
            CrmDataLoader.prototype.isMetadataUpdateRequired = function (maxCacheAge) {
                var deferred = $.Deferred();
                var cachedItem = this.loadCachedData(CrmDataLoader.metadataUpdateRequiredKey);
                if (cachedItem != null && cachedItem.TimeStamp != null) {
                    if ((maxCacheAge && cachedItem.TimeStamp && new Date(cachedItem.TimeStamp).getTime() + maxCacheAge < Date.now())) {
                        deferred.resolve(false);
                    }
                    else {
                        deferred.resolve(cachedItem.data.IsRequired);
                    }
                }
                else {
                    deferred.resolve(false);
                }
                return deferred;
            };
            CrmDataLoader.prototype.loadDataWithCaching = function (webMethod, name, token, backgroundCheckDeferred, externalTimeStamp, maxCacheAge, data) {
                var _this = this;
                var deferred = $.Deferred();
                var loadDataWhileCacheIsMissingOrExpired = function (isCacheExists) {
                    _this.componentsWithMissingOrExpiredCache.push(name);
                    _this.callLoadData(webMethod, token, deferred, name, data, isCacheExists);
                    if (backgroundCheckDeferred) {
                        backgroundCheckDeferred.resolve(false);
                    }
                };
                var cachedItem = this.loadCachedData(name);
                if (cachedItem != null && cachedItem.TimeStamp != null) {
                    if ((maxCacheAge &&
                        cachedItem.TimeStamp &&
                        new Date(cachedItem.TimeStamp).getTime() + maxCacheAge < Date.now()) ||
                        this.getErrorFromResponsePayload(cachedItem.data, name)) {
                        loadDataWhileCacheIsMissingOrExpired(true);
                    }
                    else {
                        deferred.resolve(name == CrmDataLoader.applicationMetadataKey ? cachedItem.data.Metadata : cachedItem.data);
                        if (backgroundCheckDeferred != null) {
                            if (externalTimeStamp != null) {
                                externalTimeStamp.done(function (timeStamp) {
                                    if (timeStamp && (new Date(cachedItem.data.TimeStamp)).getTime() < timeStamp.getTime()) {
                                        Mscrm.Logging.Logger.logInfo("Cached initial data component '" + name + "' has outdated timestamp - refresh required", "ClientLoader");
                                        backgroundCheckDeferred.resolve(true);
                                    }
                                    else {
                                        backgroundCheckDeferred.resolve(false);
                                    }
                                });
                            }
                            else if (name == CrmDataLoader.entityMetadataKey) {
                                var timestampWebMethod = webMethod + "Timestamp";
                                var requestLoadStartTime = Date.now();
                                $.ajax({
                                    url: "/AppWebServices/MailAppInitialDataService.asmx/" + timestampWebMethod,
                                    type: "POST",
                                    data: {},
                                    beforeSend: function (xhr) {
                                        if (token) {
                                            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                                        }
                                    },
                                    contentType: "application/json;charset=utf-8",
                                    dataType: "json"
                                }).done(function (data) {
                                    _this.recordAndReportPerformanceStopwatch(timestampWebMethod, requestLoadStartTime, Date.now());
                                    if (cachedItem.data.TimeStamp != data.d.TimeStamp) {
                                        Mscrm.Logging.Logger.logInfo("Cached initial data component '" + name + "' has outdated timestamp - refresh required", "ClientLoader");
                                        backgroundCheckDeferred.resolve(true);
                                    }
                                    else {
                                        backgroundCheckDeferred.resolve(false);
                                    }
                                }).fail(function (result) {
                                    Boot.ErrorManager.handleError(new Boot.ClientError('Error_Message_Generic_Mobile_Client', Boot.ClientError.BootRequestFailedErrorCode), timestampWebMethod + " request failed: " + result.status + " - " + result.statusText, false);
                                    backgroundCheckDeferred.resolve(false);
                                });
                            }
                            else {
                                this.callLoadData(webMethod, token, backgroundCheckDeferred, name, data, true);
                            }
                        }
                    }
                }
                else {
                    loadDataWhileCacheIsMissingOrExpired(false);
                }
                return deferred;
            };
            CrmDataLoader.prototype.getErrorFromResponsePayload = function (data, name) {
                switch (name) {
                    case CrmDataLoader.applicationMetadataKey:
                        if (data) {
                            data = data.Metadata ? data.Metadata : data;
                            for (var key in data) {
                                if (data.hasOwnProperty(key)) {
                                    var metadata = data[key];
                                    if (!metadata.Status.Success && metadata.Status.Errors) {
                                        return {
                                            code: metadata.Status.Errors[0].ErrorCode,
                                            message: "Error when retrieving application metadata: " + metadata.Status.Errors[0].StackTrace,
                                            name: "Application metadata error"
                                        };
                                    }
                                }
                            }
                            return null;
                        }
                        else {
                            return {
                                code: Boot.ClientError.GenericErrorCode,
                                message: "Error when retrieving application metadata",
                                name: "Application metadata error"
                            };
                        }
                    case CrmDataLoader.entityMetadataKey:
                        if (data && data.Metadata) {
                            return null;
                        }
                        else {
                            return {
                                code: Boot.ClientError.BootRequestFailedErrorCode,
                                message: "Error when retrieving entity metadata",
                                name: "Entity metadata error"
                            };
                        }
                    case CrmDataLoader.userContextKey:
                    case CrmDataLoader.userValidationKey + ":" + this.itemType:
                        if (!data || !data.Status) {
                            return {
                                code: Boot.ClientError.BootRequestFailedErrorCode,
                                message: "Error when retrieving " + name,
                                name: name + " error"
                            };
                        }
                        else if (data.Status.Errors && data.Status.Errors[0]) {
                            var error = data.Status.Errors[0];
                            return {
                                code: error.ErrorCode,
                                message: error.ErrorMessage || error.Message,
                                name: name + " error"
                            };
                        }
                        else if (!data.Status.Success) {
                            return {
                                code: Boot.ClientError.BootRequestFailedErrorCode,
                                message: "Error when retrieving " + name,
                                name: name + " error"
                            };
                        }
                        else {
                            return null;
                        }
                    default:
                        return null;
                }
            };
            CrmDataLoader.prototype.putIntoInlinedAppData = function (name, data) {
                if (data === null || data === undefined) {
                    data = this.loadCachedData(name);
                }
                if (Mscrm) {
                    Mscrm.InlinedAppData = Mscrm.InlinedAppData || {};
                    Mscrm.InlinedAppData[name] = data;
                }
            };
            CrmDataLoader.prototype.loadCachedData = function (name) {
                var storageItem = this.cachedDataComponentKeys[name] && LocalStorage && LocalStorage.getItem(this.cachedDataComponentKeys[name]);
                if (storageItem) {
                    return CachedInitialData.Deserialize(storageItem);
                }
                return null;
            };
            CrmDataLoader.prototype.setCachedData = function (name, data) {
                try {
                    LocalStorage.setItem(this.cachedDataComponentKeys[name], data.Serialize());
                }
                catch (err) {
                    Mscrm.Logging.Logger.logWarning("Error happens during set item: '" + err.message + "'", 'LocalStoarge');
                }
            };
            CrmDataLoader.prototype.removeCachedData = function (name) {
                LocalStorage.removeItem(this.cachedDataComponentKeys[name]);
            };
            CrmDataLoader.prototype.refreshCachedData = function (name, data, indexedDbName) {
                var _this = this;
                if (indexedDbName === void 0) { indexedDbName = null; }
                if (indexedDbName) {
                    this.cleanupIndexedDb(indexedDbName).done(function () {
                        _this.removeCachedData(name);
                        _this.setCachedData(name, data);
                    });
                }
                else {
                    this.removeCachedData(name);
                    this.setCachedData(name, data);
                }
            };
            CrmDataLoader.prototype.cleanupIndexedDb = function (name) {
                var deferred = $.Deferred();
                if (window.indexedDB) {
                    try {
                        var DBOpenRequest = window.indexedDB.open(this.orgUrl);
                        DBOpenRequest.onsuccess = function (event) {
                            var db = DBOpenRequest.result;
                            try {
                                db.deleteObjectStore(name);
                            }
                            catch (ex) {
                                db.close();
                                deferred.resolve(null);
                            }
                        };
                        DBOpenRequest.onerror = function (event) {
                            deferred.reject(event);
                        };
                    }
                    catch (ex) {
                        deferred.resolve(null);
                    }
                }
                else {
                    deferred.resolve(null);
                }
                return deferred;
            };
            CrmDataLoader.prototype.recordAndReportPerformanceStopwatch = function (webMethod, startTime, endTime) {
                Mscrm.Performance.PerformanceStopwatch.addRetroactiveStopWatch("MailAppShim.Request_" + webMethod, startTime, Date.now(), true);
            };
            CrmDataLoader.userContextRequestDataKey = "userContextRequestData";
            CrmDataLoader.userContextKey = "userContext";
            CrmDataLoader.senderDataKey = "senderData";
            CrmDataLoader.entityMetadataKey = "entityMetadata";
            CrmDataLoader.applicationMetadataKey = "applicationMetadata";
            CrmDataLoader.userValidationKey = "userValidation";
            CrmDataLoader.metadataUpdateRequiredKey = "metadataUpdateRequired";
            return CrmDataLoader;
        }());
        Boot.CrmDataLoader = CrmDataLoader;
        var CachedInitialData = (function () {
            function CachedInitialData(data) {
                this.data = data;
            }
            CachedInitialData.prototype.Serialize = function () {
                return JSON.stringify(this);
            };
            CachedInitialData.Deserialize = function (data) {
                var cached = JSON.parse(data);
                cached.TimeStamp = cached.data.TimeStamp || cached.TimeStamp;
                cached.PullTimeStamp = cached.data.PullTimeStamp || cached.PullTimeStamp;
                return cached;
            };
            return CachedInitialData;
        }());
        Boot.CachedInitialData = CachedInitialData;
    })(Boot = Mscrm.Boot || (Mscrm.Boot = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Boot;
    (function (Boot) {
        var BootType;
        (function (BootType) {
            BootType[BootType["Cold"] = 0] = "Cold";
            BootType[BootType["Warm"] = 1] = "Warm";
        })(BootType || (BootType = {}));
        var InitialDataLoader = (function (_super) {
            __extends(InitialDataLoader, _super);
            function InitialDataLoader(emails, token, orgUrl, itemType, userContextLoadedCallback, allMetadataLoadedCallback) {
                var _this = this;
                _super.call(this, token, orgUrl, itemType);
                this.initialTimeoutDuration = 10 * 1000;
                this.metadataTimeoutDuration = 20 * 1000;
                this.userContextMaxCacheAge = 8 * 60 * 60 * 1000;
                this.internetConnectionTimeout = 2 * 1000;
                var userContextDataCache = this.loadCachedData(Boot.CrmDataLoader.userContextRequestDataKey);
                var userContextRequestData = {
                    "lastUserSyncTime": userContextDataCache != null && userContextDataCache.TimeStamp != null ? userContextDataCache.TimeStamp : null,
                    "userRoles": userContextDataCache != null ? userContextDataCache.data.Roles : [],
                    "entitiesToSync": userContextDataCache != null ? userContextDataCache.data.EntitiesToSync : []
                };
                var userContextBackgroundCheck = $.Deferred();
                var userContext = this.loadDataWithCaching("GetUserContext", Boot.CrmDataLoader.userContextKey, this.token, userContextBackgroundCheck, null, this.userContextMaxCacheAge, JSON.stringify(userContextRequestData));
                var senderData = this.loadData("ResolveRecipients", this.token, Boot.CrmDataLoader.senderDataKey, JSON.stringify({ "emails": emails }));
                var userRequestTimeout = setTimeout(function () {
                    var errorMessage = 'Server is responding very slow. Try again later.';
                    var errorCode = Boot.ClientError.InternetConnectionErrorCode;
                    var networkAvailableTimeout = setTimeout(function () {
                        Boot.ErrorManager.handleError(new Boot.ClientError(errorMessage, errorCode), "No internet connection", true);
                    }, _this.internetConnectionTimeout);
                    Mscrm.Utilities.IsNetworkAvailable().done(function (response) {
                        clearTimeout(networkAvailableTimeout);
                        var logMessage = "No internet connection";
                        if (response) {
                            errorCode = Boot.ClientError.BootRequestFailedErrorCode;
                            logMessage = "GetUserContext request timeout";
                            errorMessage = 'Error_Message_Generic_Mobile_Client';
                        }
                        Boot.ErrorManager.handleError(new Boot.ClientError(errorMessage, errorCode), logMessage, true);
                    });
                }, this.initialTimeoutDuration);
                senderData.then(function (senderDataResponse) {
                    _this.putIntoInlinedAppData(Boot.CrmDataLoader.senderDataKey, senderDataResponse);
                    InitialDataLoader.senderDataPromise.resolve(senderDataResponse);
                }, function (error) {
                    InitialDataLoader.senderDataPromise.reject(error);
                });
                var timestampPromise = $.Deferred();
                userContextBackgroundCheck.done(function (userContextResponse) {
                    if (userContextResponse) {
                        var backGroundTimeStamp = new Date(parseInt(userContextResponse.MetadataLastModifiedTime.replace("/Date(", "").replace(")/", "")));
                        _this.cacheUserContext(userContextResponse, backGroundTimeStamp);
                        timestampPromise.resolve(backGroundTimeStamp);
                    }
                    else {
                        timestampPromise.resolve(null);
                    }
                });
                userContext.done(function (userContextResponse) {
                    if (userContextResponse) {
                        clearTimeout(userRequestTimeout);
                        _this.putIntoInlinedAppData(Boot.CrmDataLoader.userContextKey, userContextResponse);
                        var applicationMetadataTimeStamp_1 = new Date(parseInt(userContextResponse.MetadataLastModifiedTime.replace("/Date(", "").replace(")/", "")));
                        if (_this.metadataServiceCalled) {
                            _this.cacheUserContext(userContextResponse, applicationMetadataTimeStamp_1);
                            timestampPromise.resolve(applicationMetadataTimeStamp_1);
                        }
                        userContextLoadedCallback();
                        var metadataRequestTimeout = setTimeout(function () {
                            Boot.UIManager.showWarning(Mscrm.Resources.ResourceManager.getString("MoCA_OWA_App_Longer"));
                            var message = "GetApplicationMetadata request timed out after " + _this.metadataTimeoutDuration / 1000 + " seconds";
                            Boot.ErrorManager.handleError(new Boot.ClientError('Error_Message_Generic_Mobile_Client', Boot.ClientError.BootRequestFailedErrorCode), message, false);
                        }, _this.metadataTimeoutDuration);
                        var entityMetadataBackgroundCheck = $.Deferred();
                        var applicationMetadataBackgroundCheck = $.Deferred();
                        var entityMetadata = _this.loadDataWithCaching("GetEntityMetadata", Boot.CrmDataLoader.entityMetadataKey, _this.token, entityMetadataBackgroundCheck);
                        var applicationMetadata = _this.loadDataWithCaching("GetApplicationMetadata", Boot.CrmDataLoader.applicationMetadataKey, _this.token, applicationMetadataBackgroundCheck, timestampPromise);
                        var isMetadataUpdateRequired = _this.isMetadataUpdateRequired(_this.userContextMaxCacheAge);
                        entityMetadata.fail(function (error) {
                            clearTimeout(metadataRequestTimeout);
                            Boot.ErrorManager.handleError(new Boot.ClientError('Error_Message_Generic_Mobile_Client', Boot.ClientError.BootRequestFailedErrorCode), error.message, true);
                        });
                        applicationMetadata.fail(function (error) {
                            clearTimeout(metadataRequestTimeout);
                            Boot.ErrorManager.handleError(new Boot.ClientError('Error_Message_Generic_Mobile_Client', Boot.ClientError.BootRequestFailedErrorCode), error.message, true);
                        });
                        $.when(entityMetadata, applicationMetadata, isMetadataUpdateRequired).done(function (entityMetadataResponse, applicationMetadataResponse, metadataUpdateRequired) {
                            clearTimeout(metadataRequestTimeout);
                            if (_this.metadataServiceCalled) {
                                _this.refreshCachedData(Boot.CrmDataLoader.entityMetadataKey, new Boot.CachedInitialData({ "Metadata": entityMetadataResponse, "TimeStamp": entityMetadataResponse.TimeStamp }));
                                _this.refreshCachedData(Boot.CrmDataLoader.applicationMetadataKey, new Boot.CachedInitialData({ "Metadata": applicationMetadataResponse, "TimeStamp": applicationMetadataTimeStamp_1 }), "applicationmetadata");
                                _this.refreshCachedData(Boot.CrmDataLoader.metadataUpdateRequiredKey, new Boot.CachedInitialData({ "IsRequired": metadataUpdateRequired }));
                            }
                            else {
                                if (metadataUpdateRequired) {
                                    _this.refreshCachedData(Boot.CrmDataLoader.metadataUpdateRequiredKey, new Boot.CachedInitialData({ "IsRequired": false }));
                                }
                            }
                            _this.putIntoInlinedAppData(Boot.CrmDataLoader.entityMetadataKey, entityMetadataResponse);
                            _this.putIntoInlinedAppData(Boot.CrmDataLoader.applicationMetadataKey, applicationMetadataResponse);
                            _this.putIntoInlinedAppData(Boot.CrmDataLoader.metadataUpdateRequiredKey, metadataUpdateRequired);
                            _this.reportInitialDataInfo();
                            allMetadataLoadedCallback();
                        });
                        $.when(entityMetadataBackgroundCheck, applicationMetadataBackgroundCheck).done(function (entityMetadataCheckResponse, applicationMetadataCheckResponse) {
                            var metadataChangesDetected = applicationMetadataCheckResponse || entityMetadataCheckResponse;
                            if (applicationMetadataCheckResponse) {
                                var appMetadataLoad = $.Deferred();
                                _this.callLoadData("GetApplicationMetadata", _this.token, appMetadataLoad, Boot.CrmDataLoader.applicationMetadataKey);
                                appMetadataLoad.then(function (appResponse) {
                                    _this.metadataServiceCalled = false;
                                    var userContext = _this.loadCachedData(Boot.CrmDataLoader.userContextRequestDataKey);
                                    _this.refreshCachedData(Boot.CrmDataLoader.applicationMetadataKey, new Boot.CachedInitialData({ "Metadata": appResponse, "TimeStamp": userContext.TimeStamp }), "applicationmetadata");
                                }, function (error) {
                                    Boot.ErrorManager.handleError(new Boot.ClientError('Error_Message_Generic_Mobile_Client', Boot.ClientError.BootRequestFailedErrorCode), error.message, false);
                                });
                            }
                            if (entityMetadataCheckResponse) {
                                var entityMetadataLoad = $.Deferred();
                                _this.callLoadData("GetEntityMetadata", _this.token, entityMetadataLoad, Boot.CrmDataLoader.entityMetadataKey);
                                entityMetadataLoad.then(function (entityResponse) {
                                    _this.metadataServiceCalled = false;
                                    _this.refreshCachedData(Boot.CrmDataLoader.entityMetadataKey, new Boot.CachedInitialData({ "Metadata": entityResponse, "TimeStamp": entityResponse.TimeStamp }));
                                }, function (error) {
                                    Boot.ErrorManager.handleError(new Boot.ClientError('Error_Message_Generic_Mobile_Client', Boot.ClientError.BootRequestFailedErrorCode), error.message, false);
                                });
                            }
                            if (metadataChangesDetected) {
                                var userContext = _this.loadCachedData(Boot.CrmDataLoader.userContextRequestDataKey);
                                _this.refreshCachedData(Boot.CrmDataLoader.metadataUpdateRequiredKey, new Boot.CachedInitialData({ "IsRequired": metadataChangesDetected, "TimeStamp": userContext.TimeStamp }));
                            }
                        });
                    }
                }).fail(function (error) {
                    clearTimeout(userRequestTimeout);
                    if (error.status === 503) {
                        Boot.ErrorManager.handleError(new Boot.ClientError(Mscrm.Resources.ResourceManager.getString("MailApp_Error_Metadata_Unavailable"), Boot.ClientError.BootRequestFailedErrorCode), "UserContext: Application Metadata Unavailable", true);
                    }
                    else {
                        var msg = 'Error_Message_Generic_Mobile_Client';
                        var code = Boot.ClientError.BootRequestFailedErrorCode;
                        if (error.code) {
                            code = error.code;
                            msg = error.message;
                        }
                        Boot.ErrorManager.handleError(new Boot.ClientError(msg, code), error.message, true);
                    }
                });
            }
            InitialDataLoader.prototype.cacheUserContext = function (userContextResponse, applicationMetadataTimeStamp) {
                var data = new Boot.CachedInitialData(userContextResponse);
                data.TimeStamp = Date.now().toString();
                this.refreshCachedData(Boot.CrmDataLoader.userContextKey, data);
                this.metadataServiceCalled = false;
                this.setCachedData(Boot.CrmDataLoader.userContextRequestDataKey, new Boot.CachedInitialData({
                    "TimeStamp": applicationMetadataTimeStamp,
                    "Roles": userContextResponse.UserRoles ? userContextResponse.UserRoles : [],
                    "EntitiesToSync": userContextResponse.EntityMetadataSyncConfiguration ? userContextResponse.EntityMetadataSyncConfiguration.EntitiesToSync : []
                }));
            };
            InitialDataLoader.prototype.getCurrentBootType = function () {
                if (this.componentsWithMissingOrExpiredCache.indexOf(Boot.CrmDataLoader.applicationMetadataKey) === -1 &&
                    this.componentsWithMissingOrExpiredCache.indexOf(Boot.CrmDataLoader.userContextKey) === -1) {
                    return BootType.Warm;
                }
                return BootType.Cold;
            };
            InitialDataLoader.prototype.clearCache = function () {
                this.cleanupIndexedDb("applicationmetadata");
                this.removeCachedData(Boot.CrmDataLoader.entityMetadataKey);
                this.removeCachedData(Boot.CrmDataLoader.applicationMetadataKey);
            };
            InitialDataLoader.prototype.reportInitialDataInfo = function () {
                Mscrm.Telemetry.TelemetryReporter.getInstance().reportEvent(new Mscrm.Telemetry.TelemetryEvent("mailapp_initial_data_info", {
                    BootType: this.getCurrentBootType()
                }));
            };
            InitialDataLoader.senderDataPromise = $.Deferred();
            return InitialDataLoader;
        }(Boot.CrmDataLoader));
        Boot.InitialDataLoader = InitialDataLoader;
    })(Boot = Mscrm.Boot || (Mscrm.Boot = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Boot;
    (function (Boot) {
        var UIManager = (function () {
            function UIManager() {
            }
            UIManager.showWarning = function (message) {
                $("#loadingContainer .warningTextContainer").html(message);
            };
            UIManager.showProgressMsg = function (message) {
                $("#loadingContainer .title").html(message);
            };
            return UIManager;
        }());
        Boot.UIManager = UIManager;
    })(Boot = Mscrm.Boot || (Mscrm.Boot = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Boot;
    (function (Boot) {
        var UserValidation = (function (_super) {
            __extends(UserValidation, _super);
            function UserValidation(token, org, itemType) {
                _super.call(this, token, org, itemType);
                this.userValidationMaxCacheAge = 8 * 60 * 60 * 1000;
            }
            UserValidation.prototype.validate = function () {
                var _this = this;
                var userValidationBackgroundCheck = $.Deferred();
                var userValidationCacheKey = Boot.CrmDataLoader.userValidationKey + ":" + this.itemType;
                var userValidationCache = this.loadCachedData(userValidationCacheKey);
                if (userValidationCache && userValidationCache.data.UserEmailAddress.toLowerCase() != Mscrm.OfficeProvider.getUserProfile().emailAddress.toLowerCase()) {
                    this.removeCachedData(userValidationCacheKey);
                }
                var userValidation = this.loadDataWithCaching("GetUserValidation", userValidationCacheKey, this.token, userValidationBackgroundCheck, null, this.userValidationMaxCacheAge, JSON.stringify({ "messageType": this.itemType }));
                userValidation.then(function (userValidationResponse) {
                    if (_this.itemType !== "module") {
                        _this.putIntoInlinedAppData(Boot.CrmDataLoader.userValidationKey, userValidationResponse);
                    }
                    _this.cacheUserValidation(userValidationResponse);
                    userValidationBackgroundCheck.then(function (userValidationBackground) {
                        _this.cacheUserValidation(userValidationBackground);
                    }, function (error) {
                        if (!error.status) {
                            _this.removeCachedData(userValidationCacheKey);
                        }
                    });
                }, function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (error.code === -2147085822) {
                        errorCode = Boot.ClientError.SSSNotSetErrorCode;
                    }
                    if (errorCode === Boot.ClientError.SSSNotSetErrorCode) {
                        errorMessage = "Mailbox isn't configured with Microsoft Dynamics 365 server-side synchronization for incoming email.";
                    }
                    Boot.ErrorManager.handleError(new Boot.ClientError("Error_Message_Generic_Mobile_Client", errorCode), errorMessage);
                });
            };
            UserValidation.prototype.cacheUserValidation = function (userValidationResponse) {
                if (userValidationResponse) {
                    var data = new Boot.CachedInitialData(userValidationResponse);
                    data.TimeStamp = Date.now().toString();
                    this.refreshCachedData(Boot.CrmDataLoader.userValidationKey + ":" + this.itemType, data);
                }
            };
            return UserValidation;
        }(Boot.CrmDataLoader));
        Boot.UserValidation = UserValidation;
    })(Boot = Mscrm.Boot || (Mscrm.Boot = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Crm;
    (function (Crm) {
        var AjaxParams = (function () {
            function AjaxParams() {
            }
            return AjaxParams;
        }());
        var ServicesMap = (function () {
            function ServicesMap() {
            }
            ServicesMap.retrieveCurrentUserMailBoxId = "/AppWebServices/MailboxService.asmx/RetrieveCurrentUserMailBoxId";
            return ServicesMap;
        }());
        var CrmProvider = (function () {
            function CrmProvider(authToken) {
                this._authToken = authToken;
            }
            CrmProvider.prototype.getUserMailboxId = function () {
                var deferred = $.Deferred();
                var params = new AjaxParams();
                params.url = ServicesMap.retrieveCurrentUserMailBoxId;
                this.sendRequest(params).then(function (response) {
                    if (response && typeof (response.d) === "string" && response.d.length > 3) {
                        deferred.resolve(response.d.substring(1, response.d.length - 1));
                    }
                    else {
                        deferred.reject(new Error("The server response has unexpected format"));
                    }
                }, function (error) {
                    var errorMessage = "Something when wrong during user mailbox retrieval";
                    if (error) {
                        errorMessage = error.responseText;
                    }
                    deferred.reject(new Error(errorMessage));
                });
                return deferred.promise();
            };
            CrmProvider.prototype.sendRequest = function (params) {
                var _this = this;
                if (!params.dataType) {
                    params.dataType = "json";
                }
                if (!params.contentType) {
                    params.contentType = "application/json;charset=utf-8";
                }
                if (!params.type) {
                    params.type = "POST";
                }
                var originalBeforeSend = params.beforeSend;
                params.beforeSend = function (xhr) {
                    if (_this._authToken) {
                        xhr.setRequestHeader("Authorization", "Bearer " + _this._authToken);
                    }
                    if (originalBeforeSend) {
                        originalBeforeSend(xhr);
                    }
                };
                return $.ajax(params);
            };
            return CrmProvider;
        }());
        Crm.CrmProvider = CrmProvider;
    })(Crm = Mscrm.Crm || (Mscrm.Crm = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var DispatcherBase = (function () {
            function DispatcherBase(bridge) {
                this.bridge = bridge;
                this._methods = {};
            }
            DispatcherBase.prototype.registerMethods = function () {
            };
            DispatcherBase.prototype.registerMethodWithName = function (name, func, args, callbacks) {
                if (!func) {
                    Mscrm.Logging.Logger.logError("Null argument passed to registerMethodWithName", this.namespace + "Dispatcher");
                    return;
                }
                if (name in this._methods) {
                    Mscrm.Logging.Logger.logError("Trying to register a method twice with the same name", this.namespace + "Dispatcher");
                    return;
                }
                var method = new Dispatchers.DispatcherMethod(this, name, func, args, callbacks);
                this._methods[name] = method;
            };
            DispatcherBase.prototype.callMethodWithName = function (name, methodCall) {
                if (!name || !methodCall) {
                    Mscrm.Logging.Logger.logError("Null argument passed into callMethodWithName", this.namespace + "Dispatcher");
                    return;
                }
                var method = this._methods[name];
                if (!method) {
                    Mscrm.Logging.Logger.logError("Attempting to call unknown method: " + name, this.namespace + "Dispatcher");
                    return;
                }
                method.invoke(methodCall);
            };
            DispatcherBase.prototype.getInitialState = function () {
                return {};
            };
            DispatcherBase.prototype.unload = function () {
            };
            return DispatcherBase;
        }());
        Dispatchers.DispatcherBase = DispatcherBase;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var NavigationDispatcher = (function (_super) {
            __extends(NavigationDispatcher, _super);
            function NavigationDispatcher(bridge) {
                _super.call(this, bridge);
                this.behavior = BackBehavior.CLOSESHIM;
                this.namespace = "Navigation";
            }
            NavigationDispatcher.prototype.updateBackBehavior = function (methodCall) {
                this.behavior = methodCall.args["behavior"];
                if (window.history && typeof window.history.pushState === "function") {
                    this.bindBackButtonBehavior();
                }
            };
            NavigationDispatcher.prototype.onBackPressed = function () {
                switch (this.behavior) {
                    case BackBehavior.CALLAPPCODE:
                        this.bridge.changeStateForDispatcher(this.namespace, "OnBackButtonPressed", true);
                        break;
                    case BackBehavior.CLOSESHIM:
                    default:
                        break;
                }
            };
            NavigationDispatcher.prototype.bindBackButtonBehavior = function () {
                switch (this.behavior) {
                    case BackBehavior.CALLAPPCODE:
                        window.history.pushState({}, "BackPressed");
                        window.onpopstate = this.onBackPressed.bind(this);
                        break;
                    case BackBehavior.CLOSESHIM:
                    default:
                        window.onpopstate = null;
                        window.history.back();
                        break;
                }
            };
            NavigationDispatcher.prototype.registerMethods = function () {
                this.registerMethodWithName("updateBackBehavior", this.updateBackBehavior, { "behavior": BackBehavior.CALLAPPCODE }, {});
            };
            return NavigationDispatcher;
        }(Dispatchers.DispatcherBase));
        Dispatchers.NavigationDispatcher = NavigationDispatcher;
        (function (BackBehavior) {
            BackBehavior[BackBehavior["CLOSESHIM"] = 0] = "CLOSESHIM";
            BackBehavior[BackBehavior["CALLAPPCODE"] = 1] = "CALLAPPCODE";
        })(Dispatchers.BackBehavior || (Dispatchers.BackBehavior = {}));
        var BackBehavior = Dispatchers.BackBehavior;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var EmailContext;
    (function (EmailContext) {
        var MAX_SELECTED_EMAILS = 50;
        var AddinEmailProperties = (function () {
            function AddinEmailProperties(baseObj) {
                this.emailKeys = Array();
                this.savedSelectedRecipients = {};
                if (baseObj && baseObj.emailKeys && baseObj.savedSelectedRecipients) {
                    this.emailKeys = baseObj.emailKeys;
                    this.savedSelectedRecipients = baseObj.savedSelectedRecipients;
                }
            }
            AddinEmailProperties.prototype.add = function (itemId, email) {
                if (!this.savedSelectedRecipients[itemId]) {
                    this.emailKeys.push(itemId);
                    var numberToPurge = this.emailKeys.length - MAX_SELECTED_EMAILS;
                    if (numberToPurge > 0) {
                        this.purge(numberToPurge);
                    }
                }
                else {
                    this.touch(itemId);
                }
                this.savedSelectedRecipients[itemId] = email;
            };
            AddinEmailProperties.prototype.getEmail = function (itemId) {
                var email = "";
                if (itemId && this.savedSelectedRecipients[itemId]) {
                    email = this.savedSelectedRecipients[itemId];
                }
                return email;
            };
            AddinEmailProperties.prototype.purge = function (numberToPurge) {
                for (var i = 0; i < numberToPurge; i++) {
                    delete this.savedSelectedRecipients[this.emailKeys[0]];
                    this.emailKeys.splice(0, 1);
                }
            };
            AddinEmailProperties.prototype.touch = function (itemId) {
                var itemIds = this.emailKeys;
                var targetIndex = itemIds.indexOf(itemId);
                var endIndex = itemIds.length - 1;
                for (var i = targetIndex; i < endIndex; ++i) {
                    var temp = itemIds[i];
                    itemIds[i] = itemIds[i + 1];
                    itemIds[i + 1] = temp;
                }
            };
            AddinEmailProperties.prototype.length = function () {
                return this.emailKeys.length;
            };
            return AddinEmailProperties;
        }());
        EmailContext.AddinEmailProperties = AddinEmailProperties;
    })(EmailContext = Mscrm.EmailContext || (Mscrm.EmailContext = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var AttachmentInfo = (function () {
            function AttachmentInfo(attachmentIds, ewsUrl) {
                this.AttachmentIds = attachmentIds;
                this.EwsUrl = ewsUrl;
            }
            return AttachmentInfo;
        }());
        Exchange.AttachmentInfo = AttachmentInfo;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        (function (MailItemState) {
            MailItemState[MailItemState["NotLinked"] = 0] = "NotLinked";
            MailItemState[MailItemState["WillBeLinked"] = 1] = "WillBeLinked";
            MailItemState[MailItemState["IsLinked"] = 2] = "IsLinked";
            MailItemState[MailItemState["WillBeUnlinked"] = 3] = "WillBeUnlinked";
            MailItemState[MailItemState["WillBeUnlinkedAndDeleted"] = 4] = "WillBeUnlinkedAndDeleted";
        })(Exchange.MailItemState || (Exchange.MailItemState = {}));
        var MailItemState = Exchange.MailItemState;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var EmailContext;
    (function (EmailContext_1) {
        var EmailContext = (function () {
            function EmailContext() {
            }
            return EmailContext;
        }());
        EmailContext_1.EmailContext = EmailContext;
    })(EmailContext = Mscrm.EmailContext || (Mscrm.EmailContext = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var ItemPropertyNames = (function () {
            function ItemPropertyNames() {
            }
            ItemPropertyNames.CrmLinkState = "crmLinkState";
            ItemPropertyNames.CrmRegardingId = "crmRegardingId";
            ItemPropertyNames.CrmRegardingObjectType = "crmRegardingObjectType";
            ItemPropertyNames.Regarding = "Regarding";
            ItemPropertyNames.CrmId = "crmid";
            ItemPropertyNames.CrmIsFollowed = "crmIsFollowed";
            ItemPropertyNames.CrmObjectTypeCode = "crmObjectTypeCode";
            ItemPropertyNames.ShouldBeLinkedBefore = "ShouldBeLinkedBefore";
            ItemPropertyNames.Categories = "Categories";
            ItemPropertyNames.CrmCategoryTracker = "crmCategoryTracker";
            return ItemPropertyNames;
        }());
        Exchange.ItemPropertyNames = ItemPropertyNames;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var Property = (function () {
            function Property(propertyName, propertyType) {
                this.propertyName = propertyName;
                this.propertyType = propertyType;
            }
            Property.prototype.toSoap = function () {
                return "<t:FieldURI FieldURI=\"" + Exchange.PropertyType[this.propertyType].toLocaleLowerCase() + ":" + this.propertyName + "\" />";
            };
            Property.notSupported = "Not supported";
            return Property;
        }());
        Exchange.Property = Property;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        (function (ItemType) {
            ItemType[ItemType["message"] = 0] = "message";
            ItemType[ItemType["appointment"] = 1] = "appointment";
            ItemType[ItemType["contact"] = 2] = "contact";
            ItemType[ItemType["folder"] = 3] = "folder";
        })(Exchange.ItemType || (Exchange.ItemType = {}));
        var ItemType = Exchange.ItemType;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var EmailContext;
    (function (EmailContext) {
        var AttachmentInfo = Mscrm.Exchange.AttachmentInfo;
        var ItemPropertyNames = Mscrm.Exchange.ItemPropertyNames;
        var ItemType = Mscrm.Exchange.ItemType;
        var EmailContextRetriever = (function () {
            function EmailContextRetriever() {
                this.emailContext = new EmailContext.EmailContext();
                this.defaultTimeoutDuration = 30000;
                this.getItemTimeOutDuration = 3000;
                if (EmailContextRetriever.instance) {
                    throw new Error("EmailContextRetriever.getInstance() should be used instead of new()");
                }
            }
            EmailContextRetriever.getInstance = function () {
                return this.instance;
            };
            EmailContextRetriever.prototype.retrieveEmailInfo = function () {
                var _this = this;
                this.emailContextRetrievedDeferred = $.Deferred();
                this.itemId = Mscrm.OfficeProvider.getEmailItem().itemId;
                if (this.itemId) {
                    this.retrieveEmailInfoInternal();
                }
                else {
                    Mscrm.OfficeProvider.tryToSaveItemAsync().then(function (itemId) {
                        _this.itemId = itemId;
                        _this.retrieveEmailInfoInternal();
                    }, function (error) {
                        _this.emailContextRetrievedDeferred.reject(error);
                    });
                }
                return this.emailContextRetrievedDeferred;
            };
            EmailContextRetriever.prototype.retrieveAddinSpecificCustomProperties = function () {
                var _this = this;
                this.addinSpecificCustomPropsRetrievedDeferred = $.Deferred();
                Mscrm.OfficeProvider.retrieveAddinSpecificCustomProperties().then(function (customProps) {
                    _this.addinSpecificCustomPropsRetrievedDeferred.resolve(customProps);
                }, function (error) {
                    _this.addinSpecificCustomPropsRetrievedDeferred.reject(error);
                });
                return this.addinSpecificCustomPropsRetrievedDeferred;
            };
            EmailContextRetriever.prototype.retrieveAttachmentsAsync = function (attachmentDetails) {
                return this.retrieveAttachmentInfo(attachmentDetails);
            };
            EmailContextRetriever.prototype.retrieveEmailInfoInternal = function () {
                var _this = this;
                this.getItem().then(function () {
                    if (_this.emailContext.emailItem) {
                        _this.emailContextRetrievedDeferred.resolve(_this.emailContext);
                    }
                }, function (error) {
                    Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(error.message, Mscrm.Boot.ClientError.ExchangeRequestFailedErrorCode), error.message, false);
                    _this.emailContextRetrievedDeferred.reject({ code: EmailContext.EmailItemRetrieveState.ExchangeCallError, message: "Error happened while executing an exchange call." });
                });
            };
            EmailContextRetriever.prototype.retrieveAttachmentInfo = function (attachmentDetails) {
                var deferred = $.Deferred();
                var attachmentIds = new Array();
                attachmentDetails.forEach(function (attachmentDetail) {
                    attachmentIds.push(attachmentDetail.id);
                });
                var attachmentInfo = new AttachmentInfo(attachmentIds, Mscrm.OfficeProvider.getEwsUrl());
                deferred.resolve(attachmentInfo);
                return deferred;
            };
            EmailContextRetriever.prototype.getItem = function () {
                var _this = this;
                var deferred = $.Deferred();
                var maxErrorRetries = 3;
                var maxIntervalRetries = 10;
                var retryCount = 0;
                var getEmailRequest = (function (itemId) {
                    var emailItemDeferred = Mscrm.ExchangeProvider.retrieveEmailItem(itemId);
                    var startDeferred = Mscrm.OfficeProvider.getStart();
                    var endDeferred = Mscrm.OfficeProvider.getEnd();
                    $.when(emailItemDeferred, startDeferred, endDeferred).then(function (result, start, end) {
                        _this.populateEmailContextWithItemData(result, start, end);
                        deferred.resolve(result);
                    }, function (error) {
                        retryCount++;
                        if (error.code.toString() === 'ErrorItemNotFound') {
                            if (retryCount < maxIntervalRetries) {
                                setTimeout(function () {
                                    getEmailRequest(_this.itemId);
                                }, _this.getItemTimeOutDuration);
                            }
                            else {
                                deferred.reject(error);
                            }
                        }
                        else {
                            if (retryCount < maxErrorRetries) {
                                getEmailRequest(_this.itemId);
                            }
                            else {
                                deferred.reject(error);
                            }
                        }
                    });
                });
                getEmailRequest(this.itemId);
                return deferred.promise();
            };
            EmailContextRetriever.prototype.populateEmailContextWithItemData = function (result, start, end) {
                if (result) {
                    if (!result.error) {
                        var exchangeItem = result.value;
                        var emailItem = Mscrm.OfficeProvider.getEmailItem();
                        this.emailContext.parentFolderId = exchangeItem.ParentFolderId;
                        if (emailItem.itemType === ItemType[ItemType.appointment]) {
                            this.emailContext.emailItem = new EmailContext.AppointmentItem(this.itemId, emailItem.internetMessageId);
                            this.populateEmailContextWithAppointmentItemData(exchangeItem, start, end);
                        }
                        else {
                            this.emailContext.emailItem = new EmailContext.EmailItem(this.itemId, emailItem.internetMessageId);
                        }
                        var linkState = parseInt(exchangeItem[ItemPropertyNames.CrmLinkState]);
                        if (!isNaN(linkState)) {
                            this.emailContext.emailItem.State = linkState;
                        }
                        this.emailContext.emailItem.RegardingObjectId = exchangeItem[ItemPropertyNames.CrmRegardingId];
                        this.emailContext.emailItem.RegardingObjectType = exchangeItem[ItemPropertyNames.CrmRegardingObjectType];
                        this.emailContext.emailItem.RegardingObjectName = exchangeItem[ItemPropertyNames.Regarding];
                        this.emailContext.emailItem.CrmId = exchangeItem[ItemPropertyNames.CrmId];
                        this.emailContext.emailItem.CrmIsFollowed = exchangeItem[ItemPropertyNames.CrmIsFollowed];
                        this.emailContext.emailItem.CrmObjectTypeCode = exchangeItem[ItemPropertyNames.CrmObjectTypeCode];
                        this.emailContext.emailItem.Categories = exchangeItem[ItemPropertyNames.Categories];
                        this.emailContext.emailItem.CrmCategoryTracker = exchangeItem[ItemPropertyNames.CrmCategoryTracker];
                        this.emailContext.emailItem.ItemType = emailItem.itemType;
                        this.emailContext.emailItem.ItemClass = emailItem.itemClass;
                        this.emailContext.emailItem.ShouldBeLinkedBefore = exchangeItem[ItemPropertyNames.ShouldBeLinkedBefore];
                        this.emailContext.emailItem.ConversationIndex = exchangeItem.ConversationIndex;
                        this.emailContext.ExchangeResponseCode = "NoError";
                    }
                    else {
                        this.emailContext.ExchangeResponseCode = result.error.code.toString();
                    }
                }
            };
            EmailContextRetriever.prototype.populateEmailContextWithAppointmentItemData = function (exchangeItem, start, end) {
                var appointmentItem = this.emailContext.emailItem;
                appointmentItem.CalendarItemType = exchangeItem.CalendarItemType;
                appointmentItem.Location = exchangeItem.Location;
                appointmentItem.IsRecurring = exchangeItem.Recurrence != null;
                appointmentItem.IsAllDayEvent = false;
                appointmentItem.RecurrencePatternDetails = null;
                appointmentItem.LegacyFreeBusyStatus = exchangeItem.LegacyFreeBusyStatus;
                if (exchangeItem.IsAllDayEvent != null) {
                    appointmentItem.IsAllDayEvent = exchangeItem.IsAllDayEvent.toString() === "true";
                }
                if (appointmentItem.IsRecurring) {
                    appointmentItem.RecurrencePatternDetails = this.setRecurrencePatternDetails(appointmentItem, exchangeItem.Recurrence);
                }
                if (start) {
                    appointmentItem.ScheduleStart = start;
                }
                if (end) {
                    appointmentItem.ScheduleEnd = end;
                }
            };
            EmailContextRetriever.prototype.setRecurrencePatternDetails = function (appointmentItem, recurrence) {
                var DayOfWeekIndex = { 'First': 1, 'Second': 2, 'Third': 3, 'Fourth': 4, 'Last': 5 };
                var recurrencePatternItem = new EmailContext.RecurrencePatternItem();
                var recurrencePattern = recurrence.Pattern;
                var type = recurrencePattern.Type;
                recurrencePatternItem.RecurrencePatternType = type;
                recurrencePatternItem.IsNthMonthly = false;
                recurrencePatternItem.IsNthYearly = false;
                recurrencePatternItem.IsWeekDayPattern = false;
                if (type.indexOf("Daily") !== -1) {
                    recurrencePatternItem.RecurrencePatternType = 0;
                    recurrencePatternItem.Interval = parseInt(recurrencePattern.Interval);
                    recurrencePatternItem.DayOfMonth = 1;
                    recurrencePatternItem.MonthOfYear = 0;
                }
                else if (type.indexOf("Weekly") !== -1) {
                    recurrencePatternItem.RecurrencePatternType = 1;
                    recurrencePatternItem.Interval = parseInt(recurrencePattern.Interval);
                    recurrencePatternItem.DayOfMonth = 1;
                    recurrencePatternItem.MonthOfYear = 0;
                    recurrencePatternItem.DaysOfWeekMask = this.getDaysOfWeek(recurrencePatternItem.RecurrencePatternType, recurrencePattern.DaysOfWeek);
                }
                else if (type.indexOf("AbsoluteMonthly") !== -1) {
                    recurrencePatternItem.RecurrencePatternType = 2;
                    recurrencePatternItem.IsRelativeMonthlyRecurrencePattern = false;
                    recurrencePatternItem.Interval = parseInt(recurrencePattern.Interval);
                    recurrencePatternItem.DayOfMonth = parseInt(recurrencePattern.DayOfMonth);
                    recurrencePatternItem.MonthOfYear = 0;
                }
                else if (type.indexOf("RelativeMonthly") !== -1) {
                    recurrencePatternItem.RecurrencePatternType = 2;
                    recurrencePatternItem.IsRelativeMonthlyRecurrencePattern = true;
                    recurrencePatternItem.Interval = parseInt(recurrencePattern.Interval);
                    recurrencePatternItem.DaysOfWeekMask = this.getDaysOfWeek(recurrencePatternItem.RecurrencePatternType, recurrencePattern.DaysOfWeek);
                    recurrencePatternItem.DayOfWeekIndex = parseInt(DayOfWeekIndex[recurrencePattern.DayOfWeekIndex].toString());
                    recurrencePatternItem.MonthOfYear = 0;
                }
                else if (type.indexOf("AbsoluteYearly") !== -1) {
                    recurrencePatternItem.RecurrencePatternType = 3;
                    recurrencePatternItem.IsRelativeYearlyRecurrencePattern = false;
                    recurrencePatternItem.DayOfMonth = parseInt(recurrencePattern.DayOfMonth);
                    recurrencePatternItem.MonthOfYear = parseInt(recurrencePattern.MonthOfYear);
                }
                else if (type.indexOf("RelativeYearly") !== -1) {
                    recurrencePatternItem.RecurrencePatternType = 3;
                    recurrencePatternItem.IsRelativeYearlyRecurrencePattern = true;
                    recurrencePatternItem.DaysOfWeekMask = this.getDaysOfWeek(recurrencePatternItem.RecurrencePatternType, recurrencePattern.DaysOfWeek);
                    recurrencePatternItem.DayOfWeekIndex = parseInt(DayOfWeekIndex[recurrencePattern.DayOfWeekIndex].toString());
                    recurrencePatternItem.MonthOfYear = parseInt(recurrencePattern.MonthOfYear);
                }
                var recurrenceRange = recurrence.Range;
                if (recurrenceRange.Type.indexOf("NoEnd") !== -1) {
                    recurrencePatternItem.PatternEndType = 1;
                    recurrencePatternItem.PatternStartDate = new Date(recurrenceRange.StartDate);
                    recurrencePatternItem.PatternEndDate = null;
                }
                else if (recurrenceRange.Type.indexOf("EndDate") !== -1) {
                    recurrencePatternItem.PatternEndType = 3;
                    recurrencePatternItem.PatternStartDate = new Date(recurrenceRange.StartDate);
                    recurrencePatternItem.PatternEndDate = new Date(recurrenceRange.EndDate);
                }
                return recurrencePatternItem;
            };
            EmailContextRetriever.prototype.getDaysOfWeek = function (recurrencePatternType, daysOfWeek) {
                var DaysOfWeekMask = { "None": 0, "Sunday": 1, "Monday": 2, "Tuesday": 4, "Wednesday": 8, "Thursday": 16, "Friday": 32, "Weekdays": 62, "Saturday": 64, "WeekendDays": 65, "AllDays": 127 };
                var daysOfWeekMask = 0;
                var daysArray = daysOfWeek.split(" ");
                switch (recurrencePatternType) {
                    case 1:
                        for (var i = 0; i < daysArray.length; i++) {
                            var day = daysArray[i];
                            daysOfWeekMask |= parseInt(DaysOfWeekMask[day]);
                        }
                        break;
                    case 2:
                    case 3:
                        daysOfWeekMask = parseInt(DaysOfWeekMask[daysArray[0]]);
                }
                return daysOfWeekMask;
            };
            EmailContextRetriever.instance = new EmailContextRetriever();
            return EmailContextRetriever;
        }());
        EmailContext.EmailContextRetriever = EmailContextRetriever;
    })(EmailContext = Mscrm.EmailContext || (Mscrm.EmailContext = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Boot;
    (function (Boot) {
        var ClientError = (function () {
            function ClientError(message, code, nativeError) {
                this.message = message;
                this.code = code;
                this.nativeError = nativeError;
                if (!nativeError) {
                    try {
                        throw new Error('');
                    }
                    catch (e) {
                        this.nativeError = e;
                        this.nativeError.message = e.stack;
                    }
                }
            }
            ClientError.GenericErrorCode = 0x8005f210;
            ClientError.DeviceSupportErrorCode = 0x80061200;
            ClientError.BrowserSupportErrorCode = 0x80061201;
            ClientError.SignInErrorCode = 0x8005f215;
            ClientError.PopUpBlockErrorCode = 0x80061210;
            ClientError.ServerConnectionErrorCode = 0x8005f204;
            ClientError.InternetConnectionErrorCode = 0x80061212;
            ClientError.MailboxInstallationErrorCode = 0x80061213;
            ClientError.MobileBrowserSupportErrorCode = 0x80061208;
            ClientError.NoMinimumRequiredPrivilegesForTabletApp = 0x8005F20F;
            ClientError.ModuleCallbackTokenUnsupported = 0x8006FFFF;
            ClientError.BootRequestFailedErrorCode = 0x80070000;
            ClientError.ExchangeRequestFailedErrorCode = 0x80070001;
            ClientError.SSSNotSetErrorCode = 0x80061202;
            return ClientError;
        }());
        Boot.ClientError = ClientError;
        var ErrorManager = (function () {
            function ErrorManager() {
            }
            ErrorManager.showErrorDialog = function (title, message, clientError, loggingMessage) {
                var _this = this;
                var helpLink = this.getHelpLink(clientError);
                if (!this.isErrorShowing) {
                    this.isErrorShowing = true;
                    if (title.indexOf('_Title') === -1) {
                        $("#errorDialog .errorTitle").text(title);
                    }
                    else {
                        $("#errorDialog .errorTitle").text(Mscrm.Resources.ResourceManager.getString("MoCA_OWA_Generic_Error_Title"));
                    }
                    $("#errorDialog .errorMessage").text(message);
                    if (helpLink) {
                        $("#errorDialog .helpLink a")
                            .attr("href", helpLink)
                            .text(Mscrm.Resources.ResourceManager.getString("MoCA_OWA_Help_Link_Text"));
                        $("#errorDialog .helpLink").show();
                    }
                    else {
                        $("#errorDialog .helpLink").hide();
                    }
                    $("#errorDialog .errorInfo").text(Mscrm.Resources.ResourceManager.getString("MailApp.Generic.ActivityId").format(Mscrm.Telemetry.TelemetryReporter.getInstance().getSessionId(), new Date().toUTCString(), loggingMessage, clientError.nativeError.message));
                    $("#errorDialog .errorInfo").hide();
                    $("#errorDialog .showMoreButton a").text(Mscrm.Resources.ResourceManager.getString("MailApp_Error_Show_More_Button"));
                    $("#errorDialog .showMoreButton").on("click", function () { _this.toggleErrorInfo(); });
                    $("#errorDialog").show();
                    $("#content").hide();
                    $("#loadingContainer").hide();
                }
            };
            ErrorManager.handleError = function (clientError, loggingMessage, blockUI) {
                if (blockUI === void 0) { blockUI = true; }
                Mscrm.Logging.Logger.logError(clientError.message + " - " + loggingMessage);
                var errorEvent = new Mscrm.Telemetry.TelemetryEvent('mailapp_error', {
                    Message: loggingMessage,
                    Code: clientError.code,
                    StackTrace: clientError.nativeError.message
                });
                if (clientError.nativeError && clientError.nativeError.stack) {
                    errorEvent.addEventParameter('StackTrace', clientError.nativeError.stack);
                }
                Mscrm.Telemetry.TelemetryReporter.getInstance().reportEventImmediate(errorEvent);
                if (blockUI) {
                    var message = Mscrm.Resources.ResourceManager.getString(clientError.message);
                    if (message.indexOf('_') !== -1) {
                        message = Mscrm.Resources.ResourceManager.getString('Error_Message_Generic_Mobile_Client');
                    }
                    var title = Mscrm.Resources.ResourceManager.getString("MoCA_OWA_Generic_Error_Title");
                    if (clientError.code) {
                        var errorForCode = Mscrm.Resources.ResourceManager.getString(this.getResourceName(clientError.code));
                        if (clientError.code === ClientError.PopUpBlockErrorCode) {
                            message = clientError.message;
                        }
                        else if (errorForCode.indexOf('_') !== -1) {
                            message += " " + errorForCode;
                        }
                        else {
                            message = errorForCode;
                        }
                        var titleForCode = Mscrm.Resources.ResourceManager.getString(this.getResourceName(clientError.code) + "_Title");
                        if (titleForCode.indexOf('_Title') === -1) {
                            title = titleForCode;
                        }
                    }
                    this.showErrorDialog(title, message, clientError, loggingMessage);
                    if (Mscrm.Boot.activeBootManager) {
                        Mscrm.Boot.activeBootManager.unloadClient();
                    }
                }
            };
            ErrorManager.getErrorCodeAsHexString = function (errorCode) {
                var code = errorCode;
                if (code < 0) {
                    code = code + 0xFFFFFFFF + 1;
                }
                return code.toString(16);
            };
            ErrorManager.getResourceName = function (errorCode) {
                return "Error_Message_0x" + this.getErrorCodeAsHexString(errorCode);
            };
            ErrorManager.getIsErrorShowing = function () {
                return ErrorManager.isErrorShowing;
            };
            ErrorManager.getHelpLink = function (error) {
                var fullLink = this.helpLinkTemplate
                    + this.getDeploymentEnvironmentParams()
                    + this.getCrmErrorLinkParam(error)
                    + this.getServerVersionLinkParam()
                    + this.getClientVersionLinkParam()
                    + this.getUserCultureLcidLinkParam()
                    + this.getCorrelationIdLinkParam();
                return fullLink.substring(0, ErrorManager.maxUrlLength);
            };
            ErrorManager.toggleErrorInfo = function () {
                if (this.isAdvancedInfoShowing) {
                    $("#errorDialog .showMoreButton a").text(Mscrm.Resources.ResourceManager.getString("MailApp_Error_Show_More_Button"));
                    $("#errorDialog .errorInfo").hide();
                    this.isAdvancedInfoShowing = false;
                }
                else {
                    $("#errorDialog .showMoreButton a").text(Mscrm.Resources.ResourceManager.getString("MailApp_Error_Show_Less_Button"));
                    $("#errorDialog .errorInfo").show();
                    this.isAdvancedInfoShowing = true;
                }
            };
            ErrorManager.getDeploymentEnvironmentParams = function () {
                return "&de=" + Mscrm.Boot.activeBootManager.deploymentEnvironment + "&sde=" + Mscrm.Boot.activeBootManager.serviceDeploymentEnvironment;
            };
            ErrorManager.getCrmErrorLinkParam = function (error) {
                return "&error=Microsoft.Crm.Exception:" + this.getErrorCodeAsHexString(error.code);
            };
            ErrorManager.getServerVersionLinkParam = function () {
                var clientSettings = JSON.parse(Mscrm.Settings.Browser.getSetting(Mscrm.Settings.Keys.clientSettings));
                if (clientSettings && clientSettings.serverversion) {
                    return "&sv=" + clientSettings.serverversion;
                }
                return "";
            };
            ErrorManager.getClientVersionLinkParam = function () {
                if (window.ClientVersion) {
                    return "&cv=" + window.ClientVersion;
                }
                return "";
            };
            ErrorManager.getUserCultureLcidLinkParam = function () {
                var clientSettings = JSON.parse(Mscrm.Settings.Browser.getSetting(Mscrm.Settings.Keys.clientSettings));
                if (clientSettings && clientSettings.userculturelcid) {
                    return "&lcid=" + clientSettings.userculturelcid;
                }
                return "";
            };
            ErrorManager.getCorrelationIdLinkParam = function () {
                var sessionId = Mscrm.Telemetry.TelemetryReporter.getInstance().getSessionId();
                if (sessionId) {
                    return "&cid=" + encodeURIComponent(sessionId);
                }
                return "";
            };
            ErrorManager.getStackTraceParam = function (error) {
                if (error.nativeError) {
                    var nativeError = error.nativeError;
                    if (nativeError.stack && typeof (nativeError.stack) === "string") {
                        return "&st=" + encodeURIComponent(nativeError.stack);
                    }
                }
                return "";
            };
            ErrorManager.helpLinkTemplate = "http://go.microsoft.com/fwlink/?LinkID=398563&client=MailApp";
            ErrorManager.isErrorShowing = false;
            ErrorManager.maxUrlLength = 2000;
            ErrorManager.isAdvancedInfoShowing = false;
            return ErrorManager;
        }());
        Boot.ErrorManager = ErrorManager;
    })(Boot = Mscrm.Boot || (Mscrm.Boot = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Discovery;
    (function (Discovery) {
        var OrgVersionHelper = (function () {
            function OrgVersionHelper() {
            }
            OrgVersionHelper.doesVersionPreceed = function (toCheck, against) {
                return this.compare(toCheck, against) < 0;
            };
            OrgVersionHelper.doesVersionFollow = function (toCheck, against) {
                return this.compare(toCheck, against) > 0;
            };
            OrgVersionHelper.isVersionInRange = function (toCheck, startVersion, endVersion) {
                return this.compare(toCheck, startVersion) >= 0 && this.compare(toCheck, endVersion) < 0;
            };
            OrgVersionHelper.compare = function (a, b) {
                var splitA = a.split('.');
                var splitB = b.split('.');
                for (var i = 0; i < splitA.length; i++) {
                    var partA = parseInt(splitA[i]);
                    var partB = parseInt(splitB[i]);
                    if (partA == partB) {
                        continue;
                    }
                    return splitA[i] < splitB[i] ? -1 : 1;
                }
                return 0;
            };
            return OrgVersionHelper;
        }());
        Discovery.OrgVersionHelper = OrgVersionHelper;
    })(Discovery = Mscrm.Discovery || (Mscrm.Discovery = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var EmailContext;
    (function (EmailContext) {
        var EmailItem = (function () {
            function EmailItem(emailId, internetMessageId) {
                this.Id = emailId;
                this.InternetMessageId = internetMessageId;
                this.State = Mscrm.Exchange.MailItemState.NotLinked;
            }
            return EmailItem;
        }());
        EmailContext.EmailItem = EmailItem;
        var AppointmentItem = (function (_super) {
            __extends(AppointmentItem, _super);
            function AppointmentItem(emailId, internetMessageId) {
                _super.call(this, emailId, internetMessageId);
            }
            return AppointmentItem;
        }(EmailItem));
        EmailContext.AppointmentItem = AppointmentItem;
        var RecurrencePatternItem = (function () {
            function RecurrencePatternItem() {
            }
            return RecurrencePatternItem;
        }());
        EmailContext.RecurrencePatternItem = RecurrencePatternItem;
    })(EmailContext = Mscrm.EmailContext || (Mscrm.EmailContext = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var EmailContext;
    (function (EmailContext) {
        (function (EmailItemRetrieveState) {
            EmailItemRetrieveState[EmailItemRetrieveState["Success"] = 0] = "Success";
            EmailItemRetrieveState[EmailItemRetrieveState["SaveAsyncError"] = 1] = "SaveAsyncError";
            EmailItemRetrieveState[EmailItemRetrieveState["SaveAsyncUnavailable"] = 2] = "SaveAsyncUnavailable";
            EmailItemRetrieveState[EmailItemRetrieveState["ExchangeCallError"] = 3] = "ExchangeCallError";
            EmailItemRetrieveState[EmailItemRetrieveState["EwsErrorResponseCode"] = 4] = "EwsErrorResponseCode";
        })(EmailContext.EmailItemRetrieveState || (EmailContext.EmailItemRetrieveState = {}));
        var EmailItemRetrieveState = EmailContext.EmailItemRetrieveState;
    })(EmailContext = Mscrm.EmailContext || (Mscrm.EmailContext = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var EmailEngagement;
    (function (EmailEngagement) {
        var LinksPair = (function () {
            function LinksPair() {
            }
            return LinksPair;
        }());
        EmailEngagement.LinksPair = LinksPair;
        var EmailEngagementManager;
        (function (EmailEngagementManager) {
            var pixelMarker = "b71fa308-2dca-4ae5-90da-c2088c21a0cc";
            var linkPairsMarker = "e4bddb03-a05d-4f2a-a429-63001472b26e";
            var linkMarker = "4f395986-5f38-4dbd-98c5-6af11ceb062b";
            function getLinkHref(link) {
                var href = $(link).attr("href");
                return href && href.replace(/(.*?)[/]*$/, "$1").toLowerCase();
            }
            function getUniqueLinks(crmId) {
                var deferred = $.Deferred();
                Mscrm.OfficeProvider.getBodyAsync().then(function (bodyHtml) {
                    var uniqueLinks = [];
                    var unprocessedLinks = $("<div></div>").html(bodyHtml).find("a:not([id*=\"" + linkMarker + "_" + crmId + "\"])");
                    if (unprocessedLinks.length > 0) {
                        unprocessedLinks.each(function (index, link) {
                            var href = getLinkHref(link);
                            if (href && $.inArray(href, uniqueLinks) === -1) {
                                uniqueLinks.push(href);
                            }
                        });
                    }
                    deferred.resolve(uniqueLinks);
                }, deferred.reject);
                return deferred.promise();
            }
            EmailEngagementManager.getUniqueLinks = getUniqueLinks;
            function transformClientLinkPairs(linkPairs) {
                var transformedLinkPairs = [];
                if (linkPairs) {
                    for (var key in linkPairs) {
                        var pair = new LinksPair();
                        pair.original = key;
                        pair.replacement = linkPairs[key];
                        transformedLinkPairs.push(pair);
                    }
                }
                return transformedLinkPairs;
            }
            EmailEngagementManager.transformClientLinkPairs = transformClientLinkPairs;
            function setTrackingInfo(crmId, pixelUrl, linkPairs) {
                var deferred = $.Deferred();
                Mscrm.OfficeProvider.getBodyAsync().then(function (bodyHtml) {
                    var htmlDom = $("<div/>").append(bodyHtml);
                    var linkUniqueId = linkMarker + "_" + crmId;
                    var linkPairsUniqueId = linkPairsMarker + "_" + crmId;
                    var pixelUniqueId = pixelMarker + "_" + crmId;
                    var pixelFound = htmlDom.find("img[id*=\"" + pixelUniqueId + "\"]").length > 0;
                    var unprocessedLinks = htmlDom.find("a:not([id*=\"" + linkUniqueId + "\"])");
                    if (!pixelFound) {
                        htmlDom.append("<img id=\"" + pixelUniqueId + "\" src=\"" + pixelUrl + "\" style=\"visibility:hidden;height:0px;width:0px;display:none;\">");
                    }
                    if (linkPairs.length > 0) {
                        linkPairs.forEach(function (pair) {
                            unprocessedLinks.each(function (index, link) {
                                var href = getLinkHref(link);
                                if (href !== pair.original.toLowerCase()) {
                                    return;
                                }
                                var $link = $(link);
                                htmlDom.find("a[href=\"" + $link.attr("href") + "\"]").attr("href", pair.replacement).attr("id", $link.attr("id") + "_" + linkUniqueId);
                            });
                        });
                        htmlDom.append("<p id=\"" + linkPairsUniqueId + "\" style=\"color:transparent;text-decoration:none;font-size:0px;visibility:hidden;display:none;height:0px;line-height:0px;overflow:hidden;max-height:0px;float:left;mso-hide:all;width:0px;text-indent:-9999px;\">" + JSON.stringify(linkPairs) + "</p>");
                    }
                    Mscrm.OfficeProvider.setEmailBodyHtml(htmlDom.html()).then(deferred.resolve, deferred.reject);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise();
            }
            EmailEngagementManager.setTrackingInfo = setTrackingInfo;
            function removeTrackingInfo(crmId) {
                var deferred = $.Deferred();
                Mscrm.OfficeProvider.getBodyAsync().then(function (bodyHtml) {
                    var htmlDom = $("<div/>").append(bodyHtml);
                    var linkUniqueId = linkMarker + "_" + crmId;
                    var linkPairsUniqueId = linkPairsMarker + "_" + crmId;
                    var pixelUniqueId = pixelMarker + "_" + crmId;
                    var linkPairsContent = htmlDom.find("[id*=\"" + linkPairsUniqueId + "\"]:last-child");
                    if (linkPairsContent.length > 0) {
                        var linkPairs = JSON.parse(linkPairsContent.text());
                        var wrappedLinks_1 = $("<div></div>").html(bodyHtml).find("a[id*=\"" + linkUniqueId + "\"]");
                        linkPairs.forEach(function (pair) {
                            wrappedLinks_1.each(function (index, link) {
                                var href = getLinkHref(link);
                                if (href !== pair.replacement) {
                                    return;
                                }
                                var $link = $(link);
                                htmlDom.find("a[href=\"" + $link.attr("href") + "\"]").attr("href", pair.original).attr("id", $link.attr("id").replace("_" + linkUniqueId, ""));
                            });
                        });
                    }
                    htmlDom.find("[id*=\"" + pixelUniqueId + "\"]").remove();
                    htmlDom.find("[id*=\"" + linkPairsUniqueId + "\"]").remove();
                    Mscrm.OfficeProvider.setEmailBodyHtml(htmlDom.html()).then(deferred.resolve, deferred.reject);
                }, deferred.reject);
                return deferred.promise();
            }
            EmailEngagementManager.removeTrackingInfo = removeTrackingInfo;
        })(EmailEngagementManager = EmailEngagement.EmailEngagementManager || (EmailEngagement.EmailEngagementManager = {}));
    })(EmailEngagement = Mscrm.EmailEngagement || (Mscrm.EmailEngagement = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var RestApi = (function (_super) {
            __extends(RestApi, _super);
            function RestApi() {
                _super.call(this);
                this.apiEndpoint = "/api/v1.0/me/";
                this.initialize();
            }
            RestApi.prototype.initialize = function () {
                this.body = null;
                this.requestMethod = "GET";
                this.resource = "";
                this.parameters = "";
                this.httpRequest = new XMLHttpRequest();
            };
            RestApi.prototype.accept = function (visitor) {
                this.methodName = visitor.getMethodName();
                return visitor.visit(this);
            };
            RestApi.prototype.setRequestHeader = function (header, value) {
                if (this.httpRequest.readyState !== this.httpRequest.OPENED) {
                    this.openRequest();
                }
                this.httpRequest.setRequestHeader(header, value);
            };
            ;
            RestApi.prototype.setCommonHeaders = function () {
                this.setRequestHeader("Content-Type", "application/json");
                this.setRequestHeader("Accept", "application/json");
            };
            RestApi.prototype.setToken = function (token) {
                this.setRequestHeader("Authorization", "Bearer " + token);
            };
            RestApi.prototype.setResource = function (resource) {
                this.resource = resource;
            };
            RestApi.prototype.setBody = function (body) {
                this.body = body;
            };
            RestApi.prototype.openRequest = function () {
                this.httpRequest.open(this.requestMethod, this.getUrl(), true);
            };
            RestApi.prototype.makeRequest = function (callback) {
                var _this = this;
                var startTime = Date.now();
                this.httpRequest.onreadystatechange = function () {
                    if (_this.httpRequest.readyState !== 4) {
                        return;
                    }
                    if (!_this.isRequestFailed()) {
                        Mscrm.Performance.PerformanceStopwatch.addRetroactiveStopWatch("MailAppShim.ExchangeRestApiCall." + _this.methodName, startTime, Date.now(), true);
                    }
                    callback(_this.httpRequest.response);
                };
                this.httpRequest.send(this.body);
            };
            RestApi.prototype.isRequestFailed = function () {
                return this.httpRequest.status !== 200 && this.httpRequest.status !== 201;
            };
            RestApi.prototype.getToken = function () {
                var _this = this;
                var deferred = $.Deferred();
                Mscrm.OfficeProvider.getCallbackTokenAsync().then(function (result) {
                    _this.setEndpoint(result);
                    deferred.resolve(result);
                }, function (error) {
                    Mscrm.Logging.Logger.logError("Failed to acquire callback token: " + JSON.stringify(error), "authentication");
                    deferred.reject(error);
                });
                return deferred.promise();
            };
            RestApi.prototype.createResponse = function (result) {
                var json = JSON.parse(result);
                var asyncResponse = { status: "succeeded", value: json, error: null };
                if (this.isRequestFailed()) {
                    asyncResponse.status = "failed";
                    asyncResponse.error = {
                        code: this.httpRequest.status,
                        name: "Error while making Rest " + this.requestMethod + " request: " + this.httpRequest.status + " - " + this.httpRequest.statusText,
                        message: this.httpRequest.statusText
                    };
                }
                return asyncResponse;
            };
            RestApi.prototype.addParameters = function (parameters) {
                this.parameters = parameters;
            };
            RestApi.prototype.getUrl = function () {
                return "" + this.endpoint + this.apiEndpoint + this.resource + "?" + this.parameters;
            };
            RestApi.prototype.getEndpoint = function () {
                return this.endpoint;
            };
            RestApi.prototype.setEndpoint = function (token) {
                var parsedToken = Mscrm.Utilities.parseToken(token);
                switch (parsedToken.ver) {
                    case "Exchange.Callback.V1":
                        this.endpoint = "https://" + parsedToken.aud.split("/")[1].split("@")[0];
                        break;
                    case "Exchange.Callback.V2":
                        this.endpoint = parsedToken.aud;
                        break;
                }
            };
            RestApi.apiVersion = "RestV1.0";
            return RestApi;
        }(Exchange.ExchangeApi));
        Exchange.RestApi = RestApi;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var RestV2Api = (function (_super) {
            __extends(RestV2Api, _super);
            function RestV2Api() {
                _super.call(this);
                this.initialize();
            }
            RestV2Api.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.apiEndpoint = "/api/v2.0/me/";
            };
            RestV2Api.apiVersion = "RestV2.0";
            return RestV2Api;
        }(Exchange.RestApi));
        Exchange.RestV2Api = RestV2Api;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var RestBetaApi = (function (_super) {
            __extends(RestBetaApi, _super);
            function RestBetaApi(endpoint) {
                _super.call(this);
                this.initialize();
                this.endpoint = endpoint;
            }
            RestBetaApi.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.apiEndpoint = "/api/beta/me/";
            };
            RestBetaApi.apiVersion = "RestBeta";
            return RestBetaApi;
        }(Exchange.RestV2Api));
        Exchange.RestBetaApi = RestBetaApi;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var OfficeProvider;
    (function (OfficeProvider) {
        var Office = window.Office;
        var INSTALL_ID_KEY = 'InstallID';
        var SELECTED_RECIPIENT_KEY = 'SelectedRecipient';
        var hasSavedAsync = false;
        var saveAsyncDeferred;
        var itemChangedHandlers = [];
        (function (CoercionType) {
            CoercionType[CoercionType["Html"] = 0] = "Html";
            CoercionType[CoercionType["Text"] = 1] = "Text";
        })(OfficeProvider.CoercionType || (OfficeProvider.CoercionType = {}));
        var CoercionType = OfficeProvider.CoercionType;
        (function (HostType) {
            HostType[HostType["Unknown"] = 0] = "Unknown";
            HostType[HostType["Outlook"] = 1] = "Outlook";
            HostType[HostType["OutlookWebApp"] = 2] = "OutlookWebApp";
            HostType[HostType["OutlookMobile"] = 3] = "OutlookMobile";
        })(OfficeProvider.HostType || (OfficeProvider.HostType = {}));
        var HostType = OfficeProvider.HostType;
        function getCoercionType(coercionType) {
            return coercionType == CoercionType.Text ? Office.CoercionType.Text : Office.CoercionType.Html;
        }
        function fireItemChangedHandlers() {
            if (this.getEmailItem()) {
                for (var i = 0; i < itemChangedHandlers.length; i++) {
                    itemChangedHandlers[i] && itemChangedHandlers[i].apply(null, arguments);
                }
            }
        }
        function subscribeToItemChangedEvent(handler) {
            if (handler) {
                itemChangedHandlers.push(handler);
            }
            if (itemChangedHandlers.length === 1 && Office.context.mailbox.addHandlerAsync) {
                Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged, fireItemChangedHandlers.bind(this));
            }
        }
        OfficeProvider.subscribeToItemChangedEvent = subscribeToItemChangedEvent;
        function isOfficeDefined() {
            return !!Office;
        }
        OfficeProvider.isOfficeDefined = isOfficeDefined;
        function getEmailItem() {
            return Office.context.mailbox.item;
        }
        OfficeProvider.getEmailItem = getEmailItem;
        function getDiagnostics() {
            var mailboxDiagnostics = Office.context.mailbox.diagnostics;
            if (!mailboxDiagnostics || !mailboxDiagnostics.hostName) {
                mailboxDiagnostics = Office.context.mailbox.$1k_0;
            }
            return mailboxDiagnostics;
        }
        OfficeProvider.getDiagnostics = getDiagnostics;
        function getHostType() {
            var hostName = this.getDiagnostics().hostName;
            switch (hostName) {
                case "Outlook":
                case "Mac Outlook":
                    return HostType.Outlook;
                case "OutlookWebApp":
                    return HostType.OutlookWebApp;
                case "OutlookIOS":
                case "OutlookAndroid":
                    return HostType.OutlookMobile;
                default:
                    return HostType.Unknown;
            }
        }
        OfficeProvider.getHostType = getHostType;
        function getUserProfile() {
            return Office.context.mailbox.userProfile;
        }
        OfficeProvider.getUserProfile = getUserProfile;
        function getEwsUrl() {
            return Office.context.mailbox.ewsUrl;
        }
        OfficeProvider.getEwsUrl = getEwsUrl;
        function insertToStartOfBody(str, coercionType) {
            var MAX_STRING_LENGTH = 1000000;
            var deferred = $.Deferred();
            var body = OfficeProvider.getEmailItem().body;
            if (!body || !body.prependAsync) {
                deferred.reject("body.prependAsync method is not available.");
                return deferred.promise();
            }
            if (str && str.length <= MAX_STRING_LENGTH) {
                OfficeProvider.getEmailItem().body.prependAsync(str, { coercionType: getCoercionType(coercionType) }, function (asyncResult) {
                    if (asyncResult) {
                        if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
                            deferred.resolve(asyncResult);
                        }
                        else {
                            deferred.reject(asyncResult.error.message);
                        }
                    }
                    else {
                        deferred.reject("Failed to insert email body.");
                    }
                });
            }
            else {
                deferred.reject("Failed to insert email body, max limit exceeded.");
            }
            return deferred.promise();
        }
        OfficeProvider.insertToStartOfBody = insertToStartOfBody;
        ;
        function getSubject() {
            var deferred = $.Deferred();
            var item = OfficeProvider.getEmailItem();
            if (item.subject && item.subject.getAsync) {
                item.subject.getAsync(function (result) {
                    deferred.resolve(result.value);
                });
            }
            else {
                deferred.resolve(item.subject);
            }
            return deferred.promise();
        }
        OfficeProvider.getSubject = getSubject;
        function getStart() {
            var deferred = $.Deferred();
            var item = OfficeProvider.getEmailItem();
            if (item.start && item.start.getAsync) {
                item.start.getAsync(function (result) {
                    deferred.resolve(result.value);
                });
            }
            else {
                deferred.resolve(item.start);
            }
            return deferred.promise();
        }
        OfficeProvider.getStart = getStart;
        function getEnd() {
            var deferred = $.Deferred();
            var item = OfficeProvider.getEmailItem();
            if (item.end && item.end.getAsync) {
                item.end.getAsync(function (result) {
                    deferred.resolve(result.value);
                });
            }
            else {
                deferred.resolve(item.end);
            }
            return deferred.promise();
        }
        OfficeProvider.getEnd = getEnd;
        function setEmailSubject(subject) {
            var deferred = $.Deferred();
            var item = OfficeProvider.getEmailItem();
            var htmlEntityPattern = /&((#(\d)+)|(\w+));/;
            if (!item.subject.setAsync) {
                deferred.reject("subject.setAsync method is not available.");
            }
            if (subject) {
                if (htmlEntityPattern.test(subject)) {
                    subject = Mscrm.Utilities.decodeHtmlEntities(subject);
                }
                item.subject.setAsync(subject, function (asyncResult) {
                    if (asyncResult) {
                        if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
                            deferred.resolve(asyncResult);
                        }
                        else {
                            deferred.reject(asyncResult.error.message);
                        }
                    }
                    else {
                        deferred.reject("Failed to set email subject.");
                    }
                });
            }
            else {
                deferred.reject("Failed to set email subject, subject is empty.");
            }
            return deferred.promise();
        }
        OfficeProvider.setEmailSubject = setEmailSubject;
        ;
        function addFileAttachmentAsync(attachmentURL, attachmentName) {
            var MAX_URL_LENGTH = 2048;
            var MAX_NAME_LENGTH = 255;
            var isArgsValid = true;
            var deferred = $.Deferred();
            if (!OfficeProvider.getEmailItem().addFileAttachmentAsync) {
                deferred.reject({ message: "item.addFileAttachmentAsync method is not available.", code: Mscrm.EmailContext.EmailItemRetrieveState.SaveAsyncUnavailable });
            }
            if (attachmentURL && attachmentURL.length > MAX_URL_LENGTH) {
                deferred.reject({ message: "Failed to add attachment to email, max url length exceeded.", code: Mscrm.EmailContext.EmailItemRetrieveState.SaveAsyncError });
                isArgsValid = false;
            }
            if (attachmentName && attachmentName.length > MAX_NAME_LENGTH) {
                deferred.reject({ message: "Failed to add attachment to email, max attachment name length exceeded.", code: Mscrm.EmailContext.EmailItemRetrieveState.SaveAsyncError });
                isArgsValid = false;
            }
            if (isArgsValid) {
                OfficeProvider.getEmailItem().addFileAttachmentAsync(attachmentURL, attachmentName, function (asyncResult) {
                    if (asyncResult) {
                        if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
                            deferred.resolve(asyncResult);
                        }
                        else {
                            deferred.reject({ message: asyncResult.error.message, code: Mscrm.EmailContext.EmailItemRetrieveState.SaveAsyncError });
                        }
                    }
                    else {
                        deferred.reject({ message: "Failed to add attachment to email.", code: Mscrm.EmailContext.EmailItemRetrieveState.SaveAsyncError });
                    }
                });
            }
            return deferred.promise();
        }
        OfficeProvider.addFileAttachmentAsync = addFileAttachmentAsync;
        ;
        function addItemAttachmentAsync(itemId, attachmentName) {
            var MAX_ITEM_ID_LENGTH = 100;
            var MAX_NAME_LENGTH = 255;
            var isArgsValid = true;
            var deferred = $.Deferred();
            if (!OfficeProvider.getEmailItem().addItemAttachmentAsync) {
                deferred.reject("item.addItemAttachmentAsync method is not available.");
            }
            if (itemId && itemId.length > MAX_ITEM_ID_LENGTH) {
                deferred.reject("Failed to add attachment to email, max itemId length exceeded.");
                isArgsValid = false;
            }
            if (attachmentName && attachmentName.length > MAX_NAME_LENGTH) {
                deferred.reject("Failed to add attachment to email, max attachment name length exceeded.");
                isArgsValid = false;
            }
            if (isArgsValid) {
                OfficeProvider.getEmailItem().addItemAttachmentAsync(itemId, attachmentName, function (asyncResult) {
                    if (asyncResult) {
                        if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
                            deferred.resolve(asyncResult);
                        }
                        else {
                            deferred.reject(asyncResult.error.message);
                        }
                    }
                    else {
                        deferred.reject("Failed to add attachment to email.");
                    }
                });
            }
            return deferred.promise();
        }
        OfficeProvider.addItemAttachmentAsync = addItemAttachmentAsync;
        ;
        function getDeliverPromoteDetails(soapRequestBody) {
            var deferred = $.Deferred();
            Office.context.mailbox.getCallbackTokenAsync(function (result) {
                var attachmentToken = result.value;
                soapRequestBody = soapRequestBody.replace('Attachment_Token_String', attachmentToken);
                var port = window.location.port;
                var host = window.location.hostname;
                var orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    orgUrl += ':' + port;
                }
                var crmServiceEndPoint = orgUrl + '/XRMServices/2011/Organization.svc/web';
                var deliverPromoteRequest = new XMLHttpRequest();
                deliverPromoteRequest.open('POST', crmServiceEndPoint, true);
                deliverPromoteRequest.setRequestHeader('Authorization', 'Bearer ' + Mscrm.Boot.activeBootManager.token);
                deliverPromoteRequest.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
                deliverPromoteRequest.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
                deliverPromoteRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                deliverPromoteRequest.onreadystatechange = function () {
                    if (deliverPromoteRequest.readyState === 4) {
                        deferred.resolve(deliverPromoteRequest.response);
                    }
                };
                deliverPromoteRequest.send(soapRequestBody);
            });
            return deferred.promise();
        }
        OfficeProvider.getDeliverPromoteDetails = getDeliverPromoteDetails;
        function setInstallId(installId) {
            Office.context.roamingSettings.set(INSTALL_ID_KEY, installId);
            Office.context.roamingSettings.saveAsync(function (asyncResult) {
                switch (asyncResult.status) {
                    case 'succeeded':
                        Mscrm.Logging.Logger.logInfo('New Install ID Saved: ' + installId, 'Telemetry');
                        break;
                    case 'failed':
                        Mscrm.Logging.Logger.logWarning('Failed to save new Install ID: ' + JSON.stringify(asyncResult.error), 'Telemetry');
                        break;
                }
            });
        }
        OfficeProvider.setInstallId = setInstallId;
        function getInstallId() {
            return Office.context.roamingSettings.get(INSTALL_ID_KEY);
        }
        OfficeProvider.getInstallId = getInstallId;
        function xmlToJson(xml) {
            var obj = {};
            if (xml.nodeType == 1) {
                if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                    for (var j = 0; j < xml.attributes.length; j++) {
                        var attribute = xml.attributes.item(j);
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                }
            }
            else if (xml.nodeType == 3) {
                obj = xml.nodeValue;
            }
            if (xml.hasChildNodes()) {
                for (var i = 0; i < xml.childNodes.length; i++) {
                    var item = xml.childNodes.item(i);
                    var nodeName = item.nodeName;
                    if (typeof (obj[nodeName]) == "undefined") {
                        obj[nodeName] = xmlToJson(item);
                    }
                    else {
                        if (typeof (obj[nodeName].push) == "undefined") {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(xmlToJson(item));
                    }
                }
            }
            return obj;
        }
        function mapEwsResponseToContact(contactEws) {
            var returnedContact = {};
            returnedContact.Id = contactEws["t:ItemId"]["@attributes"]["Id"];
            returnedContact.ChangeKey = contactEws["t:ItemId"]["@attributes"]["ChangeKey"];
            Object.keys(contactEws).forEach(function (key) {
                var processedKey = key.slice(2);
                if (contactEws[key].hasOwnProperty('#text')) {
                    returnedContact[processedKey] = contactEws[key]['#text'];
                }
                else {
                    switch (processedKey) {
                        case 'EmailAddresses':
                            var emailAddresses = contactEws['t:EmailAddresses']['t:Entry'];
                            if (emailAddresses instanceof Array) {
                                emailAddresses.forEach(function (entry) {
                                    returnedContact[entry['@attributes']['Key']] = entry['#text'];
                                });
                            }
                            else {
                                var entry = emailAddresses;
                                returnedContact[entry['@attributes']['Key']] = entry['#text'];
                            }
                            break;
                        case 'PhysicalAddresses':
                            var addresses = contactEws['t:PhysicalAddresses']['t:Entry'];
                            if (addresses instanceof Array) {
                                contactEws['t:PhysicalAddresses']['t:Entry'].forEach(function (entry) {
                                    if (entry['@attributes'].Key == 'Business') {
                                        returnedContact['GetBusinessCity'] = entry['t:City'] ? entry['t:City']['#text'] : '';
                                        returnedContact['GetBusinessCountry'] = entry['t:CountryOrRegion'] ? entry['t:CountryOrRegion']['#text'] : '';
                                        returnedContact['GetBusinessPostalCode'] = entry['t:PostalCode'] ? entry['t:PostalCode']['#text'] : '';
                                        returnedContact['GetBusinessState'] = entry['t:State'] ? entry['t:State']['#text'] : '';
                                        returnedContact['GetStreet1'] = entry['t:Street'] ? entry['t:Street']['#text'] : '';
                                    }
                                    else if (entry['@attributes'].Key == 'Home') {
                                        returnedContact['GetHomeCity'] = entry['t:City'] ? entry['t:City']['#text'] : '';
                                        returnedContact['GetHomeCountry'] = entry['t:CountryOrRegion'] ? entry['t:CountryOrRegion']['#text'] : '';
                                        returnedContact['GetHomePostalCode'] = entry['t:PostalCode'] ? entry['t:PostalCode']['#text'] : '';
                                        returnedContact['GetHomeState'] = entry['t:State'] ? entry['t:State']['#text'] : '';
                                        returnedContact['GetStreet2'] = entry['t:Street'] ? entry['t:Street']['#text'] : '';
                                    }
                                    else if (entry['@attributes'].Key == 'Other') {
                                        returnedContact['GetOtherCity'] = entry['t:City'] ? entry['t:City']['#text'] : '';
                                        returnedContact['GetOtheCountry'] = entry['t:CountryOrRegion'] ? entry['t:CountryOrRegion']['#text'] : '';
                                        returnedContact['GetOthePostalCode'] = entry['t:PostalCode'] ? entry['t:PostalCode']['#text'] : '';
                                        returnedContact['GetOtherState'] = entry['t:State'] ? entry['t:State']['#text'] : '';
                                        returnedContact['GetStreet3'] = entry['t:Street'] ? entry['t:Street']['#text'] : '';
                                    }
                                });
                            }
                            else {
                                var entry = addresses;
                                if (entry['@attributes'].Key == 'Business') {
                                    returnedContact['GetBusinessCity'] = entry['t:City'] ? entry['t:City']['#text'] : '';
                                    returnedContact['GetBusinessCountry'] = entry['t:CountryOrRegion'] ? entry['t:CountryOrRegion']['#text'] : '';
                                    returnedContact['GetBusinessPostalCode'] = entry['t:PostalCode'] ? entry['t:PostalCode']['#text'] : '';
                                    returnedContact['GetBusinessState'] = entry['t:State'] ? entry['t:State']['#text'] : '';
                                    returnedContact['GetStreet1'] = entry['t:Street'] ? entry['t:Street']['#text'] : '';
                                }
                                else if (entry['@attributes'].Key == 'Home') {
                                    returnedContact['GetHomeCity'] = entry['t:City'] ? entry['t:City']['#text'] : '';
                                    returnedContact['GetHomeCountry'] = entry['t:CountryOrRegion'] ? entry['t:CountryOrRegion']['#text'] : '';
                                    returnedContact['GetHomePostalCode'] = entry['t:PostalCode'] ? entry['t:PostalCode']['#text'] : '';
                                    returnedContact['GetHomeState'] = entry['t:State'] ? entry['t:State']['#text'] : '';
                                    returnedContact['GetStreet2'] = entry['t:Street'] ? entry['t:Street']['#text'] : '';
                                }
                                else if (entry['@attributes'].Key == 'Other') {
                                    returnedContact['GetOtherCity'] = entry['t:City'] ? entry['t:City']['#text'] : '';
                                    returnedContact['GetOtheCountry'] = entry['t:CountryOrRegion'] ? entry['t:CountryOrRegion']['#text'] : '';
                                    returnedContact['GetOthePostalCode'] = entry['t:PostalCode'] ? entry['t:PostalCode']['#text'] : '';
                                    returnedContact['GetOtherState'] = entry['t:State'] ? entry['t:State']['#text'] : '';
                                    returnedContact['GetStreet3'] = entry['t:Street'] ? entry['t:Street']['#text'] : '';
                                }
                            }
                            break;
                        case 'PhoneNumbers':
                            var phoneNumbers = contactEws['t:PhoneNumbers']['t:Entry'];
                            if (phoneNumbers instanceof Array) {
                                contactEws['t:PhoneNumbers']['t:Entry'].forEach(function (entry) {
                                    if (entry['@attributes']['Key'] == 'BusinessFax') {
                                        returnedContact['Fax'] = entry['#text'];
                                    }
                                    else {
                                        returnedContact[entry['@attributes']['Key']] = entry['#text'];
                                    }
                                });
                            }
                            else {
                                var entry = phoneNumbers;
                                if (entry['@attributes']['Key'] == 'BusinessFax') {
                                    returnedContact['Fax'] = entry['#text'];
                                }
                                else {
                                    returnedContact[entry['@attributes']['Key']] = entry['#text'];
                                }
                            }
                            break;
                        case 'CompleteName':
                            break;
                        case 'ExtendedProperty':
                            if (contactEws[key]) {
                                if (contactEws[key] instanceof Array) {
                                    returnedContact['ExtendedProperties'] = contactEws[key];
                                }
                                else {
                                    returnedContact['ExtendedProperties'] = [contactEws[key]];
                                }
                            }
                            break;
                        default:
                            returnedContact[processedKey] = '';
                            break;
                    }
                }
            });
            return returnedContact;
        }
        function getContacts(count, skip, sortBy, filters, extendedFilters) {
            var deferred = $.Deferred();
            function getSortBySoap(sortBy) {
                return "<m:SortOrder>\n\t\t\t\t\t\t<t:FieldOrder Order=\"" + sortBy.order + "\">\n\t\t\t\t\t\t<t:FieldURI FieldURI=\"contacts:" + sortBy.field + "\" />\n\t\t\t\t\t\t</t:FieldOrder>\n\t\t\t\t\t\t</m:SortOrder>";
            }
            function getFilterSoap(filters, extendedFilters) {
                var filterString = '';
                var extendedFilterString = '';
                if (filters.length == 0 && extendedFilters.length == 0) {
                    return '';
                }
                filters.forEach(function (filter) {
                    filterString += "<t:Contains ContainmentMode=\"Substring\" ContainmentComparison=\"IgnoreCase\">\n\t\t\t\t\t\t\t\t\t <t:FieldURI FieldURI=\"contacts:" + filter.field + "\" />\n\t\t\t\t\t\t\t\t\t <t:Constant Value=\"" + filter.value + "\" />\n\t\t\t\t\t\t\t\t\t </t:Contains>";
                });
                extendedFilters.forEach(function (extendedFilter) {
                    extendedFilterString += "<t:IsEqualTo>\n\t\t\t\t\t\t\t\t\t\t\t<t:ExtendedFieldURI PropertySetId=\"" + extendedFilter.id + "\" PropertyName=\"" + extendedFilter.name + "\" PropertyType=\"" + extendedFilter.type + "\" />\n\t\t\t\t\t\t\t\t\t\t\t<t:FieldURIOrConstant>\n\t\t\t\t\t\t\t\t\t\t\t<t:Constant Value=\"" + extendedFilter.value + "\" />\n\t\t\t\t\t\t\t\t\t\t\t</t:FieldURIOrConstant>\n\t\t\t\t\t\t\t\t\t\t\t</t:IsEqualTo>";
                });
                var orString = '';
                if (filterString) {
                    orString = "<t:Or >\n\t\t\t\t\t\t\t\t" + filterString + "\n\t\t\t\t\t\t\t\t</t:Or>";
                }
                return "<m:Restriction >\n\t\t\t\t\t\t<t:And >\n\t\t\t\t\t\t" + extendedFilterString + "\n\t\t\t\t\t\t" + orString + "\n\t\t\t\t\t\t</t:And >\n\t\t\t\t\t\t</m:Restriction>";
            }
            var request = "<?xml version=\"1.0\" encoding=\"utf-8\" ?> \n\t\t\t\t\t\t\t<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:m=\"http://schemas.microsoft.com/exchange/services/2006/messages\" xmlns:t=\"http://schemas.microsoft.com/exchange/services/2006/types\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n\t\t\t\t\t\t\t<soap:Header>\n\t\t\t\t\t\t\t<t:RequestServerVersion Version=\"Exchange2010\" /> \n\t\t\t\t\t\t\t</soap:Header>\n\t\t\t\t\t\t\t<soap:Body>\n\t\t\t\t\t\t\t<m:FindItem Traversal=\"Shallow\">\n\t\t\t\t\t\t\t<m:ItemShape>\n\t\t\t\t\t\t\t<t:BaseShape>AllProperties</t:BaseShape>\n\t\t\t\t\t\t\t<t:AdditionalProperties>\n\t\t\t\t\t\t\t<t:ExtendedFieldURI PropertySetId=\"00020329-0000-0000-c000-000000000046\" PropertyName=\"crmLinkState\" PropertyType=\"Double\" />\n\t\t\t\t\t\t\t<t:ExtendedFieldURI PropertySetId=\"00020329-0000-0000-c000-000000000046\" PropertyName=\"crmid\" PropertyType=\"String\" />\n\t\t\t\t\t\t\t<t:ExtendedFieldURI PropertySetId=\"00020329-0000-0000-c000-000000000046\" PropertyName=\"crmParentAccountId\" PropertyType=\"String\" />\n\t\t\t\t\t\t\t<t:ExtendedFieldURI DistinguishedPropertySetId=\"Address\" PropertyId=\"32900\" PropertyType=\"String\" />\n\t\t\t\t\t\t\t</t:AdditionalProperties>\n\t\t\t\t\t\t\t</m:ItemShape>\n\t\t\t\t\t\t\t<m:IndexedPageItemView BasePoint=\"Beginning\" MaxEntriesReturned=\"" + count + "\" Offset=\"" + skip + "\" /> \n\t\t\t\t\t\t\t" + (filters.length > 0 || extendedFilters.length > 0 ? getFilterSoap(filters, extendedFilters) : '') + "\n\t\t\t\t\t\t\t" + (sortBy ? getSortBySoap(sortBy) : '') + "\n\t\t\t\t\t\t\t<m:ParentFolderIds>\n\t\t\t\t\t\t\t<t:DistinguishedFolderId Id=\"contacts\" />\t\t\t\t\t\t\n\t\t\t\t\t\t\t</m:ParentFolderIds>\n\t\t\t\t\t\t\t</m:FindItem>\n\t\t\t\t\t\t\t</soap:Body>\n\t\t\t\t\t\t\t</soap:Envelope>";
            request = request.replace(/(\r\n|\n|\r|\t)/gm, "");
            OfficeProvider.makeEwsRequestAsync(request, function (response) {
                var dom = new DOMParser().parseFromString(response.value, "text/xml");
                var rawContacts = xmlToJson(dom.getElementsByTagName("t:Items")[0])["t:Contact"];
                var totalCount = xmlToJson(dom.getElementsByTagName("m:RootFolder")[0])["@attributes"]["TotalItemsInView"];
                var contacts = [];
                if (rawContacts === undefined) {
                    rawContacts = [];
                }
                else if (!(rawContacts instanceof Array)) {
                    rawContacts = [rawContacts];
                }
                for (var i = 0; i < rawContacts.length; i++) {
                    contacts.push(mapEwsResponseToContact(rawContacts[i]));
                }
                deferred.resolve({ contacts: contacts, count: totalCount });
            });
            return deferred.promise();
        }
        OfficeProvider.getContacts = getContacts;
        function getContactsCount() {
            var deferred = $.Deferred();
            var request = "<?xml version=\"1.0\" encoding=\"utf-8\" ?> \n\t\t\t\t\t\t<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:m=\"http://schemas.microsoft.com/exchange/services/2006/messages\" xmlns:t=\"http://schemas.microsoft.com/exchange/services/2006/types\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n\t\t\t\t\t\t<soap:Header>\n\t\t\t\t\t\t<t:RequestServerVersion Version=\"Exchange2010\" /> \n\t\t\t\t\t\t</soap:Header>\n\t\t\t\t\t\t<soap:Body>\n\t\t\t\t\t\t<m:FindItem Traversal=\"Shallow\">\n\t\t\t\t\t\t<m:ItemShape>\n\t\t\t\t\t\t<t:BaseShape>AllProperties</t:BaseShape>\n\t\t\t\t\t\t</m:ItemShape>\n\t\t\t\t\t\t<m:IndexedPageItemView BasePoint=\"Beginning\" MaxEntriesReturned=\"1\" Offset=\"0\" /> \n\t\t\t\t\t\t<m:ParentFolderIds>\n\t\t\t\t\t\t<t:DistinguishedFolderId Id=\"contacts\" />\t\t\t\t\t\t\n\t\t\t\t\t\t</m:ParentFolderIds>\n\t\t\t\t\t\t</m:FindItem>\n\t\t\t\t\t\t</soap:Body>\n\t\t\t\t\t\t</soap:Envelope>";
            request = request.replace(/(\r\n|\n|\r|\t)/gm, "");
            OfficeProvider.makeEwsRequestAsync(request, function (response) {
                var dom = new DOMParser().parseFromString(response.value, "text/xml");
                var totalCount = xmlToJson(dom.getElementsByTagName("m:RootFolder")[0])["@attributes"]["TotalItemsInView"];
                deferred.resolve(totalCount);
            });
            return deferred.promise();
        }
        OfficeProvider.getContactsCount = getContactsCount;
        function getTrackedContactsCount() {
            var deferred = $.Deferred();
            var request = "<?xml version=\"1.0\" encoding=\"utf-8\" ?> \n\t\t\t\t\t\t<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:m=\"http://schemas.microsoft.com/exchange/services/2006/messages\" xmlns:t=\"http://schemas.microsoft.com/exchange/services/2006/types\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n\t\t\t\t\t\t<soap:Header>\n\t\t\t\t\t\t<t:RequestServerVersion Version=\"Exchange2010\" /> \n\t\t\t\t\t\t</soap:Header>\n\t\t\t\t\t\t<soap:Body>\n\t\t\t\t\t\t<m:FindItem Traversal=\"Shallow\">\n\t\t\t\t\t\t<m:ItemShape>\n\t\t\t\t\t\t<t:BaseShape>AllProperties</t:BaseShape>\n\t\t\t\t\t\t</m:ItemShape>\n\t\t\t\t\t\t<m:IndexedPageItemView BasePoint=\"Beginning\" MaxEntriesReturned=\"1\" Offset=\"0\" /> \n\t\t\t\t\t\t<m:Restriction>\n\t\t\t\t\t\t<t:Or>\n\t\t\t\t\t\t<t:IsEqualTo>\n\t\t\t\t\t\t<t:ExtendedFieldURI PropertySetId=\"00020329-0000-0000-c000-000000000046\" PropertyName=\"crmLinkState\" PropertyType=\"Double\" />\n\t\t\t\t\t\t<t:FieldURIOrConstant>\n\t\t\t\t\t\t<t:Constant Value=\"2\" />\n\t\t\t\t\t\t</t:FieldURIOrConstant>\n\t\t\t\t\t\t</t:IsEqualTo>\n\t\t\t\t\t\t</t:Or>\n\t\t\t\t\t\t</m:Restriction>\n\t\t\t\t\t\t<m:ParentFolderIds>\n\t\t\t\t\t\t<t:DistinguishedFolderId Id=\"contacts\" />\t\t\t\t\t\t\n\t\t\t\t\t\t</m:ParentFolderIds>\n\t\t\t\t\t\t</m:FindItem>\n\t\t\t\t\t\t</soap:Body>\n\t\t\t\t\t\t</soap:Envelope>";
            request = request.replace(/(\r\n|\n|\r|\t)/gm, "");
            OfficeProvider.makeEwsRequestAsync(request, function (response) {
                var dom = new DOMParser().parseFromString(response.value, "text/xml");
                var totalTrackedCount = xmlToJson(dom.getElementsByTagName("m:RootFolder")[0])["@attributes"]["TotalItemsInView"];
                deferred.resolve(totalTrackedCount);
            });
            return deferred.promise();
        }
        OfficeProvider.getTrackedContactsCount = getTrackedContactsCount;
        function updateContactProperties(id, changeKey, properties, extendedProperties) {
            var deferred = $.Deferred();
            function getItemFieldSoap(property) {
                return "<t:SetItemField>\n\t\t\t\t\t\t<t:FieldURI FieldURI=\"contacts:" + property.field + "\" />\n\t\t\t\t\t\t<t:Contact>\n\t\t\t\t\t\t<t:" + property.field + ">\n\t\t\t\t\t\t" + property.value + "\n\t\t\t\t\t\t</t:" + property.field + ">\n\t\t\t\t\t\t</t:Contact>\n\t\t\t\t\t\t</t:SetItemField>";
            }
            function getExtendedItemFieldSoap(extendedProperty) {
                return "<t:SetItemField>\n\t\t\t\t\t\t<t:ExtendedFieldURI PropertySetId=\"" + extendedProperty.id + "\" PropertyName=\"" + extendedProperty.name + "\" PropertyType=\"" + extendedProperty.type + "\" />\n\t\t\t\t\t\t<t:Contact>\n\t\t\t\t\t\t<t:ExtendedProperty>\n\t\t\t\t\t\t<t:ExtendedFieldURI PropertySetId=\"" + extendedProperty.id + "\" PropertyName=\"" + extendedProperty.name + "\" PropertyType=\"" + extendedProperty.type + "\" />\n\t\t\t\t\t\t<t:Value>" + extendedProperty.value + "</t:Value>\n\t\t\t\t\t\t</t:ExtendedProperty>\n\t\t\t\t\t\t</t:Contact>\n\t\t\t\t\t\t</t:SetItemField>";
            }
            var items = '';
            var extendedItems = '';
            properties.forEach(function (property) {
                items = items += getItemFieldSoap(property);
            });
            extendedProperties.forEach(function (extendedProperty) {
                extendedItems = extendedItems += getExtendedItemFieldSoap(extendedProperty);
            });
            var request = "<?xml version=\"1.0\" encoding=\"utf-8\" ?> \n\t\t\t\t\t\t\t<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:m=\"http://schemas.microsoft.com/exchange/services/2006/messages\" xmlns:t=\"http://schemas.microsoft.com/exchange/services/2006/types\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n\t\t\t\t\t\t\t<soap:Header>\n\t\t\t\t\t\t\t<t:RequestServerVersion Version=\"Exchange2010\" />\n\t\t\t\t\t\t\t</soap:Header>\n\t\t\t\t\t\t\t<soap:Body>\n\t\t\t\t\t\t\t<UpdateItem xmlns=\"http://schemas.microsoft.com/exchange/services/2006/messages\" ConflictResolution=\"AlwaysOverwrite\">\n\t\t\t\t\t\t\t<ItemChanges>\n\t\t\t\t\t\t\t<t:ItemChange>\n\t\t\t\t\t\t\t<t:ItemId Id=\"" + id + "\" ChangeKey=\"" + changeKey + "\" />\n\t\t\t\t\t\t\t<t:Updates>\n\t\t\t\t\t\t\t" + items + "\n\t\t\t\t\t\t\t" + extendedItems + "\n\t\t\t\t\t\t\t</t:Updates>\n\t\t\t\t\t\t\t</t:ItemChange>\n\t\t\t\t\t\t\t</ItemChanges>\n\t\t\t\t\t\t\t</UpdateItem>\n\t\t\t\t\t\t\t</soap:Body>\n\t\t\t\t\t\t\t</soap:Envelope>";
            request = request.replace(/(\r\n|\n|\r|\t)/gm, "");
            OfficeProvider.makeEwsRequestAsync(request, function (response) {
                deferred.resolve(true);
            });
            return deferred.promise();
        }
        OfficeProvider.updateContactProperties = updateContactProperties;
        function getMethodNameFromEwsXml(xml) {
            var parser = Mscrm.Parsers.XmlParser.fromString(xml);
            var body = parser.getNode("Body");
            var methodName = "Unknown";
            if (body && body.childNodes && body.childNodes.length > 0) {
                methodName = Mscrm.Parsers.XmlParser.getName(body.childNodes[0]);
            }
            return methodName;
        }
        function makeEwsRequestAsync(data, callback) {
            var startTime = Date.now();
            Office.context.mailbox.makeEwsRequestAsync(data, function (asyncResult) {
                if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
                    Mscrm.Performance.PerformanceStopwatch.addRetroactiveStopWatch("MailAppShim.EwsCall." + getMethodNameFromEwsXml(data), startTime, Date.now(), true);
                }
                callback(asyncResult);
            });
        }
        OfficeProvider.makeEwsRequestAsync = makeEwsRequestAsync;
        function getDisplayLanguage() {
            return Office.context.displayLanguage;
        }
        OfficeProvider.getDisplayLanguage = getDisplayLanguage;
        function isEmailInSentFolder() {
            if (Mscrm.Boot.activeBootManager.mode === Mscrm.MailAppMode.Read) {
                var message = OfficeProvider.getEmailItem();
                var emailAddressToCompare = "";
                if (message.itemType == Mscrm.Exchange.ItemType[Mscrm.Exchange.ItemType.appointment]) {
                    var appointment = OfficeProvider.getEmailItem();
                    emailAddressToCompare = appointment.organizer.emailAddress;
                }
                else {
                    emailAddressToCompare = message.sender ? message.sender.emailAddress : message.from.emailAddress;
                }
                if (!emailAddressToCompare) {
                    return true;
                }
                if (OfficeProvider.getUserProfile().emailAddress.toLowerCase() === emailAddressToCompare.toLowerCase()) {
                    return true;
                }
            }
            return false;
        }
        OfficeProvider.isEmailInSentFolder = isEmailInSentFolder;
        function getBodyAsync(coercionType) {
            var deferred = $.Deferred();
            var body = OfficeProvider.getEmailItem().body;
            if (!body || !body.getAsync) {
                deferred.reject(new Error("body.getAsync method is not available."));
                return deferred.promise();
            }
            var timeOut = setTimeout(function () {
                deferred.reject(new Error("body.getAsync method failed"));
            }, 2000);
            body.getAsync(getCoercionType(coercionType), {}, function (aResult) {
                clearTimeout(timeOut);
                if (aResult.status === Office.AsyncResultStatus.Succeeded) {
                    deferred.resolve(aResult.value);
                }
                else {
                    deferred.reject(aResult.error);
                }
            });
            return deferred.promise();
        }
        OfficeProvider.getBodyAsync = getBodyAsync;
        function setEmailBodyHtml(html) {
            var deferred = $.Deferred();
            var body = OfficeProvider.getEmailItem().body;
            if (!body || !body.setAsync) {
                deferred.reject(new Error("Unable to use body.setAsync method in read mode"));
                return deferred.promise();
            }
            body.setAsync(html, { coercionType: Office.CoercionType.Html }, function (aResult) {
                if (aResult.status === Office.AsyncResultStatus.Succeeded) {
                    deferred.resolve(null);
                }
                else {
                    deferred.reject(aResult.error);
                }
            });
            return deferred.promise();
        }
        OfficeProvider.setEmailBodyHtml = setEmailBodyHtml;
        function getEmailRecipients(isComposeMode) {
            var deferred = $.Deferred();
            var emailRecipients = {};
            var item = OfficeProvider.getEmailItem();
            var userProfile = OfficeProvider.getUserProfile();
            if (isComposeMode) {
                if (userProfile.emailAddress !== undefined) {
                    emailRecipients.from = {
                        displayName: userProfile.displayName,
                        emailAddress: userProfile.emailAddress,
                        recipientType: "user"
                    };
                }
                if (item.itemType === Mscrm.Exchange.ItemType[Mscrm.Exchange.ItemType.appointment]) {
                    var composeAppointment = item;
                    $.when.apply($, [OfficeProvider.getComposeEmailAddresses(composeAppointment.requiredAttendees), OfficeProvider.getComposeEmailAddresses(composeAppointment.optionalAttendees)])
                        .then(function (requiredAttendees, optionalAttendees) {
                        emailRecipients.requiredAttendees = requiredAttendees;
                        emailRecipients.requiredAttendees.forEach(function (ead, index) {
                            if (ead.emailAddress === undefined) {
                                emailRecipients.requiredAttendees.splice(index, 1);
                            }
                        });
                        emailRecipients.optionalAttendees = optionalAttendees;
                        emailRecipients.optionalAttendees.forEach(function (ead, index) {
                            if (ead.emailAddress === undefined) {
                                emailRecipients.optionalAttendees.splice(index, 1);
                            }
                        });
                        deferred.resolve(emailRecipients);
                    }, function (error) {
                        deferred.reject(error);
                    });
                }
                else {
                    var composeMessage = item;
                    $.when.apply($, [OfficeProvider.getComposeEmailAddresses(composeMessage.to), OfficeProvider.getComposeEmailAddresses(composeMessage.cc), OfficeProvider.getComposeEmailAddresses(composeMessage.bcc)])
                        .then(function (to, cc, bcc) {
                        emailRecipients.to = to;
                        emailRecipients.to.forEach(function (ead, index) {
                            if (ead.emailAddress === undefined) {
                                emailRecipients.to.splice(index, 1);
                            }
                        });
                        emailRecipients.cc = cc;
                        emailRecipients.cc.forEach(function (ead, index) {
                            if (ead.emailAddress === undefined) {
                                emailRecipients.cc.splice(index, 1);
                            }
                        });
                        emailRecipients.bcc = bcc;
                        emailRecipients.bcc.forEach(function (ead, index) {
                            if (ead.emailAddress === undefined) {
                                emailRecipients.bcc.splice(index, 1);
                            }
                        });
                        deferred.resolve(emailRecipients);
                    }, function (error) {
                        deferred.reject(error);
                    });
                }
            }
            else {
                if (item.itemType === Mscrm.Exchange.ItemType[Mscrm.Exchange.ItemType.appointment]) {
                    var readAppointment = item;
                    if (readAppointment.organizer.emailAddress !== undefined) {
                        emailRecipients.from = readAppointment.organizer;
                        emailRecipients.organizer = readAppointment.organizer;
                    }
                    emailRecipients.requiredAttendees = readAppointment.requiredAttendees;
                    emailRecipients.requiredAttendees.forEach(function (ead, index) {
                        if (ead.emailAddress === undefined) {
                            emailRecipients.requiredAttendees.splice(index, 1);
                        }
                    });
                    emailRecipients.optionalAttendees = readAppointment.optionalAttendees;
                    emailRecipients.optionalAttendees.forEach(function (ead, index) {
                        if (ead.emailAddress === undefined) {
                            emailRecipients.optionalAttendees.splice(index, 1);
                        }
                    });
                }
                else {
                    var readMessage = item;
                    if (readMessage.from.emailAddress !== undefined) {
                        emailRecipients.from = readMessage.from;
                    }
                    emailRecipients.to = readMessage.to;
                    emailRecipients.to.forEach(function (ead, index) {
                        if (ead.emailAddress === undefined) {
                            emailRecipients.to.splice(index, 1);
                        }
                    });
                    emailRecipients.cc = readMessage.cc;
                    emailRecipients.cc.forEach(function (ead, index) {
                        if (ead.emailAddress === undefined) {
                            emailRecipients.cc.splice(index, 1);
                        }
                    });
                }
                deferred.resolve(emailRecipients);
            }
            return deferred.promise();
        }
        OfficeProvider.getEmailRecipients = getEmailRecipients;
        function getComposeEmailAddresses(composeModeRecipients) {
            var deferred = $.Deferred();
            composeModeRecipients.getAsync(function (result) {
                if (result.status === "succeeded") {
                    deferred.resolve(result.value);
                }
                else {
                    deferred.reject(result.error);
                }
            });
            return deferred.promise();
        }
        OfficeProvider.getComposeEmailAddresses = getComposeEmailAddresses;
        function setRoamingSettingsItem(key, value) {
            Office.context.roamingSettings.set(key, value);
        }
        OfficeProvider.setRoamingSettingsItem = setRoamingSettingsItem;
        function getRoamingSettingsItem(key) {
            return Office.context.roamingSettings.get(key);
        }
        OfficeProvider.getRoamingSettingsItem = getRoamingSettingsItem;
        function removeRoamingSettingsItem(key) {
            Office.context.roamingSettings.remove(key);
        }
        OfficeProvider.removeRoamingSettingsItem = removeRoamingSettingsItem;
        function saveRoamingSettingsAsync() {
            var deferred = $.Deferred();
            Office.context.roamingSettings.saveAsync(function (result) {
                if (result.status == Office.AsyncResultStatus.Failed) {
                    console.error(result.error.message);
                    deferred.reject(result.error);
                }
                else {
                    deferred.resolve(result.value);
                }
            });
            return deferred.promise();
        }
        OfficeProvider.saveRoamingSettingsAsync = saveRoamingSettingsAsync;
        function retrieveAddinSpecificCustomProperties() {
            var deferred = $.Deferred();
            OfficeProvider.getEmailItem().loadCustomPropertiesAsync(function (aResult) {
                if (aResult.status === Office.AsyncResultStatus.Succeeded) {
                    deferred.resolve(aResult.value);
                }
                else {
                    deferred.reject(aResult.error);
                }
            });
            return deferred.promise();
        }
        OfficeProvider.retrieveAddinSpecificCustomProperties = retrieveAddinSpecificCustomProperties;
        function updateAddinSpecificCustomPropertiesInternal(customProperties) {
            var deferred = $.Deferred();
            if (!customProperties) {
                deferred.reject(new Error("Unable to update custom properties: customProperties argument is undefined."));
            }
            customProperties.saveAsync(function (aResult) {
                if (aResult.status === Office.AsyncResultStatus.Succeeded) {
                    deferred.resolve(aResult.value);
                }
                else {
                    deferred.reject(aResult.error);
                }
            });
            return deferred.promise();
        }
        function updateAddinSpecificCustomProperties(newProps) {
            var deferred = $.Deferred();
            OfficeProvider.retrieveAddinSpecificCustomProperties().then(function (customProps) {
                for (var k in newProps) {
                    customProps.set(k, newProps[k]);
                }
                updateAddinSpecificCustomPropertiesInternal(customProps).then(function (result) {
                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                });
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise();
        }
        OfficeProvider.updateAddinSpecificCustomProperties = updateAddinSpecificCustomProperties;
        function getSelectedEmailRecipient() {
            var selectedEmailRecipients = new Mscrm.EmailContext.AddinEmailProperties(this.getRoamingSettingsItem(SELECTED_RECIPIENT_KEY));
            var id = getEmailItem().itemId ? getEmailItem().itemId : Mscrm.EmailContext.EmailContextRetriever.getInstance().emailContext.emailItem ? Mscrm.EmailContext.EmailContextRetriever.getInstance().emailContext.emailItem.Id : "";
            return selectedEmailRecipients.getEmail(id);
        }
        OfficeProvider.getSelectedEmailRecipient = getSelectedEmailRecipient;
        function updateSelectedEmailRecipient(newSelectedRecipient) {
            var deferred = $.Deferred();
            var selectedEmailRecipients = new Mscrm.EmailContext.AddinEmailProperties(this.getRoamingSettingsItem(SELECTED_RECIPIENT_KEY));
            var id = getEmailItem().itemId ? getEmailItem().itemId : Mscrm.EmailContext.EmailContextRetriever.getInstance().emailContext.emailItem ? Mscrm.EmailContext.EmailContextRetriever.getInstance().emailContext.emailItem.Id : null;
            if (id) {
                selectedEmailRecipients.add(getEmailItem().itemId ? getEmailItem().itemId : Mscrm.EmailContext.EmailContextRetriever.getInstance().emailContext.emailItem.Id, newSelectedRecipient);
                this.setRoamingSettingsItem(SELECTED_RECIPIENT_KEY, selectedEmailRecipients);
                this.saveRoamingSettingsAsync().then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.resolve(error);
                });
            }
            else {
                deferred.resolve(null);
            }
            return deferred.promise();
        }
        OfficeProvider.updateSelectedEmailRecipient = updateSelectedEmailRecipient;
        function getCallbackTokenAsync() {
            var deferred = $.Deferred();
            var maxErrorRetries = 3;
            var retryCount = 0;
            var needsSave = Mscrm.Boot.activeBootManager.mode === Mscrm.MailAppMode.Compose;
            var getCallbackToken = function () {
                Office.context.mailbox.getCallbackTokenAsync({ isRest: true }, function (result) {
                    if (result.status === Office.AsyncResultStatus.Succeeded) {
                        deferred.resolve(result.value);
                    }
                    else {
                        retryCount++;
                        if (retryCount < maxErrorRetries) {
                            getCallbackToken();
                        }
                        else {
                            deferred.reject(result.error);
                        }
                    }
                });
            };
            if (needsSave) {
                tryToSaveItemAsync().then(function (result) {
                    getCallbackToken();
                }, function (error) {
                    deferred.reject(error);
                });
            }
            else {
                getCallbackToken();
            }
            return deferred.promise();
        }
        OfficeProvider.getCallbackTokenAsync = getCallbackTokenAsync;
        function tryToSaveItemAsync() {
            var item = getEmailItem();
            if (!item.saveAsync) {
                saveAsyncDeferred = $.Deferred();
                saveAsyncDeferred.reject({ code: Mscrm.EmailContext.EmailItemRetrieveState.SaveAsyncUnavailable, message: "item.saveAsync method isn't supported by current environment." });
            }
            else if (!hasSavedAsync) {
                saveAsyncDeferred = $.Deferred();
                var maxErrorRetries_1 = 3;
                var retryCount_1 = 0;
                var saveAsync_1 = function () {
                    item.saveAsync(function (result) {
                        if (result.status === Office.AsyncResultStatus.Succeeded) {
                            saveAsyncDeferred.resolve(result.value);
                        }
                        else {
                            retryCount_1++;
                            if (retryCount_1 < maxErrorRetries_1) {
                                saveAsync_1();
                            }
                            else {
                                saveAsyncDeferred.reject({
                                    code: Mscrm.EmailContext.EmailItemRetrieveState.SaveAsyncError,
                                    message: "Error happened while trying to save email."
                                });
                            }
                        }
                    });
                };
                saveAsync_1();
                hasSavedAsync = true;
            }
            return saveAsyncDeferred.promise();
        }
        OfficeProvider.tryToSaveItemAsync = tryToSaveItemAsync;
        function displayNewAppointmentForm(params) {
            Office.context.mailbox.displayNewAppointmentForm(params);
        }
        OfficeProvider.displayNewAppointmentForm = displayNewAppointmentForm;
        function isOfficeOpenDialogSupported() {
            return Office.context.requirements.isSetSupported("DialogApi", 1.1) && Office.context.ui.displayDialogAsync !== undefined;
        }
        OfficeProvider.isOfficeOpenDialogSupported = isOfficeOpenDialogSupported;
        function openLoginDialog(url, callback) {
            var dialog;
            if (Office.context.requirements.isSetSupported("DialogApi", 1.1) && Office.context.ui.displayDialogAsync !== undefined) {
                localStorage.setItem(Mscrm.Authentication.LOGIN_DIALOG_MODE_KEY, Mscrm.Authentication.LOGIN_DIALOG_MODE_VALUE_OFFICE_DIALOG);
                Office.context.ui.displayDialogAsync(url, null, function (asyncResult) {
                    if (asyncResult.status === "failed") {
                        var error = asyncResult.error.message;
                        switch (asyncResult.error.code) {
                            case 12004:
                                error = "Domain is not trusted";
                                break;
                            case 12005:
                                error = "HTTPS is required";
                                break;
                            case 12007:
                                error = "A dialog is already opened.";
                                break;
                            default:
                                break;
                        }
                        callback({
                            error: "Dialog initialization failed",
                            error_description: error,
                            error_code: asyncResult.error.code
                        });
                    }
                    else {
                        dialog = asyncResult.value;
                        dialog.addEventHandler("dialogMessageReceived", function (arg) {
                            dialog.close();
                            try {
                                var response = JSON.parse(arg.message);
                                callback(response);
                            }
                            catch (e) {
                                callback({
                                    error: "Failed to parse Auth response",
                                    error_description: e.message,
                                });
                            }
                        });
                    }
                });
                return true;
            }
            localStorage.setItem(Mscrm.Authentication.LOGIN_DIALOG_MODE_KEY, Mscrm.Authentication.LOGIN_DIALOG_MODE_VALUE_EXTERNAL);
            return !!window.open(url);
        }
        OfficeProvider.openLoginDialog = openLoginDialog;
        ;
    })(OfficeProvider = Mscrm.OfficeProvider || (Mscrm.OfficeProvider = {}));
})(Mscrm || (Mscrm = {}));
Object.freeze(Mscrm.OfficeProvider);
var Mscrm;
(function (Mscrm) {
    var Performance;
    (function (Performance) {
        var PerformanceMetric = (function () {
            function PerformanceMetric(name, startTime, stopTime) {
                if (startTime === void 0) { startTime = -1; }
                if (stopTime === void 0) { stopTime = -1; }
                this.name = name;
                this.startTime = startTime;
                this.stopTime = stopTime;
            }
            PerformanceMetric.prototype.save = function () {
                Performance.PerformanceMetricStorage.saveMetric(this);
            };
            return PerformanceMetric;
        }());
        Performance.PerformanceMetric = PerformanceMetric;
    })(Performance = Mscrm.Performance || (Mscrm.Performance = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Performance;
    (function (Performance) {
        var PerformanceStopwatch = (function (_super) {
            __extends(PerformanceStopwatch, _super);
            function PerformanceStopwatch() {
                _super.apply(this, arguments);
            }
            PerformanceStopwatch.prototype.start = function () {
                this.startTime = Date.now();
            };
            PerformanceStopwatch.prototype.stop = function () {
                if (this.startTime === -1) {
                    Mscrm.Logging.Logger.logWarning("Attempt to stop PerformanceStopwatch '" + this.name + "' before starting it", "Performance");
                    return;
                }
                this.stopTime = Date.now();
                this.save();
            };
            PerformanceStopwatch.addRetroactiveStopWatch = function (name, startTime, stopTime, reportTelemetry) {
                if (reportTelemetry === void 0) { reportTelemetry = false; }
                var sw = new PerformanceStopwatch(name, startTime, stopTime);
                sw.save();
                if (reportTelemetry) {
                    sw.report();
                }
            };
            PerformanceStopwatch.prototype.report = function () {
                if (this.startTime === -1) {
                    Mscrm.Logging.Logger.logWarning("Attempt to report telemetry event for PerformanceStopwatch '" + this.name + "' before starting it", "Performance");
                    return;
                }
                if (this.stopTime === -1) {
                    Mscrm.Logging.Logger.logWarning("Attempt to report telemetry event for PerformanceStopwatch '" + this.name + "' before stopping it", "Performance");
                    return;
                }
                Mscrm.Telemetry.TelemetryReporter.getInstance().reportEvent(new Mscrm.Telemetry.TelemetryEvent("MailAppShimPerformanceMetric", {
                    MetricName: this.name,
                    StartTime: this.startTime,
                    StopTime: this.stopTime
                }));
            };
            return PerformanceStopwatch;
        }(Performance.PerformanceMetric));
        Performance.PerformanceStopwatch = PerformanceStopwatch;
    })(Performance = Mscrm.Performance || (Mscrm.Performance = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var ExchangeApiProvider = (function () {
            function ExchangeApiProvider() {
                this.exchangeApis = {};
                this.sssCustomPropertyFCB = false;
                if (ExchangeApiProvider.instance) {
                    throw new Error("ExchangeApiProvider.getInstance() should be used instead of new()");
                }
            }
            ExchangeApiProvider.getInstance = function () {
                if (!this.instance) {
                    this.instance = new ExchangeApiProvider();
                }
                return this.instance;
            };
            ExchangeApiProvider.prototype.initialize = function (authManager, serviceDeploymentEnvironment, diagnostics, deploymentEnvironment) {
                var _this = this;
                this.exchangeApis[Exchange.RestV2Api.apiVersion] = new Exchange.RestV2Api();
                this.exchangeApis[Exchange.EwsApi.apiVersion] = new Exchange.EwsApi();
                this.serviceDeploymentEnvironment = serviceDeploymentEnvironment;
                this.diagnostics = diagnostics;
                this.deploymentEnvironment = deploymentEnvironment;
                Mscrm.Boot.ClientLoader.userContextPromise.done(function () {
                    var fcbArray = Mscrm.InlinedAppData.userContext.FCBContext;
                    for (var i = 0; fcbArray && i < fcbArray.length; i++) {
                        if (fcbArray[i].FeatureControlBitName === 'FCB.OfficeMailAppRestApi') {
                            _this.restEnabledFCB = fcbArray[i].Value;
                        }
                        if (fcbArray[i].FeatureControlBitName === 'FCB.SSSCustomProperty') {
                            _this.sssCustomPropertyFCB = fcbArray[i].Value;
                        }
                        if (fcbArray[i].FeatureControlBitName === 'FCB.OfficeMailAppOutlookMacCompose') {
                            var deviceValidator = new Mscrm.UserAgent.DeviceValidator();
                            var userAgent = new Mscrm.UserAgent.UserAgent();
                            if ((userAgent.getIsMac()
                                && userAgent.getIsDesktopOutlook()
                                && (Mscrm.Boot.activeBootManager.displayMode.indexOf("Compose") !== -1 || Mscrm.OfficeProvider.getEmailItem().itemType === Exchange.ItemType[Exchange.ItemType.appointment]))
                                && !fcbArray[i].Value) {
                                Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError('Device', Mscrm.Boot.ClientError.DeviceSupportErrorCode), "Unable to load app for Mac compose mode and appointments");
                                return;
                            }
                        }
                    }
                    ;
                });
            };
            ExchangeApiProvider.prototype.accept = function (visitor) {
                var _this = this;
                var deferred = $.Deferred();
                if (Mscrm.OfficeProvider.getHostType() === Mscrm.OfficeProvider.HostType.OutlookMobile || !visitor.apiRequisite.getEwsApiVersion()) {
                    return this.makeRequest(visitor, visitor.apiRequisite.getRestApiVersion());
                }
                else if (this.restEnabledFCB && this.serviceDeploymentEnvironment != "onprem" && this.deploymentEnvironment !== 'onprem' && visitor.apiRequisite.getRestApiVersion()) {
                    this.makeRequest(visitor, visitor.apiRequisite.getRestApiVersion()).then(function (result) {
                        deferred.resolve(result);
                    }, function (restError) {
                        Mscrm.Logging.Logger.logWarning("Rest request failed with error " + restError.name + ": " + restError.message);
                        _this.makeRequest(visitor, visitor.apiRequisite.getEwsApiVersion()).then(function (result) {
                            deferred.resolve(result);
                        }, function (ewsError) {
                            deferred.reject(ewsError);
                        });
                    });
                }
                else {
                    return this.makeRequest(visitor, visitor.apiRequisite.getEwsApiVersion());
                }
                return deferred.promise();
            };
            ExchangeApiProvider.prototype.makeRequest = function (visitor, requisite) {
                var api = this.exchangeApis[requisite];
                api.initialize();
                return api.accept(visitor);
            };
            ExchangeApiProvider.exchange2016MinVersion = "15.01.0225.016";
            return ExchangeApiProvider;
        }());
        Exchange.ExchangeApiProvider = ExchangeApiProvider;
        ;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var ExchangeVisitor = (function () {
            function ExchangeVisitor() {
            }
            ExchangeVisitor.prototype.visit = function (api) {
                var deferred = $.Deferred();
                var asyncResponse = {
                    status: "failed",
                    value: null,
                    error: {
                        code: 500,
                        name: "Not supported operation",
                        message: "The requested operation is not supported by this client's configuration"
                    }
                };
                deferred.resolve(asyncResponse);
                return deferred.promise();
            };
            return ExchangeVisitor;
        }());
        Exchange.ExchangeVisitor = ExchangeVisitor;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var GetItemVisitor = (function (_super) {
            __extends(GetItemVisitor, _super);
            function GetItemVisitor(itemId, itemType, properties, extendedProperties) {
                _super.call(this);
                this.itemId = itemId;
                this.itemType = itemType;
                this.properties = properties;
                this.extendedProperties = extendedProperties;
                this.apiRequisite = new Exchange.ExchangeRequisite(Exchange.RestV2Api.apiVersion, Exchange.EwsApi.apiVersion);
                if (!this.extendedProperties) {
                    this.extendedProperties = [];
                }
                if (!this.properties) {
                    this.properties = [];
                }
            }
            GetItemVisitor.prototype.visit = function (api) {
                if (api instanceof Exchange.RestV2Api) {
                    return this.visitRestV2Api(api);
                }
                else if (api instanceof Exchange.EwsApi) {
                    return this.visitEwsApi(api);
                }
                return _super.prototype.visit.call(this, api);
            };
            GetItemVisitor.prototype.visitRestV2Api = function (api) {
                var _this = this;
                var deferred = $.Deferred();
                var resource = this.getRestResource();
                api.setResource(resource);
                api.setRequestMethod("GET");
                api.addParameters(this.getRestParameters(api));
                api.getToken().done(function (token) {
                    api.setCommonHeaders();
                    api.setToken(token);
                    var conversationIndexResult = {
                        executed: false,
                        ConversationIndex: null
                    };
                    var asyncResult;
                    if (_this.itemType === Exchange.ItemType.message) {
                        if (_this.properties.reduce(function (prevValue, prop) {
                            prop.propertyName === "ConversationIndex" ? prevValue.push(prop) : null;
                            return prevValue;
                        }, []).length > 0) {
                            var betaAPI = new Exchange.RestBetaApi(api.getEndpoint());
                            betaAPI.setResource(resource);
                            betaAPI.setRequestMethod("GET");
                            betaAPI.addParameters("$select=ConversationIndex");
                            betaAPI.setCommonHeaders();
                            betaAPI.setToken(token);
                            betaAPI.makeRequest(function (response) {
                                conversationIndexResult.executed = true;
                                var responseObj;
                                try {
                                    responseObj = JSON.parse(response);
                                }
                                catch (err) {
                                }
                                var conversationIndex = responseObj ? responseObj.ConversationIndex : null;
                                if (asyncResult && asyncResult.value) {
                                    asyncResult.value.ConversationIndex = conversationIndex;
                                    deferred.resolve(asyncResult);
                                }
                                else {
                                    conversationIndexResult.ConversationIndex = conversationIndex;
                                }
                            });
                        }
                        else {
                            conversationIndexResult.executed = true;
                        }
                    }
                    else {
                        conversationIndexResult.executed = true;
                    }
                    api.makeRequest(function (response) {
                        asyncResult = api.createResponse(response);
                        if (asyncResult.error || !asyncResult.value) {
                            deferred.reject(asyncResult.error);
                        }
                        else {
                            asyncResult.value = _this.populateEmailContextFromRest(api, asyncResult.value);
                            if (conversationIndexResult.executed) {
                                if (conversationIndexResult.ConversationIndex) {
                                    asyncResult.value.ConversationIndex = conversationIndexResult.ConversationIndex;
                                }
                                deferred.resolve(asyncResult);
                            }
                        }
                    });
                });
                return deferred.promise();
            };
            GetItemVisitor.prototype.getRestResource = function () {
                var resource;
                switch (this.itemType) {
                    case Exchange.ItemType.message:
                        resource = "messages";
                        break;
                    case Exchange.ItemType.appointment:
                        resource = "events";
                        break;
                    default:
                        return null;
                }
                return resource + "/" + this.itemId.replace(/\//g, "-");
            };
            GetItemVisitor.prototype.getRestParameters = function (api) {
                var _this = this;
                var parameters = "$select=Id";
                this.properties.forEach(function (property) {
                    var propertyName = property.propertyName;
                    if (_this.itemType === Exchange.ItemType.appointment) {
                        if (propertyName === "IsAllDayEvent") {
                            propertyName = "IsAllDay";
                        }
                        else if (propertyName === "CalendarItemType") {
                            propertyName = "Type";
                        }
                    }
                    else {
                        if (propertyName === "ConversationIndex") {
                            return;
                        }
                    }
                    parameters += "," + propertyName;
                });
                if (this.extendedProperties.length > 0) {
                    parameters += "&$expand=SingleValueExtendedProperties($filter=";
                    this.extendedProperties.forEach(function (property, i) {
                        if (i > 0) {
                            parameters += "%20or%20";
                        }
                        parameters += "PropertyId%20eq%20'" + Exchange.PropertyType[property.propertyType] + "%20{00020329-0000-0000-C000-000000000046}%20Name%20" + property.propertyName + "'";
                    });
                    parameters += ")";
                }
                return parameters;
            };
            GetItemVisitor.prototype.populateEmailContextFromRest = function (api, result) {
                var _this = this;
                var item = {};
                if (result) {
                    this.properties.forEach(function (property) {
                        if (_this.itemType === Exchange.ItemType.appointment) {
                            if (property.propertyName === "IsAllDayEvent") {
                                item.IsAllDayEvent = result.IsAllDay;
                            }
                            else if (property.propertyName === "CalendarItemType") {
                                item.CalendarItemType = result.Type;
                            }
                            else if (property.propertyName === "Recurrence" && result.Recurrence) {
                                item.Recurrence = result.Recurrence;
                                item.Recurrence.Pattern.DayOfWeekIndex = result.Recurrence.Pattern.Index;
                                item.Recurrence.Pattern.MonthOfYear = result.Recurrence.Pattern.Month;
                                if (result.Recurrence.Pattern.DaysOfWeek) {
                                    item.Recurrence.Pattern.DaysOfWeek = result.Recurrence.Pattern.DaysOfWeek.join(" ");
                                }
                            }
                            else if (property.propertyName === "Location") {
                                item.Location = result.Location.DisplayName;
                            }
                            else if (property.propertyName === "Start") {
                                item.Start = result.Start.DateTime;
                            }
                            else if (property.propertyName === "End") {
                                item.End = result.End.DateTime;
                            }
                            else {
                                item[property.propertyName] = result[property.propertyName];
                            }
                        }
                        else {
                            item[property.propertyName] = result[property.propertyName];
                        }
                    });
                    var singleValueExtendedProperties = result.SingleValueExtendedProperties;
                    if (singleValueExtendedProperties) {
                        for (var i = 0; i < singleValueExtendedProperties.length; i++) {
                            var propName = singleValueExtendedProperties[i].PropertyId.split(" Name ")[1];
                            item[propName] = singleValueExtendedProperties[i].Value;
                        }
                    }
                }
                return item;
            };
            GetItemVisitor.prototype.visitEwsApi = function (api) {
                var _this = this;
                var deferred = $.Deferred();
                api.setRequestMethod("GetItem");
                api.setMethodDefinition();
                api.setBodyRequest(this.getEwsBodyRequest());
                api.makeRequest(function (response) {
                    var asyncResult = api.createResponse(response);
                    if (asyncResult.error) {
                        deferred.reject(asyncResult.error);
                    }
                    else {
                        asyncResult.value = _this.populateEmailContextFromEws(asyncResult.value);
                        deferred.resolve(asyncResult);
                    }
                });
                return deferred.promise();
            };
            GetItemVisitor.prototype.getEwsBodyRequest = function () {
                var type = this.getEwsItemType(), request = "<" + type + "Shape>\n\t\t\t\t\t\t <t:BaseShape>IdOnly</t:BaseShape>";
                if (this.properties.length + this.extendedProperties.length > 0) {
                    request += "<t:AdditionalProperties>";
                    this.properties.forEach(function (property) {
                        request += property.toSoap();
                    });
                    this.extendedProperties.forEach(function (extendedProperty) {
                        request += extendedProperty.toSoap();
                    });
                    request += "</t:AdditionalProperties>";
                }
                request += "</" + type + "Shape>\n\t\t\t\t\t<" + type + "Ids>\n\t\t\t\t\t\t<t:" + type + "Id Id=\"" + this.itemId + "\" />\n\t\t\t\t\t</" + type + "Ids>";
                return request;
            };
            GetItemVisitor.prototype.populateEmailContextFromEws = function (result) {
                var item = {};
                this.properties.forEach(function (property) {
                    var node = result.getNode(property.propertyName);
                    if (node) {
                        if (property.propertyName === "ParentFolderId") {
                            item.ParentFolderId = node.attributes.getNamedItem("Id").value;
                        }
                        else if (property.propertyName === "Recurrence") {
                            var recurrencePatternParser = node.childNodes[0];
                            var recurrenceRangeParser = node.childNodes[1];
                            item.Recurrence = { Pattern: {}, Range: {} };
                            item.Recurrence.Pattern.Type = recurrencePatternParser.localName;
                            item.Recurrence.Range.Type = recurrenceRangeParser.localName;
                            var interval = Exchange.EwsResponseParser.getChildFromNode(recurrencePatternParser, "Interval");
                            item.Recurrence.Pattern.Interval = interval ? interval.textContent : null;
                            var daysOfWeek = Exchange.EwsResponseParser.getChildFromNode(recurrencePatternParser, "DaysOfWeek");
                            item.Recurrence.Pattern.DaysOfWeek = daysOfWeek ? daysOfWeek.textContent : null;
                            var dayOfWeekIndex = Exchange.EwsResponseParser.getChildFromNode(recurrencePatternParser, "DayOfWeekIndex");
                            item.Recurrence.Pattern.DayOfWeekIndex = dayOfWeekIndex ? dayOfWeekIndex.textContent : null;
                            var dayOfMonth = Exchange.EwsResponseParser.getChildFromNode(recurrencePatternParser, "DayOfMonth");
                            item.Recurrence.Pattern.DayOfMonth = dayOfMonth ? dayOfMonth.textContent : null;
                            var monthOfYear = Exchange.EwsResponseParser.getChildFromNode(recurrencePatternParser, "MonthOfYear");
                            item.Recurrence.Pattern.MonthOfYear = monthOfYear ? new Date(monthOfYear.textContent + '-1-01').getMonth() + 1 : 0;
                            var startDate = Exchange.EwsResponseParser.getChildFromNode(recurrenceRangeParser, "StartDate");
                            item.Recurrence.Range.StartDate = startDate ? startDate.textContent.substr(0, 10) + 'T' + startDate.textContent.substr(11) : null;
                            var endDate = Exchange.EwsResponseParser.getChildFromNode(recurrenceRangeParser, "EndDate");
                            item.Recurrence.Range.EndDate = endDate ? endDate.textContent.substr(0, 10) + 'T' + endDate.textContent.substr(11) : null;
                        }
                        else if (property.propertyName === Exchange.ItemPropertyNames.Categories) {
                            if (node.childNodes) {
                                item.Categories = Array(node.childNodes.length);
                                for (var i = 0; i < node.childNodes.length; i++) {
                                    var categoryNode = node.childNodes.item(i);
                                    item.Categories.push(categoryNode.textContent);
                                }
                            }
                        }
                        else {
                            item[property.propertyName] = node ? node.textContent : null;
                        }
                    }
                });
                this.extendedProperties.forEach(function (extendedProperty) {
                    item[extendedProperty.propertyName] = result.getExtendedPropertyValue(extendedProperty.propertyName);
                });
                return item;
            };
            GetItemVisitor.prototype.getEwsItemType = function () {
                switch (this.itemType) {
                    case Exchange.ItemType.folder:
                        return "Folder";
                    default:
                        return "Item";
                }
            };
            GetItemVisitor.prototype.getMethodName = function () {
                return "GetItem";
            };
            return GetItemVisitor;
        }(Exchange.ExchangeVisitor));
        Exchange.GetItemVisitor = GetItemVisitor;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var UpdateCrmPropertiesVisitor = (function (_super) {
            __extends(UpdateCrmPropertiesVisitor, _super);
            function UpdateCrmPropertiesVisitor(itemId, itemType, extendedPropertyUpdates, propertyUpdates, conflictResolution) {
                if (extendedPropertyUpdates === void 0) { extendedPropertyUpdates = []; }
                if (propertyUpdates === void 0) { propertyUpdates = []; }
                _super.call(this);
                this.itemId = itemId;
                this.itemType = itemType;
                this.extendedPropertyUpdates = extendedPropertyUpdates;
                this.propertyUpdates = propertyUpdates;
                this.conflictResolution = conflictResolution;
                this.apiRequisite = new Exchange.ExchangeRequisite(Exchange.RestV2Api.apiVersion, Exchange.EwsApi.apiVersion);
            }
            UpdateCrmPropertiesVisitor.prototype.visit = function (api) {
                if (api instanceof Exchange.RestV2Api) {
                    return this.visitRestV2Api(api);
                }
                else if (api instanceof Exchange.EwsApi) {
                    return this.visitEwsApi(api);
                }
                return _super.prototype.visit.call(this, api);
            };
            UpdateCrmPropertiesVisitor.prototype.visitRestV2Api = function (api) {
                var _this = this;
                var deferred = $.Deferred(), resource = this.getRestResource();
                api.setResource(resource);
                api.setRequestMethod("PATCH");
                api.setBody(this.getRestBody());
                api.getToken().done(function (token) {
                    api.setCommonHeaders();
                    api.setToken(token);
                    api.makeRequest(function (response) {
                        var asyncResult = api.createResponse(response);
                        if (asyncResult.error || !asyncResult.value) {
                            deferred.reject(asyncResult.error);
                        }
                        else {
                            asyncResult.value.Id = _this.itemId.replace(/\//g, "-");
                            deferred.resolve(asyncResult);
                        }
                    });
                });
                return deferred.promise();
            };
            UpdateCrmPropertiesVisitor.prototype.getRestResource = function () {
                var resource;
                switch (this.itemType) {
                    case Exchange.ItemType.message:
                        resource = "messages";
                        break;
                    case Exchange.ItemType.appointment:
                        resource = "events";
                        break;
                    default:
                        return null;
                }
                return resource + "/" + this.itemId.replace(/\//g, "-");
            };
            UpdateCrmPropertiesVisitor.prototype.getRestBody = function () {
                var body = "{";
                this.propertyUpdates.forEach(function (property) {
                    body += property.toJson() + ",";
                });
                body += "\"SingleValueExtendedProperties\":[";
                this.extendedPropertyUpdates.forEach(function (extendedPropertyUpdate, i) {
                    if (i > 0) {
                        body += ",";
                    }
                    body += extendedPropertyUpdate.toJson();
                });
                return body + "]}";
            };
            ;
            UpdateCrmPropertiesVisitor.prototype.visitEwsApi = function (api) {
                var _this = this;
                var deferred = $.Deferred();
                api.setRequestMethod("UpdateItem");
                api.setMethodDefinition();
                api.setMethodDefinition(this.getMethodDefinitionParamaters());
                api.setBodyRequest(this.getEwsBodyRequest());
                api.makeRequest(function (response) {
                    var asyncResult = api.createResponse(response);
                    if (asyncResult.error) {
                        deferred.reject(asyncResult.error);
                    }
                    else {
                        asyncResult.value = { Id: _this.itemId };
                        deferred.resolve(asyncResult);
                    }
                });
                return deferred.promise();
            };
            UpdateCrmPropertiesVisitor.prototype.getMethodDefinitionParamaters = function () {
                var params = [
                    ("ConflictResolution=\"" + this.conflictResolution + "\""),
                    "MessageDisposition=\"SaveOnly\""
                ];
                if (this.itemType == Exchange.ItemType.appointment) {
                    params.push("SendMeetingInvitationsOrCancellations=\"SendToNone\"");
                }
                return params;
            };
            UpdateCrmPropertiesVisitor.prototype.getEwsBodyRequest = function () {
                var request = "<ItemChanges>\n\t\t\t\t\t<t:ItemChange>\n\t\t\t\t\t<t:ItemId Id=\"" + this.itemId + "\"/>\n\t\t\t\t\t<t:Updates>";
                this.extendedPropertyUpdates.forEach(function (update) {
                    request += " " + update.toSoap();
                });
                this.propertyUpdates.forEach(function (update) {
                    request += " " + update.toSoap();
                });
                request += "</t:Updates>\n\t\t\t\t\t</t:ItemChange>\n\t\t\t\t\t</ItemChanges>";
                return request;
            };
            UpdateCrmPropertiesVisitor.prototype.getMethodName = function () {
                return "UpdateCrmProperties";
            };
            return UpdateCrmPropertiesVisitor;
        }(Exchange.ExchangeVisitor));
        Exchange.UpdateCrmPropertiesVisitor = UpdateCrmPropertiesVisitor;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var ExtendedProperty = (function (_super) {
            __extends(ExtendedProperty, _super);
            function ExtendedProperty(propertyName, propertyType) {
                _super.call(this, propertyName, propertyType);
                this.propertyName = propertyName;
                this.propertyType = propertyType;
            }
            ExtendedProperty.prototype.toSoap = function () {
                return "<t:ExtendedFieldURI DistinguishedPropertySetId=\"PublicStrings\" PropertyName=\"" + this.propertyName + "\" PropertyType=\"" + Exchange.PropertyType[this.propertyType] + "\" />";
            };
            return ExtendedProperty;
        }(Exchange.Property));
        Exchange.ExtendedProperty = ExtendedProperty;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        (function (PropertyType) {
            PropertyType[PropertyType["String"] = 0] = "String";
            PropertyType[PropertyType["Double"] = 1] = "Double";
            PropertyType[PropertyType["Integer"] = 2] = "Integer";
            PropertyType[PropertyType["Item"] = 3] = "Item";
            PropertyType[PropertyType["Calendar"] = 4] = "Calendar";
            PropertyType[PropertyType["Message"] = 5] = "Message";
            PropertyType[PropertyType["StringArray"] = 6] = "StringArray";
        })(Exchange.PropertyType || (Exchange.PropertyType = {}));
        var PropertyType = Exchange.PropertyType;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var PropertyUpdate = (function () {
            function PropertyUpdate(propertyName, propertyType, updateType, value) {
                this.propertyName = propertyName;
                this.propertyType = propertyType;
                this.updateType = updateType;
                this.value = value;
            }
            PropertyUpdate.prototype.toSoap = function () {
                var fieldUri = "<t:FieldURI FieldURI=\"item:" + this.propertyName + "\"/>";
                var updateValue = "";
                switch (this.propertyType) {
                    case Exchange.PropertyType[Exchange.PropertyType.StringArray]:
                        var array = this.value;
                        array.forEach(function (stringItem) {
                            updateValue += stringItem ? "<t:String>" + Mscrm.Utilities.escapeXml(stringItem) + "</t:String>" : "";
                        });
                        break;
                    case Exchange.PropertyType[Exchange.PropertyType.String]:
                    default:
                        updateValue = Mscrm.Utilities.escapeXml(String(this.value));
                        break;
                }
                return ("<t:" + this.updateType + ">\n\t\t\t\t\t" + fieldUri + "\n\t\t\t\t\t<t:Message>\n\t\t\t\t\t\t<t:" + this.propertyName + ">\n\t\t\t\t\t\t\t" + updateValue + "\n\t\t\t\t\t\t</t:" + this.propertyName + ">\n\t\t\t\t\t</t:Message>\n\t\t\t\t</t:" + this.updateType + ">");
            };
            PropertyUpdate.prototype.toJson = function () {
                return "\"" + this.propertyName + "\": " + JSON.stringify(this.value);
            };
            PropertyUpdate.loadFromJson = function (json) {
                var update = JSON.parse(json);
                return new PropertyUpdate(update.PropertyName, update.PropertyType, update.UpdateType, update.Value);
            };
            return PropertyUpdate;
        }());
        Exchange.PropertyUpdate = PropertyUpdate;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var ExtendedPropertyUpdate = (function (_super) {
            __extends(ExtendedPropertyUpdate, _super);
            function ExtendedPropertyUpdate(propertyName, propertyType, updateType, value) {
                _super.call(this, propertyName, propertyType, updateType, value);
                this.propertyName = propertyName;
                this.propertyType = propertyType;
                this.updateType = updateType;
                this.value = value;
            }
            ExtendedPropertyUpdate.prototype.toSoap = function () {
                var extendedFieldUri = "<t:ExtendedFieldURI \n\t\t\t\t\tDistinguishedPropertySetId=\"PublicStrings\" \n\t\t\t\t\tPropertyName=\"" + this.propertyName + "\" \n\t\t\t\t\tPropertyType=\"" + this.propertyType + "\"/>";
                return ("<t:" + this.updateType + ">\n\t\t\t\t\t" + extendedFieldUri + "\n\t\t\t\t\t<t:Message>\n\t\t\t\t\t\t<t:ExtendedProperty>\n\t\t\t\t\t\t\t" + extendedFieldUri + "\n\t\t\t\t\t\t\t<t:Value>" + Mscrm.Utilities.escapeXml(String(this.value)) + "</t:Value>\n\t\t\t\t\t\t</t:ExtendedProperty>\n\t\t\t\t\t</t:Message>\n\t\t\t\t</t:" + this.updateType + ">");
            };
            ExtendedPropertyUpdate.prototype.toJson = function () {
                return JSON.stringify({ PropertyId: this.propertyType + " {00020329-0000-0000-c000-000000000046} Name " + this.propertyName, Value: String(this.value) });
            };
            ExtendedPropertyUpdate.loadFromJson = function (json) {
                var update = JSON.parse(json);
                return new ExtendedPropertyUpdate(update.PropertyName, update.PropertyType, update.UpdateType, update.Value);
            };
            return ExtendedPropertyUpdate;
        }(Exchange.PropertyUpdate));
        Exchange.ExtendedPropertyUpdate = ExtendedPropertyUpdate;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var ExchangeProvider;
    (function (ExchangeProvider) {
        var ExchangeApiProvider = Mscrm.Exchange.ExchangeApiProvider;
        var GetItemVisitor = Mscrm.Exchange.GetItemVisitor;
        var UpdateCrmPropertiesVisitor = Mscrm.Exchange.UpdateCrmPropertiesVisitor;
        var ExtendedProperty = Mscrm.Exchange.ExtendedProperty;
        var ItemPropertyNames = Mscrm.Exchange.ItemPropertyNames;
        var Property = Mscrm.Exchange.Property;
        var PropertyType = Mscrm.Exchange.PropertyType;
        var ExtendedPropertyUpdate = Mscrm.Exchange.ExtendedPropertyUpdate;
        var PropertyUpdate = Mscrm.Exchange.PropertyUpdate;
        var PerformanceStopwatch = Mscrm.Performance.PerformanceStopwatch;
        var exchangeTimeoutDuration = 30000;
        var extendedPropertiesSet = false;
        function retrieveEmailItem(itemId) {
            var deferred = $.Deferred();
            if (!itemId)
                itemId = Office.context.mailbox.item.itemId;
            var extendedProperties = [
                new ExtendedProperty(ItemPropertyNames.CrmLinkState, PropertyType.Double),
                new ExtendedProperty(ItemPropertyNames.CrmRegardingId, PropertyType.String),
                new ExtendedProperty(ItemPropertyNames.CrmRegardingObjectType, PropertyType.String),
                new ExtendedProperty(ItemPropertyNames.Regarding, PropertyType.String),
                new ExtendedProperty(ItemPropertyNames.CrmId, PropertyType.String),
                new ExtendedProperty(ItemPropertyNames.CrmObjectTypeCode, PropertyType.Double),
                new ExtendedProperty(ItemPropertyNames.CrmIsFollowed, PropertyType.Integer),
                new ExtendedProperty(ItemPropertyNames.ShouldBeLinkedBefore, PropertyType.String),
                new ExtendedProperty(ItemPropertyNames.CrmCategoryTracker, PropertyType.Integer)
            ];
            var properties;
            var item = Mscrm.OfficeProvider.getEmailItem();
            if (item.itemType === Mscrm.Exchange.ItemType[Mscrm.Exchange.ItemType.appointment]) {
                properties = [
                    new Property("IsAllDayEvent", PropertyType.Calendar),
                    new Property("CalendarItemType", PropertyType.Calendar),
                    new Property("Location", PropertyType.Calendar),
                    new Property("Recurrence", PropertyType.Calendar),
                    new Property("LegacyFreeBusyStatus", PropertyType.Calendar)
                ];
            }
            else {
                properties = [
                    new Property("ParentFolderId", PropertyType.Item),
                    new Property("ConversationIndex", PropertyType.Message)
                ];
            }
            properties.push(new Property(ItemPropertyNames.Categories, PropertyType.Item));
            var timeoutTriggered = false;
            var sw = new PerformanceStopwatch("MailAppShim.GetItem");
            sw.start();
            var requestTimeout = setTimeout(function () {
                timeoutTriggered = true;
                sw.stop();
                var error = { code: Mscrm.EmailContext.EmailItemRetrieveState.ExchangeCallError, name: "Exchange Call Timeout", message: "The request to retrieve item from Exchange timed out" };
                deferred.reject(error);
            }, exchangeTimeoutDuration);
            setTimeout(function () {
                ExchangeApiProvider.getInstance().accept(new GetItemVisitor(itemId, Mscrm.Exchange.ItemType[item.itemType], properties, extendedProperties))
                    .then(function (result) {
                    if (!timeoutTriggered) {
                        sw.stop();
                        clearTimeout(requestTimeout);
                        if (result.error) {
                            result.error.message = "Retrieve email item request failed: " + result.error.code + "\" - " + result.error.message;
                            deferred.reject(result.error);
                        }
                        else {
                            var linkState = parseInt(result.value[ItemPropertyNames.CrmLinkState]);
                            if (isNaN(linkState)) {
                                checkForCrmCustomProperties(extendedProperties).done(function (response) {
                                    if (response) {
                                        deferred.resolve(response);
                                    }
                                    else {
                                        deferred.resolve(result);
                                    }
                                });
                            }
                            else {
                                extendedPropertiesSet = true;
                                deferred.resolve(result);
                            }
                        }
                    }
                }, function (error) {
                    clearTimeout(requestTimeout);
                    error.message = "Retrieve email item request failed: " + error.code + "\" - " + error.message;
                    deferred.reject(error);
                });
            }, 0);
            return deferred.promise();
        }
        ExchangeProvider.retrieveEmailItem = retrieveEmailItem;
        function checkForCrmCustomProperties(extendedProperties) {
            var deferred = $.Deferred();
            var customPropertiesRetrieved = false;
            if (ExchangeApiProvider.getInstance().sssCustomPropertyFCB && Mscrm.Boot.activeBootManager.mode === Mscrm.MailAppMode.Compose || Mscrm.OfficeProvider.isEmailInSentFolder()) {
                var response = { value: {} };
                Mscrm.OfficeProvider.retrieveAddinSpecificCustomProperties().done(function (result) {
                    extendedProperties.forEach(function (property) {
                        if (result && result.get(property.propertyName)) {
                            response.value[property.propertyName] = result.get(property.propertyName);
                            customPropertiesRetrieved = true;
                        }
                    });
                    if (customPropertiesRetrieved) {
                        var asyncResponse = { status: "succeeded", value: response.value, error: null };
                        deferred.resolve(asyncResponse);
                    }
                    else {
                        deferred.resolve(null);
                    }
                });
            }
            else {
                deferred.resolve(null);
            }
            return deferred.promise();
        }
        ExchangeProvider.checkForCrmCustomProperties = checkForCrmCustomProperties;
        function retrieveItemCategories() {
            var deferred = $.Deferred();
            Mscrm.EmailContext.EmailContextRetriever.getInstance().emailContextRetrievedDeferred.then(function (emailContext) {
                var itemId = emailContext.emailItem.Id ? emailContext.emailItem.Id : Mscrm.OfficeProvider.getEmailItem().itemId;
                var item = Mscrm.OfficeProvider.getEmailItem();
                var properties = [(new Property(ItemPropertyNames.Categories, PropertyType.Item))];
                var timeoutTriggered = false;
                var sw = new PerformanceStopwatch("MailAppShim.GetItem");
                sw.start();
                var requestTimeout = setTimeout(function () {
                    timeoutTriggered = true;
                    sw.stop();
                    var error = { code: Mscrm.EmailContext.EmailItemRetrieveState.ExchangeCallError, name: "Exchange Call Timeout", message: "The request to retrieve item from Exchange timed out" };
                    deferred.reject(error);
                }, exchangeTimeoutDuration);
                setTimeout(function () {
                    ExchangeApiProvider.getInstance().accept(new GetItemVisitor(itemId, Mscrm.Exchange.ItemType[item.itemType], properties, null))
                        .then(function (result) {
                        if (!timeoutTriggered) {
                            sw.stop();
                            clearTimeout(requestTimeout);
                            if (result.error || !result.value) {
                                result.error.message = "Retrieve email item request failed: " + result.error.code + "\" - " + result.error.message;
                                deferred.reject(result.error);
                            }
                            else {
                                deferred.resolve(result.value[ItemPropertyNames.Categories]);
                            }
                        }
                    }, function (error) {
                        clearTimeout(requestTimeout);
                        error.message = "Retrieve email item request failed: " + error.code + "\" - " + error.message;
                        deferred.reject(error);
                    });
                }, 0);
            }, function (error) {
                error.message = "Failed to retrieve email context: " + error.code + " - " + error.message;
                deferred.reject(error);
            });
            return deferred.promise();
        }
        ExchangeProvider.retrieveItemCategories = retrieveItemCategories;
        function setCrmEmailProperties(extendedPropertyUpdates, propertyUpdates, conflictResolutionType, itemType) {
            var deferred = $.Deferred();
            Mscrm.EmailContext.EmailContextRetriever.getInstance().emailContextRetrievedDeferred.then(function (emailContext) {
                var itemId = emailContext.emailItem.Id ? emailContext.emailItem.Id : Mscrm.OfficeProvider.getEmailItem().itemId;
                var crmUpdates = [];
                var exchangeUpdates = [];
                extendedPropertyUpdates.forEach(function (update) {
                    crmUpdates.push(ExtendedPropertyUpdate.loadFromJson(update));
                });
                propertyUpdates.forEach(function (update) {
                    exchangeUpdates.push(PropertyUpdate.loadFromJson(update));
                });
                var userAgent = new Mscrm.UserAgent.UserAgent();
                if (ExchangeApiProvider.getInstance().sssCustomPropertyFCB && Mscrm.Boot.activeBootManager.mode === Mscrm.MailAppMode.Compose && userAgent.getIsDesktopOutlook() && !extendedPropertiesSet) {
                    var newProps = {};
                    crmUpdates.forEach(function (update) {
                        newProps[update.propertyName] = update.value;
                    });
                    Mscrm.OfficeProvider.updateAddinSpecificCustomProperties(newProps).then(function (result) {
                        var itemResult = { value: { Id: itemId }, error: null, status: "succeeded" };
                        deferred.resolve(itemResult);
                    }, function (error) {
                        error.message = "Set email custom properties request failed: " + error.code + "\" - " + error.message;
                        deferred.reject(error);
                    });
                }
                else {
                    var maxErrorRetries_2 = 3;
                    var retryCount_2 = 0;
                    var timeoutTriggered = false;
                    var requestTimeout = setTimeout(function () {
                        timeoutTriggered = true;
                        deferred.reject({ code: Mscrm.EmailContext.EmailItemRetrieveState.ExchangeCallError, message: "Set email item properties request timeout" });
                    }, exchangeTimeoutDuration);
                    var setEmailPropertiesRequest_1 = function () {
                        ExchangeApiProvider.getInstance().accept(new UpdateCrmPropertiesVisitor(itemId, itemType, crmUpdates, exchangeUpdates, conflictResolutionType)).then(function (result) {
                            if (!timeoutTriggered) {
                                clearTimeout(requestTimeout);
                                deferred.resolve(result);
                            }
                        }, function (error) {
                            retryCount_2++;
                            if (retryCount_2 < maxErrorRetries_2) {
                                setEmailPropertiesRequest_1();
                            }
                            else {
                                clearTimeout(requestTimeout);
                                error.message = "Set CRM email properties request failed: " + error.code + " - " + error.message;
                                deferred.reject(error);
                            }
                        });
                    };
                    setEmailPropertiesRequest_1();
                }
            }, function (error) {
                error.message = "Failed to retrieve email context: " + error.code + " - " + error.message;
                deferred.reject(error);
            });
            return deferred.promise();
        }
        ExchangeProvider.setCrmEmailProperties = setCrmEmailProperties;
    })(ExchangeProvider = Mscrm.ExchangeProvider || (Mscrm.ExchangeProvider = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Parsers;
    (function (Parsers) {
        var XmlParser = (function () {
            function XmlParser(xml) {
                this.xml = xml;
            }
            XmlParser.getChildFromNode = function (node, nodeName) {
                return node.getElementsByTagNameNS('*', nodeName)[0];
            };
            XmlParser.fromString = function (xmlString) {
                return new XmlParser(XmlParser.createXmlDocument(xmlString));
            };
            XmlParser.createXmlDocument = function (xmlString) {
                return (new DOMParser()).parseFromString(xmlString, "application/xml");
            };
            XmlParser.prototype.getNode = function (nodeName) {
                return this.xml.getElementsByTagNameNS('*', nodeName)[0];
            };
            XmlParser.getName = function (node) {
                return XmlParser.sliceNameSpace(node.nodeName);
            };
            XmlParser.sliceNameSpace = function (name) {
                var parts = name.split(":");
                if (parts.length < 2) {
                    return name;
                }
                return parts[1];
            };
            return XmlParser;
        }());
        Parsers.XmlParser = XmlParser;
    })(Parsers = Mscrm.Parsers || (Mscrm.Parsers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var EwsResponseParser = (function (_super) {
            __extends(EwsResponseParser, _super);
            function EwsResponseParser(response) {
                _super.call(this, response);
            }
            EwsResponseParser.fromString = function (data) {
                return new EwsResponseParser(Mscrm.Parsers.XmlParser.createXmlDocument(data));
            };
            EwsResponseParser.prototype.getExtendedPropertyValue = function (propertyName) {
                var nodes = this.xml.getElementsByTagNameNS('*', 'ExtendedFieldURI');
                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes.item(i);
                    if (node.attributes.getNamedItem("PropertyName").value === propertyName) {
                        return node.nextSibling.textContent;
                    }
                }
            };
            return EwsResponseParser;
        }(Mscrm.Parsers.XmlParser));
        Exchange.EwsResponseParser = EwsResponseParser;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Exchange;
    (function (Exchange) {
        var ExchangeRequisite = (function () {
            function ExchangeRequisite(restApiVersion, ewsApiVersion) {
                this.restApiVersion = restApiVersion;
                this.ewsApiVersion = ewsApiVersion;
            }
            ExchangeRequisite.prototype.getRestApiVersion = function () {
                return this.restApiVersion;
            };
            ExchangeRequisite.prototype.getEwsApiVersion = function () {
                return this.ewsApiVersion;
            };
            return ExchangeRequisite;
        }());
        Exchange.ExchangeRequisite = ExchangeRequisite;
    })(Exchange = Mscrm.Exchange || (Mscrm.Exchange = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Resources;
    (function (Resources) {
        var ResourceManager = (function () {
            function ResourceManager() {
            }
            ResourceManager.getString = function (resourceId) {
                return window.RESOURCES[resourceId] || resourceId;
            };
            return ResourceManager;
        }());
        Resources.ResourceManager = ResourceManager;
    })(Resources = Mscrm.Resources || (Mscrm.Resources = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Settings;
    (function (Settings) {
        var EnvironmentConfig = (function () {
            function EnvironmentConfig(aadClientId, authAuthority, loginRedirectUri) {
                this.aadClientId = aadClientId;
                this.authAuthority = authAuthority;
                this.loginRedirectUri = loginRedirectUri;
            }
            return EnvironmentConfig;
        }());
        Settings.EnvironmentConfig = EnvironmentConfig;
    })(Settings = Mscrm.Settings || (Mscrm.Settings = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Bridge;
    (function (Bridge) {
        var WebScriptBridge = (function () {
            function WebScriptBridge(orgConfig, iframeId, authManager) {
                this.orgConfig = orgConfig;
                this.iframeId = iframeId;
                this.authManager = authManager;
                this.firstClientRequestMade = false;
                this._keyDeferred = Mscrm.Utilities.generateKey();
                this._dispatchers = Mscrm.Dispatchers.DispatcherFactory.getDispatchers(this);
                this._inputHandler = new Bridge.WebScriptInputHandler(this);
                this._outputHandler = new Bridge.WebScriptOutputHandler(this);
                this._collectDispatcherStates();
            }
            WebScriptBridge.prototype.unload = function () {
                for (var name in this._dispatchers) {
                    var dispatcher = this._dispatchers[name];
                    if (dispatcher) {
                        dispatcher.unload();
                    }
                }
                this._inputHandler.unload();
            };
            WebScriptBridge.prototype.callMethodWithKey = function (callKey, namespace, method, version, args, callbacks) {
                var _this = this;
                this.firstClientRequestMade = true;
                if (!callKey || !namespace || !method || !version || !args || !callbacks) {
                    Mscrm.Logging.Logger.logError("Invalid arguments sent from MoCA App", "Bridge");
                    return;
                }
                this._keyDeferred.then(function (key) {
                    if (callKey !== key) {
                        Mscrm.Logging.Logger.logError("Attempitng to call native method with invalid key. Possible XSS?", "Bridge");
                        return;
                    }
                    var dispatcher = _this._dispatchers[namespace];
                    if (!dispatcher) {
                        Mscrm.Logging.Logger.logError("Unknown dispatcher namespace: " + namespace, "Bridge");
                        return;
                    }
                    dispatcher.callMethodWithName(method, {
                        version: version,
                        args: args,
                        callbacks: callbacks
                    });
                }, function (error) {
                    Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(error, Mscrm.Boot.ClientError.GenericErrorCode), "WebScriptBridge callMethodWithKey: " + error);
                });
            };
            WebScriptBridge.prototype.performCallbackWithId = function (callbackId, args, unregister) {
                this._outputHandler.deviceCallbackWithId(callbackId, args, unregister);
            };
            WebScriptBridge.prototype.unregisterCallbackWithId = function (callbackId) {
                this._outputHandler.deviceUnregisterCallbackWithId(callbackId);
            };
            WebScriptBridge.prototype.changeStateForDispatcher = function (namespace, name, value) {
                this._outputHandler.deviceEventWithNamespace(namespace, name, value);
            };
            WebScriptBridge.prototype._collectDispatcherStates = function () {
                var _this = this;
                var states = {};
                for (var name in this._dispatchers) {
                    var dispatcher = this._dispatchers[name];
                    if (dispatcher) {
                        dispatcher.registerMethods();
                        states[dispatcher.namespace] = dispatcher.getInitialState();
                    }
                }
                this._keyDeferred.then(function (key) {
                    _this._outputHandler.deviceReadyWithKey(key, states);
                }, function (error) {
                    Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(error, Mscrm.Boot.ClientError.GenericErrorCode), "WebScriptBridge collectDispatcherStates: " + error);
                });
            };
            return WebScriptBridge;
        }());
        Bridge.WebScriptBridge = WebScriptBridge;
    })(Bridge = Mscrm.Bridge || (Mscrm.Bridge = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Bridge;
    (function (Bridge) {
        var WebScriptInputHandler = (function () {
            function WebScriptInputHandler(_bridge) {
                this._bridge = _bridge;
                this._boundMessageHandler = this._messageHandler.bind(this);
                window.addEventListener("message", this._boundMessageHandler, false);
            }
            WebScriptInputHandler.prototype._messageHandler = function (e) {
                var toMatch = window.location.protocol + '//' + window.location.host;
                if (e.origin !== toMatch && e.origin + "/" !== toMatch) {
                    return;
                }
                var params = this._getQueryParameters(e.data);
                var key = decodeURIComponent(params["k"]);
                var namespace = decodeURIComponent(params["n"]);
                var method = decodeURIComponent(params["m"]);
                var args = JSON.parse(decodeURIComponent(params["a"]));
                var version = decodeURIComponent(params["v"]);
                var callbacks = JSON.parse(decodeURIComponent(params["c"]));
                if (!key || !namespace || !method || !args || !version || !callbacks) {
                    Mscrm.Logging.Logger.logError("Invalid arguments sent from MoCA App", "Bridge");
                    return;
                }
                this._bridge.callMethodWithKey(key, namespace, method, version, args, callbacks);
            };
            WebScriptInputHandler.prototype._getQueryParameters = function (url) {
                var link = document.createElement("a");
                link.href = url;
                var params = {};
                var queryString = link.search.replace(/^\?/, "");
                var pairs = queryString.split("&");
                for (var i = 0, len = pairs.length; i < len; i++) {
                    var param = pairs[i];
                    var sepIndex = param.indexOf("=", 0);
                    var name = param.substring(0, sepIndex);
                    var value = param.substring(sepIndex + 1);
                    params[name] = value;
                }
                return params;
            };
            WebScriptInputHandler.prototype.unload = function () {
                window.removeEventListener("message", this._boundMessageHandler);
                this._boundMessageHandler = null;
            };
            return WebScriptInputHandler;
        }());
        Bridge.WebScriptInputHandler = WebScriptInputHandler;
    })(Bridge = Mscrm.Bridge || (Mscrm.Bridge = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Bridge;
    (function (Bridge) {
        var WebScriptOutputHandler = (function () {
            function WebScriptOutputHandler(_bridge) {
                this._bridge = _bridge;
            }
            WebScriptOutputHandler.prototype.deviceReadyWithKey = function (key, states) {
                this.callNativeBridgeFunction("deviceReady", {
                    nativeArguments: [key, JSON.stringify(states)]
                });
            };
            WebScriptOutputHandler.prototype.deviceCallbackWithId = function (callbackId, args, unregister) {
                this.callNativeBridgeFunction("deviceCallback", {
                    nativeArguments: [callbackId, JSON.stringify(args), unregister]
                });
            };
            WebScriptOutputHandler.prototype.deviceUnregisterCallbackWithId = function (callbackId) {
                this.callNativeBridgeFunction("deviceUnregisterCallback", {
                    nativeArguments: [callbackId]
                });
            };
            WebScriptOutputHandler.prototype.deviceEventWithNamespace = function (namespace, name, value) {
                this.callNativeBridgeFunction("deviceEvent", {
                    nativeArguments: [namespace, name, JSON.stringify([value])]
                });
            };
            WebScriptOutputHandler.prototype.callNativeBridgeFunction = function (name, args) {
                var msg = {
                    target: "PALNativeBridge",
                    functionName: name,
                    functionArguments: args && args.nativeArguments
                };
                var msgJson = JSON.stringify(msg);
                var iFrame = document.getElementById(this._bridge.iframeId);
                if (iFrame && iFrame.contentWindow) {
                    iFrame.contentWindow.postMessage(msgJson, window.location.protocol + '//' + window.location.host);
                }
                else {
                    Mscrm.Logging.Logger.logWarning("Attempting to communicate with non-existant iframe", "Bridge");
                }
            };
            return WebScriptOutputHandler;
        }());
        Bridge.WebScriptOutputHandler = WebScriptOutputHandler;
    })(Bridge = Mscrm.Bridge || (Mscrm.Bridge = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Boot;
    (function (Boot) {
        var ItemType = Mscrm.Exchange.ItemType;
        var EmailContextRetriever = Mscrm.EmailContext.EmailContextRetriever;
        var LocalStorage = window.localStorage;
        var ClientLoader = (function () {
            function ClientLoader(iframeId, parentElement) {
                this.iframeId = iframeId;
                this.parentElement = parentElement;
                this.availabilityCheckTimeout = 60000;
                this.initialDataComponentLifetime = 1;
                this.initialDataComponentKeys = {
                    "entityMetadata": "MailAppInitialData_EntityMetadata",
                    "applicationMetadata": "MailAppInitialData_ApplicationMetadata",
                };
                this.mailAppModeRegexp = 'mailAppMode=[a-zA-Z]+';
                this.orgUrl = window.location.protocol + '//' + window.location.host;
            }
            ClientLoader.prototype.loadMailClient = function (authManager) {
                var _this = this;
                this.unloadClient();
                var iframe = $("<iframe class='clientFrame'></iframe>");
                iframe.attr('id', this.iframeId);
                iframe.on("load", function () {
                    Mscrm.Logging.Logger.logInfo("Client iframe loaded", "boot");
                    Mscrm.Boot.UIManager.showProgressMsg(Mscrm.Resources.ResourceManager.getString("MoCA_OWA_App_DownloadingMetadata"));
                    if (_this.bridge) {
                        Mscrm.Logging.Logger.logInfo("Unloading existing bridge.", "boot");
                        _this.bridge.unload();
                    }
                    _this.bridge = new Mscrm.Bridge.WebScriptBridge(null, _this.iframeId, authManager);
                });
                var displayModeParam = Mscrm.Boot.activeBootManager.displayMode;
                var orgName = Mscrm.Boot.activeBootManager.orgName;
                var orgUrl = window.location.protocol + '//' + window.location.host;
                var collectorService = Mscrm.Boot.activeBootManager.collectorService;
                var mocaUrl = orgUrl + '/nga/mail.htm' +
                    '?org=' + orgName +
                    '&mailAppMode=' + displayModeParam +
                    '&server=' + orgUrl +
                    '&itemType=' + Mscrm.OfficeProvider.getEmailItem().itemType +
                    (Mscrm.Boot.activeBootManager.showPerformance ? '&showperf=true' : '') +
                    (collectorService ? '&collectorurl=' + collectorService : '') +
                    authManager.getQueryParameters();
                var dataUrl = orgUrl + '/nga/mailAppData.aspx';
                this.iframeReadyTimeout = setTimeout(function () {
                    if (ClientLoader.clientReadyPromise.state() === "pending") {
                        ClientLoader.clientReadyPromise.reject(new Error("Application isn't available."));
                    }
                }, this.availabilityCheckTimeout);
                ClientLoader.clientReadyPromise.then(function () {
                    clearTimeout(_this.iframeReadyTimeout);
                    $("#loadingContainer").hide();
                }, function (error) {
                    var userContextErrors = Mscrm.InlinedAppData && Mscrm.InlinedAppData.userContext ?
                        Mscrm.InlinedAppData.userContext.Status.Errors : null;
                    if (userContextErrors && userContextErrors.length > 0) {
                        userContextErrors.forEach(function (error) {
                            if (error.ErrorCode == Boot.ClientError.NoMinimumRequiredPrivilegesForTabletApp) {
                                Boot.ErrorManager.handleError(new Boot.ClientError(error.Message, error.ErrorCode), "Unable to start the application. The user does not have sufficient permissions on the server to load the application.");
                            }
                        });
                    }
                    if (!Boot.ErrorManager.getIsErrorShowing()) {
                        Boot.ErrorManager.handleError(new Boot.ClientError(error.message, Boot.ClientError.ServerConnectionErrorCode), "[MailApp] Client loader timed out");
                    }
                });
                this.loadFrame(iframe, mocaUrl);
            };
            ClientLoader.prototype.loadModuleClient = function (authManager) {
                var _this = this;
                this.unloadClient();
                var iframe = $("<iframe class='clientFrame'></iframe>");
                iframe.attr('id', this.iframeId);
                iframe.on("load", function () {
                    Mscrm.Logging.Logger.logInfo("Client iframe loaded", "boot");
                    Mscrm.Boot.UIManager.showProgressMsg(Mscrm.Resources.ResourceManager.getString("MoCA_OWA_App_DownloadingMetadata"));
                    if (_this.bridge) {
                        Mscrm.Logging.Logger.logInfo("Unloading existing bridge.", "boot");
                        _this.bridge.unload();
                    }
                    _this.bridge = new Mscrm.Bridge.WebScriptBridge(null, _this.iframeId, authManager);
                });
                var displayModeParam = Mscrm.Boot.activeBootManager.displayMode;
                var orgName = Mscrm.Boot.activeBootManager.orgName;
                var orgUrl = window.location.protocol + '//' + window.location.host;
                var moduleUrl = orgUrl + '/crmmailapp/module/index.html' +
                    '?org=' + orgName +
                    '&mailAppMode=' + displayModeParam +
                    '&server=' + orgUrl +
                    authManager.getQueryParameters();
                this.iframeReadyTimeout = setTimeout(function () {
                    var message = "Client loader timed out";
                    if (!Boot.ErrorManager.getIsErrorShowing()) {
                        Boot.ErrorManager.handleError(new Boot.ClientError(message, Boot.ClientError.ServerConnectionErrorCode), "[Contact Module] " + message);
                    }
                    clearTimeout(_this.iframeReadyTimeout);
                }, this.availabilityCheckTimeout);
                this.loadFrame(iframe, moduleUrl);
            };
            ClientLoader.prototype.loadClient = function (authManager) {
                switch (Mscrm.Boot.activeBootManager.mode) {
                    case Mscrm.MailAppMode.Read:
                    case Mscrm.MailAppMode.Compose:
                        this.loadMailClient(authManager);
                        break;
                    case Mscrm.MailAppMode.Module:
                        this.loadModuleClient(authManager);
                        break;
                    default:
                        this.loadMailClient(authManager);
                        break;
                }
            };
            ClientLoader.prototype.postAuthLoad = function (token) {
                var _this = this;
                var itemType = Mscrm.Boot.activeBootManager.mode === Mscrm.MailAppMode.Module ? "appointment" : Mscrm.OfficeProvider.getEmailItem().itemType;
                (new Boot.UserValidation(token, this.orgUrl, itemType)).validate();
                switch (Mscrm.Boot.activeBootManager.mode) {
                    case Mscrm.MailAppMode.Module:
                        var authInt = setInterval(function () {
                            if (ClientLoader.clientReadyPromise.state() !== "pending") {
                                $("#loadingContainer").hide();
                                clearTimeout(_this.iframeReadyTimeout);
                                clearInterval(authInt);
                            }
                        }, 200);
                        break;
                    default:
                        this.loadInitialData(token);
                        break;
                }
            };
            ClientLoader.prototype.loadInitialData = function (token) {
                var _this = this;
                EmailContextRetriever.getInstance().retrieveEmailInfo();
                EmailContextRetriever.getInstance().retrieveAddinSpecificCustomProperties();
                var isComposeMode = Mscrm.Boot.activeBootManager.displayMode.indexOf("Compose") !== -1;
                Mscrm.OfficeProvider.getEmailRecipients(isComposeMode).then(function (emailRecipients) {
                    var isEmailRegex = /^[\w-\._\+%]+@[\w-\.]+$/;
                    var emails = [];
                    var emailDetailsArray = [emailRecipients.from];
                    var item = Mscrm.OfficeProvider.getEmailItem();
                    if (item.itemType == ItemType[ItemType.message]) {
                        emailDetailsArray = emailDetailsArray.concat(emailRecipients.to, emailRecipients.cc, emailRecipients.bcc);
                    }
                    else if (item.itemType == ItemType[ItemType.appointment]) {
                        emailDetailsArray = emailDetailsArray.concat(emailRecipients.requiredAttendees, emailRecipients.optionalAttendees);
                    }
                    emailDetailsArray.forEach(function (addressItem) {
                        if (addressItem) {
                            var email = addressItem.emailAddress;
                            if (!email && isEmailRegex.test(addressItem.displayName)) {
                                email = addressItem.displayName;
                            }
                            if (emails.indexOf(email) == -1) {
                                emails.push(email);
                            }
                        }
                    });
                    if (isComposeMode || (!isComposeMode && emails.length > 1)) {
                        var index = emails.indexOf(Mscrm.OfficeProvider.getUserProfile().emailAddress);
                        if (index != -1) {
                            emails.splice(index, 1);
                        }
                    }
                    var initialDataLoadStartTime = Date.now();
                    _this.initialDataLoader = new Boot.InitialDataLoader(emails, token, _this.orgUrl, Mscrm.OfficeProvider.getEmailItem().itemType, function () {
                        ClientLoader.userContextPromise.resolve(true);
                    }, function () {
                        if (Mscrm) {
                            ClientLoader.metadataPromise.resolve(true);
                        }
                        Mscrm.Performance.PerformanceStopwatch.addRetroactiveStopWatch("MailAppShim.MetadataGeneration", initialDataLoadStartTime, Date.now());
                    });
                }, function (error) {
                    Boot.ErrorManager.handleError(new Boot.ClientError('Error_Message_Generic_Mobile_Client', error.code), 'Retrieve email recipients failed: ' + error.message);
                });
            };
            ClientLoader.prototype.loadFrame = function (iframe, url) {
                iframe.attr('src', url);
                iframe.appendTo(this.parentElement);
            };
            ClientLoader.prototype.unloadClient = function () {
                $("#" + this.iframeId).unbind().remove();
                if (this.bridge) {
                    this.bridge.unload();
                    this.bridge = undefined;
                }
            };
            ClientLoader.clientReadyPromise = $.Deferred();
            ClientLoader.metadataPromise = $.Deferred();
            ClientLoader.userContextPromise = $.Deferred();
            return ClientLoader;
        }());
        Boot.ClientLoader = ClientLoader;
        var CachedInitialData = (function () {
            function CachedInitialData(data) {
                this.data = data;
                this.cachedDate = new Date();
            }
            CachedInitialData.prototype.Serialize = function () {
                return JSON.stringify(this);
            };
            CachedInitialData.Deserialize = function (data) {
                var cached = JSON.parse(data);
                cached.cachedDate = new Date(cached.cachedDate.toString());
                return cached;
            };
            return CachedInitialData;
        }());
    })(Boot = Mscrm.Boot || (Mscrm.Boot = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var AccountDispatcher = (function (_super) {
            __extends(AccountDispatcher, _super);
            function AccountDispatcher(bridge) {
                _super.call(this, bridge);
                this.authFailureResponse = "AuthError";
                this.namespace = "Account";
            }
            AccountDispatcher.prototype.requestSecurityToken = function (methodCall) {
                var _this = this;
                var refreshToken = methodCall.args["refreshToken"];
                this.bridge.authManager.authenticate(null, refreshToken).then(function (accessToken) {
                    var expiryDate = _this.bridge.authManager.retrieveExpiry();
                    var response;
                    if (!expiryDate) {
                        response = _this.authFailureResponse;
                    }
                    else {
                        response = "<RequestOAuthSecurityTokenResponse><AccessToken>" + accessToken + "</AccessToken><EncodedAccessToken>" + accessToken + "</EncodedAccessToken><ExpiresOn>" + expiryDate.toISOString() + "</ExpiresOn></RequestOAuthSecurityTokenResponse>";
                    }
                    var callbackArgs = {
                        requestSecurityTokenResponse: response
                    };
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onRequestSecurityTokenResponse"], callbackArgs, false);
                }, function (err) {
                    var callbackArgs = {
                        requestSecurityTokenResponse: _this.authFailureResponse
                    };
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onRequestSecurityTokenResponse"], callbackArgs, false);
                });
            };
            AccountDispatcher.prototype.requestCallbackTokenAsync = function (methodCall) {
                var _this = this;
                Mscrm.OfficeProvider.getCallbackTokenAsync().then(function (token) {
                    var callbackArgs = {
                        onRequestCallbackTokenAsyncResponse: token
                    };
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onRequestCallbackTokenAsyncResponse"], callbackArgs, false);
                }, function (err) {
                    var callbackArgs = {
                        onRequestCallbackTokenAsyncResponse: err
                    };
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onRequestCallbackTokenAsyncResponse"], callbackArgs, false);
                });
            };
            AccountDispatcher.prototype.signOut = function (methodCall) {
            };
            AccountDispatcher.prototype.setSessionId = function (methodCall) {
            };
            AccountDispatcher.prototype.registerMethods = function () {
                this.registerMethodWithName("requestSecurityToken", this.requestSecurityToken, { "refreshToken": false }, { "onRequestSecurityTokenResponse": "" });
                this.registerMethodWithName("requestCallbackTokenAsync", this.requestCallbackTokenAsync, {}, { "onRequestCallbackTokenAsyncResponse": "" });
                this.registerMethodWithName("signOut", this.signOut, {}, {});
                this.registerMethodWithName("setSessionID", this.setSessionId, { "sessionID": "", "telemetryEndPointUrl": "" }, {});
            };
            return AccountDispatcher;
        }(Dispatchers.DispatcherBase));
        Dispatchers.AccountDispatcher = AccountDispatcher;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var ApplicationDispatcher = (function (_super) {
            __extends(ApplicationDispatcher, _super);
            function ApplicationDispatcher(bridge) {
                _super.call(this, bridge);
                this.resourceIdByDatasourceSyncStageCode = {
                    1: "MoCA_OWA_Client_Loading_Message",
                    2: "MoCA_OWA_App_DownloadingMetadata",
                    3: "MoCA_OWA_App_DownloadingMetadata",
                    4: "MoCA_OWA_Client_Download_Customizations_Message",
                    5: "MoCA_OWA_Client_Processing_Customizations_Message"
                };
                this.namespace = "Application";
            }
            ApplicationDispatcher.prototype.getInitialState = function () {
                var metrics = Mscrm.Performance.PerformanceMetricStorage.getMetrics();
                Mscrm.Performance.PerformanceMetricStorage.collectionEnabled = false;
                Mscrm.Performance.PerformanceMetricStorage.clear();
                var fcbs = {};
                fcbs['MobileClientTelemetry'] = true;
                return {
                    "DiagnosticsEnabled": false,
                    "WindowLocation": false,
                    "LastPALVersion": "Version1",
                    "PushToPull": false,
                    "Pullback": false,
                    "MessageInterface": true,
                    "Version1": true,
                    "OSVersion": "TBD",
                    "HasReconfigureSupport": true,
                    "ApplicationName": window.location.host,
                    "ShimPerformanceMetrics": metrics,
                    "InstallationId": Mscrm.Telemetry.TelemetryReporter.getInstance().getInstallId(),
                    "ShimStartTime": Mscrm.Telemetry.TelemetryReporter.getInstance().getInitTime(),
                    "Revision": 1,
                    "Win8UpdateRevision": 1,
                    "ProxyMetadataSyncEventsToShim": true,
                    "NativeFCBContext": fcbs
                };
            };
            ApplicationDispatcher.prototype.clientReady = function (methodCall) {
                Mscrm.Logging.Logger.logInfo("ClientReady event fired.", "ApplicationDispatcher");
            };
            ApplicationDispatcher.prototype.clientInitialized = function (methodCall) {
                Mscrm.Logging.Logger.logInfo("ClientInitialized event fired.", "ApplicationDispatcher");
                Mscrm.Boot.ClientLoader.clientReadyPromise.resolve("ClientReady event fired.");
            };
            ApplicationDispatcher.prototype.clientBootError = function (methodCall) {
                var errorDetails = methodCall.args['errorDetails'];
                var clientError = new Mscrm.Boot.ClientError(errorDetails.message, errorDetails.errorcode);
                Mscrm.Boot.ClientLoader.clientReadyPromise.resolve("Timeout clearing");
                Mscrm.Boot.ErrorManager.handleError(clientError, 'Encountered boot error: ' + errorDetails.message);
            };
            ApplicationDispatcher.prototype.getStringValueBundle = function (methodCall) {
                var valueNames = methodCall.args["valueNames"];
                if (valueNames) {
                    var values = {};
                    for (var i = 0, len = valueNames.length; i < len; i++) {
                        values[valueNames[i]] = Mscrm.Resources.ResourceManager.getString(valueNames[i]);
                    }
                    values["languageCode"] = "en-US";
                    this.bridge.performCallbackWithId(methodCall.callbacks["onStringsResult"], { values: values }, false);
                }
            };
            ApplicationDispatcher.prototype.getMetadataBundle = function (methodCall) {
                var _this = this;
                Mscrm.Boot.ClientLoader.metadataPromise.done(function () {
                    return _this.bridge.performCallbackWithId(methodCall.callbacks["onMetadataResult"], { value: Mscrm.InlinedAppData }, false);
                });
            };
            ApplicationDispatcher.prototype.setClientSettingsPackage = function (methodCall) {
                if (methodCall.args["valueName"] === "clientsettings") {
                    Mscrm.Settings.Browser.saveSetting("clientsettings", JSON.stringify(methodCall.args["value"]));
                }
            };
            ApplicationDispatcher.prototype.syncProgressState = function (methodCall) {
                Mscrm.Logging.Logger.logInfo("SyncProgressState event fired.", "ApplicationDispatcher");
                var message;
                var stage = methodCall.args["syncStage"];
                var resourceId = this.resourceIdByDatasourceSyncStageCode[stage];
                if (resourceId) {
                    message = Mscrm.Resources.ResourceManager.getString(resourceId);
                    Mscrm.Boot.UIManager.showProgressMsg(message);
                }
            };
            ApplicationDispatcher.prototype.showAppError = function (methodCall) {
                Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(methodCall.args["message"], methodCall.args["code"]), methodCall.args["message"]);
            };
            ApplicationDispatcher.prototype.registerMethods = function () {
                if (Mscrm.Boot.activeBootManager.mode !== Mscrm.MailAppMode.Module) {
                    this.registerMethodWithName("getMetadataBundle", this.getMetadataBundle, {}, { "onMetadataResult": "" });
                    this.registerMethodWithName("setClientSettingsPackage", this.setClientSettingsPackage, { "valueName": "", "value": {} }, {});
                    this.registerMethodWithName("clientReady", this.clientReady, { "clientState": {} }, {});
                    this.registerMethodWithName("clientBootError", this.clientBootError, { "deviceErrorAction": 0, "errorDetails": {} }, {});
                }
                this.registerMethodWithName("clientInitialized", this.clientInitialized, {}, {});
                this.registerMethodWithName("getStringValueBundle", this.getStringValueBundle, { "valueNames": {} }, { "onStringsResult": "" });
                this.registerMethodWithName("syncProgressState", this.syncProgressState, { "syncStage": 0 }, {});
                this.registerMethodWithName("showAppError", this.showAppError, { "code": 0, "message": "" }, {});
            };
            return ApplicationDispatcher;
        }(Dispatchers.DispatcherBase));
        Dispatchers.ApplicationDispatcher = ApplicationDispatcher;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var DeviceDispatcher = (function (_super) {
            __extends(DeviceDispatcher, _super);
            function DeviceDispatcher(bridge) {
                _super.call(this, bridge);
                this.namespace = "Device";
            }
            DeviceDispatcher.prototype.getInitialState = function () {
                return {
                    "FormFactor": "mailapp"
                };
            };
            return DeviceDispatcher;
        }(Dispatchers.DispatcherBase));
        Dispatchers.DeviceDispatcher = DeviceDispatcher;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var DispatcherFactory = (function () {
            function DispatcherFactory() {
            }
            DispatcherFactory.getDispatchers = function (bridge) {
                var dispatchers = {};
                var deviceDispatcher = new Dispatchers.DeviceDispatcher(bridge);
                dispatchers[deviceDispatcher.namespace] = deviceDispatcher;
                var appDispatcher = new Dispatchers.ApplicationDispatcher(bridge);
                dispatchers[appDispatcher.namespace] = appDispatcher;
                var accountDispatcher = new Dispatchers.AccountDispatcher(bridge);
                dispatchers[accountDispatcher.namespace] = accountDispatcher;
                var documentDispatcher = new Dispatchers.DocumentDispatcher(bridge);
                dispatchers[documentDispatcher.namespace] = documentDispatcher;
                var loggingDispatcher = new Dispatchers.LoggingDispatcher(bridge);
                dispatchers[loggingDispatcher.namespace] = loggingDispatcher;
                if (Mscrm.OfficeProvider.isOfficeDefined()) {
                    var officeMailDispatcher = new Dispatchers.OfficeMailDispatcher(bridge);
                    dispatchers[officeMailDispatcher.namespace] = officeMailDispatcher;
                }
                var ua = new Mscrm.UserAgent.UserAgent();
                if (ua.getIsAndroidPhone()) {
                    var navigationDispatcher = new Dispatchers.NavigationDispatcher(bridge);
                    dispatchers[navigationDispatcher.namespace] = navigationDispatcher;
                }
                return dispatchers;
            };
            return DispatcherFactory;
        }());
        Dispatchers.DispatcherFactory = DispatcherFactory;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var DispatcherMethod = (function () {
            function DispatcherMethod(_dispatcher, _name, _function, _argsType, _callbacks) {
                this._dispatcher = _dispatcher;
                this._name = _name;
                this._function = _function;
                this._argsType = _argsType;
                this._callbacks = _callbacks;
                if (!_dispatcher || !_name || !_function || !_argsType || !_callbacks) {
                    Mscrm.Logging.Logger.logError("Missing argument to DispatcherMethod()", "DispatcherBase");
                }
            }
            Object.defineProperty(DispatcherMethod.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            DispatcherMethod.prototype.invoke = function (methodCall) {
                if (!this.verifySchemaWithArgsAndTypes(methodCall)) {
                    return;
                }
                this._function.call(this._dispatcher, methodCall);
            };
            DispatcherMethod.prototype.verifySchemaWithArgsAndTypes = function (methodCall) {
                if (Object.keys(methodCall.args).length != Object.keys(this._argsType).length) {
                    Mscrm.Logging.Logger.logError(this._name + ": Invalid number of arguments", "Bridge Method");
                    return false;
                }
                if (Object.keys(methodCall.callbacks).length != Object.keys(this._callbacks).length) {
                    Mscrm.Logging.Logger.logError(this._name + ": Invalid number of callbacks", "Bridge Method");
                    return false;
                }
                for (var argumentName in methodCall.args) {
                    var arg = methodCall.args[argumentName];
                    if (!this.verifyArgument(argumentName, arg)) {
                        Mscrm.Logging.Logger.logError(this._name + ": Invalid argument: " + argumentName, "Bridge Method");
                        return false;
                    }
                }
                for (var callbackName in methodCall.callbacks) {
                    var callback = methodCall.callbacks[callbackName];
                    if (!this.verifyCallback(callbackName, callback)) {
                        Mscrm.Logging.Logger.logError(this._name + ": Invalid callback: " + callbackName, "Bridge Method");
                        return false;
                    }
                }
                return true;
            };
            DispatcherMethod.prototype.verifyArgument = function (argumentName, argumentObject) {
                if (argumentName == null) {
                    Mscrm.Logging.Logger.logError("Null argument passed to _verifyArgument.", "Bridge Method");
                    return false;
                }
                var expectedType = this._argsType[argumentName];
                if (expectedType === undefined) {
                    Mscrm.Logging.Logger.logError("Unknown argument: " + argumentName, "Bridge Method");
                    return false;
                }
                return argumentObject == null || typeof expectedType === typeof argumentObject;
            };
            DispatcherMethod.prototype.verifyCallback = function (callbackName, callbackObject) {
                if (callbackName == null || callbackObject == null) {
                    Mscrm.Logging.Logger.logError("Null argument passed to _verifyCallback.", "Bridge Method");
                    return false;
                }
                var expectedCallback = this._callbacks[callbackName];
                if (expectedCallback === undefined) {
                    Mscrm.Logging.Logger.logError("Unknown callback: " + callbackName, "Bridge Method");
                    return false;
                }
                return true;
            };
            return DispatcherMethod;
        }());
        Dispatchers.DispatcherMethod = DispatcherMethod;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var DocumentDispatcher = (function (_super) {
            __extends(DocumentDispatcher, _super);
            function DocumentDispatcher(bridge) {
                _super.call(this, bridge);
                this.namespace = "Document";
            }
            DocumentDispatcher.prototype.launchUrl = function (methodCall) {
                var url = methodCall.args["url"];
                if (url) {
                    Mscrm.Logging.Logger.logInfo("Attempting to launch URL: " + url, "DocumentDispatcher");
                    window.open(url, "_blank", "scrollbars=1,resizable=1,width=1000,height=700");
                }
            };
            DocumentDispatcher.prototype.registerMethods = function () {
                this.registerMethodWithName("launchURL", this.launchUrl, { "url": "" }, {});
            };
            return DocumentDispatcher;
        }(Dispatchers.DispatcherBase));
        Dispatchers.DocumentDispatcher = DocumentDispatcher;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var LoggingDispatcher = (function (_super) {
            __extends(LoggingDispatcher, _super);
            function LoggingDispatcher(bridge) {
                _super.call(this, bridge);
                this.namespace = "Logging";
            }
            LoggingDispatcher.prototype.logMessage = function (methodCall) {
                var message = methodCall.args["message"];
                var level = methodCall.args["level"];
                Mscrm.Logging.Logger.logWithLevel(message, level, "PAL");
            };
            LoggingDispatcher.prototype.sendEvent = function (methodCall) {
                var data = methodCall.args["data"];
                Mscrm.Telemetry.TelemetryReporter.getInstance().reportEvent(new Mscrm.Telemetry.TelemetryEvent(data.name, data.data));
            };
            LoggingDispatcher.prototype.logTelemetryData = function (methodCall) {
                var telemetryData = methodCall.args["telemetryData"];
                var event = Mscrm.Telemetry.TelemetryEvent.fromData(telemetryData);
                if (event) {
                    Mscrm.Telemetry.TelemetryReporter.getInstance().reportEvent(event);
                }
            };
            LoggingDispatcher.prototype.logPerformanceData = function (methodCall) {
                var namespace = methodCall.args["namespace"];
                var data = methodCall.args["data"];
                Mscrm.Logging.Logger.logInfo("MailApp preformance data. Namespace: " + namespace + ". Data: " + data);
            };
            LoggingDispatcher.prototype.registerMethods = function () {
                this.registerMethodWithName("logMessage", this.logMessage, { "level": 0, "message": "" }, {});
                this.registerMethodWithName("sendEvent", this.sendEvent, { "data": {} }, {});
                this.registerMethodWithName("logTelemetryData", this.logTelemetryData, { "telemetryData": "" }, {});
                this.registerMethodWithName("logPerformanceData", this.logPerformanceData, { "namespace": "", "data": "" }, {});
            };
            return LoggingDispatcher;
        }(Dispatchers.DispatcherBase));
        Dispatchers.LoggingDispatcher = LoggingDispatcher;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var EmailContext;
    (function (EmailContext) {
        var AddinSpecificCustomProperties = (function () {
            function AddinSpecificCustomProperties(customProps) {
                this.SelectedRecipientEmailAddress = "";
                for (var key in this) {
                    Object.defineProperty(this, key, { value: customProps.get(key) });
                }
            }
            return AddinSpecificCustomProperties;
        }());
        EmailContext.AddinSpecificCustomProperties = AddinSpecificCustomProperties;
    })(EmailContext = Mscrm.EmailContext || (Mscrm.EmailContext = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Dispatchers;
    (function (Dispatchers) {
        var EmailContextRetriever = Mscrm.EmailContext.EmailContextRetriever;
        var EmailItemRetrieveState = Mscrm.EmailContext.EmailItemRetrieveState;
        var AddinSpecificCustomProperties = Mscrm.EmailContext.AddinSpecificCustomProperties;
        var ItemType = Mscrm.Exchange.ItemType;
        var EmailEngagementManager = Mscrm.EmailEngagement.EmailEngagementManager;
        var OfficeMailDispatcher = (function (_super) {
            __extends(OfficeMailDispatcher, _super);
            function OfficeMailDispatcher(bridge) {
                var _this = this;
                _super.call(this, bridge);
                this.namespace = "OfficeMail";
                Mscrm.OfficeProvider.subscribeToItemChangedEvent(function () {
                    _this.bridge.changeStateForDispatcher(_this.namespace, "OnEmailContextChanged", true);
                });
            }
            OfficeMailDispatcher.prototype.getInitialState = function () {
                var mailboxDiagnostics = Mscrm.OfficeProvider.getDiagnostics();
                if (mailboxDiagnostics) {
                    return {
                        "HostName": mailboxDiagnostics.hostName || "",
                        "HostVersion": mailboxDiagnostics.hostVersion || "",
                        "OWAView": mailboxDiagnostics.OWAView || ""
                    };
                }
                return {
                    "HostName": "",
                    "HostVersion": "",
                    "OWAView": ""
                };
            };
            OfficeMailDispatcher.prototype.getRecipients = function (methodCall) {
                var _this = this;
                var item = Mscrm.OfficeProvider.getEmailItem();
                var isComposeMode = false;
                if (item.itemType == ItemType[ItemType.appointment]) {
                    isComposeMode = item.requiredAttendees.getAsync != null;
                }
                else {
                    isComposeMode = item.to.getAsync != null;
                }
                Mscrm.OfficeProvider.getEmailRecipients(isComposeMode).done(function (recipients) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetRecipients"], { value: recipients }, true);
                });
            };
            OfficeMailDispatcher.prototype.getEmailItem = function (methodCall) {
                var _this = this;
                if (methodCall.args["IsRetry"]) {
                    EmailContextRetriever.getInstance().retrieveEmailInfo().then(function (emailContext) {
                        _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailItem"], { ContextRetrieveResult: { status: EmailItemRetrieveState.Success, emailItem: emailContext.emailItem } }, true);
                    }, function (error) {
                        _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailItem"], { ContextRetrieveResult: { status: error.code, message: error.message } }, true);
                    });
                }
                else {
                    EmailContextRetriever.getInstance().emailContextRetrievedDeferred.then(function (emailContext) {
                        _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailItem"], { ContextRetrieveResult: { status: EmailItemRetrieveState.Success, emailItem: emailContext.emailItem } }, true);
                    }, function (error) {
                        _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailItem"], { ContextRetrieveResult: { status: error.code, message: error.message } }, true);
                    });
                }
            };
            OfficeMailDispatcher.prototype.getItemCategories = function (methodCall) {
                var _this = this;
                Mscrm.ExchangeProvider.retrieveItemCategories().then(function (categories) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetItemCategories"], { ItemCategories: categories }, true);
                }, function (error) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetItemCategories"], { ItemCategories: null }, true);
                });
            };
            OfficeMailDispatcher.prototype.isSentFolder = function (methodCall) {
                this.bridge.performCallbackWithId(methodCall.callbacks["onIsSentFolder"], { IsSentFolder: Mscrm.OfficeProvider.isEmailInSentFolder() }, true);
            };
            OfficeMailDispatcher.prototype.getEntities = function (methodCall) {
                var item = Mscrm.OfficeProvider.getEmailItem();
                var entities = item.getEntities && item.getEntities();
                var result = {
                    'addresses': entities ? entities.addresses : [],
                    'phoneNumbers': entities ? entities.phoneNumbers : []
                };
                this.bridge.performCallbackWithId(methodCall.callbacks["onGetEntities"], { entities: result }, true);
            };
            OfficeMailDispatcher.prototype.getEmailLinks = function (methodCall) {
                var _this = this;
                var crmId = methodCall.args["crmId"];
                EmailEngagementManager.getUniqueLinks(crmId).then(function (links) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailLinks"], { emailLinks: links, error: null }, true);
                }, function (err) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailLinks"], { emailLinks: null, error: err.message }, true);
                    Mscrm.Logging.Logger.logError("EmailEngagementManager.onGetEmailLinks():" + err.message);
                });
            };
            OfficeMailDispatcher.prototype.removeTrackingInfo = function (methodCall) {
                var _this = this;
                var crmId = methodCall.args["crmId"];
                EmailEngagementManager.removeTrackingInfo(crmId).then(function () {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onRemoveTrackingInfo"], { result: true, error: null }, true);
                }, function (err) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onRemoveTrackingInfo"], { result: false, error: err.message }, true);
                    Mscrm.Logging.Logger.logError("EmailEngagementManager.onRemoveTrackingInfo():" + err.message);
                });
            };
            OfficeMailDispatcher.prototype.setTrackingInfo = function (methodCall) {
                var _this = this;
                var pixelUrl = methodCall.args["pixelUrl"];
                var crmId = methodCall.args["crmId"];
                var linkPairs = methodCall.args["linkPairs"];
                EmailEngagementManager.setTrackingInfo(crmId, pixelUrl, EmailEngagementManager.transformClientLinkPairs(linkPairs)).then(function () {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onSetTrackingInfo"], { result: true, error: null }, true);
                }, function (err) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onSetTrackingInfo"], { result: false, error: err.message }, true);
                    Mscrm.Logging.Logger.logError("EmailEngagementManager.onSetTrackingInfo():" + err.message);
                });
            };
            OfficeMailDispatcher.prototype.getEmailAddress = function (methodCall) {
                var emailAddress = Mscrm.OfficeProvider.getUserProfile().emailAddress;
                var result = {
                    'emailAddress': emailAddress ? emailAddress : ""
                };
                this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailAddress"], { GetEmailAddressResult: { emailAddress: result.emailAddress, error: null } }, true);
            };
            OfficeMailDispatcher.prototype.getEmailDetails = function (methodCall) {
                var message = Mscrm.OfficeProvider.getEmailItem();
                var bridge = this.bridge;
                $.when(Mscrm.OfficeProvider.getBodyAsync(Mscrm.OfficeProvider.CoercionType.Html), Mscrm.OfficeProvider.getBodyAsync(Mscrm.OfficeProvider.CoercionType.Text), Mscrm.OfficeProvider.getSubject()).done(function (body, plainBody, subject) {
                    var result = {
                        'dateTimeCreated': message.dateTimeCreated,
                        'subject': subject,
                        'body': body,
                        'plainBody': plainBody
                    };
                    bridge.performCallbackWithId(methodCall.callbacks["onGetEmailDetails"], { GetEmailDetailsResult: result }, true);
                }).fail(function () {
                    bridge.performCallbackWithId(methodCall.callbacks["onGetEmailDetails"], { GetEmailDetailsResult: null }, true);
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.getEmailDetails(): Failed to retrieve email details.");
                });
            };
            OfficeMailDispatcher.prototype.getAttachmentDetails = function (methodCall) {
                var message = Mscrm.OfficeProvider.getEmailItem();
                var bridge = this.bridge;
                if (message.attachments) {
                    this.retrieveAttachmentsAsync(message.attachments).done(function (attachmentInfo) {
                        var result = {
                            'AttachmentIds': attachmentInfo.AttachmentIds,
                            'EwsUrl': attachmentInfo.EwsUrl,
                        };
                        bridge.performCallbackWithId(methodCall.callbacks["onGetAttachmentDetails"], { GetAttachmentDetailsResult: result }, true);
                    });
                }
                else {
                    bridge.performCallbackWithId(methodCall.callbacks["onGetAttachmentDetails"], { GetAttachmentDetailsResult: null }, true);
                }
            };
            OfficeMailDispatcher.prototype.retrieveAttachmentsAsync = function (attachementDetails) {
                var deferred = $.Deferred();
                EmailContextRetriever.getInstance().retrieveAttachmentsAsync(attachementDetails).done(function (attachmentInfo) {
                    deferred.resolve(attachmentInfo);
                });
                return deferred.promise();
            };
            OfficeMailDispatcher.prototype.insertToStartOfBodyAsync = function (methodCall) {
                var _this = this;
                var str = methodCall.args["str"];
                Mscrm.OfficeProvider.insertToStartOfBody(str).then(function (asyncResult) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onInsertToStartOfBodyAsync"], { asyncResult: asyncResult, error: null }, true);
                }, function (err) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onInsertToStartOfBodyAsync"], { asyncResult: null, error: err }, true);
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.insertToStartOfBodyAsync():" + err);
                });
            };
            OfficeMailDispatcher.prototype.setEmailSubject = function (methodCall) {
                var _this = this;
                var subject = methodCall.args["subject"];
                Mscrm.OfficeProvider.setEmailSubject(subject).then(function (asyncResult) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onSetEmailSubject"], { asyncResult: asyncResult, error: null }, true);
                }, function (err) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onSetEmailSubject"], { asyncResult: null, error: err }, true);
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.setEmailsubject():" + err);
                });
            };
            OfficeMailDispatcher.prototype.getEmailSubject = function (methodCall) {
                var message = Mscrm.OfficeProvider.getEmailItem();
                var bridge = this.bridge;
                Mscrm.OfficeProvider.getSubject().done(function (subject) {
                    bridge.performCallbackWithId(methodCall.callbacks["onGetEmailSubject"], { GetEmailSubjectResult: { subject: subject } }, true);
                });
            };
            OfficeMailDispatcher.prototype.setCrmEmailProperties = function (methodCall) {
                var _this = this;
                var extendedPropertyUpdates = methodCall.args['ExtendedPropertyUpdates'];
                var propertyUpdates = methodCall.args['PropertyUpdates'];
                var conflictResolutionType = methodCall.args['ConflictResolutionType'];
                var itemType = methodCall.args['ItemType'];
                Mscrm.ExchangeProvider.setCrmEmailProperties(extendedPropertyUpdates, propertyUpdates, conflictResolutionType, ItemType[itemType]).then(function (result) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onSetCrmEmailProperties"], { ExchangeResponse: result, Error: null }, true);
                }, function (error) {
                    Mscrm.Boot.ErrorManager.handleError(new Mscrm.Boot.ClientError(error.message, Mscrm.Boot.ClientError.ExchangeRequestFailedErrorCode), error.message, false);
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onSetCrmEmailProperties"], { ExchangeResponse: null, Error: error }, true);
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.setCrmEmailProperties(): " + error.message);
                });
            };
            OfficeMailDispatcher.prototype.addFileAttachmentAsync = function (methodCall) {
                var _this = this;
                var attachmentURL = methodCall.args["attachmentURL"];
                var attachmentName = methodCall.args["attachmentName"];
                Mscrm.OfficeProvider.addFileAttachmentAsync(attachmentURL, attachmentName).then(function (asyncResult) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onAddFileAttachmentAsync"], { asyncResult: asyncResult, error: null }, true);
                }, function (err) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onAddFileAttachmentAsync"], { asyncResult: null, error: err }, true);
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.addFileAttachmentAsync(): " + err);
                });
            };
            OfficeMailDispatcher.prototype.addItemAttachmentAsync = function (methodCall) {
                var _this = this;
                var itemId = methodCall.args["itemId"];
                var attachmentName = methodCall.args["attachmentName"];
                Mscrm.OfficeProvider.addItemAttachmentAsync(itemId, attachmentName).then(function (asyncResult) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onAddItemAttachmentAsync"], { asyncResult: asyncResult, error: null }, true);
                }, function (err) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onAddItemAttachmentAsync"], { asyncResult: null, error: err }, true);
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.addItemAttachmentAsync(): " + err);
                });
            };
            OfficeMailDispatcher.prototype.getDeliverPromoteDetails = function (methodCall) {
                var _this = this;
                var soapRequestBody = methodCall.args['SoapRequestBody'];
                var bridge = this.bridge;
                Mscrm.OfficeProvider.getDeliverPromoteDetails(soapRequestBody).done(function (response) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetDeliverPromoteDetails"], { GetDeliverPromoteDetailsResult: response }, true);
                });
            };
            OfficeMailDispatcher.prototype.setRoamingSettingsItem = function (methodCall) {
                var key = methodCall.args['key'];
                var value = JSON.parse(methodCall.args['value']);
                Mscrm.OfficeProvider.setRoamingSettingsItem(key, value);
                this.bridge.performCallbackWithId(methodCall.callbacks["onSetRoamingSettingsItem"], { status: 'success', item: { key: key, value: value } }, true);
            };
            OfficeMailDispatcher.prototype.getRoamingSettingsItem = function (methodCall) {
                var key = methodCall.args['key'];
                var value = Mscrm.OfficeProvider.getRoamingSettingsItem(key);
                this.bridge.performCallbackWithId(methodCall.callbacks["onGetRoamingSettingsItem"], { result: value }, true);
            };
            OfficeMailDispatcher.prototype.removeRoamingSettingsItem = function (methodCall) {
                var key = methodCall.args['key'];
                Mscrm.OfficeProvider.removeRoamingSettingsItem(key);
            };
            OfficeMailDispatcher.prototype.saveRoamingSettingsAsync = function (methodCall) {
                Mscrm.OfficeProvider.saveRoamingSettingsAsync();
                this.bridge.performCallbackWithId(methodCall.callbacks["onSaveRoamingSettingsAsync"], {}, true);
            };
            OfficeMailDispatcher.prototype.getAddinSpecificCustomProperties = function (methodCall) {
                var _this = this;
                EmailContextRetriever.getInstance().addinSpecificCustomPropsRetrievedDeferred.then(function (customProps) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailCustomProperties"], { Response: new AddinSpecificCustomProperties(customProps) }, true);
                }, function (error) {
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.getAddinSpecificCustomProperties(): " + error.message);
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetEmailCustomProperties"], { Response: null, Error: { code: error.code, message: error.message } }, true);
                });
            };
            OfficeMailDispatcher.prototype.updateAddinSpecificCustomProperties = function (methodCall) {
                var _this = this;
                var bridge = this.bridge;
                var props = methodCall.args['CustomPropertiesToUpdate'];
                Mscrm.OfficeProvider.updateAddinSpecificCustomProperties(props).then(function (result) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onUpdateEmailCustomProperties"], { Response: result }, true);
                }, function (error) {
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.updateAddinSpecificCustomProperties(): " + error.message);
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onUpdateEmailCustomProperties"], { Response: null, Error: { code: error.code, message: error.message } }, true);
                });
            };
            OfficeMailDispatcher.prototype.getSelectedEmailRecipient = function (methodCall) {
                this.bridge.performCallbackWithId(methodCall.callbacks["onGetSelectedEmail"], { Response: Mscrm.OfficeProvider.getSelectedEmailRecipient() }, true);
            };
            OfficeMailDispatcher.prototype.updateSelectedEmailRecipient = function (methodCall) {
                var _this = this;
                var bridge = this.bridge;
                var email = methodCall.args['EmailToUpdate'];
                Mscrm.OfficeProvider.updateSelectedEmailRecipient(email).then(function (result) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onUpdateSelectedEmail"], { Response: result }, true);
                }, function (error) {
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.updateSelectedEmailRecipient(): " + error.message);
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onUpdateSelectedEmailRecipient"], { Response: null, Error: { code: error.code, message: error.message } }, true);
                });
            };
            OfficeMailDispatcher.prototype.displayFormForNewAppointment = function (methodCall) {
                var parameters = methodCall.args['AppointmentParameters'];
                Mscrm.OfficeProvider.displayNewAppointmentForm(parameters);
            };
            OfficeMailDispatcher.prototype.getContacts = function (methodCall) {
                var _this = this;
                var parameters = methodCall.args['Parameters'];
                Mscrm.OfficeProvider.getContacts(parameters.count, parameters.skip, parameters.sortBy, parameters.filters, parameters.extendedFilters).then(function (result) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetContacts"], result, true);
                }, function (error) {
                    console.error(error);
                });
            };
            OfficeMailDispatcher.prototype.getContactsCount = function (methodCall) {
                var _this = this;
                Mscrm.OfficeProvider.getContactsCount().then(function (contactsCount) {
                    Mscrm.OfficeProvider.getTrackedContactsCount().then(function (trackedContactsCount) {
                        _this.bridge.performCallbackWithId(methodCall.callbacks["onGetContactsCount"], {
                            contactsCount: contactsCount, trackedContactsCount: trackedContactsCount
                        }, true);
                    }, function (error) {
                        console.error(error);
                    });
                }, function (error) {
                    console.error(error);
                });
            };
            OfficeMailDispatcher.prototype.getContactPhoto = function (methodCall) {
                var parameters = methodCall.args['Parameters'];
            };
            OfficeMailDispatcher.prototype.updateContactProperties = function (methodCall) {
                var _this = this;
                var parameters = methodCall.args['Parameters'];
                Mscrm.OfficeProvider.updateContactProperties(parameters.id, parameters.changeKey, parameters.properties, parameters.extendedProperties).then(function (result) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onUpdateContactProperties"], { status: 'success', uniqueDispatchKey: parameters.uniqueDispatchKey }, true);
                }, function (error) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onUpdateContactProperties"], { status: 'error', uniqueDispatchKey: parameters.uniqueDispatchKey }, true);
                });
            };
            OfficeMailDispatcher.prototype.getInitialSenderData = function (methodCall) {
                var _this = this;
                Mscrm.Boot.InitialDataLoader.senderDataPromise.then(function (value) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onGetInitialSenderData"], { value: value }, true);
                }, function (error) {
                    Mscrm.Logging.Logger.logError("OfficeMailDispatcher.getInitialSenderData(): " + error.message);
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onCheckMetadataChanged"], { error: { code: error.code, message: error.message } }, true);
                });
            };
            OfficeMailDispatcher.prototype.getTelemetryEndpoint = function (methodCall) {
                var _this = this;
                Mscrm.Telemetry.TelemetryReporter.getInstance().endpointDiscoveryPromise.then(function (endpointUrl) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onTelemetryEndpointRetrieved"], { result: { status: "success", endpointUrl: endpointUrl } }, true);
                }, function (error) {
                    _this.bridge.performCallbackWithId(methodCall.callbacks["onTelemetryEndpointRetrieved"], { result: { status: "error", error: error } }, true);
                });
            };
            OfficeMailDispatcher.prototype.registerMethods = function () {
                this.registerMethodWithName("GetRecipients", this.getRecipients, {}, { "onGetRecipients": "" });
                this.registerMethodWithName("GetEntities", this.getEntities, {}, { "onGetEntities": "" });
                this.registerMethodWithName("GetEmailItem", this.getEmailItem, { "IsRetry": false }, { "onGetEmailItem": "" });
                this.registerMethodWithName("IsSentFolder", this.isSentFolder, {}, { "onIsSentFolder": "" });
                this.registerMethodWithName("GetEmailAddress", this.getEmailAddress, {}, { "onGetEmailAddress": "" });
                this.registerMethodWithName("GetEmailDetails", this.getEmailDetails, {}, { "onGetEmailDetails": "" });
                this.registerMethodWithName("GetAttachmentDetails", this.getAttachmentDetails, {}, { "onGetAttachmentDetails": "" });
                this.registerMethodWithName("InsertToStartOfBodyAsync", this.insertToStartOfBodyAsync, { "str": "" }, { "onInsertToStartOfBodyAsync": "" });
                this.registerMethodWithName("GetEmailSubject", this.getEmailSubject, {}, { "onGetEmailSubject": "" });
                this.registerMethodWithName("SetEmailSubject", this.setEmailSubject, { "subject": "" }, { "onSetEmailSubject": "" });
                this.registerMethodWithName("AddFileAttachmentAsync", this.addFileAttachmentAsync, { "attachmentURL": "", "attachmentName": "" }, { "onAddFileAttachmentAsync": "" });
                this.registerMethodWithName("AddItemAttachmentAsync", this.addItemAttachmentAsync, { "itemId": "", "attachmentName": "" }, { "onAddItemAttachmentAsync": "" });
                this.registerMethodWithName("SetCrmEmailProperties", this.setCrmEmailProperties, { "ExtendedPropertyUpdates": [], "PropertyUpdates": [], "ConflictResolutionType": '', "ItemType": '' }, { "onSetCrmEmailProperties": "" });
                this.registerMethodWithName("GetDeliverPromoteDetails", this.getDeliverPromoteDetails, { "SoapRequestBody": '' }, { "onGetDeliverPromoteDetails": "" });
                this.registerMethodWithName("SetRoamingSettingsItem", this.setRoamingSettingsItem, { "key": "", "value": "" }, { "onSetRoamingSettingsItem": "" });
                this.registerMethodWithName("GetRoamingSettingsItem", this.getRoamingSettingsItem, { "key": "" }, { "onGetRoamingSettingsItem": "" });
                this.registerMethodWithName("RemoveRoamingSettingsItem", this.removeRoamingSettingsItem, { "key": "" }, {});
                this.registerMethodWithName("SaveRoamingSettingsAsync", this.saveRoamingSettingsAsync, {}, { "onSaveRoamingSettingsAsync": "" });
                this.registerMethodWithName("GetEmailCustomProperties", this.getAddinSpecificCustomProperties, {}, { "onGetEmailCustomProperties": "" });
                this.registerMethodWithName("UpdateEmailCustomProperties", this.updateAddinSpecificCustomProperties, { "CustomPropertiesToUpdate": {} }, { "onUpdateEmailCustomProperties": "" });
                this.registerMethodWithName("DisplayFormForNewAppointment", this.displayFormForNewAppointment, { "AppointmentParameters": {} }, {});
                this.registerMethodWithName("GetInitialSenderData", this.getInitialSenderData, {}, { "onGetInitialSenderData": "" });
                this.registerMethodWithName("GetSelectedEmail", this.getSelectedEmailRecipient, {}, { "onGetSelectedEmail": "" });
                this.registerMethodWithName("UpdateSelectedEmail", this.updateSelectedEmailRecipient, { "EmailToUpdate": "" }, { "onUpdateSelectedEmail": "" });
                this.registerMethodWithName("GetItemCategories", this.getItemCategories, {}, { "onGetItemCategories": "" });
                this.registerMethodWithName("GetEmailLinks", this.getEmailLinks, { "crmId": "" }, { "onGetEmailLinks": "" });
                this.registerMethodWithName("SetTrackingInfo", this.setTrackingInfo, { "pixelUrl": "", "linkPairs": {}, "crmId": "" }, { "onSetTrackingInfo": "" });
                this.registerMethodWithName("RemoveTrackingInfo", this.removeTrackingInfo, { "crmId": "" }, { "onRemoveTrackingInfo": "" });
                this.registerMethodWithName("GetContacts", this.getContacts, { "Parameters": {} }, { "onGetContacts": "" });
                this.registerMethodWithName("GetContactsCount", this.getContactsCount, {}, { "onGetContactsCount": "" });
                this.registerMethodWithName("UpdateContactProperties", this.updateContactProperties, { "Parameters": {} }, { "onUpdateContactProperties": "" });
                this.registerMethodWithName("GetTelemetryEndpoint", this.getTelemetryEndpoint, {}, { "onTelemetryEndpointRetrieved": "" });
            };
            return OfficeMailDispatcher;
        }(Dispatchers.DispatcherBase));
        Dispatchers.OfficeMailDispatcher = OfficeMailDispatcher;
    })(Dispatchers = Mscrm.Dispatchers || (Mscrm.Dispatchers = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Logging;
    (function (Logging) {
        (function (LogLevels) {
            LogLevels[LogLevels["Default"] = 0] = "Default";
            LogLevels[LogLevels["Error"] = 1] = "Error";
            LogLevels[LogLevels["Warning"] = 2] = "Warning";
            LogLevels[LogLevels["Performance"] = 3] = "Performance";
            LogLevels[LogLevels["Info"] = 4] = "Info";
            LogLevels[LogLevels["Verbose"] = 5] = "Verbose";
            LogLevels[LogLevels["Debug"] = 6] = "Debug";
        })(Logging.LogLevels || (Logging.LogLevels = {}));
        var LogLevels = Logging.LogLevels;
        var Logger = (function () {
            function Logger() {
            }
            Logger.log = function (message, tag) {
                Logger.logWithLevel(message, LogLevels.Default, tag);
            };
            Logger.logError = function (message, tag) {
                Logger.logWithLevel(message, LogLevels.Error, tag);
            };
            Logger.logWarning = function (message, tag) {
                Logger.logWithLevel(message, LogLevels.Warning, tag);
            };
            Logger.logInfo = function (message, tag) {
                Logger.logWithLevel(message, LogLevels.Info, tag);
            };
            Logger.logWithLevel = function (message, level, tag) {
                if (!tag) {
                    tag = LogLevels[level];
                }
                var fullMessage = "Dynamics CRM [" + tag + "] | " + message;
                switch (level) {
                    case LogLevels.Error:
                        console.error(fullMessage);
                        break;
                    case LogLevels.Warning:
                        console.warn(fullMessage);
                        break;
                    case LogLevels.Info:
                        console.info(fullMessage);
                        break;
                    default:
                        console.log(fullMessage);
                }
            };
            return Logger;
        }());
        Logging.Logger = Logger;
    })(Logging = Mscrm.Logging || (Mscrm.Logging = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Performance;
    (function (Performance) {
        var STORAGE_KEY = "CRMMailAppPerformanceMetricStorageKey";
        var PerformanceMetricStorage = (function () {
            function PerformanceMetricStorage() {
            }
            PerformanceMetricStorage.saveMetric = function (metric) {
                var _this = this;
                if (this.collectionEnabled) {
                    this.unstoredMetrics.push({ Name: metric.name, StartTime: metric.startTime, StopTime: metric.stopTime });
                }
                if (!this.unloadListenerAttached) {
                    window.addEventListener("unload", function (evt) {
                        if (_this.collectionEnabled) {
                            _this.storeMetrics();
                        }
                    });
                    this.unloadListenerAttached = true;
                }
            };
            PerformanceMetricStorage.getMetrics = function () {
                var storedMetricBlob = sessionStorage.getItem(STORAGE_KEY);
                var storedMetricList = storedMetricBlob ? JSON.parse(storedMetricBlob) : [];
                var metricList = this.unstoredMetrics.concat(storedMetricList);
                return JSON.stringify(metricList);
            };
            PerformanceMetricStorage.clear = function () {
                sessionStorage.removeItem(STORAGE_KEY);
                this.unstoredMetrics = [];
            };
            PerformanceMetricStorage.storeMetrics = function () {
                var metricBlob = sessionStorage.getItem(STORAGE_KEY);
                var metricList = metricBlob ? JSON.parse(metricBlob) : [];
                this.unstoredMetrics.forEach(function (metric) { return metricList.push(metric); });
                sessionStorage.setItem(STORAGE_KEY, JSON.stringify(metricList));
                this.unstoredMetrics = [];
            };
            PerformanceMetricStorage.unstoredMetrics = [];
            PerformanceMetricStorage.unloadListenerAttached = false;
            PerformanceMetricStorage.collectionEnabled = true;
            return PerformanceMetricStorage;
        }());
        Performance.PerformanceMetricStorage = PerformanceMetricStorage;
    })(Performance = Mscrm.Performance || (Mscrm.Performance = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Performance;
    (function (Performance) {
        var PerformanceMarker = (function (_super) {
            __extends(PerformanceMarker, _super);
            function PerformanceMarker() {
                _super.apply(this, arguments);
            }
            PerformanceMarker.addMarker = function (name) {
                var marker = new PerformanceMarker(name, Date.now());
                marker.save();
            };
            return PerformanceMarker;
        }(Performance.PerformanceMetric));
        Performance.PerformanceMarker = PerformanceMarker;
    })(Performance = Mscrm.Performance || (Mscrm.Performance = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Settings;
    (function (Settings) {
        var OrganizationConfig = (function () {
            function OrganizationConfig(orgId, orgName, orgUrl, orgVersion, discoUrl, isOnPrem) {
                if (isOnPrem === void 0) { isOnPrem = false; }
                this.orgId = orgId;
                this.orgName = orgName;
                this.orgUrl = orgUrl;
                this.orgVersion = orgVersion;
                this.discoUrl = discoUrl;
                this.isOnPrem = isOnPrem;
            }
            return OrganizationConfig;
        }());
        Settings.OrganizationConfig = OrganizationConfig;
    })(Settings = Mscrm.Settings || (Mscrm.Settings = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Settings;
    (function (Settings) {
        Settings.Browser = {
            getSetting: function (key) {
                return localStorage.getItem(key);
            },
            removeAllSettigns: function () {
                localStorage.clear();
            },
            saveSetting: function (key, value) {
                try {
                    localStorage.setItem(key, value);
                }
                catch (e) {
                    Mscrm.Logging.Logger.logError("Error while saving setting " + key + "= " + value + " on local cache - " + e.message);
                }
            },
            removeSetting: function (key) {
                localStorage.removeItem(key);
            }
        };
        Settings.Session = {
            getSetting: function (key) {
                return sessionStorage.getItem(key);
            },
            removeAllSettigns: function () {
                sessionStorage.clear();
            },
            saveSetting: function (key, value) {
                sessionStorage.setItem(key, value);
            },
            removeSetting: function (key) {
                sessionStorage.removeItem(key);
            }
        };
        Settings.Keys = {
            principalEmail: "Mscrm.MailApp.principalEmail",
            clientSettings: "clientsettings"
        };
    })(Settings = Mscrm.Settings || (Mscrm.Settings = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Telemetry;
    (function (Telemetry) {
        var TelemetryEvent = (function () {
            function TelemetryEvent(eventName, eventValues) {
                if (eventValues === void 0) { eventValues = {}; }
                this.timeSinceSessionInitKey = 'TimeSinceSessionInit';
                this.activityId = Telemetry.TelemetryReporter.getInstance().getSessionId();
                this.eventName = eventName;
                this.eventValues = eventValues;
                this.eventValues['ShimURL'] = window.location.toString();
                if (!this.eventValues[this.timeSinceSessionInitKey]) {
                    var timeSinceInit = (new Date()).getTime() - Telemetry.TelemetryReporter.getInstance().getInitTime();
                    this.eventValues[this.timeSinceSessionInitKey] = timeSinceInit;
                }
            }
            TelemetryEvent.prototype.toData = function () {
                return TelemetryEvent.toData([this]);
            };
            TelemetryEvent.toData = function (events) {
                var eventData = [];
                events.forEach(function (event) {
                    eventData.push({
                        ActivityId: event.activityId,
                        EventName: event.eventName,
                        EventValues: event.eventValues
                    });
                });
                return JSON.stringify(eventData);
            };
            TelemetryEvent.fromData = function (data) {
                try {
                    var json = JSON.parse(data);
                    var activityId = json["ActivityId"];
                    if (!activityId) {
                        return null;
                    }
                    var eventName = json["EventName"];
                    if (!eventName) {
                        return null;
                    }
                    var eventValues = json["EventValues"];
                    if (!eventValues) {
                        eventValues = {};
                    }
                    return new TelemetryEvent(eventName, eventValues);
                }
                catch (ex) {
                    return null;
                }
            };
            TelemetryEvent.prototype.addEventParameter = function (key, value) {
                if (this.eventValues[key]) {
                    Mscrm.Logging.Logger.logWarning('Overwriting event parameter, ' + key + ', in TelemetryEvent with name ' + this.eventName, 'Telemetry');
                }
                this.eventValues[key] = value;
            };
            return TelemetryEvent;
        }());
        Telemetry.TelemetryEvent = TelemetryEvent;
    })(Telemetry = Mscrm.Telemetry || (Mscrm.Telemetry = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Telemetry;
    (function (Telemetry) {
        var TelemetryReporter = (function () {
            function TelemetryReporter() {
                var _this = this;
                this.sessionIdKey = 'MoCASessionID';
                this.initTimeKey = 'MoCAInitTime';
                this.endPointKey = 'MoCATelemetryEndPoint';
                this.pendingEventsKey = "MailAppPendingTelemetryEvents";
                this.orgVersionPromise = $.Deferred();
                this.pendingEvents = [];
                this.reportingInterval = 5000;
                this.secondaryLoadParam = 'secondaryLoad=1';
                this.isSecondaryLoad = false;
                this.maxSavedPendingEventsCount = 100;
                this.endpointDiscoveryPromise = $.Deferred();
                this.loadEvents = function () {
                    var eventsJson = localStorage.getItem(_this.pendingEventsKey);
                    if (eventsJson) {
                        var savedEvents = JSON.parse(eventsJson);
                        localStorage.removeItem(_this.pendingEventsKey);
                        if (savedEvents && savedEvents instanceof Array) {
                            _this.pendingEvents.forEach(function (event) {
                                savedEvents.push(event);
                            });
                            _this.pendingEvents = savedEvents;
                        }
                    }
                };
                this.saveEvents = function () {
                    var delta = _this.pendingEvents.length - _this.maxSavedPendingEventsCount;
                    if (delta > 0) {
                        _this.pendingEvents = _this.pendingEvents.slice(delta - 1, _this.pendingEvents.length - 1);
                    }
                    if (_this.pendingEvents.length === 0) {
                        return;
                    }
                    Mscrm.Utilities.setLocalStorageItemSafely(_this.pendingEventsKey, JSON.stringify(_this.pendingEvents));
                    _this.pendingEvents = [];
                };
                window.addEventListener("beforeunload", this.saveEvents);
                window.addEventListener("unload", this.saveEvents);
                Mscrm.OfficeProvider.subscribeToItemChangedEvent(this.reinitializeOnItemChanged.bind(this));
            }
            TelemetryReporter.getInstance = function () {
                if (!TelemetryReporter.instance) {
                    TelemetryReporter.instance = new TelemetryReporter();
                }
                return TelemetryReporter.instance;
            };
            TelemetryReporter.prototype.start = function () {
                var _this = this;
                this.isSecondaryLoad = window.location.search.indexOf(this.secondaryLoadParam) != -1;
                if (this.isSecondaryLoad) {
                    this.sessionId = window.localStorage.getItem(this.sessionIdKey);
                    this.initTime = window.localStorage.getItem(this.initTimeKey);
                    if (!this.initTime) {
                        this.setInitTime();
                    }
                }
                if (!this.sessionId) {
                    this.sessionId = this.newGuid();
                    this.originalSessionId = this.sessionId;
                    Mscrm.Utilities.setLocalStorageItemSafely(this.sessionIdKey, this.sessionId);
                }
                this.installId = Mscrm.OfficeProvider.getInstallId();
                if (!this.installId) {
                    this.installId = this.newGuid();
                    Mscrm.OfficeProvider.setInstallId(this.installId);
                }
                this.orgId = Mscrm.Boot.activeBootManager.orgId;
                this.makeCorsRequest(window.location.origin + "/nga/version.txt", "GET", null, "text/plain").then(function (xhr) {
                    var version = "";
                    if (xhr.responseText) {
                        version = xhr.responseText.replace(/[^0-9^.]/g, "");
                    }
                    _this.orgVersionPromise.resolve(version);
                }, function () {
                    _this.orgVersionPromise.resolve("");
                });
                this.discoverEndpoint();
                this.loadEvents();
                if (this.isSecondaryLoad) {
                    this.reportSecondaryLoadEvent();
                }
                else {
                    this.reportInitEvent();
                }
            };
            TelemetryReporter.prototype.setInitTime = function () {
                this.initTime = JSON.stringify(new Date()).replace(/"/g, '');
                Mscrm.Utilities.setLocalStorageItemSafely(this.initTimeKey, this.initTime);
            };
            TelemetryReporter.prototype.reinitializeOnItemChanged = function () {
                this.sessionId = this.newGuid();
                Mscrm.Utilities.setLocalStorageItemSafely(this.sessionIdKey, this.sessionId);
                this.setInitTime();
                this.reportEventImmediate(new Telemetry.TelemetryEvent('mailapp_init_pinned', {
                    StartTime: this.initTime,
                    MailAppSessionId: this.originalSessionId
                }));
            };
            TelemetryReporter.prototype.discoverEndpoint = function () {
                var _this = this;
                var onReportingEndpointRetrieved = function () {
                    _this.endpointDiscoveryPromise.resolve(_this.reportingEndpoint);
                    _this.reportPendingEvents();
                    setInterval(_this.reportPendingEvents.bind(_this), _this.reportingInterval);
                };
                this.reportingEndpoint = window.localStorage.getItem(this.endPointKey);
                if (this.reportingEndpoint) {
                    onReportingEndpointRetrieved();
                    return;
                }
                this.makeCorsRequest(this.buildDiscoverEndpoint(), "GET").then(function (xhr) {
                    _this.reportingEndpoint = _this.getReportingEndpointFromDiscoveryResponse(xhr);
                    Mscrm.Utilities.setLocalStorageItemSafely(_this.endPointKey, _this.reportingEndpoint);
                    onReportingEndpointRetrieved();
                }, this.endpointDiscoveryPromise.reject);
            };
            TelemetryReporter.prototype.buildDiscoverEndpoint = function () {
                var port = window.location.port;
                var host = window.location.hostname;
                var orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    orgUrl += ':' + port;
                }
                return 'https://crminsights.crm.dynamics.com/api/Discovery/?originUrl=' + orgUrl;
            };
            TelemetryReporter.prototype.getReportingEndpointFromDiscoveryResponse = function (xhr) {
                if (!xhr.responseText || xhr.responseText === '""') {
                    Mscrm.Logging.Logger.logWarning("Reporting Endpoing not found.", "Telemetry");
                    return "";
                }
                return "https://" + xhr.responseText.replace(/"/g, '') + "/api/crminsightseventdata";
            };
            TelemetryReporter.prototype.makeCorsRequest = function (url, method, data, acceptHeader) {
                var deferred = $.Deferred();
                var onError = function (message, nativeError) {
                    deferred.reject(new Mscrm.Boot.ClientError(message, Mscrm.Boot.ClientError.GenericErrorCode, nativeError));
                    Mscrm.Logging.Logger.logWarning(message, "Telemetry");
                };
                try {
                    var xhr = new XMLHttpRequest();
                    xhr.open(method, url);
                    if (method === 'POST') {
                        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    }
                    if (!acceptHeader) {
                        acceptHeader = "application/json";
                    }
                    xhr.setRequestHeader('accept', acceptHeader);
                    xhr.onload = function () {
                        deferred.resolve(xhr);
                    };
                    xhr.onerror = function () {
                        onError("Telemetry Reporter. XMLHttpRequest transaction failed. Url: " + url);
                    };
                    xhr.send(data);
                }
                catch (e) {
                    onError("Telemetry Reporter. An unexpected error occurred while preforming request.", e);
                }
                return deferred.promise();
            };
            TelemetryReporter.prototype.newGuid = function () {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            };
            TelemetryReporter.prototype.reportPendingEvents = function () {
                var _this = this;
                if (!this.reportingEndpoint) {
                    return;
                }
                if (this.pendingEvents.length === 0) {
                    return;
                }
                var toReport = this.pendingEvents;
                this.pendingEvents = [];
                this.makeCorsRequest(this.reportingEndpoint, "POST", Telemetry.TelemetryEvent.toData(toReport)).fail(function () {
                    _this.pendingEvents.forEach(function (event) {
                        toReport.push(event);
                    });
                    _this.pendingEvents = toReport;
                });
            };
            TelemetryReporter.prototype.reportInitEvent = function () {
                var _this = this;
                var time = new Date();
                this.initTime = JSON.stringify(time).replace(/"/g, '');
                if (window.location.search && window.location.search.length > 0) {
                    var params = {};
                    var paramStr = window.location.search.substr(1);
                    var paramPairs = paramStr.split('&');
                    for (var i = 0; i < paramPairs.length; i++) {
                        var splitPair = paramPairs[i].split('=');
                        params[splitPair[0]] = splitPair[1];
                    }
                }
                Mscrm.Utilities.setLocalStorageItemSafely(this.initTimeKey, this.initTime);
                var diagnostics = Mscrm.OfficeProvider.getDiagnostics();
                this.orgVersionPromise.done(function (orgVersion) {
                    var initEvent = new Telemetry.TelemetryEvent('mailapp_init', {
                        StartTime: _this.initTime,
                        InstallID: _this.installId,
                        OrgId: _this.orgId,
                        OrgVersion: orgVersion,
                        UserAgent: window.navigator.userAgent,
                        HostName: diagnostics.hostName,
                        HostVersion: diagnostics.hostVersion,
                        Mode: Mscrm.Boot.activeBootManager.mode,
                        ItemType: Mscrm.OfficeProvider.getEmailItem() ? Mscrm.OfficeProvider.getEmailItem().itemType : undefined,
                        OWAView: diagnostics.OWAView,
                        DeploymentEnvironment: params['de'],
                        ExchangeDeploymentEnvironment: params['sde'],
                        TimeSinceSessionInit: 0,
                        MailAppSessionId: _this.originalSessionId
                    });
                    _this.reportEventImmediate(initEvent);
                });
            };
            TelemetryReporter.prototype.reportSecondaryLoadEvent = function () {
                var secondaryLoadEvent = new Telemetry.TelemetryEvent('mailapp_secondaryload');
                this.reportEventImmediate(secondaryLoadEvent);
            };
            TelemetryReporter.prototype.reportEvent = function (event) {
                this.pendingEvents.push(event);
            };
            TelemetryReporter.prototype.reportEventImmediate = function (event) {
                var _this = this;
                if (!this.reportingEndpoint) {
                    this.pendingEvents.push(event);
                    return;
                }
                this.makeCorsRequest(this.reportingEndpoint, "POST", event.toData()).fail(function () {
                    _this.pendingEvents.push(event);
                });
            };
            TelemetryReporter.prototype.getSessionId = function () {
                return this.sessionId;
            };
            TelemetryReporter.prototype.getInstallId = function () {
                return this.installId;
            };
            TelemetryReporter.prototype.getInitTime = function () {
                var time = new Date(this.initTime);
                return time.getTime();
            };
            return TelemetryReporter;
        }());
        Telemetry.TelemetryReporter = TelemetryReporter;
    })(Telemetry = Mscrm.Telemetry || (Mscrm.Telemetry = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var UserAgent;
    (function (UserAgent_1) {
        var UserAgent = (function () {
            function UserAgent() {
                this.isBrowserSupportedIE = false;
                this.isBrowserSafari = false;
                this.rawValue = navigator.userAgent;
                var lowerCaseUserAgent = this.rawValue.toLowerCase();
                this.isBrowserIE = (lowerCaseUserAgent.indexOf("msie 10") !== -1 ||
                    lowerCaseUserAgent.indexOf("msie 9.0") !== -1 ||
                    lowerCaseUserAgent.indexOf("trident") !== -1 ||
                    lowerCaseUserAgent.indexOf("edge") !== -1);
                if (this.isBrowserIE) {
                    this.isBrowserSupportedIE = (lowerCaseUserAgent.indexOf('msie') !== -1) ? lowerCaseUserAgent.indexOf('msie 9.0') == -1 && lowerCaseUserAgent.indexOf('msie 10') !== -1 : true;
                }
                this.isBrowserChrome = (lowerCaseUserAgent.indexOf("chrome") !== -1) && !this.isBrowserIE;
                this.isBrowserFirefox = (lowerCaseUserAgent.indexOf("firefox") !== -1);
                if (lowerCaseUserAgent.indexOf("safari") !== -1 && !this.isBrowserIE) {
                    if ((lowerCaseUserAgent.indexOf("chrome") !== -1) || (lowerCaseUserAgent.indexOf("android") !== -1)) {
                        this.isBrowserSafari = false;
                    }
                    else {
                        this.isBrowserSafari = true;
                    }
                }
                this.isIPhone = lowerCaseUserAgent.toLocaleLowerCase().indexOf("iphone") != -1;
                this.isIPad = lowerCaseUserAgent.indexOf("ipad") != -1;
                this.isIPod = lowerCaseUserAgent.indexOf("ipod") != -1;
                this.isAndroid = lowerCaseUserAgent.toLocaleLowerCase().indexOf("android") != -1;
                this.isAndroidPhone = this.isAndroid && lowerCaseUserAgent.indexOf("mobile") !== -1;
                this.isWebKit = lowerCaseUserAgent.indexOf("webkit") !== -1 && !this.isBrowserIE;
                this.isMac = navigator.appVersion.indexOf("Mac") !== -1;
                this.isWindows = (navigator.appVersion.indexOf("Win") != -1) || (navigator.appVersion.indexOf("NT") != -1);
                this.isWindows80 = navigator.appVersion.indexOf("Windows NT 6.2") != -1;
                this.isWindowsDesktop = this.isWindows && navigator.appVersion.indexOf("NT") != -1;
                this.isWindowsPhone = this.isWindows && navigator.appVersion.indexOf("Phone") != -1;
                this.isWindows81 = navigator.appVersion.indexOf("Windows NT 6.3") != -1;
                this.isDesktopOutlook = Mscrm.OfficeProvider.getHostType() == Mscrm.OfficeProvider.HostType.Outlook;
            }
            UserAgent.prototype.parseChromeVersion = function () {
                return this.parseVersionInteger(new RegExp("Chrome/(\\d+)"));
            };
            UserAgent.prototype.parseFirefoxVersion = function () {
                return this.parseVersionInteger(new RegExp("Firefox/(\\d+)"));
            };
            UserAgent.prototype.parseIOSVersion = function () {
                return this.parseVersionInteger(new RegExp("OS (\\d+)_(\\d+)_?(\\d+)?"));
            };
            UserAgent.prototype.parseVersionInteger = function (regExp) {
                var osString = this.rawValue.match(regExp);
                if (osString && osString.length > 1) {
                    var majorVersion = parseInt(osString[1]);
                    return majorVersion;
                }
                return -1;
            };
            UserAgent.prototype.parseSafariVersion = function () {
                var safariString = "Version";
                return this.parseVersionFloat(safariString);
            };
            UserAgent.prototype.parseAndroidVersion = function () {
                var androidString = "Android";
                return this.parseVersionFloat(androidString);
            };
            UserAgent.prototype.parseVersionFloat = function (str) {
                var index = this.rawValue.indexOf(str);
                if (index !== -1) {
                    var version = this.rawValue.substring(index + str.length + 1, index + str.length + 4);
                    return parseFloat(version);
                }
                return -1;
            };
            UserAgent.prototype.getIsBrowserIE = function () {
                return this.isBrowserIE;
            };
            UserAgent.prototype.getIsBrowserChrome = function () {
                return this.isBrowserChrome;
            };
            UserAgent.prototype.getIsBrowserFirefox = function () {
                return this.isBrowserFirefox;
            };
            UserAgent.prototype.getIsBrowserSafari = function () {
                return this.isBrowserSafari;
            };
            UserAgent.prototype.getIsBrowserWebKit = function () {
                return this.isWebKit;
            };
            UserAgent.prototype.getIsBrowserSupportedIE = function () {
                return this.isBrowserSupportedIE;
            };
            UserAgent.prototype.getIsBrowserSupportedChrome = function () {
                return this.checkSupportedVersion(this.isBrowserChrome, this.parseChromeVersion(), 13);
            };
            UserAgent.prototype.getIsBrowserSupportedFirefox = function () {
                return this.checkSupportedVersion(this.isBrowserFirefox, this.parseFirefoxVersion(), 5);
            };
            UserAgent.prototype.getIsBrowserSupportedSafari = function () {
                return this.checkSupportedVersion(this.isBrowserSafari, this.parseSafariVersion(), 5);
            };
            UserAgent.prototype.checkSupportedVersion = function (isBrowser, browserVersion, supportedVersion) {
                if (isBrowser) {
                    return browserVersion >= supportedVersion || browserVersion === -1;
                }
                return false;
            };
            UserAgent.prototype.getIsIPhone = function () {
                return this.isIPhone;
            };
            UserAgent.prototype.getIsIOSSupported = function () {
                return this.checkSupportedVersion(this.isIPhone || this.isIPad || this.isIPod, this.parseIOSVersion(), 5);
            };
            UserAgent.prototype.getIsIPad = function () {
                return this.isIPad;
            };
            UserAgent.prototype.getIsIPod = function () {
                return this.isIPod;
            };
            UserAgent.prototype.getIsAndroidSupported = function () {
                return this.checkSupportedVersion(this.isAndroid, this.parseAndroidVersion(), 4.4);
            };
            UserAgent.prototype.getIsMac = function () {
                return this.isMac;
            };
            UserAgent.prototype.getIsWindows = function () {
                return this.isWindows;
            };
            UserAgent.prototype.getIsWindows80 = function () {
                return this.isWindows80;
            };
            UserAgent.prototype.getIsWindowsDesktop = function () {
                return this.isWindowsDesktop;
            };
            UserAgent.prototype.getIsWindowsPhone = function () {
                return this.isWindowsPhone;
            };
            UserAgent.prototype.getIsWindows81 = function () {
                return this.isWindows81;
            };
            UserAgent.prototype.getIsDesktopOutlook = function () {
                return this.isDesktopOutlook;
            };
            UserAgent.prototype.getIsAndroidPhone = function () {
                return this.isAndroidPhone;
            };
            return UserAgent;
        }());
        UserAgent_1.UserAgent = UserAgent;
        var BrowserValidator = (function () {
            function BrowserValidator() {
                this.userAgent = new UserAgent();
            }
            BrowserValidator.prototype.isBrowserSupported = function () {
                return this.userAgent.getIsBrowserSupportedIE() ||
                    this.userAgent.getIsBrowserSupportedChrome() ||
                    this.userAgent.getIsBrowserSupportedFirefox() ||
                    this.userAgent.getIsBrowserSupportedSafari() ||
                    this.userAgent.getIsDesktopOutlook() ||
                    (this.userAgent.getIsBrowserWebKit() && Mscrm.OfficeProvider.getHostType() === Mscrm.OfficeProvider.HostType.OutlookMobile);
            };
            BrowserValidator.prototype.isBrowserIE = function () {
                return this.userAgent.getIsBrowserIE();
            };
            return BrowserValidator;
        }());
        UserAgent_1.BrowserValidator = BrowserValidator;
        var DeviceValidator = (function () {
            function DeviceValidator() {
                this.userAgent = new UserAgent();
            }
            DeviceValidator.prototype.isDeviceSupported = function () {
                return (this.userAgent.getIsIOSSupported() ||
                    this.userAgent.getIsAndroidSupported() ||
                    this.userAgent.getIsWindows() ||
                    this.userAgent.getIsMac()) &&
                    Mscrm.Boot.activeBootManager.deviceType != Mscrm.DeviceType.Tablet;
            };
            DeviceValidator.prototype.isMobileDevice = function () {
                return this.userAgent.getIsWindowsPhone() || this.userAgent.getIsIPhone() || this.userAgent.getIsAndroidPhone();
            };
            return DeviceValidator;
        }());
        UserAgent_1.DeviceValidator = DeviceValidator;
    })(UserAgent = Mscrm.UserAgent || (Mscrm.UserAgent = {}));
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function (Mscrm) {
    var Utilities;
    (function (Utilities) {
        var XML_ENTITIES = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&apos;'
        };
        var XML_ENTITIES_PATTERN = new RegExp("[<>&\"']", 'g');
        function generateKey() {
            var deferred = $.Deferred();
            var crypt = window.crypto || window.msCrypto;
            if (crypt) {
                var keyTypedAyray = crypt.getRandomValues(new Uint32Array(4));
                var keyArray = Array.prototype.slice.call(keyTypedAyray);
                var key = keyArray.reduce(function (previous, current) {
                    return previous + current.toString(16);
                }, '');
                deferred.resolve(key);
            }
            else {
                var req = new XMLHttpRequest();
                req.open('POST', '/AppWebServices/KeyService.asmx/Hex128');
                req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                req.onreadystatechange = function () {
                    if (req.readyState == XMLHttpRequest.DONE) {
                        try {
                            var res = JSON.parse(req.responseText);
                            var data = res['d'];
                            if (data) {
                                deferred.resolve(data);
                            }
                            else {
                                deferred.reject('Server-side key generation did not return a key');
                            }
                        }
                        catch (e) {
                            deferred.reject('Failed to parse server-side key generation response');
                        }
                    }
                };
                req.send();
            }
            return deferred.promise();
        }
        Utilities.generateKey = generateKey;
        function parseToken(token) {
            var validityError = 'parseToken() requires a valid token';
            try {
                if (!token) {
                    throw validityError;
                }
                var base64Token = token.split('.')[1].replace('_', '/').replace('-', '+');
                return JSON.parse(window.atob(base64Token));
            }
            catch (e) {
                throw validityError;
            }
        }
        Utilities.parseToken = parseToken;
        function IsNetworkAvailable() {
            var resultOnline = false;
            var deferred = $.Deferred();
            if (navigator.onLine !== false) {
                var xhr = new XMLHttpRequest();
                xhr.open("HEAD", window.location.href.split('?')[0] + '?' + Math.random(), false);
                xhr.onload = function (e) {
                    if (xhr.readyState === 4) {
                        var s = xhr.status;
                        resultOnline = ((s >= 200) && (s < 300)) || (s === 304);
                        deferred.resolve(resultOnline);
                    }
                };
                try {
                    xhr.send();
                }
                catch (e) {
                    deferred.resolve(false);
                }
            }
            return deferred.promise();
        }
        Utilities.IsNetworkAvailable = IsNetworkAvailable;
        function setLocalStorageItemSafely(key, data) {
            try {
                window.localStorage.setItem(key, data);
            }
            catch (e) {
                Mscrm.Logging.Logger.logError("Error while storing data to the local storage. Key: " + key + ", Message: " + e.message);
            }
        }
        Utilities.setLocalStorageItemSafely = setLocalStorageItemSafely;
        function escapeXml(xml) {
            return xml.replace(XML_ENTITIES_PATTERN, function (char) { return XML_ENTITIES[char]; });
        }
        Utilities.escapeXml = escapeXml;
        function decodeHtmlEntities(str) {
            var element = document.createElement('span');
            element.innerHTML = str;
            return element.innerText;
        }
        Utilities.decodeHtmlEntities = decodeHtmlEntities;
    })(Utilities = Mscrm.Utilities || (Mscrm.Utilities = {}));
})(Mscrm || (Mscrm = {}));
