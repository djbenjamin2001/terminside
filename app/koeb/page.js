"use client";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useState } from "react";
const KoebPage = ({ searchParams: { billet, pris } }) => {
  const [antal, setAntal] = useState(1);
  const router = useRouter();
  console.log(billet);
  console.log(antal);

  const incrementAntal = () => {
    setAntal(antal + 1);
  };

  const decrementAntal = () => {
    if (antal > 1) {
      setAntal(antal - 1);
    }
  };
  return (
    <main>
      <img src="/images/Hero2.png" alt="" />
      <section className="flex flex-col justify-between items-center  p-5">
        <div className="bg-[#333] p-[1rem] w-[80rem]">
          <p className="text-white">INFORMATION OM DEN VALGTE BILLET</p>
        </div>
        <h1>{billet}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sunt
          ullam atque doloribus ipsum, architecto sit magnam nesciunt voluptates
          culpa? Suscipit quasi tempore, vitae inventore quos dolor obcaecati
          eius dolores odit magnam, id porro necessitatibus optio, hic explicabo
          mollitia voluptatum error pariatur commodi voluptas laboriosam odio
          perferendis facere. Consectetur, quasi? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. In sunt ullam atque doloribus ipsum,
          architecto sit magnam nesciunt voluptates culpa? Suscipit quasi
          tempore, vitae inventore quos dolor obcaecati eius dolores odit
          magnam, id porro necessitatibus optio, hic explicabo mollitia
          voluptatum error pariatur commodi voluptas laboriosam odio perferendis
          facere. Consectetur, quasi? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. In sunt ullam atque doloribus ipsum, architecto sit
          magnam nesciunt voluptates culpa? Suscipit quasi tempore, vitae
          inventore quos dolor obcaecati eius dolores odit magnam, id porro
          necessitatibus optio, hic explicabo mollitia voluptatum error pariatur
          commodi voluptas laboriosam odio perferendis facere. Consectetur,
          quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          sunt ullam atque doloribus ipsum, architecto sit magnam nesciunt
          voluptates culpa? Suscipit quasi tempore, vitae inventore quos dolor
          obcaecati eius dolores odit magnam, id porro necessitatibus optio, hic
          explicabo mollitia voluptatum error pariatur commodi voluptas
          laboriosam odio perferendis facere. Consectetur, quasi?
        </p>
      </section>
      <section className="flex flex-col justify-between items-center  p-5">
        <div className="bg-[#333] p-[1rem] w-[80rem]">
          <p className="text-white">BESTILLING</p>
        </div>
        <article className="flex gap-[20rem]  ">
          <div className="flex gap-4">
            <p>antal:</p>
            <button onClick={incrementAntal}>+</button>
            <h1>{antal}</h1>
            <button onClick={decrementAntal}>-</button>
          </div>
          <h1>{billet}</h1>
          <div className="flex gap-4">
            <h1>{pris}DKK</h1>
            <h1>total: {pris * antal}DKK</h1>
          </div>
        </article>
      </section>
      <Formik
        initialValues={{
          email: "",
          name: "",
          adress: "",
          ticketpickup: "",
          city: "",
          postnumber: "",
          password: "",
          confirmPassword: "",
          selectField: "",
        }}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          if (values.password !== values.confirmPassword) {
            setStatus("Password and confirm password do not match");
            setSubmitting(false);
            return;
          }
          fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              pris: pris * antal,
              antal,
              billet,
              city: values.city,
              postnumber: values.postnumber,
              adress: values.adress,
              ticketpickup:values.ticketpickup,
              selectField: values.selectField
            }),
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
          <Form className=" flex flex-col space-y-5  justify-between items-start max-w-6xl mx-auto p-5">
            <p>indtast dine oplysninger her:</p>
            <section className="flex gap-[35rem]">
              <article>
              <div className="border border-black">
                <label htmlFor="selectField">vælg en kamp</label>
                <Field as="select" name="selectField">
                  <option value="Camp colorit">Camp colorit</option>
                  <option value="Camp Kultunaut">Camp Kultunaut</option>
                  <option value="Camp De Luxe">Camp De Luxe</option>
                </Field>
              </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email:</label>
                  <Field
                    className="border border-black"
                    name="email"
                    type="text"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="password"> Password:</label>
                  <Field
                    className="border border-black"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <Field
                    className="border border-black"
                    name="confirmPassword"
                    type="password"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Navn:</label>
                  <Field
                    className="border border-black"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="adress">Adresse:</label>
                  <Field
                    className="border border-black"
                    name="adress"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="postnumber">Postnummer:</label>
                  <Field
                    className="border border-black"
                    name="postnumber"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city">By:</label>
                  <Field
                    className="border border-black"
                    name="city"
                    type="text"
                  />
                </div>

                {status && (
                  <div className="bg-red-600 text-white p-8">{status}</div>
                )}
              </article>
              <article>
                <div>
                  <label htmlFor="ticketpickup">Jeg ønsker billetterne tilsendt</label>
                  <Field name="ticketpickup" type="radio" value="true" />
                </div>
                <div>
                  <label htmlFor="ticketpickup">Jeg Printer Billeterne selv</label>
                  <Field name="ticketpickup" type="radio" value="false" />
                </div>
              </article>
            </section>
            <section className="flex justify-between">
              <button
                className="bg-blue-500  w-[10rem] h-[2.5rem] text-white text-xl "
                type="submit"
              >
                SEND
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default KoebPage;
