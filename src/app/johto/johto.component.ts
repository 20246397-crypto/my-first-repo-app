import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [CommonModule, LeaderInfoComponent],
  templateUrl: './johto.component.html',
  styleUrls: ['./johto.component.css']
})
export class JohtoComponent {
  johtoLeaders = [
    {
      name: 'Falkner',
      age: 16,
      location: 'Violet City',
      team: 'Flying Pokémon', 
      badge: 'Zephyr',  
      motto: 'The sky is my battlefield.'
    },
    {
      name: 'Bugsy',
      age: 15,
      location: 'Azalea Town',
      team: 'Bug Pokémon',  
      badge: 'Hive', 
      motto: 'Bug Pokémon evolve fast!'
    },
    {
      name: 'Whitney',
      age: 14,
      location: 'Goldenrod City',
      team: 'Normal Pokémon',  
      badge: 'Plain',  
      motto: 'Cute but incredibly strong!'
    },
    {
      name: 'Morty',
      age: 25,
      location: 'Ecruteak City',
      team: 'Ghost Pokémon',  
      badge: 'Fog',  
      motto: 'Ghosts reveal the unseen.'
    },
    {
      name: 'Chuck',
      age: 40,
      location: 'Cianwood City',
      team: 'Fighting Pokémon', 
      badge: 'Storm',  
      motto: 'Train until you drop!'
    },
    {
      name: 'Jasmine',
      age: 19,
      location: 'Olivine City',
      team: 'Steel Pokémon',  
      badge: 'Mineral',  
      motto: 'Steel has both strength and kindness.'
    },
    {
      name: 'Pryce',
      age: 60,
      location: 'Mahogany Town',
      team: 'Ice Pokémon',  
      badge: 'Glacier', 
      motto: 'Cold patience wins battles.'
    },
    {
      name: 'Clair',
      age: 22,
      location: 'Blackthorn City',
      team: 'Dragon Pokémon',  
      badge: 'Rising', 
      motto: 'Dragons are legendary!'
    }
  ];

  onMonologueClick(leaderName: string) {
    console.log(`Monologue clicked for ${leaderName}`);
  }
}