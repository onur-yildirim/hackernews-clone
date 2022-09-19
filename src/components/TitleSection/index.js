import { Link, useLocation } from 'react-router-dom';
import ListToggle from 'components/ListToggle'
import { Title, Logo } from './styles'

const LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/2048px-Y_Combinator_logo.svg.png'

export default function TitleSection() {
    let { pathname } = useLocation();
    return (
        <div>
            <Link to='/'>
                <Logo src={LOGO_URL} />
                <Title>Hacker News</Title>
            </Link>
            {pathname === '/' ? <ListToggle /> : ''}
        </div>
    )
}