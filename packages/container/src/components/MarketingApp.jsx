import { mount } from "marketing/MarketingApp";
import React from "react";
import { useRef, useEffect } from "react";

export const MarketingApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};
