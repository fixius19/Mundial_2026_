/* ============================================================
   2026 FIFA World Cup Prediction Game - app.js
   Data fetched from openfootball/worldcup.json
   ============================================================ */

const DATA_SRC = 'https://raw.githubusercontent.com/openfootball/worldcup.json/refs/heads/master/2026';
// EDITA ESTAS 3 COSAS POR FAVOR
// POR FAVOR
const LEADERBOARD_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT105kN7fWrAzxSwAiZVi0MtO_M8pf5GDjCQz6Y5igdePEU-_UHNwH3YrZf_EEK1_GV4qRlAmYeyvHG/pub?gid=1393910556&single=true&output=csv'
const FORM_ID = '1FAIpQLSdVWNqLCXFs2qgYhaK-2S_VMz5ur27sJbjZbgPakGE_huG4VA';
const ENTRY_ID = 'entry.2102855832';
// REPITO, POR FAVOR

// Puedes cambiar los valores por tus propias puntuaciones si quieres
const puntuaciones = {
  grupos: {
    partido: {
      resultadoExacto: 2,
      ganadorEmpateCorrecto: 1
    },
    posicion: {
      primero: 3,
      segundo: 2,
      tercero: 1
    }
  },
  eliminatorias: {
    round32: 2,
    round16: 3,
    quarterfinals: 5,
    semifinals: 10,
    finalist: 20,
    champion: 20,
    thirdPlace: 15
  },
  premios: {
    goldenBoot: [15, 10, 5],
    goldenBall: [15, 10, 5],
    goldenGlove: [15, 10, 5]
  }
};

const FLAG_CODE = {
  'Mexico':'mx','South Africa':'za','South Korea':'kr','Czech Republic':'cz',
  'Canada':'ca','Bosnia & Herzegovina':'ba','Qatar':'qa','Switzerland':'ch',
  'Brazil':'br','Morocco':'ma','Haiti':'ht','Scotland':'gb-sct',
  'USA':'us','Paraguay':'py','Australia':'au','Turkey':'tr',
  'Germany':'de','Curaçao':'cw','Ivory Coast':'ci','Ecuador':'ec',
  'Netherlands':'nl','Japan':'jp','Sweden':'se','Tunisia':'tn',
  'Belgium':'be','Egypt':'eg','Iran':'ir','New Zealand':'nz',
  'Spain':'es','Cape Verde':'cv','Saudi Arabia':'sa','Uruguay':'uy',
  'France':'fr','Senegal':'sn','Iraq':'iq','Norway':'no',
  'Argentina':'ar','Algeria':'dz','Austria':'at','Jordan':'jo',
  'Portugal':'pt','DR Congo':'cd','Uzbekistan':'uz','Colombia':'co',
  'England':'gb-eng','Croatia':'hr','Ghana':'gh','Panama':'pa'
};

const AWARD_PLAYERS = [


 { name: 'PO MASTIL', country: 'Algeria' },
{ name: 'MANDI', country: 'Algeria' },
{ name: 'ABADA', country: 'Algeria' },
{ name: 'TOUGAI', country: 'Algeria' },
{ name: 'BELAID', country: 'Algeria' },
{ name: 'ZERROUKI', country: 'Algeria' },
{ name: 'MAHREZ', country: 'Algeria' },
{ name: 'AOUAR', country: 'Algeria' },
{ name: 'GOUIRI', country: 'Algeria' },
{ name: 'CHAIBI', country: 'Algeria' },
{ name: 'MOUSSA', country: 'Algeria' },
{ name: 'BENBOUALI', country: 'Algeria' },
{ name: 'HADJAM', country: 'Algeria' },
{ name: 'BOUDAOUI', country: 'Algeria' },
{ name: 'NOURI', country: 'Algeria' },
{ name: 'PO BENBOT', country: 'Algeria' },
{ name: 'BELGHALI', country: 'Algeria' },
{ name: 'AMOURA', country: 'Algeria' },
{ name: 'BENTALEB', country: 'Algeria' },
{ name: 'BOULBINA', country: 'Algeria' },
{ name: 'BENSEBAINI', country: 'Algeria' },
{ name: 'MAZA', country: 'Algeria' },
{ name: 'PO ZIDANE', country: 'Algeria' },
{ name: 'TITRAOUI', country: 'Algeria' },
{ name: 'GHEDJEMIS', country: 'Algeria' },
{ name: 'CHRGUI', country: 'Algeria' },
{ name: 'PO MUSSO', country: 'Argentina' },
{ name: 'BALERDI', country: 'Argentina' },
{ name: 'TAGLIAFICO', country: 'Argentina' },
{ name: 'MONTIEL', country: 'Argentina' },
{ name: 'PAREDES', country: 'Argentina' },
{ name: 'MARTÍNEZ', country: 'Argentina' },
{ name: 'PAUL', country: 'Argentina' },
{ name: 'BARCO', country: 'Argentina' },
{ name: 'ALVAREZ', country: 'Argentina' },
{ name: 'MESSI', country: 'Argentina' },
{ name: 'CELSO', country: 'Argentina' },
{ name: 'PO RULLI', country: 'Argentina' },
{ name: 'ROMERO', country: 'Argentina' },
{ name: 'PALACIOS', country: 'Argentina' },
{ name: 'GONZALEZ', country: 'Argentina' },
{ name: 'ALMADA', country: 'Argentina' },
{ name: 'SIMEONE', country: 'Argentina' },
{ name: 'PAZ', country: 'Argentina' },
{ name: 'OTAMENDI', country: 'Argentina' },
{ name: 'ALLISTER', country: 'Argentina' },
{ name: 'LOPEZ', country: 'Argentina' },
{ name: 'MARTINEZ', country: 'Argentina' },
{ name: 'PO MARTINEZ', country: 'Argentina' },
{ name: 'FERNANDEZ', country: 'Argentina' },
{ name: 'MEDINA', country: 'Argentina' },
{ name: 'MOLINA', country: 'Argentina' },
{ name: 'PO RYAN', country: 'Australia' },
{ name: 'DEGENEK', country: 'Australia' },
{ name: 'CIRCATI', country: 'Australia' },
{ name: 'ITALIANO', country: 'Australia' },
{ name: 'BOS', country: 'Australia' },
{ name: 'GERIA', country: 'Australia' },
{ name: 'LECKIE', country: 'Australia' },
{ name: 'METCALFE', country: 'Australia' },
{ name: 'TOURE', country: 'Australia' },
{ name: 'HRUSTIC', country: 'Australia' },
{ name: 'MABIL', country: 'Australia' },
{ name: 'PO IZZO', country: 'Australia' },
{ name: 'O'NEILL', country: 'Australia' },
{ name: 'DEVLIN', country: 'Australia' },
{ name: 'TREWIN', country: 'Australia' },
{ name: 'BEHICH', country: 'Australia' },
{ name: 'IRANKUNDA', country: 'Australia' },
{ name: 'PO BEACH', country: 'Australia' },
{ name: 'SOUTTAR', country: 'Australia' },
{ name: 'VOLPATO', country: 'Australia' },
{ name: 'BURGESS', country: 'Australia' },
{ name: 'IRVINE', country: 'Australia' },
{ name: 'VELUPILLAY', country: 'Australia' },
{ name: 'OKON-ENGSTLER', country: 'Australia' },
{ name: 'HERRINGTON', country: 'Australia' },
{ name: 'YENGI', country: 'Australia' },
{ name: 'PO SCHLAGER', country: 'Austria' },
{ name: 'AFFENGRUBER', country: 'Austria' },
{ name: 'DANSO', country: 'Austria' },
{ name: 'XAVER', country: 'Austria' },
{ name: 'POSCH', country: 'Austria' },
{ name: 'SEIWALD', country: 'Austria' },
{ name: 'ARNAUTOVIC', country: 'Austria' },
{ name: 'ALABA', country: 'Austria' },
{ name: 'SABITZER', country: 'Austria' },
{ name: 'GRILLITSCH', country: 'Austria' },
{ name: 'GREGORITSCH', country: 'Austria' },
{ name: 'PO WIEGELE', country: 'Austria' },
{ name: 'PO PENTZ', country: 'Austria' },
{ name: 'KALAJDZIC', country: 'Austria' },
{ name: 'LIENHART', country: 'Austria' },
{ name: 'MWENE', country: 'Austria' },
{ name: 'CHUKWUEMEKA', country: 'Austria' },
{ name: 'SCHMID', country: 'Austria' },
{ name: 'BAUMGARTNER', country: 'Austria' },
{ name: 'LAIMER', country: 'Austria' },
{ name: 'WIMMER', country: 'Austria' },
{ name: 'PRASS', country: 'Austria' },
{ name: 'FRIEDL', country: 'Austria' },
{ name: 'WANNER', country: 'Austria' },
{ name: 'SVOBODA', country: 'Austria' },
{ name: 'SCHÖPF', country: 'Austria' },
{ name: 'PO COURTOIS', country: 'Belgium' },
{ name: 'DEBAST', country: 'Belgium' },
{ name: 'THEATE', country: 'Belgium' },
{ name: 'MECHELE', country: 'Belgium' },
{ name: 'CUYPER', country: 'Belgium' },
{ name: 'WITSEL', country: 'Belgium' },
{ name: 'BRUYNE', country: 'Belgium' },
{ name: 'TIELEMANS', country: 'Belgium' },
{ name: 'LUKAKU', country: 'Belgium' },
{ name: 'TROSSARD', country: 'Belgium' },
{ name: 'DOKU', country: 'Belgium' },
{ name: 'PO LAMMENS', country: 'Belgium' },
{ name: 'PO PENDERS', country: 'Belgium' },
{ name: 'LUKEBAKIO', country: 'Belgium' },
{ name: 'MEUNIER', country: 'Belgium' },
{ name: 'WINTER', country: 'Belgium' },
{ name: 'KETELAERE', country: 'Belgium' },
{ name: 'SEYS', country: 'Belgium' },
{ name: 'MOREIRA', country: 'Belgium' },
{ name: 'VANAKEN', country: 'Belgium' },
{ name: 'CASTAGNE', country: 'Belgium' },
{ name: 'SAELEMAEKERS', country: 'Belgium' },
{ name: 'RASKIN', country: 'Belgium' },
{ name: 'ONANA', country: 'Belgium' },
{ name: 'NGOY', country: 'Belgium' },
{ name: 'FERNANDEZ-PARDO', country: 'Belgium' },
{ name: 'PO VASILJ', country: 'Bosnia & Herzegovina' },
{ name: 'MUJAKIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'HADŽIKADUNIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'MUHAREMOVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'KOLAŠINAC', country: 'Bosnia & Herzegovina' },
{ name: 'TAHIROVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'DEDIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'GIGOVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'BAŽDAR', country: 'Bosnia & Herzegovina' },
{ name: 'DEMIROVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'DŽEKO', country: 'Bosnia & Herzegovina' },
{ name: 'PO JURKAS', country: 'Bosnia & Herzegovina' },
{ name: 'BAŠIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'ŠUNJIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'MEMIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'HADŽIAHMETOVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'BURNIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'KATIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'ALAJBEGOVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'BAJRAKTAREVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'RADELJIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'PO ZLOMISLIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'TABAKOVIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'ČELIK', country: 'Bosnia & Herzegovina' },
{ name: 'LUKIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'MAHMIĆ', country: 'Bosnia & Herzegovina' },
{ name: 'PO BECKER', country: 'Brazil' },
{ name: 'WESLEY', country: 'Brazil' },
{ name: 'GABRIEL', country: 'Brazil' },
{ name: 'MARQUINHOS', country: 'Brazil' },
{ name: 'CASEMIRO', country: 'Brazil' },
{ name: 'SANDRO', country: 'Brazil' },
{ name: 'JR.', country: 'Brazil' },
{ name: 'G.', country: 'Brazil' },
{ name: 'CUNHA', country: 'Brazil' },
{ name: 'JR', country: 'Brazil' },
{ name: 'RAPHINHA', country: 'Brazil' },
{ name: 'PO WEVERTON', country: 'Brazil' },
{ name: 'DANILO', country: 'Brazil' },
{ name: 'BREMER', country: 'Brazil' },
{ name: 'PEREIRA', country: 'Brazil' },
{ name: 'S.', country: 'Brazil' },
{ name: 'FABINHO', country: 'Brazil' },
{ name: 'S.', country: 'Brazil' },
{ name: 'ENDRICK', country: 'Brazil' },
{ name: 'PAQUETÁ', country: 'Brazil' },
{ name: 'HENRIQUE', country: 'Brazil' },
{ name: 'MARTINELLI', country: 'Brazil' },
{ name: 'PO EDERSON', country: 'Brazil' },
{ name: 'IBAÑEZ', country: 'Brazil' },
{ name: 'THIAGO', country: 'Brazil' },
{ name: 'RAYAN', country: 'Brazil' },
{ name: 'PO VOZINHA', country: 'Cape Verde' },
{ name: 'STOPIRA', country: 'Cape Verde' },
{ name: 'BORGES', country: 'Cape Verde' },
{ name: 'LOPES', country: 'Cape Verde' },
{ name: 'LOGAN', country: 'Cape Verde' },
{ name: 'L.', country: 'Cape Verde' },
{ name: 'JOVANE', country: 'Cape Verde' },
{ name: 'PAULO', country: 'Cape Verde' },
{ name: 'BENCHIMOL', country: 'Cape Verde' },
{ name: 'MONTEIRO', country: 'Cape Verde' },
{ name: 'RODRIGUES', country: 'Cape Verde' },
{ name: 'PO MARCIO', country: 'Cape Verde' },
{ name: 'CABRAL', country: 'Cape Verde' },
{ name: 'DUARTE', country: 'Cape Verde' },
{ name: 'DUARTE', country: 'Cape Verde' },
{ name: 'SEMEDO', country: 'Cape Verde' },
{ name: 'SEMEDO', country: 'Cape Verde' },
{ name: 'ARCANJO', country: 'Cape Verde' },
{ name: 'LIVRAMENTO', country: 'Cape Verde' },
{ name: 'RYAN', country: 'Cape Verde' },
{ name: 'COSTA', country: 'Cape Verde' },
{ name: 'MOREIRA', country: 'Cape Verde' },
{ name: 'PO SANTOS', country: 'Cape Verde' },
{ name: 'P.', country: 'Cape Verde' },
{ name: 'KELVIN', country: 'Cape Verde' },
{ name: 'HÉLIO', country: 'Cape Verde' },
{ name: 'PO CLAIR', country: 'Canada' },
{ name: 'JOHNSTON', country: 'Canada' },
{ name: 'JONES', country: 'Canada' },
{ name: 'FOUGEROLLES', country: 'Canada' },
{ name: 'WATERMAN', country: 'Canada' },
{ name: 'CHOINIÈRE', country: 'Canada' },
{ name: 'EUSTÀQUIO', country: 'Canada' },
{ name: 'KONÉ', country: 'Canada' },
{ name: 'LARIN', country: 'Canada' },
{ name: 'DAVID', country: 'Canada' },
{ name: 'MILLAR', country: 'Canada' },
{ name: 'OLUWASEYI', country: 'Canada' },
{ name: 'CORNELIUS', country: 'Canada' },
{ name: 'SHAFFELBURG', country: 'Canada' },
{ name: 'BOMBITO', country: 'Canada' },
{ name: 'PO CRÉPEAU', country: 'Canada' },
{ name: 'BUCHANAN', country: 'Canada' },
{ name: 'PO GOODMAN', country: 'Canada' },
{ name: 'DAVIES', country: 'Canada' },
{ name: 'AHMED', country: 'Canada' },
{ name: 'OSORIO', country: 'Canada' },
{ name: 'LARYEA', country: 'Canada' },
{ name: 'SIGUR', country: 'Canada' },
{ name: 'PROMISE', country: 'Canada' },
{ name: 'SALIBA', country: 'Canada' },
{ name: 'MARCELO', country: 'Canada' },
{ name: 'PO OSPINA', country: 'Colombia' },
{ name: 'MUÑOZ', country: 'Colombia' },
{ name: 'LUCUMI', country: 'Colombia' },
{ name: 'ARIAS', country: 'Colombia' },
{ name: 'CASTAÑO', country: 'Colombia' },
{ name: 'RIOS', country: 'Colombia' },
{ name: 'DIAZ', country: 'Colombia' },
{ name: 'CARRASCAL', country: 'Colombia' },
{ name: 'CORDOBA', country: 'Colombia' },
{ name: 'JAMES', country: 'Colombia' },
{ name: 'ARIAS', country: 'Colombia' },
{ name: 'PO VARGAS', country: 'Colombia' },
{ name: 'MINA', country: 'Colombia' },
{ name: 'PUERTA', country: 'Colombia' },
{ name: 'PORTILLA', country: 'Colombia' },
{ name: 'LERMA', country: 'Colombia' },
{ name: 'MOJICA', country: 'Colombia' },
{ name: 'DITTA', country: 'Colombia' },
{ name: 'HERNANDEZ', country: 'Colombia' },
{ name: 'QUINTERO', country: 'Colombia' },
{ name: 'CAMPAZ', country: 'Colombia' },
{ name: 'MACHADO', country: 'Colombia' },
{ name: 'SANCHEZ', country: 'Colombia' },
{ name: 'PO MONTERO', country: 'Colombia' },
{ name: 'SUAREZ', country: 'Colombia' },
{ name: 'GOMEZ', country: 'Colombia' },
{ name: 'PO MPASI', country: 'DR Congo' },
{ name: 'BISSAKA', country: 'DR Congo' },
{ name: 'KAPUADI', country: 'DR Congo' },
{ name: 'TUANZEBE', country: 'DR Congo' },
{ name: 'BATUBINSIKA', country: 'DR Congo' },
{ name: 'MUKAU', country: 'DR Congo' },
{ name: 'MBUKU', country: 'DR Congo' },
{ name: 'MOUTOUSSAMY', country: 'DR Congo' },
{ name: 'CIPENGA', country: 'DR Congo' },
{ name: 'BONGONDA', country: 'DR Congo' },
{ name: 'KAKUTA', country: 'DR Congo' },
{ name: 'KAYEMBE', country: 'DR Congo' },
{ name: 'ELIA', country: 'DR Congo' },
{ name: 'SADIKI', country: 'DR Congo' },
{ name: 'TSHIBOLA', country: 'DR Congo' },
{ name: 'PO FAYULU', country: 'DR Congo' },
{ name: 'BAKAMBU', country: 'DR Congo' },
{ name: 'PICKEL', country: 'DR Congo' },
{ name: 'MAYELE', country: 'DR Congo' },
{ name: 'WISSA', country: 'DR Congo' },
{ name: 'PO EPOLO', country: 'DR Congo' },
{ name: 'MBEMBA', country: 'DR Congo' },
{ name: 'BANZA', country: 'DR Congo' },
{ name: 'KALULU', country: 'DR Congo' },
{ name: 'KAYEMBE', country: 'DR Congo' },
{ name: 'MASUAKU', country: 'DR Congo' },
{ name: 'PO FOFANA', country: 'Côte D'Ivoire' },
{ name: 'DIOMANDE', country: 'Côte D'Ivoire' },
{ name: 'KONAN', country: 'Côte D'Ivoire' },
{ name: 'SERI', country: 'Côte D'Ivoire' },
{ name: 'SINGO', country: 'Côte D'Ivoire' },
{ name: 'FOFANA', country: 'Côte D'Ivoire' },
{ name: 'KOSSOUNOU', country: 'Côte D'Ivoire' },
{ name: 'KESSIE', country: 'Côte D'Ivoire' },
{ name: 'BONNY', country: 'Côte D'Ivoire' },
{ name: 'ADINGRA', country: 'Côte D'Ivoire' },
{ name: 'DIOMANDE', country: 'Côte D'Ivoire' },
{ name: 'WAHI', country: 'Côte D'Ivoire' },
{ name: 'OPERI', country: 'Côte D'Ivoire' },
{ name: 'DIAKITE', country: 'Côte D'Ivoire' },
{ name: 'AMAD', country: 'Côte D'Ivoire' },
{ name: 'PO KONE', country: 'Côte D'Ivoire' },
{ name: 'DOUE', country: 'Côte D'Ivoire' },
{ name: 'SANGARE', country: 'Côte D'Ivoire' },
{ name: 'PEPE', country: 'Côte D'Ivoire' },
{ name: 'AGBADOU', country: 'Côte D'Ivoire' },
{ name: 'NDICKA', country: 'Côte D'Ivoire' },
{ name: 'GUESSAND', country: 'Côte D'Ivoire' },
{ name: 'PO LAFONT', country: 'Côte D'Ivoire' },
{ name: 'TOURE', country: 'Côte D'Ivoire' },
{ name: 'GUIAGON', country: 'Côte D'Ivoire' },
{ name: 'INAO', country: 'Côte D'Ivoire' },
{ name: 'PO LIVAKOVIĆ', country: 'Croatia' },
{ name: 'STANIŠIĆ', country: 'Croatia' },
{ name: 'PONGRAČIĆ', country: 'Croatia' },
{ name: 'GVARDIOL', country: 'Croatia' },
{ name: 'ĆALETA-CAR', country: 'Croatia' },
{ name: 'ŠUTALO', country: 'Croatia' },
{ name: 'MORO', country: 'Croatia' },
{ name: 'KOVAČIĆ', country: 'Croatia' },
{ name: 'KRAMARIĆ', country: 'Croatia' },
{ name: 'MODRIĆ', country: 'Croatia' },
{ name: 'BUDIMIR', country: 'Croatia' },
{ name: 'PO PANDUR', country: 'Croatia' },
{ name: 'VLAŠIĆ', country: 'Croatia' },
{ name: 'PERIŠIĆ', country: 'Croatia' },
{ name: 'PAŠALIĆ', country: 'Croatia' },
{ name: 'BATURINA', country: 'Croatia' },
{ name: 'SUČIĆ', country: 'Croatia' },
{ name: 'JAKIĆ', country: 'Croatia' },
{ name: 'FRUK', country: 'Croatia' },
{ name: 'MATANOVIĆ', country: 'Croatia' },
{ name: 'SUČIĆ', country: 'Croatia' },
{ name: 'VUŠKOVIĆ', country: 'Croatia' },
{ name: 'PO KOTARSKI', country: 'Croatia' },
{ name: 'PAŠALIĆ', country: 'Croatia' },
{ name: 'ERLIĆ', country: 'Croatia' },
{ name: 'MUSA', country: 'Croatia' },
{ name: 'PO ROOM', country: 'Curaçao' },
{ name: 'SAMBO', country: 'Curaçao' },
{ name: 'GAARI', country: 'Curaçao' },
{ name: 'EIJMA', country: 'Curaçao' },
{ name: 'FLORANUS', country: 'Curaçao' },
{ name: 'ROEMERATOE', country: 'Curaçao' },
{ name: 'BACUNA', country: 'Curaçao' },
{ name: 'COMENENCIA', country: 'Curaçao' },
{ name: 'LOCADIA', country: 'Curaçao' },
{ name: 'BACUNA', country: 'Curaçao' },
{ name: 'ANTONISSE', country: 'Curaçao' },
{ name: 'HANSEN', country: 'Curaçao' },
{ name: 'NOSLIN', country: 'Curaçao' },
{ name: 'GORRE', country: 'Curaçao' },
{ name: 'MARTHA', country: 'Curaçao' },
{ name: 'MARGARITHA', country: 'Curaçao' },
{ name: 'KUWAS', country: 'Curaçao' },
{ name: 'OBISPO', country: 'Curaçao' },
{ name: 'KASTANEER', country: 'Curaçao' },
{ name: 'BRENET', country: 'Curaçao' },
{ name: 'CHONG', country: 'Curaçao' },
{ name: 'FELIDA', country: 'Curaçao' },
{ name: 'BAZOER', country: 'Curaçao' },
{ name: 'FONVILLE', country: 'Curaçao' },
{ name: 'PO BODAK', country: 'Curaçao' },
{ name: 'PO DOORNBUSCH', country: 'Curaçao' },
{ name: 'PO KOVÁŘ', country: 'Czech Republic' },
{ name: 'ZIMA', country: 'Czech Republic' },
{ name: 'HOLEŠ', country: 'Czech Republic' },
{ name: 'HRANÁČ', country: 'Czech Republic' },
{ name: 'COUFAL', country: 'Czech Republic' },
{ name: 'CHALOUPEK', country: 'Czech Republic' },
{ name: 'KREJČÍ', country: 'Czech Republic' },
{ name: 'DARIDA', country: 'Czech Republic' },
{ name: 'HLOŽEK', country: 'Czech Republic' },
{ name: 'SCHICK', country: 'Czech Republic' },
{ name: 'KUCHTA', country: 'Czech Republic' },
{ name: 'ČERV', country: 'Czech Republic' },
{ name: 'CHYTIL', country: 'Czech Republic' },
{ name: 'JURÁSEK', country: 'Czech Republic' },
{ name: 'ŠULC', country: 'Czech Republic' },
{ name: 'PO STANĚK', country: 'Czech Republic' },
{ name: 'PROVOD', country: 'Czech Republic' },
{ name: 'SADÍLEK', country: 'Czech Republic' },
{ name: 'CHORÝ', country: 'Czech Republic' },
{ name: 'ZELENÝ', country: 'Czech Republic' },
{ name: 'DOUDĚRA', country: 'Czech Republic' },
{ name: 'SOUČEK', country: 'Czech Republic' },
{ name: 'PO HORNÍČEK', country: 'Czech Republic' },
{ name: 'SOJKA', country: 'Czech Republic' },
{ name: 'SOCHŮREK', country: 'Czech Republic' },
{ name: 'VIŠINSKÝ', country: 'Czech Republic' },
{ name: 'PO GALINDEZ', country: 'Ecuador' },
{ name: 'TORRES', country: 'Ecuador' },
{ name: 'HINCAPIE', country: 'Ecuador' },
{ name: 'ORDÓÑEZ', country: 'Ecuador' },
{ name: 'ALCIVAR', country: 'Ecuador' },
{ name: 'PACHO', country: 'Ecuador' },
{ name: 'ESTUPIÑÁN', country: 'Ecuador' },
{ name: 'VALENCIA', country: 'Ecuador' },
{ name: 'ZAMORA', country: 'Ecuador' },
{ name: 'PAEZ', country: 'Ecuador' },
{ name: 'RODRIGUEZ', country: 'Ecuador' },
{ name: 'PO RAMÍREZ', country: 'Ecuador' },
{ name: 'VALENCIA', country: 'Ecuador' },
{ name: 'MINDA', country: 'Ecuador' },
{ name: 'VITE', country: 'Ecuador' },
{ name: 'CAICEDO', country: 'Ecuador' },
{ name: 'PRECIADO', country: 'Ecuador' },
{ name: 'CASTILLO', country: 'Ecuador' },
{ name: 'PLATA', country: 'Ecuador' },
{ name: 'ANGULO', country: 'Ecuador' },
{ name: 'FRANCO', country: 'Ecuador' },
{ name: 'PO VALLE', country: 'Ecuador' },
{ name: 'CAICEDO', country: 'Ecuador' },
{ name: 'AREVALO', country: 'Ecuador' },
{ name: 'POROZO', country: 'Ecuador' },
{ name: 'MEDINA', country: 'Ecuador' },
{ name: 'PO ELSHENAWY', country: 'Egypt' },
{ name: 'YASSER', country: 'Egypt' },
{ name: 'HANY', country: 'Egypt' },
{ name: 'HOSSAM', country: 'Egypt' },
{ name: 'RABIAA', country: 'Egypt' },
{ name: 'ABDELMONIEM', country: 'Egypt' },
{ name: 'TREZEGUET', country: 'Egypt' },
{ name: 'ASHOUR', country: 'Egypt' },
{ name: 'ABDELKARIM', country: 'Egypt' },
{ name: 'SALAH', country: 'Egypt' },
{ name: 'ZICO', country: 'Egypt' },
{ name: 'HASSAN', country: 'Egypt' },
{ name: 'FATOUH', country: 'Egypt' },
{ name: 'FATHY', country: 'Egypt' },
{ name: 'HAFEZ', country: 'Egypt' },
{ name: 'PO SOLIMAN', country: 'Egypt' },
{ name: 'LASHIN', country: 'Egypt' },
{ name: 'DONGA', country: 'Egypt' },
{ name: 'ATTIA', country: 'Egypt' },
{ name: 'ADEL', country: 'Egypt' },
{ name: 'SABER', country: 'Egypt' },
{ name: 'MARMOUSH', country: 'Egypt' },
{ name: 'PO SHOUBIR', country: 'Egypt' },
{ name: 'ALAA', country: 'Egypt' },
{ name: 'ZIZO', country: 'Egypt' },
{ name: 'PO ALAA', country: 'Egypt' },
{ name: 'PO PICKFORD', country: 'England' },
{ name: 'KONSA', country: 'England' },
{ name: 'O'REILLY', country: 'England' },
{ name: 'RICE', country: 'England' },
{ name: 'STONES', country: 'England' },
{ name: 'GUEHI', country: 'England' },
{ name: 'SAKA', country: 'England' },
{ name: 'ANDERSON', country: 'England' },
{ name: 'KANE', country: 'England' },
{ name: 'BELLINGHAM', country: 'England' },
{ name: 'RASHFORD', country: 'England' },
{ name: 'LIVRAMENTO', country: 'England' },
{ name: 'PO HENDERSON', country: 'England' },
{ name: 'HENDERSON', country: 'England' },
{ name: 'BURN', country: 'England' },
{ name: 'MAINOO', country: 'England' },
{ name: 'ROGERS', country: 'England' },
{ name: 'GORDON', country: 'England' },
{ name: 'WATKINS', country: 'England' },
{ name: 'MADUEKE', country: 'England' },
{ name: 'EZE', country: 'England' },
{ name: 'TONEY', country: 'England' },
{ name: 'PO TRAFFORD', country: 'England' },
{ name: 'JAMES', country: 'England' },
{ name: 'SPENCE', country: 'England' },
{ name: 'QUANSAH', country: 'England' },
{ name: 'PO SAMBA', country: 'France' },
{ name: 'GUSTO', country: 'France' },
{ name: 'DIGNE', country: 'France' },
{ name: 'UPAMECANO', country: 'France' },
{ name: 'KOUNDE', country: 'France' },
{ name: 'KONE', country: 'France' },
{ name: 'DEMBELE', country: 'France' },
{ name: 'TCHOUAMENI', country: 'France' },
{ name: 'THURAM', country: 'France' },
{ name: 'MBAPPE', country: 'France' },
{ name: 'OLISE', country: 'France' },
{ name: 'BARCOLA', country: 'France' },
{ name: 'KANTE', country: 'France' },
{ name: 'RABIOT', country: 'France' },
{ name: 'KONATE', country: 'France' },
{ name: 'PO MAIGNAN', country: 'France' },
{ name: 'SALIBA', country: 'France' },
{ name: 'EMERY', country: 'France' },
{ name: 'HERNANDEZ', country: 'France' },
{ name: 'DOUE', country: 'France' },
{ name: 'HERNANDEZ', country: 'France' },
{ name: 'MATETA', country: 'France' },
{ name: 'PO RISSER', country: 'France' },
{ name: 'CHERKI', country: 'France' },
{ name: 'AKLIOUCHE', country: 'France' },
{ name: 'LACROIX', country: 'France' },
{ name: 'PO NEUER', country: 'Germany' },
{ name: 'RÜDIGER', country: 'Germany' },
{ name: 'ANTON', country: 'Germany' },
{ name: 'TAH', country: 'Germany' },
{ name: 'PAVLOVIĆ', country: 'Germany' },
{ name: 'KIMMICH', country: 'Germany' },
{ name: 'HAVERTZ', country: 'Germany' },
{ name: 'GORETZKA', country: 'Germany' },
{ name: 'LEWELING', country: 'Germany' },
{ name: 'MUSIALA', country: 'Germany' },
{ name: 'WOLTEMADE', country: 'Germany' },
{ name: 'PO BAUMANN', country: 'Germany' },
{ name: 'GROß', country: 'Germany' },
{ name: 'BEIER', country: 'Germany' },
{ name: 'SCHLOTTERBECK', country: 'Germany' },
{ name: 'STILLER', country: 'Germany' },
{ name: 'WIRTZ', country: 'Germany' },
{ name: 'BROWN', country: 'Germany' },
{ name: 'SANÉ', country: 'Germany' },
{ name: 'AMIRI', country: 'Germany' },
{ name: 'PO NÜBEL', country: 'Germany' },
{ name: 'RAUM', country: 'Germany' },
{ name: 'NMECHA', country: 'Germany' },
{ name: 'THIAW', country: 'Germany' },
{ name: 'KARL', country: 'Germany' },
{ name: 'UNDAV', country: 'Germany' },
{ name: 'PO ZIGI', country: 'Ghana' },
{ name: 'SEIDU', country: 'Ghana' },
{ name: 'CALEB', country: 'Ghana' },
{ name: 'ADJETEY', country: 'Ghana' },
{ name: 'THOMAS', country: 'Ghana' },
{ name: 'SULEMAN', country: 'Ghana' },
{ name: 'FATAWU', country: 'Ghana' },
{ name: 'SIBO', country: 'Ghana' },
{ name: 'AYEW', country: 'Ghana' },
{ name: 'ASANTE', country: 'Ghana' },
{ name: 'SEMENYO', country: 'Ghana' },
{ name: 'PO ANANG', country: 'Ghana' },
{ name: 'BAAH', country: 'Ghana' },
{ name: 'MENSAH', country: 'Ghana' },
{ name: 'OWUSU', country: 'Ghana' },
{ name: 'PO ASARE', country: 'Ghana' },
{ name: 'BABA', country: 'Ghana' },
{ name: 'OPOKU', country: 'Ghana' },
{ name: 'WILLIAMS', country: 'Ghana' },
{ name: 'BOAKYE', country: 'Ghana' },
{ name: 'PEPRAH', country: 'Ghana' },
{ name: 'KAMALDEEN', country: 'Ghana' },
{ name: 'LUCKASSEN', country: 'Ghana' },
{ name: 'NUAMAH', country: 'Ghana' },
{ name: 'ADU', country: 'Ghana' },
{ name: 'SENEYA', country: 'Ghana' },
{ name: 'PO PLACIDE', country: 'Haiti' },
{ name: 'ARCUS', country: 'Haiti' },
{ name: 'THERMONCY', country: 'Haiti' },
{ name: 'ADE', country: 'Haiti' },
{ name: 'DELCROIX', country: 'Haiti' },
{ name: 'SAINTE', country: 'Haiti' },
{ name: 'JR', country: 'Haiti' },
{ name: 'EXPERIENCE', country: 'Haiti' },
{ name: 'NAZON', country: 'Haiti' },
{ name: 'BELLEGARDE', country: 'Haiti' },
{ name: 'DEEDSON', country: 'Haiti' },
{ name: 'PO PIERRE', country: 'Haiti' },
{ name: 'LACROIX', country: 'Haiti' },
{ name: 'PIERRE', country: 'Haiti' },
{ name: 'PROVIDENCE', country: 'Haiti' },
{ name: 'JOSEPH', country: 'Haiti' },
{ name: 'JACQUES', country: 'Haiti' },
{ name: 'ISIDOR', country: 'Haiti' },
{ name: 'FORTUNE', country: 'Haiti' },
{ name: 'PIERROT', country: 'Haiti' },
{ name: 'CASIMIR', country: 'Haiti' },
{ name: 'DUVERNE', country: 'Haiti' },
{ name: 'PO DUVERGER', country: 'Haiti' },
{ name: 'PAUGIN', country: 'Haiti' },
{ name: 'SIMON', country: 'Haiti' },
{ name: 'PIERRE', country: 'Haiti' },
{ name: 'PO BEIRANVAND', country: 'Iran' },
{ name: 'SALEH', country: 'Iran' },
{ name: 'HAJISAFI', country: 'Iran' },
{ name: 'SHOJA', country: 'Iran' },
{ name: 'MOHAMMADI', country: 'Iran' },
{ name: 'EZATOLAHI', country: 'Iran' },
{ name: 'JAHANBAKHSH', country: 'Iran' },
{ name: 'MOHEBBI', country: 'Iran' },
{ name: 'TAREMI', country: 'Iran' },
{ name: 'GHAYEDI', country: 'Iran' },
{ name: 'ALIPOUR', country: 'Iran' },
{ name: 'PO PAYAM', country: 'Iran' },
{ name: 'KANANI', country: 'Iran' },
{ name: 'GHODDOS', country: 'Iran' },
{ name: 'ROOZBEH', country: 'Iran' },
{ name: 'TORABI', country: 'Iran' },
{ name: 'ARYA', country: 'Iran' },
{ name: 'AMIRHOSSEIN', country: 'Iran' },
{ name: 'ALI', country: 'Iran' },
{ name: 'SHAHRIYAR', country: 'Iran' },
{ name: 'MOHAMMAD', country: 'Iran' },
{ name: 'PO HOSSEINI', country: 'Iran' },
{ name: 'RAMIN', country: 'Iran' },
{ name: 'DARGAHI', country: 'Iran' },
{ name: 'DANIAL', country: 'Iran' },
{ name: 'RAZAGH', country: 'Iran' },
{ name: 'PO FAHAD', country: 'Iraq' },
{ name: 'REBIN', country: 'Iraq' },
{ name: 'HUSSEIN', country: 'Iraq' },
{ name: 'T.', country: 'Iraq' },
{ name: 'AKAM', country: 'Iraq' },
{ name: 'MUNAF', country: 'Iraq' },
{ name: 'YOUSSEF', country: 'Iraq' },
{ name: 'IBRAHIM', country: 'Iraq' },
{ name: 'AL-HAMADI', country: 'Iraq' },
{ name: 'MOHANAD', country: 'Iraq' },
{ name: 'Q.', country: 'Iraq' },
{ name: 'PO JALAL', country: 'Iraq' },
{ name: 'Y.', country: 'Iraq' },
{ name: 'Z.IQBAL', country: 'Iraq' },
{ name: 'AHMED', country: 'Iraq' },
{ name: 'AL-AMMARI', country: 'Iraq' },
{ name: 'J.', country: 'Iraq' },
{ name: 'AYMEN', country: 'Iraq' },
{ name: 'YAKOB', country: 'Iraq' },
{ name: 'AIMAR', country: 'Iraq' },
{ name: 'MARKO', country: 'Iraq' },
{ name: 'PO B.', country: 'Iraq' },
{ name: 'DOSKI', country: 'Iraq' },
{ name: 'I.', country: 'Iraq' },
{ name: 'MUSTAFA', country: 'Iraq' },
{ name: 'FRANS', country: 'Iraq' },
{ name: 'PO SUZUKI', country: 'Japan' },
{ name: 'SUGAWARA', country: 'Japan' },
{ name: 'TANIGUCHI', country: 'Japan' },
{ name: 'ITAKURA', country: 'Japan' },
{ name: 'NAGATOMO', country: 'Japan' },
{ name: 'ENDO', country: 'Japan' },
{ name: 'TANAKA', country: 'Japan' },
{ name: 'KUBO', country: 'Japan' },
{ name: 'GOTO', country: 'Japan' },
{ name: 'DOAN', country: 'Japan' },
{ name: 'DAIZEN', country: 'Japan' },
{ name: 'PO OSAKO', country: 'Japan' },
{ name: 'NAKAMURA', country: 'Japan' },
{ name: 'ITO', country: 'Japan' },
{ name: 'KAMADA', country: 'Japan' },
{ name: 'WATANABE', country: 'Japan' },
{ name: 'SUZUKI', country: 'Japan' },
{ name: 'AYASE', country: 'Japan' },
{ name: 'OGAWA', country: 'Japan' },
{ name: 'SEKO', country: 'Japan' },
{ name: 'ITO', country: 'Japan' },
{ name: 'TOMIYASU', country: 'Japan' },
{ name: 'PO HAYAKAWA', country: 'Japan' },
{ name: 'SANO', country: 'Japan' },
{ name: 'SUZUKI', country: 'Japan' },
{ name: 'SHIOGAI', country: 'Japan' },
{ name: 'PO YAZEED', country: 'Jordan' },
{ name: 'HASHEESH', country: 'Jordan' },
{ name: 'NASIB', country: 'Jordan' },
{ name: 'DAHAB', country: 'Jordan' },
{ name: 'ALARAB', country: 'Jordan' },
{ name: 'JAMOUS', country: 'Jordan' },
{ name: 'ZRAIQ', country: 'Jordan' },
{ name: 'ALRAWABDEH', country: 'Jordan' },
{ name: 'OLWAN', country: 'Jordan' },
{ name: 'ALTAMARI', country: 'Jordan' },
{ name: 'ODEH', country: 'Jordan' },
{ name: 'PO ATEYAH', country: 'Jordan' },
{ name: 'ALMARDI', country: 'Jordan' },
{ name: 'RAJA'EI', country: 'Jordan' },
{ name: 'SA'DEH', country: 'Jordan' },
{ name: 'ALNADI', country: 'Jordan' },
{ name: 'SALEEM', country: 'Jordan' },
{ name: 'SABRA', country: 'Jordan' },
{ name: 'SA'ED', country: 'Jordan' },
{ name: 'TAHA', country: 'Jordan' },
{ name: 'NIZAR', country: 'Jordan' },
{ name: 'PO ALFAKHORI', country: 'Jordan' },
{ name: 'EHSAN', country: 'Jordan' },
{ name: 'AZAIZEH', country: 'Jordan' },
{ name: 'ALDAOUD', country: 'Jordan' },
{ name: 'BADAWI', country: 'Jordan' },
{ name: 'PO SEUNGGYU', country: 'South Korea' },
{ name: 'HANBEOM', country: 'South Korea' },
{ name: 'GIHYUK', country: 'South Korea' },
{ name: 'MINJAE', country: 'South Korea' },
{ name: 'TAEHYEON', country: 'South Korea' },
{ name: 'INBEOM', country: 'South Korea' },
{ name: 'HEUNGMIN', country: 'South Korea' },
{ name: 'SEUNGHO', country: 'South Korea' },
{ name: 'GUESUNG', country: 'South Korea' },
{ name: 'JAESUNG', country: 'South Korea' },
{ name: 'HEECHAN', country: 'South Korea' },
{ name: 'PO BUMKEUN', country: 'South Korea' },
{ name: 'TAESEOK', country: 'South Korea' },
{ name: 'WIJE', country: 'South Korea' },
{ name: 'MOONHWAN', country: 'South Korea' },
{ name: 'JINSEOB', country: 'South Korea' },
{ name: 'JUNHO', country: 'South Korea' },
{ name: 'HYEONGYU', country: 'South Korea' },
{ name: 'KANGIN', country: 'South Korea' },
{ name: 'HYUNJUN', country: 'South Korea' },
{ name: 'PO HYEONWOO', country: 'South Korea' },
{ name: 'YOUNGWOO', country: 'South Korea' },
{ name: 'JENS', country: 'South Korea' },
{ name: 'JINGYU', country: 'South Korea' },
{ name: 'JISUNG', country: 'South Korea' },
{ name: 'DONGGYEONG', country: 'South Korea' },
{ name: 'PO RANGEL', country: 'Mexico' },
{ name: 'SÁNCHEZ', country: 'Mexico' },
{ name: 'MONTES', country: 'Mexico' },
{ name: 'ÁLVAREZ', country: 'Mexico' },
{ name: 'VÁSQUEZ', country: 'Mexico' },
{ name: 'LIRA', country: 'Mexico' },
{ name: 'ROMO', country: 'Mexico' },
{ name: 'FIDALGO', country: 'Mexico' },
{ name: 'RAÚL', country: 'Mexico' },
{ name: 'VEGA', country: 'Mexico' },
{ name: 'GIMENEZ', country: 'Mexico' },
{ name: 'PO ACEVEDO', country: 'Mexico' },
{ name: 'PO OCHOA', country: 'Mexico' },
{ name: 'GONZÁLEZ', country: 'Mexico' },
{ name: 'REYES', country: 'Mexico' },
{ name: 'QUIÑONES', country: 'Mexico' },
{ name: 'ORBELÍN', country: 'Mexico' },
{ name: 'VARGAS', country: 'Mexico' },
{ name: 'MORA', country: 'Mexico' },
{ name: 'CHÁVEZ', country: 'Mexico' },
{ name: 'HUERTA', country: 'Mexico' },
{ name: 'MARTÍNEZ', country: 'Mexico' },
{ name: 'GALLARDO', country: 'Mexico' },
{ name: 'CHÁVEZ', country: 'Mexico' },
{ name: 'ALVARADO', country: 'Mexico' },
{ name: 'GUTIÉRREZ', country: 'Mexico' },
{ name: 'PO BONO', country: 'Morocco' },
{ name: 'HAKIMI', country: 'Morocco' },
{ name: 'MAZRAOUI', country: 'Morocco' },
{ name: 'AMRABAT', country: 'Morocco' },
{ name: 'AGUERD', country: 'Morocco' },
{ name: 'BOUADDI', country: 'Morocco' },
{ name: 'TALBI', country: 'Morocco' },
{ name: 'OUNAHI', country: 'Morocco' },
{ name: 'RAHIMI', country: 'Morocco' },
{ name: 'BRAHIM', country: 'Morocco' },
{ name: 'SAIBARI', country: 'Morocco' },
{ name: 'PO KAJOUI', country: 'Morocco' },
{ name: 'OUAHDI', country: 'Morocco' },
{ name: 'ISSA', country: 'Morocco' },
{ name: 'MOURABET', country: 'Morocco' },
{ name: 'YASSINE', country: 'Morocco' },
{ name: 'EZZALZOULI', country: 'Morocco' },
{ name: 'RIAD', country: 'Morocco' },
{ name: 'BELAMMARI', country: 'Morocco' },
{ name: 'KAABI', country: 'Morocco' },
{ name: 'AMAIMOUNI', country: 'Morocco' },
{ name: 'PO TAGNAOUTI', country: 'Morocco' },
{ name: 'KHANNOUSS', country: 'Morocco' },
{ name: 'AYNAOUI', country: 'Morocco' },
{ name: 'HALHAL', country: 'Morocco' },
{ name: 'SALAH-EDDINE', country: 'Morocco' },
{ name: 'PO VERBRUGGEN', country: 'Netherlands' },
{ name: 'TIMBER', country: 'Netherlands' },
{ name: 'ROON', country: 'Netherlands' },
{ name: 'VIRGIL', country: 'Netherlands' },
{ name: 'AKÉ', country: 'Netherlands' },
{ name: 'HECKE', country: 'Netherlands' },
{ name: 'KLUIVERT', country: 'Netherlands' },
{ name: 'GRAVENBERCH', country: 'Netherlands' },
{ name: 'WEGHORST', country: 'Netherlands' },
{ name: 'MEMPHIS', country: 'Netherlands' },
{ name: 'GAKPO', country: 'Netherlands' },
{ name: 'WIEFFER', country: 'Netherlands' },
{ name: 'PO ROEFS', country: 'Netherlands' },
{ name: 'REIJNDERS', country: 'Netherlands' },
{ name: 'VEN', country: 'Netherlands' },
{ name: 'TIL', country: 'Netherlands' },
{ name: 'LANG', country: 'Netherlands' },
{ name: 'MALEN', country: 'Netherlands' },
{ name: 'BROBBEY', country: 'Netherlands' },
{ name: 'KOOPMEINERS', country: 'Netherlands' },
{ name: 'JONG', country: 'Netherlands' },
{ name: 'DUMFRIES', country: 'Netherlands' },
{ name: 'PO FLEKKEN', country: 'Netherlands' },
{ name: 'SUMMERVILLE', country: 'Netherlands' },
{ name: 'HATO', country: 'Netherlands' },
{ name: 'TIMBER', country: 'Netherlands' },
{ name: 'PO CROCOMBE', country: 'New Zealand' },
{ name: 'PAYNE', country: 'New Zealand' },
{ name: 'VRIES', country: 'New Zealand' },
{ name: 'BINDON', country: 'New Zealand' },
{ name: 'BOXALL', country: 'New Zealand' },
{ name: 'BELL', country: 'New Zealand' },
{ name: 'GARBETT', country: 'New Zealand' },
{ name: 'STAMENIC', country: 'New Zealand' },
{ name: 'WOOD', country: 'New Zealand' },
{ name: 'SINGH', country: 'New Zealand' },
{ name: 'JUST', country: 'New Zealand' },
{ name: 'PO PAULSEN', country: 'New Zealand' },
{ name: 'CACACE', country: 'New Zealand' },
{ name: 'RUFER', country: 'New Zealand' },
{ name: 'PIJNAKER', country: 'New Zealand' },
{ name: 'SURMAN', country: 'New Zealand' },
{ name: 'BARBAROUSES', country: 'New Zealand' },
{ name: 'WAINE', country: 'New Zealand' },
{ name: 'OLD', country: 'New Zealand' },
{ name: 'MCCOWATT', country: 'New Zealand' },
{ name: 'RANDALL', country: 'New Zealand' },
{ name: 'PO WOUD', country: 'New Zealand' },
{ name: 'THOMAS', country: 'New Zealand' },
{ name: 'ELLIOT', country: 'New Zealand' },
{ name: 'BAYLISS', country: 'New Zealand' },
{ name: 'SMITH', country: 'New Zealand' },
{ name: 'PO NYLAND', country: 'Norway' },
{ name: 'THORSBY', country: 'Norway' },
{ name: 'AJER', country: 'Norway' },
{ name: 'ØSTIGÅRD', country: 'Norway' },
{ name: 'WOLFE', country: 'Norway' },
{ name: 'BERG', country: 'Norway' },
{ name: 'SØRLOTH', country: 'Norway' },
{ name: 'BERGE', country: 'Norway' },
{ name: 'HAALAND', country: 'Norway' },
{ name: 'ØDEGAARD', country: 'Norway' },
{ name: 'LARSEN', country: 'Norway' },
{ name: 'PO TANGVIK', country: 'Norway' },
{ name: 'PO SELVIK', country: 'Norway' },
{ name: 'AURSNES', country: 'Norway' },
{ name: 'BJØRKAN', country: 'Norway' },
{ name: 'HOLMGREN', country: 'Norway' },
{ name: 'HEGGEM', country: 'Norway' },
{ name: 'THORSTVEDT', country: 'Norway' },
{ name: 'AASGAARD', country: 'Norway' },
{ name: 'NUSA', country: 'Norway' },
{ name: 'SCHJELDERUP', country: 'Norway' },
{ name: 'BOBB', country: 'Norway' },
{ name: 'HAUGE', country: 'Norway' },
{ name: 'LANGÅS', country: 'Norway' },
{ name: 'FALCHENER', country: 'Norway' },
{ name: 'RYERSON', country: 'Norway' },
{ name: 'PO MEJÍA', country: 'Panama' },
{ name: 'BLACKMAN', country: 'Panama' },
{ name: 'CORDOBA', country: 'Panama' },
{ name: 'ESCOBAR', country: 'Panama' },
{ name: 'FARIÑA', country: 'Panama' },
{ name: 'MARTÍNEZ', country: 'Panama' },
{ name: 'RODRÍGUEZ', country: 'Panama' },
{ name: 'CARRASQUILLA', country: 'Panama' },
{ name: 'RODRÍGUEZ', country: 'Panama' },
{ name: 'ISMAEL', country: 'Panama' },
{ name: 'BÁRCENAS', country: 'Panama' },
{ name: 'PO SAMUDIO', country: 'Panama' },
{ name: 'RAMOS', country: 'Panama' },
{ name: 'HARVEY', country: 'Panama' },
{ name: 'DAVIS', country: 'Panama' },
{ name: 'ANDRADE', country: 'Panama' },
{ name: 'FAJARDO', country: 'Panama' },
{ name: 'WATERMAN', country: 'Panama' },
{ name: 'QUINTERO', country: 'Panama' },
{ name: 'GODOY', country: 'Panama' },
{ name: 'YANIS', country: 'Panama' },
{ name: 'PO MOSQUERA', country: 'Panama' },
{ name: 'MURILLO', country: 'Panama' },
{ name: 'LONDOÑO', country: 'Panama' },
{ name: 'MILLER', country: 'Panama' },
{ name: 'GUTIÉRREZ', country: 'Panama' },
{ name: 'PO FERNANDEZ', country: 'Paraguay' },
{ name: 'VELAZQUEZ', country: 'Paraguay' },
{ name: 'ALDERETE', country: 'Paraguay' },
{ name: 'CACERES', country: 'Paraguay' },
{ name: 'BALBUENA', country: 'Paraguay' },
{ name: 'ALONSO', country: 'Paraguay' },
{ name: 'SOSA', country: 'Paraguay' },
{ name: 'GOMEZ', country: 'Paraguay' },
{ name: 'SANABRIA', country: 'Paraguay' },
{ name: 'ALMIRON', country: 'Paraguay' },
{ name: 'MAURICIO', country: 'Paraguay' },
{ name: 'PO GILL', country: 'Paraguay' },
{ name: 'CANALE', country: 'Paraguay' },
{ name: 'CUBAS', country: 'Paraguay' },
{ name: 'GOMEZ', country: 'Paraguay' },
{ name: 'BOBADILLA', country: 'Paraguay' },
{ name: 'GAMARRA', country: 'Paraguay' },
{ name: 'ARCE', country: 'Paraguay' },
{ name: 'ENCISO', country: 'Paraguay' },
{ name: 'OJEDA', country: 'Paraguay' },
{ name: 'AVALOS', country: 'Paraguay' },
{ name: 'PO OLVEIRA', country: 'Paraguay' },
{ name: 'GALARZA', country: 'Paraguay' },
{ name: 'CABALLERO', country: 'Paraguay' },
{ name: 'PITTA', country: 'Paraguay' },
{ name: 'MAIDANA', country: 'Paraguay' },
{ name: 'PO COSTA', country: 'Portugal' },
{ name: 'SEMEDO', country: 'Portugal' },
{ name: 'DIAS', country: 'Portugal' },
{ name: 'A.', country: 'Portugal' },
{ name: 'DALOT', country: 'Portugal' },
{ name: 'N.', country: 'Portugal' },
{ name: 'RONALDO', country: 'Portugal' },
{ name: 'FERNANDES', country: 'Portugal' },
{ name: 'RAMOS', country: 'Portugal' },
{ name: 'BERNARDO', country: 'Portugal' },
{ name: 'FÉLIX', country: 'Portugal' },
{ name: 'PO SÁ', country: 'Portugal' },
{ name: 'VEIGA', country: 'Portugal' },
{ name: 'INÁCIO', country: 'Portugal' },
{ name: 'NEVES', country: 'Portugal' },
{ name: 'TRINCÃO', country: 'Portugal' },
{ name: 'LEÃO', country: 'Portugal' },
{ name: 'NETO', country: 'Portugal' },
{ name: 'GUEDES', country: 'Portugal' },
{ name: 'CANCELO', country: 'Portugal' },
{ name: 'NEVES', country: 'Portugal' },
{ name: 'PO SILVA', country: 'Portugal' },
{ name: 'VITINHA', country: 'Portugal' },
{ name: 'SAMÚ', country: 'Portugal' },
{ name: 'MENDES', country: 'Portugal' },
{ name: 'CONCEIÇÃO', country: 'Portugal' },
{ name: 'PO ABUNADA', country: 'Qatar' },
{ name: 'PEDRO', country: 'Qatar' },
{ name: 'L.MENDES', country: 'Qatar' },
{ name: 'GUEYE', country: 'Qatar' },
{ name: 'JASSEM', country: 'Qatar' },
{ name: 'AZIZ', country: 'Qatar' },
{ name: 'ALAAELDIN', country: 'Qatar' },
{ name: 'JR.', country: 'Qatar' },
{ name: 'MUNTARI', country: 'Qatar' },
{ name: 'ALHAYDOS', country: 'Qatar' },
{ name: 'AFIF', country: 'Qatar' },
{ name: 'KARIM', country: 'Qatar' },
{ name: 'AYOUB', country: 'Qatar' },
{ name: 'HOMAM', country: 'Qatar' },
{ name: 'YUSUF', country: 'Qatar' },
{ name: 'KHOUKHI', country: 'Qatar' },
{ name: 'ALGANEHI', country: 'Qatar' },
{ name: 'SULTAN', country: 'Qatar' },
{ name: 'ALMOEZ', country: 'Qatar' },
{ name: 'FATHY', country: 'Qatar' },
{ name: 'PO SALAH', country: 'Qatar' },
{ name: 'PO BARSHAM', country: 'Qatar' },
{ name: 'MADIBO', country: 'Qatar' },
{ name: 'TAHSIN', country: 'Qatar' },
{ name: 'ALHASHMI', country: 'Qatar' },
{ name: 'MANAI', country: 'Qatar' },
{ name: 'PO ALAQIDI', country: 'Saudi Arabia' },
{ name: 'MAJRASHI', country: 'Saudi Arabia' },
{ name: 'LAJAMI', country: 'Saudi Arabia' },
{ name: 'ALAMRI', country: 'Saudi Arabia' },
{ name: 'ALTAMBAKTI', country: 'Saudi Arabia' },
{ name: 'NASSER', country: 'Saudi Arabia' },
{ name: 'MUSAB', country: 'Saudi Arabia' },
{ name: 'AIMAN', country: 'Saudi Arabia' },
{ name: 'FERAS', country: 'Saudi Arabia' },
{ name: 'SALEM', country: 'Saudi Arabia' },
{ name: 'ALSHEHRI', country: 'Saudi Arabia' },
{ name: 'SAUD', country: 'Saudi Arabia' },
{ name: 'NAWAF', country: 'Saudi Arabia' },
{ name: 'KADISH', country: 'Saudi Arabia' },
{ name: 'ALKHAIBARI', country: 'Saudi Arabia' },
{ name: 'ZIYAD', country: 'Saudi Arabia' },
{ name: 'KHALID', country: 'Saudi Arabia' },
{ name: 'ALHAJJI', country: 'Saudi Arabia' },
{ name: 'ALHAMDDAN', country: 'Saudi Arabia' },
{ name: 'MANDASH', country: 'Saudi Arabia' },
{ name: 'PO ALOWAIS', country: 'Saudi Arabia' },
{ name: 'PO ALKASSAR', country: 'Saudi Arabia' },
{ name: 'KANNO', country: 'Saudi Arabia' },
{ name: 'MOTEB', country: 'Saudi Arabia' },
{ name: 'JEHAD', country: 'Saudi Arabia' },
{ name: 'MOHAMMED', country: 'Saudi Arabia' },
{ name: 'PO GUNN', country: 'Scotland' },
{ name: 'HICKEY', country: 'Scotland' },
{ name: 'ROBERTSON', country: 'Scotland' },
{ name: 'MCTOMINAY', country: 'Scotland' },
{ name: 'HANLEY', country: 'Scotland' },
{ name: 'TIERNEY', country: 'Scotland' },
{ name: 'MCGINN', country: 'Scotland' },
{ name: 'FLETCHER', country: 'Scotland' },
{ name: 'DYKES', country: 'Scotland' },
{ name: 'ADAMS', country: 'Scotland' },
{ name: 'CHRISTIE', country: 'Scotland' },
{ name: 'PO KELLY', country: 'Scotland' },
{ name: 'HENDRY', country: 'Scotland' },
{ name: 'STEWART', country: 'Scotland' },
{ name: 'SOUTTAR', country: 'Scotland' },
{ name: 'HYAM', country: 'Scotland' },
{ name: 'DOAK', country: 'Scotland' },
{ name: 'HIRST', country: 'Scotland' },
{ name: 'FERGUSON', country: 'Scotland' },
{ name: 'SHANKLAND', country: 'Scotland' },
{ name: 'PO GORDON', country: 'Scotland' },
{ name: 'PATTERSON', country: 'Scotland' },
{ name: 'MCLEAN', country: 'Scotland' },
{ name: 'RALSTON', country: 'Scotland' },
{ name: 'CURTIS', country: 'Scotland' },
{ name: 'MCKENNA', country: 'Scotland' },
{ name: 'PO DIOUF', country: 'Senegal' },
{ name: 'SARR', country: 'Senegal' },
{ name: 'KOULIBALY', country: 'Senegal' },
{ name: 'SECK', country: 'Senegal' },
{ name: 'GANA', country: 'Senegal' },
{ name: 'CISS', country: 'Senegal' },
{ name: 'DIAO', country: 'Senegal' },
{ name: 'LAMINE', country: 'Senegal' },
{ name: 'DIENG', country: 'Senegal' },
{ name: 'MANÉ', country: 'Senegal' },
{ name: 'JACKSON', country: 'Senegal' },
{ name: 'CHERIF', country: 'Senegal' },
{ name: 'NDIAYE', country: 'Senegal' },
{ name: 'JAKOBS', country: 'Senegal' },
{ name: 'KRÉPIN', country: 'Senegal' },
{ name: 'PO MENDY', country: 'Senegal' },
{ name: 'SARR', country: 'Senegal' },
{ name: 'SARR', country: 'Senegal' },
{ name: 'NIAKHATE', country: 'Senegal' },
{ name: 'MBAYE', country: 'Senegal' },
{ name: 'DIARRA', country: 'Senegal' },
{ name: 'BARA', country: 'Senegal' },
{ name: 'PO DIAW', country: 'Senegal' },
{ name: 'MENDY', country: 'Senegal' },
{ name: 'DIOUF', country: 'Senegal' },
{ name: 'GUEYE', country: 'Senegal' },
{ name: 'PO WILLIAMS', country: 'South Africa' },
{ name: 'MATULUDI', country: 'South Africa' },
{ name: 'NDAMANE', country: 'South Africa' },
{ name: 'MOKOENA', country: 'South Africa' },
{ name: 'MBATHA', country: 'South Africa' },
{ name: 'MODIBA', country: 'South Africa' },
{ name: 'APPOLLIS', country: 'South Africa' },
{ name: 'MOREMI', country: 'South Africa' },
{ name: 'FOSTER', country: 'South Africa' },
{ name: 'MOFOKENG', country: 'South Africa' },
{ name: 'ZWANE', country: 'South Africa' },
{ name: 'MASEKO', country: 'South Africa' },
{ name: 'SITHOLE', country: 'South Africa' },
{ name: 'MBOKAZI', country: 'South Africa' },
{ name: 'RAYNERS', country: 'South Africa' },
{ name: 'PO CHAINE', country: 'South Africa' },
{ name: 'MAKGPA', country: 'South Africa' },
{ name: 'KABINI', country: 'South Africa' },
{ name: 'SIBISI', country: 'South Africa' },
{ name: 'MUDAU', country: 'South Africa' },
{ name: 'OKON', country: 'South Africa' },
{ name: 'PO GOSS', country: 'South Africa' },
{ name: 'ADAMS', country: 'South Africa' },
{ name: 'MAKHANYA', country: 'South Africa' },
{ name: 'SEBELEBELE', country: 'South Africa' },
{ name: 'CROSS', country: 'South Africa' },
{ name: 'PO RAYA', country: 'Spain' },
{ name: 'PUBILL', country: 'Spain' },
{ name: 'GRIMALDO', country: 'Spain' },
{ name: 'ERIC', country: 'Spain' },
{ name: 'LLORENTE', country: 'Spain' },
{ name: 'MERINO', country: 'Spain' },
{ name: 'FERRAN', country: 'Spain' },
{ name: 'FABIÁN', country: 'Spain' },
{ name: 'GAVI', country: 'Spain' },
{ name: 'OLMO', country: 'Spain' },
{ name: 'YEREMY', country: 'Spain' },
{ name: 'PORRO', country: 'Spain' },
{ name: 'PO GARCIA', country: 'Spain' },
{ name: 'LAPORTE', country: 'Spain' },
{ name: 'B.', country: 'Spain' },
{ name: 'RODRIGO', country: 'Spain' },
{ name: 'JR', country: 'Spain' },
{ name: 'ZUBIMENDI', country: 'Spain' },
{ name: 'YAMAL', country: 'Spain' },
{ name: 'PEDRI', country: 'Spain' },
{ name: 'OYARZABAL', country: 'Spain' },
{ name: 'CUBARSÍ', country: 'Spain' },
{ name: 'PO SIMÓN', country: 'Spain' },
{ name: 'CUCURELLA', country: 'Spain' },
{ name: 'M.V.', country: 'Spain' },
{ name: 'IGLESIAS', country: 'Spain' },
{ name: 'PO ZETTERSTRÖM', country: 'Sweden' },
{ name: 'LAGERBIELKE', country: 'Sweden' },
{ name: 'LINDELÖF', country: 'Sweden' },
{ name: 'HIEN', country: 'Sweden' },
{ name: 'GUDMUNDSSON', country: 'Sweden' },
{ name: 'JOHANSSON', country: 'Sweden' },
{ name: 'BERGVALL', country: 'Sweden' },
{ name: 'SVENSSON', country: 'Sweden' },
{ name: 'ISAK', country: 'Sweden' },
{ name: 'NYGREN', country: 'Sweden' },
{ name: 'ELANGA', country: 'Sweden' },
{ name: 'PO JOHANSSON', country: 'Sweden' },
{ name: 'SEMA', country: 'Sweden' },
{ name: 'EKDAL', country: 'Sweden' },
{ name: 'STARFELT', country: 'Sweden' },
{ name: 'KARLSTRÖM', country: 'Sweden' },
{ name: 'GYÖKERES', country: 'Sweden' },
{ name: 'AYARI', country: 'Sweden' },
{ name: 'SVANBERG', country: 'Sweden' },
{ name: 'SMITH', country: 'Sweden' },
{ name: 'BERNHARDSSON', country: 'Sweden' },
{ name: 'ZENELI', country: 'Sweden' },
{ name: 'PO NORDFELDT', country: 'Sweden' },
{ name: 'STROUD', country: 'Sweden' },
{ name: 'NILSSON', country: 'Sweden' },
{ name: 'ALI', country: 'Sweden' },
{ name: 'PO KOBEL', country: 'Switzerland' },
{ name: 'MUHEIM', country: 'Switzerland' },
{ name: 'WIDMER', country: 'Switzerland' },
{ name: 'ELVEDI', country: 'Switzerland' },
{ name: 'AKANJI', country: 'Switzerland' },
{ name: 'ZAKARIA', country: 'Switzerland' },
{ name: 'EMBOLO', country: 'Switzerland' },
{ name: 'FREULER', country: 'Switzerland' },
{ name: 'MANZAMBI', country: 'Switzerland' },
{ name: 'XHAKA', country: 'Switzerland' },
{ name: 'NODYE', country: 'Switzerland' },
{ name: 'PO MVOGO', country: 'Switzerland' },
{ name: 'RODRIGUEZ', country: 'Switzerland' },
{ name: 'JASHARI', country: 'Switzerland' },
{ name: 'SOW', country: 'Switzerland' },
{ name: 'FASSNACHT', country: 'Switzerland' },
{ name: 'VARGAS', country: 'Switzerland' },
{ name: 'CÖMERT', country: 'Switzerland' },
{ name: 'OKAFOR', country: 'Switzerland' },
{ name: 'AEBISCHER', country: 'Switzerland' },
{ name: 'PO KELLER', country: 'Switzerland' },
{ name: 'RIEDER', country: 'Switzerland' },
{ name: 'AMDOUNI', country: 'Switzerland' },
{ name: 'AMENDA', country: 'Switzerland' },
{ name: 'JAQUEZ', country: 'Switzerland' },
{ name: 'ITTEN', country: 'Switzerland' },
{ name: 'PO CHAMAKH', country: 'Tunisia' },
{ name: 'ABDI', country: 'Tunisia' },
{ name: 'TALBI', country: 'Tunisia' },
{ name: 'REKIK', country: 'Tunisia' },
{ name: 'AROUS', country: 'Tunisia' },
{ name: 'BRONN', country: 'Tunisia' },
{ name: 'ACHOURI', country: 'Tunisia' },
{ name: 'SAAD', country: 'Tunisia' },
{ name: 'MASTOURI', country: 'Tunisia' },
{ name: 'MEJBRI', country: 'Tunisia' },
{ name: 'GHARBI', country: 'Tunisia' },
{ name: 'OUANES', country: 'Tunisia' },
{ name: 'KHEDIRA', country: 'Tunisia' },
{ name: 'AYARI', country: 'Tunisia' },
{ name: 'MAHMOUD', country: 'Tunisia' },
{ name: 'PO DAHMEN', country: 'Tunisia' },
{ name: 'SKHIRI', country: 'Tunisia' },
{ name: 'ELLOUMI', country: 'Tunisia' },
{ name: 'CHAOUAT', country: 'Tunisia' },
{ name: 'VALERY', country: 'Tunisia' },
{ name: 'HMIDA', country: 'Tunisia' },
{ name: 'PO HSAN', country: 'Tunisia' },
{ name: 'NEFFATI', country: 'Tunisia' },
{ name: 'CHIKHAOUI', country: 'Tunisia' },
{ name: 'SLIMANE', country: 'Tunisia' },
{ name: 'TOUNEKTI', country: 'Tunisia' },
{ name: 'PO MERT', country: 'Turkey' },
{ name: 'ÇELİK', country: 'Turkey' },
{ name: 'DEMİRAL', country: 'Turkey' },
{ name: 'ÇAĞLAR', country: 'Turkey' },
{ name: 'ÖZCAN', country: 'Turkey' },
{ name: 'KÖKÇÜ', country: 'Turkey' },
{ name: 'AKTÜRKOĞLU', country: 'Turkey' },
{ name: 'GÜLER', country: 'Turkey' },
{ name: 'GÜL', country: 'Turkey' },
{ name: 'ÇALHANOĞLU', country: 'Turkey' },
{ name: 'YILDIZ', country: 'Turkey' },
{ name: 'PO ALTAY', country: 'Turkey' },
{ name: 'ELMALI', country: 'Turkey' },
{ name: 'ABDÜLKERİM', country: 'Turkey' },
{ name: 'KABAK', country: 'Turkey' },
{ name: 'İSMAİL', country: 'Turkey' },
{ name: 'KAHVECİ', country: 'Turkey' },
{ name: 'MÜLDÜR', country: 'Turkey' },
{ name: 'YUNUS', country: 'Turkey' },
{ name: 'KADIOĞLU', country: 'Turkey' },
{ name: 'BARIŞ', country: 'Turkey' },
{ name: 'KAAN', country: 'Turkey' },
{ name: 'PO UĞURCAN', country: 'Turkey' },
{ name: 'OĞUZ', country: 'Turkey' },
{ name: 'AKAYDIN', country: 'Turkey' },
{ name: 'UZUN', country: 'Turkey' },
{ name: 'PO ROCHET', country: 'Uruguay' },
{ name: 'GIMÉNEZ', country: 'Uruguay' },
{ name: 'CACERES', country: 'Uruguay' },
{ name: 'ARAUJO', country: 'Uruguay' },
{ name: 'UGARTE', country: 'Uruguay' },
{ name: 'BENTANCUR', country: 'Uruguay' },
{ name: 'CRUZ', country: 'Uruguay' },
{ name: 'VALVERDE', country: 'Uruguay' },
{ name: 'NUÑEZ', country: 'Uruguay' },
{ name: 'ARRASCAETA', country: 'Uruguay' },
{ name: 'PELLISTRI', country: 'Uruguay' },
{ name: 'PO MELE', country: 'Uruguay' },
{ name: 'VARELA', country: 'Uruguay' },
{ name: 'CANOBBIO', country: 'Uruguay' },
{ name: 'MARTINEZ', country: 'Uruguay' },
{ name: 'OLIVERA', country: 'Uruguay' },
{ name: 'VIÑA', country: 'Uruguay' },
{ name: 'RODRIGUEZ', country: 'Uruguay' },
{ name: 'AGUIRRE', country: 'Uruguay' },
{ name: 'ARAUJO', country: 'Uruguay' },
{ name: 'VIÑAS', country: 'Uruguay' },
{ name: 'PIQUEREZ', country: 'Uruguay' },
{ name: 'PO MUSLERA', country: 'Uruguay' },
{ name: 'BUENO', country: 'Uruguay' },
{ name: 'SANABRIA', country: 'Uruguay' },
{ name: 'ZALAZAR', country: 'Uruguay' },
{ name: 'PO TURNER', country: 'USA' },
{ name: 'DEST', country: 'USA' },
{ name: 'RICHARDS', country: 'USA' },
{ name: 'ADAMS', country: 'USA' },
{ name: 'ROBINSON', country: 'USA' },
{ name: 'TRUSTY', country: 'USA' },
{ name: 'REYNA', country: 'USA' },
{ name: 'MCKENNIE', country: 'USA' },
{ name: 'PEPI', country: 'USA' },
{ name: 'PULISIC', country: 'USA' },
{ name: 'AARONSON', country: 'USA' },
{ name: 'ROBINSON', country: 'USA' },
{ name: 'REAM', country: 'USA' },
{ name: 'BERHALTER', country: 'USA' },
{ name: 'ROLDAN', country: 'USA' },
{ name: 'FREEMAN', country: 'USA' },
{ name: 'TILLMAN', country: 'USA' },
{ name: 'ARFSTEN', country: 'USA' },
{ name: 'WRIGHT', country: 'USA' },
{ name: 'BALOGUN', country: 'USA' },
{ name: 'WEAH', country: 'USA' },
{ name: 'MCKENZIE', country: 'USA' },
{ name: 'SCALLY', country: 'USA' },
{ name: 'PO FREESE', country: 'USA' },
{ name: 'PO BRADY', country: 'USA' },
{ name: 'ZENDEJAS', country: 'USA' },
{ name: 'PO YUSUPOV', country: 'Uzbekistan' },
{ name: 'KHUSANOV', country: 'Uzbekistan' },
{ name: 'ALIJONOV', country: 'Uzbekistan' },
{ name: 'SAYFIEV', country: 'Uzbekistan' },
{ name: 'ASHURMATOV', country: 'Uzbekistan' },
{ name: 'MOZGOVOY', country: 'Uzbekistan' },
{ name: 'SHUKUROV', country: 'Uzbekistan' },
{ name: 'ISKANDEROV', country: 'Uzbekistan' },
{ name: 'XAMROBEKOV', country: 'Uzbekistan' },
{ name: 'MASHARIPOV', country: 'Uzbekistan' },
{ name: 'URUNOV', country: 'Uzbekistan' },
{ name: 'PO NEMATOV', country: 'Uzbekistan' },
{ name: 'NASRULLAEV', country: 'Uzbekistan' },
{ name: 'SHOMURODOV', country: 'Uzbekistan' },
{ name: 'ESHMURODOV', country: 'Uzbekistan' },
{ name: 'PO ERGASHEV', country: 'Uzbekistan' },
{ name: 'KHAMDAMOV', country: 'Uzbekistan' },
{ name: 'ABDULLAEV', country: 'Uzbekistan' },
{ name: 'GANIEV', country: 'Uzbekistan' },
{ name: 'AMONOV', country: 'Uzbekistan' },
{ name: 'SERGEEV', country: 'Uzbekistan' },
{ name: 'FAYZULLAEV', country: 'Uzbekistan' },
{ name: 'ESANOV', country: 'Uzbekistan' },
{ name: 'KARIMOV', country: 'Uzbekistan' },
{ name: 'ULMASALIYEV', country: 'Uzbekistan' },
{ name: 'UROZOV', country: 'Uzbekistan' },

];

function getFlagClass(team) {
  if (!team) return '';
  const code = FLAG_CODE[team];
  return code ? 'fi fi-'+code : '';
}

let TEAMS_BY_GROUP = {};
let GROUP_NAMES = [];
let GROUP_MATCHES_BY_GROUP = {};
let BRACKET_R32 = [];
let KO_TREE = null;
let LOADED = false;
let tpAllocation = {};

const FIFA_RANKING_TIEBREAK = {
  'Argentina': 1,'France': 2,'Spain': 3,'England': 4,'Brazil': 5,
  'Portugal': 6,'Netherlands': 7,'Belgium': 8,'Germany': 9,'Croatia': 10,
  'Morocco': 11,'Colombia': 12,'Uruguay': 13,'Mexico': 14,'USA': 15,
  'Senegal': 16,'Japan': 17,'Switzerland': 18,'Iran': 19,'South Korea': 20,
  'Austria': 21,'Australia': 22,'Qatar': 23,'Norway': 24,'Ecuador': 25,
  'Turkey': 26,'Canada': 27,'Sweden': 28,'Panama': 29,'Egypt': 30,
  'Algeria': 31,'Tunisia': 32,'Paraguay': 33,'Ivory Coast': 34,'Saudi Arabia': 35,
  'Scotland': 36,'Bosnia & Herzegovina': 37,'Czech Republic': 38,'Iraq': 39,
  'Uzbekistan': 40,'Jordan': 41,'DR Congo': 42,'South Africa': 43,
  'Cape Verde': 44,'New Zealand': 45,'Haiti': 46,'Curaçao': 47
};

function getTeamConductScore(team) {
  return state.teamConduct?.[team] ?? 0;
}

function getTeamFifaRank(team) {
  return FIFA_RANKING_TIEBREAK[team] ?? 999;
}

function compareBestThirds(a, b) {
  return (b.row.pts - a.row.pts) ||
    (b.row.gd - a.row.gd) ||
    (b.row.gf - a.row.gf) ||
    (getTeamConductScore(b.row.team) - getTeamConductScore(a.row.team)) ||
    (getTeamFifaRank(a.row.team) - getTeamFifaRank(b.row.team)) ||
    a.group.localeCompare(b.group);
}

function getAutoThirdPlaceTeams() {
  return GROUP_NAMES
    .filter(group => isGroupComplete(group))
    .map(group => ({ group, row: calculateGroupStandings(group)[2] }))
    .filter(item => item.row)
    .sort(compareBestThirds)
    .slice(0, 8);
}

function syncAutoThirdPlace() {
  state.thirdPlace = getAutoThirdPlaceTeams().map(item => item.row.team);
}



function buildTPAllocation() {
  tpAllocation = {};
  syncAutoThirdPlace();

  const qualifiedThirds = getAutoThirdPlaceTeams();
  if (qualifiedThirds.length !== 8) return;

  const byGroup = {};
  qualifiedThirds.forEach(item => {
    byGroup[item.group] = item.row.team;
  });

  const groups = Object.keys(byGroup).sort();
  const key = groups.join("");
  const order = TP_TABLE[key];

  if (!order) {
    console.warn("No TP_TABLE mapping found for:", key, groups);
    return;
  }

  TP_COLUMNS.forEach((matchNum, index) => {
    const group = String(order[index]).replace(/^3/, "");
    tpAllocation[matchNum] = byGroup[group] || null;
  });
}

let state = {
  groups: {},
  groupMatches: {},
  thirdPlace: [],
  matchTeams: {},
  knockoutResults: {},
  awards: { goldenBoot: ['','',''], goldenBall: ['','',''], goldenGlove: ['','',''] }
};

const LOCAL_STORAGE_VERSION = '5';
const LOCAL_STORAGE_VERSION_KEY = 'wc2026_version';
const LOCAL_STORAGE_PICKS_KEY = 'wc2026_picks';
let localSaveTimer = null;

function normalizeLoadedState() {
  ensureAllGroupMatches();
  updateAllGroupOrdersFromMatches();
  buildTPAllocation();
  computeMatchTeams();
}

function saveLocalPredictionNow() {
  try {
    const payload = buildPayload();
    payload._localDraftSavedAt = new Date().toISOString();
    localStorage.setItem(LOCAL_STORAGE_PICKS_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn('Could not save local prediction draft:', e);
  }
}

function saveLocalPredictionSoon() {
  clearTimeout(localSaveTimer);
  localSaveTimer = setTimeout(saveLocalPredictionNow, 250);
}

function clearLocalPrediction() {
  clearTimeout(localSaveTimer);
  try { localStorage.removeItem(LOCAL_STORAGE_PICKS_KEY); } catch (e) {}
}

function restoreLocalPrediction() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_PICKS_KEY);
    if (!saved) return false;
    const data = JSON.parse(saved);
    if (data.groupMatches) {
      state.groupMatches = data.groupMatches;
      ensureAllGroupMatches();
      updateAllGroupOrdersFromMatches();
    }
    if (data.groups) {
      GROUP_NAMES.forEach(g => {
        if (Array.isArray(data.groups[g]) && data.groups[g].length) {
          state.groups[g] = data.groups[g].slice();
        }
      });
    }
    if (data.knockout?.matches) {
      Object.values(data.knockout.matches).flat().forEach(match => {
        if (match?.match && match?.winner) {
          state.knockoutResults[match.match] = match.winner;
        }
      });
    } else if (data.knockout) {
      ['round32','round16','quarterfinals','semifinals'].forEach(round => {
        const treeArr = KO_TREE[round] || [];
        (data.knockout[round] || []).forEach((team, index) => {
          if (treeArr[index] && team) state.knockoutResults[treeArr[index].num] = team;
        });
      });
      if (data.knockout.final && KO_TREE.final?.[0]) state.knockoutResults[KO_TREE.final[0].num] = data.knockout.final;
      if (data.knockout.thirdPlace && KO_TREE.thirdPlace?.[0]) state.knockoutResults[KO_TREE.thirdPlace[0].num] = data.knockout.thirdPlace;
    }
    if (data.awards) {
      state.awards = {
        goldenBoot: data.awards.goldenBoot || ['', '', ''],
        goldenBall: data.awards.goldenBall || ['', '', ''],
        goldenGlove: data.awards.goldenGlove || ['', '', '']
      };
    }
    normalizeLoadedState();
    return true;
  } catch (e) {
    console.warn('Could not restore local prediction draft:', e);
    clearLocalPrediction();
    return false;
  }
}

function closeAwardDropdowns() {}

async function loadData() {
  try {
    const resp = await fetch(DATA_SRC+'/worldcup.json');
    const data = await resp.json();
    TEAMS_BY_GROUP = {};
    const seen = {}, done = {};
    data.matches.forEach(m => {
      const g = m.group;
      if (!g || !g.startsWith('Group ')) return;
      const letter = g.replace('Group ','');
      if (done[letter]) return;
      if (!TEAMS_BY_GROUP[letter]) TEAMS_BY_GROUP[letter] = [];
      if (!seen[letter]) seen[letter] = {};
      [m.team1, m.team2].forEach(t => {
        if (t && !seen[letter][t]) {
          seen[letter][t] = true;
          TEAMS_BY_GROUP[letter].push({ name: t, flag: '', fifa: '' });
        }
      });
      if (TEAMS_BY_GROUP[letter].length >= 4) done[letter] = true;
    });
    GROUP_NAMES = Object.keys(TEAMS_BY_GROUP).sort();
    GROUP_MATCHES_BY_GROUP = {};
    data.matches
      .filter(m => m.group && m.group.startsWith('Group '))
      .forEach((m, index) => {
        const letter = m.group.replace('Group ', '');
        if (!GROUP_MATCHES_BY_GROUP[letter]) GROUP_MATCHES_BY_GROUP[letter] = [];
        GROUP_MATCHES_BY_GROUP[letter].push({
          team1: m.team1, team2: m.team2, date: m.date || '',
          time: m.time || '', round: m.round || '', ground: m.ground || '',
          originalIndex: index, key: groupMatchKey(m.team1, m.team2)
        });
      });
    Object.keys(GROUP_MATCHES_BY_GROUP).forEach(group => {
      GROUP_MATCHES_BY_GROUP[group].sort((a, b) => {
        const dateCmp = String(a.date).localeCompare(String(b.date));
        if (dateCmp) return dateCmp;
        const timeCmp = String(a.time).localeCompare(String(b.time));
        if (timeCmp) return timeCmp;
        return a.originalIndex - b.originalIndex;
      });
    });
    GROUP_NAMES.forEach(g => {
      state.groups[g] = TEAMS_BY_GROUP[g].map(t => t.name);
    });
    ensureAllGroupMatches();
    KO_TREE = {
      round32: [
        {num:73,slot1:{type:'runner_up',group:'A'},slot2:{type:'runner_up',group:'B'}},
        {num:74,slot1:{type:'winner',group:'E'},slot2:{type:'third_place',groups:['A','B','C','D','F']}},
        {num:75,slot1:{type:'winner',group:'F'},slot2:{type:'runner_up',group:'C'}},
        {num:76,slot1:{type:'winner',group:'C'},slot2:{type:'runner_up',group:'F'}},
        {num:77,slot1:{type:'winner',group:'I'},slot2:{type:'third_place',groups:['C','D','F','G','H']}},
        {num:78,slot1:{type:'runner_up',group:'E'},slot2:{type:'runner_up',group:'I'}},
        {num:79,slot1:{type:'winner',group:'A'},slot2:{type:'third_place',groups:['C','E','F','H','I']}},
        {num:80,slot1:{type:'winner',group:'L'},slot2:{type:'third_place',groups:['E','H','I','J','K']}},
        {num:81,slot1:{type:'winner',group:'D'},slot2:{type:'third_place',groups:['B','E','F','I','J']}},
        {num:82,slot1:{type:'winner',group:'G'},slot2:{type:'third_place',groups:['A','E','H','I','J']}},
        {num:83,slot1:{type:'runner_up',group:'K'},slot2:{type:'runner_up',group:'L'}},
        {num:84,slot1:{type:'winner',group:'H'},slot2:{type:'runner_up',group:'J'}},
        {num:85,slot1:{type:'winner',group:'B'},slot2:{type:'third_place',groups:['E','F','G','I','J']}},
        {num:86,slot1:{type:'winner',group:'J'},slot2:{type:'runner_up',group:'H'}},
        {num:87,slot1:{type:'winner',group:'K'},slot2:{type:'third_place',groups:['D','E','I','J','L']}},
        {num:88,slot1:{type:'runner_up',group:'D'},slot2:{type:'runner_up',group:'G'}}
      ],
      round16: [
        {num:89,slot1:{type:'winner_of',matchNum:73},slot2:{type:'winner_of',matchNum:75}},
        {num:90,slot1:{type:'winner_of',matchNum:74},slot2:{type:'winner_of',matchNum:77}},
        {num:91,slot1:{type:'winner_of',matchNum:76},slot2:{type:'winner_of',matchNum:78}},
        {num:92,slot1:{type:'winner_of',matchNum:79},slot2:{type:'winner_of',matchNum:80}},
        {num:93,slot1:{type:'winner_of',matchNum:83},slot2:{type:'winner_of',matchNum:84}},
        {num:94,slot1:{type:'winner_of',matchNum:81},slot2:{type:'winner_of',matchNum:82}},
        {num:95,slot1:{type:'winner_of',matchNum:86},slot2:{type:'winner_of',matchNum:88}},
        {num:96,slot1:{type:'winner_of',matchNum:85},slot2:{type:'winner_of',matchNum:87}}
      ],
      quarterfinals: [
        {num:97,slot1:{type:'winner_of',matchNum:89},slot2:{type:'winner_of',matchNum:90}},
        {num:98,slot1:{type:'winner_of',matchNum:93},slot2:{type:'winner_of',matchNum:94}},
        {num:99,slot1:{type:'winner_of',matchNum:91},slot2:{type:'winner_of',matchNum:92}},
        {num:100,slot1:{type:'winner_of',matchNum:95},slot2:{type:'winner_of',matchNum:96}}
      ],
      semifinals: [
        {num:101,slot1:{type:'winner_of',matchNum:97},slot2:{type:'winner_of',matchNum:98}},
        {num:102,slot1:{type:'winner_of',matchNum:99},slot2:{type:'winner_of',matchNum:100}}
      ],
      thirdPlace: [
        {num:103,slot1:{type:'loser_of',matchNum:101},slot2:{type:'loser_of',matchNum:102}}
      ],
      final: [
        {num:104,slot1:{type:'winner_of',matchNum:101},slot2:{type:'winner_of',matchNum:102}}
      ]
    };
    BRACKET_R32 = KO_TREE.round32;
    LOADED = true;
    return true;
  } catch(e) {
    console.error('Failed to load tournament data:', e);
    showToast('Failed to load tournament data. Check your connection.', true);
    return false;
  }
}

function findTeamGroup(teamName) {
  for (const g of GROUP_NAMES) {
    if (state.groups[g] && state.groups[g].includes(teamName)) return g;
  }
  return TEAMS_BY_GROUP ? Object.keys(TEAMS_BY_GROUP).find(g => TEAMS_BY_GROUP[g].some(t=>t.name===teamName)) : null;
}

function getTeamFlagClass(teamName) { return getFlagClass(teamName); }

function groupMatchKey(team1, team2) {
  return [team1, team2].sort().join('__');
}

function getGroupMatchList(group) {
  if (GROUP_MATCHES_BY_GROUP[group] && GROUP_MATCHES_BY_GROUP[group].length) {
    return GROUP_MATCHES_BY_GROUP[group];
  }
  const teams = (TEAMS_BY_GROUP[group] || []).map(t => t.name);
  const matches = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matches.push({ team1: teams[i], team2: teams[j], key: groupMatchKey(teams[i], teams[j]), date: '', time: '', round: '', ground: '' });
    }
  }
  return matches;
}

function formatMatchDate(match) {
  if (!match.date) return '';
  const date = new Date(match.date + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return match.date;
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }).replace('.', '').toUpperCase();
}

function getMatchdayNumber(match, fallback) {
  const found = String(match.round || '').match(/\d+/);
  return found ? found[0] : String(fallback + 1);
}

function ensureAllGroupMatches() {
  if (!state.groupMatches) state.groupMatches = {};
  GROUP_NAMES.forEach(group => {
    if (!state.groupMatches[group]) state.groupMatches[group] = {};
    getGroupMatchList(group).forEach(match => {
      if (!state.groupMatches[group][match.key]) {
        state.groupMatches[group][match.key] = { home: null, away: null };
      }
    });
  });
}

function parseGoalValue(value) {
  if (value === '' || value === null || value === undefined) return null;
  const num = Number(value);
  if (!Number.isInteger(num) || num < 0 || num > 99) return null;
  return num;
}

function calculateGroupStandings(group) {
  ensureAllGroupMatches();
  const originalTeams = (TEAMS_BY_GROUP[group] || []).map(t => t.name);
  const stats = {};
  const playedMatches = [];
  originalTeams.forEach((team, index) => {
    stats[team] = { team, index, pts: 0, gf: 0, ga: 0, gd: 0, played: 0, wins: 0 };
  });
  getGroupMatchList(group).forEach(match => {
    const result = state.groupMatches[group]?.[match.key] || {};
    const home = parseGoalValue(result.home);
    const away = parseGoalValue(result.away);
    if (home === null || away === null) return;
    const a = stats[match.team1];
    const b = stats[match.team2];
    if (!a || !b) return;
    playedMatches.push({ team1: match.team1, team2: match.team2, home, away });
    a.played += 1; b.played += 1;
    a.gf += home; a.ga += away;
    b.gf += away; b.ga += home;
    a.gd = a.gf - a.ga; b.gd = b.gf - b.ga;
    if (home > away) { a.pts += 3; a.wins += 1; }
    else if (away > home) { b.pts += 3; b.wins += 1; }
    else { a.pts += 1; b.pts += 1; }
  });
  const overallCompare = (a, b) =>
    (b.gd - a.gd) || (b.gf - a.gf) || (b.wins - a.wins) || (a.index - b.index);
  const getHeadToHeadStats = (teamRows) => {
    const names = new Set(teamRows.map(row => row.team));
    const h2h = {};
    teamRows.forEach(row => { h2h[row.team] = { team: row.team, pts: 0, gf: 0, ga: 0, gd: 0 }; });
    playedMatches.forEach(match => {
      if (!names.has(match.team1) || !names.has(match.team2)) return;
      const a = h2h[match.team1]; const b = h2h[match.team2];
      a.gf += match.home; a.ga += match.away;
      b.gf += match.away; b.ga += match.home;
      a.gd = a.gf - a.ga; b.gd = b.gf - b.ga;
      if (match.home > match.away) a.pts += 3;
      else if (match.away > match.home) b.pts += 3;
      else { a.pts += 1; b.pts += 1; }
    });
    return h2h;
  };
  const h2hKey = (row, h2h) => {
    const stat = h2h[row.team];
    return `${stat.pts}|${stat.gd}|${stat.gf}`;
  };
  const rankPointTie = (teamRows) => {
    if (teamRows.length <= 1) return teamRows;
    const h2h = getHeadToHeadStats(teamRows);
    const sorted = [...teamRows].sort((a, b) => {
      const ah = h2h[a.team]; const bh = h2h[b.team];
      return (bh.pts - ah.pts) || (bh.gd - ah.gd) || (bh.gf - ah.gf) || overallCompare(a, b);
    });
    const buckets = [];
    sorted.forEach(row => {
      const key = h2hKey(row, h2h);
      const last = buckets[buckets.length - 1];
      if (last && last.key === key) last.rows.push(row);
      else buckets.push({ key, rows: [row] });
    });
    if (buckets.length === 1) return [...teamRows].sort(overallCompare);
    return buckets.flatMap(bucket => bucket.rows.length === 1 ? bucket.rows : rankPointTie(bucket.rows));
  };
  const byPoints = [...Object.values(stats)].sort((a, b) => (b.pts - a.pts) || overallCompare(a, b));
  const pointBuckets = [];
  byPoints.forEach(row => {
    const last = pointBuckets[pointBuckets.length - 1];
    if (last && last.pts === row.pts) last.rows.push(row);
    else pointBuckets.push({ pts: row.pts, rows: [row] });
  });
  return pointBuckets.flatMap(bucket => bucket.rows.length === 1 ? bucket.rows : rankPointTie(bucket.rows));
}

function updateGroupOrderFromMatches(group) {
  state.groups[group] = calculateGroupStandings(group).map(row => row.team);
  syncAutoThirdPlace();
}

function updateAllGroupOrdersFromMatches() {
  GROUP_NAMES.forEach(updateGroupOrderFromMatches);
}

function isGroupComplete(group) {
  ensureAllGroupMatches();
  return getGroupMatchList(group).every(match => {
    const result = state.groupMatches[group]?.[match.key] || {};
    return parseGoalValue(result.home) !== null && parseGoalValue(result.away) !== null;
  });
}

function openGroupResultsModal(group) {
  ensureAllGroupMatches();
  const modal = document.getElementById('predictionModal');
  const viewer = document.getElementById('predictionViewer');
  modal.style.display = 'flex';
  const teams = (TEAMS_BY_GROUP[group] || []).map(t => t.name);
  const matches = getGroupMatchList(group);
  viewer.innerHTML = `
    <div class="group-results-editor">
      <h3>GRUPO ${group}</h3>
      <div class="group-modal-team-grid"></div>
      <div class="group-modal-divider"></div>
      <h4 class="group-modal-section-title"><span>📅</span> PARTIDOS DEL GRUPO</h4>
      <div class="group-match-list"></div>
      <div class="group-live-standings-wrap">
        <h4 class="group-modal-section-title"><span>🏆</span> CLASIFICACIÓN</h4>
        <div class="group-modal-standings"></div>
      </div>
      <div class="group-modal-info">ⓘ Introduce los resultados de los partidos para ver la clasificación.</div>
      <div class="group-modal-actions">
        <button type="button" class="toolbar-btn" id="cancelGroupResults">Cerrar</button>
        <button type="button" class="submit-btn" id="saveGroupResults">Guardar</button>
      </div>
    </div>
  `;
  const teamGrid = viewer.querySelector('.group-modal-team-grid');
  teams.forEach(team => {
    const box = document.createElement('div');
    box.className = 'group-modal-team-card';
    box.innerHTML = `<span class="team-flag ${getTeamFlagClass(team)}"></span><span>${team}</span>`;
    teamGrid.appendChild(box);
  });
  const list = viewer.querySelector('.group-match-list');
  matches.forEach((match, index) => {
    const result = state.groupMatches[group][match.key] || { home: null, away: null };
    const row = document.createElement('div');
    row.className = 'group-match-row';
    row.innerHTML = `
      <div class="match-date-badge"><strong>${getMatchdayNumber(match, index)}</strong><span>${formatMatchDate(match)}</span></div>
      <div class="match-team match-team-left"><span class="team-flag ${getTeamFlagClass(match.team1)}"></span><span>${match.team1}</span></div>
      <div class="match-score-controls">
        <input class="score-input" type="number" min="0" max="99" inputmode="numeric" data-key="${match.key}" data-side="home" value="${result.home ?? 0}">
        <span class="score-separator">-</span>
        <input class="score-input" type="number" min="0" max="99" inputmode="numeric" data-key="${match.key}" data-side="away" value="${result.away ?? 0}">
      </div>
      <div class="match-team match-team-right"><span>${match.team2}</span><span class="team-flag ${getTeamFlagClass(match.team2)}"></span></div>
    `;
    list.appendChild(row);
  });
  function redrawStandings() {
    const tmp = JSON.parse(JSON.stringify(state.groupMatches[group] || {}));
    viewer.querySelectorAll('.score-input').forEach(input => {
      if (!tmp[input.dataset.key]) tmp[input.dataset.key] = { home: null, away: null };
      tmp[input.dataset.key][input.dataset.side] = parseGoalValue(input.value);
    });
    const old = state.groupMatches[group];
    state.groupMatches[group] = tmp;
    const freshStandings = calculateGroupStandings(group);
    state.groupMatches[group] = old;
    const standingsDiv = viewer.querySelector('.group-modal-standings');
    standingsDiv.innerHTML = '';
    freshStandings.forEach((row, idx) => {
      const item = document.createElement('div');
      item.className = 'group-team pos-' + (idx + 1) + (idx >= 3 ? ' eliminated' : '');
      item.innerHTML = `<span class="position-badge">${idx + 1}</span><span class="team-flag ${getTeamFlagClass(row.team)}"></span><span class="team-name">${row.team}</span><span class="standings-mini">${row.pts} pts · ${row.gf}-${row.ga}</span>`;
      standingsDiv.appendChild(item);
    });
  }
  viewer.querySelectorAll('.score-input').forEach(input => input.addEventListener('input', redrawStandings));
  redrawStandings();
  document.getElementById('cancelGroupResults').addEventListener('click', closePredictionModal);
  document.getElementById('saveGroupResults').addEventListener('click', () => {
    buildTPAllocation();
    computeMatchTeams();
    const previousMatchTeams = cloneMatchTeamsSnapshot();
    viewer.querySelectorAll('.score-input').forEach(input => {
      if (!state.groupMatches[group][input.dataset.key]) {
        state.groupMatches[group][input.dataset.key] = { home: null, away: null };
      }
      state.groupMatches[group][input.dataset.key][input.dataset.side] = parseGoalValue(input.value);
    });
    updateGroupOrderFromMatches(group);
    cleanupKnockoutAfterGroupChange(previousMatchTeams);
    closePredictionModal();
    renderAll();
    saveLocalPredictionSoon();
  });
}

function getSlotTeam(ref) {
  if (!ref) return null;
  if (ref.type === 'winner') return state.groups[ref.group] ? state.groups[ref.group][0] : null;
  if (ref.type === 'runner_up') return state.groups[ref.group] ? state.groups[ref.group][1] : null;
  if (ref.type === 'third_place') return tpAllocation[ref._matchNum] || null;
  if (ref.type === 'winner_of') return state.knockoutResults[ref.matchNum] || null;
  if (ref.type === 'loser_of') {
    const m = state.matchTeams[ref.matchNum];
    const w = state.knockoutResults[ref.matchNum];
    if (!m || !w) return null;
    return m.team1 === w ? m.team2 : m.team1;
  }
  return null;
}

function computeMatchTeams() {
  state.matchTeams = {};
  KO_TREE.round32.forEach(m => {
    state.matchTeams[m.num] = {
      team1: getSlotTeam(Object.assign({}, m.slot1, {_matchNum: m.num})),
      team2: getSlotTeam(Object.assign({}, m.slot2, {_matchNum: m.num}))
    };
  });
  (KO_TREE.round16 || []).forEach(m => { state.matchTeams[m.num] = { team1: getSlotTeam(m.slot1), team2: getSlotTeam(m.slot2) }; });
  (KO_TREE.quarterfinals || []).forEach(m => { state.matchTeams[m.num] = { team1: getSlotTeam(m.slot1), team2: getSlotTeam(m.slot2) }; });
  (KO_TREE.semifinals || []).forEach(m => { state.matchTeams[m.num] = { team1: getSlotTeam(m.slot1), team2: getSlotTeam(m.slot2) }; });
  if (KO_TREE.final && KO_TREE.final[0]) {
    const m = KO_TREE.final[0];
    state.matchTeams[m.num] = { team1: getSlotTeam(m.slot1), team2: getSlotTeam(m.slot2) };
  }
  if (KO_TREE.thirdPlace && KO_TREE.thirdPlace[0]) {
    const m = KO_TREE.thirdPlace[0];
    state.matchTeams[m.num] = { team1: getSlotTeam(m.slot1), team2: getSlotTeam(m.slot2) };
  }
}

function showToast(msg, error) {
  const c = document.getElementById('toastContainer');
  const d = document.createElement('div');
  d.className = error ? 'error-toast' : 'success-toast';
  d.textContent = msg;
  c.appendChild(d);
  setTimeout(() => d.remove(), 3500);
}

function showLoading(msg) {
  document.getElementById('loadingOverlay').style.display = 'flex';
  document.getElementById('loadingText').textContent = msg || 'Loading...';
}
function hideLoading() { document.getElementById('loadingOverlay').style.display = 'none'; }

function fireConfetti() {
  const colors = ['#FFD700','#FF6B6B','#4CAF50','#64B5F6','#FF8A65','#BA68C8','#FFF176'];
  const c = document.getElementById('confettiContainer');
  for (let i = 0; i < 80; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random()*100+'%';
    p.style.width = (6+Math.random()*10)+'px';
    p.style.height = (6+Math.random()*10)+'px';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration = (2+Math.random()*3)+'s';
    p.style.animationDelay = Math.random()*0.5+'s';
    c.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }
}

function renderGroups() {
  ensureAllGroupMatches();
  syncAutoThirdPlace();
  const grid = document.getElementById('groupsGrid');
  grid.innerHTML = '';
  const autoThirds = new Set(state.thirdPlace);
  GROUP_NAMES.forEach(g => {
    const complete = isGroupComplete(g);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'group-card group-card-clickable' + (complete ? ' group-complete' : ' group-empty');
    card.title = complete ? 'Editar resultados del grupo ' + g : 'Meter resultados del grupo ' + g;
    const h3 = document.createElement('h3');
    h3.textContent = 'Group ' + g;
    card.appendChild(h3);
    const originalTeams = (TEAMS_BY_GROUP[g] || []).map(t => t.name);
    if (!complete) {
      const empty = document.createElement('div');
      empty.className = 'group-empty-preview';
      const flags = document.createElement('div');
      flags.className = 'group-empty-flags';
      originalTeams.forEach(team => {
        const flagBox = document.createElement('span');
        flagBox.className = 'group-empty-flag-box';
        flagBox.title = team;
        flagBox.innerHTML = '<span class="team-flag ' + getTeamFlagClass(team) + '"></span>';
        flags.appendChild(flagBox);
      });
      empty.appendChild(flags);
      card.appendChild(empty);
    } else {
      const standings = calculateGroupStandings(g);
      standings.forEach((stat, idx) => {
        const team = stat.team;
        const isThird = idx === 2;
        const isFourth = idx === 3;
        const eliminated = isFourth || (isThird && !autoThirds.has(team));
        const row = document.createElement('div');
        row.className = 'group-team pos-' + (idx + 1) + (eliminated ? ' eliminated' : '') + (isThird && autoThirds.has(team) ? ' qualified-third' : '');
        const badge = document.createElement('span'); badge.className = 'position-badge'; badge.textContent = idx + 1; row.appendChild(badge);
        const flag = document.createElement('span'); flag.className = 'team-flag ' + getTeamFlagClass(team); row.appendChild(flag);
        const name = document.createElement('span'); name.className = 'team-name'; name.textContent = team; row.appendChild(name);
        const points = document.createElement('span'); points.className = 'group-points'; points.textContent = stat.pts + 'p'; row.appendChild(points);
        card.appendChild(row);
      });
    }
    const hint = document.createElement('div');
    hint.className = 'group-card-hint';
    hint.textContent = complete ? 'Editar resultados' : 'Meter resultados';
    card.appendChild(hint);
    card.addEventListener('click', () => openGroupResultsModal(g));
    grid.appendChild(card);
  });
}

function renderThirdPlace() {
  const container = document.getElementById('thirdPlacePicks');
  if (!container) return;
  syncAutoThirdPlace();
  container.innerHTML = '';
  const picked = state.thirdPlace.filter(Boolean);
  if (picked.length === 0) {
    container.innerHTML = '<p class="note-text">Se calcularán solos cuando metas todos los resultados de grupos.</p>';
    return;
  }
  picked.forEach((team, i) => {
    const tag = document.createElement('span');
    tag.className = 'third-pick-tag';
    tag.innerHTML = '<span class="third-pick-num">'+(i+1)+'</span> <span class="'+getTeamFlagClass(team)+'"></span> ' + team;
    container.appendChild(tag);
  });
}

function getBracketDisplayOrder() {
  const r32Order = [], r16Order = [], qfOrder = [];
  KO_TREE.semifinals.forEach(sf => {
    [sf.slot1.matchNum, sf.slot2.matchNum].forEach(qfNum => {
      const qfIdx = KO_TREE.quarterfinals.findIndex(m => m.num === qfNum);
      if (qfIdx !== -1) {
        qfOrder.push(qfIdx);
        const qf = KO_TREE.quarterfinals[qfIdx];
        [qf.slot1.matchNum, qf.slot2.matchNum].forEach(r16Num => {
          const r16Idx = KO_TREE.round16.findIndex(m => m.num === r16Num);
          if (r16Idx !== -1) {
            r16Order.push(r16Idx);
            const r16 = KO_TREE.round16[r16Idx];
            [r16.slot1.matchNum, r16.slot2.matchNum].forEach(r32Num => {
              const r32Idx = KO_TREE.round32.findIndex(m => m.num === r32Num);
              if (r32Idx !== -1) r32Order.push(r32Idx);
            });
          }
        });
      }
    });
  });
  return { r32Order, r16Order, qfOrder };
}

function renderBracket() {
  const container = document.getElementById('bracketContainer');
  container.innerHTML = '';
  if (!KO_TREE) return;
  const order = getBracketDisplayOrder();
  const SLOT_H = 46, GAP = 10, MATCH_GAP = 2, LABEL_H = 32, COL_W = 170, CONN_W = 58;
  const MATCH_H = SLOT_H * 2 + MATCH_GAP;
  const STEP = MATCH_H + GAP;
  const cols = [10, COL_W + CONN_W, COL_W * 2 + CONN_W * 2, COL_W * 3 + CONN_W * 3, COL_W * 4 + CONN_W * 4];
  function matchData(treeArr, ord) {
    return (ord || treeArr.map((_, i) => i)).map(i => {
      const m = treeArr[i];
      const mt = state.matchTeams[m.num] || {};
      return { team1: mt.team1, team2: mt.team2, winner: state.knockoutResults[m.num] || null, num: m.num };
    });
  }
  const r32 = matchData(KO_TREE.round32, order.r32Order);
  const r16 = matchData(KO_TREE.round16, order.r16Order);
  const qf = matchData(KO_TREE.quarterfinals, order.qfOrder);
  const sf = matchData(KO_TREE.semifinals);
  const r32Tree = order.r32Order.map(i => KO_TREE.round32[i]);
  const r16Tree = order.r16Order.map(i => KO_TREE.round16[i]);
  const qfTree = order.qfOrder.map(i => KO_TREE.quarterfinals[i]);
  const sfTree = KO_TREE.semifinals;
  const finMatch = KO_TREE.final ? KO_TREE.final[0] : null;
  const finNum = finMatch ? finMatch.num : 104;
  const finMt = state.matchTeams[finNum] || {};
  const finalMatch = { team1: finMt.team1, team2: finMt.team2, winner: state.knockoutResults[finNum] || null, num: finNum };
  const thirdMatchDef = KO_TREE.thirdPlace ? KO_TREE.thirdPlace[0] : null;
  const thirdNum = thirdMatchDef ? thirdMatchDef.num : 103;
  const thirdMt = state.matchTeams[thirdNum] || {};
  const thirdMatch = { team1: thirdMt.team1, team2: thirdMt.team2, winner: state.knockoutResults[thirdNum] || null, num: thirdNum };
  const r32Tops = r32.map((_, i) => LABEL_H + i * STEP);
  function centerOf(top) { return top + SLOT_H; }
  function buildTops(dstTree, srcTree, srcTops) {
    return dstTree.map(dst => {
      const s1i = srcTree.findIndex(s => s.num === dst.slot1.matchNum);
      const s2i = srcTree.findIndex(s => s.num === dst.slot2.matchNum);
      if (s1i === -1 || s2i === -1) return LABEL_H;
      return ((centerOf(srcTops[s1i]) + centerOf(srcTops[s2i])) / 2) - SLOT_H;
    });
  }
  const r16Tops = buildTops(r16Tree, r32Tree, r32Tops);
  const qfTops = buildTops(qfTree, r16Tree, r16Tops);
  const sfTops = buildTops(sfTree, qfTree, qfTops);
  let finalTop = LABEL_H;
  if (sfTops.length === 2) finalTop = ((centerOf(sfTops[0]) + centerOf(sfTops[1])) / 2) - SLOT_H;
  const thirdTop = finalTop;
  const maxH = LABEL_H + r32.length * STEP + 40;
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'position:relative;height:' + maxH + 'px;min-width:' + (COL_W * 5 + CONN_W * 4 + 40) + 'px';
  ['Dieciseisavos', 'Octavos', 'Cuartos', 'Semis', 'Final'].forEach((lbl, i) => {
    const l = document.createElement('div');
    l.className = 'bracket-round-label';
    l.style.cssText = 'position:absolute;top:2px;left:' + cols[i] + 'px;width:' + COL_W + 'px;text-align:center;';
    l.textContent = lbl;
    wrapper.appendChild(l);
  });
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', maxH);
  svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;z-index:1;';
  function mkPath(d) {
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', d); p.setAttribute('stroke', '#81C784'); p.setAttribute('stroke-width', '2'); p.setAttribute('fill', 'none');
    return p;
  }
  function connect(srcTree, srcTops, dstTree, dstTops, srcLeft, dstLeft) {
    const sx = srcLeft + COL_W - 6, dx = dstLeft + 3, mx = sx + (dx - sx) / 2;
    dstTree.forEach((dst, di) => {
      const s1i = srcTree.findIndex(s => s.num === dst.slot1.matchNum);
      const s2i = srcTree.findIndex(s => s.num === dst.slot2.matchNum);
      if (s1i === -1 || s2i === -1) return;
      const y1 = centerOf(srcTops[s1i]), y2 = centerOf(srcTops[s2i]), yd = centerOf(dstTops[di]);
      svg.appendChild(mkPath(`M${sx},${y1} L${mx},${y1} L${mx},${yd} L${dx},${yd}`));
      svg.appendChild(mkPath(`M${sx},${y2} L${mx},${y2} L${mx},${yd} L${dx},${yd}`));
    });
  }
  function connectSemisToFinal() {
    if (sfTree.length !== 2) return;
    const sx = cols[3] + COL_W - 6, dx = cols[4] + 3, mx = sx + (dx - sx) / 2, yd = centerOf(finalTop);
    sfTops.forEach(top => { const y = centerOf(top); svg.appendChild(mkPath(`M${sx},${y} L${mx},${y} L${mx},${yd} L${dx},${yd}`)); });
  }
  function connectSemisToThirdPlace() {
    if (sfTops.length !== 2 || !thirdMatchDef) return;
    const x = cols[3] + (COL_W / 2) - 3;
    const upperBottom = sfTops[0] + MATCH_H, lowerTop = sfTops[1];
    const thirdTopEdge = thirdTop - 6, thirdBottomEdge = thirdTop + MATCH_H + 6;
    if (upperBottom < thirdTopEdge) { const p1 = mkPath(`M${x},${upperBottom} L${x},${thirdTopEdge}`); p1.setAttribute('stroke-width', '2'); svg.appendChild(p1); }
    if (thirdBottomEdge < lowerTop) { const p2 = mkPath(`M${x},${thirdBottomEdge} L${x},${lowerTop}`); p2.setAttribute('stroke-width', '2'); svg.appendChild(p2); }
  }
  wrapper.appendChild(svg);
  function slotDiv(team, isWinner, matchNum, slotNum, top, left, extraClass) {
    const hasTeam = Boolean(team);
    const winner = state.knockoutResults[matchNum] || null;
    const isRealWinner = hasTeam && winner && team === winner;
    const isLoser = hasTeam && winner && team !== winner;
    const d = document.createElement('div');
    d.className = 'bracket-slot' + (hasTeam ? ' has-team' : ' empty-slot') + (isRealWinner ? ' winner' : '') + (isLoser ? ' loser' : '') + (extraClass ? ' ' + extraClass : '');
    d.style.cssText = 'position:absolute;top:' + top + 'px;left:' + left + 'px;width:' + (COL_W - 6) + 'px;z-index:2;';
    d.innerHTML = '<span class="slot-flag ' + getFlagClass(team) + '"></span><span class="slot-name">' + (team || '---') + '</span><button class="slot-clear">×</button>';
    d.addEventListener('click', () => {
      const match = state.matchTeams[matchNum] || {};
      if (!Boolean(match.team1 && match.team2)) return;
      pickWinner(matchNum, slotNum);
      setTimeout(() => {
        const pickedEl = document.querySelector(`.bracket-slot[data-match="${matchNum}"][data-slot="${slotNum}"]`);
        if (pickedEl) { pickedEl.classList.remove('just-picked'); void pickedEl.offsetWidth; pickedEl.classList.add('just-picked'); }
      }, 0);
    });
    d.dataset.match = matchNum; d.dataset.slot = slotNum;
    d.querySelector('.slot-clear').addEventListener('click', e => { e.stopPropagation(); clearKnockoutAndRender(team); });
    return d;
  }
  function drawRound(matches, tops, colIdx) {
    const left = cols[colIdx];
    matches.forEach((m, i) => {
      const top = tops[i];
      wrapper.appendChild(slotDiv(m.team1, m.winner === m.team1, m.num, 1, top, left, ''));
      wrapper.appendChild(slotDiv(m.team2, m.winner === m.team2, m.num, 2, top + SLOT_H, left, ''));
    });
  }
  connect(r32Tree, r32Tops, r16Tree, r16Tops, cols[0], cols[1]);
  connect(r16Tree, r16Tops, qfTree, qfTops, cols[1], cols[2]);
  connect(qfTree, qfTops, sfTree, sfTops, cols[2], cols[3]);
  connectSemisToFinal(); connectSemisToThirdPlace();
  drawRound(r32, r32Tops, 0); drawRound(r16, r16Tops, 1); drawRound(qf, qfTops, 2); drawRound(sf, sfTops, 3);
  if (thirdMatchDef) {
    const thirdLabel = document.createElement('div');
    thirdLabel.className = 'bracket-round-label';
    thirdLabel.style.cssText = 'position:absolute;top:' + Math.max(LABEL_H, thirdTop - 26) + 'px;left:' + cols[3] + 'px;width:' + COL_W + 'px;text-align:center;color:#2E7D32;z-index:3;';
    thirdLabel.textContent = '3er puesto';
    wrapper.appendChild(thirdLabel);
    const thirdWinner = thirdMatch.winner || null;
    wrapper.appendChild(slotDiv(thirdMatch.team1, Boolean(thirdMatch.team1 && thirdWinner && thirdMatch.team1 === thirdWinner), thirdNum, 1, thirdTop, cols[3], 'third-place-slot'));
    wrapper.appendChild(slotDiv(thirdMatch.team2, Boolean(thirdMatch.team2 && thirdWinner && thirdMatch.team2 === thirdWinner), thirdNum, 2, thirdTop + SLOT_H, cols[3], 'third-place-slot'));
  }
  const finalWinner = finalMatch.winner || null;
  wrapper.appendChild(slotDiv(finalMatch.team1, Boolean(finalMatch.team1 && finalWinner && finalMatch.team1 === finalWinner), finNum, 1, finalTop, cols[4], ''));
  wrapper.appendChild(slotDiv(finalMatch.team2, Boolean(finalMatch.team2 && finalWinner && finalMatch.team2 === finalWinner), finNum, 2, finalTop + SLOT_H, cols[4], ''));
  container.appendChild(wrapper);
}

function cloneMatchTeamsSnapshot() { return JSON.parse(JSON.stringify(state.matchTeams || {})); }
function sameMatchTeams(a, b) { return (a?.team1 || null) === (b?.team1 || null) && (a?.team2 || null) === (b?.team2 || null); }

function cleanupKnockoutAfterGroupChange(previousMatchTeams) {
  let changed = true, guard = 0;
  while (changed && guard < 20) {
    changed = false; guard += 1;
    buildTPAllocation(); computeMatchTeams();
    Object.keys(state.knockoutResults).forEach(matchNum => {
      const currentTeams = state.matchTeams[matchNum] || {};
      const previousTeams = previousMatchTeams?.[matchNum] || {};
      const pickedWinner = state.knockoutResults[matchNum];
      const winnerStillInMatch = pickedWinner && (pickedWinner === currentTeams.team1 || pickedWinner === currentTeams.team2);
      const matchupChanged = previousMatchTeams && !sameMatchTeams(previousTeams, currentTeams);
      if (!winnerStillInMatch || matchupChanged) { delete state.knockoutResults[matchNum]; changed = true; }
    });
  }
  buildTPAllocation(); computeMatchTeams();
}

function pickWinner(matchNum, slotNum) {
  const mt = state.matchTeams[matchNum];
  if (!mt) return;
  const team = slotNum === 1 ? mt.team1 : mt.team2;
  if (!team) return;
  if (state.knockoutResults[matchNum] === team) delete state.knockoutResults[matchNum];
  else state.knockoutResults[matchNum] = team;
  computeMatchTeams(); renderAll(); saveLocalPredictionSoon();
}

function clearKnockoutAndRender(team) {
  if (!team) return;
  Object.keys(state.knockoutResults).forEach(k => { if (state.knockoutResults[k] === team) delete state.knockoutResults[k]; });
  computeMatchTeams(); renderAll(); saveLocalPredictionSoon();
}

const AWARD_SELECT_IDS = ['awardGb1', 'awardGb2', 'awardGb3', 'awardBa1', 'awardBa2', 'awardBa3', 'awardGg1', 'awardGg2', 'awardGg3'];

function getPlayerByName(name) { return AWARD_PLAYERS.find(p => p.name === name) || null; }

function awardDisplayHtml(value) {
  const player = getPlayerByName(value);
  if (!player) return '<span class="award-placeholder">---</span>';
  return `<span class="team-flag ${getFlagClass(player.country)}"></span><span class="award-player-name">${escapeHtml(player.name)}</span><span class="award-player-country">${escapeHtml(player.country)}</span>`;
}

function ensureAwardPickerModal() {
  let overlay = document.getElementById('awardPickerModal');
  if (overlay) return overlay;
  overlay = document.createElement('div');
  overlay.id = 'awardPickerModal';
  overlay.className = 'award-picker-overlay';
  overlay.style.display = 'none';
  overlay.innerHTML = `<div class="award-picker-modal" role="dialog" aria-modal="true"><button type="button" class="prediction-modal-close award-picker-close" aria-label="Cerrar">×</button><h3 id="awardPickerTitle">Elegir jugador</h3><div class="award-picker-list" id="awardPickerList"></div></div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay || e.target.closest('.award-picker-close')) closeAwardPickerModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.style.display !== 'none') closeAwardPickerModal(); });
  return overlay;
}

function closeAwardPickerModal() {
  const overlay = document.getElementById('awardPickerModal');
  if (!overlay) return;
  overlay.style.display = 'none';
  overlay.dataset.selectId = '';
}

function openAwardPickerModal(select) {
  const overlay = ensureAwardPickerModal();
  const list = overlay.querySelector('#awardPickerList');
  const title = overlay.querySelector('#awardPickerTitle');
  const label = select.closest('.award-row')?.querySelector('label')?.textContent?.trim() || 'Elegir jugador';
  const currentValue = select.value || '';
  overlay.dataset.selectId = select.id;
  title.textContent = label.replace(':', '');
  list.innerHTML = '';
  const empty = document.createElement('button');
  empty.type = 'button';
  empty.className = 'award-picker-option' + (!currentValue ? ' selected' : '');
  empty.dataset.value = '';
  empty.innerHTML = '<span class="award-placeholder">---</span><span class="award-player-country">Sin elegir</span>';
  list.appendChild(empty);
  AWARD_PLAYERS.forEach(player => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'award-picker-option' + (currentValue === player.name ? ' selected' : '');
    option.dataset.value = player.name;
    option.innerHTML = `<span class="team-flag ${getFlagClass(player.country)}"></span><span class="award-player-name">${escapeHtml(player.name)}</span><span class="award-player-country">${escapeHtml(player.country)}</span>`;
    list.appendChild(option);
  });
  list.onclick = e => {
    const option = e.target.closest('.award-picker-option');
    if (!option) return;
    const activeSelect = document.getElementById(overlay.dataset.selectId);
    if (!activeSelect) return;
    activeSelect.value = option.dataset.value || '';
    syncAwardCustomSelects();
    activeSelect.dispatchEvent(new Event('input', { bubbles: true }));
    activeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    closeAwardPickerModal();
    saveLocalPredictionSoon();
  };
  overlay.style.display = 'flex';
}

function buildAwardCustomSelect(select) {
  let wrap = select.nextElementSibling;
  if (!wrap || !wrap.classList || !wrap.classList.contains('award-custom')) {
    wrap = document.createElement('div');
    wrap.className = 'award-custom award-popup-select';
    wrap.dataset.selectId = select.id;
    wrap.innerHTML = `<button type="button" class="award-custom-trigger" aria-haspopup="dialog"></button>`;
    select.insertAdjacentElement('afterend', wrap);
  }
  select.classList.add('award-native-hidden');
  const trigger = wrap.querySelector('.award-custom-trigger');
  trigger.innerHTML = awardDisplayHtml(select.value);
  if (!wrap.dataset.bound) {
    wrap.dataset.bound = '1';
    trigger.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); openAwardPickerModal(select); });
  }
}

function renderAwardSelects() {
  AWARD_SELECT_IDS.forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    const currentValue = select.value;
    select.innerHTML = '<option value="">---</option>';
    AWARD_PLAYERS.forEach(player => {
      const option = document.createElement('option');
      option.value = player.name;
      option.textContent = `${player.name} — ${player.country}`;
      select.appendChild(option);
    });
    select.value = currentValue || '';
    buildAwardCustomSelect(select);
  });
}

function syncAwardCustomSelects() {
  AWARD_SELECT_IDS.forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    const wrap = select.nextElementSibling;
    if (!wrap || !wrap.classList.contains('award-custom')) return;
    const trigger = wrap.querySelector('.award-custom-trigger');
    if (trigger) trigger.innerHTML = awardDisplayHtml(select.value);
  });
}

function readAwards() {
  return {
    goldenBoot: [document.getElementById('awardGb1')?.value || '', document.getElementById('awardGb2')?.value || '', document.getElementById('awardGb3')?.value || ''],
    goldenBall: [document.getElementById('awardBa1')?.value || '', document.getElementById('awardBa2')?.value || '', document.getElementById('awardBa3')?.value || ''],
    goldenGlove: [document.getElementById('awardGg1')?.value || '', document.getElementById('awardGg2')?.value || '', document.getElementById('awardGg3')?.value || '']
  };
}

function fillAwards(a) {
  renderAwardSelects();
  if (!a) return;
  if (a.goldenBoot) { document.getElementById('awardGb1').value = a.goldenBoot[0] || ''; document.getElementById('awardGb2').value = a.goldenBoot[1] || ''; document.getElementById('awardGb3').value = a.goldenBoot[2] || ''; }
  if (a.goldenBall) { document.getElementById('awardBa1').value = a.goldenBall[0] || ''; document.getElementById('awardBa2').value = a.goldenBall[1] || ''; document.getElementById('awardBa3').value = a.goldenBall[2] || ''; }
  if (a.goldenGlove) { document.getElementById('awardGg1').value = a.goldenGlove[0] || ''; document.getElementById('awardGg2').value = a.goldenGlove[1] || ''; document.getElementById('awardGg3').value = a.goldenGlove[2] || ''; }
  syncAwardCustomSelects();
}

function buildPayload() {
  computeMatchTeams();
  const awards = readAwards();
  function winners(nums) { return nums.map(n => state.knockoutResults[n]).filter(Boolean); }
  function allTeams(nums) { return nums.flatMap(n => { const m = state.matchTeams[n] || {}; return [m.team1, m.team2]; }).filter(Boolean); }
  function matchDetails(nums) { return nums.map(n => { const m = state.matchTeams[n] || {}; return { match: n, team1: m.team1 || null, team2: m.team2 || null, winner: state.knockoutResults[n] || null }; }); }
  const r32nums = KO_TREE.round32.map(m => m.num);
  const r16nums = (KO_TREE.round16||[]).map(m => m.num);
  const qfnums = (KO_TREE.quarterfinals||[]).map(m => m.num);
  const sfnums = (KO_TREE.semifinals||[]).map(m => m.num);
  const finalNum = (KO_TREE.final && KO_TREE.final[0]) ? KO_TREE.final[0].num : null;
  const thirdNum = (KO_TREE.thirdPlace && KO_TREE.thirdPlace[0]) ? KO_TREE.thirdPlace[0].num : null;
  const finalMatch = finalNum ? (state.matchTeams[finalNum] || {}) : {};
  const thirdMatch = thirdNum ? (state.matchTeams[thirdNum] || {}) : {};
  const champion = finalNum ? (state.knockoutResults[finalNum] || null) : null;
  const runnerUp = champion ? ([finalMatch.team1, finalMatch.team2].find(team => team && team !== champion) || null) : null;
  const thirdPlaceWinner = thirdNum ? (state.knockoutResults[thirdNum] || null) : null;
  return {
    groups: JSON.parse(JSON.stringify(state.groups)),
    groupMatches: JSON.parse(JSON.stringify(state.groupMatches)),
    thirdPlace: state.thirdPlace.filter(Boolean),
    knockout: {
      round32: winners(r32nums), round16: winners(r16nums), quarterfinals: winners(qfnums), semifinals: winners(sfnums),
      final: champion, champion, runnerUp, finalists: [finalMatch.team1, finalMatch.team2].filter(Boolean),
      thirdPlace: thirdPlaceWinner, thirdPlaceWinner,
      matches: { round32: matchDetails(r32nums), round16: matchDetails(r16nums), quarterfinals: matchDetails(qfnums), semifinals: matchDetails(sfnums), final: finalNum ? matchDetails([finalNum]) : [], thirdPlace: thirdNum ? matchDetails([thirdNum]) : [] }
    },
    semifinalists: allTeams(sfnums), finalists: [finalMatch.team1, finalMatch.team2].filter(Boolean),
    champion, runnerUp, thirdPlaceWinner, awards
  };
}

function predictionResultStatus(predValue, realValue) {
  if (!realValue || realValue.length === 0) return 'pending';
  if (!predValue) return 'wrong';
  return predValue === realValue ? 'correct' : 'wrong';
}

function getResultOutcome(home, away) {
  if (home > away) return 'home';
  if (away > home) return 'away';
  return 'draw';
}

function getMatchResultFromMap(matchMap, match) {
  if (!matchMap || !match) return {};
  const sortedKey = match.key || groupMatchKey(match.team1, match.team2);
  const directKey = `${match.team1}__${match.team2}`;
  const reverseKey = `${match.team2}__${match.team1}`;
  return matchMap[sortedKey] || matchMap[directKey] || matchMap[reverseKey] || {};
}

function normalizeGroupMatchesForStandings(groupMatches = {}) {
  const normalized = {};
  GROUP_NAMES.forEach(group => {
    const source = groupMatches[group] || {};
    normalized[group] = {};
    getGroupMatchList(group).forEach(match => { normalized[group][match.key] = getMatchResultFromMap(source, match); });
  });
  return normalized;
}

function sameTeamSet(a, b) {
  const aa = (a || []).filter(Boolean), bb = (b || []).filter(Boolean);
  if (!aa.length || aa.length !== bb.length) return false;
  const bSet = new Set(bb);
  return aa.every(team => bSet.has(team));
}

function getChampionFromPayload(payload) { return payload?.champion || payload?.knockout?.champion || payload?.knockout?.final || null; }
function getRunnerUpFromPayload(payload) {
  if (payload?.runnerUp || payload?.knockout?.runnerUp) return payload.runnerUp || payload.knockout.runnerUp;
  const champion = getChampionFromPayload(payload);
  const finalists = payload?.finalists || payload?.knockout?.finalists || [];
  if (!champion || finalists.length < 2) return null;
  return finalists.find(team => team && team !== champion) || null;
}
function getThirdPlaceWinnerFromPayload(payload) { return payload?.thirdPlaceWinner || payload?.knockout?.thirdPlaceWinner || payload?.knockout?.thirdPlace || null; }
function getFinalistsFromPayload(payload) {
  const explicit = payload?.finalists || payload?.knockout?.finalists;
  if (explicit && explicit.length) return explicit.filter(Boolean);
  const champion = getChampionFromPayload(payload);
  const runnerUp = getRunnerUpFromPayload(payload);
  return [champion, runnerUp].filter(Boolean);
}

const KNOCKOUT_SCORING = puntuaciones.eliminatorias;

function uniqueTeamList(list) { return [...new Set((list || []).filter(Boolean))]; }

function getTeamsFromReviewMatches(reviewState, treeArr) {
  const teams = [];
  (treeArr || []).forEach(match => {
    const mt = reviewState.matchTeams?.[match.num] || {};
    if (mt.team1) teams.push(mt.team1);
    if (mt.team2) teams.push(mt.team2);
  });
  return uniqueTeamList(teams);
}

function getKnockoutStageTeamSets(payload) {
  if (!payload) return { round32: new Set(), round16: new Set(), quarterfinals: new Set(), semifinals: new Set(), finalist: new Set(), champion: new Set(), thirdPlace: new Set() };
  const reviewState = buildKnockoutReviewState(payload);
  const finalNum = KO_TREE.final?.[0]?.num;
  const thirdNum = KO_TREE.thirdPlace?.[0]?.num;
  const finalMatch = finalNum ? (reviewState.matchTeams?.[finalNum] || {}) : {};
  const thirdWinner = thirdNum ? reviewState.knockoutResults?.[thirdNum] : getThirdPlaceWinnerFromPayload(payload);
  const champion = finalNum ? reviewState.knockoutResults?.[finalNum] : getChampionFromPayload(payload);
  return {
    round32: new Set(getTeamsFromReviewMatches(reviewState, KO_TREE.round32)),
    round16: new Set(getTeamsFromReviewMatches(reviewState, KO_TREE.round16)),
    quarterfinals: new Set(getTeamsFromReviewMatches(reviewState, KO_TREE.quarterfinals)),
    semifinals: new Set(getTeamsFromReviewMatches(reviewState, KO_TREE.semifinals)),
    finalist: new Set(uniqueTeamList([finalMatch.team1, finalMatch.team2, ...getFinalistsFromPayload(payload)])),
    champion: new Set(champion ? [champion] : []),
    thirdPlace: new Set(thirdWinner ? [thirdWinner] : [])
  };
}

function getKnockoutProgressPointsForTeam(team, roundName, realStageTeams, predictedState) {
  if (!team || !roundName || !realStageTeams) return 0;
  const stageByRound = { round32: 'round32', round16: 'round16', quarterfinals: 'quarterfinals', semifinals: 'semifinals', final: 'finalist', thirdPlace: 'thirdPlace' };
  const stage = stageByRound[roundName];
  if (!stage) return 0;
  let points = realStageTeams[stage]?.has(team) ? (KNOCKOUT_SCORING[stage] || 0) : 0;
  if (roundName === 'final') {
    const finalNum = KO_TREE.final?.[0]?.num;
    const predictedChampion = finalNum ? predictedState?.knockoutResults?.[finalNum] : null;
    if (predictedChampion === team && realStageTeams.champion?.has(team)) points += KNOCKOUT_SCORING.champion;
  }
  return points;
}

function getKnockoutScoreBreakdown(prediction, results = RESULTS) {
  const predStages = getKnockoutStageTeamSets(prediction);
  const realStages = getKnockoutStageTeamSets(results);
  let score = 0;
  ['round32', 'round16', 'quarterfinals', 'semifinals', 'finalist'].forEach(stage => {
    const points = KNOCKOUT_SCORING[stage] || 0;
    predStages[stage].forEach(team => { if (realStages[stage].has(team)) score += points; });
  });
  predStages.champion.forEach(team => { if (realStages.champion.has(team)) score += KNOCKOUT_SCORING.champion; });
  predStages.thirdPlace.forEach(team => { if (realStages.thirdPlace.has(team)) score += KNOCKOUT_SCORING.thirdPlace; });
  return score;
}

function scorePrediction(prediction, results = RESULTS) {
  let score = 0;
  GROUP_NAMES.forEach(group => {
    const predGroup = prediction.groups?.[group] || [];
    const realGroup = results.groups?.[group] || [];
    if (predictionResultStatus(predGroup[0], realGroup[0]) === 'correct') score += puntuaciones.grupos.posicion.primero;
    if (predictionResultStatus(predGroup[1], realGroup[1]) === 'correct') score += puntuaciones.grupos.posicion.segundo;
    if (predictionResultStatus(predGroup[2], realGroup[2]) === 'correct') score += puntuaciones.grupos.posicion.tercero;
    const predMatches = prediction.groupMatches?.[group] || {};
    const realMatches = results.groupMatches?.[group] || {};
    getGroupMatchList(group).forEach(match => {
      const pred = getMatchResultFromMap(predMatches, match);
      const real = getMatchResultFromMap(realMatches, match);
      const ph = parseGoalValue(pred.home), pa = parseGoalValue(pred.away);
      const rh = parseGoalValue(real.home), ra = parseGoalValue(real.away);
      if (ph === null || pa === null || rh === null || ra === null) return;
      if (ph === rh && pa === ra) score += puntuaciones.grupos.partido.resultadoExacto;
      else if (getResultOutcome(ph, pa) === getResultOutcome(rh, ra)) score += puntuaciones.grupos.partido.ganadorEmpateCorrecto;
    });
  });
  score += getKnockoutScoreBreakdown(prediction, results);
  const predBoot = prediction.awards?.goldenBoot || [], realBoot = results.awards?.goldenBoot || [];
  if (realBoot[0] && predBoot[0] === realBoot[0]) score += puntuaciones.premios.goldenBoot[0];
  if (realBoot[1] && predBoot[1] === realBoot[1]) score += puntuaciones.premios.goldenBoot[1];
  if (realBoot[2] && predBoot[2] === realBoot[2]) score += puntuaciones.premios.goldenBoot[2];
  const predBall = prediction.awards?.goldenBall || [], realBall = results.awards?.goldenBall || [];
  if (realBall[0] && predBall[0] === realBall[0]) score += puntuaciones.premios.goldenBall[0];
  if (realBall[1] && predBall[1] === realBall[1]) score += puntuaciones.premios.goldenBall[1];
  if (realBall[2] && predBall[2] === realBall[2]) score += puntuaciones.premios.goldenBall[2];
   const predGlove = prediction.awards?.goldenGlove || [], realGlove = results.awards?.goldenGlove || [];
  if (realGlove[0] && predGlove[0] === realGlove[0]) score += puntuaciones.premios.goldenGlove[0];
  if (realGlove[1] && predGlove[1] === realGlove[1]) score += puntuaciones.premios.goldenGlove[1];
  if (realGlove[2] && predGlove[2] === realGlove[2]) score += puntuaciones.premios.goldenGlove[2];
  return score;
}

async function loadLeaderboard() {
  const res = await fetch(LEADERBOARD_CSV_URL);
  const csv = await res.text();
  const rows = parseCSV(csv);
  const submissions = [];
  rows.slice(1).forEach(row => {
    const rawJson = row[1];
    if (!rawJson) return;
    try {
      const prediction = JSON.parse(rawJson);
      submissions.push({ name: prediction.name || 'Anonymous', score: scorePrediction(prediction), prediction });
    } catch (e) { console.warn('Invalid prediction JSON:', rawJson); }
  });
  submissions.sort((a, b) => b.score - a.score);
  renderLeaderboardList(submissions);
}

function parseCSV(csv) {
  const rows = [];
  let row = [], value = '', insideQuotes = false;
  for (let i = 0; i < csv.length; i++) {
    const char = csv[i], next = csv[i + 1];
    if (char === '"' && insideQuotes && next === '"') { value += '"'; i++; }
    else if (char === '"') { insideQuotes = !insideQuotes; }
    else if (char === ',' && !insideQuotes) { row.push(value); value = ''; }
    else if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (value || row.length) { row.push(value); rows.push(row); }
      row = []; value = '';
      if (char === '\r' && next === '\n') i++;
    } else { value += char; }
  }
  if (value || row.length) { row.push(value); rows.push(row); }
  return rows;
}

function renderLeaderboardList(submissions) {
  const container = document.getElementById('leaderboardContent');
  container.innerHTML = `<div class="leaderboard-list"></div>`;
  const list = container.querySelector('.leaderboard-list');
  submissions.forEach((entry, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'leaderboard-entry';
    btn.innerHTML = `<span class="leaderboard-rank">#${index + 1}</span><span class="leaderboard-name">${entry.name}</span><span class="leaderboard-score">${entry.score} pts</span>`;
    btn.addEventListener('click', () => { openPredictionModal(entry); });
    list.appendChild(btn);
  });
}

function openPredictionModal(entry) {
  const modal = document.getElementById('predictionModal');
  const viewer = document.getElementById('predictionViewer');
  modal.style.display = 'flex';
  viewer.innerHTML = '';
  renderPredictionReview(entry);
}

function closePredictionModal() {
  const modal = document.getElementById('predictionModal');
  const viewer = document.getElementById('predictionViewer');
  modal.style.display = 'none';
  viewer.innerHTML = '';
}

function openScoringHelpModal() {
  const modal = document.getElementById('predictionModal');
  const viewer = document.getElementById('predictionViewer');
  modal.style.display = 'flex';
  viewer.innerHTML = `
    <div class="scoring-help">
      <h3>❓ Cómo se puntúa</h3>
      <div class="scoring-help-grid">
        <div class="scoring-help-card">
          <h4>🌍 Fase de grupos</h4>
          <ul>
            <li>Resultado exacto de partido: <strong>${puntuaciones.grupos.partido.resultadoExacto} pts</strong></li>
            <li>Ganador/empate correcto: <strong>${puntuaciones.grupos.partido.ganadorEmpateCorrecto} pt</strong></li>
            <li>1º exacto de grupo: <strong>${puntuaciones.grupos.posicion.primero} pts</strong></li>
            <li>2º exacto de grupo: <strong>${puntuaciones.grupos.posicion.segundo} pts</strong></li>
            <li>3º exacto de grupo: <strong>${puntuaciones.grupos.posicion.tercero} pt</strong></li>
          </ul>
        </div>
        <div class="scoring-help-card">
          <h4>🥊 Eliminatorias</h4>
          <ul>
            <li>Equipo en dieciseisavos: <strong>${puntuaciones.eliminatorias.round32} pts</strong></li>
            <li>Equipo en octavos: <strong>${puntuaciones.eliminatorias.round16} pts</strong></li>
            <li>Equipo en cuartos: <strong>${puntuaciones.eliminatorias.quarterfinals} pts</strong></li>
            <li>Equipo en semifinales: <strong>${puntuaciones.eliminatorias.semifinals} pts</strong></li>
            <li>Finalista: <strong>${puntuaciones.eliminatorias.finalist} pts</strong></li>
            <li>Campeón: <strong>+${puntuaciones.eliminatorias.champion} pts</strong></li>
            <li>Tercer puesto: <strong>${puntuaciones.eliminatorias.thirdPlace} pts</strong></li>
          </ul>
        </div>
        <div class="scoring-help-card">
          <h4>⭐ Premios individuales</h4>
          <ul>
            <li>Bota de Oro: <strong>${puntuaciones.premios.goldenBoot.join(' / ')} pts</strong></li>
            <li>Balón de Oro: <strong>${puntuaciones.premios.goldenBall.join(' / ')} pts</strong></li>
            <li>Guante de Oro: <strong>${puntuaciones.premios.goldenGlove.join(' / ')} pts</strong></li>
          </ul>
        </div>
      </div>
      <div class="scoring-help-footer">Los resultados y las puntuaciones NO son reales hasta que empiece el mundial.</div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function renderPredictionReview(entry) {
  const viewer = document.getElementById('predictionViewer');
  viewer.innerHTML = `
    <div class="prediction-review">
      <h3>La predicción de ${entry.name} — ${entry.score} pts</h3>
      <h4>Fase de grupos</h4>
      <div class="review-groups" id="reviewGroups"></div>
      <h4>Knockout</h4>
      <div class="review-section" id="reviewKnockout"></div>
      <h4>Logros individuales</h4>
      <div class="review-section" id="reviewAwards"></div>
    </div>
  `;
  renderReviewGroups(entry.prediction, entry);
  renderReviewKnockout(entry.prediction);
  renderReviewAwards(entry.prediction);
}

function withPredictionGroupMatches(prediction, fn) {
  const oldGroupMatches = state.groupMatches;
  state.groupMatches = normalizeGroupMatchesForStandings(prediction.groupMatches || {});
  try { return fn(); } finally { state.groupMatches = oldGroupMatches; }
}

function calculatePredictionGroupStandings(group, prediction) {
  return withPredictionGroupMatches(prediction, () => calculateGroupStandings(group));
}

function calculateRealGroupStandingsFromResults(group) {
  return withPredictionGroupMatches({ groupMatches: RESULTS.groupMatches || {} }, () => calculateGroupStandings(group));
}

function getQualifiedTeamsFromOrder(order, thirdsSet) {
  return new Set((order || []).filter((team, idx) => idx < 2 || (idx === 2 && thirdsSet.has(team))));
}

function getPredictionStandingReviewClass(team, predIdx, predOrder, predThirds, realOrder, realThirds) {
  const predQualified = getQualifiedTeamsFromOrder(predOrder, predThirds).has(team);
  const realQualified = getQualifiedTeamsFromOrder(realOrder, realThirds).has(team);
  if (!predQualified) return ' review-wrong';
  if (predQualified && realQualified) return predIdx === (realOrder || []).indexOf(team) ? ' review-correct' : ' review-partial';
  return ' review-wrong';
}

function getGroupMatchReviewPoints(ph, pa, rh, ra) {
  if (ph === null || pa === null || rh === null || ra === null) return 0;
  if (ph === rh && pa === ra) return puntuaciones.grupos.partido.resultadoExacto;
  return getResultOutcome(ph, pa) === getResultOutcome(rh, ra) ? puntuaciones.grupos.partido.ganadorEmpateCorrecto : 0;
}

function getPredictedGroupPositionPoints(team, idx, autoThirds, realOrder, realThirds) {
  if (predictionResultStatus(team, realOrder[idx]) !== 'correct') return 0;
  if (idx === 0) return puntuaciones.grupos.posicion.primero;
  if (idx === 1) return puntuaciones.grupos.posicion.segundo;
  if (idx === 2) return puntuaciones.grupos.posicion.tercero;
  return 0;
}

function calculateGroupReviewTotalPoints(group, prediction) {
  const matches = getGroupMatchList(group);
  const predMatches = prediction.groupMatches?.[group] || {};
  const realMatches = RESULTS.groupMatches?.[group] || {};
  const matchPoints = matches.reduce((total, match) => {
    const pred = getMatchResultFromMap(predMatches, match);
    const real = getMatchResultFromMap(realMatches, match);
    return total + getGroupMatchReviewPoints(parseGoalValue(pred.home), parseGoalValue(pred.away), parseGoalValue(real.home), parseGoalValue(real.away));
  }, 0);
  const standings = calculatePredictionGroupStandings(group, prediction);
  const realOrder = RESULTS.groups?.[group] || [];
  const realThirds = new Set(RESULTS.thirdPlace || []);
  const autoThirds = new Set(prediction.thirdPlace || []);
  const positionPoints = standings.reduce((total, row, idx) => total + getPredictedGroupPositionPoints(row.team, idx, autoThirds, realOrder, realThirds), 0);
  return matchPoints + positionPoints;
}

function renderReviewPointsBadge(points, title = '') {
  const cls = points > 0 ? ' review-points-badge got-points' : ' review-points-badge no-points';
  return `<span class="${cls}"${title ? ` title="${escapeHtml(title)}"` : ''}>+${points}pt</span>`;
}

function renderStandingRow({ team, idx, pts, gf, ga, statusClass, extraClass = '' }) {
  return `<div class="group-team pos-${idx + 1}${extraClass}${statusClass || ''}"><span class="position-badge">${idx + 1}</span><span class="team-flag ${getTeamFlagClass(team)}"></span><span class="team-name">${escapeHtml(team)}</span><span class="standings-mini">${pts} pts · ${gf}-${ga}</span></div>`;
}

function isPredictionGroupComplete(group, prediction) {
  const predMatches = prediction.groupMatches?.[group] || {};
  return getGroupMatchList(group).every(match => {
    const result = getMatchResultFromMap(predMatches, match);
    return parseGoalValue(result.home) !== null && parseGoalValue(result.away) !== null;
  });
}

function renderReviewGroups(prediction, entry) {
  const container = document.getElementById('reviewGroups');
  container.className = 'groups-grid';
  container.innerHTML = '';
  const autoThirds = new Set(prediction.thirdPlace || []);
  GROUP_NAMES.forEach(g => {
    const complete = isPredictionGroupComplete(g, prediction);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'group-card group-card-clickable review-group-card' + (complete ? ' group-complete' : ' group-empty');
    const header = document.createElement('div');
    header.className = 'review-group-card-header';
    const h3 = document.createElement('h3'); h3.textContent = 'Group ' + g; header.appendChild(h3);
    const groupTotalPoints = complete ? calculateGroupReviewTotalPoints(g, prediction) : 0;
    const totalBadge = document.createElement('span');
    totalBadge.className = 'review-group-total-points' + (groupTotalPoints > 0 ? ' got-points' : ' no-points');
    totalBadge.textContent = `+${groupTotalPoints}pt`;
    header.appendChild(totalBadge);
    card.appendChild(header);
    if (!complete) {
      const empty = document.createElement('div'); empty.className = 'group-empty-preview';
      const flags = document.createElement('div'); flags.className = 'group-empty-flags';
      (TEAMS_BY_GROUP[g] || []).forEach(teamObj => {
        const flagBox = document.createElement('span'); flagBox.className = 'group-empty-flag-box'; flagBox.title = teamObj.name;
        flagBox.innerHTML = '<span class="team-flag ' + getTeamFlagClass(teamObj.name) + '"></span>'; flags.appendChild(flagBox);
      });
      empty.appendChild(flags); card.appendChild(empty);
    } else {
      const standings = calculatePredictionGroupStandings(g, prediction);
      const predOrder = standings.map(row => row.team);
      const realOrder = RESULTS.groups?.[g] || [];
      const realThirds = new Set(RESULTS.thirdPlace || []);
      standings.forEach((stat, idx) => {
        const team = stat.team, isThird = idx === 2, isFourth = idx === 3;
        const eliminated = isFourth || (isThird && !autoThirds.has(team));
        const statusClass = realOrder.length ? getPredictionStandingReviewClass(team, idx, predOrder, autoThirds, realOrder, realThirds) : ' review-pending';
        const row = document.createElement('div');
        row.className = 'group-team pos-' + (idx + 1) + (eliminated ? ' eliminated' : '') + (isThird && autoThirds.has(team) ? ' qualified-third' : '') + statusClass;
        row.innerHTML = `<span class="position-badge">${idx + 1}</span><span class="team-flag ${getTeamFlagClass(team)}"></span><span class="team-name">${escapeHtml(team)}</span><span class="group-total-points">${stat.pts} pts</span>`;
        card.appendChild(row);
      });
    }
    const hint = document.createElement('div'); hint.className = 'group-card-hint'; hint.textContent = 'Ver partidos'; card.appendChild(hint);
    card.addEventListener('click', () => openReadOnlyGroupResultsModal(entry, g));
    container.appendChild(card);
  });
}

function openReadOnlyGroupResultsModal(entry, group) {
  const viewer = document.getElementById('predictionViewer');
  const prediction = entry.prediction;
  const teams = (TEAMS_BY_GROUP[group] || []).map(t => t.name);
  const matches = getGroupMatchList(group);
  const predMatches = prediction.groupMatches?.[group] || {};
  const realMatches = RESULTS.groupMatches?.[group] || {};
  const standings = calculatePredictionGroupStandings(group, prediction);
  const autoThirds = new Set(prediction.thirdPlace || []);
  viewer.innerHTML = `
    <div class="group-results-editor group-results-readonly">
      <button type="button" class="toolbar-btn review-back-btn" id="backToPredictionReview">← Volver a ${escapeHtml(entry.name)}</button>
      <h3>GRUPO ${group}</h3>
      <div class="group-modal-team-grid"></div>
      <div class="group-modal-divider"></div>
      <h4 class="group-modal-section-title"><span>📅</span> PARTIDOS APOSTADOS</h4>
      <div class="group-match-list"></div>
      <div class="group-live-standings-wrap">
        <h4 class="group-modal-section-title"><span>🏆</span> CLASIFICACIÓN</h4>
        <div class="review-standings-compare review-standings-compare-with-points">
          <div class="review-standings-col"><div class="review-standings-label">Apostada</div><div class="group-modal-standings" id="predictedGroupStandings"></div></div>
          <div class="review-standings-points-col"><div class="review-standings-label">Puntos</div><div class="review-standings-points-list" id="predictedGroupPositionPoints"></div></div>
          <div class="review-standings-col"><div class="review-standings-label">Real</div><div class="group-modal-standings" id="realGroupStandings"></div></div>
        </div>
      </div>
      <div class="group-modal-info">Solo lectura: esto es lo que apostó en fase de grupos.</div>
    </div>
  `;
  const teamGrid = viewer.querySelector('.group-modal-team-grid');
  teams.forEach(team => {
    const box = document.createElement('div'); box.className = 'group-modal-team-card';
    box.innerHTML = `<span class="team-flag ${getTeamFlagClass(team)}"></span><span>${escapeHtml(team)}</span>`; teamGrid.appendChild(box);
  });
  const list = viewer.querySelector('.group-match-list');
  matches.forEach((match, index) => {
    const pred = getMatchResultFromMap(predMatches, match), real = getMatchResultFromMap(realMatches, match);
    const ph = parseGoalValue(pred.home), pa = parseGoalValue(pred.away), rh = parseGoalValue(real.home), ra = parseGoalValue(real.away);
    const resolved = rh !== null && ra !== null, exact = resolved && ph === rh && pa === ra;
    const outcome = resolved && ph !== null && pa !== null && getResultOutcome(ph, pa) === getResultOutcome(rh, ra);
    const matchPoints = getGroupMatchReviewPoints(ph, pa, rh, ra);
    const row = document.createElement('div');
    row.className = 'group-match-row review-match-row' + (exact ? ' review-correct' : '') + (!exact && outcome ? ' review-partial' : '') + (resolved && !outcome ? ' review-wrong' : '') + (!resolved ? ' review-pending' : '');
    row.innerHTML = `
      <div class="match-date-badge"><strong>${getMatchdayNumber(match, index)}</strong><span>${formatMatchDate(match)}</span></div>
      <div class="match-team match-team-left"><span class="team-flag ${getTeamFlagClass(match.team1)}"></span><span>${escapeHtml(match.team1)}</span></div>
      <div class="match-score-controls readonly-score-controls"><span class="readonly-score-box">${ph ?? 0}</span><span class="score-separator">-</span><span class="readonly-score-box">${pa ?? 0}</span></div>
      <div class="match-team match-team-right"><span>${escapeHtml(match.team2)}</span><span class="team-flag ${getTeamFlagClass(match.team2)}"></span></div>
      <div class="review-match-points-box" title="Puntos de este partido">+${matchPoints}pt</div>
      ${resolved ? `<div class="review-real-score">Real: ${rh}-${ra}</div>` : ''}
    `;
    list.appendChild(row);
  });
  const predictedStandingsDiv = viewer.querySelector('#predictedGroupStandings');
  const positionPointsDiv = viewer.querySelector('#predictedGroupPositionPoints');
  const realStandingsDiv = viewer.querySelector('#realGroupStandings');
  const realOrder = RESULTS.groups?.[group] || [];
  const realThirds = new Set(RESULTS.thirdPlace || []);
  const predOrder = standings.map(row => row.team);
  predictedStandingsDiv.innerHTML = standings.map((row, idx) => {
    const isThird = idx === 2, isFourth = idx === 3, eliminated = isFourth || (isThird && !autoThirds.has(row.team));
    const statusClass = realOrder.length ? getPredictionStandingReviewClass(row.team, idx, predOrder, autoThirds, realOrder, realThirds) : ' review-pending';
    return renderStandingRow({ team: row.team, idx, pts: row.pts, gf: row.gf, ga: row.ga, statusClass, extraClass: (eliminated ? ' eliminated' : '') + (isThird && autoThirds.has(row.team) ? ' qualified-third' : '') });
  }).join('');
  positionPointsDiv.innerHTML = standings.map((row, idx) => {
    const points = getPredictedGroupPositionPoints(row.team, idx, autoThirds, realOrder, realThirds);
    return `<div class="review-standing-points-row">${renderReviewPointsBadge(points, 'Puntos por esta posición')}</div>`;
  }).join('');
  realStandingsDiv.innerHTML = realOrder.map((team, idx) => {
    const realRow = calculateRealGroupStandingsFromResults(group).find(stat => stat.team === team) || { team, pts: 0, gf: 0, ga: 0 };
    const classified = idx < 2 || (idx === 2 && realThirds.has(team));
    return renderStandingRow({ team, idx, pts: realRow.pts, gf: realRow.gf, ga: realRow.ga, statusClass: classified ? ' review-correct' : ' review-wrong', extraClass: classified && idx === 2 ? ' qualified-third' : ' eliminated' });
  }).join('');
  document.getElementById('backToPredictionReview').addEventListener('click', () => renderPredictionReview(entry));
}

function buildKnockoutReviewState(source) {
  const oldState = JSON.parse(JSON.stringify(state));
  const oldTpAllocation = JSON.parse(JSON.stringify(tpAllocation || {}));
  state.groups = JSON.parse(JSON.stringify(source.groups || {}));
  state.thirdPlace = [...(source.thirdPlace || [])];
  state.groupMatches = JSON.parse(JSON.stringify(source.groupMatches || {}));
  state.knockoutResults = {};
  state.matchTeams = {};
  buildTPAllocation();
  computeMatchTeams();
  const knockout = source.knockout || {};
  function setExplicitMatch(item) {
    if (!item || item.match === undefined || item.match === null) return;
    const matchNum = Number(item.match);
    if (!Number.isFinite(matchNum)) return;
    if (item.team1 || item.team2) state.matchTeams[matchNum] = { team1: item.team1 || null, team2: item.team2 || null };
    if (item.winner) state.knockoutResults[matchNum] = item.winner;
  }
  function setWinnerIfPossible(match, team) {
    if (!match || !team) return;
    const mt = state.matchTeams[match.num] || {};
    if (mt.team1 === team || mt.team2 === team) { state.knockoutResults[match.num] = team; computeMatchTeams(); }
  }
  function applyRound(roundName, treeRound) {
    const explicitMatches = knockout.matches?.[roundName];
    if (Array.isArray(explicitMatches)) { explicitMatches.forEach(setExplicitMatch); return; }
    const winners = knockout[roundName] || [];
    winners.forEach(team => {
      const match = treeRound.find(m => { const mt = state.matchTeams[m.num] || {}; return mt.team1 === team || mt.team2 === team; });
      setWinnerIfPossible(match, team);
    });
  }
  applyRound('round32', KO_TREE.round32 || []);
  applyRound('round16', KO_TREE.round16 || []);
  applyRound('quarterfinals', KO_TREE.quarterfinals || []);
  applyRound('semifinals', KO_TREE.semifinals || []);
  applyRound('thirdPlace', KO_TREE.thirdPlace || []);
  applyRound('final', KO_TREE.final || []);
  if (KO_TREE.final?.[0] && !state.knockoutResults[KO_TREE.final[0].num]) setWinnerIfPossible(KO_TREE.final[0], knockout.final || knockout.champion || source.champion);
  if (KO_TREE.thirdPlace?.[0] && !state.knockoutResults[KO_TREE.thirdPlace[0].num]) setWinnerIfPossible(KO_TREE.thirdPlace[0], knockout.thirdPlace || knockout.thirdPlaceWinner || source.thirdPlaceWinner);
  const reviewState = JSON.parse(JSON.stringify(state));
  state.groups = oldState.groups; state.thirdPlace = oldState.thirdPlace;
  state.groupMatches = oldState.groupMatches; state.knockoutResults = oldState.knockoutResults;
  state.matchTeams = oldState.matchTeams; tpAllocation = oldTpAllocation;
  return reviewState;
}

function renderReviewKnockout(prediction) {
  const container = document.getElementById('reviewKnockout');
  container.innerHTML = `<div class="review-knockout-header"><h4 class="group-modal-section-title"><span>🏆</span> ELIMINATORIAS: APOSTADO</h4></div>`;
}

function renderReviewAwards(prediction) {
  const container = document.getElementById('reviewAwards');
  container.className = 'awards-section';
  container.innerHTML = '';
  const rows = [
    [`Bota de oro (${puntuaciones.premios.goldenBoot[0]}pt)`, prediction.awards?.goldenBoot?.[0], RESULTS.awards?.goldenBoot?.[0]],
    [`Bota de plata (${puntuaciones.premios.goldenBoot[1]}pt)`, prediction.awards?.goldenBoot?.[1], RESULTS.awards?.goldenBoot?.[1]],
    [`Bota de bronce(${puntuaciones.premios.goldenBoot[2]}pt)`, prediction.awards?.goldenBoot?.[2], RESULTS.awards?.goldenBoot?.[2]],
    [`Balón de oro (${puntuaciones.premios.goldenBall[0]}pt)`, prediction.awards?.goldenBall?.[0], RESULTS.awards?.goldenBall?.[0]],
    [`Balón de plata (${puntuaciones.premios.goldenBall[1]}pt)`, prediction.awards?.goldenBall?.[1], RESULTS.awards?.goldenBall?.[1]],
    [`Balón de bronce (${puntuaciones.premios.goldenBall[2]}pt)`, prediction.awards?.goldenBall?.[2], RESULTS.awards?.goldenBall?.[2]],
    [`Guante de oro (${puntuaciones.premios.goldenGlove[0]}pt)`, prediction.awards?.goldenGlove?.[0], RESULTS.awards?.goldenGlove?.[0]],
    [`Guante de plata (${puntuaciones.premios.goldenGlove[1]}pt)`, prediction.awards?.goldenGlove?.[1], RESULTS.awards?.goldenGlove?.[1]],
    [`Guante de bronce (${puntuaciones.premios.goldenGlove[2]}pt)`, prediction.awards?.goldenGlove?.[2], RESULTS.awards?.goldenGlove?.[2]]
  ];
  rows.forEach(([label, predicted, real]) => {
    const resolved = Boolean(real), correct = resolved && predicted === real, wrong = resolved && predicted !== real;
    const row = document.createElement('div');
    row.className = 'award-row' + (correct ? ' review-correct' : '') + (wrong ? ' review-wrong' : '') + (!resolved ? ' review-pending' : '');
    row.innerHTML = `<label>${label}:</label><div class="award-select" style="cursor:default;">${predicted || '---'}${resolved ? `<small style="display:block;font-weight:700;">Actual: ${real}</small>` : ''}</div>`;
    container.appendChild(row);
  });
}

function renderAll() {
  buildTPAllocation(); computeMatchTeams();
  renderGroups(); renderThirdPlace(); renderBracket(); renderAwardSelects(); loadLeaderboard();
}

function resetState() {
  GROUP_NAMES.forEach(g => { state.groups[g] = TEAMS_BY_GROUP[g].map(t => t.name); });
  state.groupMatches = {}; ensureAllGroupMatches(); updateAllGroupOrdersFromMatches();
  state.thirdPlace = []; state.knockoutResults = {}; state.matchTeams = {}; state.knockout = {};
  state.awards = { goldenBoot: ['', '', ''], goldenBall: ['', '', ''], goldenGlove: ['', '', ''] };
  fillAwards(state.awards); clearLocalPrediction(); renderAll();
  showToast('A tomar por culo.');
}

const FORM_ACTION = 'https://docs.google.com/forms/d/e/'+FORM_ID+'/formResponse';

function submitPrediction() { openNameModal(); }

function openNameModal() {
  const modal = document.getElementById('nameModal');
  const input = document.getElementById('playerNameInput');
  modal.style.display = 'flex';
  input.value = '';
  setTimeout(() => input.focus(), 50);
}

function closeNameModal() { document.getElementById('nameModal').style.display = 'none'; }

async function confirmSubmitPrediction() {
  const input = document.getElementById('playerNameInput');
  const playerName = input.value.trim();
  if (!playerName) { showToast('Please enter your name.', true); input.focus(); return; }
  const payload = buildPayload();
  payload.name = playerName;
  payload._submittedAt = new Date().toISOString();
  const params = new URLSearchParams();
  params.append(ENTRY_ID, JSON.stringify(payload));
  closeNameModal();
  showLoading('Publicando...');
  try {
    await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString() });
    hideLoading(); fireConfetti();
    showToast('Listo, buena suerte. Puede tardar unos segundos en aparecer en el ranking.');
  } catch(e) { hideLoading(); showToast('Error. Inténtalo otra vez o avísame.', true); }
}

async function init() {
  showLoading('Loading tournament data...');
  const ok = await loadData();
  hideLoading();
  if (!ok) { showToast('Failed to load tournament data. Check connection and reload.', true); return; }
  const v = localStorage.getItem(LOCAL_STORAGE_VERSION_KEY);
  if (v !== LOCAL_STORAGE_VERSION) { localStorage.removeItem(LOCAL_STORAGE_PICKS_KEY); localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, LOCAL_STORAGE_VERSION); }
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
    });
  });
  document.getElementById('btnReset').addEventListener('click', () => { resetState(); computeMatchTeams(); renderAll(); });
  const btnScoringHelp = document.getElementById('btnScoringHelp');
  if (btnScoringHelp) btnScoringHelp.addEventListener('click', openScoringHelpModal);
  document.getElementById('btnSubmit').addEventListener('click', submitPrediction);
  document.getElementById('confirmNameSubmit').addEventListener('click', confirmSubmitPrediction);
  document.getElementById('cancelNameSubmit').addEventListener('click', closeNameModal);
  document.getElementById('playerNameInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') confirmSubmitPrediction();
    if (e.key === 'Escape') closeNameModal();
  });
  document.getElementById('closePredictionModal').addEventListener('click', closePredictionModal);
  document.getElementById('predictionModal').addEventListener('click', e => { if (e.target.id === 'predictionModal') closePredictionModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closePredictionModal(); closeAwardPickerModal(); } });
  restoreLocalPrediction(); fillAwards(state.awards); computeMatchTeams(); renderAll();
  document.querySelectorAll('#awardGb1,#awardGb2,#awardGb3,#awardBa1,#awardBa2,#awardBa3,#awardGg1,#awardGg2,#awardGg3').forEach(el => {
    el.addEventListener('input', saveLocalPredictionSoon);
    el.addEventListener('change', saveLocalPredictionSoon);
  });
  if (window.location.hash === '#leaderboard') document.querySelector('[data-tab="leaderboard"]').click();
}

document.addEventListener('DOMContentLoaded', init);
