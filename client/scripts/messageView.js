var MessageView = {

  render: _.template(`
      <div class="chat-<%= roomname %>">
        <div class="username"><%= username %></div>
        <div><%= text %></div>
      </div>
    `)
};

//using the browser's built-in functionality to escape the string
function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}