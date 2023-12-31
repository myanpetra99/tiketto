import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const checkBoxAction = () => {
    const checkBoxElement = document.querySelector("input[type=checkbox]")!;
    const button = document.querySelector("#regBtn")!;
  
    if ('checked' in checkBoxElement && checkBoxElement.checked) {
      if ('disabled' in button) {
        button.disabled = false;
      }
      button.classList.remove('opacity-50'); // Remove the opacity
      button.classList.remove('bg-gray-300');  // Remove the disabled background color
      button.classList.remove('cursor-not-allowed');  // R
      button.classList.add('hover:bg-white/20'); // Add hover effect
    } else {
      if ('disabled' in button) {
        button.disabled = true;
      }
      button.classList.add('opacity-50'); // Add the opacity
      button.classList.add('cursor-not-allowed');
      button.classList.add('bg-gray-300');  // Add the disabled background color
      button.classList.remove('hover:bg-white/20'); // Remove hover effect
    }
  };
  
  

  
  
  
  

  const revealPass = () => {
    const pass = document.querySelector("#password");
    const reveal = document.querySelector("#reveal")!;
    if (pass?.getAttribute("type") === "password") {
      pass.setAttribute("type", "text");
      reveal.innerHTML = "Hide";
      console.log("reveal");
    } else {
      pass?.setAttribute("type", "password");
      reveal.innerHTML = "Reveal";
      console.log("hide");
    }
  };
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[4rem]">
            Sign Up
          </h1>
          <h2 className="text-white">
            Let`s do quick registration, you hate long form, so do we!
          </h2>

          <div className="sm:w-fullx grid md:w-1/2 md:gap-8">
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
              <h3 className="text-xl font-bold">Email</h3>
              <input className="w-full rounded-md border-2 p-2 text-black hover:border-blue-200 focus:border-blue-400"></input>
              <h3 className="text-xl font-bold">Name</h3>
              <input className="w-full rounded-md border-2 p-2 text-black hover:border-blue-200 focus:border-blue-400"></input>
              <h3 className="text-xl font-bold">Password</h3>
              <div className="flex w-full items-center justify-end">
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-md border-2 p-2 text-black hover:border-blue-200 focus:border-blue-400"
                ></input>
                <button
                  id="reveal"
                  className="text-indigo absolute p-3 text-white bg-slate-500 opacity-20 hover:bg-slate-800"
                  onClick={revealPass}
                >
                  Reveal
                </button>
              </div>
              <div className="flex w-full items-center justify-start">
                <input type="checkbox" onChange={checkBoxAction}/>
                <p className="p-1">All the data above is correct and valid </p>
              </div>
              <button id="regBtn" disabled className="w-full hover:bg-white/20 disabled:bg-gray-300 opacity-50 cursor-not-allowed">Register</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
