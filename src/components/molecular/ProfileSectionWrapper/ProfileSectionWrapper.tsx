import { Empty } from '@src/components/atomic/Empty/Empty';
import { HTMLProps } from 'react';

interface IProfileSectionWrapperProps extends HTMLProps<HTMLDivElement> {
  isEmpty: boolean;
  emptyLabel: string;
}

export function ProfileSectionWrapper({
  children,
  isEmpty,
  emptyLabel,
  ...props
}: IProfileSectionWrapperProps) {
  if (isEmpty) {
    return <Empty>{emptyLabel}</Empty>;
  }
  return <section {...props}>{children}</section>;
}
