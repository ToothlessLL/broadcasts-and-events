import {writeFile} from './general.js';
import { GlobalFonts, createCanvas, loadImage } from '@napi-rs/canvas';

const skeletonData = {
	canvas: {
		width: 1002
		, height: 749
	}
};

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

GlobalFonts.registerFromPath(`.\\Fonts\\runescape_uf\\runescape_uf.ttf`, 'runescape');
GlobalFonts.registerFromPath(`./Fonts/trajan-pro\\TrajanPro-Regular.ttf`, 'trajan pro');

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
let totalBroadcasts = 0;
let totalValue = 0;

const imageRootPath = '.';
const header1 = loadImage(`${imageRootPath}/images/header1.png`);
const header2 = loadImage(`${imageRootPath}/images/header2.png`);
const header3 = loadImage(`${imageRootPath}/images/header3.png`);
const verticalBorder = loadImage(`${imageRootPath}/images/vertical_border.png`);
const horizontalBorder = loadImage(`${imageRootPath}/images/horizontal_border.png`);
const backgroundImage = loadImage(`${imageRootPath}/images/blank.png`)

const canvas = createCanvas(skeletonData.canvas.width, skeletonData.canvas.height);
const context = canvas.getContext('2d');
// context.fillStyle = yellow;
// context.fillRect(0,0,canvas.width,canvas.height);

// context.drawImage(backgroundImage, 15, 35, canvas.width, canvas.height);
// context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

// context.font = '25px runescape';
// context.fillStyle = yellow;
// let title = '2024 Clue Summer Spectacle Opening Log';
// context.fillText(title, 100, 42);

Promise.all([header1, header2, header3, verticalBorder, horizontalBorder, backgroundImage])
.then(result => {
	const header1 = result[0];
	const header2 = result[1];
	const header3 = result[2];
	const verticalBorder = result[3];
	const horizontalBorder = result[4];
	const backgroundImage = result[5];

	context.font = '25px runescape';
	context.fillStyle = yellow;
	let title = 'Clue Chasers 2024 Winter Opening - Community Collection Log';
	let titleWidth = context.measureText(title).width;
	console.log(titleWidth);

	context.drawImage(backgroundImage, 11, 29, canvas.width, canvas.height);
	context.drawImage(header1, 0, 0, header1.width, header1.height);
	for (let i = header1.width; i < titleWidth + 100 + 15; i += header2.width) context.drawImage(header2, i, 0, header2.width, header2.height);
	context.drawImage(header3, titleWidth + 100 + 15, 0, header3.width, header3.height);

	/* top border starts at 29 */
	/* left border starts at 11 */

	let currentBorder = horizontalBorder;

	for (let i = 0; i < canvas.width; i += currentBorder.width) {
		if (i >= 11 && i < 11 + currentBorder.width) {
			context.drawImage(currentBorder, 11, canvas.height - currentBorder.height, currentBorder.width, currentBorder.height);
			context.drawImage(currentBorder, 11 + currentBorder.width, canvas.height - currentBorder.height, currentBorder.width, currentBorder.height);
		}
		else if (i >= 11) context.drawImage(currentBorder, i, canvas.height - currentBorder.height, currentBorder.width, currentBorder.height);
		if (i >= titleWidth + 100 + 15 + header3.width && i < titleWidth + 100 + 15 + header3.width + currentBorder.width) {
			context.drawImage(currentBorder, titleWidth + 100 + 15 + header3.width, 29, currentBorder.width, currentBorder.height);
			context.drawImage(currentBorder, titleWidth + 100 + 15 + header3.width + currentBorder.width, 29, currentBorder.width, currentBorder.height);
		}
		else if (i >= titleWidth + 100 + 15 + header3.width) context.drawImage(currentBorder, i, 29, currentBorder.width, currentBorder.height);
	}

	currentBorder = verticalBorder;
	for (let i = 0; i < canvas.height; i += currentBorder.height) {
		if (i >= 29 && i < 29 + currentBorder.height) {
			context.drawImage(currentBorder, canvas.width - currentBorder.width, 29, currentBorder.width, currentBorder.height);
			context.drawImage(currentBorder, canvas.width - currentBorder.width, 29 + currentBorder.height, currentBorder.width, currentBorder.height);
		}
		else if (i >= 29) context.drawImage(currentBorder, canvas.width - currentBorder.width, i, currentBorder.width, currentBorder.height);
		if (i >= 75 && i < 75 + currentBorder.width) {
			context.drawImage(currentBorder, 11, 75, currentBorder.width, currentBorder.height);
			context.drawImage(currentBorder, 11, 75 + currentBorder.width, currentBorder.width, currentBorder.height);
		}
		else if (i >= 75) context.drawImage(currentBorder, 11, i, currentBorder.width, currentBorder.height);
	}

	// context.drawImage(borders, 0, 0, canvas.width, canvas.height);
	
	context.fillText(title, 100, 42);

	return canvas.encode('png')
})
.then(result => {
	writeFile(`./skeleton.png`, result)
})
.catch(error => console.log(error));