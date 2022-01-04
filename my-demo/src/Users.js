import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { withRouter } from "react-router";
import { Button, Input, ChakraProvider } from "@chakra-ui/react";
import axios from "axios"

const fetchUsers = async (pageNumber) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=2&_page=${pageNumber}`)
    return res.json()
}

const addName = (name) => {
    return axios.post('https://jsonplaceholder.typicode.com/users', name)
}

 const Users = (props) => {
    const [ pageNumber, setPageNumber] = useState(1)
    const [ newData, setNewData ] = useState('')

    const {data, isError, isLoading, error, refetch} = useQuery(
        ['users', pageNumber],
         () => fetchUsers(pageNumber)
         )

    // thực hiện pagination  
    const handleBack = () => {
        setPageNumber( pageNumber - 1)
    }
    const handleNext = () => {
        setPageNumber( pageNumber + 1)
    }

    // thực hiện add thêm data vào dữ liệu sẵn có 
    const { mutate } = useMutation(addName)

    const handleSubmit = () => {
        const data = {newData}
        mutate(data)
    }
    return (
        
        <ChakraProvider>
            <Input
            value={newData}
            onChange={e => setNewData(e.target.value)} 
            w={300} 
            mt={20} />
            <Button
            onClick={handleSubmit} 
            ml={10}
            >Submit</Button>

            {isLoading ? <h2>Loading...</h2> : ''}
            {isError ? <h2>{error.message}</h2> : ''}

            {data?.map(
                 user =><h2 onClick={() => props.history.push(`/users/${user.id}`)} key={user.id}>{user.name}</h2>
            )}

            <Button onClick={handleBack} disabled={pageNumber === 1}>Previous Page</Button>
            <Button onClick={handleNext} disabled={pageNumber === 5} ml={5}>Next Page</Button>
        </ChakraProvider>
        
    )
}
export default withRouter(Users)