'use client'

import { Icon } from '@/app/_images/icon'
import { LogoLight } from '@/app/_images/logo'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// import {
//     IoBriefcase,
//     IoGameController,
//     IoLaptop,
//     IoNewspaper,
//     IoPeople,
//     IoPlay,
// } from 'react-icons/io5'

export default function Header({
  className,
  showSignIn = false,
  showSignUp = false,
}: {
  className?: string
  showSignIn?: boolean
  showSignUp?: boolean
}) {
  return (
    <header className={cn('flex h-16 w-full flex-row items-center', className)}>
      <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between px-6">
        <Link href="/" className="flex flex-shrink-0">
          <span className="sr-only">Connector</span>
          <Image
            src={LogoLight.default}
            alt="Connector Logo"
            // height={32}
            // width={150}
            className="hidden h-8 w-auto dark:invert sm:block"
            priority
          />
          <Image
            src={Icon.default}
            alt="Connector Icon"
            // height={32}
            // width={32}
            className="block h-8 w-auto dark:invert sm:hidden"
            priority
          />
        </Link>

        <div className="flex flex-shrink-0 flex-row flex-nowrap items-center gap-3">
          {showSignIn && (
            <Link
              href="/signin"
              className={`${buttonVariants({ variant: 'ghost' })}`}
            >
              Sign In
            </Link>
          )}
          {showSignUp && (
            <Link
              href="/signup"
              className={`${buttonVariants({ variant: 'default' })}`}
            >
              Join Now
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
