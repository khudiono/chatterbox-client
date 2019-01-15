var MessagesView = {

  $chats: $('#chats'),

  initialize: function(message) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: message,
      contentType: 'application/json',
      success: function(message) {
        MessagesView.renderMessage(message);
      },
      error: function(error) {
        console.error('chatterbox: Failed to get messages', error);
      }
    });
  },

  renderMessage: function(message) {
    var renderedMess = MessageView.render(message)
    $(this.$chats).append(renderedMess);
  }
};