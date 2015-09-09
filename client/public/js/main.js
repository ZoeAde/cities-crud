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

var parent;

//put text to update into input field
$('.edit').on('click', function(){
  $('.update').attr("id", this.id);
  console.log($('.update').attr("id"))
  parent = $(this).closest('div');
  var name = parent.find(".nameInput").html();
  console.log(name);
  var state = parent.find(".stateInput").html();
  $('#name').val(name);
  $('#state').val(state);
});

//update city & state
$('.update').on('click', function(e) {
  e.preventDefault();


    var updatedName = $('#name').val();
    var updatedState = $('#state').val();



    var payload = {
      name: updatedName,
      state: updatedState
    }
    console.log(payload);
    $.ajax({
      url:"/cities/" + this.id,
      type: "PUT",
      data: payload,
      success: function(data){
        parent.find(".nameInput").html(updatedName);
        parent.find(".stateInput").html(updatedState);
      }
    });
});

//Delete City from db on click
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
