import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [CommonModule, LeaderInfoComponent],
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent {
  kantoLeaders = [
    {
      name: 'Brock',
      age: 15,
      location: 'Pewter City',
      team: 'Rock Pokémon',
      badge: 'Boulder',
      motto: 'Rock solid defense!'
    },
    {
      name: 'Misty',
      age: 13,
      location: 'Cerulean City',
      team: 'Water Pokémon',  
      badge: 'Cascade',  
      motto: 'Water Pokémon are elegant!'
      
    },
    {
      name: 'Lt. Surge',
      age: 32,
      location: 'Vermilion City',
      team: 'Electric Pokémon',  
      badge: 'Thunder', 
      motto: 'Feel the electric shock!'
    },
    {
      name: 'Erika',
      age: 18,
      location: 'Celadon City',
      team: 'Grass Pokémon', 
      badge: 'Rainbow',  
      motto: 'Nature brings calm and strength.'
    },
    {
      name: 'Koga',
      age: 35,
      location: 'Fuchsia City',
      team: 'Poison Pokémon',  
      badge: 'Soul',  
      motto: 'Poison is the silent killer.'
    },
    {
      name: 'Sabrina',
      age: 21,
      location: 'Saffron City',
      team: 'Psychic Pokémon',  
      badge: 'Marsh',  
      motto: 'Psychic power controls all.'
    },
    {
      name: 'Blaine',
      age: 58,
      location: 'Cinnabar Island',
      team: 'Fire Pokémon', 
      badge: 'Volcano',  
      motto: 'Burn with passion!'
    },
    {
      name: 'Giovanni',
      age: 42,
      location: 'Viridian City',
      team: 'Ground Pokémon',  
      badge: 'Earth', 
      motto: 'True power comes from control.'
    }
  ];

  onMonologueClick(leaderName: string) {
    console.log(`Monologue clicked for ${leaderName}`);
   
  }
}