import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DropdownComponent> = {
  component: DropdownComponent,
  title: 'DropdownComponent',
};
export default meta;
type Story = StoryObj<DropdownComponent>;

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
    expect(canvas.getByText(/dropdown works!/gi)).toBeTruthy();
  },
};
