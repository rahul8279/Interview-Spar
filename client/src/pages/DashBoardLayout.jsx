import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import DashboardCard from '../components/Dashboard'
import { LuPlus } from 'react-icons/lu'
import SessionForm from '../components/CreateSessionForm'

function DashBoardLayout() {
   const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    

    return (
        <div className="relative  min-h-screen font-sans">
          <Navbar />
            <DashboardCard openSessionForm={openModal} />

            {/* The SessionForm modal is rendered conditionally based on state */}
            {isModalOpen && <SessionForm closeModal={closeModal} />}
        </div>
    );
}

export default DashBoardLayout