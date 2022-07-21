import Image from 'next/image'

import { Text } from '@/components'

import {LoginForm} from '@/features/Login/index'

export default function LoginPage() {
  
  return (
    <div className="bg-primary">
      <div className="flex justify-center items-center min-h-screen w-96 m-auto">
        <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
          <div className="p-6">
            <div className='flex justify-center items-center mb-6'>
              <Image width="32" height="80" src="/svg/logo.svg" alt="logo"/>
              <Text type="body-logo" as="span" className="ml-2">AIDA</Text>
            </div>
            <h3 className="text-black-dark-200 text-h3 text-center mb-4">
              Sign in
            </h3>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  )
}