import React from 'react';
import Link from 'next/link';
import { TfiPencil } from "react-icons/tfi";


const CheckBox = () => {
  return (
    <div>
        <span className="mr-3">
            <button className="p-3 bg-gray-500 hover:bg-gray-700 hover:cursor-pointer rounded-lg">
                <Link href='/tasks/update'>
                    <TfiPencil className="fill-current text-white"/>
                </Link>
            </button>
        </span>
    </div>
  )
}

export default CheckBox