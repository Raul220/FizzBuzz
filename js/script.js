function fizzBuzz(init, final){
    var list = null;
    if(init<0 || final<0){
        list = "Error. Values must not be negative.";
    } else {
        if(init >= final) {
            list = "Error. The initial value must be less than the final value."
        } else {
            list = [];
            for (var i=init; i<=final; i++) {
                var print = i%3 == 0 ? "Fizz" : '';
                print = (i%5 == 0) ? print+"Buzz" : print;
                print = print == "" ? i : print;
                list.push(print);            
            }
        }
    }    
    return list;
}

$('#actionButton').on('click', function(){
    var init = $('#initNumber').val();
    var final = $('#finalNumber').val();
    if(init >= final) {
        alert("The initial value must be less than the final value.");
        $('#initNumber').val(1);
        $('#finalNumber').val(100);
    } else {
        $('#numberList div').remove();
        var list = fizzBuzz(init, final);
        list.forEach(element => {
            var divNumber = "<div class='col-xs-12 col-md-2'><h6>"+ element +"</h6></div>";
            divNumber = $.parseHTML(divNumber);
            $('#numberList').append(divNumber);
        });
    }
});