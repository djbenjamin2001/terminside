import Link from "next/link";

const Navigation = () => {
    return ( 
       <nav className="text-lg space-x-4">
        <Link href="/">Forside</Link> &nbsp;
        <Link href="/">Events</Link>&nbsp;
        <Link href="/">Camps</Link>&nbsp;
        <Link href="/">Biletter</Link>&nbsp;
        <Link href="/">Praktisk info</Link>&nbsp;
        <Link href="/">Log in</Link>
       </nav>
     );
}
 
export default Navigation;