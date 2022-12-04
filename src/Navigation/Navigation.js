import styled from "styled-components";
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return ( 
        <StyledBox>
            <StyledNav to="/angebote" end>
                Angebote
            </StyledNav>
            <StyledNav to="/kontakte" >
                Kontakt
            </StyledNav>
        </StyledBox>
     );
}
const StyledBox= styled.div`
margin: 20px;

`

const StyledNav= styled(NavLink)`
border: 1px solid black;
margin:10px;
padding:5px;
border-radius: 5px;
background-color: aliceblue;
text-decoration:none;
&.active{background-color:red;
}
`


