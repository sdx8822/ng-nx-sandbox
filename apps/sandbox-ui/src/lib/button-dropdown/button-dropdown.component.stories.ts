import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonDropdownComponent } from './button-dropdown.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonDropdownComponent> = {
  component: ButtonDropdownComponent,
  title: 'ButtonDropdownComponent',
};
export default meta;
type Story = StoryObj<ButtonDropdownComponent>;

export const Primary: Story = {
  args: {
    btnLabel: 'Dropdown',
    items: [],
    optionLabel: '',
    optionValue: '',
  },
};

export const Heading: Story = {
  args: {
    btnLabel: 'Dropdown',
    items: [],
    optionLabel: '',
    optionValue: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button-dropdown works!/gi)).toBeTruthy();
  },
};
