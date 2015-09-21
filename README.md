# Udder

Udder is a tool for generating boilerplate for Amazon Echo apps. Right now,
it supports generating utterances from a slightly extended template format
based on the original Amazon format.

Eventually I'd like to support generating intents/lambda functions as well.

## Usage

```
$ npm install -g udder
```

Right udder supports generating utterances. More features to follow!

### Utterances

Here is an example `utterances.txt` file:

```
SetVolume turn it {up,down|Direction}
SetVolume turn {up,down|Direction}
SetVolume turn it {up,down|Direction} a lot
SetVolume turn it {up,down|Direction} a bunch
SetInput switch to {H. D. M. I.|Input} {1…5|Number}
SetInput switch to {A. V.|Input} {1…6|Number}
SetInput switch to {U. S. B.|Input}
SetInput switch to {Audio|Input} {1…2|Number}
SetInput switch to {Tuner|Input}
SetInput switch to {Video Aux|Input}
SetPowerState turn {on|State}
SetPowerState turn {off|State}
SetPowerState power {on|State}
SetPowerState power {off|State}
```

Note the numeric ranges denoted by ellipses (`…`). These templates will
generate one line per number inclusively within the range.

**Make sure you use an actual ellipsis character and not three periods.**

Mac: `⌥;`
Linux: Compose + ...

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
