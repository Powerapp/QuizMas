function eventCallback(e) {
    UrbanAirship.handleNotification(e.data);
    Ti.API.info("Push message received");
    Ti.API.info("  Message: " + e.data.alert);
    Ti.API.info("  Payload: " + e.data.aps);
    labelMessage.text = e.data.alert;
    labelPayload.text = JSON.stringify(e.data.aps);
}

function eventSuccess(e) {
    UrbanAirship.registerDevice(e.deviceToken);
    Ti.API.info("Received device token: " + e.deviceToken);
    labelID.text = e.deviceToken;
    btnOpen.enabled = true;
}

function eventError(e) {
    Ti.API.info("Error:" + e.error);
    var alert = Ti.UI.createAlertDialog({
        title: "Error",
        message: e.error
    });
    alert.show();
}

var window = Ti.UI.createWindow({
    backgroundColor: "white",
    layout: "vertical"
});

var btnOpen = Ti.UI.createButton({
    title: "Open UA Inbox",
    width: 200,
    height: 40
});

btnOpen.addEventListener("click", function() {
    UrbanAirship.displayInbox({
        animated: true
    });
});

window.add(btnOpen);

window.add(Ti.UI.createLabel({
    text: "DeviceID:",
    top: 10,
    left: 10,
    textAlign: "left",
    color: "black",
    font: {
        fontSize: 18,
        fontStyle: "bold"
    },
    height: Ti.UI.SIZE || "auto"
}));

var labelID = Ti.UI.createLabel({
    text: "",
    top: 10,
    left: 10,
    right: 10,
    textAlign: "left",
    color: "black",
    height: Ti.UI.SIZE || "auto"
});

window.add(labelID);

window.add(Ti.UI.createLabel({
    text: "Last Message:",
    top: 10,
    left: 10,
    textAlign: "left",
    color: "black",
    font: {
        fontSize: 18,
        fontStyle: "bold"
    },
    height: Ti.UI.SIZE || "auto"
}));

var labelMessage = Ti.UI.createLabel({
    text: "",
    top: 10,
    left: 10,
    right: 10,
    textAlign: "left",
    color: "black",
    height: Ti.UI.SIZE || "auto"
});

window.add(labelMessage);

window.add(Ti.UI.createLabel({
    text: "Payload:",
    top: 10,
    left: 10,
    textAlign: "left",
    color: "black",
    font: {
        fontSize: 18,
        fontStyle: "bold"
    },
    height: Ti.UI.SIZE || "auto"
}));

var labelPayload = Ti.UI.createLabel({
    text: " ",
    top: 10,
    left: 10,
    right: 10,
    textAlign: "left",
    color: "black",
    height: Ti.UI.SIZE || "auto"
});

window.add(labelPayload);

window.open();

var UrbanAirship = require("ti.urbanairship");

Ti.API.info("module is => " + UrbanAirship);

UrbanAirship.tags = [ "testingtesting", "appcelerator", "my-tags" ];

UrbanAirship.alias = "testDevice";

UrbanAirship.autoBadge = true;

UrbanAirship.autoResetBadge = true;

Ti.Network.registerForPushNotifications({
    types: [ Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND ],
    success: eventSuccess,
    error: eventError,
    callback: eventCallback
});