import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    return (
      <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=900&t=st=1683155007~exp=1683155607~hmac=db0b124bcef59c1603bba55b42d88973943f54a1fbdd395efc3e80a64a6759f3" alt="" />
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    )
  };
  

export default Error;