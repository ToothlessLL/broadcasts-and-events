import {writeFile, numberWithCommas} from './general.js';
import { GlobalFonts, createCanvas, loadImage } from '@napi-rs/canvas';

const filename = '2024 summer event.png';
const imageRootPath = '.';
//loading custom fonts
const yellow = '#FFFF00';
const ivory = "#fcf7e4";
const barrows = "#90937A";
const ice = "#6B8894";
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

const broadcasts = [
	{item: 'barrows_dye', count: 158, value: 135629408},
	{item: 'shadow_dye', count: 94, value: 1500000000},
	{item: 'ice_dye', count: 69, value: 1400000000},
	{item: 'third_age_dye', count: 18, value: 13000000000},
	{item: 'blood_dye', count: 12, value: 13000000000},
	{item: '3a_melee_helm', count: 3, value: 161492514},
	{item: '3a_melee_top', count: 3, value: 363195846},
	{item: '3a_melee_legs', count: 3, value: 659494674},
	{item: '3a_kiteshield', count: 1, value: 168003111},
	{item: 'backstab_cape', count: 72, value: 2298132},
	{item: '3a_mage_hat', count: 5, value: 147522975},
	{item: '3a_mage_top', count: 1, value: 179448132},
	{item: '3a_mage_legs', count: 3, value: 150271614},
	{item: '3a_amulet', count: 6, value: 387963855},
	{item: 'sack_of_effigies', count: 42, value: 1860405},
	{item: '3a_coif', count: 0, value: 145822455},
	{item: '3a_range_top', count: 0, value: 145240045},
	{item: '3a_range_legs', count: 6, value: 148025287},
	{item: '3a_range_vambraces', count: 1, value: 146833148},
	{item: 'explosive_barrel', count: 2, value: 39981026},
	{item: 'druidic_wreath', count: 3, value: 602936484},
	{item: 'druidic_top', count: 3, value: 200482040},
	{item: 'druidic_bottom', count: 4, value: 144765936},
	{item: 'druidic_staff', count: 0, value: 136310124},
	{item: 'druidic_cloak', count: 4, value: 163814439},
	{item: '2a_melee_helm', count: 0, value: 153802084},
	{item: '2a_melee_body', count: 1, value: 512951577},
	{item: '2a_melee_legs', count: 0, value: 760197568},
	{item: '2a_melee_sword', count: 1, value: 206302522},
	{item: 'orlando_smith_hat', count: 1, value: 15000000000},
	{item: '2a_mage_helm', count: 1, value: 176842716},
	{item: '2a_mage_body', count: 2, value: 712868742},
	{item: '2a_mage_legs', count: 0, value: 719377500},
	{item: '2a_mage_staff', count: 2, value: 230395751},
	{item: 'golden_compass', count: 8, value: 0},
	{item: '2a_range_coif', count: 0, value: 89658487},
	{item: '2a_range_body', count: 0, value: 254542691},
	{item: '2a_range_legs', count: 0, value: 262322527},
	{item: '2a_range_bow', count: 1, value: 243482329},
	{item: 'blank', count: 0, value: 0}
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

const textCenter = 750;
const textStart = 490;
const padding = 20;
var totalBroadcasts = 0;
var totalValue = 0;

var canvas = createCanvas(1002, 749);
var context = canvas.getContext('2d');
// context.fillStyle = yellow;
// context.fillRect(0,0,canvas.width,canvas.height);

let backgroundImage = await loadImage(`${imageRootPath}/images/blank.png`);
context.drawImage(backgroundImage, 15, 35, canvas.width, canvas.height);
backgroundImage = await loadImage(`${imageRootPath}/images/cc_background.png`);
context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

context.font = '25px runescape';
context.fillStyle = yellow;
let title = '2024 Clue Summer Spectacle Opening Log';
context.fillText(title, 100, 42);

context.font = `27px runescape`
context.fillStyle = yellow;
for (let i = 0; i < broadcasts.length; i++) {
	totalBroadcasts += broadcasts[i].count;
	totalValue += broadcasts[i].count * broadcasts[i].value;
	var image;
	if (broadcasts[i].item == 'blank') {
		image = await loadImage(`${imageRootPath}/images/blank.png`);
	} else {
		let litUnlit = broadcasts[i].count == 0 ? 'unlit' : 'lit';
		image = await loadImage(`${imageRootPath}/images/${broadcasts[i].item}_${litUnlit}.png`);
	}
	const imageXPosition = 20 + ((i%5) * image.width);
	const imageYPosition = 63 + (image.height * Math.floor(i/5));
	context.drawImage(image, imageXPosition, imageYPosition, image.width, image.height);
	!(broadcasts[i].count == 0 || broadcasts[i].count == 1) ? context.fillText(broadcasts[i].count.toString(), imageXPosition + 12, imageYPosition + 25) : null;
};

context.font = '28px runescape';
context.fillStyle = yellow;
let currentHeight = 69;
title = `Total participants: 124     Total broadcasts: ${numberWithCommas(totalBroadcasts)}`;
context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
title = `Total value: ${numberWithCommas(totalValue)}`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
title = `Top 5 GP earned`;
context.fillStyle = ivory;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
context.fillStyle = yellow;
context.lineWidth = 3;
context.strokeStyle = ivory;
context.beginPath();
context.moveTo(textCenter - context.measureText(title).width/2, currentHeight + 4);
context.lineTo(textCenter + context.measureText(title).width/2, currentHeight + 4);
context.closePath();
context.stroke();
title = `Stormy | Elba | ChangingLane | Emba | Finally`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + 10
context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);

title = `Double Broadcasts`;
context.fillStyle = ivory;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
context.fillStyle = yellow;
context.lineWidth = 3;
context.strokeStyle = ivory;
context.beginPath();
context.moveTo(textCenter - context.measureText(title).width/2, currentHeight + 4);
context.lineTo(textCenter + context.measureText(title).width/2, currentHeight + 4);
context.closePath();
context.stroke();
title = `La Habibi: Barrows Dye and Ice Dye`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding/2
context.fillText(`La Habibi: `, textCenter - context.measureText(title).width/2, currentHeight);
context.fillStyle = barrows;
context.fillText(`Barrows Dye`, textCenter - context.measureText(title).width/2 + context.measureText(`La Habibi: `).width, currentHeight);
context.fillStyle = yellow;
context.fillText(` and `, textCenter - context.measureText(title).width/2 + context.measureText(`La Habibi: Barrows Dye`).width, currentHeight);
context.fillStyle = ice;
context.fillText(`Ice Dye`, textCenter - context.measureText(title).width/2 + context.measureText(`La Habibi: Barrows Dye and `).width, currentHeight);

title = `New Titles`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillStyle = ivory;
context.fillText(title, textCenter - context.measureText(title).width/2, currentHeight);
context.fillStyle = yellow;
context.lineWidth = 3;
context.strokeStyle = ivory;
context.beginPath();
context.moveTo(textCenter - context.measureText(title).width/2, currentHeight + 4);
context.lineTo(textCenter + context.measureText(title).width/2, currentHeight + 4);
context.closePath();
context.stroke();

// context.font = '28px Cinzel';
let names = `Mainstreamz`;
title = `${clueTitles.easy.title}: ${names}`;
context.fillStyle = clueTitles.easy.base;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(`${clueTitles.easy.title}: `, textStart, currentHeight);
context.fillStyle = yellow;
context.fillText(names, textStart + context.measureText(`${clueTitles.easy.title}: `).width, currentHeight);

// names = `None :(`
// title = `${clueTitles.medium.title}: ${names}`;
// context.fillStyle = clueTitles.medium.base;
// currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
// context.fillText(`${clueTitles.medium.title}: `, textStart, currentHeight);
// context.fillStyle = yellow;
// context.fillText(names, textStart + context.measureText(`${clueTitles.medium.title}: `).width, currentHeight);

names = `T uomas | ChemTrailed | im Crystal`;
title = `${clueTitles.hards.title}: ${names}`;
context.fillStyle = clueTitles.hards.base;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(`${clueTitles.hards.title}: `, textStart, currentHeight);
context.fillStyle = yellow;
context.fillText(names, textStart + context.measureText(`${clueTitles.hards.title}: `).width, currentHeight);
names = `Frowned Up0n | ChangingLane | skelley | Blitzkrieg`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(names, textStart, currentHeight);
names = `Mainstreamz`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(names, textStart, currentHeight);

names = `Zte | ChangingLane | skelley`;
title = `${clueTitles.elites.title}: ${names}`;
context.fillStyle = clueTitles.elites.base;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(`${clueTitles.elites.title}: `, textStart, currentHeight);
context.fillStyle = yellow;
context.fillText(names, textStart + context.measureText(`${clueTitles.elites.title}: `).width, currentHeight);
names = `Blitzkrieg | Mainstreamz`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(names, textStart, currentHeight);

names = `Emba | Blitzkrieg`;
title = `${clueTitles.masters.title}: ${names}`;
context.fillStyle = clueTitles.masters.base;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(`${clueTitles.masters.title}: `, textStart, currentHeight);
context.fillStyle = yellow;
context.fillText(names, textStart + context.measureText(`${clueTitles.masters.title}: `).width, currentHeight);

context.font = '35px runescape';
title = `Biggest congratulations to Zingstah on`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding*2.5
context.fillText(title, textCenter - 15 - context.measureText(title).width/2, currentHeight);
title = `achieving the Master of Clues title!`;
currentHeight += context.measureText(title).actualBoundingBoxAscent + padding
context.fillText(`achieving the `, textCenter - 15 - context.measureText(title).width/2, currentHeight);
context.fillStyle = clueTitles.masters.golden;
context.fillText(`Master of Clues`, textCenter - 15 - context.measureText(title).width/2 + context.measureText(`achieving the `).width, currentHeight);
context.fillStyle = yellow;
context.fillText(` title!`, textCenter - 15 - context.measureText(title).width/2 + context.measureText(`achieving the Master of Clues`).width, currentHeight);
		
canvas.encode('png')
.then(result => {
	writeFile(filename, result)
})
.catch(error => console.log(error));

function formatDate(date) {
	return [
	  padTo2Digits(date.getMonth() + 1),
	  padTo2Digits(date.getDate()),
	  date.getFullYear(),
	].join('/');
}

function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}

function getColorScale(currentTotal, currentCount, dropRate) {
	const green = '#9aff82';
	const yellowgreen = '#c4f140';
	const yellow = '#ffff00';
	const orange = '#f6b26b';
	const red = '#e06666';

	const rate = currentCount - currentTotal/dropRate;
	if (rate <= -1) return red;
	else if (rate < -0.5) return orange;
	else if (rate < 0.5) return yellow;
	else if (rate < 1) return yellowgreen;
	else return green;
}

function getSimpleColorScale(currentTotal, expected) {
	const green = '#9aff82';
	const yellowgreen = '#c4f140';
	const yellow = '#ffff00';
	const orange = '#f6b26b';
	const red = '#e06666';

	const rate = currentTotal - expected;
	if (rate <= -1) return red;
	else if (rate < -0.5) return orange;
	else if (rate < 0.5) return yellow;
	else if (rate < 1) return yellowgreen;
	else return green;
}

function getExpectedCount (item, userInfo, broadcastList) {
	var hardExpectedRates = 0;
	var eliteExpectedRates = 0;
	var masterExpectedRates = 0;
	var hardItemFilter = broadcastList.get(1).items.filter(filter => filter.searchString == item);
	var eliteItemFilter = broadcastList.get(2).items.filter(filter => filter.searchString == item);
	var masterItemFilter = broadcastList.get(3).items.filter(filter => filter.searchString == item);
	if (hardItemFilter.length > 0) {
		hardExpectedRates = userInfo[0].hardClueCount/hardItemFilter[0].dropRate;
	}
	if (eliteItemFilter.length > 0) eliteExpectedRates = userInfo[0].eliteClueCount/eliteItemFilter[0].dropRate;
	if (masterItemFilter.length > 0) masterExpectedRates = userInfo[0].masterClueCount/masterItemFilter[0].dropRate;
	return hardExpectedRates + eliteExpectedRates + masterExpectedRates;
}