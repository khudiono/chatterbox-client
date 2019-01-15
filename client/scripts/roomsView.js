var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(room) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: room,
      contentType: 'application/json',
      success: RoomsView.$button.on('click', function(){
        Rooms.add();
      }),
      error: function(error) {
        console.error('chatterbox: Failed to add room', error);
      }
    });
  },

  renderRoom: function(room) {
    var renderedRoom = Rooms.render({'roomname': room});
    $(RoomsView.$select).append(renderedRoom);
  }

};
