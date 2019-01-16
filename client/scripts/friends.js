var Friends = {
  friendList: [],
  toggleStatus: function() {
    Friends.friendList.push($('.username').val());
    console.log('add friend')
    console.log(Friends.friendList);
  }

};