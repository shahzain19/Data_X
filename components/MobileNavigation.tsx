'use client'

import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';
import { navItems } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import FileUploader from './FileUploader';

interface Props {
  $id: string,
  accountId: string,
  fullName: string,
  avatar: string,
  email: string,
}

const MobileNavigation = ({ $id:ownerId, accountId, fullName, avatar, email }: Props) => {
  const [Open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className='mobile-header'>
      <Image src='/assets/images/xaxa.png' alt='logo' width={70} height={80} className='h-auto' />

      <Sheet open={Open} onOpenChange={setOpen}>
        <SheetTrigger><Image src='/assets/icons/menu.svg' alt='Search' width={30} height={30} /></SheetTrigger>
        <SheetContent className='shad-sheet h-screen px-3'>
          <SheetTitle>
            <div className='header-user'>
              <Image src={avatar} alt='avatar' width={44} height={44} className='header-user-avatar' />
              <div className="sm:hidden lg:block">
                <p className='subtitle-2 capitalize'>{fullName}</p>
                <p className='caption'>{email}</p>
              </div>
            </div>
            <Separator className='my-4 bg-light-200/20' />
          </SheetTitle>
          <nav className='mobile-nav'>
            <ul className='mobile-nav-list'>
              {navItems.map(({ url, name, icon }) => (
                <Link href={url} key={name} className='lg:w-full'>
                  <li className={cn("mobile-nav-item", (pathname === url) && 'shad-active')}>
                    <Image src={icon} alt={name} width={24} height={24} className={cn('nav-icon', pathname === url && 'nav-icon-active')} />
                    <p className='lg:block'>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className='my-5 bg-light-200/20' />
          <div className="flex flex-col justify-between gap-10 pb-10">
            <FileUploader ownerId={ownerId} accountId={accountId}/>
            <button type='submit' className='mobile-sign-out-button' onClick={()=>{}}>
              <Image src="/assets/icons/logout.svg" alt="Log" width={24} height={24} />
              <p>Log out</p>
            </button>
          </div>
        </SheetContent>
      </Sheet>

    </header>
  )
}

export default MobileNavigation
