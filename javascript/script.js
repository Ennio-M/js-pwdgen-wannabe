// ALGORITMO

/*
A([START]) --> B[/output - Inserisci il tuo nome/]
B --> C[/input - userName/]
C --> D[/output - Inserisci il tuo cognome/]
D --> E[/input - userSurname/]
E --> F[/output - Qual è il tuo colore preferito?/]
F --> G[/input - userColor/]
G --> H[userNewPassword = userName + userSurname + userColor + '21']
H --> I[/output - 'La tua nuova password è ' + userNewPassword/]
I --> J([FINE])
*/

const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('Inserisci il tuo cognome');
const userColor = prompt('Qual è il tuo colore preferito?');
const userNewPassword = userName + userSurname + userColor + '21';
document.getElementById('password').innerHTML = ('La tua nuova, sicurissima password è "' + userNewPassword + '"')