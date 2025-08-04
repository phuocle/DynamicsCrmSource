var xrm = parent && parent.Xrm;
var ATTACHMENT_ID = "attachmentid";
var SRC_ATTRIBUTE = "src";
var ENTITY_ACTIVITY_MIME_ATTACHMENT = "activitymimeattachment";
var ACTIVITY_MIME_ATTACHMENT_ID = "activitymimeattachmentid";
var COMPONENT_NAME = "RestoreInlineImage";
var BLANK_URL = "about:blank";
var DATA_ATTACHMENT_ID = "data-attachment-id";

function RestoreInlineImage (entityId) {
	this.mimeAttachmentIdsInTransit = [];
	this.idToUrlMap = {};
	this.activityId = entityId;
}

RestoreInlineImage.prototype.renderInlineImages = function (imageElements) {
	var _this = this;
	return new Promise(function(resolve, reject) {
		if (!imageElements || imageElements.length == 0) {
			resolve();
		}
		else {
			var attachmentIdSources = [];
			imageElements.forEach(function (element) {
				var sourceValue = element.getAttribute(SRC_ATTRIBUTE);
				if (sourceValue) {
					sourceValue = sourceValue.toLowerCase();
					var mimeAttachmentId = element.getAttribute(DATA_ATTACHMENT_ID);
					if ((!sourceValue.startsWith("blob:") && !sourceValue.startsWith(BLANK_URL)) || mimeAttachmentId) {
						if (sourceValue.indexOf("attachmentid=") > -1) {
							// the number 13 is the length of 'attachmentid=' string
							attachmentIdSources.push({ id: sourceValue.substring(sourceValue.indexOf(ATTACHMENT_ID) + 13, sourceValue.length).toLowerCase(), element: element });
						}
						else if (mimeAttachmentId) {
							attachmentIdSources.push({ id: mimeAttachmentId.toLowerCase(), element: element });
						}
					}
				}
			});
			var attachmentIds_1 = _this.filterSourceIdsToQuery(attachmentIdSources);
			if (attachmentIds_1.length > 0) {
				_this.getContentForMimeAttachmentIds(attachmentIds_1).then(function (data) {
					_this.processResponseContent(data);
					_this.report("InlineImageLoadSuccess", attachmentIds_1.length);
					resolve();
				}, (function (error) {
					_this.report("InlineImageLoadFailed", attachmentIds_1.length, error);
					reject(error);
				}));
			}
			else {
				resolve();
			}
		}
	});
	
};

// see if there are any unresolved requests inflight and if not, add them to the collection
RestoreInlineImage.prototype.filterSourceIdsToQuery = function (sources) {
	if (sources.length > 0) {
		sources = this.checkForInTransitOrCachedContent(sources);
		if (sources.length > 0) {
			this.mimeAttachmentIdsInTransit = this.mimeAttachmentIdsInTransit.concat(sources);
		}
	}
	return sources.map(function (element) { return element.id; });
};

RestoreInlineImage.prototype.processResponseContent = function (responseData) {
	var _this = this;
	responseData.forEach(function (item) {
		var blobUrl = _this.parseImageAndCreateLocalUrl(item.mimeAttachmentId, item.body, item.mimeType);
		var currentElement = _this.mimeAttachmentIdsInTransit.find(function (element) { return element.id == item.mimeAttachmentId; });
		currentElement && currentElement.element.setAttribute(SRC_ATTRIBUTE, blobUrl);
		if (!(item.mimeAttachmentId in _this.idToUrlMap)) {
			_this.idToUrlMap[item.mimeAttachmentId] = blobUrl;
		}
		_this.mimeAttachmentIdsInTransit.splice(_this.mimeAttachmentIdsInTransit.findIndex(function (value) {
			return item.mimeAttachmentId == value.id;
		}), 1);
	});
};

RestoreInlineImage.prototype.parseImageAndCreateLocalUrl = function (attachmentId, bodyContent, mimeType) {
	// when there's no body content found, check if it's already available in the collection. Can happen when multiple images refer to same mimeid
	if (!bodyContent) {
		if (attachmentId in this.idToUrlMap) {
			return this.idToUrlMap[attachmentId];
		}
		this.report("AttachmentNotFound", attachmentId);
		return BLANK_URL;
	}
	var byteString = atob(bodyContent);
	// Write the bytes of the string to an array buffer
	var ab = new ArrayBuffer(byteString.length);
	var ia = new Uint8Array(ab);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	// Write the array buffer to a blob
	var blob = new Blob([ab], { type: mimeType });
	return URL.createObjectURL(blob);
};

RestoreInlineImage.prototype.checkForInTransitOrCachedContent = function (attachmentElements) {
	var _this = this;
	if (this.idToUrlMap) {
		for (var index = attachmentElements.length - 1; index >= 0; index--) {
			var item = attachmentElements[index];
			if (item.id in this.idToUrlMap) {
				item.element.setAttribute(SRC_ATTRIBUTE, this.idToUrlMap[item.id]);
				// remove the element from the collection
				attachmentElements.splice(index, 1);
			}
		}
	}
	// remove the id's from this collection which are in transit
	if (this.mimeAttachmentIdsInTransit.length > 0) {
		attachmentElements = attachmentElements.filter(function (item) {
			return _this.mimeAttachmentIdsInTransit.findIndex(function (element) {
				return element.id == item.id;
			}) == -1;
		});
	}
	return attachmentElements;
};

RestoreInlineImage.prototype.getContentForMimeAttachmentIds = function (mimeAttachmentIds) {
	return new Promise(function(resolve,reject) {
		var fetchXmlString = "?fetchXml=<fetch version='1.0' output-format='xml-platform' mapping='logical'>" +
		"<entity name='" + ENTITY_ACTIVITY_MIME_ATTACHMENT + "'>" +
		"<attribute name='body' />" +
		"<attribute name='mimetype' />" +
		"<filter type='or'>";
		mimeAttachmentIds.forEach(function (id) {
			fetchXmlString += "<condition attribute='" + ACTIVITY_MIME_ATTACHMENT_ID + "' operator = 'eq' value='" + id + "'></condition>";
		});
		fetchXmlString += "</filter></entity></fetch>";
		xrm.WebApi.retrieveMultipleRecords(ENTITY_ACTIVITY_MIME_ATTACHMENT, fetchXmlString).then(function (result) {
			var resolvedContent = [];
			for (var index = result.entities.length - 1; index >= 0; index--) {
				var element = result.entities[index];
				var sourceId = element[ACTIVITY_MIME_ATTACHMENT_ID];
				if (sourceId) {
					sourceId = sourceId.toLowerCase();
					resolvedContent.push({ mimeAttachmentId: sourceId, body: element.body, mimeType: element.mimetype });
					// remove the items from original source so we can track what id's content was NOT FOUND
					mimeAttachmentIds.splice(index, 1);
				}
			}
			// The API returns nothing when the record doesn't exist in the DB, we need to set the left over records as there can be no content returned for them
			mimeAttachmentIds.forEach(function (id) {
				resolvedContent.push({ mimeAttachmentId: id });
			});
			resolve(resolvedContent);
		}, function (error) {
			// error
			reject(error);
		});
	});
};

RestoreInlineImage.prototype.report = function (eventName, imageCount, data) {
	if (xrm && xrm.Reporting) {
		var customEvent = new Array();
		customEvent.push({ name: "EventName", value: eventName });
		customEvent.push({ name: "ImageCount", value: imageCount });
		if (this.activityId) {
			customEvent.push({ name: "ActivityId", value: this.activityId });
		}
		if (data) {
			customEvent.push({ name: "CustomData", value: data });
		}
		xrm.Reporting.reportSuccess(COMPONENT_NAME, customEvent);
	}
};

var BOUNCE_DELAY_TIME = 250;
var FULL_PAGE_EDITOR_FRAME_SELECTOR = "iframe.fullPageContentEditorFrame";
var BROWSER_PREVIEW_FRAME_SELECTOR = "iframe.browserPreviewFrame";
var BROWSER_PREVIEW_FRAME_CONTAINER_SELECTOR = " .browserPreviewFrameContainer"
var IFRAME = "iframe";
var SCROLL_EVENT = "scroll";

function InlineImageHandler (entityId) {
	this.restoreInlineImage = new RestoreInlineImage(xrm.Page.data.entity.getId().substring(1,32));
}
 // Register the scroll event on the FullPageContentEditor
InlineImageHandler.prototype.registerMouseScrollEventOnFullPageEditor = function(editFrame) {
        var editDocument = editFrame.contentDocument || editFrame.contentWindow.document;
	this.registerMouseScrollEventOnContainer(editDocument, editFrame);
}

// Register the scroll event on the FullPageContentEditor
InlineImageHandler.prototype.registerMouseScrollEventOnReadMode = function(readFrame) {
	var contents = readFrame.contentDocument || readFrame.contentWindow.document;
	this.registerMouseScrollEventOnContainer(contents, readFrame);
}

// Register the scroll event on the BrowserPreview in Edit mode
// The way Preview frame is setup is not the same as FullPageEditor/Designer/Readonly frame, hence
// we need to handle it in a different way.
InlineImageHandler.prototype.registerMouseScrollEventOnPreview = function(editorId, iframeNode) {
	this.deRegisterExistingScrollHandler();
	this.scrollElement = $('#' + editorId + BROWSER_PREVIEW_FRAME_CONTAINER_SELECTOR);
	this.onScrollDelegate = this.onScrollListener.bind(this, iframeNode.contents(), this.scrollElement);
	window.setTimeout(() => {
		this.onScrollListener(iframeNode.contents(), this.scrollElement); // render visible images on the first load
	}, 0);
	this.scrollElement.on(SCROLL_EVENT, this.onScrollDelegate);
}

// Re-calculate the visible elements/images and render them.
InlineImageHandler.prototype.onEditorMaximized = function() {
	// A timeout is needed that any fn's in the queue are executed. Images can load later as well.
	window.setTimeout(() => {
		// since we don't know which tab is currently active, we call re-eval scroll on both Designer/Preview tabs
		var contentFrame = $(FULL_PAGE_EDITOR_FRAME_SELECTOR);
		var editorFrame = contentFrame.contents().find(IFRAME);
		if (editorFrame && editorFrame.length > 0 && (contentFrame.css('visibilty') === 'visible' || contentFrame.css('display') !== 'none')) {
			this.onScrollListener(editorFrame.contents(), editorFrame);
		} else {
			this.onScrollListener($(BROWSER_PREVIEW_FRAME_SELECTOR), $(BROWSER_PREVIEW_FRAME_CONTAINER_SELECTOR));
		}
	}, 0);
}

// Deregisters an existing scroll handler on the editor. We do lazy de-registration from a scroll element, meaning 
// only when we get an event that another element needs to register for a scroll handler (active event from Tab).
// We also deregister on navigate away or destroy.
InlineImageHandler.prototype.deRegisterExistingScrollHandler = function() {
	if (this.scrollElement && this.onScrollDelegate) {
		this.scrollElement.removeEventListener(SCROLL_EVENT, this.onScrollDelegate);
	}
}

InlineImageHandler.prototype.registerMouseScrollEventOnContainer = function(scrollElement, containerNode) {
	this.deRegisterExistingScrollHandler();
	this.scrollElement = scrollElement;
	this.onScrollDelegate = this.onScrollListener.bind(this, this.scrollElement, containerNode);
	window.setTimeout(() => {
		this.onScrollListener(this.scrollElement, containerNode); // render visible images on the first load
	}, 0);
	this.scrollElement.addEventListener(SCROLL_EVENT, this.onScrollDelegate);
}


// Improvements that can be made - 
// a. remove the scroll listener once we render all images
// b. when an image loads fails consistently 2-3 times, do not process again
InlineImageHandler.prototype.onScrollListener = function(iframeNode, containerNode) {
	var that = this;
	if (this.onScrollTimer) {
		clearTimeout(this.onScrollTimer);
	}
	this.onScrollTimer = setTimeout(() => {
		var imageTags = iframeNode.getElementsByTagName("img");
		var visibleImages = [];
		// the container props can be calculated just once instead for each img tag.
		var containerHeight = containerNode.offsetHeight;
		var containerScrollTop = containerNode.scrollTop;
		Array.from(imageTags).forEach(element => {
			if (that.checkVisibleInViewPort(element, containerHeight, containerScrollTop)) {
				visibleImages.push(element);
			}
		});
		that.restoreInlineImage.renderInlineImages(visibleImages);
	}, BOUNCE_DELAY_TIME);
}

// NOTE: Firefox needs a different event to listen to.
// also need to verify mobile and other old browsers.
// https://stackoverflow.com/questions/8189840/get-mouse-wheel-events-in-jquery                    
// NOTE - we don't need to check the left/right coordinates here as they can change based on the direction attribute.
// Also, if a portion of the element is visible, we assume the element is visible.
InlineImageHandler.prototype.checkVisibleInViewPort = function(element, containerHeight, containerScrollTop) {
	var elementCoordinates = element.getBoundingClientRect();
	var elementTop = elementCoordinates.top;
	var elementBottom = elementTop + element.scrollHeight || element.clientHeight;
	var viewportBottom = containerScrollTop + containerHeight;
	return elementBottom > containerScrollTop && elementTop < viewportBottom;
}
				

CKEDITOR.plugins.emailrestoreinlineimages = {
	init: function (editor) {
		editor.on('instanceReady', function (ev) {
			setTimeout( ()=>{
				var inlineImageHandler = new InlineImageHandler(xrm.Page.data.entity.getId().substring(1,32));
				var editFrame = ev.editor.container.find("iframe").$[0];
				inlineImageHandler.registerMouseScrollEventOnFullPageEditor(editFrame);
			});
		});
	}
};
 
CKEDITOR.plugins.add('emailrestoreinlineimages', CKEDITOR.plugins.emailrestoreinlineimages);