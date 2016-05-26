var load =  require('../');
var st = load({
    "text":"loading text!!"
})

st.start()

setTimeout(function(){
    // st.stop()
    st.text = 'Loading rainbows';
},2000)

setTimeout(function(){
    st.stop()
},3000)

