---
name: 'PointWall'
description: 'PointWall is a map-based urban art platform where people can discover and share murals, graffiti, and street art from locations around the world.'
repository: 'https://github.com/PointWall/pointwall'
url: 'https://pointwall.com.ar'
year: 2023
---

## What is PointWall?

PointWall is a platform for urban art enthusiasts, artists, and the general public. It features a map-based interface that allows users to explore and discover street art in their city or anywhere else in the world.

![Screenshot of the "explore" section](../../../public/images/pointwall.avif)

## How it started

During my final year of high school, a group of students one year behind me started the project as a way to showcase street art in our city. Initially, it consisted of a public Google Maps collection of street art locations embedded in a static HTML page.

As new ideas emerged, the project began to grow in scope and complexity.

I joined the project as a developer and designer, contributing to the web application and helping shape its direction. Two friends from my class also joined the team, focusing primarily on the backend.

## What we did

I redesigned the user interface from scratch and helped transform the original static HTML page into a fully functional web application built with Next.js and Tailwind CSS.

Together with one of my friends, I also implemented the map interface using <span class="bg-gray-100 px-1 text-sm">`google-map-react`</span> and googlep-maps-react-markers.

![Screenshot of the "map" screen](../../../public/images/pointwall-map.webp)

The backend was primarily developed by my two friends. We used CockroachDB as the database, Prisma as the ORM, and Next.js API routes to implement the application’s server-side functionality.

We also added user authentication with NextAuth.js and built an administration panel for reviewing and approving submitted content.
