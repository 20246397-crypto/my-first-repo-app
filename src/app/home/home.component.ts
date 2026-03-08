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
      description: 'The first region introduced in the Pokémon series.',
      history: 'Kanto is home to Professor Oak and features 8 gyms. Famous for locations like Pallet Town and the Indigo Plateau.',
      professor: 'Professor Oak',
      starters: ['Bulbasaur', 'Charmander', 'Squirtle']
    },
    {
      name: 'Johto Region',
      description: 'Located west of Kanto, known for its rich traditions.',
      history: 'Johto features the ancient Bell Tower. It is connected to Kanto via the Magnet Train.',
      professor: 'Professor Elm',
      starters: ['Chikorita', 'Cyndaquil', 'Totodile']
    },
    {
      name: 'Hoenn Region',
      description: 'A large island region with diverse natural environments.',
      history: 'Hoenn is known for its vast ocean routes and volcanic mountains. Home to the Weather Institute and the Sootopolis Gym.',
      professor: 'Professor Birch',
      starters: ['Treecko', 'Torchic', 'Mudkip']
    }
  ];
}