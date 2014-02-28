
     function showWin2(e) {
        var w = Alloy.createController('win2').getView();
        w.open();
    }

     function showHowTo(e){
          var s = Alloy.createController('howTo').getView();
          s.open();
      }
     
      function showMailTemplate(e){
           
          var m = Alloy.createController('mailTemplate').getView();
          m.open();
      }
      function showMailAnswers(e){
          var d = Alloy.createController('mailAnswers').getView();
          d.open();
          
     }

     
      var UrbanAirship = require('ti.urbanairship');
    
        UrbanAirship.options = {
            APP_STORE_OR_AD_HOC_BUILD : true,
            PRODUCTION_APP_KEY :    'XDZW9cYlTWu2wUS9vY04xg',
            PRODUCTION_APP_SECRET : '_pxVXbzmT8K7tq_d77g0Gw',
            DEVELOPMENT_APP_KEY :   'dVFOMSuFSi2aghFBz4Eu1w',
            DEVELOPMENT_APP_SECRET :'2vrP0tDYTJCPRDQGXmGdkg',
            LOGGING_ENABLED : true
        };
    
        Ti.Network.registerForPushNotifications({
            types : [
            Ti.Network.NOTIFICATION_TYPE_BADGE, 
            Ti.Network.NOTIFICATION_TYPE_ALERT, 
            Ti.Network.NOTIFICATION_TYPE_SOUND
            ],
        
            success : function(e) {
                var token = e.deviceToken;
               UrbanAirship.registerDevice(token);
        
            },
            error : function(e) {
                alert("Error: " + e.error);
            },
            callback : function(e) {
                UrbanAirship.handleNotification(e.data);
            }
        });
    
       
      $.index.open();

    

