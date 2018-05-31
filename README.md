# Installation du projet

```
$ npm install
$ npm start
```

# Données de tests

## Utilisateur

```javascript
[
  {
    "firstname": "Kwadwo",
    "lastname": "Busumtwi",
    "countryCode": "0033",
    "phone": "12345678",
    "password": "1234"
  }
]
```

## Liste des agents

```javascript
[
  {
    "firstname": "Agent",
    "lastname": "1",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.82947097610185,
      "lng": 2.3665683586914383
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 3,
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra quis nibh aliquam porta. Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 4,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 1,
        "text": "Lorem ipsum dolor sit amet."
      }
    ]
  },
  {
    "firstname": "Agent",
    "lastname": "2",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.83110952310031,
      "lng": 2.336184294970735
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 5,
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra quis nibh aliquam porta. Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 2,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      }
    ]
  },
  {
    "firstname": "Agent",
    "lastname": "3",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.869966923991065,
      "lng": 2.3655383904297196
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 0,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 1,
        "text": "Lorem ipsum dolor sit amet."
      }
    ]
  },
  {
    "firstname": "Agent",
    "lastname": "4",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.856867216840485,
      "lng": 2.293440612109407
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 5,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 4,
        "text": "Lorem ipsum dolor sit amet."
      }
    ]
  }
]
```

# Exercice

## Pages

L'application doit comporter 2 pages, une page de login et une page carte contenant une carte Google Map et seulement accessible aux utilisateurs connectés.

### Page de login

Cette page doit contenir un formulaire de login avec 3 champs:

* le champ countryCode: correspondant à l'indicatif téléphonique du pays (+33/0033 pour la france)
* le champ phone: correspondant au numéro de téléphone de l'utilisateur
* le champ password: correspondant au mot de passe de l'utilisateur

Si l'utilisateur rentre les informations ci-dessous, il sera redirigé vers la page sécurisée Carte :

```javascript
{
  "countryCode": "0033",
  "phone": "12345678",
  "password": "1234"
}
```

### Page carte (page sécurisée)

**Rappel :** Cette page n'est accessible qu'aux utilisateurs connectés sinon, l'internaute devra être redirigé vers la page de login.

La page Carte doit contenir une carte Google Map centrée sur la géolocalisation du navigateur (navigator.geolocation.getCurrentPosition), afficher des markers aux positions ou se trouvent les agents (voir Données de test) et contenir un bouton pour se déconnecter.

**Attention :** L'agent ayant la meilleure note moyenne devra avoir un marker d'une couleur différrente.

Lors du click sur un marker, une pop-in devra s'afficher. Elle contiendra : 

* Le nom + prénom de l'agent
* Son numéro de téléphone
* Sa note moyenne
* La liste des commentaires que l'agent a reçus
* Un formulaire pour ajouter un nouveau commentaire (note + text + submit button)

## Consignes

Ce test est à faire, bien entendu, en ReactJs et les maquettes que du devras intégrer se trouvent dans le dossier ``design/``.\
La seule contrainte technique que je te donne est d'utiliser un reducer pour charger les données de test, comme avec une vraie API, sinon, tu es libre :D
\
\
Bon courage !!!