import React from "react";

const CustomerRewies = () => {
  return (
    <div className="lg:p-12 p-6 font-[sans-serif] bg-blue-50">
      <div className="max-w-6xl max-md:max-w-lg mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="text-gray-800 text-2xl font-extrabold">
              What our happy clients say
            </h2>
            <p className="text-sm text-gray-800 mt-4 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Elit occaecat officia et laboris
              Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>

          <div className="flex space-x-4 items-end justify-end">
            <div className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#333] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#fff] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-lg bg-white shadow-md">
            <div className="flex items-center">
              <img
                src="https://readymadeui.com/profile_2.webp"
                alt="John Doe"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-gray-800 text-sm font-extrabold">
                  John Doe
                </h4>
                <p className="mt-0.5 text-xs text-gray-400">Founder of Rubik</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>
            <div className="flex space-x-1 mt-4">
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md">
            <div className="flex items-center">
              <img
                src="https://readymadeui.com/profile_3.webp"
                alt="Mark Adair"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-gray-800 text-sm font-extrabold">
                  Mark Adair
                </h4>
                <p className="mt-0.5 text-xs text-gray-400">Founder of Alpha</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>
            <div className="flex space-x-1 mt-4">
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md">
            <div className="flex items-center">
              <img
                src="https://readymadeui.com/profile_4.webp"
                alt="Annabelle"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <h4 className="text-gray-800 text-sm font-extrabold">
                  Annabelle
                </h4>
                <p className="mt-0.5 text-xs text-gray-400">Founder of Beta</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-800 text-sm leading-relaxed">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>
            <div className="flex space-x-1 mt-4">
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#facc15]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRewies;
