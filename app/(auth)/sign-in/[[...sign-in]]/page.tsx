import { SignIn } from '@clerk/nextjs'
import { Image } from '@nextui-org/react'

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      
      {/* Left Section */}
      <div className=" hidden md:flex justify-center items-center bg-black-50 h-full">
        <Image 
          src="/auth.png" 
          alt="Sign in illustration" 
          width={600} 
          height={600} 
          className="w-full max-w-md"
        />
      </div>

      {/* Right Section - Sign In */}
      <div className="flex justify-center items-center p-6 bg-gray-50">
        <div className="w-full max-w-sm ">
          <h1 className="text-2xl font-semibold text-black mb-4">
            Sign in
          </h1>
          <p className="text-sm text-black mb-6">
            Access your account to continue.
          </p>
          <SignIn />
        </div>
      </div>
    </div>
  )
}
