import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { toast } from 'react-toastify';

const actions = [
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    link: 'https://www.instagram.com/matraim.official/',
  },
  {
    icon: <GitHubIcon />,
    name: 'GitHub',
    link: 'https://github.com/Matraim',
  },
  {
    icon: <TelegramIcon />,
    name: 'Telegram',
    link: 'https://t.me/MuhammedIbraghim',
  },
  {
    icon: <WhatsAppIcon />,
    name: 'WhatsApp',
    link: 'https://wa.me/+996556401369',
  },
];

export default function OpenIconSpeedDial() {
  const SocialMedia = () =>
    toast.info('My Social Media', {
      theme: "colored"
    });

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        onClick={SocialMedia}
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<ManageAccountsIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.link}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
