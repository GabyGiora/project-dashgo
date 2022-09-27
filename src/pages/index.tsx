import { Button, Flex, Stack } from "@chakra-ui/react" // Deixa a div com Display Flex
import { Input } from "../components/Form/input"

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column"> 
        
         <Stack spacing="4"> {/*serve para quando formas criar uma pilha de elementos que precisam de espaçamentos entre eles */}

          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha"/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}



// <Flex as="form">  -> PARA A DIV SE TORNAR UM FORM 


/* Padding(p)="8" -> 2rem = 32px  

    rem -> px = x4 
    px -> rem = /4
*/


