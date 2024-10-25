{
  /*5_00 ---> 5 dollars and 0 cents */
}
{
  /* Similarly with this notation, 1 mil ---> 1_000_000 */
}

export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 5_00,
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const;

export const BASE_PRICE = 14_00;
