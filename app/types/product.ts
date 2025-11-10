import { createContext } from "react";

export interface Product {
  id: string,
  image: string,
  info: {
    name: string,
    brand: string,
    material: string[],
    features: string[],
  },
  price: {
    value: number,
    currency: "USD",
  },
  rating: {
    value: number,
    reviewsAmount: number,
  },
  deliveryType: "free" | "payed",
  description: string,
  tagline: string,
}

export const defaultProducts:Product[] = [
  {
    id: "1",
    image: "",
    info: {
      name: "Woke Up Like This",
      brand: "Ray-Ban",
      material: ["Metal"],
      features: ["Polarized", "Anti-Scratch Coating"],
    },
    price: {
      value: 49.99,
      currency: "USD",
    },
    rating: {
      value: 4.5,
      reviewsAmount: 180,
    },
    deliveryType: "free",
    description: `Perfect for those mornings when you want to look effortlessly cool, even if "effortless" involved hitting snooze five times. 

These sleek, dark lenses hide a multitude of sins (like forgetting to brush your hair). They're also pretty good at blocking out the actual sun.`,
    tagline: "Effortlessly cool style",
  },
  {
    id: "2",
    image: "",
    info: {
      name: "Glare Begone!",
      brand: "Oakley",
      material: ["Wood"],
      features: ["Polarized", "Anti-Scratch Coating"],
    },
    price: {
      value: 54.5,
      currency: "USD",
    },
    rating: {
      value: 4.7,
      reviewsAmount: 180,
    },
    deliveryType: "free",
    description: `Stop squinting! These polarized beauties are specifically designed to reduce glare from water, snow, and overly shiny surfaces. 

Now you can actually see where you're going, which is a definite plus. Also great for pretending you can't hear someone.`,
    tagline: "See clearly now",
  },
];

const ProductsContext = createContext<Product[]>([]);

export default ProductsContext;
