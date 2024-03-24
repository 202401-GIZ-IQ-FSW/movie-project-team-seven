import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-white'>
      <div className='sm:px-12 py-7 bg-black'>
        <h1 className='text-2xl lg:text-3xl mb-6 md:mb-0 font-semibold md:w-2/5 lg:leading-normal text-teal-400'>Created By:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center py-6 px-5 sm:px-8'>
          <div className='flex flex-col items-center'>
            <h3 className="text-lg font-semibold">Zainab Alnajjar</h3>
            <a href="https://github.com/Mizu4life" className="mt-4 block text-base leading-6 text-gray-300 hover:text-gray-700"><i className="fa-brands fa-github"></i> GitHup</a>
            <a href="https://www.linkedin.com/in/zainab-h-alnajjar-bb719b286/" className="mt-4 block text-base leading-6 text-gray-300 hover:text-blue-400"><i className="fa-brands fa-linkedin"></i> LinkidIn</a>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className="text-lg font-semibold">Ahmed Qarany</h3>
            <a href="https://github.com/ahmadqaranyfarhan" className="mt-4 block text-base leading-6 text-gray-300 hover:text-gray-700"><i className="fa-brands fa-github"></i> GitHup</a>
            <a href="https://www.linkedin.com/in/ahmad-qarany-farhan-72bb30229/" className="mt-4 block text-base leading-6 text-gray-300 hover:text-blue-400"><i className="fa-brands fa-linkedin"></i> LinkidIn</a>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className="text-lg font-semibold">Ara Kardo</h3>
            <a href="https://github.com/aramdeveloper1" className="mt-4 block text-base leading-6 text-gray-300 hover:text-gray-700"><i className="fa-brands fa-github"></i> GitHup</a>
            <a href="#" className="mt-4 block text-base leading-6 text-gray-300 hover:text-blue-400"><i className="fa-brands fa-linkedin"></i> LinkidIn</a>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className="text-lg font-semibold">Muhammad Sabah</h3>
            <a href="https://github.com/MuhammadSabah" className="mt-4 block text-base leading-6 text-gray-300 hover:text-gray-700"><i className="fa-brands fa-github"></i> GitHup</a>
            <a href="https://www.linkedin.com/in/muhammad-sabah-4791b7226/" className="mt-4 block text-base leading-6 text-gray-300 hover:text-blue-400"><i className="fa-brands fa-linkedin"></i> LinkidIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
