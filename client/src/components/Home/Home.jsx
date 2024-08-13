import React, {useEffect, useState} from 'react';
import homeIcon from '../../assets/home.png';
import gsap from 'gsap';
import hiIcon from '../../assets/hi.png';
import spin from '../../assets/spin.gif';
import Modal from './Modal';

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Logic to display the modal can be added here
    // For example, checking if the user has already dismissed the modal in the past
    setShowModal(true);
  }, []);

  useEffect(() => {
    gsap.fromTo("#marquee-text", 
      { xPercent: 100 }, // Start off-screen to the right
      { xPercent: -100, // Move off-screen to the left
        repeat: -1,
        duration: 15,
        ease: "linear",
      }
    );
  }, []);
  return (
    <div className='w-full'>
      <div className='w-[90%] h-[410px] p-2 bg-[#363636] flex gap-1 m-auto my-5'>
        <div className='w-[363px] h-[395px] bg-[#242321] flex flex-col'>
          <div className='w-full h-[53px] flex items-center justify-center my-3'>
            <span className='text-[#FFEA00] font-bold text-2xl'>TOP UP CARD HERE</span>
          </div>
          <div className='w-full h-[341px] flex flex-col items-center gap-4'>
            <select className='w-[90%] h-[41px] bg-[#1F2228] text-white pl-5 focus:outline-none'>
              <option value = "0">-- Select Card Type --</option>
              <option value = "1">Viettel Card</option>
              <option value = "2">Vinaphone Card</option>
            </select>
            <select className='w-[90%] h-[41px] bg-[#1F2228] text-white pl-5 focus:outline-none'>
              <option value = "0">-- Select Card Type --</option>
              <option value = "1">Viettel Card</option>
              <option value = "2">Vinaphone Card</option>
            </select>
            <input className='w-[90%] h-[41px] pl-5 bg-[#1F2228] text-white placeholder:text-sm focus:outline-none' placeholder='Enter Card Number (Scratch Off Silver Coating).'/>
            <input className='w-[90%] h-[41px] pl-5 bg-[#1F2228] text-white placeholder:text-sm focus:outline-none' placeholder='Enter Card Serial Number (Printed on Card)...'/>
            <button className='w-[90%] h-[41px] bg-[#FFEA00] text-xl font-bold' > TOP UP CARD</button>
          </div>
        </div>
        <img src={homeIcon} alt="HomeIcon"/>
      </div>
      <div className='w-[90%] h-[62px] bg-black m-auto overflow-hidden flex items-center'>
        <span className='text-white whitespace-nowrap' id="marquee-text">
          Congratulations Minhanh*** For Successfully Withdrawing 1200 FC &nbsp;&nbsp;&nbsp;&nbsp;
          Congratulations Minhanh*** For Successfully Withdrawing 1200 FC
        </span>
      </div>
      <div className='w-[90%] h-[562px] bg-black my-5 m-auto py-8'>
        <img src={hiIcon} alt="hiIcon" className='mx-auto'/>
        <div className='flex flex-col mt-1 ml-4 w-[283px] h-[392px] bg-[#1F2228]'>
          <img src={spin} alt="" width={283} height={156.2}/>
          <div className='w-[283px] h-[40px] bg-[#00000080] flex items-center justify-center'>
            <span className='text-normal text-[#FCBD00]'>VIP FC SPIN</span>
          </div>
          <ul className='ml-4 mt-3'>
            <li className='text-white'>Spins: 374,305</li>
            <div className='flex mt-8 ml-8 gap-2'>
              <div className='w-[93px] h-[63px] border border-[#666666] text-[#666666] rounded-md flex  flex-col items-center justify-center'>
                <span className='line-through'>150000</span>
                <span className='line-through'>Vand</span>
              </div>
              <div className='w-[84px] h-[63px] border border-[#FF0000] text-[#FF0000] rounded-md flex  flex-col items-center justify-center'>
                <span>50000</span>
                <span>Vand</span>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <Modal show={showModal} onClose={handleClose} />
    </div>
  )
}

export default Home