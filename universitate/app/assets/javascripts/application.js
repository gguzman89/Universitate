// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require bootstrap-datepicker.min
//= require bootstrap
//= require moment
//= require bootstrap-datetimepicker
//= require pace.min.js
//= require jquery.cookie.min.js
//= require jquery.popupoverlay.min.js
//= require jquery.slimscroll.min.js
//= require jquery.flot.min.js
//= require parsley.min.js
//= require modernizr.min.js
//= require endless.js
//= require endless_form.js
//= require endless_wizard.js
//= require jquery.nicescroll.min.js
//= require chosen-jquery
//= require chosen.jquery.min
//= require chosen
//= require datepicker
//= require inputmask
//= require jquery.inputmask
//= require inputmask.numeric.extensions
//= require inputmask.date.extensions
//= require rating.js
//= require group_lessons.js
//= require sweetalert2.js
//= require bootstrap-toggle.js

(function() {
  function ready() {
    $(".js-row-clickable").unbind("click").bind({
      click: function(e) {
        window.location = $(this).data().href;
      }
    });

    $(".js-decimal-mask").inputmask("decimal");
  }

  $(document).ready(ready);
})();


//override data-confirm
$.rails.allowAction = function(link){
  if (link.data("confirm") == undefined){
    return true;
  }
  $.rails.showConfirmationDialog(link);
  return false;
}

//User click confirm button
$.rails.confirmed = function(link){
  link.data("confirm", null);
  link.trigger("click.rails");
}

//Display the confirmation dialog
$.rails.showConfirmationDialog = function(link){
  var message = link.data("confirm");
  swal({
    title: message,
    type: 'warning',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#2acbb3',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  }).then(function(e){
    $.rails.confirmed(link);
  });
};
