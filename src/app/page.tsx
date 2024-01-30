import Image from "next/image";
import Header from "@/component/header";
import ImageSlider from "@/component/carouselImages";
import Explanaiton from "@/component/explanation";
import NewModels from "@/component/newModels";
import ImagesExtraList from "@/component/extraProduction";
import ImagesParonomicList from "@/component/paranomicSeries";


export default function Home() {
  return (
    <>
      <Header />
      <ImageSlider />
        <Explanaiton/>
        <ImageSlider />
        <NewModels/>
        <ImagesParonomicList/>
        <ImagesExtraList/>
    </>
  );
}
