import Link from "next/link"
import Image from "next/image"
export default function Navbar()
{
    return (
        <nav>
            <Link href="/" className="Logo"><Image className="pic" alt="logo" src="/R.png" width={100} height={100}/></Link>    
            <div className="Logo2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            </div>
        </nav>

    )   
}