---
title: "Custom engine | Nakon"
description: "Custom <strong>PlayStation 5</strong> and <strong>DirectX 12</strong> engine where I worked on <strong>abstracting</strong> the <strong>PS5 rendering pipeline</strong> and <strong>implementing</strong> various <strong>rendering features</strong>, engine features and gameplay."
image: /assets/img/projects/nakon/nakon.gif
features:
  - title: "Storing G-buffer Data On PS5"
    text: "Created the <strong>deferred rendering pipeline</strong> for <strong>PS5</strong> with <strong>G-buffer</strong> passes storing <strong>albedo/roughness</strong>, <strong>normal/metallic</strong>, and <strong>emission</strong> in separate <strong>render targets</strong>. World position is reconstructed from the <strong>depth buffer</strong> to save memory."
    icon: "fas fa-display"
    image: "/assets/img/projects/firefly/damagedhelmetdeferred.png"
  - title: "Tone Mapping & Post Processing"
    text: "Created a <strong>post process pass</strong> with <strong>Reinhard</strong>, <strong>ACES</strong> and <strong>filmic tone mapping</strong> options, <strong>exposure slider</strong> and <strong>gamma correction</strong> all controllable via <strong>ImGui</strong> settings."
    icon: "fas fa-adjust"
    image: "/assets/img/projects/firefly/tonemapping.gif"
  - title: "PBR & HDR Rendering"
    text: "Added <strong>PBR shading</strong> to the <strong>deferred renderer</strong> and enabled <strong>HDR output</strong> on the <strong>PS5</strong> by using <strong>high precision output render targets</strong> when HDR is enabled on the system/monitor."
    icon: "fas fa-sun"
  - title: "PS5 Build Pipeline"
    text: "Set up the <strong>PlayStation 5 devkit</strong> deployment, and did platform-specific bug fixing (crashing of the <strong>animation pass</strong>, crashes when shooting too many bullets and <strong>shader alignment</strong> issues)."
    icon: "fas fa-gamepad"
  - title: "Depth Fog System"
    text: "Implemented a <strong>depth fog</strong> post-process with configurable <strong>density</strong>, <strong>color</strong>, <strong>start/end falloff ranges</strong>, and optional <strong>skybox</strong> support. The settings are exposed so that the artists can tweak the feature."
    image: /assets/img/projects/nakon/scene.png
    icon: "fas fa-smog"
  - title: "Foliage Rendering"
    text: "Added <strong>foliage</strong> support to the <strong>forward renderer</strong> in collaboration with an artist, including <strong>shadow pass</strong> integration."
    icon: "fas fa-leaf"
    image: "/assets/img/projects/nakon/foliage.png"
  - title: "GPU Particle Randomization"
    text: "Extended the <strong>compute shader particle system</strong> with randomized <strong>spawn positions</strong>, <strong>cone-angle direction</strong>, and optional <strong>rotation</strong> for more organic ambient effects."
    image: "/assets/img/projects/nakon/particlecolor.gif"
    icon: "fas fa-random"
  - title: "PS5 Performance Profiling"
    text: "Profiled the <strong>PS5 build</strong> identifying the <strong>forward pass</strong> and <strong>shadow pass</strong> as bottlenecks, identifying that we need to minimize the amount of <strong>draw calls</strong> being issued through <strong>culling techniques</strong>."
    icon: "fas fa-chart-line"
  - title: "PS5 Pipeline State Abstraction"
    text: "Helped designing the <strong>PS5 pipeline settings</strong> system where you set a <strong>PipelineSettings struct</strong> in each pass and it automatically applies <strong>depth</strong>, <strong>stencil</strong>, <strong>culling</strong>, <strong>winding order</strong> and <strong>blending</strong> on the PlayStation via the <strong>abstracted command list</strong>."
    icon: "fas fa-sliders-h"
    image: "/assets/img/projects/firefly/fireflyabstraction.png"
  - title: "Directional Shadow Mapping"
    text: "Implemented <strong>directional shadow maps</strong> by capturing the scene depth from the light's perspective and reconstructing the shadow position in the <strong>light pass</strong> with a <strong>box blur filter</strong> for soft edges, works on both <strong>DX12</strong> and <strong>PS5</strong>."
    icon: "fas fa-moon"
    image: "/assets/img/projects/firefly/directshadows.gif"
  - title: "Ritual Soul System"
    text: "Built a <strong>soul accumulation system</strong> where enemy kills spawn <strong>color-matched particles</strong> that <strong>interpolate</strong> towards the ritual altar, giving clear visual feedback for the objective."
    image: /assets/img/projects/nakon/altar.gif
    icon: "fas fa-ghost"
  - title: "Health & Vignette System"
    text: "Created a <strong>health system</strong> with timed <strong>regeneration</strong> and a dynamic <strong>vignette post-process</strong> effect that intensifies as health drops, with configurable <strong>intensity</strong>, <strong>color</strong>, and <strong>recovery speed</strong>."
    icon: "fas fa-heart"
    image: /assets/img/projects/nakon/vignette.gif
  - title: "Bullet Damage Falloff"
    text: "Implemented <strong>distance-based damage falloff</strong> with <strong>pierce damage reduction</strong>, all values are exposed via <strong>ImGui</strong> so they can easily be tweaked."
    icon: "fas fa-crosshairs"
  - title: "Particle VFX"
    text: "We had no VFX artist so I worked on creating the <strong>hit particles</strong> (body, headshot, ground dust), <strong>ritual soul particles</strong> that track to the altar, <strong>door unlock effects</strong>, <strong>perk machine effects</strong>, and <strong>ambient firefly particles</strong>."
    image: /assets/img/projects/nakon/ambient.gif
    icon: "fas fa-fire"
tags:
  - 💻 <strong>PS5</strong>/PC
  - 🚀 University
  - 🔧 C++ | Custom engine
  - 👤 12 people
order: 3
---


## Description
**Nakon** is a round-based **horde shooter** inspired by **Call of Duty**, built in a custom **C++ engine** targeting **PC** and **PlayStation 5**. The player fights through waves of enemies and needs to activate the **ritual site** to earn upgrades. The player can unlock new areas to increase the difficulty and progress through the map. The project shipped on [itch.io](https://buas.itch.io/nakon) where we got feedback and iterated on the project to make it better.


The renderer is a modified version of an engine me and 6 others created in our second year at **BUAS** to fit the new style of the game. We fully abstracted away the **DirectX 12** and **PlayStation 5** renderer APIs, so that features we create work for both APIs. This really helped the development process.