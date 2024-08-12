export const defaultTheme = {
    withe: '#FFF',
    'gray-100': '#f5f5f5',
    'gray-200': '#e9e9e9',
    'gray-400': '#cccccc',
    'gray-500': '#d3dbd9',

    'blue-300': '#8daec3',

    'green-100': '#a4bdbc',
    'green-400': '#008584',
    'green-500': '#006666',

    'red-normal': '#cf0638',
    'ocean': '#0a6789',

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
    },

    form_default: {
        input: {
            'input-form': `
                padding: 0.875rem;
                border: none;
                border-radius: 8px;
    
                background-color: #f5f5f5;
    
                outline: none;
    
                &:focus{
                    outline: 1px solid #008584;
                }
            `
        },

        button: {
            'button-form': `
                width: 100%;

                padding: 0.875rem;
                border: none;
                border-radius: 8px;

                cursor: pointer;

                &:hover{
                    font-weight: bold;
                    color: #e9e9e9;
                    background-color: #008584;
                }
            `
        }
    }



}