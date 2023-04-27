import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const formatPrice = (number) => {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "eur",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname]);
};
