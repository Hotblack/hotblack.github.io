
   function getGreeting()
   {
     return "Hello, let's talk.";
   }

   function getResponse(statement)
   {
     var response = "";
     if (statement.indexOf("no") >= 0) {
       response = "Why so negative?";
     } 
     else if (statement.indexOf("mother") >= 0
                 || statement.indexOf("father") >= 0
                 || statement.indexOf("sister") >= 0
                 || statement.indexOf("brother") >= 0) 
     {
       response = "Tell me more about your family.";
     } 
     else 
     {
       response = getRandomResponse();
     }

     return response;
   }

    function getRandomResponse()
   {
     var NUMBER_OF_RESPONSES = 4;
     var r = Math.random();
     var whichResponse = (r * NUMBER_OF_RESPONSES);
     var response = "";

     if (whichResponse == 0) {
       response = "Interesting, tell me more.";
     } else if (whichResponse == 1) {
       response = "Hmmm.";
     } else if (whichResponse == 2) {
       response = "Do you really think so?";
     } else if (whichResponse == 3) {
       response = "You don't say.";
     }
     return response;
       }

   
     //Magpie2 maggie = new Magpie2();

     // System.out.println(maggie.getGreeting());
     // System.out.println(maggie.getResponse("My mother and I talked last night."));
     // System.out.println(maggie.getResponse("I said no!"));
     // System.out.println(maggie.getResponse("The weather is nice."));
     // System.out.println(maggie.getResponse("Do you know my brother?"));


  
