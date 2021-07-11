import { FC } from "react";

export interface IModalParams {
  handleAccept(): void,
  handleCancel(): void,
  show: boolean,
  title?: string,
  content?: string,
  acceptBtn?: string,
  cancelBtn?: string
}

export interface IRoute {
  path: string,
  component: FC<any>, // WTF
  exact: boolean,
  params?: object
}