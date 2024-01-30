import Image from "next/image";
import Header from "@/component/header";
import ImageSlider from "@/component/carouselImages";
import Explanaiton from "@/component/explanation";

export default function Home() {
  return (
    <>
      <Header />
      <ImageSlider />
        <Explanaiton/>
        <ImageSlider />
    </>
  );
}
