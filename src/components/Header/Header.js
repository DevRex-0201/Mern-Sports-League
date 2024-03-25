import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <header>
                <nav className="flex">
                    <Link to="#" />
                    <div>
                        <ul className="flex">
                            <li>start</li>
                            <li>contact</li>
                            <li>pricing</li>
                            <li>english</li>
                        </ul>
                    </div>
                    <div>
                        <button>join a league</button>
                        <button>login</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header