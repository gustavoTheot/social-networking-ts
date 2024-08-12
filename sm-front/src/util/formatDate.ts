export function formatDateAndTime(dateString: string, notHour: boolean = false) {
    if (dateString) {
        const date = new Date(dateString);
        const formatDate = date.toLocaleDateString('pt-BR');
        if (notHour) {
            return formatDate;
        } else {
            const formatTime = date.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            });
            return `${formatDate} - ${formatTime}`;
        }
    }
}

export function formatDate(date: Date) {
    if (!(date instanceof Date)) {
        throw new TypeError('O argumento fornecido deve ser uma instância de Date.');
    }

    const year = date.getFullYear(); // Obtém o ano
    let month = date.getMonth() + 1; // Obtém o mês (getMonth() retorna 0-11, então adicionamos 1)
    let day = date.getDate(); // Obtém o dia do mês

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`; // Retorna a data formatada como string
}

