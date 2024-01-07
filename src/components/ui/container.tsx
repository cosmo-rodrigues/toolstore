'use client';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

import { cn } from '@/lib/utils';

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl', className)}>{children}</div>
  );
};
