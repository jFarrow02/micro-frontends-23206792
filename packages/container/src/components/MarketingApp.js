import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory(); // copy of the same history object used by browser and `container`

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        // console.log(nextPathname); // "/pricing"

        // Avoid infinite navigation loop
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname); // navigate to new path
        }
      },
    });

    // Set up listener on Browser history object
    // Note that both Browser history and createMemoryHistory
    // object in `marketing` have the same `listen` function
    history.listen(onParentNavigate);
  }, []); // run useEffect once upon render

  return <div ref={ref} />;
};
