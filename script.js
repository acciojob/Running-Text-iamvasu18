const fullText = "We love Programming!";
    const textElement = document.getElementById("text");
    const speedInput = document.getElementById("speed");

    let index = 0;
    let intervalId;

    function startTyping() {
      clearInterval(intervalId);

      const speed = Number(speedInput.value) || 1;
      const delay = 500 / speed;

      index = 0;
      textElement.textContent = "";

      intervalId = setInterval(() => {
        textElement.textContent += fullText[index];
        index++;

        if (index >= fullText.length) {
          clearInterval(intervalId);
        }
      }, delay);
    }

    // Start immediately when the page loads
    startTyping();

    // If speed changes → restart typing automatically
    speedInput.addEventListener("input", startTyping);