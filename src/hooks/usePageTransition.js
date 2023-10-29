'use client';
import PageTransitionOut from '@/app/PageTransitionOut';
import Image from 'next/image';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function usePageTransition({ href, bgColor }) {
  const [go, setGo] = useState(false);

  const router = useRouter();

  useEffect(() => router.prefetch(href), [href, router]);

  const onDone = useCallback(() => router.push(href), [href, router]);

  const transitionComponent = (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: go ? 100 : 0,
      }}>
      <PageTransitionOut {...{ go, onDone, bgColor }} />
    </div>
  );

  return { go, setGo, transitionComponent };
}

export function PageTransitionOutWrapper({ go, children }) {
  return (
    <div className={`fixed w-screen h-screen ${go ? 'z-[100]' : ''}`}>
      {children}
    </div>
  );
}
