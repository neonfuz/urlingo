export const where = <T,>(lets: T, body: (lets: T) => any) => body(lets);
