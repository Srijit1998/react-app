import React from "react";
import { Box } from "@chakra-ui/react";
import GifItem from "./GifItem";

const GifList = (props) => {
  const onGifItemClickHandler = (gifUrl) => {
    props.onAddGifClickHandler(gifUrl);
  };

  return (
    <Box>
      {props.gifs.map((gif) => (
        <GifItem
          key={gif.id}
          width="full"
          gif={gif}
          onGifItemClickHandler={onGifItemClickHandler}
        />
      ))}
    </Box>
  );
};

export default GifList;
