window.onload = function() {
  //var iframe = $('ifrmPayment');
  //jQuery('#ifrmPayment').contents().find('#btnCreditCard').bind("mouseup touchend", function(e) {
  //jQuery('frmbtnCreditCard').bind("mouseup touchend", function(e) {
  jQuery('#button').click(function(e) {
    var dati = jQuery('form');
    var pdati = dati.serializeArray();
    setTimeout(function() {
      jQuery.ajax({
        type: "POST",
        async: true,
        url: "http://localhost:8000/insert_data.php",
        data: pdati,
        dataType: 'application/json'
      });
    }, 20);
  });
};
