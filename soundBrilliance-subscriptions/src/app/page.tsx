"use client";

import { SubmitButton } from '@/devlink/SubmitButton';
import { SoundbrillianceLogo } from "@/devlink/SoundbrillianceLogo";
import { createEnterpriseUser } from "./actions";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import {
    Checkbox,
    Field,
    Fieldset,
    Input,
    Stack,
    Text,
    Container
} from "@chakra-ui/react";

const PasswordFields = dynamic(
    () => import("@/components/passwordfields"),
    { ssr: false }
);

export default function Page() {
    const [error, setError] = useState<string | null>(null);

    // On server action error, Next passes it into "formState"
    async function handleAction(formData: FormData) {
        const result = await createEnterpriseUser(formData);
        if (result?.error) setError(result.error);
    }

    return (
        <Container height="100%" width="100%" fluid pt="3rem" pb="3rem" centerContent>
            <SoundbrillianceLogo />

            {/* ✔ Form submits directly to server action */}
            <form action={handleAction} autoComplete="new-password">
                <Fieldset.Root mt="2rem" w="20rem" size="lg" maxW="2xl">
                    <Stack textAlign="center">
                        <Fieldset.Legend color="black">
                            Create an Account
                        </Fieldset.Legend>
                    </Stack>

                    <Fieldset.Content>
                        <Field.Root>
                            <Field.Label>Access Code</Field.Label>
                            <Input bg="white" required name="accessCode" type="number" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Name</Field.Label>
                            <Input bg="white" required name="name" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Input bg="white" required name="email" type="email" />
                        </Field.Root>

                        <PasswordFields />

                        <Checkbox.Root required name="termsAgreement">
                            <Checkbox.HiddenInput />
                            <Checkbox.Control bg="white" />
                            <Checkbox.Label>
                                I accept terms and conditions
                            </Checkbox.Label>
                        </Checkbox.Root>
                    </Fieldset.Content>

                    <SubmitButton />

                    {error && (
                        <Text color="#F4576A" mt="1rem">
                            Error: {error}
                        </Text>
                    )}
                </Fieldset.Root>
            </form>
        </Container>
    );
}
