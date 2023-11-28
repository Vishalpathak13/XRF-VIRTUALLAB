
function textToSpeech(text, lang) {
  // Check if the SpeechSynthesis API is available in the browser
  if ("speechSynthesis" in window) {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    utterance.text = text;

    // Set the language
    if (lang) {
      utterance.lang = lang;
    }

    // Start the speech synthesis
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech synthesis is not supported in this browser.");
  }
}
let english = true;
  

function hindiVoice(btn) {
  english = false;
  // start();
  document.getElementById("dialogue-box-parent").style.display = 'none';
  if (english) {
    type("Welcome, Get started by switching on the machine. ");
    textToSpeech("Welcome, Get started by switching on the machine.");
  } else {
    type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
    textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
  }
}

function englishVoice(btn) {
  english = true;
  // start();

  document.getElementById("dialogue-box-parent").style.display = 'none';
  if (english) {
    type("Welcome, Get started by switching on the machine. ");
    textToSpeech("Welcome, Get started by switching on the machine.");
  } else {
    type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
    textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
  }
}
var text;
const typeSpeed = 60;
var timerId;
var typeTarget = document.getElementById("typer"),
tWrapper = document.getElementById("toast-wrapper"),
ti = 0,
currentStep = 0,
contrast = 0,
brightness = 0,
vac = 0,
av = 0,
on = false,
dropped = false,
imgs = [],
mode = 1,
removeButtonclicked = false,
inp = 0;

function type(txt, cur = 0) {
  if (cur == txt.length) {
    timerId = -1;
    return;
  }
  if (cur === 0) {
    typeTarget.innerHTML = "";
    clearTimeout(timerId);
  }
  typeTarget.innerHTML += txt.charAt(cur);
  timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}


document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const startButton = document.getElementById("start-button");
    const stopButton = document.getElementById("stop-button");
    const simulateStartButton = document.getElementById("simulate-start");
    const simulateStopButton = document.getElementById("simulate-stop");
    const doorOpenButton = document.getElementById("door-open");
    const doorCloseButton = document.getElementById("door-close");
    const statusText = document.getElementById("status");
    const simulationSpeedInput = document.getElementById("simulation-speed");
    const speedLabel = document.getElementById("speed-label");
    const sampleSelect = document.getElementById("sample");
    const integrationTimeInput = document.getElementById("integration-time");
    const simulatedData = document.getElementById("simulated-data");
    const  startscanbutton = document.getElementById("start-scan-button");
   








    startButton.addEventListener("click", function () {
      statusText.textContent = "Status: XRF is started";
      if (english) {
        type("Machine started. Now please selectsample");
        textToSpeech("Machine started Now please selectsample");
      } else {
        type("मशीन चालू हो गई. अब कृपया नमूना चुनें");
        textToSpeech("मशीन चालू हो गई. अब कृपया नमूना चुनें", "hi-IN");
      }

    });
    

    sampleSelect.addEventListener("change", function () {
      const selectedSample = sampleSelect.value;
      console.log("Selected Sample: " + selectedSample);
      if (english) {
        type("Sample is selected .Now please select simulation speed");
        textToSpeech("Sample is selected Now please select simulation speed ");
      } else {
        type("नमूना चयनित है। अब कृपया सिमुलेशन गति चुनें");
        textToSpeech("नमूना चयनित है। अब कृपया सिमुलेशन गति चुनें", "hi-IN");
      }
    });
    // doorOpenButton.addEventListener("click", function () {
    //   statusText.textContent = "Status: Door opened";
    //   if (english) {
    //     type("Door has opened . Now please close the door ");
    //     textToSpeech("Door has opened . Now please close the door ");
    //   } else {
    //     type("दरवाज़ा खुल गया है| अब कृपया दरवाज़ा बंद कर दें");
    //     textToSpeech("दरवाज़ा खुल गया है| अब कृपया दरवाज़ा बंद कर दें", "hi-IN");
    //   }
    // });
    // doorCloseButton.addEventListener("click", function () {
    //   statusText.textContent = "Status: Door closed";
    //   if (english) {
    //     type("Door has closed . Now please select simulation speed");
    //     textToSpeech("Door has closed Now please select simulation speed");
    //   } else {
    //     type("दरवाज़ा बंद हो गया है. अब कृपया सिमुलेशन स्पीड चुनें");
    //     textToSpeech("दरवाज़ा बंद हो गया है. अब कृपया सिमुलेशन स्पीड चुनें", "hi-IN");
    //   }

    // });
     // Update simulation speed label when the input value changes
     simulationSpeedInput.addEventListener("input", function () {
      const speedValue = simulationSpeedInput.value;
      switch (speedValue) {
        case "1":
          speedLabel.textContent = "Slow";
          break;
        case "3":
          speedLabel.textContent = "Medium";
          break;
        case "5":
          speedLabel.textContent = "Fast";
          break;
        default:
          speedLabel.textContent = "Medium";
      }
      if (english) {
        type("Simulation speed selected. Now please select integregation time");
        textToSpeech("Simulation speed selected Now please select integregation time");
      } else {
        type("सिमुलेशन गति चयनित. अब कृपया एकीकरण समय चुनें");
        textToSpeech("सिमुलेशन गति चयनित. अब कृपया एकीकरण समय चुनें", "hi-IN");
      }
    });
    integrationTimeInput.addEventListener("change", function () {
      const integrationTime = integrationTimeInput.value;
      console.log("Integration Time (s): " + integrationTime);
      if (english) {
        type("Integration time selected. Now please start simulation");
        textToSpeech("Integration time selected Now please start simulation");
      } else {
        type("एकीकरण समय चयनित. अब कृपया सिमुलेशन प्रक्रिया शुरू करें");
        textToSpeech("एकीकरण समय चयनित. अब कृपया सिमुलेशन प्रक्रिया शुरू करें", "hi-IN");
      }
    });
    simulateStartButton.addEventListener("click", function () {
      statusText.textContent = "Status: Simulated XRF is started";
      if (english) {
        type("Simulation process started . Now please stop simulation");
        textToSpeech("Simulation process started  Now please stop simulation");
      } else {
        type("सिमुलेशन प्रक्रिया शुरू हुई. अब कृपया सिमुलेशन प्रक्रिया बंद करें");
        textToSpeech("सिमुलेशन प्रक्रिया शुरू हुई. अब कृपया सिमुलेशन प्रक्रिया बंद करें", "hi-IN");
      }
    });
    
    simulateStopButton.addEventListener("click", function () {
      statusText.textContent = "Status: Simulated XRF is stopped";
      if (english) {
        type("Simulation process stopped . Now please start scaning");
        textToSpeech("Simulation process stopped  Now please start scaning");
      } else {
        type("सिमुलेशन प्रक्रिया रुक गई. अब कृपया स्कैनिंग शुरू करें");
        textToSpeech("सिमुलेशन प्रक्रिया रुक गई. अब कृपया स्कैनिंग शुरू करें", "hi-IN");
      }
    });
  // Assuming you have a button element with the ID "start-scan-button" and statusText and english variables

document.getElementById("start-scan-button").addEventListener("click", function () {
  statusText.textContent = "Status: Scaning started";

  if (english) {
      type("Scanning process started. Now please stop machine");
      textToSpeech("Scanning process started Now please stop machine");
  } else {
      type("स्कैनिंग प्रक्रिया शुरू हुई. अब कृपया मशीन बंद करें");
      textToSpeech("स्कैनिंग प्रक्रिया शुरू हुई. अब कृपया मशीन बंद करें", "hi-IN");
  }
});
stopButton.addEventListener("click", function () {
  statusText.textContent = "Status: XRF is stopped";
  if (english) {
    type("Machine has stopped");
    textToSpeech("Machine has stopped");
} else {
    type("मशीन बंद हो गई है");
    textToSpeech("मशीन बंद हो गई है", "hi-IN");
}
});


    // Display simulated data
    simulatedData.textContent = "Simulated XRF data goes here";
  
    // You can add more JavaScript functionality as needed
  });





  document.getElementById("start-scan-button").addEventListener("click", function() {
    // Show the XRF graph image in Box 3
    document.getElementById("xrf-image-container").style.display = "block";
});
  




// Get references to the video and the Simulate Start/Stop buttons
const video = document.querySelector('video');
const simulateStartButton = document.getElementById('simulate-start');
const simulateStopButton = document.getElementById('simulate-stop');

// Hide video controls
video.controls = false;

// Add an event listener to the Simulate Start button
simulateStartButton.addEventListener('click', function() {
    video.play(); // Start playing the video
});

// Add an event listener to the Simulate Stop button
simulateStopButton.addEventListener('click', function() {
    video.pause(); // Pause the video
});



document.addEventListener('DOMContentLoaded', function () {
  // Get the element with id 'box3'
  var box3 = document.getElementById('box3');

  // Display message inside the third box
  if (box3) {
      // Create a new <p> element
      var messageElement = document.createElement('p');

      // Set the content of the element
      messageElement.textContent = "Please follow the instructions carefully. Handle with care.";

      // Append the element to the third box
      box3.appendChild(messageElement);
  }
});




