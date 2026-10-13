---
layout: post
title: Audio Lab
description: >-
  Browser oscilloscope and spectrum analyzer for USB audio — dual A/B timebase and Y, Y-T math, FFT, notch, measures, and video export.
image: /assets/images/turntable-audio/scope-hero.png
permalink: /projects/audio-lab/
homepage: true
homepage_order: 25
tags:
  - project
  - audio
  - software
card_desc: "Browser oscilloscope and spectrum analyzer for USB audio."
card_wide: true
---

![s16n Audio Lab Y-T view with dual timebase and measures](/assets/images/turntable-audio/scope-hero.png){: .center-image }

A browser oscilloscope and spectrum analyzer for USB audio inputs — audio frequency only (not RF or lab-bandwidth scopes). Plug in a USB ADC, pick the device, and Start — or use built-in demos. Useful for checking line-level signals from turntables and tape decks for setting head azimuth, anti-skating, testing other audio equipment, codecs, and test gear.

Core scope features are free. **Pro** ($9.99 / year) unlocks FFT above 10 kHz, display interpolation, notch filter, THD, cursors, trigger level, Y-T math, independent A/B time/div and Y, and Save Video.

<div class="cta-row">
  <a class="btn btn--primary" href="https://scope.s16n.com/" target="_blank" rel="noopener noreferrer">Open Audio Lab</a>
  <a class="btn btn--ghost" href="https://s16n.lemonsqueezy.com/checkout/buy/8946001c-c7e8-4c1b-9375-1559f3fab759" target="_blank" rel="noopener noreferrer">Buy Pro</a>
</div>

### Features

- **Y-T**, **X-Y** (Lissajous), and **FFT** views
- Dual channels **A** / **B** with show/hide and custom colors
- Independent **A/B time/div** and **A/B Y** (unlock B from A) — Pro
- Trigger: rise / fall / either, A or B source; adjustable trig level — Pro
- **DC** / **AC** coupling
- **Notch** filter (Off / Notch / Inv) with frequency presets — Pro
- **Persist** Off / Lo / Hi (phosphor-style trail)
- Y-T display interpolation: **Sin(x)/x** or oversample — Pro
- Y-T math channel: **A+B**, **A−B**, **A×B**, **A÷B** — Pro
- Auto scale and live measures (Vpp, RMS, freq, period, duty, and more); **THD** — Pro
- Drag A/B cursors — Pro; FFT span above 10 kHz — Pro
- Demos: 1 kHz sine, harmonics, calibrated 3 kHz · 4% THD, tape wobble, ping-pong sweep, rotating Lissajous, CD RF eye, and an X-Y “s16n” vector
- Save as PNG; Save 10s video — Pro

### Example: Lissajous

X-Y (Lissajous) view for tape head azimuth — aim for a tight, stable ellipse/line on a high-frequency test tone. The FFT is also useful for this adjustment: aim to minimize the wandering.

![Audio Lab X-Y Lissajous view](/assets/images/turntable-audio/scope-lissajous.gif){: .center-image }

### Example: FFT

![Audio Lab FFT spectrum](/assets/images/turntable-audio/scope-fft.gif){: .center-image }

### Example: independent time bases

Separate A and B time/div so each channel can be scaled independently — useful when comparing signals at very different frequencies.

![Audio Lab Y-T with independent A/B time bases](/assets/images/turntable-audio/scope-independent-timebases.png){: .center-image }

### Works on a smartphone

![s16n Audio Lab on a phone](/assets/images/turntable-audio/scope.png){: .center-image .small-image }
