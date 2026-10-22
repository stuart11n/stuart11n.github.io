---
layout: post
title: VTA & Azimuth Gauge
permalink: /projects/vta-azimuth-gauge/
description: >-
  A 3D-printed headshell gauge for setting azimuth and VTA on a tonearm, using the record surface as the reference.
image: /assets/images/vta-azimuth-gauge/hero.jpg
homepage: true
homepage_order: 113
tags:
  - project
  - audio
card_desc: "A printable headshell gauge for setting azimuth and VTA."
---

![The gauge on the headshell, set against a record](/assets/images/vta-azimuth-gauge/hero.jpg){: .center-image }

This gauge attaches to the headshell and sets azimuth and VTA against a record. It's a quicker and more repeatable alternative to a mirror.

You can download the model from [Printables](https://www.printables.com/model/1873469-azimuthvta-calibration-gauge).

## How to use it

Use an average-height record, and check that the gauge sits flat on it.

- **Azimuth:** look at the front edge of the gauge. Adjust until there is no light visible between the edges and the record.
- **VTA:** adjust the arm height until both edges of the gauge are on the record surface.

## Notes

- **Height:** the gauge is 17.1&nbsp;mm. This is the calculated loaded height at 2&nbsp;g, using the cartridge's published static compliance. For azimuth it works with any cartridge.
- **VTA accuracy:** VTA depends on stylus deflection, which should be calculated or measured. The 17.1&nbsp;mm figure uses the published static compliance, which is nominal, and the 2&nbsp;g tracking force is also nominal. The gauge is 3D printed, so its VTA accuracy is nominal too.
- **Mirror vs gauge:** it's clearly better than a mirror for setting azimuth. Its one limit is that it can't account for zenith angle. Doing that properly needs professional tools and experience. If your stylus is straight, the gauge is fine.
- **Printing:** print with a precise Z height and use ironing for a smooth surface.

## Using it with other cartridges

You can adapt the gauge to other cartridges by calculating the required height:

**Loaded height = catalog body height − stylus deflection**

Deflection is the static compliance multiplied by the tracking force in dynes (1 g ≈ 980 dynes):

**Deflection = compliance × force**

For example, the AT-VM740xML:

- Static compliance: 20 × 10⁻⁶ cm/dyne
- Tracking force: 2.0 g ≈ 1960 dynes
- Deflection: 20 × 10⁻⁶ × 1960 = 0.0392 cm ≈ 0.39 mm
- Catalog body height: 17.5 mm
- Loaded height at 2.0 g: 17.5 − 0.39 ≈ 17.1 mm

If the static compliance isn't published, a deflection of about 0.3&nbsp;mm will get you close. You can also measure the deflection.

## More audio tools

For other audio tools, see [s16n.com](https://www.s16n.com), including the [Audio Lab](/projects/audio-lab/) browser oscilloscope and wow & flutter meter.
