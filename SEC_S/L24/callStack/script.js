var x = 20;
function outerMost(){
    var a = 10;
    x++;
    console.log(x);
    console.log(a);
    function inner(){
        var p = 100;
        console.log(p);
        console.log(a);
        function innerMost(){
            var a = 15
            console.log(x);
            console.log(a);
            console.log(p);
        }
        innerMost()
    }
    inner();
}
outerMost()