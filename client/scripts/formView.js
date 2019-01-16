var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var newMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: $(RoomsView.$select).val()
    };

    Parse.create(newMessage, function() {
      console.log('successfully created');
    })

    MessagesView.renderMessage(newMessage);
    console.log('click!');

    //clear message after submitting
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};