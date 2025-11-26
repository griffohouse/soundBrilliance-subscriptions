import Checkout from '../../../components/checkout'
import { Container, VStack, Text, Center } from "@chakra-ui/react";
import { SoundbrillianceLogo } from "@/devlink/SoundbrillianceLogo";

export default function Page() {
    return (
        <Container height={'100%'} width={'100%'} fluid={true} paddingTop={'3rem'} paddingBottom={'3rem'} centerContent={true}>
            <VStack textAlign={'center'} gap={'2.5rem'} width={'100%'}>
                <Center>
                    <SoundbrillianceLogo></SoundbrillianceLogo>
                </Center>
                <Text color="black">
                    Setup Subscription
                </Text>
                <Container width={'600px'} backgroundColor={'white'} borderRadius={'1.5rem'}>
                    <Checkout/>
                </Container>
            </VStack>
        </Container>
    )
}