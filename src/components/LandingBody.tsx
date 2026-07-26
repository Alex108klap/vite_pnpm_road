import { Container, Stack, Heading, Text, Button, SimpleGrid, Box, Icon } from "@chakra-ui/react";
import { Zap, Shield, Sparkles } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "Молниеносная скорость", desc: "Оптимизированный движок для мгновенного отклика." },
  { icon: Shield, title: "Абсолютная защита", desc: "Ваши данные шифруются по протоколу сквозного шифрования." },
  { icon: Sparkles, title: "Умный интерфейс", desc: "Минималистичный дизайн, не отвлекающий от важных задач." },
];

export const LandingBody = () => {
  return (
    <Box as="main" bg="bg" color="fg" py="12">
      {/* Hero Section */}
      <Container id="hero" maxW="4xl" py={{ base: "12", md: "14" }} textAlign="center">
        <Stack gap="6" align="center">
          {/* Исправлено: letterSpacing вместо tracking */}
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} fontWeight="extrabold" letterSpacing="tight">
            Управляйте проектами <Box as="span" color="blue.600">в один клик</Box>
          </Heading>
          {/* Исправлено: fontSize вместо size */}
          <Text fontSize="lg" color="fg.muted" maxW="2xl">
            Современная экосистема для команд, ценящих скорость и минимализм. Автоматизируйте рутину и фокусируйтесь на результате.
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} gap="4" width={{ base: "full", sm: "auto" }} pt="4">
            <Button colorPalette="blue" size="lg" px="8">
              Попробовать бесплатно
            </Button>
            <Button variant="outline" size="lg" px="8">
              Узнать больше
            </Button>
          </Stack>
        </Stack>
      </Container>
      
      {/* Features Section */}
      <Box id="features" borderTopWidth="1px" borderColor="border.muted" bg="mutedBg" py={{ base: "12", md: "14" }}>
        <Container maxW="6xl">
          <Heading size="xl" textAlign="center" mb="12" fontWeight="bold">
            Почему выбирают нас
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
            {FEATURES.map((feat, idx) => (
              <Stack
                key={idx}
                bg="bg"
                p="6"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="border.muted"
                gap="4"
              >
                <Box bg="blue.50" color="blue.600" p="3" borderRadius="md" w="fit-content">
                  <Icon size="md"><feat.icon /></Icon>
                </Box>
                <Heading size="sm" fontWeight="bold">{feat.title}</Heading>
                <Text color="fg.muted" fontSize="sm">{feat.desc}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};
