function Controller() {
    function closeMe() {
        $.howToWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "howTo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.howToWin = Ti.UI.createWindow({
        backgroundColor: "#233875",
        layout: "vertical",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "howToWin",
        fullscreen: "true",
        navBarHidden: "true"
    });
    $.__views.howToWin && $.addTopLevelView($.__views.howToWin);
    $.__views.closeBtn = Ti.UI.createView({
        width: "100%",
        height: "40dp",
        top: "0dp",
        bottom: "0dp",
        left: "0dp",
        id: "closeBtn"
    });
    $.__views.howToWin.add($.__views.closeBtn);
    closeMe ? $.__views.closeBtn.addEventListener("click", closeMe) : __defers["$.__views.closeBtn!click!closeMe"] = true;
    $.__views.closeBtnLabel = Ti.UI.createLabel({
        width: "50dp",
        height: "40dp",
        left: "10dp",
        text: "Meny",
        color: "#fff",
        font: {
            fontSize: "12sp"
        },
        id: "closeBtnLabel"
    });
    $.__views.closeBtn.add($.__views.closeBtnLabel);
    $.__views.firstView = Ti.UI.createView({
        width: "100%",
        height: "35%",
        backgroundColor: "#239b34",
        id: "firstView"
    });
    $.__views.howToWin.add($.__views.firstView);
    $.__views.firstLabel = Ti.UI.createLabel({
        width: "80%",
        height: "auto",
        font: {
            fontSize: "12sp"
        },
        color: "#fff",
        text: 'Quizza på klassiskt vis. Lagen får papper och penna. Vi har gjort en frågemall, men det går lika bra att använda ett tomt papper och låta lagen skriva frågenummer osv. Kör igenom hela quizzet och låt lagen rätta varandras. Svaren kan du få direkt i appen genom att klicka på knappen "Visa svaren". Vill du hellre ha svaren på papper har vi förberett en pdf du kan maila. Det ska vara lätt att leva!',
        textAlign: "center",
        id: "firstLabel"
    });
    $.__views.firstView.add($.__views.firstLabel);
    $.__views.secondView = Ti.UI.createView({
        width: "100%",
        height: "25%",
        backgroundColor: "#20842c",
        id: "secondView"
    });
    $.__views.howToWin.add($.__views.secondView);
    $.__views.secondLabel = Ti.UI.createLabel({
        width: "80%",
        height: "auto",
        font: {
            fontSize: "12sp"
        },
        color: "#fff",
        text: 'Eller så quizzar ni rätt upp och ner. Läs frågan, spela låten, skrik högt den som kan, ge poäng. Svaren får du direkt i quizzet genom att klicka på knappen "Visa svaren". Perfekt vid mindre organiserade tillfällen.',
        textAlign: "center",
        id: "secondLabel"
    });
    $.__views.secondView.add($.__views.secondLabel);
    $.__views.thirdView = Ti.UI.createView({
        width: "100%",
        height: "20%",
        backgroundColor: "#1e7228",
        id: "thirdView"
    });
    $.__views.howToWin.add($.__views.thirdView);
    $.__views.thirdLabel = Ti.UI.createLabel({
        width: "80%",
        height: "auto",
        font: {
            fontSize: "12sp"
        },
        color: "#fff",
        text: "Det som står innanför ( ) ingår inte i svaret. Det är lite extra kuriosa och fungerar utmärkt som utslagsfrågor om det skulle behövas.",
        textAlign: "center",
        id: "thirdLabel"
    });
    $.__views.thirdView.add($.__views.thirdLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var OS_is_Android = true;
    OS_is_Android && ($.closeBtn.visible = false);
    __defers["$.__views.closeBtn!click!closeMe"] && $.__views.closeBtn.addEventListener("click", closeMe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;