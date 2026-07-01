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

	const top_left = loadImage(`${imageRootPath}/images/top_left.png`);
	const top_right = loadImage(`${imageRootPath}/images/top_right.png`);
	const bottom_left = loadImage(`${imageRootPath}/images/bottom_left.png`);
	const bottom_right = loadImage(`${imageRootPath}/images/bottom_right.png`);
	const top_fill = loadImage(`${imageRootPath}/images/top_fill.png`);
	const bottom_fill = loadImage(`${imageRootPath}/images/bottom_fill.png`);
	const right_fill = loadImage(`${imageRootPath}/images/right_fill.png`);
	const left_fill = loadImage(`${imageRootPath}/images/left_fill.png`);
	const background_fill = loadImage(`${imageRootPath}/images/blank.png`);
	
	const canvas = createCanvas(config.width as number, config.height as number);
	const context = canvas.getContext('2d');

	await Promise.all([top_left, top_right, bottom_left, bottom_right, top_fill, bottom_fill, left_fill, right_fill, background_fill])
	.then(result => {
		const top_left = result[0];
		const top_right = result[1];
		const bottom_left = result[2];
		const bottom_right = result[3];
		const top_fill = result[4];
		const bottom_fill = result[5];
		const left_fill = result[6];
		const right_fill = result[7];
		const background_fill = result[8];

		context.font = '25px trajan pro';
		context.fillStyle = Colors.yellow as string;
		let titleWidth = context.measureText(config.title as string).width;

		context.drawImage(background_fill, right_fill.width, top_fill.height, canvas.width, canvas.height);
		// context.drawImage(header1, 0, 0, header1.width, header1.height);
		// for (let i = header1.width; i < titleWidth + 100 + 15; i += header2.width) context.drawImage(header2, i, 0, header2.width, header2.height);
		// context.drawImage(header3, titleWidth + 100 + 15, 0, header3.width, header3.height);

		/* top border starts at 29 */
		/* left border starts at 11 */

		for (let i = 0; i < canvas.width; i += top_fill.width) {
			context.clearRect(i, 0, top_fill.width, top_fill.height);
			context.drawImage(top_fill, i, 0, top_fill.width, top_fill.height);
			context.clearRect(i, canvas.height - bottom_fill.height, bottom_fill.width, bottom_fill.height);
			context.drawImage(bottom_fill, i, canvas.height - bottom_fill.height, bottom_fill.width, bottom_fill.height);
		}

		for (let i = 0; i < canvas.height; i += left_fill.height) {
			context.clearRect(0, i, left_fill.width, left_fill.height);
			context.drawImage(left_fill, 0, i, left_fill.width, left_fill.height);
			context.clearRect(canvas.width - right_fill.width, i, right_fill.width, right_fill.height);
			context.drawImage(right_fill, canvas.width - right_fill.width, i, right_fill.width, right_fill.height);
		}

		context.clearRect(0, 0, top_left.width, top_left.height);
		context.clearRect(canvas.width - top_right.width, 0, top_right.width, top_right.height);
		context.clearRect(0, canvas.height - bottom_left.height, bottom_left.width, bottom_right.width);
		context.clearRect(canvas.width - bottom_right.width, canvas.height - bottom_right.height, bottom_right.width, bottom_right.height);
		context.drawImage(top_left, 0, 0, top_left.width, top_left.height);
		context.drawImage(top_right, canvas.width - top_right.width, 0, top_right.width, top_right.height);
		context.drawImage(bottom_left, 0, canvas.height - bottom_left.height, bottom_left.width, bottom_left.height);
		context.drawImage(bottom_right, canvas.width - bottom_right.width, canvas.height - bottom_right.height, bottom_right.width, bottom_right.height);

		// context.drawImage(borders, 0, 0, canvas.width, canvas.height);
		
		context.fillText(config.title as string, top_left.width + 5, 42);

		// return canvas.encode('png')
	})
	.catch(error => console.log(error));
	return canvas;
}