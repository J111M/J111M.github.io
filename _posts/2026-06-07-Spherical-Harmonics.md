---
layout: post
title: Spherical Harmonics for Diffuse Global Illumination
date: 2026-06-07 19:00:00
categories: [Graphics, Lighting]
tags: [lighting, radiance]
image:
  path: /assets/img/posts/sh/mag.gif
  alt: DDGI
---

## Exploring spherical harmonics fo DDGI

I have always been impressed by global illumination techniques, they make lighting feel realistic and bring an extra layer of immersion. However, this technique is really expensive. It needs to know the incoming light from all directions and how much of that light actually arrives at your the pixel. That’s why I want to explore modern techniques to make this process cheaper by approximating and storing the light over multiple frames. This is where spherical harmonics will help us out, giving us a way to represent smooth incoming light from all directions, compressed into low-frequency light values.

*Disclamer this article is written for bettering my knowledge on the topic and sharing the information I found with fellow grpahics enjoyers I didn't implement any of the following information in practice and it is all just theory.*


## The basics of spherical harmonics

At its core, SH is very similar to a Fourier transform, but instead of breaking a signal into sine waves over time or space, it breaks a function defined on a sphere into a set of spherical basis functions. Each layer adds more frequency detail, meaning low frequency layers capture smooth lighting while higher layers capture sharper directional changes.

The idea is to compress lighting data instead of storing it for every direction which is too slow, in most implementation a small set of coefficients are stored. For diffuse ligthing often 9 coefficients are used. These coefficients act like weights for basis functions, and by summing them up we reconsstruct an approximation of the original lighting environment.

![alt text](/assets/img/posts/sh/fourier.jpg)

![alt text](/assets/img/posts/sh/shimage.png)

## The main benefits of spherical harmonics

A lot of the calculations are simplified in the SH domain, for instance lighting integration (convolution) becomes a simple dot product between the SH coefficient vectors, for the low pass filtering it just becomes scaling or ignoring high frequency coefficients and interpolation between other pboes only require blending between coefficient vectors. This is also one of the main reason it is often combined with light probes.


## Combining spherical harmonics with probes

At each probe position, you capture incoming light from all directions and then project that directional data into a compact set of SH coefficients. Instead of storing the full environment, each probe stores only this low-frequency representation, which makes it cheap to store and reuse across a scene.

During rendering, nearby probes are blended by interpolating their SH coefficients directly, which avoids reconstructing or sampling full environment maps. The result is a smooth approximation of global illumination that varies spatially without heavy computation.

![alt text](/assets/img/posts/sh/probes.jpg)

*[https://morgan3d.github.io/articles/2019-04-01-ddgi/overview.html](https://morgan3d.github.io/articles/2019-04-01-ddgi/overview.html)*

## What can spherical harmonics not do

Spherical harmonics sound like a perfect solution for low-frequency lighting data, but that is essentially all they are used for. Operations like rotations in SH space are quite expensive, and sharp effects like reflections require too many coefficients to be useful. That is also why SH is mainly used for low-frequency lighting data such as diffuse illumination.

## Conclusion

In theory spherical harmonics sounds great for Dynamic Diffuse Global Illumination, I will try them out in the comming weeks and update the article with new information on the implementation.

I hope this article gave you a good insight into the topic. If you have any questions, feel free to send an email to 230160@buas.nl.

Here are the resource I used that helped shape this project:

- [Radiance caching for Real-Time Global Illumination](https://www.youtube.com/watch?v=2GYXuM10riw&t)
- [Traverse research](https://blog.traverseresearch.nl/dynamic-diffuse-global-illumination-b56dc0525a0a)
- [Ignacio article on irradiance caching](https://www.ludicon.com/castano/blog/articles/irradiance-caching-part-1/)
- [gpfault](https://gpfault.net/posts/sph.html)
- [Stack exchange](https://computergraphics.stackexchange.com/questions/4164/what-are-spherical-harmonics-light-probes)

This blog post was created by Jim van der Heijden, the implementation will be created in my own custom engine. I am currently a third year student at the Creative Media and Game Technologies course at Breda University of Applied Sciences.

<img src="/assets/img/posts/grass/Logo BUas_RGB.png" alt="Image" width="350"/>