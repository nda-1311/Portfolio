// Portfolio Data - Dễ dàng thay đổi nội dung tại đây
import avt from "../assets/avt.jpg";
import avt2 from "../assets/avt2.jpg";

export const portfolioData = {
  // Thông tin cá nhân
  personal: {
    name: "Nguyễn Đức Anh",
    title: "Full-Stack Developer",
    tagline:
      "Xây dựng giải pháp web hiện đại với React, Node.js và các công nghệ tiên tiến. Biến ý tưởng thành sản phẩm thực tế, mang lại trải nghiệm người dùng xuất sắc.",
    email: "1dap2xoe@gmail.com",
    phone: "0358102981",
    location: "Hồ Chí Minh, Việt Nam",
    // Ảnh mặc định, sẽ được thay thế bằng ảnh upload
    heroImage: avt,
    aboutImage: avt2,
  },

  // About section
  about: {
    description:
      "Lập trình viên Full-Stack với niềm đam mê tạo ra các ứng dụng web và mobile chất lượng cao. Chuyên về React, Node.js, và các công nghệ hiện đại. Với kinh nghiệm phát triển giao diện trực quan và tối ưu hiệu suất, tôi luôn hướng đến việc mang lại giá trị thực sự cho người dùng cuối. Tôi có thể giao tiếp, đọc hiểu tài liệu tiếng anh cơ bản với TOEIC: 700 điểm.",
  },

  // Skills
  skills: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Food Delivery Mobile App",
      description:
        "Ứng dụng giao đồ ăn di động được xây dựng bằng TypeScript và React Native. Tích hợp đầy đủ tính năng đặt hàng, thanh toán và theo dõi đơn hàng real-time.",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80",
      link: "https://github.com/nda-1311/Nhom36_FoodDelivery_MobileApp",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Nền tảng thương mại điện tử full-stack với React & Node.js. Tích hợp thanh toán, quản lý đơn hàng và dashboard admin.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với real-time updates. Xây dựng bằng React, Firebase và Material-UI cho trải nghiệm mượt mà.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      link: "#",
    },
  ],

  // Services
  services: [
    {
      id: 1,
      icon: "code",
      title: "Website Development",
      description:
        "Phát triển website hiện đại, responsive và tối ưu hiệu suất với React, Next.js và Tailwind CSS.",
    },
    {
      id: 2,
      icon: "phone_iphone",
      title: "Mobile App Development",
      description:
        "Xây dựng ứng dụng di động đa nền tảng với React Native, mang lại trải nghiệm mượt mà trên mọi thiết bị.",
    },
    {
      id: 3,
      icon: "design_services",
      title: "UI/UX Design",
      description:
        "Thiết kế giao diện trực quan, thân thiện và tối ưu trải nghiệm người dùng với Figma và Adobe XD.",
    },
  ],

  // Social Links
  social: {
    github: "https://github.com/nda-1311",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};
