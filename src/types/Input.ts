export interface inputProps {
  typeProp: string;
  placeholderProp?: string;
  valueProp?: string | number | readonly string[] | undefined;
  onChangeProp?: (value: string) => void;
  requiredProp?: boolean;
}
