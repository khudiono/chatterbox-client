var Messages = {
  format: (data) => {
    var messageArr = [];
      for (var i = 0; i < data.length; i++) {
        if(data[i].roomname === $(RoomsView.$select).val()) {
          var obj = {};
          obj.roomname = data[i].roomname;
          obj.username = data[i].username;
          obj.text = data[i].text;
          messageArr.push(obj);
        }
        // var obj = {};
        // obj.roomname = data[i].roomname;
        // obj.username = data[i].username;
        // obj.text = escape(data[i].text);
        // messageArr.push(obj);
    }
    return messageArr;
  }
};