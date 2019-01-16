var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(room) {
    RoomsView.$button.on('click', function(){
        Rooms.add();
    });

    Parse.readAll((data) => {
      RoomsView.room(data.results);
    });
  },

  renderRoom: function(room) {
    var renderedRoom = Rooms.render({'roomname': room});
    $(RoomsView.$select).append(renderedRoom);
  },

  room: (data) => {
    var rooms = [];
    for (var i = 0; i < data.length; i++) {
      if(!rooms.includes(data[i].roomname) && data[i].roomname && data[i].roomname.length < 50) {
        rooms.push(data[i].roomname);
      }
    }
    rooms.forEach(function(room) {
      RoomsView.renderRoom(room);
    })
  }

};
