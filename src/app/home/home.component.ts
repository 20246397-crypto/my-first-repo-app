import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  regions = [
    {
      name: 'Kanto Region',
      description: 'The first region introduced in the Pokémon series, located east of Johto.',
      history: 'Kanto is home to Professor Oak and features 8 gyms led by powerful trainers including Brock, Misty, and Lt. Surge. The region includes famous locations like Pallet Town, Viridian Forest, and the Indigo Plateau.',
      professor: 'Professor Oak',
      starters: ['Bulbasaur', 'Charmander', 'Squirtle']
    },
    {
      name: 'Johto Region',
      description: 'Located west of Kanto, known for its rich traditions and natural beauty.',
      history: 'Johto features the ancient Bell Tower and Burned Tower in Ecruteak City. The region is connected to Kanto via the Magnet Train. Gym leaders include Falkner, Whitney, and Clair.',
      professor: 'Professor Elm',
      starters: ['Chikorita', 'Cyndaquil', 'Totodile']
    }
  ];
}