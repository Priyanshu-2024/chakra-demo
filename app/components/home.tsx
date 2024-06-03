import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Badge,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
export default function Home() {
  return (
    <Flex>
      <Box w="30%">
        <OrderedList>
          <ListItem className="list">
            General{" "}
            <Badge className="bdg" ms="17.2vw">
              162
            </Badge>
          </ListItem>
          <ListItem className="list">
            Agriculture, animals and forest{" "}
            <Badge ms="5vw" className="bdg">
              61
            </Badge>
          </ListItem>
          <ListItem className="list">
            art and design{" "}
            <Badge className="bdg" ms="14vw">
              525
            </Badge>
          </ListItem>
          <ListItem className="list">
            beauty{" "}
            <Badge className="bdg" ms="18vw">
              7
            </Badge>
          </ListItem>
          <ListItem className="list">
            computer science{" "}
            <Badge className="bdg" ms="12vw">
              620
            </Badge>
          </ListItem>
          <ListItem className="list">
            construction transport
            <Badge ms="10vw" className="bdg">
              640
            </Badge>
          </ListItem>
          <ListItem className="list">
            Economics and legal{" "}
            <Badge ms="10vw" className="bdg">
              2870
            </Badge>
          </ListItem>
          <ListItem className="list">
            education and pedagogy{" "}
            <Badge ms="8vw" className="bdg">
              3617
            </Badge>
          </ListItem>
          <ListItem className="list">
            Health{" "}
            <Badge ms="18vw" className="bdg">
              982
            </Badge>
          </ListItem>
          <ListItem className="list">
            Hotel, gastronomy,tourism and events{" "}
            <Badge ms="1vw" className="bdg">
              77
            </Badge>
          </ListItem>

          <ListItem className="list">
            General{" "}
            <Badge className="bdg" ms="17.2vw">
              162
            </Badge>
          </ListItem>
          <ListItem className="list">
            Agriculture, animals and forest{" "}
            <Badge ms="5vw" className="bdg">
              61
            </Badge>
          </ListItem>
          <ListItem className="list">
            art and design{" "}
            <Badge className="bdg" ms="14vw">
              525
            </Badge>
          </ListItem>
          <ListItem className="list">
            beauty{" "}
            <Badge className="bdg" ms="18vw">
              7
            </Badge>
          </ListItem>
          <ListItem className="list">
            computer science{" "}
            <Badge className="bdg" ms="12vw">
              620
            </Badge>
          </ListItem>
          <ListItem className="list">
            construction transport
            <Badge ms="10vw" className="bdg">
              640
            </Badge>
          </ListItem>
          <ListItem className="list">
            Economics and legal{" "}
            <Badge ms="10vw" className="bdg">
              2870
            </Badge>
          </ListItem>
          <ListItem className="list">
            education and pedagogy{" "}
            <Badge ms="8vw" className="bdg">
              3617
            </Badge>
          </ListItem>
          <ListItem className="list">
            Health{" "}
            <Badge ms="18vw" className="bdg">
              982
            </Badge>
          </ListItem>
          <ListItem className="list">
            Hotel, gastronomy,tourism and events{" "}
            <Badge ms="1vw" className="bdg">
              77
            </Badge>
          </ListItem>
        </OrderedList>
      </Box>
      <div className="head">
        <Flex id="head">
          <Text fontSize="3xl" className="heading">
            All 14684-Offers
          </Text>
          <Text fontSize="xl" className="filters">
            <i className="fas fa-angle-down"></i> Expand all Filters
          </Text>
        </Flex>
        <div className="options">
          <Popover>
            <PopoverTrigger>
              <Button className="pop">Training, Continuing Education</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button className="pop">Conclusion</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button className="pop">School Type</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button className="pop">School</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <br />
          <Popover>
            <PopoverTrigger>
              <Button className="pop">Implementation</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button className="pop">Conclusion</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button className="pop">Start</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <Button className="pop">End</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Checkbox colorScheme="red" className="check" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
                <Checkbox className="check" colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className="list">
          <Text fontSize="3xl" className="heading2">
            ABB Technikerschu
          </Text>
          <UnorderedList className="ul1">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
          <UnorderedList className="ul">
            <Flex>
              <ListItem className="lists1">
                Energy and Enviromental Technology Hf
              </ListItem>
              <ListItem className="lists">HF</ListItem>
              <ListItem className="lists">Baden</ListItem>
              <ListItem className="lists">15.10.23</ListItem>
              <Button className="listbtn" colorScheme="blue">
                Button
              </Button>
            </Flex>
          </UnorderedList>
        </div>
      </div>
    </Flex>
  );
}
