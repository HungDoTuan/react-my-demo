import {useQueries} from 'react-query'
import { Button, ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

const fetchAlbum = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=5')
    return res.json()
}
const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return res.json()
}

const Post = () => { 
    const [render, setRender] = useState(null)
    const [toggle, setToggle] = useState(false)

    const [{data: albums}, {data: todos}] = useQueries([
        { queryKey: ['albums'], queryFn: fetchAlbum},
        { queryKey: ['todos'], queryFn: fetchTodos}
    ])

    const handleAlbums = () => {
        // hiển thị content của albums
        setRender( albums?.map(album => <h2>{album.id}-{album.title}</h2>))
        // chức năng toggle, ấn lần 1 hiện content của album, ấn lần 2 sẽ ẩn đi content
        setToggle(!toggle)
        if (toggle) {
            setRender('')
        }
    }

    const handleTodos = () => {
        // hiển thị content của todos
        setRender(todos?.map(todo => <h2>{todo.id}-{todo.title}</h2>))
        // chức năng toggle, ấn lần 1 hiện content của todos, ấn lần 2 sẽ ẩn đi content
        setToggle(!toggle)
        if (toggle) {
            setRender('')
        }       
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