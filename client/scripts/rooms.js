var Rooms = {
  room: [],
  add: function(room) {
    var addRoom = window.prompt('Room Name?');
    Rooms.room.push(addRoom);
    RoomsView.renderRoom(addRoom);
  },
  render: _.template(`
      <option value="<%= roomname %>"><%= roomname %></option>
    `)

};