import { useState } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch"; // Импортируем ваш сниппет

export const NotificationSettings = () => {
  // 1. Создаем состояние. TypeScript автоматически поймет, что это boolean.
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState<boolean>(false);
  
  // 2. Функция-обработчик изменения состояния
  // Тип аргумента "details" берется из спецификации Chakra UI v3
  const handleSwitchChange = (details: { checked: boolean }) => {
    setIsNotificationsEnabled(details.checked);
    
    // Здесь можно вызывать API, делать логи или отправлять аналитику
    console.log("Новый статус уведомлений:", details.checked);
  };
  
  return (
    <Box p="6" borderWidth="1px" borderRadius="lg" maxW="md">
      <Stack gap="4">
        <Text fontSize="lg" fontWeight="bold">
          Настройки профиля
        </Text>
        
        {/* 3. Передаем состояние и обработчик в сниппет Switch */}
        <Switch
          colorPalette="blue"
          checked={isNotificationsEnabled}
          onCheckedChange={handleSwitchChange}
        >
          Включить уведомления
        </Switch>
        
        {/* Демонстрация зависимости интерфейса от состояния */}
        <Box
          p="3"
          borderRadius="md"
          bg={isNotificationsEnabled ? "green.solid" : "gray.muted"}
          color={isNotificationsEnabled ? "white" : "inherit"}
          transition="all 0.2s"
        >
          <Text fontSize="sm">
            {isNotificationsEnabled
              ? "🔔 Система готова отправлять вам push-уведомления."
              : "🔕 Уведомления отключены. Вы можете пропустить важные события."
            }
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
