var money = 50;
function outer(){
    var a = 10;
    console.log(a);
    console.log(money);
    var money = 100;
    console.log(money);

    function inner(){
        console.log(money);
        var p =10;
        function innerMost(){
            console.log(p);
            console.log(a);
        }

        innerMost()
    }
    inner();
}
console.log(money);
outer();
