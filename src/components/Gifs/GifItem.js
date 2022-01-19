import React from "react";
import { Image } from "@chakra-ui/react";

const GifItem = (props) => {
  const { url } = props.gif.images.preview_gif;
  const { username } = props.gif;

  const onItemClickHandler = () => {
    props.onGifItemClickHandler(url);
  };

  return (
    <Image
      w={props.width}
      cursor="pointer"
      src={url}
      alt={username}
      onClick={onItemClickHandler}
    />
  );
};

export default GifItem;
