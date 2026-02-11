---
title: "Godot hybrid ray-tracing"
description: "Modified Godot's source code and implemented hardware-accelerated ray-tracing with Vulkan"
image: /assets/img/projects/godot/raytraced.gif
features:
  - title: "Hybrid Ray-Traced Reflections"
    text: "Implemented hybrid ray-traced reflections in Godot's forward+ renderer by skipping the main ray using rasterized G-buffer data and tracing secondary rays from reconstructed world positions."
    icon: "fas fa-bolt"
    image: "/assets/img/projects/godot/basicreflect.gif"
  - title: "Vulkan Ray Tracing Pipeline Integration"
    text: "Helped integrating the Vulkan ray tracing pipeline into Godot's source including shader binding table setup, acceleration structure traversal, and descriptor set management for uniforms like the TLAS, render targets, and camera matrices."
    icon: "fas fa-project-diagram"
  - title: "Setting Up Ray Tracing Shader's"
    text: "Built the raygen, closest-hit, and miss shaders in GLSL 460 with iterative reflection loops."
    icon: "fas fa-code"
  - title: "G-Buffer Data Reconstruction"
    text: "Reconstructed world positions from the depth buffer and decoded view-space normals to world-space to use as ray origins and directions, this means we can skip the primary ray bounce."
    icon: "fas fa-cube"
    image: "/assets/img/projects/godot/worldpos.png"
  - title: "Modified Godot Shader Builder"
    text: "Extended Godot's Python-based shader builder to support all the ray tracing shader stages, also made it match Godot's system to nullptr the unused shaders."
    icon: "fas fa-cogs"
  - title: "Debugging with NSight & RenderDoc"
    text: "Used NVIDIA NSight to validate TLAS/BLAS data and shader binding table layout, and RenderDoc to capture and analyze the forward+ render loop draw order and resource usage with Godot's unique Resource ID system."
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
During my first block in year 3, I worked together with 2 other programmers to create a **Hybrid ray-tracing extension** for **Godot** by modifying its **source code**. We based our branch on an already existing implementation from [Antonio Caggiano](https://www.linkedin.com/in/antoniocaggiano/). Below are my contributions to our own approach where we integrated the ray-tracing features into the **engine's source**.

**Github Repository:** [Godot Raytracer](https://github.com/TimethyH/godot-raytrace)
