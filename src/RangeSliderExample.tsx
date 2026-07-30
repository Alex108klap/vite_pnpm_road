import { useState } from "react";
import { Slider, VStack, Box, HStack } from "@chakra-ui/react";

export function RangeSliderExample() {
  // Инициализируем массив с двумя значениями: [Минимум, Максимум]
  const [priceRange, setPriceRange] = useState([2000, 7000]);
  
  return (
    <Box maxW="500px" p="6" borderWidth="1px" borderRadius="lg">
      <Slider.Root
        value={priceRange}
        onValueChange={(details) => setPriceRange(details.value)}
        min={0}
        max={10000}
        step={500}
        colorPalette="purple"
      >
        <VStack align="stretch" gap="4">
          <Slider.Label fontWeight="semibold">Выбор цены (₽)</Slider.Label>
          
          <Slider.Control>
            <Slider.Track height="6px" borderRadius="full">
              <Slider.Range />
            </Slider.Track>
            
            {/* Первый ползунок (Левый) */}
            <Slider.Thumb index={0} boxSize="5" bg="white" boxShadow="md">
              <Slider.HiddenInput />
            </Slider.Thumb>
            
            {/* Второй ползунок (Правый) */}
            <Slider.Thumb index={1} boxSize="5" bg="white" boxShadow="md">
              <Slider.HiddenInput />
            </Slider.Thumb>
          </Slider.Control>
          
          <HStack justify="space-between" width="full">
            <Box fontSize="sm">От: <b>{priceRange[0]} ₽</b></Box>
            <Box fontSize="sm">До: <b>{priceRange[1]} ₽</b></Box>
          </HStack>
        </VStack>
      </Slider.Root>
    </Box>
  );
}
