export const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Course = {
  slug: string;
  title: string;
  author: string;
  image: string;
  category: Category;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  students: string[];
  studentCount: string;
};

// Course photos: Unsplash (Unsplash License), self-hosted in /public/courses
export const COURSES: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "/courses/figma.jpg",
    category: "UI/UX Design",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 89,
    level: "Beginner",
    price: 25,
    students: ["/avatars/avatar-2.jpg", "/avatars/avatar-4.jpg", "/avatars/avatar-5.jpg", "/avatars/avatar-1.jpg"],
    studentCount: "2k+",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "/courses/digital-asset.jpg",
    category: "Graphic Design",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 89,
    level: "Beginner",
    price: 25,
    students: ["/avatars/avatar-3.jpg", "/avatars/avatar-7.jpg", "/avatars/avatar-6.jpg", "/avatars/avatar-2.jpg"],
    studentCount: "2k+",
  },
  {
    slug: "the-power-of-big-data",
    title: "The Power of Big Data",
    author: "purepearl studio",
    image: "/courses/big-data.jpg",
    category: "Data Science",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 89,
    level: "Beginner",
    price: 25,
    students: ["/avatars/avatar-5.jpg", "/avatars/avatar-1.jpg", "/avatars/avatar-4.jpg", "/avatars/avatar-7.jpg"],
    studentCount: "2k+",
  },
  {
    slug: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    author: "purepearl studio",
    image: "/courses/productivity.jpg",
    category: "Productivity",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 89,
    level: "Beginner",
    price: 25,
    students: ["/avatars/avatar-6.jpg", "/avatars/avatar-2.jpg", "/avatars/avatar-3.jpg", "/avatars/avatar-5.jpg"],
    studentCount: "2k+",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    author: "purepearl studio",
    image: "/courses/money.jpg",
    category: "Freelance & Entrepreneurship",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 89,
    level: "Beginner",
    price: 25,
    students: ["/avatars/avatar-1.jpg", "/avatars/avatar-7.jpg", "/avatars/avatar-4.jpg", "/avatars/avatar-3.jpg"],
    studentCount: "2k+",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image: "/courses/startup.jpg",
    category: "Freelance & Entrepreneurship",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 89,
    level: "Beginner",
    price: 25,
    students: ["/avatars/avatar-4.jpg", "/avatars/avatar-2.jpg", "/avatars/avatar-6.jpg", "/avatars/avatar-1.jpg"],
    studentCount: "2k+",
  },
];
