Here's your **updated `README.md`** with a new section documenting the **blurred image support** you just added using `plaiceholder`, and a few minor improvements for clarity and completeness.

---

### ✅ Updated `README.md` (Recommended Version)

```md
# 🏡 Hazy Haven Guesthouse Website

![Project Preview](/public/images/preview.jpg)

A beautifully designed, responsive website for an upscale bed & breakfast and lodge. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, the site showcases premium accommodations, local experiences, and an intuitive booking process.

---

## 🚀 Project Features

- 🌄 **Full-screen Hero Section** with CTAs and blurred image placeholder
- 🛏️ **Featured Rooms** showcase with elegant UI
- 🌍 **Local Experiences** teaser
- 💬 **Guest Testimonials** carousel
- 🧭 **Explore the Reserve** carousel snippet
- 📅 **Booking Page** with room selection and pricing logic
- 📞 **Contact Page** with map embed and live chat placeholder
- 📱 Mobile-first responsive layout
- ⚡ Optimized image loading with blur placeholders (`plaiceholder`)
- 🎨 Built with utility-first Tailwind CSS styling

---

## 📁 Project Structure

```
/hazy-haven-website
├── public/
│   └── images/                # Optimized static images
├── pages/
│   ├── index.tsx              # Homepage with getStaticProps
│   ├── 404.tsx                # Custom Not Found page
│   ├── booking.tsx            # Booking form and room selection
│   ├── contact.tsx            # Contact form with map and live chat
├── components/
│   ├── Layout/                # Shared layout components
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Hero.tsx
│   ├── AboutUs.tsx
│   ├── FeaturedRooms.tsx
│   ├── LocalExperiences.tsx
│   ├── GuestTestimonials.tsx
│   ├── ExploreReserve.tsx
│   ├── CTA.tsx
│   └── Hero.tsx               # Hero with blur placeholder image
├── lib/
│   └── getBlurData.ts         # Utility to generate blurDataURL
├── styles/
│   └── globals.css            # Tailwind and global styles
├── .gitignore
├── README.md                  # Project overview
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
```

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework for SSR and routing
- [TypeScript](https://www.typescriptlang.org/) – Static type checking
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) – Animation library (used in key sections)
- [Plaiceholder](https://github.com/joe-bell/plaiceholder) – Image blur placeholder generation
- [Sharp](https://sharp.pixelplumbing.com/) – Image processing library used by `plaiceholder`

---

## 🧪 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/fabrikqeai/hazy-haven-guesthouse.git
cd hazy-haven-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **View in browser**

Visit [http://localhost:3000](http://localhost:3000)

---

## 📦 Building for Production

```bash
npm run build
npm run start
```

---

## 🧩 Image Blur Placeholder Support

This project uses [`plaiceholder`](https://github.com/joe-bell/plaiceholder) to generate blurred image previews for the Hero section. Blur data is fetched at build time via `getStaticProps` and injected into the image component for a smooth visual experience during load.

---

## 📌 To Do

- Add real-time booking confirmation & availability
- Implement live chat functionality
- Enhance accessibility (a11y) across components
- Integrate CMS (optional for dynamic content)
- SEO improvements and Open Graph metadata

---

## 📄 License

MIT License — free to use and modify. See `LICENSE` for more information.

---

## 🙌 Acknowledgements

Built by [FabrikqeAI](https://www.fabrikqeai.com) — digital development agency creating beautiful, functional web experiences.
