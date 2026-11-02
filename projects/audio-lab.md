---
layout: post
title: Audio Lab
description: >-
  Desktop audio oscilloscope, Lissajous, FFT, spectrograph, and wow & flutter meter for USB line-in — Windows, Linux, and macOS. Triggers, cursors, measures, notch, demos, PNG and WebM export.
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
  - desktop
  - windows
  - macos
  - linux
card_desc: "Desktop oscilloscope, spectrum, spectrograph, and wow & flutter meter for USB audio."
card_wide: true
---

![s16n Audio Lab Spectrograph — Aphex Twin face demo](/assets/images/turntable-audio/scope-hero.jpg){: .center-image }

A desktop audio tool with advanced features — **Y-T**, **X-Y**, **FFT**, **Spectrograph**, and **W&amp;F**, plus triggers, cursors, measures, notch filtering, and plot export. Audio frequency only (not RF or lab-bandwidth scopes). Plug in a USB ADC, pick the device, and Run — or use the built-in examples. Useful for turntables and tape decks (azimuth, anti-skate, W&amp;F, frequency response), codecs, and other line-level gear.

Licensed desktop unlocks the full feature set. **$25 / year** via PayPal (enter the email you paid with and the license key in the app). Local app, local settings — no account; license key check at startup. Windows, Linux, and macOS (Apple Silicon).

<div class="cta-row">
  <a class="btn btn--primary" href="https://github.com/stuart11n/s16n-releases/releases/download/audio-lab-latest/s16n-audio-lab.exe">Download for Windows</a>
  <a class="btn btn--ghost" href="https://github.com/stuart11n/s16n-releases/releases/download/audio-lab-latest/s16n-audio-lab-ubuntu">Linux</a>
  <a class="btn btn--ghost" href="https://github.com/stuart11n/s16n-releases/releases/download/audio-lab-latest/s16n-audio-lab-macos-arm">macOS ARM</a>
  <a class="btn btn--ghost" href="https://scope.s16n.com">Free Web Version</a>
  <a class="btn btn--info" href="{{ '/projects/audio-lab/how-to/' | relative_url }}">How To</a>
</div>

Default window ~1280×800 (minimum width 1280). Linux needs ALSA and the usual GUI libs at run time.

### Display modes

- **Y-T** — amplitude vs time, dual channel
- **X-Y** — Lissajous / vector plot (A vs B)
- **FFT** — spectrum
- **Spectrograph** — scrolling waterfall (time × frequency)
- **W&amp;F** — wow &amp; flutter meter and demod waveform

### Input &amp; monitoring

- Live input via system audio devices (cpal); device picker; empty = default device
- Built-in **Example** generator — switch Live ↔ Example without leaving the app
- **Channel B sample trim** (−10…+10 samples) for ADC channel skew
- **Audio** speaker monitor (off by default)
- **AC** / **DC** coupling
- Notch / band-pass style filter: on/off, frequency, Q, invert (stop vs pass), with on-plot S/P marker
- Max frequency ceiling tracks the open converter’s **Nyquist** when the sample rate changes
- Settings persist in the OS config directory

### Dual channel

- Independent **A** / **B** enable and colour pickers
- Linked or unlocked vertical scales (A=B lock)
- On X-Y: **X = A**, **Y = B**

### Y-T

- Time/div
- **Trigger**: rising / falling / either; source A or B; level; visual markers
- **Math** on screen: Off · A+B · A−B · A×B · A÷B
- Interpolation (including a sinc-style path)
- **Persist** Off / Lo / Hi — CRT-style trails that keep glowing across time/div changes
- Auto scale or manual volts/div

![Audio Lab Y-T with Time / div, A/B Y, Auto scale, and the Control panel](/assets/images/turntable-audio/howto-controls-yt.png){: .center-image }

### X-Y

- Dedicated XY time window
- Phosphor persist
- **Phase Aid** — major-axis guide + tint (in-phase vs out-of-phase cue)

![Audio Lab X-Y with Phase Aid on a fat azimuth ellipse](/assets/images/turntable-audio/howto-azimuth-xy.png){: .center-image }

### FFT

- Magnitudes: **Linear** · **dB** · **Pink** (+3 dB/oct so ideal pink reads flat)
- X-axis: **Linear** · **Log**
- Averaging: Off / Low / High
- Analysis lengths shared with Spectrograph: **2k · 8k · 16k · 32k** (default **2k**)
- Max frequency and dB range knobs; auto scale for level
- Frequency zoom: scroll about the cursor, drag a marquee when cursors are off, double-click / Reset for full span
- Peak frequency readout

![Audio Lab FFT with Magnitude dB, Log X, and Average Off](/assets/images/turntable-audio/howto-controls-fft.png){: .center-image }

### Spectrograph

- Scrolling waterfall (~**25 columns/s**, independent of window width and sample rate)
- ~**4.5 s** of main history at that rate
- Y-axis: **Linear · Log · Mel · Bark**
- Channel: **Mix · Left · Right · Diff**
- **Sharp** — reassigned / sharpened frequency display
- Shared FFT size with spectrum mode
- Overview scrub strip under the plot (scrub history; pauses while scrubbing)
- Max freq / dB range / auto scale

![Audio Lab Spectrograph with Y axis, Channel, Sharp, and the scrub overview](/assets/images/turntable-audio/howto-controls-sg.png){: .center-image }

### Wow &amp; flutter

- Standards: **DIN · JIS · NAB · CCIR · AES 2σ · Unweighted**
- Carriers: **Auto · 3150 · 3000 · 1000 Hz**
- Eccentricity: **Off · 33⅓ · 45 RPM**
- Range: Auto or fixed **0.1% · 0.3% · 1% · 3%**
- Live readout: weighted %, wow, flutter, peak hold, carrier lock, level; reset hold

![Audio Lab W&amp;F on DIN, 3150 Hz, eccentricity 33](/assets/images/turntable-audio/howto-wf-turntable.png){: .center-image }

### Measure &amp; cursors

Side panels: **Control · Measure · Input**.

- Measure channel: **A · B · Math** (Math only when Y-T math is on)
- Readouts: **Vpp, RMS, Freq, Period, Duty, THD, Peak, Mag, Span**, plus cursor cells **XA/XB/ΔX, YA/YB/ΔY** when cursors are on
- Cursors on Y-T, FFT, and Spectrograph — drag A/B (and Y pairs on Y-T); units follow the mode

![Audio Lab Y-T with Cursors on and Measure showing Δt and ΔV](/assets/images/turntable-audio/howto-controls-cursors.png){: .center-image }

### Built-in examples

Chirp · 1 kHz · Harmonics · 4% THD · Tape · Sweep · Lissajous · CD eye · Osci · Pink · Turntable · Hello · Aphex · Dial-up

### Export

- **Save PNG** of the scope plot (framebuffer crop — matches what’s on screen). Ctrl/Cmd+S
- **Save Video** → WebM (AV1), plot region, timed capture of the painted frame
- Files land under **Pictures/AudioLab**

How-tos for a reference tape or test record are in [How To]({{ '/projects/audio-lab/how-to/' | relative_url }}): controls, recommended ADC and input sample trim, tape-head azimuth, tape and turntable W&amp;F, turntable frequency response, anti-skate, and cassette or turntable channel balance.

### Example: Lissajous

X-Y for tape-head azimuth — aim for a tight, stable ellipse/line on a high-frequency test tone. **Phase Aid** draws a chord line to help with alignment.

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-lissajous.webm' | relative_url }}">
</video>

### Example: FFT

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-fft.webm' | relative_url }}">
</video>

### Example: spectrograph

A face drawn in frequency bands while the waterfall scrolls right→left.

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-spectrograph.webm' | relative_url }}">
</video>

### Example: dial-up modem

Handshake then carrier — probe tones stack as bars, then the waterfall fills with the data burst.

<video class="center-image" autoplay muted loop playsinline preload="auto" src="{{ '/assets/images/turntable-audio/scope-dialup.webm' | relative_url }}">
</video>
