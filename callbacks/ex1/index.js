const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(func) {
  func();
};

pushPull(push)
pushPull(pull)