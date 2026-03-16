// Aufbau Objekt im Array

// Das Datenmodell sollte alles enthalten, was deine Oberfläche später verändern oder anzeigen möchte.

// image: './assets/img/dracula.jpeg'
// Deine Buchkarte zeigt ein Cover.
// Das Bild gehört also logisch zum Buch selbst.
// Wenn dein Rendering-Code später durch das Array läuft, kann er einfach sagen: nimm das Bild, das im Buchobjekt steht.
// Ohne dieses Feld müsste dein Code irgendwo anders erraten, welches Bild zu welchem Buch gehört.

//likes: 0
//Das ist einfach der Zähler. Wenn jemand das Herz klickt, wird diese Zahl erhöht oder reduziert.
// Das Objekt speichert also den aktuellen Zustand des Buchs.

//liked: false
//Das ist ein kleiner, aber wichtiger Unterschied zum Zähler.
// Diese Variable merkt sich, ob der aktuelle Zustand geliked ist oder nicht.
// Stell dir vor, jemand klickt das Herz zweimal. Beim ersten Klick soll der Like hochgehen, beim zweiten wieder runter.
// Der Code kann das nur entscheiden, wenn er weiß, ob das Buch gerade schon geliked ist.

//comments: []
//Kommentare sind eine Liste, keine einzelne Sache. Deshalb ist es ein Array.
// Wenn jemand einen Kommentar schreibt, wird einfach ein neuer Eintrag in dieses Array gelegt.
// Später kann dein Code dann durch dieses Array laufen und alle Kommentare rendern.

comments: [
  {
    name: 'Max',
    text: 'Mega Buch',
  },
  {
    name: 'Moritz',
    text: 'Hat sehr viel Spaß gemacht',
  },
];

// Comments muss ein array sein, damit wir mehree Kommentare speichern können

// Dein Inputfeld spielt später nur eine Rolle beim Hinzufügen eines neuen Kommentars. Der Ablauf wird ungefähr so sein:
//Der Benutzer schreibt etwas ins Inputfeld →
// dein Code liest den Text aus → dein Code erstellt ein neues Kommentarobjekt →
// dieses Objekt wird ins comments-Array gelegt.
