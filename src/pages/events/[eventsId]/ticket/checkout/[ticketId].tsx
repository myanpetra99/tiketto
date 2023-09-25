import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { format } from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function Checkout() {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateString, setDateString] = useState<string>("");
  const [showPicker, setShowPicker] = useState(false);
  const [qty, setQty] = useState<number>(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tickets = [
    {
      id: 1,
      name: "Cat 1",
      price: 100000,
      qty: 100,
      color: "yellow",
      outOfStock: false,
    },
    {
      id: 2,
      name: "Cat 2",
      price: 80000,
      qty: 100,
      color: "green",
      outOfStock: false,
    },
    {
      id: 3,
      name: "Cat 3",
      price: 60000,
      qty: 100,
      color: "blue",
      outOfStock: true,
    },
    {
      id: 4,
      name: "Cat 4",
      price: 40000,
      qty: 100,
      color: "red",
      outOfStock: false,
    },
    {
      id: 5,
      name: "Cat 5",
      price: 20000,
      qty: 100,
      color: "purple",
      outOfStock: false,
    },
  ];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const increment = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    setQty((prevQty) => prevQty - 1);
  };

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const generateCalendar = (currentDate: Date) => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(month + 1, year);
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Fill the empty spaces until the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null); // null will represent an empty day in the calendar
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const previousMonth = () => {
    setCurrentDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1),
    );
  };

  const holidays = [
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      5,
    ) /*... other dates*/,
  ];

  const isHoliday = (date: Date) => {
    return holidays.some((h) => h.toDateString() === date.toDateString());
  };

  const isToday = (date: Date) => {
    return date.toDateString() === new Date().toDateString();
  };

  const handleDateChange = (date: Date) => {
    console.log("gg");
    setDate(date);
    setSelectedDate(date);
    toggleDatepicker();
  };

  const FormatDateToYYYMMDD = (date: Date) => {
    setDateString(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
  };

  useEffect(() => {
    FormatDateToYYYMMDD(date);
  }, [date]);

  const renderForms = () => {
    const forms = [];
    for (let i = 0; i < qty; i++) {
      forms.push(
        <div
          key={i}
          className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white"
          style={{ marginBottom: "20px" }} // Add margin to separate forms
        >
          <h3 className="text-xl font-bold  text-white md:text-3xl">Gender</h3>

          <div className="grid grid-cols-3">
            <div className="flex">
              <input name="chsex" id={`male${i}`} value="Male" type="radio" />
              <label htmlFor={`male${i}`}>Male</label>
            </div>
            <div className="flex">
              <input
                name="chsex"
                id={`female${i}`}
                value="Female"
                type="radio"
              />
              <label htmlFor={`female${i}`}>Female</label>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <h3 className="text-xl font-bold text-white">Full Name</h3>
          <input className="w-full rounded-md border-2 p-2 text-black hover:border-blue-200 focus:border-blue-400" />

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <h3 className="text-xl font-bold text-white">Email</h3>
          <input
            id={`email${i}`}
            type="email"
            className="w-full rounded-md border-2 p-2 text-black hover:border-blue-200 focus:border-blue-400"
          />

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <h3 className="text-xl font-bold text-white">Mobile Phone</h3>
          <div className="flex w-full items-center justify-end">
            <input
              id={`tel${i}`}
              type="number"
              className="w-full rounded-md border-2 p-2 text-black hover:border-blue-200 focus:border-blue-400"
            />
          </div>
        </div>,
      );
    }
    return forms;
  };

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
            Checkout Ticket
          </h1>
          <h2 className="text-white sm:text-[1em]">..Almost there</h2>
        </div>

        <div className="mt-8 grid w-full items-center justify-items-center rounded-xl bg-white/10 p-5 md:w-1/2">
          <div className="flex w-full flex-col items-center justify-center justify-items-center px-5">
            <h3 className="mb-4 text-xl font-extrabold  tracking-tight text-white md:text-3xl ">
              Date
            </h3>
            <div
              className="datepicker-container border-1 mb-10 flex w-1/2 rounded-md bg-gray-200  p-1"
              onClick={toggleDatepicker}
            >
              <div className="datepicker-input flex w-full flex-col bg-white p-2">
                <span className="text-slate-500">Choose Date</span>
                <span id="selectedDate">{dateString.toString()}</span>
              </div>
              <div
                className="datepicker-dropdown flex w-1/2 items-center justify-end bg-white p-2"
                id="datepicker"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="fas fa-check"
                  style={{ color: "gray" }}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div
              id="datepicker-popup"
              className={`${
                showPicker ? "block" : "hidden"
              } border-1 z-10  w-full rounded-md bg-white sm:absolute sm:w-1/2`}
            >
              <div
                id="datepicker-header"
                className="flex justify-between border-b p-2"
              >
                <span id="currentMonthYear">{`${currentDate.toLocaleString(
                  "default",
                  { month: "long" },
                )} ${currentDate.getFullYear()}`}</span>
                <div className="control-date">
                  <button
                    onClick={previousMonth}
                    className="w-10 text-gray-500"
                  >
                    {"<"}
                  </button>
                  <button onClick={nextMonth} className="w-10 text-gray-500">
                    {">"}
                  </button>
                </div>
              </div>
              <div id="datepicker-days" className="grid grid-cols-7 gap-2 p-2">
                {daysOfWeek.map((dayName) => (
                  <span key={dayName} className="text-center">
                    {dayName}
                  </span>
                ))}
                {generateCalendar(currentDate).map((date, idx) => (
                  <span
                    key={idx}
                    className={`text-center ${
                      date && isHoliday(date)
                        ? "cursor-not-allowed text-red-500"
                        : "cursor-pointer"
                    } ${
                      date &&
                      selectedDate &&
                      date.toDateString() === selectedDate.toDateString()
                        ? "bg-blue-400 text-white"
                        : ""
                    } rounded-full hover:bg-blue-100`}
                    onClick={() =>
                      date && isHoliday(date) ? "" : handleDateChange(date!)
                    }
                  >
                    <div className="flex h-11 flex-col items-center justify-center">
                      {date && isToday(date) ? (
                        <span
                          className={`absolute mb-8 text-xs ${
                            date &&
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                              ? "text-white"
                              : "text-blue-400"
                          }`}
                        >
                          Hari ini
                        </span>
                      ) : (
                        ""
                      )}
                      {date ? date.getDate() : ""}
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-1/2 flex-col items-center justify-center justify-items-center sm:flex-row">
            <div className="mt-3 flex w-full flex-col items-center justify-center justify-items-center text-lg text-black">
              <h3 className="mb-5 text-xl font-extrabold  tracking-tight text-white md:text-3xl">
                Ticket Type
              </h3>
              <button
                className="relative rounded-lg bg-yellow-500 px-8 py-4 text-xl font-bold text-white transition duration-150 ease-in-out hover:bg-yellow-600 focus:outline-none "
                onClick={toggleModal}
              >
                <div className="border-b-2 border-dashed "></div>
                Cat 1<div className="border-b-2 border-dashed"></div>
              </button>
            </div>
            <div className="mt-5  flex w-full flex-col items-center justify-center justify-items-center text-lg text-black">
              <h3 className=" text-xl font-extrabold  tracking-tight text-white md:text-3xl ">
                Quantity
              </h3>

              <div className="mt-4 flex w-full items-center justify-center sm:w-1/2 ">
                <button
                  disabled={qty && qty === 1}
                  className={`h-7 w-7 rounded-full border-2 border-blue-500 bg-white text-blue-500 ${
                    qty && qty === 1
                      ? "disabled cursor-not-allowed bg-gray-300"
                      : ""
                  } hover:bg-blue-500 hover:text-white`}
                  onClick={decrement}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 265 265"
                  >
                    <path
                      fill="#fff"
                      d="M64 9A55 55 0 1 0 64 119A55 55 0 1 0 64 9Z"
                      transform="rotate(-45.001 64 64.001)"
                    ></path>
                    <path
                      fill="#444b54"
                      d="M64,122c-14.9,0-29.7-5.7-41-17C0.4,82.4,0.4,45.6,23,23c22.6-22.6,59.4-22.6,82,0c0,0,0,0,0,0 c22.6,22.6,22.6,59.4,0,82C93.7,116.3,78.9,122,64,122z M64,12c-13.3,0-26.6,5.1-36.8,15.2C7,47.5,7,80.5,27.2,100.8 c20.3,20.3,53.3,20.3,73.5,0c20.3-20.3,20.3-53.3,0-73.5C90.6,17.1,77.3,12,64,12z"
                    ></path>
                    <rect
                      fill="#71c2ff"
                      x="45"
                      y="61"
                      width="38"
                      height="6"
                    ></rect>
                  </svg>
                </button>

                <input
                  type="number"
                  value={qty}
                  className="m-3 w-20 rounded-sm p-3"
                ></input>

                <button
                  disabled={qty && qty === 3}
                  className={`h-7 w-7 rounded-full border-2 border-blue-500 bg-white text-blue-500 ${
                    qty && qty === 3
                      ? "disabled cursor-not-allowed bg-gray-300"
                      : ""
                  } hover:bg-blue-500 hover:text-white`}
                  onClick={increment}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 265 265"
                  >
                    <path
                      fill="#fff"
                      d="M64 9A55 55 0 1 0 64 119A55 55 0 1 0 64 9Z"
                      transform="rotate(-45.001 64 64.001)"
                    ></path>
                    <path
                      fill="#444b54"
                      d="M64,122c-14.9,0-29.7-5.7-41-17C0.4,82.4,0.4,45.6,23,23c22.6-22.6,59.4-22.6,82,0c0,0,0,0,0,0 c22.6,22.6,22.6,59.4,0,82C93.7,116.3,78.9,122,64,122z M64,12c-13.3,0-26.6,5.1-36.8,15.2C7,47.5,7,80.5,27.2,100.8 c20.3,20.3,53.3,20.3,73.5,0c20.3-20.3,20.3-53.3,0-73.5C90.6,17.1,77.3,12,64,12z"
                    ></path>
                    <path
                      fill="#71c2ff"
                      d="M83,61H67V45c0-1.7-1.3-3-3-3s-3,1.3-3,3v16H45c-1.7,0-3,1.3-3,3s1.3,3,3,3h16v16c0,1.7,1.3,3,3,3s3-1.3,3-3 V67h16c1.7,0,3-1.3,3-3S84.7,61,83,61z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid w-full items-center justify-items-center rounded-xl bg-white/10 p-5 md:w-1/2">
          <h3 className="mb-4 text-xl font-extrabold  tracking-tight text-white md:text-3xl ">
            Details of Participant
          </h3>
          {renderForms()}
        </div>
        <button className="relative mt-5 rounded-lg bg-blue-400 p-5 text-white hover:bg-blue-600">
          Proceed →
        </button>
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          hidden={showModal}
          onClick={toggleModal}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Select Ticket
                      </h3>
                      <div className="mt-2">
    {tickets.map((ticket) => (
        <Link href="/home/events/live/1" key={ticket.id}>
            <button
                className={`relative rounded-lg bg-${ticket.color}-500 m-3 px-8 py-4 text-xl font-bold text-white transition duration-150 ease-in-out hover:bg-yellow-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300 position-relative`}
                disabled={ticket.outOfStock}
            >
                <div className="border-b-2 border-dashed"></div>
                {ticket.outOfStock && <span className="z-10 text-sm absolute transform -translate-x-1/2 text-red-500 font-bold rotate-[-17deg] bg-white border-2 border-red-500">Out Of Stock</span>}
                <p className="z-0">{ticket.name}</p>
                <div className="border-b-2 border-dashed"></div>
            </button>
        </Link>
    ))}
</div>

                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
