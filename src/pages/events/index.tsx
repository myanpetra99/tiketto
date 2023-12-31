import Head from "next/head";
import Link from "next/link";
import { dummyEvents } from "~/events";

export default function Events() {
 

const ongoingEvent = dummyEvents[0]

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[4rem]">
            On Going
          </h1>
          {ongoingEvent && (<Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={`/events/${ongoingEvent.id}`}
            target="_blank"
          >
            <h3 className="text-2xl font-bold">{ongoingEvent.title}</h3>
            <div className="text-lg">{ongoingEvent.description}</div>
          </Link>)}
          
        </div>
        <div className="flex w-screen items-center justify-center">
          <div className="flex w-1/2 items-center justify-end">
            <input
              className="h-10 w-full rounded-full p-5"
              placeholder="Coldplay Ticket..."
            ></input>
            <button className="text-indigo absolute p-3">Search</button>
          </div>
        </div>

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[4rem]">
            Upcoming
          </h1>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-8">
            {dummyEvents.slice(1).map(event => (
              <Link
                key={event.id}
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href={`/events/${event.id}`}
                target="_blank"
              >
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <div className="text-lg">{event.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
