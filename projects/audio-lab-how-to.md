---
layout: post
title: Audio Lab How to
description: >-
  How to use s16n Audio Lab with a reference tape or test record — tape-head azimuth, tape and turntable wow & flutter, and turntable frequency response with pink noise.
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
  - test record
  - reference tape
---

How-to notes for [Audio Lab]({{ '/projects/audio-lab/' | relative_url }}) — a USB ADC, a reference tape or test record.

<div class="cta-row">
  <a class="btn btn--primary" href="https://audiolab.s16n.com/" target="_blank" rel="noopener noreferrer">Open Audio Lab</a>
  <a class="btn btn--ghost" href="{{ '/projects/audio-lab/' | relative_url }}">Back to Audio Lab</a>
</div>

### Align tape-head azimuth

Use a dual-channel azimuth tone on a reference tape — typically 8, 10, or 15 kHz, recorded on both tracks.

1. Take the deck’s line outputs into a USB ADC. In Audio Lab, pick that device and Start. Show **A** and **B**.
2. Play the azimuth section. Switch to **X-Y**. A is X, B is Y. Auto scale on.
3. Turn the azimuth screw slowly. Aim for a tight, stable line (or a very thin ellipse). A fat, rotating, or open figure means the head is still off. Pro **Phase Aid** draws a chord along the major axis so the tilt is easier to see.
4. Switch to **FFT** as a check. Both channels should sit on the same peak; wandering or a washed-out comb means phase is still drifting. **Spectrograph** shows the same thing over time — the two traces should hold still.

Do this after the tape path is clean and the tape is seated. Recheck at a second frequency on the tape if it has one.

### Check tape wow &amp; flutter

Use the W&amp;F section of a reference tape: **3.15 kHz** for DIN / CCIR, or **3 kHz** for JIS / NAB.

1. Line out from the deck into the USB ADC. Start Audio Lab and switch to **W&amp;F**. The meter reads channel A only — hide B if it is noisy.
2. Play the tone. Set **Standard** to DIN (free) or the one that matches the tape. Set **Carrier** to Auto, or lock 3150 / 3000 Hz. Leave **Eccentricity** Off — that notch is for turntables.
3. Wait until Seek locks and the W&amp;F, wow, and flutter readouts settle. Use hold / 5 s average if the number is bouncing.
4. Compare the reading to the deck’s spec. A high wow (low-rate) number usually means capstan or belt; high flutter is more scrape, roller, or motor cogging.

Level should be healthy on the meter. If Lock never appears, the tone is too quiet or the wrong frequency.

### Check turntable wow &amp; flutter

Use a test record with a **3.15 kHz** (DIN / CCIR) or **3 kHz** (JIS / NAB) tone. Some discs also have 1 kHz.

1. Phono stage into the USB ADC. Start Audio Lab and switch to **W&amp;F**. The meter reads channel A only.
2. Play the tone at 33 or 45 as marked on the disc. Set **Standard** to DIN (free) or the one that matches the record. Set **Carrier** to Auto, or lock 3150 / 3000 / 1000 Hz.
3. Set **Eccentricity** to 33 or 45 so the once-per-rev wow from an off-center hole is notched out. Leave it Off if you want that eccentricity in the number.
4. Wait for Seek to lock. Speed % and RPM error show under the main readout when the carrier is held. Use hold / 5 s average if the value is moving.
5. Compare W&amp;F, wow, and flutter to the table’s spec. High wow is usually platter, belt, or a warped disc; high flutter is more motor cogging or a dirty bearing.

The **Turntable wow** demo is a 3150 Hz tone with 0.55 Hz wow — try Eccentricity 33 on that.

### Check turntable frequency response

Use a test record with a **pink-noise** band, through a phono stage, into the USB ADC.

1. Start Audio Lab on that input. Switch to **FFT**. Show **A** and **B**.
2. Set Magnitude to **Pink EQ** (+3 dB/oct). Ideal pink then reads flat. Use **Log** X (Pro) so bass and treble share the plot. Set **Average** to High and wait for the curve to settle.
3. Play the pink-noise band at a typical tracking force. Auto scale on, or fix **dB range** so both channels share a scale.
4. A flat-ish pair of traces is the cartridge + arm + preamp response after RIAA. Look for channel mismatch, a rising or falling treble tilt, a bass hump (arm/cartridge resonance), or a suck-out. Switch Magnitude to **dB** if you want the raw −3 dB/oct pink slope instead.

The **Pink noise** demo shows the same Pink EQ + log X setup without a record.
