# Duèmes-2

## I. Description du projet

Développement d'un site en html, javascript et css pour publier numériquement la correspondance littéralopicturale que Yan Pavlik et Linus Kessler ont entretenus durant l'année 2020. Le projet prend pour exemple l'application *Phallaina* sortie en 2016 afin de développer une lecture numérique verticale du recueil. </br>
La volonté de ce projet est d'utiliser le code pour mettre en valeur les liens entre les textes de Linus Kessler et les dessins de Yan Pavlik. La dynamique de l'écriture du petit receuil "DUEMES" consistait en effet en un dialogue entre images et textes : l'un propose, l'autre répond. Les textes et les images sont ainsi intimement liés dans le processus de création, l'un dépendant de l'autre dans sa genèse. L'animation permise par la librairie GSAP donne les outils de ce développement.</br>
L'enjeu principal de ce projet est de se plonger dans le maniement de GSAP pour développer un script original pour créer une dynamique de lecture analogue à celle de Phallaina. Notre envie est avant tout de comprendre et de s'approprier ces outils à travers le cas concret de ce projet. 
</br>

## II. Illustrations

<img width="775" alt="Capture d’écran 2023-12-05 à 10 46 47" src="https://github.com/numerikdavlok/DUEMES-2/assets/73711024/a5162594-9fa8-4832-9921-44135db1005a"></br>
<img width="783" alt="Capture d’écran 2023-12-05 à 10 47 20" src="https://github.com/numerikdavlok/DUEMES-2/assets/73711024/db09b733-c7e0-47dd-9cc2-4574047743b3"></br>
<img width="761" alt="Capture d’écran 2023-12-05 à 10 53 19" src="https://github.com/numerikdavlok/DUEMES-2/assets/73711024/db81f7e8-781e-45ef-84e8-0d34fca16b3e"></br>

## III. Procédure d'installation

7h00 : 4e (foot) : apprendre à utiliser les motionpath pour animer le texte avec gsap sans suivre un path , 5e (parasol), 6e (dark), 7e (ass), 8e (porn) et 9e (dickception), finitions et tentative d'optimisation pour le responsive (meilleure affichage pour tous les écrans) </br>
3h : 2ème page (hands) Dessiner le path selon l'image sur inkscape, copier coller le code svg du path dans une balise svg directement dans la page html et mettre le texte, animer la propriété startOffset, animer le autoalpha pour faire disparaitre ou apparaitre les choses, appliqué à la 3ème page (fishing) </br>
2h30 : recherche sur comment animer du texte d'une manière plus complexe, compréhension de la technique qui suit le long d'un path </br>
1h30 : 1ère page (cliff) : finalisation, mise en place d'une façon générale d'enchainer les pages (en utilisant la balise section html) </br>
1h30 : Amélioration de la compréhension du scrolltrigger et du concept de timeline et d'animation from et to de GSAP, 1ère page (cliff) </br>
2h : Compréhension du ScrollTrigger, 1ère page(cliff) : animation du texte, creation du debut de la page, modfication de cliff.svg dans inkscape, début de recherche sur la façon d'animer hand (en rond) </br>

## IV.  modules, librairies
- Indesign pour la vectorisation des images
- GSAP : en particulier ScrollTrigger pour l'effet Parallax et MotionPath pour les mouvements de texte ainsi que les fonctions de base avec timeline.
https://gsap.com/docs/v3/Installation/ ; https://greensock.com/forums/topic/24712-how-to-create-parallax-effect-with-gsap/, https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTrigger ; https://gsap.com/docs/v3/Plugins/MotionPathPlugin
- L'application Inkscape pour déssiner les trajets vectoriels des textes
https://inkscape.org/release/inkscape-1.3.2/

## V. Licenses et copyright
Le livres "DUEMES" a été publié à compte d'auteur. Les auteurs n'étant autres que mon frère Yan Pavlik et l'ancien collaborateur de ce projet Linus Kessler, les droits d'utilisation des textes et des images m'ont été cédés pour ce projet. 

## VI. Contexte de développement
Ce projet a été développé dans le cadre du cours Publication Numérique dispensé par Isaac Pante (SLI, Lettres, UNIL)

