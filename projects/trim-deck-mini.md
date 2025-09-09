---
layout: post
categories: flightsim trim
title: Trim Deck Mini
---

<a href="https://s16nengineering.etsy.com"><button>BUY</button></a>

![CDT_VMAX_Mount_2025 May 26_10 49 37PM 000_CustomizedView43852198952_jpg](../assets/Screenshot 2025-09-07 172513.png)

Trim Deck Mini is a set of trim wheels for elevator, aileron, rudder plus dual encoders for controlling trim reset, auto-trim or something else. Each wheel has a friction damper; they will not freewheel or move of their own free-will.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lRGX-Cq_l9s?si=nZ6pqjTQ2srB39fx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

It comes with the universal bracket.

![Screenshot 2025-06-27 102849](../assets/Screenshot 2025-06-27 102849.png)

The wheels are all 67mm in diameter and use magnetic sensors producing 100 pulses per revolution provides a very smooth motion. 

The trim wheels emit button presses and are also mapped to separate axis. 

# Encoders

![Screenshot 2025-09-01 111337](../assets/Screenshot 2025-09-01 111337.png)

Two general purpose dual encoders are available for mapping.

# Mapping

The trim wheels can be mapped using button presses or axis, each has advantages and disadvantages. The best option depends on the simulators and desired functionality.

### Buttons

Mapping with button presses cannot desynchronize from the simulation, as the position of the trim wheel is always relative to the trim position in the simulator. The limitation is how the sim interprets each of the button presses, even between aircraft. MSFS generally doesn't do this well and trim movement will most likely be very slow because it's expecting the button to be _held_. To mitigate this, it is recommended to use some software such as SPAD.next which will allows the trim sensitivity to be adjusted precisely to your needs, per aircraft is needed. This can be done directly in X-Plane 12 using the Plane Maker.

### Axis

Mapping using axis is straight forward. One rotation equals one axis cycle. The downside is the axis position can become desynchronized from the simulation causing sudden jumps when the axis is moved, either physically or in the simulation. This can happen any time the trim wheel or trim in the simulation are moved independently of each other. For example at the start of a flight there will be mismatch between the physical position and where the simulation thinks the trim wheel is, so the first time you touch the physical wheel the trim will jump to the wheel position. It can also happen if AP adjusts the trim too. This can be mitigated by always centering the wheel at the start of a flight, during a flight it is a little trickier. 

## Software

### X-Plane 12

Use Plane Maker to adjust the trim sensitivity in Control Geometry.

![Screenshot 2025-09-08 170622](../assets/Screenshot 2025-09-08 170622.png)

### SPAD.next

SPAD.next is can be used to alter the speed of trim adjustment when mapping using button presses. This is certainly true for MSFS if you want the rotation of the wheels to match in-game speed (as shown in the video).

The wheel emits ~100 events per rotation.  Other software (e.g. Mobiflight, Axis and Ohs) that allow the mapping of device events to SIMCONNECT data values should also work and games that have built-in functionality to make external trim wheels work effectively should too.  **As I haven't personally tested these alternatives I cannot attest to their effectiveness.**

These table shows the SIMCONNECT events and values I use in SPAD.next. 

### Settings

The size of the increment/decrement can be adjusted to taste and/or to aircraft. Some aircraft have built-in trim sensitivity adjustments that may also be helpful. These are starting points:

| Trim Wheel | SIMCONNECT data value  | Increment/Decrement by |
| ---------- | ---------------------- | ---------------------- |
| Elevator   | ELEVATOR TRIM POSITION | 0.004                  |
| Aileron    | AILERON TRIM PCT       | 0.01                   |
| Rudder     | RUDDER TRIM PCT        | 0.01                   |

![image-20250620095926270](../assets/image-20250620095926270.png)

![image-20250628150234948](../assets/image-20250628150234948.png)

![image-20250620095841470](../assets/image-20250620095841470.png)

![image-20250628145939042](../assets/image-20250628145939042.png)

![image-20250620095907086](../assets/image-20250620095907086.png)

![image-20250628150002618](../assets/image-20250628150002618.png)

#### Black Square Starship

The Starship seems to work better with a larger elevator increment of 0.02

![image-20250628151326774](../assets/image-20250628151326774.png)

### Simtrim 

https://flightsim.to/file/83514/simtrim-synchronising-your-analog-elevator-trim-wheel



