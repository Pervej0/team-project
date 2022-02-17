import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'
// import Logo from "../../images/logo.webp";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <header className="header">
      <Disclosure as="nav" className="bg-red-700">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 py-1 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuAlt1Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to="/home">
                    <div className="flex-shrink-0 flex items-center">
                      {/* <img src={Logo} alt="" /> */}
                      <h2 className="text-3xl text-white italic">Blood</h2>
                    </div>
                  </Link>
                  <div className="hidden sm:block sm:ml-auto mt-3">
                    <div className="flex space-x-4 text-white font-medium">
                      <NavLink to="/home">Home</NavLink>

                      <NavLink to="/about">About</NavLink>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>

                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/tm2Vtv3/image.png"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-3 px-5 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <h2>{user.displayName}</h2>
                        </Menu.Item>
                        <Menu.Item>
                         <button
                         className="bg-gray-900 text-white px-10 py-1 rounded my-3" 
                         onClick={logOut}
                         >
                           Log Out
                         </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <NavLink to="/home">Home</NavLink>
                </div>

                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <NavLink to="/about">About</NavLink>
                </div>
                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <NavLink to="/contact">Contact Us</NavLink>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
