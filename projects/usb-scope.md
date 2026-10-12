---
layout: post
title: USB Scope
description: >-
  Browser oscilloscope for USB audio — Y-T, X-Y, and FFT with trigger, measures, cursors, persist, and PNG export.
image: /assets/images/turntable-audio/scope.png
permalink: /projects/usb-scope/
homepage: true
homepage_order: 122
tags:
  - project
  - audio
  - software
card_desc: "Browser oscilloscope for USB audio inputs."
---

A browser oscilloscope for USB audio inputs. Plug in a USB ADC (OTG on Android), pick the device, and Start — or use built-in demos on desktop. Useful for checking line-level signals from decks, codecs, and test gear.

<div class="cta-row">
  <a class="btn btn--primary" href="https://scope.s16n.com/" target="_blank" rel="noopener noreferrer">Open USB Scope</a>
  {% include bmc-button.html %}
</div>

![s16n USB Scope](/assets/images/turntable-audio/scope.png){: .center-image .small-image }

### Features

- **Y-T**, **X-Y** (Lissajous), and **FFT** views
- Trigger: rise / fall / either, Left or Right channel, adjustable level
- **DC** / **AC** coupling, time/div and Y (V) controls
- Auto scale, persist (phosphor-style trail), and live measures (Vpp, RMS, freq, period, duty, THD, and more)
- Drag A/B cursors on the plot for ΔX / ΔY readouts
- Demo signals: 1 kHz sine, harmonics for FFT/THD, CD RF eye, and an X-Y “s16n” vector
- Save the scope view as PNG
