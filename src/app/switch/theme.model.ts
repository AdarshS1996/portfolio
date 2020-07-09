export class Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: 'light',
    properties: {
        '--backgroud-default': '#ffffff'
    }
};

export const dark: Theme = {
    name: 'dark',
    properties: {
        '--backgroud-default': '#0d1c23'
    }
};
