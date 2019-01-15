var Friends = {
  friendList: [],
  toggleStatus: function() {
    Friends.friendList.push($('.username').val(''));
    console.log('clicked')
    console.log(Friends.friendList);
  }

};