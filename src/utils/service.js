import { BiLaptop } from "react-icons/bi";
import { BsLaptop } from "react-icons/bs";
import {
  FaReact,
  FaChartLine,
  FaPaintBrush,
  FaMobileAlt,
  FaShoppingCart,
  FaPenNib,
  FaCloud,
} from "react-icons/fa";

export const services = [
  {
    title: "Web Development",
    logo: BsLaptop,
    category: "Development",
    description:
      "Building modern, scalable web applications using MongoDB, Express.js, React.js, and Node.js for full-stack development.",
    details:
      "Full-stack development of modern, scalable web applications with cutting-edge technologies is what we do best. Our Web development agency is one of the top software companies in Bangladesh that provides complete end-to-end web solutions, which consist of a reactive and dynamic front end with a powerful and secure back end, and the databases are also scalable.",
    features: [
      "Custom Software: Tailed solutions to fit in perfectly with what your business requires to achieve its goals.",
      "Scalable Architecture: constructed to maintain satisfactory performance when scaling from user bases to traffic volume.",
      "Responsive Design: ensures your software will run all in one place, whether on desktops or smartphones.",
      "Intuitive User Interface: We assure you that user experience is a priority to us, and your software will have an engaging and user-friendly interface.",
      "Third-Party Integrations: Allow easy integration with external services and APIs like payment gateways, CRM systems and analytics platforms.",
      "Fast Development Time: We can deliver projects on time, and processes make it possible for us to go to market quickly. ",
      "Affordable Pricing: Great value for a high-quality product at a competitive pricing structure. 24/7.",
      "Enhanced Security: All projects have special security protocols built in to keep your data safe.",
      "One-stop Solution: We provide an all-in-one development service from concept to deployment and support.",
      "Client Support: We give you round-the-clock support to run your software without any interruption.",
    ],

    relatedServices: [
      {
        title: "Mobile App Development",
        logo: FaMobileAlt,
        link: "/service/e-commerce-solutions",
      },
      {
        title: "Cloud Solutions",
        logo: FaCloud,
        link: "/service/digital-marketing",
      },
    ],
  },
  {
    title: "Digital Marketing",
    logo: FaChartLine,
    category: "Marketing",
    description:
      "Enhance brand visibility through SEO, SEM, and social media campaigns.",
    details:
      "Our Digital Marketing service helps your brand stand out in a crowded market. We employ a mix of SEO, SEM, and social media marketing to drive traffic, generate leads, and increase conversions. Our data-driven approach ensures that every campaign is optimized for maximum return on investment, helping you achieve your marketing goals efficiently.",
    features: [
      "Improved Customer Engagement: Build relationships through active interactions and personalized content.",
      "CostEffective Campaigns: Control your budget with pay per click (PPC) or impression-based pricing.",
      "Instant Brand Visibility: Gain immediate exposure to a large audience.",
      "High Engagement: Boost interactions through eye-catching visuals and tailored messaging.",
      "Increased Website Traffic: Drive qualified traffic to your site through targeted ads.",
      "Direct Audience Reach: Deliver personalized messages straight to your subscribers.",
      "Customer Retention: Keep your audience engaged with newsletters and updates.",
      "Increased Brand Awareness: Reach and engage with a larger audience.",
      "RealTime Performance Tracking: Monitor engagement and optimize campaigns.",
      "Community Building: Cultivate a loyal following and foster brand advocacy.",
    ],

    relatedServices: [
      {
        title: "E Commerce Solutions",
        logo: FaShoppingCart,
        link: "/service/e-commerce-solutions",
      },
      {
        title: "Web Development",
        logo: BiLaptop,
        link: "/service/web-developent",
      },
    ],
  },

  {
    title: "E commerce Solutions",
    logo: FaShoppingCart,
    category: "Development",
    description:
      "Our goal is to provide e-commerce solutions that meet the technical requirements and drive your business forward.",
    details:
      "At the heart of our E-commerce Solutions is the commitment to building online stores that drive sales and offer a seamless, engaging experience for your customers. We specialize in developing robust e-commerce platforms that simplify everything from payment integration to inventory management, ensuring your store operates smoothly and efficiently. Whether you're just starting or looking to expand, our solutions are designed to grow your business and adapt to your needs.",
    features: [
      "Custom-Built Stores: We design unique, feature-rich online stores tailored to your specific business needs, helping you stand out in a crowded marketplace.",
      "Seamless Payment Integration: With secure, easy-to-use payment gateways, we ensure transactions are smooth and worry-free for you and your customers.",
      "Inventory Management: Keep track of your stock effortlessly with integrated inventory management tools that help you stay organized and avoid stock issues.",
      "User-Friendly Interface: We prioritize the customer experience by designing intuitive, easy-to-navigate interfaces that encourage shopping and drive conversions.",
      "Mobile-Optimized Designs: Our e-commerce platforms are fully responsive, ensuring your store looks and functions flawlessly on any device, from desktops to smartphones.",
      "Advanced Analytics: We integrate analytics tools so you can track customer behavior, sales performance, and trends, empowering you to make data-driven decisions.",
      "Scalability: Built to grow with your business, our e-commerce solutions are highly scalable, allowing you to add new products, features, or services without disruption.",
    ],

    relatedServices: [
      {
        title: "Digital Marketing",
        logo: FaChartLine,
        link: "/service/digital-marketing",
      },
      {
        title: "Content Creation",
        logo: FaPenNib,
        link: "/service/web-developent",
      },
    ],
  },
];

// export default services;
