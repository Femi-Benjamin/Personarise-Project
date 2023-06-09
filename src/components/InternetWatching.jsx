import React from 'react'
import ReactPlayer from 'react-player'
// import 'react-player/dist/react-player.css';

const InternetWatching = () => {
  return (
    <div className="pb-[42px] font-mulish">
      <h1 className="pb-5">Watch these videos to learn more:</h1>
      <div className="w-[770px] h-[300px] overflow-y-hidden overscroll-none mb-10">
        <div className="flex gap-7">
          <div>
            <iframe
              height="290px"
              width="454px"
              src="https://www.youtube.com/embed/rc46cO3spSE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; web-share"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
          <div>
            <iframe
              height="290px"
              width="454px"
              src="https://www.youtube.com/embed/rc46cO3spSE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; web-share"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
          <div>
            <iframe
               height="290px"
              width="454px"
              src="https://www.youtube.com/embed/bJA84W9wztA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; web-share"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
          <div>
          <iframe
               height="290px"
              width="454px"
              src="https://www.youtube.com/embed/bJA84W9wztA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; web-share"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
          <div>
            <ReactPlayer
              height="290px"
              width="454px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div>
            <ReactPlayer
              height="290px"
              width="454px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternetWatching
