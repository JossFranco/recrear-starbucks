import React, { useState } from "react";
import { Cartoons } from "../../../../utils/interfaces/cartoons";

interface UseImageProps {
  cartoons: Cartoons;
  onDelete: (cartoons: Cartoons) => void;
}

function useImage({ cartoons, onDelete }: UseImageProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = () => {
    setIsVisible(!isVisible);
  };
  const handleOnDelete = () => {
    onDelete(cartoons);
    setIsVisible(false);
  };
  return {
    handleOnClick,
    isVisible,
    handleOnDelete,
  };
}
export default useImage;
