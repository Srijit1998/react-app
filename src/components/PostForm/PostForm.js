import React, { useEffect, useRef, useState } from "react";
import { Box, Text, Divider, Image } from "@chakra-ui/react";
import MyAvatar from "../Avatar/MyAvatar";
import Card from "../UI/Card";
import UserDetail from "../User/UserDetail";
import MyInput from "../Input/MyInput";
import MyButton from "../Button/MyButton";
import MyPopover from "../Popover/MyPopover";
import { API_KEY } from "../../api/api";
import GifList from "../Gifs/GifList";

const PostForm = (props) => {
  const [gifs, setGifs] = useState([]);
  const [gifUrl, setGifUrl] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("hello");
  const inputRef = useRef();

  useEffect(() => {
    const searchGif = async () => {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=
        ${searchInputValue}
        &api_key=${API_KEY}&limit=5`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Gifs...");
      }
      const responseData = await response.json();
      setGifs(responseData.data);
    };
    let timerId;
    try {
      if (searchInputValue) {
        timerId = setTimeout(() => {
          searchGif();
        }, 500);
      }
    } catch (error) {
      console.log(error.message);
    }
    return () => clearTimeout(timerId);
  }, [searchInputValue]);

  const onAddGifClickHandler = (gifUrl) => {
    setGifUrl(gifUrl);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value === "" || !gifUrl) {
      return;
    }

    const formData = {
      inputValue: inputRef.current.value,
      gifUrl,
    };

    props.onAddDataHandler(formData);
    inputRef.current.value = "";
    setGifUrl(null);
  };

  return (
    <Card bgColor="#242526" text="Create Post" textColor="#e4e6eb">
      <Divider />
      <Box display="flex" alignItems="start">
        <MyAvatar
          size="lg"
          name="Srijit Bhattacharjee"
          imageUrl="https://bit.ly/dan-abramov"
        />
        <UserDetail
          name="Srijit Bhattacharjee"
          color="#e4e6eb"
          location="Kolkata, India"
        />
      </Box>
      <form onSubmit={onFormSubmitHandler}>
        <MyInput
          ref={inputRef}
          width="400px"
          placeholder="What's on your mind, Srijit?"
          color="#e4e6eb"
          hasRightIcon={true}
          outline="none"
          border="none"
          rightChildren={
            <MyPopover
              trigger={
                <Text
                  color="#e4e6eb"
                  letterSpacing={2}
                  cursor="pointer"
                  fontWeight="semibold"
                  _hover={{ color: "#76797D" }}
                >
                  GIF
                </Text>
              }
              header={
                <MyInput
                  onChangeHandler={(e) => setSearchInputValue(e.target.value)}
                  width="150px"
                  placeholder="Search..."
                  color="gray"
                  outline="none"
                />
              }
              body={
                <GifList
                  gifs={gifs}
                  onAddGifClickHandler={onAddGifClickHandler}
                />
              }
            />
          }
        />
        {gifUrl && (
          <Box>
            <Image src={gifUrl} w="full" cursor="pointer" />
          </Box>
        )}
        <MyButton
          width="full"
          color="#e4e6eb"
          variant="solid"
          text="Post"
          bgColor="#3982E4"
          onClick={onFormSubmitHandler}
        />
      </form>
    </Card>
  );
};

export default PostForm;
