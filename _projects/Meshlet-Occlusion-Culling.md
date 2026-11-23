---
title: "Two-Phase Meshlet Occlusion Culling"
description: "GPU-driven <strong>mesh shader</strong> pipeline in my <strong>DirectX 12</strong> engine that culls every <strong>meshlet</strong> using <strong>frustum</strong>, <strong>backface cone</strong> and <strong>two-phase HZB occlusion culling</strong> before any vertex is processed."
image: /assets/img/projects/wild/hzb/hzb.png
features:
  - title: "Two-Phase Occlusion Culling"
    text: "The <strong>early pass</strong> draws the meshlets that were visible last frame and builds the <strong>HZB</strong> from that depth. The <strong>late pass</strong> tests every meshlet against the HZB, draws the newly visible ones and writes the result to a <strong>visibility buffer</strong> for the next frame."
    icon: "fas fa-eye-slash"
    video: "/assets/img/projects/wild/hzboc.mp4"
  - title: "Debug Tools"
    text: "A <strong>cluster debug view</strong> that colors every meshlet, <strong>freeze culling</strong> to fly around the culled result, and toggles to force the <strong>vertex path</strong> for comparison. Every pass shows up by name in <strong>PIX</strong> and <strong>RenderDoc</strong> captures."
    icon: "fas fa-bug"
    compare:
      before: "/assets/img/projects/wild/hzb/side1.png"
      after: "/assets/img/projects/wild/hzb/side2.png"
      before_label: "Scene"
      after_label: "Meshlets"
  - title: "Hierarchical Z-Buffer"
    text: "Built with <strong>compute shaders</strong> where every texel stores the <strong>max depth</strong> of the 2x2 block above it. Mip 0 is the <strong>largest power of two below the screen size</strong>, so every mip is exactly half its parent without any padding or edge cases."
    icon: "fas fa-layer-group"
    image: "/assets/img/projects/wild/hzb/hzb_chain.gif"
  - title: "Projecting Meshlets Onto The HZB"
    text: "The <strong>bounding sphere</strong> of each meshlet is projected to a <strong>screen-space rectangle</strong>, I pick the mip where it covers 2x2 texels and compare the closest depth of the sphere with the HZB. When supported, a <strong>min/max reduction sampler</strong> returns the max depth in a single sample."
    icon: "fas fa-search"
  - title: "Per Meshlet Culling In The Amplification Shader"
    text: "Each thread in the <strong>amplification shader</strong> tests one meshlet against the <strong>frustum</strong> and its <strong>normal cone</strong> for <strong>backface culling</strong>. The surviving meshlets are compacted into the payload so only visible meshlets launch a <strong>mesh shader</strong> group."
    icon: "fas fa-filter"
  - title: "Mesh Shader Pipeline"
    text: "Added a <strong>mesh pipeline</strong> type to my <strong>RHI</strong> next to graphics and compute. The command list routes <strong>Dispatch</strong> to <strong>DispatchMesh</strong> automatically, so passes use the same API. When the hardware doesn't support mesh shaders it falls back to the <strong>vertex shader path</strong>."
    icon: "fas fa-cubes"
  - title: "Meshlet Generation"
    text: "Meshes are split into <strong>meshlets</strong> of max 64 vertices and 124 triangles on load using <strong>meshoptimizer</strong>. Each meshlet stores a <strong>bounding sphere</strong> and <strong>normal cone</strong> that are used for culling."
    icon: "fas fa-th"
  - title: "CPU Frustum Culling"
    text: "A <strong>frustum culling system</strong> in the <strong>ECS</strong> culls whole meshes using <strong>bounding spheres</strong>, so the GPU doesn't run meshlet tests on objects that are off screen."
    icon: "fas fa-crop-alt"
tags:
  - 🚀 Personal
  - 🔧 DirectX 12
  - 👤 Solo
  - 💻 PC
  - ⏱️ 11 weeks
order: 3
---

For my **Wild engine** I built a **GPU-driven mesh shader** path for the deferred renderer. Every mesh is split into **meshlets** that get culled in the **amplification shader** before any vertex is processed. On top of **frustum** and **backface culling**, I implemented **two-phase HZB occlusion culling** that uses the visibility of the previous frame, so no separate occluder geometry is needed. I tested it on a grid of **1000 Stanford dragons** and scenes like **Sponza**, **Bistro** and a **cyber city** from [Synty assets](https://syntystore.com/products/polygon-sci-fi-cyber-city).

This feature is still a **work in progress**, so the exact **performance numbers** will be added here soon. Next up I plan to add **GPU object-level culling** against the HZB, so whole instances get culled before the meshlet tests, and a **depth prepass** for large occluders to make the culling more robust.

**Github Repository:** [Wild engine](https://github.com/J111M/Wild-Engine)
