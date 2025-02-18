import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import placeHolderImg from '../../assets/avatar_placeholder.svg'
export function Header(){
    const {signOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl}/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}