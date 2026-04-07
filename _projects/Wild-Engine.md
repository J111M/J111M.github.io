---
title: "Wild engine"
description: "Personal <strong>DirectX 12 framework</strong> for researching <strong>rendering techniques</strong> like <strong>volumetric fog</strong>, <strong>procedural island generation</strong>, <strong>ocean rendering</strong>, and <strong>procedural grass</strong>."
image: /assets/img/posts/ocean/ship.gif
features:
  - title: "Cascaded shadow maps" 
    text: "Directional <strong>shadow maps</strong> rendered across multiple <strong>cascades</strong>, each capturing the appropriate level of detail for its distance range. Sampled using <strong>PCF filtering</strong> for extra sharp edges."
    icon: "fas fa-sun"
    video: "/assets/img/projects/wild/csm.mp4"
  - title: "Volumetric fog"
    text: "<strong>Ray marched</strong> volumetric fog with <strong>god rays</strong> sampled from <strong>cascaded shadow maps</strong>. I'm currently working on <strong>froxel-based volumetric fog</strong> to improve performance."
    icon: "fas fa-smog"
    video: "/assets/img/projects/wild/volumetrics.mp4"
  - title: "Procedural terrain system"
    text: "Island generation with <strong>layered noise</strong>, colored based on <strong>slope steepness</strong> combined with <strong>height-based coloring</strong>. The textures are sampled using <strong>tri-planar methods</strong> to ensure they are not stretched out. To achieve the island look I reduce the noise on the edge of the <strong>height map</strong>."
    icon: "fas fa-mountain"
    video: "/assets/img/projects/wild/terrain.mp4"
  - title: "Modified my procedural grass system to integrate with the height map of the island"
    text: "The grass system's blades are offset by the <strong>height map</strong> and are only drawn on the <strong>grass texture</strong>."
    icon: "fas fa-seedling"
    video: "/assets/img/projects/wild/grassterrain.mp4"
tags:
  - 🚀 Personal
  - 🔧 DirectX 12
  - 👤 Solo
  - 💻 PC
  - ⏱️ In Progress
order: 1
---

This is my custom **DirectX 12** rendering engine built from scratch in **C++**, designed as a personal playground for implementing real-time rendering techniques inspired by games like The Legend of Zelda: Breath of the Wild and Sea of Thieves. The engine fully **abstracts** the **DirectX 12 API**, from **device** and **swapchain** management to **command lists**, **root signatures**, **pipeline state objects**, and **descriptor heaps**, providing a clean interface for building render passes without touching raw D3D12 calls. Built over six months as a solo project, whenever I see a cool feature in a game I play, I wan't to know how it is created.

The project uses **G-Buffer** style rendering with **PBR** shading and **image-based lighting**. All textures are accessed via **bindless** techniques. Shaders are written in **HLSL**, compiled with **Slang**, and the project is built with **CMake**.


#### Tools

- **PIX** and **RenderDoc** integration for **GPU debugging** with **command list event markers**
- Built-in **profiler** for all **render passes** and **debug line rendering**
- **ImGui** integration for engine layout, allowing **real-time modifications**