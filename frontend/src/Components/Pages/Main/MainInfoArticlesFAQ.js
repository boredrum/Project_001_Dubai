import React, { useState } from "react";

function MainInfoArticlesFAQ() {

  const [isDroppedItem1, setIsDroppedItem1] = useState(false);
  const [isDroppedItem2, setIsDroppedItem2] = useState(false);
  const [isDroppedItem3, setIsDroppedItem3] = useState(false);
  const [isDroppedItem4, setIsDroppedItem4] = useState(false);
  const [isDroppedItem5, setIsDroppedItem5] = useState(false);

  return (
    <div id="info_FAQ">
      <h1>
      FAQ
      </h1>
      <div id="info_FAQ_1" onClick={() => setIsDroppedItem1(!isDroppedItem1)}>
        <h2 className={isDroppedItem1 ? "h2_active" : undefined}>
        The largest and oldest Quotations Page on the Web with about 30 categories
        </h2>
        {isDroppedItem1 && (
          <div id="info_FAQ_1_drop">
            <p>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit 
            amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, 
            sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, 
            nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat 
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. 
            Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium 
            tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra 
            consequat. Nunc in venenatis orci.
            </p>
          </div>
        )}
      </div>
      <div id="info_FAQ_2" onClick={() => setIsDroppedItem2(!isDroppedItem2)}>
        <h2 className={isDroppedItem2 ? "h2_active" : undefined}>
        A huge collection of inspirational quotes, thoughts of greatest minds in history
        </h2>
        {isDroppedItem2 && (
          <div id="info_FAQ_2_drop">
            <p>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit 
            amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, 
            sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, 
            nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat 
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. 
            Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium 
            tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra 
            consequat. Nunc in venenatis orci.
            </p>
          </div>
        )}
      </div>
      <div id="info_FAQ_3" onClick={() => setIsDroppedItem3(!isDroppedItem3)}>
        <h2 className={isDroppedItem3 ? "h2_active" : undefined}>
        Quotations from the great works of literature
        </h2>
        {isDroppedItem3 && (
          <div id="info_FAQ_3_drop">
            <p>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit 
            amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, 
            sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, 
            nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat 
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. 
            Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium 
            tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra 
            consequat. Nunc in venenatis orci.
            </p>
          </div>
        )}
      </div>
      <div id="info_FAQ_4" onClick={() => setIsDroppedItem4(!isDroppedItem4)}>
        <h2 className={isDroppedItem4 ? "h2_active" : undefined}>
        Read quotes and sayings from famous people in history
        </h2>
        {isDroppedItem4 && (
          <div id="info_FAQ_4_drop">
            <p>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit 
            amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, 
            sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, 
            nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat 
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. 
            Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium 
            tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra 
            consequat. Nunc in venenatis orci.
            </p>
          </div>
        )}
      </div>
      <div id="info_FAQ_5" onClick={() => setIsDroppedItem5(!isDroppedItem5)}>
        <h2 className={isDroppedItem5 ? "h2_active" : undefined}>
        Collected quotes from Albert Einstein
        </h2>
        {isDroppedItem5 && (
          <div id="info_FAQ_5_drop">
            <p>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit 
            amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, 
            sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, 
            nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat 
            placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. 
            Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium 
            tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra 
            consequat. Nunc in venenatis orci.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainInfoArticlesFAQ;
