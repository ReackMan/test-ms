import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox, CheckboxProps } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    position: {
      options: ['default', 'left'],
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
}

export default meta
type Story = StoryObj<typeof meta>

const CheckboxWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const onCheckedChange = () => {
    setChecked(!checked)
  }

  return <Checkbox {...args} checked={checked} onCheckedChange={onCheckedChange} />
}

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    position: 'default',
  },
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    position: 'default',
  },
}

export const DefaultWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
    position: 'default',
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    disabled: false,
    position: 'default',
  },
  render: (args: CheckboxProps) => <CheckboxWithHooks {...args} />,
}

export const ControlledWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
    position: 'default',
  },
  render: (args: CheckboxProps) => <CheckboxWithHooks {...args} />,
}
