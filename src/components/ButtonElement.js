import styled from 'styled-components'
import{Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 4px;
opacity: 0.9;
background: ${({ primary }) => (primary ? 'transparent' : 'transparent')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
color: ${({dark}) => (dark ? 'blue': '#010606')};
font-size : ${({fontBig}) => (fontBig ? '20px': '16px')};
outline: none;
border: none;
font-weight:100;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? `#fff` :'orange')}; ;
}
`

