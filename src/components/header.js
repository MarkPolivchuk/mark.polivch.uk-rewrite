import React from 'react'
import { Link } from 'gatsby'

import github from 'super-tiny-icons/images/svg/github.svg'
import linkedin from 'super-tiny-icons/images/svg/linkedin.svg'
import twitter from 'super-tiny-icons/images/svg/twitter.svg'

const NavLink = props => (
  <Link
    className="p-2 mx-2 text-lg font-medium uppercase text-gray-500 tracking-wider border-b-4 border-transparent"
    activeClassName="text-gray-600 border-gray-600"
    {...props}
  />
)

const Header = () => (
  <header className="py-4 flex flex-wrap">
    <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center text-center md:text-left">
      <Link
        to="/"
        className="inline-flex flex flex-col justify-center h-full py-2 mx-4 md:mr-8"
      >
        <h1 className="text-4xl font-bold-semibold text-black mb-0">
          Mark Polivchuk
        </h1>
        <p className="pt-0 text-lg text-gray-600 leading-none">
          Software Developer / Calgary, AB
        </p>
      </Link>
      <div className="py-4">
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/hobbies">Hobbies</NavLink>
      </div>
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
