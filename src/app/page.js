'use client'
import Footer from '@/layout/Footer/Footer';
import CardsSlider from "@/components/CardsSlider/CardsSlider";
import ImgSlider from "@/components/ImgSlider/ImgSlider";
import gartenData from '@/dummyData/garten'
import schoolData from '@/dummyData/school';
import spaceData from '@/dummyData/space';
import funData from '@/dummyData/fun';
import sportsData from '@/dummyData/sports';
import { blue, green, lightOrange, red, yellow } from "@/themes/colors";

export default function Home() {
  return (
    <div className="bg-white">
      <ImgSlider />
      <div className='flex flex-col gap-4-0 sm:gap-12-0 mb-8-0 sm:mb-17-2 mt-5-0 sm:mt-13-0'>
        <CardsSlider backgroundColor={green} list={gartenData} link={"/SortPages/GartenPage"} title='საბავშვო ბაღი'/>
        <CardsSlider backgroundColor={yellow} list={schoolData} link={"/SortPages/SchoolPage"} title='სკოლა'/>
        <CardsSlider backgroundColor={lightOrange} list={spaceData} link={"/SortPages/SpacePage"} title='დაბადების დღის ცენტრი'/>
        <CardsSlider backgroundColor={red} list={funData} link={"/SortPages/FunPage"} title='გართობა'/>
        <CardsSlider backgroundColor={blue} list={sportsData} link={"/SortPages/SportsPage"} title='სპორტი'/>
      </div>
      <Footer backgroundColor={yellow}/>
    </div>
  )
}
