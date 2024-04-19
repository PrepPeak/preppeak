import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  hours: number;
};

export const Timer = ({ hours }: Props) => {
  const [time, setTime] = useState(hours * 60 * 60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // Format time as HH:MM:SS
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Text fontStyle="xl" fontWeight="bold" color="gray.500">
      {formatTime()}
    </Text>
  );
};
