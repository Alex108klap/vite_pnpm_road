import { Checkbox as ChakraCheckbox } from "@chakra-ui/react"
import * as React from "react"

export interface CheckboxProps extends ChakraCheckbox.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.Ref<HTMLLabelElement>
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    // ВАЖНО: Мы забираем children, inputProps и rootRef,
    // а остальные свойства (включая checked и onCheckedChange)
    // уходят в ChakraCheckbox.Root, а НЕ на нативный инпут напрямую!
    const { children, inputProps, rootRef, ...rest } = props
    
    return (
      <ChakraCheckbox.Root ref={rootRef} {...rest}>
        <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
        <ChakraCheckbox.Control>
          <ChakraCheckbox.Indicator />
        </ChakraCheckbox.Control>
        {children && (
          <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    )
  },
)