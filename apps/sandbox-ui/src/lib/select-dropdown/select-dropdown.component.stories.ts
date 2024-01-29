import type { Meta, StoryObj } from '@storybook/angular';
import { SelectDropdownComponent } from './select-dropdown.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelectDropdownComponent> = {
  component: SelectDropdownComponent,
  title: 'SelectDropdownComponent',
};
export default meta;
type Story = StoryObj<SelectDropdownComponent>;

export const Primary: Story = {
  args: {
    theme: 'bordered',
    isDisabled: false,
    size: 'xs',
    label: 'Select an item',
    items: [],
    optionLabel: '',
    optionValue: '',
  },
};

export const Heading: Story = {
  args: {
    theme: 'bordered',
    isDisabled: false,
    size: 'xs',
    label: 'Select an item',
    items: [],
    optionLabel: '',
    optionValue: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/select-dropdown works!/gi)).toBeTruthy();
  },
};
