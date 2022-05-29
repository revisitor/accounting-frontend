import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

import React, { ReactElement } from 'react';

export type AccountEntryProps = {
  id: number,
  name: string,
};

export function AccountEntry({ id, name }: AccountEntryProps): ReactElement {
  return (
    <Container>
      <Link href={`/accounts/${id}`}>{name}</Link>
    </Container>
  );
}
