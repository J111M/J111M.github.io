---
title: "Wild-engine"
description: "This is my personal playground for researching and implementing new rendering features inspired by Zelda breath of the wild like procedural grass rendering."
image: /assets/img/posts/grass/grass.gif
features:
  - title: "Procedural Grass Blade Generation"
    text: "Created grass blades from predefined vertex positions, deformed per-instance using hash-generated random values for position, rotation, and height."
    icon: "fas fa-seedling"
    image: /assets/img/posts/grass/blade.png
  - title: "Using Bézier Curve To Displace Blades" 
    text: "Displacing the vertices of the grass blades in the vertex shader using the Bézier curve to get a natural looking bend, In the same shader we also calculate the derivative to get the normals."
  - title: "Perlin Noise Wind System"
    text: "Animated grass by offsetting the top Bézier control point with a scrolling Perlin noise, with configurable settings to modify wind direction, strength, frequency, and amplitude of the noise."
    icon: "fas fa-wind"
    image: "/assets/img/posts/grass/grassshowcase.gif"
  - title: "GPU Driven Pipeline"
    text: "Generated draw commands on the GPU via compute shaders and executed them with DirectX 12's ExecuteIndirect to minimize CPU overhead."
    icon: "fas fa-microchip"
  - title: "Base For Frustum Culling & LOD System"
    text: "Still work in progress."
tags:
  - 🚀 Personal
  - 🔧 DirectX 12
  - 👤 Solo
  - 💻 PC
  - ⏱️ In Progress
order: 3
---