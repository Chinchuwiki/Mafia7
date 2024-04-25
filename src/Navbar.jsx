import logoM7 from '/M7-icon.png'
import './Navbar.css';

function Navbar() {

    return (
        <>
            <nav class="navbar fixed-top bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logoM7} alt="Bootstrap" width="70" height="50" />
                        MAFIA 7
                    </a>

                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;