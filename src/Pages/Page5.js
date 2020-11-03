import React from "react";
import PageHeader from "./PageHeader";

import "./Pages.css";

export default function Page5({ pageName }) {
  return (
    <div className="page-container">
      <PageHeader pageName={pageName} />
      <div className="page-copy">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
        quis lectus ut consequat. Aenean pulvinar, tellus nec euismod ultrices,
        lorem nulla sollicitudin tellus, sit amet tristique purus quam porta
        magna. Suspendisse sodales suscipit aliquet. Phasellus dapibus purus
        lacus, in pellentesque nulla imperdiet non. Mauris et cursus neque.
        Fusce id dolor interdum, congue magna sit amet, maximus elit. Donec
        laoreet libero sapien, at fermentum mauris commodo vitae. Nullam nec
        tristique orci, ac dignissim dolor. Integer nec suscipit turpis, a
        mollis arcu. Nulla et velit non ante consequat placerat sit amet non
        purus. Aliquam at fermentum mi. Donec feugiat mauris arcu, ut commodo ex
        suscipit in. Integer dictum libero felis, in accumsan diam dictum in. Ut
        laoreet, quam quis commodo porta, orci magna imperdiet est, ut
        vestibulum arcu diam quis velit. Aenean quis leo commodo, semper lorem
        in, ultricies leo. Donec quis tortor quam. Nunc facilisis libero ex, in
        commodo nulla malesuada et. Proin vitae blandit ex. Ut blandit imperdiet
        blandit. Nunc finibus nec tortor eu tempus. Nunc vel odio dui.
      </div>
    </div>
  );
}
