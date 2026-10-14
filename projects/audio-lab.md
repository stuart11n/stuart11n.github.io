---
layout: post
title: Audio Lab
description: >-
  Browser oscilloscope, spectrum analyzer, and wow & flutter meter for USB audio — Y-T, X-Y, W&F, FFT, and more.
image: /assets/images/turntable-audio/scope-hero.png
permalink: /projects/audio-lab/
homepage: true
homepage_order: 25
tags:
  - project
  - audio
  - software
card_desc: "Browser oscilloscope, spectrum analyzer, and wow & flutter meter for USB audio."
card_wide: true
---

![s16n Audio Lab Y-T view with dual timebase and measures](/assets/images/turntable-audio/scope-hero.png){: .center-image }

A browser oscilloscope, spectrum analyzer, and wow &amp; flutter meter for USB audio inputs — audio frequency only (not RF or lab-bandwidth scopes). Plug in a USB ADC, pick the device, and Start — or use built-in demos. Useful for checking line-level signals from turntables and tape decks for setting head azimuth, anti-skating, W&amp;F, testing other audio equipment, codecs, and test gear.

Core scope features are free. **Pro** ($15.99 via PayPal) unlocks FFT above 10 kHz, display interpolation, notch filter, THD, cursors, trigger level, Y-T math, independent A/B time/div and Y, Phase Aid, extra W&amp;F standards, and Save Video. After payment, enter the email you paid with and the license key in the app.

<div class="cta-row">
  <a class="btn btn--primary" href="https://scope.s16n.com/" target="_blank" rel="noopener noreferrer">Open Audio Lab</a>
</div>

### Features

- **Y-T**, **X-Y** (Lissajous), **W&amp;F**, and **FFT** views
- Dual channels **A** / **B** with show/hide and custom colors
- Independent **A/B time/div** and **A/B Y** (unlock B from A) — Pro
- Trigger: rise / fall / either, A or B source; adjustable trig level — Pro
- **DC** / **AC** coupling
- **Notch** filter (Off / Notch / Inv) with frequency presets — Pro
- **Persist** Off / Lo / Hi (phosphor-style trail)
- Y-T display interpolation: **Sin(x)/x** or oversample — Pro
- Y-T math channel: **A+B**, **A−B**, **A×B**, **A÷B** — Pro
- **Phase Aid** chord line on X-Y for alignment — Pro
- Auto scale and live measures (Vpp, RMS, freq, period, duty, and more); **THD** — Pro
- Drag A/B cursors — Pro; FFT span above 10 kHz — Pro
- Demos: 1 kHz sine, harmonics, calibrated 3 kHz · 4% THD, tape wobble, ping-pong sweep, rotating Lissajous, CD RF eye, and an X-Y “s16n” vector
- Save as PNG; Save 10s video — Pro

### Wow &amp; flutter

Built-in W&amp;F meter on channel A — play a 3.15 / 3 kHz test tone from the deck or turntable.

- Standards: **DIN** (free); **JIS**, **NAB**, **CCIR**, **2σ**, and unweighted — Pro
- Carrier: Auto, 3150, 3000, or 1000 Hz
- Turntable eccentricity notch: Off, 33, or 45
- Range: Auto, 0.1, 0.3, 1, or 3%; hold / average with reset

### Example: Lissajous

X-Y (Lissajous) view for tape head azimuth — aim for a tight, stable ellipse/line on a high-frequency test tone. The FFT is also useful for this adjustment: aim to minimize the wandering. Pro **Phase Aid** draws a chord line to help with alignment.

![Audio Lab X-Y Lissajous view](/assets/images/turntable-audio/scope-lissajous.gif){: .center-image }

### Example: FFT

![Audio Lab FFT spectrum](/assets/images/turntable-audio/scope-fft.gif){: .center-image }

### Example: independent time bases

Separate A and B time/div so each channel can be scaled independently — useful when comparing signals at very different frequencies.

![Audio Lab Y-T with independent A/B time bases](/assets/images/turntable-audio/scope-independent-timebases.gif){: .center-image }

### Works on a smartphone

![s16n Audio Lab on a phone](/assets/images/turntable-audio/scope.png){: .center-image .small-image }
