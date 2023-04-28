import React, { useState } from "react";
import { Cartoons } from "../../../../utils/interfaces/cartoons";

interface UseImageProps {
  cartoons?: Cartoons;
}

function useImage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = () => {
    setIsVisible(!isVisible);
  };
  return {
    handleOnClick,
    isVisible,
  };
}
export default useImage;
