---
layout: post
title: Audio Lab How to
description: >-
  How to use s16n Audio Lab with a reference tape or test record — recommended ADC, tape-head azimuth, tape and turntable wow & flutter, turntable frequency response, anti-skate, and cassette or turntable channel balance.
image: /assets/images/turntable-audio/scope-hero.jpg
permalink: /projects/audio-lab/how-to/
tags:
  - audio
  - software
keywords:
  - audio lab
  - azimuth
  - wow and flutter
  - frequency response
  - anti-skate
  - channel balance
  - cassette
  - test record
  - reference tape
  - usb adc
  - behringer uca202
---

How-to notes for [Audio Lab]({{ '/projects/audio-lab/' | relative_url }}) — a USB ADC, a reference tape or test record.

<div class="cta-row">
  <a class="btn btn--primary" href="https://audiolab.s16n.com/" target="_blank" rel="noopener noreferrer">Open Audio Lab</a>
  <a class="btn btn--ghost" href="{{ '/projects/audio-lab/' | relative_url }}">Back to Audio Lab</a>
</div>

### Contents
{:.no_toc}

* TOC
{:toc}

### Recommended ADC

Audio Lab reads a stereo USB device in the browser. You need a class-compliant ADC with **line** inputs — not the laptop or phone microphone.

- **Behringer UCA202 / UCA222** — cheap RCA line-in, no mic preamp in the way. Fine for a tape deck or a phono stage.
- Any 2-in USB interface with a LINE pad (Focusrite Scarlett and similar) works if you set the inputs to line, not instrument or mic.
- 48 kHz is enough. The analyzer tops out at 24 kHz.
- On a phone, use USB-C OTG (Android) or a camera adapter (iPhone) and pick that device in the app.
- A turntable still needs a phono stage in front of the ADC. Do not plug the cartridge into line-in.

### Align tape-head azimuth

Use a dual-channel azimuth tone on a reference tape — typically 8, 10, or 15 kHz, recorded on both tracks. **X-Y** is free. Turn on **Phase Aid** (Pro) — that chord is the setting this check is built around. An FFT / Spectrograph confirm is a 60 s free preview, then Pro.

![Audio Lab X-Y with Phase Aid on a fat azimuth ellipse](/assets/images/turntable-audio/howto-azimuth-xy.png){: .center-image }

1. Take the deck’s line outputs into a USB ADC. In Audio Lab, pick that device and Start. Show **A** and **B**.
2. Play the azimuth section. Switch to **X-Y**. A is X, B is Y. Auto scale on. Enable **Phase Aid**.
3. Turn the azimuth screw slowly. Aim for a tight, stable line (or a very thin ellipse) with the Phase Aid chord along it. A fat, rotating, or open figure means the head is still off.
4. Switch to **FFT** as a check. Both channels should sit on the same peak; wandering or a washed-out comb means phase is still drifting. **Spectrograph** shows the same thing over time — the two traces should hold still.

Do this after the tape path is clean and the tape is seated. Recheck at a second frequency on the tape if it has one. The **Tape wobble** demo is this view without a deck.

### Check tape wow &amp; flutter

Use the W&amp;F section of a reference tape: **3.15 kHz** for DIN / CCIR, or **3 kHz** for JIS / NAB. **DIN** is free. JIS, NAB, CCIR, 2σ, and unweighted are Pro — use the one printed on the tape if you have Pro.

![Audio Lab W&amp;F on DIN, 3150 Hz carrier, eccentricity Off](/assets/images/turntable-audio/howto-wf-tape.png){: .center-image }

1. Line out from the deck into the USB ADC. Start Audio Lab and switch to **W&amp;F**. The meter reads channel A only — hide B if it is noisy.
2. Play the tone. Set **Standard** to DIN (or the Pro standard that matches the tape). Set **Carrier** to 3150 (DIN / CCIR) or 3000 (JIS / NAB). Leave **Eccentricity** Off — that notch is for turntables.
3. Wait until Seek locks and the W&amp;F, wow, and flutter readouts settle. Use hold / 5 s average if the number is bouncing.
4. Compare the reading to the deck’s spec. A high wow (low-rate) number usually means capstan or belt; high flutter is more scrape, roller, or motor cogging.

Level should be healthy on the meter. If Lock never appears, the tone is too quiet or the wrong frequency.

### Check turntable wow &amp; flutter

Use a test record with a **3.15 kHz** (DIN / CCIR) or **3 kHz** (JIS / NAB) tone. Some discs also have 1 kHz. **DIN** is free; the other standards are Pro. Set **Eccentricity** to 33 or 45 (free) so once-per-rev wow from an off-center hole is notched out.

![Audio Lab W&amp;F on DIN, 3150 Hz, eccentricity 33](/assets/images/turntable-audio/howto-wf-turntable.png){: .center-image }

1. Phono stage into the USB ADC. Start Audio Lab and switch to **W&amp;F**. The meter reads channel A only.
2. Play the tone at 33 or 45 as marked on the disc. Set **Standard** to DIN (or the Pro standard that matches the record). Set **Carrier** to 3150, 3000, or 1000 Hz.
3. Set **Eccentricity** to 33 or 45. Leave it Off if you want that eccentricity in the number.
4. Wait for Seek to lock. Speed % and RPM error show under the main readout when the carrier is held. Use hold / 5 s average if the value is moving.
5. Compare W&amp;F, wow, and flutter to the table’s spec. High wow is usually platter, belt, or a warped disc; high flutter is more motor cogging or a dirty bearing.

The **Turntable wow** demo is a 3150 Hz tone with 0.55 Hz wow — Eccentricity 33 is the recommended setting on that.

### Check turntable frequency response

Use a test record with a **pink-noise** band, through a phono stage, into the USB ADC. FFT is a 60 s free preview, then Pro. **Pink EQ** and **Average** High are free. **Log** X is Pro — use it so bass and treble share the plot.

![Audio Lab FFT on Pink EQ, Log X, and Average High](/assets/images/turntable-audio/howto-fft-pink.png){: .center-image }

1. Start Audio Lab on that input. Switch to **FFT**. Show **A** and **B**.
2. Set Magnitude to **Pink EQ** (+3 dB/oct). Ideal pink then reads flat. Set X to **Log**. Set **Average** to High and wait for the curve to settle.
3. Play the pink-noise band at a typical tracking force. Auto scale on, or fix **dB range** so both channels share a scale.
4. A flat-ish pair of traces is the cartridge + arm + preamp response after RIAA. Look for channel mismatch, a rising or falling treble tilt, a bass hump (arm/cartridge resonance), or a suck-out. Switch Magnitude to **dB** if you want the raw −3 dB/oct pink slope instead.

The **Pink noise** demo is this same setup without a record.

### Set turntable anti-skate

Use a test record with a **tracking / anti-skate** band (a loud 300 Hz tone is common) or a silent, unmodulated groove. Tracking force should already be set. **Y-T** is free. **THD** (Pro) is the readout to watch — it should stay matched on A and B. An FFT confirm is a 60 s free preview, then Pro.

![Audio Lab Y-T with both channels and Measure, including THD](/assets/images/turntable-audio/howto-yt-antiskate.png){: .center-image }

1. Phono stage into the USB ADC. Start Audio Lab. Show **A** and **B** (A is left, B is right if the ADC is wired that way).
2. Play the tracking band. Switch to **Y-T**. Auto scale on. Measure on. A clean tone is a steady pair of sine waves. Mistracking is a sudden spike, a collapsing edge, or hash on one channel — and **THD** jumping on that side only.
3. Switch to **FFT** as a check (dB, **Log** X if you have Pro, Average Off). Both channels should share one peak and the same harmonic stack. Extra broadband junk or one channel’s harmonics jumping means that side is losing the groove.

![Audio Lab FFT of a 1 kHz tone plus harmonics, dB and Log X](/assets/images/turntable-audio/howto-fft-antiskate.png){: .center-image }

4. Turn anti-skate until A and B break up together — or neither does at that level. Too little anti-skate usually dirties **B** (outer / right wall) first; too much dirties **A** (inner / left). If the disc has an inner-groove band, recheck there — skating force is highest toward the label.

A silent groove is a cruder check: the arm should sit still, and Y-T / FFT noise should look similar on A and B. Do not chase a steady midband level offset with anti-skate — that is channel balance.

### Check cassette channel balance

Use the **400 Hz** or **1 kHz** reference on a cassette test tape, or a tone recorded equally on both tracks. Midband, so azimuth is not the whole story. **Y-T** with Auto off and the **RMS** / **Vpp** readouts is free. An FFT peak compare is a 60 s free preview, then Pro.

![Audio Lab Y-T of a 1 kHz tone on A and B with Auto off](/assets/images/turntable-audio/howto-yt-balance.png){: .center-image }

1. Deck line out into the USB ADC. Start Audio Lab. Show **A** and **B**.
2. Play the tone. **Y-T** with Auto off so both traces share a scale, or read **RMS** / **Vpp** on each channel. Switch to **FFT** and compare the two peaks in dB.
3. A few tenths of a dB is normal. Around 1 dB or more is worth chasing: playback balance, record-level pots, or head height. If the midband matches but the highs do not, go back to azimuth.

A commercially recorded cassette can sanity-check a deck, but the tape itself may already be unbalanced.

### Check turntable channel balance

Use a **1 kHz** (or other midband) band on a test record, through a phono stage, into the USB ADC. Prefer a lateral / L+R tone so both walls are driven the same. Same free **Y-T** setup as the cassette check — Auto off, read **RMS** / **Vpp**. FFT is a 60 s free preview, then Pro.

1. Start Audio Lab on that input. Show **A** and **B**.
2. Play the tone at a typical tracking force. **Y-T** with Auto off, or read **RMS** / **Vpp**. **FFT** with both traces — the peaks should sit on top of each other.
3. A few tenths of a dB is typical cartridge scatter. A steady 1 dB or more is cartridge, wiring, or the phono stage — not anti-skate. If only the highs disagree, check stylus azimuth and the frequency-response how-to above.

Pink-noise FFT (Pink EQ, **Log** X if Pro, Average High) shows the same imbalance across the band if you do not have a 1 kHz cut.
