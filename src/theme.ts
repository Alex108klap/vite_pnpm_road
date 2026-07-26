import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    // 1. Физические токены (значения)
    tokens: {
      colors: {
        brand: {
          50: { value: "#e0f2fe" },    // Светлая подложка (голубая)
          200: { value: "#0051b3" },   // Темно-синий для текста в светлой теме
          500: { value: "#0070f3" },   // Ваш оригинальный синий
          600: { value: "#EFCC57" },   // Оригинальный желтый (убрали лишний FF)
          900: { value: "#0c4a6e" },   // Глубокий синий для темной темы
        },
      },
      fonts: {
        heading: { value: "'Inter Variable', sans-serif" },
        body: { value: "'Roboto Variable', sans-serif" },
        mono: { value: "'JetBrains Mono Variable', monospace" },
      },
      fontWeights: {
        monoDefault: { value: "750" },
      },
      // Переопределяем только то, что нужно изменить, 
      // но для безопасности лучше оставить дефолтные размеры Chakra v3 нетронутыми, 
      // если нет жесткой необходимости их сужать.
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
      },
    },
    
    // 2. Умные семантические токены (адаптация под темную/светлую тему)
    semanticTokens: {
      colors: {
        // Исправлено: Ссылка на СУЩЕСТВУЮЩИЙ токен colors.brand.200 взамен brand.100
        fg: {
          value: { _light: "{colors.brand.200}", _dark: "{colors.brand.600}" }
        },
        fgMuted: {
          value: { _light: "{colors.gray.400}", _dark: "{colors.gray.500}" } // Сделали чуть контрастнее для доступности (accessibility)
        },
        fa: {
          value: { _light: "{colors.gray.900}", _dark: "{colors.gray.50}" }
        },
        
        // Кастомные кнопки
        buttonkn: {
          value: { _light: "{colors.gray.400}", _dark: "{colors.blue.400}" }
        },
        buttonknText: {
          value: { _light: "{colors.black}", _dark: "{colors.white}" }
        },
        
        // Новые семантические токены для брендированных блоков
        brandBg: {
          value: { _light: "{colors.brand.50}", _dark: "{colors.brand.900}" }
        },
        brandBorder: {
          value: { _light: "{colors.brand.500}", _dark: "{colors.brand.600}" }
        },
        
        // Блок фонов (bg)
        bg: {
          brand: {
            value: { _light: "{colors.blue.100}", _dark: "{colors.yellow.900}" }
          },
          card: {
            value: { _light: "{colors.yellow.100}", _dark: "{colors.gray.700}" }
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.800}" } // Сделали более нейтральным, зеленый в dark-mode выглядел бы специфично
          },
          mycard: {
            value: { _light: "{colors.gray.200}", _dark: "{colors.gray.600}" }
          },
        }
      }
    }
  }
})

export const system = createSystem(defaultConfig, customConfig)