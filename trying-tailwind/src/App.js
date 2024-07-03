import './App.css';

function App() {
  

  return (
    <>
    {/* navbar */}
      <nav className='relative container mx-auto p-6'>
        {/* flex container */}
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div className='pt-2'>
            <img src={require("./assets/imgs/logo.png")}  />
          </div>
          {/* menu items */}
          <div className='hidden md:flex space-x-6'>
            <a href='#' className='hover:text-darkGrayishBlue'>Pricing</a>
            <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
            <a href='#' className='hover:text-darkGrayishBlue'>About Us</a>
            <a href='#' className='hover:text-darkGrayishBlue'>Careers</a>
            <a href='#' className='hover:text-darkGrayishBlue'>Community</a>
          </div>
          {/* button */}
          <a className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
        </div>
      </nav>
      {/* hero section */}
      <section id='hero'>
        <div className='container flex flex-col-reverse 
        md:flex-row items-center px-6 mx-auto mt-10 
        space-y-0 md:space-y-0'>
          {/* left item */}
          <div className='felx flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center
            md:text-5xl md:text-left'>
              Bring everyone toghter to build better products
            </h1>
            <p className='max-w-sm text-center text-darkGrayishBlue
            md:text-left'>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in  view.

            </p>
            <div className='flex justify-center md:justify-start'> 
              <a className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
                Get Started

              </a>
            </div>
          </div>
          {/* image */}
          <div className='md:w-1/2'>
            <img src={require('./assets/imgs/illustration-intro.png')}/>
          </div>
        </div>
      </section>
      {/* features section */}
      <section id='features'>
        {/* flex container  */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 
        md:space-y-0 md:flex-row">
          {/* whats different */}
          <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
          {/* numbered list */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* list items 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6
            md:flex-row">
              {/* heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1
                  bg-brightRed'>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 

export default App;
