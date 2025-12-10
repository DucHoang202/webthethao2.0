'use client'
import { useState } from "react";
const DropdownModal = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="modal--dropdown">
            ModalDropdown
        </div>
    )
}
export default DropdownModal
