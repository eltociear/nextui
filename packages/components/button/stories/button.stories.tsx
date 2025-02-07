import React from "react";
import {ComponentMeta} from "@storybook/react";
import {button} from "@nextui-org/theme";
import {Camera, HeadphonesIcon, Notification} from "@nextui-org/shared-icons";

import {Button, ButtonProps} from "../src";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "success", "warning", "danger"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    spinnerPlacement: {
      control: {
        type: "select",
        options: ["start", "end"],
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "full"],
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const defaultProps = {
  children: "Button",
  spinnerPlacement: "start",
  ...button.defaultVariants,
};

const Template = (args: ButtonProps) => <Button {...args} />;

const StateTemplate = (args: ButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Button {...args} onPress={handleClick}>
      {isOpen ? "Close" : "Open"}
    </Button>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithState = StateTemplate.bind({});
WithState.args = {
  ...defaultProps,
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  ...defaultProps,
  isDisabled: true,
};

export const DisableRipple = Template.bind({});
DisableRipple.args = {
  ...defaultProps,
  disableRipple: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...defaultProps,
  startContent: <Notification className="fill-current" />,
  endContent: <Camera className="fill-current" />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  ...defaultProps,
  isIconOnly: true,
  children: <HeadphonesIcon className="w-5 h-5" />,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  ...defaultProps,
  color: "primary",
  isLoading: true,
};

export const CustomWithClassNames = Template.bind({});
CustomWithClassNames.args = {
  ...defaultProps,
  radius: "full",
  className: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
};
