import { Link } from "react-router-dom";
import { Flex, List, UnorderedList, ChakraProvider } from '@chakra-ui/react'

const Navigation = () => {
    return (
            <ChakraProvider>
            <UnorderedList ml={0}>
                <Flex color='white' bg='crimson' direction='row' padding={5} >
                <List mr={10} >
                    <Link to='/'>Home</Link>
                </List>

                <List mr={10}>
                    <Link to='/users'>Users</Link>
                </List>

                <List mr={10}>
                    <Link to ='/products'>Products</Link>
                </List>

                <List mr={10}>
                    <Link to='/post'>Posts</Link>
                </List>

                </Flex>
            </UnorderedList>
            </ChakraProvider>
        
    )
}
export default Navigation