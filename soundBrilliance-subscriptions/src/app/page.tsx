"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEnterpriseUser } from "@/app/actions/createuser";
import dynamic from "next/dynamic";
import {
    Container, Stack, Fieldset, Field, Input, Checkbox, Text, Button
} from "@chakra-ui/react";
import { SoundbrillianceLogo } from "@/devlink/SoundbrillianceLogo";

const PasswordFields = dynamic(() => import("@/components/passwordfields"), { ssr: false });

export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleAction(formData: FormData) {
        setError(null);
        setLoading(true);

        const result = await createEnterpriseUser(formData);

        setLoading(false);

        if (result?.error) {
            setError(result.error);
            return;
        }

        // ✅ Set cookie client-side
        if (result?.stripe_customer_id) {
            document.cookie = `stripe_customer_id=${result.stripe_customer_id}; path=/`;
        }

        // ✅ Client-side redirect
        router.push("/checkout");
    }

    return (
        <Container height="100%" width="100%" fluid pt="3rem" pb="3rem" centerContent>
            <SoundbrillianceLogo />

            <form onSubmit={async e => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await handleAction(formData);
            }} autoComplete="new-password">

                <Fieldset.Root mt="2rem" w="20rem" size="lg" maxW="2xl">
                    <Stack textAlign="center">
                        <Fieldset.Legend color="black">Create an Account</Fieldset.Legend>
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
                            <Checkbox.Label>I accept terms and conditions</Checkbox.Label>
                        </Checkbox.Root>
                    </Fieldset.Content>

                    <Button
                        type="submit"
                        paddingTop=".75rem"
                        paddingBottom=".75rem"
                        paddingRight="1.5rem"
                        paddingLeft="1.5rem"
                        borderRadius={"10rem"}
                        width="100%"
                        mt="1.5rem"
                        bg="black"
                        border="2px black solid"
                        color="#FBF5E5"
                        _hover={{ bg: "#FBF5E5", color: "black" }}
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </Button>

                    {error && (
                        <Text color="#F4576A" mt="1rem">{error}</Text>
                    )}
                </Fieldset.Root>
            </form>
        </Container>
    );
}
