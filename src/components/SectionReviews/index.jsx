import { SectionReviewContain } from "./style";
import { useState } from "react";
export default function SectionReviews() {
  let images = ["", "", ""];
  const [SelectIndex, setSelectIndex] = useState(0);
  const [SelectedImage, setSelectImage] = useState(images[0]);

  const previous = () => {
    const condition = SelectIndex > 0;
    const nextIndex = condition ? SelectIndex - 1 : images.length - 1;
    setSelectImage(images[nextIndex]);
    setSelectIndex(nextIndex);
  };

  const next = () => {
    const condition = SelectIndex < images.length; // condition =  0 < 3 -> true / condition =  3 < 3 -> false
    const nextIndex = condition ? SelectIndex + 1 : 0;
    setSelectImage(images[nextIndex]);
    setSelectIndex(nextIndex);
  };
  return (
    <SectionReviewContain className="container">
      <h2>Section Reviews</h2>
    </SectionReviewContain>
  );
}
