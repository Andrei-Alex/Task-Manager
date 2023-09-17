export type CustomStyles = {
  [key: string | number | symbol]: string | number | {};
} | null;

export type Flex =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
