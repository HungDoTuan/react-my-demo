import {useQueries} from 'react-query'
import { Button, ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

const fetchAlbum = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    return res.json()
}
const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return res.json()
}

const Post = () => { 
    const [ render, setRender] = useState(null)

    const [{data: albums}, {data: todos}] = useQueries([
        { queryKey: ['albums'], queryFn: fetchAlbum},
        { queryKey: ['todos'], queryFn: fetchTodos}
    ])
    console.log(albums)
    const handleAlbums = () => {
        setRender( albums?.map(album => <h2>{album.id}-{album.title}</h2>))
    }

    const handleTodos = () => {
        setRender(todos?.map(todo => <h2>{todo.id}-{todo.title}</h2>))       
    }
    return (
        <ChakraProvider>

        <Button 
        onClick={handleAlbums} 
        mt={10}
        >Albums
        </Button>

        <Button 
        onClick={handleTodos} 
        mt={10}
        ml={10}
        >Todos
        </Button>
        
        {render}
        </ChakraProvider>
    )
}
export default Post