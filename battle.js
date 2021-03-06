class Player{
	constructor(name, weapons){
	this.name = name;
	this.health = 10;
	this.strength = 2;
	this.weapons = [];
	}
	
	applyDamage(enemyDamage,health){
		health -= enemyDamage;
		return health
	};
	
	isAlive(){
		if (health>0){
		return true}
		else{
		return false};
	};
	
	attackWith(){
		var weapon = this.weapons[Math.floor(Math.random()*this.weapons.length)]
		return weapon;
	};
	
};

class Weapon{
	constructor(name){
		this.name = name;
		this.damage = Math.floor((Math.random() * 5) + 1)
	}
	
	attack(player,enemy){
		while (this.Player.isAlive == true && this.Enemy.isAlive == true){
			playerDamage = this.Player.strength*this.Weapon.damage
			this.Enemy.applyDamage(playerDamage)
			this.Enemy.isAlive()
			if (this.Enemy.isAlive = true){
			this.Enemy.attack(this.Player)};
		}
	};

};

class Enemy{
	constructor(){
		this.name = "Enemy";
		this.health = 5;
		this.strength = 2;
	}
	
	applyDamage(playerDamage){
		health -= damage;
		return health;
	;}
	
	isAlive(){
		if (this.Enemy.health>0){
		return true}
		else{
		return false};
	};
	
	attack(randomPlayer, strength){
		this.Player.applyDamage(strength)
	}
	
};

class BattleSimulation{
	constructor(players, enemies){
		this.players = [];
		this.enemies = [];
	}
	
	createEnemies(){
		for (var i=0; i<20; i++){
			var badGuy = new Enemy ();
			this.enemies.push(badGuy)
		}
};

	createPlayers(){
	//create an array called weaponsCache and fill it with 8 weapons.
	var weaponsCache = [];
	var tekko_kagi = new Weapon ("tekko-kagi");
	weaponsCache.push(tekko_kagi);
	var bo_staff = new Weapon ("bo staff");
	weaponsCache.push(bo_staff);
	var sai = new Weapon ("sai");
	weaponsCache.push(sai);
	var kama = new Weapon ("kama");
	weaponsCache.push(kama);
	var kusarigama = new Weapon ("kusarigama");
	weaponsCache.push(kusarigama);
	var kunai = new Weapon ("kunai");
	weaponsCache.push(kunai);
	var shuriken = new Weapon ("shuriken");
	weaponsCache.push(shuriken);
	var katana = new Weapon ("katana");
	weaponsCache.push(katana)
	//create players, passing name and weapon (array of weapons titled weaponsCache).
	var jade = new Player("Jade" , weaponsCache);
	this.players.push(jade)
	var hayden = new Player("Hayden" , weaponsCache);
	this.players.push(hayden)
	var savannah = new Player("Savannah" , weaponsCache);
	this.players.push(savannah)
	var art = new Player("Art" , weaponsCache);
	this.players.push(art)
	var brian = new Player("Brian" , weaponsCache);
	this.players.push(brian)
	};
	
	run(){
		console.log("Simulating Battle")
		this.createEnemies()
		this.createPlayers()
		do{
			var randomPlayer = this.players[Math.floor(Math.random() * this.players.length)]
			var randomEnemy = this.enemies[Math.floor(Math.random() * this.enemies.length)]
			randomPlayer.attackWith()
			weapon.attack(randomPlayer, randomEnemy)
		}
		while(enemies>0);
		console.log(players)
		console.log(enemies)
	};
	
};

var firstBattle = new BattleSimulation;
firstBattle.run()
