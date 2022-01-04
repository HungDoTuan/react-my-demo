// import { Button, Input, ChakraProvider } from '@chakra-ui/react'
// import { useState } from 'react'
// import { useQuery, useMutation } from 'react-query'


// const fetchUsers = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     return res.json()
// }



// const AddData = () => {
//     const [name, setName] = useState('')

//     const { data } = useQuery(
//         'new-users-data', 
//         fetchUsers, 
//     )

//     // const { mutate } = useMutation(addName)

//     const handleSubmit = () => {
//         const newName = { name }
//         mutate(newName)

//         console.log(data)
//         setName('')
//     }
//     const handleChange = (e) => {
//         setName(e.target.value)
//     }

//     return (
//         <ChakraProvider>
//             <Input 
//             value={name}
//             onChange={handleChange}
//             mt={10}
//             variant='filled' 
//             w={300}
//             h={10}
//             placeholder='Enter your name...' />
            
//             <Button onClick={handleSubmit} ml={10}> Submit</Button>

//             {data?.map(user => {
//         return (
//           <div key={user.id}>
           
//               {user.id} {user.name}
            
//           </div>
//         )
//       })}
//         </ChakraProvider>
//     )
// }
// export default AddData