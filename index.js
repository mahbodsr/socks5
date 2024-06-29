const socks5 = require('node-socks5-server');
require("./job")

const users = {
  'mahbodsr': 'topcs1.6',
};

const userPassAuthFn = (user, password) => {
  if (users[user] === password) return true;
  return false;
};

const server = socks5.createServer({
  userPassAuthFn,
});
server.listen(10000);