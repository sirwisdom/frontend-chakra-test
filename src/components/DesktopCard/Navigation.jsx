import { useState } from "react";
import { Text, HStack, Box } from "@chakra-ui/react";
import budget from "../../assets/budget.png";
import chat from "../../assets/chat.png";
import profile from "../../assets/profile.png";
import report from "../../assets/report.png";
import home from "../../assets/home.png";
const Navigation = () => {
  const [activeId, setActiveId] = useState(3);
  const NavItems = [
    {
      title: "Home",
      icon: home,
    },
    {
      title: "Reports",
      icon: report,
    },
    {
      title: "Chat",
      icon: chat,
    },
    {
      title: "Budget",
      icon: budget,
    },
    {
      title: "Profile",
      icon: profile,
    },
  ];
  return (
    <HStack justifyContent="space-between">
      {NavItems.map((item, idx) => {
        return (
          <Box
            key={item.title}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              style={{
                objectFit: "contain",
                width: "18px",
                height: "18px",
              }}
            />
            <Text
              fontSize="12px"
              fontWeight={500}
              color={idx === activeId ? "#000000" : "#707480"}
            >
              {item.title}
            </Text>
          </Box>
        );
      })}
    </HStack>
  );
};

export default Navigation;
