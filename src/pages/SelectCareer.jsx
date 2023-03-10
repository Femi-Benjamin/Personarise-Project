import React from 'react'
import { DropDown } from '../components'
import Button from '../components/shared/Button'


const SelectCareer = () => {

  const paths = [
    'Data Sciences',
    'Copy Writing',
    'UI/UX Design',
    'Content Design',
    'Content Creator',
    'Web Design',
    'Motion Design',
    'Video Editing',
    'Cryptography',
    'Animation Design',
  ];

  const [path, setPath] = React.useState([]);
  const handleChange = (event) => {
    setPath(event.target.value);
  };
    return (
      
        <div className='bg-[#E4E4E4] h-full flex justify-center items-center'>

                <div className='w-[60%] sm:h-auto border sm:px-5 border-[#7C7E80] rounded-[7.11231px] bg-[#FFFFFF] text-center items-center md:p-4 p-2 max-w-7xl'>
                    <h1 className='font-mulish font-bold lg:text-[28px] md:text-[20px] text-lg leading-[36px] text-black pt-[84.46px] pb-[47.57px]'>Fill in your preferred career path</h1>

                    <div>
                        <DropDown path={path} paths={paths} setpath={setPath} onChange={handleChange}/>
                    </div>
                    <div className='w-[60%] mx-auto lg:mt-8 md:mt-6 mt-3 mb-3'>
                    <Button text="Continue"/>
                    </div>
                </div>

        </div>
    )
}

export default SelectCareer