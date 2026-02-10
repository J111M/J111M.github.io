---
title: "Custom engine | Nakon"
description: "Nakon is a round-based survival FPS created with a custom engine for PC and PS5"
image: /assets/img/projects/nakon/nakon.gif
features:
  - title: "PS5 Build Pipeline"
    text: "Set up the full PlayStation 5 build and deployment pipeline, devkit deployment, and platform-specific bug fixing (animation crashes, hit crashes, shader alignment issues)."
    icon: "fas fa-gamepad"
  - title: "Depth Fog System"
    text: "Implemented a depth fog post-process with configurable density, color, start/end falloff ranges, and optional skybox support. The settings are exposed so that the artists can tweak the feature."
    image: /assets/img/projects/nakon/scene.png
    icon: "fas fa-smog"
  - title: "Particle VFX"
    text: "We had no VFX artist so I worked on creating the hit particles (body, headshot, ground dust), ritual soul particles that track to the altar, door unlock effects, perk machine effects, and ambient firefly particles."
    image: /assets/img/projects/nakon/ambient.gif
    icon: "fas fa-fire"
  - title: "Ritual Soul System"
    text: "Built a soul accumulation system where enemy kills spawn color-matched particles that interpolate towards the ritual altar, giving clear visual feedback for the objective."
    icon: "fas fa-ghost"
  - title: "Render Graph Pass Ordering"
    text: "Fixed the render graph sorting so post-process effects no longer rendered over UI. Converted the top layer pass to the forward renderer for correct shading."
    icon: "fas fa-layer-group"
  - title: "Health & Vignette System"
    text: "Created a health system with timed regeneration and a dynamic vignette post-process that intensifies as health drops, with configurable intensity, color, and recovery speed."
    icon: "fas fa-heart"
    image: /assets/img/projects/nakon/vignette.gif
  - title: "Bullet Damage Falloff"
    text: "Implemented distance-based damage falloff with pierce damage reduction, all values exposed via ImGui for designer tuning during playtests."
    icon: "fas fa-crosshairs"
  - title: "Foliage Rendering"
    text: "Added foliage support to the forward renderer in collaboration with an artist, including shadow pass integration."
    icon: "fas fa-leaf"
    image: "/assets/img/projects/nakon/foliage.png"
  - title: "GPU Particle Randomization"
    text: "Extended the compute shader particle system with randomized spawn positions, cone-angle direction, and optional rotation for more organic ambient effects."
    image: "/assets/img/projects/nakon/particlecolor.gif"
    icon: "fas fa-random"
  - title: "PS5 Performance Profiling"
    text: "Profiled the PS5 build identifying the forward pass (3991μs) and shadow pass (2933μs) as bottlenecks, identifying that we need to minimize the amount of draw calls being issued through culling techniques"
    icon: "fas fa-chart-line"
  - title: "Release Build Cleanup"
    text: "Stripped all debug functionality from release builds using an EDITOR_CONFIG preprocessor definition to keep debug tools in editor only."
    icon: "fas fa-broom"
tags:
  - 🚀 University
  - 🔧 C++ | Custom engine
  - 👤 12 people
  - 💻 PC/PS5
  - ⏱️ 8 weeks
order: 1
---


## Description
Nakon is a round-based horde shooter inspired by Call of Duty, built in a custom C++ engine targeting PC and PlayStation 5. The player fights through waves of enemies and needs to activate the ritual site to earn upgrades. The player can unlock new areas to increase the difficulty and progress through the map. The project shipped on itch.io where we got feedback and iterated on the project to make it better.