import React, { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  color: string;
  active: boolean;
}

interface TextButtonProps extends PrimaryButtonProps{
  text: string;
}