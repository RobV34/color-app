import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';


jest.mock('./components/NavBar', () => () => <div>Mocked NavBar</div>);
jest.mock('./components/MainSlideshow', () => ({ images }) => (
  <div>
    <h1>Main Slideshow</h1>
    <div>{images.length} images</div>
  </div>
));
jest.mock('./components/UserChoices', () => () => <div>User Choices</div>);
jest.mock('./components/InspirationSlideshow', () => () => <div>Inspiration Slideshow</div>);
jest.mock('./components/Footer', () => () => <div>Mocked Footer</div>);

describe('App Component', () => {
  it('renders correctly with all components', () => {
    render(<App />);

  
    expect(screen.getByText('Mocked NavBar')).toBeInTheDocument();

  
    expect(screen.getByText('Main Slideshow')).toBeInTheDocument();
    expect(screen.getByText('6 images')).toBeInTheDocument(); // Check that the right number of images are passed to the slideshow


    expect(screen.getByText('User Choices')).toBeInTheDocument();


    expect(screen.getByText('Inspiration Slideshow')).toBeInTheDocument();


    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
  });
});