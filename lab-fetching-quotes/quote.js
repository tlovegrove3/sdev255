window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

// function showAnonymousQuotes(count) {
//    let html = "<ol>";
//    for (let c = 1; c <= count; c++) {
//       html += `<li>Quote ${c} - Anonymous</li>`;
//    }
//    html += "</ol>";

//    document.querySelector("#quotes").innerHTML = html
// }

async function fetchQuotes(topic, count) {   
   // TODO: Modify to use Fetch API
   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   let html = ""

   fetch(url)
      .then((response) => response.json())
      .then((data) => {
         html += "<ol>"
         for (let c = 0; c < count; c++) {
            console.log(`<li>${data[c].quote} - ${data[c].source}</li>`);
            html += `<li>${data[c].quote} - ${data[c].source}</li>`;
         }
         html += "</ol>"
         console.log("FINAL HTML: " + html);
         document.querySelector("#quotes").innerHTML = html;
      })
      .catch((error) => {
         html = `Topic '${topic}' not found`;
         console.log(error.message);
         document.querySelector("#quotes").innerHTML = html;
         });

   
}
   // TODO: Remove the call to showAnonymousQuotes()
   // showAnonymousQuotes(count);

