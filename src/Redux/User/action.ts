export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export function setUser(user: string) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}
