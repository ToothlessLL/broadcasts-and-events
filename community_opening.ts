import {writeFile, numberWithCommas} from './general.js';
import { GlobalFonts, createCanvas, loadImage, Canvas } from '@napi-rs/canvas';
import { broadcasts } from './broadcast data.js';
import { CommunityOpening, Colors } from './config.ts';
import { get_skeleton_image } from './skeleton.ts';
import { Image } from '@napi-rs/canvas';

CommunityOpening.title = 'Clue Chasers Community Log';
CommunityOpening.filename = '2025 Summer Broadcasts.png';

const canvas: Promise<Canvas> | Canvas = await get_skeleton_image(CommunityOpening);

// const filename = path.parse(import.meta.filename).name;
// console.log(`\x1b[48;5;201m\x1b[34;2;145;231;255m${filename}\x1b[0m`);

// loading custom fonts

const clueTitles = {
	easy: {
		base: '#E8C502'
		, title: 'the Gold Digger'
	}, medium: {
		base: '#3294D0'
		, title: 'Clueless'
	}, hards: {
		base: '#A227BA'
		, golden: '#E4A604'
		, title: 'Double Agent'
	}, elites: {
		base: '#005D02'
		, golden: '#E4A604'
		, title: 'the Clue Chaser'
	}, masters: {
		base: '#B70337'
		, golden: '#E4A604'
		, title: 'Master of Clues'
	}
}

GlobalFonts.registerFromPath(`./Fonts/trajan-pro\\TrajanPro-Regular.ttf`, 'trajan pro');
GlobalFonts.registerFromPath(`.\\Fonts\\runescape_uf\\runescape_uf.ttf`, 'runescape');

const broadcastList = [
	{name: `Barrows dye`, count: 128, value: 125326523},
	{name: `Shadow dye`, count: 69, value: 1200000000},
	{name: `Ice dye`, count: 53, value: 1200000000},
	{name: `Third Age dye`, count: 18, value: 11000000000},
	{name: `Blood dye`, count: 12, value: 11000000000},
	{name: `Third age full helmet`, count: 2, value: 190377931},
	{name: `Third age platebody`, count: 0, value: 480790924},
	{name: `Third age platelegs`, count: 2, value: 849465991},
	{name: `Third age kiteshield`, count: 2, value: 198136072},
	{name: `Backstab cape`, count: 61, value: 2223742},
	{name: `Third age mage hat`, count: 2, value: 168230119},
	{name: `Third age robe top`, count: 3, value: 221806499},
	{name: `Third age robe`, count: 2, value: 170881678},
	{name: `Third age amulet`, count: 1, value: 481331640},
	{name: `Sack of effigies`, count: 33, value: 1904388},
	{name: `Third age ranger coif`, count: 3, value: 172375978},
	{name: `Third age ranger body`, count: 2, value: 171390545},
	{name: `Third age ranger chaps`, count: 0, value: 168317963},
	{name: `Third age vambraces`, count: 1, value: 173059795},
	{name: `Explosive barrel`, count: 2, value: 39981026},
	{name: `Third age druidic wreath`, count: 2, value: 574681739},
	{name: `Third age druidic robe top`, count: 3, value: 209106970},
	{name: `Third age druidic robe bottom`, count: 2, value: 164322255},
	{name: `Third age druidic staff`, count: 1, value: 154695334},
	{name: `Third age druidic cloak`, count: 1, value: 170794000},
	{name: `Second-Age full helm`, count: 1, value: 153802084},
	{name: `Second-Age platebody`, count: 1, value: 512951577},
	{name: `Second-Age platelegs`, count: 1, value: 760197568},
	{name: `Second-Age sword`, count: 0, value: 215015769},
	{name: `Orlando Smith's hat`, count: 3, value: 15000000000},
	{name: `Second-Age mage mask`, count: 0, value: 176842716},
	{name: `Second-Age robe top`, count: 3, value: 712868742},
	{name: `Second-Age robe bottom`, count: 2, value: 719377500},
	{name: `Second-Age staff`, count: 2, value: 236889323},
	{name: `Golden Compass`, count: 4, value: 0},
	{name: `Second-Age range coif`, count: 0, value: 89658487},
	{name: `Second-Age range top`, count: 2, value: 254542691},
	{name: `Second-Age range legs`, count: 0, value: 262322527},
	{name: `Second-Age bow`, count: 2, value: 243482329},
	{name: `Blank`, count: 0, value: 0},
]

var realityCheck = [
	{name: 'Barrows dye', onLog: 0, expected: 0},
	{name: 'Shadow dye', onLog: 0, expected: 0},
	{name: 'Ice dye', onLog: 0, expected: 0},
	{name: 'Third age dye', onLog: 0, expected: 0},
	{name: 'Blood dye', onLog: 0, expected: 0},
	{name: 'Backstab cape', onLog: 0, expected: 0},
	{name: 'Sack of effigies', onLog: 0, expected: 0},
	{name: 'Third age', onLog: 0, expected: 0},
	{name: 'Third age druidic', onLog: 0, expected: 0},
	{name: 'Second-Age', onLog: 0, expected: 0},
	{name: 'Explosive barrel', onLog: 0, expected: 0},
	{name: "Orlando Smith's hat", onLog: 0, expected: 0}
];

const textCenter = 750;
const textStart = 490;
const padding = 20;
let totalBroadcasts = 0;
let totalValue = 0;

// const imageRootPath = '.';
// const imageBase = loadImage(`${imageRootPath}/skeleton.png`);
const itemsPerRow = 5;
const itemImageMap: Promise<Image>[] = [];
// const imageMetadata = new Map();

broadcastList.forEach((value, key) => {
	let litUnlit = value.count == 0 ? 'unlit' : 'lit';
	let broadcast = broadcasts.get(value.name);
	let index = itemImageMap.push(loadImage(`${broadcast.filename}${value.name.toLowerCase() == 'blank' ? '' : `_${litUnlit}`}.png`)) - 1;
	// imageMetadata.set(index, value.name);
	totalBroadcasts += value.count;
	totalValue += value.count * value.value;
})

// for (let i = 0; i < broadcasts.length; i++) {
// 	itemImageMap.push(loadImage(`${imageRootPath}/images/${broadcasts[i].item}${broadcasts[i].item == 'blank' ? '' : `_${litUnlit}`}.png`));
// 	if (broadcasts[i].item == 'blank') {
// 		image = await loadImage(`${imageRootPath}/images/empty.png`);
// 	} else {
// 		let litUnlit = broadcasts[i].count == 0 ? 'unlit' : 'lit';
// 		image = await loadImage(`${imageRootPath}/images/${broadcasts[i].item}_${litUnlit}.png`);
// 	}
// 	let imageXPosition = 20 + ((i%5) * image.width);
// 	let imageYPosition = 63 + (image.height * Math.floor(i/5));
// 	context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
// 	!(broadcasts[i].count == 0 || broadcasts[i].count == 1) ? context.fillText(broadcasts[i].count.toString(), imageXPosition + 12, imageYPosition + 25) : null;
// };

// context.fillStyle = Colors.yellow;
// context.fillRect(0,0,canvas.width,canvas.height);

// context.drawImage(backgroundImage, 15, 35, canvas.width, canvas.height);
// context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

// context.font = '25px runescape';
// context.fillStyle = Colors.yellow;
// let title = '2024 Clue Summer Spectacle Opening Log';
// context.fillText(title, 100, 42);

Promise.all([Promise.all(itemImageMap)])
.then(result => {
	// const imageBase = result[0];
	const images = result[0];

	// const canvas = createCanvas(imageBase.width, imageBase.height);
	const context = canvas.getContext('2d');

	// context.drawImage(imageBase, 0, 0, canvas.width, canvas.height);
	// context.drawImage(borders, 0, 0, canvas.width, canvas.height);
	
	context.font = `27px runescape`
	context.fillStyle = Colors.yellow;
	images.forEach((image, key) => {
		// let name = imageMetadata.get(key);
		let imageXPosition = 20 + ((key%itemsPerRow) * image.width);
		let imageYPosition = 63 + (image.height * Math.floor(key/itemsPerRow));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		!(broadcastList[key].count == 0 || broadcastList[key].count == 1) ? context.fillText(broadcastList[key].count.toString(), imageXPosition + 12, imageYPosition + 25) : null;
	});

	// context.font = '25px runescape';
	// context.fillStyle = Colors.yellow;
	// let title = '2024 Clue Chasers Winter Opening Log'.toUpperCase();
	// context.fillText(title, 100, 42);

	context.font = '20px trajan pro';
	context.fillStyle = Colors.yellow;
	let currentHeight = 86;
	let title = `Total caskets opened: 155,498`;
	context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
	context.fillStyle = Colors.yellow;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
	title = `Total participants: 87`;
	context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
	title = `Total broadcasts: ${numberWithCommas(totalBroadcasts)}`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
	context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
	title = `Total value: ${numberWithCommas(totalValue)}`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	context.fillText(`Total value: `, textCenter - context.measureText(title).width/2, currentHeight);
	context.fillStyle = '#4C77C4';
	context.fillText(numberWithCommas(totalValue), textCenter - context.measureText(title).width/2 + context.measureText(`Total value: `).width, currentHeight);
	title = `Top 3 GP earned`;
	context.fillStyle = Colors.ivory;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
	context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
	context.fillStyle = Colors.yellow;
	context.lineWidth = 3;
	context.strokeStyle = Colors.ivory;
	context.beginPath();
	context.moveTo(textCenter - context.measureText(title).width/2, currentHeight + 4);
	context.lineTo(textCenter + context.measureText(title).width/2, currentHeight + 4);
	context.stroke();

	const topGP = [
		{name: 'Elba', gp: 86037316083}
		, {name: 'Mr Cob', gp: 80241064863}
		, {name: 'snowy alan', gp: 54491606654}
	];

	topGP.forEach((value, key) => {
		let fullText = `${value.name}: ${numberWithCommas(value.gp)}`;
		let name = `${value.name}: `;
		let gp = numberWithCommas(value.gp);
		currentHeight += context.measureText(title).actualBoundingBoxAscent + 10;
		context.fillStyle = Colors.yellow;
		context.fillText(name, textCenter - context.measureText(fullText).width/2, currentHeight);
		context.fillStyle = '#4C77C4';
		context.fillText(gp, textCenter - context.measureText(fullText).width/2 + context.measureText(name).width, currentHeight);
	});

	title = `Double Broadcasts`;
	context.fillStyle = Colors.ivory;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
	context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
	context.fillStyle = Colors.yellow;
	context.lineWidth = 3;
	context.strokeStyle = Colors.ivory;
	context.beginPath();
	context.moveTo(textCenter - context.measureText(title).width/2, currentHeight + 4);
	context.lineTo(textCenter + context.measureText(title).width/2, currentHeight + 4);
	context.stroke();

	const doubleBroadcasts = [
		{name: 'Lovvel', item1: "Sack of effigies", item2: "Ice dye"}
		, {name: 'Elba', item1: "Ice dye", item2: "Second-Age staff"}
	];

	doubleBroadcasts.forEach((value, key) => {
		let totalString = '';
		let totalLength;
		let title = `${value.name}: ${value.item1} and ${value.item2}`;
		currentHeight += context.measureText(title).actualBoundingBoxAscent + padding/2;
		let name = `${value.name}: `;
		totalString += name;
		context.fillStyle = Colors.yellow;
		context.fillText(name, textCenter - context.measureText(title).width/2, currentHeight);
		totalLength = context.measureText(totalString).width
		totalString += value.item1;
		context.fillStyle = broadcasts.get(value.item1).color;
		context.fillText(value.item1, textCenter - context.measureText(title).width/2 + totalLength, currentHeight);
		context.fillStyle = Colors.yellow;
		let text = ` and `;
		totalLength = context.measureText(totalString).width;
		totalString += text;
		context.fillText(text, textCenter - context.measureText(title).width/2 + totalLength, currentHeight);
		totalLength = context.measureText(totalString).width;
		totalString += value.item2;
		context.fillStyle = broadcasts.get(value.item2).color;
		context.fillText(value.item2, textCenter - context.measureText(title).width/2 + totalLength, currentHeight);
	});

	// title = `La Habibi: Barrows Dye and Ice Dye`;
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding/2
	// context.fillText(`La Habibi: `, textCenter - context.measureText(title).width/2, currentHeight);
	// context.fillStyle = barrows;
	// context.fillText(`Barrows Dye`, textCenter - context.measureText(title).width/2 + context.measureText(`La Habibi: `).width, currentHeight);
	// context.fillStyle = Colors.yellow;
	// context.fillText(` and `, textCenter - context.measureText(title).width/2 + context.measureText(`La Habibi: Barrows Dye`).width, currentHeight);
	// context.fillStyle = ice;
	// context.fillText(`Ice Dye`, textCenter - context.measureText(title).width/2 + context.measureText(`La Habibi: Barrows Dye and `).width, currentHeight);

	title = `New Titles`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
	context.fillStyle = Colors.ivory;
	context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
	context.fillStyle = Colors.yellow;
	context.lineWidth = 3;
	context.strokeStyle = Colors.ivory;
	context.moveTo(textCenter - context.measureText(title).width/2, currentHeight + 4);
	context.lineTo(textCenter + context.measureText(title).width/2, currentHeight + 4);
	context.stroke();

	// context.font = '28px Cinzel';
	// title = `${clueTitles.easy.title}: ${names}`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;

	context.fillStyle = clueTitles.easy.base;
	title = clueTitles.easy.title;
	context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	context.strokeStyle = clueTitles.easy.base;
	context.beginPath();
	context.moveTo((canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight + 4);
	context.lineTo((canvas.width - 16 - textStart)/4 + textStart + context.measureText(title).width/2, currentHeight + 4);
	context.stroke();


	context.fillStyle = clueTitles.hards.base;
	title = clueTitles.hards.title;
	context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	context.strokeStyle = clueTitles.hards.base;
	context.beginPath();
	context.moveTo((canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight + 4);
	context.lineTo((canvas.width - 16 - textStart)/4 * 3 + textStart + context.measureText(title).width/2, currentHeight + 4);
	context.stroke();

	title = `im Crystal`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	context.fillStyle = Colors.yellow;
	context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	title = `Pintura`;
	context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);

	
	title = `DryDinoP0re`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	title = `Lady Aurora`;
	context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	
	title = `Bloodbarrer1`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);

	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;

	context.fillStyle = clueTitles.elites.base;
	title = clueTitles.elites.title;
	context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	context.strokeStyle = clueTitles.elites.base;
	context.beginPath();
	context.moveTo((canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight + 4);
	context.lineTo((canvas.width - 16 - textStart)/4 + textStart + context.measureText(title).width/2, currentHeight + 4);
	context.stroke();


	context.fillStyle = clueTitles.masters.base;
	title = clueTitles.masters.title;
	context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	context.strokeStyle = clueTitles.masters.base;
	context.beginPath();
	context.moveTo((canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight + 4);
	context.lineTo((canvas.width - 16 - textStart)/4 * 3 + textStart + context.measureText(title).width/2, currentHeight + 4);
	context.stroke();

	context.fillStyle = Colors.yellow;
	title = `Yooper`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	title = `Jenspa`;
	context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	
	title = `Annapoly`;
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	title = `Strektre`;
	context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	
	currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	title = `Curtizio`;
	context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);

	return canvas.encode('png')
})
.then(result => {
	writeFile(CommunityOpening.filename, result)
})
.catch(error => console.log(error));
