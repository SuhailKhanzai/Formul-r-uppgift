const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs')

const frågor =
  [
    {
      "Question": '0. Gillar du att äta Kvarg?',
      "Ja": {
        "Hund": 1,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 2,
      },
      "Nej": {
        "Hund": 3,
        "Katt": 1,
        "Kanin": 0,
        "Fisk": 1,

      }
    },

    {
      "Question": '1. Gillar du att åka till Barcelona? ',
      "Ja": {
        "Hund": 5,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 2,
        "Katt": 3,
        "Kanin": 0,
        "Fisk": 0,
      }
    },

    {
      "Question": '2. Gillar du åka till Liseberg?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 2,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }
    },

    {
      "Question": '3. Gillar du att ha citron i din cola?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 2,
        "Kanin": 1,
        "Fisk": 0,
      }
    },

    {
      "Question": '4. Gillar du att motionera med ditt husdjur?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }
    },

    {
      "Question": '5. Gillar du djur?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }

    },

    {
      "Question": '6. Gillar du träning?',
      "Ja": {
        "Hund": 4,
        "Katt": 3,
        "Kanin": 0,
        "Fisk": 0,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 2,
        "Fisk": 1,
      }

    },

    {
      "Question": '7. Gillar du att springa?',
      "Ja": {
        "Hund": 2,
        "Katt": 4,
        "Kanin": 1,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 1,
        "Fisk": 2,
      }

    },

    {
      "Question": '8. Gillar du att styrketräna?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 2,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 2,
        "Katt": 1,
        "Kanin": 0,
        "Fisk": 0,
      }

    },

    {
      "Question": '9. Gillar du spela fotboll?',
      "Ja": {
        "Hund": 4,
        "Katt": 1,
        "Kanin": 0,
        "Fisk": 0,

      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      },
    },

    {
      "Question": '10. Gillar du att resa?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }

    },

    {
      "Question": '11. Gillar du åka skidor?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }

    },

    {
      "Question": '12. Gillar du vintern?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },

      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }
    },

    {
      "Question": '13. Gillar du äta äcklig mat',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,
      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }
    },


    {
      "Question": '14. Gillar du Sverige?',
      "Ja": {
        "Hund": 3,
        "Katt": 2,
        "Kanin": 0,
        "Fisk": 1,

      },
      "Nej": {
        "Hund": 0,
        "Katt": 1,
        "Kanin": 3,
        "Fisk": 2,
      }
    }];

let resultat

try {
  resultat = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf8' }))
} catch (err) {
  resultat = {
    "Hund": 0,
    "Katt": 0,
    "Kanin": 0,
    "Fisk": 0,
  }
}

for (let i = 0; i < frågor.length; i = i + 1) {
  console.log(frågor[i].Question)

  const svar = prompt();

  switch (svar.toUpperCase()) {
    case 'JA':
      console.log('Du svarade ja');

      resultat.Hund += frågor[i].Ja.Hund
      resultat.Katt += frågor[i].Ja.Katt
      resultat.Kanin += frågor[i].Ja.Kanin
      resultat.Fisk += frågor[i].Ja.Fisk
      console.log(resultat)

      break;

    case 'NEJ':
      console.log('Du svarade Nej');
      resultat.Hund += frågor[i].Nej.Hund
      resultat.Katt += frågor[i].Nej.Katt
      resultat.Kanin += frågor[i].Nej.Kanin
      resultat.Fisk += frågor[i].Nej.Fisk
      console.log(resultat)

      break;

    default:
      i--
      console.log('Du måste svara Ja eller Nej');
  }
}

let resultatArray = Object.entries(resultat)

let sorteratResultat = resultatArray.sort((a, b) => a[1] > b[1])

let totalMatchning = 0

for (let i = 0; i < sorteratResultat.length; i++) {
  totalMatchning += sorteratResultat[i][1]
}

for (let i = 0; i < sorteratResultat.length; i++) {
  console.log(sorteratResultat[i][0] + " matchade " + (sorteratResultat[i][1] / totalMatchning * 100) + "%")
}

fs.writeFileSync('./data.json', JSON.stringify(resultat, null, 2), 'utf-8')