import React from "react";

const Main = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#f3f4f6] mt-60 z-10">
        <div className="container px-40 py-24 mx-auto">
          <div className="flex flex-col justify-start items-start mb-20">
            <h1 className="sm:text-3xl lg:text-4xl font-medium title-font text-gray-900 mb-4">
              Why choose Easybank?
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
              We leverage Open Banking to turn your bank account into your financial hub. <br />
              Control your finances like never before.
            </p>
          </div>



          <div className="flex flex-row flex-wrap sm:-m-4 -mb-10 -mt-4 md:space-y-0">



            <div className="p-4 md:w-1/4 flex flex-col items-start">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
               <img src="/images/icon-online.svg" alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Online Banking
                </h2>
                <p className="leading-relaxed text-base">
                  Our modern web and mobile applications allow you to keep tract of Your
                  finances wherever you are in the world.
                </p>
                
              </div>
            </div>



            <div className="p-4 md:w-1/4 flex flex-col items-start">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src="/images/icon-budgeting.svg" alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Simple Budgeting
                </h2>
                <p className="leading-relaxed text-base">
                  See exactly where your money goes each month. Receive notifications
                  when you're close to hitting your limits.
                </p>
                
              </div>
            </div>



            <div className="p-4 md:w-1/4 flex flex-col items-start">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src="/images/icon-onboarding.svg" alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Fast Onboarding
                </h2>
                <p className="leading-relaxed text-base">
                  We don't do branches. Open your account in minutes online and start
                  taking control of your finances right away.
                </p>
                
              </div>
            </div>


            <div className="p-4 md:w-1/4 flex flex-col items-start">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src="/images/icon-api.svg" alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Open API
                </h2>
                <p className="leading-relaxed text-base">
                  Manage your savings, investments, pension, and much more from one account.
                  Tracking your money has never been easier.
                </p>
                
              </div>
            </div>


          </div>
      
        </div>
      </section>
    </div>
  );
};

export default Main;
