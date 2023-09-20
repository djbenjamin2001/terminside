import Navigation from "./Navigation";
const Header = () => {
    return (
        <>
        <header className="flex items-center justify-evenly">
            <div className="flex items-center">
        <img src="/images/Logo.png" alt="" />
    <p className="text-[1.5rem]">4 -7. juli 2022</p>
    </div>
    <Navigation/>
    </header>
   
        </>
      );
}
 
export default Header;