export function formatInDate(dateString: string, notHour: boolean = false) {
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