---
layout: post
title: Turntable / Audio tools
permalink: /projects/turntable-audio/
---

Web tools for checking turntable speed stability and wow &amp; flutter.

### Wow &amp; flutter

Wow and flutter are slow and fast speed variations in tape decks and turntables. They show up as pitch waver — wow is the slower warble (roughly under a few Hz), flutter is the faster shimmer. Standards such as DIN (IEC 386), JIS, and NAB weight those variations so you can compare decks with a single percentage reading.

### [W&amp;F meter](https://s16n-wf.grok.me/)

A line-in wow &amp; flutter meter for test tones (DIN 3.15 kHz / JIS–NAB 3 kHz). It locks the carrier, splits wow vs flutter, shows a spectrum and weighted wow trace, and supports DIN, JIS, NAB, CCIR, and 2σ.

<p><a class="btn btn--primary" href="https://s16n-wf.grok.me/" target="_blank" rel="noopener noreferrer">Open s16n-wf.grok.me</a></p>

![W&amp;F meter showing DIN wow and flutter readout](/assets/images/turntable-audio/wow-flutter.png){: .center-image }

### [GyroTach — RPM &amp; W&amp;F](https://s16n-rpm.grok.me/)

A MEMS tachometer for turntables: place the phone face-up on the platter to measure RPM and wow &amp; flutter. Supports common speeds (16⅔, 33⅓, 45, 78) and DIN / JIS / NAB / 2σ standards.

<p><a class="btn btn--primary" href="https://s16n-rpm.grok.me/" target="_blank" rel="noopener noreferrer">Open s16n-rpm.grok.me</a></p>

![GyroTach RPM and wow and flutter meter](/assets/images/turntable-audio/rpm.png){: .center-image }
