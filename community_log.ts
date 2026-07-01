import { GlobalFonts, loadImage, Image, Canvas, createCanvas } from '@napi-rs/canvas';
import {writeFile, numberWithCommas} from './general.js';
import { get_skeleton_image } from './skeleton.ts';
import { TextOutput, CommunityLog, Colors, getGPColor } from './config.ts';
import { broadcasts } from './broadcast data.js';

// console.log(path.parse(import.meta.filename));
// import { broadcasts as broadcastList } from './broadcast data.js';
const year = 2026;
const season = 'summer';
const lastUpdated = season == 'winter' ? `LAST UPDATED JUN. 30TH ${year}` : `LAST UPDATED DEC. 31ST ${year - 1}`;
const currentUpdate = season == 'winter' ? `UPDATED LOG DEC. 31ST ${year}` : `UPDATED LOG JUN. 30TH ${year}`;

CommunityLog.filename = `${year} CC broadcasts ${season}.png`;
CommunityLog.title = 'Clue Chasers Community Log';
const stats = {
	broadcasts: {
		old: 0
		, new: 0
	}
	, previous_gp: 42193196525828
	, gp_gained: 3467191145993
}
CommunityLog.width -= 15;
// CommunityOpening.height += 60;


const extraFunStats = [];
extraFunStats.push({title: {text: `Number of broadcasts since last update: `, color: Colors.ivory}, data: {text: numberWithCommas(stats.broadcasts.new - stats.broadcasts.old), color: Colors.yellow}});
extraFunStats.push({title: {text: `Number of broadcasts since last update: `, color: Colors.ivory}, data: {text: numberWithCommas(stats.broadcasts.new - stats.broadcasts.old), color: Colors.yellow}});
extraFunStats.push({title: {text: `Number of broadcasts since last update: `, color: Colors.ivory}, data: {text: numberWithCommas(stats.broadcasts.new - stats.broadcasts.old), color: Colors.yellow}});
extraFunStats.push({title: {text: `Highest Broadcast Month: `}, data: {text:`June 2026 (867)`}});
extraFunStats.push({title: {text: `Lowest Broadcast Month: `}, data: {text:`April 2026 (162)`}});
extraFunStats.push({title: {text:`Broadcast with Highest Accumulated Wealth: `}, data: {text: `Blood dye (1049.2B GP)`}});
extraFunStats.push({title: {text: `Least Common Drop: `}, data: {text: `Second-Age mage mask (0)`}});
extraFunStats.push({title: {text: `Orlando Smith's Hat Proc Broadcasts: `}, data: {text: `21`}});
extraFunStats.push({title: {text: `Double Broadcasts: `}, data: {text: `2`}});
extraFunStats.push({title: {text: `Player with the most Broadcasts in 1 month: `}, data: {text: `lSeanl (111), May 2026`}});
extraFunStats.push({title: {text: `Player with most Broadcasts: `}, data: {text: `lSeanl (111)`}});
extraFunStats.push({title: {text: `Number of days without a SINGLE broadcast posted: `}, data: {text: `7`}});
stats.previous_gp = 45660387671821;
stats.gp_gained = 2914748134039;
const canvas: Promise<Canvas> | Canvas = await get_skeleton_image(CommunityLog);

const imageRootPath = '.';

GlobalFonts.registerFromPath(`.\\Fonts\\runescape_uf\\runescape_uf.ttf`, 'runescape');
GlobalFonts.registerFromPath(`./Fonts/trajan-pro\\TrajanPro-Regular.ttf`, 'trajan pro');

const border = {
	top: {
		top: 58
		, bottom: 70
	}, left: {
		left: 22
		, right: 34
	}, header: {
		top: 22
	}, broadcast: {
		old: {
			left: 22
			, top: 65
			, right: 507 - (39-22)		
			, bottom: 900 - (139-65)
		}, new: {
			left: 507 - (39-22) + 8
			, top: 65
			, right: 983 - (39-22)
			, bottom: 900 - (139-65)
		}
	}
}

// delete golden compass
broadcasts.delete(`Golden Compass`);

//get old data
broadcasts.get(`Barrows dye`).old = 8871;
broadcasts.get(`Shadow dye`).old = 5653;
broadcasts.get(`Ice dye`).old = 3428;
broadcasts.get(`Third Age dye`).old = 1102;
broadcasts.get(`Blood dye`).old = 1115;
broadcasts.get(`Third age full helmet`).old = 245;
broadcasts.get(`Third age platebody`).old = 255;
broadcasts.get(`Third age platelegs`).old = 247;
broadcasts.get(`Third age kiteshield`).old = 226;
broadcasts.get(`Backstab cape`).old = 3490;
broadcasts.get(`Third age mage hat`).old = 236;
broadcasts.get(`Third age robe top`).old = 254;
broadcasts.get(`Third age robe`).old = 211;
broadcasts.get(`Third age amulet`).old = 274;
broadcasts.get(`Sack of effigies`).old = 1828;
broadcasts.get(`Third age ranger coif`).old = 238;
broadcasts.get(`Third age ranger body`).old = 232;
broadcasts.get(`Third age ranger chaps`).old = 217;
broadcasts.get(`Third age vambraces`).old = 221;
broadcasts.get(`Explosive barrel`).old = 353;
broadcasts.get(`Third age druidic wreath`).old = 172;
broadcasts.get(`Third age druidic robe top`).old = 180;
broadcasts.get(`Third age druidic robe bottom`).old = 167;
broadcasts.get(`Third age druidic staff`).old = 169;

broadcasts.get(`Third age druidic cloak`).old = 188;
broadcasts.get(`Second-Age full helm`).old = 26;
broadcasts.get(`Second-Age platebody`).old = 31;
broadcasts.get(`Second-Age platelegs`).old = 35;
broadcasts.get(`Second-Age sword`).old = 120;
broadcasts.get(`Orlando Smith's hat`).old = 249;
broadcasts.get(`Second-Age mage mask`).old = 29;
broadcasts.get(`Second-Age robe top`).old = 40;
broadcasts.get(`Second-Age robe bottom`).old = 33;
broadcasts.get(`Second-Age staff`).old = 101;
broadcasts.get(`Blank`).old = 0;
broadcasts.get(`Second-Age range coif`).old = 37;
broadcasts.get(`Second-Age range top`).old = 42;
broadcasts.get(`Second-Age range legs`).old = 39;
broadcasts.get(`Second-Age bow`).old = 89;

//get new data
broadcasts.get(`Barrows dye`).new = 9500;
broadcasts.get(`Shadow dye`).new = 6037;
broadcasts.get(`Ice dye`).new = 3755;
broadcasts.get(`Third Age dye`).new = 1193;
broadcasts.get(`Blood dye`).new = 1214;
broadcasts.get(`Third age full helmet`).new = 262;
broadcasts.get(`Third age platebody`).new = 263;
broadcasts.get(`Third age platelegs`).new = 260;
broadcasts.get(`Third age kiteshield`).new = 238;
broadcasts.get(`Backstab cape`).new = 3744;
broadcasts.get(`Third age mage hat`).new = 250;
broadcasts.get(`Third age robe top`).new = 273;
broadcasts.get(`Third age robe`).new = 222;
broadcasts.get(`Third age amulet`).new = 284;
broadcasts.get(`Sack of effigies`).new = 1948;
broadcasts.get(`Third age ranger coif`).new = 247;
broadcasts.get(`Third age ranger body`).new = 245;
broadcasts.get(`Third age ranger chaps`).new = 233;
broadcasts.get(`Third age vambraces`).new = 236;
broadcasts.get(`Explosive barrel`).new = 360;
broadcasts.get(`Third age druidic wreath`).new = 190;
broadcasts.get(`Third age druidic robe top`).new = 202;
broadcasts.get(`Third age druidic robe bottom`).new = 185;
broadcasts.get(`Third age druidic staff`).new = 186;
broadcasts.get(`Third age druidic cloak`).new = 208;
broadcasts.get(`Second-Age full helm`).new = 28;
broadcasts.get(`Second-Age platebody`).new = 32;
broadcasts.get(`Second-Age platelegs`).new = 39;
broadcasts.get(`Second-Age sword`).new = 127;
broadcasts.get(`Orlando Smith's hat`).new = 261;
broadcasts.get(`Second-Age mage mask`).new = 29;
broadcasts.get(`Second-Age robe top`).new = 42;
broadcasts.get(`Second-Age robe bottom`).new = 34;
broadcasts.get(`Second-Age staff`).new = 113;
broadcasts.get(`Blank`).new = 0;
broadcasts.get(`Second-Age range coif`).new = 38;
broadcasts.get(`Second-Age range top`).new = 43;
broadcasts.get(`Second-Age range legs`).new = 45;
broadcasts.get(`Second-Age bow`).new = 97;

//get prices
broadcasts.get(`Barrows dye`).value = 74864170;
broadcasts.get(`Shadow dye`).value = 816995333;
broadcasts.get(`Ice dye`).value = 830520546;
broadcasts.get(`Third Age dye`).value = 11000000000;
broadcasts.get(`Blood dye`).value = 11000000000;
broadcasts.get(`Third age full helmet`).value = 216809484;
broadcasts.get(`Third age platebody`).value = 402157703;
broadcasts.get(`Third age platelegs`).value = 705854140;
broadcasts.get(`Third age kiteshield`).value = 218770719;
broadcasts.get(`Backstab cape`).value = 1974480;
broadcasts.get(`Third age mage hat`).value = 205476067;
broadcasts.get(`Third age robe top`).value = 205211691;
broadcasts.get(`Third age robe`).value = 199316583;
broadcasts.get(`Third age amulet`).value = 390002424;
broadcasts.get(`Sack of effigies`).value = 2188490;
broadcasts.get(`Third age ranger coif`).value = 199489831;
broadcasts.get(`Third age ranger body`).value = 199857602;
broadcasts.get(`Third age ranger chaps`).value = 200681363;
broadcasts.get(`Third age vambraces`).value = 200749005;
broadcasts.get(`Explosive barrel`).value = 43415769;
broadcasts.get(`Third age druidic wreath`).value = 496572860;
broadcasts.get(`Third age druidic robe top`).value = 220709560;
broadcasts.get(`Third age druidic robe bottom`).value = 200445733;
broadcasts.get(`Third age druidic staff`).value = 197908107;
broadcasts.get(`Third age druidic cloak`).value = 202941251;
broadcasts.get(`Second-Age full helm`).value = 160262136;
broadcasts.get(`Second-Age platebody`).value = 534532453;
broadcasts.get(`Second-Age platelegs`).value = 793611791;
broadcasts.get(`Second-Age sword`).value = 224004485;
broadcasts.get(`Orlando Smith's hat`).value = 14200000000;
broadcasts.get(`Second-Age mage mask`).value = 176842716;
broadcasts.get(`Second-Age robe top`).value = 702393889;
broadcasts.get(`Second-Age robe bottom`).value = 719377500;
broadcasts.get(`Second-Age staff`).value = 245268304;
broadcasts.get(`Blank`).value = 0;
broadcasts.get(`Second-Age range coif`).value = 93302122;
broadcasts.get(`Second-Age range top`).value = 264245717;
broadcasts.get(`Second-Age range legs`).value = 270877801;
broadcasts.get(`Second-Age bow`).value = 253547630;

const textOutput: TextOutput[] = [];

// const canvas = createCanvas(CommunityLog.width + 10, CommunityLog.height);
const context = canvas.getContext('2d');
// context.fillStyle = Colors.yellow;
// context.fillRect(0,0,canvas.width,canvas.height);

// let backgroundImage = await loadImage(`${imageRootPath}/images/empty.png`);
const imageArray: Promise<Image>[] = [];
imageArray.push(loadImage(`${imageRootPath}/images/blank.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_background_new4.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_background_new5.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_background_new6.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_horizontal_border3.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_vertical_border3.png`));
imageArray.push(loadImage(`${imageRootPath}/images/Coins_10000.png`));

broadcasts.forEach((value, key) => {
	let litUnlit = key.toLowerCase() == 'blank' ? '' : '_lit';
	broadcasts.get(key).index = imageArray.push(loadImage(`${imageRootPath}/images/${value.filename}${litUnlit}.png`)) - 1;
});

// for (let i = 0; i < broadcasts.size; i++) {
// 	if (!imageMap.has(broadcasts[i].item)) {
// 		let litUnlit = broadcasts[i].item.toLowerCase() == 'blank' ? '' : '_lit';
// 		imageMap.set(broadcasts[i].item, imageArray.push(loadImage(`${imageRootPath}/images/${broadcasts[i].item}${litUnlit}.png`)) - 1);
// 	}
// };

Promise.all(imageArray).then(output => {
	// context.drawImage(output[0], border.left.right, border.top.bottom, canvas.width, canvas.height);
	
	let currentFont = '45px trajan pro';
	// context.font = currentFont;
	let title = 'Clue Chasers Community Log';
	// let titleWidth = context.measureText(title).width;
	
	// textOutput.push({
	// 	text: title
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: output[1].width + 15
	// 	, yPosition: 85
	// });

	// context.drawImage(output[1], 0, 0, output[1].width, output[1].height);
	// for (var i = output[1].width; i < titleWidth + output[1].width + 30; i += 10) {
	// 	context.drawImage(output[2], i, 0, output[2].width, output[2].height);
	// }
	// context.drawImage(output[3], i, 0, output[3].width, output[3].height);

	// for (i += output[3].width; i < canvas.width; i += 10) {
	// 	context.drawImage(output[4], i, border.top.top, output[4].width, output[4].height);
	// }

	// for (let i = output[1].height; i < canvas.height; i += 10) {
	// 	context.drawImage(output[5], border.left.left, i, output[5].width, output[5].height);
	// }

	// for (let i = border.top.bottom; i < canvas.height; i += 10) {
	// 	context.drawImage(output[5], canvas.width - output[5].width, i, output[5].width, output[5].height);
	// }

	// for (let i = border.left.right; i < canvas.width; i += 10) {
	// 	context.drawImage(output[4], i, canvas.height - output[4].height, output[4].width, output[4].height);
	// }

	context.lineWidth = 7;
	context.strokeStyle = 'red';
	context.strokeRect(border.broadcast.old.left, border.broadcast.old.top, border.broadcast.old.right - border.broadcast.old.left, border.broadcast.old.bottom - border.broadcast.old.top)

	context.strokeStyle = Colors.lightGreen;
	context.strokeRect(border.broadcast.new.left, border.broadcast.new.top, border.broadcast.new.right - border.broadcast.new.left, border.broadcast.new.bottom - border.broadcast.new.top);

	context.font = `27px runescape`
	context.fillStyle = Colors.yellow;

	let index: number = 0;
	broadcasts.forEach((value, key) => {
		stats.broadcasts.old += value.old;
		stats.broadcasts.new += value.new;
		// stats.gp_gained += (value.new - value.old) * value.value;
		// console.log(key, (value.new - value.old) * value.value, value.new, value.old, value.value);
		let image = output[value.index];
		let imageXPosition = border.broadcast.old.left + 4 + ((index%5) * image.width);
		let imageYPosition = border.broadcast.old.top + 34 + (image.height * Math.floor(index/5));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		!(value.old == 0 || value.old == 1) ? context.fillText(value.old.toString(), imageXPosition + 12, imageYPosition + 25) : null;
		
		imageXPosition = border.broadcast.new.left + 4 + ((index%5) * image.width);
		imageYPosition = border.broadcast.new.top + 34 + (image.height * Math.floor(index/5));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		!(value.new == 0 || value.new == 1) ? context.fillText(value.new.toString(), imageXPosition + 12, imageYPosition + 25) : null;
		index++;
	});
		
	// for (i = 0; i < broadcasts.size; i++) {
	// 	totalBroadcasts += broadcasts[i].new;
	// 	totalValue += broadcasts[i].new * broadcasts[i].value;
	// 	let image = output[imageMap.get(broadcasts[i].item)];
	// 	let imageXPosition = border.broadcast.old.left + 4 + ((i%5) * image.width);
	// 	let imageYPosition = border.broadcast.old.top + 34 + (image.height * Math.floor(i/5));
	// 	context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
	// 	!(broadcasts[i].old == 0 || broadcasts[i].old == 1) ? context.fillText(broadcasts[i].old.toString(), imageXPosition + 12, imageYPosition + 25) : null;
		
	// 	imageXPosition = border.broadcast.new.left + 4 + ((i%5) * image.width);
	// 	imageYPosition = border.broadcast.new.top + 34 + (image.height * Math.floor(i/5));
	// 	context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
	// 	!(broadcasts[i].new == 0 || broadcasts[i].new == 1) ? context.fillText(broadcasts[i].new.toString(), imageXPosition + 12, imageYPosition + 25) : null;
	// };
	
	console.log(stats.gp_gained, stats.previous_gp, stats.previous_gp + stats.gp_gained);
	context.drawImage(output[6], border.broadcast.old.left + 10, border.broadcast.old.bottom -55, 40, 40);
	context.drawImage(output[6], border.broadcast.new.left + 10, border.broadcast.new.bottom -55, 40, 40);
	
	context.font = '25px trajan pro'
	textOutput.push({
		text: lastUpdated
		, fillStyle: Colors.red
		, font: '25px trajan pro'
		, xPosition: (border.broadcast.old.right + border.broadcast.old.left)/2 - context.measureText(lastUpdated).width/2
		, yPosition: border.broadcast.old.top + 30
	});

	
	textOutput.push({
		text: numberWithCommas(stats.previous_gp)
		, fillStyle: getGPColor(stats.previous_gp)
		, font: '40px trajan pro'
		, xPosition: border.broadcast.old.left + 10 + 40 + 10
		, yPosition: border.broadcast.old.bottom - 18
	});

	textOutput.push({
		text: numberWithCommas(stats.previous_gp + stats.gp_gained)
		, fillStyle: getGPColor(stats.previous_gp + stats.gp_gained)
		, font: '40px trajan pro'
		, xPosition: border.broadcast.new.left + 10 + 40 + 10
		, yPosition: border.broadcast.new.bottom - 18
	});

	title = currentUpdate;
	textOutput.push({
		text: title
		, fillStyle: Colors.lightGreen
		, font: '25px trajan pro'
		, xPosition: (border.broadcast.new.right + border.broadcast.new.left)/2 - context.measureText(title).width/2
		, yPosition: border.broadcast.new.top + 30
	});
		
	currentFont = '35px trajan pro';
	title = `Extra Fun Stats!`;
	context.font = currentFont;
	let currentHeight = border.top.bottom;
	textOutput.push({
		text: title
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: (canvas.width + border.broadcast.new.right)/2 - context.measureText(title).width/2
		, yPosition: currentHeight += context.measureText(title).actualBoundingBoxAscent + 20
	});

	currentFont = '25px trajan pro';
	context.font = currentFont

	let sectionSpace = 58;
	let leftTextPadding = 12;
	currentHeight += 55 - sectionSpace;

	// extraFunStats[0] = (`Number of broadcasts since last update: ${numberWithCommas(stats.broadcasts.new - stats.broadcasts.old)}`);
	// extraFunStats[1] = `Total number of broadcasts: ${numberWithCommas(stats.broadcasts.new)}`;

	extraFunStats[0].title.text = `Number of broadcasts since last update: `;
	extraFunStats[0].data.text = numberWithCommas(stats.broadcasts.new - stats.broadcasts.old);
	extraFunStats[1].title.text = `Total number of broadcasts: `;
	extraFunStats[1].data.text = numberWithCommas(stats.broadcasts.new);
	extraFunStats[2].title.text = `GP gained since last update: `;
	extraFunStats[2].data.text = numberWithCommas(stats.gp_gained);
	extraFunStats[2].data.color = getGPColor(stats.gp_gained);

	extraFunStats.forEach((value, key) => {
		const titleLength: TextMetrics = context.measureText(value.title.text);

		textOutput.push({
			text: value.title.text
			, fillStyle: Object.hasOwn(value.title, 'color') ? value.title.color : Colors.ivory
			, font: currentFont
			, xPosition: border.broadcast.new.right + leftTextPadding
			, yPosition: currentHeight += sectionSpace
		});
		
		textOutput.push({
			text: value.data.text
			, fillStyle: Object.hasOwn(value.data, 'color') ? value.data.color : Colors.yellow
			, font: currentFont
			, xPosition: border.broadcast.new.right + leftTextPadding + titleLength.width
			, yPosition: currentHeight
		});
	});
	
	// title = `Total number of broadcasts: ${numberWithCommas(stats.broadcasts.new)}`;
	// textOutput.push({
	// 	text: title
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += 55
	// });

	// // let configIndex = 0;
	// // for (const [key, value] of Object.entries(config)) {
	// // 	textOutput.push({
	// // 		text: value
	// // 		, fillStyle: Colors.yellow
	// // 		, font: currentFont
	// // 		, xPosition: border.broadcast.new.right + leftTextPadding
	// // 		, yPosition: currentHeight += sectionSpace
	// // 	});
	// // 	configIndex++;
	// // }

	// // textOutput.push({
	// // 	text: `Total GP value of the log: 32,765,323,892,238`
	// // 	, fillStyle: Colors.yellow
	// // 	, font: currentFont
	// // 	, xPosition: border.broadcast.new.right + leftTextPadding
	// // 	, yPosition: currentHeight += sectionSpace
	// // });

	// textOutput.push({
	// 	text: `GP gained since last update: ${numberWithCommas(stats.gp_gained)}`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// textOutput.push({
	// 	text: `Highest Broadcast Month: June (506)`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// textOutput.push({
	// 	text: `Lowest Broadcast Month: February (243)`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// textOutput.push({
	// 	text: `Broadcast with Highest Accumulated Wealth: Blood dye`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// textOutput.push({
	// 	text: `Least Common Drop: Second-Age full helm, Second-Age platebody`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// // textOutput.push({
	// // 	text: `Second-Age full helm, Second-Age platebody`
	// // 	, fillStyle: Colors.yellow
	// // 	, font: currentFont
	// // 	, xPosition: border.broadcast.new.right + leftTextPadding
	// // 	, yPosition: currentHeight += lineSpace
	// // });

	// // textOutput.push({
	// // 	text: `Second-Age mage mask, Second-Age robe top`
	// // 	, fillStyle: Colors.yellow
	// // 	, font: currentFont
	// // 	, xPosition: border.broadcast.new.right + leftTextPadding
	// // 	, yPosition: currentHeight += lineSpace
	// // });

	// textOutput.push({
	// 	text: `Orlando Smith's Hat Proc Broadcasts: 10`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// textOutput.push({
	// 	text: `Double Broadcasts: 5`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// // textOutput.push({
	// // 	text: `had in a similar time frame :O)`
	// // 	, fillStyle: Colors.yellow
	// // 	, font: currentFont
	// // 	, xPosition: border.broadcast.new.right + leftTextPadding
	// // 	, yPosition: currentHeight += lineSpace
	// // });

	// textOutput.push({
	// 	text: `Player with the most Broadcasts in 1 month: Tcf99 (320), June 2025`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// // textOutput.push({
	// // 	text: `Doom 4112 (42), December 2023`
	// // 	, fillStyle: Colors.yellow
	// // 	, font: currentFont
	// // 	, xPosition: border.broadcast.new.right + leftTextPadding
	// // 	, yPosition: currentHeight += lineSpace
	// // });

	// textOutput.push({
	// 	text: `Player with most Broadcasts: Tcf99 (320)`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// title = 'Number of days without a SINGLE broadcast posted: 4'
	// textOutput.push({
	// 	text: title
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	// // title = '18 (with HALF of those being August 2023)'
	// // textOutput.push({
	// // 	text: title
	// // 	, fillStyle: Colors.yellow
	// // 	, font: currentFont
	// // 	, xPosition: border.broadcast.new.right + leftTextPadding
	// // 	, yPosition: currentHeight += lineSpace
	// // });

	textOutput.forEach((value, key) => {	
		context.font = value.font;
		context.fillStyle = value.fillStyle;
		context.fillText(value.text, value.xPosition, value.yPosition);
	});

	return canvas.encode('png');
})
.then(result => {
	writeFile(CommunityLog.filename, result);
})
.catch(err => console.error(err));