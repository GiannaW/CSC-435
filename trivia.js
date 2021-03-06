"use strict";
(function() {
  let currentCategory;

  window.onload = function() {
    $("view-all").onclick = fetchCategories;
    $("next").onclick = questionOrAnswer;
  };

  function fetchCategories() {
  // use fetch HTTP request to get the categories
  // call displayCategories
    
      
      
    let hxr = new XMLHttpRequest()     
	hrx.onload = displayCategories;     
	hrx.open("GET", "trivia.php?mode=categories");     
	hrx.send();
  }

  function questionOrAnswer() {
    // your code here
  }


  // leave the showTrivia function as it is.
  function showTrivia() {
    let url = "trivia.php?mode=category";
    if (currentCategory) {
      url += "&name=" + currentCategory;
    }
    fetch(url)
    .then(checkStatus)
    .then(JSON.parse)
    .then(displayQuestion);
  }

  function displayQuestion(response) {
      
      
      
      
      
      
    //your code here
  }

  function displayCategories() {

    let categories = JSON.parse(this.responseText)["categories"];

    let ul = $("categories");
     let cat=["Biology","English", "Chem","Math"];
      
      
      var node = document.createElement("LI");// that is what ul is??
        var textnode = document.createTextNode(ul);
        node.appendChild(textnode);
        document.getElementById("pa").appendChild(node);
    // your code here
  }

/// provided helper functions don't change.
  function $(id) {
    return document.getElementById(id);
  }

  function qsa(el) {
    return document.querySelectorAll(el);
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 ||
        response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(
        new Error(response.status + ": " + response.statusText));
    }
  }
})()
