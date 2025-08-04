
CKEDITOR.editorConfig = function(config)
{
	config.skin = "crmflat";
	config.removeButtons = "Subscript,Superscript";
	config.removeDialogTabs = "link:advanced";
	config.extraAllowedContent = 'blockquote a p strong em u strike span table tbody tr td ol ul li(*){*};video(*){*}[*];iframe(*){*}[*]';
	config.pasteFromWordRemoveStyles = false;
	config.pasteFromWordRemoveFontStyles = false;
	config.dialog_backgroundCoverColor = "black";
	config.dialog_backgroundCoverOpacity = .8;
}
