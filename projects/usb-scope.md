---
layout: post
title: USB Scope
description: >-
  Browser oscilloscope and spectrum analyzer for USB audio — Y-T, X-Y, FFT, notch filter, Sin(x)/x reconstruction, measures, and video export.
image: /assets/images/turntable-audio/scope-hero.png
permalink: /projects/usb-scope/
homepage: true
homepage_order: 122
tags:
  - project
  - audio
  - software
card_desc: "Browser oscilloscope for USB audio inputs."
---

![s16n USB Scope FFT view with notch filter](/assets/images/turntable-audio/scope-hero.png){: .center-image }

A browser oscilloscope and spectrum analyzer for USB audio inputs — audio frequency only (not RF or lab-bandwidth scopes). Plug in a USB ADC, pick the device, and Start — or use built-in demos. Useful for checking line-level signals from turntables and tape decks for setting head azimuth, anti-skating, testing other audio equipment, codecs, and test gear.

Core scope features are free. **Pro** ($9.99 / year) unlocks FFT above 10 kHz, the notch filter, THD, Sin(x)/x reconstruction, oversample, and Save 10s video.

<div class="cta-row">
  <a class="btn btn--primary" href="https://scope.s16n.com/" target="_blank" rel="noopener noreferrer">Open USB Scope</a>
  <a class="btn btn--ghost" href="https://s16n.lemonsqueezy.com/checkout/buy/8946001c-c7e8-4c1b-9375-1559f3fab759" target="_blank" rel="noopener noreferrer">Buy Pro</a>
</div>

### Features

- **Y-T**, **X-Y** (Lissajous), and **FFT** views
- Trigger: rise / fall / either, Left or Right source, adjustable level
- **DC** / **AC** coupling; show/hide Left and Right channels
- **Notch** filter (Off / Notch / Inv) with frequency presets — Pro
- **Persist** Off / Lo / Hi (phosphor-style trail)
- Y-T **Sin(x)/x** reconstruction and oversample — Pro
- Time/div, Y (V), and trig-level knobs; auto scale
- Live measures (Vpp, RMS, freq, period, duty, and more) plus drag A/B cursors; **THD** — Pro
- FFT span above 10 kHz — Pro
- Demos: 1 kHz sine, harmonics, calibrated 3 kHz · 4% THD, CD RF eye, and an X-Y “s16n” vector
- Save as PNG; Save 10s video — Pro

<video class="center-image" controls playsinline preload="metadata" src="{{ '/assets/images/turntable-audio/scope-demo.webm' | relative_url }}">
  Your browser does not support the video tag.
</video>

![s16n USB Scope](/assets/images/turntable-audio/scope.png){: .center-image .small-image }

![USB Scope desktop view with measures and cursors](/assets/images/turntable-audio/scope-cd-rf-eye.png){: .center-image }
