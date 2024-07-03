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
                    01
                  </div>

                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block '>
                Track company-wide progress 
              </h3>
                  <p className='text-darkGrayishBlue'>
                    See how your day-to-day tasks fit into the wider visio. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                  </p>
              </div>
            </div>

                        {/* list items 2 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6
            md:flex-row">
              {/* heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1
                  bg-brightRed'>
                    02
                  </div>

                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                   Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block '>
                Advanced built-in reports
              </h3>
                  <p className='text-darkGrayishBlue'>
                      set internal delivery estimates and track progress toward company goals. Our customiesable dashboard helps you build out the reports you need to keep key stakeholders informed.
                  </p>
              </div>
            </div>

                        {/* list items 3 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6
            md:flex-row">
              {/* heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1
                  bg-brightRed'>
                    03
                  </div>

                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block '>
                Everything you need in one place 
              </h3>
                  <p className='text-darkGrayishBlue'>
                      Stop jumping from one service to another to communicate, store, files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                  </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section id='testimonials'>
        {/* container to heading and testm blocks */}
         <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
          {/* heading */}
          <h2 className='text-4xl font-bold text-center'>
            What's Differernt About Manage?
          </h2>
          {/* testimonials container */}
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            {/* testimonial 1 */}
            <div className='flex mt-6 flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
              <img src={require("./assets/imgs/avatar-anisha.png")} className='w-16 -mt-14'/>
              <h5 className='text-lg font-bold'>
                Anisha Li
              </h5>
              <p className='text-sm text-darkGrayishBlue'>
                "Manage has supercharged our team's workflow. The ability to maintain visiblity on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
             {/* testimonial 2 */}
             <div className='flex mt-6 flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
              <img src={require("./assets/imgs/avatar-ali.png")} className='w-16 -mt-14'/>
              <h5 className='text-lg font-bold'>
                Ali Bravo
              </h5>
              <p className='text-sm text-darkGrayishBlue'>
                "We have been able to cancel so many other subscriptions since useing Manage. There is no more cross-channel confusion adn everyone is much more focused."
              </p>
            </div>
             {/* testimonial 3 */}
             <div className='flex mt-6 flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
              <img src={require("./assets/imgs/avatar-richard.png")} className='w-16 -mt-14'/>
              <h5 className='text-lg font-bold'>
                Richard Watts
              </h5>
              <p className='text-sm text-darkGrayishBlue'>
                "Manage has supercharged our team's workflow. The ability to maintain visiblity on larger milestones at all times keeps everyone motivated."
              </p>
            </div>
          </div>

          {/* button */}
           <div className='my-16'>
            <a href='#' className='p-3 px-6 pt-2 text-white bg-birghtred rounded-full baseline hover:bg-brightRedLight'>
              Get Started
            </a>
           </div>
         </div>
      </section>

      {/* CTA section */}
      <section itemID='cta' className='bg-brightRed'>
        {/* flex container */}
        <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
          {/* heading */}
          <h2 className='text-5xl font-bold leading-tight text-center text-white 
          md:text-4xl md:max-w-xl md:text-left'>
              Simplify how your team works today
          </h2>
          {/* button */}
          <div>
            <a href='#'
            className='p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-900'>
              Get Started
            </a>
          </div>
        </div>

      </section>

      {/* footer */}
      <footer className='bg-veryDarkBlue'>
        {/* flex container */} 
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
          {/* logo and social links container*/}

          <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
            <div className='mx-auto my-6 text-cneter text-white md:hidden'>
              Copyright &copy; 2024, All Rights Reserved
            </div>
            {/* logo */}
            <div>
              <img src={require("./assets/imgs/logo-white.png")} className='h-8'/>
            </div>
            {/* social links container */}
            <div className='flex jusityf-center space-x-4'>
              {/* link 1 */}
              <a href='#'> 
              <img src={require("./assets/imgs/icon-facebook.png")} className='h-8'/>
              </a>
              {/* link 2 */}
              <a href='#'>

              <img src={require("./assets/imgs/icon-youtube.png")} className='h-8'/>
              </a>
              {/* link 3 */}
              <a href='#'>

              <img src={require("./assets/imgs/icon-twitter.png")} className='h-8'/>
              </a>
              {/* link 4 */}
              <a href='#'>

              <img src={require("./assets/imgs/icon-pinterest.png")} className='h-8'/>
              </a>
              {/* link 5 */}
              <a href='#'>

              <img src={require("./assets/imgs/icon-instagram.png")} className='h-8'/>
              </a>
            </div>
          </div>
          {/* list container */}
          <div className='flex justify-around space-x-32'>
            <div className='flex flex-col space-y-3 text-white'>
              <a href='#' className='hover:text-brightRed'>Home</a>
              <a href='#' className='hover:text-brightRed'>Pricing</a>
              <a href='#' className='hover:text-brightRed'>products</a>
              <a href='#' className='hover:text-brightRed'>About</a>
              
            </div>
            <div className='flex flex-col space-y-3 text-white'>
              <a href='#' className='hover:text-brightRed'>Careers</a>
              <a href='#' className='hover:text-brightRed'>Community</a>
              <a href='#' className='hover:text-brightRed'>Privacy Policy</a>              
            </div>
          </div>
          {/* input container */}
          <div className='flex flex-col justify-between '>
            <form>
              <div className='flex space-x-3'>
                <input className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Updated in your inbox'/>
                <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                  Go
                </button>
              </div>
            </form>
            {/*  */}
            <div className='hidden text-white md:block'>
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 

export default App;
