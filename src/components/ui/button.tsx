import type { HTMLChakraProps } from "@chakra-ui/react"
import { chakra } from "@chakra-ui/react"
import * as React from "react"

export interface ButtonProps extends HTMLChakraProps<"button"> {
  loading?: boolean
  loadingText?: React.ReactNode
  colorPalette?: string
  variant?: "solid" | "subtle" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" // 👈 1. Добавляем типы для size
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    // 2. Достаем size из props и задаем дефолтное значение "md"
    const { loading, loadingText, children, colorPalette = "gray", variant = "solid", size = "md", ...rest } = props
    
    const getVariantStyles = () => {
      switch (variant) {
        case "subtle":
          return {
            bg: `${colorPalette}.100`,
            color: `${colorPalette}.800`,
            _hover: { bg: `${colorPalette}.200` },
          }
        case "outline":
          return {
            bg: "transparent",
            color: `${colorPalette}.600`,
            border: "1px solid",
            borderColor: `${colorPalette}.600`,
            _hover: { bg: `${colorPalette}.50` },
          }
        case "ghost":
          return {
            bg: "transparent",
            color: `${colorPalette}.600`,
            _hover: { bg: `${colorPalette}.50` },
          }
        case "solid":
        default:
          return {
            bg: `${colorPalette}.600`,
            color: "white",
            _hover: { bg: `${colorPalette}.700` },
          }
      }
    }
    
    // 3. Функция для динамических размеров вместо захардкоженных px/py
    const getSizeStyles = () => {
      switch (size) {
        case "sm":
          return { px: "3", py: "1.5", fontSize: "sm", borderRadius: "sm" }
        case "lg":
          return { px: "6", py: "3", fontSize: "lg", borderRadius: "lg" }
        case "md":
        default:
          return { px: "4", py: "2", fontSize: "md", borderRadius: "md" }
      }
    }
    
    return (
      <chakra.button
        ref={ref}
        fontWeight="medium"
        transition="all 0.2s"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        _active={{ transform: "scale(0.98)" }}
        {...getVariantStyles()}
        {...getSizeStyles()} // 👈 4. Применяем стили размера
        {...rest}
      >
        {loading ? (
          <>{loadingText || children}</>
        ) : (
          children
        )}
      </chakra.button>
    )
  },
)