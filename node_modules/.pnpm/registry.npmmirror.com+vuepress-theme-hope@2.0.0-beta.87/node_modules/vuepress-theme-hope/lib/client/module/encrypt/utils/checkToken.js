import { compareSync } from "bcrypt-ts";
export const checkToken = (token = "", hash) => Boolean(token) && compareSync(token, hash);
//# sourceMappingURL=checkToken.js.map