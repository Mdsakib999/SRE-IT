import { services } from "./service";

const servicesChildren = services.map((item, index) => {
  const link = item.title.split(' ').join('-').toLocaleLowerCase()
  return {
    id: index + 1,
    title: item.title,
    link: `/service/${link}`
  }
})

export const navData = [
  {
    id: "1",
    title: "Home",
    link: "/",
    isCols: true,
    // dowArrowText: "home",
    // children: [
    //   {
    //     id: "1",
    //     title: "Home",
    //     link: "/",
    //   },
    // ],
  },
  
  {
    id: "2",
    title: "About",
    link: "/about",
  },
  {
    id: "3",
    title: "Services",
    link: "/services",
    children: servicesChildren
  },
  {
    id: "4",
    title: "Career",
    link: "/career",
  },
  // {
  //   id: "5",
  //   title: "Dashboard",
  //   link: "/dashboard",
  // }

  // {
  //   id: "4",
  //   title: "Contact",
  //   link: "/contact",
  //   isButton: true,
  // },
];
