import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item, ItemType } from '../../assets/item.model';
import { Weapon } from '../../assets/weapon/weapon.model';
import { Observable } from 'rxjs/Observable';
import { Equipment } from '../../assets/equipment/equipment.model';
import { WeaponService } from '../../assets/weapon/weapon.service';
import { EquipmentService } from '../../assets/equipment/equipment.service';
import { FullscreenService } from '../../common/fullscreen/fullscreen.service';
import { EquipmentFormComponent } from '../../assets/equipment/equipment-form.component';
import { WeaponFormComponent } from '../../assets/weapon/weapon-form.component';
import { MeleeWeapon } from '../../assets/melee-weapon/melee-weapon.model';
import { MeleeWeaponFormComponent } from '../../assets/melee-weapon/melee-weapon-form.component';
import { MeleeWeaponService } from '../../assets/melee-weapon/melee-weapon.service';
import { ArtifactFormComponent } from '../../assets/artifact/artifact-form.component';
import { ArtifactService } from '../../assets/artifact/artifact.service';
import { Artifact } from '../../assets/artifact/artifact.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [ EquipmentService, WeaponService, MeleeWeaponService, ArtifactService ]
})
export class CatalogComponent implements OnInit {

  weapons: Observable<Weapon[]>;
  equipments: Observable<Equipment[]>;
  meleeWeapons: Observable<MeleeWeapon[]>;
  artifacts: Observable<Artifact[]>;

  currentItemType: ItemType;
  currentItem: Item;

  @Output() selectedItemChange = new EventEmitter<{
    itemType: ItemType;
    item: Item;
  }>();

  constructor(
    private equipmentService: EquipmentService,
    private weaponService: WeaponService,
    private meleeWeaponService: MeleeWeaponService,
    private artifactService: ArtifactService,
    private fullscreenService: FullscreenService
  ) { }

  ngOnInit() {
    this.weapons = this.weaponService.list();
    this.equipments = this.equipmentService.list();
    this.meleeWeapons = this.meleeWeaponService.list();
    this.artifacts = this.artifactService.list();
  }

  createItem(itemType: ItemType) {
    this.currentItemType = itemType;
    if(itemType === "EQUIPMENT") {
      this.currentItem = this.equipmentService.createEquipement();
    } else if(itemType === "WEAPON") {
      this.currentItem = this.weaponService.createWeapon();
    } else if(itemType === "MELEE") {
      this.currentItem = this.meleeWeaponService.createWeapon();
    } else if(itemType === "ARTIFACT") {
      this.currentItem = this.artifactService.createArtifact();
    }

    this.selectedItemChange.emit({
      item: this.currentItem,
      itemType: this.currentItemType
    });

    this.openItem(this.currentItemType, this.currentItem);
  }

  selectItem(itemType: ItemType, item: Item) {
    this.currentItemType = itemType;
    this.currentItem = item;

    this.selectedItemChange.emit({
      item: this.currentItem,
      itemType: this.currentItemType
    });
  }

  openItem(itemType: ItemType, item: Item) {
    switch(itemType) {
      case "EQUIPMENT":
        this.fullscreenService.show(EquipmentFormComponent, item);
        break;
      case "WEAPON":
        this.fullscreenService.show(WeaponFormComponent, item);
        break;
      case "MELEE":
        this.fullscreenService.show(MeleeWeaponFormComponent, item);
        break;
      case "ARTIFACT":
        this.fullscreenService.show(ArtifactFormComponent, item);
        break;
    }
  }

}
