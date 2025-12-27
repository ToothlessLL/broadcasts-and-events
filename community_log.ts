import { GlobalFonts, loadImage, Image, Canvas, createCanvas } from '@napi-rs/canvas';
import {writeFile, numberWithCommas} from './general.js';
import { get_skeleton_image } from './skeleton.ts';
import { TextOutput, CommunityLog, Colors } from './config.ts';
import { broadcasts } from './broadcast data.js';

// console.log(path.parse(import.meta.filename));
// import { broadcasts as broadcastList } from './broadcast data.js';
const year = 2025;
const season = 'winter';
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
	, gp_gained: 3006764737407
}

const extraFunStats = [];
extraFunStats.push(`Number of broadcasts since last update: ${numberWithCommas(stats.broadcasts.new - stats.broadcasts.old)}`);
extraFunStats.push(`Total number of broadcasts: ${numberWithCommas(stats.broadcasts.new)}`);
extraFunStats.push(`GP gained since last update: ${numberWithCommas(stats.gp_gained)}`);
extraFunStats.push(`Highest Broadcast Month: December 2025 (722)`);
extraFunStats.push(`Lowest Broadcast Month: October 2025 (100)`);
extraFunStats.push(`Broadcast with Highest Accumulated Wealth: Blood dye (1033.8B gp)`);
extraFunStats.push(`Least Common Drop: Second-Age full helm (0)`);
extraFunStats.push(`Orlando Smith's Hat Proc Broadcasts: 7`);
extraFunStats.push(`Double Broadcasts: 8`);
extraFunStats.push(`Player with the most Broadcasts in 1 month: Jere (158), December 2025`);
extraFunStats.push(`Player with most Broadcasts: Jere (158)`);
extraFunStats.push(`Number of days without a SINGLE broadcast posted: 22`);

// const canvas: Promise<Canvas> | Canvas = await get_skeleton_image(CommunityLog);

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
			left: 39
			, top: 139
			, right: 507
			, bottom: 900
		}, new: {
			left: 515
			, top: 139
			, right: 983
			, bottom: 900
		}
	}
}

// delete golden compass
broadcasts.delete(`Golden Compass`);

//get old data
broadcasts.get(`Barrows dye`).old = 8218;
broadcasts.get(`Shadow dye`).old = 5269;
broadcasts.get(`Ice dye`).old = 3109;
broadcasts.get(`Third Age dye`).old = 1003;
broadcasts.get(`Blood dye`).old = 1014;
broadcasts.get(`Third age full helmet`).old = 230;
broadcasts.get(`Third age platebody`).old = 243;
broadcasts.get(`Third age platelegs`).old = 233;
broadcasts.get(`Third age kiteshield`).old = 219;
broadcasts.get(`Backstab cape`).old = 3203;
broadcasts.get(`Third age mage hat`).old = 223;
broadcasts.get(`Third age robe top`).old = 243;
broadcasts.get(`Third age robe`).old = 201;
broadcasts.get(`Third age amulet`).old = 266;
broadcasts.get(`Sack of effigies`).old = 1681;
broadcasts.get(`Third age ranger coif`).old = 225;
broadcasts.get(`Third age ranger body`).old = 227;
broadcasts.get(`Third age ranger chaps`).old = 209;
broadcasts.get(`Third age vambraces`).old = 211;
broadcasts.get(`Explosive barrel`).old = 334;
broadcasts.get(`Third age druidic wreath`).old = 146;
broadcasts.get(`Third age druidic robe top`).old = 163;
broadcasts.get(`Third age druidic robe bottom`).old = 151;
broadcasts.get(`Third age druidic staff`).old = 150;
broadcasts.get(`Third age druidic cloak`).old = 167;
broadcasts.get(`Second-Age full helm`).old = 26;
broadcasts.get(`Second-Age platebody`).old = 29;
broadcasts.get(`Second-Age platelegs`).old = 33;
broadcasts.get(`Second-Age sword`).old = 111;
broadcasts.get(`Orlando Smith's hat`).old = 233;
broadcasts.get(`Second-Age mage mask`).old = 27;
broadcasts.get(`Second-Age robe top`).old = 35;
broadcasts.get(`Second-Age robe bottom`).old = 31;
broadcasts.get(`Second-Age staff`).old = 90;
broadcasts.get(`Blank`).old = 0;
broadcasts.get(`Second-Age range coif`).old = 35;
broadcasts.get(`Second-Age range top`).old = 40;
broadcasts.get(`Second-Age range legs`).old = 37;
broadcasts.get(`Second-Age bow`).old = 78;

//get new data
broadcasts.get(`Barrows dye`).new = 8857;
broadcasts.get(`Shadow dye`).new = 5644;
broadcasts.get(`Ice dye`).new = 3421;
broadcasts.get(`Third Age dye`).new = 1100;
broadcasts.get(`Blood dye`).new = 1113;
broadcasts.get(`Third age full helmet`).new = 245;
broadcasts.get(`Third age platebody`).new = 255;
broadcasts.get(`Third age platelegs`).new = 247;
broadcasts.get(`Third age kiteshield`).new = 226;
broadcasts.get(`Backstab cape`).new = 3487;
broadcasts.get(`Third age mage hat`).new = 235;
broadcasts.get(`Third age robe top`).new = 253;
broadcasts.get(`Third age robe`).new = 211;
broadcasts.get(`Third age amulet`).new = 274;
broadcasts.get(`Sack of effigies`).new = 1821;
broadcasts.get(`Third age ranger coif`).new = 238;
broadcasts.get(`Third age ranger body`).new = 232;
broadcasts.get(`Third age ranger chaps`).new = 217;
broadcasts.get(`Third age vambraces`).new = 221;
broadcasts.get(`Explosive barrel`).new = 353;
broadcasts.get(`Third age druidic wreath`).new = 172;
broadcasts.get(`Third age druidic robe top`).new = 180;
broadcasts.get(`Third age druidic robe bottom`).new = 167;
broadcasts.get(`Third age druidic staff`).new = 169;
broadcasts.get(`Third age druidic cloak`).new = 188;
broadcasts.get(`Second-Age full helm`).new = 26;
broadcasts.get(`Second-Age platebody`).new = 31;
broadcasts.get(`Second-Age platelegs`).new = 35;
broadcasts.get(`Second-Age sword`).new = 120;
broadcasts.get(`Orlando Smith's hat`).new = 247;
broadcasts.get(`Second-Age mage mask`).new = 29;
broadcasts.get(`Second-Age robe top`).new = 40;
broadcasts.get(`Second-Age robe bottom`).new = 33;
broadcasts.get(`Second-Age staff`).new = 101;
broadcasts.get(`Blank`).new = 0;
broadcasts.get(`Second-Age range coif`).new = 37;
broadcasts.get(`Second-Age range top`).new = 42;
broadcasts.get(`Second-Age range legs`).new = 39;
broadcasts.get(`Second-Age bow`).new = 88;

//get prices
broadcasts.get(`Barrows dye`).value = 123632255;
broadcasts.get(`Shadow dye`).value = 1192243834;
broadcasts.get(`Ice dye`).value = 1066322154;
broadcasts.get(`Third Age dye`).value = 9500000000;
broadcasts.get(`Blood dye`).value = 11000000000;
broadcasts.get(`Third age full helmet`).value = 219268833;
broadcasts.get(`Third age platebody`).value = 449992479;
broadcasts.get(`Third age platelegs`).value = 811032052;
broadcasts.get(`Third age kiteshield`).value = 234190472;
broadcasts.get(`Backstab cape`).value = 2115896;
broadcasts.get(`Third age mage hat`).value = 200041007;
broadcasts.get(`Third age robe top`).value = 223160633;
broadcasts.get(`Third age robe`).value = 202533744;
broadcasts.get(`Third age amulet`).value = 462878166;
broadcasts.get(`Sack of effigies`).value = 2039460;
broadcasts.get(`Third age ranger coif`).value = 198616683;
broadcasts.get(`Third age ranger body`).value = 199172294;
broadcasts.get(`Third age ranger chaps`).value = 196690108;
broadcasts.get(`Third age vambraces`).value = 202412479;
broadcasts.get(`Explosive barrel`).value = 43415769;
broadcasts.get(`Third age druidic wreath`).value = 521002145;
broadcasts.get(`Third age druidic robe top`).value = 229191211;
broadcasts.get(`Third age druidic robe bottom`).value = 194573379;
broadcasts.get(`Third age druidic staff`).value = 190480470;
broadcasts.get(`Third age druidic cloak`).value = 199784979;
broadcasts.get(`Second-Age full helm`).value = 160262136;
broadcasts.get(`Second-Age platebody`).value = 534532453;
broadcasts.get(`Second-Age platelegs`).value = 793611791;
broadcasts.get(`Second-Age sword`).value = 224004485;
broadcasts.get(`Orlando Smith's hat`).value = 16500000000;
broadcasts.get(`Second-Age mage mask`).value = 176842716;
broadcasts.get(`Second-Age robe top`).value = 702393889;
broadcasts.get(`Second-Age robe bottom`).value = 719377500;
broadcasts.get(`Second-Age staff`).value = 236889323;
broadcasts.get(`Blank`).value = 0;
broadcasts.get(`Second-Age range coif`).value = 89658487;
broadcasts.get(`Second-Age range top`).value = 254542691;
broadcasts.get(`Second-Age range legs`).value = 270877801;
broadcasts.get(`Second-Age bow`).value = 253547630;

const textOutput: TextOutput[] = [];

const canvas = createCanvas(CommunityLog.width + 10, CommunityLog.height);
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
	context.drawImage(output[0], border.left.right, border.top.bottom, canvas.width, canvas.height);
	
	let currentFont = '45px trajan pro';
	context.font = currentFont;
	let title = 'Clue Chasers Community Log';
	let titleWidth = context.measureText(title).width;
	
	textOutput.push({
		text: title
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: output[1].width + 15
		, yPosition: 85
	});

	context.drawImage(output[1], 0, 0, output[1].width, output[1].height);
	for (var i = output[1].width; i < titleWidth + output[1].width + 30; i += 10) {
		context.drawImage(output[2], i, 0, output[2].width, output[2].height);
	}
	context.drawImage(output[3], i, 0, output[3].width, output[3].height);

	for (i += output[3].width; i < canvas.width; i += 10) {
		context.drawImage(output[4], i, border.top.top, output[4].width, output[4].height);
	}

	for (let i = output[1].height; i < canvas.height; i += 10) {
		context.drawImage(output[5], border.left.left, i, output[5].width, output[5].height);
	}

	for (let i = border.top.bottom; i < canvas.height; i += 10) {
		context.drawImage(output[5], canvas.width - output[5].width, i, output[5].width, output[5].height);
	}

	for (let i = border.left.right; i < canvas.width; i += 10) {
		context.drawImage(output[4], i, canvas.height - output[4].height, output[4].width, output[4].height);
	}

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
		// stats.value.new += (value.new - value.old) * value.value;
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
	
	context.drawImage(output[6], border.broadcast.old.left + 10, 855, 40, 40);
	context.drawImage(output[6], border.broadcast.new.left + 10, 855, 40, 40);
	
	context.font = '25px trajan pro'
	textOutput.push({
		text: lastUpdated
		, fillStyle: Colors.red
		, font: '25px trajan pro'
		, xPosition: (border.broadcast.old.right + border.broadcast.old.left)/2 - context.measureText(lastUpdated).width/2
		, yPosition: output[1].height + 15
	});

	
	textOutput.push({
		text: numberWithCommas(stats.previous_gp)
		, fillStyle: Colors.gpColor
		, font: '40px trajan pro'
		, xPosition: border.broadcast.old.left + 10 + 40 + 10
		, yPosition: 885
	});

	textOutput.push({
		text: numberWithCommas(stats.previous_gp + stats.gp_gained)
		, fillStyle: Colors.gpColor
		, font: '40px trajan pro'
		, xPosition: border.broadcast.new.left + 10 + 40 + 10
		, yPosition: 885
	});

	title = currentUpdate;
	textOutput.push({
		text: title
		, fillStyle: Colors.lightGreen
		, font: '25px trajan pro'
		, xPosition: (border.broadcast.new.right + border.broadcast.new.left)/2 - context.measureText(title).width/2
		, yPosition: output[1].height + 15
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

	let sectionSpace = 65;
	let leftTextPadding = 12;
	currentHeight += 55 - sectionSpace;

	extraFunStats[0] = (`Number of broadcasts since last update: ${numberWithCommas(stats.broadcasts.new - stats.broadcasts.old)}`);
	extraFunStats[1] = `Total number of broadcasts: ${numberWithCommas(stats.broadcasts.new)}`;
	extraFunStats.forEach((value, key) => {
		textOutput.push({
			text: value
			, fillStyle: Colors.yellow
			, font: currentFont
			, xPosition: border.broadcast.new.right + leftTextPadding
			, yPosition: currentHeight += sectionSpace
		})
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