import React from 'react'
import { Link } from 'gatsby'

import github from 'super-tiny-icons/images/svg/github.svg'
import linkedin from 'super-tiny-icons/images/svg/linkedin.svg'
import twitter from 'super-tiny-icons/images/svg/twitter.svg'

const Header = () => (
  <header className="py-8 bg-green-500 flex flex-wrap">
    <div className="w-full md:w-3/4 text-center md:text-left">
      <Link to="/" className="flex flex-col justify-center h-full py-2">
        <h1 className="text-4xl text-black mb-0">Mark Polivchuk</h1>
        <p className="text-darker pt-0 text-lg font-thin leading-normal">
          Software Developer / Calgary, AB
        </p>
      </Link>
    </div>
    <div className="w-full md:w-1/4 text-center md:text-left">
      <div className="flex justify-center md:justify-end items-center h-full py-4">
        <a
          href="https://github.com/MarkPolivchuk"
          target="_blank"
          rel="noopener noreferrer"
          alt="Github"
          className="text-red-500"
        >
          <img
            src={github}
            className="h-8 w-8 rounded-full mx-2 fill-current"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-polivchuk-72165873/"
          target="_blank"
          rel="noopener noreferrer"
          alt="LinkedIn"
        >
          <img
            src={linkedin}
            className="h-8 w-8 rounded-full mx-2 fill-current"
          />
        </a>
        <a
          href="https://twitter.com/MarkPolivchuk"
          target="_blank"
          rel="noopener noreferrer"
          alt="Twitter"
        >
          <img
            src={twitter}
            className="h-8 w-8 rounded-full mx-2 fill-current"
          />
        </a>
      </div>
    </div>
  </header>
)

export default Header
