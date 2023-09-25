"use client";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const LoginPage = () => {
  const router = useRouter();
  return (
    <main >
    <img className="pb-5" src="/images/hero1.png" alt="" />
    <section className="flex flex-col justify-center items-center text-center space-y-5">
    <h1 className="text-3xl border border-y-black w-[10rem] border-x-transparent ">LOGIN</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        fetch("http://localhost:4000/login", {
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
        <Form className="space-y-5 pb-[20rem]">
            <p>indtast dine oplysninger her:</p>
          <div className="border border-black">
            <Field name="email" type="text" />
          </div>
          <div className="border border-black">
            <Field name="password" type="password" />
          </div>
          <button className="bg-blue-500 w-[10rem] h-[2.5rem] text-white text-xl " type="submit">Log in</button>
          {status && <div className="bg-red-600 text-white p-8">{status}</div>}
        </Form>
      )}
    </Formik>
    </section>
    </main>
  );
};

export default LoginPage;
