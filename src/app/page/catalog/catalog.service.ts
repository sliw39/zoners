import { Injectable } from '@angular/core';
import { Weapon } from '../../assets/weapon/weapon.model';

const WEAPONS = [
  {
    id: 0,
    name: "TAR-21",
    detail: "",

    weight: 3,
    ammo: 10,
    ammotype: "5.56",
    power: {
      dice: 4,
      bonus: 3
    },

    handling: 10,
    accuracy: {
      veryshort: { dice: 3 },
      short: { dice: 3 },
      medium: { dice: 3 },
      long: { dice: 3 },
      verylong: { dice: 1 }
    },

    price: 0
  },
  {
    id: 0,
    name: "AK-47",
    detail: "",

    weight: 3,
    ammo: 10,
    ammotype: "5.56",
    power: {
      dice: 4,
      bonus: 3
    },

    handling: 10,
    accuracy: {
      veryshort: { dice: 3 },
      short: { dice: 6 },
      medium: { dice: 3 },
      long: { dice: 3 },
      verylong: { dice: 1 }
    },

    price: 0
  },
  {
    id: 0,
    name: "SKS",
    detail: "",

    weight: 3,
    ammo: 10,
    ammotype: "5.56",
    power: {
      dice: 4,
      bonus: 3
    },

    handling: 10,
    accuracy: {
      veryshort: { dice: 3 },
      short: { dice: 6 },
      medium: { dice: 3 },
      long: { dice: 3 },
      verylong: { dice: 1 }
    },

    price: 0
  },
  {
    id: 0,
    name: "TAR-21",
    detail: "",

    weight: 3,
    ammo: 10,
    ammotype: "5.56",
    power: {
      dice: 4,
      bonus: 3
    },

    handling: 10,
    accuracy: {
      veryshort: { dice: 3 },
      short: { dice: 6 },
      medium: { dice: 3 },
      long: { dice: 3 },
      verylong: { dice: 1 }
    },

    price: 0
  }
];

@Injectable()
export class CatalogService {

  constructor() { }

  getWeapons() {
    return Promise.resolve(WEAPONS);
  }

}
