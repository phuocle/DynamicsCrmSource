"use strict";
var AuthenticationContext;
AuthenticationContext = function(t) {
        this
            .REQUEST_TYPE = { LOGIN: "LOGIN", RENEW_TOKEN: "RENEW_TOKEN", ID_TOKEN: "ID_TOKEN", UNKNOWN: "UNKNOWN" },
        this
            .CONSTANTS = {
                ACCESS_TOKEN: "access_token",
                EXPIRES_IN: "expires_in",
                ID_TOKEN: "id_token",
                ERROR_DESCRIPTION: "error_description",
                SESSION_STATE: "session_state",
                STORAGE: {
                    TOKEN_KEYS: "adal.token.keys",
                    ACCESS_TOKEN_KEY: "adal.access.token.key",
                    EXPIRATION_KEY: "adal.expiration.key",
                    START_PAGE: "adal.start.page",
                    FAILED_RENEW: "adal.failed.renew",
                    STATE_LOGIN: "adal.state.login",
                    STATE_RENEW: "adal.state.renew",
                    STATE_RENEW_RESOURCE: "adal.state.renew.resource",
                    STATE_IDTOKEN: "adal.state.idtoken",
                    NONCE_IDTOKEN: "adal.nonce.idtoken",
                    SESSION_STATE: "adal.session.state",
                    USERNAME: "adal.username",
                    IDTOKEN: "adal.idtoken",
                    ERROR: "adal.error",
                    ERROR_DESCRIPTION: "adal.error.description",
                    LOGIN_REQUEST: "adal.login.request",
                    LOGIN_ERROR: "adal.login.error"
                },
                RESOURCE_DELIMETER: "|",
                ERR_MESSAGES: { NO_TOKEN: "User is not authorized" },
                CRM: { LOGIN: "Login.html", GETTOKEN: "GetToken.html", LOGOUT: "Logout.html" }
            };
        var e = document.location.hostname, i = e.match(/\.crm[2-9]?\.crmlivetie\.com$/);
        if (i || (i = e.match(/\.crm[2-9]?\.dynamics-int\.com$/)), i || (i = e.match(/\.crm[2-9]?\.dynamics\.com$/)),
            i || (i = [".crm.crmlivetie.com"]), this.CONSTANTS.CRM
                .AUTHSERVICE = "https://port" + i[0] + "/G/ImplicitFlowAuthService/", AuthenticationContext.prototype
                ._singletonInstance) return AuthenticationContext.prototype._singletonInstance;
        if (AuthenticationContext.prototype._singletonInstance = this, this.instance = this.CONSTANTS.CRM
            .AUTHSERVICE, this
            .config = {}, this.callback = null, this.popUp = !1, this._user = null, this._renewActive = !1, this
            ._loginInProgress = !1, this._renewStates = [], t
            .displayCall &&
            "function" != typeof t.displayCall) throw new Error("displayCall is not a function");
        this.config = this._cloneConfig(t), this.config
                .cacheLocation ||
                (this.config.cacheLocation = "localStorage"), this
                .config
                .debug = !1, "localhost" == document.location.hostname && (this.config.debug = !0),
            this.config
                .loginResource ||
                (this.config.loginResource = this.config
                    .clientId), this.config.redirectUri || (this.config.redirectUri = window.location.href), this.config
                .resource = this.config.loginResource || ""
    }, AuthenticationContext.prototype.login = function() {
        var t = this._guid();
        this.config.state = t, this._idTokenNonce = this._guid(), this
            ._logstatus("Expected state: " + t + " startPage:" + window.location), this
            ._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, window.location), this
            ._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, t), this
            ._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN, this._idTokenNonce), this
            ._saveItem(this.CONSTANTS.STORAGE.FAILED_RENEW, ""), this._saveItem(this.CONSTANTS.STORAGE.ERROR, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, "");
        var e = this._getNavigateUrl("id_token", null, this.CONSTANTS.CRM.LOGIN) +
            "&nonce=" +
            encodeURIComponent(this._idTokenNonce);
        this.frameCallInProgress = !1, this
            ._loginInProgress = !0, this.config.displayCall ? this.config.displayCall(e) : this.promptUser(e)
    }, AuthenticationContext.prototype
        .loginInProgress = function() { return this._loginInProgress }, AuthenticationContext
        .prototype._hasResource = function(t) {
            var e = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);
            return e && !this._isEmpty(e) && e.indexOf(t + this.CONSTANTS.RESOURCE_DELIMETER) > -1
        }, AuthenticationContext.prototype.getCachedToken = function(t) {
        if (!this._hasResource(t)) return null;
        var e = this._getItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + t),
            i = this._getItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + t),
            s = this.config.expireOffsetSeconds || 120;
        return i && i > this._now() + s
            ? e
            : (this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + t, ""), this
                ._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + t, 0), null)
    }, AuthenticationContext.prototype.getCachedUser = function() {
        if (this._user) return this._user;
        var t = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);
        return this._user = this._createUser(t), this._user
    }, AuthenticationContext.prototype._renewToken = function(t, e) {
        if (this._logstatus("renewToken is called for resource:" + t), !this._hasResource(t)) {
            var i = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || "";
            this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, i + t + this.CONSTANTS.RESOURCE_DELIMETER)
        }
        var s = this._addAdalFrame("adalRenewFrame");
        this._idTokenNonce = this._guid(), this.config.state = this._guid();
        var o = this.config.state + "|" + t;
        this._renewStates.push(o), this._saveItem(this.CONSTANTS.STORAGE.FAILED_RENEW, ""), this
            ._logstatus("Renew token Expected state: " + o);
        var n = this._getNavigateUrl("token", t, this.CONSTANTS.CRM.GETTOKEN) +
            "&prompt=none&login_hint=" +
            encodeURIComponent(this._user.userName);
        n += "&domain_hint=" + encodeURIComponent(this._getDomainHint()), n +=
            "&nonce=" + encodeURIComponent(this._idTokenNonce), this.callback = e, this.idTokenNonce = null, this
            ._logstatus("Navigate to:" + n), this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, ""), s
            .src = "about:blank", this._loadFrame(n, "adalRenewFrame")
    }, AuthenticationContext.prototype._renewIdToken = function(t) {
        if (this._logstatus("renewIdToken is called"), !this._hasResource(this.config.clientId)) {
            var e = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || "";
            this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,
                e + this.config.clientId + this.CONSTANTS.RESOURCE_DELIMETER)
        }
        var i = this._addAdalFrame("adalIdTokenFrame");
        this._idTokenNonce = this._guid(), this._saveItem(this.CONSTANTS.STORAGE
            .NONCE_IDTOKEN,
            this._idTokenNonce), this
            .config.state = this._guid();
        var s = this.config.state + "|" + this.config.clientId;
        this._renewStates.push(s), this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, s), this
            ._saveItem(this.CONSTANTS.STORAGE.FAILED_RENEW, ""), this._logstatus("Renew token Expected state: " + s);
        var o = this._getNavigateUrl("id_token", null, this.CONSTANTS.CRM.LOGIN) +
            "&prompt=none&login_hint=" +
            encodeURIComponent(this._user.userName);
        o += "&domain_hint=" + encodeURIComponent(this._getDomainHint()), o +=
            "&nonce=" + encodeURIComponent(this._idTokenNonce), this.callback = t, this.idTokenNonce = null, this
            ._logstatus("Navigate to:" + o), this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST, ""), i
            .src = "about:blank", this._loadFrame(o, "adalIdTokenFrame")
    }, AuthenticationContext.prototype._loadFrame = function(t, e) {
        var i = this;
        i._logstatus("LoadFrame: " + e);
        var s = e;
        setTimeout(function() {
                var e = i._addAdalFrame(s);
                ("" === e.src || "about:blank" === e.src) && (e.src = t, i._loadFrame(t, s))
            },
            500)
    }, AuthenticationContext.prototype.acquireToken = function(t, e) {
        if (this._isEmpty(t)) return void e("resource is required", null);
        var i = this.getCachedToken(t);
        return i
            ? (this._logstatus("Token in cache"), void e(null, i))
            : this._getItem(this.CONSTANTS.STORAGE.FAILED_RENEW)
            ? (this
                ._logstatus("renewToken is failed:" + this._getItem(this.CONSTANTS.STORAGE.FAILED_RENEW)), void
                e(this._getItem(this.CONSTANTS.STORAGE.FAILED_RENEW), null))
            : (this._user = this.getCachedUser(), this._user
                ? (this._renewActive = !0, void(t === this.config.clientId
                    ? (this._logstatus("renewing idtoken"), this._renewIdToken(e))
                    : this._renewToken(t, e)))
                : void e("User login is required", null))
    }, AuthenticationContext.prototype.promptUser = function(t) {
        t ? (this._logstatus("Navigate to:" + t), window.location.replace(t)) : this._logstatus("Navigate url is empty")
    }, AuthenticationContext.prototype.clearCache = function() {
        this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY, 0), this
            ._saveItem(this.CONSTANTS.STORAGE.FAILED_RENEW, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN, ""), this._renewStates = [], this
            ._saveItem(this.CONSTANTS.STORAGE.STATE_IDTOKEN, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.START_PAGE, ""), this._saveItem(this.CONSTANTS.STORAGE.USERNAME, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, ""), this._saveItem(this.CONSTANTS.STORAGE.ERROR, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, "");
        var t = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);
        if (!this._isEmpty(t)) {
            t = t.split(this.CONSTANTS.RESOURCE_DELIMETER);
            for (var e = 0; e < t.length; e++)
                this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + t[e], ""), this
                    ._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + t[e], 0)
        }
        this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, "")
    }, AuthenticationContext.prototype.clearCacheForResource = function(t) {
        this._saveItem(this.CONSTANTS.STORAGE.FAILED_RENEW, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.STATE_IDTOKEN, ""), this._saveItem(this.CONSTANTS.STORAGE.ERROR, ""), this
            ._saveItem(this.CONSTANTS.STORAGE
                .ERROR_DESCRIPTION,
                ""), this._hasResource(t) &&
        (this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + t, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + t, 0))
    }, AuthenticationContext.prototype.logOut = function() {
        this.clearCache(), this._user = null;
        var t = "";
        this.config.postLogoutRedirectUri &&
            (t = "&post_logout_redirect_uri=" + encodeURIComponent(this.config.postLogoutRedirectUri));
        var e = this._getNavigateUrl("Logout", null, this.CONSTANTS.CRM.LOGOUT) + t;
        this._logstatus("Logout navigate to: " + e), this.promptUser(e)
    }, AuthenticationContext.prototype
        ._isEmpty = function(t) { return"undefined" == typeof t || !t || 0 === t.length }, AuthenticationContext
        .prototype
        .getUser = function(t) {
            if ("function" != typeof t) throw new Error("callback is not a function");
            if (this.callback = t, this._user) return void this.callback(null, this._user);
            var e = this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);
            this._isEmpty(e)
                ? this.callback("User information is not available")
                : (this._logstatus("User exists in cache: "), this._user = this._createUser(e), this
                    .callback(null, this._user))
        }, AuthenticationContext.prototype._getDomainHint = function() {
        if (this._user && this._user.userName && this._user.userName.indexOf("@") > -1) {
            var t = this._user.userName.split("@");
            return t[t.length - 1]
        }
        return""
    }, AuthenticationContext.prototype._createUser = function(t) {
        var e = null, i = this._extractIdToken(t);
        return i &&
            i.hasOwnProperty("aud") &&
            (i.aud.toLowerCase() === this.config.clientId.toLowerCase()
                ? (e = { userName: "", profile: i }, i.hasOwnProperty("upn")
                    ? e.userName = i.upn
                    : i.hasOwnProperty("email") && (e.userName = i.email))
                : this._logstatus("IdToken has invalid aud field")), e
    }, AuthenticationContext.prototype._getHash = function(t) {
        return t
            .indexOf("#/") >
            -1
            ? t = t.substring(t.indexOf("#/") + 2)
            : t.indexOf("#") > -1 && (t = t.substring(1)), t
    }, AuthenticationContext.prototype.isCallback = function(t) {
        t = this._getHash(t);
        var e = this._deserialize(t);
        return e.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) ||
            e.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) ||
            e.hasOwnProperty(this.CONSTANTS.ID_TOKEN)
    }, AuthenticationContext.prototype.getLoginError = function() {
        return this._getItem(this.CONSTANTS.STORAGE.LOGIN_ERROR)
    }, AuthenticationContext.prototype.getRequestInfo = function(t) {
        t = this._getHash(t);
        var e = this._deserialize(t),
            i = {
                valid: !1,
                parameters: {},
                stateMatch: !1,
                stateResponse: "",
                requestType: this.REQUEST_TYPE
                    .UNKNOWN
            };
        if (e &&
        (i.parameters = e, e.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION) ||
            e.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) ||
            e.hasOwnProperty(this.CONSTANTS.ID_TOKEN))) {
            i.valid = !0;
            var s = "";
            switch (e.hasOwnProperty("state")
                ? (this._logstatus("State: " + e.state), s = e.state)
                : this._logstatus("No state returned"), i.stateResponse = s, s) {
            case this._getItem(this.CONSTANTS.STORAGE.STATE_LOGIN):
                i.requestType = this.REQUEST_TYPE.LOGIN, i.stateMatch = !0;
                break;
            case this._getItem(this.CONSTANTS.STORAGE.STATE_IDTOKEN):
                i.requestType = this.REQUEST_TYPE.ID_TOKEN, this._saveItem(this.CONSTANTS.STORAGE.STATE_IDTOKEN, ""), i
                    .stateMatch = !0
            }
            if (!i.stateMatch && window.parent && window.parent.AuthenticationContext())
                for (var o = window.parent.AuthenticationContext()._renewStates, n = 0; n < o.length; n++)
                    if (o[n] === i.stateResponse) {
                        i.requestType = this.REQUEST_TYPE.RENEW_TOKEN, i.stateMatch = !0;
                        break
                    }
        }
        return i
    }, AuthenticationContext.prototype._getResourceFromState = function(t) {
        if (t) {
            var e = t.indexOf("|");
            if (e > -1 && e + 1 < t.length) return t.substring(e + 1)
        }
        return""
    }, AuthenticationContext.prototype.saveTokenFromHash = function(t) {
        if (this._logstatus("State status:" + t.stateMatch), this._saveItem(this.CONSTANTS.STORAGE.ERROR, ""), this
            ._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION, ""), t.parameters
            .hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION))
            this._logstatus("Error :" + t.parameters.error), this
                ._logstatus("Error description:" + t.parameters[this.CONSTANTS.ERROR_DESCRIPTION]), this
                ._saveItem(this.CONSTANTS.STORAGE.FAILED_RENEW, t.parameters[this.CONSTANTS.ERROR_DESCRIPTION]), this
                ._saveItem(this.CONSTANTS.STORAGE.ERROR, t.parameters.error), this
                ._saveItem(this.CONSTANTS.STORAGE
                    .ERROR_DESCRIPTION,
                    t.parameters[this.CONSTANTS
                        .ERROR_DESCRIPTION]), t.requestType === this.REQUEST_TYPE.LOGIN
                ? (this._loginInProgress = !1, this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,
                    t.parameters.errorDescription))
                : this._renewActive = !1;
        else if (t.stateMatch) {
            this._logstatus("State is right"), t.parameters.hasOwnProperty(this.CONSTANTS.SESSION_STATE) &&
                this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE, t.parameters[this.CONSTANTS.SESSION_STATE]);
            var e, i;
            t.parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN) &&
            (this._logstatus("Fragment has access token"), this._renewActive = !1, i = this.config
                    .loginResource, this._hasResource(i) ||
                (e = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || "", this
                    ._saveItem(this.CONSTANTS.STORAGE
                        .TOKEN_KEYS,
                        e + i + this.CONSTANTS.RESOURCE_DELIMETER)),
                t
                    .requestType ===
                    this.REQUEST_TYPE.RENEW_TOKEN &&
                    (i = this._getResourceFromState(t.stateResponse)), this
                    ._saveItem(this.CONSTANTS.STORAGE
                        .ACCESS_TOKEN_KEY +
                        i,
                        t.parameters[this.CONSTANTS.ACCESS_TOKEN]), this
                    ._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + i,
                        this._expiresIn(t.parameters[this.CONSTANTS
                            .EXPIRES_IN]))), t.parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN) &&
            (this._loginInProgress = !1, this._user = this
                ._createUser(t.parameters[this.CONSTANTS
                    .ID_TOKEN]), this._user &&
                this._user.profile &&
                (this._user.profile.nonce !== this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN)
                    ? (this._user = null, this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,
                        "Nonce is not same as " + this._idTokenNonce))
                    : (this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN, t.parameters[this.CONSTANTS.ID_TOKEN]), i = this
                        .config.clientId, this._hasResource(i) ||
                    (e = this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS) || "", this
                        ._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS, e + i + this.CONSTANTS.RESOURCE_DELIMETER)), this
                        ._saveItem(this.CONSTANTS.STORAGE
                            .ACCESS_TOKEN_KEY +
                            i,
                            t.parameters[this.CONSTANTS.ID_TOKEN]), this
                        ._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY + i, this._user.profile.exp))))
        } else
            this._saveItem(this.CONSTANTS.STORAGE.ERROR, "Invalid_state"), this
                ._saveItem(this.CONSTANTS.STORAGE
                    .ERROR_DESCRIPTION,
                    "Invalid_state"), t.requestType === this.REQUEST_TYPE.LOGIN &&
                this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR, "State is not same as " + t.stateResponse)
    }, AuthenticationContext.prototype.getResourceForEndpoint = function(t) {
        if (this.config && this.config.endpoints)
            for (var e in this.config.endpoints) if (t.indexOf(e) > -1) return this.config.endpoints[e];
        return this.config.loginResource
    }, AuthenticationContext.prototype.handleWindowCallback = function() {
        var t = window.location.hash;
        if (this.isCallback(t)) {
            var e = this.getRequestInfo(t);
            this.saveTokenFromHash(e);
            var i = null;
            if (e.requestType !== this.REQUEST_TYPE.RENEW_TOKEN && e.requestType !== this.REQUEST_TYPE.ID_TOKEN ||
                !window.parent
                ? window && window.oauth2Callback && (console.log("Window is redirecting"), i = this.callback)
                : (console.log("Window is in iframe"), i = window.parent.AuthenticationContext().callback, window
                    .src = ""), window.location.hash = "", window.location = this
                ._getItem(this.CONSTANTS.STORAGE
                    .LOGIN_REQUEST), e
                .requestType ===
                this.REQUEST_TYPE.RENEW_TOKEN)
                return void i(this._getItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION),
                    e.parameters[this.CONSTANTS.ACCESS_TOKEN]);
            if (e.requestType === this.REQUEST_TYPE.ID_TOKEN)
                return void i(this._getItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION),
                    this._createUser(this._getItem(this.CONSTANTS.STORAGE.IDTOKEN)))
        }
    }, AuthenticationContext.prototype._getNavigateUrl = function(t, e, i) {
        var s = this.CONSTANTS.CRM.AUTHSERVICE +
            i +
            this._serialize(t, this.config, e) +
            "&configuration_parameters=true";
        return this.config.debug && (s += "&debug=" + this.config.debug), console.log("Navigate url:" + s), s
    }, AuthenticationContext.prototype._extractIdToken = function(t) {
        var e = this._decodeJwt(t);
        if (!e) return null;
        try {
            var i = e.JWSPayload, s = this._base64DecodeStringUrlSafe(i);
            return s
                ? JSON.parse(s)
                : (this._logstatus("The returned id_token could not be base64 url safe decoded."), null)
        } catch (o) {
            this._logstatus("The returned id_token could not be decoded: " + o.stack)
        }
        return null
    }, AuthenticationContext.prototype._extractUserName = function(t) {
        try {
            var e = this._extractIdToken(t);
            if (e) {
                if (e.hasOwnProperty("upn")) return e.upn;
                if (e.hasOwnProperty("email")) return e.email
            }
        } catch (i) {
            this._logstatus("The returned id_token could not be decoded: " + i.stack)
        }
        return null
    }, AuthenticationContext.prototype
        ._base64DecodeStringUrlSafe = function(t) {
            return t = t.replace(/-/g, "+")
                .replace(/_/g, "/"), window.atob
                ? decodeURIComponent(escape(window.atob(t)))
                : (this._logstatus("Browser is not supported"), null)
        }, AuthenticationContext.prototype._decodeJwt = function(t) {
        var e = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, i = e.exec(t);
        if (!i || i.length < 4) return this._logstatus("The returned id_token is not parseable."), null;
        var s = { header: i[1], JWSPayload: i[2], JWSSig: i[3] };
        return s
    }, AuthenticationContext.prototype
        ._convertUrlSafeToRegularBase64EncodedString = function(t) { return t.replace("-", "+").replace("_", "/") },
    AuthenticationContext.prototype._serialize = function(t, e, i) {
        var s = [];
        if (null !== e) {
            s.push("#response_type=" + t), s
                .push("client_id=" + encodeURIComponent(e.clientId)), i && s.push("resource=" + encodeURIComponent(i)),
            s
                .push("redirect_uri=" + encodeURIComponent(e.redirectUri)), s
                .push("state=" + encodeURIComponent(e.state)), e.hasOwnProperty("slice") &&
                s
                .push("slice=" + encodeURIComponent(e.slice)), e.hasOwnProperty("extraQueryParameter") &&
                s.push(e.extraQueryParameter);
            var o = "common";
            e.tenant && (o = e.tenant), s.push("tenant=" + encodeURIComponent(o))
        }
        return s.join("&")
    }, AuthenticationContext.prototype._deserialize = function(t) {
        var e,
            i = /\+/g,
            s = /([^&=]+)=?([^&]*)/g,
            o = function(t) {
                return decodeURIComponent(t
                    .replace(i, " "))
            },
            n = {};
        for (e = s.exec(t); e;) n[o(e[1])] = o(e[2]), e = s.exec(t);
        return n
    }, AuthenticationContext.prototype._guid = function() {
        for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", e = "0123456789abcdef", i = 0, s = "", o = 0;
            36 > o;
            o++
        )
            "-" !== t[o] && "4" !== t[o] && (i = 16 * Math.random() | 0),
                "x" === t[o] ? s += e[i] : "y" === t[o] ? (i &= 3, i |= 8, s += e[i]) : s += t[o];
        return s
    }, AuthenticationContext.prototype
        ._expiresIn = function(t) { return this._now() + parseInt(t, 10) }, AuthenticationContext.prototype
        ._now = function() { return Math.round((new Date).getTime() / 1e3) }, AuthenticationContext.prototype
        ._addAdalFrame = function(t) {
            if ("undefined" != typeof t) {
                this._logstatus("Add adal frame to document:" + t);
                var e = document.getElementById(t);
                if (!e) {
                    if (document.createElement &&
                        document.documentElement &&
                        (window.opera || -1 === window.navigator.userAgent.indexOf("MSIE 5.0"))) {
                        var i = document.createElement("iframe");
                        i.setAttribute("id", t), i.style.visibility = "hidden", i.style.position = "absolute", i.style
                            .width = i.style.height = i.borderWidth = "0px", e = document
                            .getElementsByTagName("body")[0]
                            .appendChild(i)
                    } else
                        document.body &&
                            document.body.insertAdjacentHTML &&
                            document.body.insertAdjacentHTML("beforeEnd",
                                '<iframe name="' + t + '" id="' + t + '" style="display:none"></iframe>');
                    window.frames && window.frames[t] && (e = window.frames[t])
                }
                return e
            }
        }, AuthenticationContext.prototype._logstatus = function(t) { console && console.log(t) }, AuthenticationContext
        .prototype._saveItem = function(t, e) {
            return this.config && this.config.cacheLocation && "localStorage" === this.config.cacheLocation
                ? this._supportsLocalStorage()
                ? (localStorage.setItem(t, e), !0)
                : (this._logStatus("Local storage is not supported"), !1)
                : this._supportsSessionStorage()
                ? (sessionStorage.setItem(t, e), !0)
                : (this._logstatus("Session storage is not supported"), !1)
        }, AuthenticationContext.prototype._getItem = function(t) {
        return this.config && this.config.cacheLocation && "localStorage" === this.config.cacheLocation
            ? this._supportsLocalStorage()
            ? localStorage.getItem(t)
            : (this._logstatus("Local storage is not supported"), null)
            : this._supportsSessionStorage()
            ? sessionStorage.getItem(t)
            : (this._logstatus("Session storage is not supported"), null)
    }, AuthenticationContext.prototype._supportsLocalStorage = function() {
        try {
            return"localStorage" in window && window.localStorage
        } catch (t) {
            return!1
        }
    }, AuthenticationContext.prototype._supportsSessionStorage = function() {
        try {
            return"sessionStorage" in window && window.sessionStorage
        } catch (t) {
            return!1
        }
    }, AuthenticationContext.prototype._cloneConfig = function(t) {
        if (null === t || "object" != typeof t) return t;
        var e = {};
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e
    }, AuthenticationContext.prototype._libVersion = function() { return"1.0.0" }, AuthenticationContext.prototype
        ._addClientId = function() { return"&x-client-SKU=Js&x-client-Ver=" + this._libVersion() };