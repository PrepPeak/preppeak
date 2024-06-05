import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { request } from "@/shared";

export const ChancesForm = () => {
  const [firstSub, setFirstSub] = useState("Первый предмет");
  const [secondSub, setSecondSub] = useState("Второй предмет");
  const [firstSpec, setFirstSpec] = useState("Первая специальность");
  const [secondSpec, setSecondSpec] = useState("Вторая специальность");
  const [thirdSpec, setThirdSpec] = useState("Третья специальность");
  const [fourthSpec, setFourthSpec] = useState("Четвертая специальность");
  const [sliderValue, setSliderValue] = useState(50);
  const [specArr, setSpecArr] = useState<number[]>([]);

  const { data: specialities } = useQuery("specialities", () =>
    request
      .get("/university/specialities/")
      .then((res) => res.data.specialities || []),
  );

  const { mutate, data: chances } = useMutation("chances", () =>
    request.post("/admissions/chances/", {
      grade: sliderValue,
      specialty_ids: specArr,
    }),
  );

  const addSpecToArray = (id: number) => {
    setSpecArr([...specArr, id]);
  };

  const onSubmit = () => {
    mutate();
    console.log(chances);
  };

  return (
    <>
      <Center
        w={{ base: "100%", md: "520px" }}
        bgColor="white"
        p="18px"
        borderRadius="12px"
        mt="24px"
        boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
        flexDir="column"
        alignItems="flex-start"
        gap="24px"
      >
        <Text textStyle="xl" fontWeight="semibold">
          Узнайте ваши шансы поступления!
        </Text>

        <Menu>
          <MenuButton as={Button} w="100%">
            {firstSub}
          </MenuButton>
          <MenuList w="100%">
            <MenuItem onClick={() => setFirstSub("Математика")}>
              Математика
            </MenuItem>
            <MenuItem>Физика</MenuItem>
            <MenuItem>Химия</MenuItem>
            <MenuItem>Биология</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} w="100%">
            {secondSub}
          </MenuButton>
          <MenuList w="100%">
            <MenuItem onClick={() => setSecondSub("Физика")}>Физика</MenuItem>
            <MenuItem>Информатика</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} w="100%" colorScheme="blue">
            {firstSpec}
          </MenuButton>
          <MenuList w="100%">
            {specialities?.map((item: any) => (
              <MenuItem
                onClick={() => {
                  setFirstSpec(item?.name);
                  addSpecToArray(item?.id);
                }}
              >
                {item?.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} w="100%" colorScheme="blue">
            {secondSpec}
          </MenuButton>
          <MenuList w="100%">
            {specialities?.map((item: any) => (
              <MenuItem
                onClick={() => {
                  setSecondSpec(item?.name);
                  addSpecToArray(item?.id);
                }}
              >
                {item?.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} w="100%" colorScheme="blue">
            {thirdSpec}
          </MenuButton>
          <MenuList w="100%">
            {specialities?.map((item: any) => (
              <MenuItem
                onClick={() => {
                  setThirdSpec(item?.name);
                  addSpecToArray(item?.id);
                }}
              >
                {item?.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} w="100%" colorScheme="blue">
            {fourthSpec}
          </MenuButton>
          <MenuList w="100%">
            {specialities?.map((item: any) => (
              <MenuItem
                onClick={() => {
                  setFourthSpec(item?.name);
                  addSpecToArray(item?.id);
                }}
              >
                {item?.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Slider
          mt="24px"
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
          max={140}
        >
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
            borderRadius="12px"
          >
            {sliderValue}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Button colorScheme="green" w="100%" onClick={onSubmit}>
          Узнать шансы
        </Button>
      </Center>

      {chances?.data ? (
        <Box mt="24px">
          <Text textStyle="xl" fontWeight="semibold">
            Шансы поступления: {chances?.data?.chance}%
          </Text>
          <Grid
            gap="20px"
            flexWrap="wrap"
            mt="32px"
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          >
            {chances?.data?.universities?.map((item: any) => (
              <Flex
                flexDir="column"
                bg="white"
                p="12px"
                borderRadius="12px"
                boxShadow="0 0 2px rgba(21,29,36,.08),0 2px 4px rgba(21,29,36,.08)"
                justifyContent="center"
              >
                <Center w="100%" justifyContent="flex-start" gap="12px">
                  <Image src={item?.logo} alt={item?.name} w="50px" h="50px" />
                  <Stack>
                    <Text textStyle="md" textColor="gray.900" fontWeight="bold">
                      {item?.name}
                    </Text>
                    <Text textStyle="sm" textColor="gray.500">
                      Код: {item?.code}
                    </Text>
                  </Stack>
                </Center>
              </Flex>
            ))}
          </Grid>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
