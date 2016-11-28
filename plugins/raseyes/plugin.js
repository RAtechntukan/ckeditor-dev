"use strict";
CKEDITOR.plugins.add( 'raseyes', {
    requires: 'widget',
    icons:'raseyes',
    init: function( editor ) {
      editor.widgets.add( 'raseyes', {
          button: 'Create seyes paragraph',
          template:
            '<p class="seyes-content">' +
              '' +
            '</p>',
          editables: {
              content: {
                  selector: '.seyes-content',
                  allowedContent: 'br strong em s u span{color}'
              }
          },
          allowedContent:'p(!seyes-content)',
          requiredContent: 'p(seyes-content)',
          upcast: function( element ) {
              return element.name == 'p' && element.hasClass( 'seyes-content' );
          }
      } );
    }
} );
