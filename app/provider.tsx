'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

import SearchDialog from 'fumadocs-ui/components/dialog/search-default';


export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
        search={{
            SearchDialog,
        }}
        theme={{
            enabled: false,
            enableSystem: false,
            
        }}
        
    >
        <TooltipProvider>
            {children}
        </TooltipProvider>
        
    </RootProvider>
    
  );
}