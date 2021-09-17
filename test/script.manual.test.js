$( document ).ready(function() {
    var s1_values = [1,100];
    var s1_expected = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,"+
    "32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,"+
    "Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz";
    var s1_response = fizzBuzz(s1_values[0], s1_values[1]);
    var s1_eval = evaluate_test(s1_expected, s1_response);
    console.log("Firs Stage \nValues: init = "+s1_values[0]+"; final = "+s1_values[1]+" \nExpected Response: ["+ s1_expected +"]\n"+
        "Response: [" + s1_response +"]\n"+
        "Test Result: " + s1_eval );

    var s2_values = [1,50];
    var s2_expected = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,"+
    "32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz";
    var s2_response = fizzBuzz(s2_values[0], s2_values[1]);
    var s2_eval = evaluate_test(s2_expected, s2_response);
    console.log("--------------------------------------------------------------\n"+
    "Secound Stage \nValues: init = "+s2_values[0]+"; final = "+s2_values[1]+" \nExpected Response: ["+ s2_expected +"]\n"+
        "Response: [" + s2_response +"]\n"+
        "Test Result: " + s2_eval );

    var s3_values = [80,30];
    var s3_expected = "Error. The initial value must be less than the final value.";
    var s3_response = fizzBuzz(s3_values[0], s3_values[1]);
    var s3_eval = evaluate_test(s3_expected, s3_response);
    console.log("--------------------------------------------------------------\n"+
        "Third Stage \nValues: init = "+s3_values[0]+"; final = "+s3_values[1]+" \nExpected Response: "+ s3_expected +"\n"+
        "Response: " + s3_response +"\n"+
        "Test Result: " + s3_eval );

    var s4_values = [1,-100];
    var s4_expected = "Error. Values must not be negative.";
    var s4_response = fizzBuzz(s4_values[0], s4_values[1]);
    var s4_eval = evaluate_test(s4_expected, s4_response);
    console.log("--------------------------------------------------------------\n"+
        "Fourth Stage \nValues: init = "+s4_values[0]+"; final = "+s4_values[1]+" \nExpected Response: "+ s4_expected +"\n"+
        "Response: " + s4_response +"\n"+
        "Test Result: " + s4_eval );

    var s5_values = [-3, 80];
    var s5_expected = "Error. Values must not be negative.";
    var s5_response = fizzBuzz(s5_values[0], s5_values[1]);
    var s5_eval = evaluate_test(s5_expected, s5_response);
    console.log("--------------------------------------------------------------\n"+
        "Fifth Stage \nValues: init = "+s5_values[0]+"; final = "+s5_values[1]+" \nExpected Response: "+ s5_expected +"\n"+
        "Response: " + s5_response +"\n"+
        "Test Result: " + s5_eval );
});

function evaluate_test(expected_response, real_response){
    var test = expected_response == real_response ? "Successful" : "Unsuccessful";
    return test;
}

