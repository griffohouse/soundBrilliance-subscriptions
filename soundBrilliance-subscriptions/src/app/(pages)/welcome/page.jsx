import { redirect } from 'next/navigation'

import { stripe } from '../../lib/stripe'
import { Center } from "@chakra-ui/react";
import { SoundbrillianceLogo } from "@/devlink/SoundbrillianceLogo";
import { SbApp } from "@/devlink/SbApp";
import { AppleDownload } from "@/devlink/AppleDownload";
import { GoogleDownload } from "@/devlink/GoogleDownload";
import { WebAccessDownload } from "@/devlink/WebAccessDownload";

import {Link, Text, VStack, Container, Span, HStack} from "@chakra-ui/react";
import {getEnterpriseUser} from "../../actions/getuser";

export default async function Welcome({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        customer_details: { email: customerEmail , name: customerName}
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })
    const cookies = await (await import('next/headers')).cookies()
    const stripeCustomerId = cookies.get("stripe_customer_id")?.value
    const enterpriseUser = await getEnterpriseUser(stripeCustomerId)
    const clientName = enterpriseUser.client_name;
    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        return (
            <Container height={'100%'} width={'100%'} fluid={true} paddingTop={'3rem'} paddingBottom={'3rem'} centerContent={true}>
                <VStack textAlign={'center'} gap={'2.5rem'} width={'100%'}>
                    <Center>
                        <SoundbrillianceLogo></SoundbrillianceLogo>
                    </Center>
                    <Text maxWidth={'24rem'} textStyle={'lg'}>
                        <Span fontWeight={'bold'}>{customerName}</Span>
                        ,{''} your account with <Span fontWeight={'bold'}>{clientName}</Span> is created and your <Span fontWeight={'bold'}>subscription is
                        active. </Span>
                    </Text>
                    <Text maxWidth={'24rem'} textStyle={'lg'}>
                        Use the links below to <Span fontWeight={'bold'}>access and login to the app</Span>
                    </Text>
                    <div style={{width: '15rem', height: '15rem'}}>
                        <SbApp />
                    </div>
                    <HStack gap={'1.7rem'}>
                        <AppleDownload />
                        <GoogleDownload />
                        <WebAccessDownload />
                    </HStack>
                    <Text maxWidth={'24rem'} textStyle={'lg'}>
                        Contact <Link fontWeight={'bold'} color={'black'}
                                      href="mailto:support@soundbrilliance.com">support@soundbrilliance.com</Link> for
                        any questions.
                    </Text>
                </VStack>
            </Container>
        )
    }
}