import { Box, Center } from "@chakra-ui/react";
import { RegistrationForm } from "@/features";
import SignInPageBg from "@/assets/sign-in-page-bg.png";

export default function RegisterPage() {
  return (
    <Box
      h="100vh"
      w="100%"
      bgImage={SignInPageBg}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Center w="100%" h="100vh" backdropFilter="blur(5px)">
        <RegistrationForm />
      </Center>
    </Box>
  );
}
