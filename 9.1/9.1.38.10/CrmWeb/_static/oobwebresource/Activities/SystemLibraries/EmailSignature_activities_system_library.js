Type.registerNamespace('Mscrm');

var ThinSpace = "\u2009";

var currentActiveElement = null;
var oObjectsXml;
var _serializedObjectsXml;
var _nonIEMode = Sys.Browser.name != 'Microsoft Internet Explorer';
var _htmlBarComponent = null;
var _savedRange = null;
var _formSaved = false;
var _isUci = Xrm.Internal.isUci();
var _clipboard = _isUci ? null : (new XUI.ClipboardManager());


Mscrm.Form_onload = function Mscrm_Form_onload(executionContext) {
    if (_isUci) {
		var formContext = executionContext && executionContext.getFormContext();
		
		var isTemplateUCIEnabled = isFCBEnabled("FCB.TemplateUCIDataOctober2020Update", "FCB.October2020Update");
		if (!isTemplateUCIEnabled) {
			disableAllControls(executionContext);
			formContext.getControl("header_ownerid").setDisabled(true);
			showSpecificSectionOnly(executionContext, "general", "Details");
			executionContext.getFormContext().ui.setFormNotification(Xrm.Utility.getResourceString("Activities/Resources/Activities", "PreOctoberNotification"), Xrm.Constants.FormNotificationLevels.information, "PreOctoberNotification");
			return;
		} else {
			var sections = formContext && formContext.ui && formContext.ui.tabs && 
			formContext.ui.tabs.getByName('general') && formContext.ui.tabs.getByName('general').sections;
			if (sections) {
				sections.getByName('Details').setVisible(false);
				sections.getByName('Details_UCI').setVisible(true);
				sections.getByName('Signature Editor').setVisible(true);
			}
		}	
	} else {
        toggleButton();
        EmailTemplateEditorOnLoad();
    }
}

function isFCBEnabled(FCBName, ReleaseWaveFCB) {
	if (Xrm.Internal.isUci()) {
		if (ReleaseWaveFCB != null) {
			return Xrm.Internal.isDisruptiveFeatureEnabled(FCBName, ReleaseWaveFCB);
		}
		return Xrm.Internal.isFeatureEnabled(FCBName);
	}
	return false;
}

function disableAllControls(executionContext) {
	var formContext = executionContext.getFormContext();
	var controls = formContext && formContext.ui.controls;
	controls && controls.forEach(function (control) {
		control.setDisabled(true);
	});
	var allTabs = formContext && formContext.ui.tabs;
	allTabs && allTabs.forEach(function (tab) {
		var allSections = executionContext.getFormContext().ui.tabs.get(tab.getName()).sections;
		allSections && allSections.forEach(function (section) {
			var allControlsForSection = section.controls;
			for (var i = 0; i < allControlsForSection.getLength(); i++) {
				var control = allControlsForSection.getByIndex(i);
				control.setDisabled(true);
			}
		});
	});
}

function showSpecificSectionOnly(executionContext, tabName, sectionName) {
	var allTabs = executionContext.getFormContext().ui.tabs;
	var BasicTabSections = allTabs.getByName(tabName).sections;
	BasicTabSections.forEach(function (section) {
		if (section._controlName != sectionName) {
			section.setVisible(false);
		}
	});
}

Mscrm.ownerid_onchange = function Mscrm_ownerid_onchange() {
	if (!_isUci) {
		toggleButton();
	}
}

function toggleButton()
{
	if ($find("crmForm").get_formType() == Mscrm.SdkFormType.createForm)
	{
		//Disable delete, setasdefault, hide the removeasdefault for new form
		if(document.getElementById("_MBDeleteEmailSignature") !== null ) 
		{
			document.getElementById("_MBDeleteEmailSignature").classList.remove('ms-crm-Menu-Read');
			document.getElementById("_MBDeleteEmailSignature").classList.add('disabled');
		}
		if (document.getElementById("_MBSetAsDefaultSignature") != null)
		{
			document.getElementById("_MBSetAsDefaultSignature").classList.remove('ms-crm-Menu-Read');
			document.getElementById("_MBSetAsDefaultSignature").classList.add('disabled');
		}
		if (document.getElementById("_MBRemoveDefaultSignature") != null)
		{
			document.getElementById("_MBRemoveDefaultSignature").classList.add('hide');
		}
	}
	else {
		if (Xrm.Page.getAttribute("isdefault").getValue() != "1")
		{
			//if isdefault is not set and hide the removeasdefault button
			if (document.getElementById("_MBSetAsDefaultSignature") != null)
			{
				document.getElementById("_MBSetAsDefaultSignature").classList.remove('hide');
			}
			if (document.getElementById("_MBRemoveDefaultSignature") != null)
			{
				document.getElementById("_MBRemoveDefaultSignature").classList.add('hide');
			}
		}
		else
		{
			//if isdefault is  set and hide the setasdefault button
			if (document.getElementById("_MBRemoveDefaultSignature") != null)
			{
				document.getElementById("_MBRemoveDefaultSignature").classList.remove('hide');
			}
			if (document.getElementById("_MBSetAsDefaultSignature") != null)
			{
				document.getElementById("_MBSetAsDefaultSignature").classList.add('hide');
			}
		}
	}
}

function DeleteEmailSignature() {
	var entity = Xrm.Page.data.entity;
	var entityReference = new Xrm.Objects.EntityReference("emailsignature", entity.getId());
	entityReference.TypeCode = 9997;
	var records = [entityReference],
		actionUri = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("delete", entityReference.TypeCode, records.length),
		entityName = Xrm.Internal.getEntityName(entityReference.TypeCode),
		confirmDialogStrings = new Xrm.ConfirmDialogStrings;

	if (Mscrm.InternalUtilities.DialogConfirmStrings.tryGetDialogStringsForEnabledMetadataDialogs(Mscrm.InternalUtilities.DialogName.DeleteDialog, confirmDialogStrings, entityName, records.length, actionUri)) {
		var dialogOptions = new Xrm.DialogOptions;
		dialogOptions.height = 205;
		dialogOptions.width = 570;
		var confirmCallbackFunction = ClosePageAndGridRefreshAfterDelete,
			confirmCallbackRef = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(confirmCallbackFunction, [records]);

		Xrm.Dialog.openConfirmDialog(confirmDialogStrings, dialogOptions, confirmCallbackRef, null);
	}
}

function ClosePageAndGridRefreshAfterDelete(returnvalue, records) {
	
	var gridControl = null; 
	var parentForm = window.opener.location.href; 
	var personalSettingForm = "personalsettings.aspx"; 
	var homeForm = "home.aspx";
	//For outlook
	var homePage = "homepage.aspx";

	if (parentForm.indexOf(personalSettingForm) > -1) 
	{ 
		gridControl = window.opener.$find("emailSignatureGrid"); 
	}

	if (parentForm.indexOf(homeForm) > -1 || parentForm.indexOf(homePage) > -1)
	{ 
		gridControl = window.opener.$find("crmGrid"); 
    }

	if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
		if (records.length === 1) {
			Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
			Xrm.Utility.deleteRecord(records[0].LogicalName, records[0].Id.toString()).always(function () {
				Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
			}).then(function (response) {
				if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
					gridControl.refresh();
					closeWindow();
				}
			}, Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
		}
	}
}

//To achieve consistency with CRM 2011, template editor must occupy whole containers space (visible space only).
//The behavior should be maintained when resizing the page too.
//This can't be achieved via pure CSS, since height of table that holds template properties fields may vary depending on notifications
function ResizeTemplateEditorAndAttacmentsGrid() {
	var templateEditor = $get('TemplateEditor');
	var htmlBarWrapper = $get('htmlBarWrapper');

	$get('areaForm').style.height = "75px";
	$get('formBodyContainer').style.height = "75px";
	var areaFormDiv = $get('areaForm');

	if (!IsNull(htmlBarWrapper) && !IsNull(areaFormDiv)) {
		// template editor should occupy whole remaining space
		// there may be a case when htmlbar is present on the page, so we should take it into account when calculating available height
		var templateEditorHeight = (areaFormDiv.parentNode.clientHeight - htmlBarWrapper.clientHeight - areaFormDiv.clientHeight);
		if (templateEditorHeight > 0) {
			templateEditor.style.height = templateEditorHeight + 'px';
		}

	}
}

function CleanUpHandlers() {

	$removeHandler($get('title'), "focus", HandleFocus);
}

function EmailTemplateEditorOnLoad() {
	ResizeTemplateEditorAndAttacmentsGrid();
	$addHandler(window, "resize", ResizeTemplateEditorAndAttacmentsGrid);
	$addHandler($get('title'), "focus", HandleFocus);

	attachWindowOnUnload(CleanUpHandlers);

	attachWindowOnBeforeUnload(window_onbeforeunload);

	var templateEditor = $get("TemplateEditor");

	var htmlControl = Mscrm.FormControlInputBehavior.GetBehavior("html");

	// override the crmForm.Save method
	var crmForm = $find("crmForm");
	crmForm.add_onSave(Save);

	htmlControl.set_doNotSubmit(false);	

	GenHtml();
	htmlControl.set_defaultValue(htmlControl.get_dataValue());

	_htmlBarComponent = $find("HTMLBAR");
	if (_htmlBarComponent != null) {
	    _htmlBarComponent.set_editableControl($get('TemplateEditor'));
	}
}

// When saving, regenerate the HTML from the template body editor
function Save(sender, args) {

	GenHtml();
	_formSaved = true;
}

// We need to make sure the user's changes to the template body are propagated to the form's html value.  If not
// a user can edit the body and hit the X to close the form and the onlbur event fires after the window has already closed
// and the template will not save or alert the user.
function window_onbeforeunload(oEvent) {
	GenHtml();
	oEvent = oEvent.rawEvent;
	if (!_formSaved) {
		if ($find("crmForm").get_isDirty()) {
			oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
			return LOCID_FORMS_SAVE_CONFIRM_TITLE;
		}
	}
}

function removeSpanTags(fromHtml) {
	var templateEditor = $get("TemplateEditorHtml");
	templateEditor.innerHTML = fromHtml;
	return templateEditor.innerHTML;
}

function GenHtml() {
	Mscrm.FormControlInputBehavior.GetBehavior("html").set_dataValue(removeSpanTags($get("TemplateEditor").innerHTML));
}

function stripFormatting(evt) {
	var o = evt.target;	
	var arrElements = o.getElementsByTagName("span");

	for (var i = 0; !IsNull(arrElements) && i < arrElements.length; i++) {
		var elSpan = arrElements[i];		
		// Replace it with div so that the regular expression below can strip all formatting together
		var elDiv = document.createElement("div");
		XUI.Html.SetText(elDiv, XUI.Html.GetText(elSpan));
		elSpan.parentNode.replaceChild(elDiv, elSpan);
		// Once the span is replaced, it is removed from document hierarchy. arrElements.length  value is decreased by 1
		i--;
	
	}
	// Strip everything that is not span tag
	var s = o.innerHTML;

	// Begin CRM SE 36991: CRM 2011: Post UR12 style tags are not stripped from e-mail template Subject
	// Firefox places a <br> tag at the end of the value, replace that
	if (Sys.Browser.agent == Sys.Browser.Firefox) {
		s = s.replace("<br>", "").replace("</br", "");
	}

	// The CommentStripper utility during the build phase removes all text within HTML comment tags
	// Therefore splitting the regex string to avoid it being removed
	var reComment = new RegExp("<!-" + "-[\\s\\S]*?-->", "g");

	var re = /<(?!\/?span).*?>/ig;

	var sStripped = s.replace(/\n/g, "").replace(/\r/g, "");
	sStripped = sStripped.replace(reComment, "").replace(re, "");
	// End CRM SE

	if (s.length != sStripped.length || s != sStripped) {
		alert(LOCID_ETMPLSUBJECTNOFORMAT);
		o.innerHTML = sStripped;
	}
}

function handleKey(evt) {
	switch (evt.rawEvent.keyCode) {
		//enter
		case KEY_ENTER:
			evt.stopPropagation();
			evt.preventDefault();
			break;

			//delete, backspace
		case KEY_DEL:
		case KEY_DELETE:
		case KEY_BACKSPACE:
		default:
			break;
	}
}

function getCurrentRange() {
	var range;

	if (window.getSelection) {
		if (window.getSelection().rangeCount > 0) {
			range = window.getSelection().getRangeAt(0);
		}
	}
	else if (document.selection) {
		range = document.selection.createRange();
	}

	return range;
}

function handlePaste(evt) {
	var sText = _clipboard.GetData();
}

//Saves currently selected range \ caret position.
function saveEditorSelection() {
	if (window.getSelection)//non IE Browsers or IE9
	{
		if (window.getSelection().rangeCount > 0) {
			_savedRange = window.getSelection().getRangeAt(0);
		}
	}
	else if (document.selection)//IE
	{
		_savedRange = document.selection.createRange();
	}
}

function findParentByCondition(node, conditionDelegate) {
	for (var candidate = node; !IsNull(candidate) ; candidate = candidate.parentNode) {
		if (conditionDelegate(candidate)) {
			return candidate;
		}
	}

	return null;
}

function isAncestorOf(node, parentNode) {
	return !IsNull(findParentByCondition(node, function (candidate) { return candidate == parentNode; }));
}

function crmExecuteCommand(command, commandValue) {
	var templateEditor = $get('TemplateEditor');

	if (window.getSelection) {
		var s = window.getSelection();
		if (s.rangeCount > 0) {
			if (!isAncestorOf(s.getRangeAt(0).startContainer, templateEditor)) {
				return true;
			}
		}
	}

	var isFocused = !IsNull(document.activeElement) && document.activeElement == templateEditor; //already focused. In IE edit control doesn't lost focus.

	if (!isFocused) {
		templateEditor.focus();

		// Restore selection if needed.
		if (_savedRange != null) {
			if (window.getSelection)//non IE and there is already a selection
			{
				var s = window.getSelection();
				if (s.rangeCount > 0)
					s.removeAllRanges();
				s.addRange(_savedRange);
			}
			else
				if (document.createRange)//non IE and no selection
				{
					window.getSelection().addRange(_savedRange);
				}
				else
					if (document.selection)//IE
					{
						_savedRange.select();
					}
		}
	}

	//The below code handles cut|Copy|paste on Chrome.
	//Added check for ie11 compatability to skip the below code.
	if (!IsNull(_savedRange) && navigator.appName != 'Microsoft Internet Explorer' && !Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) //Cut\Copy\Paste workaround is not for IE.
	{
		//Execute command.
		switch (command) {
			case "cut":
				_clipboard.SetData(_savedRange.extractContents());
				_savedRange.collapse(true);
				return true;
				break;
			case "copy":
				_clipboard.SetData(_savedRange.cloneContents());
				return true;
				break;
			case "paste":
				var fragment = _clipboard.GetData();
				if (!IsNull(fragment)) {
					_savedRange.deleteContents();
					var insertedFragment = fragment.cloneNode(true);
					_savedRange.insertNode(insertedFragment);
					_savedRange.collapse(true);

				}

				return true;
				break;

			case "insertUnorderedList":
				_htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);
				return true;
				break;

			case "insertOrderedList":
				_htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);
				return true;
				break;

			case "indent":
			case "outdent":
				// These commands are not directly supported.
				return false;
			default:
		}
	}

	_htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);

	return true;
}

function onKeyUp(domEvent) {
	
}

function onKeyDown(eventData) {
	// We look at the caret position because on some browsers eventData.Target returns the outer span instead of the inner.
	// And we cannot attach event handler on the inner span, since it would break copy-paste scneario. So relying on the event
	// delegation mechanism, but using the caret position to determine the caret (in other terms the context)
	var elem = getCaretsParentNode(eventData),
		isDelKey = false;
	// allow only del, backspace, arrow and tab keys for their natural browser action
	switch (Mscrm.Utilities.getDomEventKeyCode(eventData)) {
		case 46:
		case 127:
		case Sys.UI.Key.backspace:
			isDelKey = true;
			break;
		case 9:
		case 37:
		case 38:
		case 39:
		case 40:
			return;
		default:			
			break
	}

}

/// returns the immediate parent node which contains the caret
function getCaretsParentNode(eventData) {
	var node = null;
	if (Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() < 9)
		if (document.selection.type.toUpperCase() != "CONTROL")
			node = document.selection.createRange().parentElement();
		else
			node = document.selection.createRange().commonParentElement();
	else
		if (!IsNull(window.getSelection()))
			try {
				node = window.getSelection().getRangeAt(0).commonAncestorContainer;
				if ((node.nodeType == 3) && !IsNull(eventData))
					node = getElementAtCursor(node, eventData);
				else
					if (node.nodeType !== 1)
						node = node.parentNode
			}
			catch (e) {
				node = null
			}
	return node
}

/// Put the cursor position at desired location
/// isLeft is used to determine whether to move the cursor to the left or right
function setCaret(text, isLeft, eventData) {
	var keyCode = Mscrm.Utilities.getDomEventKeyCode(eventData);
	var isArrowKey = (keyCode === 37 || keyCode === 39) ? true : false;
	var range = null;
	if (Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() < 9)
		range = document.selection.createRange();
	else
		if (!IsNull(window.getSelection()))
			range = window.getSelection();
	if (!IsNull(range))
		if (!IsNull(text) && text.nodeType === 3) {
			!IsNull(text.parentNode) &&
				text.parentNode.focus();
			var offset = isArrowKey ? 0 : isLeft ? 0 : 1;

			// CRM SE 34734: IE does not recognize a non-breaking space as a space character, but first we must escape to the expected format (\u2009)
			if (!text.nodeValue.match(new RegExp("^[\\s" + escape(ThinSpace).replace(/%/, "\\") + "]+"))) {
				text.nodeValue = isLeft ? text.nodeValue + " " : " " + text.nodeValue;;
			}
			range.collapse(text, isLeft ? text.nodeValue.length - offset : offset)
		}
}

function HandleFocus(domEvent) {
	SetCurrentActiveElement(domEvent)
}
function SetCurrentActiveElement(domEvent) {
	currentActiveElement = domEvent.target
}