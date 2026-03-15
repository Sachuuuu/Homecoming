import {
  CalendarHeart,
  Clock3,
  GlassWater,
  MapPinned,
  Shirt
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Details", href: "#details" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" }
];

export const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Romantic gallery image 1"
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Romantic gallery image 2"
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Romantic gallery image 3"
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Romantic gallery image 4"
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Romantic gallery image 5"
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Romantic gallery image 6"
  }
];

export const eventCards = [
  {
    title: "Homecoming Celebration",
    description: "Join us as we celebrate the beginning of our new journey together.",
    icon: CalendarHeart
  },
  {
    title: "Dinner & Celebration",
    description: "An evening filled with music, laughter, and joyful moments with family and friends.",
    icon: GlassWater
  },
  {
    title: "Venue",
    description: "Empire Ballroom, Mount Lavinia Hotel, Mount Lavinia",
    icon: MapPinned
  },
  {
    title: "Time",
    description: "Homecoming Celebration at 06:30 PM onwards",
    icon: Clock3
  },
  {
    title: "Dress Code",
    description: "Formal or elegant traditional attire.",
    icon: Shirt
  }
];
