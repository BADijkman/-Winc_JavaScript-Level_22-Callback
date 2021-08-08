const huiswerkMaken = (vak, callback) => {
  console.log("ok ik ga nu " + vak + " uitvoeren");
  setTimeout(() => {
    console.log(`herhaling ok ik ga nu ${vak} uitvoeren`);
  }, 3000);

  callback();
};

const klaarMetHuiswerk = () => {
  console.log("klaar met huiswerk");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);
