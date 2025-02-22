import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn`t exist</p>
            <Link style={{'color': '#9F0013','display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}}
            to='/'>Back To Main Page</Link>
        </div>
    )
}

export default Page404;