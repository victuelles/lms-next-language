import Image from "next/image";
import { Loader } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
          <Image src="/hero.png" fill alt="Hero" />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
            Explore the rich linguistic tapestry of the Philippines with our
            language courses!
          </h1>
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <Link href="/home">Continue Learning</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
     
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-md lg:text-xl  text-neutral-700 max-w-[480px] text-center p-2">
            Ready to speak like a local? Start learning <b>Tagalog</b> today!
          </h2>
        </div>
        <div className="relative w-[340px] h-[191px] lg:w-[424px] lg:h-[239px] mb-8 lg:mb-0">
          <Link href="/sign-in">
            <Image
              src="/images/course-thumbnails-tagalog.jpg"
              fill
              alt="Tagalog"
            />
          </Link>
        </div>
      </div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[340px] h-[191px] lg:w-[424px] lg:h-[239px] mb-8 lg:mb-0">
          <Link href="/sign-in">
            <Image
              src="/images/course-thumbnails-ilocano.jpg"
              fill
              alt="Ilocano"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-md lg:text-xl  text-neutral-700 max-w-[480px] text-center p-2">
            Speak the rhythmic tones of <b>Ilocano</b> and open doors to new
            cultural experiences.
          </h2>
        </div>
      </div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-md lg:text-xl  text-neutral-700 max-w-[480px] text-center p-2">
            Speak like a Pangasinense, explore the hundred islands and bangus festival, learn <b>Pangasinan</b> today!
          </h2>
        </div>
        <div className="relative w-[340px] h-[191px] lg:w-[424px] lg:h-[239px] mb-8 lg:mb-0">
          <Link href="/sign-in">
            <Image
              src="/images/course-thumbnails-pangasinan.jpg"
              fill
              alt="Pangasinan"
            />
          </Link>
        </div>
      </div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[340px] h-[191px] lg:w-[424px] lg:h-[239px] mb-8 lg:mb-0">
          <Link href="/sign-in">
            <Image
              src="/images/course-thumbnails-pampango.jpg"
              fill
              alt="Pampango"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-md lg:text-xl  text-neutral-700 max-w-[480px] text-center p-2">
            Learn <b>Pampango</b> the Gateway language to Central Luzon’s
            Culture,
          </h2>
        </div>
      </div>

      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-md lg:text-xl  text-neutral-700 max-w-[480px] text-center p-2">
          <b>Hiligaynon</b> is the language and culture of the Ilonggo people. Learning Hiligaynon can help you connect with the culture of these people.
          </h2>
        </div>
        <div className="relative w-[340px] h-[191px] lg:w-[424px] lg:h-[239px] mb-8 lg:mb-0">
          <Link href="/sign-in">
            <Image
              src="/images/course-thumbnails-ilonggo.jpg"
              fill
              alt="Ilonggo/Hiligaynon"
            />
          </Link>
        </div>
      </div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[340px] h-[191px] lg:w-[424px] lg:h-[239px] mb-8 lg:mb-0">
          <Link href="/sign-in">
            <Image
              src="/images/course-thumbnails-bisaya.jpg"
              fill
              alt="Bisaya"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-md lg:text-xl  text-neutral-700 max-w-[480px] text-center p-2">
          <b>Bisaya</b> is the primary language for preserving the wisdom and heritage of the Cebuano people. 
          </h2>
        </div>
      </div>

      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-md lg:text-xl  text-neutral-700 max-w-[480px] text-center p-2">
          <b>Bikol</b> is the primary language of the Bicol Region in the Philippines, and learning it can help you understand the local culture.

          </h2>
        </div>
        <div className="relative w-[340px] h-[191px] lg:w-[424px] lg:h-[239px] mb-8 lg:mb-0">
          <Link href="/sign-in">
            <Image
              src="/images/course-thumbnails-bikol.jpg"
              fill
              alt="Bikol"
            />
          </Link>
        </div>
      </div>
      
    </div>
  );
}
