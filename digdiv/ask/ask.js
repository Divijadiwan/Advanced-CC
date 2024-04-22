
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("age").addEventListener("click", function() {
  navigateToQuotePage("age");
});

document.getElementById("alone").addEventListener("click", function() {
  navigateToQuotePage("alone");
});

document.getElementById("anger").addEventListener("click", function() {
  navigateToQuotePage("anger");
});
document.getElementById("change").addEventListener("click", function() {
  navigateToQuotePage("change");
});
document.getElementById("dating").addEventListener("click", function() {
  navigateToQuotePage("dating");
});
document.getElementById("dreams").addEventListener("click", function() {
  navigateToQuotePage("dreams");
});
document.getElementById("failure").addEventListener("click", function() {
  navigateToQuotePage("failure");
});
document.getElementById("faith").addEventListener("click", function() {
  navigateToQuotePage("faith");
});
document.getElementById("family").addEventListener("click", function() {
  navigateToQuotePage("family");
});
document.getElementById("friendship").addEventListener("click", function() {
  navigateToQuotePage("friendship");
});
document.getElementById("happiness").addEventListener("click", function() {
  navigateToQuotePage("happiness");
});
document.getElementById("health").addEventListener("click", function() {
  navigateToQuotePage("health");
});
document.getElementById("life").addEventListener("click", function() {
  navigateToQuotePage("life");
});
document.getElementById("success").addEventListener("click", function() {
  navigateToQuotePage("success");
});
document.getElementById("up").addEventListener("click", function() {
   window.scrollTo({
    top:0,
    behavior: 'smooth'
  
  });
});

function navigateToQuotePage(category) {

  // Construct the URL with the category as a query parameter
  const url = `ask.html`;

  // Scroll the page to the quote section smoothly
  document.getElementById('forpos').scrollIntoView({

      behavior: 'smooth',
      block: 'start'
  });
  getQuote(category);
}

function getQuote(cate)
{
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${cate}`;
  const apiKey = 'F6XsGpE0HWyxmL3OK5H5CQ==N2DxyP0KRcWPZCRh';
  fetch(apiUrl, {
   headers: {
    'X-Api-Key' : apiKey,
   },
  })
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
  
     .then(data => {
       // Process the protected data
       displayQuote(data[0]);
     })

   .catch(error => {
     console.error('Error:', error);
   });
}
let currentQuoteElement = null;

function displayQuote(info)
{
  const currentQuote = document.getElementById('quote');
  const newQuote = document.createElement('div');
  
  newQuote.id = 'quote';
  newQuote.innerHTML = `

  <p>${info.quote}</p>
  <br>
  <p>${info.author}</p>
  `;

    newQuote.style.position = 'absolute';
    newQuote.style.top = '1400px';
    newQuote.style.left = '50%';
    newQuote.style.transform = 'translate(-50%, -50%)';

currentQuote.parentNode.replaceChild(newQuote,currentQuote);
}
});
