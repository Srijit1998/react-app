import React from "react";
import { Box, Text } from "@chakra-ui/react";

const UserDetail = (props) => {
  return (
    <Box display="flex" flexDir="column">
      <Text color={props.color} mt={2} fontSize="lg" fontWeight="semibold">
        {props.name}
      </Text>
      <Text color={props.color} fontSize="sm" fontWeight="medium">
        {props.location}
      </Text>
    </Box>
  );
};

export default UserDetail;
