'use client';
import PageTransition from '@/app/PageTransition';
import Image from 'next/image';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function usePageTransition({ href, bgColor }) {
  const [go, setGo] = useState(false);

  const router = useRouter();

  useEffect(() => router.prefetch(href), [href, router]);

  const onDone = useCallback(() => router.push(href), [href, router]);

  const transitionComponent = useMemo(
    () => (
      <div className={`fixed w-screen h-screen ${go && 'z-[100]'}`}>
        <PageTransition {...{ go, onDone, bgColor }} />
      </div>
    ),
    [bgColor, go, onDone]
  );

  return { go, setGo, transitionComponent };
}
