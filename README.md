# 🎭 Professional PUI Avatar Library

A collection of **25+ production-ready avatar components** for React. Built with **Tailwind CSS** and **Framer Motion**.

![React](https://img.shields.io/badge/React-18.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-sky)

## ✨ Features

- **25 Unique Designs**: From classic rounds to geometric shapes and brutalist styles.
- **Smart Skeletons**: Automatically displays a pulsing skeleton while the image loads.
- **Error Handling**: Gracefully falls back to a default SVG avatar if the image link is broken.
- **Interactive**: Hover effects, click animations, and tooltips included.
- **Zero Config**: Just copy the files and use them.

---

## 🚀 Manual Installation
If you prefer to copy the code manually:

Install Dependencies:

```Bash
npm install framer-motion lucide-react clsx tailwind-merge
```

#### Create the folder: Create a directory at src/components/avatars.

#### Copy Files: Download or copy the files from the AVATAR-CLI-COMPO folder into your new directory. You need all 7 files for the full library to work.

---

# 📖 Usage
Import any avatar directly from the folder.

```
import { 
  AvatarClassic, 
  AvatarStatus, 
  AvatarGroup 
} from './components/avatars';

export default function UserProfile() {
  return (
    <div className="flex gap-4 items-center">
      
      {/* 1. Basic Avatar */}
      <AvatarClassic 
        src="[https://github.com/shadcn.png](https://github.com/shadcn.png)" 
        size="lg" 
      />

      {/* 2. With Status Indicator */}
      <AvatarStatus 
        src="[https://github.com/shadcn.png](https://github.com/shadcn.png)" 
        status="busy" 
      />

      {/* 3. Stacked Group */}
      <AvatarGroup 
        images={[
          "[https://i.pravatar.cc/150?u=1](https://i.pravatar.cc/150?u=1)",
          "[https://i.pravatar.cc/150?u=2](https://i.pravatar.cc/150?u=2)",
          "[https://i.pravatar.cc/150?u=3](https://i.pravatar.cc/150?u=3)"
        ]} 
      />
      
    </div>
  )
}
```
---

# 🧩 Props Reference
All avatars accept the standard className prop for custom styling overrides.

```text
1) src (string)

->Default: DiceBear API

->Description: Image URL. If missing/broken, a fallback is shown.

2) alt (string)

->Default: "Avatar"

->Description: Alt text for accessibility.

3) size (string)

->Default: "md"

->Description: Controls size (Classic/Square only). Options: sm, md, lg.

4) status (string)

->Default: "online"

->Description: (Status Avatar only) Options: online, busy, away, offline.

5) count (number)

->Default: 0

->Description: (Notification Avatar only) The number to show in the badge.

6) selected (boolean)

->Default: false

->Description: (Select Avatar only) Shows a blue checkmark.
```

---

# 📂 Category List
Here is what is included in the library:

1) Essentials: Classic, Squircle, Neumorphic, Soft Square, Pebble, Offset Pop.

2) Status: Online, Verified, Badge, Idle, Mobile, Away.

3) Shapes: Hexagon, Diamond, Triangle, Leaf, Pentagon, Star.

4) Creative: Blob, Brutalist, Double Ring, Reflection, Paper Cut, Gradient.

5) Effects: Glitch, Ripple, Story Ring, Glow, Sepia, Zoom.

6) Functional: Notification, Typing, Tooltip, Dashed, Reveal, Progress.

7) Interactive: Card, Group, Professional, Upload, Delete, Select.

---

# ⚡ Using a Single Avatar (Lightweight)
Don't want the whole library? You can combine everything into one file.

1) Copy the cn utility code.

2) Copy the AvatarImage component code.

3) Copy the specific avatar component code (e.g., AvatarClassic).

4) Paste them all into one file (e.g., MyAvatar.jsx) and use it!