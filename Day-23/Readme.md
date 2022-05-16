## Day-23 - Speech Synthesis

In this Exercise, we learned Speech Synthesis with JavaScript using SpeechSynthesis. It’s part of the Web Speech API, along with the Speech Recognition API, although that is only currently supported, in experimental mode, on Chrome.

### Steps :

- The SpeechSynthesisUtterance object available on the global Window object represents a speech request.

- The speech synthesis API helps to converts a written text to digital voice. It consists two input sliders to manipulate speech rate and pitch.

- First declared a new variable containing message and an empty array to store the various digital voices from the API.
  ```
      const msg = new SpeechSynthesisUtterance();
      let voices = [];
  ```
- Select the necessary HTML elements.
  ```
      const voicesDropdown = document.querySelector('[name="voice"]');
      const options = document.querySelectorAll('[type="range"], [name="text"]');
      const speakButton = document.querySelector('#speak');
      const stopButton = document.querySelector('#stop');
      msg.text = document.querySelector('[name="text"]').value
  ```
- Create a function of populateVoices which select the voices and store them in the voiceDropdown menu.
  ```
        function populateVoices(){
            voices = this.getVoices()
            // console.log(voices)
            voicesDropdown.innerHTML = voices
            // .filter(voice => voice.lang.includes('en'))
            .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang}</option>)`).join("")
        }
  ```
- Then create a next function of setVoice which matches the voice selected by the user from the dropdown with the voice present in the voices Array.

  ```
     function setVoice(){
        msg.voice = voices.find(voice => voice.name === this.value)
        toggle()
    }
  ```

- Next Function is of Toggle which reset the voice to the beginning of the message.

  ```
      function toggle(startOver = true){
            speechSynthesis.cancel()
            if(startOver){
            speechSynthesis.speak(msg)
            }
        }

  ```

- And then last function of setOptions which handles the rate,pitch and text options.
    ```
          function setOptions(){
                console.log(this.name, this.value)
                msg[this.name] = this.value
                toggle()
            }
    ```
- Last all the Event Listeners.

  ```
        speechSynthesis.addEventListener('voiceschanged',populateVoices)
        voicesDropdown.addEventListener('change', setVoice)
        options.forEach(option => option.addEventListener('change', setOptions))
        speakButton.addEventListener('click',toggle)
        stopButton.addEventListener('click',()=>toggle(false))
  ```
