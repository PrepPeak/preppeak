import { useMutation, useQuery } from "react-query";
import { request } from "@/shared";
import {
  Box,
  Button,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: profile, isLoading } = useQuery("profile", () =>
    request.get("/profile/").then((res) => res.data),
  );

  const { mutate } = useMutation(() =>
    request.put("/profile/", {
      full_name: fullName,
      email: email,
      phone,
      goal_points: goalPoints,
    }),
  );

  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [goalPoints, setGoalPoints] = useState(70);
  console.log(profile);

  const onSubmit = () => {
    mutate();
  };

  useEffect(() => {
    if (profile) {
      setFullName(profile?.full_name);
      setEmail(profile?.email);
      setPhone(profile?.phone);
      setGoalPoints(profile?.goal_points);
    }
  }, [profile]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Box mt="12px" w={{ base: "100%", md: "300px" }}>
        <Text>Полное Имя</Text>
        <Input
          w={{ base: "100%", md: "300px" }}
          mt="6px"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value as any);
          }}
        />
        <Text mt="12px">Телефон</Text>
        <Input
          w={{ base: "100%", md: "300px" }}
          mt="6px"
          value={phone}
          type="tel"
          onChange={(e) => {
            setPhone(e.target.value as any);
          }}
        />
        <Text mt="12px">Email</Text>
        <Input
          w={{ base: "100%", md: "300px" }}
          mt="6px"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value as any);
          }}
        />
        <Text mt="12px">Желаемые баллы</Text>
        <Slider
          mt="42px"
          aria-label="slider-ex-6"
          onChange={(val) => setGoalPoints(val)}
          max={140}
          w={{ base: "100%", md: "300px" }}
        >
          <SliderMark
            value={goalPoints}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
            borderRadius="12px"
          >
            {goalPoints}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Button mt="24px" onClick={onSubmit}>
        Сохранить
      </Button>
    </>
  );
};

export default ProfilePage;
