var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(room) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: room,
      contentType: 'application/json',
      success: this.$button.on('click', function(){
        console.log(room);
        this.renderRoom(room);
      }),
      error: function(error) {
        console.error('chatterbox: Failed to add room', error);
      }
    });
  },

  renderRoom: function(room) {
    console.log('render', room)
    var renderedRoom = Rooms.render(room);
    $(this.$select).append(renderedRoom);
  }

};
