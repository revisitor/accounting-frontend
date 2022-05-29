import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import React from 'react';

export type SidebarLinkProps = {
  href: string,
  label: string,
};

export function SidebarLink({ href, label }: SidebarLinkProps): React.ReactElement {
  return (
    <Box>
      <Link href={href} underline="none">{label}</Link>
    </Box>
  );
}
