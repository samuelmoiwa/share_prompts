import Image from 'next/image'
import logo from '/public/images/logo.svg'
export default function NavBar() {

  return(
    <div className='w-full flex justify-center items-center '>
      <div className='flex flex-row justify-between items-center w-10/12 h-20'>
        <div className='flex flex-row justify-center items-center'>
          <Image src={logo}
                alt='logo'
                width={60}
                height={60}
                priority
          />
          <h3 className='text-black sm:text-2xl text-1'>
            Promptopia
          </h3>
        </div>
        <button
          className='bg-black hover:bg-gray-900 sm:w-40 w-28 py-3
                    rounded-3xl sm:text-xl text-1'
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
