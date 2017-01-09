// Saves options to chrome.storage.sync.
function doStuff() {
  $("#save").click(save_options);
  $("#clear").click(clear);
}
$(document).ready(doStuff);

function save_options() {
  var newlinke = document.getElementsByName('subredditName');
  //console.log(newlinke[0].value);
  var subRedditArray = []
  chrome.storage.sync.get(["subreddits"]
  , function(items) {
    
    //console.log("Before adding: " + subRedditArray);
    console.log("HellO:" + items["subreddits"]);
    subRedditArray.push(items["subreddits"]);
    subRedditArray.push(newlinke[0].value);
    console.log("After adding: "+ subRedditArray);
    chrome.storage.sync.set({
      subreddits : subRedditArray
    //subreddits: newlinke[0].value
    }, function() {
    // Update status to let user know options were saved.
    });
  });
  //restore_options();
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(["subreddits"]
  , function(items) {
    console.log(items["subreddits"]);
  });
}

function getDefaultSubreddit() {
  return "r/EarthPorn";
}

function clear() {
  chrome.storage.sync.remove("subreddits");
}