/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { Link } from 'react-router-dom'
import { HiCheckCircle } from 'react-icons/hi'

const Home: React.FC = () => {
  const social = [
    {
      to: '/',
      src: '/img/reddit.svg',
    },
    {
      to: '/',
      src: '/img/github.svg',
    },
    {
      to: '/',
      src: '/img/twitter-white.svg',
    },
    {
      to: '/',
      src: '/img/telegram-white.svg',
    },
  ]
  const [show, setShow] = React.useState(1)
  const handleClick = (e) => setShow(e)
  return (
    <>
      <section className="font-pop">
        {/* <div className="hero-image">
          <img src="/img/hero-monkey-image.png" width="500" alt="" />
        </div> */}
        <div className="max-w-full bg mx-auto px-4 md:px-10 lg:px-18 py-0.5 grid lg:grid-cols-2">
          <div className="md:px-8 px-7 pt-72 pb-16">
            <h2 className="lg:text-primary text-black-100 text-center font-medium lg:text-3xl text-xl leading-10">
              The Most Innovative Community-driven Charity 3.0 to support Zoo’s around the world.
            </h2>
            <h3 className="lg:text-2xl text-5xl lg:text-black-100 text-primary text-center py-7">
              Welcome to ZooMaster!
            </h3>
            <div className="flex lg:flex-row flex-col lg:space-x-2 space-y-4 lg:space-y-0 justify-center pb-2">
              <button
                type="button"
                className="flex items-center justify-center px-5 pt-1 pb-1.5 border border-primary text-lg font-medium rounded hover:shadow-sm text-white bg-primary hover:bg-blue-100 focus:outline-none"
              >
                Buy Token
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-5 pt-1 pb-1 border border-primary text-lg font-medium rounded hover:shadow-sm text-primary bg-white focus:outline-none"
              >
                <img src="/img/Twitter.svg" alt="twitter" className="w-6 mr-1" />
                Twitter
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-5 pt-1 pb-1 border border-primary text-lg font-medium rounded hover:shadow-sm text-primary bg-white focus:outline-none"
              >
                <img src="/img/Telegram.svg" alt="twitter" className="w-6 mr-1" />
                Telegram
              </button>
            </div>
            <img src="./img/polygon.svg" width="60" alt="Built on Polygon" className="mx-auto lg:mt-2 mt-10" />
            <div className="flex justify-center text-gray-800 text-lg font-medium">
              <Link to="https://polygon.technology/" target="_blank" rel="noreferrer">
                Built on Polygon
              </Link>
              <span className="hidden lg:block pl-1">(previously known as MATIC)</span>
            </div>
          </div>
        </div>
        <div className="bg-secondary w-full">
          <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-18 lg:py-20 py-16">
            <div className="flex items-center">
              <div className="w-2/5 hidden lg:flex">
                <img src="/img/about-us-tapir-image.png" alt="tapir" className="" />
              </div>
              <div className="w-full text-center lg:text-left">
                <h2 className="text-primary font-medium px-5 lg:text-6xl text-4xl leading-10">Why Zoomaster?</h2>
                <h2 className="text-primary font-medium lg:text-3xl text-lg leading-8 lg:pt-14 pt-16">
                  Progressive Zoos and Aquariums must be part of the world’s response to COVID
                </h2>
                <p className="lg:text-xl text-lg py-4 text-gray-500 ">
                  Many zoos and aquariums face challenges as lockdowns mean the loss of vital income from visitors. The
                  World Association of Zoos and Aquariums (WAZA), an IUCN Member since 1949, includes among its own
                  members more than 280 zoos and aquariums from over 50 countries, and 23 national and regional
                  associations.
                </p>
                <p className="lg:text-xl text-lg py-4 text-gray-500 ">
                  In a normal year we estimate more than 700 million people visit zoos and aquariums worldwide, with
                  many millions following their work online too (the only option during lockdown). With this huge and
                  growing audience, we nurture strong relationships with the wider public. We foster love for animals
                  and advocate for them to have their habitats protected. Where science often struggles to find the
                  words to engage people, zoos and aquariums bridge the gap.
                </p>
                <p className="lg:text-xl text-lg py-4 text-gray-500 ">
                  To that end, jointly with the International Zoo Educators Association, WAZA has published Social
                  Change for Conservation: The World Zoo and Aquarium Conservation Education Strategy. Inspiring
                  conservation action in the wake of the pandemic is essential if we are to reform humanity’s
                  relationship with the natural world.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pt-20">
              <div className="w-full">
                <Link to="/">
                  <img src="/img/article/1.png" alt="article" className="w-full mb-3" />
                  <h2 className="text-black-100 pt-2 lg:pt-0 lg:text-2xl text-xl font-medium lg:leading-8 leading-7">
                    Covid-19: Funding crisis threatens zoos vital conservation work
                  </h2>
                </Link>
                <p className="lg:pt-2 py-3 text-xs text-black-200">Oct 1. 2020 · Helen Briggs (BBC News)</p>
              </div>
              <div className="w-full">
                <Link to="/">
                  <img src="/img/article/2.png" alt="article" className="w-full mb-3" />
                  <h2 className="text-black-100 pt-2 lg:pt-0 lg:text-2xl text-xl font-medium lg:leading-8 leading-7">
                    Covid-19: Funding crisis threatens zoos vital conservation work
                  </h2>
                </Link>
                <p className="lg:pt-2 py-3 text-xs text-black-200">Oct 1. 2020 · Helen Briggs (BBC News)</p>
              </div>
              <div className="w-full">
                <Link to="/">
                  <img src="/img/article/3.png" alt="article" className="w-full mb-3" />
                  <h2 className="text-black-100 pt-2 lg:pt-0 lg:text-2xl text-xl font-medium lg:leading-8 leading-7">
                    Covid-19: Funding crisis threatens zoos vital conservation work
                  </h2>
                </Link>
                <p className="lg:pt-2 py-3 text-xs text-black-200">Oct 1. 2020 · Helen Briggs (BBC News)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center max-w-8xl mx-auto px-4 md:px-10 lg:px-18 lg:py-20 py-16">
          <h2 className="text-primary font-medium lg:text-5xl text-lg leading-8">
            How does the ZooMaster Token work ?
          </h2>
          <p className="lg:text-lg text-base py-3 px-1 text-gray-500">
            Every transaction gives you passive income and raises funds to preserve our Urban <br />
            Zoos for our kids. Let us make it happen together.
          </p>
          <p className="lg:text-lg text-base text-gray-500">For each transaction, the following occurs:</p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 pt-10 py-4">
            <div className="">
              <img src="/img/coin-burn.svg" alt="burn" className="mx-auto w-24" />
              <h2 className="text-primary font-medium lg:text-2xl text-xl leading-8">3% Coin Burn/transaction</h2>
              <p className="lg:text-lg text-base text-gray-500 leading-6">
                Yes, 3% is removed from supply for every transaction reducing supply over time, causing upward pressure
                on price with every transaction.
              </p>
            </div>
            <div className="">
              <img src="/img/wallet.svg" alt="burn" className="mx-auto w-24" />
              <h2 className="text-primary font-medium lg:text-2xl text-xl leading-8">3% Reward to ZooMasters</h2>
              <p className="lg:text-lg text-base text-gray-500 leading-6">
                Holders of ZOO earn constant passive value increase just by holding ZOO in their wallet. Enjoy the
                Growth. It feels good to be a ZooMaster!
              </p>
            </div>
            <div className="">
              <img src="/img/charity.svg" alt="burn" className="mx-auto w-24" />
              <h2 className="text-primary font-medium lg:text-2xl text-xl leading-8">3% Charity LP</h2>
              <p className="lg:text-lg text-base text-gray-500 leading-6">
                Added to the Charity Liquidity Pool.70% donated to Urban Zoos and 30% used for Marketing. The community
                can vote for the Zoo from our accredited list.
              </p>
            </div>
          </div>
          <h2 className="text-primary font-medium lg:text-2xl text-lg leading-8">Circulating Supply: 100,000,000</h2>
          <h2 className="text-primary font-medium lg:text-2xl text-lg leading-8">Total Supply: 100,000,000</h2>
        </div>
        <div className="bg-secondary">
          <div className="text-center max-w-8xl mx-auto px-4 md:px-10 lg:px-18 lg:py-20 py-16">
            <h2 className="text-primary font-bold lg:text-4xl text-2xl lg:leading-8 leading-6">
              Which Zoo does the community support?
            </h2>
            <p className="lg:text-2xl text-sm px-6 lg:py-4 py-12 text-gray-500">
              We want to make sure the charity transaction rewards are at the best place.{' '}
              <br className="hidden lg:block" /> For that we have vetted the first batch of Zoos globally.
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-4xl px-7 mx-auto pt-10 py-4">
              <div className="bg-white rounded-lg py-5 px-4 pt-10 shadow-lg">
                <p className="text-base pb-2 text-gray-800 leading-6">
                  Houses more than 3,500 animals across 650 different species and has often been awarded as one of the
                  best zoos in the world..
                </p>
                <h2 className="text-primary font-semibold lg:text-2xl text-xl">San Diego Zoo</h2>
                <h2 className="text-primary font-medium text-xs">San Diego, California, USA</h2>
              </div>
              <div className="bg-white rounded-lg py-5 px-4 pt-10 shadow-lg">
                <p className="text-base pb-2 text-gray-800 leading-6">
                  One of the largest zoological gardens in Germany founded in 1934. It is especially well known for its
                  dolphinarium and breeding koalas.
                </p>
                <h2 className="text-primary font-semibold lg:text-2xl text-xl">Zoo Duisburg</h2>
                <h2 className="text-primary font-medium text-xs">Duisburg, Germany</h2>
              </div>
              <div className="bg-white rounded-lg py-5 px-4 pt-10 shadow-lg">
                <p className="text-base pb-2 text-gray-800 leading-6">
                  The first public zoo in India. It houses 2,553 species of flora and fauna across 1,265 acres, 1,500 of
                  which are wild species.
                </p>
                <h2 className="text-primary font-semibold lg:text-2xl text-xl">Arignar Anna Zoo</h2>
                <h2 className="text-primary font-medium text-xs">Chennai, India</h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 max-w-4xl gap-7 px-2 mx-auto pt-10 py-4">
              <div>
                <h2 className="text-gray-800 font-medium text-lg pb-4">
                  Share & vote your preferred zoo on our Twitter polls!
                </h2>
                <button
                  type="button"
                  className="flex items-center justify-center mx-auto px-12 pt-1 pb-1 border border-primary text-lg font-medium rounded hover:shadow-sm text-primary bg-transparent focus:outline-none"
                >
                  <img src="/img/Twitter.svg" alt="twitter" className="w-6 mr-1" />
                  Vote Now
                </button>
              </div>
              <div>
                <h2 className="text-gray-800 font-medium text-lg pb-4">
                  Check for yourself the value of Charity Pool Wallet
                </h2>
                <button
                  type="button"
                  className="flex items-center justify-center mx-auto px-12 pt-1 pb-1 border border-primary text-lg font-medium rounded hover:shadow-sm text-primary bg-transparent focus:outline-none"
                >
                  <img src="/img/Twitter.svg" alt="twitter" className="w-6 mr-1" />
                  Check the pool
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center max-w-8xl mx-auto px-4 md:px-10 lg:px-18 py-8">
          <img src="/img/logo-icon.png" alt="mission" className="mx-auto" />
          <h2 className="text-primary font-bold lg:text-5xl text-2xl lg:leading-8 leading-6">Our mission</h2>
          <p className="lg:text-3xl text-lg  px-3 lg:py-8 py-12 text-gray-500">
            Help the most Covid-19 impacted Urban Zoos and their visitor to <br />
            thrive at most energy efficient and CO2 friendly way.
          </p>
          <div className="max-w-4xl mx-auto py-10">
            <hr className="bg-gray-900 h-0.5" />
            <div className="py-14">
              <h2 className="text-primary font-bold lg:text-5xl text-2xl lg:leading-8 leading-6">
                Our path to better zoos
              </h2>
              <p className="lg:text-3xl text-lg px-3 lg:py-8 py-12 text-gray-500">
                The is currently team working on the following.
              </p>
            </div>
            <div className="flex max-w-2xl mx-auto justify-between pb-2.5">
              <img
                src="/img/Q1.svg"
                onClick={handleClick.bind(this, 2)}
                alt=""
                role="button"
                className={`cursor-pointer ${
                  show === 1 ? 'opacity-100' : 'opacity-20'
                } hover:opacity-100 transition-all transform w-28`}
              />
              <img
                src="/img/Q2.svg"
                alt=""
                role="button"
                className={`cursor-pointer ${
                  show === 2 ? 'opacity-100' : 'opacity-20'
                } hover:opacity-100 transition-all transform w-28`}
                onClick={handleClick.bind(this, 2)}
              />
              <img
                onClick={handleClick.bind(this, 3)}
                src="/img/Q3.svg"
                alt=""
                role="button"
                className={`cursor-pointer ${
                  show === 3 ? 'opacity-100' : 'opacity-20'
                } hover:opacity-100 transition-all transform w-28`}
              />
              <img
                onClick={handleClick.bind(this, 4)}
                src="/img/Q4.svg"
                alt=""
                role="button"
                className={`cursor-pointer ${
                  show === 4 ? 'opacity' : 'opacity-20'
                } hover:opacity-100 transition-all transform w-28`}
              />
            </div>
            <div className="flex items-center max-w-2xl pb-20 mx-auto justify-between">
              <img
                width="20"
                onClick={handleClick.bind(this, show === 1 ? 1 : show - 1)}
                role="button"
                src="/img/chevron-left.svg"
                alt=""
                className="cursor-pointer mr-20"
              />
              {show === 1 ? (
                <div className="text-center">
                  <h3 className="text-primary text-xl">Q1 / 2021</h3>
                  <div className="lg:text-2.5xl font-light text-lg flex items-center text-gray-800">
                    <p className="pl-3 relative">Team comes together to develop concept using Blockchain</p>
                    <HiCheckCircle className="absolute top-0 left-6 text-3xl text-green-700" />
                  </div>
                  <div className="lg:text-2.5xl font-light text-lg text-gray-800">
                    <p className="pl-3 relative">Curates the list of most impacted Zoo in the world</p>
                    <HiCheckCircle className="absolute top-0 left-7 text-3xl text-green-700" />
                  </div>
                </div>
              ) : show === 2 ? (
                <div className="text-center max-w-sm">
                  <h3 className="text-primary text-xl">Q2 / 2021</h3>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800">
                    <span className="mr-2">ico</span>
                    Tech Development on Polygon
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Launch Website and Social Media
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    QuickSwap Listing
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Coingecko Listing
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Coinmarketcap Listing
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Livecoinwatch Listing
                  </p>
                </div>
              ) : show === 3 ? (
                <div className="text-center max-w-sm">
                  <h3 className="text-primary text-xl">Q3 / 2021</h3>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800">
                    <span className="mr-2">ico</span>
                    Awareness Campaigns
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    First Zoo Donation Drop
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Partnerships
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Key-Team Hires
                  </p>
                </div>
              ) : (
                <div className="text-center max-w-sm px-1">
                  <h3 className="text-primary text-xl">Q4 / 2021</h3>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800">
                    <span className="mr-2">ico</span>
                    Grand Marketing Start
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Staking
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    Partnerships
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    New Road map with new Zoos
                  </p>
                  <p className="lg:text-2.5xl font-light text-lg text-gray-800 pt-0.5">
                    <span className="mr-2">ico</span>
                    CEX Listing
                  </p>
                </div>
              )}

              <img
                width="20"
                onClick={handleClick.bind(this, show === 4 ? 4 : show + 1)}
                src="/img/chevron-right.svg"
                role="button"
                alt=""
                className="cursor-pointer"
              />
            </div>
            <hr className="bg-gray-900 h-0.5" />
          </div>
          <h2 className="text-primary font-bold lg:text-5xl text-2xl lg:leading-8 leading-6">Our team</h2>
          <p className="lg:text-3xl text-xl lg:py-8 pt-8 text-gray-500">
            A unique mix of 50+ years of professional experience to grow <br /> the project.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-20 max-w-4xl mx-auto pt-24 px-8 md:px-0 py-4">
            <div className="bg-white rounded py-5 px-4 shadow-full h-full">
              <div className="md:-mt-18 -mt-14 h-28">
                <img src="/img/illustrations/ice-bear.png" alt="team" className="w-24 mx-auto" />
              </div>
              <h2 className="text-primary font-semibold lg:text-xl text-lg">Rahul</h2>
              <h2 className="text-primary font-semibold text-xs">Project Lead - Business</h2>
              <div className="lg:h-36 md:h-18 h-44">
                <p className="text-lg py-2 text-gray-500 leading-6">
                  15+ yrs of entrepreneurial experience growing digital business for Fortune 500 brands, with successful
                  exit.
                </p>
              </div>
              <img src="/img/Twitter.svg" alt="team" className="w-8 mx-auto" />
            </div>
            <div className="bg-white rounded py-5 px-4 shadow-full h-full">
              <div className="md:-mt-18 -mt-14 h-28">
                <img src="/img/illustrations/bull.png" alt="team" className="w-24 mx-auto" />
              </div>
              <h2 className="text-primary font-semibold lg:text-xl text-lg">Ricky</h2>
              <h2 className="text-primary font-semibold text-xs">Project Lead- Technology</h2>
              <div className="lg:h-36 md:h-18 h-44">
                <p className="text-lg py-2 text-gray-500 leading-6">
                  Passionate about Blockchain, Cloud, DevOps and Software Development with experience over 15 years
                  working with global payment enablers.
                </p>
              </div>
              <img src="/img/Twitter.svg" alt="team" className="w-8 mx-auto" />
            </div>
            <div className="bg-white rounded py-5 px-4 shadow-full h-full">
              <div className="md:-mt-18 -mt-14 h-28">
                <img src="/img/illustrations/parrot.png" alt="team" className="w-16 mx-auto" />
              </div>
              <h2 className="text-primary font-semibold lg:text-xl text-lg">Marc</h2>
              <h2 className="text-primary font-semibold text-xs">Project Lead - Commercial</h2>
              <div className="lg:h-36 md:h-18 h-44">
                <p className="text-lg py-2 text-gray-500 leading-6">
                  15+ years of entrepreneurial experience in Fintech and Consumer Internet, with successful exit.
                </p>
              </div>
              <img src="/img/Twitter.svg" alt="team" className="w-8 mx-auto" />
            </div>
          </div>
        </div>
        <div className="text-center max-w-8xl mx-auto px-4 md:px-10 lg:px-18 py-8">
          <p className="lg:text-3xl text-lg text-center px-3 lg:py-4 pt-12 pb-6 text-gray-500">
            We have a successfull track record helping companies and brand to grow in todays time.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-x-10 px-8 lg:px-0 justify-center">
            <img src="/img/brand icons/nestle.svg" alt="" width="150" className="brand-img mx-auto" />
            <img src="/img/brand icons/coca-cola.svg" alt="" width="150" className="brand-img mx-auto" />
            <img src="/img/brand icons/citi.svg" alt="" width="150" className="brand-img mx-auto" />
            <img src="/img/brand icons/dbs.svg" alt="" width="150" className="brand-img mx-auto" />
            <img src="/img/brand icons/airfrance.svg" alt="" width="150" className="brand-img mx-auto" />
            <img src="/img/brand icons/emirates.svg" alt="" width="150" className="brand-img mx-auto" />
            <img src="/img/brand icons/heineken.svg" alt="" width="150" className="brand-img mx-auto" />
            <img src="/img/brand icons/verifone.svg" alt="" width="150" className="brand-img mx-auto" />
          </div>
        </div>
        <footer className="bg-blue-200">
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <img width="100" className="mx-auto" src="/img/logo-white.png" alt="" />
            <div className="py-8 flex justify-center space-x-5 lg:space-x-7">
              {social?.map((item) => (
                <Link to={item.to}>
                  <img src={item.src} alt="" width="40px" />
                </Link>
              ))}
            </div>
            <p className="mt-8 lg:mt-2 pb-3 text-center text-xs text-white">© 2021 Zoomaster. All rights reserved</p>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Home
