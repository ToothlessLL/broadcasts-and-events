import { GlobalFonts, createCanvas, loadImage } from '@napi-rs/canvas';
import {writeFile} from './general.js';

// console.log(path.parse(import.meta.filename));
// import { broadcasts as broadcastList } from './broadcast data.js';

const filename = '2024 CC broadcasts winter.png';

const imageRootPath = '.';
const x = 2010;
const y = 915;
const yellow = '#FFCB05FF';
const ivory = "#fcf7e4";
const barrows = "#90937A";
const ice = "#6B8894";
const red = "#FF0000";
const lightGreen = "#39e75f";
const gpColor = "#A335EE";
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

const broadcasts = [
	{item: 'barrows_dye', old: 7198, new: 7619, value: 119472157},
	{item: 'shadow_dye', old: 4631, new: 4909, value: 1234920706},
	{item: 'ice_dye', old: 2669, new: 2891, value: 1195010795},
	{item: 'third_age_dye', old: 829, new: 916, value: 9200000000},
	{item: 'blood_dye', old: 845, new: 929, value: 10200000000},
	{item: '3a_melee_helm', old: 210, new: 219, value: 198276390},
	{item: '3a_melee_top', old: 216, new: 224, value: 523345524},
	{item: '3a_melee_legs', old: 212, new: 218, value: 885916543},
	{item: '3a_kiteshield', old: 193, new: 204, value: 198136072},
	{item: 'backstab_cape', old: 2818, new: 2991, value: 2232446},
	{item: '3a_mage_hat', old: 203, new: 211, value: 174391342},
	{item: '3a_mage_top', old: 212, new: 223, value: 231021994},
	{item: '3a_mage_legs', old: 174, new: 187, value: 178244398},
	{item: '3a_amulet', old: 241, new: 252, value: 503007539},
	{item: 'sack_of_effigies', old: 1450, new: 1554, value: 1904388},
	{item: '3a_coif', old: 202, new: 214, value: 172375978},
	{item: '3a_range_top', old: 206, new: 213, value: 178701068},
	{item: '3a_range_legs', old: 185, new: 192, value: 175369432},
	{item: '3a_range_vambraces', old: 191, new: 198, value: 173059795},
	{item: 'explosive_barrel', old: 305, new: 317, value: 39981026},
	{item: 'druidic_wreath', old: 121, new: 138, value: 574681739},
	{item: 'druidic_top', old: 139, new: 153, value: 217901404},
	{item: 'druidic_bottom', old: 120, new: 139, value: 171517062},
	{item: 'druidic_staff', old: 128, new: 138, value: 161262712},
	{item: 'druidic_cloak', old: 139, new: 148, value: 177745801},
	{item: '2a_melee_helm', old: 23, new: 26, value: 153802084},
	{item: '2a_melee_body', old: 28, new: 29, value: 512951577},
	{item: '2a_melee_legs', old: 29, new: 32, value: 760197568},
	{item: '2a_melee_sword', old: 93, new: 100, value: 215015769},
	{item: 'orlando_smith_hat', old: 200, new: 218, value: 15000000000},
	{item: '2a_mage_helm', old: 22, new: 24, value: 176842716},
	{item: '2a_mage_body', old: 29, new: 34, value: 712868742},
	{item: '2a_mage_legs', old: 28, new: 29, value: 719377500},
	{item: '2a_mage_staff', old: 77, new: 83, value: 236889323},
	{item: 'blank', old: 0, new: 0, value: 0},
	{item: '2a_range_coif', old: 28, new: 32, value: 89658487},
	{item: '2a_range_body', old: 35, new: 38, value: 254542691},
	{item: '2a_range_legs', old: 31, new: 34, value: 262322527},
	{item: '2a_range_bow', old: 66, new: 70, value: 243482329},
];

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

var totalBroadcasts = 0;
var totalValue = 0;
let textOutput = [];

var canvas = createCanvas(x, y);
var context = canvas.getContext('2d');
// context.fillStyle = yellow;
// context.fillRect(0,0,canvas.width,canvas.height);

// let backgroundImage = await loadImage(`${imageRootPath}/images/empty.png`);
const imageArray = [];
const imageMap = new Map();
imageArray.push(loadImage(`${imageRootPath}/images/blank.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_background_new4.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_background_new5.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_background_new6.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_horizontal_border3.png`));
imageArray.push(loadImage(`${imageRootPath}/images/cc_vertical_border3.png`));
imageArray.push(loadImage(`${imageRootPath}/images/Coins_10000.png`));

for (let i = 0; i < broadcasts.length; i++) {
	if (!imageMap.has(broadcasts[i].item)) {
		let litUnlit = broadcasts[i].item.toLowerCase() == 'blank' ? '' : '_lit';
		imageMap.set(broadcasts[i].item, imageArray.push(loadImage(`${imageRootPath}/images/${broadcasts[i].item}${litUnlit}.png`)) - 1);
	}
};

Promise.all(imageArray).then(output => {
	context.drawImage(output[0], border.left.right, border.top.bottom, canvas.width, canvas.height);
	
	let currentFont = '45px trajan pro';
	context.font = currentFont;
	let title = 'Clue Chasers Community Log';
	let titleWidth = context.measureText(title).width;
	
	textOutput.push({
		text: title
		, fillStyle: yellow
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

	context.strokeStyle = lightGreen;
	context.strokeRect(border.broadcast.new.left, border.broadcast.new.top, border.broadcast.new.right - border.broadcast.new.left, border.broadcast.new.bottom - border.broadcast.new.top);

	context.font = `27px runescape`
	context.fillStyle = yellow;
		
	for (i = 0; i < broadcasts.length; i++) {
		totalBroadcasts += broadcasts[i].new;
		totalValue += broadcasts[i].new * broadcasts[i].value;
		let image = output[imageMap.get(broadcasts[i].item)];
		// var image;
		// if (broadcasts[i].item == 'blank') {
		// 	image = await loadImage(`${imageRootPath}/images/empty.png`);
		// } else {
		// 	let litUnlit = broadcasts[i].old == 0 ? 'unlit' : 'lit';
		// 	image = await loadImage(`${imageRootPath}/images/${broadcasts[i].item}_${litUnlit}.png`);
		// }
		let imageXPosition = border.broadcast.old.left + 4 + ((i%5) * image.width);
		let imageYPosition = border.broadcast.old.top + 34 + (image.height * Math.floor(i/5));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		!(broadcasts[i].old == 0 || broadcasts[i].old == 1) ? context.fillText(broadcasts[i].old.toString(), imageXPosition + 12, imageYPosition + 25) : null;
		
		// if (broadcasts[i].item == 'blank') {
		// 	image = await loadImage(`${imageRootPath}/images/empty.png`);
		// } else {
		// 	let litUnlit = broadcasts[i].new == 0 ? 'unlit' : 'lit';
		// 	image = await loadImage(`${imageRootPath}/images/${broadcasts[i].item}_${litUnlit}.png`);
		// }
		imageXPosition = border.broadcast.new.left + 4 + ((i%5) * image.width);
		imageYPosition = border.broadcast.new.top + 34 + (image.height * Math.floor(i/5));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		!(broadcasts[i].new == 0 || broadcasts[i].new == 1) ? context.fillText(broadcasts[i].new.toString(), imageXPosition + 12, imageYPosition + 25) : null;
	};
	
	context.drawImage(output[6], border.broadcast.old.left + 10, 855, 40, 40);
	context.drawImage(output[6], border.broadcast.new.left + 10, 855, 40, 40);
	
	context.font = '25px trajan pro'
	textOutput.push({
		text: 'LAST UPDATED JUN. 30TH 2024'
		, fillStyle: red
		, font: '25px trajan pro'
		, xPosition: (border.broadcast.old.right + border.broadcast.old.left)/2 - context.measureText('LAST UPDATED FEB. 25TH 2023').width/2
		, yPosition: output[1].height + 15
	});

	textOutput.push({
		text: '36,102,064,858,004'
		, fillStyle: gpColor
		, font: '40px trajan pro'
		, xPosition: border.broadcast.old.left + 10 + 40 + 10
		, yPosition: 885
	});

	textOutput.push({
		text: '39,213,525,414,157'
		, fillStyle: gpColor
		, font: '40px trajan pro'
		, xPosition: border.broadcast.new.left + 10 + 40 + 10
		, yPosition: 885
	});

	textOutput.push({
		text: 'UPDATED LOG DEC. 31ST 2024'
		, fillStyle: lightGreen
		, font: '25px trajan pro'
		, xPosition: (border.broadcast.new.right + border.broadcast.new.left)/2 - context.measureText('UPDATED LOG JUN. 30TH 2024').width/2
		, yPosition: output[1].height + 15
	});
		
	currentFont = '35px trajan pro';
	title = `Extra Fun Stats!`;
	context.font = currentFont;
	let currentHeight = border.top.bottom;
	textOutput.push({
		text: title
		, fillStyle: yellow
		, font: currentFont
		, xPosition: (canvas.width + border.broadcast.new.right)/2 - context.measureText(title).width/2
		, yPosition: currentHeight += context.measureText(title).actualBoundingBoxAscent + 20
	});

	currentFont = '25px trajan pro';
	context.font = currentFont

	let sectionSpace = 70;
	let lineSpace = 40;
	let leftTextPadding = 12;

	title = `Total number of broadcasts: 26,146`
	textOutput.push({
		text: title
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += 55
	});

	// textOutput.push({
	// 	text: `Total GP value of the log: 32,765,323,892,238`
	// 	, fillStyle: yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += sectionSpace
	// });

	textOutput.push({
		text: `GP gained since last update: 3,111,460,556,153`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Highest Broadcast Month: December 2024 (426)`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Lowest Broadcast Month: November 2024 (202)`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Broadcast with Highest Accumulated Wealth: Blood dye`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Least Common Drop: Second-Age platebody, Second-Age robe bottom`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// textOutput.push({
	// 	text: `Second-Age full helm, Second-Age platebody`
	// 	, fillStyle: yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	// textOutput.push({
	// 	text: `Second-Age mage mask, Second-Age robe top`
	// 	, fillStyle: yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	textOutput.push({
		text: `Orlando Smith's Hat Proc Broadcasts: 7`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Double Broadcasts: 6`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// textOutput.push({
	// 	text: `had in a similar time frame :O)`
	// 	, fillStyle: yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	textOutput.push({
		text: `Player with the most Broadcasts in 1 month: Elba (47), December 2024`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// textOutput.push({
	// 	text: `Doom 4112 (42), December 2023`
	// 	, fillStyle: yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	textOutput.push({
		text: `Player with most Broadcasts: Elba (82)`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	title = 'Number of days without a SINGLE broadcast posted: 3'
	textOutput.push({
		text: title
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + leftTextPadding
		, yPosition: currentHeight += sectionSpace
	});

	// title = '18 (with HALF of those being August 2023)'
	// textOutput.push({
	// 	text: title
	// 	, fillStyle: yellow
	// 	, font: currentFont
	// 	, xPosition: border.broadcast.new.right + leftTextPadding
	// 	, yPosition: currentHeight += lineSpace
	// });

	textOutput.forEach((value, key) => {	
		context.font = value.font
		context.fillStyle = value.fillStyle;
		context.fillText(value.text, value.xPosition, value.yPosition);
	});

	return canvas.encode('png');
})
.then(result => {
	writeFile(filename, result);
})
.catch(err => console.error(err));