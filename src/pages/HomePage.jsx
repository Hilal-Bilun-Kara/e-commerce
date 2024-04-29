import { BestSeller } from "../bodyChildComponents/bestSellerProducts";
import Container from "../bodyChildComponents/container";
import { EditorPicks } from "../bodyChildComponents/editorPicks";
import FeaturedPost from "../bodyChildComponents/featuredPost";
import Slider from "../layout/Slider";
import SliderBottom from "../layout/SliderBottom";

export default function HomePage() {
  return (
    <>
      <Slider />
      <EditorPicks />
      <BestSeller />
      <SliderBottom />
      <Container />
      <FeaturedPost />
    </>
  );
}
