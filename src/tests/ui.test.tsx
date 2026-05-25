import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ResultBox } from '@/components/ui/ResultBox';

describe('UI components', () => {
  it('renders an accessible input with error messaging', () => {
    render(<Input error="Credits are required" label="Credits" name="credits" />);

    const input = screen.getByLabelText('Credits');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Credits are required')).toBeInTheDocument();
  });

  it('renders a native button', () => {
    render(<Button>Calculate</Button>);

    expect(screen.getByRole('button', { name: 'Calculate' })).toBeInTheDocument();
  });

  it('renders result content', () => {
    render(
      <ResultBox
        description="This is your estimated GPA."
        title="Estimated GPA"
        value="3.43"
      />
    );

    expect(screen.getByText('Estimated GPA')).toBeInTheDocument();
    expect(screen.getByText('3.43')).toBeInTheDocument();
  });
});
