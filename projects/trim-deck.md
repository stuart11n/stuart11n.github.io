---
layout: post
categories: flightsim trim
title: Trim Deck
---

![CDT_VMAX_Mount_2025 May 26_10 49 37PM 000_CustomizedView43852198952_jpg](../assets/trim-deck/CDT_VMAX_Mount_2025-May-26_10-49-37PM-000_CustomizedView43852198952_jpg.jpg)

I wanted a set of trim wheels, I could not find anything suitable so I made this - and added a bunch of switches. I made it the same size as the Virpil CDT-VMAX throttle so I could the [same mount](./virpil-cdt-vmax-bracket) I designed for that. 

# Trim Wheels

![1](../assets/trim-deck/1.png){: .center-image }

The elevator uses an optical encoder with 360 pulses per revolution. This provides a very smooth motion. The rudder and aileron use mechanical encoders with 20 detents.

# Fuel Tank Selection

![2](../assets/trim-deck/2.png){: .center-image }

The red knobs are for fuel tank selection. They are 6-way rotary switches so you can map a twin engine very nicely. Or, use them for something else entirely.

Mapping tank selection is complicated, each plane may require different handling. I have used SPAD.next to do this, per plane, and it works well. MobiFlight should also be able to manage it. I use it on the Black Box Dukes and Blackbird 310R, Flying Iron warbirds. It takes a while to set up each plane but it's worth it.

# Push Buttons

![3](../assets/trim-deck/3.png){: .center-image }

There are four momentary push buttons, single color and constantly illuminated.

# Toggles

![4](../assets/trim-deck/4.png){: .center-image }

Six chrome toggle (ON)-OFF-(ON) for anything you like. I used momentary action so that the game state doesn't matter. It rests in the middle, so whether the navigation lights in the game are on or off, you still push up to turn them on, push down to turn them off. However, if you prefer regular latching ON-OFF action, that is not a problem, just order different units.

# Software

This runs on Freejoy. Figuring that out is left to you, the Freejoy website is great. 

It you want an easier route, I sell a STM32 BluePill on my [Etsy](https://s16nengineering.etsy.com), pre-programmed with a custom Freejoy build + config and connection diagram. This will save some headaches and cost if you do not have a STM32 programmer.

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

