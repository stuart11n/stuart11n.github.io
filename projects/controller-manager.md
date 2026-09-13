---
layout: post
title: s16n Controller Manager
description: >-
  Windows HID controller manager for s16n devices — live input monitor, encoder detection, and settings backup/restore.
image: /assets/images/controller-manager/monitor.png
permalink: /projects/controller-manager/
---

Windows app for monitoring HID controllers and managing s16n device settings. Free to download.

<p><a class="btn btn--primary" href="https://github.com/stuart11n/s16n-releases/releases/download/controller-manager-latest/s16n-controller-manager.exe">Download for Windows</a></p>

![s16n Controller Manager Monitor tab](/assets/images/controller-manager/monitor.png){: .center-image }

### Features

- Enumerates HID joysticks, gamepads, and multi-axis controllers (hot plug / unplug)
- One tab per connected device, with s16n devices sorted first
- **Monitor** live view of buttons, axes, HATs, and discovered encoders
- Automatic encoder detection from button pulse trains, with mean pulse timing
- Color-coded activity (pressed, recent, idle) and optional fade
- Timestamped input event log with deltas
- Device summary with VID/PID, serial, capabilities, and Copy
- Product image for known s16n devices

### Settings (supported devices)

For known s16n devices, a **Settings** tab adds:

- **Fetch** — load the current config from the device
- **Write** — send edits back to the device
- **Backup** / **Restore** — package configs for safekeeping or rollbacks

### Requirements

- Windows 10/11 x64
- Ships as a single self-contained exe (`s16n-controller-manager.exe`)
