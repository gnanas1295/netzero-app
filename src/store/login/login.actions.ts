import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const recoverPassword = createAction("[Recover password]");
export const recoverPasswordSuccess =  createAction("[Recover password] success");
export const recoverPasswordFail =  createAction("[Recover password] fail", props<{error: any}>());

export const login = createAction("[Login]");
export const loginSuccess = createAction("[Login] success", props<{user: User}>());
export const loginFail = createAction("[Login] fail", props<{error: any}>());