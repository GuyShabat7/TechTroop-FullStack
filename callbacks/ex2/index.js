const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = function(func) {
    const time = new Date();
    func(time);
}

getTime(returnTime)