export default interface IValidateReturn {
  type: string;
  value: { 
    token?: string,
    message?: string 
  };
}