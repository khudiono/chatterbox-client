var MessageView = {
  escape: function (str) {
    return document.createTextNode(str);
  },
  // Parse.readAll((data) => {
  //     // examine the response from the server request:
  //     console.log(data);

  //     callback();
  // },
  render: _.template(`
      <div class="chat-<%= roomname %>">
        <div class="username"><b><%= username %></b></div>
        <div><%= text %></div> <br>
      </div>
    `)
};

//using the browser's built-in functionality to escape the string
// function escapeHtml(str) {
//   var div = document.createElement('div');
//   div.appendChild(document.createTextNode(str));
//   return div.innerHTML;
// }
