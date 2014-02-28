function Controller() {
    function showWin2() {
        var w = Alloy.createController("win2").getView();
        w.open();
    }
    function showHowTo() {
        var s = Alloy.createController("howTo").getView();
        s.open();
    }
    function showMailTemplate() {
        var m = Alloy.createController("mailTemplate").getView();
        m.open();
    }
    function showMailAnswers() {
        var d = Alloy.createController("mailAnswers").getView();
        d.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        exitOnClose: true,
        orientationModes: [ Ti.UI.PORTRAIT ],
        navBarHidden: "true",
        fullscreen: "true",
        backgroundImage: "images/background.png",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.quiz = Ti.UI.createView({
        width: "120dp",
        height: "40dp",
        bottom: "50dp",
        backgroundColor: "#195b20",
        borderRadius: 8,
        id: "quiz"
    });
    $.__views.index.add($.__views.quiz);
    showWin2 ? $.__views.quiz.addEventListener("click", showWin2) : __defers["$.__views.quiz!click!showWin2"] = true;
    $.__views.quizLabel = Ti.UI.createLabel({
        color: "#fff",
        width: "120dp",
        height: "40dp",
        text: "Quiz",
        textAlign: "center",
        font: {
            fontSize: "14sp"
        },
        id: "quizLabel"
    });
    $.__views.quiz.add($.__views.quizLabel);
    $.__views.howTo = Ti.UI.createView({
        width: "120dp",
        height: "40dp",
        bottom: "200dp",
        backgroundColor: "#239b34",
        borderRadius: 8,
        id: "howTo"
    });
    $.__views.index.add($.__views.howTo);
    showHowTo ? $.__views.howTo.addEventListener("click", showHowTo) : __defers["$.__views.howTo!click!showHowTo"] = true;
    $.__views.howToLabel = Ti.UI.createLabel({
        color: "#fff",
        width: "120dp",
        height: "40dp",
        text: "Spelinfo",
        textAlign: "center",
        font: {
            fontSize: "14sp"
        },
        id: "howToLabel"
    });
    $.__views.howTo.add($.__views.howToLabel);
    $.__views.mailTemplate = Ti.UI.createView({
        width: "120dp",
        height: "40dp",
        bottom: "150dp",
        backgroundColor: "#20842c",
        borderRadius: 8,
        id: "mailTemplate"
    });
    $.__views.index.add($.__views.mailTemplate);
    showMailTemplate ? $.__views.mailTemplate.addEventListener("click", showMailTemplate) : __defers["$.__views.mailTemplate!click!showMailTemplate"] = true;
    $.__views.mailTemplateLabel = Ti.UI.createLabel({
        color: "#fff",
        width: "120dp",
        height: "40dp",
        text: "Maila frågemall",
        textAlign: "center",
        font: {
            fontSize: "14sp"
        },
        id: "mailTemplateLabel"
    });
    $.__views.mailTemplate.add($.__views.mailTemplateLabel);
    $.__views.mailAnswers = Ti.UI.createView({
        width: "120dp",
        height: "40dp",
        bottom: "100dp",
        backgroundColor: "#1e7228",
        borderRadius: 8,
        id: "mailAnswers"
    });
    $.__views.index.add($.__views.mailAnswers);
    showMailAnswers ? $.__views.mailAnswers.addEventListener("click", showMailAnswers) : __defers["$.__views.mailAnswers!click!showMailAnswers"] = true;
    $.__views.mailAnswersLabel = Ti.UI.createLabel({
        color: "#fff",
        width: "120dp",
        height: "40dp",
        text: "Maila svaren",
        textAlign: "center",
        font: {
            fontSize: "14sp"
        },
        id: "mailAnswersLabel"
    });
    $.__views.mailAnswers.add($.__views.mailAnswersLabel);
    $.__views.copyright = Ti.UI.createLabel({
        text: "Enligt avtal med STIM\nUtvecklare: PowerApp   QuizMadame: Ebba",
        color: "#fff",
        width: "100%",
        height: "auto",
        bottom: "5dp",
        textAlign: "center",
        font: {
            fontSize: "10sp"
        },
        id: "copyright"
    });
    $.__views.index.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var UrbanAirship = require("ti.urbanairship");
    UrbanAirship.options = {
        APP_STORE_OR_AD_HOC_BUILD: true,
        PRODUCTION_APP_KEY: "XDZW9cYlTWu2wUS9vY04xg",
        PRODUCTION_APP_SECRET: "_pxVXbzmT8K7tq_d77g0Gw",
        DEVELOPMENT_APP_KEY: "dVFOMSuFSi2aghFBz4Eu1w",
        DEVELOPMENT_APP_SECRET: "2vrP0tDYTJCPRDQGXmGdkg",
        LOGGING_ENABLED: true
    };
    Ti.Network.registerForPushNotifications({
        types: [ Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND ],
        success: function(e) {
            var token = e.deviceToken;
            UrbanAirship.registerDevice(token);
        },
        error: function(e) {
            alert("Error: " + e.error);
        },
        callback: function(e) {
            UrbanAirship.handleNotification(e.data);
        }
    });
    $.index.open();
    __defers["$.__views.quiz!click!showWin2"] && $.__views.quiz.addEventListener("click", showWin2);
    __defers["$.__views.howTo!click!showHowTo"] && $.__views.howTo.addEventListener("click", showHowTo);
    __defers["$.__views.mailTemplate!click!showMailTemplate"] && $.__views.mailTemplate.addEventListener("click", showMailTemplate);
    __defers["$.__views.mailAnswers!click!showMailAnswers"] && $.__views.mailAnswers.addEventListener("click", showMailAnswers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;