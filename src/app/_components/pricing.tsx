export const Pricing = () => {
    return (
      <div className="sm:flex sm:flex-col sm:align-center p-10">
        <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
          <button
            type="button"
            className="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm"
          >
            Monthly billing
          </button>
          <button
            type="button"
            className="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900"
          >
            Yearly billing
          </button>
        </div>
        <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-xl leading-6 font-bold text-slate-900">
                Starter
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight">
                For new makers who want to fine-tune and test an idea.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                  $0
                </span>
                <span className="text-base font-medium text-slate-500">
                  /mo
                </span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
              >
                Join as a Starter
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                What&apos;s included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {[
                  "1 landing page included",
                  "1,000 visits/mo",
                  "Access to all UI blocks",
                  "50 conversion actions included",
                  "5% payment commission",
                  "Real-time analytics",
                ].map((item, index) => (
                  <li className="flex space-x-3" key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-xl leading-6 font-bold text-slate-900">
                Superio
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight">
                For new makers who want to fine-tune and test an idea.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                  $10
                </span>
                <span className="text-base font-medium text-slate-500">
                  /mo
                </span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
              >
                Join as a Starter
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                What&apos;s included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {[
                  "1 landing page included",
                  "1,000 visits/mo",
                  "Access to all UI blocks",
                  "50 conversion actions included",
                  "5% payment commission",
                  "Real-time analytics",
                ].map((item, index) => (
                  <li className="flex space-x-3" key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-xl leading-6 font-bold text-slate-900">
                Shipper
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight">
                For new makers who want to fine-tune and test an idea.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                  $20
                </span>
                <span className="text-base font-medium text-slate-500">
                  /mo
                </span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center"
              >
                Join as a Starter
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                What&apos;s included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {[
                  "1 landing page included",
                  "1,000 visits/mo",
                  "Access to all UI blocks",
                  "50 conversion actions included",
                  "5% payment commission",
                  "Real-time analytics",
                ].map((item, index) => (
                  <li className="flex space-x-3" key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-5 w-5 text-green-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Repeat similar structure for Superior and Shipper plans */}
        </div>
      </div>
    );
}