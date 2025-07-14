const {GlobalFonts} = require('@napi-rs/canvas');
const Canvas = require('@napi-rs/canvas');
const fs = require('fs');

const x = 2000;
const y = 1000;
const yellow = '#FFFF00';
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
GlobalFonts.registerFromPath(`.\\Fonts\\Nunito\\Nunito-VariableFont_wght.ttf`, 'Nunito');
GlobalFonts.registerFromPath(`.\\Fonts\\DM_Sans\\DMSans-VariableFont_opsz,wght.ttf`, 'DM');
GlobalFonts.registerFromPath(`.\\Fonts\\Karla\\Karla-VariableFont_wght.ttf`, 'Karla');
GlobalFonts.registerFromPath(`.\\Fonts\\Ephesis\\Ephesis-Regular.ttf`, 'Ephesis');
GlobalFonts.registerFromPath(`.\\Fonts\\Bungee\\Bungee-Regular.ttf`, 'Bungee');
GlobalFonts.registerFromPath(`.\\Fonts\\Amatic_SC\\AmaticSC-Regular.ttf`, 'AmaticSC');
GlobalFonts.registerFromPath(`.\\Fonts\\Monoton\\Monoton-Regular.ttf`, 'Monoton');
GlobalFonts.registerFromPath(`.\\Fonts\\Satisfy\\Satisfy-Regular.ttf`, 'Satisfy');
GlobalFonts.registerFromPath(`.\\Fonts\\Aladin\\Aladin-Regular.ttf`, 'Aladin');
GlobalFonts.registerFromPath(`.\\Fonts\\Grand_Hotel\\GrandHotel-Regular.ttf`, 'GrandHotel');
GlobalFonts.registerFromPath(`.\\Fonts\\Monofett\\Monofett-Regular.ttf`, 'Monofett');
GlobalFonts.registerFromPath(`.\\Fonts\\runescape_uf\\runescape_uf.ttf`, 'runescape');
GlobalFonts.registerFromPath(`.\\Fonts\\Nabla\\static\\Nabla-Regular.ttf`, 'Nabla');
GlobalFonts.registerFromPath(`.\\Fonts\\Concert_One\\ConcertOne-Regular.ttf`, 'Concert_One');
GlobalFonts.registerFromPath(`.\\Fonts\\Cinzel\\Cinzel-VariableFont_wght.ttf`, 'Cinzel');
GlobalFonts.registerFromPath(`.\\Fonts\\Macondo\\Macondo-Regular.ttf`, 'Macondo');
GlobalFonts.registerFromPath(`.\\Fonts\\Oswald\\Oswald-VariableFont_wght.ttf`, 'Oswald');
GlobalFonts.registerFromPath(`.\\Fonts\\Rowdies\\Rowdies-Regular.ttf`, 'Rowdies');

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
			, bottom: 903
		}, new: {
			left: 515
			, top: 139
			, right: 983
			, bottom: 903
		}
	}
}

const broadcasts = [
	{item: 'barrows_dye', old: 5811, new: 7198, value: 135629408},
	{item: 'shadow_dye', old: 3729, new: 4631, value: 1384733491},
	{item: 'ice_dye', old: 2046, new: 2669, value: 1203444013},
	{item: 'third_age_dye', old: 631, new: 829, value: 12500000000},
	{item: 'blood_dye', old: 613, new: 845, value: 13500000000},
	{item: '3a_melee_helm', old: 186, new: 210, value: 161492514},
	{item: '3a_melee_top', old: 182, new: 216, value: 377030053},
	{item: '3a_melee_legs', old: 175, new: 212, value: 659494674},
	{item: '3a_kiteshield', old: 162, new: 193, value: 168003111},
	{item: 'backstab_cape', old: 2278, new: 2818, value: 2298132},
	{item: '3a_mage_hat', old: 166, new: 203, value: 147522975},
	{item: '3a_mage_top', old: 169, new: 212, value: 179448132},
	{item: '3a_mage_legs', old: 136, new: 174, value: 150271614},
	{item: '3a_amulet', old: 203, new: 241, value: 404976067},
	{item: 'sack_of_effigies', old: 1156, new: 1450, value: 1860405},
	{item: '3a_coif', old: 165, new: 202, value: 145822455},
	{item: '3a_range_top', old: 167, new: 206, value: 145240045},
	{item: '3a_range_legs', old: 149, new: 185, value: 148025287},
	{item: '3a_range_vambraces', old: 161, new: 191, value: 146833148},
	{item: 'explosive_barrel', old: 254, new: 305, value: 39981026},
	{item: 'druidic_wreath', old: 81, new: 121, value: 602936484},
	{item: 'druidic_top', old: 100, new: 139, value: 200482040},
	{item: 'druidic_bottom', old: 84, new: 120, value: 144765936},
	{item: 'druidic_staff', old: 93, new: 128, value: 136310124},
	{item: 'druidic_cloak', old: 105, new: 139, value: 163814439},
	{item: '2a_melee_helm', old: 18, new: 23, value: 153802084},
	{item: '2a_melee_body', old: 23, new: 28, value: 512951577},
	{item: '2a_melee_legs', old: 22, new: 29, value: 760197568},
	{item: '2a_melee_sword', old: 73, new: 93, value: 206302522},
	{item: 'orlando_smith_hat', old: 154, new: 200, value: 14000000000},
	{item: '2a_mage_helm', old: 17, new: 22, value: 176842716},
	{item: '2a_mage_body', old: 24, new: 29, value: 712868742},
	{item: '2a_mage_legs', old: 18, new: 28, value: 719377500},
	{item: '2a_mage_staff', old: 60, new: 77, value: 230395751},
	{item: 'empty', old: 0, new: 0, value: 0},
	{item: '2a_range_coif', old: 22, new: 28, value: 89658487},
	{item: '2a_range_body', old: 29, new: 35, value: 254542691},
	{item: '2a_range_legs', old: 24, new: 31, value: 262322527},
	{item: '2a_range_bow', old: 57, new: 66, value: 243482329},
	{item: 'empty', old: 0, new: 0, value: 0}
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

var canvas = Canvas.createCanvas(x, y);
var context = canvas.getContext('2d');
// context.fillStyle = yellow;
// context.fillRect(0,0,canvas.width,canvas.height);

// let backgroundImage = await Canvas.loadImage(`.\\images\\Clues\\empty.png`);
const imageArray = [];
const imageMap = new Map();
imageArray.push(Canvas.loadImage(`.\\images\\Clues\\empty.png`));
imageArray.push(Canvas.loadImage(`.\\images\\Clues\\cc_background_new4.png`));
imageArray.push(Canvas.loadImage(`.\\images\\Clues\\cc_background_new5.png`));
imageArray.push(Canvas.loadImage(`.\\images\\Clues\\cc_background_new6.png`));
imageArray.push(Canvas.loadImage(`.\\images\\Clues\\cc_horizontal_border3.png`));
imageArray.push(Canvas.loadImage(`.\\images\\Clues\\cc_vertical_border3.png`));
imageArray.push(Canvas.loadImage(`.\\images\\Clues\\Coins_10000.png`));

for (i = 0; i < broadcasts.length; i++) {
	if (!imageMap.has(broadcasts[i].item)) {
		let litUnlit = broadcasts[i].item == 'empty' ? '' : '_lit';
		imageMap.set(broadcasts[i].item, imageArray.push(Canvas.loadImage(`.\\images\\Clues\\${broadcasts[i].item}${litUnlit}.png`)) - 1);
	}
};

Promise.all(imageArray).then(output => {
	context.drawImage(output[0], border.left.right, border.top.bottom, canvas.width, canvas.height);
	
	let currentFont = '55px runescape';
	context.font = currentFont;
	let title = 'Clue Chasers Community Log';
	titleWidth = context.measureText(title).width;
	
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
	context.strokeStyle = red;
	context.beginPath();
	context.moveTo(border.broadcast.old.left, border.broadcast.old.top);
	context.lineTo(border.broadcast.old.right, border.broadcast.old.top);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.moveTo(border.broadcast.old.right, border.broadcast.old.top);
	context.lineTo(border.broadcast.old.right, border.broadcast.old.bottom);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.moveTo(border.broadcast.old.left, border.broadcast.old.top);
	context.lineTo(border.broadcast.old.left, border.broadcast.old.bottom);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.moveTo(border.broadcast.old.left, border.broadcast.old.bottom);
	context.lineTo(border.broadcast.old.right, border.broadcast.old.bottom);
	context.closePath();
	context.stroke();

	context.strokeStyle = lightGreen;
	context.beginPath();
	context.moveTo(border.broadcast.new.left, border.broadcast.new.top);
	context.lineTo(border.broadcast.new.right, border.broadcast.new.top);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.moveTo(border.broadcast.new.right, border.broadcast.new.top);
	context.lineTo(border.broadcast.new.right, border.broadcast.new.bottom);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.moveTo(border.broadcast.new.left, border.broadcast.new.top);
	context.lineTo(border.broadcast.new.left, border.broadcast.new.bottom);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.moveTo(border.broadcast.new.left, border.broadcast.new.bottom);
	context.lineTo(border.broadcast.new.right, border.broadcast.new.bottom);
	context.closePath();
	context.stroke();

	context.font = `27px runescape`
	context.fillStyle = yellow;
		
	for (i = 0; i < broadcasts.length; i++) {
		totalBroadcasts += broadcasts[i].new;
		totalValue += broadcasts[i].new * broadcasts[i].value;
		let image = output[imageMap.get(broadcasts[i].item)];
		// var image;
		// if (broadcasts[i].item == 'blank') {
		// 	image = await Canvas.loadImage(`.\\images\\Clues\\empty.png`);
		// } else {
		// 	let litUnlit = broadcasts[i].old == 0 ? 'unlit' : 'lit';
		// 	image = await Canvas.loadImage(`.\\images\\Clues\\${broadcasts[i].item}_${litUnlit}.png`);
		// }
		let imageXPosition = border.broadcast.old.left + 4 + ((i%5) * image.width);
		let imageYPosition = border.broadcast.old.top + 34 + (image.height * Math.floor(i/5));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		!(broadcasts[i].old == 0 || broadcasts[i].old == 1) ? context.fillText(broadcasts[i].old.toString(), imageXPosition + 12, imageYPosition + 25) : null;
		
		// if (broadcasts[i].item == 'blank') {
		// 	image = await Canvas.loadImage(`.\\images\\Clues\\empty.png`);
		// } else {
		// 	let litUnlit = broadcasts[i].new == 0 ? 'unlit' : 'lit';
		// 	image = await Canvas.loadImage(`.\\images\\Clues\\${broadcasts[i].item}_${litUnlit}.png`);
		// }
		imageXPosition = border.broadcast.new.left + 4 + ((i%5) * image.width);
		imageYPosition = border.broadcast.new.top + 34 + (image.height * Math.floor(i/5));
		context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
		!(broadcasts[i].new == 0 || broadcasts[i].new == 1) ? context.fillText(broadcasts[i].new.toString(), imageXPosition + 12, imageYPosition + 25) : null;
	};
	
	context.drawImage(output[6], border.broadcast.old.left + 10, 855, 40, 40);
	context.drawImage(output[6], border.broadcast.new.left + 10, 855, 40, 40);
	
	context.font = '30px runescape'
	textOutput.push({
		text: 'LAST UPDATED FEB. 25TH 2023'
		, fillStyle: red
		, font: '30px runescape'
		, xPosition: (border.broadcast.old.right + border.broadcast.old.left)/2 - context.measureText('LAST UPDATED FEB. 25TH 2023').width/2
		, yPosition: output[1].height + 15
	});

	textOutput.push({
		text: '12,679,126,840,562'
		, fillStyle: gpColor
		, font: '40px runescape'
		, xPosition: border.broadcast.old.left + 10 + 40 + 10
		, yPosition: 885
	});

	textOutput.push({
		text: '36,102,064,858,004'
		, fillStyle: gpColor
		, font: '40px runescape'
		, xPosition: border.broadcast.new.left + 10 + 40 + 10
		, yPosition: 885
	});

	textOutput.push({
		text: 'UPDATED LOG JUN. 30TH 2024'
		, fillStyle: lightGreen
		, font: '30px runescape'
		, xPosition: (border.broadcast.new.right + border.broadcast.new.left)/2 - context.measureText('UPDATED LOG JUN. 30TH 2024').width/2
		, yPosition: output[1].height + 15
	});
		
	currentFont = '55px runescape';
	title = `Extra Fun Stats!`;
	context.font = currentFont;
	let currentHeight = border.top.bottom;
	textOutput.push({
		text: title
		, fillStyle: yellow
		, font: currentFont
		, xPosition: (canvas.width + border.broadcast.new.right)/2 - context.measureText(title).width/2
		, yPosition: currentHeight += context.measureText(title).actualBoundingBoxAscent + 25
	});

	currentFont = '45px runescape';
	context.font = currentFont

	let sectionSpace = 55;
	let lineSpace = 40;

	title = `Total number of broadcasts: 24,526`
	textOutput.push({
		text: title
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Highest Broadcast Month: June 2024 (Shocker!)`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Lowest Broadcast Month: August 2023`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Broadcast with Highest Accumulated Wealth: Blood dye`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Least Common Drop:`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Second-Age full helm, Second-Age platebody`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += lineSpace
	});

	textOutput.push({
		text: `Second-Age mage mask, Second-Age robe top`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += lineSpace
	});

	textOutput.push({
		text: `Orlando Smith's Hat Proc Broadcasts: 20`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Double Broadcasts: 13 (8 less than the last log update`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `had in a similar time frame :O)`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += lineSpace
	});

	textOutput.push({
		text: `Player with the most Broadcasts in 1 month:`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	textOutput.push({
		text: `Doom 4112 (42), December 2023`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += lineSpace
	});

	textOutput.push({
		text: `Player with most Broadcasts: Finally (121)`
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	title = 'Number of days without a SINGLE broadcast posted:'
	textOutput.push({
		text: title
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += sectionSpace
	});

	title = '18 (with HALF of those being August 2023)'
	textOutput.push({
		text: title
		, fillStyle: yellow
		, font: currentFont
		, xPosition: border.broadcast.new.right + 20
		, yPosition: currentHeight += lineSpace
	});

	textOutput.forEach((value, key) => {	
		context.font = value.font
		context.fillStyle = value.fillStyle;
		context.fillText(value.text, value.xPosition, value.yPosition);
	});

	return canvas.encode('png');
})
.then(result => {
	try {
		fs.writeFileSync(`.\\test.png`, result);
		// file written successfully
	} catch (err) {
		console.error(err);
	}
})
.catch(err => console.error(err));