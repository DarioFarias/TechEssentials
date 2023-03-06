import React from 'react';
import { Icon } from 'vite-icons';
import IconAccessibility from 'vite-icons/carbon/accessibility';

const Footer = () => {
  return (
    <div
      id="footerContacto"
      className="flex table-rowitems-center justify-evenly flex-grow"
    >
      <div>
        <Icon icon={IconAccessibility} />
      </div>
    </div>
  );
};

export default Footer;
