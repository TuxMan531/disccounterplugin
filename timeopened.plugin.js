/**
 * @name  TimeOpened
 * @author TuxMan
 * @description Counts how long the client has been opened in this instance and puts it on screen.
 * @version 1.0.0
 */

module.exports = class YourPlugin {
    load() {
        BdApi.alert("Counting Activated");
        let elapsedTime = 0;
          
          
        //getting the time

        function timeget() {

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
          }
          function updateText() {
            const textElement = document.getElementById("custom-text");
            if (textElement) {
                textElement.innerText = `Current Time: ${timeget()}`;
            }
        }
        
        function formatTime(seconds) {
          const hours2 = String(Math.floor(seconds / 3600)).padStart(2, '0');
          const minutes2 = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
          const secs2 = String(seconds % 60).padStart(2, '0');
          return `${hours2}:${minutes2}:${secs2}`;
      }
      function updateText2() {
        const textElement2 = document.getElementById("custom-text2");
        if (textElement2) {
            textElement2.innerText = `Elapsed Time: ${formatTime(elapsedTime)}`;
            console.log(`Elapsed Time: ${formatTime(elapsedTime)}`); // Log the elapsed time to the console
            elapsedTime++; // Increment elapsed time by one second
        }
    }
  
          // creates text in div
          const textElement2 = document.createElement("div");
          textElement2.id = "custom-text2";
          textElement2.innerText = `Elapsed Time: ${formatTime(elapsedTime)}`;
          textElement2.style.position = "fixed";
          textElement2.style.top = "95px";
          textElement2.style.right = "30px";
          textElement2.style.zIndex = "1000";
          textElement2.style.backgroundColor = "white";
          textElement2.style.padding = "10px";
          textElement2.style.borderRadius = "5px";
          textElement2.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
          textElement2.style.width = "163px";  // Set a fixed width

            // creates text in div
            const textElement = document.createElement("div");
            textElement.id = "custom-text";
            textElement.innerText = `Current Time: ${timeget()}`;
            textElement.style.position = "fixed";
            textElement.style.top = "10px";
            textElement.style.left = "10px";
            textElement.style.zIndex = "1000";
            textElement.style.backgroundColor = "white";
            textElement.style.padding = "10px";
            textElement.style.borderRadius = "5px";
            textElement.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            textElement.style.width = "160px";  // Set a fixed width

          // adds the text to client
          document.body.appendChild(textElement);
          document.body.appendChild(textElement2);






        setInterval(updateText, 100);
        setInterval(updateText2, 1000);
  
  }

    start() {
      // Called when the plugin is activated (including after reloads)
     
    } 

    stop() {
      // Called when the plugin is deactivated
      
                  //Remove the text element if it exists
                  const a = document.getElementById("custom-text");
                  if (a) {
                      textElement.remove();
                  }
                  //Remove the text element if it exists 2
                  const aa = document.getElementById("custom-text2");
                  if (aa) {
                      textElement.remove();
                  }
            
    }
}