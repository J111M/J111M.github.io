---
title: "Phasebreak"
description: "Phasebreak is a turn-based tactics game set across two shifting dimensions, built in <strong>Unreal Engine 5</strong> with a team of 27. I worked on <strong>occlusion systems</strong>, <strong>volumetric fog</strong>, an in-editor <strong>profiler</strong>, gameplay features and bug fixing. The game is set to release on Steam."
image: /assets/img/projects/phasebreak/phasebreakimage.png
video: /assets/img/projects/phasebreak/phasebreak-trailer.mp4
features:
  - title: "Hole Occlusion Fading"
    text: "When a wall, pillar or prop blocks the view between the <strong>camera</strong> and the selected unit, a <strong>circular hole</strong> is faded out of the mesh. The target position goes from C++ to the material through a <strong>Material Parameter Collection</strong>. The rim is broken up with <strong>noise</strong> and a <strong>custom mask texture</strong> so it blends into the environment. Shadows stay visible and nothing behind the unit gets faded."
    icon: "fas fa-eye"
    video: "/assets/img/projects/phasebreak/hole-occlusion-fade.mp4"
  - title: "Room Collection Tool"
    text: "An <strong>editor tool</strong> for designers. Place a volume, press a button and it collects every occludable object inside it, <strong>highlighting</strong> what was captured. Pressing it again clears the old selection and collects the new one. It was built to be reused, and another programmer extended it for the <strong>room quest and progression system</strong>."
    icon: "fas fa-vector-square"
    video: "/assets/img/projects/phasebreak/room-collection-tool.mp4"
  - title: "Room Fading"
    text: "When a unit enters a room, its walls fade out together. They fade back in when the unit leaves or moves into another room, even when it's inside <strong>multiple rooms</strong> at once. Every object fades over time with a <strong>timeline component</strong> and a <strong>fade curve</strong> that designers can tweak per object."
    icon: "fas fa-door-open"
    video: "/assets/img/projects/phasebreak/room-fade.mp4"
  - title: "Volumetric Fog Volumes"
    text: "I took over the <strong>volumetric fog of war</strong> while a teammate was out and added <strong>placeable fog volumes</strong> with their own bounds and a <strong>falloff</strong> at the edges. Up to 15 volumes go to a <strong>custom post-process pass</strong>. In the final game the fog hides rooms the player hasn't reached yet and works as drifting <strong>space dust</strong> below the level."
    icon: "fas fa-cloud"
    video: "/assets/img/projects/phasebreak/fog-volumes.mp4"
  - title: "Fog Ray March: Depth & Noise"
    text: "The ray march reconstructs the <strong>world position from scene depth</strong> and stops there, so the fog sits correctly behind meshes and terrain. For the puffy, cloud-like shape the artists asked for, I mixed a <strong>tiling Perlin noise</strong> with three frequencies of <strong>Worley noise</strong>, stored in a small texture that scrolls infinitely."
    icon: "fas fa-smog"
    video: "/assets/img/projects/phasebreak/fog-depth.mp4"
  - title: "Gameplay Bug Fixes"
    text: "Toward release I fixed <strong>game-breaking bugs</strong> in the core unit abilities, including systems I didn't write. Bruce could <strong>throw units out of range</strong> and leave them on the wrong <strong>grid tile</strong>, and DeeDee's bomb <strong>invalidated tiles permanently</strong>. Units spawning onto an occupied tile <strong>soft-locked the game</strong>, so now the unit standing there walks to a <strong>random free tile</strong> next to it."
    icon: "fas fa-bug"
  - title: "Lightweight Unreal Profiler"
    text: "A task from our <strong>lead programmer</strong>. Unreal Insights is powerful but overwhelming, so the team needed a <strong>simple, quick scope profiler</strong> to keep an eye on performance. I built it with another programmer as an <strong>editor module</strong> with its own <strong>Slate</strong> window, opened from the toolbar. It draws a live <strong>multi-line graph</strong> of frame and scope timings with <strong>average, min and max</strong>, sorted by the slowest. Anyone on the team can time their code by dropping in a <strong>scope timer macro</strong> that uses <strong>RAII</strong>."
    icon: "fas fa-tachometer-alt"
    video: "/assets/img/projects/phasebreak/profiler.mp4"
  - title: "Damage Prediction"
    text: "With the shoot action selected, hovering an enemy shows the <strong>predicted damage</strong> above its health bar. The number accounts for <strong>armor</strong> and abilities with <strong>multiple shots</strong>. It hides when you move the cursor away or after the shot lands, and it works for every unit."
    icon: "fas fa-crosshairs"
    video: "/assets/img/projects/phasebreak/damage-prediction.mp4"
tags:
  - 🚀 University
  - 🔧 C++ | Unreal engine
  - 👤 27 people
  - 💻 PC
  - ⏱️ 24 weeks
order: 6
gameplay: true
---

Unreal engine game set to be released on [Steam](https://store.steampowered.com/app/4515410/Project_Heist/).

Phasebreak is a **turn-based tactics game** where you switch between **two dimensions** to outplay enemies. Over 24 weeks I worked as a **graphics and gameplay programmer** in a team of 27. My main work was the **occlusion systems** that keep your units visible behind walls and props, and the **volumetric fog of war**. Besides that I built a lightweight **profiler** for the team, made gameplay features and spent a lot of time **QA testing** and **fixing bugs** to get the game ready for release.
