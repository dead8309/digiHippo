"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

const AddToCartButton = ({product}: {product: Product}) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        addItem(product)
        toast.success("Added to cart!");
        setIsSuccess(true);
      }}
      size="lg"
      className="w-full"
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
