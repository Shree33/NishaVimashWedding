

// var $form = $('form#rsvpform'),
//     url = 'https://script.google.com/macros/u/0/s/AKfycbzyCezd2Wd2vSdymLrAWwmTal5SsJ0pJfBXCPSccuZLgLNE6kc/exec'


// $('#submit-form').on('click', function(e) {
//   e.preventDefault();
//   console.log(form);
//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     throw new Error('CORS not supported');
//   }
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     console.log(form)
//   );
// })


// $('#submit-form').on('click', function(e) {
//   var jqxhr = $.post(url, $form.serialize(), function(data) {
//       console.log("Success! Data: " + data.statusText);
//       $(location).attr('href',redirectUrl);
//   }).fail(function(data) {
//           console.warn("Error! Data: " + data.statusText);
//           // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
//           if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
//               //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
//               $(location).attr('href',redirectUrl);                
//           }
//       });
//   })
$(document).ready(function(){
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#rsvpform").submit(function(event){
  console.log("here")

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyvAjg8mz8nolND62d8vCfM6o_gN0JT8zTiF4JBzvM7FoYRGPY/exec",
        type: "post",
        data: serializedData
    });
    // Fire off the request to /form.php
    // var payload = {
    // url: "https://script.google.com/macros/s/AKfycbzyCezd2Wd2vSdymLrAWwmTal5SsJ0pJfBXCPSccuZLgLNE6kc/exec",
    // method: "POST",
    // dataType: 'jsonp',
    // data: serializedData
    // };
    // request = jQuery.ajax(payload)
    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});
});

// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }



// xhr.onload = function() {
//  var responseText = xhr.responseText;
//  console.log(responseText);
//  // process the response.
// };

// xhr.onerror = function() {
//   console.log('There was an error!');
// };





