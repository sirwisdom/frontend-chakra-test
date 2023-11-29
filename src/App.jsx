import { useState } from "react";

import MobileCard from "./components/MobileCard/MobileCard";
import DesktopCard from "./components/DesktopCard/DesktopCard";
import { Button, HStack } from "@chakra-ui/react";

function App() {
  const [showMobile, setShowMobile] = useState(true);

  return (
    <>
      <HStack mb="2px" mt="2px">
        <Button
          variant="solid"
          colorScheme="teal"
          size="sm"
          onClick={() => setShowMobile(true)}
        >
          Show Mobile Card
        </Button>

        <Button
          variant="solid"
          colorScheme="teal"
          size="sm"
          onClick={() => setShowMobile(false)}
        >
          Show Desktop Card
        </Button>
      </HStack>
      {showMobile ? <MobileCard /> : <DesktopCard />}
    </>
  );
}

export default App;
