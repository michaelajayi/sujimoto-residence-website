import aveForsche from "../../../public/img/properties/ave-forsche-img.jpg";
import aveMontaigne from "../../../public/img/properties/ave-montaigne-img.jpg";
import lancaster from "../../../public/img/properties/lancaster-img.jpg";
import maybourne from "../../../public/img/properties/maybourne-img.jpg";
import mayfair from "../../../public/img/properties/mayfair-img.jpg";

import may1 from "../../../public/img/properties/img-mont-1.jpg";
import may2 from "../../../public/img/properties/img-mont-2.jpg";
import may3 from "../../../public/img/properties/img-mont-3.jpg";
import may4 from "../../../public/img/properties/img-mont-4.jpg";
import may5 from "../../../public/img/properties/img-mont-5.jpg";

import donalds1 from '../../../public/img/properties/mac-donalds/01.jpeg';
import donalds2 from '../../../public/img/properties/mac-donalds/02.jpeg';
import donalds3 from '../../../public/img/properties/mac-donalds/03.jpeg';
import donalds4 from '../../../public/img/properties/mac-donalds/04.jpeg';
import donalds5 from '../../../public/img/properties/mac-donalds/05.jpeg';

import for1 from "../../../public/img/properties/img-forche-1.jpg";
import for2 from "../../../public/img/properties/img-forche-2.jpg";
import for3 from "../../../public/img/properties/img-forche-3.jpg";
import for4 from "../../../public/img/properties/img-forche-4.jpg";
import for5 from "../../../public/img/properties/img-forche-5.jpg";

import mayf1 from "../../../public/img/properties/img-mayfair-1.jpg";
import mayf2 from "../../../public/img/properties/img-mayfair-2.jpg";
import mayf3 from "../../../public/img/properties/img-mayfair-3.jpg";
import mayf4 from "../../../public/img/properties/img-mayfair-4.jpg";
import mayf5 from "../../../public/img/properties/img-mayfair-5.jpg";

import mayb1 from "../../../public/img/properties/img-may-1.jpg";
import mayb2 from "../../../public/img/properties/img-may-2.jpg";
import mayb3 from "../../../public/img/properties/img-may-3.jpg";
import mayb4 from "../../../public/img/properties/img-may-4.jpg";
import mayb5 from "../../../public/img/properties/img-may-5.jpg";

import ritz1 from "../../../public/img/properties/img-ritz-1.jpg";
import ritz2 from "../../../public/img/properties/img-ritz-2.jpg";
import ritz3 from "../../../public/img/properties/img-ritz-3.jpg";
import ritz4 from "../../../public/img/properties/img-ritz-4.jpg";
import ritz5 from "../../../public/img/properties/img-ritz-5.jpg";

import lanc1 from "../../../public/img/properties/img-lanc-1.jpg";
import lanc2 from "../../../public/img/properties/img-lanc-2.jpg";
import lanc3 from "../../../public/img/properties/img-lanc-3.jpg";
import lanc4 from "../../../public/img/properties/img-lanc-4.jpg";
import lanc5 from "../../../public/img/properties/img-lanc-5.jpg";

import ritz from "../../../public/img/properties/ritz-img.jpg";
// icons
import { BiCctv, BiWater } from "react-icons/bi";
import { GiDesk } from "react-icons/gi";
import { GrLounge } from "react-icons/gr";
import {
  MdCameraOutdoor,
  MdOutlineBathroom,
  MdOutlineBedroomParent,
} from "react-icons/md";
import { RiRemoteControlLine } from "react-icons/ri";
import {
  TbArmchair,
  TbChefHat,
  TbRun,
  TbViewportWide,
  TbWifi2,
} from "react-icons/tb";

const propertyArray = [
  {
    title: "Ave Montaigne",
    // subTitle: "Banana Island",
    subTitle: "IKOYI",
    description:
      "Experience the regal lifestyle at Ave Montaigne, where every detail exudes sophistication and elegance, and where luxury is elevated to an art form that immerses you in a world of sumptuousness and refinement.",
    active: true,
    img: aveMontaigne,
    minPrice: 250000,
    maxPrice: 400000,
    amenities: [
      {
        title: "3 Bedroom flat",
      },
      {
        title: "Italian Furnished Living room and Dining",
        icon: <TbArmchair color='#030202' />,
      },
      {
        title: "Private Chef with a Fully equipped kitchen",
        icon: <TbChefHat color='#030202' />,
      },
      {
        title: "Double Patio",
        icon: <MdCameraOutdoor color='#030202' />,
      },
      {
        title: "DSTV / Netflix / Wi-Fi Service",
        icon: <TbWifi2 color='#030202' />,
      },
      {
        title: "Premium security / 24-hour power supply",
        icon: <BiCctv color='#030202' />,
      },
    ],
    gallery: [
      { img: may1 },
      { img: may2 },
      { img: may3 },
      { img: may4 },
      { img: may5 },
    ],
  },
  {
    title: "Ave Forsche",
    // subTitle: "Banana Island",
    subTitle: "IKOYI",
    description:
      "Explore the summit of luxurious living at Ave Forsche, where opulence and refinement intertwine to form an encounter of grandeur and extravagance that surpasses even the most discerning expectations.",
    img: aveForsche,
    minPrice: 350000,
    maxPrice: 400000,
    amenities: [
      {
        title: "4 Bedroom flat",
      },
      {
        title: "Italian Furnished Living room and Dining",
        icon: <TbArmchair color='#030202' />,
      },
      {
        title: "Private Chef with a Fully equipped kitchen",
        icon: <TbChefHat color='#030202' />,
      },
      {
        title: "Double Patio",
        icon: <MdCameraOutdoor color='#030202' />,
      },
      {
        title: "DSTV / Netflix / Wi-Fi Service",
        icon: <TbWifi2 color='#030202' />,
      },
      {
        title: "Premium security / 24-hour power supply",
        icon: <BiCctv color='#030202' />,
      },
    ],
    gallery: [
      { img: for1 },
      { img: for2 },
      { img: for3 },
      { img: for4 },
      { img: for5 },
    ],
  },
  {
    title: "Mayfair Residence",
    // subTitle: "Banana Island",
    subTitle: "IKOYI",
    description:
      "Surrender to the allure of pure indulgence at Mayfair, where every aspect of the experience is crafted to perfection, and where the ultimate expression of opulence and refinement reigns supreme in a world of unparalleled luxury and elegance.",
    img: mayfair,
    minPrice: 300000,
    maxPrice: 350000,
    amenities: [
      {
        title: "A semi-detatched exclusive home",
      },
      {
        title: "Luxuriously furnished 3 bedroom",
        icon: <TbArmchair color='#030202' />,
      },
      {
        title: "Mini Automation (Curtains)",
        icon: <RiRemoteControlLine color='#030202' />,
      },
      {
        title: "Seasoned Private Chef/Fully equipped kitchen",
        icon: <TbChefHat color='#030202' />,
      },
      {
        title: "Wi-Fi/NETFLIX/DSTV.",
        icon: <TbWifi2 color='#030202' />,
      },
    ],
    gallery: [
      { img: mayf1 },
      { img: mayf2 },
      { img: mayf3 },
      { img: mayf4 },
      { img: mayf5 },
    ],
  },
  {
    title: "Maybourne",
    // subTitle: "Banana Island",
    subTitle: "IKOYI",
    description:
      "Immerse yourself in a life of unparalleled grandeur at Maybourne, where every moment feels like a luxurious escape, and where the embodiment of comfort, style, and sophistication converge to create a realm of unmatched luxury.",
    img: maybourne,
    minPrice: 300000,
    maxPrice: 350000,
    amenities: [
      {
        title: "Luxuriously furnished 3 bedroom flat",
      },
      {
        title: "Water front view",
        icon: <BiWater color='#030202' />,
      },
      {
        title: "Spacious Open Kitchen",
        icon: <TbViewportWide color='#030202' />,
      },
      {
        title: "Spacious Living room and Master Bedroom",
        icon: <MdOutlineBedroomParent color='#030202' />,
      },
      {
        title: "Private Chef/ Fully equipped kitchen",
        icon: <TbChefHat color='#030202' />,
      },
      {
        title: "NETFLIX, DSTV, WiFi",
        icon: <TbWifi2 color='#030202' />,
      },
    ],
    gallery: [
      { img: mayb1 },
      { img: mayb2 },
      { img: mayb3 },
      { img: mayb4 },
      { img: mayb5 },
    ],
  },
  {
    title: "MacDonalds (A1 - A8)",
    // subTitle: "Banana Island",
    subTitle: "IKOYI",
    description:
      "Step into a nostalgia-laden journey where the essence of old Ikoyi vibes intertwines seamlessly with a touch of opulence and jaw-dropping amenities. Minimum of 5/7 night booking at N250,000 per night. Discounts is available for long bookings.",
    img: donalds1,
    minPrice: 250000,
    maxPrice: 300000,
    amenities: [
      {
        title: "3 bedroom flat terrace",
      },
      {
        title: "Family lounge",
        icon: <GrLounge color='#030202' />,
      },
      {
        title: "Home Office",
        icon: <GiDesk color='#030202' />,
      },
      {
        title: "World-class Technogym",
        icon: <TbRun color='#030202' />,
      },
      {
        title: "Rooftop Terrace and Jacuzzi",
        icon: <MdOutlineBathroom color='#030202' />,
      },
      {
        title: "Private chef with fully equipped kitchen",
        icon: <TbChefHat color='#030202' />,
      },
      {
        title: "WiFi service, DSTV, Netflix",
        icon: <TbWifi2 color='#030202' />,
      },
    ],
    gallery: [
      { img: donalds1 },
      { img: donalds2 },
      { img: donalds3 },
      { img: donalds4 },
      { img: donalds5 },
    ],
  },
  {
    title: "Lancaster Suites",
    // subTitle: "Banana Island",
    subTitle: "IKOYI",
    description:
      "Encounter a world of timeless beauty and enchantment at Lancaster, where classic grace and modern luxury intertwine to create a truly unforgettable living experience that exudes sophistication and elegance at every turn.",
    img: lancaster,
    minPrice: 250000,
    maxPrice: 300000,
    amenities: [
      {
        title: "3 bedroom flat terrace",
      },
      {
        title: "Family lounge",
        icon: <GrLounge color='#030202' />,
      },
      {
        title: "Home Office",
        icon: <GiDesk color='#030202' />,
      },
      {
        title: "World-class Technogym",
        icon: <TbRun color='#030202' />,
      },
      {
        title: "Rooftop Terrace and Jacuzzi",
        icon: <GiDesk color='#030202' />,
      },
      {
        title: "Private chef with fully equipped kitchen",
        icon: <TbChefHat color='#030202' />,
      },
      {
        title: "WiFi service, DSTV, Netflix",
        icon: <TbWifi2 color='#030202' />,
      },
    ],
    gallery: [
      { img: lanc1 },
      { img: lanc2 },
      { img: lanc3 },
      { img: lanc4 },
      { img: lanc5 },
    ],
  },
];

export default propertyArray;
