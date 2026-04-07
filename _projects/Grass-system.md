---
title: "GPU-driven procedural grass rendering"
description: "grass rendering system that generates, animates (via <strong>Bézier curves</strong> and <strong>Perlin noise</strong> wind), and draws grass blades entirely on the <strong>GPU</strong> using <strong>compute shaders</strong> and DirectX 12's <strong>ExecuteIndirect</strong> to minimize <strong>CPU overhead</strong>."
image: /assets/img/posts/grass/grass.gif
features:
 - title: "Procedural Grass Blade Generation"
   text: "Created grass blades from predefined <strong>vertex positions</strong>, deformed per-instance using <strong>hash-generated random values</strong> for position, rotation, and height."
   icon: "fas fa-seedling"
   image: /assets/img/posts/grass/blade.png
 - title: "Using Bézier Curve To Displace Blades"
   text: "Displacing the vertices of the grass blades in the <strong>vertex shader</strong> using the <strong>Bézier curve</strong> to get a natural looking bend. In the same shader we also calculate the <strong>derivative</strong> to get the normals."
   icon: "fas fa-bezier-curve"
   image: "/assets/img/posts/grass/bezier.png"
 - title: "Perlin Noise Wind System"
   text: "Animated grass by offsetting the top <strong>Bézier control point</strong> with a scrolling <strong>Perlin noise</strong>, with configurable settings to modify <strong>wind direction</strong>, <strong>strength</strong>, <strong>frequency</strong>, and <strong>amplitude</strong> of the noise."
   icon: "fas fa-wind"
   image: "/assets/img/posts/grass/grassshowcase.gif"
 - title: "GPU Driven Rendering"
   text: "Generated <strong>draw commands</strong> on the GPU via <strong>compute shaders</strong> and executed them with <strong>DirectX 12's ExecuteIndirect</strong> to minimize <strong>CPU overhead</strong>."
   icon: "fas fa-microchip"
 - title: "Base For Frustum Culling & LOD System"
   text: "<strong>Level of Detail</strong> system of the grass blades and <strong>culling techniques</strong> are still a work in progress, but the base implementation is there via <strong>indirect rendering</strong>."
tags:
  - 🔧 C++ Custom engine
  - 👤 Solo
  - 💻 DirectX 12
order: 4
---


## Article going deeper into the implementation details of the grass system:

{% assign linked_post = site.posts | where: 'slug', 'Grass' | first %}
{% include post-card.html post=linked_post %}
