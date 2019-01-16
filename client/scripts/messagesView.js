var MessagesView = {

  $chats: $('#chats'),

  initialize: function(message) {
    $('.username').on('click', Friends.toggleStatus);

    MessagesView.render();

    $('#rooms select').change(function(e) {
      $('#chats').html('');
      MessagesView.render();
    });

    $('#update button').on('click', function(e) {
      $('#chats').html('');
      MessagesView.render();
    });
  },

  render: function() {
    Parse.readAll((data) => {
      var messageArr = Messages.format(data.results);
      MessagesView.renderMessage(messageArr);
    });
  },

  renderMessage: function(messages) {
    if (Array.isArray(messages)) {
      messages.forEach(function(message) {
        var renderedMess = MessageView.render(message);
        $(MessagesView.$chats).append(renderedMess);
      });
    } else {
      var renderedMess = MessageView.render(messages);
      $(MessagesView.$chats).prepend(renderedMess);
    }
  }
};