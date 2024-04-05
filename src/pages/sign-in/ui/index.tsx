import { Box, Center } from "@chakra-ui/react";
import { SignInForm } from "@/features";
import SignInPageBg from "@/assets/sign-in-page-bg.png";

export default function SignInPage() {
  return (
    <Box
      h="100vh"
      w="100%"
      bgImage={SignInPageBg}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Center w="100%" h="100vh" backdropFilter="blur(5px)">
        <SignInForm />
      </Center>
    </Box>
  );
}
