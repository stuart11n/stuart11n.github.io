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
  <a class="btn btn--primary" href="/freez/" target="_blank" rel="noopener noreferrer">Play FREEZ</a>
</div>

![The FREEZ main menu](/assets/images/freez/menu.png){: .center-image .small-image }

## Controls

FREEZ needs a keyboard, so it won't work on a phone or tablet.

| Key | Action |
|---|---|
| Arrow keys | Move |
| Ctrl, Z or Up | Jump |
| Alt, X or Shift | Fire |
| P | Pause |
| F1 | Sound on/off |
| F2 | Weather on/off |
| F3 | Parallax on/off |
| Esc | Quit |

In the menus, use Space or Enter to choose.

![Running through Misty Valley](/assets/images/freez/action.png){: .center-image .small-image }

## About the port

The port follows the structure of the original source files. It emulates the VGA screen, palette and 70&nbsp;Hz timing of the original, and loads the game's original graphics, maps and sounds. Your setup choices are remembered in your browser.

## Source code

You can download the [original 1995 source](/assets/files/freez/freez-source.zip) (370&nbsp;KB zip). It's Borland C++ with a lot of inline assembly, plus the game's graphics, maps and sounds.

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
