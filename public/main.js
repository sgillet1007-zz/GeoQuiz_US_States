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

$(document).on('ready', function(){
  $(document).on('submit', '.input-text', function(e){
    e.preventDefault();
    if($('.input1').val()=="Alaska"){
      $('#'+'Alaska').attr("class", "color green")
      $('.input1').val(",")
    }
  })
});
