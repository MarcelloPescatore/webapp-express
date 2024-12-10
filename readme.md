# ESERCIZIO 
## Ecco i primi step:
- Pensate alla struttura del database che vorreste creare e disegnate il diagramma ER
- Utilizzando il file in allegato, creiamo un database con MySQL Workbench (importandolo dal file)
- Creiamo una nuova applicazione Express
- Colleghiamo l’app al db e verifichiamo che tutto funzioni
- Prepariamo una rotta index per ottenere la lista dei film
- Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni
## Bonus
- Inserire i dati di connessione al database come variabili d’ambiente
- Inserire le vostre API in controller
- Inserire le vostre rotte in un router
- Inserire un middleware per le rotte inesistenti
- Inserire un middleware per la gestione errori

# DATABASE
- table: movies
- table: reviews

## Movies Table
- id
- title
- director
- genre
- release_year
- abstract
- image
- created_at
- updated_at

## Reviews Table
- id 
- movies_id
- name
- vote
- text
- created_at
- updated_at