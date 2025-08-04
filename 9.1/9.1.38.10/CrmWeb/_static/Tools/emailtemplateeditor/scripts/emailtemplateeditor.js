
var ThinSpace = "\u2009",
    _activeSlug,
    count;
function GetDataSlugValue(dataSlug)
{
    return dataSlug.getAttribute("data-value")
}
function SetDataSlugValue(dataSlug,text)
{
    dataSlug.setAttribute("data-value",text)
}
function IsDataSlug(node)
{
    return !isNullOrEmptyString(node.className) && Sys.UI.DomElement.containsCssClass(node,"dataslug")
}
function InitDataSlugElement(dataSlug,id,text)
{
    !IsDataSlug(dataSlug) && 
        Sys.UI.DomElement.toggleCssClass(dataSlug,"dataslug");
    dataSlug.tabIndex = -1;
    SetDataSlugValue(dataSlug,text);
    dataSlug.id = id
}
var currentActiveElement = null;
function HandleFocus(domEvent)
{
    SetCurrentActiveElement(domEvent)
}
function SetCurrentActiveElement(domEvent)
{
    currentActiveElement = domEvent.target
}
function ElementSupportsSlugInsertion(element)
{
    if(!IsNull(element) && (element.id === "SubjectEditor" || element.id === "TemplateEditor"))
        return true;
    return false
}
function placeDataSlugContainer()
{
    if(!IsNull(window.getSelection))
    {
        var sel = window.getSelection();
        if(!IsNull(sel.getRangeAt))
        {
            var dataSlug = document.createElement("span");
            sel.getRangeAt(0).insertNode(dataSlug);
            return dataSlug
        }
    }
    else
        if(!IsNull(document.selection))
        {
            var id = "df" + Mscrm.DateTimeUtility.localDateTimeNow().getTime();
            document.selection.createRange().pasteHTML('<span id="' + CrmEncodeDecode.CrmHtmlAttributeEncode(id) + '" />');
            var dataSlug = document.getElementById(id);
            dataSlug.removeAttribute("id");
            return dataSlug
        }
    return null
}
function InsertDataField()
{
    var oArgs = {};
    oArgs.Xml = _serializedObjectsXml;
    oArgs.Text = null;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 480;
    dialogOptions.width = 550;
    var oUrl = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/datafieldproperties.aspx");
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,oArgs,null,InsertDataFieldCallBack)
}
function InsertDataFieldCallBack(oRetVal)
{
    if(!IsNull(oRetVal) && oRetVal.length == 2)
    {
        var elementForSlugInsert = currentActiveElement;
        elementForSlugInsert.focus();
        if(IsNull(count))
        {
            count = 0;
            var spans = elementForSlugInsert.getElementsByTagName("span");
            if(!IsNull(spans))
                count = spans.length
        }
        var oTemp = placeDataSlugContainer();
        if(!IsNull(oTemp))
        {
            var oDataSlug = document.createElement("SPAN");
            InitDataSlugElement(oDataSlug,elementForSlugInsert.id + count.toString(),oRetVal[0]);
            XUI.Html.SetText(oDataSlug,oRetVal[1]);
            count++;
            oTemp.parentNode.replaceChild(oDataSlug,oTemp);
            AddSpacesArroundSlug(oDataSlug);
            !IsNull(elementForSlugInsert) && elementForSlugInsert.id == "SubjectEditor" && 
                checkForSubjectDataSlugs()
        }
    }
}
function AddSpacesArroundSlug(dataSlug)
{
    if(!IsNull(dataSlug))
    {
        var prev = dataSlug.previousSibling,
            next = dataSlug.nextSibling;
        !IsNull(prev) && prev.nodeType == 3 && !prev.nodeValue.match(new RegExp("[\\s" + escape(ThinSpace).replace(/%/,"\\") + "]{1}$")) && 
            dataSlug.parentNode.insertBefore(window.document.createTextNode(ThinSpace),dataSlug);
        IsNull(next) && 
            dataSlug.parentNode.appendChild(window.document.createTextNode(ThinSpace));
        !IsNull(next) && (next.nodeType == 3 && !next.nodeValue.match(new RegExp("^[\\s" + escape(ThinSpace).replace(/%/,"\\") + "]{1}")) || next.nodeType == 1) && 
            dataSlug.parentNode.insertBefore(window.document.createTextNode(ThinSpace),next)
    }
}
function DeleteDataField()
{
    if(!IsNull(_activeSlug))
    {
        !IsNull(_activeSlug.parentNode) && 
            _activeSlug.parentNode.removeChild(_activeSlug);
        _activeSlug = null
    }
    else
        alert(LOCID_NODATASLUGSELECTED);
    !IsNull(currentActiveElement) && currentActiveElement.id == "SubjectEditor" && 
        checkForSubjectDataSlugs()
}
function UpdateDataField()
{
    if(!ElementSupportsSlugInsertion(currentActiveElement))
    {
        alert(LOCID_FIELDNOTSUPPORTEDSLUG);
        return
    }
    if(!IsNull(_activeSlug))
        if(XUI.Html.GetText(_activeSlug) == "")
        {
            DeleteDataField();
            InsertDataField()
        }
        else
        {
            var oArgs = {};
            oArgs.Xml = _serializedObjectsXml;
            oArgs.Text = GetDataSlugValue(_activeSlug);
            var dialogOptions = new Xrm.DialogOptions;
            dialogOptions.height = 480;
            dialogOptions.width = 550;
            var oUrl = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/datafieldproperties.aspx");
            Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,oArgs,null,UpdateDataFieldCallBack)
        }
    else
        InsertDataField()
}
function UpdateDataFieldCallBack(oRetVal)
{
    if(!IsNull(oRetVal) && oRetVal.length == 2)
    {
        SetDataSlugValue(_activeSlug,oRetVal[0]);
        XUI.Html.SetText(_activeSlug,oRetVal[1])
    }
}
function getSelectedElementFromEmailbody(iframe)
{
    var selectedElement;
    if(iframe != null && iframe != undefined)
    {
        var frameWindow = iframe && iframe.contentWindow,
            frameDocument = frameWindow && frameWindow.document;
        if(frameDocument)
        {
            if(frameDocument.getSelection)
                selectedElement = frameDocument.getSelection();
            else
                if(frameDocument.selection)
                    selectedElement = frameDocument.selection.createRange();
                else
                    if(frameWindow.getSelection)
                        selectedElement = frameWindow.getSelection()
        }
        else
            selectedElement = ""
    }
    else
        selectedElement = window.getSelection();
    if(!selectedElement.rangeCount)
        selectedElement = null;
    return selectedElement
}
function createHyperlink()
{
    var iframe = document.getElementById("descriptionIFrame"),
        sel = getSelectedElementFromEmailbody(iframe);
    if(sel == null)
        return;
    var range = sel.getRangeAt(0);
    if(sel.rangeCount)
        for(var container = document.createElement("div"),
            i = 0,
            len = sel.rangeCount; i < len; ++i)
            container.appendChild(sel.getRangeAt(i).cloneContents());
    var anchorElements = container.getElementsByTagName("A"),
        anchorLength = anchorElements.length;
    if(anchorElements.length != 0)
        return;
    var selectedText = sel.toString();
    if(selectedText.startsWith('<a href="'))
        return;
    var slugElement = container.getElementsByClassName("dataslug"),
        length = slugElement.length;
    if(length == 0)
    {
        selectedText = selectedText.trim();
        var regexp = new RegExp("\u2009","g");
        selectedText = selectedText.replace(regexp,"");
        if(iframe)
            iframe.contentWindow.document.execCommand("createLink",false,selectedText);
        else
            document.execCommand("createLink",false,selectedText)
    }
    else
    {
        var textText = "",
            textLink = '<a href="';
        divLink = document.createElement("div");
        divText = document.createElement("div");
        var prevIndex = 0,
            currIndex = 0,
            spanTextLength = 0;
        currIndex = container.innerText.indexOf("{!",prevIndex);
        if(currIndex != 0)
        {
            var initialText = container.innerText.substr(0,currIndex - 1);
            textLink = textLink + encodeURI(initialText);
            textText = initialText
        }
        textLinkNode = document.createTextNode(textLink);
        textTextNode = document.createTextNode(textText);
        divLink.appendChild(textLinkNode);
        divText.appendChild(textTextNode);
        for(i = 0; i < length; i++)
        {
            spanLink = slugElement[i].cloneNode(true);
            spanText = slugElement[i].cloneNode(true);
            divLink.appendChild(spanLink);
            divText.appendChild(spanText);
            prevIndex = currIndex;
            currIndex = container.innerText.indexOf("{!",prevIndex + 1);
            var spanTextLength = slugElement[i].textContent.length;
            if(currIndex - prevIndex > spanTextLength)
            {
                var textNode = document.createTextNode(container.innerText.substring(prevIndex + spanTextLength,currIndex - 1)),
                    linkNode = document.createTextNode(encodeURI(container.innerText.substring(prevIndex + spanTextLength + 1,currIndex - 1)));
                divLink.appendChild(linkNode);
                divText.appendChild(textNode)
            }
        }
        var closingQuote = document.createTextNode('">');
        divLink.appendChild(closingQuote);
        divLink.appendChild(divText);
        divLink.appendChild(document.createTextNode("</a>"));
        divLink.style.display = "inline";
        divText.style.display = "inline";
        sel.deleteFromDocument();
        range.insertNode(divLink)
    }
}
function UnsubscribeLink()
{
    var text = "";
    if(window.getSelection)
        text = window.getSelection();
    else
        if(document.selection)
            text = document.selection.createRange().text;
    if(text != "")
        try
        {
            window.document.execCommand("createlink",false,"mailto:[Run_Time_Address]?subject=[Run_Time_Subject]")
        }
        catch(e)
        {
        }
}
