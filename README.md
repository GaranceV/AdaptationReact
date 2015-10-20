# AdaptationReact
Adaptation of HMI project, based on react ui construction

## Lancement
Pour lancer le projet, la première fois : 
`npm install`
`npm install --global babel`
`babel src --watch --out-dir build` 
Une fois que le message "src/index.js -> build/index.js" est affiché vous pouvez arrêter la commande avec Ctrl+C

Suite à cela, et toutes les autres fois : 
`node web.js`
Le projet va alors se lancer sur localhost, sur le port 10000. 
On peut modifier ce paramètre dans web.js, à la racine du projet.
Pour acceder à la page ouvrir votre navigateur internet à l'url http://localhost:10000/ 
