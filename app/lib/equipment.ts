export type EquipmentItem = {
  id: string;
  image: string;
  name: string;
  note: string;
};

export const equipment: EquipmentItem[] = [
  {
    id: "van",
    image: "/equip-van.webp",
    name: "Голям бус",
    note: "за извозване на отпадъци и превоз на мебели"
  },
  {
    id: "jeep",
    image: "/equip-jeep.webp",
    name: "Високопроходим джип",
    note: "за достъп до труднодостъпни имоти"
  },
  {
    id: "trimmer",
    image: "/equip-trimmer.webp",
    name: "Тримери и храсторез",
    note: "за храсти и обрасли площи"
  },
  {
    id: "mower",
    image: "/equip-mower.webp",
    name: "Косачки",
    note: "за косене и поддръжка на дворове"
  },
  {
    id: "chainsaw",
    image: "/equip-chainsaw.webp",
    name: "Резачка за дърва",
    note: "за рязане на опасни дървета"
  },
  {
    id: "paintgun",
    image: "/equip-paintgun.webp",
    name: "Пистолети за боядисване",
    note: "за боядисване на повърхности и фасади"
  },
  {
    id: "sprayer",
    image: "/equip-sprayer.webp",
    name: "Пръскалка",
    note: "за убиване на кърлежи и бурени"
  },
  {
    id: "kirby",
    image: "/services/kirby1.webp",
    name: "Kirby",
    note: "професионална система за дълбоко почистване на мебели и текстил"
  },
  {
    id: "rainbow",
    image: "/services/rainbow1.webp",
    name: "Rainbow",
    note: "извличане на прах, акари и алергени в дълбочина"
  }
];

export function getEquipmentByIds(ids: string[]): EquipmentItem[] {
  return ids
    .map((id) => equipment.find((item) => item.id === id))
    .filter((item): item is EquipmentItem => Boolean(item));
}
