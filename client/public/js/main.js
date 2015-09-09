// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on('submit', function(){
  $('#message').html("");
  var payload = {
    name: $('#name').val(),
    state: $('#state').val()
  };
  $.post('/cities', payload, function(data) {
    $('#message').html("Added");
  });
});

$('.change').on('click', function(){
  var parent = $(this).closest('div');
  var name = parent.find(".nameInput").html();
  var state = parent.find(".stateInput").html();
  $('#name').val(name);
  $('#state').val(state);
  $(this).hide();
});

$('#update').on('click', function() {
    $.ajax({
      url:"/cities/" + this.id,
      type: "PUT",
      success: function(callback){
        // var updatedName = $('#name').val();
        // var updatedState = $('#state').val();
        // parent.find(".nameInput").html(updatedName);
        // parent.find(".stateInput").html(updatedState);
        $(this).show();
      }
    });
});

$('.delete').on('click', function() {
  var button = $(this).closest('div');
  $.ajax({
    url:"/cities/" + this.id,
    type: 'DELETE',
    success: function(callback){
        button.remove();
    }
  });

});
