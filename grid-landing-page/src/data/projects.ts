import sparkleIcon from "../assets/images/icon-sparkle.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import arrowRightIcon from "../assets/images/icon-arrow-right.svg";
import trendingIcon from "../assets/images/icon-trending-up.svg";

export type Project = {
  iconSrc: string;
  stat: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    iconSrc: sparkleIcon,
    stat: "2.4M",
    title: "Students reached",
    description: "Across 31 countries since 2011.",
  },
  {
    iconSrc: plusIcon,
    stat: "1,284",
    title: "Schools partnered",
    description: "In 14 countries, from Kenya to Guatemala.",
  },
  {
    iconSrc: arrowRightIcon,
    stat: "38K",
    title: "Teachers trained",
    description: "Equipped with modern tools and methodology.",
  },
  {
    iconSrc: trendingIcon,
    stat: "3.1×",
    title: "Graduation lift",
    description: "Partner schools outperform national averages 3x.",
  },
];
