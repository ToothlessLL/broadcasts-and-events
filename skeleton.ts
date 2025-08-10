import {writeFile} from './general.js';
import { GlobalFonts, createCanvas, loadImage, Canvas } from '@napi-rs/canvas';
import { Colors } from './config.ts';
import type {Canvas as CanvasConfig} from './config.ts';

//loading custom fonts
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

GlobalFonts.registerFromPath(`./Fonts/runescape_uf/runescape_uf.ttf`, 'runescape');
GlobalFonts.registerFromPath(`./Fonts/trajan-pro/TrajanPro-Regular.ttf`, 'trajan pro');

export async function get_skeleton_image(config: CanvasConfig): Promise<Canvas> {
	const imageRootPath = '.';
	const header1 = loadImage(`${imageRootPath}/images/header1.png`);
	const header2 = loadImage(`${imageRootPath}/images/header2.png`);
	const header3 = loadImage(`${imageRootPath}/images/header3.png`);
	const verticalBorder = loadImage(`${imageRootPath}/images/vertical_border.png`);
	const horizontalBorder = loadImage(`${imageRootPath}/images/horizontal_border.png`);
	const backgroundImage = loadImage(`${imageRootPath}/images/blank.png`)
	
	const canvas = createCanvas(config.width as number, config.height as number);
	const context = canvas.getContext('2d');

	await Promise.all([header1, header2, header3, verticalBorder, horizontalBorder, backgroundImage])
	.then(result => {
		const header1 = result[0];
		const header2 = result[1];
		const header3 = result[2];
		const verticalBorder = result[3];
		const horizontalBorder = result[4];
		const backgroundImage = result[5];

		context.font = '25px trajan pro';
		context.fillStyle = Colors.yellow as string;
		let titleWidth = context.measureText(config.title as string).width;

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
		
		context.fillText(config.title as string, 100, 42);

		// return canvas.encode('png')
	})
	.catch(error => console.log(error));
	return canvas;
}