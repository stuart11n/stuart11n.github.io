---
layout: post
title: Audio Lab How to
description: >-
  How to use s16n Audio Lab with a reference tape or test record — controls, recommended ADC, tape-head azimuth, tape and turntable wow & flutter, turntable frequency response, anti-skate, and cassette or turntable channel balance.
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
  - notch
  - cursors
  - persist
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

### Controls

Knobs and channel buttons sit in the mid column. Mode buttons and the rest of the panel sit on the right. What you get depends on **Y-T**, **X-Y**, **W&amp;F**, **FFT**, or **Spectrograph**.

![Audio Lab Y-T with A/B knobs locked, Auto scale, Measure, and the Y-T panel](/assets/images/turntable-audio/howto-controls-yt.png){: .center-image }

#### Channels

Click **A** or **B** to show or hide that trace. At least one channel stays on. The swatch next to the letter is the channel color — click it to pick a new one.

**X-Y** forces both on and relabels them **X = A** and **Y = B**. **W&amp;F** reads A only (**In = A**).

#### Auto scale, Measure, Audio, Cursors

- **Auto scale** fits the plot to the signal. The Y (or dB range) knob greys out while it is on. Turn Auto off to set the scale yourself — needed when you want A and B on the same volts/div.
- **Measure** opens the readout: Vpp, RMS, frequency, period, duty, and more. **THD** is Pro. Tabs pick A or B (and the math channel when that is on).
- **Audio** plays the analysed signal through the speakers. It starts off.
- **Cursors** are Pro in Y-T and FFT, and free in Spectrograph. Y-T drops two vertical time cursors; FFT / Spectrograph drop frequency cursors. Drag A and B on the plot. Deltas land in the Measure list.

![Audio Lab Y-T with Cursors on and Measure showing Δt and ΔV](/assets/images/turntable-audio/howto-controls-cursors.png){: .center-image }

**X-Y** swaps Cursors for **Phase Aid** (Pro) — a chord that tints green in phase and red when the figure is ≥20° out.

#### Knobs

**Y-T** has five knobs:

- **A Time / div** — time per division for A. The padlock locks B to A.
- **B Time / div** — independent B timebase when the lock is open.
- **A Y (V)** — volts per division for A. Same padlock for B’s Y.
- **B Y (V)** — independent B scale when the lock is open.
- **Trig level** — trigger threshold (Pro). Edge is Rise / Fall / Either; source is A or B.

Click the padlock (**Unlock B from A**, Pro) so B no longer tracks A. Lock it again to copy A onto B. Independent time/div and Y are Pro. A math channel other than Off forces A and B back together.

![Audio Lab Y-T with B unlocked from A — open padlocks on Time / div and Y](/assets/images/turntable-audio/howto-controls-yt-unlock.png){: .center-image }

**X-Y** has one **Time / div** and one **Y (V)**. No A/B lock — A is always X and B is always Y.

![Audio Lab X-Y with Time / div, Y, Phase Aid, and X = A / Y = B](/assets/images/turntable-audio/howto-controls-xy.png){: .center-image }

**FFT** and **Spectrograph** replace time/Y with **Max freq** (up to Nyquist) and, in dB / Pink EQ, **dB range** (40–120 dB). In FFT Linear, that second knob is a magnitude scale. Auto scale still owns the Y knob until you turn it off. Spectrograph has no Persist control.

**W&amp;F** hides the knobs. Use **Standard**, **Carrier**, **Eccentricity**, and **Range % FS** on the panel instead.

#### Coupling

**DC** keeps any offset. **AC** strips DC so a small AC signal is not sitting on a rail. Coupling is on every mode except W&amp;F (the meter wants the raw carrier).

#### Notch

The panel is labeled **Notch**. **Off** is free. **Band-stop** and **Band-pass** are Pro.

- **Band-stop** cuts a narrow band — 50 / 60 / 120 Hz presets for mains, or drag **Freq**.
- **Band-pass** keeps a band and rejects the rest.
- **Width** is Q. Higher Q is a tighter notch.

Notch is not on W&amp;F.

![Audio Lab Notch on Band-stop at 60 Hz with Freq and Width sliders](/assets/images/turntable-audio/howto-controls-notch.png){: .center-image }

#### Persist

**Off** / **Lo** / **Hi**. Hi is the phosphor trail — useful for a drifting Lissajous or a rare glitch. The **CD RF eye** demo is the clear case: without persist the diamond lattice is hard to see; **Persist** Hi burns the eye in as traces overlay. Persist is on Y-T, X-Y, and FFT. Spectrograph and W&amp;F do not have it.

#### Magnitude, X axis, Average

FFT-only, above Coupling:

- **Magnitude** — **Linear**, **dB**, or **Pink EQ** (+3 dB/oct so ideal pink reads flat).
- **X axis** — **Log** (20 Hz–max, Pro) or **Linear** (0–max).
- **Average** — **Off** (instant), **Low**, or **High** (steady pink curve).

![Audio Lab FFT with Magnitude dB, Log X, Average Off, Max freq and dB range](/assets/images/turntable-audio/howto-controls-fft.png){: .center-image }

Y-T also has **Display interpolation** (Off, **Sin(x)/x**, Oversample — Pro) and **Math** (A+B, A−B, A×B, A÷B — Pro). Those sit under Persist.

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

![Audio Lab Y-T of a clean 1 kHz tone on A and B — good tracking](/assets/images/turntable-audio/howto-yt-antiskate.png){: .center-image }

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
