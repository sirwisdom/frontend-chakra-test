import {
  Text,
  HStack,
  Box,
  VStack,
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import savings from "../../assets/savings.png";
import expense from "../../assets/expense.png";
import { GRAY_TEXT_COLOR } from "../../utils/colors";
const CategoryBreakdown = () => {
  const categories = [
    {
      title: "Food & Drink",
      icon: expense,
      totalAmount: "42,000",
      spentAmount: "20,000",
      percent: 40,
      color: "#C89104",
      bgColor: "#F4E9CD",
    },
    {
      title: "Savings",
      icon: savings,
      totalAmount: "24,000",
      spentAmount: "10,000",
      percent: 20,
      color: "#038A39",
      bgColor: "#038A3933",
    },
  ];
  return (
    <Box mb="8px">
      {categories.map((item, idx) => {
        return (
          <HStack
            key={item.title}
            alignItems="center"
            justifyContent="space-between"
            mb="10px"
          >
            <HStack>
              <Box
                width={46}
                height={46}
                borderRadius="50%"
                p={5}
                // background={item.bgColor}
                margin="2px auto"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <CircularProgress
                  value={45}
                  size="46px"
                  thickness="5px"
                  trackColor="#ffffff"
                  color={item.color}
                  capIsRound
                >
                  <CircularProgressLabel
                    background={item.bgColor}
                    borderRadius="50%"
                    border="none"
                    width="81%"
                    height="81%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{
                        objectFit: "contain",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
              <VStack alignItems="flex-start" spacing="0">
                <Heading
                  as="h2"
                  color="#000000"
                  fontSize="14px"
                  fontWeight={500}
                >
                  {item.title}
                </Heading>
                <Text color={"#707480"}>{item.percent}%</Text>
              </VStack>
            </HStack>
            <HStack justifyContent="center" spacing={0} mb="20px">
              <Text fontSize="16px" fontWeight={500} color="#000000">
                &#8358;{item.totalAmount}
              </Text>
              <Text fontSize="16px" color={GRAY_TEXT_COLOR} fontWeight={500}>
                /&#8358;{item.spentAmount}
              </Text>
            </HStack>
          </HStack>
        );
      })}
    </Box>
  );
};

export default CategoryBreakdown;
