import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
    const { onOpen } = useSidebarDrawer()


    const isWideVersion = useBreakpointValue({  // Nome e E-mail visível somente se passar do tamanho lg
        base: false, // por padrão não estão visíveis 
        lg: true,   // quando for large vão estar
    })

    return (
        <Flex
            as="header"  
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24" 
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}

            <Logo/>
            
            {isWideVersion && <SearchBox/>} 

            <Flex align="center" ml="auto">
                <NotificationsNav/>
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    );

}