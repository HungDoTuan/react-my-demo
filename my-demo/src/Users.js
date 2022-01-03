import { useState } from "react";
import { useQuery } from "react-query";
import { withRouter } from "react-router";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';

const fetchUsers = async (pageNumber) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=2&_page=${pageNumber}`)
    return res.json()
}

 const Users = (props) => {
    const [ pageNumber, setPageNumber] = useState(1)

    const {data, isError, isLoading, error} = useQuery(
        ['users', pageNumber],
         () => fetchUsers(pageNumber)
         )

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    const handleBack = () => {
        setPageNumber( pageNumber - 1)
    }
    const handleNext = () => {
        setPageNumber( pageNumber + 1)
    }
    return (
        
        <ChakraProvider>
        {data?.map(
            user =><h2 onClick={() => props.history.push(`/users/${user.id}`)} key={user.id}>{user.name}</h2>)}
        <Button onClick={handleBack} disabled={pageNumber === 1}>Previous Page</Button>
        <Button onClick={handleNext} disabled={pageNumber === 5} ml={5}>Next Page</Button>
        </ChakraProvider>
        
    )
}
export default withRouter(Users)