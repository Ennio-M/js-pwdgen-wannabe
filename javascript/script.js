const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('Inserisci il tuo cognome');
const userColor = prompt('Qual è il tuo colore preferito?');
const userNewPassword = userName + userSurname + userColor + '21';
document.writeln('La tua nuova password è " ' + userNewPassword + ' "');