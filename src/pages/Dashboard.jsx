// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>  {/* //// */}
//       <div>Hello Home Dashboard</div>
//       {/* /////////////////////// */}
//       <div className='flex px-[32px] justify-center items-center'>
//         <div className='w-[895px] md:h-[607px] sm:h-auto bg-[#ece9e9] rounded-[16px] text-center font-mulish'>
//           <h1 className='pt-[56px] pb-[16px] font-bold text-[24px] leading-[30px]'>Description </h1>

//           <p className='mb-[61px] font-normal md:text-left sm:text-center md:text-[24px] sm:text-[16px] md:leading-[30px] sm:leading-[20px] md:p-[46px] p-[19px]'>Any application you see on App store or Play store is actually built by Software Engineers (Mobile). They specialize in mobile technologies such as building applications for Google’s Android, Apple’s iOS and Microsoft’s Windows Phone platforms. For this main reason, we have other specialized job titles for this type of roles also include Android developer and iOS developer. Mobile Engineers usually learn the programming languages and software development environment that are needed to develop for their chosen platform.
//           </p>

//           <button className='md:mb-[138px] sm:mb-[100px] font-medium md:text-[24px] sm:text-[14px] md:leading-[30px] sm:leading-[18px] text-[#304351] border-b border-b-[#304351] pb-1'>View  Roadmap</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>View  Roadmap</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 className='font-mulish font-bold text-[24px] text-center leading-[30px]' id="parent-modal-title">Description </h2>
          <p className=' font-mulish font-normal text-[24px] text-center leading-[30px]' id="parent-modal-description">
          Any application you see on App store or Play store is actually built by Software Engineers (Mobile). They specialize in mobile technologies such as building applications for Google’s Android, Apple’s iOS and Microsoft’s Windows Phone platforms. For this main reason, we have other specialized job titles for this type of roles also include Android developer and iOS developer. Mobile Engineers usually learn the programming languages and software development environment that are needed to develop for their chosen platform. 

          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
