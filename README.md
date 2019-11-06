# loading-cli

[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/loading-cli) [![Build Status](https://travis-ci.org/jaywcjlove/loading-cli.svg?branch=master)](https://travis-ci.org/jaywcjlove/loading-cli)

Terminal loading effect.

<img height="26" src="https://user-images.githubusercontent.com/1680273/68320716-70f33600-00fb-11ea-8a78-47b82ab28240.gif">

# Install

```bash 
$ npm install --save loading-cli
```

# Usage

```js 
const loading =  require('loading-cli');
const load = loading("loading text!!").start()

setTimeout(function(){
    load.color = 'yellow';
    load.text = ' Loading rainbows';
},2000)

// stop
setTimeout(function(){
    load.stop()
},3000)
```

Custom text color [colors-cli](https://github.com/jaywcjlove/colors-cli)

```js
const color = require('colors-cli/toxic');
const loading = require('loading-cli');

const load = loading("loading text!!".blue).start();
// stop
setTimeout(function(){
  load.stop()
},3000)
```

# API

## loading([options|text])

### options 

```js
load({
  "text":"loading text!!",
  "color":"yellow",
  "interval":100,
  "stream": process.stdout,
  "frames":["◰", "◳", "◲", "◱"]
})
```

### text

Type: string
Text to display after the spinner.

```js
loading("loading text!!")
```

## color

Values:`black` `red` `green` `yellow` `blue` `magenta` `cyan` `white` `gray`   


## frames

```bash
["◰", "◳", "◲", "◱"]
["◐", "◓", "◑", "◒"]
[".", "o", "O", "°", "O", "o", "."]
["⊶", "⊷"]
["ဝ", "၀"]
["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"]
["🕐 ", "🕑 ", "🕒 ", "🕓 ", "🕔 ", "🕕 ", "🕖 ", "🕗 ", "🕘 ", "🕙 ", "🕚 "]
```

# Instance

## .start([text])

Start the spinner. Returns the instance.

## .stop()

Stop and clear the spinner. Returns the instance.

## .clear()

Clear the spinner. Returns the instance.

## .succeed([text])

Stop the spinner, change it to a green `✔` and persist the current text, or text if provided. Returns the instance. See the GIF below.

## .fail([text])

Stop the spinner, change it to a red `✖` and persist the current text, or text if provided. Returns the instance. See the GIF below.

## .warn([text])

Stop the spinner, change it to a yellow `⚠` and persist the current text, or text if provided. Returns the instance.

## .info([text])

Stop the spinner, change it to a blue `ℹ` and persist the current text, or text if provided. Returns the instance.

## .render()

Manually render a new frame. Returns the instance.

## .frame()

Get a new frame.

```js
const loading = require('loading-cli');
const load = loading("loading text!!");
load.frame(["◰", "◳", "◲", "◱"]);
load.start();
```

## .text

Change the text.

## .color

Change the spinner color.
