import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TextInputComponent> = {
  component: TextInputComponent,
  title: 'TextInputComponent',
};
export default meta;
type Story = StoryObj<TextInputComponent>;

export const Primary: Story = {
  args: {
    theme: 'secondary',
    size: 'xs',
    placeholder: 'Enter a text.',
    isDisabled: false,
  },
};

export const Heading: Story = {
  args: {
    theme: 'secondary',
    size: 'xs',
    placeholder: 'Enter a text.',
    isDisabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-input works!/gi)).toBeTruthy();
  },
};
