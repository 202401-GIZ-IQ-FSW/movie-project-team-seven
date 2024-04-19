import React from 'react'

function Footer() {
  return (
    <footer className='text-white mt-8 bg-gradient-to-t from-cyan-800 w-full border-t border-cyan-900 font-serif overflow-hidden'>
      <div className='m-5'>
        <h1 className='text-2xl lg:text-3xl mb-6 md:mb-0 font-semibold text-cyan-600'>Created By:</h1>
        <div className='flex flex-wrap justify-center items-center gap-10 py-6 px-5 sm:px-8'>
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
        </div>
        <div className="text-center text-[12px]">© 2024 <span className='text-cyan-400'>PHOENIX</span>. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer;
