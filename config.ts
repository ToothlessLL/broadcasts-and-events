export interface Canvas {
    width: Number;
    height: Number;
    title: String;
    filename: String;
}

export const CommunityLog: Canvas = {
    width: 2010
    , height: 915
    , title: 'Community Log'
    , filename: 'Broadcasts.png'
};

export const CommunityOpening: Canvas = {
    width: 1002
    , height: 749
    , title: 'Community Opening'
    , filename: 'Community Opening.png'
};

export const Colors = {
    yellow: '#FFCB05FF'
    , ivory: "#fcf7e4"
    , barrows: "#90937A"
    , ice: "#6B8894"
    , red: "#FF0000"
    , lightGreen: "#39e75f"
    , gpColor: "#A335EE"
}

export class TextOutput {
    text: String;
    fillStyle: String;
    font: String;
    xPosition: Number;
    yPosition: Number;
}

export const ClueTitles = {
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

export interface Broadcasts {
    item: String;
    old: Number;
    new: Number;
    value: Number;
}