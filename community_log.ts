import { GlobalFonts, loadImage, Image, Canvas, createCanvas } from '@napi-rs/canvas';
import {writeFile, numberWithCommas} from './general.js';
import { get_skeleton_image } from './skeleton.ts';
import { TextOutput, CommunityLog, Colors } from './config.ts';
import { broadcasts } from './broadcast data.js';

// console.log(path.parse(import.meta.filename));
// import { broadcasts as broadcastList } from './broadcast data.js';

CommunityLog.filename = '2025 CC broadcasts summer.png';
CommunityLog.title = 'Clue Chasers Community Log';
const stats = {
	broadcasts: {
		old: 0
		, new: 0
	}
	, previous_gp: 39213525414157
	, gp_gained: 2979671111671
}

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
broadcasts.get(`Barrows dye`).old = 7619;
broadcasts.get(`Shadow dye`).old = 4909;
broadcasts.get(`Ice dye`).old = 2891;
broadcasts.get(`Third Age dye`).old = 916;
broadcasts.get(`Blood dye`).old = 929;
broadcasts.get(`Third age full helmet`).old = 219;
broadcasts.get(`Third age platebody`).old = 224;
broadcasts.get(`Third age platelegs`).old = 218;
broadcasts.get(`Third age kiteshield`).old = 204;
broadcasts.get(`Backstab cape`).old = 2991;
broadcasts.get(`Third age mage hat`).old = 211;
broadcasts.get(`Third age robe top`).old = 223;
broadcasts.get(`Third age robe`).old = 187;
broadcasts.get(`Third age amulet`).old = 252;
broadcasts.get(`Sack of effigies`).old = 1554;
broadcasts.get(`Third age ranger coif`).old = 214;
broadcasts.get(`Third age ranger body`).old = 213;
broadcasts.get(`Third age ranger chaps`).old = 192;
broadcasts.get(`Third age vambraces`).old = 198;
broadcasts.get(`Explosive barrel`).old = 317;
broadcasts.get(`Third age druidic wreath`).old = 138;
broadcasts.get(`Third age druidic robe top`).old = 153;
broadcasts.get(`Third age druidic robe bottom`).old = 139;
broadcasts.get(`Third age druidic staff`).old = 138;
broadcasts.get(`Third age druidic cloak`).old = 148;
broadcasts.get(`Second-Age full helm`).old = 26;
broadcasts.get(`Second-Age platebody`).old = 29;
broadcasts.get(`Second-Age platelegs`).old = 32;
broadcasts.get(`Second-Age sword`).old = 100;
broadcasts.get(`Orlando Smith's hat`).old = 218;
broadcasts.get(`Second-Age mage mask`).old = 24;
broadcasts.get(`Second-Age robe top`).old = 34;
broadcasts.get(`Second-Age robe bottom`).old = 29;
broadcasts.get(`Second-Age staff`).old = 83;
broadcasts.get(`Blank`).old = 0;
broadcasts.get(`Second-Age range coif`).old = 32;
broadcasts.get(`Second-Age range top`).old = 38;
broadcasts.get(`Second-Age range legs`).old = 34;
broadcasts.get(`Second-Age bow`).old = 70;

//get new data
broadcasts.get(`Barrows dye`).new = 8218;
broadcasts.get(`Shadow dye`).new = 5269;
broadcasts.get(`Ice dye`).new = 3109;
broadcasts.get(`Third Age dye`).new = 1003;
broadcasts.get(`Blood dye`).new = 1014;
broadcasts.get(`Third age full helmet`).new = 230;
broadcasts.get(`Third age platebody`).new = 243;
broadcasts.get(`Third age platelegs`).new = 233;
broadcasts.get(`Third age kiteshield`).new = 219;
broadcasts.get(`Backstab cape`).new = 3203;
broadcasts.get(`Third age mage hat`).new = 223;
broadcasts.get(`Third age robe top`).new = 243;
broadcasts.get(`Third age robe`).new = 201;
broadcasts.get(`Third age amulet`).new = 266;
broadcasts.get(`Sack of effigies`).new = 1681;
broadcasts.get(`Third age ranger coif`).new = 225;
broadcasts.get(`Third age ranger body`).new = 227;
broadcasts.get(`Third age ranger chaps`).new = 209;
broadcasts.get(`Third age vambraces`).new = 211;
broadcasts.get(`Explosive barrel`).new = 334;
broadcasts.get(`Third age druidic wreath`).new = 146;
broadcasts.get(`Third age druidic robe top`).new = 163;
broadcasts.get(`Third age druidic robe bottom`).new = 151;
broadcasts.get(`Third age druidic staff`).new = 150;
broadcasts.get(`Third age druidic cloak`).new = 167;
broadcasts.get(`Second-Age full helm`).new = 26;
broadcasts.get(`Second-Age platebody`).new = 29;
broadcasts.get(`Second-Age platelegs`).new = 33;
broadcasts.get(`Second-Age sword`).new = 111;
broadcasts.get(`Orlando Smith's hat`).new = 233;
broadcasts.get(`Second-Age mage mask`).new = 27;
broadcasts.get(`Second-Age robe top`).new = 35;
broadcasts.get(`Second-Age robe bottom`).new = 31;
broadcasts.get(`Second-Age staff`).new = 90;
broadcasts.get(`Blank`).new = 0;
broadcasts.get(`Second-Age range coif`).new = 35;
broadcasts.get(`Second-Age range top`).new = 40;
broadcasts.get(`Second-Age range legs`).new = 37;
broadcasts.get(`Second-Age bow`).new = 78;

//get prices
broadcasts.get(`Barrows dye`).value = 125621409;
broadcasts.get(`Shadow dye`).value = 1249394767;
broadcasts.get(`Ice dye`).value = 1066048900;
broadcasts.get(`Third Age dye`).value = 9200000000;
broadcasts.get(`Blood dye`).value = 10200000000;
broadcasts.get(`Third age full helmet`).value = 216339944;
broadcasts.get(`Third age platebody`).value = 539002368;
broadcasts.get(`Third age platelegs`).value = 893787051;
broadcasts.get(`Third age kiteshield`).value = 230796326;
broadcasts.get(`Backstab cape`).value = 2231342;
broadcasts.get(`Third age mage hat`).value = 195604438;
broadcasts.get(`Third age robe top`).value = 246328640;
broadcasts.get(`Third age robe`).value = 198022400;
broadcasts.get(`Third age amulet`).value = 535246611;
broadcasts.get(`Sack of effigies`).value = 1949659;
broadcasts.get(`Third age ranger coif`).value = 193249335;
broadcasts.get(`Third age ranger body`).value = 192126048;
broadcasts.get(`Third age ranger chaps`).value = 188589673;
broadcasts.get(`Third age vambraces`).value = 195920181;
broadcasts.get(`Explosive barrel`).value = 41623072;
broadcasts.get(`Third age druidic wreath`).value = 547145127;
broadcasts.get(`Third age druidic robe top`).value = 227175924;
broadcasts.get(`Third age druidic robe bottom`).value = 186575013;
broadcasts.get(`Third age druidic staff`).value = 175691684;
broadcasts.get(`Third age druidic cloak`).value = 193334916;
broadcasts.get(`Second-Age full helm`).value = 153802084;
broadcasts.get(`Second-Age platebody`).value = 534532453;
broadcasts.get(`Second-Age platelegs`).value = 793611791;
broadcasts.get(`Second-Age sword`).value = 215015769;
broadcasts.get(`Orlando Smith's hat`).value = 15000000000;
broadcasts.get(`Second-Age mage mask`).value = 176842716;
broadcasts.get(`Second-Age robe top`).value = 702393889;
broadcasts.get(`Second-Age robe bottom`).value = 719377500;
broadcasts.get(`Second-Age staff`).value = 236889323;
broadcasts.get(`Blank`).value = 0;
broadcasts.get(`Second-Age range coif`).value = 89658487;
broadcasts.get(`Second-Age range top`).value = 254542691;
broadcasts.get(`Second-Age range legs`).value = 270877801;
broadcasts.get(`Second-Age bow`).value = 253547630;

// const broadcasts: Broadcasts[] = [
// 	{item: 'barrows_dye', old: 7198, new: 7619, value: 119472157},
// 	{item: 'shadow_dye', old: 4631, new: 4909, value: 1234920706},
// 	{item: 'ice_dye', old: 2669, new: 2891, value: 1195010795},
// 	{item: 'third_age_dye', old: 829, new: 916, value: 9200000000},
// 	{item: 'blood_dye', old: 845, new: 929, value: 10200000000},
// 	{item: '3a_melee_helm', old: 210, new: 219, value: 198276390},
// 	{item: '3a_melee_top', old: 216, new: 224, value: 523345524},
// 	{item: '3a_melee_legs', old: 212, new: 218, value: 885916543},
// 	{item: '3a_kiteshield', old: 193, new: 204, value: 198136072},
// 	{item: 'backstab_cape', old: 2818, new: 2991, value: 2232446},
// 	{item: '3a_mage_hat', old: 203, new: 211, value: 174391342},
// 	{item: '3a_mage_top', old: 212, new: 223, value: 231021994},
// 	{item: '3a_mage_legs', old: 174, new: 187, value: 178244398},
// 	{item: '3a_amulet', old: 241, new: 252, value: 503007539},
// 	{item: 'sack_of_effigies', old: 1450, new: 1554, value: 1904388},
// 	{item: '3a_coif', old: 202, new: 214, value: 172375978},
// 	{item: '3a_range_top', old: 206, new: 213, value: 178701068},
// 	{item: '3a_range_legs', old: 185, new: 192, value: 175369432},
// 	{item: '3a_range_vambraces', old: 191, new: 198, value: 173059795},
// 	{item: 'explosive_barrel', old: 305, new: 317, value: 39981026},
// 	{item: 'druidic_wreath', old: 121, new: 138, value: 574681739},
// 	{item: 'druidic_top', old: 139, new: 153, value: 217901404},
// 	{item: 'druidic_bottom', old: 120, new: 139, value: 171517062},
// 	{item: 'druidic_staff', old: 128, new: 138, value: 161262712},
// 	{item: 'druidic_cloak', old: 139, new: 148, value: 177745801},
// 	{item: '2a_melee_helm', old: 23, new: 26, value: 153802084},
// 	{item: '2a_melee_body', old: 28, new: 29, value: 512951577},
// 	{item: '2a_melee_legs', old: 29, new: 32, value: 760197568},
// 	{item: '2a_melee_sword', old: 93, new: 100, value: 215015769},
// 	{item: 'orlando_smith_hat', old: 200, new: 218, value: 15000000000},
// 	{item: '2a_mage_helm', old: 22, new: 24, value: 176842716},
// 	{item: '2a_mage_body', old: 29, new: 34, value: 712868742},
// 	{item: '2a_mage_legs', old: 28, new: 29, value: 719377500},
// 	{item: '2a_mage_staff', old: 77, new: 83, value: 236889323},
// 	{item: 'blank', old: 0, new: 0, value: 0},
// 	{item: '2a_range_coif', old: 28, new: 32, value: 89658487},
// 	{item: '2a_range_body', old: 35, new: 38, value: 254542691},
// 	{item: '2a_range_legs', old: 31, new: 34, value: 262322527},
// 	{item: '2a_range_bow', old: 66, new: 70, value: 243482329},
// ];

const textOutput: TextOutput[] = [];

const canvas = createCanvas(CommunityLog.width, CommunityLog.height);
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
		text: 'LAST UPDATED DEC. 31TH 2024'
		, fillStyle: Colors.red
		, font: '25px trajan pro'
		, xPosition: (border.broadcast.old.right + border.broadcast.old.left)/2 - context.measureText('LAST UPDATED FEB. 25TH 2023').width/2
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

	title = 'UPDATED LOG JUN. 30TH 2025';
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

	let sectionSpace = 70;
	let leftTextPadding = 12;

	title = `Total number of broadcasts: ${numberWithCommas(stats.broadcasts.new)}`;
	textOutput.push({
		text: title
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += 55
	});

	// textOutput.push({
	// 	text: `Total GP value of the log: 32,765,323,892,238`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	textOutput.push({
		text: `GP gained since last update: ${numberWithCommas(stats.gp_gained)}`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Highest Broadcast Month: June (506)`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Lowest Broadcast Month: February (243)`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Broadcast with Highest Accumulated Wealth: Blood dye`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Least Common Drop: Second-Age full helm, Second-Age platebody`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// textOutput.push({
	// 	text: `Second-Age full helm, Second-Age platebody`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	// textOutput.push({
	// 	text: `Second-Age mage mask, Second-Age robe top`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	textOutput.push({
		text: `Orlando Smith's Hat Proc Broadcasts: 10`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Double Broadcasts: 5`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// textOutput.push({
	// 	text: `had in a similar time frame :O)`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	textOutput.push({
		text: `Player with the most Broadcasts in 1 month: Tcf99 (320), June 2025`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// textOutput.push({
	// 	text: `Doom 4112 (42), December 2023`
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	textOutput.push({
		text: `Player with most Broadcasts: Tcf99 (320)`
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	title = 'Number of days without a SINGLE broadcast posted: 4'
	textOutput.push({
		text: title
		, fillStyle: Colors.yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// title = '18 (with HALF of those being August 2023)'
	// textOutput.push({
	// 	text: title
	// 	, fillStyle: Colors.yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

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