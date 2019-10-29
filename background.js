
chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('refresh', { periodInMinutes: 30 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    refeshEveryHour();
  });
  
  function refeshEveryHour() {
    
    var messageType = [ "CLOSE_EYE", 
                        "STANDUP_STRETCH_HAND",  
                        "MOVE_NECK_LEFT_RIGHT",
                        "MOVE_NECK_TOP_BOTTOM", 
                        "STANDUP_MOVE",
                        "BLINK_EYE",
                        "SEAT_STRETCH_LEG",
                        "SEAT_STRETCH_HAND",
                        "MESSAGE_EYE",
                        "ROTATE_WRIST"
                      ];
              
      var actionValue = messageType[Math.floor(Math.random() * messageType.length)];                   
      var message = defineMessage(actionValue)                
      alert(message);
  }

  
  function defineMessage(actionValue = "CLOSE_EYE") {
    var messageObj = {  "CLOSE_EYE":"Close your eyes and relax for 15 Sec.", 
                        "STANDUP_STRETCH_HAND":"Stand up and stretch your hand.",
                        "MOVE_NECK_LEFT_RIGHT":"Move your neck from Center to left and right. Repeat it for 2 times.",
                        "MOVE_NECK_TOP_BOTTOM":"Move your neck from Top and Bottom. Repeat it for 3 times.",
                        "STANDUP_MOVE":"Stand up and move around your chair.",
                        "BLINK_EYE":"Blink your eye for 10 times.",
                        "SEAT_STRETCH_LEG":"Seat of your chair and stretch your leg.",
                        "SEAT_STRETCH_HAND":"Seat of your chair and stretch your hand.",
                        "MESSAGE_EYE": "Close your eye and message it with your hand.",
                        "ROTATE_WRIST": "Rotate your wrist 5 times clockwise and anticlockwise."
                      };

    return messageObj[actionValue];

  }