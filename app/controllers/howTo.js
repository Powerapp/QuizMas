    function closeMe(e){
        $.howToWin.close();
    }

    var OS_is_Android = Ti.Platform.osname == 'android';
    
    if(OS_is_Android){
       $.closeBtn.visible = false; 
        
    }
