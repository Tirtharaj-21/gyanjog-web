# Gyanjog Group website (React + Vite)

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

Photos and the logo live in `public/assets/`. Course, branch, team and video data live in `src/data.js`.
The enquiry form opens the visitor's email app (`mailto:info@gyanjog.org`); connect it to an API for server-side submission.


## Added animations
- `src/IntroAnimation.jsx` provides the branded startup/loading screen.
- `src/App.jsx` mounts the intro and displays the supplied faculty portraits.
- `src/animations.css` contains the intro and gallery photo reveal effects.
- Supplied faculty photos are stored in `public/assets/faculty/`.

Run locally with `npm install` and `npm run dev`.
