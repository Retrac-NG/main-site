export default function GetInTouchComponent() {
  return (
    <div className='bg-indigo-700 w-full max-w-[1100px] rounded-2xl shadow-2xl bg-gradient-to-br from-green-600 to-blue-600'>
      <div className='mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          <span className='block'>Be the first to know.</span>
          <span className='block'>Get in touch today.</span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-indigo-200'>
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a href='#' className='inline-flex landing__hero-btn mt-8 px-6 py-3'>
          Contact us
        </a>
      </div>
    </div>
  );
}
