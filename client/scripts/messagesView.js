var MessagesView = {

  $chats: $('#chats'),

  initialize: function(message) {
    $('.username').on('click', Friends.toggleStatus);

    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: message,
      contentType: 'application/json',
      success: function(messages) {
        var messageArr = [];
        for (var i = 0; i < messages.results.length; i++) {
          var obj = {};
          obj.roomname = messages.results[i].roomname;
          obj.username = messages.results[i].username;
          obj.text = escape(messages.results[i].text);
          messageArr.push(obj);
        }
        MessagesView.renderMessage(messageArr);
      },

      error: function(error) {
        console.error('chatterbox: Failed to get messages', error);
      }
    });
  },

  renderMessage: function(messages) {
    if (Array.isArray(messages)) {
      messages.forEach(function(message) {
        var renderedMess = MessageView.render(message);
        $(MessagesView.$chats).prepend(renderedMess);
      });
    } else {
      var renderedMess = MessageView.render(messages);
      $(MessagesView.$chats).prepend(renderedMess);
    }
  }
};