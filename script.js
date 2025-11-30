//your JS code here. If required.
 const textToRender = "We love Programming!";
    const textElement = document.getElementById("text");
    const speedInput = document.getElementById("speed");
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", () => {
      let speed = parseInt(speedInput.value);

      if (speed < 1) speed = 1;
      if (speed > 10) speed = 10;

      const delay = 500 / speed;
      textElement.textContent = "";  
      let index = 0;

      const interval = setInterval(() => {
        textElement.textContent += textToRender[index];
        index++;

        if (index >= textToRender.length) {
          clearInterval(interval);
        }
      }, delay);
    });