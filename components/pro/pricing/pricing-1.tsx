export default function SectionPricing1() {
  return (
    <section>
      <div className="bg-pink-500 min-h-[50vh] pt-16 pb-24 px-8">
        <div className="container mx-auto text-center">
          <p className="antialiased text-base leading-relaxed text-white font-medium opacity-70 mb-2">
            Pricing
          </p>
          <h2 className="antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-2">
            Pricing Plans
          </h2>
          <p className="antialiased text-xl font-normal leading-relaxed text-white opacity-70 mb-8">
            Simple, transparent pricing that grows with you. Try any plan free for
            30 days.
          </p>
          <div className="mx-auto">
            <div className="nav-tabs w-4/12 mx-auto">
              <nav>
                <ul role="tablist" className="tabs p-1" tab-panel="">
                  <li className="nav-item">
                    <a className="nav-link active mb-0 px-0 py-1" aria-selected="true" aria-controls="monthly" role="tab">Monthly Billing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0 px-0 py-1" aria-selected="false" aria-controls="annual" role="tab">Annual Billing</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 px-8 pb-16 -mt-32">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card p-8">
            <div className="card-header mx-auto">
              <div className="mb-8 inline-flex items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
                <p className="antialiased text-sm leading-normal mr-3 rounded-full bg-white py-px px-3 font-medium text-pink-500">
                  Basic Plan
                </p>
                <p className="antialiased text-sm leading-normal text-pink-500 font-medium">
                  Most Popular
                </p>
              </div>
              <h1 className="antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-2">$10/mth</h1>
              <p className="antialiased text-base leading-relaxed text-center">Our most popular plan</p>
            </div>
            <div className="card-body !p-0">
              <ul className="border-y border-blue-grey-50 py-6 flex flex-col gap-3 my-8">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Access to all basic features</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Basic reporting and analytics</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Up to 10 individual users</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>20GB individual data each user</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Basic chat and email support</p>
                </li>
              </ul>
            </div>
            <button className="button button-pink button-lg w-full" type="button">get started</button>
          </div>

          <div className="card p-8">
            <div className="card-header mx-auto">
              <div className="mb-8 inline-flex items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
                <p className="antialiased text-sm leading-normal mr-3 rounded-full bg-white py-px px-3 font-medium text-pink-500">
                  Basic Plan
                </p>
                <p className="antialiased text-sm leading-normal text-pink-500 font-medium">
                  Most Popular
                </p>
              </div>
              <h1 className="antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-2">$20/mth</h1>
              <p className="antialiased text-base leading-relaxed text-center">Our most popular plan</p>
            </div>
            <div className="card-body !p-0">
              <ul className="border-y border-blue-grey-50 py-6 flex flex-col gap-3 my-8">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Access to all basic features</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Basic reporting and analytics</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Up to 10 individual users</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>20GB individual data each user</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Basic chat and email support</p>
                </li>
              </ul>
            </div>
            <button className="button button-pink button-lg w-full" type="button">get started</button>
          </div>

          <div className="card p-8">
            <div className="card-header mx-auto">
              <div className="mb-8 inline-flex items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
                <p className="antialiased text-sm leading-normal mr-3 rounded-full bg-white py-px px-3 font-medium text-pink-500">
                  Basic Plan
                </p>
                <p className="antialiased text-sm leading-normal text-pink-500 font-medium">
                  Most Popular
                </p>
              </div>
              <h1 className="antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-2">$40/mth</h1>
              <p className="antialiased text-base leading-relaxed text-center">Our most popular plan</p>
            </div>
            <div className="card-body !p-0">
              <ul className="border-y border-blue-grey-50 py-6 flex flex-col gap-3 my-8">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Access to all basic features</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Basic reporting and analytics</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Up to 10 individual users</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>20GB individual data each user</p>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Basic chat and email support</p>
                </li>
              </ul>
            </div>
            <button className="button button-pink button-lg w-full" type="button">get started</button>
          </div>
        </div>
      </div>
    </section>
  )
}