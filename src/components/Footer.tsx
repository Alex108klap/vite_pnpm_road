import { useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Heading,
  Input,
  Button,
  Group
} from "@chakra-ui/react";
import { LinkButton } from "@/components/ui/link-button"
import { Field } from "@/components/ui/field";

// Импортируем нужные иконки
import { FaGithub, FaTelegram, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(`Вы подписались на рассылку: ${email}`);
    setEmail("");
  };
  
  return (
    <Box as="footer" bg="mutedBg" borderTopWidth="1px" borderColor="border.subtle" pt="12">
      <Container maxW="container.xl">
        {/* Верхняя часть: Сетка с навигацией и формой */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap="8" mb="8">
          <Stack gap="3" align="start">
            <Heading size="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
              О компании
            </Heading>
            <Text color="fg.muted" fontSize="sm">
              Мы создаем современные интерфейсы с использованием Vite, React и Chakra UI v3.
            </Text>
          </Stack>
          
          <Stack gap="3" align="start">
            <Heading size="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
              Навигация
            </Heading>
            <Link color="fg" href="#features" variant="underline" fontSize="sm">Возможности</Link>
            <Link color="fg" href="#pricing" variant="underline" fontSize="sm">Цены</Link>
            <Link color="fg" href="#contacts" variant="underline" fontSize="sm">Контакты</Link>
          </Stack>
          
          <Stack gap="3" align="start">
            <Heading size="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
              Юридическая информация
            </Heading>
            <Link color="fg" href="#privacy" variant="underline" fontSize="sm">Политика конфиденциальности</Link>
            <Link color="fg" href="#terms" variant="underline" fontSize="sm">Условия использования</Link>
          </Stack>
          
          <Stack gap="3" align="start">
            <Heading size="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
              Подписка на новости
            </Heading>
            <Text color="fg.muted" fontSize="sm">
              Получайте обновления и полезные материалы первыми.
            </Text>
            <form onSubmit={handleSubscribe} style={{ width: "100%" }}>
              <Field helperText="Мы никогда не делимся вашим email.">
                <Group attached width="100%">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg="bg.panel"
                    fontSize="sm"
                  />
                  <Button type="submit" colorPalette="blue" size="sm">
                    OK
                  </Button>
                </Group>
              </Field>
            </form>
          </Stack>
        </SimpleGrid>
        
        {/* Нижняя часть: Копирайт и ИКОНКИ СОЦСЕТЕЙ */}
        <Stack
          pt="6"
          borderTopWidth="1px"
          borderColor="border.subtle"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap="4"
        >
          <Text fontSize="xs" color="fg.subtle">
            &copy; {new Date().getFullYear()} МояКомпания. Все права защищены.
          </Text>
          
          {/* Горизонтальный ряд с кнопками-иконками */}
          <Stack direction="row" gap="2">
            
            {/* GitHub */}
            <LinkButton
              as="a"
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              variant="ghost"
              colorPalette="gray"
              size="sm"
            >
              <FaGithub />
            </LinkButton>
            
            {/* Telegram */}
            <LinkButton
              as="a"
              href="https://t.me"
              target="_blank"
              aria-label="Telegram"
              variant="ghost"
              colorPalette="gray"
              size="sm"
            >
              <FaTelegram />
            </LinkButton>
            
            {/* YouTube */}
            <LinkButton
              as="a"
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
              variant="ghost"
              colorPalette="gray"
              size="sm"
            >
              <FaYoutube />
            </LinkButton>
          
          </Stack>
        </Stack>
      
      </Container>
    </Box>
  );
};
