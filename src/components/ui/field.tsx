import { Box, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

export interface FieldProps {
  label?: React.ReactNode;
  errorText?: React.ReactNode;
  helperText?: React.ReactNode;
  invalid?: boolean;
  children?: React.ReactNode;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field({ label, errorText, helperText, invalid, children }, ref) {
    return (
      <Stack gap="1.5" width="full" ref={ref}>
        {label && (
          <Text fontSize="sm" fontWeight="medium" color="fg">
            {label}
          </Text>
        )}
        <Box>{children}</Box>
        {invalid && errorText && (
          <Text fontSize="sm" color="red.500">
            {errorText}
          </Text>
        )}
        {!invalid && helperText && (
          <Text fontSize="xs" color="fg.muted">
            {helperText}
          </Text>
        )}
      </Stack>
    );
  }
);