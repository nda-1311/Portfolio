// Portfolio Data - Dễ dàng thay đổi nội dung tại đây
import avt from "../assets/avt.jpg";
import avt2 from "../assets/avt2.jpg";
import qr1 from "../assets/qr1.png";
import qr2 from "../assets/qr2.png";
import qr3 from "../assets/qr3.png";

export const portfolioData = {
  // Thông tin cá nhân
  personal: {
    name: "Nguyễn Đức Anh",
    title: "Full-Stack Developer",
    tagline:
      "Xây dựng giải pháp web hiện đại với React, Node.js và các công nghệ tiên tiến. Biến ý tưởng thành sản phẩm thực tế, mang lại trải nghiệm người dùng xuất sắc.",
    email: "1dap2xoe@gmail.com",
    phone: "0358102981",
    location: "Thành phố Hồ Chí Minh, Việt Nam",
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
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
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
      title: "QR Digital Business Card",
      description:
        "Tiện ích danh thiếp kỹ thuật số với QR Code hiện đại, nhanh chóng và miễn phí 100%. Hỗ trợ upload ảnh lên cloud để chia sẻ đầy đủ thông tin qua QR code! Tạo danh thiếp chỉ trong 10 giây với giao diện đẹp mắt và responsive.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80",
      link: "https://github.com/nda-1311/QR-Digital-Business-Card",
      liveLink: "https://nda-1311.github.io/QR-Digital-Business-Card/",
      technologies: [
        "React 19",
        "React Router v7",
        "Tailwind CSS",
        "QRCode.react",
        "html2canvas",
        "lz-string",
        "ImgBB API",
        "GitHub Pages",
      ],
      features: [
        "⚡ Siêu Nhanh - Tạo danh thiếp trong 10 giây",
        "🎨 UI Đẹp Mắt - Thiết kế hiện đại theo phong cách startup công nghệ",
        "📱 Responsive - Hoạt động mượt mà trên mọi thiết bị",
        "🔄 Real-time Preview - Xem trước danh thiếp ngay khi nhập",
        "🌓 Dark/Light Mode - Chuyển đổi giao diện linh hoạt",
        "💾 Xuất PNG - Tải xuống danh thiếp chất lượng cao với icons căn chỉnh hoàn hảo",
        "🔗 Chia Sẻ Link - Link riêng cho mỗi danh thiếp, có thể chia sẻ",
        "🎯 QR Code Thực Tế - Quét QR bằng điện thoại để xem danh thiếp đầy đủ",
        "☁️ Cloud Storage - Avatar được lưu trên ImgBB cloud, không giới hạn",
        "📦 Data Compression - Nén dữ liệu bằng lz-string để URL ngắn gọn",
        "🔐 Hash Fragment - Dữ liệu được mã hóa an toàn trong URL",
        "🚀 Dynamic Routing - Mỗi card có URL riêng biệt với scroll to top",
      ],
      images: [qr1, qr2, qr3],
    },
    {
      id: 2,
      title: "Food Delivery Mobile App",
      description:
        "Ứng dụng giao đồ ăn di động được xây dựng bằng TypeScript và React Native. Tích hợp đầy đủ tính năng đặt hàng, thanh toán và theo dõi đơn hàng real-time.",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80",
      link: "https://github.com/nda-1311/Nhom36_FoodDelivery_MobileApp",
      liveLink: "",
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "Firebase",
        "Redux Toolkit",
        "React Navigation",
      ],
      features: [
        "Đăng ký/Đăng nhập với xác thực an toàn",
        "Duyệt danh sách nhà hàng và món ăn",
        "Thêm món vào giỏ hàng và đặt hàng",
        "Theo dõi đơn hàng real-time",
        "Tích hợp nhiều phương thức thanh toán",
        "Đánh giá và nhận xét nhà hàng",
        "Lưu địa chỉ giao hàng yêu thích",
      ],
      images: [
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&auto=format&fit=crop&q=80",
      ],
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với real-time updates. Xây dựng bằng React, Firebase và Material-UI cho trải nghiệm mượt mà.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      link: "#",
      liveLink: "",
      technologies: [
        "React",
        "Firebase",
        "Material-UI",
        "JavaScript",
        "Context API",
      ],
      features: [
        "Tạo, chỉnh sửa và xóa task dễ dàng",
        "Phân loại task theo project và priority",
        "Cập nhật real-time cho nhiều người dùng",
        "Giao diện thân thiện với Material Design",
        "Thông báo deadline và reminder",
        "Báo cáo tiến độ công việc",
      ],
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&auto=format&fit=crop&q=80",
      ],
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
