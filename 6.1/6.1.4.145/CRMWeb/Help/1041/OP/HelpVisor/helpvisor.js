// Cross Browser Utilities : BEGIN
// NOTE - Please keep this region in sync with files at src\Application\web\ScriptSharp\_Common\Scripts\Global\XUI

// DOM node type values from W3 standards
var NodeType =
{
	Element: 1,
	TextNode: 3,
	Document: 9
}

function Trim(strValue)
{
	if (strValue != null)
	{
		return strValue.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	return strValue;
}

var GetComputedStyle = function(domNode, camelStyleName) {
	var actualFunction = document.body.currentStyle != null ?
					function (domNode, camelStyleName) {
						var r = domNode.currentStyle[camelStyleName];

						// Computed style should only deal with absolute units - if you are querying computed style
						// (which is currentStyle in IE), and you get a relative measure, you should go through 
						// the regular style object, which will work the same in IE and FF
						if (r.indexOf('%') > 0 || r.indexOf('em') > 0) {
							// TODO: make exceptions public?
							throw 'RelativeMeasurementInComputedStyle';
						}

						return r;
					}
					:
					function (domNode, camelStyleName) { return document.defaultView.getComputedStyle(domNode, null)[camelStyleName]; };

	// Modifying myself
	GetComputedStyle = actualFunction;
	return actualFunction(domNode, camelStyleName);
};


// TextNodes that have space only content should be ignored (e.g. IE skips them by default when parsing childNodes)
// A node is enumerable if it is:
// - an element 
// or
// - a non-whitespace text node
function IsEnumerable(domNode) {
	var nodeType = domNode.nodeType;

	if (nodeType == NodeType.Element) return true;

	if (nodeType == NodeType.TextNode) {
		var textContent = domNode.nodeValue;
		return textContent && (Trim(textContent).length > 0);
	}

	return false;
}

// Finds first enumerable node, including input node and going previous or next from it if necessary
function FindEnumerableNode(domNode, sPrevNextSibling) {
	var r = domNode;
	while (r != null && !IsEnumerable(r)) {
		r = r[sPrevNextSibling];
	}
	return r;
}

/// <summary>
/// Returns first enumerable child
/// </summary>
/// <param name="domNode"></param>
/// <returns></returns>
function GetFirstChild(domNode)
	{
		return FindEnumerableNode(domNode.firstChild, 'nextSibling');
	}

/// <summary>
/// Returns next enumerable sibling
/// </summary>
/// <param name="domNode"></param>
/// <returns></returns>
function GetNextSibling(domNode)
{
	return FindEnumerableNode(domNode.nextSibling, 'nextSibling');
}

// Cross Browser Utilities : END




var timeout = 0;
var delayHid = 0.5;
var delayShow = 0.5;
var showTimeout = 0;
var balloonItem = document.getElementById("BalloonPopup1");
var hidSourceItem = document.getElementById("hidSource");
var balloonArrow = document.getElementById("balloonArrow");
var arrowX = 0;
var arrowY = 0;
var balloonX = 0;
var balloonY = 0;

var balloonWidthMin = 260;
var balloonWidthMax = 300;

var columnNumber1 = "";
var columnName1 = "";
var columnLink1 = "";
var columnLink2 = "";
var columnLink3 = "";

var previousColumn = 1;

var flyout1 = "";
var flyout2 = "";
var flyout3 = "";

function showBalloon(divsource, source, column) {
	balloonItem = document.getElementById("BalloonPopup1");
	hidSourceItem = document.getElementById("hidSource");
	balloonArrow = document.getElementById("balloonArrow");
	var tableStepsEnd = document.getElementById("tableStepsEnd");
	var columnTitleRow = document.getElementById("ColumnTitleRow");
	var contVisor = document.getElementById("containerPanel");
	
	var objSource = document.getElementById(source);
	var objDivSource = document.getElementById(divsource);
	var objColumn = document.getElementById(column);

	var objSourceOffsetWidth = objSource.offsetWidth;
	
	if (objSource.offsetWidth + 16 > objColumn.offsetWidth) {
		objSourceOffsetWidth = objColumn.offsetWidth - 12; // 22px - image + padding + elipsis
	}
	
	if (hidSourceItem.value == source && timeout != 0) {
		resetTimeOut();
		showTimeout = setTimeout("delayBalloon('" + column + "')", delayShow * 1000);
		return;
	}
	
	var ieVer = getInternetExplorerVersion();
	var isRtl = (GetComputedStyle(document.body, "direction") == 'rtl');

	if (ieVer >= 8.0) {
		arrowY = (contVisor.offsetHeight - tableStepsEnd.offsetHeight) + columnTitleRow.offsetHeight + objDivSource.offsetTop + 2;
		balloonY = contVisor.offsetHeight - balloonItem.offsetHeight - 5 + 8;
	}
	else if (ieVer >= 7.0) {
		arrowY = (contVisor.offsetHeight - tableStepsEnd.offsetHeight) + columnTitleRow.offsetHeight + objDivSource.offsetTop + 2;
		balloonY = contVisor.offsetHeight - balloonItem.offsetHeight - 5 + 8;
	}
	else {
		arrowY = (contVisor.offsetHeight - tableStepsEnd.offsetHeight) + columnTitleRow.offsetHeight + objDivSource.offsetTop + 2;
		balloonY = contVisor.offsetHeight - balloonItem.offsetHeight + 2;
	}
	
	// Initialize flyout width
	balloonItem.style.pixelWidth = balloonWidthMin;
	
	if (column == 'c3') {
			balloonX = 0;
			arrowX = 0;
			if (!isRtl) {
				balloonX += objColumn.offsetLeft - balloonArrow.offsetWidth - balloonItem.offsetWidth + 29 + 133 + 5;
				arrowX += objColumn.offsetLeft - balloonArrow.offsetWidth + 24 + 130 + 5;
			} else {
				balloonX += objColumn.offsetWidth + getLeft(objColumn) + balloonArrow.offsetWidth - 1 - 13;
				arrowX += objColumn.offsetWidth + getLeft(objColumn) + 7 - 13;	
			}
	}
	else if (column == 'c1') {
		balloonX = 0;
		arrowX = 0;
		if (!isRtl) {
			balloonX += objColumn.offsetLeft + 58 + 133 - 7 + objSourceOffsetWidth;
			arrowX += objColumn.offsetLeft + 43 + 133 + 7 - 7 + objSourceOffsetWidth;
		} else {
			balloonX += getLeft(objColumn) + objColumn.offsetWidth - objSourceOffsetWidth - balloonItem.offsetWidth - balloonArrow.offsetWidth - 16;
			arrowX += getLeft(objColumn) + objColumn.offsetWidth - objSourceOffsetWidth - balloonArrow.offsetWidth - 21 - 3;
		}
	}
	else {
		balloonX = 0;
		arrowX = 0;
		if (!isRtl) {
			balloonX += objColumn.offsetLeft + 131 + 30 + 5 - balloonArrow.offsetWidth - balloonItem.offsetWidth;
			arrowX += objColumn.offsetLeft + 25 + 131 - 3 + 5  - balloonArrow.offsetWidth;
		} else {
			balloonX += getLeft(objColumn) + objColumn.offsetWidth + balloonArrow.offsetWidth - 1 - 12;
			arrowX += getLeft(objColumn) + objColumn.offsetWidth + 7 - 12;
		}
	}
	
	// Adjust flyout width based on available space
	if (balloonItem.style.width == "")
	{
		balloonItem.style.pixelWidth = balloonWidthMax;
	}
	if (!isRtl)
	{
		var previousWidth = 0;
		var screenOffset = (balloonX + balloonWidthMax - document.body.offsetWidth + 18);
		if (column == 'c1' && screenOffset >= 0)
		{
			balloonItem.style.pixelWidth = balloonWidthMin;
		} else {
			previousWidth = balloonItem.style.pixelWidth;
			balloonItem.style.pixelWidth = balloonWidthMax;
		}
		
		if (column != 'c1')
		{	
			if (balloonItem.style.pixelWidth == balloonWidthMin || previousWidth == balloonWidthMin)
			{
				balloonX -= (balloonWidthMax - balloonWidthMin);
				balloonItem.style.pixelWidth = balloonWidthMax;
			}
		}
	}
	else
	{
		var screenOffset = balloonX - (balloonWidthMax - balloonWidthMin) - 5;
		if (column == 'c1' && screenOffset <= 0)
		{
			if (balloonItem.style.pixelWidth == balloonWidthMax)
			{	
				arrowX -= (balloonWidthMax - balloonWidthMin);
			}
			balloonItem.style.pixelWidth = balloonWidthMin;
		} else {
			if (balloonItem.style.pixelWidth == balloonWidthMin && column == 'c1')
			{
				balloonX -= (balloonWidthMax - balloonWidthMin);
			}
			balloonItem.style.pixelWidth = balloonWidthMax;
		}
	}
	
	// Shift flyout to left (to right for RTL) if it is outside of the window
	if (column == 'c1')
	{
		if (!isRtl) {
			var screenOffset = (balloonX + balloonItem.offsetWidth - document.body.offsetWidth + 5);
			if (screenOffset >= 0) {
				balloonX -= screenOffset;
				arrowX -= screenOffset;
			}
			
			// Make sure left side of flyout body is always visible
			if (balloonX < 0) {
				balloonX = 0;
			}
		} else {
			var screenOffset = balloonX - 5;
			if (screenOffset <= 0) {
				balloonX -= screenOffset;
				arrowX -= screenOffset;
			}
		}
	}
	
	if (showTimeout != 0) {
		clearTimeout(showTimeout);
		if (timeout != 0)
			clearTimeout(timeout);
		removeBalloon();
	}
	hidSourceItem.value = source;

	highlightSource();
	showTimeout = setTimeout("delayBalloon('" + column + "')", delayShow * 1000);
}


function getLeft(elm) {
	var x;
	x = elm.offsetLeft;
	elm = elm.offsetParent;
	while(elm != null) {
		x = parseInt(x) + parseInt(elm.offsetLeft);
		elm = elm.offsetParent;
	}
	return x;
}


function getInternetExplorerVersion() {    
var rv = -1;
// Return value assumes failure.
if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
        rv = parseFloat(RegExp.$1);
}
return rv;
}

function delayBalloon(column) {
	var objColumn = document.getElementById(column);
	var objSource = document.getElementById(hidSourceItem.value);
	var objBalloonTitle = document.getElementById("BalloonTitle");
	var objBalloonTable = document.getElementById("BalloonTable");
	var ieVer = getInternetExplorerVersion();
	
	highlightSource();
	var leftPosition = 0;
	balloonItem.style.visibility = 'hidden';
	balloonArrow.style.visibility = 'hidden';
	fillData();
	balloonItem.style.top = balloonY+"px";
	balloonArrow.style.top = arrowY+"px";
	balloonArrow.style.left = arrowX+"px";
	balloonItem.style.left = balloonX+"px";
	if (ieVer >= 7.0) {
		objBalloonTable.className = "BalloonTable";
	}
	else if (ieVer >= 8.0) {
		objBalloonTable.className = "BalloonTableIE8";
	}
	else
	{
		objBalloonTable.className = "BalloonTable";
	}
	
	if (column != 'c1') {
		balloonItem.className = "BalloonPopup";
		balloonArrow.className = "ArrowRight";
		objBalloonTitle.className = "BalloonTitleItem";
	}
	else {
		balloonItem.className = "BalloonPopup";
		balloonArrow.className = "ArrowLeft";
		objBalloonTitle.className = "BalloonTitleItem";
	}
	
	balloonItem.style.visibility = 'visible';
	// If the visor is so narrowed that flyout arrow is not pointing to the link - hide arrow.
	if (document.documentElement.clientWidth > 470) {
		balloonArrow.style.visibility = 'visible';
	}
	
	var innerBox = document.getElementById("InnerBox");
	
	if(document.getElementById("balloonTitleTruncatter").offsetHeight > 16)
	{
		innerBox.style.maxHeight = "81px";
	}
	else
	{
		innerBox.style.maxHeight = "92px";
	}
}

function fillData() {
	//var balloonTitle = document.getElementById("BalloonTitle");
	var balloonTitleTruncatter = document.getElementById("balloonTitleTruncatter");
	var innerBox = document.getElementById("InnerBox");
	var hidBubbleName = hidSourceItem.value;
	var str = hidBubbleName.replace("item", "bubble");
	var objBubble = document.getElementById(str);
	var strArray = objBubble.value.split("||");

	var test = hidBubbleName.split("_");

    if (strArray.length > 0) {
		//balloonTitle.innerHTML = strArray[0];
		balloonTitleTruncatter.innerHTML = strArray[0];
		innerBox.innerHTML = strArray[1];
	}
	else {
		//balloonTitle.innerHTML = "";
		balloonTitleTruncatter.innerHTML = "";
		innerBox.innerHTML = "";
	}
}

function hideBalloon() {
    if(showTimeout != 0)
        clearTimeout(showTimeout);
    
    timeout = setTimeout("removeBalloon()", delayHid * 1000);
    
}

function resetTimeOut() {
    clearTimeout(timeout);
    highlightSource();
}
	
	
function removeBalloon()
{
	if (hidSourceItem.value != "") {
		removeDecoration(hidSourceItem.value);
		hidSourceItem.value = "";
	}
	if (balloonItem.style.visibility == 'visible') {
		balloonItem.style.visibility = 'hidden';
		balloonArrow.style.visibility = 'hidden';
	}
	
	balloonItem.style.top = "0px";
	balloonArrow.style.top = "0px";
	balloonArrow.style.left = "0px";
	balloonItem.style.left = "0px";
	
	// Reset flyout scrolling position
	var innerBox = document.getElementById("InnerBox");
	if (innerBox && innerBox.scrollTop) {
		innerBox.scrollTop = 0;
	}
}
	
function removeDecoration(source)
{
	var sourceItem = document.getElementById(source);
	if (sourceItem) {
		sourceItem.style.textDecoration = 'none';
	}
}
	
function highlightSource()
{
    var sourceItem = document.getElementById(hidSourceItem.value);
	if (sourceItem) {
		sourceItem.style.textDecoration = 'underline';
	}
}

function OpenWindow(uri, type) {

    var strUri = uri + '&c=hv';
    var strLinkType = type;
    var windowHeight = 500;
    var windowWidth = 400;
    var windowLeft = 200;
    var windowTop = 200;
    var strFeatures = "";

    var screenHeight = window.screen.height;
    var screenWidth = window.screen.width;

    if (type == "doc") {
        windowHeight = 500;
        windowWidth = 550;

        windowLeft = (screenWidth - windowWidth) / 2;
        windowTop = (screenHeight - windowHeight) / 2;

        strFeatures = "left=" + windowLeft.toString() +",top=" + windowTop.toString() +","; 
    }
    else if (type == "video") {
        windowHeight = 700;
        windowWidth = 880;
    }
    else if (type == "diagram") {
        windowHeight = 700;
        windowWidth = 880;
    }
    else if (type == "tour") {
        windowHeight = 580;
        windowWidth = 810;
    }

    else {
        windowHeight = 500;
        windowWidth = 400;
    }

    // Dynamic features for all new window based on link type.
    strFeatures = strFeatures + "height=" + windowHeight.toString() + ",width=" + windowWidth.toString();
    
    // Standard common features for all new windows.
    strFeatures = strFeatures + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes";
            

    window.open(strUri, "_blank", strFeatures); 

}

//min-max width setter

function setTwoThreeColumnsLayout() {

    var widthSetter = document.getElementById("widthSetter");

    // Since this function can be called before the help visor has loaded, check for the existence of widthsetter
    if (widthSetter != null) {

        // c3 - id of 3-rd column of helpvisor
        var column3 = document.getElementById("c3");

        if (column3 != null) {
            widthSetter.style.maxWidth = "1725px";

            //set title for 3-rd column
            var expanderColumnTitle3 = document.getElementById("expanderct3");
            expanderColumnTitle3.title = GetNextSibling(GetFirstChild(expanderColumnTitle3)).nodeValue;
        }
        else {
            widthSetter.style.maxWidth = "1204px";
        }

        widthSetter.style.minWidth = "353px";



        extremeResizingPreparations();
        visorResize();
    }
}

window.onload = start;

//ie8 bugfix
function start() {
    // Assign localized numbers to column buttons
    setLocalizedNumbers();
    // Set 2- or 3-columns layout
    // This setTimeout calls setTwoThreeColumnsLayout() even if the help visor hasn't loaded, or isn't on
    // the page and can cause script errors. 
    setTimeout(setTwoThreeColumnsLayout, 50);
}

//end of min-max width setter


//extreme resizing preparations

function extremeResizingPreparations()
{
	columnNumber1 = document.getElementById("cn1").innerHTML;
	columnName1 = document.getElementById("expanderct1").innerHTML.split(/<\/div>/gi)[2];
	
	var c1i1 = document.getElementById("div_column1_item1");
	var c1i2 = document.getElementById("div_column1_item2");
	var c1i3 = document.getElementById("div_column1_item3");
	
	var ec1 = document.getElementById("ec1");
	
	var c1b1 = document.getElementById("column1_bubble1");
	var c1b2 = document.getElementById("column1_bubble2");
	var c1b3 = document.getElementById("column1_bubble3");
	
	var baloon = document.getElementById("BalloonPopup1");
	
	var ht = document.getElementById("ht");
	
	// "Microsoft Dynamics CRM" text must not wrap in title
	var titleTextKeeper = document.getElementById("titleTextKeeper");
	titleTextKeeper.innerHTML = titleTextKeeper.innerHTML.replace("Microsoft Dynamics CRM", "<nobr>Microsoft Dynamics CRM</nobr>");
	ht.innerHTML = titleTextKeeper.innerHTML;
	
	if(c1i1!=null)
	{
		columnLink1 = c1i1.innerHTML;
	}
	else
	{
		columnLink1 = "";
		
		var link = document.createElement('div');
		link.setAttribute('id', "div_column1_item1");
		link.setAttribute('class', "item");
		ec1.appendChild(link);
	}
	
	if(c1i2!=null)
	{
		columnLink2 = c1i2.innerHTML;
	}
	else
	{
		columnLink2 = "";
		
		var link = document.createElement('div');
		link.setAttribute('id', "div_column1_item2");
		link.setAttribute('class', "item");
		ec1.appendChild(link);
	}
	
	if(c1i3!=null)
	{
		columnLink3 = c1i3.innerHTML;
	}
	else
	{
		columnLink3 = "";
		
		var link = document.createElement('div');
		link.setAttribute('id', "div_column1_item3");
		link.setAttribute('class', "item");
		ec1.appendChild(link);
	}
	
	
	if(c1b1!=null)
	{
		flyout1 = c1b1.value;
	}
	else
	{
		var input = document.createElement('input');
		input.setAttribute('id', "column1_bubble1");
		input.setAttribute('value', "");
		input.setAttribute('type', "hidden");
		baloon.appendChild(input);
	}
	
	if(c1b2!=null)
	{
		flyout2 = c1b2.value;
	}
	else
	{
		var input = document.createElement('input');
		input.setAttribute('id', "column1_bubble2");
		input.setAttribute('value', "");
		input.setAttribute('type', "hidden");
		baloon.appendChild(input);
	}
	
	if(c1b3!=null)
	{
		flyout3 = c1b3.value;
	}
	else
	{
		var input = document.createElement('input');
		input.setAttribute('id', "column1_bubble3");
		input.setAttribute('value', "");
		input.setAttribute('type', "hidden");
		baloon.appendChild(input);
	}

	window.onresize = visorResize;
}

//end of extreme resizing preparations


// help visor extreme resizing

function visorResize()
{		
	var containerPanel = document.getElementById("containerPanel");

	// Fix for Microsoft CRM 120448.
	// Its possible that IE can trigger a window.resize event when the page unloads.
	// If that happens, even though the event handler(window.resize) is called the DOM has no data and
	// hence the rest of this function will script error.
	// Its safe to merely 'return' from there since 
	// a. this is getting executed in the context of page being unloaded.
	// b. since there is no DOM data there is nothing else that can done here.
	if ( containerPanel == null)
	{
		// no containerPanel found in helpvisor content found
		return ;
	}
	
	var ieVer = getInternetExplorerVersion();
	
	var widthSetter = document.getElementById("widthSetter");
	
	var columnTitle1 = document.getElementById("ct1");
	var columnTitle2 = document.getElementById("ct2");
	var column2 = document.getElementById("c2");
	var columnTitle3 = document.getElementById("ct3");
	var column3 = document.getElementById("c3");
	
	var title = document.getElementById("title");
	var description = document.getElementById("description");
	
	var ht = document.getElementById("ht");
	var dt = document.getElementById("dt");
	
	var columnSwitcher = document.getElementById("columnSwitcher");
	var cs2 = document.getElementById("cs2");
	
	
	if(column3 != null)
	{		
		if(containerPanel.offsetWidth < 735)
		{
			columnTitle2.style.visibility = 'hidden';
			column2.style.visibility = 'hidden';
			columnTitle3.style.visibility = 'hidden';
			column3.style.visibility = 'hidden';
			
			description.style.visibility = 'hidden';
			
			columnTitle1.style.width = "100%";
			columnTitle2.style.width = "0%";
			columnTitle3.style.width = "0%";
		
		
			ht.style.whiteSpace = "normal";
			
			dt.style.height = "0px";
			description.style.height = "0px";
			
			if (ieVer >= 8.0) 
			{
				widthSetter.style.maxWidth = "683px";
			}
			else
			{
				widthSetter.style.maxWidth = "685px";
			}
			
			columnSwitcher.style.visibility = 'visible';
			columnSwitcher.style.display = 'block';
		}
		else
		{				
			columnTitle2.style.visibility = 'visible';
			column2.style.visibility = 'visible';
			columnTitle3.style.visibility = 'visible';
			column3.style.visibility = 'visible';
			
			description.style.visibility = 'visible';
			
			columnTitle1.style.width = "33.3%";
			columnTitle2.style.width = "33.3%";
			columnTitle3.style.width = "33.3%";
			
			ht.style.whiteSpace = "nowrap";
			
			dt.style.height = "14px";
			description.style.height = "17px";
			
			widthSetter.style.maxWidth = "1725px";
			
			columnSwitcher.style.visibility = 'hidden';
			columnSwitcher.style.display = 'none';
			
			firstColumnClick();
		}
	}
	else
	{
		var cs3 = document.getElementById("cs3");
		cs3.style.visibility = 'hidden';
		cs3.style.display = 'none';
		columnSwitcher.style.width	= '44px';
		
		if(GetComputedStyle(document.body, "direction") == 'rtl')
        {
			cs2.style.marginLeft ="0px";
		}
		
		if(containerPanel.offsetWidth < 544)
		{	
			columnTitle2.style.visibility = 'hidden';
			column2.style.visibility = 'hidden';
			
			description.style.visibility = 'hidden';
			
			columnTitle1.style.width = "100%";
			columnTitle2.style.width = "0%";
		
			ht.style.whiteSpace = "normal";
			
			dt.style.height = "0px";
			description.style.height = "0px";
			
			widthSetter.style.maxWidth = "543px";
			
			columnSwitcher.style.visibility = 'visible';
			columnSwitcher.style.display = 'block';
		}
		else
		{
			columnTitle2.style.visibility = 'visible';
			column2.style.visibility = 'visible';
			
			description.style.visibility = 'visible';
			
			columnTitle1.style.width = "50%";
			columnTitle2.style.width = "50%";
			
			ht.style.whiteSpace = "nowrap";
			
			dt.style.height = "14px";
			description.style.height = "17px";

			//widthSetter.style.maxWidth = "1204px"; // edited to fix formatting when only 2 columns are included
			widthSetter.style.maxWidth = "1725px";
			
			columnSwitcher.style.visibility = 'hidden';
			columnSwitcher.style.display = 'none';
			
			firstColumnClick();
		}
	}
	
	//firstColumnClick();
	showColumn(previousColumn);
	
	
	// Truncate main title after 2nd line with ellipsis ("...") //
	// Get the whole title text (HTML) from the hidden element
	var titleHtml = document.getElementById("titleTextKeeper").innerHTML;
	// Initialize visoble title element with the whole title text
	ht.innerHTML = titleHtml;
	// Truncate the title character by character until it fits in 33px by height (2 lines of text)
	while (ht.clientHeight > 33) {
		titleHtml = titleHtml.substr(0, titleHtml.length - 3);
		ht.innerHTML = titleHtml + '...';
	}
}

// end of help visor extreme resizing


// Assigns localized numbers to column buttons
function setLocalizedNumbers()
{
	setLocalizedNumber(1);
	setLocalizedNumber(2);
	setLocalizedNumber(3);
}

// Assigns localized number to a column button
// columnNumber - integer value of a column number (ex.: 1, 2 or 3)
function setLocalizedNumber(columnNumber)
{
	// Get column number element
	var colNumElem = document.getElementById("cn" + columnNumber);
	// Verify if the element exists
	if (colNumElem == null) {
		return;
	}
	// Get localized number
	var localizedColNumHtml = colNumElem.innerHTML;
	// Remove period (".")
	var localizedNum = localizedColNumHtml.replace('.', '');
	// Assign localized number to a button
	document.getElementById("cs" + columnNumber).innerHTML = localizedNum;
}


//show column

function showColumn(column)
{
	if (column != 1)
	{	
		var ct1 = document.getElementById("expanderct1");
		
		var c1b1 = document.getElementById("column1_bubble1");
		var c1b2 = document.getElementById("column1_bubble2");
		var c1b3 = document.getElementById("column1_bubble3");
		
		var c1i1 = document.getElementById("div_column1_item1");
		var c1i2 = document.getElementById("div_column1_item2");
		var c1i3 = document.getElementById("div_column1_item3");
		
		// Restore style of previously seleted button
		document.getElementById("cs" + previousColumn).className = "cs";
		
		// Set style for selected button
		document.getElementById("cs" + column).className = "cs csSelected";
		
		previousColumn = column;
		
		// Get selected column title
		var newColumnTitle = (document.getElementById("expanderct" + column).innerHTML.split(/<\/div>/gi))[1];
		
		// Set column title
		document.getElementById("ctText1").innerHTML = newColumnTitle;
		
		// Set column title tooltip
		ct1.title = newColumnTitle.replace(/&amp;/g, "&");
		
		// Switch color strip above the column title
		ct1.className = "expander colorStrip" + column;
		
		document.getElementById("cn1").innerHTML = document.getElementById("cn" + column).innerHTML;
		
		
		// Replace flyouts
		
		if (document.getElementById("column" + column + "_bubble1") != null) {
			c1b1.value = document.getElementById("column" + column + "_bubble1").value;
		} else {
			c1b1.value = "";
		}
		
		if (document.getElementById("column" + column + "_bubble2") != null) {
			c1b2.value = document.getElementById("column" + column + "_bubble2").value;
		} else {
			c1b2.value = "";
		}
		
		if (document.getElementById("column" + column + "_bubble3") != null) {
			c1b3.value = document.getElementById("column" + column + "_bubble3").value;
		} else {
			c1b3.value = "";
		}
		
		
		// Replace links
		
		if (document.getElementById("div_column" + column + "_item1") != null) {
			c1i1.innerHTML = document.getElementById("div_column" + column + "_item1").innerHTML.replace("column" + column + "_item1", "column1_item1").replace("c"+column,"c1");
		} else {
			c1i1.innerHTML ="";
		}
		
		if (document.getElementById("div_column" + column + "_item2") != null) {
			c1i2.innerHTML = document.getElementById("div_column" + column + "_item2").innerHTML.replace("column" + column + "_item2", "column1_item2").replace("c"+column,"c1");
		} else {
			c1i2.innerHTML ="";
		}
		
		if (document.getElementById("div_column" + column + "_item3") != null) {
			c1i3.innerHTML = document.getElementById("div_column" + column + "_item3").innerHTML.replace("column" + column + "_item3", "column1_item3").replace("c"+column,"c1");
		} else {
			c1i3.innerHTML ="";
		}
		
		// Apply fix for IE8+RTL only to avoid unexpected increase of spacing between icons.
		fixLinksSpacing();
	}
	else
	{		
		firstColumnClick();
	}
}

// "Clicks" on a column button. Sets focus on the button if the button was selected using keyboard.
function clickColumn(column)
{
	showColumn(column);
	
	// Set focus to clicked button
	var selectedButton = document.getElementById("cs" + column);
	if (selectedButton) {
		try {
			selectedButton.focus();
		} catch (e) {
			// Suppress any errors
		}
	}
}

function firstColumnClick()
{
	var cs1 = document.getElementById("cs1");
	var ct1 = document.getElementById("expanderct1");
	var cn1 = document.getElementById("cn1");

	if (previousColumn != null)
	{
		// Restore style of previously seleted button
		document.getElementById("cs" + previousColumn).className = "cs";
	}

	previousColumn = 1;

	// Set style for selected button
	cs1.className = "cs csSelected";

	if (flyout1 != null && flyout1 != '') { document.getElementById("column1_bubble1").value = flyout1; }
	if (flyout2 != null && flyout2 != '') { document.getElementById("column1_bubble2").value = flyout2; }
	if (flyout3 != null && flyout3 != '') { document.getElementById("column1_bubble3").value = flyout3; }

	if (columnNumber1 != null && columnNumber1 != '') {
		cn1.innerHTML = columnNumber1;
	}

	if (columnName1 != null && columnName1 != '') {
		ct1.innerHTML = ct1.innerHTML.replace((ct1.innerHTML.split(/<\/div>/gi))[2], columnName1);

		var columnName1Temp = columnName1.split(">");
		if (columnName1Temp.length > 1 && columnName1Temp[1] != null) {
			ct1.title = columnName1Temp[1].replace(/&amp;/g, "&");
		} else {
			ct1.title = "";
		}
	}
	
	// Switch color strip above the column title
	ct1.className = "expander colorStrip1";

	document.getElementById("div_column1_item1").innerHTML = columnLink1;
	document.getElementById("div_column1_item2").innerHTML = columnLink2;
	document.getElementById("div_column1_item3").innerHTML = columnLink3;

	// Apply fix for IE8+RTL only to avoid unexpected increase of spacing between icons.
	fixLinksSpacing();
}

//end of show column


// Fixes unexpected increase of spacing between icons and links in 1st column and single-solumn mode.
// Only required in IE8+RTL.
function fixLinksSpacing()
{
	// Get <ul> elements and set right margin to lower value.
    var isRtl = (GetComputedStyle(document.body, "direction") == 'rtl');
	var ieVer = getInternetExplorerVersion();
	if (isRtl && ((ieVer == 8) || ieVer == -1)) // -1 is all non IE browsers.
	{
		var li_column1_item1 = document.getElementById("li_column1_item1");
		var li_column1_item2 = document.getElementById("li_column1_item2");
		var li_column1_item3 = document.getElementById("li_column1_item3");
		
		if (li_column1_item1 && li_column1_item1.parentNode) {
			li_column1_item1.parentNode.style.marginRight = 1;
		}
		
		if (li_column1_item2 && li_column1_item2.parentNode) {
			li_column1_item2.parentNode.style.marginRight = 1;
		}
		
		if (li_column1_item3 && li_column1_item3.parentNode) {
			li_column1_item3.parentNode.style.marginRight = 1;
		}
	}
}


function enterPressed(e)
{
	if (e.keyCode == 13) {
		return true;
	} else {
		return false;
	}
}