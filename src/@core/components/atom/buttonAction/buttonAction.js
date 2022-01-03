import React from 'react';
import { Button } from 'react-bootstrap';

export const ButtonAction = (props) => {
  return (
    <Button
      variant={props.variant}
      href={props.href}
      as={props.as}
      type={props.type}
      value={props.value}
      size={props.size}
    >
      {props.text}
    </Button>
  );
};

ButtonAction.defaultProps = {
  variant: 'primary',
  href: '#',
  text: 'Button',
  as: undefined,
  type: 'button',
  value: undefined,
  size : undefined,
};
