export interface Canvas {
    width: number;
    height: number;
    title: string;
    filename: string;
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
    text: string;
    fillStyle: string;
    font: string;
    xPosition: number;
    yPosition: number;
}

export const ClueTitles = {
	easy: {
		base: {
            color: '#E8C502'
            , list: []
        }
		, title: 'the Gold Digger'
	}, medium: {
		base: {
            color: '#3294D0'
            , list: []
        }
		, title: 'Clueless'
	}, hard: {
		base: {
            color: '#A227BA'
            , list: []
        }
		, golden: {
            color: '#E4A604'
            , list: []
        }
		, title: 'Double Agent'
	}, elite: {
		base: {
            color: '#005D02'
            , list: []
        }
		, golden: {
            color: '#E4A604'
            , list: []
        }
		, title: 'the Clue Chaser'
	}, master: {
		base: {
            color: '#B70337'
            , list: []
        }
		, golden: {
            color: '#E4A604'
            , list: []
        }
		, title: 'Master of Clues'
	}
}

export function getGPColor(value: bigint): string {
    if (value < BigInt(100000)) return '#EBEC03';
    else if (value < BigInt(10000000)) return '#BFC0C1';
    else if (value < BigInt(10000000000)) return '#1BD005';
    else if (value < BigInt(10000000000000)) return '#6698FF';
    else if (value < BigInt('10000000000000000')) return '#9A34E1';
    else return '#C3690D';
}

export interface Broadcasts {
    item: string;
    old: number;
    new: number;
    value: number;
}