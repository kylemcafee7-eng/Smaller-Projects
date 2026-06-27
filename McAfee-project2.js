function checker(){
    const element = document.getElementById("crab");
    element.addEventListener("click", firstCrab);

    const element2 = document.getElementById("crab2");
    element2.addEventListener("click", secondCrab);

    const element3 = document.getElementById("crab3");
    element3.addEventListener("click", thirdCrab);

    const element4 = document.getElementById("crab4");
    element4.addEventListener("click", fourthCrab);

    const element5= document.getElementById("crab5");
    element5.addEventListener("click", fifthCrab);
    
    function firstCrab() {
      document.getElementById("display text").innerHTML = "Red Crab. A fine Choice, these are brave allies."
      document.getElementById("face").src = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab.jpg"

    }

    function secondCrab() {
        document.getElementById("display text").innerHTML = "The green crab...are you sure?"
        document.getElementById("face").src = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab2.jpg"
    }   

    function thirdCrab() {
        document.getElementById("display text").innerHTML = "Hmm the blue crab. Rare, but quite evil."
        document.getElementById("face").src = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab3.jpg"

    }

    function fourthCrab() {
        document.getElementById("display text").innerHTML = "A fine crab, it's small face can do little harm."
        document.getElementById("face").src = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab4.jpg"
   
    }

    function fifthCrab() {
        document.getElementById("display text").innerHTML = "They call him the crab of stone. The Greatest of All crabs."
        document.getElementById("face").src = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab5.jpg"
    }



    
}

function check() {
    document.getElementById("crab").checked = true;
  }

function Compute() {
    if (document.getElementById("crab").checked){

        cost = 20;

    } else if(document.getElementById("crab2").checked){

        cost = 5;

    } else if(document.getElementById("crab3").checked){

        cost = 15;

    } else if(document.getElementById("crab4").checked){

        cost = 15.5;

    } else if(document.getElementById("crab2").checked){

        cost = 100;

    }
    var firstNumber = parseFloat(document.getElementById("Quantity").value);
    var secondNumber = cost;
    if(firstNumber > 0){

        if(isNaN(firstNumber)){

            var w = window.open();
            w.document.open();
            w.document.write("<h2>Error. Please enter a number greater than 0 for the quantity.</h2>");
            w.document.close();

        }else{
        
            if (confirm("Are you sure you want to purchase that many crabs?")) {
                var sum = firstNumber *  secondNumber;
                var w2 = window.open();
                w2.document.open();
                w2.document.write("<h2>Total cost of crab: </h2>" + sum);
                w2.document.close();
            }else{
                var w2 = window.open();
                w2.document.open();
                w2.document.write("<h2>You did not make a purchase of crabs. How disappointing for you.</h2>");
                w2.document.close();
            }
        }
        
    }else{
        var w = window.open();
        w.document.open();
        w.document.write("<h2>Error. Please enter a number greater than 0 for the quantity.</h2>");
        w.document.close();
    }    
}


