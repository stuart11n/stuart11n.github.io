---
layout: post
title: s16n Controller Panel
description: >-
  Overlay panel for s16n Funky Coder and Funky Coder Plus — automatic bind labels in X-Plane 12 and MSFS 2024, SPAD.neXt support, and an experimental OpenXR HUD.
image: /assets/images/controller-panel/hero.jpg
card_image: /assets/images/controller-panel/card.jpg
permalink: /projects/controller-panel/
homepage: true
homepage_order: 28
tags:
  - project
  - software
  - aviasim
keywords:
  - controller panel
  - funky coder
  - funky coder plus
  - overlay
  - automatic labels
  - X-Plane 12
  - MSFS 2024
  - SPAD.neXt
  - OpenXR
  - HUD
  - flight sim
card_desc: "Automatic bind labels for Funky Coder / Plus — XP12, MSFS 2024, SPAD, OpenXR HUD."
card_wide: true
---

Windows app that draws a live overlay of your **Funky Coder** or **Funky Coder Plus**, with **automatic labels** from the active sim / SPAD.neXt binds. Float it in **X-Plane 12** or **MSFS 2024**, or push an experimental **OpenXR** HUD in VR.

![s16n Controller Panel overlay in X-Plane 12](/assets/images/controller-panel/hero.jpg){: .center-image }

<div class="cta-row">
  <a class="btn btn--primary" href="https://github.com/stuart11n/s16n-releases/releases/download/controller-panel-latest/s16n-controller-panel-setup.exe">Download for Windows</a>
  {% include bmc-button.html %}
</div>

### Controllers

- **Funky Coder** and **Funky Coder Plus**
- Device pictogram + pin map per unit — knobs, pushes, and hats drawn from the hardware layout
- Live button / encoder activity on the panel
- Mode chrome when the device has mode pins (**MODE 1**, **MODE 2**, …)
- Selection remembered across launches; hot plug refresh

### Automatic labels

Labels are pulled from the **active bind files** for the sim or middleware in focus — not hand-typed on the panel.

- Reads MSFS, X-Plane 12, and **SPAD.neXt** bind / profile data
- SPAD names win when SPAD is providing a label for that button
- Leader lines point from each control to its bound action (NAV outer/inner, ALT, G1000, transponder, pan, …)
- Host tag on the panel footer (e.g. **XP+SPAD**, **MSFS**, **SPAD**)
- HUD color: **green · white · red** (cycle in the app)

**Funky Coder Plus**

![Funky Coder Plus — green HUD](/assets/images/controller-panel/hud-green.png){: .center-image }

![Funky Coder Plus — white HUD](/assets/images/controller-panel/hud-white.png){: .center-image }

![Funky Coder Plus — red HUD](/assets/images/controller-panel/hud-red.png){: .center-image }

**Funky Coder**

![Funky Coder — green HUD](/assets/images/controller-panel/hud-fc-green.png){: .center-image }

![Funky Coder — white HUD](/assets/images/controller-panel/hud-fc-white.png){: .center-image }

![Funky Coder — red HUD](/assets/images/controller-panel/hud-fc-red.png){: .center-image }

### X-Plane 12

- Floating **S16N Overlay Panel** plugin window inside the sim
- Install from the app’s **Install** tab (or the bundled plugin payload)
- Menu: **Plugins → S16N Overlay → Show Overlay Panel**
- Same shared-memory image the desktop app and OpenXR path use

### MSFS 2024

- In-game toolbar panel (**S16N Overlay**) via the Community package
- Install / remove from the **Install** tab pointing at your Community folder
- Fully restart MSFS after install

### SPAD.neXt

- Watches SPAD bind / profile files for the selected s16n device
- Labels update when you reassign in SPAD
- Works alongside XP12 or MSFS (footer shows **XP+SPAD** / **MSFS+SPAD** when both are live)

### OpenXR HUD (experimental)

- Implicit OpenXR API layer composites the same panel as a transparent quad in the headset
- Optional system-wide (HKLM) registration from the installer or **Install** tab
- Nudge position / size, VIEW vs LOCAL space, visibility, alpha
- One-eye capture for debugging (F8)
- Tested against common Windows OpenXR runtimes (e.g. Pimax); treat as experimental

### Also in the app

- **Devices** — pick the Funky Coder / Plus, refresh HID list
- **Binds** — active bind files for MSFS / XP12 / SPAD.neXt
- **Install** — OpenXR layer, MSFS Community panel, X-Plane 12 plugin
- Optional start with Windows (system tray)
- Windows 10/11 x64 installer (`s16n-controller-panel-setup.exe`)

### Requirements

- Windows 10/11 x64
- An s16n **Funky Coder** or **Funky Coder Plus** revision 2 with PID **FFC1**, **FFC2**
- X-Plane 12 and/or MSFS 2024 for the in-sim panels; SPAD.neXt optional for bind labels
- An OpenXR runtime if you use the experimental VR HUD
