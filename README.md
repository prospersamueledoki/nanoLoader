
# NanoLoader 🚀

NanoLoader is a **lightweight CSS & JS library** that gives you a set of smooth, customizable loading animations.  
It’s **mobile and desktop friendly**, supports **multiple colors & sizes**, and comes with a **live playground** to test loaders in realtime.  

---

## ✨ Features
- 🎨 **15+ built-in colors** (`nl-color-red`, `nl-color-blue`, `nl-color-green`, …)  
- 📐 **Multiple sizes** (`nl-size-sm`, `nl-size-lg`, or custom via JS)  
- 🔄 **12+ loader styles** (circle, ripple, spinner, roller, pulse, wave, and more)  
- ⚡ **Plug-and-play**: just add a `<div>` with the right classes  
- 📱 Fully responsive + dark mode support  
- 🎮 Playground included to edit HTML & CSS live  

---

## 📦 Installation

Clone the repo:

```bash
git clone https://github.com/prospersamueledoki/nanoloader.git
cd nanoloader
````

Or just copy the `nanoLoader.css` and `nanoLoader.js` files into your project.

---

## 🚀 Usage

Include the library:

```html
<link rel="stylesheet" href="nanoLoader.css">
<script src="nanoLoader.js"></script>
```

Add a loader anywhere in your HTML:

```html
<!-- Blue circle -->
<div class="nanoLoader nl-circle nl-color-blue"></div>

<!-- Red Facebook style loader -->
<div class="nanoLoader nl-facebook nl-color-red"></div>

<!-- Large green ripple -->
<div class="nanoLoader nl-ripple nl-color-green nl-size-lg"></div>
```

---

## 🎨 Customization

### Colors

Use any of the built-in color classes:

* `nl-color-red`
* `nl-color-blue`
* `nl-color-green`
* `nl-color-yellow`
* `nl-color-orange`
* `nl-color-purple`
* `nl-color-pink`
* `nl-color-cyan`
* `nl-color-teal`
* `nl-color-indigo`
* `nl-color-lime`
* `nl-color-brown`
* `nl-color-gray`
* `nl-color-black`
* `nl-color-white`

Or override with **custom CSS**:

```css
.myLoader div {
  background: linear-gradient(45deg, #ff0080, #7928ca);
}
```

### Sizes

* `nl-size-sm` → Small
* `nl-size-lg` → Large
* Or set via JS:

```js
document.getElementById("myLoader").dataset.size = "80px";
```

---

### 🎮 Playground

Open `index.html` and scroll to the **Playground section**.
You can type in custom HTML/CSS in real-time and see the loader update instantly.

---

### 📂 Project Structure

```
nanoloader/
│── index.html        # Demo + playground
│── nanoLoader.css    # Core styles
│── nanoLoader.js     # Loader initialization logic
│── README.md         # Documentation
```

---

### 👨‍💻 Author

Developed by [**Splendid Edge Technologies**](https://splendidedgetechnologies.vercel.app)
Designed with love ❤️ by Prosper Samuel Edoki
Base Loader Designs from [**Loading.io**](https://loading.io/css)
---

### 📜 License

MIT License – feel free to use it in personal and commercial projects.
Featured on [CSS Script](https://cssscript.com)
```
