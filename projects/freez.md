---
layout: post
title: Freez
permalink: /projects/freez/
description: >-
  FREEZ, a DOS platform game I wrote in 1995, ported to JavaScript so it runs in the browser.
image: /assets/images/freez/gameplay.png
homepage: true
homepage_order: 37
tags:
  - project
  - software
card_desc: "A DOS platformer I wrote in 1995, ported to run in the browser."
---

![FREEZ gameplay in Misty Valley](/assets/images/freez/gameplay.png){: .center-image }

I wrote FREEZ, a DOS platform game, in 1995 under the name Digital Synapse. This is a JavaScript port of my original Borland C and assembly source, so it runs in a web browser with its original graphics and sound.

<div class="cta-row">
  <a class="btn btn--primary" href="https://freez.s16n.com/" target="_blank" rel="noopener noreferrer">Play 1995</a>
  <a class="btn btn--primary" href="https://freez.s16n.com/mobile/" target="_blank" rel="noopener noreferrer">Play 2026</a>
</div>

![The FREEZ main menu](/assets/images/freez/menu.png){: .center-image .small-image }

## Two versions

**1995** is the game as I wrote it: 320×200 VGA graphics, played with a keyboard.

**2026** is a separate build for phones and tablets as well as desktops:

- **Display:** upscaled to 640×480 and stretched to 4:3, drawn with a WebGL shader. There are three scaling filters (Pixel, Sharp and Smooth) and three CRT modes (Off, Scanlines and Full CRT, with curvature, scanlines, a phosphor mask, bloom and vignette). It falls back to a plain canvas if WebGL isn't available.
- **Music:** a small ProTracker-style music player with menu and level songs plus win and game over jingles. It uses 8-bit looped waveforms and drum samples, Amiga-style hard-panned stereo and tracker effects like arpeggio, vibrato and slides, all synthesised in the browser with no audio files.
- **Sound:** birds squawk and the yellow hoppers squish as they land, quieter and panned by how far away they are. At night the clouds darken with the sky and a storm brings distant thunder.
- **Jump inertia:** you keep your horizontal speed in the air, with gentle steering, so jumps feel more natural.
- **End screens:** a win screen with fireworks and a time-bonus tally, and a game over screen.
- **A longer level 1:** the level I shipped had no end flag and an unfinished hall with no floor. The 2026 version finishes it with a long corridor of pits, spikes and blocks, a shaft down to a new lower lane with springs and moving platforms, a restart flag and the end flag.
- **Touch controls:** left, right, fire and jump, plus OK, pause and menu. It works in portrait and landscape.
- **Settings:** the gear button opens the settings. On a keyboard, F6 changes the CRT mode, F7 the scaling and F8 turns the music on and off.
- **Fullscreen:** a fullscreen button, and you can add it to your home screen to play it full screen in landscape.

## Controls

| Key | Action |
|---|---|
| Arrow keys | Move |
| Ctrl, Z or Up | Jump |
| Alt, X or Shift | Fire |
| Enter or Space | Select |
| P | Pause |
| Esc | Quit to the menu |
| F1 | Sound on/off |
| F2 | Weather on/off |
| F3 | Parallax on/off |

The debug keys from the original still work: L ends the level, T the timer, A steam, and S makes you die.

![Running through Misty Valley](/assets/images/freez/action.png){: .center-image .small-image }

## About the port

It's a direct JavaScript translation of my original source, not an emulator. VGA mode 13h is drawn to a canvas, the DAC palette and retrace waits are emulated at 70&nbsp;Hz, and the assembly routines are rewritten function by function. Your setup choices are remembered in your browser.

- Only the level 1 data exists in the game I shipped, so finishing it in the 1995 version takes you back to the menu.
- Sound uses the original WAV files. The DOS build I shipped had sound compiled out, so the browser version has sound the original release didn't.

## Source code

The [original 1995 source](https://github.com/stuart11n/freez) is on GitHub. It's Borland C++ with a lot of inline assembly, plus the game's graphics, maps and sounds.

Here's a taste of the assembly: the routine that fades the screen to black. It copies the palette, then on each step it knocks one off every red, green and blue value that isn't already zero, waits for the VGA vertical retrace, and writes all 256 colours straight to the VGA DAC ports. It does that 64 times for a full fade, or 20 for a quick partial one.

```cpp
void Fade2Black(char FLAG)
{
asm mov 	si,OFFSET pal
asm mov 	di,OFFSET FadeStore
asm mov 	cx,192
FSU:
asm mov 	eax,[si]
asm mov 	[di],eax
asm add 	si,4
asm add 	di,4
asm loop	FSU

asm mov		bx,64
asm cmp		FLAG,0
asm jz		F2BLOOP
asm mov		bx,20

F2BLOOP:

 asm mov  si,OFFSET FadeStore
 asm mov  cx,256

 F2B:

 asm cmp  byte ptr [si],0
 asm jz   B_RED
 asm dec  byte ptr [si]
 B_RED:
 asm cmp  byte ptr [si+1],0
 asm jz   B_GRN
 asm dec  byte ptr [si+1]
 B_GRN:
 asm cmp  byte ptr [si+2],0
 asm jz   B_BLU
 asm dec  byte ptr [si+2]
 B_BLU:

 asm add  si,3
 asm loop F2B

 asm mov  dx,0x3DA
 asm in   al,dx
 asm test al,08h
 asm je   $-5

 asm mov  si,OFFSET FadeStore
 asm sub  al,al		// Init xfer
 asm mov  cx,768
 asm mov  dx,0x3C8
 asm out  dx,al
 asm inc  dx		// Send Palette
 asm rep  outsb

asm dec  bx
asm jnz  F2BLOOP
}
```
