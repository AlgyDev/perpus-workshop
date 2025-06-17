export interface Response {
  code: number;
  success: boolean;
  message: string;
}

export const initialResponse: Response = {
  code: 200,
  success: true,
  message: "",
};
