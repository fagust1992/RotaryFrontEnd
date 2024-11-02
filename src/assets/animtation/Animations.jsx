import React, { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.num');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-val');
        const count = +counter.innerText.replace(/[^0-9]/g, '');

        const speed = 900; // Cambiar la velocidad de la animación aquí
        const increment = target / speed;

        if(count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return null;
};

export default Animation;

