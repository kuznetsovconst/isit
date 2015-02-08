 (function()
{
   CKEDITOR.plugins.add( 'bootstrapbg',
   {   
      requires : ['richcombo'], //, 'styles' ],
      init : function( editor )
      {
         var config = editor.config,
            lang = editor.lang.format;

         // Gets the list of tags from the settings.
         var tags = []; //new Array();
         //this.add('value', 'drop_text', 'drop_label');
         tags[0]=["label-default", "blue", "blue"];
         tags[1]=["label-primary", "green", "green"];
         tags[2]=["label-danger", "gray", "gray"];
         
         // Create style objects for all defined styles.

         editor.ui.addRichCombo( 'bootstrapBg',
            {
               label : "VASYA",
               title :"I",
               voiceLabel : "Insert tokens",
               className : 'cke_format',
               multiSelect : false,

               panel :
               {
                  css : [ config.contentsCss, CKEDITOR.getUrl( editor.skinPath + 'editor.css' ) ],
                  voiceLabel : lang.panelVoiceLabel
               },


               init : function()
               {
                  this.startGroup( "BootstrapBg" );
                  //this.add('value', 'drop_text', 'drop_label');
                  for (var this_tag in tags){
                     this.add(tags[this_tag][0], tags[this_tag][1], tags[this_tag][2]);
                  }

                  editor.ui.addButton( 'bootstrapBg',
                  {
                   label: 'Обернуть код',
                   command: 'insertCodeTag',
                   icon: iconcPath + 'insertCodeTag.png'
                  } );
                                 
               },

               onClick : function( value )
               {         
                  // editor.focus();
                  var selected_text = editor.getSelection().getSelectedText();
                  var lead = editor.document.createElement('span');
                  lead.setText(selected_text);
                  lead.setAttributes({class: 'label ' + value})
                  editor.insertElement(lead);
               }
            });
      }
   });
})();