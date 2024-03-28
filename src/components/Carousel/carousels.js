import aveMontaigne from "../../../public/img/properties/ave-montaigne-img.jpg";
import lancaster from '../../../public/img/properties/lancaster-img.jpg';
import mayfair from "../../../public/img/properties/mayfair-img.jpg";
import maybourne from "../../../public/img/properties/maybourne-img.jpg";
import aveForsche from "../../../public/img/properties/ave-forsche-img.jpg";

import may1 from '../../../public/img/properties/img-mont-1.jpg';
import may2 from "../../../public/img/properties/img-mont-2.jpg";
import may3 from "../../../public/img/properties/img-mont-3.jpg";
import may4 from "../../../public/img/properties/img-mont-4.jpg";
import may5 from "../../../public/img/properties/img-mont-5.jpg";

import for1 from '../../../public/img/properties/img-forche-1.jpg';
import for2 from "../../../public/img/properties/img-forche-2.jpg";
import for3 from "../../../public/img/properties/img-forche-3.jpg";
import for4 from "../../../public/img/properties/img-forche-4.jpg";
import for5 from "../../../public/img/properties/img-forche-5.jpg";

import mayf1 from '../../../public/img/properties/img-mayfair-1.jpg';
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


import ritz from '../../../public/img/properties/ritz-img.jpg';
// icons
import {
	TbArmchair,
	TbChefHat,
	TbWifi2,
	TbViewportWide,
	TbRun,
} from "react-icons/tb"
import { BiCctv, BiWater } from "react-icons/bi"
import {
	MdCameraOutdoor,
	MdOutlineBedroomParent,
	MdOutlineBathroom,
} from "react-icons/md"
import { RiRemoteControlLine } from "react-icons/ri"
import { GrLounge } from "react-icons/gr"
import {GiDesk} from 'react-icons/gi'


const carousels = [
	{
		title: "Ave Montaigne",
		// subTitle: "Banana Island",
		subTitle: "IKOYI",
		description:
			"Experience the regal lifestyle at Ave Montaigne, where every detail exudes sophistication and elegance, and where luxury is elevated to an art form that immerses you in a world of sumptuousness and refinement.",
		active: true,
		img: aveMontaigne,
		minPrice: `250,000`,
		maxPrice: "400,000",
		amenities: [
			{
				title: "3 Bedroom flat",
			},
			{
				title: "Italian Furnished Living room and Dining",
				icon: <TbArmchair />,
			},
			{
				title: "Private Chef with a Fully equipped kitchen",
				icon: <TbChefHat />,
			},
			{
				title: "Double Patio",
				icon: <MdCameraOutdoor />,
			},
			{
				title: "DSTV / Netflix / Wi-Fi Service",
				icon: <TbWifi2 />,
			},
			{
				title: "Premium security / 24-hour power supply",
				icon: <BiCctv />,
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
		minPrice: `250,000`,
		maxPrice: "400,000",
		amenities: [
			{
				title: "4 Bedroom flat",
			},
			{
				title: "Italian Furnished Living room and Dining",
				icon: <TbArmchair />,
			},
			{
				title: "Private Chef with a Fully equipped kitchen",
				icon: <TbChefHat />,
			},
			{
				title: "Double Patio",
				icon: <MdCameraOutdoor />,
			},
			{
				title: "DSTV / Netflix / Wi-Fi Service",
				icon: <TbWifi2 />,
			},
			{
				title: "Premium security / 24-hour power supply",
				icon: <BiCctv />,
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
		minPrice: `250,000`,
		maxPrice: "400,000",
		amenities: [
			{
				title: "A semi-detatched exclusive home",
			},
			{
				title: "Luxuriously furnished 3 bedroom",
				icon: <TbArmchair />,
			},
			{
				title: "Mini Automation (Curtains)",
				icon: <RiRemoteControlLine />,
			},
			{
				title: "Seasoned Private Chef/Fully equipped kitchen",
				icon: <TbChefHat />,
			},
			{
				title: "Wi-Fi/NETFLIX/DSTV.",
				icon: <TbWifi2 />,
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
		minPrice: `250,000`,
		maxPrice: "400,000",
		amenities: [
			{
				title: "Luxuriously furnished 3 bedroom flat",
			},
			{
				title: "Water front view",
				icon: <BiWater />,
			},
			{
				title: "Spacious Open Kitchen",
				icon: <TbViewportWide />,
			},
			{
				title: "Spacious Living room and Master Bedroom",
				icon: <MdOutlineBedroomParent />,
			},
			{
				title: "Private Chef/ Fully equipped kitchen",
				icon: <TbChefHat />,
			},
			{
				title: "NETFLIX, DSTV, WiFi",
				icon: <TbWifi2 />,
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
		title: "Ritz Suites",
		// subTitle: "Banana Island",
		subTitle: "IKOYI",
		description:
			"Revel in the lavishness of ultimate indulgence at Ritz, where every moment exudes glamour and prestige, and where the epitome of luxury and sophistication meets to create an encounter that transcends all expectations.",
		img: ritz,
		minPrice: `250,000`,
		maxPrice: "400,000",
		amenities: [
			{
				title: "3 bedroom flat terrace",
			},
			{
				title: "Family lounge",
				icon: <GrLounge />,
			},
			{
				title: "Home Office",
				icon: <GiDesk />,
			},
			{
				title: "World-class Technogym",
				icon: <TbRun />,
			},
			{
				title: "Rooftop Terrace and Jacuzzi",
				icon: <MdOutlineBathroom />,
			},
			{
				title: "Private chef with fully equipped kitchen",
				icon: <TbChefHat />,
			},
			{
				title: "WiFi service, DSTV, Netflix",
				icon: <TbWifi2 />,
			},
		],
		gallery: [
			{ img: ritz1 },
			{ img: ritz2 },
			{ img: ritz3 },
			{ img: ritz4 },
			{ img: ritz5 },
		],
	},
	{
		title: "Lancaster Suites",
		// subTitle: "Banana Island",
		subTitle: "IKOYI",
		description:
			"Encounter a world of timeless beauty and enchantment at Lancaster, where classic grace and modern luxury intertwine to create a truly unforgettable living experience that exudes sophistication and elegance at every turn.",
		img: lancaster,
		minPrice: `250,000`,
		maxPrice: "400,000",
		amenities: [
			{
				title: "3 bedroom flat terrace",
			},
			{
				title: "Family lounge",
				icon: <GrLounge />,
			},
			{
				title: "Home Office",
				icon: <GiDesk />,
			},
			{
				title: "World-class Technogym",
				icon: <TbRun />,
			},
			{
				title: "Rooftop Terrace and Jacuzzi",
				icon: <GiDesk />,
			},
			{
				title: "Private chef with fully equipped kitchen",
				icon: <TbChefHat />,
			},
			{
				title: "WiFi service, DSTV, Netflix",
				icon: <TbWifi2 />,
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
]

export default carousels;
