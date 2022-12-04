import {NavLink} from "react-router-dom";

export default function Navigation() {
    return ( 
        <div>
            <NavLink to="/angebote" end>
                Angebote
            </NavLink>
            <NavLink to="/kontakte" >
                Kontakt
            </NavLink>
        </div>
     );
}


