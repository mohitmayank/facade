declare namespace Facade {
  interface Product {
    product_id: string
    sku: string
    category: string
    name: string
    brand: string
    variant: string
    price: number
    quantity: number
    coupon: string
    position: number
    url: string
    image_url: string
  }
  export class Track {
    /** Return the type of facade this is. This will always return `"track"`. */
    action(): 'track'
    /** Get the event name from `event`. */
    event(): string | any
    /** Get the event value, usually the monetary value, from `properties.value`. */
    value(): number | any
    /** Get the event cateogry from `properties.category`. */
    category(): string | any
    /** Get the event ID from `properties.id`. */
    id(): string
    /** Get the product ID from `properties.productId` || `properties.product_id` */
    productId(): string | any
    /** Get the promotion ID from `properties.promotionId` || properties.promotion_id */
    promotionId(): string | any
    /** Get the cart ID from `properties.cartId`. */
    cartId(): string | any
    /** Get the checkout ID from `properties.checkoutId` || `properties.checkout_id` */
    checkoutId(): string | any
    /** Get the payment ID from `properties.paymentId` || `properties.payment_id` */
    paymentId(): string | any
    /** Get the coupon ID from `properties.couponId` || `properties.coupon_id` */
    couponId(): string | any
    /** Get the wishlist ID from `properties.wishlistId` || `properties.wishlist_id` */
    wishlistId(): string | any
    /** Get the review ID from `properties.reviewId` || `properties.review_id` */
    reviewId(): string | any
    /** Get the order ID from `properties.id` or `properties.orderId` || `properties.order_id` */
    orderId(): string | any
    /** Get the SKU from `properties.sku`. */
    sku(): string | any
    /** Get the amount of tax for this purchase from `properties.tax`. */
    tax(): number | any
    /** Get the name of this event from `properties.name`. */
    name(): string | any
    /** Get the price of this purchase from `properties.price`. */
    price(): number | any
    /** Get the total for this purchase from `properties.total`. */
    total(): number | any
    /** Whether this is a repeat purchase from `properties.repeat`. */
    repeat(): boolean | any
    /** Get the coupon for this purchase from `properties.coupon`. */
    coupon(): string | any
    /** Get the shipping for this purchase from `properties.shipping`. */
    shipping(): number | any
    /** Get the discount for this purchase from `properties.discount`. */
    discount(): number | any
    /** Get the shipping method for this purchase from `properties.shippingMethod`. */
    shippingMethod(): string | any
    /** Get the payment method for this purchase from `properties.paymentMethod` || `properties.payment_method` */
    paymentMethod(): string | any
    /** Get a description for this event from `properties.description` */
    description(): string | any
    /** Get a plan, as in the plan the user is on, for this event from */
    plan(): string | any
    /**
     * Get the subtotal for this purchase from `properties.subtotal`.
     *
     * If `properties.subtotal` isn't available, then fall back to computing the
     * total from `properties.total` or `properties.revenue`, and then subtracting
     * tax, shipping, and discounts.
     *
     * If neither subtotal, total, nor revenue are available, then return 0.
    */
    subtotal(): string | any
    /** Get the products for this event from `properties.products` if it's an array, falling back to an empty array. */
    products(): Partial<Product>[]
    /** Get the quantity for this event from `properties.quantity`, falling back to a quantity of one. */
    quantity(): number
    /** Get the currency for this event from `properties.currency`, falling back to "USD". */
    currency(): string
    /** Get the referrer for this event from `context.referrer.url`, `context.page.referrer`, or `properties.referrer`. */
    referrer(): string
  }
}
