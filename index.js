var ut = require('./lib/utilities');
var cursor = require('./lib/cursor');
var cli = require('colors-cli')

function loading(options){
    if(!(this instanceof loading)){
        return new loading(options)
    }
    if (typeof options === 'string') {
        options={text:options}
    }

    this.options = ut.extend(options,{
        text: '',
        color: 'cyan',
        stream: process.stderr
        // stream: process.stdout
    });

    // 文本显示
    this.text = this.options.text;

    // 颜色显示
    this.color = this.options.color;

    // 动画间隔时间
    this.interval = this.options.interval || 60;
    this.stream = this.options.stream;

    // loading 样式
    this.frames = ["◜", "◠", "◝", "◞", "◡", "◟"];

    // 不存在
    this.id = null;

    // 要检查 Node 是否正在运行一个 TTY上下文 中
    // linux 中没有运行在 tty 下的进程是 守护进程 
    this.enabled = this.options.enabled || ((this.stream && this.stream.isTTY) && !process.env.CI);
    this.frameIndex = 0;
}

loading.prototype.frame = function(){
    var frames = this.frames;
    // var frames =  ["◜", "◠", "◝", "◞", "◡", "◟"];
    // var frames = ["◰", "◳", "◲", "◱"]
    // var frames = ["◐", "◓", "◑", "◒"]
    // var frames =  [".", "o", "O", "°", "O", "o", "."]
    // var frames = ["⊶", "⊷"]
    // var frames =  ["ဝ", "၀"]
    // var frames = ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"]
    // var frames = ["🕐 ", "🕑 ", "🕒 ", "🕓 ", "🕔 ", "🕕 ", "🕖 ", "🕗 ", "🕘 ", "🕙 ", "🕚 "]
    var frame = frames[this.frameIndex];
    if (this.color) {
        frame = cli[this.color](frame);
    }
    this.frameIndex = ++this.frameIndex % frames.length;
    return frame + ' ' + this.text;
}

loading.prototype.clear = function(){
   
    if (!this.enabled) {
        return this;
    }

    this.stream.clearLine();
    this.stream.cursorTo(0);

    return this;
}

loading.prototype.render = function(){
    this.clear();
    this.stream.write(this.frame());
    return this;
    
}

loading.prototype.start = function(){
    if (!this.enabled || this.id) return this;
    this.clear();
    cursor.hide();
    this.id = setInterval(this.render.bind(this), this.interval);
    return this;
}

loading.prototype.stop = function(){
    if (!this.enabled) return this;
    clearInterval(this.id);
    this.id = null;
    this.clear();
    cursor.show();
    return this;
}

module.exports = loading