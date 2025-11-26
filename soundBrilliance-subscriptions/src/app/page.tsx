"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createEnterpriseUser } from "./actions/createuser";
import dynamic from "next/dynamic";
import {
    Checkbox,
    Field,
    Fieldset,
    Input,
    Stack,
    Text,
    Container,
} from "@chakra-ui/react";
import { SoundbrillianceLogo } from "@/devlink/SoundbrillianceLogo";

const PasswordFields = dynamic(
    () => import("@/components/passwordfields"),
    { ssr: false }
);

// Submit button that uses form status
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            style={{
                width: "100%",
                padding: "0.75rem 1.5rem",
                borderRadius: "2rem",
                background: pending ? "#999" : "black",
                color: "#FBF5E5",
                cursor: pending ? "not-allowed" : "pointer",
                border: "2px solid black",
                marginTop: "1.5rem",
            }}
        >
            {pending ? "Creating Account..." : "Create Account"}
        </button>
    );
}

export default function Page() {
    const [state, formAction] = useFormState(createEnterpriseUser, {
        error: null,
    });

    return (
        <Container
            height="100%"
            width="100%"
            fluid
            pt="3rem"
            pb="3rem"
            centerContent
        >
            <SoundbrillianceLogo />

            <form action={formAction} autoComplete="new-password">
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

                    {state.error && (
                        <Text color="#F4576A" mt="1rem">
                            Error: {state.error}
                        </Text>
                    )}
                </Fieldset.Root>
            </form>
        </Container>
    );
}
