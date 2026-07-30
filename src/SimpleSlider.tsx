import { useState } from "react";
import { Slider, VStack, Box } from "@chakra-ui/react";

export function SimpleSlider() {
  // В v3 значения слайдера всегда обрабатываются как массив чисел
  const [value, setValue] = useState([40]);
  
  return (
    <Box maxW="400px" p="6" borderWidth="1px" borderRadius="lg">
      <Slider.Root
        value={value}
        onValueChange={(details) => setValue(details.value)}
        min={0}
        max={100}
        step={1}
        colorPalette="teal" // Изменение цвета в v3 через универсальный colorPalette
      >
        <VStack align="stretch" gap="2">
          <Box display="flex" justifyContent="space-between">
            <Slider.Label fontWeight="medium">Громкость</Slider.Label>
            <Slider.ValueText fontWeight="bold">{value[0]}%</Slider.ValueText>
          </Box>
          
          <Slider.Control>
            <Slider.Track bg="gray.200">
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
          </Slider.Control>
        </VStack>
      </Slider.Root>
    </Box>
  );
}
