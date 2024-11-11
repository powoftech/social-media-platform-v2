import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Footer from './_components/footer'
import Header from './_components/header'

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex min-h-[calc(100vh-64px-64px)] flex-col items-center">
        <div className="m-auto flex flex-col items-center gap-6 p-6">
          <h1 className="w-full text-center text-4xl font-extrabold">
            Page not found
          </h1>
          <p className="w-full text-center">
            We couldn&apos;t find the page you were looking for.
          </p>
          <Link
            href="/"
            className={`${buttonVariants({ variant: 'outline', size: 'lg' })}`}
          >
            Go to your feed
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
