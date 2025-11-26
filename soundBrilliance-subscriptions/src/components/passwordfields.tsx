"use client";

import { Field, Input } from "@chakra-ui/react";

export default function PasswordFields() {
    return (
        <>
            <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input
                    bg="white"
                    required
                    name="password"
                    type="password"
                    autoComplete="new-password"
                />
            </Field.Root>

            <Field.Root>
                <Field.Label>Confirm Password</Field.Label>
                <Input
                    bg="white"
                    required
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                />
            </Field.Root>
        </>
    );
}
