const fullText = "We love Programming!";
    const textElement = document.getElementById("text");
    const speedInput = document.getElementById("speed");

    let intervalId;
    let index = 0;

    function startTyping() {
      clearInterval(intervalId);
      textElement.textContent = "";
      index = 0;

      const speed = Number(speedInput.value) || 1;
      const delay = 500 / speed;

      intervalId = setInterval(() => {
        textElement.textContent += fullText[index];
        index++;

        if (index >= fullText.length) {
          clearInterval(intervalId);
        }
      }, delay);
    }

    // Start when page loads
    startTyping();

    // START ONLY AFTER USER FINISHES TYPING THE SPEED
    speedInput.addEventListener("change", startTyping);
