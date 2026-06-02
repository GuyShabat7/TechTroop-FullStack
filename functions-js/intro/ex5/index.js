const increaseByNameLength = (money, name)  => money * name.length; 

const makeRegal = (name) => "His Royal Highness, " + name;

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
