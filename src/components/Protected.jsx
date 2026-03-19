import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({children}) => {

    const isAuthenticated = false;
    const navigate = useNavigate();
    const data = localStorage.getItem('Name')

    useEffect(() => {
        if(!data.exist) navigate('/login')
    }, [])

  return (
    children
  )
}

export default Protected
