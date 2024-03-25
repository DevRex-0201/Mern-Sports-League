import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <header>
                <nav className="flex items-center justify-between px-8 py-4">
                    <Link className="flex gap-x-[10px] items-center" to="#">
                        <img className="w-[40px] h-[auto]" src="./image/logo.png" />
                        <div className="text-[20px] font-bold uppercase">
                            <span className="">league</span>
                            <span className="text-[#7ACBC7]">.systems</span>
                        </div>
                    </Link>
                    <div>
                        <ul className="text-[20px] font-bold text-[#2F1C6A] flex capitalize gap-x-[30px]">
                            <li className="p-2">
                                <Link to="#">Start</Link>
                            </li>
                            <li className="p-2">
                                <Link to="#">Contact</Link>
                            </li>
                            <li className="p-2">
                                <Link to="#">Pricing</Link>
                            </li>
                            <li className="p-2">
                                <Link to="#">English</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-x-[20px] text-[20px] text-white">
                        <button className="py-2 px-8 bg-[#F64D2B] rounded-[30px]">Join a league</button>
                        <button className="py-2 px-6 bg-[#353535] rounded-[30px]">Login</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header