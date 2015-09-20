# Udder

Udder is a tool for generating boilerplate for Amazon Echo apps. Right now,
it supports generating utterances from a slightly extended template format
based on the original Amazon format.

Eventually I'd like to support generating intents/lambda functions as well.

## Usage

```
$ npm install -g udder
```

Right udder supports generating utterance. More features to follow!

### Utterances

Here is an example `utterances.txt` file:

```
SetVolume turn it {up,down|Direction}
SetVolume turn {up,down|Direction}
SetVolume turn it {up,down|Direction} a lot
SetVolume turn it {up,down|Direction} a bunch
SetInput switch to {H. D. M. I.|Input} {one,two,three,four,five|Number}
SetInput switch to {A. V.|Input} {one,two,three,four,five,six|Number}
SetInput switch to {U. S. B.|Input}
SetInput switch to {Audio|Input} {one,two|Number}
SetInput switch to {Tuner|Input}
SetInput switch to {Video Aux|Input}
SetPowerState turn {on|State}
SetPowerState turn {off|State}
SetPowerState power {on|State}
SetPowerState power {off|State}
```

Let's run the generator on it:


```
$ udder utterances path/to/utterances.txt
```

Here's what the output will be:

```
SetVolume turn it {up|Direction}
SetVolume turn it {down|Direction}
SetVolume turn {up|Direction}
SetVolume turn {down|Direction}
SetVolume turn it {up|Direction} a lot
SetVolume turn it {down|Direction} a lot
SetVolume turn it {up|Direction} a bunch
SetVolume turn it {down|Direction} a bunch
SetInput switch to {H. D. M. I.|Input} {one|Number}
SetInput switch to {H. D. M. I.|Input} {two|Number}
SetInput switch to {H. D. M. I.|Input} {three|Number}
SetInput switch to {H. D. M. I.|Input} {four|Number}
SetInput switch to {H. D. M. I.|Input} {five|Number}
SetInput switch to {A. V.|Input} {one|Number}
SetInput switch to {A. V.|Input} {two|Number}
SetInput switch to {A. V.|Input} {three|Number}
SetInput switch to {A. V.|Input} {four|Number}
SetInput switch to {A. V.|Input} {five|Number}
SetInput switch to {A. V.|Input} {six|Number}
SetInput switch to {U. S. B.|Input}
SetInput switch to {Audio|Input} {one|Number}
SetInput switch to {Audio|Input} {two|Number}
SetInput switch to {Tuner|Input}
SetInput switch to {Video Aux|Input}
SetPowerState turn {on|State}
SetPowerState turn {off|State}
SetPowerState power {on|State}
SetPowerState power {off|State}

```

You can pipe this to a file in your build process.
