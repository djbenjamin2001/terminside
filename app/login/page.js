"use client";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const LoginPage = () => {
  const router = useRouter();
  return (
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
        <Form>
          <div>
            <label htmlFor="email"> Email:</label>
            <Field name="email" type="text" />
          </div>
          <div>
            <label htmlFor="email"> Password:</label>
            <Field name="password" type="password" />
          </div>
          <button type="submit">Log in</button>
          {status && <div className="bg-red-600 text-white p-8">{status}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
