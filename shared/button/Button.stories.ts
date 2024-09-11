import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'SharedComponent/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    btnText: { control: 'text' },
    variant: { control: 'radio', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
    size: { control: 'radio', options: ['default', 'sm', 'lg', 'icon'] },
    asChild: { control: 'boolean' },
    className: { control: 'text' },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    btnText: 'Primary Button',
    variant: 'default',
    size: 'default',
  },
};

export const DestructiveButton: Story = {
  args: {
    btnText: 'Destructive Button',
    variant: 'destructive',
    size: 'default',
  },
};

export const OutlineButton: Story = {
  args: {
    btnText: 'Outline Button',
    variant: 'outline',
    size: 'default',
  },
};

export const SecondaryButton: Story = {
  args: {
    btnText: 'Secondary Button',
    variant: 'secondary',
    size: 'default',
  },
};

export const GhostButton: Story = {
  args: {
    btnText: 'Ghost Button',
    variant: 'ghost',
    size: 'default',
  },
};

export const LinkButton: Story = {
  args: {
    btnText: 'Link Button',
    variant: 'link',
    size: 'default',
  },
};

export const DefaultSizeButton: Story = {
  args: {
    btnText: 'Default Size Button',
    variant: 'default',
    size: 'default',
  },
};

export const SmallSizeButton: Story = {
  args: {
    btnText: 'Small Size Button',
    variant: 'default',
    size: 'sm',
  },
};

export const LargeSizeButton: Story = {
  args: {
    btnText: 'Large Size Button',
    variant: 'default',
    size: 'lg',
  },
};

// Uncomment if needed
// export const IconSizeButton: Story = {
//   args: {
//     btnText: 'Icon Size Button',
//     variant: 'default',
//     size: 'icon',
//   },
// };
