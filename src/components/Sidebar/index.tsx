import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue} from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";


import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer()


    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}> 
                <DrawerOverlay>                                                     {/* Dx a tela mais escura pra sidebar receber o focus */}
                    <DrawerContent bg="gray.800" p="4">                             {/* Aqui é onde vai ficar o todo conteúdo da sidebar  */}
                        <DrawerCloseButton mt="6"/>                                 {/* Aqui é o botão para quando for fechar a side bar  */}

                        <DrawerHeader>Navegação</DrawerHeader>                      {/* Aqui é um título que vai ficar dentro da sidebar  */}
                        
                        <DrawerBody>                                                {/* Aqui é onde vai ficar todos os itens de navegação */}
                            <SidebarNav/>  
                        </DrawerBody>
                    
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box as="aside" w="64" mr="8">
            <SidebarNav/>
        </Box>
    );
}