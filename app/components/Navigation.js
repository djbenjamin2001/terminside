"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
const Navigation = () => {
  const [token, setToken] = useState();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    setToken(getCookie("token"));
  }, [pathname, searchParams]);
  const handleLogout = () => {
    deleteCookie("token");
    router.push("login");
  };
    return ( 
       <nav className="text-lg space-x-4">
        <Link href="/">Forside</Link> &nbsp;
        <Link href="events">Events</Link>&nbsp;
        <Link href="/">Camps</Link>&nbsp;
        <Link href="billeter">Biletter</Link>&nbsp;
        <Link href="praktiskinfo">Praktisk info</Link>&nbsp;
       {token &&  <Link href="/">Mit program</Link>}
        {token ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <Link href="login">Login</Link>
      )}
       </nav>
     );
}
 
export default Navigation;