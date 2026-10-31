---
layout: post
title: Audio Lab
description: >-
  Free browser audio analyzer for USB line-in — oscilloscope, Lissajous, FFT spectrum, spectrograph, THD, and wow & flutter (DIN/JIS/NAB). Tune tape decks, cassettes, turntables, and analogue gear from your phone or desktop.
image: /assets/images/turntable-audio/scope-hero.jpg
permalink: /projects/audio-lab/
homepage: true
homepage_order: 25
tags:
  - project
  - audio
  - software
keywords:
  - audio analyzer
  - USB audio analyzer
  - oscilloscope
  - spectrum analyzer
  - FFT
  - spectrograph
  - spectrogram
  - Lissajous
  - X-Y scope
  - wow and flutter
  - wow flutter meter
  - DIN wow flutter
  - JIS NAB CCIR
  - THD
  - distortion
  - frequency response
  - signal analyzer
  - noise
  - measure audio
  - tape deck
  - cassette
  - reel to reel
  - analogue
  - turntable
  - head azimuth
  - NAK T100
  - audio lab
card_desc: "Browser oscilloscope, spectrum, spectrograph, and wow & flutter meter for USB audio."
card_wide: true
---

![s16n Audio Lab Y-T view with dual timebase and measures](/assets/images/turntable-audio/scope-hero.jpg){: .center-image }

A browser oscilloscope, spectrum analyzer, spectrograph, and wow &amp; flutter meter for USB audio inputs — audio frequency only (not RF or lab-bandwidth scopes). Plug in a USB ADC, pick the device, and Start — or use built-in demos. Useful for checking line-level signals from turntables and tape decks for setting head azimuth, anti-skating, W&amp;F, testing other audio equipment, codecs, and test gear.

Core scope features are free. **Pro** ($15.99 via PayPal) unlocks FFT above 10 kHz, display interpolation, notch filter, THD, cursors, trigger level, Y-T math, independent A/B time/div and Y, Phase Aid, extra W&amp;F standards, Save Video, and unlimited spectrograph (free preview is 30 s). After payment, enter the email you paid with and the license key in the app.

<div class="cta-row">
  <a class="btn btn--primary" href="https://audiolab.s16n.com/" target="_blank" rel="noopener noreferrer">Open Audio Lab</a>
</div>

### Features

- **Y-T**, **X-Y** (Lissajous), **W&amp;F**, **FFT**, and **SG** (spectrograph) views
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
- Drag A/B cursors — Pro on Y-T, X-Y, and FFT; free on SG. FFT / SG span above 10 kHz — Pro
- Demos: 1 kHz sine, harmonics, calibrated 3 kHz · 4% THD, tape wobble, ping-pong sweep, rotating Lissajous, CD RF eye, an X-Y “s16n” vector, and Hello spectrogram
- Save as PNG; Save 10s video — Pro

### FFT

**FFT** is a Hann spectrum. Frequency runs along X and magnitude is on Y. A and B stay separate traces.

- **Max freq** sets the span (500 Hz–24 kHz). Free stops at 10 kHz; above that is Pro
- Magnitude is **Linear** or **dB**. In dB, **dB range** is 40–120 dB (default 80). Auto scale sets the top and locks the knob; turn Auto off and the Y knob sets the range. In Linear, that knob sets the magnitude scale
- Show A, B, or both
- Drag A/B cursors — Pro. Peak frequency sits under the plot. **THD** is Pro
- **Persist** leaves a phosphor trail on the spectrum

### Spectrograph

**SG** is a scrolling Hann FFT. New columns appear on the right and history shifts left, so time moves right→left. Frequency is on Y (0 at the bottom) and color is dBFS.

- **Max freq** sets the span (500 Hz–24 kHz). Free stops at 10 kHz; above that is Pro. The Hello demo runs at 12 kHz while it plays
- **dB range** is 40–120 dB (default 80). Auto scale sets the color top and locks the knob; turn Auto off and the Y knob sets the range
- Show A, B, or both — both on averages the two magnitudes
- Horizontal cursors read frequency (free in this view). Peak frequency sits under the plot
- Free preview is 30 s, then it stops. Pro keeps the spectrograph running
- Demo: **Hello spectrogram** paints “hello” across the waterfall at 12 kHz and 120 dB

### Wow &amp; flutter

Built-in W&amp;F meter on channel A — play a 3.15 / 3 kHz test tone from the deck or turntable.

- Standards: **DIN** (free); **JIS**, **NAB**, **CCIR**, **2σ**, and unweighted — Pro
- Carrier: Auto, 3150, 3000, or 1000 Hz
- Turntable eccentricity notch: Off, 33, or 45
- Range: Auto, 0.1, 0.3, 1, or 3%; hold / average with reset

### Example: Lissajous

X-Y (Lissajous) view for tape head azimuth — aim for a tight, stable ellipse/line on a high-frequency test tone. The FFT is also useful for this adjustment: aim to minimize the wandering. Pro **Phase Aid** draws a chord line to help with alignment.

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-lissajous.webm' | relative_url }}">
</video>

### Example: FFT

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-fft.webm' | relative_url }}">
</video>

### Example: spectrograph

A face drawn in frequency bands while the waterfall scrolls right→left.

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-spectrograph.webm' | relative_url }}">
</video>

### Example: independent time bases

Separate A and B time/div so each channel can be scaled independently — useful when comparing signals at very different frequencies.

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-independent-timebases.webm' | relative_url }}">
</video>

### Works on a smartphone

![s16n Audio Lab on a phone](/assets/images/turntable-audio/scope.jpg){: .center-image .small-image }
