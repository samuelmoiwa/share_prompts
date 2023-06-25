import Image from 'next/image'
import main_bg from '/public/images/main-bg.png'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <div className="
      min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${main_bg.src})` }}
    >
      < NavBar />
      <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 sm:w-full w-screen max-w-5xl font-montserrat text-sm lg:flex
          flex flex-col justify-center items-center px-6"
        >
          <h1 className='text-gray-900 font-extrabold sm:text-7xl text-3xl text-center'>
            Discover & Share <br />
            <span
              className='bg-gradient-to-r from-yellow-500 via-orange-600
              to-yellow-300 bg-clip-text font-extrabold
              text-transparent '
            >
              AI-Powered Prompts
            </span>
          </h1>
          <p class="mt-8  sm:text-xl text-base sm:leading-relaxed text-gray-600 text-center">
            Promptopia is an open-source AI prompting tool for modern world to < br />
            discover, create and share creative prompts
          </p>
          <input
            type="text"
            placeholder="Search for a tag or a surname"
            className="
            bg-white border border-gray-300 px-4 py-2 rounded-md
            shadow-lg shadow-gray-400 shadow-opacity-70
            mt-20 w-10/12 h-14 focus:border-yellow-500 text-gray-500 text-base"
          />
        </div>
      </main>
    </div>
  )
}
