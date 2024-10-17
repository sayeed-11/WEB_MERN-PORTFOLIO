import React from 'react'

const Sticky = () => {
  return (
    <div className='w-full h-screen overflow-auto bg-black text-white'>
        <div>
            <div className='w-full py-5 bg-lime-700 sticky top-0'>A</div>
            <div className='*:py-5 *:my-3 *:bg-red-900'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
            </div>
        </div>

        <div>
            <div className='w-full py-5 bg-lime-700 sticky top-0'>B</div>
            <div className='*:py-5 *:my-3 *:bg-red-900'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
            </div>
        </div>


        <div>
            <div className='w-full py-5 bg-lime-700 sticky top-0'>C</div>
            <div className='*:py-5 *:my-3 *:bg-red-900'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
            </div>
        </div>

        <div>
            <div className='w-full py-5 bg-lime-700 sticky top-0'>D</div>
            <div className='*:py-5 *:my-3 *:bg-red-900'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
            </div>
        </div>

        <div>
            <div className='w-full py-5 bg-lime-700 sticky top-0'>E</div>
            <div className='*:py-5 *:my-3 *:bg-red-900'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur!</div>
            </div>
        </div>
    </div>
  )
}

export default Sticky