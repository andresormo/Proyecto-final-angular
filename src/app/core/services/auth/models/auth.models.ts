export interface IUser {
  _id: string;
  email: string;
  password: string | null;
  rol: string;
  cif:string;
  nombre:string;
  direccion:string;
  numero:string;
  cp:string;
  localidad:string;
  portada:string;
  capital:string;
  trabajadores:string;
  createdAt?:string;
  updatedAt?:string;
  __v?: string;
}

export interface IUserSignInResponse{
  userToLog: IUser;
  token:string
}


export interface UserRequestBody{
  email: string,
  password:string,
  rol: string,
  cif: string,
  nombre:string,
  direccion:string,
  numero:string,
  cp:string,
  localidad:string,
  portada:string,
  capital:string
  trabajadores:string
}
