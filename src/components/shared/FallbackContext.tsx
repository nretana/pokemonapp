import { Navigate } from 'react-router-dom';

export const FallbackContent = () => {
    return(<Navigate to='/internal-server-error' />)
}