import { useState } from "react";
import { Slider, Box } from "@chakra-ui/react";

export function DiscreteSlider() {
  const [value, setValue] = useState([50]);
  
  return (
    <Box maxW="400px" p="8">
      <Slider.Root
        value={value}
        onValueChange={(d) => setValue(d.value)}
        step={25} // Шаг в 25 единиц
        min={0}
        max={100}
      >
        <Slider.Control mb="4">
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.HiddenInput />
          </Slider.Thumb>
          
          {/* Группа маркеров внутри Control */}
          <Slider.MarkerGroup>
            <Slider.Marker value={0}>0%</Slider.Marker>
            <Slider.Marker value={25}>25</Slider.Marker>
            <Slider.Marker value={50}>50</Slider.Marker>
            <Slider.Marker value={75}>75</Slider.Marker>
            <Slider.Marker value={100}>100%</Slider.Marker>
          </Slider.MarkerGroup>
        </Slider.Control>
      </Slider.Root>
    </Box>
  );
}
