export default class TimeTo {

  forSecondes (timems) {
    let time = timems / 1000

    if (time <= 60) { // 1M
      return {
        fr: 'Votre mot de passe pourrait être craqué avant même que vous n\'ayez le temps de dire "oups"',
        en: 'Your password could be cracked before you even have time to say "oops"'
      }
    } else if (time <= 600) { // 10M
      return {
        fr: 'C\'est le temps qu\'il faut à un escargot pour parcourir ' + Math.floor(time / 60) * 25 + ' centimètres',
        en: 'This is the time it takes a snail to travel ' + Math.floor(time / 60) * 25 + ' centimeters'
      }
    } else if (time <= 3600) { // 1H
      return {
        fr: 'Le temps de regarder une vidéo de ' + Math.floor(time / 60) + ' minutes sur internet',
        en: 'Time to watch a  ' + Math.floor(time / 60) + ' minutes video on the internet'
      }
    } else if (time <= 10800) { // 3H
      return {
        fr: 'Marchez environ ' + Math.floor((time / 3600) * 25) + ' kilomètres et trouvez votre mot de passe craqué à votre retour',
        en: 'Walk about ' + Math.floor((time / 3600) * 25) + ' kilometers and find your password cracked when you return'
      }
    } else if (time <= 36000) { // 10H
      return {
        fr: 'Le temps de faire un voyage de ' + Math.floor(320 * (time / 3600)) + 'KM en TGV',
        en: 'The time to make ' + Math.floor(320 * (time / 3600)) + 'KM in TGV'
      }
    } else if (time <= 86400) { // 24H
      return {
        fr: 'C\'est le temps pour télécharger un fichier de ' + Math.floor(24 * (time / 3600)) + 'Mo avec un modem 56K',
        en: 'This is the time to download a ' + Math.floor(24 * (time / 3600)) + 'MB file with a 56K modem'
      }
    } else if (time <= 172800) { // 48H
      return {
        fr: 'La Station Spacial Internationnal (ISS) aura fait ' + Math.floor(time / 5400) + ' orbites autour de la terre',
        en: 'The International Space Station (ISS) will have made ' + Math.floor(time / 5400) + ' orbits around the earth'
      }
    } else if (time <= 604800) { // 1 Week
      return {
        fr: 'C\'est le temps pour télécharger ' + Math.floor((450 * (time / 3600)) / 1000) + ' films légalement avec une connexion moyenne',
        en: 'This is the time to download ' + Math.floor((450 * (time / 3600)) / 1000) + ' movies legally with an average connection'
      }
    } else if (time <= 1209600) { // 2 Week
      return {
        fr: 'C\'est le temps nécessaire pour graver ' + Math.floor(time / (15 * 60)) + ' DVD',
        en: 'This is the time to burn ' + Math.floor(time / (15 * 60)) + ' DVDs'
      }
    } else if (time <= 2419200) { // 1 Month
      return {
        fr: 'C\'est assez pour faire ' + Math.floor((time / 30000) * 2) + ' vols aller retour Paris - New York',
        en: 'It\'s enough to make ' + Math.floor((time / 30000) * 2) + ' return flights Paris - New York'
      }
    } else if (time <= 14515200) { // 6 Month
      return {
        fr: 'C\'est le temps que met un romancier pour écrire ' + Math.floor(time / 25920) + ' pages de son roman',
        en: 'It is the time that a novelist puts to write ' + Math.floor(time / 25920) + ' pages of his novel'
      }
    } else if (time <= 58060800) { // 2 Y
      return {
        fr: 'C\'est le temps nécessaire pour construire ' + Math.floor(time / 18408600) + ' maisons',
        en: 'This is the time needed to build ' + Math.floor(time / 18408600) + ' houses'
      }
    } else if (time <= 145152000) { // 5 Y
      return {
        fr: 'Neil Armstrong et Buzz Aldrin auraient fait ' + Math.floor(time / 703080) + ' aller retour Terre - Lune',
        en: 'Neil Armstrong and Buzz Aldrin would have made ' + Math.floor(time / 703080) + ' return Earth - Moon'
      }
    } else if (time <= 290304000) { // 10 Y
      return {
        fr: 'C\'est le délai de construction de ' + Math.abs(time / 94608000) + ' RMS Titanic',
        en: 'This is the time to build ' + Math.abs(time / 94608000) + ' RMS Titanic'
      }
    } else if (time <= 11612160000) { // 400 Y
      return {
        fr: 'C\'est le temps qu\'il faut pour réaliser ' + Math.floor(time / 378432000) + ' nouvelles fusées (de la fabrication des premiers prototypes jusqu\'au premier lancement)',
        en: 'This is the time it takes to make ' + Math.floor(time / 378432000) + ' new space rockets (from the manufacture of the first prototypes until the first launch)'
      }
    } else if (time <= 630720000000) { // 20 000 Y
      return {
        fr: 'C\'est le temps nécessaire pour envoyer des hommes faire ' + Math.floor(time / ((78624000 + 31536000) * 2)) + ' aller retour Terre - Mars',
        en: 'This is the time it takes to send men to make ' + Math.floor(time / ((78624000 + 31536000) * 2)) + ' return Earth - Mars'
      }
    } else {
      return {
        fr: 'Vous pouvez trouver la réponse à la Grande Question sur la vie, l\'univers et le reste sans avoir à vous préoccuper pour votre mot de passe.',
        en: 'You can find the answer to the Great Question about life, the universe and the rest without having to worry about your password.'
      }
    }
  }
}
