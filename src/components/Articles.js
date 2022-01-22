import React from "react";

const Articles = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto px-40 py-24">
        <h1 className=" text-4xl pb-7">Latest Articles</h1>
          <div className="flex flex-wrap -m-4">

            

            
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/image-currency.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    By Claire Robinson
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Receive money in any currency with no fees
                  </h1>
                  <p className="leading-relaxed ">
                    The world is getting smaller and we're becoming more mobile.
                    so why should you be forced to only receive money in a single...
                  </p>
                </div>
              </div>
            </div>




            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/image-restaurant.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    By Wilson Hutton
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Treat yourself without worrying about money
                  </h1>
                  <p className="leading-relaxed ">
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you...
                  </p>
                </div>
              </div>
            </div>




            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/image-plane.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    By Wilson Hutton
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Take your Easybank card wherever you go
                  </h1>
                  <p className="leading-relaxed ">
                    We want you to enjoy your travels. This is why we don't charge any
                    fees on purchases while you're abroad. We'll even show you...
                  </p>
                </div>
              </div>
            </div>




            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/image-confetti.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    By Claire Robinson
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Our invite-only Beta accounts are now live!
                  </h1>
                  <p className="leading-relaxed ">
                    After a lot of hard work by the whole team, we're excited to launch
                    our closed beta. It's easy to request an invite through the site...
                  </p>
                </div>
              </div>
            </div>







           





          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
