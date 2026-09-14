---
layout: post
title: Audio Tools
description: >-
  Web tools for audio and turntables — wow & flutter meter, GyroTach RPM/W&F, and a USB audio oscilloscope.
image: /assets/images/turntable-audio/wow-flutter.png
permalink: /projects/turntable-audio/
homepage: true
homepage_order: 120
tags:
  - project
  - audio
card_desc: "Wow & flutter, RPM, and USB oscilloscope tools."
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
