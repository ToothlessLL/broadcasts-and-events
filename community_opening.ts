import {writeFile, numberWithCommas} from './general.js';
import { GlobalFonts, createCanvas, loadImage, Canvas } from '@napi-rs/canvas';
import { broadcasts } from './broadcast data.js';
import { CommunityOpening, Colors, ClueTitles, TextOutput, getGPColor } from './config.ts';
import { get_skeleton_image } from './skeleton.ts';
import { Image } from '@napi-rs/canvas';

CommunityOpening.title = '2026 Summer Community Opening';
CommunityOpening.filename = '2026 Summer Community Opening.png';
CommunityOpening.width = 1205;
// CommunityOpening.height += 60;
const imageRootPath = './images/';

const canvas: Promise<Canvas> | Canvas = await get_skeleton_image(CommunityOpening);

// const filename = path.parse(import.meta.filename).name;
// console.log(`\x1b[48;5;201m\x1b[34;2;145;231;255m${filename}\x1b[0m`);

// loading custom fonts

interface DoubleBroadcasts {
	name: string;
	item1: string;
	item2: string;
}
const doubleBroadcasts: DoubleBroadcasts[] = [];

GlobalFonts.registerFromPath(`./Fonts/trajan-pro\\TrajanPro-Regular.ttf`, 'trajan pro');
GlobalFonts.registerFromPath(`.\\Fonts\\runescape_uf\\runescape_uf.ttf`, 'runescape');

/* paste here */
broadcasts.get(`Barrows dye`).data = {count: 219, value: 77765055};
broadcasts.get(`Shadow dye`).data = {count: 99, value: 800000000};
broadcasts.get(`Ice dye`).data = {count: 80, value: 750000000};
broadcasts.get(`Third Age dye`).data = {count: 19, value: 9500000000};
broadcasts.get(`Blood dye`).data = {count: 22, value: 10000000000};
broadcasts.get(`Third age full helmet`).data = {count: 9, value: 216809484};
broadcasts.get(`Third age platebody`).data = {count: 4, value: 402157703};
broadcasts.get(`Third age platelegs`).data = {count: 5, value: 739197215};
broadcasts.get(`Third age kiteshield`).data = {count: 4, value: 218770719};
broadcasts.get(`Backstab cape`).data = {count: 97, value: 1974480};
broadcasts.get(`Third age mage hat`).data = {count: 4, value: 203797167};
broadcasts.get(`Third age robe top`).data = {count: 9, value: 205211691};
broadcasts.get(`Third age robe`).data = {count: 5, value: 199316583};
broadcasts.get(`Third age amulet`).data = {count: 5, value: 409100362};
broadcasts.get(`Sack of effigies`).data = {count: 38, value: 2188490};
broadcasts.get(`Third age ranger coif`).data = {count: 5, value: 199489831};
broadcasts.get(`Third age ranger body`).data = {count: 4, value: 199857602};
broadcasts.get(`Third age ranger chaps`).data = {count: 4, value: 200681363};
broadcasts.get(`Third age vambraces`).data = {count: 3, value: 200749005};
broadcasts.get(`Explosive barrel`).data = {count: 3, value: 43415769};
broadcasts.get(`Third age druidic wreath`).data = {count: 8, value: 496572860};
broadcasts.get(`Third age druidic robe top`).data = {count: 6, value: 220709560};
broadcasts.get(`Third age druidic robe bottom`).data = {count: 5, value: 200445733};
broadcasts.get(`Third age druidic staff`).data = {count: 6, value: 197908107};
broadcasts.get(`Third age druidic cloak`).data = {count: 6, value: 199784979};
broadcasts.get(`Second-Age full helm`).data = {count: 0, value: 160262136};
broadcasts.get(`Second-Age platebody`).data = {count: 0, value: 534532453};
broadcasts.get(`Second-Age platelegs`).data = {count: 0, value: 793611791};
broadcasts.get(`Second-Age sword`).data = {count: 1, value: 224004485};
broadcasts.get(`Orlando Smith's hat`).data = {count: 2, value: 14500000000};
broadcasts.get(`Second-Age mage mask`).data = {count: 0, value: 176842716};
broadcasts.get(`Second-Age robe top`).data = {count: 1, value: 702393889};
broadcasts.get(`Second-Age robe bottom`).data = {count: 1, value: 719377500};
broadcasts.get(`Second-Age staff`).data = {count: 3, value: 245268304};
broadcasts.get(`Golden Compass`).data = {count: 9, value: 0};
broadcasts.get(`Second-Age range coif`).data = {count: 1, value: 93302122};
broadcasts.get(`Second-Age range top`).data = {count: 1, value: 264245717};
broadcasts.get(`Second-Age range legs`).data = {count: 1, value: 270877801};
broadcasts.get(`Second-Age bow`).data = {count: 1, value: 253547630};
broadcasts.get(`Blank`).data = {count: 0, value: 0};
const topGP = [{name: 'Paly', gp: 121461749567}, {name: 'wtf alan', gp: 54007119541}, {name: 'AndyB', gp: 51261062137}];
const totalCaskets = 225000;
const totalParticipants = 68;
// doubleBroadcasts.push({name: '', item1: '', item2: ''});
// doubleBroadcasts.push({name: '', item1: '', item2: ''});
ClueTitles.master.golden.list.push({rsn: 'Poptart', count: 20562});
ClueTitles.hard.base.list.push('Ngis');
ClueTitles.elite.base.list.push('Keyla');
ClueTitles.hard.golden.list.push({rsn: 'Elba', count: 37321});
ClueTitles.master.golden.list.push({rsn: 'Jamten', count: 8577});
ClueTitles.hard.base.list.push('Sept96');
ClueTitles.elite.base.list.push('Dio Tha Divi');
ClueTitles.elite.base.list.push('Ordinaryboyz');
ClueTitles.master.base.list.push('MaxedSkill');
ClueTitles.hard.base.list.push('lazy spider');
ClueTitles.elite.base.list.push('091283473');
/*end here */

const textStart = 490;
const padding = 20;
const textCenter = (canvas.width - padding - textStart)/2 + textStart;
// const textCenter = 750;
let totalBroadcasts = 0;
let totalValue: bigint = BigInt(0);

// const imageRootPath = '.';
// const imageBase = loadImage(`${imageRootPath}/skeleton.png`);
const itemsPerRow = 5;
const itemImageMap: Promise<Image>[] = [];
const itemMap = new Map();

// const imageMetadata = new Map();

/*used to check if images are loading*/
// for (const [key, value] of broadcasts) {
//   	console.log(key);
// 	let litUnlit = 'lit';
// 	const test = await loadImage(`${imageRootPath}${value.filename}${key.toLowerCase() == 'blank' ? '' : `_${litUnlit}`}.png`);
// 	let index = itemImageMap.push(loadImage(`${imageRootPath}${value.filename}${key.toLowerCase() == 'blank' ? '' : `_${litUnlit}`}.png`)) - 1;
// 	itemMap.set(index, key);
// 	totalBroadcasts += value.data.count;
// 	totalValue += BigInt(value.data.count.toString()) * BigInt(value.data.value.toString());
// }


broadcasts.forEach(async (value, key) => {
	// console.log(value);
	let litUnlit = value.data.count == 0 ? 'unlit' : 'lit';
	let index = itemImageMap.push(loadImage(`${imageRootPath}${value.filename}${key.toLowerCase() == 'blank' ? '' : `_${litUnlit}`}.png`)) - 1;
	itemMap.set(index, key);
	totalBroadcasts += value.data.count;
	totalValue += BigInt(value.data.count.toString()) * BigInt(value.data.value.toString());
});

Promise.all([Promise.all(itemImageMap)])
.then(result => {
	const images = result[0];
	const context = canvas.getContext('2d');
	const textOutput: TextOutput[] = [];

	const textConfig: TextOutput = {
		font: ''
		, text: ''
		, fillStyle: ''
		, xPosition: 0
		, yPosition: 0
	};

	const tempTextConfig : TextOutput = {
		font: ''
		, text: ''
		, fillStyle: ''
		, xPosition: 0
		, yPosition: 0
	};
	
	textConfig.font =  `27px runescape`;
	textConfig.fillStyle = Colors.yellow;
	context.font = textConfig.font;
	context.fillStyle = textConfig.fillStyle;
	images.forEach((image, key) => {
		// let name = imageMetadata.get(key);
		let imageXPosition = 20 + ((key%itemsPerRow) * image.width);
		let imageYPosition = 63 + (image.height * Math.floor(key/itemsPerRow));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		textConfig.text = broadcasts.get(itemMap.get(key)).data.count.toString();
		textConfig.xPosition = imageXPosition + 12;
		textConfig.yPosition = imageYPosition + 25;
		// !(broadcastList[key].count == 0 || broadcastList[key].count == 1) ? context.fillText(broadcastList[key].count.toString(), imageXPosition + 12, imageYPosition + 25) : null;
		!(broadcasts.get(itemMap.get(key)).data.count == 0 || broadcasts.get(itemMap.get(key)).data.count == 1) ? context.fillText(broadcasts.get(itemMap.get(key)).data.count.toString(), imageXPosition + 12, imageYPosition + 25) : null;
		!(broadcasts.get(itemMap.get(key)).data.count == 0 || broadcasts.get(itemMap.get(key)).data.count == 1) ? textOutput.push({...textConfig}) : null;
	});

	// context.font = '25px runescape';
	// context.fillStyle = Colors.yellow;
	// let title = '2024 Clue Chasers Winter Opening Log'.toUpperCase();
	// context.fillText(title, 100, 42);

	/*total caskets opened*/
	let xPosition;
	textConfig.font = '20px trajan pro';
	context.font = textConfig.font;
	textConfig.fillStyle = Colors.ivory;
	context.fillStyle = textConfig.fillStyle;
	let currentHeight = 106;
	textConfig.text = `Total caskets opened: `;
	textConfig.xPosition = textCenter - context.measureText(`Total caskets opened: ${numberWithCommas(totalCaskets)}`).width/2;
	textConfig.yPosition = currentHeight;
	textOutput.push({...textConfig});
	xPosition = textConfig.xPosition + context.measureText(textConfig.text).width;
	
	textConfig.font = '20px trajan pro';
	context.font = textConfig.font;
	textConfig.fillStyle = Colors.yellow;
	context.fillStyle = textConfig.fillStyle;
	textConfig.text = numberWithCommas(totalCaskets);
	textConfig.xPosition = xPosition;
	textConfig.yPosition = currentHeight;
	textOutput.push({...textConfig});

	/*total participants*/
	textConfig.fillStyle = Colors.ivory;
	textConfig.text = `Total participants: `;
	currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
	// currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
	textConfig.xPosition = textCenter - context.measureText(`Total participants: ${numberWithCommas(totalParticipants)}`).width/2;
	textConfig.yPosition = currentHeight;
	textOutput.push({...textConfig});
	xPosition = textConfig.xPosition + context.measureText(textConfig.text).width;
	
	textConfig.fillStyle = Colors.yellow;
	textConfig.text = numberWithCommas(totalParticipants);
	// currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
	textConfig.xPosition = xPosition;
	textConfig.yPosition = currentHeight;
	textOutput.push({...textConfig});

	/*total broadcasts*/
	textConfig.fillStyle = Colors.ivory;
	textConfig.text = `Total broadcasts: `;
	currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
	textConfig.xPosition = textCenter - context.measureText(`Total broadcasts: ${numberWithCommas(totalBroadcasts)}`).width/2;
	textConfig.yPosition = currentHeight;
	textOutput.push({...textConfig});
	xPosition = textConfig.xPosition + context.measureText(textConfig.text).width;

	textConfig.fillStyle = Colors.yellow;
	textConfig.text = numberWithCommas(totalBroadcasts);
	textConfig.xPosition = xPosition;
	textConfig.yPosition = currentHeight;
	textOutput.push({...textConfig});

	/*total value*/
	textConfig.fillStyle = Colors.ivory;
	textConfig.text = `Total value: ${numberWithCommas(totalValue)}`;
	currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
	textConfig.xPosition = textCenter - context.measureText(textConfig.text).width/2;
	textConfig.yPosition = currentHeight;
	textConfig.text = `Total value: `;
	textOutput.push({...textConfig});
	tempTextConfig.text = textConfig.text;
	textConfig.fillStyle = getGPColor(totalValue);
	textConfig.text = totalValue.toLocaleString('en-US');
	textConfig.xPosition = textCenter - context.measureText(`${tempTextConfig.text}${textConfig.text}`).width/2 + context.measureText(tempTextConfig.text).width;
	textOutput.push({...textConfig});

	// // context.fillText(`Total value: `, textCenter - context.measureText(title).width/2, currentHeight);
	// // textConfig.fillStyle = getGPColor(totalValue);
	// // textConfig.text = totalValue.toLocaleString('en-US');
	// // textConfig.xPosition = textCenter - context.measureText(title).width/2 + context.measureText(`Total value: `).width;
	// // context.fillText(numberWithCommas(totalValue), textCenter - context.measureText(title).width/2 + context.measureText(`Total value: `).width, currentHeight);

	textConfig.text = `Top 3 GP earned`;
	textConfig.fillStyle = Colors.ivory;
	currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding + 10;
	textConfig.xPosition = textCenter - context.measureText(textConfig.text).width/2;
	textConfig.yPosition = currentHeight;
	textOutput.push({...textConfig});

	context.fillStyle = Colors.yellow;
	context.lineWidth = 3;
	context.strokeStyle = Colors.ivory;
	context.beginPath();
	context.moveTo(textCenter - context.measureText(textConfig.text).width/2, currentHeight + 4);
	context.lineTo(textCenter + context.measureText(textConfig.text).width/2, currentHeight + 4);
	context.stroke();

	topGP.forEach((value, key) => {
		let fullText = `${value.name}: ${numberWithCommas(value.gp)}`;
		// let name = `${value.name}: `;
		// let gp = numberWithCommas(value.gp);
		tempTextConfig.text = numberWithCommas(value.gp);
		textConfig.text = `${value.name}: `;
		textConfig.fillStyle = Colors.yellow;
		currentHeight += context.measureText(`${tempTextConfig.text}${textConfig.text}`).actualBoundingBoxAscent + 10;
		textConfig.yPosition = currentHeight;
		textConfig.xPosition = textCenter - context.measureText(`${tempTextConfig.text}${textConfig.text}`).width/2;
		textOutput.push({...textConfig});
		// context.fillText(name, textCenter - context.measureText(fullText).width/2, currentHeight);
		// context.fillStyle = '#4C77C4';
		tempTextConfig.text = `${value.name}: `;
		textConfig.text = numberWithCommas(value.gp);
		textConfig.fillStyle = getGPColor(BigInt(value.gp));
		textConfig.text = numberWithCommas(value.gp);
		textConfig.xPosition = textCenter - context.measureText(`${tempTextConfig.text}${textConfig.text}`).width/2 + context.measureText(tempTextConfig.text).width;
		// context.fillText(gp, textCenter - context.measureText(fullText).width/2 + context.measureText(name).width, currentHeight);
		textOutput.push({...textConfig});
	});

	if (doubleBroadcasts.length > 0) {
		textConfig.text = `Double Broadcasts`;
		// title = `Double Broadcasts`;
		textConfig.fillStyle = Colors.ivory;
		// context.fillStyle = Colors.ivory;
		currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding + 10;
		textConfig.yPosition = currentHeight;
		textConfig.xPosition = textCenter - context.measureText(textConfig.text).width/2;
		textOutput.push({...textConfig});
		// context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);

		context.fillStyle = Colors.yellow;
		context.lineWidth = 3;
		context.strokeStyle = Colors.ivory;
		context.beginPath();
		context.moveTo(textCenter - context.measureText(textConfig.text).width/2, currentHeight + 4);
		context.lineTo(textCenter + context.measureText(textConfig.text).width/2, currentHeight + 4);
		context.stroke();

		doubleBroadcasts.forEach((value, key) => {
			let completeString = `${value.name}: ${value.item1} and ${value.item2}`;
			currentHeight += context.measureText(completeString).actualBoundingBoxAscent + padding;
			textConfig.yPosition = currentHeight;
			textConfig.fillStyle = Colors.yellow;
			textConfig.xPosition = textCenter - context.measureText(completeString).width/2;
			textConfig.text = `${value.name}: `;
			textOutput.push({...textConfig});

			tempTextConfig.text = textConfig.text;
			textConfig.text = value.item1;
			textConfig.fillStyle = broadcasts.get(value.item1).color;
			textConfig.xPosition = textCenter - context.measureText(completeString).width/2 + context.measureText(tempTextConfig.text).width;
			textOutput.push({...textConfig});

			textConfig.fillStyle = Colors.yellow;
			tempTextConfig.text = `${tempTextConfig.text}${textConfig.text}`;
			textConfig.text = ` and `;
			textConfig.xPosition = textCenter - context.measureText(completeString).width/2 + context.measureText(tempTextConfig.text).width;
			textOutput.push({...textConfig});

			tempTextConfig.text = `${tempTextConfig.text}${textConfig.text}`;
			textConfig.text = value.item2;
			textConfig.fillStyle = broadcasts.get(textConfig.text).color;
			textConfig.xPosition = textCenter - context.measureText(completeString).width/2 + context.measureText(tempTextConfig.text).width;
			textOutput.push({...textConfig});
		});
	}

	textConfig.text = `New Titles`;
	// title = `New Titles`;
	currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding + 10;
	textConfig.yPosition = currentHeight;
	textConfig.fillStyle = Colors.ivory;
	textConfig.xPosition = textCenter - context.measureText(textConfig.text).width/2;
	textOutput.push({...textConfig});
	context.fillStyle = Colors.yellow;
	context.lineWidth = 3;
	context.strokeStyle = Colors.ivory;
	context.moveTo(textCenter - context.measureText(textConfig.text).width/2, currentHeight + 4);
	context.lineTo(textCenter + context.measureText(textConfig.text).width/2, currentHeight + 4);
	context.stroke();

	// context.font = '28px Cinzel';
	// title = `${clueTitles.easy.title}: ${names}`;

	/* line format */
	// textConfig.text = `${ClueTitles.easy.title}: `;
	// currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
	// textConfig.fillStyle = ClueTitles.easy.base.color;
	// // textConfig.xPosition =  (canvas.width - 16 - textStart)/4 + textStart - context.measureText(textConfig.text).width/2;
	// textConfig.xPosition = textStart;
	// textConfig.yPosition = currentHeight;
	// textOutput.push({...textConfig});
	// context.fillStyle = ClueTitles.easy.base;
	// title = ClueTitles.easy.title;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);

	// context.strokeStyle = ClueTitles.easy.base.color;
	// context.beginPath();
	// context.moveTo(textStart, currentHeight + 4);
	// context.lineTo(textStart + context.measureText(textConfig.text).width, currentHeight + 4);
	// context.stroke();

	/* base title */
	for (const [key, value] of Object.entries(ClueTitles)) {
		if (value.base.list.length == 0) continue;
		textConfig.text = `${value.title}: `;
		currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
		textConfig.fillStyle = value.base.color;
		// textConfig.xPosition =  (canvas.width - 16 - textStart)/4 + textStart - context.measureText(textConfig.text).width/2;
		textConfig.xPosition = textStart;
		textConfig.yPosition = currentHeight;
		textOutput.push({...textConfig});

		context.strokeStyle = value.base.color;
		context.lineWidth = 2;
		context.beginPath();
		context.moveTo(textStart, currentHeight + 4);
		context.lineTo(textStart + context.measureText(textConfig.text).width, currentHeight + 4);
		context.stroke();
		
		tempTextConfig.text = textConfig.text;
		tempTextConfig.xPosition = textConfig.xPosition;
		tempTextConfig.yPosition = textConfig.yPosition;

		value.base.list.forEach((rsn, key) => {
			textConfig.text = `${key == 0 ? '' : ','} ${rsn}`;
			textConfig.xPosition = textStart + context.measureText(tempTextConfig.text).width;
			textConfig.fillStyle = Colors.yellow;
			textOutput.push({...textConfig});
			tempTextConfig.text = `${tempTextConfig.text}${textConfig.text}`;
			tempTextConfig.xPosition = textConfig.xPosition;
		});
	}
	
	currentHeight += padding;

	/* golden title */
	for (const [key, value] of Object.entries(ClueTitles)) {
		// if (value.golden?.list.length == 0 || !value.golden) continue;
		// textConfig.text = `${value.title}: `;
		// currentHeight += context.measureText(textConfig.text).actualBoundingBoxAscent + padding;
		// textConfig.fillStyle = value.golden?.color;
		// // textConfig.xPosition =  (canvas.width - 16 - textStart)/4 + textStart - context.measureText(textConfig.text).width/2;
		// textConfig.xPosition = textStart;
		// textConfig.yPosition = currentHeight;
		// textOutput.push({...textConfig});

		// context.strokeStyle = value.golden?.color;
		// context.beginPath();
		// context.moveTo(textStart, currentHeight + 4);
		// context.lineTo(textStart + context.measureText(textConfig.text).width, currentHeight + 4);
		// context.stroke();
		
		// tempTextConfig.text = textConfig.text;
		// tempTextConfig.xPosition = textConfig.xPosition;
		// tempTextConfig.yPosition = textConfig.yPosition;

		value.golden?.list.forEach((rsn, key) => {
			/* center align */
			let fullText = `Congratulations to ${rsn.rsn}`// for getting ${value.title} at ${numberWithCommas(rsn.count)} clues!`;
			textConfig.text = `Congratulations to `;
			currentHeight += padding + context.measureText(fullText).actualBoundingBoxAscent;
			textConfig.yPosition = currentHeight;
			// textConfig.text = `${rsn} for getting `;
			textConfig.xPosition = textCenter - context.measureText(fullText).width/2;
			textConfig.fillStyle = Colors.ivory;
			textOutput.push({...textConfig});
			xPosition = textConfig.xPosition + context.measureText(textConfig.text).width;
			
			textConfig.text = rsn.rsn;
			textConfig.yPosition = currentHeight;
			// textConfig.text = `${rsn} for getting `;
			textConfig.xPosition = xPosition
			textConfig.fillStyle = Colors.yellow;
			textOutput.push({...textConfig});

			currentHeight += padding;
			textConfig.yPosition = currentHeight;

			fullText = `for getting ${value.title} at ${numberWithCommas(rsn.count)} clues!`;
			
			tempTextConfig.text = textConfig.text;
			tempTextConfig.xPosition = textConfig.xPosition;
			textConfig.text = `for getting `;
			textConfig.fillStyle = Colors.ivory;
			textConfig.xPosition = textCenter - context.measureText(fullText).width/2;
			textOutput.push({...textConfig});

			tempTextConfig.text = textConfig.text;
			tempTextConfig.xPosition = textConfig.xPosition;
			textConfig.text = value.title;
			textConfig.fillStyle = value.golden.color;
			textConfig.xPosition = textCenter - context.measureText(fullText).width/2 + context.measureText(tempTextConfig.text).width;
			textOutput.push({...textConfig});
			
			tempTextConfig.text = `${tempTextConfig.text}${textConfig.text}`;
			tempTextConfig.xPosition = textConfig.xPosition;
			textConfig.text = ` at `;
			textConfig.fillStyle = Colors.ivory;
			textConfig.xPosition = textCenter - context.measureText(fullText).width/2 + context.measureText(tempTextConfig.text).width;
			textOutput.push({...textConfig});
			
			tempTextConfig.text = `${tempTextConfig.text}${textConfig.text}`;
			tempTextConfig.xPosition = textConfig.xPosition;
			textConfig.text = numberWithCommas(rsn.count);
			textConfig.fillStyle = Colors.yellow;
			textConfig.xPosition = textCenter - context.measureText(fullText).width/2 + context.measureText(tempTextConfig.text).width;
			textOutput.push({...textConfig});
			
			tempTextConfig.text = `${tempTextConfig.text}${textConfig.text}`;
			tempTextConfig.xPosition = textConfig.xPosition;
			textConfig.text = ` clues!`;
			textConfig.fillStyle = Colors.ivory;
			textConfig.xPosition = textCenter - context.measureText(fullText).width/2 + context.measureText(tempTextConfig.text).width;
			textOutput.push({...textConfig});

			/* left align */
			// textConfig.text = `${rsn.rsn} for getting ${value.title} at ${numberWithCommas(rsn.count)} clues!`;
			// currentHeight += padding + context.measureText(textConfig.text).actualBoundingBoxAscent;
			// textConfig.yPosition = currentHeight;
			// // textConfig.text = `${rsn} for getting `;
			// textConfig.xPosition = textStart;// + context.measureText(tempTextConfig.text).width;
			// textConfig.fillStyle = Colors.yellow;
			// textOutput.push({...textConfig});
			// tempTextConfig.text = `${tempTextConfig.text}${textConfig.text}`;
			// tempTextConfig.xPosition = textConfig.xPosition;
		});
	}

	textOutput.forEach(text => {
		console.log(text);
		context.fillStyle = text.fillStyle;
		context.font = text.font;
		context.fillText(text.text, text.xPosition, text.yPosition);
	});

	/****** block format  */
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;

	// context.fillStyle = ClueTitles.easy.base;
	// title = ClueTitles.easy.title;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	// context.strokeStyle = ClueTitles.easy.base;
	// context.beginPath();
	// context.moveTo((canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight + 4);
	// context.lineTo((canvas.width - 16 - textStart)/4 + textStart + context.measureText(title).width/2, currentHeight + 4);
	// context.stroke();


	// context.fillStyle = ClueTitles.hards.base;
	// title = ClueTitles.hards.title;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	// context.strokeStyle = ClueTitles.hards.base;
	// context.beginPath();
	// context.moveTo((canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight + 4);
	// context.lineTo((canvas.width - 16 - textStart)/4 * 3 + textStart + context.measureText(title).width/2, currentHeight + 4);
	// context.stroke();

	// title = `im Crystal`;
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	// context.fillStyle = Colors.yellow;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	// title = `Pintura`;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);

	
	// title = `DryDinoP0re`;
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	// title = `Lady Aurora`;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	
	// title = `Bloodbarrer1`;
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);

	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;

	// context.fillStyle = ClueTitles.elites.base;
	// title = ClueTitles.elites.title;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	// context.strokeStyle = ClueTitles.elites.base;
	// context.beginPath();
	// context.moveTo((canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight + 4);
	// context.lineTo((canvas.width - 16 - textStart)/4 + textStart + context.measureText(title).width/2, currentHeight + 4);
	// context.stroke();


	// context.fillStyle = ClueTitles.masters.base;
	// title = ClueTitles.masters.title;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	// context.strokeStyle = ClueTitles.masters.base;
	// context.beginPath();
	// context.moveTo((canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight + 4);
	// context.lineTo((canvas.width - 16 - textStart)/4 * 3 + textStart + context.measureText(title).width/2, currentHeight + 4);
	// context.stroke();

	// context.fillStyle = Colors.yellow;
	// title = `Yooper`;
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	// title = `Jenspa`;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	
	// title = `Annapoly`;
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 + textStart - context.measureText(title).width/2, currentHeight);
	// title = `Strektre`;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	
	// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding;
	// title = `Curtizio`;
	// context.fillText(title, (canvas.width - 16 - textStart)/4 * 3 + textStart - context.measureText(title).width/2, currentHeight);
	/********* end block format */

	return canvas.encode('png')
})
.then(result => {
	writeFile(CommunityOpening.filename, result)
})
.catch(error => console.log(error));
