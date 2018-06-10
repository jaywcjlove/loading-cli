var load =  require('../');
var st = load({
  "text":"loading text!!"
})

st.start()

setTimeout(function(){
  // st.stop()
  st.frame(["◰", "◳", "◲", "◱"]);
  st.text = 'Loading rainbows';
},1000)

setTimeout(function(){
  st.stop()
},3000)

