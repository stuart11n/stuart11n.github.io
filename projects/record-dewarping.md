---
title: Record Dewarping
description: >-
  How to flatten a warped vinyl record using a 3D printer's heated bed, two sheets of glass and a simple 2-hour G-code file.
image: /assets/images/record-dewarping/record-on-bed.jpg
homepage: true
homepage_order: 112
tags:
  - project
  - audio
card_desc: "Flatten a warped record with a 3D printer's heated bed and two sheets of glass."
---

A warped record is a lot more annoying than a scratched one: the stylus rides up and down and the tonearm never settles. Vinyl goes soft when it is gently warmed, so with a little patience a warp can be pressed flat again. I do this with my 3D printer. Its heated bed holds a steady, accurate temperature for hours without any attention from me.

Before proceeding, please try this on a record you don't mind losing first, and note that you do this at your own risk. Read the full liability waiver [here](../disclaimer)

![A record between two sheets of glass on the printer bed](/assets/images/record-dewarping/record-on-bed.jpg){: .center-image }

## What you need

- A 3D printer with a heated bed (mine is a Bambu printer, but anything that can hold a bed temperature will do)
- Two flat sheets of glass, each larger than the record
- The [G-code file](/assets/files/dewarp.gcode) below
- A clean, dust-free surface

## How it works

The record is sandwiched between the two sheets of glass and set on the heated bed. The bed warms the glass, the glass warms the record evenly and holds it flat. The G-code simply heats the bed to the target temperature, holds it there for two hours, then turns the heat off.

The two-hour hold is a heat soak: it gives the glass and the record time to come up to temperature and settle there, so the temperature is stable the whole time.

Glass is a good choice because it is very flat, it spreads the heat evenly, and it doesn't flex or deform at these temperatures.

## Steps

1. **Clean everything.** Wipe the glass and the record. Any grit between the record and the glass will be pressed into the vinyl.
2. **Build the sandwich.** Put the first sheet of glass on the bed, the record on top of it, and the second sheet of glass on top of the record.
3. **Run the G-code.** Send the file below to the printer like any other print. My printer shows a message about the external spool because it treats this like any print. The file never heats the nozzle or extrudes, so there is nothing to load. Just press Print.

   ![The printer's Plate to Print screen showing dewarp.gcode](/assets/images/record-dewarping/printer-screen.jpg){: .center-image .small-image }
4. **Wait.** The bed heats to 57&nbsp;&deg;C, soaks for two hours, then switches off.
5. **Let it cool down slowly, still sandwiched.** Don't pull the record out while it is warm and soft. Leave it between the glass until everything is back at room temperature, so it sets flat.

## The G-code

[Download dewarp.gcode](/assets/files/dewarp.gcode)

```gcode
; Header for Bambu Printer Recognition
; total_page_number: 1
M104 S0         ; Hotend off
M84             ; Disable stepper motors
M107            ; Fan off
M190 S57        ; Wait for Bed 57C
G4 S7200        ; Hold 2 hours (7200s)
M140 S0         ; Bed off
```

What each line does:

| Line | Purpose |
|---|---|
| `M104 S0` | Makes sure the hotend is off. Only the bed is needed. |
| `M84` | Disables the stepper motors so nothing moves while it sits. |
| `M107` | Turns the part-cooling fan off. |
| `M190 S57` | Heats the bed to 57&nbsp;&deg;C and waits until it gets there. |
| `G4 S7200` | Dwell: holds for 7200 seconds (2 hours) while the bed stays at temperature. |
| `M140 S0` | Turns the bed heater off. |

The first two comment lines are only there so Bambu printers recognize the file. If your printer is not a Bambu, you can drop them.

## Tuning

- **Temperature:** change the number in `M190 S57`. Vinyl softens as it warms, so don't go hotter than you need to.
- **Time:** change the number in `G4 S7200`. The value is in seconds, so 3 hours would be `G4 S10800`.
- **A warp that returns** usually needs a longer hold or a slower cool-down rather than more heat.

<div class="cta-row">
  {% include bmc-button.html %}
</div>
