$(document).on('ready', function(){
  var stateNames = ["Hawaii","Alaska","Florida","South_Carolina","Georgia",
  "Alabama","North_Carolina","Tennessee","Rhode_Island","Connecticut",
  "Massachusetts","Maine","New_Hampshire","Vermont","New_York",
  "New_Jersey","Pennsylvania","Delaware","Maryland","West_Virginia",
  "Kentucky","Ohio","Michigan","Wyoming","Montana",
  "Idaho","Washington","Texas","California","Arizona",
  "Nevada","Utah","Colorado","New_Mexico","Oregon",
  "North_Dakota","South_Dakota","Nebraska","Iowa","Mississippi",
  "Indiana","Illinois","Minnesota","Wisconsin","Missouri",
  "Arkansas","Oklahoma","Kansas","Louisiana","Virginia"]

  var incrementor = 0;
  
  $(document).on('submit', '.input-text', function(e){
    e.preventDefault();
    var inputVal = $('.input1').val().replace(' ','_').trim();
    if ($.inArray(inputVal, stateNames) == -1) {
      $('.input1').val("")
      bootbox.alert("Excuse me but Homey most certainly does NOT play that! Ahem... Please remeber to capitalize state names!!", function(){
        console.log("Alert Callback Error")
      })
    } else if ($.inArray(inputVal, stateNames) >= 0) {
        $('#'+inputVal).attr("class", "color green");
        $('.input1').val("")
        ++incrementor;
        $('.stats').text("States Named: " + incrementor)
        if (incrementor == 10) {
          bootbox.alert("WOW! You got 10 states already? You so smart!... keep it up!", function(){
            console.log("Alert Callback 10 states")
          })
        }
        if (incrementor == 25) {
          bootbox.alert("Whooaahh you're halfway there!!! Whooaahhh livin on a ....", function(){
            console.log("Alert Callback 25 states")
          })
        }
        if (incrementor == 50) {
          bootbox.alert("CONGRATULATIONS!!! You won this amazing game! Hit refresh to play again", function(){
            console.log("Alert Callback Winner")
          })
        }
      }
  })
});
