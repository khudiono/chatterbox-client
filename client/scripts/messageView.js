var MessageView = {
  // escape: function (str) {
  //   return document.createTextNode(str);
  // },

  render: _.template(`
      <div class="chat <%- roomname %>">
        <div class="username"><b><%- username %></b></div>
        <div><%- text %></div> <br>
      </div>
    `)
};

