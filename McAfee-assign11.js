//Functions for basicFunctions.html
        
        
    function petCat() {
        // Create the array
        critter = 1;
        
        count = 0;

        if(critter == 1){
            cats = new Array(5);

            // Initialize the arrays
            cats[0] = "http://courseweb.yc.edu/CSC205/kmcafee/images/cat.jpg";

            cats[1] = "http://courseweb.yc.edu/CSC205/kmcafee/images/cat2.jpg";

            cats[2] = "http://courseweb.yc.edu/CSC205/kmcafee/images/cat3.jpg";

            cats[3] = "http://courseweb.yc.edu/CSC205/kmcafee/images/cat4.jpg";

            cats[4] = "http://courseweb.yc.edu/CSC205/kmcafee/images/cat5.jpg";

            currentFace = document.getElementById("face");

            /* This code was used to prove that my variable updates weren't the problem 
            (It was my if statement conditions, not sure what was wrong though.)

            currentFace.src = cats[3];

            currentText.innerHTML = "I'm not sure what you just said, but I agree completely.";

            */

            for (count = 0; count < 5; count++) {

                task(count);    // this calls  the function "task" passing the current count

        
        } //close for loop
        
            function task(count) {
        
                setTimeout(function () {
        
                    currentFace.src = cats[count];

                    if(count == 0 && critter == 1){
                        currentText.innerHTML = "I'm not sure what you just said, but I agree completely.";
                    } else if (count == 1 && critter == 1){
                        currentText.innerHTML = "Turns out the ground tastes like ground.";
                    } else if (count == 2 && critter == 1){
                        currentText.innerHTML = "I don't scare easily, but my inner walrus is detecting orca vibes from your aura.";
                    } else if (count == 3 && critter == 1){
                        currentText.innerHTML = "'And if you gaze long enough into an abyss, the abyss will gaze back into you.' <br> I really wish the plumber would stop exposing his abyss to me and pull up his pants.";
                    } else if (count == 4 && critter == 1){
                        currentText.innerHTML = "Turns out the air tastes like air.";
                    }

                }, 9000 * count);
        
            } 
        }
     
    }

    function petDog() {
        // Create the array
        
        critter = 2;

        count = 0;
        if(critter == 2){
            dogs = new Array(5);

            // Initialize the arrays
            dogs[0] = "http://courseweb.yc.edu/CSC205/kmcafee/images/dog.jpg";

            dogs[1] = "http://courseweb.yc.edu/CSC205/kmcafee/images/dog2.jpg";

            dogs[2] = "http://courseweb.yc.edu/CSC205/kmcafee/images/dog3.jpg";

            dogs[3] = "http://courseweb.yc.edu/CSC205/kmcafee/images/dog4.jpg";

            dogs[4] = "http://courseweb.yc.edu/CSC205/kmcafee/images/dog5.jpg";

            currentFace = document.getElementById("face");

            currentText = document.getElementById("describe");

            for (count = 0; count < 5; count++) {

                task(count);   

        
        }
        
            function task(count) {
        
                setTimeout(function () {
        
                    currentFace.src = dogs[count];

                    if(count == 0){
                        currentText.innerHTML = "My beard whispers to me as I fall asleep. It told me what you did.";
                    } else if (count == 1 && critter == 2){
                        currentText.innerHTML = "I may be an abomination of human hubris, but nothing can stop my positive mental attitdue.";
                    } else if (count == 2 && critter == 2){
                        currentText.innerHTML = "If you give a dog a chicken wing he'll eat for a day, if you teach a dog to chicken wing...I can't remember how it goes, just give me a wing bro.";
                    } else if (count == 3 && critter == 2){
                        currentText.innerHTML = "I can smell you. Your soul is chewy and greasy, my favorite flavors.";
                    } else if (count == 4 && critter == 2){
                        currentText.innerHTML = "They say a smile can brighten your mood. It's not working. Still mad.";
                    }

                }, 9000 * count);
        
            } 
        }
     
    }


    function petCrab() {
        // Create the array
        critter = 3;

        count = 0;
        if(critter == 3){
            crabs = new Array(5);

            // Initialize the arrays
            crabs[0] = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab.jpg";

            crabs[1] = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab2.jpg";

            crabs[2] = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab3.jpg";

            crabs[3] = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab4.jpg";

            crabs[4] = "http://courseweb.yc.edu/CSC205/kmcafee/images/crab5.jpg";

            currentFace = document.getElementById("face");

            currentText = document.getElementById("describe");

            for (count = 0; count < 5; count++) {

                task(count);   

        
        }
        
            function task(count) {
        
                setTimeout(function () {
                    
                    currentFace.src = crabs[count];

                    if(count == 0){
                        currentText.innerHTML = "Your nostril arms aren't nearly as buff as mine.";
                    } else if (count == 1 && critter == 3){
                        currentText.innerHTML = "You may think my lack of fingers would cause me to be inept with a keyboard, but I assure you I'm banned on most social media platforms.";
                    } else if (count == 2  && critter == 3){
                        currentText.innerHTML = "You a liken my moostache? Can Eye hazza more pixel?";
                    } else if (count == 3 && critter == 3){
                        currentText.innerHTML = "You will not be taking my place in the DMV line.";
                    } else if (count == 4 && critter == 3){
                        currentText.innerHTML = "I'm the only real crab here. Be weary of fake crabs, never give them your social security number. You can trust me though.";
                    }

                }, 9000 * count);
        
            } 
        }
    }