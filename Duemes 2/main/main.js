// GSAP 
// timeline <- l'animation se déroule dedans, 
// scrollTrigger <- générer un timeline depuis le scroll lié à un élément
// from ou to



window.onload = function(){ // Attendre que la page soit chargée 
  // charger les plugins nécessaires
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  
  // Page 1
  // Cliff  


  var cliffAnimTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cliff",
      scrub: 1,
      pin: true, // fixe la vue le temps d'arriver à "end", ici c'est 4 écrans (+=400%)
      start: "top 25",
      end: "+=400%"
    }
  });

  cliffAnimTl .from("#cliff1", {y:'-20vh', rotation:-10}) // penché
              .from("#cliff2", {y:'-20vh', rotation:10}) // penché
              .to("html", {"--cliffBgPos" : 'center bottom 0vh'}) // faire apparaitre du bas
              .to("#cliff1,#cliff2", {y: 690, rotation:20, duration:2}) // faire tomber et pencher
              .to("#cliff1,#cliff2", {y: "+=30", rotation:10}) // faire tomber et pencher
              .to("#cliff", {autoAlpha: 0, duration:2}) // disparition
              ;

  /*
  // premier essai
  cliffAnimTl .from("#cliff .text", {y:'-200vh', ease: "power2"})
              .to("#cliff1,#cliff2", {y: '100vh', rotation:90, transformOrigin:"bottom", ease: "power2"})
              .to("#cliff", {autoAlpha: 0, ease: "power2"}, '-=50%') ;
  */

  // Page 2

  // je dois créer un path dans le svg, qui tourne autour du cercle : hands_path_for_text
  // je l'ai sorti du svg et l'ai intégré directement dans le html pour pouvoir agir dessus via l'id "handsTextPath"
  // je me suis inspiré de https://greensock.com/forums/topic/26623-make-a-circle-out-of-text/?do=findComment&comment=129632
  // positionnement vertical grace à flex et petit ajustement avec lees margin left et top

  // Hand
  var handAnimTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hand",
      scrub: 1,
      pin: true,
      start: "top 25",
      end: "+=500%"
    }
  });


  handAnimTl.to("#handsTextPath",{ 
    attr: { startOffset: "110%" },
    ease: "power1.inOut"
  }).to("#hand", {autoAlpha: 0}); // disparition;

  //handAnimTl.to("html", {"--handBgPos" : 'center bottom 25vh'});
  /*
  handAnimTl.from("#hand", {autoAlpha:0})
            .to("#hand1", {left:'50vh'});*/




// Page 3

//Fishing

// J'ai à nouveau joué avec les path SVG, créés dans inkscape, puis sortis

var fishAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#fishing",
    scrub: 1,
    pin: true,
    start: "top 25",
    end: "+=400%"
  }
});


fishAnimTl.to("#fishTextPath1",{ attr: { startOffset: "83%" }, ease: "power1.inOut"})
          .to("#fishTextPath2",{ attr: { startOffset: "83%" }, ease: "power1.inOut"})
          .to("#fishTextPath3",{ attr: { startOffset: "83%" }, ease: "power1.inOut"})
          .to("#fishTextPath4",{ attr: { startOffset: "81%" }, ease: "power1.inOut"})
          .to("#fishing", {autoAlpha: 0, duration:2});

// Page 4
// https://greensock.com/motionpath/
// Je définis des points de passages sous forme d'un motionPath

gsap.set(".foot_text", {x:280,y:45});

var footAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#bigFoot",
    scrub: 1,
    pin: true,
    start: "top 25",
    end: "+=400%"
  }
});

footAnimTl.to("#bigFootText1",{autoAlpha: 1}).to("#bigFootText1", {
  motionPath:{path:
    [{x:30,y:220,rotation:15},
    {x:250,y:300,rotation:-15},
    {x:60,y:400,rotation:10},
    {x:40,y:440,rotation:0}]
    }})
.to("#bigFootText2",{autoAlpha: 1}).to("#bigFootText2", {
  motionPath:{path:
    [{x:30,y:220,rotation:15},
    {x:250,y:300,rotation:-15},
    {x:60,y:400,rotation:10},
    {x:40,y:460,rotation:0}]
    }})
.to("#bigFootText3",{autoAlpha: 1}).to("#bigFootText3", {
  motionPath:{path:
    [{x:30,y:220,rotation:15},
    {x:250,y:300,rotation:-15},
    {x:60,y:400,rotation:10},
    {x:40,y:480,rotation:0}]
}})
.to("#bigFoot", {autoAlpha: 0, duration:2});

//footAnimTl.to("#bigFootText1", {motionPath:{path:"#pathFoot1", align: "#pathFoot1",alignOrigin: [0.5, 0.5], autoRotate: true}}));

// Page 5
// Mouvements texte sur parasol
// Paths SVG
//gsap.to(".para1", {duration: 2, x: 300});

var paraAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#parasol",
    scrub: 1,
    pin: true,
    start: "top 25",
    end: "+=400%"
  }
});

paraAnimTl.to("#paraTextPath1",{ attr: { startOffset: "73%" }, ease: "power1.inOut"})
          .to("#paraTextPath2",{ attr: { startOffset: "68%" }, ease: "power1.inOut"}, "-=0.2")
          .to("#paraTextPath3",{ attr: { startOffset: "68%" }, ease: "power1.inOut"}, "-=0.3")
          .to("#paraTextPath4",{ attr: { startOffset: "76%" }, ease: "power1.inOut"}, "-=0.4")
          .to("#paraTextPath5",{ attr: { startOffset: "81%" }, ease: "power1.inOut"}, "-=0.2")
          .to("#paraTextPath6",{ attr: { startOffset: "76%" }, ease: "power1.inOut"}, "-=0.3")
          .to("#paraTextPath7",{ attr: { startOffset: "81%" }, ease: "power1.inOut"}, "-=0.4")
          .to("#parasol", {autoAlpha: 0, duration:2});

// Page 6
// Plus ou moins comme la 4 
var darkAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#dark",
    scrub: 1,
    pin: true,
    start: "top 25",
    end: "+=400%"
  }
});

gsap.set("#darkText1", {x:400, y:120, rotation:-5});
gsap.set("#darkText2", {x:318, y:335, rotation:35});
gsap.set("#darkText3", {x:360, y:520, rotation:-35});
gsap.set("#darkText4", {x:310, y:690, rotation:60});

darkAnimTl.to("#dark", {autoAlpha: 1})
.to("#darkText1",{autoAlpha: 1})
.to("#darkText2",{autoAlpha: 1})
.to("#darkText3",{autoAlpha: 1})
.to("#darkText4",{autoAlpha: 1})
.to("#dark", {autoAlpha: 0, duration:2});

// Page 7
// Jouer avec la position et le scale 
var assAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#ass",
    scrub: 1,
    pin: true,
    start: "top 25",
    end: "+=600%"
  }
});
/*
ass_path = [{x:380,y:200},{x:360,y:80},{x:180,y:100},{x:90,y:240}];
*/

gsap.set("#ass_path text", {x:630, y:150,scale:0});

assAnimTl.to(["#ass","#ass_path text"], {autoAlpha: 1})
.to("#assText1", {x:90,y:240,scale:1})
.to("#assText2", {x:100,y:270,scale:1})
.to("#assText3", {x:100,y:300,scale:1})
.to("#assText4", {x:90,y:350,scale:1})
.to("#assText5", {x:100,y:380,scale:1})
.to("#assText6", {x:100,y:410,scale:1})
.to("#assText7", {x:90,y:460,scale:1})
.to("#assText8", {x:100,y:490,scale:1})
.to("#ass", {autoAlpha: 0, duration:2});

// Page 8

var pornAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#porn",
    scrub: 1,
    pin: true,
    start: "top 25",
    end: "+=600%"
  }
});
/*
ass_path = [{x:380,y:200},{x:360,y:80},{x:180,y:100},{x:90,y:240}];
*/

gsap.set("#porn_path text", {x:450, y:450,scale:0});

pornAnimTl.to(["#porn","#porn_path text"], {autoAlpha: 1})
//.to("#pornText1", {motionPath:{path:[{x:245,y:211,scale:0.5},{x:530,y:30,scale:1}]}})
.to("#pornText1", {x:210,y:164,scale:0.5}).to("#pornText1", {x:450,y:30,scale:1})
.to("#pornText2", {x:210,y:164,scale:0.5}).to("#pornText2", {x:450,y:60,scale:1})
.to("#pornText3", {x:210,y:164,scale:0.5}).to("#pornText3", {x:450,y:90,scale:1})
.to("#pornText4", {x:210,y:164,scale:0.5}).to("#pornText4", {x:450,y:120,scale:1})
.to("#pornText5", {x:210,y:164,scale:0.5}).to("#pornText5", {x:100,y:650,scale:1})
.to("#pornText6", {x:210,y:164,scale:0.5}).to("#pornText6", {x:100,y:680,scale:1})
.to("#pornText7", {x:210,y:164,scale:0.5}).to("#pornText7", {x:100,y:710,scale:1})
.to("#pornText8", {x:210,y:164,scale:0.5}).to("#pornText8", {x:100,y:740,scale:1})
.to("#porn", {autoAlpha: 0, duration:2});

// Page 9

var dickAnimTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#dickception",
    scrub: 1,
    pin: true,
    start: "top 25",
    end: "+=400%"
  }
});

gsap.set("#dickception_path text", {x:350, y:300,scale:0.01,transformOrigin:"50% 50%"});

dickAnimTl
.to("#dickceptionText1", {scale:5,y:"+=600"})
.to("#dickceptionText2", {scale:5,y:"+=600"})
.to("#dickceptionText3", {scale:5,y:"+=600"})
.to("#dickception", {autoAlpha: 0, duration:2});

};