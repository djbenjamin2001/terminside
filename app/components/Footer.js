"use client"
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
const Footer = () => {
    const router = useRouter()
    return ( 
        
        <footer className="bg-black   flex justify-center  ">
            <img className="absolute" src="/images/footerbg.png" alt="" />
            <section className="relative flex flex-col items-center text-white">
            <p className="text-center m-4 text-2xl">Tilmeld Nyhedsbrev</p>
            <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        fetch("http://localhost:4000/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => {
            if (!res.ok) {
              setStatus(res.json());
              setSubmitting(false);
              
            } else {
              return res.json();
            }
          })
          .then((data) => {
            setCookie("token", data.accessToken, {
              sameSite: "lax",
              maxAge: 3600,
            });
            router.push("/");
          });
      }}
    >
      {({ status }) => (
        <Form className="flex" >
            <Field className="h-[2rem] text-black" name="email" type="text" />
          <button className="bg-blue-500 w-[10rem] h-[2rem] text-white text-xl " type="submit">TILMELD</button>
          {status && <div className="bg-red-600 text-white p-8">{status}</div>}
        </Form>
      )}
    </Formik>
            <img className="pt-5" src="/images/Hancock logo.png" alt="" />
            </section>
        
        </footer>
     );
}
 
export default Footer;