---
layout: post
title: ToF Stylus Saver
permalink: /projects/tof-stylus-saver/
description: >-
  Stylus saver that uses a VL53L0X time-of-flight sensor to see the tonearm arrive at the centre of the record and switch the turntable off through a Shelly relay.
image: /assets/images/tof-stylus-saver/hero.jpg
typora-root-url: ./../
homepage: true
homepage_order: 111
tags:
  - project
  - audio
card_desc: "A stylus saver that switches the turntable off when the tonearm reaches the centre, using a distance sensor."
---

This is an updated version of the [Stylus Saver](/projects/stylus-saver/). That one watches how much power the turntable draws. This one uses a distance sensor instead: a VL53L0X time-of-flight sensor sees the tonearm arrive at the centre of the record, then cuts power through a Shelly relay.

Mains power is involved, so please work safely and don't connect the relay to anything you aren't sure about.

## How it works

The sensor measures the distance to whatever is in front of it. When the tonearm passes over it, the firmware works like this:

- **Turning off:** once the reading stays under 40&nbsp;mm for 8 readings in a row, the relay is switched off and the turntable stops.
- **Turning back on:** once the reading stays over 50&nbsp;mm for 10 readings in a row, the relay is switched back on.
- **Smoothing:** readings are averaged, and the sensor is read about every 40&nbsp;ms.

The gap between 40 and 50&nbsp;mm stops the relay from chattering when the arm sits close to the threshold. The board's LED lights whenever the reading is under 40&nbsp;mm, with no filtering, so you can see the sensor working.

![The sensor mounted by the tonearm](/assets/images/tof-stylus-saver/tof-arm.jpg){: .center-image .small-image }

![The sensor and tonearm on the deck](/assets/images/tof-stylus-saver/tof-on-deck.jpg){: .center-image .small-image }

## Hardware

- A LOLIN (Wemos) S2 Mini
- A Pololu VL53L0X time-of-flight sensor. I'd recommend this one over the cheaper VL6180X modules, which had problems with crosstalk from the cover glass.
- A Shelly relay (Gen1 or Gen2) for switching the turntable
- A small 3D-printed bracket to hold the sensor by the tonearm

![The sensor and wiring, separated from the board](/assets/images/tof-stylus-saver/tof-parts.jpg){: .center-image .small-image }

![The assembled sensor and board](/assets/images/tof-stylus-saver/tof-assembled.jpg){: .center-image .small-image }

### Wiring

| VL53L0X | S2 Mini |
|---------|---------|
| VIN / VCC | 3V3 |
| GND | GND |
| SDA | GPIO8 |
| SCL | GPIO9 |
| XSHUT | GPIO7 |

![The back of the S2 Mini with the sensor wires](/assets/images/tof-stylus-saver/tof-board.jpg){: .center-image .small-image }

## Software

The firmware is an Arduino sketch for the S2 Mini. It needs the [Pololu VL53L0X library](https://github.com/pololu/vl53l0x-arduino), which you can install from the Arduino Library Manager or with `arduino-cli`.

Select the board **LOLIN S2 Mini** (`esp32:esp32:lolin_s2_mini`) with USB CDC on boot enabled, which is the default. Then compile and upload:

```bash
arduino-cli compile -b esp32:esp32:lolin_s2_mini arduino/vl53l0x_pololu
arduino-cli upload -p COMxx -b esp32:esp32:lolin_s2_mini arduino/vl53l0x_pololu
arduino-cli monitor -p COMxx -c baudrate=115200
```

Copy `secrets.h.example` to `secrets.h` and fill in your 2.4 GHz Wi-Fi details and the Shelly's IP address (`SHELLY_HOST`). Keep `secrets.h` out of version control.

## Calibration

Sensors vary, so calibrate each one once. Hold a flat object exactly 40&nbsp;mm from the sensor, then send `c` over the serial monitor. The offset is saved to the board. If you want to start again, send `z` to clear it. After a full flash erase, calibrate again.

## Serial commands

| Key | Action |
|-----|--------|
| `c` | Calibrate the offset at 40&nbsp;mm |
| `z` | Clear the offset |
| `1` / `0` | Relay on / off |

## What it doesn't do

This version doesn't track run-time or send Pushover alerts, which the original Stylus Saver does. If you want those too, use the Stylus Saver's Shelly script alongside this sensor.
