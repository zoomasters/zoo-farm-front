import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { useWalletModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'

function Header() {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)
  const navs = [
    { name: 'Home', to: '/' },
    { name: 'Why ZooMaster', to: '/' },
    { name: 'How we work', to: '/' },
    { name: 'Our mission', to: '/' },
    { name: 'Our Team', to: '/' },
  ]
  return (
    <>
      <Popover className="relative bg-primary">
        {({ open }) => (
          <>
            <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-18 py-0.5">
              <div className="flex justify-between items-center px-1 border-b-2 border-gray-100 py-3 lg:justify-start lg:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to="/">
                    <img src="/img/navbar-logo.svg" className="h-10 w-auto md:h-16" alt="logo" />
                  </Link>
                </div>
                <div className="-mr-2 -my-2 lg:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden lg:flex space-x-4">
                  {navs?.map((v) => {
                    return (
                      <Link
                        key={v.name}
                        to={v.to}
                        className="text-base font-medium text-white hover:text-primary hover:bg-white leading-none px-2.5 py-3 border hover:border-white border-transparent transform transition-all"
                      >
                        {v.name}
                      </Link>
                    )
                  })}
                  <button
                    onClick={account ? onPresentAccountModal : onPresentConnectModal}
                    type="submit"
                    className="text-base font-medium text-white hover:text-primary hover:bg-white leading-none px-2.5 py-3 border hover:border-white border-transparent transform transition-all"
                  >
                    {account ? 'Connected' : 'Connect'}
                  </button>
                </Popover.Group>
              </div>
            </div>
            <Transition
              show={open}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-1 pt-1.5 transition transform origin-top-right lg:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary divide-y-2 divide-gray-50">
                  <div className="pt-2 md:pt-1.5 pb-6 px-4 md:px-9">
                    <div className="flex items-center justify-between">
                      <Link to="/">
                        <img src="/img/navbar-logo.svg" className="h-10 w-auto" alt="logo" />
                      </Link>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-y-2">
                        {navs?.map((v) => {
                          return (
                            <Link
                              key={v.name}
                              to={v.to}
                              className="text-base font-medium text-white hover:text-primary hover:bg-white leading-none px-2.5 py-3 border hover:border-white border-transparent transform transition-all"
                            >
                              {v.name}
                            </Link>
                          )
                        })}
                        <button
                          onClick={account ? onPresentAccountModal : onPresentConnectModal}
                          type="submit"
                          className="text-base font-medium text-white hover:text-primary hover:bg-white leading-none px-2.5 py-3 border hover:border-white border-transparent transform transition-all"
                        >
                          {account ? 'Connected' : 'Connect'}
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}
export default Header
