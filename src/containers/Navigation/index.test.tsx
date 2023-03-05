import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
  it('renders the menu items', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Manual Table')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('displays the Info component when Manual Table is clicked', () => {
    render(<Navigation />);
    fireEvent.click(screen.getByText('Manual Table'));
    expect(screen.getByText('Load Table Data')).toBeInTheDocument();
  });
});
