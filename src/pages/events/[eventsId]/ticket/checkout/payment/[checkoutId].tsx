import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Checkout() {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          alert("Time is up! Purchase canceled.");
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[4xl]">
            Payment
          </h1>
          <div className="mt-4 text-white ">
            Time left to complete purchase: <span className="text-orange-500 text-lg font-bold">{minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}</span>
          </div>
          <div className="mt-4 text-white">
            please complete your payment before :  <span className="text-orange-500 text-lg font-bold">{date.toDateString()} {date.toLocaleTimeString()}</span>
          </div>
        </div>
        <div className="w-1/2 flex-col items-center justify-items-center rounded-xl bg-white/10  p-5 align-middle">
          <div className="flex items-center justify-between bg-white px-5">
            <h3 className="mb-4 text-sm font-extrabold tracking-tight text-black ">
              BCA Virtual Account
            </h3>
            <Image
              src="/assets/BCA-logo.png"
              alt="GoPay"
              width={500}
              height={500}
              style={{
                width: "100px",
              }}
            />
          </div>
          <div className="flex items-center justify-between bg-white px-5">
           <div className="flex flex-col">
           <h3 className="mb-4 text-sm  tracking-tight text-black ">
              Virtual Account Number
            </h3>
            <h3 className="mb-4 text-sm font-extrabold tracking-tight text-black ">
              8808XXXXXXXX
              </h3>
           </div>
           <Image
                  src="/assets/copy-logo.svg"
                  alt="copy"
                  width={500}
                  height={500}
                  style={{
                    width: "20px",
                  }}
                />
          </div>
          <div className="flex items-center justify-between bg-white px-5">
           <div className="flex flex-col">
           <h3 className="mb-4 text-sm  tracking-tight text-black ">
              Total Payment
            </h3>
            <h3 className="mb-4 text-sm font-extrabold tracking-tight text-black ">
              Rp 3,000,000
              </h3>
           </div>
           <button>
           <Image
                  src="/assets/copy-logo.svg"
                  alt="copy"
                  width={500}
                  height={500}
                  style={{
                    width: "20px",
                  }}
                />
               
           </button>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 gap-4 my-5">
          <div className="tems-center grid justify-items-center rounded-xl bg-white/10 p-5">
            <h3 className="mb-4 text-xl font-extrabold tracking-tight text-white md:text-3xl">
              How To Pay
            </h3>
            <div className="mt-2 text-white">
              <h4 className="mb-2 font-bold">
                Payment Method: BCA Virtual Account
              </h4>
              <ol className="ml-5 list-decimal">
                <li className="mb-2">Go to BCA Mobile Banking or ATM.</li>
                <li className="mb-2">Choose "Virtual Account Payment".</li>
                <li className="mb-2">
                  Enter your Virtual Account number (e.g., 8808XXXXXXXX).
                </li>
                <li className="mb-2">
                  Confirm the payment details and amount.
                </li>
                <li className="mb-2">
                  Complete the payment and keep the receipt for reference.
                </li>
              </ol>
            </div>
          </div>
          <div className="tems-center col-span-2  grid justify-items-center rounded-xl bg-white/10 p-5 ">
            <h3 className="mb-4 text-xl font-extrabold  tracking-tight text-white md:text-3xl ">
              Purchase Details
            </h3>

            <table className="min-w-full table-auto bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Ticket Type</td>
                  <td className="border px-4 py-2">Cat 1</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Event Date</td>
                  <td className="border px-4 py-2">October 10, 2023</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Qty</td>
                  <td className="border px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Venue</td>
                  <td className="border px-4 py-2">
                    Jakarta Convention Center
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Seat Number</td>
                  <td className="border px-4 py-2">A-102 , A-103</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Price</td>
                  <td className="border px-4 py-2">Rp 1,500,000 (x2)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold">Total</td>
                  <td className="border px-4 py-2 font-bold">Rp 3,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}