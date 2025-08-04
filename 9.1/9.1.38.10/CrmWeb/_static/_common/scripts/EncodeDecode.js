// ////////////////////////////////////////////////////////////////////////////////////////////////
// Following is the CRM Encoding Decoding functions
// We have this Wrapper so that we can change the encoding decoding in one single place if needed
// ////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////
// CHANGE HISTORY:
// CRM SE 4330 : V4: Web Client hangs on high cpu usage when saving/sending an email with a large body
// Chandraa 02/22/2008
// ////////////////////////////////////////////////////////////////////////////////////////////////

// Decode URLs
function _crmUrlDecode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    //Have to compensate for %uNNNN style encoding produced by AntiXss.UrlEncode
    // decode numeric encoded sequences
    // decimal encoded
    s = s.replace(/%u[a-fA-F0-9]{4}/g, function ($1){return String.fromCharCode(parseInt($1.substr(2, $1.length-2), 16));});
    //use decodeURIComponent to decode the string
    return decodeURIComponent(s);
}

// There is a copy of this function, called _crmUrlEncodeIE7, that uses IE7 specific implementation of URL encoding.
// Please keep both functions in sync
function _crmUrlEncode(s)
{
     if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}

     s = _UrlEncode(s);
          
     // This is a workaround for a known issue where extended characters are encoded as
     // %uNNNN instead of %NN%NN.  We search for the incorrect encoding and replace it
     // with the correct encoding.

     // First we search for supplemental characters, which have to be encoded simultaneously.
     // The range for supplemental characters is:
     // First char:  0xD800 - 0xDBFF
     // Second char: 0xDC00 - 0xDFFF
     s = s.replace(/%u[dD][89aAbB][a-fA-F0-9]{2}%u[dD][cCdDeEfF][a-fA-F0-9]{2}/g, function ($1){
        return encodeURIComponent(String.fromCharCode(parseInt($1.substring(2, 6), 16)) + String.fromCharCode(parseInt($1.substring(8), 16)));
     });
     
     // Now we search for any remaining %uNNNN encodings.
     s = s.replace(/%u[a-fA-F0-9]{4}/g, function ($1){return encodeURIComponent(String.fromCharCode(parseInt($1.substr(2, $1.length-2), 16)));});
     
     return s;
}

// This function is a copy of the function _crmUrlEncode with the only difference that it calls _UrlEncodeIE7 instead of _UrlEncode
// Please keep both functions in sync
function _crmUrlEncodeIE7(s)
{
     if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}

     s = _UrlEncodeIE7(s);
          
     // This is a workaround for a known issue where extended characters are encoded as
     // %uNNNN instead of %NN%NN.  We search for the incorrect encoding and replace it
     // with the correct encoding.

     // First we search for supplemental characters, which have to be encoded simultaneously.
     // The range for supplemental characters is:
     // First char:  0xD800 - 0xDBFF
     // Second char: 0xDC00 - 0xDFFF
     s = s.replace(/%u[dD][89aAbB][a-fA-F0-9]{2}%u[dD][cCdDeEfF][a-fA-F0-9]{2}/g, function ($1){
        return encodeURIComponent(String.fromCharCode(parseInt($1.substring(2, 6), 16)) + String.fromCharCode(parseInt($1.substring(8), 16)));
     });
     
     // Now we search for any remaining %uNNNN encodings.
     s = s.replace(/%u[a-fA-F0-9]{4}/g, function ($1){return encodeURIComponent(String.fromCharCode(parseInt($1.substr(2, $1.length-2), 16)));});
     
     return s;
}

// Encodes strings for name=value&name=value pair usage.
function _crmNameValueEncode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    // We are encoding the name and value for safe usage in name=value&name=value...
    // UrlEncode already does this so we reuse it.
    return CrmEncodeDecode.CrmUrlEncode(s);
}

// Decodes strings used as name, value in name=value&name=value... pairs.
function _crmNameValueDecode(s)
{   
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    // The name=value&name=value... are encoded using UrlEncode so decode it with UrlDecode
    return CrmEncodeDecode.CrmUrlDecode(s);
}

// Decodes a complete string or only the specified character
// Params: s - string to decode
//          charToDecode - character that needs to be decoded, if null or not present all chars are decoded.
function _crmXmlDecode(s, charToDecode)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    
    if(typeof(charToDecode) != "undefined" && charToDecode != null)
    {
        //only one char needs to be decoded
        if(charToDecode.length > 1) charToDecode = charToDecode.charAt(0);
        var sEncodedChar = _XmlEncode(charToDecode);
        var rex = new RegExp(sEncodedChar, "g");
        s = s.replace(rex, charToDecode);
        
        //additionaly decode the forms &lt;&gt;&amp;&quot;&apos;
        switch(charToDecode)
        {
            case "<":
                s = s.replace(/&lt;/g, "<");
                break;
            case ">":
                s = s.replace(/&gt;/g, ">");
                break;
            case "&":
                s = s.replace(/&amp;/g, "&");
                break;
            case "\"":
                s = s.replace(/&quot;/g, "\"");
                break;
            case "'":
                s = s.replace(/&apos;/g, "'");
                break;
        }
        return s;
    }

    // Decode all encoded chars
    s = s.replace(/&[^;]+;/g, function ($1) {
        // Decode special encoding sequences
        switch($1)
        {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&amp;":
                return "&";
            case "&quot;":
                return "\"";
            case "&apos;":
                return "'" ;
        }

        // decode numeric encoded sequences
        // decimal encoded
    	if ($1.match(/&#[0-9]+;/g))
    	{
    	    return _crmCharCodeToChar($1.substr(2, $1.length - 3));
    	}

        // hex encoded
    	if ($1.match(/&#x[a-fA-F0-9]+;/g))
    	{
    	    return _crmCharCodeToChar(parseInt($1.substr(3, $1.length - 4), 16));
    	}

    	return $1;
    });

    return s;
}

// Converts char code into char.
function _crmCharCodeToChar(charCode) {
	if (charCode > 0xFFFF && charCode < 0x110000) {
		charCode -= 0x10000;
		return String.fromCharCode(0xD800 + (charCode >> 10), 0xDC00 + (charCode & 0x3FF));
	}
	else {
		return String.fromCharCode(charCode);
	}
}

// Encodes a single or all characters in a string for usage in Xml elements
// Param charToEncode is optional. If null or not passed in then all characters are encoded
function _crmXmlEncode(s, charToEncode)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    if(typeof(charToEncode) != "undefined" && charToEncode != null)
    {
        //only one char needs to be encoded
        if(charToEncode.length > 1) charToEncode = charToEncode.charAt(0);
        var sEncodedChar = _XmlEncode(charToEncode);
        var rex = new RegExp(charToEncode, "g");
        return s.replace(rex, sEncodedChar);
    }
    
    return _surrogateAmpersandWorkaround(s, _XmlEncode);
}

function _crmHtmlEncode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    return _surrogateAmpersandWorkaround(s, _HtmlEncode);
}

function _crmHtmlEncodeForFormatString(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    s = _surrogateAmpersandWorkaround(s, _HtmlEncode);
    return s.replace(/&#123;/g, "{").replace(/&#125;/g, "}");
}

/// <summary>
/// Encodes into HTML which is Specific for encoding the plugin trace.
/// </summary>
/// <param name="trace">Plugin trace to be encoded</param>
/// <returns>HTML Encoded string</returns>
function _crmPluginTraceHtmlEncode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    s = _crmHtmlEncode(s);  // Safely encode
    s = s.replace(/ /g, "&nbsp;"); 	// preserve spaces for correct indentation.
	s = s.replace(/&#9;/g, "&nbsp;&nbsp;&nbsp;&nbsp;"); 	// Allow \t for indentations. Safe for HTML and JS
	s = s.replace(/&#10;/g, "<br/>"); 	// Allow line breaks. Safe for HTML and JS
	s = s.replace(/&#20;/g, "&nbsp;"); // This will force any line of HTML to be displayed in a single line until hitting <br/> or </p>

	return s;
}
		
function _crmHtmlAttributeEncode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    
    return _surrogateAmpersandWorkaround(s, _HtmlAttributeEncode);
}

function _crmXmlAttributeEncode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    
    return _surrogateAmpersandWorkaround(s, _XmlAttributeEncode);
}

function _crmJavaScriptEncode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    return _JavaScriptEncode(s);
}

function _crmVisualBasicScriptEncode(s)
{
    if(IsNull(s)){return s;}else{if(typeof(s) != "string"){s = s.toString();}}
    return _VisualBasicScriptEncode(s);
}

// When encoding surrogate characters, AntiXSS incorrectly encodes them in the format
// "&#55360;&#56579;" instead of the correct format "&#x20103;".  This function is a
// workaround for all encodings of this form.
//
// s is the string to encode.
// encodingFunction is the function used to encode the rest of the string.
function _surrogateAmpersandWorkaround(s, encodingFunction)
{   
    // Encode surrogate pairs in Unicode scalar value
    s = s.replace(new RegExp("([\\uD800-\\uDBFF][\\uDC00-\\uDFFF])", "g"), function ($1){return "CRMEntityReferenceOpen" + ((($1.charCodeAt(0) - 0xD800) * 0x400) + ($1.charCodeAt(1) & 0x03FF) + 0x10000).toString(16) + "CRMEntityReferenceClose";});
    
    // Fix issue 12224: sometimes the user just puts invalid surrogate pairs (The correct surrogate pair: Low Surrogate followed by High Surrogate). 
    // We need to replace the character with Replacement character #UFFFD. This character is used to replace incoming character whose value is unknown
    s = s.replace(new RegExp("[\\uD800-\\uDFFF]", "g"), '\uFFFD');
    
    //encode whole string
    s = encodingFunction(s);
    s = s.replace(/CRMEntityReferenceOpen/g, "&#x");
    s = s.replace(/CRMEntityReferenceClose/g, ";");
    return s;
}

function CrmEncodeDecodeLibrary()
{
    //encoding methods
    this.CrmHtmlEncode = _crmHtmlEncode;
    this.CrmHtmlAttributeEncode = _crmHtmlAttributeEncode;
    this.CrmXmlEncode = _crmXmlEncode;
    this.CrmXmlAttributeEncode = _crmXmlAttributeEncode;
    this.CrmJavaScriptEncode = _crmJavaScriptEncode;
    this.CrmVisualBasicScriptEncode = _crmVisualBasicScriptEncode;
    this.CrmUrlEncode = _crmUrlEncode;
    this.CrmUrlEncodeIE7 = _crmUrlEncodeIE7;
    this.CrmNameValueEncode = _crmNameValueEncode;
    this.CrmHtmlEncodeForFormatString = _crmHtmlEncodeForFormatString;
    this.CrmPluginTraceHtmlEncode = _crmPluginTraceHtmlEncode;
    
    //decoding methods
    this.CrmXmlDecode = _crmXmlDecode;
    //for htmldecode we reuse xmldecode since the encoding is the same
    this.CrmHtmlDecode = _crmXmlDecode;
    this.CrmUrlDecode = _crmUrlDecode;
    this.CrmNameValueDecode = _crmNameValueDecode;
}
//Use the following object for performing all encoding/decoding in CRM client side code
var CrmEncodeDecode = new CrmEncodeDecodeLibrary();



// End of CrmEncodeDecode Library functions
// ///////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
// Do not change any code below this, the code below is from the AntiXss Library team
// CRM uses a wrapper for this make any adjustments to encoding decoding in the wrapper not
// in the functions below. The code below can/will be updated with latest code from the
// AntiXss Team. (The only change made to this library func is CRM SE 4330 changes to buffer the
// input strings into chunks of 500 for performance reasons without which encoding 50 K 
// input takes about 13 minutes or so and with chunking it takes about 10 seconds instead.)
// CRM SE 4330 Changes can be reverted once AntiXSS team updates their tool box solution
// with our 4330 fix.
// ***********************************************************
// *
// * AntiXSS Library
// *
// ***********************************************************
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// Changes
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// 02-26-08: chandraa:  Fixed a performance problem of string 
//                      concatenation (CRM SE 4330)
// 06-09-06: hassank:   Corrected URL REGEX
// 04-07-04: talhahm:   Added checks for null inputs
// 07-24-03: eddington: Quick port to ASP Javascript
// 03-26-03: v-michae:  Initial revision based on ASP classic
// 03-28-03: v-michae:  Initial testing of functions done.
// 06-01-03: erach:     AsUrl temporarily stubbed out for
//                      0.9 release
// 10-29-03: erach:     AsUrl implemented introduced
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// The code is duplicated temporarily in  \\Application\web\wwwroot\_static\_common\scripts\perceivedRibbon.js with fix for CRM SE 30607. 
// It is put there because global.ashx is not loaded in time for the perceivedRibbon code to call it.  
// The issue should be resolved in the future when encode/decode library will be put into a script that can be loaded first (the tracking bug Microsoft CRM 185754).
// Please consider that fact and either duplicate all changes done there or remove the duplicate functions as well as corresponding comments when it is done.
function _HtmlEncode( strInput )
{   
    var c;
    var HtmlEncode = '';
    var buffer = '';
    var bufferLength = 500;
    var count = 0;
    
    if(strInput == null)
    {
        return null;
    }
    if (strInput == '')
    {
        return '';
    }
    // 4330 - buffer the concatenated string in chunks of 500 and then add it to the larger string.
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);
        
        if (( ( c > 96 ) && ( c < 123 ) ) ||
            ( ( c > 64 ) && ( c < 91 ) ) ||
            ( c == 32 ) ||
            ( ( c > 47 ) && ( c < 58 ) ) ||
            ( c == 46 ) ||
            ( c == 44 ) ||
            ( c == 45 ) ||
            ( c == 95 ))
        {
            buffer += String.fromCharCode(c);           
        }
        else
        {
            buffer += '&#' + c + ';';           
        }

        if (++count == bufferLength)
        {
            HtmlEncode += buffer;
            buffer = '';
            count = 0;
        }
    }
    
    if (buffer.length) 
    {
        HtmlEncode += buffer;
    }

    return HtmlEncode;
}

function _HtmlAttributeEncode( strInput )
{
    var c;
    var HtmlAttributeEncode = '';

    if(strInput == null)
    {
        return null;
    }
    if (strInput == '')
    {
        return '';
    }
    
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);

        if (( ( c > 96 ) && ( c < 123 ) ) ||
            ( ( c > 64 ) && ( c < 91 ) ) ||
            ( ( c > 47 ) && ( c < 58 ) ) ||
            ( c == 46 ) ||
            ( c == 44 ) ||
            ( c == 45 ) ||
            ( c == 95 ))
        {
            HtmlAttributeEncode = HtmlAttributeEncode + String.fromCharCode(c);
        }
        else
        {
            HtmlAttributeEncode = HtmlAttributeEncode + '&#' + c + ';';
        }
    }
    
    return HtmlAttributeEncode;
}

function _XmlEncode( strInput )
{
    // HtmlEncode will handle null string
    return _HtmlEncode( strInput );
}

function _XmlAttributeEncode( strInput )
{
    // EncodeHtmlAttribute will handle null string
    return _HtmlAttributeEncode( strInput );
}
    
function _JavaScriptEncode( strInput )
{
    var c;
    var EncodeJs = '';
    
    if(strInput == null)
    {
        return null;
    }
    if (strInput == '')
    {
        return '';
    }
    
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);

        if (( ( c > 96 ) && ( c < 123 ) ) ||
            ( ( c > 64 ) && ( c < 91 ) ) ||
            ( c == 32 ) ||
            ( ( c > 47 ) && ( c < 58 ) ) ||
            ( c == 46 ) ||
            ( c == 44 ) ||
            ( c == 45 ) ||
            ( c == 95 ))
        {
            EncodeJs = EncodeJs + String.fromCharCode(c);
        }
        else if ( c > 127 )
        {
            EncodeJs = EncodeJs + '\\u' + OutputEncoder_TwoByteHex(c);
        }
        else
        {
            EncodeJs = EncodeJs + '\\x' + OutputEncoder_SingleByteHex(c);
        }
    }
    
    return '\'' + EncodeJs + '\'';
}

function _VisualBasicScriptEncode( strInput )
{
    var c;
    var EncodeVbs = '';
    var bInQuotes = false;
    
    if(strInput == null)
    {
        return null;
    }
    if (strInput == '')
    {
        return '';
    }
    
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);

        if (( ( c > 96 ) && ( c < 123 ) ) ||
            ( ( c > 64 ) && ( c < 91 ) ) ||
            ( c == 32 ) ||
            ( ( c > 47 ) && ( c < 58 ) ) ||
            ( c == 46 ) ||
            ( c == 44 ) ||
            ( c == 45 ) ||
            ( c == 95 ))
        {
            // do the "unencoded" ones
            if ( !bInQuotes )
            {
                EncodeVbs = EncodeVbs + '&\"';
                bInQuotes = true;
            }
            
            EncodeVbs = EncodeVbs + String.fromCharCode(c);
        }
        else
        {
            // do the "encoded" ones
            if ( bInQuotes )
            {
                EncodeVbs = EncodeVbs + '\"';
                bInQuotes = false;
            }
            
            EncodeVbs = EncodeVbs + '&chrw(' + c + ')';
        }
    }

    if ( EncodeVbs.charAt(0) == '&' )
    {
        // Remove starting '&'
        EncodeVbs = EncodeVbs.substring(1);
    }
    
    if ( EncodeVbs.length == 0 )
    {
        // if null, add quotes
        EncodeVbs = '\"\"';
    }
    
    if ( bInQuotes )
    {
        //  but if we're in quotes, then close them
        EncodeVbs = EncodeVbs + '\"';
    }
    
    return EncodeVbs;
}

    
// There is a modified version of this function, called _UrlEncodeIE7, that is an IE7 specific implementation of URL encoding.
// Please keep both functions in sync
function _UrlEncode( strInput )
{
    var c;
    var EncodeUrl = '';
    
    if(strInput == null)
    {
        return null;
    }
    if (strInput == '')
    {
        return '';
    }
    
    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);

        if (( ( c > 96 ) && ( c < 123 ) ) ||
            ( ( c > 64 ) && ( c < 91 ) )  ||
            ( ( c > 47 ) && ( c < 58 ) ) ||
            ( c == 46 ) ||
            ( c == 45 ) ||
            ( c == 95 ))
        {
            EncodeUrl = EncodeUrl + String.fromCharCode(c);
        }
        else if ( c > 127 )
        {
            EncodeUrl = EncodeUrl + '%u' + OutputEncoder_TwoByteHex(c);
        }
        else
        {
            EncodeUrl = EncodeUrl + '%' + OutputEncoder_SingleByteHex(c);
        }
    }
    
    return EncodeUrl;
}

// This is a modified version of the function _UrlEncode, made specifically to overcome IE7 large string processing performance issue.
// Other browsers have made optimizations to string manipulations and do not need special handling.
function _UrlEncodeIE7( strInput )
{
    var c;
    var EncodeUrl = '';
    var buffer = [];
    var count = 0;

    if(strInput == null)
    {
        return null;
    }
    if (strInput == '')
    {
        return '';
    }

    for(var cnt = 0; cnt < strInput.length; cnt++)
    {
        c = strInput.charCodeAt(cnt);

        if (( ( c > 96 ) && ( c < 123 ) ) ||
            ( ( c > 64 ) && ( c < 91 ) )  ||
            ( ( c > 47 ) && ( c < 58 ) ) ||
            ( c == 46 ) ||
            ( c == 45 ) ||
            ( c == 95 ))
        {
            buffer[count++] = String.fromCharCode(c);
        }
        else if ( c > 127 )
        {
            buffer[count++] = '%u' + OutputEncoder_TwoByteHex(c);
        }
        else
        {
            buffer[count++] = '%' + OutputEncoder_SingleByteHex(c);
        }
    }

    return buffer.join("");
}

function OutputEncoder_SingleByteHex( charC )
{
    if (charC == null)
    {
        return '';
    }
    
    var SingleByteHex = charC.toString(16);

    for ( var cnt = SingleByteHex.length; cnt < 2; cnt++ )
    {
        SingleByteHex = "0" + SingleByteHex;
    }
    
    return SingleByteHex;
}

function OutputEncoder_TwoByteHex( charC )
{
    if (charC == null)
    {
        return '';
    }
    
    var TwoByteHex = charC.toString(16);
    
    for( var cnt = TwoByteHex.length; cnt < 4; cnt++ )
    {
        TwoByteHex = "0" + TwoByteHex;
    }
    
    return TwoByteHex;
}

//NOTE: do not use this directly use the CrmEncodeDecode wrapper
function AntiXss()
{
    this.HtmlEncode=_HtmlEncode;
    this.HtmlAttributeEncode = _HtmlAttributeEncode;
    this.XmlEncode = _XmlEncode;
    this.XmlAttributeEncode = _XmlAttributeEncode;
    this.JavaScriptEncode = _JavaScriptEncode;
    this.VisualBasicScriptEncode = _VisualBasicScriptEncode;
    this.UrlEncode = _UrlEncode;
}
var AntiXssLibrary = new AntiXss();

// Upto this point is code from the AntiXss library team, do not change any code above this
//////////////////////////////////////////////////////////////////////////////////////////////////