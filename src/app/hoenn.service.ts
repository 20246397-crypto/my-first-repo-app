import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennService {

  // Private signal for Hoenn Gym Leaders data
  private hoennData = signal([
    { name: 'Roxanne', town: 'Rustboro City', specialty: 'Rock', badge: 'Stone Badge', team: 'Geodude, Nosepass' },
    { name: 'Brawly', town: 'Dewford Town', specialty: 'Fighting', badge: 'Knuckle Badge', team: 'Machop, Makuhita' },
    { name: 'Wattson', town: 'Mauville City', specialty: 'Electric', badge: 'Dynamo Badge', team: 'Magnemite, Voltorb, Magneton' },
    { name: 'Flannery', town: 'Lavaridge Town', specialty: 'Fire', badge: 'Heat Badge', team: 'Slugma, Magcargo, Torkoal' },
    { name: 'Norman', town: 'Petalburg City', specialty: 'Normal', badge: 'Balance Badge', team: 'Slaking, Vigoroth, Slaking' },
    { name: 'Winona', town: 'Fortree City', specialty: 'Flying', badge: 'Feather Badge', team: 'Swellow, Pelipper, Skarmory, Altaria' },
    { name: 'Tate & Liza', town: 'Mossdeep City', specialty: 'Psychic', badge: 'Mind Badge', team: 'Lunatone, Solrock' },
    { name: 'Wallace', town: 'Sootopolis City', specialty: 'Water', badge: 'Rain Badge', team: 'Luvdisc, Whiscash, Sealeo, Seaking, Milotic' }
  ]);

  getLeaders() {
    return this.hoennData.asReadonly();
  }
}