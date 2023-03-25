import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { Paper } from '@mui/material'
import icons from '../../constants/icons'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export default function DashboardModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    // handleOpen()
  }, [])

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Paper
          sx={{
            ...style,
            // width: 400,
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
            borderRadius: '16px',
          }}
          className="md:w-[60%] w-[80%]  bg-white md:px-9 md:py-[70px] p-3 relative"
        >
          <h2
            className="font-mulish font-bold lg:text-[24px] md:text-xl  text-lg text-center leading-[30px]"
            id="parent-modal-title"
          >
            Description{' '}
          </h2>
          <p
            className=" font-mulish font-normal lg:text-[24px] md:text-lg text-sm lg:leading-[32px] md:leading-[32px]  leading-[18px] max-w-[800px] mx-auto md:my-8 my-2 md:text-left text-center "
            id="parent-modal-description"
          >
            Any application you see on App store or Play store is actually built
            by Software Engineers (Mobile). They specialize in mobile
            technologies such as building applications for Google’s Android,
            Apple’s iOS and Microsoft’s Windows Phone platforms. For this main
            reason, we have other specialized job titles for this type of roles
            also include Android developer and iOS developer. Mobile Engineers
            usually learn the programming languages and software development
            environment that are needed to develop for their chosen platform. 
          </p>
          <div className="flex justify-center items-center my-8">
            <p className="text-[#304351] lg:text-2xl md:text-lg text-sm border-b border-b-[#304351]">
              View Roadmap
            </p>
          </div>

          <div
            className="bg-white md:p-4 p-2 rounded-full absolute md:-top-8 md:-right-8 md:h-auto md:w-auto h-12 w-12 -top-5 -right-5 "
            onClick={handleClose}
          >
            <img src={icons.closeIcon} alt="" />
          </div>
        </Paper>
      </Modal>
    </>
  )
}
