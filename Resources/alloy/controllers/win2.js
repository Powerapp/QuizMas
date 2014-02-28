function Controller() {
    function closeMe() {
        $.quizWin.close();
        Ti.App.fireEvent("closeWindow");
    }
    function showAnswers() {
        if (true == click) {
            $.answersBtnLabel.text = "Göm svaren";
            Ti.App.fireEvent("showAnswerLabels");
            click = false;
        } else {
            $.answersBtnLabel.text = "Visa svaren";
            Ti.App.fireEvent("hideAnswerLabels");
            click = true;
        }
    }
    function keepPhoneAwake() {
        11 == $.quizViews.currentPage && (Ti.App.idleTimerDisabled = true);
    }
    function playAudio(e) {
        e.source.backgroundImage = "/images/stop.png";
        soundPlayer = Ti.Media.createSound({
            allowBackground: true,
            url: "/" + e.source.url,
            currentPlayingButton: e.source
        });
        soundPlayer.play();
        soundPlayer.addEventListener("complete", function() {
            soundPlayer.currentPlayingButton.backgroundImage = "/images/play.png";
            soundPlayer.stop();
        });
        Ti.App.addEventListener("closeWindow", function() {
            soundPlayer.stop();
            soundPlayer.currentPlayingButton.backgroundImage = "/images/play.png";
        });
    }
    function handleClickOnButton(e) {
        if (e.source.url) if (soundPlayer && soundPlayer.isPlaying()) {
            e.source.backgroundImage = "/images/play.png";
            soundPlayer.currentPlayingButton.backgroundImage = "/images/play.png";
            soundPlayer.stop();
            e.source != soundPlayer.currentPlayingButton && playAudio(e);
        } else playAudio(e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "win2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.quizWin = Ti.UI.createWindow({
        backgroundColor: "#195b20",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "quizWin",
        fullscreen: "true",
        navBarHidden: "true"
    });
    $.__views.quizWin && $.addTopLevelView($.__views.quizWin);
    $.__views.closeBtn = Ti.UI.createView({
        width: "50%",
        height: "40dp",
        top: "0dp",
        bottom: "0dp",
        left: "0dp",
        backgroundColor: "#233875",
        id: "closeBtn"
    });
    $.__views.quizWin.add($.__views.closeBtn);
    closeMe ? $.__views.closeBtn.addEventListener("click", closeMe) : __defers["$.__views.closeBtn!click!closeMe"] = true;
    $.__views.closeBtnLabel = Ti.UI.createLabel({
        width: "50dp",
        height: "40dp",
        text: "Meny",
        left: "30dp",
        color: "#fff",
        font: {
            fontSize: "12sp"
        },
        id: "closeBtnLabel"
    });
    $.__views.closeBtn.add($.__views.closeBtnLabel);
    $.__views.answersBtn = Ti.UI.createView({
        width: "50%",
        height: "40dp",
        top: "0dp",
        bottom: "0dp",
        right: "0dp",
        backgroundColor: "#233875",
        id: "answersBtn"
    });
    $.__views.quizWin.add($.__views.answersBtn);
    showAnswers ? $.__views.answersBtn.addEventListener("click", showAnswers) : __defers["$.__views.answersBtn!click!showAnswers"] = true;
    $.__views.answersBtnLabel = Ti.UI.createLabel({
        width: "100dp",
        height: "40dp",
        right: "10dp",
        text: "Visa svaren",
        color: "#fff",
        textAlign: "center",
        font: {
            fontSize: "12sp"
        },
        id: "answersBtnLabel"
    });
    $.__views.answersBtn.add($.__views.answersBtnLabel);
    var __alloyId1 = [];
    $.__views.quizViews = Ti.UI.createScrollableView({
        top: "40dp",
        views: __alloyId1,
        id: "quizViews",
        showPagingControl: "true"
    });
    $.__views.quizWin.add($.__views.quizViews);
    handleClickOnButton ? $.__views.quizViews.addEventListener("click", handleClickOnButton) : __defers["$.__views.quizViews!click!handleClickOnButton"] = true;
    keepPhoneAwake ? $.__views.quizViews.addEventListener("scrollEnd", keepPhoneAwake) : __defers["$.__views.quizViews!scrollEnd!keepPhoneAwake"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var click = true;
    var OS_is_Android = true;
    OS_is_Android && ($.closeBtn.visible = false);
    var data = [ {
        Question: "Låten först, frågorna sen.\n\nA: Natten går tunga fjät, men vad betyder egentligen ordet ”fjät”?\n\nB: Vilken är Lucias hemstad?\n\nC: Lussekatter innehåller saffran. Från vilken blomma utvinner man saffran?",
        Id: "1",
        Alternatives: [ "/soundfiles/q1.mp3" ],
        Titles: [],
        Answers: [ "Steg, fotsteg, spår 1p", "Syrakusa på Sicilien 1p", "Krokus (saffranskrokus) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Fyra låtar, fyra Disneyfilmer. Vad heter filmerna?",
        Id: "2",
        Alternatives: [ "/soundfiles/q2a.mp3", "/soundfiles/q2b.mp3", "/soundfiles/q2c.mp3", "/soundfiles/q2d.mp3" ],
        Titles: [ "a", "b", "c", "d" ],
        Answers: [ "Lady och Lufsen/Lady and the Tramp (Låten heter Bella Notte. Originalfilmen kom redan 1955) 1p", "Lejonkungen/The Lion King (Låten heter Hakuna Matata) 1p", "Pinocchio (Låten heter Ser Du Stjärnan i det Blå) 1p", "Aladdin (Låten heter En Helt Ny Värld) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Låten först, frågorna sen.\n\nA: Vad heter artisten?\n\nB: Vad heter den Europaväg som förbinder Stockholm och Olso?\n\nC: Mellan vilka två amerikanska städer sträckte sig den klassiska, numera nerlagda landsvägen Route 66?",
        Id: "3",
        Alternatives: [ "/soundfiles/q3.mp3" ],
        Titles: [],
        Answers: [ "Chris Rea 1p", "E18 1p", "Chicago och Los Angeles 2p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Fyra låtar. Vad heter artisten/gruppen?",
        Id: "4",
        Alternatives: [ "/soundfiles/q4a.mp3", "/soundfiles/q4b.mp3", "/soundfiles/q4c.mp3", "/soundfiles/q4d.mp3" ],
        Titles: [ "a", "b", "c", "d" ],
        Answers: [ "Triad (Låten heter Tänd Ett Ljus) 1p", "Justin Bieber (Låten heter Mistletoe) 1p", "Boney M (Låten heter Mary´s Boy Child) 1p", "Johnny Cash (Låten heter The Little Drummer Boy) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Låten först, frågorna sen.\n\nA: Vem har skrivit låten?\n\nB: Låten utgjorde grunden för två välgörenhetskoncerter. En i London och en i Philadelphia. Vad hette koncerten och vilket år var det?\n\nC: Till vilket ändamål samlades det in pengar?",
        Id: "5",
        Alternatives: [ "/soundfiles/q5.mp3" ],
        Titles: [],
        Answers: [ "Bob Geldof ger rätt svar (egentligen skriven av både Bob Geldof och Midge Ure) 1p", "Koncerten hette Live Aid och året var 1985 2p", "Svältkatastrofen i Etiopien 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Duetter. Namnge båda artisterna. Ett poäng per namn.",
        Id: "6",
        Alternatives: [ "/soundfiles/q6a.mp3", "/soundfiles/q6b.mp3", "/soundfiles/q6c.mp3" ],
        Titles: [ "a", "b", "c" ],
        Answers: [ "Peter Jöback och Sissel Kyrkjebø (Låten heter Gå Inte Förbi) 2p", "The Pogues/Shane MacGowan och Kirsty MacColl (Låten heter Fairytale of New York) 2p", "Lotta Engberg och Christer Sjögren (Låten heter Blue Christmas) 2p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Låten först, frågorna sen.\n\nA: Låten kom 1980. Vad hette albumet?\n\nB: I filmversionen av Mama Mia spelade en svensk skådespelare en av ”papporna”. Vad heter han?\n\nC: När vi skålar vid tolvslaget i Sverige vad är då klockan i New York, USA respektive Auckland, Nya Zeeland?",
        Id: "7",
        Alternatives: [ "/soundfiles/q7.mp3" ],
        Titles: [],
        Answers: [ "Super Trouper 1p", "Stellan Skarsgård 1p", "NY minus 6 timmar alltså kl 18.00 den 31:e december och Auckland plus 12 timmar alltså kl 12.00 den 1:a januari 2p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Följande fyra låtar kan på något sätt associeras med djur. Vilka är djuren?",
        Id: "8",
        Alternatives: [ "/soundfiles/q8a.mp3", "/soundfiles/q8b.mp3", "/soundfiles/q8c.mp3", "/soundfiles/q8d.mp3" ],
        Titles: [ "a", "b", "c", "d" ],
        Answers: [ "Gris/pig (Miss Piggy, låten heter The Christmas Queen) 1p", "Ren/reindeer (John Denver sjunger låten Rudolph the Red Nosed Reindeer) 1p", "Häst/horse (Michael Bublé sjunger låten Jingle Bells. I texten...one horse open sleigh) 1p", "Björn (Björn Skifs sjunger låten Tomtarnas Julnatt) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Låten först, frågorna sen.\n\nA: 2013 adopterade Carola en dotter. Från vilket land kommer flickan?\n\nB: Vilket år vann Carola Eurovision Song Contest med låten Fångad av en Stormvind?\n\nC: Hon slog igenom i Melodifestivalen 1983 med låten Främling iklädd en gul 80-tals stass. Vilken färg hade bältet?",
        Id: "9",
        Alternatives: [ "/soundfiles/q9.mp3" ],
        Titles: [],
        Answers: [ "Sydafrika (Dottern heter Zoe) 1p", "1991 (Den engelska titeln är Captured by a Lovestorm) 1p", "Vitt (Efter vinsten skänktes vinnarkläderna till Doktor Skoras vaxkabinett i Jönköping) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Tre låtar. Musiken tystnar för att dölja ETT ord. Fyll i ordet som saknas. Här gäller det att spetsa öronen och vara uppmärksam!",
        Id: "10",
        Alternatives: [ "/soundfiles/q10a.mp3", "/soundfiles/q10b.mp3", "/soundfiles/q10c.mp3" ],
        Titles: [ "a", "b", "c" ],
        Answers: [ "Happy (Mariah Carey, låten heter All I Want for Christmas is You) 1p", "Young (John Lennon & Yoko Ono, låten heter Happy Xmas (War is Over)) 1p", "Bjällerklang (Adolphson & Falk, låten heter Mer Jul) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Fyra låtar. Vad heter låten?",
        Id: "11",
        Alternatives: [ "/soundfiles/q11a.mp3", "/soundfiles/q11b.mp3", "/soundfiles/q11c.mp3", "/soundfiles/q11d.mp3" ],
        Titles: [ "a", "b", "c", "d" ],
        Answers: [ "Auld Lang Syne (Artisten heter John McDermott) 1p", "Winter Wonderland (Artisten heter Bing Crosby) 1p", "Mistletoe and Wine (Artisten heter Cliff Richard) 1p", "Twelwe Days of Christmas (Artisten heter Perry Como) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    }, {
        Question: "Låten först, frågorna sen.\n\nA: Vad heter låten?\n\nB: Hur många strängar har en ukulele?\n\nC: Vad heter Barack Obamas fru?",
        Id: "12",
        Alternatives: [ "/soundfiles/q12.mp3" ],
        Titles: [],
        Answers: [ "Sjömansjul på Hawaii (Hasse Andersson sjunger) 1p", "Fyra (Instrumentet kommer ursprungligen från Portugal och fick stor spridning på Hawaiiöarna under 1800-talet) 1p", "Michelle Obama (född Robinson) 1p" ],
        Top: [ "70dp", "140dp", "210dp", "280dp", "350dp" ]
    } ];
    var soundPlayer;
    var rows = [];
    for (var i = 0; data.length > i; i++) {
        var row = Alloy.createController("row", data[i]).getView();
        rows.push(row);
    }
    $.quizViews.setViews(rows);
    __defers["$.__views.closeBtn!click!closeMe"] && $.__views.closeBtn.addEventListener("click", closeMe);
    __defers["$.__views.answersBtn!click!showAnswers"] && $.__views.answersBtn.addEventListener("click", showAnswers);
    __defers["$.__views.quizViews!click!handleClickOnButton"] && $.__views.quizViews.addEventListener("click", handleClickOnButton);
    __defers["$.__views.quizViews!scrollEnd!keepPhoneAwake"] && $.__views.quizViews.addEventListener("scrollEnd", keepPhoneAwake);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;