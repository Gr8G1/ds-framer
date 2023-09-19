import Link from 'next/link';
import Image from 'next/image'

import Nav from '@/components/common/Nav';

export default function Home() {
  return (
    <main className="flex height flex-col items-center justify-between">
      <div className="fixed right-5 bottom-5">
        <Image
          src="/next.svg"
          alt="next Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
    </main>
  )
}
