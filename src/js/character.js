export default class Character {
  constructor(name, type) {
    const typesForCheck = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!typesForCheck.includes(type)) {
      throw new Error(
        `Тип должен быть из списка: ${typesForCheck.join(', ')}`,
      );
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error(
        'Имя должно состоять минимум из 2 символов, максимум из 10',
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
