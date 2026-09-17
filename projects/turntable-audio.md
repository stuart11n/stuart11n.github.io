---
layout: post
title: Audio Tools
description: >-
  Web tools for audio and turntables — wow & flutter, GyroTach, USB Scope, and Phosphor AFG-20 waveform generator.
image: /assets/images/turntable-audio/wow-flutter.png
permalink: /projects/turntable-audio/
homepage: true
homepage_order: 120
tags:
  - project
  - audio
  - software
card_desc: "Wow & flutter, RPM, scope, and audio waveform generator tools."
---


Web tools for checking turntable speed stability, wow &amp; flutter, and audio signals.

### Wow &amp; flutter

Wow and flutter are slow and fast speed variations in tape decks and turntables. They show up as pitch waver — wow is the slower warble (roughly under a few Hz), flutter is the faster shimmer. Standards such as DIN (IEC 386), JIS, and NAB weight those variations so you can compare decks with a single percentage reading.

### [W&amp;F meter](https://wf.s16n.com/)

A line-in wow &amp; flutter meter for turntables and tape decks, using test tones (DIN 3.15 kHz / JIS–NAB 3 kHz). It locks the carrier, splits wow vs flutter, shows a spectrum and weighted wow trace, and supports DIN, JIS, NAB, CCIR, and 2σ. Designed for use with a USB ADC (line input) — not the device microphone.

<p><a class="btn btn--primary" href="https://wf.s16n.com/" target="_blank" rel="noopener noreferrer">Open W&amp;F Meter</a></p>

![W&amp;F meter showing DIN wow and flutter readout](/assets/images/turntable-audio/wow-flutter.png){: .center-image .small-image }

### [GyroTach — RPM &amp; W&amp;F](https://rpm.s16n.com/)

A MEMS tachometer for turntables: place the phone face-up on the platter to measure RPM and wow &amp; flutter. Supports common speeds (16⅔, 33⅓, 45, 78) and DIN / JIS / NAB / 2σ standards.

<p><a class="btn btn--primary" href="https://rpm.s16n.com/" target="_blank" rel="noopener noreferrer">Open GyroTach</a></p>

![GyroTach RPM and wow and flutter meter](/assets/images/turntable-audio/rpm.png){: .center-image .small-image }

### [USB Scope](https://scope.s16n.com/)

A browser oscilloscope for USB audio inputs — Y-T and X-Y (Lissajous) views, rising-edge trigger, time base and Y scale knobs, and auto scale. Useful for checking line-level signals from decks and codecs.

<p><a class="btn btn--primary" href="https://scope.s16n.com/" target="_blank" rel="noopener noreferrer">Open USB Scope</a></p>

![s16n USB Scope showing a 1 kHz demo waveform](/assets/images/turntable-audio/scope.png){: .center-image .small-image }

### [Phosphor AFG-20](https://afg.s16n.com/)

Phosphor AFG-20 is a dual-channel audio arbitrary waveform generator that runs in the browser. It is modeled after a bench function generator, but it plays through your computer’s speakers or headphones instead of BNC outputs.

Two independent channels (CH1 / CH2) each have frequency, amplitude, offset, phase, and waveform. You can run them together, couple frequency or amplitude, invert a channel, copy CH1 into CH2, and align phase.

#### Waveforms

Sine, square, triangle, ramps, pulse, white/pink noise, DC, sinc, exponential rise/fall, Gaussian, ECG, and a 1024-point arbitrary wave you draw by hand.

#### Operating modes

- **Continuous** — tone at a set frequency (0.1 Hz–20 kHz)
- **Modulation** — AM, FM, PM, PWM, FSK
- **Sweep** — linear or log frequency sweep
- **Burst** — N-cycle or gated bursts

#### Display

A CRT-style scope shows Y-T traces or an X-Y (Lissajous) plot, plus a live dBfs meter.

#### Output

Stereo L/R, CH1 only, CH2 only, or mix. Master gain, mute, and a speaker-protect limiter. WAV export of the current setup.

#### Memory

Eight setup slots in the browser so you can store and recall instrument states.

Use it as a tone source, stereo test signal, modulation demo, or a sketchpad for custom audio waves. Open Arb edit to draw a waveform, then hit OUT on a channel to hear it.

<p><a class="btn btn--primary" href="https://afg.s16n.com/" target="_blank" rel="noopener noreferrer">Open AFG-20</a></p>

![Phosphor AFG-20 dual-channel audio arbitrary waveform generator](/assets/images/turntable-audio/afg.png){: .center-image .small-image }
