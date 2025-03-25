"use client";

import { cn } from "@/lib/utils";
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";






const Links = () => {


const pathname = usePathname()

const links =[
{
  label: "Home",
  route: "/",
  icon: "/assets/icons/home.svg",
},
{
  label: "Image Restore",
  route: "/transformations/add/restore",
  icon: "/assets/icons/image.svg",
},
{
  label: "Generative Fill",
  route: "/transformations/add/fill",
  icon: "/assets/icons/stars.svg",
},
{
  label: "Object Remove",
  route: "/transformations/add/remove",
  icon: "/assets/icons/scan.svg",
},
{
  label: "Object Recolor",
  route: "/transformations/add/recolor",
  icon: "/assets/icons/filter.svg",
},
{
  label: "Background Remove",
  route: "/transformations/add/removeBackground",
  icon: "/assets/icons/camera.svg",
},
{
  label: "Profile",
  route: "/profile",
  icon: "/assets/icons/profile.svg",
},
{
  label: "Buy Credits",
  route: "/credits",
  icon: "/assets/icons/bag.svg",
},
];

const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null; // Or a fallback like "Loading..." or "Sign in"
  }

  const name = user.firstName; 
 



  return (
    <div className="w-full flex flex-col gap-4 py-4 text-center pl-2 ">
        

          
      {links.map((elem, index) => (
        <div
          key={index}
          className={cn(
            "w-full rounded-md p-2 transition-colors",
            pathname === elem.route 
              ? "bg-purple-500 text-white" 
              : "hover:bg-zinc-100"
          )}
        >
          <Link href={elem.route} className="w-full flex items-center gap-4">
            <Image  
              src={elem.icon} 
              height={25} 
              width={25} 
              alt={elem.label}
              style={{ filter: 'brightness(0.3) invert(0)' }} // This will make the image black
            />
            <h3 className="text-sm font-medium">
              {elem.label}
            </h3>
          </Link>
        </div>
      ))}
      <Separator/>
      <div className="   flex  gap-5 pt-10  ">
     
     
      <UserButton   signInUrl="/" />
<p className=" font-medium" > 

      {name}
</p>
      
      

      </div>
    </div>
  );
}

export default Links