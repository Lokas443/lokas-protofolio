# Lokas Wagih — Portfolio Website

A static, responsive, dark-themed portfolio built with plain HTML, CSS and vanilla JavaScript. No build step or dependencies.

## Structure

```
index.html            Homepage (hero, skills, projects, education, contact)
smart-traffic.html    Smart Traffic Monitoring System details
rakeeza.html          Rakeeza Construction ERP details
assets/
  style.css           Design system (CSS variables) and layout
  main.js             Menu, scroll reveal, footer year, accessible lightbox
  lokas-wagih.jpg     Portrait
  smart-traffic-detection.jpg   Vehicle detection output
  traffic-vision-*.png          Traffic Vision interface screenshots
  construction-*.jpeg           Rakeeza app screenshots
README.md
```

## Preview locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Deploy on GitHub Pages

1. Upload `index.html`, `smart-traffic.html`, `rakeeza.html`, `README.md` and the entire `assets` folder to the root of a GitHub repository.
2. Open the repository **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select the `main` branch and the `/ (root)` folder.
5. Save and wait for the public URL to appear (usually within a few minutes).

Netlify and Vercel also work: drag the folder in, or import the repository with no build command and the root as the publish directory.

## Editing notes

- Colors, radii and shadows live in the `:root` block of `assets/style.css`.
- Contact details are plain `mailto:` and LinkedIn links in each page.
- Add images to `assets/` and reference them with relative paths (no leading slash) so they work on GitHub Pages project URLs.
