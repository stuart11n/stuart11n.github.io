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

### Loaded heights for common cartridges

These use each cartridge's published static compliance, catalog body height and standard tracking force (2.0&nbsp;g for all of them). At 2.0&nbsp;g, deflection in mm is the compliance figure × 0.0196.

| Cartridge | Static compliance (×10⁻⁶ cm/dyne) | Body height | Deflection | Loaded height |
|---|---|---|---|---|
| AT-VM740xML | 20 | 17.5&nbsp;mm | 0.39&nbsp;mm | **17.1&nbsp;mm** |
| AT-VM95C, AT-VM95E | 17 | 17.2&nbsp;mm | 0.33&nbsp;mm | **16.9&nbsp;mm** |
| AT-VM95EN, AT-VM95ML, AT-VM95SH | 20 | 17.2&nbsp;mm | 0.39&nbsp;mm | **16.8&nbsp;mm** |
| AT VM510CB, VM520EB, VM530EN | 35 | 17.3&nbsp;mm | 0.69&nbsp;mm | **16.6&nbsp;mm** |
| AT VM540ML, VM740ML, VM750SH, VM760SLC | 40 | 17.3&nbsp;mm | 0.78&nbsp;mm | **16.5&nbsp;mm** |

The older VM740ML and the newer AT-VM740xML are different cartridges, with different compliance and body heights. Check which one you have.

Figures are from Audio-Technica's published specifications. As with the gauge itself, treat them as nominal.

**Please check these numbers before you print.** Confirm the static compliance, body height and tracking force against the manufacturer's current datasheet for your exact cartridge, and redo the calculation yourself. Specifications change between models and revisions, retailer listings are often wrong, and I may have made a mistake. Use this table at your own risk.

## More audio tools

For other audio tools, see [s16n.com](https://www.s16n.com), including the [Audio Lab](/projects/audio-lab/) browser oscilloscope and wow & flutter meter.
