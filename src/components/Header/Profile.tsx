import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gaby Cordova Giora</Text>
                    <Text color="gray.300" fontSize="small">gabriellygiora12@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="gaby cordova" src="https://github.com/GabyGiora.png"></Avatar>
        </Flex>
    );
}