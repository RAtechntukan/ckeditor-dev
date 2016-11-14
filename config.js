"use strict";
/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,basicstyles,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,resize,toolbar,enterkey,entities,popup,filebrowser,find,floatingspace,listblock,richcombo,font,htmlwriter,image,indent,indentblock,indentlist,justify,list,liststyle,magicline,pastetext,pastefromword,removeformat,showborders,specialchar,tab,table,tabletools,undo,tableresize,lineutils,widget,filetools,notification,notificationaggregator,uploadwidget,uploadimage,quicktable';
	config.plugins += ',image2,raseyes';
	// %REMOVE_END%


	// Define changes to default configuration here. For example:
	config.language = 'fr';
	// config.uiColor = '#AADC6E';
  config.filebrowserImageBrowseUrl = config.filebrowserUploadUrl = '/api/cke/file';
	config.uploadUrl = '/api/cke/file';
	config.contentsCss = ['/styles/nomin/fonts.css', '/scripts/vendor/ckeditor_dev/contents.css'];
	config.skin = 'office2013';

	config.toolbar = [
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace' ] },
		'/',
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
		{ name: 'insert', items: [ 'Image', 'Raseyes', 'Table', 'SpecialChar' ] },
		'/',
		{ name: 'styles', items: [ 'Font', 'FontSize' ] },
		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] }
	];

	config.font_names =
		'Arial/Arial, Helvetica, sans-serif;' +
		'opendyslexic/opendyslexic;' +
		'Cursive/CursiveCustom;' +
		'Comic Sans MS/Comic Sans MS, cursive;' +
		'Courier New/Courier New, Courier, monospace;' +
		//'Georgia/Georgia, serif;' +
		//'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
		//'Tahoma/Tahoma, Geneva, sans-serif;' +
		'Times New Roman/Times New Roman, Times, serif;' +
		//'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
		'Verdana/Verdana, Geneva, sans-serif';
};
