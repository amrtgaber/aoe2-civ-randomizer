import { API_URL } from '.';
import { ICiv } from './civs-api';
import { getId, ITechTreeItem, TechTreeItemType } from './tech-tree-item-api';

interface ApiUnit {
  id: number;
  unitName: string;
  civs: ICiv[];
}

const UNIT_MIN_ID = 1000;

export interface IUnit extends ITechTreeItem {
  kind: TechTreeItemType;
  civs: ICiv[];
}

export async function getUnits(): Promise<IUnit[]> {
  const response = await fetch(`${API_URL}/units`);
  const units = (await response.json()) as ApiUnit[];

  return units
    .map((unit) => {
      const { id, unitName: itemName, civs } = unit;
      const isUnique = civs.length === 1;
      return {
        id: getId(id, UNIT_MIN_ID),
        itemName,
        civs,
        isUnique,
        kind: TechTreeItemType.UNIT,
      };
    })
    .sort((unit1, unit2) => (unit1.itemName > unit2.itemName ? 1 : -1));
}
