import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";
import { Button } from '../ui/button';
import Link from 'next/link';


function Logo() {
  return (
    <Button size='icon' asChild>
        <Link href="/">
            <HiShoppingBag className='w-6 h-6 text-white'/>
        </Link>
    </Button>

  )
}

export default Logo