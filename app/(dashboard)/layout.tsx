import Links from '@/components/links'
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import {  SignIn, SignInButton,  UserButton,  UserProfile } from '@clerk/nextjs';
import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Desktop Layout */}
<div>
<div className=' max-h-screen  mx-auto  '>

     <SignIn ></SignIn>
</div>
      
</div>

      <div className="grid grid-cols-[320px_1fr] min-h-screen">
        <div className=" max-h-screen overflow-y-auto sticky top-0 hidden md:block border-r-2  bg-zinc-900/10 ">
          <Image
            src="/assets/images/logo-text.svg"
            height={200}
            width={200}
            alt="Logo"
          />
          <div>
            <Links />
          </div>
        </div>
        <div className=" p-5 w-full  ">
          <div className="flex  justify-between w-full min-w-screen p-2  ">
            <Image
              src="/assets/images/logo-text.svg"
              height={200}
              width={200}
              alt="Logo"
              className="md:hidden block"
            />

            <Sheet>
              <SheetTrigger className="md:hidden block  ">
                <Button variant="outline" className="bg-accent mr-5 ">
                  <Image
                    src="/assets/icons/menu.svg"
                    height={20}
                    width={20}
                    alt="menu"
                  />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <Links />
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="p-4 max-h-screen  ">{children}</div>
        </div>
      </div>
    </div>
  );
}