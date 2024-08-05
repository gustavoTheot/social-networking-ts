export const defaultTheme = {
    withe: '#FFF',

    flexbox: {
        'center-row': `
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        `,

        'start-center-row': `
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            gap: 1rem;
        `,

        'end-center-row': `
            display: flex;
            flex-direction: row;
            justify-content: end;
            align-items: center;
            gap: 1rem;
        `,

        'center-column': `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        `,

        'center-start-column': `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 1rem;
        `
    }
}