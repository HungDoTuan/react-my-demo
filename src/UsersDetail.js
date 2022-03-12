import { useQuery } from "react-query";
import { withRouter } from "react-router";

const UsersDetail = (props) => {
    console.log(props)
    let id = props.match.params.id

    const fetchDataUsers = async () =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return res.json()
    }
    const { data } = useQuery('users detail', fetchDataUsers)

    return (
    <div className="container">        
        <div>User's name: {data?.username}</div>
        <div>User's email: {data?.email} </div>
        <div>User's phone number: {data?.phone}</div>
    </div>

    )
}
export default withRouter(UsersDetail)