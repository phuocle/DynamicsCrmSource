CKEDITOR.dialog.add('embedmediaDialog', function (editor)
{
	return {
		title: editor.lang.embedmedia.title,

		contents: [
			{
				id: 'info',
				elements: [
					{
						type: 'text',
						id: 'embedHTML',
						label: editor.lang.embedmedia.mediaHtml,

						setup: function (widget) {
							this.setValue(widget.data.url);
						},

						validate: CKEDITOR.dialog.validate.html(editor.lang.common.invalidValue)
					},
					{
						type: 'html',
						id: 'unacceptedContentMsg',
						html: '<div role="note">' + editor.lang.embedmedia.unacceptedContent + '</div>'
					}
				]
			}
		],

		onOk: function () {
			var content = this.getValueOf('info', 'embedHTML').trim();
			var temp = new CKEDITOR.dom.element( 'div', editor.document );
			temp.setHtml(content);

			// Loop through and add all sibling nodes in content
			for (var i = 0; i < temp.$.children.length; i++) {
				var element = CKEDITOR.dom.element.createFromHtml(temp.$.children[i].outerHTML, editor.document);
				editor.insertElement(element);
			}
		}
	};
});
