import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Button,
  Icon,
  Drawer as ChakraDrawer
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Преимущества", href: "#features" },
  { label: "Цены", href: "#pricing" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="10"
      bg="bg"
      borderBottomWidth="1px"
      borderColor="border.muted"
      py="4"
    >
      <Container maxW="6xl">
        <Flex justify="space-between" align="center">
          {/* Исправлено: Логотип теперь использует компонент Link для корректного href */}
          <Link href="#" variant="plain" _hover={{ textDecoration: "none" }}>
            <Heading size="md" fontWeight="bold" color="fg">
              ProductOS
            </Heading>
          </Link>
          
          {/* Десктопная навигация */}
          <Flex as="nav" gap="8" align="center" display={{ base: "none", md: "flex" }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                color="fg.muted"
                _hover={{ color: "fg" }}
                fontWeight="medium"
              >
                {item.label}
              </Link>
            ))}
            <Button colorPalette="blue" size="sm">
              Начать работу
            </Button>
          </Flex>
          
          {/* Мобильная кнопка бургера */}
          <Box display={{ base: "block", md: "none" }}>
            {/* Исправлено: placement="end" вместо "right" */}
            <ChakraDrawer.Root
              open={isOpen}
              onOpenChange={(e) => setIsOpen(e.open)}
              placement="end"
            >
              <ChakraDrawer.Trigger asChild>
                <Button variant="ghost" size="sm" aria-label="Открыть меню">
                  <Icon size="md" color="fg">
                    <Menu />
                  </Icon>
                </Button>
              </ChakraDrawer.Trigger>
              
              <ChakraDrawer.Backdrop />
              
              <ChakraDrawer.Content bg="bg" p="6" h="100dvh" w="280px" position="fixed" insetInlineEnd="0" top="0">
                <Flex justify="space-between" align="center" mb="8">
                  <Heading size="sm" color="fg">Меню</Heading>
                  <ChakraDrawer.CloseTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Icon size="md" color="fg"><X /></Icon>
                    </Button>
                  </ChakraDrawer.CloseTrigger>
                </Flex>
                
                <ChakraDrawer.Body p="0">
                  <Flex direction="column" gap="6">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        color="fg"
                        fontSize="lg"
                        fontWeight="semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button colorPalette="blue" w="full" mt="4">
                      Начать работу
                    </Button>
                  </Flex>
                </ChakraDrawer.Body>
              </ChakraDrawer.Content>
            </ChakraDrawer.Root>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
