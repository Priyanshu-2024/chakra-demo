import { Flex, FormControl, Button, Box, Text, Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
export default function Header() {
  return (
    // navbar
    <Box p="7" className="navbar">
      <Flex>
        <Text color="red" fontSize="3vw" fontWeight="bold" w="30%">
          edu|find
        </Text>

        <FormControl w="60%">
          <Flex>
            <Input mt="1vw" w="100%" placeholder="Search Here" />

            <Button className="btn" mt="1vw" ms="1vw">
              <i className="fas fa-search" id="search"></i>
            </Button>

            <Button className="lang" mt="1vw" ms="0.4vw" variant="outline">
              EN
            </Button>

            <Image
              mt="0.5vw"
              ms="0.4vw"
              className="giraffe"
              objectFit="cover"
              src="https://o.remove.bg/downloads/5073650e-7711-4e7c-bd3a-06a01f8a0d5b/download-removebg-preview.png"
              alt="Dan Abramov"
            />
          </Flex>
        </FormControl>
      </Flex>
    </Box>
  );
}
