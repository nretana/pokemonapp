import { GENERAL_ERROR } from '@/constants/app.errors.constants';
import { Alert } from '@mantine/core';
import { IconExclamationCircleFilled } from '@tabler/icons-react';


export const GeneralErrorAlert = () => {
  return (
    <Alert color='pink' radius='xl' icon={<IconExclamationCircleFilled />}>
      {GENERAL_ERROR}
    </Alert>
  );
};
