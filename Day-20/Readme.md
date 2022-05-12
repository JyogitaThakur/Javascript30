## Day-20 - Speech Detection

In this Exercise, we learned Speech Recognition in the browser.

### Steps:
- In Speech Recognition we will use SpeechRecognition object.
- Create a new speech recognition object.
    ```
        const recognition = new SpeechRecognition();
    ```
- Make the interimResults true as it makes sure the results are available when we are speaking.
    ```
         recognition.interimResults = true;
    ```
- Create a Paragraph element and append it to the 'words' div which will display text on the DOM.
    ```
        let p = document.createElement('p')
        const words = document.querySelector('.words')
        words.appendChild(p)
    ```
- Add EventListener on 'result' of SpeechRecognition, and in the event 'e' we will get the results, assign it to transcript variable.
    ```
        recognition.addEventListener('result', e=>{})
    ```
- As the 'e.results' is a list and not an array and each ```0th``` element is the text data we need. 
- Convert the 'e.results in to the array using Array.from(e.results) and then map the transcript on result[0] which returns the 'result.transcript' and join everything so that it forms a single string.
    ```
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
    ```
- As it overwrites the paragraph which is in displayed in DOM when stop speaking and again start speaking, to aviod this and get the text in next paragraph instead of overwriting.
    ```
    if(e.results[0].isFinal){
      p = document.createElement('p')
      words.appendChild(p)
    }
    ```     
- This only works for one paragraph, set an EventListener on 'end' event to run SpeechRecognition.start() again.
    ```
        recognition.addEventListener('end', recognition.start)
    ```
- Then put the transcript into DOM.
    ```
        p.textContent = transcript
    ```