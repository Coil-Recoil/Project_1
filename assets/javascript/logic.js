$(document).ready(function () {

    //Firebase
    
    // var config = {
    //     apiKey: "SyBhvDWxzgJSUD0VuEd4bszwgflEB5KpvSg",
    //     authDomain: "test-820ea.firebaseapp.com",
    //     databaseURL: "https://test-820ea.firebaseio.com",
    //     projectId: "test-820ea",
    //     storageBucket: "test-820ea.appspot.com",
    //     messagingSenderId: "776526119"
    // };
    // firebase.initializeApp(config);
    
    // // Declare Variables
    
    // var dataRef = firebase.database();
    var name = "";
    var location = "";
    var start = 0;
    var end = 0;
    var price = 0;
    
    // Take Zip and Send to APIs
        
    $("#zipCode").on("click", eventInfo);
        
        // Call API 
        
        //     var zipCode = $("#zipCode").val().trim();
    function eventInfo() {
        event.preventDefault();

        location = $("#zip-input").val().trim();
        var year = $(this).attr("year-name");
        var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + location + "&token=YMCHN5J2AOTS2WEM2FF2";
        
    
        $.ajax({
            url: queryURL,
            method: "GET", //"relative_url":"users/me"
        }).done(function (response) {
            console.log(response);
    
    //Store Results in Firebase
    
            var results = response.data;
    
            // for  (i = 0; i < location.length; i++) {
            //     var eventName = dataRef.ref().push({
            //         name: addName,
            //     });
            // }
        });
    }
    
    // $('.btn').done.on(function (results) {
    //     var addName = $("#addName").val().trim();
    //     var addVenue = $("#addVenue").val().trim();
    //     var addStart = $("#addStart").val().trim();
    //     var addEnd = $("#addEnd").val().trim();
    //     var addPrice = $("#addPrice").val().trim();
    
    //     dataRef.ref().push({
    //         name: addName,
    //         venue: addVenue,
    //         start: addStart,
    //         end: addEnd,
    //         price: addPrice,
    //     })
    
    //     $("#addName").val("");
    //     $("#addVenue").val("");
    //     $("#addStart").val("");
    //     $("#addEnd").val("");
    //     $("#addPrice").val("");
    
    //     return false;
    // });
    
    // // Link up Firebase realtime data to HTML DOM
    
    // dataRef.ref().on("child_added", function (childSnapshot, prevChildKey) {
    
    //     var name = childSnapshot.val().name;
    //     var venue = childSnapshot.val().venue;
    //     var start = childSnapshot.val().start;
    //     var end = childSnapshot.val().end;
    //     var price = childSnapshot.val().price;
    
    //     $("#eventResults").append(
    //         "<tr><td>" + name +
    //         "</td><td>" + venue +
    //         "</td><td>" + start +
    //         "</td><td>" + end +
    //         "</td><td>" + price +
    //         "</td></tr>");
    // },
    // ); 
});