import Zombie from '../zombie';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';

test.each([
  [
    'all classes',
    [
      new Bowman('Bowman', 'Bowman'),
      new Daemon('Daemon', 'Daemon'),
      new Magician('Magician', 'Magician'),
      new Swordsman('Swordsman', 'Swordsman'),
      new Undead('Undead', 'Undead'),
      new Zombie('Zombie', 'Zombie'),
    ],
    [
      {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ],
  ],
])('testing working status of %s', (_, imported, expected) => {
  expect(imported).toEqual(expected);
});
