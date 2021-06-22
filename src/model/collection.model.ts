import { Item } from "./cart.model";

export interface CollectionInterface {
  title: string,
  items: Array<Item>
}

export interface CollectionItemInterface {
  item: Item,
  addItem?: (item:Item) => void
}