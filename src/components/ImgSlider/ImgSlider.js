import { useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImgSlider = () => {
    const slideRef = useRef(null);
    return (
        <div>
            <div className='mx-0-1 hidden sm:block'>
                <Slide indicators={true} ref={slideRef} cssClass='rounded-1-0 w-full'>
                    <img src='/images/main.png' className='w-full'/>
                    <img src='/images/main.png' className='w-full'/>
                    <img src='/images/main.png' className='w-full'/>
                </Slide>
            </div>
            <div className='pr-1-1 pl-0-1 mt-3-0 sm:hidden'>
                <Slide cssClass='rounded-1-0'>
                    <img src='/images/main.png'/>
                    <img src='/images/main.png'/>
                    <img src='/images/main.png'/>
                </Slide>
            </div>
        </div>
    );
}

export default ImgSlider