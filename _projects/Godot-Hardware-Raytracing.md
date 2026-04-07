---
title: "Godot hybrid ray-tracing"
description: "<strong>Modified Godot's Vulkan back-end</strong> to implement <strong>hardware-accelerated ray tracing</strong>, using a <strong>hybrid rendering approach</strong> for <strong>reflections</strong>."
image: /assets/img/projects/godot/nogi.png
features:
  - title: "Hybrid Ray-Traced Reflections"
    text: "Implemented <strong>hybrid ray-traced reflections</strong> in Godot's <strong>forward+ renderer</strong> by skipping the main ray using rasterized <strong>G-buffer data</strong> and tracing <strong>secondary rays</strong> from reconstructed <strong>world positions</strong>."
    icon: "fas fa-bolt"
    video: "/assets/img/posts/godotraytrace/reflectionshading.mp4"
  - title: "Vulkan Ray Tracing Pipeline Integration"
    text: "Helped integrating the <strong>Vulkan ray tracing pipeline</strong> into Godot's source including <strong>shader binding table</strong> setup, <strong>acceleration structure traversal</strong>, and <strong>descriptor set</strong> management for uniforms like the <strong>TLAS</strong>, <strong>render targets</strong>, and <strong>camera matrices</strong>."
    icon: "fas fa-project-diagram"
  - title: "Setting Up Ray Tracing Shaders"
    text: "Built the <strong>raygen</strong>, <strong>closest-hit</strong>, and <strong>miss shaders</strong> in <strong>GLSL 460</strong> with <strong>iterative reflection loops</strong>."
    icon: "fas fa-code"
    image: "/assets/img/posts/godotraytrace/scene.gif"
  - title: "G-Buffer Data Reconstruction"
    text: "Reconstructed <strong>world positions</strong> from the <strong>depth buffer</strong> and decoded <strong>view-space normals</strong> to <strong>world-space</strong> to use as <strong>ray origins</strong> and <strong>directions</strong>, this means we can skip the <strong>primary ray bounce</strong>."
    icon: "fas fa-cube"
    image: "/assets/img/projects/godot/worldpos.png"
  - title: "Modified Godot Shader Builder"
    text: "Extended Godot's <strong>Python-based shader builder</strong> to support all the <strong>ray tracing shader stages</strong>, also made it match Godot's system to <strong>nullptr</strong> the unused shaders."
    icon: "fas fa-cogs"
  - title: "Debugging with NSight & RenderDoc"
    text: "Used <strong>NVIDIA NSight</strong> to validate <strong>TLAS/BLAS</strong> data and <strong>shader binding table</strong> layout, and <strong>RenderDoc</strong> to capture and analyze the <strong>forward+ render loop</strong> draw order and <strong>resource usage</strong> with Godot's unique <strong>Resource ID</strong> system."
    icon: "fas fa-bug"
    image: "/assets/img/projects/godot/renderdoccaputre.png"
tags:
  - 🎮 Godot
  - 🔧 C++ | Vulkan
  - ⚡ Hardware Ray Tracing
  - 👤 3 people
  - 💻 PC
  - ⏱️ 8 weeks
order: 2
---

## Overview
During my first block in year 3, I worked together with 2 other programmers to create a **Hybrid ray tracing extension** for **Godot** by modifying its **source code**. We based our branch on an already existing implementation from [Antonio Caggiano](https://www.linkedin.com/in/antoniocaggiano/). Below are my contributions to our own approach where we integrated the ray-tracing features into the **engine's source**.

**Github Repository:** [Godot ray tracing](https://github.com/TimethyH/godot-raytrace)

Article with code and implementation details for the diffuse reflections:

{% assign linked_post = site.posts | where: 'slug', 'Raytracing' | first %}
{% include post-card.html post=linked_post %}
