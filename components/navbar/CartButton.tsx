import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { IoMdCart } from "react-icons/io";


async function CartButton() {

    const numItemsInCart = 0
  return (
    <Button asChild variant='outline' size='icon' className='flex justify-center items-center relative'>
        <Link href='/cart'>
            <IoMdCart />
            <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 justify-center items-center flex text-xs'>
                {numItemsInCart}
            </span>
        </Link>
    </Button>
  )
}

export default CartButton