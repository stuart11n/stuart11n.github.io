---
layout: post
categories: flightsim trim
title: Trim Deck
---

![CDT_VMAX_Mount_2025 May 26_10 49 37PM 000_CustomizedView43852198952_jpg](../assets/trim-deck/CDT_VMAX_Mount_2025-May-26_10-49-37PM-000_CustomizedView43852198952_jpg.jpg)

I wanted a set of trim wheels, I could not find anything suitable so I created the Trim Deck. It's the same size as the Virpil CDT-VMAX throttle so I could use [this mounting bracket](./virpil-cdt-vmax-bracket). 

# Trim Wheels

![1](../assets/trim-deck/1.png){: .center-image }

The elevator uses an optical encoder with 360 pulses per revolution. This provides a very smooth motion. The rudder and aileron use mechanical encoders with 20 detents.

The elevator wheel protrudes out of the bottom of the case.

![5](../assets/trim-deck/5.png){: .center-image }

# Fuel Tank Selection

![2](../assets/trim-deck/2.png){: .center-image }

The two red knobs are for fuel tank selection. They are 6-way rotary switches so you can map a twin engine very nicely or a single and have a spare for fuel valve, or use them for something else entirely.

Mapping tank selection can be tricky, each plane may require different mapping.  I use it on the Black Box Dukes and Blackbird 310R, Flying Iron warbirds. It takes a while to set up each plane but it's worth it. 

I have used SPAD.next to do this, per plane, and it works well. MobiFlight should also be able to manage it but I have no experience with it. I have not tried mapping directly in-game.

# Push Buttons

![3](../assets/trim-deck/3.png){: .center-image }

There are four general purpose momentary push buttons, single color and constantly illuminated.  

# Toggles

![4](../assets/trim-deck/4.png){: .center-image }

Six general purpose chrome toggles (ON)-OFF-(ON) for anything you like. I use momentary action toggle so that the game state doesn't matter;  whether the navigation lights in the game are on or off, a push up always turns them on and push down turns them off. However, if you prefer regular latching ON-OFF-ON action, or even ON-OFF, that is not a problem, just order different units.

# Mounting

The case does not come with any mounting holes, in my application I reuse the existing bolts to attach it to my mounting bracket. Modify the case or bottom plate as needed. Or use the included bottom plate that fixes directly onto my [mounting bracket](./virpil-cdt-vmax-bracket).

# Software

This run Freejoy. The build docs do not cover wiring the switches and encoders to the STM32 Bluepill, that is left to you. If you have Arduino experience, you can use one instead.

I sell a USB-C STM32 BluePill on my [Etsy](https://s16nengineering.etsy.com), pre-flashed with a custom Freejoy build, a config *and matching connection diagram*. This will save some headaches, time and and cost if you do not have microcontroller experience.

SPAD.next or Mobiflight are needed to map fuel tanks and to alter the speed of trim adjustment.

# STEP files

STEP files are available by joining my [Patreon](https://patreon.com/s16n). When you join, you gain access to updates and other projects including my [simrig rudder pedals](rudder-pedals) 

![0](../assets/trim-deck/0.png)
*My build with custom switches replacing two toggles*

# Build Guide

There is not much space inside the case, so it's a little challenging. There are a lot of wires, so patience and a fine tip soldering iron is mandatory.

# BOM

- 1 x 2 phase Incremental Optical Rotary Encoder 360P/R DC 5-24v, 6mm Shaft
  - [Amazon](https://www.amazon.com/dp/B07MWZ4CLT)
- 2 x 1P12T Rotary Switch
  - [Amazon](https://www.amazon.com/dp/B074WMC9C8)
- 2 x EC11 encoders, 20mm shaft
  - [Amazon](https://www.amazon.com/dp/B08728K3YB)
- 6 x (ON)-OFF-(ON) toggle switches, 12mm mounting hole
  - [Amazon](https://www.amazon.com/dp/B09JFYNFFK)
- 4 x momentary switches, 16mm mounting hole
  - [Amazon](https://www.amazon.com/dp/B0BFQM928J)
- 4 x M4 hex socket bolts, 55mm 
  - [Amazon](https://www.amazon.com/dp/B0DFYK39N6)
- 30AWG silicone wire
  - [Amazon](https://www.amazon.com/dp/B01M70EDCW) 
- DC-DC boost module (for the optical rotary encoder)
  - [Amazon](https://www.amazon.com/dp/B07T7FWVP8)

