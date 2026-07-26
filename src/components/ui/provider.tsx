"use client"
import {ColorModeProvider, type ColorModeProviderProps,} from "./color-mode"
import  {system}  from "@/theme" // Импортируем вашу кастомную систему
import { ChakraProvider } from "@chakra-ui/react"


export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
