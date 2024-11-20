import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { buttonVariants } from "@/components/ui/button";
import {
  FOOTER_HEIGHT_DESKTOP,
  FOOTER_HEIGHT_MOBILE,
  HEADER_HEIGHT,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />

      <main
        className={`flex min-h-[calc(100vh-${HEADER_HEIGHT}px-${FOOTER_HEIGHT_MOBILE}px)] flex-col items-center sm:min-h-[calc(100vh-${HEADER_HEIGHT}px-${FOOTER_HEIGHT_DESKTOP}px)]`}
      >
        <div className="m-auto flex flex-col items-center gap-6 p-6">
          <h1 className="w-full text-center text-4xl font-extrabold">
            Page not found
          </h1>
          <p className="w-full text-center">
            We couldn&apos;t find the page you were looking for.
          </p>
          <Link
            href="/"
            className={cn(
              `${buttonVariants({ variant: "outline" })}`,
              "rounded-full"
            )}
          >
            Go to your feed
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
