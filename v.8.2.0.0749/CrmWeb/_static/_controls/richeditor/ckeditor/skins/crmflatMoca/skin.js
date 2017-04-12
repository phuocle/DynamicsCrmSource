﻿/*!
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * This software is covered by CKEditor Commercial License. Usage without proper license is prohibited.
 */

/*
skin.js
=========

In this file we interact with the CKEditor JavaScript API to register the skin
and enable additional skin related features.

The level of complexity of this file depends on the features available in the
skin. There is only one mandatory line of code to be included here, which is
setting CKEDITOR.skin.name. All the rest is optional, but recommended to be
implemented as they make higher quality skins.

For this skin, the following tasks are achieved in this file:

	1. Register the skin.
	2. Register browser specific skin files.
	3. Define the "Chameleon" feature.
	4. Register the skin icons, to have them used on the development version of
		the skin.
*/

// 1. Register the skin
// ----------------------
// The CKEDITOR.skin.name property must be set to the skin name. This is a
// lower-cased name, which must match the skin folder name as well as the value
// used on config.skin to tell the editor to use the skin.
//
// This is the only mandatory property to be defined in this file.
CKEDITOR.skin.name = 'crmflatMoca';

// 2. Register browser specific skin files
// -----------------------------------------
// (http://docs.cksource.com/CKEditor_4.x/Skin_SDK/Browser_Hacks)
//
// To help implementing browser specific "hacks" to the skin files and have it
// easy to maintain, it is possible to have dedicated files for such browsers,
// for both the main skin CSS files: editor.css and dialog.css.
//
// The browser files must be named after the main file names, appended by an
// underscore and the browser name (e.g. editor_ie.css, dialog_ie8.css).
//
// The accepted browser names must match the CKEDITOR.env properties. The most
// common names are: ie, webkit and gecko. Check the documentation for the complete
// list:
// http://docs.ckeditor.com/#!/api/CKEDITOR.env
//
// Internet explorer is an expection and the browser version is also accepted
// (ie7, ie8, ie9, ie10), as well as a special name for IE in Quirks mode (iequirks).
//
// The available browser specific files must be set separately for editor.css
// and dialog.css.
CKEDITOR.skin.ua_editor = 'ie,iequirks,ie7,ie8,gecko';
CKEDITOR.skin.ua_dialog = 'ie,iequirks,ie7,ie8';

/*
// 3. Define the "Chameleon" feature
// -----------------------------------
// (http://docs.cksource.com/CKEditor_4.x/Skin_SDK/Chameleon)
//
// "Chameleon" is a unique feature available in CKEditor. It makes it possible
// to end users to specify which color to use as the basis for the editor UI.
// It is enough to set config.uiColor to any color value and voila, the UI is
// colored.
//
// The only detail here is that the skin itself must be compatible with the
// Chameleon feature. That's because the skin CSS files are the responsible to
// apply colors in the UI and each skin do that in different way and on
// different places.
//
// Implementing the Chameleon feature requires a bit of JavaScript programming.
// The CKEDITOR.skin.chameleon function must be defined. It must return the CSS
// "template" to be used to change the color of a specific CKEditor instance
// available in the page. When a color change is required, this template is
// appended to the page holding the editor, overriding styles defined in the
// skin files.
//
// The "$color" placeholder can be used in the returned string. It'll be
// replaced with the desired color.
CKEDITOR.skin.chameleon = ( function() {
	// This method can be used to adjust colour brightness of various element.
	// Colours are accepted in 7-byte hex format, for example: #00ff00.
	// Brightness ratio must be a float number within [-1, 1],
	// where -1 is black, 1 is white and 0 is the original colour.
	var colorBrightness = ( function() {
		function channelBrightness( channel, ratio ) {
			var brighten = ratio < 0 ? (
					0 | channel * ( 1 + ratio )
				) : (
					0 | channel + ( 255 - channel ) * ratio
				);

			return ( '0' + brighten.toString( 16 ) ).slice( -2 );
		}

		return function( hexColor, ratio ) {
			var channels = hexColor.match( /[^#]./g );
			var channels = hexColor.match( /[^#]./g );

			for ( var i = 0 ; i < 3 ; i++ )
				channels[ i ] = channelBrightness( parseInt( channels[ i ], 16 ), ratio );

			return '#' + channels.join( '' );
		};
	} )(),

	// Use this function just to avoid having to repeat all these rules on
	// several places of our template.
	verticalGradient = ( function() {
		var template = new CKEDITOR.template( 'background:#{to};' +
			'background-image:linear-gradient(to bottom,{from},{to});' +
			'filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0,startColorstr=\'{from}\',endColorstr=\'{to}\');' );

		return function( from, to ) {
			return template.output( { from: from, to: to } );
		};
	} )(),

	// Style templates for various user interface parts:
	// 	* Default editor template.
	// 	* Default panel template.
	templates = {
		editor: new CKEDITOR.template(
			'{id}.cke_chrome [border-color:{defaultBorder};] ' +
			'{id} .cke_top [ ' +
					'{defaultGradient}' +
					'border-bottom-color:{defaultBorder};' +
				'] ' +
			'{id} .cke_bottom [' +
					'{defaultGradient}' +
					'border-top-color:{defaultBorder};' +
				'] ' +
			'{id} .cke_resizer [border-right-color:{ckeResizer}] ' +

			// Dialogs.
			'{id} .cke_dialog_title [' +
					'{defaultGradient}' +
					'border-bottom-color:{defaultBorder};' +
				'] ' +
			'{id} .cke_dialog_footer [' +
					'{defaultGradient}' +
					'outline-color:{defaultBorder};' +
					'border-top-color:{defaultBorder};' +	// IE7 doesn't use outline.
				'] ' +
			'{id} .cke_dialog_tab [' +
					'{lightGradient}' +
					'border-color:{defaultBorder};' +
				'] ' +
			'{id} .cke_dialog_tab:hover [' +
					'{mediumGradient}' +
				'] ' +
			'{id} .cke_dialog_contents [' +
					'border-top-color:{defaultBorder};' +
				'] ' +
			'{id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [' +
					'background:{dialogTabSelected};' +
					'border-bottom-color:{dialogTabSelectedBorder};' +
				'] ' +
			'{id} .cke_dialog_body [' +
					'background:{dialogBody};' +
					'border-color:{defaultBorder};' +
				'] ' +

			// Toolbars, buttons.
			'{id} .cke_toolgroup [' +
					'{lightGradient}' +
					'border-color:{defaultBorder};' +
				'] ' +
			'{id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [' +
					'{mediumGradient}' +
				'] ' +
			'{id} .cke_button_on [' +
					'{ckeButtonOn}' +
				'] ' +
			'{id} .cke_toolbar_separator [' +
					'background-color: {ckeToolbarSeparator};' +
				'] ' +

			// Combo buttons.
			'{id} .cke_combo_button [' +
					'border-color:{defaultBorder};' +
					'{lightGradient}' +
				'] ' +
			'{id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [' +
					'border-color:{defaultBorder};' +
					'{mediumGradient}' +
				'] ' +

			// Elementspath.
			'{id} .cke_path_item [' +
					'color:{elementsPathColor};' +
				'] ' +
			'{id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [' +
					'background-color:{elementsPathBg};' +
				'] ' +

			'{id}.cke_panel [' +
				'border-color:{defaultBorder};' +
			'] '
		),
		panel: new CKEDITOR.template(
			// Panel drop-downs.
			'.cke_panel_grouptitle [' +
					'{lightGradient}' +
					'border-color:{defaultBorder};' +
				'] ' +

			// Context menus.
			'.cke_menubutton_icon [' +
					'background-color:{menubuttonIcon};' +
				'] ' +
			'.cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [' +
					'background-color:{menubuttonIconHover};' +
				'] ' +
			'.cke_menuseparator [' +
					'background-color:{menubuttonIcon};' +
				'] ' +

			// Color boxes.
			'a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [' +
					'border-color:{defaultBorder};' +
				'] ' +
			'a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [' +
					'background-color:{ckeColorauto};' +
					'border-color:{defaultBorder};' +
				'] '
		)
	};

	return function( editor, part ) {
		var uiColor = editor.uiColor,
			// The following are CSS styles used in templates.
			// Styles are generated according to current editor.uiColor.
			templateStyles = {
				// CKEditor instances have a unique ID, which is used as class name into
				// the outer container of the editor UI (e.g. ".cke_1").
				//
				// The Chameleon feature is available for each CKEditor instance,
				// independently. Because of this, we need to prefix all CSS selectors with
				// the unique class name of the instance.
				id: '.' + editor.id,

				// These styles are used by various UI elements.
				defaultBorder: colorBrightness( uiColor, -0.1 ),
				defaultGradient: verticalGradient( colorBrightness( uiColor, 0.9 ), uiColor ),
				lightGradient: verticalGradient( colorBrightness( uiColor, 1 ), colorBrightness( uiColor, 0.7 ) ),
				mediumGradient: verticalGradient( colorBrightness( uiColor, 0.8 ), colorBrightness( uiColor, 0.5 ) ),

				// These are for specific UI elements.
				ckeButtonOn: verticalGradient( colorBrightness( uiColor, 0.6 ), colorBrightness( uiColor, 0.7 ) ),
				ckeResizer: colorBrightness( uiColor, -0.4 ),
				ckeToolbarSeparator: colorBrightness( uiColor, 0.5 ),
				ckeColorauto: colorBrightness( uiColor, 0.8 ),
				dialogBody: colorBrightness( uiColor, 0.7 ),
				// Use gradient instead of simple hex to avoid further filter resetting in IE.
				dialogTabSelected: verticalGradient( '#FFFFFF', '#FFFFFF' ),
				dialogTabSelectedBorder: '#FFF',
				elementsPathColor: colorBrightness( uiColor, -0.6 ),
				elementsPathBg: uiColor,
				menubuttonIcon: colorBrightness( uiColor, 0.5 ),
				menubuttonIconHover: colorBrightness( uiColor, 0.3 )
			};

		return templates[ part ]
			.output( templateStyles )
			.replace( /\[/g, '{' )				// Replace brackets with braces.
			.replace( /\]/g, '}' );
	};
} )();
*/
// Language specific font sizing
CKEDITOR.on('instanceLoaded',
    function(e) {
        var editor = e.editor;
        if (editor.config.skin !== 'crmflatMoca') {
            return;
        }
        var html = '';
        var addRule = function(selector, property, value) {
            if (value !== undefined && value !== null) {
                html += selector + '{' + property + ':' + value + ';}';
            }
        };
        var fontSize = function(selector, value) {
            addRule(selector, 'font-size', value);
        };
        fontSize('.cke_dialog .cke_dialog_title', editor.lang.langSizing.mocaDialogTitle);
        fontSize('.cke_dialog .cke_dialog_tab_label,\
		.cke_dialog div.cke_accessibility_legend h1,\
		.cke_dialog .cke_dialog_ui_vbox_child_fieldset > fieldset > legend,\
		.cke_dialog .cke_dialog_ui_hbox_child_fieldset > fieldset > legend,\
		.cke_dialog.cke_dialog .cke_dialog_ui_vbox_child_html_preview div.cke_dialog_ui_vbox_child_html_preview_label',
            editor.lang.langSizing.mocaDialogSectionLabel);
        fontSize('.cke_dialog .cke_dialog_body label,\
		.cke_dialog .cke_dialog_body .cke_dialog_ui_labeled_content,\
		.cke_dialog .cke_dialog_ui_vbox_child input.cke_dialog_ui_input_text,\
		.cke_dialog .cke_dialog_ui_vbox_child input.cke_dialog_ui_input_password,\
		.cke_dialog .cke_dialog_ui_vbox_child select.cke_dialog_ui_input_select,\
		.cke_dialog div.cke_accessibility_legend dt,\
		.cke_dialog td.cke_dialog_ui_vbox_child_html>div.cke_dialog_ui_html[role=note]',
            editor.lang.langSizing.mocaDialogField);
        fontSize('.cke_dialog div.cke_accessibility_legend dd,\
		.cke_dialog .cke_dialog_ui_html',
            editor.lang.langSizing.mocaDialogDescription);
        fontSize('.cke_dialog .cke_dialog_footer_buttons a.cke_dialog_ui_button span',
            editor.lang.langSizing.mocaDialogButton);
        fontSize('.cke_combo_text', editor.lang.langSizing.mocaDropDownToolbarLabel);
        var mainHtml = '<style id="cke_langStyle">' + html + '</style>';
        $('style#cke_langStyle').remove();
        $('html head').append(mainHtml);

        html = '';
        fontSize('html.cke_panel_container .cke_panel_grouptitle', editor.lang.langSizing.mocaDropDownGroupTitle);
        fontSize('html.cke_panel_container .cke_panel_listItem', editor.lang.langSizing.mocaDropDownOption);
        fontSize('html.cke_panel_container div.cke_panel_block.cke_colorblock a.cke_colorauto td',
            editor.lang.langSizing.mocaColorPickerAutomaticText);

        /* Add skin specific iframe css here */
        addRule('body.cke_editable', 'margin', '25px');

        iframeHTML = '<style id="cke_langStyle">' + html + '</style>';
        CKEDITOR.on('ariaWidget',
            function(evt) {
                var iframe = $(evt.data.$);
                if (!iframe.parent().is("." + editor.id)) {
                    return;
                }
                var doc = $(evt.data.$.contentDocument);
                doc.find('style#cke_langStyle').remove();
                doc.find('html head').append(iframeHTML);
            });
    });