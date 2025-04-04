
const player = new Plyr('#audioPlayer');
const playlist = [
  'chapitre1.mp3', 'chapitre2.mp3', 'chapitre3.mp3', 'chapitre4.mp3', 'chapitre5.mp3',
  'chapitre6.mp3', 'chapitre7.mp3', 'chapitre8.mp3', 'chapitre9.mp3', 'chapitre10.mp3', 'chapitre11.mp3',
  'mentions_legales.mp3'
];
const playlistTitles = [
  'Introduction - NOTRE-DAME : UNE SYMPHONIE DE PIERRE ET DE LUMIÈRE',
  'Chapitre 1 - HISTOIRE DE NOTRE-DAME DE PARIS : DE LA CONSTRUCTION À L\'ACHÈVEMENT',
  'Chapitre 2 - ÉVÉNEMENTS MARQUANTS : LA CATHÉDRALE COMME TÉMOIN DE L\'HISTOIRE',
  'Chapitre 3 - ARCHITECTURE GOTHIQUE : LES CARACTÉRISTIQUES ET LE STYLE DE NOTRE-DAME',
  'Chapitre 4 - L\'INCENDIE DU 15 AVRIL 2019 : CAUSES ET CONSÉQUENCES',
  'Chapitre 5 - MOBILISATION INTERNATIONALE POUR LA RESTAURATION : DONS ET SOUTIEN',
  'Chapitre 6 - LES TRAVAUX DE RESTAURATION : TECHNIQUES ET DÉFIS RENCONTRÉS',
  'Chapitre 7 - NOTRE-DAME DANS LA LITTÉRATURE ET L\'ART : UNE SOURCE D\'INSPIRATION',
  'Chapitre 8 - VISITER NOTRE-DAME : UN GUIDE POUR LES VISITEURS',
  'Chapitre 9 - NOTRE-DAME AUJOURD\'HUI : RESTAURATION ET AVENIR',
  'Conclusion - L\'HÉRITAGE DE NOTRE-DAME DE PARIS',
  'Mentions légales'
];

let current = 0;
const audioPlayer = document.getElementById('audioPlayer');
const titleElement = document.getElementById('currentTitle');

function loadTrack(index) {
  if (index >= playlist.length) {
    titleElement.textContent = "Lecture terminée.";
    return;
  }
  current = index;
  audioPlayer.src = playlist[current];
  titleElement.textContent = playlistTitles[current];
  player.play();
}

audioPlayer.addEventListener('ended', () => {
  loadTrack(current + 1);
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#playlist a');
  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      loadTrack(index);
    });
  });
  loadTrack(0);
});


function updateActiveLink() {
  const links = document.querySelectorAll('#playlist a');
  links.forEach((link, index) => {
    if (index === current) {
      link.style.fontWeight = 'bold';
    } else {
      link.style.fontWeight = 'normal';
    }
  });
}

audioPlayer.addEventListener('loadeddata', () => {
  updateActiveLink();
});
