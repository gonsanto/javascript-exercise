/**
 * In JavaScript we can use the fetch function to make HTTP calls over the network.
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * When the user clicks on the button with id "click-to-fetch",
 * you have to call this url : https://api.github.com/octocat
 * Then, display the text content returned by the API in the "pre" element with id "display-here".
 * Handle potential network errors gracefully.
 */
export function fetchDataOnClick() {
  const button = document.getElementById("click-to-fetch");
  const display = document.getElementById("display-here");

  button.addEventListener("click", async function () {
    const url = "https://api.github.com/octocat";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.text();
      display.textContent = result;
    } catch (error) {
      console.error(error.message);
    }
  });
}

