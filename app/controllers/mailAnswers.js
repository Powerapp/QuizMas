   $.emailDialog.toRecipients = [''];

      var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + 'Answers_sv.pdf');
      $.emailDialog.addAttachment(f);

            if($.emailDialog.isSupported()) {
                    $.emailDialog.open();
                } else {
                    alert('Konfigurera din e-post');
                }
