/**
 * A simple check whether we're in a browser or node context.
 *
 * @returns
 */
export const isNode = () => typeof window === "undefined";
