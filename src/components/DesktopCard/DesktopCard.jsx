import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  HStack,
  Badge,
  Box,
  Tabs,
  Tab,
  TabList,
  TabIndicator,
  CircularProgress,
  CircularProgressLabel,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import {
  GRAY_TEXT_COLOR,
  LIGHT_BLUE_TEXT,
  PRIMARY_BLUE_TEXT,
} from "../../utils/colors";
import Navigation from "./Navigation";
import CategoryBreakdown from "./CategoryBreakdown";

const tabs = ["Last Month", "This Month"];
const DesktopCard = () => {
  return (
    <div>
      <Card minW="600">
        <CardBody>
          <HStack
            marginBottom={"10px"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading as="h1" fontSize="28px" fontWeight={700} textAlign="left">
              Budget
            </Heading>
            <HStack>
              <Badge
                color="#0466C8"
                borderRadius="50%"
                width="20px"
                height="20px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                p="1"
                background="#0466C833"
              >
                &#8358;
              </Badge>
              &npsp;
              <Text
                fontSize={"14px"}
                color={GRAY_TEXT_COLOR}
                fontWeight={400}
                textAlign={"left"}
              >
                Monthly Budget
              </Text>
            </HStack>
          </HStack>
          <Box
            w="100%"
            marginBottom="12px"
            boxShadow="md"
            pt="4"
            pb="4"
            pl="2"
            rounded="md"
            bg="white"
          >
            <Heading as="h1" fontSize="28px" fontWeight={700} textAlign="left">
              &#8358;120,000
            </Heading>
          </Box>
          <HStack justifyContent="space-between" mb="2">
            <Tabs defaultIndex={1} marginBottom="10px" variant="unstyled">
              <TabList>
                {tabs.map((item) => (
                  <Tab key={item} _selected={{ color: PRIMARY_BLUE_TEXT }}>
                    {item}
                  </Tab>
                ))}
              </TabList>
              <TabIndicator
                height="2px"
                bg="blue.500"
                borderRadius="1px"
                w="30px"
                ml="15px"
                maxW="30px"
              />
            </Tabs>
            <MdOutlineMoreHoriz
              style={{
                cursor: "pointer",
                fontSize: "18px",
              }}
            />
          </HStack>
          <HStack justifyContent="space-between" alignItems="flex-start">
            <VStack>
              <Box
                width={150}
                height={150}
                borderRadius="50%"
                p={5}
                background={LIGHT_BLUE_TEXT}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <CircularProgress
                  value={49}
                  size="150px"
                  thickness="5px"
                  //   background="#ffffff"
                  trackColor="#ffffff"
                  color={PRIMARY_BLUE_TEXT}
                  capIsRound
                >
                  <CircularProgressLabel
                    fontSize="36px"
                    fontWeight={700}
                    color={PRIMARY_BLUE_TEXT}
                    background="#ffffff"
                    borderRadius="50%"
                    border="none"
                    width="81%"
                    height="81%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    49%
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
              <Stack mt="1" spacing="1">
                <Heading
                  size="md"
                  color={GRAY_TEXT_COLOR}
                  fontSize="14px"
                  fontWeight={400}
                  textAlign="center"
                >
                  Amount spent so far
                </Heading>
                <HStack justifyContent="center" spacing={0} mb="20px">
                  <Text fontSize="16px" color={PRIMARY_BLUE_TEXT}>
                    &#8358;50,000
                  </Text>
                  <Text fontSize="16px" color={LIGHT_BLUE_TEXT}>
                    /&#8358;120,000
                  </Text>
                </HStack>
              </Stack>
            </VStack>
            <Box width="100%" ml="12px">
              <Text fontSize="21px" fontWeight={500} textAlign="left" mb="10px">
                Category Breakdown
              </Text>
              <CategoryBreakdown />
            </Box>
          </HStack>

          {/* <Navigation /> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default DesktopCard;
