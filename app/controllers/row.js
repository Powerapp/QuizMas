    //1. Denna översta raden är lite magisk. Det är så det funkar i Alloy för att skicka med data mellan komponeneterna. Variabeln arguments finns där automatiskt. I detta fallet blir arrayen med allt innehåll som vi skapade i index controllern arguments[0].
    var args = arguments[0] || {};
    var OS_is_Android = Ti.Platform.osname == 'android';
    
    //2. Sätter frågan som value för label med id question
    $.question.text = args["Question"];
    $.viewNumber.text = args["Id"];
    $.answerA.text = args["Answers"][0];
    $.answerB.text = args["Answers"][1];
    $.answerC.text = args["Answers"][2];
    $.answerD.text = args["Answers"][3];
    $.answerE.text = args["Answers"][4];

    
    for (var i = 0; i < args["Alternatives"].length; i++) {
    
        var buttonAlternative = Ti.UI.createButton({
            title : i + 1,
            backgroundImage : "/images/play.png",
            color : '#fff',
            font:{fontSize:"11dp"},
            height : '44dp',
            width : '44dp',
            top : args["Top"][i], //(i + 1) * 70 + "dp",
            url : args["Alternatives"][i],
            title : args["Titles"][i],
            left : "30dp",
    
    
        });
    
        if (args["Id"] == 1 || args["Id"] == 3 || args["Id"] == 5 || args["Id"] == 9) {
            buttonAlternative.top = '20dp';
            $.question.top = '80dp';
            $.answerA.text = "A: " + args["Answers"][0];
            $.answerB.text = "B: " + args["Answers"][1];
            $.answerC.text = "C: " + args["Answers"][2];
            $.answerA.left = '30dp';
            $.answerB.left = '30dp';
            $.answerC.left = '30dp';
            $.answerA.top = '320dp';
            $.answerB.top = '350dp';
            $.answerC.top = '380dp';
        }
        
        if (args["Id"] == 12){
            
            buttonAlternative.top = '20dp';
            $.question.top = '80dp';
            $.answerA.text = "A: " + args["Answers"][0];
            $.answerB.text = "B: " + args["Answers"][1];
            $.answerC.text = "C: " + args["Answers"][2];
            $.answerA.left = '30dp';
            $.answerB.left = '30dp';
            $.answerC.left = '30dp';
            $.answerA.top = '300dp';
            $.answerB.top = '340dp';
            $.answerC.top = '390dp';
            
            
            
        }
        if(args["Id"] == 7){
            buttonAlternative.top = '20dp';
            $.question.top = '80dp';
            $.answerA.text = "A: " + args["Answers"][0];
            $.answerB.text = "B: " + args["Answers"][1];
            $.answerC.text = "C: " + args["Answers"][2];
            $.answerA.left = '30dp';
            $.answerB.left = '30dp';
            $.answerC.left = '30dp';
            $.answerA.top = '300dp';
            $.answerB.top = '330dp';
            $.answerC.top = '360dp'; 
            
            
        }
        $.row.add(buttonAlternative);
    
    };
    Ti.App.addEventListener('showAnswerLabels', function(e) {
        $.answerA.visible = true;
        $.answerB.visible = true;
        $.answerC.visible = true;
        $.answerD.visible = true;
        $.answerE.visible = true;
    });
    
    Ti.App.addEventListener('hideAnswerLabels', function(e) {
        $.answerA.visible = false;
        $.answerB.visible = false;
        $.answerC.visible = false;
        $.answerD.visible = false;
        $.answerE.visible = false;
    });
    
