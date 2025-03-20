import season_1_image from "/assets/images/season_1.png";
import season_2_image from "/assets/images/season_2.png";
import season_3_image from "/assets/images/season_3.png";
import season_4_image from "/assets/images/season_4.png";
import season_5_image from "/assets/images/season_5.png";
import season_6_image from "/assets/images/season_6.png";
export interface ISeasonInfo {
  id: number;
  title: string;
  image: string;
  date: string;
}

export const SeasonsAPI: ISeasonInfo[] = [
  {
    id: 1,
    title: "სეზონი 1",
    image: season_1_image,
    date: "2021-01-01",
  },
  {
    id: 2,
    title: "სეზონი 2",
    image: season_2_image,
    date: "2021-01-01",
  },
  {
    id: 3,
    title: "სეზონი 3",
    image: season_3_image,
    date: "2021-01-01",
  },
  {
    id: 4,
    title: "სეზონი 4",
    image: season_4_image,
    date: "2021-01-01",
  },
  {
    id: 5,
    title: "სეზონი 5",
    image: season_5_image,
    date: "2021-01-01",
  },
  {
    id: 6,
    title: "სეზონი 6",
    image: season_6_image,
    date: "2021-01-01",
  },
];
