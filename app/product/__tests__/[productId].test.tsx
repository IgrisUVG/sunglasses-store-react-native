import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Index from "../[productId]";

describe("Product page", function () {
  it("Product page renders text and a button", function() {
    const tree = render(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Press on 'Cart' button displays two buttons: 'Remove from cart' and 'Go to cart'", function() {
    render(<Index />);
    const buttonElement = screen.getByText("Add to the cart");

    fireEvent.press(buttonElement);

    const removeButton = screen.getByText("Remove from cart");
    const goToCartButton = screen.getByText("Go to cart");

    // TODO: Ideal scenario is to test whether the initial button was unmounted

    expect(removeButton).toBeVisible();
    expect(goToCartButton).toBeVisible();
  });
});
