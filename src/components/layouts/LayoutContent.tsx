'use client';
import React from 'react';
import { useLayout } from '@/context/LayoutContext';
import NewLayout from '@/components/layouts/NewLayout';
import OldLayout from '@/components/layouts/OldLayout';
export function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isNewLayout } = useLayout();
  return isNewLayout ? (
    <NewLayout>{children}</NewLayout>
  ) : (
    <OldLayout>{children}</OldLayout>
  );
}
