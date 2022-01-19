import React from "react";
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

const MyInput = React.forwardRef((props, ref) => {
  return (
    <InputGroup>
      {props.hasLeftIcon && <InputLeftElement children={props.leftChildren} />}
      <Input
        ref={ref}
        w={props.width}
        _focus={{ outline: props.outline }}
        border={props.border}
        placeholder={props.placeholder}
        _placeholder={{ color: "#76797D" }}
        color={props.color}
        onChange={props.onChangeHandler}
      />
      {props.hasRightIcon && (
        <InputRightElement children={props.rightChildren} />
      )}
    </InputGroup>
  );
});

export default MyInput;
