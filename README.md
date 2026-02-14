# Zero-Gravity Neural Canvas Portfolio

An Awwwards-winning inspired 3D interactive portfolio experience built with cutting-edge web technologies.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (Animation)
- **React Three Fiber** (3D rendering)
- **@react-three/drei** (3D helpers)
- **@react-three/rapier** (Physics engine)
- **Three.js** (WebGL)

## ✨ Features

### Phase 1 - Architecture & UI
- ✅ Single fullscreen canvas (no scrollbars)
- ✅ Dark, cinematic 3D void environment
- ✅ Neural particle system with 2000+ animated particles
- ✅ Floating geometric objects with physics
- ✅ Interactive hotspots on 3D objects
- ✅ Modal overlay with Lorem Ipsum content
- ✅ Camera controls (zoom, pan, rotate)
- ✅ Smooth animations and transitions

## 🎨 Design Philosophy

**Theme:** "Zero-Gravity Neural Canvas"
- Immersive 3D experience breaking traditional web design rules
- No scroll, single viewport navigation
- Interactive 3D objects with physics simulation
- Cinematic lighting and particle effects
- Modal-based content display

## 🛠️ Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles (overflow:hidden)
├── components/
│   ├── Scene.tsx           # Main 3D scene
│   ├── NeuralParticles.tsx # Particle system
│   ├── FloatingGeometries.tsx # 3D objects
│   └── InteractiveHotspot.tsx # Clickable hotspots
├── public/                 # Static assets
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind config
└── tsconfig.json          # TypeScript config
```

## 🎮 Interactions

- **Mouse Drag:** Rotate the camera around the scene
- **Mouse Wheel:** Zoom in/out
- **Right Click + Drag:** Pan the camera
- **Click Yellow Hotspots:** Open modal with content
- **Close Button:** Exit modal and return to scene

## 📝 Notes

- All content currently uses Lorem Ipsum placeholders
- Physics simulation runs on all floating geometries
- Particle system optimized for 60 FPS
- Responsive to different screen sizes

## 🔮 Future Enhancements (Phase 2+)

- Custom GLSL shaders for advanced effects
- GSAP-powered camera animations
- More complex neural connections
- Additional interactive content sections
- Sound design integration
- Loading screen animations

## 📄 License

MIT

---

Built with ❤️ using React Three Fiber & Next.js
